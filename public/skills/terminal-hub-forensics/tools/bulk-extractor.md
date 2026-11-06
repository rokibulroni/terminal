# bulk_extractor

> Scans disk images and files for email addresses, URLs, credit-card numbers and other features without parsing the file system.

- Category: Forensics
- Commands: 65
- Page: https://terminal.rokibulroni.com/tool/forensics/bulk-extractor
- Homepage: https://github.com/simsong/bulk_extractor
- Documentation: https://github.com/simsong/bulk_extractor/wiki
- Tags: DFIR, feature extraction

## Install

- apt: `sudo apt install bulk-extractor`
- brew: `brew install bulk_extractor`

## Basic Forensic Scanning

### bulk_extractor -o output_dir image.dd

```bash
bulk_extractor -o output_dir image.dd
```

Example:

```bash
bulk_extractor -o case001_output suspect_drive.dd
```

Performs a default forensic scan on a raw disk image and saves artifacts to the specified directory

### bulk_extractor -h

```bash
bulk_extractor -h
```

Displays the help menu with a list of available command-line options and flags

### bulk_extractor -V

```bash
bulk_extractor -V
```

Displays the version information and compilation details of the tool

### bulk_extractor -H

```bash
bulk_extractor -H
```

Lists all available scanners and their current status (enabled or disabled)


## Input Handling and Scanning Scope

### bulk_extractor -R -o output_dir directory_path

```bash
bulk_extractor -R -o output_dir directory_path
```

Example:

```bash
bulk_extractor -R -o evidence_out /mnt/evidence_files
```

Recursively scans a directory of files treating them as inputs for artifact extraction

### bulk_extractor -o output_dir -

```bash
bulk_extractor -o output_dir -
```

Example:

```bash
cat image.dd | bulk_extractor -o output_dir -
```

Accepts input from standard input (stdin) via a pipe for streaming analysis


## Performance and Tuning

### bulk_extractor -j 4 -o output_dir image.dd

```bash
bulk_extractor -j 4 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -j 8 -o fast_scan image.dd
```

Specifies the number of parallel threads to use for faster processing


## Feature and Artifact Extraction

### bulk_extractor -x all -E email -o output_dir image.dd

```bash
bulk_extractor -x all -E email -o output_dir image.dd
```

Example:

```bash
bulk_extractor -x all -E email -o mail_artifacts image.dd
```

Disables all default scanners and enables only the email scanner for targeted extraction

### bulk_extractor -E accts -o output_dir image.dd

```bash
bulk_extractor -E accts -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E accts -o accounts_out image.dd
```

Enables the accounts scanner to detect credit card numbers and other financial identifiers

### bulk_extractor -E url -o output_dir image.dd

```bash
bulk_extractor -E url -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E url -o web_history image.dd
```

Enables the URL scanner to extract web addresses and domain names from the image

### bulk_extractor -E exif -o output_dir image.dd

```bash
bulk_extractor -E exif -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E exif -o photo_metadata image.dd
```

Extracts EXIF metadata from image files embedded within the disk image

### bulk_extractor -E gps -o output_dir image.dd

```bash
bulk_extractor -E gps -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E gps -o geo_data image.dd
```

Scans for GPS coordinates and geolocation data within files and metadata

### bulk_extractor -E net -o output_dir image.dd

```bash
bulk_extractor -E net -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E net -o network_trace image.dd
```

Parses network packets found in the image to extract IP addresses and packet data

### bulk_extractor -E json -o output_dir image.dd

```bash
bulk_extractor -E json -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E json -o json_data image.dd
```

Detects and extracts JSON objects typically found in logs and web applications

### bulk_extractor -E aes -o output_dir image.dd

```bash
bulk_extractor -E aes -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E aes -o crypto_keys image.dd
```

Scans for AES key schedules in memory dumps or disk images to recover encryption keys

### bulk_extractor -E base64 -o output_dir image.dd

```bash
bulk_extractor -E base64 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E base64 -o encoded_data image.dd
```

Decodes Base64 strings found in the image and extracts features from the decoded content

### bulk_extractor -E elf -o output_dir image.dd

```bash
bulk_extractor -E elf -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E elf -o linux_bins image.dd
```

Identifies and extracts information from ELF executables common in Linux systems

### bulk_extractor -E winpe -o output_dir image.dd

```bash
bulk_extractor -E winpe -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E winpe -o windows_exe image.dd
```

Scans for Windows Portable Executable (PE) file headers and imports/exports

### bulk_extractor -E windirs -o output_dir image.dd

```bash
bulk_extractor -E windirs -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E windirs -o dir_entries image.dd
```

Extracts Windows directory entries and file metadata from FAT and NTFS artifacts

### bulk_extractor -E winprefetch -o output_dir image.dd

```bash
bulk_extractor -E winprefetch -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E winprefetch -o prefetch_artifacts image.dd
```

Parses Windows Prefetch files to determine application execution history

### bulk_extractor -E zip -o output_dir image.dd

```bash
bulk_extractor -E zip -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E zip -o archive_contents image.dd
```

Locates ZIP archive headers and extracts metadata about compressed files

### bulk_extractor -E gzip -o output_dir image.dd

```bash
bulk_extractor -E gzip -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E gzip -o comp_streams image.dd
```

Detects and processes GZIP compressed streams to extract internal content

### bulk_extractor -E pdf -o output_dir image.dd

```bash
bulk_extractor -E pdf -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E pdf -o document_meta image.dd
```

Extracts text and metadata from PDF document structures found in the image

### bulk_extractor -E hiber -o output_dir image.dd

```bash
bulk_extractor -E hiber -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E hiber -o hibernation_data image.dd
```

Scans Windows hibernation files for decompressed pages and artifacts


## Scanning Controls

### bulk_extractor -Y 1000 -o output_dir image.dd

```bash
bulk_extractor -Y 1000 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -Y 500000 -o partition_start image.dd
```

Starts the forensic scan at a specific byte offset into the image file

### bulk_extractor -L 1G -o output_dir image.dd

```bash
bulk_extractor -L 1G -o output_dir image.dd
```

Example:

```bash
bulk_extractor -L 500M -o sample_scan image.dd
```

Limits the scan to a specific size (e.g., 1 gigabyte) from the start point


## Output and Logging

### bulk_extractor -b banner.txt -o output_dir image.dd

```bash
bulk_extractor -b banner.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -b case_header.txt -o output_dir image.dd
```

Adds the contents of a banner file to the top of every output feature file


## Filtering and Stoplists

### bulk_extractor -w stoplist.txt -o output_dir image.dd

```bash
bulk_extractor -w stoplist.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -w whitelist_words.txt -o clean_output image.dd
```

Uses a stoplist file to exclude specific terms or features from the final output

### bulk_extractor -F filter_terms.txt -o output_dir image.dd

```bash
bulk_extractor -F filter_terms.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -F search_terms.txt -o specific_hits image.dd
```

Uses a filter file to only include features that match specific terms


## Advanced Configuration

### bulk_extractor -S word_min=6 -o output_dir image.dd

```bash
bulk_extractor -S word_min=6 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -S word_min=10 -o long_words image.dd
```

Sets the minimum length of extracted words for the wordlist scanner to 6 characters

### bulk_extractor -S word_max=20 -o output_dir image.dd

```bash
bulk_extractor -S word_max=20 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -S word_max=15 -o short_words image.dd
```

Sets the maximum length of extracted words to reduce noise in wordlist generation


## Performance and Tuning

### bulk_extractor -M 50 -o output_dir image.dd

```bash
bulk_extractor -M 50 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -M 100 -o deep_scan image.dd
```

Sets the maximum recursion depth for scanners that explore compressed or encoded data

### bulk_extractor -m 100 -o output_dir image.dd

```bash
bulk_extractor -m 100 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -m 200 -o large_mem_scan image.dd
```

Sets the maximum number of megabytes to process for a single file during recursion


## Incident Response Investigations

### bulk_extractor -E kml -o output_dir ram_dump.mem

```bash
bulk_extractor -E kml -o output_dir ram_dump.mem
```

Example:

```bash
bulk_extractor -E kml -o geo_artifacts ram.raw
```

Scans a RAM dump for KML (Keyhole Markup Language) data to find geolocation artifacts

### bulk_extractor -x all -E facebook -o output_dir image.dd

```bash
bulk_extractor -x all -E facebook -o output_dir image.dd
```

Example:

```bash
bulk_extractor -x all -E facebook -o social_media image.dd
```

Specifically targets Facebook-related artifacts like IDs and chat fragments


## Advanced Feature Extraction

### bulk_extractor -E ssn -o output_dir image.dd

```bash
bulk_extractor -E ssn -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E ssn -o pii_scan image.dd
```

Enables the Social Security Number scanner to identify PII within the target

### bulk_extractor -E vcard -o output_dir image.dd

```bash
bulk_extractor -E vcard -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E vcard -o contacts_scan image.dd
```

Extracts vCard contact information often found in mobile backups and emails


## Output and Logging

### bulk_extractor -q -o output_dir image.dd

```bash
bulk_extractor -q -o output_dir image.dd
```

Example:

```bash
bulk_extractor -q -o silent_scan image.dd
```

Runs the tool in quiet mode, suppressing status messages to stdout for cleaner logs


## Scanning Controls

### bulk_extractor -1 -o output_dir image.dd

```bash
bulk_extractor -1 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -1 -o single_thread image.dd
```

Forces the tool to run on a single thread, useful for debugging or limited resources


## Advanced Configuration

### bulk_extractor -S ssn_mode=1 -o output_dir image.dd

```bash
bulk_extractor -S ssn_mode=1 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -S ssn_mode=2 -o strict_ssn image.dd
```

Adjusts the sensitivity or validation mode of the SSN scanner via configuration variables


## Blue Team Defensive Validation

### bulk_extractor -E wordlist -o output_dir image.dd

```bash
bulk_extractor -E wordlist -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E wordlist -o pass_audit image.dd
```

Generates a wordlist of all strings in the image for password cracking audits


## Threat Hunting

### bulk_extractor -r alert_list.txt -o output_dir image.dd

```bash
bulk_extractor -r alert_list.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -r ioc_list.txt -o threat_hunt image.dd
```

Uses an alert list (globally) to flag specific indicators of compromise (IOCs) found in the image


## Output and Logging

### bulk_extractor -o output_dir -S report_context_width=64 image.dd

```bash
bulk_extractor -o output_dir -S report_context_width=64 image.dd
```

Example:

```bash
bulk_extractor -o extended_context -S report_context_width=128 image.dd
```

Increases the amount of context data saved around a feature in the report file


## Advanced Configuration

### bulk_extractor -z 0 -o output_dir image.dd

```bash
bulk_extractor -z 0 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -z 0 -o start_zero image.dd
```

Start the page numbering at zero instead of one for the output histogram


## Incident Response Investigations

### bulk_extractor -E httplogs -o output_dir image.dd

```bash
bulk_extractor -E httplogs -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E httplogs -o web_logs image.dd
```

Parses common HTTP server log formats from unallocated space or log files


## Automation and Pipeline Workflows

### bulk_extractor -o output_dir -C 100 image.dd

```bash
bulk_extractor -o output_dir -C 100 image.dd
```

Example:

```bash
bulk_extractor -o huge_scan -C 500 big_image.dd
```

Creates a crash checkpoint file every specified number of megabytes to allow resuming


## Advanced Configuration

### bulk_extractor -G 20 -o output_dir image.dd

```bash
bulk_extractor -G 20 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -G 50 -o small_page image.dd
```

Sets the page size for analysis in megabytes, affecting memory usage and granularity


## Feature and Artifact Extraction

### bulk_extractor -E ether -o output_dir image.dd

```bash
bulk_extractor -E ether -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E ether -o mac_addrs image.dd
```

Scans specifically for Ethernet MAC addresses in the raw data


## Input Handling and Scanning Scope

### bulk_extractor -o output_dir -s 512 image.dd

```bash
bulk_extractor -o output_dir -s 512 image.dd
```

Example:

```bash
bulk_extractor -o output_dir -s 1 image.raw
```

Sets the sampling rate to process only a fraction of the data for rapid triage


## Advanced Configuration

### bulk_extractor -S opt_context=1 -o output_dir image.dd

```bash
bulk_extractor -S opt_context=1 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -S opt_context=0 -o no_context image.dd
```

Enables or disables the saving of context data alongside extracted features


## Blue Team Defensive Validation

### bulk_extractor -E find -S find_regex=regex.txt -o output_dir image.dd

```bash
bulk_extractor -E find -S find_regex=regex.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E find -S find_regex=pii_patterns.txt -o regex_scan image.dd
```

Uses the 'find' scanner with a user-provided file of regex patterns for custom data detection


## Advanced Feature Extraction

### bulk_extractor -E outlook -o output_dir image.dd

```bash
bulk_extractor -E outlook -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E outlook -o pst_ost image.dd
```

Scans for Outlook PST and OST file structures and email artifacts

### bulk_extractor -E fe80 -o output_dir image.dd

```bash
bulk_extractor -E fe80 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E fe80 -o ipv6_link_local image.dd
```

Scans specifically for IPv6 Link-Local addresses in the data


## Threat Hunting

### bulk_extractor -E xor -o output_dir image.dd

```bash
bulk_extractor -E xor -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E xor -o obfuscated_data image.dd
```

Attempts to detect XOR-encoded strings often used by malware to hide configuration data


## Advanced Combined Workflow

### bulk_extractor -x all -E email -E url -E ip -w whitelist.txt -o output_dir image.dd

```bash
bulk_extractor -x all -E email -E url -E ip -w whitelist.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -x all -E email -E url -E ip -w known_good.txt -o triage image.dd
```

Runs a targeted triage scan for communication artifacts while excluding known safe domains

### bulk_extractor -R -j 16 -M 20 -o output_dir /evidence/files

```bash
bulk_extractor -R -j 16 -M 20 -o output_dir /evidence/files
```

Example:

```bash
bulk_extractor -R -j 32 -M 50 -o massive_dir_scan /mnt/server_dump
```

High-performance recursive directory scan with deep recursion limits and high thread count


## Automation and Pipeline Workflows

### bulk_extractor -o output_dir -S fmt=json image.dd

```bash
bulk_extractor -o output_dir -S fmt=json image.dd
```

Example:

```bash
bulk_extractor -o json_output -S fmt=json image.dd
```

Configures the output format to JSON for easier ingestion into other analysis tools (if supported by build)


## Feature and Artifact Extraction

### bulk_extractor -E sqlite -o output_dir image.dd

```bash
bulk_extractor -E sqlite -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E sqlite -o db_fragments image.dd
```

Scans for SQLite database pages and recovers deleted records from free space


## Advanced Feature Extraction

### bulk_extractor -E lightgrep -S lightgrep_keywords=keywords.txt -o output_dir image.dd

```bash
bulk_extractor -E lightgrep -S lightgrep_keywords=keywords.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E lightgrep -S lightgrep_keywords=search.txt -o fast_search image.dd
```

Uses the Lightgrep engine (if compiled) for extremely fast keyword searching


## Incident Response Investigations

### bulk_extractor -E utmp -o output_dir image.dd

```bash
bulk_extractor -E utmp -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E utmp -o login_history image.dd
```

Extracts login records from Unix utmp/wtmp structures found in the image


## Performance and Tuning

### bulk_extractor -P /path/to/plugins -o output_dir image.dd

```bash
bulk_extractor -P /path/to/plugins -o output_dir image.dd
```

Example:

```bash
bulk_extractor -P ./custom_scanners -o plugin_scan image.dd
```

Specifies a custom directory to load additional shared object scanners or plugins


## Advanced Combined Workflow

### bulk_extractor -Y 1000 -L 500M -x all -E aes -E base64 -o output_dir image.dd

```bash
bulk_extractor -Y 1000 -L 500M -x all -E aes -E base64 -o output_dir image.dd
```

Example:

```bash
bulk_extractor -Y 0 -L 1G -x all -E aes -E base64 -o crypto_triage image.dd
```

Performs a focused cryptographic artifact scan on a specific slice of the disk image


## Digital Forensics Reporting

### bulk_extractor -S banner_file=header.txt -S report_file=report.xml -o output_dir image.dd

```bash
bulk_extractor -S banner_file=header.txt -S report_file=report.xml -o output_dir image.dd
```

Example:

```bash
bulk_extractor -S banner_file=info.txt -S report_file=final.xml -o report_out image.dd
```

Customizes the banner and report filename generation for automated reporting pipelines


## Threat Hunting

### bulk_extractor -E rar -o output_dir image.dd

```bash
bulk_extractor -E rar -o output_dir image.dd
```

Example:

```bash
bulk_extractor -E rar -o archive_hunt image.dd
```

Scans for RAR archive headers which are often used for exfiltrating stolen data


## Advanced Combined Workflow

### bulk_extractor -j 8 -q -w stop.txt -r alert.txt -o output_dir image.dd

```bash
bulk_extractor -j 8 -q -w stop.txt -r alert.txt -o output_dir image.dd
```

Example:

```bash
bulk_extractor -j 16 -q -w common.txt -r malware_iocs.txt -o auto_hunt image.dd
```

High-performance, quiet automated scan using both stoplists for noise reduction and alert lists for IOC detection

## Related tools

- [Foremost](https://terminal.rokibulroni.com/tool/forensics/foremost)
- [strings](https://terminal.rokibulroni.com/tool/forensics/strings)
