# Foremost

> Recovers files from disk images and raw data by carving their headers and footers, even without a file system.

- Category: Forensics
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/forensics/foremost
- Homepage: https://foremost.sourceforge.net
- Tags: file carving, recovery, DFIR

## Install

- apt: `sudo apt install foremost`
- brew: `brew install foremost`

## Basic Usage

### foremost -h

```bash
foremost -h
```

Displays the help screen with a summary of available command line options

### foremost -V

```bash
foremost -V
```

Displays the current version information and copyright details of the tool

### foremost [image_file]

```bash
foremost [image_file]
```

Example:

```bash
foremost image.dd
```

Carves recoverable files from a disk image using default settings and signatures


## Input Handling

### foremost -i [input_file]

```bash
foremost -i [input_file]
```

Example:

```bash
foremost -i memory_dump.mem
```

Explicitly specifies the input file or image to be processed for file carving


## Output Control

### foremost -o [output_dir] -i [image_file]

```bash
foremost -o [output_dir] -i [image_file]
```

Example:

```bash
foremost -o recovered_data -i drive.img
```

Specifies a custom output directory to store the recovered files and report

### foremost -T -i [image_file]

```bash
foremost -T -i [image_file]
```

Example:

```bash
foremost -T -i suspect_disk.dd
```

Appends a timestamp to the output directory name to prevent overwriting previous results

### foremost -v -i [image_file]

```bash
foremost -v -i [image_file]
```

Example:

```bash
foremost -v -i evidence.img
```

Enables verbose mode to display detailed processing information to the screen

### foremost -Q -i [image_file]

```bash
foremost -Q -i [image_file]
```

Example:

```bash
foremost -Q -i sensitive.dd
```

Enables quiet mode to suppress output messages and protect privacy during processing


## File Type Carving

### foremost -t all -i [image_file]

```bash
foremost -t all -i [image_file]
```

Example:

```bash
foremost -t all -i usb_dump.img
```

Attempts to carve all supported file types defined in the configuration

### foremost -t jpg -i [image_file]

```bash
foremost -t jpg -i [image_file]
```

Example:

```bash
foremost -t jpg -i camera_card.dd
```

Restricts file carving specifically to JPEG image files

### foremost -t png -i [image_file]

```bash
foremost -t png -i [image_file]
```

Example:

```bash
foremost -t png -i screenshot_dump.raw
```

Restricts file carving specifically to PNG image files

### foremost -t gif -i [image_file]

```bash
foremost -t gif -i [image_file]
```

Example:

```bash
foremost -t gif -i web_cache.dd
```

Restricts file carving specifically to GIF image files

### foremost -t pdf -i [image_file]

```bash
foremost -t pdf -i [image_file]
```

Example:

```bash
foremost -t pdf -i documents.img
```

Restricts file carving specifically to PDF documents

### foremost -t doc -i [image_file]

```bash
foremost -t doc -i [image_file]
```

Example:

```bash
foremost -t doc -i legacy_files.dd
```

Restricts file carving specifically to legacy Microsoft Word documents

### foremost -t ole -i [image_file]

```bash
foremost -t ole -i [image_file]
```

Example:

```bash
foremost -t ole -i corporate_disk.img
```

Carves OLE compound files like PowerPoint, Word, Excel, and MSI installers

### foremost -t zip -i [image_file]

```bash
foremost -t zip -i [image_file]
```

Example:

```bash
foremost -t zip -i backup.dd
```

Carves ZIP archives and formats based on ZIP containers like Jar and Office XML

### foremost -t html -i [image_file]

```bash
foremost -t html -i [image_file]
```

Example:

```bash
foremost -t html -i browser_cache.img
```

Carves HTML files which is useful for reconstructing web browsing history

### foremost -t exe -i [image_file]

```bash
foremost -t exe -i [image_file]
```

Example:

```bash
foremost -t exe -i malware_sample.mem
```

Carves Windows PE executables which is critical for malware analysis

### foremost -t jpg,pdf -i [image_file]

```bash
foremost -t jpg,pdf -i [image_file]
```

Example:

```bash
foremost -t jpg,pdf -i mixed_evidence.dd
```

Carves only JPEG images and PDF documents simultaneously


## Configuration & Tuning

### foremost -c [config_file] -i [image_file]

```bash
foremost -c [config_file] -i [image_file]
```

Example:

```bash
foremost -c custom.conf -i device.img
```

Uses a specific configuration file with custom headers and footers

### foremost -b [size] -i [image_file]

```bash
foremost -b [size] -i [image_file]
```

Example:

```bash
foremost -b 1024 -i data.img
```

Sets the block size used for reading the input file to optimize performance

### foremost -k [size] -i [image_file]

```bash
foremost -k [size] -i [image_file]
```

Example:

```bash
foremost -k 512 -i memory.dump
```

Sets the chunk size for checking headers which helps with alignment

### foremost -s [sectors] -i [image_file]

```bash
foremost -s [sectors] -i [image_file]
```

Example:

```bash
foremost -s 2048 -i partition.img
```

Skips the specified number of blocks before starting the extraction process


## Audit & Logging

### foremost -w -i [image_file]

```bash
foremost -w -i [image_file]
```

Example:

```bash
foremost -w -i drive_clone.dd
```

Writes an audit file only without actually extracting any files to disk

### foremost -q -i [image_file]

```bash
foremost -q -i [image_file]
```

Example:

```bash
foremost -q -i large_drive.img
```

Enables Quick mode to search only at sector boundaries for faster processing


## Advanced Options

### foremost -d -i [image_file]

```bash
foremost -d -i [image_file]
```

Example:

```bash
foremost -d -i unix_disk.dd
```

Enables indirect block detection for Unix file systems to handle fragmentation

### foremost -a -i [image_file]

```bash
foremost -a -i [image_file]
```

Example:

```bash
foremost -a -i corrupted.img
```

Writes all headers found even if no footer is detected which allows partial recovery


## Combined Workflows

### foremost -v -T -t all -i [image_file]

```bash
foremost -v -T -t all -i [image_file]
```

Example:

```bash
foremost -v -T -t all -i investigation.dd
```

Carves all files with verbose logging and timestamped output for case management

### foremost -Q -o [dir] -t jpg,png -i [image_file]

```bash
foremost -Q -o [dir] -t jpg,png -i [image_file]
```

Example:

```bash
foremost -Q -o images_only -t jpg,png -i server.img
```

Quietly extracts only common image formats to a specific directory


## Incident Response

### foremost -t exe,elf -o [dir] -i [image_file]

```bash
foremost -t exe,elf -o [dir] -i [image_file]
```

Example:

```bash
foremost -t exe,elf -o binaries -i infected_host.img
```

Targets executable binaries for Windows and Linux to isolate potential malware

### foremost -t rar,zip,7z -i [image_file]

```bash
foremost -t rar,zip,7z -i [image_file]
```

Example:

```bash
foremost -t rar,zip,7z -i exfil_data.dd
```

Focuses on archive formats often used by attackers for data exfiltration


## Digital Forensics

### foremost -s 63 -t all -i [image_file]

```bash
foremost -s 63 -t all -i [image_file]
```

Example:

```bash
foremost -s 63 -t all -i full_disk.img
```

Skips the standard track 0 area to start carving at the first partition start

### foremost -c foremost.conf -v -w -i [image_file]

```bash
foremost -c foremost.conf -v -w -i [image_file]
```

Example:

```bash
foremost -c cases/case1.conf -v -w -i drive.dd
```

Validates a custom config file against an image with verbose audit logging


## Blue Team Validation

### foremost -t log -i [image_file]

```bash
foremost -t log -i [image_file]
```

Example:

```bash
foremost -t log -i var_log.img
```

Attempts to recover deleted log files to reconstruct event timelines


## Data Recovery

### foremost -a -t mpg,avi,mov -i [image_file]

```bash
foremost -a -t mpg,avi,mov -i [image_file]
```

Example:

```bash
foremost -a -t mpg,avi,mov -i dvr_disk.dd
```

Forcefully recovers video fragments without footers from DVR systems

### foremost -b 4096 -t all -i [image_file]

```bash
foremost -b 4096 -t all -i [image_file]
```

Example:

```bash
foremost -b 4096 -t all -i 4k_sector_disk.dd
```

Adjusts block size to 4096 bytes for modern advanced format drives


## Advanced Carving

### foremost -k 1024 -q -i [image_file]

```bash
foremost -k 1024 -q -i [image_file]
```

Example:

```bash
foremost -k 1024 -q -i ram_dump.mem
```

Uses a larger chunk size with quick mode for rapid memory artifact assessment


## Configuration

### foremost -c /etc/foremost.conf -t all -i [image_file]

```bash
foremost -c /etc/foremost.conf -t all -i [image_file]
```

Example:

```bash
foremost -c /etc/foremost.conf -t all -i evidence.dd
```

Explicitly calls the system-wide configuration file for standard processing


## File Type Carving

### foremost -t wav,rif -i [image_file]

```bash
foremost -t wav,rif -i [image_file]
```

Example:

```bash
foremost -t wav,rif -i audio_recorder.img
```

Targets audio files specifically for voice recorder forensics

### foremost -t bmp -i [image_file]

```bash
foremost -t bmp -i [image_file]
```

Example:

```bash
foremost -t bmp -i old_windows.img
```

Recovers uncompressed bitmap images often found in older systems or steganography


## Advanced Workflows

### foremost -o ./audit_run -w -t all -i [image_file]

```bash
foremost -o ./audit_run -w -t all -i [image_file]
```

Example:

```bash
foremost -o ./audit_run -w -t all -i unknown_fs.dd
```

Performs a dry run to estimate recoverable data types without writing files


## Incident Response

### foremost -t sxw,sxc,sxi -i [image_file]

```bash
foremost -t sxw,sxc,sxi -i [image_file]
```

Example:

```bash
foremost -t sxw,sxc,sxi -i linux_desktop.dd
```

Targets OpenOffice documents useful for Linux desktop investigations

### foremost -t wmv,wma -i [image_file]

```bash
foremost -t wmv,wma -i [image_file]
```

Example:

```bash
foremost -t wmv,wma -i media_server.dd
```

Recovers Windows Media formats to identify unauthorized media usage


## Advanced Options

### foremost -T -v -q -i [image_file]

```bash
foremost -T -v -q -i [image_file]
```

Example:

```bash
foremost -T -v -q -i triage_image.dd
```

Combines timestamp, verbose, and quick mode for rapid on-site triage


## Configuration

### foremost -c local.conf -o specialized -i [image_file]

```bash
foremost -c local.conf -o specialized -i [image_file]
```

Example:

```bash
foremost -c local.conf -o specialized -i proprietary.dd
```

Uses a local config for proprietary file headers outputting to a named folder


## File Type Carving

### foremost -t htm -i [image_file]

```bash
foremost -t htm -i [image_file]
```

Example:

```bash
foremost -t htm -i web_server_logs.img
```

Separately targets HTM extensions if distinguished from HTML in config

### foremost -t cpp,c,h -i [image_file]

```bash
foremost -t cpp,c,h -i [image_file]
```

Example:

```bash
foremost -t cpp,c,h -i developer_disk.dd
```

Attempts to recover C/C++ source code files based on headers if configured


## Pipeline Workflow

### foremost -o raw_carve -i [image_file] && zip -r case.zip raw_carve

```bash
foremost -o raw_carve -i [image_file] && zip -r case.zip raw_carve
```

Example:

```bash
foremost -o raw_carve -i disk.img && zip -r case.zip raw_carve
```

Chains foremost execution with zip to immediately archive the recovered evidence


## Digital Forensics

### foremost -s 100 -b 512 -i [image_file]

```bash
foremost -s 100 -b 512 -i [image_file]
```

Example:

```bash
foremost -s 100 -b 512 -i floppy.img
```

Skips the first 100 blocks on a legacy media with small block size


## Blue Team Validation

### foremost -v -i [image_file] > carving.log 2>&1

```bash
foremost -v -i [image_file] > carving.log 2>&1
```

Example:

```bash
foremost -v -i server.dd > carving.log 2>&1
```

Redirects verbose output to a log file for post-incident documentation


## File Type Carving

### foremost -t gz,tgz -i [image_file]

```bash
foremost -t gz,tgz -i [image_file]
```

Example:

```bash
foremost -t gz,tgz -i linux_backup.dd
```

Recovers GZIP compressed files common in Unix/Linux environments


## Advanced Options

### foremost -d -T -i [image_file]

```bash
foremost -d -T -i [image_file]
```

Example:

```bash
foremost -d -T -i ext4_partition.dd
```

Uses indirect block detection with timestamped output for Linux partitions


## Output Control

### foremost -o /tmp/recovery -i [image_file]

```bash
foremost -o /tmp/recovery -i [image_file]
```

Example:

```bash
foremost -o /tmp/recovery -i usb.img
```

Directs output to a temporary filesystem to avoid writing to evidence handling drives


## Advanced Workflows

### foremost -t all -i - < [image_file]

```bash
foremost -t all -i - < [image_file]
```

Example:

```bash
cat image.dd | foremost -t all -i -
```

Accepts input from stdin allowing for piping from other tools like netcat or dd


## File Type Carving

### foremost -t ppt,xls,doc -i [image_file]

```bash
foremost -t ppt,xls,doc -i [image_file]
```

Example:

```bash
foremost -t ppt,xls,doc -i office_2003.dd
```

Specifically targets pre-2007 Microsoft Office binary formats

### foremost -t pptx,xlsx,docx -i [image_file]

```bash
foremost -t pptx,xlsx,docx -i [image_file]
```

Example:

```bash
foremost -t pptx,xlsx,docx -i office_2019.dd
```

Specifically targets modern XML-based Microsoft Office formats (requires config)


## Triage

### foremost -q -t jpg -T -i [image_file]

```bash
foremost -q -t jpg -T -i [image_file]
```

Example:

```bash
foremost -q -t jpg -T -i user_folder.dd
```

Runs a quick mode scan for JPEGs with timestamping for rapid media triage


## Validation

### foremost -w -c custom_headers.conf -i [image_file]

```bash
foremost -w -c custom_headers.conf -i [image_file]
```

Example:

```bash
foremost -w -c custom_headers.conf -i test_set.dd
```

Audits a disk image against custom headers to verify signature effectiveness


## Forensics

### foremost -o evidence/ -v -d -i [image_file]

```bash
foremost -o evidence/ -v -d -i [image_file]
```

Example:

```bash
foremost -o evidence/ -v -d -i fragmented.dd
```

Combines indirect block detection and verbose mode into a dedicated evidence folder


## Full Recovery

### foremost -t all -a -v -T -i [image_file]

```bash
foremost -t all -a -v -T -i [image_file]
```

Example:

```bash
foremost -t all -a -v -T -i final_attempt.dd
```

Runs the most aggressive recovery mode with all types, header-only writing, and logs

## Related tools

- [bulk_extractor](https://terminal.rokibulroni.com/tool/forensics/bulk-extractor)
- [Binwalk](https://terminal.rokibulroni.com/tool/forensics/binwalk)
- [The Sleuth Kit](https://terminal.rokibulroni.com/tool/forensics/sleuthkit)
