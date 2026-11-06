---
name: terminal-hub-forensics
description: "Copy-ready Forensics command reference (Memory analysis, disk forensics, carving and timelines) covering Volatility 2, Volatility 3, Binwalk, Foremost, The Sleuth Kit, bulk_extractor, Autopsy, Plaso (log2timeline), ExifTool, strings. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a forensics task from the terminal."
license: MIT
---

# Forensics commands

Investigate what happened on a system: analyse memory images, examine file systems, carve deleted files, extract metadata and build super-timelines. Work on copies, never on original evidence.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Memory Analysis

- **Volatility 2** — The original Python 2 memory-forensics framework using profiles. Superseded by Volatility 3 but still found in older workflows and courses. [`tools/volatility.md`](tools/volatility.md), 85 commands. Sections: Basic Memory Analysis, Process Analysis, DLL and Module Analysis, Network Analysis, System Artifacts, Handle and File Analysis, Malware Analysis, Memory Extraction, +16 more.
- **Volatility 3** — The current memory-forensics framework: analyse RAM images from Windows, Linux and macOS for processes, network connections, injected code and more. [`tools/volatility3.md`](tools/volatility3.md), 75 commands. Sections: Basic Usage & Setup, Process Enumeration, Deep Process Analysis, Network Analysis, Kernel & Driver Analysis, File System Forensics, Malware Analysis, Registry Forensics, +20 more.

### File Carving & Firmware

- **Binwalk** — Analyses and extracts firmware images: finds embedded file systems, compressed data and executable code by signature and entropy. [`tools/binwalk.md`](tools/binwalk.md), 65 commands. Sections: Basic Syntax, Basic Firmware Analysis, Signature Scanning, Entropy Analysis, Filtering Results, Extraction Workflows, Recursive Analysis, Extraction Limits, +21 more.
- **Foremost** — Recovers files from disk images and raw data by carving their headers and footers, even without a file system. [`tools/foremost.md`](tools/foremost.md), 60 commands. Sections: Basic Usage, Input Handling, Output Control, File Type Carving, Configuration & Tuning, Audit & Logging, Advanced Options, Combined Workflows, +12 more.
- **The Sleuth Kit** — Command-line tools for analysing disk images and file systems: list files, recover deleted ones and build timelines. [`tools/sleuthkit.md`](tools/sleuthkit.md), 100 commands. Sections: Basic Syntax & Help, Disk Image Identification, Partition Analysis, File System Detection, File & Directory Analysis, Metadata & Inode Analysis, Content Extraction, Block & Data Unit Analysis, +26 more.
- **bulk_extractor** — Scans disk images and files for email addresses, URLs, credit-card numbers and other features without parsing the file system. [`tools/bulk-extractor.md`](tools/bulk-extractor.md), 65 commands. Sections: Basic Forensic Scanning, Input Handling and Scanning Scope, Performance and Tuning, Feature and Artifact Extraction, Scanning Controls, Output and Logging, Filtering and Stoplists, Advanced Configuration, +7 more.

### Disk & Timeline

- **Autopsy** — A graphical digital-forensics platform built on The Sleuth Kit for disk image analysis, timelines, keyword search and file recovery. [`tools/autopsy.md`](tools/autopsy.md), 165 commands. Sections: Case Creation, Data Source Ingestion, Ingest Modules, User Interface, Artifact Analysis, File Analysis, Search, Timeline Analysis, +44 more.
- **Plaso (log2timeline)** — Extracts timestamps from hundreds of artefact types and builds a “super timeline” for forensic investigation. [`tools/plaso.md`](tools/plaso.md), 70 commands. Sections: Basic Syntax & Help, Basic Timeline Creation, Parser Configuration, Evidence Handling, Processing & Hashing, Performance Tuning, Storage Management, Basic Analysis & Output, +28 more.

### Artifact Utilities

- **ExifTool** — Reads, writes and strips metadata in images, documents, audio and video — invaluable for OSINT and forensics. [`tools/exiftool.md`](tools/exiftool.md), 60 commands. Sections: Basic ExifTool Syntax, Basic Metadata Inspection, Output and Formatting Control, Tag Filtering and Grouping, Incident Response Investigations, Batch Processing, Recursive and Batch Processing, Threat Hunting and Analysis, +11 more.
- **strings** — Prints sequences of printable characters from binary files — a fast first look at executables, memory dumps and unknown data. [`tools/strings.md`](tools/strings.md), 65 commands. Sections: Basic String Extraction, Length Control, File and Input Handling, Offset and Locations, Encoding and Character Sets, Output Formatting, Combined Basic Workflows, Malware and Artifact Analysis, +17 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/forensics. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/forensics/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
