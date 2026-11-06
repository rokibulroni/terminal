# Autopsy

> A graphical digital-forensics platform built on The Sleuth Kit for disk image analysis, timelines, keyword search and file recovery.

- Category: Forensics
- Commands: 165
- Page: https://terminal.rokibulroni.com/tool/forensics/autopsy
- Homepage: https://www.autopsy.com
- Documentation: https://sleuthkit.org/autopsy/docs/user-docs/latest/
- Tags: disk forensics, DFIR, GUI

## Install

- apt: `sudo apt install autopsy`
- windows: `Download the installer from https://www.autopsy.com/download/`

## Case Creation

### Create New Case

```bash
Create New Case
```

Example:

```bash
Launch Autopsy and select 'New Case' from the welcome screen
```

Initializes the case database and directory structure for a new investigation

### Define Case Information

```bash
Define Case Information
```

Example:

```bash
Enter Case Name and Base Directory path
```

Sets the identifier and storage location for all case data

### Set Examiner Details

```bash
Set Examiner Details
```

Example:

```bash
Input Examiner Name, Phone, and Email optional fields
```

Associates the investigator's metadata with the case for reporting purposes


## Data Source Ingestion

### Select Data Source Type - Disk Image

```bash
Select Data Source Type - Disk Image
```

Example:

```bash
Choose 'Disk Image or VM File' in the Add Data Source wizard
```

Prepares Autopsy to ingest physical or virtual disk image files like E01 or VMDK

### Select Data Source Type - Logical Files

```bash
Select Data Source Type - Logical Files
```

Example:

```bash
Choose 'Logical Files' to analyze a specific folder without an image
```

Ingests a live directory or specific files from the host system for analysis

### Select Data Source Type - Unallocated Space

```bash
Select Data Source Type - Unallocated Space
```

Example:

```bash
Choose 'Unallocated Space Image File' for raw binary chunks
```

Ingests raw data chunks specifically for carving without filesystem structures

### Configure Time Zone

```bash
Configure Time Zone
```

Example:

```bash
Set the time zone to the suspect's local time or UTC
```

Ensures accurate timestamp interpretation during file system processing


## Ingest Modules

### Enable Recent Activity Module

```bash
Enable Recent Activity Module
```

Example:

```bash
Check 'Recent Activity' during ingest configuration
```

Extracts user activity from registry, recent docs, and installed programs

### Enable Hash Lookup Module

```bash
Enable Hash Lookup Module
```

Example:

```bash
Check 'Hash Lookup' and select a hash set like NSRL
```

Identifies known good files to ignore and known bad files to flag

### Enable File Type Identification

```bash
Enable File Type Identification
```

Example:

```bash
Check 'File Type Identification' to analyze file signatures
```

Determines file types based on magic bytes rather than file extensions

### Enable Archive Extractor

```bash
Enable Archive Extractor
```

Example:

```bash
Check 'Embedded File Extractor' to open ZIP and RAR files
```

Unpacks compressed archives to analyze the files contained within them

### Enable Exif Parser

```bash
Enable Exif Parser
```

Example:

```bash
Check 'Picture Analyzer' or Exif parser to extract metadata
```

Extracts geolocation and camera device data from image files

### Enable Keyword Search Module

```bash
Enable Keyword Search Module
```

Example:

```bash
Check 'Keyword Search' to index text content
```

Indexes file content to allow for fast text searching later in the investigation

### Enable Email Parser

```bash
Enable Email Parser
```

Example:

```bash
Check 'Email Parser' to process MBOX, PST, and OST files
```

Extracts individual emails and attachments from mailbox container files

### Enable Encryption Detection

```bash
Enable Encryption Detection
```

Example:

```bash
Check 'Encryption Detection' to find password-protected files
```

Flags files that are encrypted or password protected for manual review

### Enable Interesting Files Identifier

```bash
Enable Interesting Files Identifier
```

Example:

```bash
Check 'Interesting Files Identifier' using a custom rule set
```

Flags files matching specific names or paths relevant to the investigation


## User Interface

### Navigate Directory Tree

```bash
Navigate Directory Tree
```

Example:

```bash
Expand 'Data Sources' > 'Image Name' > 'Vol' to browse folders
```

Allows manual exploration of the file system hierarchy

### View File Content - Text

```bash
View File Content - Text
```

Example:

```bash
Select the 'Text' tab in the content viewer pane
```

Displays the ASCII or Unicode text representation of the selected file

### View File Content - Hex

```bash
View File Content - Hex
```

Example:

```bash
Select the 'Hex' tab to view raw binary data
```

Shows the raw hexadecimal and ASCII decoding of the file's bytes

### View File Content - Application

```bash
View File Content - Application
```

Example:

```bash
Select the 'Application' tab to render images or HTML
```

Renders supported file types like images and HTML in their native format

### View File Metadata

```bash
View File Metadata
```

Example:

```bash
Select the 'File Metadata' tab to see timestamps and attributes
```

Displays MAC times, permissions, and file system attributes


## Artifact Analysis

### Analyze Web History

```bash
Analyze Web History
```

Example:

```bash
Navigate to 'Web History' under 'Results' in the tree
```

Lists visited URLs extracted from browser databases

### Analyze Web Cookies

```bash
Analyze Web Cookies
```

Example:

```bash
Navigate to 'Web Cookies' to see session data
```

Displays tracking cookies and session identifiers from web browsers

### Analyze Web Downloads

```bash
Analyze Web Downloads
```

Example:

```bash
Navigate to 'Web Downloads' to find downloaded files
```

Lists files downloaded via browsers including source URL and path

### Analyze Installed Programs

```bash
Analyze Installed Programs
```

Example:

```bash
Check 'Installed Programs' artifact category
```

Lists software applications installed on the system via Registry or packages

### Analyze OS Information

```bash
Analyze OS Information
```

Example:

```bash
Check 'Operating System Information' artifact
```

Shows OS version, install date, and system owner details

### Analyze USB Device History

```bash
Analyze USB Device History
```

Example:

```bash
Navigate to 'USB Device Attached' artifacts
```

Lists external storage devices previously connected to the system

### Analyze User Accounts

```bash
Analyze User Accounts
```

Example:

```bash
Navigate to 'OS Accounts' artifact
```

Lists user profiles, last login times, and account privileges


## File Analysis

### Filter by Extension

```bash
Filter by Extension
```

Example:

```bash
Navigate to 'Views' > 'File Types' > 'By Extension'
```

Groups files by their extension for quick review of specific types

### Filter by MIME Type

```bash
Filter by MIME Type
```

Example:

```bash
Navigate to 'Views' > 'File Types' > 'By MIME Type'
```

Groups files by their detected internal signature or MIME type

### View Deleted Files

```bash
View Deleted Files
```

Example:

```bash
Navigate to 'Views' > 'Deleted Files' > 'File System'
```

Shows files that have been marked as deleted but are still recoverable

### Sort by File Size

```bash
Sort by File Size
```

Example:

```bash
Click the 'Size' column header in the result viewer
```

Orders the file list by size to identify unusually large or small files


## Search

### Perform Exact Match Search

```bash
Perform Exact Match Search
```

Example:

```bash
Enter a specific word in the Keyword Search bar and search
```

Locates exact string matches within the indexed text of the case

### Perform Substring Search

```bash
Perform Substring Search
```

Example:

```bash
Enter a partial word and select 'Substring match'
```

Finds words that contain the search term as a fragment

### Perform RegEx Search

```bash
Perform RegEx Search
```

Example:

```bash
Enter a regular expression like email patterns and search
```

Uses patterns to find structured data like emails or credit card numbers

### Save Search Results

```bash
Save Search Results
```

Example:

```bash
Click 'Save' on a search result tab to persist findings
```

Saves the current search results to the directory tree for reporting


## Timeline Analysis

### Open Timeline Viewer

```bash
Open Timeline Viewer
```

Example:

```bash
Click the 'Timeline' button in the top toolbar
```

Launches the visualization tool for chronological event analysis

### View Counts by Time

```bash
View Counts by Time
```

Example:

```bash
Select 'Counts' mode in Timeline to see activity spikes
```

Displays a bar chart of event frequency to identify periods of high activity

### View Details by Time

```bash
View Details by Time
```

Example:

```bash
Select 'Details' mode to see specific event descriptions
```

Lists individual events like file creation or web access in chronological order

### Filter Timeline by Event Type

```bash
Filter Timeline by Event Type
```

Example:

```bash
Uncheck 'File System' to focus only on 'Web Activity'
```

Reduces noise by hiding specific categories of temporal events


## Tagging

### Create Custom Tag

```bash
Create Custom Tag
```

Example:

```bash
Go to 'Tags' options and create a 'Malware Suspect' tag
```

Defines a new label for categorizing evidence during analysis

### Tag File

```bash
Tag File
```

Example:

```bash
Right-click a file and select 'Add Tag' > 'Bookmark'
```

Marks a specific file for later review or inclusion in the final report

### Tag Result Artifact

```bash
Tag Result Artifact
```

Example:

```bash
Right-click a Web History entry and tag it
```

Marks a specific analysis result rather than the source file


## Reporting

### Generate HTML Report

```bash
Generate HTML Report
```

Example:

```bash
Click 'Generate Report', select 'HTML', and choose data
```

Creates a browser-viewable report of selected artifacts and tags

### Generate Excel Report

```bash
Generate Excel Report
```

Example:

```bash
Select 'Excel' format in the Generate Report wizard
```

Exports artifact tables to a spreadsheet for external manipulation


## Setup

### Configure Global Settings

```bash
Configure Global Settings
```

Example:

```bash
Tools > Options to adjust memory usage and display settings
```

Adjusts application-wide preferences for performance and view

### Manage Hash Sets

```bash
Manage Hash Sets
```

Example:

```bash
Tools > Options > Hash Sets to import a new MD5 database
```

Adds external hash databases for filtering known files

### Update Keyword Lists

```bash
Update Keyword Lists
```

Example:

```bash
Tools > Options > Keyword Search to add custom lists
```

Configures predefined lists of search terms for automated searching


## Advanced Ingest

### Run Ingest Modules on Subset

```bash
Run Ingest Modules on Subset
```

Example:

```bash
Right-click a folder and choose 'Run Ingest Modules'
```

Executes analysis modules on a specific directory rather than the whole image

### Prioritize Ingest Jobs

```bash
Prioritize Ingest Jobs
```

Example:

```bash
Use the Ingest Progress monitor to cancel or reorder jobs
```

Manages system resources by controlling which analysis tasks run first


## Artifact Analysis

### Analyze Shellbags

```bash
Analyze Shellbags
```

Example:

```bash
Review 'Shellbags' artifact for folder access history
```

Reveals which folders were viewed by the user and when

### Analyze Prefetch

```bash
Analyze Prefetch
```

Example:

```bash
Review 'Prefetch' artifacts for application execution
```

Determines which programs were run, how often, and when last executed

### Analyze Shimcache

```bash
Analyze Shimcache
```

Example:

```bash
Review 'Shimcache' for evidence of program execution compatibility
```

Identifies applications present on the system even if deleted

### Analyze Recent Documents

```bash
Analyze Recent Documents
```

Example:

```bash
Check 'Recent Documents' artifact from registry/LNK files
```

Lists documents recently opened by the user


## Communications

### Analyze Email Messages

```bash
Analyze Email Messages
```

Example:

```bash
Browse extracted emails in the 'Email' artifact node
```

Reads the body, headers, and attachments of processed emails

### Analyze Call Logs

```bash
Analyze Call Logs
```

Example:

```bash
Review 'Call Logs' artifact from mobile backups
```

Lists incoming, outgoing, and missed calls extracted from mobile data

### Analyze Contacts

```bash
Analyze Contacts
```

Example:

```bash
Review 'Contacts' artifact for address book entries
```

Displays contact names and numbers found in mobile or email data

### Analyze Text Messages

```bash
Analyze Text Messages
```

Example:

```bash
Review 'Messages' artifact for SMS/MMS content
```

Reads short message service content extracted from phone dumps


## Advanced Analysis

### File Carving with PhotoRec

```bash
File Carving with PhotoRec
```

Example:

```bash
Enable 'PhotoRec Carver' in Ingest Modules
```

Recovers deleted files from unallocated space by signature scanning

### Extract Strings

```bash
Extract Strings
```

Example:

```bash
Run the 'Strings' task or view the Strings tab
```

Extracts printable characters from binary files to find hidden text

### Manual Hex Analysis

```bash
Manual Hex Analysis
```

Example:

```bash
Inspect file headers in the Hex view to verify file type
```

Visually validates the file signature against the extension

### Registry Hive Analysis

```bash
Registry Hive Analysis
```

Example:

```bash
Browse the virtual 'Registry' folders in the tree view
```

Navigates the Windows Registry hive structure manually

### Geolocation Mapping

```bash
Geolocation Mapping
```

Example:

```bash
Open the 'Geolocation' window to see points on a map
```

Visualizes GPS coordinates extracted from images and metadata on a map

### Communication Visualization

```bash
Communication Visualization
```

Example:

```bash
Open the 'Communications' visualization tool
```

Graphs relationships between accounts based on calls and emails


## Malware Detection

### Analyze Startup Items

```bash
Analyze Startup Items
```

Example:

```bash
Check 'Startup Items' artifact for persistence mechanisms
```

Identifies programs configured to launch automatically at boot

### Search for Webshells

```bash
Search for Webshells
```

Example:

```bash
Keyword search for common webshell functions like 'eval' or 'base64_decode'
```

Detects potential backdoors in web server directories

### Identify Packed Files

```bash
Identify Packed Files
```

Example:

```bash
Sort executables by entropy or check file type analysis
```

Finds files with high entropy that may be packed malware


## Export

### Export File

```bash
Export File
```

Example:

```bash
Right-click a file and select 'Extract File(s)'
```

Copies a file from the forensic image to the local file system

### Export Result Table

```bash
Export Result Table
```

Example:

```bash
Right-click a result table and 'Export to CSV'
```

Saves the current list view as a CSV file for external analysis


## Reporting

### Create Portable Case

```bash
Create Portable Case
```

Example:

```bash
Reporting > Portable Case to create a shareable viewer
```

Generates a standalone version of the case for non-technical stakeholders


## Automation

### Create Ingest Profile

```bash
Create Ingest Profile
```

Example:

```bash
Options > Ingest Profiles to save a set of modules
```

Saves a specific configuration of ingest modules for repeatable workflows

### Filter Known Files

```bash
Filter Known Files
```

Example:

```bash
Apply the 'Known Files' filter to hide NSRL matches
```

Hides system files found in the whitelist to focus on user data


## Mobile Forensics

### Run Android Analyzer

```bash
Run Android Analyzer
```

Example:

```bash
Enable 'Android Analyzer' module on a phone dump
```

Parses SQLite databases specific to Android apps and system

### Analyze GPS Trackpoints

```bash
Analyze GPS Trackpoints
```

Example:

```bash
Review 'GPS Trackpoints' artifact
```

Examines route history data from navigation applications


## Database Analysis

### SQLite Database Viewer

```bash
SQLite Database Viewer
```

Example:

```bash
Open a .db file to view tables within Autopsy
```

Browses the schema and content of SQLite databases directly in the content viewer


## Integration

### Configure Cuckoo Sandbox

```bash
Configure Cuckoo Sandbox
```

Example:

```bash
Settings > Cuckoo to connect for malware detonation
```

Links Autopsy to a Cuckoo instance for automated malware analysis

### Configure Volatility

```bash
Configure Volatility
```

Example:

```bash
Configure paths to run Volatility plugins on memory dumps
```

Integrates memory forensics tools to analyze RAM captures


## Advanced Search

### Search by Attribute

```bash
Search by Attribute
```

Example:

```bash
Search for files with 'Creation Time' in a specific range
```

Finds files based on metadata properties rather than content

### Credit Card Pattern Search

```bash
Credit Card Pattern Search
```

Example:

```bash
Enable the 'Credit Card' regex in Keyword Search
```

Scans for sequences matching major credit card numbering standards

### IP Address Search

```bash
IP Address Search
```

Example:

```bash
Enable 'IP Address' regex in Keyword Search
```

Scans for IPv4 and IPv6 address patterns in files and logs


## Defensive Validation

### Verify Digital Signatures

```bash
Verify Digital Signatures
```

Example:

```bash
Check if critical system binaries have valid signatures
```

Confirms that system files have not been modified by an attacker

### Analyze Security Event Logs

```bash
Analyze Security Event Logs
```

Example:

```bash
Parse Windows Event Logs for Event ID 4624 (Logon)
```

Reviews authentication logs to identify unauthorized access attempts


## Threat Hunting

### Search for Ransom Note

```bash
Search for Ransom Note
```

Example:

```bash
Keyword search for 'decrypt', 'bitcoin', or 'readme'
```

Identifies presence of ransomware instructions

### Identify Large Archives

```bash
Identify Large Archives
```

Example:

```bash
Filter by size and extension .zip/.rar/.7z
```

Finds potential data staging archives created for exfiltration

### Check Temp Directories

```bash
Check Temp Directories
```

Example:

```bash
Browse AppData/Local/Temp for executable files
```

Inspects temporary folders often used as malware staging grounds


## Triage

### Run Triage Ingest Profile

```bash
Run Triage Ingest Profile
```

Example:

```bash
Run a profile with only 'Recent Activity' and 'Hash Lookup'
```

Performs a rapid analysis to get quick wins before full processing


## Multi-User

### Connect to Central Repository

```bash
Connect to Central Repository
```

Example:

```bash
Configure PostgreSQL/SQLite central repo in settings
```

Enables cross-case correlation of artifacts and hashes

### Flag Globally Ignored Items

```bash
Flag Globally Ignored Items
```

Example:

```bash
Mark an item as 'Notable' in the Central Repository
```

Tags an artifact so it is flagged in all future cases

### Enable Solr Server

```bash
Enable Solr Server
```

Example:

```bash
Connect case to a multi-user Solr text index server
```

Offloads text indexing to a dedicated server for collaborative cases


## Customization

### Install Python Plugin

```bash
Install Python Plugin
```

Example:

```bash
Tools > Python Plugins to add community scripts
```

Extends functionality with user-created Python ingest modules

### Install Third-Party Module

```bash
Install Third-Party Module
```

Example:

```bash
Tools > Plugins > Available Plugins to install .nbm files
```

Adds features via the NetBeans Module format


## Analysis

### Annotate Artifact

```bash
Annotate Artifact
```

Example:

```bash
Add a comment to a specific file artifact
```

Attaches examiner notes to a specific finding

### Correlate Artifacts

```bash
Correlate Artifacts
```

Example:

```bash
Use 'Other Occurrences' to see if file exists in other cases
```

Checks the Central Repository to see if the file was seen before


## Advanced

### YARA Rule Scan

```bash
YARA Rule Scan
```

Example:

```bash
Use a YARA ingest plugin to scan for malware signatures
```

Applies pattern matching rules to identify malware families

### Plaso Integration

```bash
Plaso Integration
```

Example:

```bash
Import Plaso storage file into Autopsy timeline
```

Visualizes timelines generated by the Plaso super-timeline tool

### Parse SAM Hive

```bash
Parse SAM Hive
```

Example:

```bash
Analyze SAM registry hive for user details
```

Extracts local user account information and group memberships

### Parse SYSTEM Hive

```bash
Parse SYSTEM Hive
```

Example:

```bash
Analyze SYSTEM registry hive for hardware/timezone info
```

Extracts system-wide configuration and mounted device lists

### Parse SOFTWARE Hive

```bash
Parse SOFTWARE Hive
```

Example:

```bash
Analyze SOFTWARE hive for installed apps and OS version
```

Extracts software configuration and operating system metadata

### Parse NTUSER.DAT

```bash
Parse NTUSER.DAT
```

Example:

```bash
Analyze NTUSER.DAT for user-specific settings
```

Extracts user actions, search history, and recent file access

### Parse Amcache

```bash
Parse Amcache
```

Example:

```bash
Analyze Amcache.hve for program execution evidence
```

Identifies executables that were run or present on the system


## Reporting

### Export to STIX

```bash
Export to STIX
```

Example:

```bash
Generate report in STIX format for threat intel
```

Formats findings into Structured Threat Information Expression for sharing

### Export KML

```bash
Export KML
```

Example:

```bash
Generate Google Earth KML report from geolocation data
```

Creates a map file compatible with Google Earth for location tracking


## Evidence Management

### Verify Image Integrity

```bash
Verify Image Integrity
```

Example:

```bash
Use image verification tool to check E01 hash
```

Ensures the forensic image has not been corrupted since acquisition

### Add Local Disk

```bash
Add Local Disk
```

Example:

```bash
Run Autopsy as Admin and add 'Local Disk'
```

Ingests a currently attached physical drive for analysis


## Carving

### Custom Carving Configuration

```bash
Custom Carving Configuration
```

Example:

```bash
Edit carving rules to add new file signatures
```

Defines custom headers and footers for recovering unsupported file types


## Multimedia

### Video Frame Analysis

```bash
Video Frame Analysis
```

Example:

```bash
Use video triage module to capture frames
```

Extracts still images from video files for quick review

### Image Gallery View

```bash
Image Gallery View
```

Example:

```bash
Select 'Images' in the tree to view thumbnail grid
```

Displays all found images in a gallery layout for rapid visual triage


## Email Analysis

### Filter Emails by Sender

```bash
Filter Emails by Sender
```

Example:

```bash
Sort email artifacts by 'From' address
```

Isolates communications originating from a specific suspect

### Filter Emails by Date

```bash
Filter Emails by Date
```

Example:

```bash
Apply date filter to email messages
```

Focuses email review on the relevant timeframe of the incident


## System Analysis

### Analyze Scheduled Tasks

```bash
Analyze Scheduled Tasks
```

Example:

```bash
Review 'Scheduled Tasks' artifacts (.job/.xml)
```

Checks for automated tasks often used for malware persistence

### Analyze Services

```bash
Analyze Services
```

Example:

```bash
Review System registry for service configurations
```

Identifies installed background services and their startup types


## Incident Response

### Detect Lateral Movement

```bash
Detect Lateral Movement
```

Example:

```bash
Search for RDP logs or PsExec artifacts
```

Finds evidence of an attacker moving between systems in the network

### Detect Data Exfiltration

```bash
Detect Data Exfiltration
```

Example:

```bash
Analyze large file transfers or cloud storage sync logs
```

Identifies data leaving the network via upload or external drive

### Analyze PowerShell History

```bash
Analyze PowerShell History
```

Example:

```bash
View 'ConsoleHost_history.txt' or PSReadLine artifacts
```

Reviews executed PowerShell commands for malicious scripts

### Analyze Bash History

```bash
Analyze Bash History
```

Example:

```bash
View '.bash_history' files on Linux/Mac images
```

Reviews command line history on Unix-like systems


## Browser Forensics

### Analyze Form History

```bash
Analyze Form History
```

Example:

```bash
Review 'Web Form Autofill' artifacts
```

Recovers text typed into web forms like search bars or login fields

### Analyze Cache

```bash
Analyze Cache
```

Example:

```bash
Review 'Web Cache' artifacts for cached images/scripts
```

Examines stored web content to reconstruct page views


## Cleanup

### Delete Case

```bash
Delete Case
```

Example:

```bash
Manually delete the case directory via OS
```

Removes the case database and reports to free up disk space


## Workflow

### Open Recent Case

```bash
Open Recent Case
```

Example:

```bash
Select a case from the 'Recent Cases' list on startup
```

Quickly resumes work on a previously accessed investigation

### Close Case

```bash
Close Case
```

Example:

```bash
Case > Close Case to release locks
```

Safely closes the database connection and saves the current state


## Cloud Forensics

### Analyze Cloud Storage Artifacts

```bash
Analyze Cloud Storage Artifacts
```

Example:

```bash
Look for installed Dropbox/OneDrive databases
```

Identifies synced files and account information for cloud services


## Encryption

### Detect BitLocker

```bash
Detect BitLocker
```

Example:

```bash
Identify partitions with BitLocker signatures
```

Recognizes volumes encrypted with Windows native encryption

### Detect TrueCrypt/VeraCrypt

```bash
Detect TrueCrypt/VeraCrypt
```

Example:

```bash
Identify high-entropy files or mounted volume artifacts
```

Flags potential encrypted containers used to hide data


## Advanced

### Analyze Volume Shadow Copies

```bash
Analyze Volume Shadow Copies
```

Example:

```bash
Add VSS snapshots as data sources
```

Accesses historical versions of files from Windows Restore points

### Compare VSS Snapshots

```bash
Compare VSS Snapshots
```

Example:

```bash
Compare file differences between Shadow Copies
```

Identifies what changed on the system between two points in time


## Drone Forensics

### Analyze Drone Logs

```bash
Analyze Drone Logs
```

Example:

```bash
Import drone flight logs (DAT/TXT)
```

Parses flight paths and telemetry from UAV devices


## Result Management

### Hide Known Files

```bash
Hide Known Files
```

Example:

```bash
Use 'Hide Known Files' option in views
```

Suppresses files matching the NSRL whitelist from the view

### Group by Data Source

```bash
Group by Data Source
```

Example:

```bash
Toggle 'Group by Data Source' in the tree
```

Separates artifacts based on which disk image they came from


## Advanced UI

### Undock Windows

```bash
Undock Windows
```

Example:

```bash
Drag the Data Content viewer to a second monitor
```

Customizes the workspace layout for multi-monitor setups

### Snapshot Case State

```bash
Snapshot Case State
```

Example:

```bash
Backup the case database file (autopsy.db)
```

Creates a manual backup of the investigation progress


## Artifact Analysis

### Analyze LNK Files

```bash
Analyze LNK Files
```

Example:

```bash
Review parsed Shortcut files
```

Determines target paths and timestamps of accessed files/folders

### Analyze Jump Lists

```bash
Analyze Jump Lists
```

Example:

```bash
Review Automatic/Custom Jump List artifacts
```

Shows recent files accessed via the Taskbar or Start Menu

### Analyze Thumbcache

```bash
Analyze Thumbcache
```

Example:

```bash
Review thumbnail cache database entries
```

Views thumbnails of images that may have been deleted

### Analyze Windows 10 Timeline

```bash
Analyze Windows 10 Timeline
```

Example:

```bash
Parse the ActivitiesCache.db
```

Reconstructs user activity history across devices

### Analyze SRUM Data

```bash
Analyze SRUM Data
```

Example:

```bash
Parse SRUDB.dat for network usage
```

Analyzes System Resource Usage Monitor for app network/CPU history


## Network Forensics

### Import PCAP

```bash
Import PCAP
```

Example:

```bash
Ingest a .pcap file as a logical file
```

Adds network capture files for basic extraction (requires plugins for deep analysis)


## Keyword Search

### Search for URLs

```bash
Search for URLs
```

Example:

```bash
Use Regex for 'http://' and 'https://'
```

Extracts all web links found in files and unallocated space

### Search for Email Addresses

```bash
Search for Email Addresses
```

Example:

```bash
Use Regex for email pattern
```

Harvests all email addresses found on the disk

### Search for Phone Numbers

```bash
Search for Phone Numbers
```

Example:

```bash
Use Regex for various phone number formats
```

Identifies potential contact numbers in documents and logs


## Scripting

### Run Jython Script

```bash
Run Jython Script
```

Example:

```bash
Execute a custom .py script via the Python Console
```

Runs automated tasks using the internal Java-Python environment


## File Identification

### Check Mismatched Extensions

```bash
Check Mismatched Extensions
```

Example:

```bash
Review 'Extension Mismatch Detected' results
```

Investigates files where the header does not match the file extension


## Malware Analysis

### Extract PE Header Info

```bash
Extract PE Header Info
```

Example:

```bash
View compile time and sections of .exe files
```

Analyzes executable structure to find anomalies or spoofing

### Calculate Entropy

```bash
Calculate Entropy
```

Example:

```bash
View entropy score in file metadata
```

Measures randomness to detect compression or encryption in malware


## Reporting

### Tag Reporting

```bash
Tag Reporting
```

Example:

```bash
Generate report containing ONLY tagged items
```

Creates a concise report focused only on pertinent evidence

### Timeline Report

```bash
Timeline Report
```

Example:

```bash
Export timeline events to CSV
```

Creates a chronological list of events for external timeline tools


## Administration

### Manage Solr Schema

```bash
Manage Solr Schema
```

Example:

```bash
Update Solr configuration for new index fields
```

Modifies the search index structure (Advanced Admin task)

### Clear Image Cache

```bash
Clear Image Cache
```

Example:

```bash
Manually clear temp image cache if disk is full
```

Frees up space used by cached thumbnails and temporary files


## Validation

### Check Ingest Logs

```bash
Check Ingest Logs
```

Example:

```bash
Help > Open Log Folder to view autopsy.log
```

Troubleshoots errors that occurred during the ingest process


## Analysis

### Review User Downloads

```bash
Review User Downloads
```

Example:

```bash
Correlate 'Downloads' folder with browser history
```

Confirms if a file on disk originated from a specific web download

### Review Recycle Bin

```bash
Review Recycle Bin
```

Example:

```bash
Parse $Recycle.Bin artifacts
```

Identifies who deleted a file and when it was deleted


## Integrity

### Validate Hash Set

```bash
Validate Hash Set
```

Example:

```bash
Check if an imported hash set is responding
```

Ensures the known-good/bad filters are active and accurate


## Advanced

### Hex Editor Search

```bash
Hex Editor Search
```

Example:

```bash
Search for hex byte sequence in Hex View
```

Finds specific binary signatures manually within a file

### Export Unallocated Space

```bash
Export Unallocated Space
```

Example:

```bash
Right-click 'Unallocated Space' > Extract
```

Exports raw unallocated data for external carving tools


## Triage

### Live Triage on USB

```bash
Live Triage on USB
```

Example:

```bash
Run Autopsy from USB on suspect machine (Lite Mode)
```

Performs data collection on a live system (requires portable setup)


## Analysis

### Review RDP Cache

```bash
Review RDP Cache
```

Example:

```bash
Analyze RDP bitmap cache artifacts
```

Reconstructs visual fragments of previous Remote Desktop sessions

### Review TeamViewer Logs

```bash
Review TeamViewer Logs
```

Example:

```bash
Keyword search for 'TeamViewer' logs
```

Identifies remote access sessions via TeamViewer software

### Review AnyDesk Artifacts

```bash
Review AnyDesk Artifacts
```

Example:

```bash
Locate AnyDesk 'ad.trace' files
```

Analyzes logs for AnyDesk remote connection history


## Database

### Rebuild Solr Index

```bash
Rebuild Solr Index
```

Example:

```bash
Tools > Options > Keyword Search > Rebuild
```

Re-indexes the case text if search results are corrupted


## Analysis

### Review Event Logs - Service Creation

```bash
Review Event Logs - Service Creation
```

Example:

```bash
Filter for Event ID 7045
```

Detects when a new service was installed (common malware persistence)

### Review Event Logs - Process Creation

```bash
Review Event Logs - Process Creation
```

Example:

```bash
Filter for Event ID 4688
```

Tracks which processes were launched and by whom

### Review Event Logs - Account Creation

```bash
Review Event Logs - Account Creation
```

Example:

```bash
Filter for Event ID 4720
```

Identifies when a new user account was added to the system

### Review Event Logs - Clear Logs

```bash
Review Event Logs - Clear Logs
```

Example:

```bash
Filter for Event ID 1102
```

Detects if the audit log was manually cleared to hide tracks


## Export

### Export Metadata to CSV

```bash
Export Metadata to CSV
```

Example:

```bash
Export file listing with MAC times to CSV
```

Generates a file system bodyfile for external timeline analysis


## Finalization

### Archive Case

```bash
Archive Case
```

Example:

```bash
Compress the entire case directory
```

Packages the case data and reports for long-term cold storage

### Verify Report Integrity

```bash
Verify Report Integrity
```

Example:

```bash
Check generated report files against findings
```

Quality assurance step to ensure report accurately reflects evidence

## Related tools

- [The Sleuth Kit](https://terminal.rokibulroni.com/tool/forensics/sleuthkit)
- [Plaso (log2timeline)](https://terminal.rokibulroni.com/tool/forensics/plaso)
- [Foremost](https://terminal.rokibulroni.com/tool/forensics/foremost)
