# mv

> Moves or renames files and directories.

- Category: Linux
- Commands: 10
- Page: https://terminal.rokibulroni.com/tool/linux/mv
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/mv.1.html
- Tags: files

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### mv <src> <dest>

```bash
mv <src> <dest>
```

Example:

```bash
mv draft.txt final.txt
```

Renames a file or moves it to another location.

### mv <file> <dir>/

```bash
mv <file> <dir>/
```

Example:

```bash
mv report.pdf ~/Documents/
```

Moves a file into a directory.

### mv <file1> <file2> <dir>/

```bash
mv <file1> <file2> <dir>/
```

Example:

```bash
mv *.jpg photos/
```

Moves several files.

### mv -i <src> <dest>

```bash
mv -i <src> <dest>
```

Asks before overwriting.

### mv -n <src> <dest>

```bash
mv -n <src> <dest>
```

Never overwrites.

### mv -v <src> <dest>

```bash
mv -v <src> <dest>
```

Prints what was moved.

### mv -b <src> <dest>

```bash
mv -b <src> <dest>
```

Backs up an existing destination before replacing it (GNU).

### mv -t <dir> <files>

```bash
mv -t <dir> <files>
```

Example:

```bash
mv -t archive/ *.log
```

Names the target directory first — useful with xargs.


## Renaming many files

### for f in *.<a>; do mv -- "$f" "${f%.<a>}.<b>"; done

```bash
for f in *.<a>; do mv -- "$f" "${f%.<a>}.<b>"; done
```

Example:

```bash
for f in *.jpeg; do mv -- "$f" "${f%.jpeg}.jpg"; done
```

Renames extensions in bulk using shell parameter expansion.

### rename 's/<old>/<new>/' <files>

```bash
rename 's/<old>/<new>/' <files>
```

Example:

```bash
rename 's/ /_/g' *
```

Perl rename: replaces spaces with underscores in every name.

## Related tools

- [cp](https://terminal.rokibulroni.com/tool/linux/cp)
- [rm](https://terminal.rokibulroni.com/tool/linux/rm)
