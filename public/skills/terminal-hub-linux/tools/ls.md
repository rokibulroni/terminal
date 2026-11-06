# ls

> Lists directory contents with sizes, permissions, owners, timestamps and hidden files.

- Category: Linux
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/linux/ls
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/ls.1.html
- Tags: files, directories

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### ls

```bash
ls
```

Lists the visible files and folders in the current directory.

### ls <path>

```bash
ls <path>
```

Example:

```bash
ls /etc
```

Lists the contents of another directory without changing into it.

### ls -la

```bash
ls -la
```

Example:

```bash
ls -la /home/alice
```

Long listing of everything, including hidden dot-files: permissions, link count, owner, group, size and modification time.

### ls -lh

```bash
ls -lh
```

Example:

```bash
ls -lh /var/log
```

Long listing with human-readable sizes (K, M, G) instead of bytes.

### ls -1

```bash
ls -1
```

Prints one name per line — handy when piping into other commands.

### ls -d */

```bash
ls -d */
```

Lists only the directories in the current folder.


## Sorting

### ls -lt

```bash
ls -lt
```

Sorts by modification time, newest first. Add -r to reverse.

### ls -ltr /tmp

```bash
ls -ltr /tmp
```

Oldest first — the most recently changed files end up at the bottom, next to your prompt.

### ls -lS

```bash
ls -lS
```

Sorts by file size, largest first.

### ls -lX

```bash
ls -lX
```

Groups files by extension (GNU ls).


## Details

### ls -i

```bash
ls -i
```

Shows inode numbers — useful for spotting hard links and deleting files with awkward names.

### ls -ln

```bash
ls -ln
```

Shows numeric UIDs and GIDs instead of names — reveals files owned by deleted users.

### ls -l --time-style=full-iso

```bash
ls -l --time-style=full-iso
```

Shows full timestamps with seconds and timezone, useful when building a forensic timeline.

### ls -lu

```bash
ls -lu
```

Shows (and with -t, sorts by) last access time instead of modification time.

### ls -lR <path>

```bash
ls -lR <path>
```

Example:

```bash
ls -lR /opt/app
```

Lists a directory tree recursively.

### ls -la --color=auto

```bash
ls -la --color=auto
```

Colours files by type; most distributions alias ls to this already.


## Security checks

### ls -la /root

```bash
ls -la /root
```

Checks whether the root home directory is readable by your user — it should not be.

### ls -l /etc/passwd /etc/shadow

```bash
ls -l /etc/passwd /etc/shadow
```

Verifies permissions on the account files: passwd should be 644, shadow 640 or stricter. A world-readable shadow is a serious finding.

### ls -la /etc/cron*

```bash
ls -la /etc/cron*
```

Lists cron directories and files to find scheduled jobs and check who can modify them.

## Related tools

- [cd](https://terminal.rokibulroni.com/tool/linux/cd)
- [find](https://terminal.rokibulroni.com/tool/linux/find)
- [chmod](https://terminal.rokibulroni.com/tool/linux/chmod)
