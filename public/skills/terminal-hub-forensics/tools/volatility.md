# Volatility 2

> The original Python 2 memory-forensics framework using profiles. Superseded by Volatility 3 but still found in older workflows and courses.

- Category: Forensics
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/forensics/volatility
- Homepage: https://github.com/volatilityfoundation/volatility
- Documentation: https://github.com/volatilityfoundation/volatility/wiki/Command-Reference
- Tags: memory forensics, DFIR, legacy

## Basic Memory Analysis

### volatility -f memory.img imageinfo

```bash
volatility -f memory.img imageinfo
```

Identifies the operating system profile and basic information from a memory image

### volatility -f memory.img kdbgscan

```bash
volatility -f memory.img kdbgscan
```

Scans for the KDBG structure to identify the correct profile if imageinfo fails


## Process Analysis

### volatility -f memory.img --profile=Win7SP1x64 pslist

```bash
volatility -f memory.img --profile=Win7SP1x64 pslist
```

Lists high-level running processes by walking the doubly linked list of EPROCESS structures

### volatility -f memory.img --profile=Win7SP1x64 psscan

```bash
volatility -f memory.img --profile=Win7SP1x64 psscan
```

Scans physical memory for EPROCESS pool tags to find unlinked or hidden processes

### volatility -f memory.img --profile=Win7SP1x64 pstree

```bash
volatility -f memory.img --profile=Win7SP1x64 pstree
```

Displays processes in a tree format to visualize parent-child relationships

### volatility -f memory.img --profile=Win7SP1x64 psxview

```bash
volatility -f memory.img --profile=Win7SP1x64 psxview
```

Compares process lists from different sources like pslist and psscan to detect hiding techniques

### volatility -f memory.img --profile=Win7SP1x64 privs -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 privs -p 1234
```

Displays process privileges for a specific PID to check for escalation or extensive rights

### volatility -f memory.img --profile=Win7SP1x64 envars -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 envars -p 1234
```

Displays environment variables for a specific process which may contain paths or configurations

### volatility -f memory.img --profile=Win7SP1x64 getsids -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 getsids -p 1234
```

Prints the Security Identifiers (SIDs) associated with a process to understand ownership

### volatility -f memory.img --profile=Win7SP1x64 verinfo -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 verinfo -p 1234
```

Displays version information embedded in the binary of a running process


## DLL and Module Analysis

### volatility -f memory.img --profile=Win7SP1x64 dlllist -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 dlllist -p 1234
```

Lists loaded dynamic link libraries (DLLs) for a specific process

### volatility -f memory.img --profile=Win7SP1x64 ldrmodules -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 ldrmodules -p 1234
```

Detects unlinked DLLs by comparing the VAD with the PEB module list


## Network Analysis

### volatility -f memory.img --profile=Win7SP1x64 netscan

```bash
volatility -f memory.img --profile=Win7SP1x64 netscan
```

Scans for network artifacts like connections and sockets on Windows Vista and later

### volatility -f memory.img --profile=WinXPSP2x86 connscan

```bash
volatility -f memory.img --profile=WinXPSP2x86 connscan
```

Scans for active TCP connections on older Windows XP and Server 2003 systems

### volatility -f memory.img --profile=WinXPSP2x86 sockets

```bash
volatility -f memory.img --profile=WinXPSP2x86 sockets
```

Prints a list of open sockets on older Windows XP and Server 2003 systems


## System Artifacts

### volatility -f memory.img --profile=Win7SP1x64 cmdscan

```bash
volatility -f memory.img --profile=Win7SP1x64 cmdscan
```

Extracts command history buffers from csrss.exe on XP and Win7

### volatility -f memory.img --profile=Win7SP1x64 consoles

```bash
volatility -f memory.img --profile=Win7SP1x64 consoles
```

Scans for console information to retrieve command history and screen output

### volatility -f memory.img --profile=Win7SP1x64 svcscan

```bash
volatility -f memory.img --profile=Win7SP1x64 svcscan
```

Scans for Windows service records and displays their state and binary path


## Handle and File Analysis

### volatility -f memory.img --profile=Win7SP1x64 handles -p 1234 -t File

```bash
volatility -f memory.img --profile=Win7SP1x64 handles -p 1234 -t File
```

Lists open file handles for a specific process to see what files it is accessing

### volatility -f memory.img --profile=Win7SP1x64 handles -p 1234 -t Mutant

```bash
volatility -f memory.img --profile=Win7SP1x64 handles -p 1234 -t Mutant
```

Lists mutant/mutex handles for a process often used for malware persistence checks

### volatility -f memory.img --profile=Win7SP1x64 filescan

```bash
volatility -f memory.img --profile=Win7SP1x64 filescan
```

Scans memory for FILE_OBJECTs to find open files across the entire system

### volatility -f memory.img --profile=Win7SP1x64 mutantscan

```bash
volatility -f memory.img --profile=Win7SP1x64 mutantscan
```

Scans memory for global mutexes which can indicate presence of specific malware families


## Malware Analysis

### volatility -f memory.img --profile=Win7SP1x64 malfind -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 malfind -p 1234
```

Scans for injected code and memory regions with RWX permissions often used by malware

### volatility -f memory.img --profile=Win7SP1x64 apihooks

```bash
volatility -f memory.img --profile=Win7SP1x64 apihooks
```

Detects API hooks in user mode and kernel mode to find rootkits or spyware

### volatility -f memory.img --profile=Win7SP1x64 ssdt

```bash
volatility -f memory.img --profile=Win7SP1x64 ssdt
```

Analyses the System Service Descriptor Table for hooked functions

### volatility -f memory.img --profile=Win7SP1x64 driverirp

```bash
volatility -f memory.img --profile=Win7SP1x64 driverirp
```

Scans for hooked IRP (I/O Request Packet) major function tables in drivers

### volatility -f memory.img --profile=Win7SP1x64 idt

```bash
volatility -f memory.img --profile=Win7SP1x64 idt
```

Displays the Interrupt Descriptor Table to check for malicious interrupt handlers

### volatility -f memory.img --profile=Win7SP1x64 gdt

```bash
volatility -f memory.img --profile=Win7SP1x64 gdt
```

Displays the Global Descriptor Table to check for memory segmentation anomalies

### volatility -f memory.img --profile=Win7SP1x64 callbacks

```bash
volatility -f memory.img --profile=Win7SP1x64 callbacks
```

Lists kernel callbacks used by drivers to monitor process, thread, and image loading

### volatility -f memory.img --profile=Win7SP1x64 timers

```bash
volatility -f memory.img --profile=Win7SP1x64 timers
```

Scans for kernel timers which can be used by malware to schedule delayed execution

### volatility -f memory.img --profile=Win7SP1x64 devicetree

```bash
volatility -f memory.img --profile=Win7SP1x64 devicetree
```

Maps the relationship between drivers and device objects to find hidden devices


## Memory Extraction

### volatility -f memory.img --profile=Win7SP1x64 procdump -p 1234 -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 procdump -p 1234 -D ./output/
```

Dumps a process executable from memory to disk for static analysis

### volatility -f memory.img --profile=Win7SP1x64 memdump -p 1234 -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 memdump -p 1234 -D ./output/
```

Dumps the addressable memory of a process into a single file

### volatility -f memory.img --profile=Win7SP1x64 vaddump -p 1234 -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 vaddump -p 1234 -D ./output/
```

Dumps individual VAD (Virtual Address Descriptor) segments useful for unpacking malware

### volatility -f memory.img --profile=Win7SP1x64 dlldump -p 1234 -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 dlldump -p 1234 -D ./output/
```

Extracts DLLs from a process memory space to disk

### volatility -f memory.img --profile=Win7SP1x64 moddump -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 moddump -D ./output/
```

Dumps kernel drivers and modules to disk

### volatility -f memory.img --profile=Win7SP1x64 dumpfiles -Q 0x000000007e05d1b0 -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 dumpfiles -Q 0x000000007e05d1b0 -D ./output/
```

Extracts a file from memory using its physical offset found via filescan


## Registry Analysis

### volatility -f memory.img --profile=Win7SP1x64 hivelist

```bash
volatility -f memory.img --profile=Win7SP1x64 hivelist
```

Lists available registry hives and their virtual offsets in memory

### volatility -f memory.img --profile=Win7SP1x64 printkey -o 0x87654321 -K 'Software\Microsoft\Windows\CurrentVersion\Run'

```bash
volatility -f memory.img --profile=Win7SP1x64 printkey -o 0x87654321 -K 'Software\Microsoft\Windows\CurrentVersion\Run'
```

Prints subkeys and values of a specific registry key using the hive offset

### volatility -f memory.img --profile=Win7SP1x64 userassist

```bash
volatility -f memory.img --profile=Win7SP1x64 userassist
```

Parses UserAssist registry keys to see what programs were recently executed

### volatility -f memory.img --profile=Win7SP1x64 dumpregistry -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 dumpregistry -D ./output/
```

Dumps all available registry hives from memory to disk


## Credential Theft

### volatility -f memory.img --profile=Win7SP1x64 hashdump

```bash
volatility -f memory.img --profile=Win7SP1x64 hashdump
```

Extracts and decrypts NTLM password hashes from the SAM registry hive

### volatility -f memory.img --profile=Win7SP1x64 lsadump

```bash
volatility -f memory.img --profile=Win7SP1x64 lsadump
```

Extracts LSA secrets including service account passwords and potential cleartext credentials

### volatility -f memory.img --profile=Win7SP1x64 cachedump

```bash
volatility -f memory.img --profile=Win7SP1x64 cachedump
```

Extracts cached domain credentials (MSCACHE) from the registry


## User Activity

### volatility -f memory.img --profile=Win7SP1x64 clipboard

```bash
volatility -f memory.img --profile=Win7SP1x64 clipboard
```

Extracts the contents of the Windows clipboard

### volatility -f memory.img --profile=Win7SP1x64 screenshot -D ./output/

```bash
volatility -f memory.img --profile=Win7SP1x64 screenshot -D ./output/
```

Attempts to recover GDI screenshots of user desktops

### volatility -f memory.img --profile=Win7SP1x64 iehistory

```bash
volatility -f memory.img --profile=Win7SP1x64 iehistory
```

Recovers Internet Explorer history artifacts and URLs


## Advanced Forensics

### volatility -f memory.img --profile=Win7SP1x64 mftparser

```bash
volatility -f memory.img --profile=Win7SP1x64 mftparser
```

Scans memory for MFT entries to reconstruct deleted file metadata

### volatility -f memory.img --profile=Win7SP1x64 shellbags

```bash
volatility -f memory.img --profile=Win7SP1x64 shellbags
```

Parses Shellbag artifacts to reveal folder access history and user navigation

### volatility -f memory.img --profile=Win7SP1x64 shimcache

```bash
volatility -f memory.img --profile=Win7SP1x64 shimcache
```

Parses the Application Compatibility Cache to track execution evidence

### volatility -f memory.img --profile=Win7SP1x64 amcache

```bash
volatility -f memory.img --profile=Win7SP1x64 amcache
```

Parses AmCache.hve artifacts for execution history and program metadata

### volatility -f memory.img --profile=Win7SP1x64 vadinfo -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 vadinfo -p 1234
```

Displays detailed VAD information including protection levels and memory mapping

### volatility -f memory.img --profile=Win7SP1x64 vadwalk -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 vadwalk -p 1234
```

Walks the VAD tree to inspect memory page tables


## Threat Hunting

### volatility -f memory.img --profile=Win7SP1x64 yarascan --yara-file=malware.yar

```bash
volatility -f memory.img --profile=Win7SP1x64 yarascan --yara-file=malware.yar
```

Scans memory using YARA rules to find signatures of known malware

### volatility -f memory.img --profile=Win7SP1x64 yarascan -Y 'string_to_find'

```bash
volatility -f memory.img --profile=Win7SP1x64 yarascan -Y 'string_to_find'
```

Searches for a specific string pattern across process memory or kernel memory


## Timeline Analysis

### volatility -f memory.img --profile=Win7SP1x64 timeliner

```bash
volatility -f memory.img --profile=Win7SP1x64 timeliner
```

Creates a comprehensive timeline of events from all supported plugins

### volatility -f memory.img --profile=Win7SP1x64 timeliner --type=Process

```bash
volatility -f memory.img --profile=Win7SP1x64 timeliner --type=Process
```

Generates a timeline filtered specifically for process creation and exit events


## Kernel Analysis

### volatility -f memory.img --profile=Win7SP1x64 modules

```bash
volatility -f memory.img --profile=Win7SP1x64 modules
```

Lists loaded kernel modules and drivers

### volatility -f memory.img --profile=Win7SP1x64 modscan

```bash
volatility -f memory.img --profile=Win7SP1x64 modscan
```

Scans memory for pool tags to find unloaded or hidden kernel modules

### volatility -f memory.img --profile=Win7SP1x64 kpcrscan

```bash
volatility -f memory.img --profile=Win7SP1x64 kpcrscan
```

Scans for the Kernel Processor Control Region to analyze CPU state

### volatility -f memory.img --profile=Win7SP1x64 thrdscan

```bash
volatility -f memory.img --profile=Win7SP1x64 thrdscan
```

Scans for ETHREAD objects to find threads that may belong to hidden processes


## Code Injection Analysis

### volatility -f memory.img --profile=Win7SP1x64 hollowfind -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 hollowfind -p 1234
```

Detects process hollowing by comparing the VAD to the PE header

### volatility -f memory.img --profile=Win7SP1x64 threadmap -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 threadmap -p 1234
```

Analyzes threads to find code injection where the start address doesn't map to a module


## Utility

### volatility -f memory.img --profile=Win7SP1x64 bioskbd

```bash
volatility -f memory.img --profile=Win7SP1x64 bioskbd
```

Attempts to read the BIOS keyboard buffer for keystrokes

### volatility -f memory.img --profile=Win7SP1x64 crashinfo

```bash
volatility -f memory.img --profile=Win7SP1x64 crashinfo
```

Displays crash dump information if the memory image is a crash dump

### volatility -f memory.img --profile=Win7SP1x64 hibinfo

```bash
volatility -f memory.img --profile=Win7SP1x64 hibinfo
```

Displays information stored in a hibernation file header

### volatility -f memory.img --profile=Win7SP1x64 kdbgscan --kdbg=0xf8000285b0a0

```bash
volatility -f memory.img --profile=Win7SP1x64 kdbgscan --kdbg=0xf8000285b0a0
```

Forces the usage of a specific KDBG address to speed up plugin execution


## Import Analysis

### volatility -f memory.img --profile=Win7SP1x64 impscan -p 1234

```bash
volatility -f memory.img --profile=Win7SP1x64 impscan -p 1234
```

Scans for calls to imported functions which helps analyzing injected shellcode


## Scanning

### volatility -f memory.img --profile=Win7SP1x64 patcher

```bash
volatility -f memory.img --profile=Win7SP1x64 patcher
```

Scans for inline patching or hooks in system libraries


## Advanced/Plugin

### volatility -f memory.img --profile=Win7SP1x64 mimikatz

```bash
volatility -f memory.img --profile=Win7SP1x64 mimikatz
```

Extracts clear text passwords from memory using the Mimikatz plugin functionality

### volatility -f memory.img --profile=Win7SP1x64 chromehistory

```bash
volatility -f memory.img --profile=Win7SP1x64 chromehistory
```

Attempts to recover browsing history artifacts from Chrome processes


## Output Formatting

### volatility -f memory.img --profile=Win7SP1x64 pslist --output=json

```bash
volatility -f memory.img --profile=Win7SP1x64 pslist --output=json
```

Runs the pslist command and outputs the results in JSON format

### volatility -f memory.img --profile=Win7SP1x64 pslist --output=html --output-file=report.html

```bash
volatility -f memory.img --profile=Win7SP1x64 pslist --output=html --output-file=report.html
```

Exports the process list to an HTML report file


## Linux Analysis

### volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_pslist

```bash
volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_pslist
```

Lists running processes for a Linux memory image

### volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_lsof

```bash
volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_lsof
```

Lists open files for processes in a Linux memory image

### volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_bash

```bash
volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_bash
```

Recovers bash history from running shells in Linux memory

### volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_mount

```bash
volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_mount
```

Displays mounted filesystems in a Linux memory image

### volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_check_fop

```bash
volatility -f linux.mem --profile=LinuxUbuntu_x64 linux_check_fop
```

Checks for hooked file operation structures in the Linux kernel


## Mac Analysis

### volatility -f mac.mem --profile=MacMountainLion_x64 mac_pslist

```bash
volatility -f mac.mem --profile=MacMountainLion_x64 mac_pslist
```

Lists running processes for a Mac OS X memory image

### volatility -f mac.mem --profile=MacMountainLion_x64 mac_tasks

```bash
volatility -f mac.mem --profile=MacMountainLion_x64 mac_tasks
```

Lists active tasks in a Mac OS X memory image


## Automation

### volatility -f memory.img --profile=Win7SP1x64 imageinfo --output-file=info.txt

```bash
volatility -f memory.img --profile=Win7SP1x64 imageinfo --output-file=info.txt
```

Saves image identification output to a text file for automated scripts

### volatility -f memory.img --profile=Win7SP1x64 shutdowntime

```bash
volatility -f memory.img --profile=Win7SP1x64 shutdowntime
```

Reads the shutdown time from the registry to determine the last clean shutdown


## Process Analysis

### volatility -f memory.img --profile=Win7SP1x64 joblinks

```bash
volatility -f memory.img --profile=Win7SP1x64 joblinks
```

Walks the job object links to find processes grouped in jobs


## Advanced/Plugin

### volatility -f memory.img --profile=Win7SP1x64 deskscan

```bash
volatility -f memory.img --profile=Win7SP1x64 deskscan
```

Scans for desktop objects and threads associated with them

### volatility -f memory.img --profile=Win7SP1x64 atoms

```bash
volatility -f memory.img --profile=Win7SP1x64 atoms
```

Lists session and window station atom tables

## Related tools

- [Volatility 3](https://terminal.rokibulroni.com/tool/forensics/volatility3)
