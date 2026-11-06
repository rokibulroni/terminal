# du

> Estimates how much space files and directories use — find what is filling a disk.

- Category: Linux
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/linux/du
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/du.1.html
- Tags: disk, storage

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### du -sh <dir>

```bash
du -sh <dir>
```

Example:

```bash
du -sh /var/log
```

Total size of a directory, human-readable.

### du -sh *

```bash
du -sh *
```

Size of each item in the current directory.

### du -sh .[!.]* *

```bash
du -sh .[!.]* *
```

Includes hidden files and directories.

### du -h --max-depth=1 <dir>

```bash
du -h --max-depth=1 <dir>
```

Example:

```bash
du -h --max-depth=1 /home
```

One level of subdirectories (on macOS use -d 1).

### du -ah <dir>

```bash
du -ah <dir>
```

Example:

```bash
du -ah /etc/nginx
```

Lists files as well as directories.

### du -c <files>

```bash
du -c <files>
```

Example:

```bash
du -ch *.log
```

Adds a grand total.


## Finding space hogs

### du -sh * | sort -h

```bash
du -sh * | sort -h
```

Sorted smallest to largest.

### du -ah <dir> 2>/dev/null | sort -rh | head -n 20

```bash
du -ah <dir> 2>/dev/null | sort -rh | head -n 20
```

Example:

```bash
du -ah / 2>/dev/null | sort -rh | head -n 20
```

The 20 largest files and directories.

### du -xh --max-depth=1 / 2>/dev/null | sort -h

```bash
du -xh --max-depth=1 / 2>/dev/null | sort -h
```

Stays on one file system (-x) so mounted volumes are not counted.

### du -sh --exclude=<pattern> <dir>

```bash
du -sh --exclude=<pattern> <dir>
```

Example:

```bash
du -sh --exclude=node_modules ~/projects
```

Leaves out matching paths.

### du --apparent-size -sh <file>

```bash
du --apparent-size -sh <file>
```

Example:

```bash
du --apparent-size -sh disk.img
```

Shows the logical size, which differs from disk usage for sparse files.

## Related tools

- [df](https://terminal.rokibulroni.com/tool/linux/df)
- [find](https://terminal.rokibulroni.com/tool/linux/find)
- [sort](https://terminal.rokibulroni.com/tool/linux/sort)
