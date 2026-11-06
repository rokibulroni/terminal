---
name: terminal-hub-reversing
description: "Copy-ready Reverse Engineering command reference (Debuggers, disassemblers and system-call tracing) covering GDB, strace, Ghidra, objdump, radare2. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a reverse engineering task from the terminal."
license: MIT
---

# Reverse Engineering commands

Understand binaries without source code: disassemble, decompile, debug step by step and trace system calls.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Debugging & Tracing

- **GDB** — The GNU Debugger: set breakpoints, step through code, inspect memory and registers. Pair with GEF or pwndbg for exploit development. [`tools/gdb.md`](tools/gdb.md), 31 commands. Sections: Starting, Running, Breakpoints, Inspecting, Exploit development (GEF / pwndbg).
- **strace** — Traces the system calls and signals of a process — see which files it opens, what it sends and why it fails. [`tools/strace.md`](tools/strace.md), 18 commands. Sections: Tracing, Filtering, Detail and timing, Library calls.

### Disassemblers & Frameworks

- **Ghidra** — The NSA’s open-source reverse-engineering suite with a powerful decompiler; scriptable headless analysis from the command line. [`tools/ghidra.md`](tools/ghidra.md), 15 commands. Sections: Running, Scripting, GUI shortcuts.
- **objdump** — Displays information about object files: headers, sections, symbols and disassembly. Part of GNU binutils. [`tools/objdump.md`](tools/objdump.md), 17 commands. Sections: Headers, Symbols, Disassembly, Data.
- **radare2** — A complete command-line reverse-engineering framework: disassemble, debug, patch and analyse binaries for many architectures. [`tools/radare2.md`](tools/radare2.md), 25 commands. Sections: Opening, Analysis, Visual modes, Debugging and patching.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/reversing. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/reversing/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
