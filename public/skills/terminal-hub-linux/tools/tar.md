# tar

> Creates and extracts archives, with gzip, bzip2, xz or zstd compression.

- Category: Linux
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/linux/tar
- Homepage: https://www.gnu.org/software/tar/
- Documentation: https://www.gnu.org/software/tar/manual/tar.html
- Tags: archives, compression, backups

## Install

- apt: `sudo apt install tar`
- brew: `brew install gnu-tar`

## Creating

### tar -cvf <archive>.tar <paths>

```bash
tar -cvf <archive>.tar <paths>
```

Example:

```bash
tar -cvf backup.tar /etc /home/alice
```

Creates an uncompressed archive. c = create, v = verbose, f = file name.

### tar -czvf <archive>.tar.gz <paths>

```bash
tar -czvf <archive>.tar.gz <paths>
```

Example:

```bash
tar -czvf site.tar.gz /var/www
```

gzip compression.

### tar -cJvf <archive>.tar.xz <paths>

```bash
tar -cJvf <archive>.tar.xz <paths>
```

Example:

```bash
tar -cJvf logs.tar.xz /var/log
```

xz compression: smaller but slower.

### tar --zstd -cvf <archive>.tar.zst <paths>

```bash
tar --zstd -cvf <archive>.tar.zst <paths>
```

Example:

```bash
tar --zstd -cvf data.tar.zst data/
```

zstd compression: fast and small.

### tar -czvf <archive> --exclude=<pattern> <dir>

```bash
tar -czvf <archive> --exclude=<pattern> <dir>
```

Example:

```bash
tar -czvf src.tar.gz --exclude=node_modules --exclude=.git project/
```

Leaves out matching paths.

### tar -czpf <archive> -C <dir> .

```bash
tar -czpf <archive> -C <dir> .
```

Example:

```bash
tar -czpf etc.tar.gz -C /etc .
```

Archives a directory’s contents with relative paths and preserved permissions.


## Extracting

### tar -xvf <archive>

```bash
tar -xvf <archive>
```

Example:

```bash
tar -xvf backup.tar
```

Extracts into the current directory. GNU tar detects compression automatically.

### tar -xzvf <archive> -C <dir>

```bash
tar -xzvf <archive> -C <dir>
```

Example:

```bash
tar -xzvf site.tar.gz -C /tmp/restore
```

Extracts into a specific directory.

### tar -xvf <archive> <path>

```bash
tar -xvf <archive> <path>
```

Example:

```bash
tar -xvf backup.tar etc/hosts
```

Extracts a single file.

### tar -xvf <archive> --strip-components=1

```bash
tar -xvf <archive> --strip-components=1
```

Example:

```bash
tar -xvf tool-1.2.tar.gz --strip-components=1
```

Drops the top-level directory from extracted paths.


## Inspecting

### tar -tvf <archive>

```bash
tar -tvf <archive>
```

Example:

```bash
tar -tvf backup.tar.gz
```

Lists contents without extracting. Always check archives from untrusted sources for ../ paths first.

### tar -df <archive>

```bash
tar -df <archive>
```

Compares an archive against the file system and reports differences.

### tar -czf - <dir> | ssh <host> "tar -xzf - -C <dest>"

```bash
tar -czf - <dir> | ssh <host> "tar -xzf - -C <dest>"
```

Example:

```bash
tar -czf - project | ssh backup "tar -xzf - -C /srv"
```

Streams a directory to another machine over SSH without a temporary file.

## Related tools

- [cp](https://terminal.rokibulroni.com/tool/linux/cp)
- [find](https://terminal.rokibulroni.com/tool/linux/find)
