/**
 * Minimal, dependency-free archive writers used to package agent skills.
 * Output is deterministic (fixed timestamps, sorted input) so rebuilding
 * the same data produces byte-identical archives.
 */
import { deflateRawSync, gzipSync } from 'node:zlib';

export interface ArchiveEntry {
  /** Path inside the archive, forward slashes, no leading slash. */
  path: string;
  content: string | Uint8Array;
}

const toBytes = (c: string | Uint8Array) => (typeof c === 'string' ? Buffer.from(c, 'utf8') : Buffer.from(c));

// ───────────────────────────── ZIP ─────────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Uint8Array) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

// 2024-01-01 00:00:00 in MS-DOS format.
const DOS_TIME = 0;
const DOS_DATE = ((2024 - 1980) << 9) | (1 << 5) | 1;

/** Build a .zip (deflate) from the given entries. */
export function zip(entries: ArchiveEntry[]): Buffer {
  const locals: Buffer[] = [];
  const centrals: Buffer[] = [];
  let offset = 0;
  for (const e of [...entries].sort((a, b) => a.path.localeCompare(b.path))) {
    const name = Buffer.from(e.path, 'utf8');
    const data = toBytes(e.content);
    const crc = crc32(data);
    const packed = deflateRawSync(data, { level: 9 });

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(8, 8); // deflate
    local.writeUInt16LE(DOS_TIME, 10);
    local.writeUInt16LE(DOS_DATE, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(packed.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, name, packed);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(0x0314, 4); // made by: unix, 2.0
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(8, 10);
    central.writeUInt16LE(DOS_TIME, 12);
    central.writeUInt16LE(DOS_DATE, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(packed.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE((0o100644 << 16) >>> 0, 38); // -rw-r--r--
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);

    offset += local.length + name.length + packed.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cd.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}

// ───────────────────────────── tar.gz ─────────────────────────────
const MTIME = Math.floor(Date.UTC(2024, 0, 1) / 1000);

function tarHeader(path: string, size: number, type: '0' | '5') {
  const h = Buffer.alloc(512);
  let name = path;
  let prefix = '';
  if (Buffer.byteLength(name) > 100) {
    const cut = path.lastIndexOf('/', 154);
    prefix = path.slice(0, cut);
    name = path.slice(cut + 1);
    if (cut < 0 || Buffer.byteLength(name) > 100 || Buffer.byteLength(prefix) > 155) throw new Error(`tar: path too long: ${path}`);
  }
  const put = (s: string, off: number, len: number) => h.write(s, off, len, 'utf8');
  const oct = (n: number, len: number) => n.toString(8).padStart(len - 1, '0') + '\0';
  put(name, 0, 100);
  put(oct(type === '5' ? 0o755 : 0o644, 8), 100, 8);
  put(oct(0, 8), 108, 8);
  put(oct(0, 8), 116, 8);
  put(oct(size, 12), 124, 12);
  put(oct(MTIME, 12), 136, 12);
  put('        ', 148, 8);
  put(type, 156, 1);
  put('ustar\0', 257, 6);
  put('00', 263, 2);
  put(prefix, 345, 155);
  let sum = 0;
  for (const b of h) sum += b;
  put(sum.toString(8).padStart(6, '0') + '\0 ', 148, 8);
  return h;
}

/** Build a .tar.gz from the given entries (directories are added automatically). */
export function tarGz(entries: ArchiveEntry[]): Buffer {
  const parts: Buffer[] = [];
  const dirs = new Set<string>();
  for (const e of [...entries].sort((a, b) => a.path.localeCompare(b.path))) {
    const segs = e.path.split('/');
    for (let i = 1; i < segs.length; i++) {
      const d = segs.slice(0, i).join('/') + '/';
      if (!dirs.has(d)) {
        dirs.add(d);
        parts.push(tarHeader(d, 0, '5'));
      }
    }
    const data = toBytes(e.content);
    parts.push(tarHeader(e.path, data.length, '0'), data, Buffer.alloc((512 - (data.length % 512)) % 512));
  }
  parts.push(Buffer.alloc(1024));
  const gz = gzipSync(Buffer.concat(parts), { level: 9 });
  gz.writeUInt32LE(0, 4); // zero the gzip mtime for reproducibility
  return gz;
}
