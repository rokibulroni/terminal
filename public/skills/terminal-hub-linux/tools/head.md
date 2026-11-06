# head

> Prints the first lines or bytes of files — quick previews of logs and data.

- Category: Linux
- Commands: 8
- Page: https://terminal.rokibulroni.com/tool/linux/head
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/head.1.html
- Tags: text, files

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### head <file>

```bash
head <file>
```

Example:

```bash
head access.log
```

Prints the first 10 lines.

### head -n <n> <file>

```bash
head -n <n> <file>
```

Example:

```bash
head -n 25 /etc/passwd
```

Prints the first n lines.

### head -n -<n> <file>

```bash
head -n -<n> <file>
```

Example:

```bash
head -n -5 report.txt
```

Prints everything except the last n lines (GNU).

### head -c <bytes> <file>

```bash
head -c <bytes> <file>
```

Example:

```bash
head -c 64 firmware.bin
```

Prints the first n bytes — useful for checking file headers.

### head -n 1 <file1> <file2>

```bash
head -n 1 <file1> <file2>
```

Example:

```bash
head -n 1 *.csv
```

Shows the first line of several files, each with a header naming the file.


## In pipelines

### <command> | head -n <n>

```bash
<command> | head -n <n>
```

Example:

```bash
ls -lt | head -n 5
```

Keeps only the first lines of output — here the five most recently modified files.

### sort -rn <file> | head

```bash
sort -rn <file> | head
```

Example:

```bash
sort -rn counts.txt | head
```

A top-ten list from numeric data.

### head -c 16 /dev/urandom | xxd

```bash
head -c 16 /dev/urandom | xxd
```

Reads 16 random bytes and shows them in hex.

## Related tools

- [tail](https://terminal.rokibulroni.com/tool/linux/tail)
- [less](https://terminal.rokibulroni.com/tool/linux/less)
