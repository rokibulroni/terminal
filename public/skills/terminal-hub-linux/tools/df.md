# df

> Reports free and used disk space on mounted file systems.

- Category: Linux
- Commands: 8
- Page: https://terminal.rokibulroni.com/tool/linux/df
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/df.1.html
- Tags: disk, storage

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### df -h

```bash
df -h
```

Shows disk space for every mounted file system in human-readable units.

### df -h <path>

```bash
df -h <path>
```

Example:

```bash
df -h /var
```

Shows the file system that holds a path.

### df -hT

```bash
df -hT
```

Adds the file-system type column (ext4, xfs, tmpfs…).

### df -i

```bash
df -i
```

Shows inode usage. A disk can be “full” with free space if inodes run out.

### df -x tmpfs -x devtmpfs -h

```bash
df -x tmpfs -x devtmpfs -h
```

Hides virtual file systems so only real disks remain.

### df -t <type> -h

```bash
df -t <type> -h
```

Example:

```bash
df -t ext4 -h
```

Shows only one file-system type.

### df --output=source,pcent,target

```bash
df --output=source,pcent,target
```

Chooses which columns to print (GNU).

### df -h | awk '$5+0 > 80'

```bash
df -h | awk '$5+0 > 80'
```

Lists file systems more than 80% full.

## Related tools

- [du](https://terminal.rokibulroni.com/tool/linux/du)
- [free](https://terminal.rokibulroni.com/tool/linux/free)
