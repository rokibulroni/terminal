# wc

> Counts lines, words, characters and bytes in files or input.

- Category: Linux
- Commands: 10
- Page: https://terminal.rokibulroni.com/tool/linux/wc
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/wc.1.html
- Tags: counting, text

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### wc <file>

```bash
wc <file>
```

Example:

```bash
wc report.txt
```

Prints line, word and byte counts.

### wc -l <file>

```bash
wc -l <file>
```

Example:

```bash
wc -l targets.txt
```

Counts lines.

### wc -w <file>

```bash
wc -w <file>
```

Example:

```bash
wc -w essay.txt
```

Counts words.

### wc -c <file>

```bash
wc -c <file>
```

Example:

```bash
wc -c payload.bin
```

Counts bytes.

### wc -m <file>

```bash
wc -m <file>
```

Example:

```bash
wc -m unicode.txt
```

Counts characters, which differs from bytes for multi-byte text.

### wc -L <file>

```bash
wc -L <file>
```

Example:

```bash
wc -L app.log
```

Prints the length of the longest line (GNU).

### wc -l *.txt

```bash
wc -l *.txt
```

Counts several files and adds a total.


## In pipelines

### <command> | wc -l

```bash
<command> | wc -l
```

Example:

```bash
ls /etc | wc -l
```

Counts lines of output.

### grep -c "<pattern>" <file>

```bash
grep -c "<pattern>" <file>
```

Example:

```bash
grep -c "Failed password" /var/log/auth.log
```

Counting matches directly is faster than grep | wc -l.

### find <dir> -type f | wc -l

```bash
find <dir> -type f | wc -l
```

Example:

```bash
find /var/www -type f | wc -l
```

Counts files under a directory.

## Related tools

- [uniq](https://terminal.rokibulroni.com/tool/linux/uniq)
- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
