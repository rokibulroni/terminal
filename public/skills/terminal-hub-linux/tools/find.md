# find

> Searches the directory tree by name, type, size, time, owner or permissions — and runs actions on matches.

- Category: Linux
- Commands: 22
- Page: https://terminal.rokibulroni.com/tool/linux/find
- Homepage: https://www.gnu.org/software/findutils/
- Documentation: https://man7.org/linux/man-pages/man1/find.1.html
- Tags: search, files, permissions

## Install

- apt: `sudo apt install findutils`
- brew: `brew install findutils`

## By name and type

### find <dir> -name "<pattern>"

```bash
find <dir> -name "<pattern>"
```

Example:

```bash
find /etc -name "*.conf"
```

Finds files whose name matches a glob (case-sensitive).

### find <dir> -iname "<pattern>"

```bash
find <dir> -iname "<pattern>"
```

Example:

```bash
find / -iname "*backup*" 2>/dev/null
```

Case-insensitive name match; 2>/dev/null hides permission errors.

### find <dir> -type f

```bash
find <dir> -type f
```

Example:

```bash
find /var/www -type f
```

Files only. Use -type d for directories and -type l for symlinks.

### find <dir> -maxdepth <n> -name "<pattern>"

```bash
find <dir> -maxdepth <n> -name "<pattern>"
```

Example:

```bash
find . -maxdepth 2 -name "*.py"
```

Limits how deep the search goes.

### find <dir> -path "<pattern>" -prune -o -name "<name>" -print

```bash
find <dir> -path "<pattern>" -prune -o -name "<name>" -print
```

Example:

```bash
find . -path ./node_modules -prune -o -name "*.js" -print
```

Skips a directory tree entirely.


## By size and time

### find <dir> -size +<n>

```bash
find <dir> -size +<n>
```

Example:

```bash
find / -type f -size +500M 2>/dev/null
```

Files larger than a size (k, M, G). Use - for smaller.

### find <dir> -empty

```bash
find <dir> -empty
```

Example:

```bash
find /tmp -empty
```

Empty files and directories.

### find <dir> -mtime -<n>

```bash
find <dir> -mtime -<n>
```

Example:

```bash
find /etc -mtime -1
```

Modified in the last n days.

### find <dir> -mmin -<n>

```bash
find <dir> -mmin -<n>
```

Example:

```bash
find /var/www -mmin -30
```

Modified in the last n minutes — useful when investigating a recent compromise.

### find <dir> -newer <file>

```bash
find <dir> -newer <file>
```

Example:

```bash
find / -newer /tmp/marker -type f 2>/dev/null
```

Files modified more recently than a reference file.

### find <dir> -newermt "<date>"

```bash
find <dir> -newermt "<date>"
```

Example:

```bash
find /home -newermt "2026-11-01" ! -newermt "2026-11-03"
```

Files modified between two dates.


## By owner and permission

### find / -perm -4000 -type f 2>/dev/null

```bash
find / -perm -4000 -type f 2>/dev/null
```

Lists SUID binaries. Compare against GTFOBins for privilege-escalation paths.

### find / -perm -2000 -type f 2>/dev/null

```bash
find / -perm -2000 -type f 2>/dev/null
```

Lists SGID binaries.

### find / -writable -type d 2>/dev/null

```bash
find / -writable -type d 2>/dev/null
```

Directories your current user can write to.

### find / -perm -o+w -type f ! -path "/proc/*" 2>/dev/null

```bash
find / -perm -o+w -type f ! -path "/proc/*" 2>/dev/null
```

World-writable files outside /proc.

### find <dir> -user <user>

```bash
find <dir> -user <user>
```

Example:

```bash
find / -user www-data -type f 2>/dev/null
```

Files owned by a user.

### find / -nouser -o -nogroup 2>/dev/null

```bash
find / -nouser -o -nogroup 2>/dev/null
```

Files whose owner or group no longer exists.


## Acting on results

### find <dir> -name "<pattern>" -exec <cmd> {} \;

```bash
find <dir> -name "<pattern>" -exec <cmd> {} \;
```

Example:

```bash
find . -name "*.log" -exec gzip {} \;
```

Runs a command on each result.

### find <dir> -name "<pattern>" -exec <cmd> {} +

```bash
find <dir> -name "<pattern>" -exec <cmd> {} +
```

Example:

```bash
find . -name "*.txt" -exec grep -l "secret" {} +
```

Passes many results to one command invocation — much faster.

### find <dir> -name "<pattern>" -delete

```bash
find <dir> -name "<pattern>" -delete
```

Example:

```bash
find /tmp -name "*.tmp" -mtime +7 -delete
```

Deletes matches. Run without -delete first to check what will go.

### find <dir> -type f -print0 | xargs -0 <cmd>

```bash
find <dir> -type f -print0 | xargs -0 <cmd>
```

Example:

```bash
find . -type f -print0 | xargs -0 sha256sum
```

Safely handles names with spaces or newlines.

### find <dir> -type f -printf "%T@ %p\n" | sort -n | tail

```bash
find <dir> -type f -printf "%T@ %p\n" | sort -n | tail
```

Example:

```bash
find /var/www -type f -printf "%T@ %p\n" | sort -n | tail
```

Lists the most recently modified files (GNU find).

## Related tools

- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
- [xargs](https://terminal.rokibulroni.com/tool/utilities/xargs)
- [ls](https://terminal.rokibulroni.com/tool/linux/ls)
