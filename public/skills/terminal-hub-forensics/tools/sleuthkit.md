# The Sleuth Kit

> Command-line tools for analysing disk images and file systems: list files, recover deleted ones and build timelines.

- Category: Forensics
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/forensics/sleuthkit
- Homepage: https://sleuthkit.org
- Documentation: https://wiki.sleuthkit.org
- Tags: disk forensics, file systems, DFIR

## Install

- apt: `sudo apt install sleuthkit`
- brew: `brew install sleuthkit`

## Basic Syntax & Help

### fls

```bash
fls
```

Displays the basic usage syntax and available flags for the file listing tool.

### mmls -h

```bash
mmls -h
```

Shows help documentation for the media management listing tool used for partition analysis.


## Disk Image Identification

### img_stat image.dd

```bash
img_stat image.dd
```

Example:

```bash
img_stat evidence.dd
```

Displays details about the image format and size for a raw disk image.

### img_stat -i ewf image.E01

```bash
img_stat -i ewf image.E01
```

Example:

```bash
img_stat -i ewf suspect_drive.E01
```

Identifies image details specifically for an Expert Witness Format (E01) file.

### img_cat image.E01

```bash
img_cat image.E01
```

Example:

```bash
img_cat evidence.E01 > raw_convert.dd
```

Outputs the raw content of an image file, useful for converting E01 to raw DD format.


## Partition Analysis

### mmls image.dd

```bash
mmls image.dd
```

Example:

```bash
mmls disk.dd
```

Lists the partition table layout to identify starting sectors of volumes.

### mmls -t dos image.dd

```bash
mmls -t dos image.dd
```

Example:

```bash
mmls -t dos legacy_disk.dd
```

Forces the interpretation of the partition table as a DOS MBR type.

### mmls -t gpt image.dd

```bash
mmls -t gpt image.dd
```

Example:

```bash
mmls -t gpt modern_disk.dd
```

Forces the interpretation of the partition table as a GPT type.

### mmls -B image.dd

```bash
mmls -B image.dd
```

Example:

```bash
mmls -B disk.dd
```

Displays the partition table size values in bytes instead of sectors.

### mmstat image.dd

```bash
mmstat image.dd
```

Displays statistics about the volume system and partition layout.

### mmcat -o 2048 image.dd

```bash
mmcat -o 2048 image.dd
```

Example:

```bash
mmcat -o 2048 disk.dd > partition1.dd
```

Extracts a specific partition starting at the given offset into a separate file.


## File System Detection

### fsstat -o 2048 image.dd

```bash
fsstat -o 2048 image.dd
```

Example:

```bash
fsstat -o 2048 disk.dd
```

Displays general details of the file system located at the specified offset.

### fsstat -f ntfs -o 2048 image.dd

```bash
fsstat -f ntfs -o 2048 image.dd
```

Example:

```bash
fsstat -f ntfs -o 2048 disk.dd
```

Forces the analysis of the file system as NTFS at the specified offset.

### fsstat -f fat32 -o 63 image.dd

```bash
fsstat -f fat32 -o 63 image.dd
```

Example:

```bash
fsstat -f fat32 -o 63 usb_dump.dd
```

Forces the analysis of the file system as FAT32 at the specified offset.


## File & Directory Analysis

### fls -o 2048 image.dd

```bash
fls -o 2048 image.dd
```

Example:

```bash
fls -o 2048 disk.dd
```

Lists files and directories in the root directory of the file system.

### fls -r -o 2048 image.dd

```bash
fls -r -o 2048 image.dd
```

Example:

```bash
fls -r -o 2048 disk.dd
```

Recursively lists all files and directories starting from the root.

### fls -d -o 2048 image.dd

```bash
fls -d -o 2048 image.dd
```

Example:

```bash
fls -d -o 2048 disk.dd
```

Lists only deleted file entries from the file system.

### fls -u -o 2048 image.dd

```bash
fls -u -o 2048 image.dd
```

Example:

```bash
fls -u -o 2048 disk.dd
```

Lists only undeleted (active) file entries.

### fls -p -o 2048 image.dd

```bash
fls -p -o 2048 image.dd
```

Example:

```bash
fls -p -o 2048 disk.dd
```

Displays full paths for every file listed.

### fls -F -o 2048 image.dd

```bash
fls -F -o 2048 image.dd
```

Example:

```bash
fls -F -o 2048 disk.dd
```

Lists only file entries, excluding directory entries.

### fls -D -o 2048 image.dd

```bash
fls -D -o 2048 image.dd
```

Example:

```bash
fls -D -o 2048 disk.dd
```

Lists only directory entries, excluding file entries.

### ffind -o 2048 image.dd 12345

```bash
ffind -o 2048 image.dd 12345
```

Example:

```bash
ffind -o 2048 disk.dd 12345
```

Finds the filename associated with a specific inode number.

### ffind -a -o 2048 image.dd 12345

```bash
ffind -a -o 2048 image.dd 12345
```

Example:

```bash
ffind -a -o 2048 disk.dd 12345
```

Finds all occurrences of filenames pointing to a specific inode.


## Metadata & Inode Analysis

### istat -o 2048 image.dd 12345

```bash
istat -o 2048 image.dd 12345
```

Example:

```bash
istat -o 2048 disk.dd 12345
```

Displays detailed metadata structures for a specific inode, including MAC times and block addresses.

### ils -o 2048 image.dd

```bash
ils -o 2048 image.dd
```

Example:

```bash
ils -o 2048 disk.dd
```

Lists all inode entries in the file system.

### ils -e -o 2048 image.dd

```bash
ils -e -o 2048 image.dd
```

Example:

```bash
ils -e -o 2048 disk.dd
```

Lists all inode entries including those in the simplified body file format.

### ifind -o 2048 -d 5000 image.dd

```bash
ifind -o 2048 -d 5000 image.dd
```

Example:

```bash
ifind -o 2048 -d 5000 disk.dd
```

Finds the meta-data structure that has allocated a specific data unit (block).


## Content Extraction

### icat -o 2048 image.dd 12345

```bash
icat -o 2048 image.dd 12345
```

Example:

```bash
icat -o 2048 disk.dd 12345 > suspect_document.pdf
```

Extracts the content of a file based on its inode number.

### icat -r -o 2048 image.dd 12345

```bash
icat -r -o 2048 image.dd 12345
```

Example:

```bash
icat -r -o 2048 disk.dd 12345 > recovered_deleted.txt
```

Attempts to recover the content of a deleted file by inode number.

### icat -s -o 2048 image.dd 12345

```bash
icat -s -o 2048 image.dd 12345
```

Example:

```bash
icat -s -o 2048 disk.dd 12345
```

Displays the slack space (unused bytes at end of last block) for a specific inode.


## Block & Data Unit Analysis

### blkstat -o 2048 image.dd 5000

```bash
blkstat -o 2048 image.dd 5000
```

Example:

```bash
blkstat -o 2048 disk.dd 5000
```

Displays the allocation status of a specific data block.

### blkcat -o 2048 image.dd 5000

```bash
blkcat -o 2048 image.dd 5000
```

Example:

```bash
blkcat -o 2048 disk.dd 5000 > block_dump.bin
```

Dumps the raw contents of a specific data block.

### blkcat -h -o 2048 image.dd 5000

```bash
blkcat -h -o 2048 image.dd 5000
```

Example:

```bash
blkcat -h -o 2048 disk.dd 5000
```

Dumps the raw contents of a block in a human-readable hex dump format.

### blkls -o 2048 image.dd

```bash
blkls -o 2048 image.dd
```

Example:

```bash
blkls -o 2048 disk.dd > unallocated_space.dd
```

Extracts all unallocated blocks to a single file for carving.

### blkls -s -o 2048 image.dd

```bash
blkls -s -o 2048 image.dd
```

Example:

```bash
blkls -s -o 2048 disk.dd > slack_space.dd
```

Copies only the slack space of allocated files.

### blkcalc -o 2048 -u 5000 image.dd

```bash
blkcalc -o 2048 -u 5000 image.dd
```

Example:

```bash
blkcalc -o 2048 -u 5000 disk.dd
```

Calculates the unallocated block address from a file system block address.

### blkcalc -o 2048 -d 1000 image.dd

```bash
blkcalc -o 2048 -d 1000 image.dd
```

Example:

```bash
blkcalc -o 2048 -d 1000 disk.dd
```

Calculates the file system block address from an unallocated image block address.


## Timeline Generation

### fls -m / -r -o 2048 image.dd

```bash
fls -m / -r -o 2048 image.dd
```

Example:

```bash
fls -m / -r -o 2048 disk.dd > bodyfile.txt
```

Generates a body file required for timeline creation using recursion from root.

### tsk_gettimes -o 2048 image.dd

```bash
tsk_gettimes -o 2048 image.dd
```

Example:

```bash
tsk_gettimes -o 2048 disk.dd > bodyfile.txt
```

Collects MAC times from a file system image and outputs a body file (more robust than fls).

### mactime -b bodyfile.txt

```bash
mactime -b bodyfile.txt
```

Example:

```bash
mactime -b bodyfile.txt > timeline.csv
```

Parses a body file to create a human-readable timeline of file activity.

### mactime -b bodyfile.txt -d

```bash
mactime -b bodyfile.txt -d
```

Example:

```bash
mactime -b bodyfile.txt -d > timeline.csv
```

Parses a body file and outputs the timeline in comma-delimited (CSV) format.

### mactime -b bodyfile.txt -y

```bash
mactime -b bodyfile.txt -y
```

Example:

```bash
mactime -b bodyfile.txt -y > timeline_iso.txt
```

Outputs the timeline with timestamps in ISO 8601 format.

### mactime -b bodyfile.txt -z UTC

```bash
mactime -b bodyfile.txt -z UTC
```

Example:

```bash
mactime -b bodyfile.txt -z EST5EDT > timeline_est.txt
```

Specifies the timezone for the timeline output.

### mactime -b bodyfile.txt 2023-01-01

```bash
mactime -b bodyfile.txt 2023-01-01
```

Example:

```bash
mactime -b bodyfile.txt 2023-01-01 > timeline_2023.txt
```

Filters the timeline to show only events occurring after a specific date.


## Journal Analysis

### jls -o 2048 image.dd

```bash
jls -o 2048 image.dd
```

Example:

```bash
jls -o 2048 disk.dd
```

Lists the journal entries in a file system (e.g., Ext3/4 journal).

### jcat -o 2048 image.dd 100

```bash
jcat -o 2048 image.dd 100
```

Example:

```bash
jcat -o 2048 disk.dd 100 > journal_entry.bin
```

Extracts the content of a specific journal block.

### jcat -f ext -o 2048 image.dd 100

```bash
jcat -f ext -o 2048 image.dd 100
```

Example:

```bash
jcat -f ext -o 2048 disk.dd 100
```

Forces the interpretation of the journal as an Ext file system journal.


## Hash Analysis

### hfind -i nsrl hash.db 1234567890ABCDEF

```bash
hfind -i nsrl hash.db 1234567890ABCDEF
```

Example:

```bash
hfind -i nsrl NSRLFile.txt 1234567890ABCDEF
```

Looks up a specific MD5/SHA1 hash in an NSRL formatted hash database.

### hfind -i md5sum hash.db 123456...

```bash
hfind -i md5sum hash.db 123456...
```

Example:

```bash
hfind -i md5sum known_bad.txt 123456...
```

Looks up a hash in an md5sum formatted text file database.


## Signature Search

### sigfind -o 2048 -t 1234 image.dd

```bash
sigfind -o 2048 -t 1234 image.dd
```

Example:

```bash
sigfind -o 2048 -t 4d5a disk.dd
```

Searches for a binary signature (hex) at a specific offset within the image.

### sigfind -o 2048 -b 512 image.dd

```bash
sigfind -o 2048 -b 512 image.dd
```

Example:

```bash
sigfind -o 2048 -b 512 disk.dd
```

Searches for a signature but changes the block size used for the search.


## Automation & Workflow

### tsk_loaddb -d case.db image.dd

```bash
tsk_loaddb -d case.db image.dd
```

Example:

```bash
tsk_loaddb -d investigation.db disk.dd
```

Parses the disk image and populates a SQLite database with the metadata.

### tsk_loaddb -i ewf -d case.db image.E01

```bash
tsk_loaddb -i ewf -d case.db image.E01
```

Example:

```bash
tsk_loaddb -i ewf -d case.db evidence.E01
```

Populates a SQLite database from an E01 image file.

### tsk_recover -o 2048 image.dd output_dir

```bash
tsk_recover -o 2048 image.dd output_dir
```

Example:

```bash
tsk_recover -o 2048 disk.dd recovered_files
```

Automatically recovers files from the image to a local directory.

### tsk_recover -a -o 2048 image.dd output_dir

```bash
tsk_recover -a -o 2048 image.dd output_dir
```

Example:

```bash
tsk_recover -a -o 2048 disk.dd recovered_files
```

Recovers only allocated files from the image to a directory.

### tsk_recover -o 2048 -i raw -d 12345 image.dd output_dir

```bash
tsk_recover -o 2048 -i raw -d 12345 image.dd output_dir
```

Example:

```bash
tsk_recover -o 2048 -d 12345 disk.dd recovered_dir
```

Recovers files starting specifically from a given directory inode.

### tsk_comparedir -o 2048 image.dd local_dir

```bash
tsk_comparedir -o 2048 image.dd local_dir
```

Example:

```bash
tsk_comparedir -o 2048 disk.dd /mnt/comparison
```

Compares the contents of a disk image directory with a local directory.

### tsk_comparedir -n 12345 -o 2048 image.dd local_dir

```bash
tsk_comparedir -n 12345 -o 2048 image.dd local_dir
```

Example:

```bash
tsk_comparedir -n 12345 -o 2048 disk.dd /mnt/comparison
```

Compares a specific inode directory in the image with a local directory.

### tsk_imageinfo image.dd

```bash
tsk_imageinfo image.dd
```

Example:

```bash
tsk_imageinfo disk.dd
```

Calculates and displays the SHA-1 and MD5 hashes of the entire image.


## Advanced Metadata

### istat -z UTC -o 2048 image.dd 12345

```bash
istat -z UTC -o 2048 image.dd 12345
```

Example:

```bash
istat -z EST5EDT -o 2048 disk.dd 12345
```

Displays inode stats with times converted to a specific timezone.

### ifind -p 12345 -o 2048 image.dd

```bash
ifind -p 12345 -o 2048 image.dd
```

Example:

```bash
ifind -p 12345 -o 2048 disk.dd
```

Finds the unallocated inode that points to a specific data unit (orphan checking).

### ifind -n "file.txt" -o 2048 image.dd

```bash
ifind -n "file.txt" -o 2048 image.dd
```

Example:

```bash
ifind -n "malware.exe" -o 2048 disk.dd
```

Finds the inode number associated with a specific file name.


## Incident Response

### fls -r -o 2048 image.dd | grep ".exe"

```bash
fls -r -o 2048 image.dd | grep ".exe"
```

Example:

```bash
fls -r -o 2048 disk.dd | grep ".exe" > executables.txt
```

Filters recursive file listing to identify all executable files for malware hunting.

### fls -r -d -o 2048 image.dd | grep "User"

```bash
fls -r -d -o 2048 image.dd | grep "User"
```

Example:

```bash
fls -r -d -o 2048 disk.dd | grep "User"
```

Searches for deleted files specifically within User directories.

### icat -o 2048 image.dd 12345 | strings

```bash
icat -o 2048 image.dd 12345 | strings
```

Example:

```bash
icat -o 2048 disk.dd 12345 | strings | grep "http"
```

Extracts file content and pipes to strings to find text indicators like URLs.

### blkls -o 2048 image.dd | strings -a

```bash
blkls -o 2048 image.dd | strings -a
```

Example:

```bash
blkls -o 2048 disk.dd | strings -a > unallocated_strings.txt
```

Extracts strings from all unallocated space to find evidence in deleted data.

### tsk_gettimes -o 2048 image.dd | grep "2023-10-15"

```bash
tsk_gettimes -o 2048 image.dd | grep "2023-10-15"
```

Example:

```bash
tsk_gettimes -o 2048 disk.dd | grep "2023-10-15" > incident_day.body
```

Extracts timeline data and filters immediately for a specific incident date.


## Blue Team Validation

### sorter -d case_logs -s -o 2048 image.dd

```bash
sorter -d case_logs -s -o 2048 image.dd
```

Example:

```bash
sorter -d sort_output -s -o 2048 disk.dd
```

Sorts files in the image based on file type signatures and saves to a directory.

### sorter -h -o 2048 image.dd

```bash
sorter -h -o 2048 image.dd
```

Example:

```bash
sorter -h -o 2048 disk.dd
```

Outputs the sorter results in HTML format for easier reporting.

### sorter -e -o 2048 image.dd

```bash
sorter -e -o 2048 image.dd
```

Example:

```bash
sorter -e -o 2048 disk.dd
```

Performs an extension mismatch check during the sorting process.


## Advanced File Systems

### fsstat -f hfs -o 2048 image.dd

```bash
fsstat -f hfs -o 2048 image.dd
```

Example:

```bash
fsstat -f hfs -o 2048 mac_disk.dd
```

Analyzes HFS+ file system specific metadata.

### fsstat -f iso9660 -o 0 image.iso

```bash
fsstat -f iso9660 -o 0 image.iso
```

Example:

```bash
fsstat -f iso9660 -o 0 cd_dump.iso
```

Analyzes an ISO 9660 file system typically found on optical media.


## Complex Carving Prep

### blkls -A -o 2048 image.dd

```bash
blkls -A -o 2048 image.dd
```

Example:

```bash
blkls -A -o 2048 disk.dd > all_blocks.dd
```

Extracts all blocks (allocated and unallocated) primarily for verification purposes.

### blkls -l -o 2048 image.dd

```bash
blkls -l -o 2048 image.dd
```

Example:

```bash
blkls -l -o 2048 disk.dd
```

Lists details about data units rather than dumping their contents.


## Forensic Scripting

### tsk_loaddb -k -d case.db image.dd

```bash
tsk_loaddb -k -d case.db image.dd
```

Example:

```bash
tsk_loaddb -k -d case.db disk.dd
```

Creates the database but does not create tables for block data, saving space.

### mmstat -t dos image.dd

```bash
mmstat -t dos image.dd
```

Example:

```bash
mmstat -t dos disk.dd
```

Displays stats specifically for a DOS partition table type.


## Reporting

### fls -l -r -o 2048 image.dd

```bash
fls -l -r -o 2048 image.dd
```

Example:

```bash
fls -l -r -o 2048 disk.dd > long_listing.txt
```

Produces a long-format listing of files including permissions and size.

### mactime -b bodyfile.txt -ggroup

```bash
mactime -b bodyfile.txt -ggroup
```

Example:

```bash
mactime -b bodyfile.txt -ggroup_file.txt
```

Uses a group definition file to map GIDs to group names in the timeline.

### mactime -b bodyfile.txt -ppasswd

```bash
mactime -b bodyfile.txt -ppasswd
```

Example:

```bash
mactime -b bodyfile.txt -ppasswd_file.txt
```

Uses a password definition file to map UIDs to usernames in the timeline.


## Advanced Hashing

### hfind -q hash.db 12345...

```bash
hfind -q hash.db 12345...
```

Example:

```bash
hfind -q known_bad.db 12345...
```

Performs a 'quick' lookup in the hash database.


## Internal Debugging

### fsstat -v -o 2048 image.dd

```bash
fsstat -v -o 2048 image.dd
```

Example:

```bash
fsstat -v -o 2048 disk.dd
```

Runs file system statistics in verbose mode for debugging parsing errors.

### mmls -v image.dd

```bash
mmls -v image.dd
```

Example:

```bash
mmls -v disk.dd
```

Runs partition listing in verbose mode to diagnose table corruption.


## Volume System Analysis

### mmls -a image.dd

```bash
mmls -a image.dd
```

Example:

```bash
mmls -a disk.dd
```

Lists all volumes including those that are unallocated in the partition table.


## File Name Analysis

### fls -o 2048 -f ntfs image.dd

```bash
fls -o 2048 -f ntfs image.dd
```

Example:

```bash
fls -o 2048 -f ntfs disk.dd
```

Explicitly declares the file system type for listing files to avoid auto-detection errors.


## Inode Analysis

### istat -f ext4 -o 2048 image.dd 12345

```bash
istat -f ext4 -o 2048 image.dd 12345
```

Example:

```bash
istat -f ext4 -o 2048 disk.dd 12345
```

Displays inode stats forcing Ext4 interpretation.


## Threat Hunting

### fls -o 2048 -r image.dd | grep -i "\.ps1$"

```bash
fls -o 2048 -r image.dd | grep -i "\.ps1$"
```

Example:

```bash
fls -o 2048 -r disk.dd | grep -i "\.ps1$"
```

Hunts for PowerShell scripts across the file system using recursive listing.

### fls -o 2048 -r image.dd | grep -i "temp"

```bash
fls -o 2048 -r image.dd | grep -i "temp"
```

Example:

```bash
fls -o 2048 -r disk.dd | grep -i "temp"
```

Identifies files located in temporary directories often used for malware staging.


## Data Recovery

### tsk_recover -e -o 2048 image.dd output_dir

```bash
tsk_recover -e -o 2048 image.dd output_dir
```

Example:

```bash
tsk_recover -e -o 2048 disk.dd output_dir
```

Recovers files and exports them, including unallocated (deleted) files if possible.


## Disk Geometry

### img_stat -v image.dd

```bash
img_stat -v image.dd
```

Example:

```bash
img_stat -v disk.dd
```

Provides verbose image statistics including block size and count.


## Block Analysis

### blkcat -f ntfs -o 2048 image.dd 100

```bash
blkcat -f ntfs -o 2048 image.dd 100
```

Example:

```bash
blkcat -f ntfs -o 2048 disk.dd 100
```

Dumps a block forcing NTFS interpretation.


## Timeline Analysis

### mactime -b bodyfile.txt -i day

```bash
mactime -b bodyfile.txt -i day
```

Example:

```bash
mactime -b bodyfile.txt -i day > timeline.txt
```

Creates a timeline summary grouped by day.

### mactime -b bodyfile.txt -i hour

```bash
mactime -b bodyfile.txt -i hour
```

Example:

```bash
mactime -b bodyfile.txt -i hour > timeline.txt
```

Creates a timeline summary grouped by hour for high-precision analysis.


## Partition Analysis

### mmls -i raw image.dd

```bash
mmls -i raw image.dd
```

Example:

```bash
mmls -i raw disk.dd
```

Specifies the image type as raw explicitly during partition analysis.

### mmls -i ewf image.E01

```bash
mmls -i ewf image.E01
```

Example:

```bash
mmls -i ewf disk.E01
```

Specifies the image type as EWF explicitly during partition analysis.


## Data Unit Analysis

### blkcalc -f ntfs -o 2048 -u 1000 image.dd

```bash
blkcalc -f ntfs -o 2048 -u 1000 image.dd
```

Example:

```bash
blkcalc -f ntfs -o 2048 -u 1000 disk.dd
```

Calculates unallocated address forcing NTFS context.


## Metadata Analysis

### ils -f ntfs -o 2048 image.dd

```bash
ils -f ntfs -o 2048 image.dd
```

Example:

```bash
ils -f ntfs -o 2048 disk.dd
```

Lists inodes forcing NTFS interpretation.

### ils -m -o 2048 image.dd

```bash
ils -m -o 2048 image.dd
```

Example:

```bash
ils -m -o 2048 disk.dd
```

Lists inodes in machine readable format.


## Journal Analysis

### jls -f ext -o 2048 image.dd

```bash
jls -f ext -o 2048 image.dd
```

Example:

```bash
jls -f ext -o 2048 disk.dd
```

Lists journal entries forcing Ext file system context.


## Signature Analysis

### sigfind -o 2048 -t 55AA image.dd

```bash
sigfind -o 2048 -t 55AA image.dd
```

Example:

```bash
sigfind -o 2048 -t 55AA disk.dd
```

Searches for the boot signature (0x55AA) to find boot sectors manually.


## Cleanup

### rm bodyfile.txt timeline.csv

```bash
rm bodyfile.txt timeline.csv
```

Removes temporary analysis files after the investigation is complete.

## Related tools

- [Autopsy](https://terminal.rokibulroni.com/tool/forensics/autopsy)
- [Foremost](https://terminal.rokibulroni.com/tool/forensics/foremost)
- [Plaso (log2timeline)](https://terminal.rokibulroni.com/tool/forensics/plaso)
