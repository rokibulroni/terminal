# GDB

> The GNU Debugger: set breakpoints, step through code, inspect memory and registers. Pair with GEF or pwndbg for exploit development.

- Category: Reverse Engineering
- Commands: 31
- Page: https://terminal.rokibulroni.com/tool/reversing/gdb
- Homepage: https://www.sourceware.org/gdb/
- Documentation: https://sourceware.org/gdb/current/onlinedocs/gdb.html/
- Tags: debugging, exploit development, ELF

## Install

- apt: `sudo apt install gdb`
- brew: `brew install gdb`

## Starting

### gdb <binary>

```bash
gdb <binary>
```

Example:

```bash
gdb ./vuln
```

Loads a program without running it.

### gdb -q --args <binary> <args>

```bash
gdb -q --args <binary> <args>
```

Example:

```bash
gdb -q --args ./vuln AAAA
```

Loads it with command-line arguments; -q skips the banner.

### gdb -p <pid>

```bash
gdb -p <pid>
```

Example:

```bash
sudo gdb -p 1337
```

Attaches to a running process.

### gdb <binary> <core>

```bash
gdb <binary> <core>
```

Example:

```bash
gdb ./server core.1337
```

Opens a core dump to see where a crash happened.

### gdb -batch -ex "<cmd>" <binary>

```bash
gdb -batch -ex "<cmd>" <binary>
```

Example:

```bash
gdb -batch -ex "disassemble main" ./vuln
```

Runs commands non-interactively and exits.


## Running

### run

```bash
run
```

Starts the program (r). run < input.txt feeds a file to stdin.

### start

```bash
start
```

Runs to the start of main and stops.

### continue

```bash
continue
```

Resumes until the next breakpoint (c).

### stepi

```bash
stepi
```

Executes one machine instruction, entering calls (si). nexti (ni) steps over calls.

### step / next

```bash
step / next
```

Source-level stepping into or over function calls when debug symbols exist.

### finish

```bash
finish
```

Runs until the current function returns.


## Breakpoints

### break <location>

```bash
break <location>
```

Example:

```bash
break main
```

Sets a breakpoint on a function, file:line or address (b *0x401136).

### break <function> if <condition>

```bash
break <function> if <condition>
```

Example:

```bash
break strcmp if $rdi != 0
```

Conditional breakpoint.

### watch <expr>

```bash
watch <expr>
```

Example:

```bash
watch *(int*)0x404040
```

Stops when a memory location changes.

### info breakpoints

```bash
info breakpoints
```

Lists breakpoints; delete <n> removes one.

### catch syscall <name>

```bash
catch syscall <name>
```

Example:

```bash
catch syscall execve
```

Stops on a system call.


## Inspecting

### info registers

```bash
info registers
```

All general-purpose registers (i r). info registers rip for one.

### x/<n><fmt> <addr>

```bash
x/<n><fmt> <addr>
```

Example:

```bash
x/32gx $rsp
```

Examines memory: n units in a format — x hex, s string, i instructions, g giant (8-byte) words.

### x/10i $rip

```bash
x/10i $rip
```

The next ten instructions.

### disassemble <function>

```bash
disassemble <function>
```

Example:

```bash
disassemble main
```

Disassembles a function.

### set disassembly-flavor intel

```bash
set disassembly-flavor intel
```

Intel syntax instead of AT&T; put it in ~/.gdbinit.

### backtrace

```bash
backtrace
```

The call stack (bt).

### info proc mappings

```bash
info proc mappings
```

The process memory map — find libc and stack base addresses.

### print <expr>

```bash
print <expr>
```

Example:

```bash
print system
```

Evaluates an expression, such as the address of a libc function.

### set {int}<addr> = <value>

```bash
set {int}<addr> = <value>
```

Example:

```bash
set {int}0x404040 = 1
```

Writes to memory.

### set $<reg> = <value>

```bash
set $<reg> = <value>
```

Example:

```bash
set $rax = 0
```

Changes a register — for example to flip a check’s result.


## Exploit development (GEF / pwndbg)

### checksec

```bash
checksec
```

Shows NX, PIE, RELRO, canary and Fortify status of the binary.

### pattern create <n>

```bash
pattern create <n>
```

Example:

```bash
pattern create 200
```

Generates a cyclic pattern to find the offset that overwrites the return address.

### pattern search $rsp

```bash
pattern search $rsp
```

Finds the offset of the pattern in a register or memory after a crash.

### vmmap

```bash
vmmap
```

Colour-coded memory map with permissions.

### telescope $rsp 20

```bash
telescope $rsp 20
```

Dereferences stack values recursively (pwndbg).

## Related tools

- [radare2](https://terminal.rokibulroni.com/tool/reversing/radare2)
- [strace](https://terminal.rokibulroni.com/tool/reversing/strace)
- [objdump](https://terminal.rokibulroni.com/tool/reversing/objdump)
