# Volatility 3

> The current memory-forensics framework: analyse RAM images from Windows, Linux and macOS for processes, network connections, injected code and more.

- Category: Forensics
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/forensics/volatility3
- Homepage: https://github.com/volatilityfoundation/volatility3
- Documentation: https://volatility3.readthedocs.io
- Tags: memory forensics, DFIR, malware

## Install

- apt: `sudo apt install volatility3`
- pipx: `pipx install volatility3`

## Basic Usage & Setup

### vol -h

```bash
vol -h
```

Displays the main help menu, available flags, and configured plugin list.

### vol -f memory.img windows.info

```bash
vol -f memory.img windows.info
```

Example:

```bash
vol -f win10.mem windows.info
```

Identifies the Windows operating system version, build number, and architecture from the memory image.

### vol -f memory.img -v windows.info

```bash
vol -f memory.img -v windows.info
```

Example:

```bash
vol -f win10.mem -v windows.info
```

Runs the info plugin with verbose output to show detailed layer information and symbol table loading.

### vol -f memory.img -s /path/to/symbols windows.info

```bash
vol -f memory.img -s /path/to/symbols windows.info
```

Example:

```bash
vol -f win10.mem -s ./symbols windows.info
```

Specifies a custom path for symbol tables to aid in offline analysis or air-gapped investigations.


## Process Enumeration

### vol -f memory.img windows.pslist

```bash
vol -f memory.img windows.pslist
```

Example:

```bash
vol -f win10.mem windows.pslist
```

Lists high-level running processes by walking the doubly-linked list of ActiveProcessLinks in the kernel.

### vol -f memory.img windows.pslist --pid <PID>

```bash
vol -f memory.img windows.pslist --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.pslist --pid 4520
```

Filters the process list to display details for a specific Process ID only.

### vol -f memory.img windows.psscan

```bash
vol -f memory.img windows.psscan
```

Example:

```bash
vol -f win10.mem windows.psscan
```

Scans physical memory for EPROCESS pool allocations to find unlinked, hidden, or terminated processes.

### vol -f memory.img windows.pstree

```bash
vol -f memory.img windows.pstree
```

Example:

```bash
vol -f win10.mem windows.pstree
```

Visualizes the process hierarchy and parent-child relationships using indentation.

### vol -f memory.img windows.cmdline

```bash
vol -f memory.img windows.cmdline
```

Example:

```bash
vol -f win10.mem windows.cmdline
```

Extracts the command line arguments used to launch processes, useful for detecting malicious parameters.

### vol -f memory.img windows.envars

```bash
vol -f memory.img windows.envars
```

Example:

```bash
vol -f win10.mem windows.envars
```

Displays environment variables for processes, revealing paths, user profiles, and session information.


## Deep Process Analysis

### vol -f memory.img windows.dlllist

```bash
vol -f memory.img windows.dlllist
```

Example:

```bash
vol -f win10.mem windows.dlllist
```

Lists dynamic link libraries (DLLs) loaded by processes to identify injected modules or unexpected dependencies.

### vol -f memory.img windows.dlllist --pid <PID>

```bash
vol -f memory.img windows.dlllist --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.dlllist --pid 1024
```

Isolates loaded modules for a single suspicious process to reduce noise during analysis.

### vol -f memory.img windows.ldrmodules

```bash
vol -f memory.img windows.ldrmodules
```

Example:

```bash
vol -f win10.mem windows.ldrmodules
```

Compares the VAD tree, PEB list, and module list to detect unlinked or hidden DLLs used by rootkits.

### vol -f memory.img windows.handles

```bash
vol -f memory.img windows.handles
```

Example:

```bash
vol -f win10.mem windows.handles
```

Lists open handles (files, registry keys, mutexes, threads) for all processes.

### vol -f memory.img windows.handles --pid <PID>

```bash
vol -f memory.img windows.handles --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.handles --pid 4520
```

Inspects open resources for a specific process to identify locked files or synchronization markers.

### vol -f memory.img windows.privileges

```bash
vol -f memory.img windows.privileges
```

Example:

```bash
vol -f win10.mem windows.privileges
```

Enumerates process tokens and privileges to detect privilege escalation or system-level access.


## Network Analysis

### vol -f memory.img windows.netscan

```bash
vol -f memory.img windows.netscan
```

Example:

```bash
vol -f win10.mem windows.netscan
```

Scans for network artifacts (TCP endpoints, UDP listeners) including closed or terminated connections.

### vol -f memory.img windows.netstat

```bash
vol -f memory.img windows.netstat
```

Example:

```bash
vol -f win10.mem windows.netstat
```

Lists active network connections derived from the system's network stack structures.


## Kernel & Driver Analysis

### vol -f memory.img windows.driverscan

```bash
vol -f memory.img windows.driverscan
```

Example:

```bash
vol -f win10.mem windows.driverscan
```

Scans physical memory for DRIVER_OBJECT structures to identify loaded kernel drivers.

### vol -f memory.img windows.modules

```bash
vol -f memory.img windows.modules
```

Example:

```bash
vol -f win10.mem windows.modules
```

Lists loaded kernel modules and their base addresses, similar to the lsmod command in Linux.

### vol -f memory.img windows.ssdt

```bash
vol -f memory.img windows.ssdt
```

Example:

```bash
vol -f win10.mem windows.ssdt
```

Enumerates the System Service Descriptor Table to detect kernel-level API hooking.

### vol -f memory.img windows.callbacks

```bash
vol -f memory.img windows.callbacks
```

Example:

```bash
vol -f win10.mem windows.callbacks
```

Lists kernel callback routines often used by malware for persistence or AV evasion.


## File System Forensics

### vol -f memory.img windows.filescan

```bash
vol -f memory.img windows.filescan
```

Example:

```bash
vol -f win10.mem windows.filescan
```

Scans memory for FILE_OBJECT structures to find open files, even those without active handles.

### vol -f memory.img windows.mftscan

```bash
vol -f memory.img windows.mftscan
```

Example:

```bash
vol -f win10.mem windows.mftscan
```

Scans for Master File Table (MFT) record segments resident in memory to recover deleted file metadata.


## Malware Analysis

### vol -f memory.img windows.malfind

```bash
vol -f memory.img windows.malfind
```

Example:

```bash
vol -f win10.mem windows.malfind
```

Scans for code injection by looking for executable memory pages that are not backed by a file on disk.

### vol -f memory.img windows.malfind --pid <PID> --dump

```bash
vol -f memory.img windows.malfind --pid <PID> --dump
```

Example:

```bash
vol -f win10.mem windows.malfind --pid 4520 --dump
```

Detects injected code in a specific process and extracts the memory segments to disk for analysis.

### vol -f memory.img windows.vadinfo

```bash
vol -f memory.img windows.vadinfo
```

Example:

```bash
vol -f win10.mem windows.vadinfo
```

Inspects the Virtual Address Descriptor (VAD) tree to analyze memory protection and mapping attributes.

### vol -f memory.img windows.vadinfo --pid <PID>

```bash
vol -f memory.img windows.vadinfo --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.vadinfo --pid 4520
```

Details the memory regions of a specific process to identify shellcode or unpacked malware segments.


## Registry Forensics

### vol -f memory.img windows.registry.hivelist

```bash
vol -f memory.img windows.registry.hivelist
```

Example:

```bash
vol -f win10.mem windows.registry.hivelist
```

Lists the physical addresses of available registry hives (SAM, SYSTEM, SOFTWARE, NTUSER.DAT).

### vol -f memory.img windows.registry.hivescan

```bash
vol -f memory.img windows.registry.hivescan
```

Example:

```bash
vol -f win10.mem windows.registry.hivescan
```

Scans memory for pool tags associated with registry hives to recover unloaded or partial hives.

### vol -f memory.img windows.registry.printkey --key <Path>

```bash
vol -f memory.img windows.registry.printkey --key <Path>
```

Example:

```bash
vol -f win10.mem windows.registry.printkey --key "Software\Microsoft\Windows\CurrentVersion\Run"
```

Prints the subkeys and values of a specific registry path to check for persistence mechanisms.

### vol -f memory.img windows.registry.userassist

```bash
vol -f memory.img windows.registry.userassist
```

Example:

```bash
vol -f win10.mem windows.registry.userassist
```

Parses UserAssist keys to determine which programs were executed via the GUI and their run counts.


## Searching & YARA

### vol -f memory.img windows.yarascan --yara-string "<String>"

```bash
vol -f memory.img windows.yarascan --yara-string "<String>"
```

Example:

```bash
vol -f win10.mem windows.yarascan --yara-string "evil_domain.com"
```

Scans process memory and kernel space for a specific text string using YARA logic.

### vol -f memory.img windows.yarascan --yara-file rules.yar

```bash
vol -f memory.img windows.yarascan --yara-file rules.yar
```

Example:

```bash
vol -f win10.mem windows.yarascan --yara-file malware_rules.yar
```

Applies a file containing compiled YARA rules to the entire memory image to detect malware signatures.

### vol -f memory.img windows.yarascan --pid <PID> --yara-string "<Hex>"

```bash
vol -f memory.img windows.yarascan --pid <PID> --yara-string "<Hex>"
```

Example:

```bash
vol -f win10.mem windows.yarascan --pid 4520 --yara-string "{ 4D 5A 90 00 }"
```

Searches for a hex byte sequence (like a PE header) strictly within the memory space of a specific process.


## Extraction & Dumping

### vol -f memory.img windows.pslist --pid <PID> --dump

```bash
vol -f memory.img windows.pslist --pid <PID> --dump
```

Example:

```bash
vol -f win10.mem windows.pslist --pid 4520 --dump
```

Extracts the executable image of a running process from memory to disk for static analysis.

### vol -f memory.img windows.dumpfiles --pid <PID>

```bash
vol -f memory.img windows.dumpfiles --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.dumpfiles --pid 4520
```

Dumps all file objects associated with a specific process, recovering open documents or logs.

### vol -f memory.img windows.moddump --pid <PID> --base <Address>

```bash
vol -f memory.img windows.moddump --pid <PID> --base <Address>
```

Example:

```bash
vol -f win10.mem windows.moddump --pid 4520 --base 0x7ff8f000
```

Extracts a specific loaded module or DLL from a process's memory space based on its base address.

### vol -f memory.img windows.memmap --pid <PID> --dump

```bash
vol -f memory.img windows.memmap --pid <PID> --dump
```

Example:

```bash
vol -f win10.mem windows.memmap --pid 4520 --dump
```

Dumps the memory map of a process, preserving the layout of code, data, and heap sections.


## Linux Forensics

### vol -f linux.mem linux.info

```bash
vol -f linux.mem linux.info
```

Displays the Linux kernel version and banner from a Linux memory artifact.

### vol -f linux.mem linux.pslist

```bash
vol -f linux.mem linux.pslist
```

Walks the task_struct list in Linux kernel memory to identify running processes.

### vol -f linux.mem linux.bash

```bash
vol -f linux.mem linux.bash
```

Recovers command history from bash processes, providing visibility into attacker activity.

### vol -f linux.mem linux.check_syscall

```bash
vol -f linux.mem linux.check_syscall
```

Checks the system call table for hooks, a common technique for Linux rootkits.

### vol -f linux.mem linux.elfs

```bash
vol -f linux.mem linux.elfs
```

Lists Executable and Linkable Format (ELF) binaries loaded in memory.

### vol -f linux.mem linux.lsmod

```bash
vol -f linux.mem linux.lsmod
```

Lists loaded kernel modules to identify malicious drivers or unauthorized kernel extensions.

### vol -f linux.mem linux.mount

```bash
vol -f linux.mem linux.mount
```

Displays mounted filesystems within the Linux memory image.


## Mac Forensics

### vol -f mac.mem mac.info

```bash
vol -f mac.mem mac.info
```

Identifies the macOS kernel version and architecture.

### vol -f mac.mem mac.pslist

```bash
vol -f mac.mem mac.pslist
```

Lists running processes on a macOS system by analyzing the proc structures.

### vol -f mac.mem mac.check_syscalls

```bash
vol -f mac.mem mac.check_syscalls
```

Validates the system call table on macOS to detect rootkit hooking.

### vol -f mac.mem mac.ifconfig

```bash
vol -f mac.mem mac.ifconfig
```

Recovers network interface configurations and status from macOS memory.


## Advanced Filtering

### vol -f memory.img windows.pslist --dump --pid <PID>

```bash
vol -f memory.img windows.pslist --dump --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.pslist --dump --pid 1024
```

Combines filtering by PID and dumping to extract a specific suspicious process immediately.

### vol -f memory.img windows.netscan --pid <PID>

```bash
vol -f memory.img windows.netscan --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.netscan --pid 4520
```

Filters network artifacts to show only connections belonging to a specific compromised process.


## Output & Reporting

### vol -r json -f memory.img windows.pslist

```bash
vol -r json -f memory.img windows.pslist
```

Example:

```bash
vol -r json -f win10.mem windows.pslist > pslist.json
```

Outputs the process list in JSON format for ingestion into other analysis tools or SIEMs.

### vol -r csv -f memory.img windows.filescan

```bash
vol -r csv -f memory.img windows.filescan
```

Example:

```bash
vol -r csv -f win10.mem windows.filescan > files.csv
```

Exports the file scan results to CSV format for easy filtering and sorting in spreadsheet software.

### vol -r pretty -f memory.img windows.info

```bash
vol -r pretty -f memory.img windows.info
```

Example:

```bash
vol -r pretty -f win10.mem windows.info
```

Forces the standard 'pretty' human-readable table output, useful when overriding defaults.


## Timeline Analysis

### vol -f memory.img timeliner.Timeliner

```bash
vol -f memory.img timeliner.Timeliner
```

Example:

```bash
vol -f win10.mem timeliner.Timeliner
```

Aggregates timestamps from all available plugins (process creation, file modification) into a master timeline.

### vol -r csv -f memory.img timeliner.Timeliner

```bash
vol -r csv -f memory.img timeliner.Timeliner
```

Example:

```bash
vol -r csv -f win10.mem timeliner.Timeliner > timeline.csv
```

Exports the master timeline to CSV for analysis in timeline visualization tools.


## Credential Hunting

### vol -f memory.img windows.hashdump

```bash
vol -f memory.img windows.hashdump
```

Example:

```bash
vol -f win10.mem windows.hashdump
```

extracts NTLM hashes from the registry hives loaded in memory (requires SAM and SYSTEM hives).

### vol -f memory.img windows.lmadump

```bash
vol -f memory.img windows.lmadump
```

Example:

```bash
vol -f win10.mem windows.lmadump
```

Attempts to extract LowerCase LSA secrets/hashes, though less common on modern Windows.

### vol -f memory.img windows.cachedump

```bash
vol -f memory.img windows.cachedump
```

Example:

```bash
vol -f win10.mem windows.cachedump
```

Extracts cached domain credentials (MSCache) from the registry.


## Threat Hunting

### vol -f memory.img windows.thrdscan

```bash
vol -f memory.img windows.thrdscan
```

Example:

```bash
vol -f win10.mem windows.thrdscan
```

Scans for ETHREAD structures to find hidden threads or threads detached from their parent processes.

### vol -f memory.img windows.joblinks

```bash
vol -f memory.img windows.joblinks
```

Example:

```bash
vol -f win10.mem windows.joblinks
```

Enumerates job objects to see if processes are grouped or managed together, common in malware families.

### vol -f memory.img windows.mutantscan

```bash
vol -f memory.img windows.mutantscan
```

Example:

```bash
vol -f win10.mem windows.mutantscan
```

Scans for mutexes, which are often used by malware to ensure only one instance runs at a time.

### vol -f memory.img windows.symlinkscan

```bash
vol -f memory.img windows.symlinkscan
```

Example:

```bash
vol -f win10.mem windows.symlinkscan
```

Scans for symbolic links in kernel memory which can reveal redirected file paths or device names.


## Memory Forensics Configuration

### vol -c config.json -f memory.img windows.info

```bash
vol -c config.json -f memory.img windows.info
```

Example:

```bash
vol -c config.json -f win10.mem windows.info
```

Runs volatility using a pre-defined JSON configuration file to standardize analysis across a team.


## Advanced Debugging

### vol -f memory.img layerwriter.LayerWriter --output-dir ./out

```bash
vol -f memory.img layerwriter.LayerWriter --output-dir ./out
```

Example:

```bash
vol -f win10.mem layerwriter.LayerWriter
```

writes out the underlying raw memory layer, useful for converting format specific images to raw.


## Memory Mapping

### vol -f memory.img windows.memmap

```bash
vol -f memory.img windows.memmap
```

Example:

```bash
vol -f win10.mem windows.memmap
```

Provides a detailed map of virtual memory pages for processes.


## Command History

### vol -f memory.img windows.cmdline --pid <PID>

```bash
vol -f memory.img windows.cmdline --pid <PID>
```

Example:

```bash
vol -f win10.mem windows.cmdline --pid 1024
```

Retrieves the command line arguments for a specific process ID.


## Interactive Console

### vol -f memory.img shell

```bash
vol -f memory.img shell
```

Example:

```bash
vol -f win10.mem shell
```

Drops into an interactive python shell with the configuration context loaded (if plugin available).


## Process Services

### vol -f memory.img windows.get_services

```bash
vol -f memory.img windows.get_services
```

Example:

```bash
vol -f win10.mem windows.get_services
```

enumerates services registered on the system by parsing the service record database.


## Kernel Objects

### vol -f memory.img windows.objecttypes

```bash
vol -f memory.img windows.objecttypes
```

Example:

```bash
vol -f win10.mem windows.objecttypes
```

Lists the object types defined in the kernel to understand available structures.


## Memory Integrity

### vol -f memory.img windows.bigpools

```bash
vol -f memory.img windows.bigpools
```

Example:

```bash
vol -f win10.mem windows.bigpools
```

Enumerates big pool allocations which can sometimes hide injected code or artifacts.


## Filesystem Metadata

### vol -f memory.img windows.mftscan --dump

```bash
vol -f memory.img windows.mftscan --dump
```

Example:

```bash
vol -f win10.mem windows.mftscan --dump
```

Scans for and dumps resident MFT records for external parsing.


## Malware Hunting

### vol -f memory.img windows.virtmap

```bash
vol -f memory.img windows.virtmap
```

Example:

```bash
vol -f win10.mem windows.virtmap
```

Shows the mapping between virtual and physical addresses, useful for identifying remapped pages.


## System Info

### vol -f memory.img windows.verinfo

```bash
vol -f memory.img windows.verinfo
```

Example:

```bash
vol -f win10.mem windows.verinfo
```

Extracts version information from PE files found in memory.

## Related tools

- [Volatility 2](https://terminal.rokibulroni.com/tool/forensics/volatility)
- [strings](https://terminal.rokibulroni.com/tool/forensics/strings)
- [Plaso (log2timeline)](https://terminal.rokibulroni.com/tool/forensics/plaso)
