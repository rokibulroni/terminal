# Ghidra

> The NSA’s open-source reverse-engineering suite with a powerful decompiler; scriptable headless analysis from the command line.

- Category: Reverse Engineering
- Commands: 15
- Page: https://terminal.rokibulroni.com/tool/reversing/ghidra
- Homepage: https://ghidra-sre.org
- Documentation: https://ghidra-sre.org/CheatSheet.html
- Tags: decompiler, reverse engineering, malware analysis

## Install

- brew: `brew install --cask ghidra`
- other: `Download a release from https://github.com/NationalSecurityAgency/ghidra/releases`

## Running

### ghidraRun

```bash
ghidraRun
```

Starts the Ghidra GUI (ghidraRun.bat on Windows). Requires a supported JDK (21 for current releases).

### <ghidra>/support/analyzeHeadless <project_dir> <project> -import <binary>

```bash
<ghidra>/support/analyzeHeadless <project_dir> <project> -import <binary>
```

Example:

```bash
analyzeHeadless ~/ghidra_projects demo -import ./malware.bin
```

Headless mode: creates a project, imports a binary and runs auto-analysis without the GUI.

### analyzeHeadless <project_dir> <project> -import <dir> -recursive

```bash
analyzeHeadless <project_dir> <project> -import <dir> -recursive
```

Example:

```bash
analyzeHeadless ~/ghidra_projects firmware -import ./extracted -recursive
```

Imports and analyses every file under a directory.

### analyzeHeadless <project_dir> <project> -process <file> -noanalysis

```bash
analyzeHeadless <project_dir> <project> -process <file> -noanalysis
```

Example:

```bash
analyzeHeadless ~/ghidra_projects demo -process malware.bin -noanalysis
```

Opens an existing program in a project without reanalysing it.


## Scripting

### analyzeHeadless <project_dir> <project> -import <binary> -postScript <script>

```bash
analyzeHeadless <project_dir> <project> -import <binary> -postScript <script>
```

Example:

```bash
analyzeHeadless ~/ghidra_projects demo -import a.out -postScript ExportDecompiled.java
```

Runs a script after analysis — useful for batch decompilation or IOC extraction.

### analyzeHeadless … -scriptPath <dir>

```bash
analyzeHeadless … -scriptPath <dir>
```

Example:

```bash
analyzeHeadless ~/ghidra_projects demo -process a.out -scriptPath ~/ghidra_scripts -postScript FindCrypto.py
```

Adds a directory of your own scripts.

### analyzeHeadless … -deleteProject

```bash
analyzeHeadless … -deleteProject
```

Example:

```bash
analyzeHeadless /tmp gh -import sample.exe -postScript Dump.java -deleteProject
```

Removes the temporary project afterwards.

### analyzeHeadless … -processor <lang>

```bash
analyzeHeadless … -processor <lang>
```

Example:

```bash
analyzeHeadless /tmp gh -import fw.bin -processor ARM:LE:32:v7
```

Forces a processor for raw firmware with no headers.

### analyzeHeadless … -log <file> -scriptlog <file>

```bash
analyzeHeadless … -log <file> -scriptlog <file>
```

Example:

```bash
analyzeHeadless /tmp gh -import a.out -log ghidra.log -scriptlog script.log
```

Writes analysis and script logs to files.


## GUI shortcuts

### G

```bash
G
```

Go to an address or label.

### L

```bash
L
```

Rename the selected function, variable or label.

### Ctrl-L

```bash
Ctrl-L
```

Retype a variable in the decompiler.

### Ctrl-Shift-F

```bash
Ctrl-Shift-F
```

Find references to the selected item.

### Search → For Strings

```bash
Search → For Strings
```

Lists defined and undefined strings, a quick way to find interesting code.

### Window → Function Graph

```bash
Window → Function Graph
```

Shows the control-flow graph of the current function.

## Related tools

- [radare2](https://terminal.rokibulroni.com/tool/reversing/radare2)
- [GDB](https://terminal.rokibulroni.com/tool/reversing/gdb)
- [objdump](https://terminal.rokibulroni.com/tool/reversing/objdump)
