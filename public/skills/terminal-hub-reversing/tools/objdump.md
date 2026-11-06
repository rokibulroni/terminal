# objdump

> Displays information about object files: headers, sections, symbols and disassembly. Part of GNU binutils.

- Category: Reverse Engineering
- Commands: 17
- Page: https://terminal.rokibulroni.com/tool/reversing/objdump
- Homepage: https://www.gnu.org/software/binutils/
- Documentation: https://man7.org/linux/man-pages/man1/objdump.1.html
- Tags: disassembly, ELF, binutils

## Install

- apt: `sudo apt install binutils`
- brew: `brew install binutils`

## Headers

### objdump -f <binary>

```bash
objdump -f <binary>
```

Example:

```bash
objdump -f ./a.out
```

File header: architecture, flags and entry point.

### objdump -h <binary>

```bash
objdump -h <binary>
```

Example:

```bash
objdump -h ./a.out
```

Section headers with sizes, addresses and flags.

### objdump -x <binary>

```bash
objdump -x <binary>
```

Example:

```bash
objdump -x ./a.out
```

All headers, including program headers and dynamic section.

### objdump -p <binary>

```bash
objdump -p <binary>
```

Example:

```bash
objdump -p ./a.out | grep NEEDED
```

Private headers; filtered to NEEDED it lists required shared libraries.


## Symbols

### objdump -t <binary>

```bash
objdump -t <binary>
```

Example:

```bash
objdump -t ./a.out
```

The symbol table (empty if the binary is stripped).

### objdump -T <binary>

```bash
objdump -T <binary>
```

Example:

```bash
objdump -T ./a.out
```

Dynamic symbols — imported and exported functions.

### objdump -R <binary>

```bash
objdump -R <binary>
```

Example:

```bash
objdump -R ./a.out
```

Dynamic relocations, including GOT entries.


## Disassembly

### objdump -d <binary>

```bash
objdump -d <binary>
```

Example:

```bash
objdump -d ./a.out
```

Disassembles executable sections.

### objdump -d -M intel <binary>

```bash
objdump -d -M intel <binary>
```

Example:

```bash
objdump -d -M intel ./a.out
```

Intel syntax.

### objdump -d --disassemble=<symbol> <binary>

```bash
objdump -d --disassemble=<symbol> <binary>
```

Example:

```bash
objdump -d --disassemble=main ./a.out
```

Only one function.

### objdump -S <binary>

```bash
objdump -S <binary>
```

Example:

```bash
objdump -S ./debug_build
```

Interleaves source code when debug info exists.

### objdump -D <binary>

```bash
objdump -D <binary>
```

Example:

```bash
objdump -D ./a.out
```

Disassembles every section, including data.

### objdump -d --start-address=<a> --stop-address=<b> <binary>

```bash
objdump -d --start-address=<a> --stop-address=<b> <binary>
```

Example:

```bash
objdump -d --start-address=0x401000 --stop-address=0x401100 ./a.out
```

A specific address range.

### objdump -D -b binary -m <arch> <file>

```bash
objdump -D -b binary -m <arch> <file>
```

Example:

```bash
objdump -D -b binary -m i386:x86-64 shellcode.bin
```

Disassembles raw bytes such as shellcode.


## Data

### objdump -s -j <section> <binary>

```bash
objdump -s -j <section> <binary>
```

Example:

```bash
objdump -s -j .rodata ./a.out
```

Hex and ASCII dump of one section.

### objdump -d <binary> | grep -c "call"

```bash
objdump -d <binary> | grep -c "call"
```

Counts call instructions — a crude complexity measure.

### objdump -d ./<file>.o | grep -Po "\s\K[a-f0-9]{2}(?=\s)" | tr -d "\n"

```bash
objdump -d ./<file>.o | grep -Po "\s\K[a-f0-9]{2}(?=\s)" | tr -d "\n"
```

Example:

```bash
objdump -d ./shell.o | grep -Po "\s\K[a-f0-9]{2}(?=\s)" | tr -d "\n"
```

Extracts opcode bytes from an object file as a hex string.

## Related tools

- [strings](https://terminal.rokibulroni.com/tool/forensics/strings)
- [radare2](https://terminal.rokibulroni.com/tool/reversing/radare2)
- [GDB](https://terminal.rokibulroni.com/tool/reversing/gdb)
