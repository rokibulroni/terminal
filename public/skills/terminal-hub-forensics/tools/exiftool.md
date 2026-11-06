# ExifTool

> Reads, writes and strips metadata in images, documents, audio and video — invaluable for OSINT and forensics.

- Category: Forensics
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/forensics/exiftool
- Homepage: https://exiftool.org
- Documentation: https://exiftool.org/exiftool_pod.html
- Tags: metadata, OSINT, images

## Install

- apt: `sudo apt install libimage-exiftool-perl`
- brew: `brew install exiftool`
- windows: `winget install OliverBetz.ExifTool`

## Basic ExifTool Syntax

### exiftool -ver

```bash
exiftool -ver
```

Displays the installed version number of the ExifTool application


## Basic Metadata Inspection

### exiftool <file>

```bash
exiftool <file>
```

Example:

```bash
exiftool evidence.jpg
```

Extracts and displays all standard metadata tags found in the specified file

### exiftool -a <file>

```bash
exiftool -a <file>
```

Example:

```bash
exiftool -a document.pdf
```

Displays all metadata tags, including duplicate tags that are normally suppressed


## Output and Formatting Control

### exiftool -s <file>

```bash
exiftool -s <file>
```

Example:

```bash
exiftool -s image.png
```

Displays tag names and values in a short format without extra whitespace

### exiftool -s -s <file>

```bash
exiftool -s -s <file>
```

Example:

```bash
exiftool -s -s photo.jpg
```

Displays tag values only, omitting the tag names entirely


## Tag Filtering and Grouping

### exiftool -g <file>

```bash
exiftool -g <file>
```

Example:

```bash
exiftool -g evidence.docx
```

Organizes metadata output by tag group headers like EXIF, XMP, and IPTC

### exiftool -G1 <file>

```bash
exiftool -G1 <file>
```

Example:

```bash
exiftool -G1 video.mp4
```

Displays the specific family 1 group name for each tag along with the value

### exiftool -H <file>

```bash
exiftool -H <file>
```

Example:

```bash
exiftool -H unknown_file.bin
```

Displays the hexadecimal tag ID for each metadata tag found

### exiftool -D <file>

```bash
exiftool -D <file>
```

Example:

```bash
exiftool -D firmware.bin
```

Displays the decimal tag ID for each metadata tag found


## Incident Response Investigations

### exiftool -u <file>

```bash
exiftool -u <file>
```

Example:

```bash
exiftool -u suspicious.jpg
```

Extracts unknown tags that ExifTool does not recognize by name

### exiftool -U <file>

```bash
exiftool -U <file>
```

Example:

```bash
exiftool -U payload.jpg
```

Extracts unknown binary tags which may contain hidden data or payloads


## Tag Filtering and Grouping

### exiftool -common <file>

```bash
exiftool -common <file>
```

Example:

```bash
exiftool -common photo.jpg
```

Displays only the most common and useful metadata tags for quick triage


## Output and Formatting Control

### exiftool -j <file>

```bash
exiftool -j <file>
```

Example:

```bash
exiftool -j evidence.jpg
```

Exports the metadata output in standard JSON format

### exiftool -X <file>

```bash
exiftool -X <file>
```

Example:

```bash
exiftool -X report.xml
```

Exports the metadata output in RDF/XML format

### exiftool -php <file>

```bash
exiftool -php <file>
```

Example:

```bash
exiftool -php image.jpg
```

Formats the output as a PHP array for web integration


## Batch Processing

### exiftool -csv <dir>

```bash
exiftool -csv <dir>
```

Example:

```bash
exiftool -csv /case_data/
```

Recursively scans a directory and outputs a single CSV file with all metadata


## Output and Formatting Control

### exiftool -T -<tag1> -<tag2> <file>

```bash
exiftool -T -<tag1> -<tag2> <file>
```

Example:

```bash
exiftool -T -filename -imagesize image.jpg
```

Outputs specific tags in a tab-delimited format for spreadsheet import


## Recursive and Batch Processing

### exiftool -r <dir>

```bash
exiftool -r <dir>
```

Example:

```bash
exiftool -r /evidence/images/
```

Recursively processes all files in subdirectories of the specified folder

### exiftool -ext <ext> -r <dir>

```bash
exiftool -ext <ext> -r <dir>
```

Example:

```bash
exiftool -ext jpg -r /home/user/
```

Processes only files with the specified extension in a directory tree

### exiftool --ext <ext> -r <dir>

```bash
exiftool --ext <ext> -r <dir>
```

Example:

```bash
exiftool --ext exe -r /server/uploads/
```

Excludes files with the specified extension from processing


## Threat Hunting and Analysis

### exiftool -if '<condition>' <dir>

```bash
exiftool -if '<condition>' <dir>
```

Example:

```bash
exiftool -if '$iso > 1600' /photos/
```

Processes files only if they meet a specific metadata condition

### exiftool -p '<string>' <file>

```bash
exiftool -p '<string>' <file>
```

Example:

```bash
exiftool -p '$filename found at $gpslatitude' photo.jpg
```

Prints a custom formatted string using tag values for reporting


## Metadata Editing

### exiftool -<tag>=<value> <file>

```bash
exiftool -<tag>=<value> <file>
```

Example:

```bash
exiftool -Artist='Investigator' photo.jpg
```

Writes a new value to the specified metadata tag

### exiftool -<tag>+=<value> <file>

```bash
exiftool -<tag>+=<value> <file>
```

Example:

```bash
exiftool -Keywords+='evidence' document.pdf
```

Appends a value to a list-type tag like Keywords without overwriting


## Metadata Removal

### exiftool -<tag>= <file>

```bash
exiftool -<tag>= <file>
```

Example:

```bash
exiftool -Comment= private.jpg
```

Deletes the specific tag from the file by assigning it an empty value

### exiftool -all= <file>

```bash
exiftool -all= <file>
```

Example:

```bash
exiftool -all= public_release.jpg
```

Removes all supported metadata tags from the file for sanitization

### exiftool -gps:all= <file>

```bash
exiftool -gps:all= <file>
```

Example:

```bash
exiftool -gps:all= photo.jpg
```

Removes only the GPS and geolocation tags while keeping others intact


## Metadata Editing

### exiftool -tagsfromfile <src> <dst>

```bash
exiftool -tagsfromfile <src> <dst>
```

Example:

```bash
exiftool -tagsfromfile original.jpg edited.jpg
```

Copies all metadata tags from a source file to a destination file

### exiftool -z -tagsfromfile <src> <dst>

```bash
exiftool -z -tagsfromfile <src> <dst>
```

Example:

```bash
exiftool -z -tagsfromfile a.jpg b.jpg
```

Copies tags while ignoring internal compression tags to prevent corruption


## Date and Time Handling

### exiftool -alldates+=<shift> <file>

```bash
exiftool -alldates+=<shift> <file>
```

Example:

```bash
exiftool -alldates+=1 image.jpg
```

Shifts all common date/time tags forward by one hour

### exiftool -GlobalTimeShift <shift> <file>

```bash
exiftool -GlobalTimeShift <shift> <file>
```

Example:

```bash
exiftool -GlobalTimeShift -0:30 image.jpg
```

Applies a global time shift to all date tags when reading or writing


## File Renaming

### exiftool '-filename<CreateDate' -d <fmt> <dir>

```bash
exiftool '-filename<CreateDate' -d <fmt> <dir>
```

Example:

```bash
exiftool '-filename<CreateDate' -d %Y%m%d_%H%M%S.%%e .
```

Renames files based on their creation date using a specific date format

### exiftool '-Directory<DateTimeOriginal' -d <fmt> <dir>

```bash
exiftool '-Directory<DateTimeOriginal' -d <fmt> <dir>
```

Example:

```bash
exiftool '-Directory<DateTimeOriginal' -d %Y/%m .
```

Moves files into a directory structure based on their original date year and month


## Incident Response Investigations

### exiftool -ee <file>

```bash
exiftool -ee <file>
```

Example:

```bash
exiftool -ee video.mp4
```

Extracts embedded metadata from video streams or document sub-files

### exiftool -ee3 <file>

```bash
exiftool -ee3 <file>
```

Example:

```bash
exiftool -ee3 video.mov
```

Extracts all embedded data from video files, parsing the entire stream aggressively


## Digital Forensics Reporting

### exiftool -b -ThumbnailImage <file> > <out>

```bash
exiftool -b -ThumbnailImage <file> > <out>
```

Example:

```bash
exiftool -b -ThumbnailImage doc.jpg > thumb.jpg
```

Extracts the binary thumbnail data from a file and saves it as a separate image

### exiftool -b -PreviewImage <file> > <out>

```bash
exiftool -b -PreviewImage <file> > <out>
```

Example:

```bash
exiftool -b -PreviewImage raw.cr2 > preview.jpg
```

Extracts the large embedded preview image from RAW camera files


## Blue Team Defensive Validation

### exiftool -v <file>

```bash
exiftool -v <file>
```

Example:

```bash
exiftool -v unknown.file
```

Runs in verbose mode to show the detailed parsing process of the file structure

### exiftool -v3 <file>

```bash
exiftool -v3 <file>
```

Example:

```bash
exiftool -v3 exploit.pdf
```

Runs in very high verbose mode, providing a hex dump of the parsed tags

### exiftool -htmlDump <file>

```bash
exiftool -htmlDump <file>
```

Example:

```bash
exiftool -htmlDump suspect.jpg > dump.html
```

Generates an HTML file illustrating the binary structure and offsets of the metadata


## Advanced Workflows

### exiftool -@ <argfile>

```bash
exiftool -@ <argfile>
```

Example:

```bash
exiftool -@ arguments.txt
```

Reads command-line arguments from a file to bypass shell character limits

### exiftool -config <cfg> <file>

```bash
exiftool -config <cfg> <file>
```

Example:

```bash
exiftool -config custom.config image.jpg
```

Uses a custom configuration file to define user-specific tags or behaviors


## Error Handling

### exiftool -m <file>

```bash
exiftool -m <file>
```

Example:

```bash
exiftool -m corrupted.jpg
```

Ignores minor errors and warnings to force processing of corrupted files

### exiftool -F <file>

```bash
exiftool -F <file>
```

Example:

```bash
exiftool -F bad_offsets.jpg
```

Attempts to fix the offsets of EXIF tags if they are incorrect


## Performance Optimization

### exiftool -fast <file>

```bash
exiftool -fast <file>
```

Example:

```bash
exiftool -fast huge_dir/
```

Scans files faster by avoiding the extraction of MakerNotes

### exiftool -fast2 <file>

```bash
exiftool -fast2 <file>
```

Example:

```bash
exiftool -fast2 network_share/
```

Scans even faster by avoiding any unnecessary bit-level information processing


## Character Encoding

### exiftool -L <file>

```bash
exiftool -L <file>
```

Example:

```bash
exiftool -L legacy.jpg
```

Assumes Latin1 encoding for tags instead of UTF-8 for legacy compatibility

### exiftool -charset <set> <file>

```bash
exiftool -charset <set> <file>
```

Example:

```bash
exiftool -charset cyrillic input.txt
```

Specifies the character set to use when decoding tag values


## Threat Hunting and Analysis

### exiftool -listx

```bash
exiftool -listx
```

Lists all available tags in XML format including their data types

### exiftool -listw

```bash
exiftool -listw
```

Lists all Writeable tags available in the current version


## Digital Forensics Reporting

### exiftool -W+! <fmt> <file>

```bash
exiftool -W+! <fmt> <file>
```

Example:

```bash
exiftool -W+! %d%f_%t%-c.%s -b -PreviewImage img.cr2
```

Writes extracted binary data to a file with a unique name pattern


## Metadata Editing

### exiftool -overwrite_original <file>

```bash
exiftool -overwrite_original <file>
```

Example:

```bash
exiftool -overwrite_original -all= image.jpg
```

Overwrites the original file directly instead of creating a '_original' backup

### exiftool -overwrite_original_in_place <file>

```bash
exiftool -overwrite_original_in_place <file>
```

Example:

```bash
exiftool -overwrite_original_in_place image.jpg
```

Overwrites the file while preserving file system attributes like creation time


## Geolocation Analysis

### exiftool -geotag <log> <dir>

```bash
exiftool -geotag <log> <dir>
```

Example:

```bash
exiftool -geotag track.gpx /photos/
```

Adds GPS coordinates to images by correlating time with a GPS track log

### exiftool -geotime=<val> <file>

```bash
exiftool -geotime=<val> <file>
```

Example:

```bash
exiftool -geotime='2023:01:01 12:00:00' image.jpg
```

Sets the GPS timestamp used for synchronization during geotagging


## Advanced Workflows

### exiftool -api LargeFileSupport=1 <file>

```bash
exiftool -api LargeFileSupport=1 <file>
```

Example:

```bash
exiftool -api LargeFileSupport=1 huge_video.mp4
```

Enables API support for processing files larger than 4GB

### exiftool -api RequestAll=2 <file>

```bash
exiftool -api RequestAll=2 <file>
```

Example:

```bash
exiftool -api RequestAll=2 weird.jpg
```

Forces ExifTool to recognize and dump even non-standard or obscure tags

### exiftool -api QuickTimeUTC=1 <file>

```bash
exiftool -api QuickTimeUTC=1 <file>
```

Example:

```bash
exiftool -api QuickTimeUTC=1 video.mov
```

Assumes QuickTime date tags are in UTC rather than local time


## Blue Team Defensive Validation

### exiftool -validate <file>

```bash
exiftool -validate <file>
```

Example:

```bash
exiftool -validate potential_malware.jpg
```

Checks the file metadata structure for validity and potential corruption


## Incident Response Investigations

### exiftool -warning -error -a <file>

```bash
exiftool -warning -error -a <file>
```

Example:

```bash
exiftool -warning -error -a evidence.pdf
```

Extracts only the warning and error messages generated during file parsing

## Related tools

- [Binwalk](https://terminal.rokibulroni.com/tool/forensics/binwalk)
- [strings](https://terminal.rokibulroni.com/tool/forensics/strings)
