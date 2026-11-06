# rm

> Removes files and directories. There is no recycle bin — deletion is immediate.

- Category: Linux
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/linux/rm
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/rm.1.html
- Tags: files, deletion

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Files

### rm <file>

```bash
rm <file>
```

Example:

```bash
rm old.log
```

Deletes a file. There is no undo.

### rm -i <file>

```bash
rm -i <file>
```

Asks for confirmation for each file.

### rm -I <files>

```bash
rm -I <files>
```

Example:

```bash
rm -I *.tmp
```

Asks once before deleting more than three files.

### rm -f <file>

```bash
rm -f <file>
```

Forces deletion without prompts and ignores missing files.

### rm -- <file>

```bash
rm -- <file>
```

Example:

```bash
rm -- -weird-name
```

Use -- to delete a file whose name starts with a dash.

### rm -v <files>

```bash
rm -v <files>
```

Prints each file as it is removed.


## Directories

### rmdir <dir>

```bash
rmdir <dir>
```

Example:

```bash
rmdir empty-folder
```

Removes an empty directory only — a safe choice.

### rm -r <dir>

```bash
rm -r <dir>
```

Example:

```bash
rm -r build/
```

Removes a directory and everything inside it.

### rm -rf <dir>

```bash
rm -rf <dir>
```

Example:

```bash
rm -rf node_modules
```

Recursive and forced. Double-check the path; never run it with an unquoted variable that might be empty.

### find <dir> -name "<pattern>" -delete

```bash
find <dir> -name "<pattern>" -delete
```

Example:

```bash
find . -name ".DS_Store" -delete
```

Deletes matching files anywhere in a tree.


## Secure deletion

### shred -u -n <passes> <file>

```bash
shred -u -n <passes> <file>
```

Example:

```bash
shred -u -n 3 secrets.txt
```

Overwrites a file before deleting it. Not reliable on SSDs, copy-on-write or journaled file systems.

## Related tools

- [mv](https://terminal.rokibulroni.com/tool/linux/mv)
- [find](https://terminal.rokibulroni.com/tool/linux/find)
