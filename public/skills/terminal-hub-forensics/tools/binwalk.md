# Binwalk

> Analyses and extracts firmware images: finds embedded file systems, compressed data and executable code by signature and entropy.

- Category: Forensics
- Commands: 65
- Page: https://terminal.rokibulroni.com/tool/forensics/binwalk
- Homepage: https://github.com/ReFirmLabs/binwalk
- Documentation: https://github.com/ReFirmLabs/binwalk/wiki
- Tags: firmware, reverse engineering, extraction

## Install

- apt: `sudo apt install binwalk`
- brew: `brew install binwalk`
- cargo: `cargo install binwalk`

## Basic Syntax

### binwalk --help

```bash
binwalk --help
```

Displays the main help menu listing all available options and flags


## Basic Firmware Analysis

### binwalk firmware.bin

```bash
binwalk firmware.bin
```

Performs a default signature scan to identify embedded file types and offsets

### binwalk -B firmware.bin

```bash
binwalk -B firmware.bin
```

Explicitly enables the standard signature analysis scan mode


## Signature Scanning

### binwalk -b firmware.bin

```bash
binwalk -b firmware.bin
```

Runs a dumb scan that ignores smart signature keywords for broader matching

### binwalk -I firmware.bin

```bash
binwalk -I firmware.bin
```

Shows all scan results including those marked as invalid by the magic definitions

### binwalk -m ./magic.mgc firmware.bin

```bash
binwalk -m ./magic.mgc firmware.bin
```

Example:

```bash
binwalk -m ./custom_magic.mgc firmware.bin
```

Uses a custom magic signature file instead of the default system signatures

### binwalk -R "\x1f\x8b\x08" firmware.bin

```bash
binwalk -R "\x1f\x8b\x08" firmware.bin
```

Scans the file for a specific raw byte sequence

### binwalk -R "Copyright" firmware.bin

```bash
binwalk -R "Copyright" firmware.bin
```

Scans the file for a specific ASCII string occurrence


## Entropy Analysis

### binwalk -E firmware.bin

```bash
binwalk -E firmware.bin
```

Calculates and displays the entropy of the file to identify compressed or encrypted data

### binwalk -E -N firmware.bin

```bash
binwalk -E -N firmware.bin
```

Calculates entropy but suppresses the generation of the entropy graph plot

### binwalk -E -J firmware.bin

```bash
binwalk -E -J firmware.bin
```

Calculates entropy and saves the resulting graph as a PNG image

### binwalk -E -Q firmware.bin

```bash
binwalk -E -Q firmware.bin
```

Calculates entropy and omits the legend from the generated graph


## Filtering Results

### binwalk -y "filesystem" firmware.bin

```bash
binwalk -y "filesystem" firmware.bin
```

Filters output to only show results containing the string filesystem

### binwalk -y "filesystem" -y "copyright" firmware.bin

```bash
binwalk -y "filesystem" -y "copyright" firmware.bin
```

Filters output to show results matching either filesystem or copyright

### binwalk -x "invalid" firmware.bin

```bash
binwalk -x "invalid" firmware.bin
```

Filters output to exclude any results containing the string invalid


## Extraction Workflows

### binwalk -e firmware.bin

```bash
binwalk -e firmware.bin
```

Automatically extracts known file types found during the signature scan

### binwalk -D "png image:png" firmware.bin

```bash
binwalk -D "png image:png" firmware.bin
```

Extracts files matching the png image signature and saves them with a png extension

### binwalk -D "gzip compressed data:gz:gunzip %e" firmware.bin

```bash
binwalk -D "gzip compressed data:gz:gunzip %e" firmware.bin
```

Extracts gzip data, saves with gz extension, and runs gunzip on the extracted file

### binwalk -e -r firmware.bin

```bash
binwalk -e -r firmware.bin
```

Extracts known files and deletes the carved files after successful extraction

### binwalk -e -z firmware.bin

```bash
binwalk -e -z firmware.bin
```

Carves data based on signatures but does not execute external extraction utilities


## Recursive Analysis

### binwalk -M -e firmware.bin

```bash
binwalk -M -e firmware.bin
```

Recursively scans and extracts contents (Matryoshka mode) from extracted files

### binwalk -M -e -d 4 firmware.bin

```bash
binwalk -M -e -d 4 firmware.bin
```

Recursively extracts files but limits the recursion depth to 4 levels

### binwalk -M -e -C ./output_dir firmware.bin

```bash
binwalk -M -e -C ./output_dir firmware.bin
```

Recursively extracts contents into a specific custom directory


## Extraction Limits

### binwalk -e -j 1048576 firmware.bin

```bash
binwalk -e -j 1048576 firmware.bin
```

Extracts files but limits the size of each extracted file to 1MB

### binwalk -e -n 50 firmware.bin

```bash
binwalk -e -n 50 firmware.bin
```

Extracts files but stops after extracting 50 files


## Opcode Analysis

### binwalk -A firmware.bin

```bash
binwalk -A firmware.bin
```

Scans the file for common executable opcode signatures to identify CPU architecture

### binwalk -A -y "MIPS" firmware.bin

```bash
binwalk -A -y "MIPS" firmware.bin
```

Scans for opcodes and filters results to only show MIPS architecture matches


## Output & Logging

### binwalk -f scan.log firmware.bin

```bash
binwalk -f scan.log firmware.bin
```

Logs the scan results to a specified text file

### binwalk --csv firmware.bin

```bash
binwalk --csv firmware.bin
```

Formats the scan output as CSV for easy importing into spreadsheets

### binwalk --csv -f results.csv firmware.bin

```bash
binwalk --csv -f results.csv firmware.bin
```

Generates CSV formatted output and saves it directly to a file

### binwalk -t firmware.bin

```bash
binwalk -t firmware.bin
```

Formats the output nicely to fit the current terminal window width

### binwalk -q firmware.bin

```bash
binwalk -q firmware.bin
```

Runs the scan quietly, suppressing standard output unless errors occur

### binwalk -v firmware.bin

```bash
binwalk -v firmware.bin
```

Enables verbose logging to display internal tool processing details


## Data Manipulation

### binwalk -l 1024 firmware.bin

```bash
binwalk -l 1024 firmware.bin
```

Scans only the first 1024 bytes of the input file

### binwalk -o 4096 firmware.bin

```bash
binwalk -o 4096 firmware.bin
```

Starts the scan at offset 4096, skipping the beginning of the file

### binwalk -O 0x800000 firmware.bin

```bash
binwalk -O 0x800000 firmware.bin
```

Sets a custom base address for the scan, useful for memory dumps

### binwalk -g 2 firmware.bin

```bash
binwalk -g 2 firmware.bin
```

Reverses every 2 bytes before scanning, useful for endianness swaps


## Binary Diffing

### binwalk -W firmware1.bin firmware2.bin

```bash
binwalk -W firmware1.bin firmware2.bin
```

Performs a hexdump comparison between two or more files

### binwalk -W -G firmware1.bin firmware2.bin

```bash
binwalk -W -G firmware1.bin firmware2.bin
```

Diffs files and only shows lines where bytes are identical (Green mode)

### binwalk -W -i firmware1.bin firmware2.bin

```bash
binwalk -W -i firmware1.bin firmware2.bin
```

Diffs files and only shows lines where bytes differ among all files (Red mode)

### binwalk -W -U firmware1.bin firmware2.bin

```bash
binwalk -W -U firmware1.bin firmware2.bin
```

Diffs files and only shows lines where bytes differ among some files (Blue mode)


## Incident Response

### binwalk -E -B firmware.bin

```bash
binwalk -E -B firmware.bin
```

Combines entropy analysis with signature scanning to correlate high entropy areas

### binwalk -e --disable-plugin=lzma firmware.bin

```bash
binwalk -e --disable-plugin=lzma firmware.bin
```

Extracts firmware while disabling the LZMA plugin to prevent false positives


## Malware Detection

### binwalk -A -l 5000 firmware.bin

```bash
binwalk -A -l 5000 firmware.bin
```

Checks the bootloader area (first 5000 bytes) for executable code signatures


## Blue Team Validation

### binwalk -y "private key" firmware.bin

```bash
binwalk -y "private key" firmware.bin
```

Specifically scans for potential embedded private key certificates

### binwalk -R "\x7fELF" firmware.bin

```bash
binwalk -R "\x7fELF" firmware.bin
```

Validates the presence of ELF binaries using raw hex signatures


## Forensics Reporting

### binwalk -B -f report.txt --csv firmware.bin

```bash
binwalk -B -f report.txt --csv firmware.bin
```

Generates a standard signature scan report in CSV format for external processing


## Advanced Workflow

### binwalk -Me -f analysis.log firmware.bin

```bash
binwalk -Me -f analysis.log firmware.bin
```

Performs full recursive extraction and logs all findings to a file

### binwalk -B -e -p firmware.bin

```bash
binwalk -B -e -p firmware.bin
```

Scans and extracts files while explicitly disabling plugins for raw handling

### binwalk -y "filesystem" -e firmware.bin

```bash
binwalk -y "filesystem" -e firmware.bin
```

Extracts only the identified filesystem components, ignoring other artifacts

### binwalk -E -o 1000 -l 2000 firmware.bin

```bash
binwalk -E -o 1000 -l 2000 firmware.bin
```

Analyzes entropy for a specific middle chunk of the firmware image

### binwalk -M -e -r --directory=investigation firmware.bin

```bash
binwalk -M -e -r --directory=investigation firmware.bin
```

Clean recursive extraction into a named folder, deleting carved archives after expansion


## Defensive Validation

### binwalk --status firmware.bin

```bash
binwalk --status firmware.bin
```

Shows the memory usage and running status of the scan (if supported by version)


## Advanced Carving

### binwalk -D "jpeg:jpg" firmware.bin

```bash
binwalk -D "jpeg:jpg" firmware.bin
```

Carves all JPEG files found in the binary without executing any helper scripts


## Automation

### binwalk -q -e firmware.bin

```bash
binwalk -q -e firmware.bin
```

Runs extraction in quiet mode for use in automated pipelines or scripts


## Plugin Management

### binwalk --enable-plugin=zlib firmware.bin

```bash
binwalk --enable-plugin=zlib firmware.bin
```

Explicitly enables the zlib scanning plugin

### binwalk --list-plugins

```bash
binwalk --list-plugins
```

Lists all available binwalk scan plugins


## Visual Analysis

### binwalk -3 firmware.bin

```bash
binwalk -3 firmware.bin
```

Enables 3D visualization of the entropy plot (requires pyqtgraph)


## Signature Debugging

### binwalk -B -v firmware.bin

```bash
binwalk -B -v firmware.bin
```

Runs a signature scan with verbose output to debug false positive signatures


## Complex Extraction

### binwalk -D "uimage header:uimage" -D "gzip:gz:gunzip %e" firmware.bin

```bash
binwalk -D "uimage header:uimage" -D "gzip:gz:gunzip %e" firmware.bin
```

Defines multiple custom extraction rules for uImage headers and gzip data simultaneously


## Offset Analysis

### binwalk -y "squashfs" -t firmware.bin

```bash
binwalk -y "squashfs" -t firmware.bin
```

Locates SquashFS offsets and formats the output for easy reading


## Reverse Engineering

### binwalk -A -O 0x400000 firmware.bin

```bash
binwalk -A -O 0x400000 firmware.bin
```

Scans for opcodes assuming the firmware is loaded at memory address 0x400000


## Forensics cleanup

### binwalk --rm firmware.bin

```bash
binwalk --rm firmware.bin
```

Scans and cleans up zero-size files generated during extraction attempts


## Math Analysis

### binwalk -E -K 1024 firmware.bin

```bash
binwalk -E -K 1024 firmware.bin
```

Performs entropy analysis using a custom block size of 1024 bytes


## System Info

### binwalk --examples

```bash
binwalk --examples
```

Displays built-in usage examples and common command patterns

## Related tools

- [Foremost](https://terminal.rokibulroni.com/tool/forensics/foremost)
- [strings](https://terminal.rokibulroni.com/tool/forensics/strings)
- [ExifTool](https://terminal.rokibulroni.com/tool/forensics/exiftool)
