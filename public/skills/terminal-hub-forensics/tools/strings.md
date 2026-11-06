# strings

> Prints sequences of printable characters from binary files — a fast first look at executables, memory dumps and unknown data.

- Category: Forensics
- Commands: 65
- Page: https://terminal.rokibulroni.com/tool/forensics/strings
- Homepage: https://www.gnu.org/software/binutils/
- Documentation: https://man7.org/linux/man-pages/man1/strings.1.html
- Tags: binary analysis, triage

## Install

- apt: `sudo apt install binutils`
- brew: `brew install binutils`

## Basic String Extraction

### strings sample.bin

```bash
strings sample.bin
```

Example:

```bash
strings suspicious.exe
```

Extracts default human-readable ASCII strings from the specified binary file.

### strings -a sample.bin

```bash
strings -a sample.bin
```

Example:

```bash
strings -a malware.bin
```

Forces the scan of the entire file rather than just specific initialized data sections.

### strings --all sample.bin

```bash
strings --all sample.bin
```

Example:

```bash
strings --all rootkit.ko
```

Equivalent to the -a flag, ensuring every byte of the file is analyzed for printable characters.

### strings - sample.bin

```bash
strings - sample.bin
```

Example:

```bash
strings - unknown_blob.dat
```

Uses the dash shorthand to explicitly instruct strings to scan the whole file.


## Length Control

### strings -n 8 sample.bin

```bash
strings -n 8 sample.bin
```

Example:

```bash
strings -n 8 payload.exe
```

Filters output to only show strings with a minimum length of 8 characters, reducing noise.

### strings --bytes=10 sample.bin

```bash
strings --bytes=10 sample.bin
```

Example:

```bash
strings --bytes=10 memory.dmp
```

Sets the minimum sequence length to 10 characters using the verbose flag syntax.

### strings -6 sample.bin

```bash
strings -6 sample.bin
```

Example:

```bash
strings -6 dropper.elf
```

Uses legacy shorthand to set the minimum string length to 6 characters.


## File and Input Handling

### strings -f *.bin

```bash
strings -f *.bin
```

Example:

```bash
strings -f *.dll
```

Prints the filename before each string found, useful when scanning multiple files simultaneously.

### strings --print-file-name sample.bin

```bash
strings --print-file-name sample.bin
```

Example:

```bash
strings --print-file-name artifact.sys
```

Explicitly enables filename prefixing for the output, aiding in attribution during bulk analysis.


## Offset and Locations

### strings -t d sample.bin

```bash
strings -t d sample.bin
```

Example:

```bash
strings -t d firmware.rom
```

Displays the offset (location) of each string within the file in decimal format.

### strings -t x sample.bin

```bash
strings -t x sample.bin
```

Example:

```bash
strings -t x exploit.doc
```

Displays the offset of each string in hexadecimal format, standard for hex editor cross-referencing.

### strings -t o sample.bin

```bash
strings -t o sample.bin
```

Example:

```bash
strings -t o archive.tar
```

Displays the offset of each string in octal format.

### strings --radix=x sample.bin

```bash
strings --radix=x sample.bin
```

Example:

```bash
strings --radix=x bootloader.img
```

Sets the offset radix to hexadecimal using the verbose argument style.


## Encoding and Character Sets

### strings -e s sample.bin

```bash
strings -e s sample.bin
```

Example:

```bash
strings -e s text.txt
```

Explicitly scans for standard 7-bit ASCII characters (default behavior).

### strings -e S sample.bin

```bash
strings -e S sample.bin
```

Example:

```bash
strings -e S international.dat
```

Scans for 8-bit characters to capture ISO-8859 or extended ASCII strings.

### strings -e l sample.bin

```bash
strings -e l sample.bin
```

Example:

```bash
strings -e l windows_log.evtx
```

Scans for 16-bit little-endian characters, commonly used for Windows UTF-16 (Unicode) strings.

### strings -e b sample.bin

```bash
strings -e b sample.bin
```

Example:

```bash
strings -e b mips_firmware.bin
```

Scans for 16-bit big-endian characters, often found in network appliances or legacy architectures.

### strings -e L sample.bin

```bash
strings -e L sample.bin
```

Example:

```bash
strings -e L data.db
```

Scans for 32-bit little-endian characters.

### strings -e B sample.bin

```bash
strings -e B sample.bin
```

Example:

```bash
strings -e B old_system.img
```

Scans for 32-bit big-endian characters.


## Output Formatting

### strings -s ' :: ' sample.bin

```bash
strings -s ' :: ' sample.bin
```

Example:

```bash
strings -s ' :: ' logfile.dat
```

Inserts a custom separator string between output items instead of a newline.

### strings --output-separator=',' sample.bin

```bash
strings --output-separator=',' sample.bin
```

Example:

```bash
strings --output-separator=',' data.csv
```

Uses a comma as the output separator, facilitating CSV-style output generation.


## Combined Basic Workflows

### strings -a -t x -n 10 sample.bin

```bash
strings -a -t x -n 10 sample.bin
```

Example:

```bash
strings -a -t x -n 10 unknown_malware.exe
```

Combines scanning all bytes, hex offsets, and minimum length filtering for a standard initial triage.

### strings -e l -t x sample.bin

```bash
strings -e l -t x sample.bin
```

Example:

```bash
strings -e l -t x document.pdf
```

Extracts UTF-16 strings with their hexadecimal offsets to locate Unicode artifacts.


## Malware and Artifact Analysis

### strings sample.bin | grep -i 'http'

```bash
strings sample.bin | grep -i 'http'
```

Example:

```bash
strings dropper.exe | grep -i 'http'
```

Pipes output to grep to search for HTTP/HTTPS URLs specifically.

### strings -e l sample.bin | grep -i 'c:\\'

```bash
strings -e l sample.bin | grep -i 'c:\\'
```

Example:

```bash
strings -e l malware.exe | grep -i 'c:\\'
```

Searches for Windows file paths inside Unicode-encoded strings.

### strings sample.bin | grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'

```bash
strings sample.bin | grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
```

Example:

```bash
strings c2_client.exe | grep -E '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
```

Uses regex to extract potential IPv4 addresses from the binary.

### strings sample.bin | grep -i 'pdb'

```bash
strings sample.bin | grep -i 'pdb'
```

Example:

```bash
strings unknown.dll | grep -i 'pdb'
```

Searches for PDB (Program Database) paths which often reveal the developer's username and project path.

### strings sample.bin | grep -i 'user-agent'

```bash
strings sample.bin | grep -i 'user-agent'
```

Example:

```bash
strings downloader.exe | grep -i 'user-agent'
```

Hunts for hardcoded User-Agent strings used in network communications.

### strings sample.bin | grep -E '^[A-Za-z0-9+/]{20,}={0,2}$'

```bash
strings sample.bin | grep -E '^[A-Za-z0-9+/]{20,}={0,2}$'
```

Example:

```bash
strings payload.bin | grep -E '^[A-Za-z0-9+/]{20,}={0,2}$'
```

Attempts to identify long Base64 encoded strings which may represent obfuscated configurations.

### strings sample.bin | grep -iE '(powershell|cmd|bash|sh)'

```bash
strings sample.bin | grep -iE '(powershell|cmd|bash|sh)'
```

Example:

```bash
strings script.exe | grep -iE '(powershell|cmd|bash|sh)'
```

Scans for shell execution commands indicating potential system command injection capabilities.


## Incident Response Investigations

### strings -a memory.dmp | grep -C 5 'password'

```bash
strings -a memory.dmp | grep -C 5 'password'
```

Example:

```bash
strings -a hiberfil.sys | grep -C 5 'password'
```

Searches a memory dump for the term 'password' and prints 5 lines of surrounding context.

### strings -e l memory.dmp | grep -i 'cmd.exe'

```bash
strings -e l memory.dmp | grep -i 'cmd.exe'
```

Example:

```bash
strings -e l memdump.raw | grep -i 'cmd.exe'
```

Searches a raw memory dump for Unicode references to command prompt executions.

### strings -f /var/log/nginx/* | grep 'eval('

```bash
strings -f /var/log/nginx/* | grep 'eval('
```

Example:

```bash
strings -f /var/log/nginx/access.log* | grep 'eval('
```

Scans multiple log files for PHP eval injection attempts while maintaining filename context.

### cat disk_image.dd | strings -t d > image_strings.txt

```bash
cat disk_image.dd | strings -t d > image_strings.txt
```

Example:

```bash
cat evidence.dd | strings -t d > evidence_strings.txt
```

Streams a disk image into strings and saves the output with offsets to a text file for offline searching.


## Automation and Pipeline Workflows

### strings sample.bin | sort | uniq -c | sort -nr

```bash
strings sample.bin | sort | uniq -c | sort -nr
```

Example:

```bash
strings malware_set.bin | sort | uniq -c | sort -nr
```

Counts unique string occurrences and sorts them by frequency to identify repeated patterns.

### strings -n 20 sample.bin | head -n 15

```bash
strings -n 20 sample.bin | head -n 15
```

Example:

```bash
strings -n 20 ransom.exe | head -n 15
```

Quickly previews the first 15 long strings (20+ chars) to get a high-level overview of the binary.

### strings sample.bin | grep -vFf whitelist.txt

```bash
strings sample.bin | grep -vFf whitelist.txt
```

Example:

```bash
strings system32_file.dll | grep -vFf known_strings.txt
```

Filters out known-good strings listed in a file, leaving only anomalous or unique strings.

### find . -name '*.exe' -exec strings -f {} + | grep '192.168.'

```bash
find . -name '*.exe' -exec strings -f {} + | grep '192.168.'
```

Example:

```bash
find /suspicious -name '*.exe' -exec strings -f {} + | grep '192.168.'
```

Recursively finds all EXE files in a directory and scans them for a specific local IP range.


## Advanced Filtering

### strings -t x sample.bin | awk '{print $1, $2}'

```bash
strings -t x sample.bin | awk '{print $1, $2}'
```

Example:

```bash
strings -t x firmware.bin | awk '{print $1, $2}'
```

Uses AWK to clean output, printing only the offset and the first word of the string string.

### strings sample.bin | tr -d '\n' | grep -o 'http[^ ]*'

```bash
strings sample.bin | tr -d '\n' | grep -o 'http[^ ]*'
```

Example:

```bash
strings blob.dat | tr -d '\n' | grep -o 'http[^ ]*'
```

Removes newlines to treat output as a stream and extracts full URLs without breaks.


## Blue Team Defensive Validation

### strings -n 50 codebase_build.exe

```bash
strings -n 50 codebase_build.exe
```

Example:

```bash
strings -n 50 internal_tool.exe
```

Checks compiled internal binaries for accidentally left-in long debug messages or API keys.

### strings lib.so | grep 'GLIBC'

```bash
strings lib.so | grep 'GLIBC'
```

Example:

```bash
strings application.o | grep 'GLIBC'
```

Verifies linked library versions and dependencies in Linux ELF binaries.

### strings -a production_config.dat | grep -iE '(key|token|secret)'

```bash
strings -a production_config.dat | grep -iE '(key|token|secret)'
```

Example:

```bash
strings -a app.config | grep -iE '(key|token|secret)'
```

Scans configuration binaries for hardcoded secrets or tokens before deployment.


## Digital Forensics Reporting

### strings -t x -e l sample.bin > unicode_artifacts.txt

```bash
strings -t x -e l sample.bin > unicode_artifacts.txt
```

Example:

```bash
strings -t x -e l evidence.001 > unicode_artifacts.txt
```

Generates a comprehensive report of Unicode artifacts with offsets for a forensic case file.

### strings -a sample.bin | md5sum

```bash
strings -a sample.bin | md5sum
```

Example:

```bash
strings -a malware.exe | md5sum
```

Calculates a hash of the extracted strings to create a signature for the string content independent of the binary wrapper.


## Advanced Encoding Workflows

### strings -e S -n 6 sample.bin

```bash
strings -e S -n 6 sample.bin
```

Example:

```bash
strings -e S -n 6 firmware_dump.bin
```

Targets 8-bit character encoding with a minimum length of 6 to find non-standard ASCII tables.

### strings -e B -t x sample.bin

```bash
strings -e B -t x sample.bin
```

Example:

```bash
strings -e B -t x powerpc_dump.bin
```

Analyzes Big-Endian 32-bit architecture dumps (like PowerPC or older Mac) for readable text.


## Targeted Artifact Hunting

### strings sample.bin | grep -i 'registry'

```bash
strings sample.bin | grep -i 'registry'
```

Example:

```bash
strings malware.exe | grep -i 'registry'
```

Looks for references to Windows Registry modification or querying activities.

### strings sample.bin | grep -i '\.onion'

```bash
strings sample.bin | grep -i '\.onion'
```

Example:

```bash
strings ransomware.exe | grep -i '\.onion'
```

specifically searches for Tor hidden service addresses often used in ransomware notes.

### strings sample.bin | grep -i 'bitcoin:'

```bash
strings sample.bin | grep -i 'bitcoin:'
```

Example:

```bash
strings crypto_stealer.exe | grep -i 'bitcoin:'
```

Searches for cryptocurrency wallet addresses or payment URI schemes.


## Advanced Forensics

### strings -a -t x sample.bin | grep '4d 5a'

```bash
strings -a -t x sample.bin | grep '4d 5a'
```

Example:

```bash
strings -a -t x memory.dmp | grep '4d 5a'
```

Looks for string representations of the MZ header to identify embedded executables (less reliable than hex editors but useful).

### strings sample.bin | grep -E '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}'

```bash
strings sample.bin | grep -E '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}'
```

Example:

```bash
strings dump.pst | grep -E '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}'
```

Extracts email addresses using a standard regex pattern.


## Section Analysis

### objcopy -O binary --only-section=.text sample.elf /dev/stdout | strings

```bash
objcopy -O binary --only-section=.text sample.elf /dev/stdout | strings
```

Example:

```bash
objcopy -O binary --only-section=.text malicious.elf /dev/stdout | strings
```

Extracts only the .text (code) section of an ELF binary and pipes it to strings to ignore data sections.

### objcopy -O binary --only-section=.rdata sample.exe /dev/stdout | strings

```bash
objcopy -O binary --only-section=.rdata sample.exe /dev/stdout | strings
```

Extracts the .rdata (read-only data) section where constants and import tables are usually stored.


## Complex Piping

### strings sample.bin | grep -vE '^.{0,4}$' | sort | uniq

```bash
strings sample.bin | grep -vE '^.{0,4}$' | sort | uniq
```

Example:

```bash
strings noise.bin | grep -vE '^.{0,4}$' | sort | uniq
```

Filters out very short strings (less than 5 chars), sorts the remainder, and removes duplicates.

### strings -e l sample.bin | iconv -f UTF-16LE -t UTF-8

```bash
strings -e l sample.bin | iconv -f UTF-16LE -t UTF-8
```

Example:

```bash
strings -e l windows.bin | iconv -f UTF-16LE -t UTF-8
```

Extracts Little Endian strings and converts them to UTF-8 for easier processing by other terminal tools.


## Timeline Analysis

### strings sample.bin | grep -E '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{1,2}'

```bash
strings sample.bin | grep -E '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{1,2}'
```

Example:

```bash
strings system.log | grep -E '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{1,2}'
```

Searches for standard syslog timestamps to build a rudimentary timeline from a binary blob.


## Obfuscation Detection

### strings sample.bin | awk 'length($0) > 100'

```bash
strings sample.bin | awk 'length($0) > 100'
```

Example:

```bash
strings packed.exe | awk 'length($0) > 100'
```

Isolates extremely long strings which may indicate packed data, base64 blobs, or embedded keys.

### strings -n 3 sample.bin | grep -E '^[a-zA-Z]+$'

```bash
strings -n 3 sample.bin | grep -E '^[a-zA-Z]+$'
```

Example:

```bash
strings obfuscated.js | grep -E '^[a-zA-Z]+$'
```

Filters for pure alphabetic strings to detect variable names or function calls in obfuscated scripts.


## Cross-Platform Analysis

### strings -e b -t x firmware.bin > big_endian_strings.txt

```bash
strings -e b -t x firmware.bin > big_endian_strings.txt
```

Example:

```bash
strings -e b -t x router_firmware.bin > big_endian_strings.txt
```

Creates a specific extraction file for Big Endian architecture targets often found in IoT devices.


## Live Memory Analysis

### sudo cat /proc/kcore | strings -n 10 | grep 'secret_key'

```bash
sudo cat /proc/kcore | strings -n 10 | grep 'secret_key'
```

Reads the live kernel memory (dangerous/requires root) and searches for a specific key in memory.


## File Identification

### strings sample.bin | head -n 5

```bash
strings sample.bin | head -n 5
```

Example:

```bash
strings unknown_file | head -n 5
```

Checks the very beginning of the file for readable headers (like 'ELF', 'MZ', 'JFIF') to identify file type.


## Compiler Artifacts

### strings sample.bin | grep -i 'gcc'

```bash
strings sample.bin | grep -i 'gcc'
```

Example:

```bash
strings linux_malware | grep -i 'gcc'
```

Searches for GCC version strings to identify the compiler version and environment used by the attacker.

### strings sample.bin | grep -i 'visual studio'

```bash
strings sample.bin | grep -i 'visual studio'
```

Example:

```bash
strings windows_malware | grep -i 'visual studio'
```

Identifies if the binary was compiled with Visual Studio, potentially revealing the linker version.


## Cleanup

### strings sample.bin > /dev/null

```bash
strings sample.bin > /dev/null
```

Example:

```bash
strings large_file.bin > /dev/null
```

Runs strings and discards output, useful for testing command execution time or stability on large files.

## Related tools

- [objdump](https://terminal.rokibulroni.com/tool/reversing/objdump)
- [Binwalk](https://terminal.rokibulroni.com/tool/forensics/binwalk)
- [bulk_extractor](https://terminal.rokibulroni.com/tool/forensics/bulk-extractor)
