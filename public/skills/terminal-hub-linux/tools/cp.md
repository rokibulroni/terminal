# cp

> Copies files and directories, preserving attributes when asked.

- Category: Linux
- Commands: 12
- Page: https://terminal.rokibulroni.com/tool/linux/cp
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/cp.1.html
- Tags: files

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### cp <src> <dest>

```bash
cp <src> <dest>
```

Example:

```bash
cp config.yml config.yml.bak
```

Copies a file. Overwrites the destination without asking.

### cp <file1> <file2> <dir>/

```bash
cp <file1> <file2> <dir>/
```

Example:

```bash
cp a.txt b.txt backup/
```

Copies several files into a directory.

### cp -r <dir> <dest>

```bash
cp -r <dir> <dest>
```

Example:

```bash
cp -r project project-copy
```

Copies a directory recursively.

### cp -i <src> <dest>

```bash
cp -i <src> <dest>
```

Asks before overwriting.

### cp -n <src> <dest>

```bash
cp -n <src> <dest>
```

Never overwrites existing files.

### cp -v <src> <dest>

```bash
cp -v <src> <dest>
```

Prints each file as it is copied.


## Preserving attributes

### cp -p <src> <dest>

```bash
cp -p <src> <dest>
```

Example:

```bash
cp -p evidence.log /cases/
```

Keeps mode, ownership and timestamps.

### cp -a <src> <dest>

```bash
cp -a <src> <dest>
```

Example:

```bash
cp -a /etc /backup/etc
```

Archive mode: recursive, preserves everything including symlinks. Best for backups.

### cp -u <src> <dest>

```bash
cp -u <src> <dest>
```

Example:

```bash
cp -u *.html /var/www/
```

Copies only when the source is newer or the destination is missing.

### cp --backup=numbered <src> <dest>

```bash
cp --backup=numbered <src> <dest>
```

Example:

```bash
cp --backup=numbered app.conf /etc/app/
```

Keeps numbered backups of anything it overwrites (GNU).


## Links

### cp -L <link> <dest>

```bash
cp -L <link> <dest>
```

Follows symbolic links and copies what they point to.

### cp -s <src> <link>

```bash
cp -s <src> <link>
```

Example:

```bash
cp -s /opt/tool/bin/tool ~/bin/tool
```

Creates a symbolic link instead of copying.

## Related tools

- [mv](https://terminal.rokibulroni.com/tool/linux/mv)
- [rm](https://terminal.rokibulroni.com/tool/linux/rm)
