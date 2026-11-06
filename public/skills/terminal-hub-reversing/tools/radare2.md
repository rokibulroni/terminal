# radare2

> A complete command-line reverse-engineering framework: disassemble, debug, patch and analyse binaries for many architectures.

- Category: Reverse Engineering
- Commands: 25
- Page: https://terminal.rokibulroni.com/tool/reversing/radare2
- Homepage: https://rada.re
- Documentation: https://book.rada.re
- Tags: disassembly, debugging, binary analysis

## Install

- apt: `sudo apt install radare2`
- brew: `brew install radare2`

## Opening

### r2 <binary>

```bash
r2 <binary>
```

Example:

```bash
r2 ./crackme
```

Opens a binary read-only.

### r2 -A <binary>

```bash
r2 -A <binary>
```

Example:

```bash
r2 -A ./crackme
```

Opens and runs full analysis (same as aaa) — slower but finds functions and references.

### r2 -d <binary>

```bash
r2 -d <binary>
```

Example:

```bash
r2 -d ./crackme
```

Opens in debug mode.

### r2 -w <binary>

```bash
r2 -w <binary>
```

Example:

```bash
r2 -w ./crackme
```

Opens writable so you can patch bytes.

### rabin2 -I <binary>

```bash
rabin2 -I <binary>
```

Example:

```bash
rabin2 -I ./crackme
```

Binary info without the shell: architecture, protections, language.

### rabin2 -z <binary>

```bash
rabin2 -z <binary>
```

Example:

```bash
rabin2 -z ./crackme
```

Strings from the data sections.

### rabin2 -i <binary>

```bash
rabin2 -i <binary>
```

Example:

```bash
rabin2 -i ./crackme
```

Imported functions.


## Analysis

### aaa

```bash
aaa
```

Analyses everything: functions, references and names.

### afl

```bash
afl
```

Lists functions with addresses and sizes.

### s <addr|symbol>

```bash
s <addr|symbol>
```

Example:

```bash
s main
```

Seeks to an address or symbol.

### pdf

```bash
pdf
```

Prints the disassembly of the current function.

### pdf @ <symbol>

```bash
pdf @ <symbol>
```

Example:

```bash
pdf @ sym.check_password
```

Disassembles a function without seeking.

### axt <addr>

```bash
axt <addr>
```

Example:

```bash
axt @ str.Correct_password
```

Cross-references to an address — who uses this string or calls this function.

### iz

```bash
iz
```

Strings in data sections; izz searches the whole binary.

### pdc

```bash
pdc
```

A pseudo-C view of the current function.

### / <string>

```bash
/ <string>
```

Example:

```bash
/ flag{
```

Searches for a string; /x searches hex bytes.


## Visual modes

### V

```bash
V
```

Visual mode; press p to cycle views and q to leave.

### VV

```bash
VV
```

Graph view of the current function’s control flow.


## Debugging and patching

### db <addr>

```bash
db <addr>
```

Example:

```bash
db main
```

Sets a breakpoint.

### dc

```bash
dc
```

Continues execution.

### ds

```bash
ds
```

Steps one instruction; dso steps over.

### dr

```bash
dr
```

Shows registers; dr rax=0 sets one.

### px <n> @ <addr>

```bash
px <n> @ <addr>
```

Example:

```bash
px 64 @ rsp
```

Hex dump of memory.

### wa <asm> @ <addr>

```bash
wa <asm> @ <addr>
```

Example:

```bash
wa nop @ 0x08048456
```

Writes assembled instructions (in -w mode).

### wx <hex> @ <addr>

```bash
wx <hex> @ <addr>
```

Example:

```bash
wx 9090 @ 0x08048456
```

Writes raw bytes.

## Related tools

- [Ghidra](https://terminal.rokibulroni.com/tool/reversing/ghidra)
- [GDB](https://terminal.rokibulroni.com/tool/reversing/gdb)
- [objdump](https://terminal.rokibulroni.com/tool/reversing/objdump)
