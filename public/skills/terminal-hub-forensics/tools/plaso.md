# Plaso (log2timeline)

> Extracts timestamps from hundreds of artefact types and builds a “super timeline” for forensic investigation.

- Category: Forensics
- Commands: 70
- Page: https://terminal.rokibulroni.com/tool/forensics/plaso
- Homepage: https://github.com/log2timeline/plaso
- Documentation: https://plaso.readthedocs.io
- Tags: timeline, DFIR, artefacts

## Install

- apt: `sudo apt install plaso`
- docker: `docker run -it --rm log2timeline/plaso log2timeline --help`

## Basic Syntax & Help

### log2timeline.py --version

```bash
log2timeline.py --version
```

Displays the installed version of the log2timeline extraction tool

### log2timeline.py --help

```bash
log2timeline.py --help
```

Shows the main help menu and available arguments for the extraction tool

### log2timeline.py --info

```bash
log2timeline.py --info
```

Lists all available parsers, parser plugins, and hashers supported by the current installation

### psort.py -o list

```bash
psort.py -o list
```

Lists all available output modules for rendering timeline data

### psort.py --analysis list

```bash
psort.py --analysis list
```

Lists all available analysis plugins for post-processing timelines


## Basic Timeline Creation

### log2timeline.py [STORAGE_FILE] [SOURCE]

```bash
log2timeline.py [STORAGE_FILE] [SOURCE]
```

Example:

```bash
log2timeline.py case_data.plaso disk_image.dd
```

Performs a standard extraction of all supported artifacts from a disk image to a storage file

### log2timeline.py [STORAGE_FILE] [DIRECTORY]

```bash
log2timeline.py [STORAGE_FILE] [DIRECTORY]
```

Example:

```bash
log2timeline.py folder_evidence.plaso /mnt/evidence_share/
```

Extracts forensic events recursively from a logical directory path instead of a disk image


## Parser Configuration

### log2timeline.py --parsers 'win7' [STORAGE] [SOURCE]

```bash
log2timeline.py --parsers 'win7' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --parsers 'win7' system.plaso disk.E01
```

Restricts extraction to the Windows 7 parser preset, optimizing for that operating system

### log2timeline.py --parsers 'linux' [STORAGE] [SOURCE]

```bash
log2timeline.py --parsers 'linux' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --parsers 'linux' server.plaso disk.img
```

Restricts extraction to the Linux parser preset for standard Linux artifacts

### log2timeline.py --parsers 'macosx' [STORAGE] [SOURCE]

```bash
log2timeline.py --parsers 'macosx' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --parsers 'macosx' macbook.plaso disk.dmg
```

Restricts extraction to macOS specific parsers and plugins

### log2timeline.py --parsers 'webhist' [STORAGE] [SOURCE]

```bash
log2timeline.py --parsers 'webhist' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --parsers 'webhist' browsing.plaso disk.dd
```

Runs only web history parsers to extract browser activity from Chrome, Firefox, Safari, and Edge

### log2timeline.py --parsers '!filestat' [STORAGE] [SOURCE]

```bash
log2timeline.py --parsers '!filestat' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --parsers '!filestat' content_only.plaso disk.dd
```

Excludes the filestat parser to reduce noise if file system metadata events are not required

### log2timeline.py --parsers 'winevtx,winreg' [STORAGE] [SOURCE]

```bash
log2timeline.py --parsers 'winevtx,winreg' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --parsers 'winevtx,winreg' config_logs.plaso disk.dd
```

Manually selects only the Windows Event Log and Windows Registry parsers for targeted extraction


## Evidence Handling

### log2timeline.py --vss_stores all [STORAGE] [SOURCE]

```bash
log2timeline.py --vss_stores all [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --vss_stores all shadows.plaso disk.E01
```

Automatically processes all detected Volume Shadow Copies (VSS) found on the image

### log2timeline.py --vss_stores 1,3 [STORAGE] [SOURCE]

```bash
log2timeline.py --vss_stores 1,3 [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --vss_stores 1,3 selected_shadows.plaso disk.E01
```

Processes only specific Volume Shadow Copy stores identified by index

### log2timeline.py --partition [NUMBER] [STORAGE] [SOURCE]

```bash
log2timeline.py --partition [NUMBER] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --partition 2 system_drive.plaso disk.dd
```

Targets a specific partition number on a multi-partition disk image


## Processing & Hashing

### log2timeline.py --hashers 'md5' [STORAGE] [SOURCE]

```bash
log2timeline.py --hashers 'md5' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --hashers 'md5' hashed_evidence.plaso disk.dd
```

Calculates MD5 hashes for every file processed during the extraction phase

### log2timeline.py --hashers 'sha256' [STORAGE] [SOURCE]

```bash
log2timeline.py --hashers 'sha256' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --hashers 'sha256' secure_hash.plaso disk.dd
```

Calculates SHA256 hashes for file integrity verification during extraction


## Performance Tuning

### log2timeline.py --workers [NUMBER] [STORAGE] [SOURCE]

```bash
log2timeline.py --workers [NUMBER] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --workers 8 fast_processing.plaso disk.dd
```

Specifies the number of worker processes to spawn for parallel processing

### log2timeline.py --buffer_size [SIZE] [STORAGE] [SOURCE]

```bash
log2timeline.py --buffer_size [SIZE] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --buffer_size 65536 large_buffer.plaso disk.dd
```

Adjusts the read buffer size to optimize I/O performance for specific storage types

### log2timeline.py --temporary_directory [PATH] [STORAGE] [SOURCE]

```bash
log2timeline.py --temporary_directory [PATH] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --temporary_directory /ssd/tmp/ temp_offload.plaso disk.dd
```

Redirects temporary files to a specific path, useful for utilizing high-speed SSDs during processing


## Storage Management

### log2timeline.py --compression 'none' [STORAGE] [SOURCE]

```bash
log2timeline.py --compression 'none' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --compression 'none' uncompressed.plaso disk.dd
```

Disables compression on the output storage file to improve write speed at the cost of disk space


## Basic Analysis & Output

### psort.py -o l2tcsv -w [OUTPUT.CSV] [STORAGE]

```bash
psort.py -o l2tcsv -w [OUTPUT.CSV] [STORAGE]
```

Example:

```bash
psort.py -o l2tcsv -w timeline.csv case.plaso
```

Converts the Plaso storage file into the standard Log2Timeline CSV format

### psort.py -o json -w [OUTPUT.JSON] [STORAGE]

```bash
psort.py -o json -w [OUTPUT.JSON] [STORAGE]
```

Example:

```bash
psort.py -o json -w timeline.json case.plaso
```

Exports the timeline events into a standard JSON format for ingestion by other tools

### psort.py -o json_line -w [OUTPUT.JSONL] [STORAGE]

```bash
psort.py -o json_line -w [OUTPUT.JSONL] [STORAGE]
```

Example:

```bash
psort.py -o json_line -w timeline.jsonl case.plaso
```

Exports events as JSON Lines (newline delimited JSON), ideal for Timesketch or ElasticSearch ingestion

### psort.py -o tln -w [OUTPUT.TLN] [STORAGE]

```bash
psort.py -o tln -w [OUTPUT.TLN] [STORAGE]
```

Example:

```bash
psort.py -o tln -w timeline.tln case.plaso
```

Exports the data in the specific TLN (Timeline) format


## Time & Zone Handling

### psort.py -z 'UTC' -o l2tcsv -w [OUTPUT] [STORAGE]

```bash
psort.py -z 'UTC' -o l2tcsv -w [OUTPUT] [STORAGE]
```

Example:

```bash
psort.py -z 'UTC' -o l2tcsv -w utc_timeline.csv case.plaso
```

Forces the output timeline to display all timestamps in Coordinated Universal Time (UTC)

### psort.py -z 'EST5EDT' -o l2tcsv -w [OUTPUT] [STORAGE]

```bash
psort.py -z 'EST5EDT' -o l2tcsv -w [OUTPUT] [STORAGE]
```

Example:

```bash
psort.py -z 'EST5EDT' -o l2tcsv -w est_timeline.csv case.plaso
```

Adjusts output timestamps to the US Eastern timezone, accounting for daylight savings


## Filtering & Slicing

### psort.py --slice '[DATE]' [STORAGE]

```bash
psort.py --slice '[DATE]' [STORAGE]
```

Example:

```bash
psort.py --slice '2023-10-25T00:00:00' -w sliced.csv case.plaso
```

Extracts events that occurred strictly after the specified ISO 8601 timestamp

### psort.py --slice '[START]...[END]' [STORAGE]

```bash
psort.py --slice '[START]...[END]' [STORAGE]
```

Example:

```bash
psort.py --slice '2023-01-01...2023-02-01' -w jan_activity.csv case.plaso
```

Create a timeline restricted to a specific date range window


## Advanced Filtering

### psort.py [STORAGE] 'parser is "[PARSER]"'

```bash
psort.py [STORAGE] 'parser is "[PARSER]"'
```

Example:

```bash
psort.py case.plaso -w evtx.csv 'parser is "winevtx"'
```

Filters the output to include only events generated by the specified parser (e.g., Windows Event Logs)

### psort.py [STORAGE] 'source is "[SOURCE]"'

```bash
psort.py [STORAGE] 'source is "[SOURCE]"'
```

Example:

```bash
psort.py case.plaso -w registry.csv 'source is "Windows Registry"'
```

Filters the output based on the user-friendly source description of the artifact

### psort.py [STORAGE] 'message contains "[KEYWORD]"'

```bash
psort.py [STORAGE] 'message contains "[KEYWORD]"'
```

Example:

```bash
psort.py case.plaso -w malware_hits.csv 'message contains "malicious.exe"'
```

Performs a text search within the event message body for specific keywords

### psort.py [STORAGE] 'filename contains "[NAME]"'

```bash
psort.py [STORAGE] 'filename contains "[NAME]"'
```

Example:

```bash
psort.py case.plaso -w secret_docs.csv 'filename contains "TopSecret"'
```

Filters events where the associated filename matches the search string


## Complex Filtering

### psort.py [STORAGE] '[FILTER1] and [FILTER2]'

```bash
psort.py [STORAGE] '[FILTER1] and [FILTER2]'
```

Example:

```bash
psort.py case.plaso 'parser is "winevtx" and message contains "4624"'
```

Combines filters using logical AND to find specific events (e.g., Login ID 4624 in Event Logs)

### psort.py [STORAGE] '[FILTER1] or [FILTER2]'

```bash
psort.py [STORAGE] '[FILTER1] or [FILTER2]'
```

Example:

```bash
psort.py case.plaso 'filename contains ".exe" or filename contains ".dll"'
```

Combines filters using logical OR to broaden the search scope


## All-in-One Workflow

### psteal.py --source [IMAGE] -o l2tcsv -w [OUTPUT]

```bash
psteal.py --source [IMAGE] -o l2tcsv -w [OUTPUT]
```

Example:

```bash
psteal.py --source disk.dd -o l2tcsv -w quick_timeline.csv
```

Simultaneously extracts events and sorts them into a CSV, bypassing the intermediate storage file

### psteal.py --source [IMAGE] --parsers [PRESET] -w [OUTPUT]

```bash
psteal.py --source [IMAGE] --parsers [PRESET] -w [OUTPUT]
```

Example:

```bash
psteal.py --source disk.dd --parsers 'webhist' -w browsing.csv
```

Performs a targeted extraction and export of web history in a single execution


## Storage Metadata

### pinfo.py [STORAGE_FILE]

```bash
pinfo.py [STORAGE_FILE]
```

Example:

```bash
pinfo.py case.plaso
```

Displays general metadata about the storage file, including extraction start time and Plaso version

### pinfo.py -v [STORAGE_FILE]

```bash
pinfo.py -v [STORAGE_FILE]
```

Example:

```bash
pinfo.py -v case.plaso
```

Displays verbose details about the storage file, including counts of events per parser

### pinfo.py --verify_storage [STORAGE_FILE]

```bash
pinfo.py --verify_storage [STORAGE_FILE]
```

Example:

```bash
pinfo.py --verify_storage case.plaso
```

Checks the internal integrity of the Plaso storage file to ensure data is not corrupted


## Incident Response - User Activity

### psort.py [STORAGE] 'parser is "winreg" and message contains "UserAssist"'

```bash
psort.py [STORAGE] 'parser is "winreg" and message contains "UserAssist"'
```

Example:

```bash
psort.py case.plaso -w gui_execution.csv 'parser is "winreg" and message contains "UserAssist"'
```

Isolates UserAssist registry keys to determine which GUI applications were executed by a user


## Incident Response - Program Execution

### psort.py [STORAGE] 'parser is "prefetch"'

```bash
psort.py [STORAGE] 'parser is "prefetch"'
```

Example:

```bash
psort.py case.plaso -w prefetch_exec.csv 'parser is "prefetch"'
```

Extracts Windows Prefetch data to analyze application execution history and frequency

### psort.py [STORAGE] 'parser is "winevtx" and message contains "7045"'

```bash
psort.py [STORAGE] 'parser is "winevtx" and message contains "7045"'
```

Example:

```bash
psort.py case.plaso -w services.csv 'parser is "winevtx" and message contains "7045"'
```

Filters for Event ID 7045 to identify newly installed Windows services, a common persistence mechanism


## Incident Response - USB Hunting

### psort.py [STORAGE] 'parser is "winreg" and message contains "USBSTOR"'

```bash
psort.py [STORAGE] 'parser is "winreg" and message contains "USBSTOR"'
```

Example:

```bash
psort.py case.plaso -w usb_devices.csv 'parser is "winreg" and message contains "USBSTOR"'
```

Searches Registry artifacts for USBSTOR keys to identify removable devices connected to the system


## Incident Response - Network

### psort.py [STORAGE] 'parser is "winreg" and message contains "Interfaces"'

```bash
psort.py [STORAGE] 'parser is "winreg" and message contains "Interfaces"'
```

Example:

```bash
psort.py case.plaso -w net_interfaces.csv 'parser is "winreg" and message contains "Interfaces"'
```

Extracts network interface configurations and history from the System registry hive


## Analysis Plugins

### psort.py --analysis 'unique_domains_visited' [STORAGE]

```bash
psort.py --analysis 'unique_domains_visited' [STORAGE]
```

Example:

```bash
psort.py --analysis 'unique_domains_visited' case.plaso
```

Runs a post-processing analysis plugin to summarize unique web domains found in the timeline

### psort.py --analysis 'tagging' --tagging_file [FILE] [STORAGE]

```bash
psort.py --analysis 'tagging' --tagging_file [FILE] [STORAGE]
```

Example:

```bash
psort.py --analysis 'tagging' --tagging_file tag_rules.txt case.plaso
```

Automatically tags events in the timeline matching rules defined in an external text file


## ElasticSearch Integration

### psort.py -o elastic --server [IP] --index_name [NAME] [STORAGE]

```bash
psort.py -o elastic --server [IP] --index_name [NAME] [STORAGE]
```

Example:

```bash
psort.py -o elastic --server 127.0.0.1 --index_name investigation_01 case.plaso
```

Exports timeline events directly into an ElasticSearch instance for visualization in Kibana


## Timesketch Integration

### psort.py -o timesketch --name [TIMELINE_NAME] [STORAGE]

```bash
psort.py -o timesketch --name [TIMELINE_NAME] [STORAGE]
```

Example:

```bash
psort.py -o timesketch --name 'Case 2024-001' case.plaso
```

Uploads the timeline directly to a Timesketch server instance (requires ~/.plaso_timesketchrc configuration)


## File Extraction

### image_export.py --names [FILENAME] [IMAGE]

```bash
image_export.py --names [FILENAME] [IMAGE]
```

Example:

```bash
image_export.py --names 'MFT' disk.dd
```

Extracts specific files (like the $MFT) from the disk image based on exact filename matching

### image_export.py --extensions [EXT] [IMAGE]

```bash
image_export.py --extensions [EXT] [IMAGE]
```

Example:

```bash
image_export.py --extensions 'evt,evtx' disk.dd
```

Extracts all files with specific extensions from the forensic image to the local directory

### image_export.py --filter [FILTER] [IMAGE]

```bash
image_export.py --filter [FILTER] [IMAGE]
```

Example:

```bash
image_export.py --filter 'modification_time > "2023-01-01"' disk.dd
```

Extracts files from the image that match specific metadata criteria like modification timestamps


## Debug & Troubleshooting

### log2timeline.py -d [STORAGE] [SOURCE]

```bash
log2timeline.py -d [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py -d debug_case.plaso disk.dd
```

Runs the extraction in debug mode, providing extensive console output for troubleshooting parser errors

### log2timeline.py --logfile [FILE] [STORAGE] [SOURCE]

```bash
log2timeline.py --logfile [FILE] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --logfile extraction.log case.plaso disk.dd
```

Writes all execution logs to a specific file instead of standard output for later review

### log2timeline.py --profiling_type 'memory' [STORAGE] [SOURCE]

```bash
log2timeline.py --profiling_type 'memory' [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --profiling_type 'memory' profile.plaso disk.dd
```

Enables memory profiling to monitor resource usage during the extraction process


## Output Formatting

### psort.py -o dynamic --fields [FIELDS] [STORAGE]

```bash
psort.py -o dynamic --fields [FIELDS] [STORAGE]
```

Example:

```bash
psort.py -o dynamic --fields 'datetime,timestamp_desc,message' -w custom.csv case.plaso
```

Creates a CSV with a user-defined column structure, useful for creating reports with specific columns only

### psort.py --additional_fields [FIELDS] [STORAGE]

```bash
psort.py --additional_fields [FIELDS] [STORAGE]
```

Example:

```bash
psort.py -o l2tcsv --additional_fields 'inode,tag' -w detailed.csv case.plaso
```

Adds extra metadata fields to the standard CSV output that are normally hidden


## Artifact Definitions

### log2timeline.py --artifact_definitions [PATH] [STORAGE] [SOURCE]

```bash
log2timeline.py --artifact_definitions [PATH] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --artifact_definitions my_artifacts.yaml case.plaso disk.dd
```

Uses a custom artifacts definition file to direct the tool to non-standard file locations


## Filter File Usage

### log2timeline.py --file_filter [PATH] [STORAGE] [SOURCE]

```bash
log2timeline.py --file_filter [PATH] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --file_filter filter.txt case.plaso disk.dd
```

Restricts extraction to a list of files and paths specified in an external text file


## YARA Integration

### log2timeline.py --yara_rules [PATH] [STORAGE] [SOURCE]

```bash
log2timeline.py --yara_rules [PATH] [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --yara_rules malware.yar case.plaso disk.dd
```

Applies YARA rules during extraction to flag or extract files matching specific signatures


## Advanced Workflow - Deduplication

### psort.py --dedup [STORAGE]

```bash
psort.py --dedup [STORAGE]
```

Example:

```bash
psort.py --dedup -o l2tcsv -w clean.csv case.plaso
```

Removes duplicate timeline entries that share the exact same timestamp and message content


## Threat Hunting - Shimcache

### psort.py [STORAGE] 'parser is "shimcache"'

```bash
psort.py [STORAGE] 'parser is "shimcache"'
```

Example:

```bash
psort.py case.plaso -w shimcache.csv 'parser is "shimcache"'
```

Extracts Application Compatibility Cache (Shimcache) data to identify executables present on the system


## Threat Hunting - Amcache

### psort.py [STORAGE] 'parser is "amcache"'

```bash
psort.py [STORAGE] 'parser is "amcache"'
```

Example:

```bash
psort.py case.plaso -w amcache.csv 'parser is "amcache"'
```

Extracts Amcache.hve data to correlate SHA1 hashes with filenames and execution timestamps


## Threat Hunting - PowerShell

### psort.py [STORAGE] 'message contains "PowerShell"'

```bash
psort.py [STORAGE] 'message contains "PowerShell"'
```

Example:

```bash
psort.py case.plaso -w powershell.csv 'message contains "PowerShell"'
```

Filters for PowerShell activity across Event Logs and other artifacts to detect script execution


## Threat Hunting - RDP

### psort.py [STORAGE] 'message contains "TerminalServices"'

```bash
psort.py [STORAGE] 'message contains "TerminalServices"'
```

Example:

```bash
psort.py case.plaso -w rdp.csv 'message contains "TerminalServices"'
```

Filters for Terminal Services logs to reconstruct Remote Desktop Protocol (RDP) sessions


## Threat Hunting - Scheduled Tasks

### psort.py [STORAGE] 'parser is "winevtx" and message contains "Task Scheduler"'

```bash
psort.py [STORAGE] 'parser is "winevtx" and message contains "Task Scheduler"'
```

Example:

```bash
psort.py case.plaso -w tasks.csv 'parser is "winevtx" and message contains "Task Scheduler"'
```

Identifies creation and execution of scheduled tasks, often used for persistence


## Reporting - Tagged Events

### psort.py -w [OUTPUT] --tagged_events [STORAGE]

```bash
psort.py -w [OUTPUT] --tagged_events [STORAGE]
```

Example:

```bash
psort.py -w report_hits.csv --tagged_events case.plaso
```

Exports only the events that were tagged by analysis plugins, creating a concise report of findings


## Automated Pipeline

### psteal.py --source [IMAGE] --parsers 'win7' --analysis 'tagging' --tagging_file [RULES]

```bash
psteal.py --source [IMAGE] --parsers 'win7' --analysis 'tagging' --tagging_file [RULES]
```

Example:

```bash
psteal.py --source disk.dd --parsers 'win7' --analysis 'tagging' --tagging_file bad_stuff.txt
```

Runs a complete pipeline: extraction, Windows parsing, tagging based on rules, and output generation


## Cleanup

### log2timeline.py --force [STORAGE] [SOURCE]

```bash
log2timeline.py --force [STORAGE] [SOURCE]
```

Example:

```bash
log2timeline.py --force case.plaso disk.dd
```

Forces the overwrite of an existing storage file if it already exists during a new extraction

## Related tools

- [The Sleuth Kit](https://terminal.rokibulroni.com/tool/forensics/sleuthkit)
- [Autopsy](https://terminal.rokibulroni.com/tool/forensics/autopsy)
- [Volatility 3](https://terminal.rokibulroni.com/tool/forensics/volatility3)
