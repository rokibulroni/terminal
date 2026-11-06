# cut

> Extracts columns, fields or characters from each line of input.

- Category: Linux
- Commands: 9
- Page: https://terminal.rokibulroni.com/tool/linux/cut
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/cut.1.html
- Tags: text processing, columns

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Fields

### cut -d'<sep>' -f<n> <file>

```bash
cut -d'<sep>' -f<n> <file>
```

Example:

```bash
cut -d: -f1 /etc/passwd
```

Prints field n using a delimiter — here, every user name.

### cut -d'<sep>' -f<a>,<b> <file>

```bash
cut -d'<sep>' -f<a>,<b> <file>
```

Example:

```bash
cut -d: -f1,6 /etc/passwd
```

Prints several fields; the delimiter is kept between them.

### cut -d'<sep>' -f<a>- <file>

```bash
cut -d'<sep>' -f<a>- <file>
```

Example:

```bash
cut -d, -f3- data.csv
```

Prints field n and everything after it.

### cut -d'<sep>' -f<n> --output-delimiter='<s>' <file>

```bash
cut -d'<sep>' -f<n> --output-delimiter='<s>' <file>
```

Example:

```bash
cut -d: -f1,7 --output-delimiter=' -> ' /etc/passwd
```

Changes the delimiter used in the output (GNU).

### cut -d'<sep>' -s -f<n> <file>

```bash
cut -d'<sep>' -s -f<n> <file>
```

Example:

```bash
cut -d= -s -f2 settings.conf
```

Skips lines that do not contain the delimiter.


## Characters and bytes

### cut -c<a>-<b> <file>

```bash
cut -c<a>-<b> <file>
```

Example:

```bash
cut -c1-8 hashes.txt
```

Prints characters a through b of each line.

### cut -b<n> <file>

```bash
cut -b<n> <file>
```

Example:

```bash
cut -b1-4 data.bin
```

Selects bytes instead of characters.


## In pipelines

### <command> | cut -d' ' -f<n>

```bash
<command> | cut -d' ' -f<n>
```

Example:

```bash
who | cut -d' ' -f1 | sort -u
```

Extracts a column from command output — here, logged-in users.

### cut -d' ' -f1 <log> | sort | uniq -c | sort -rn

```bash
cut -d' ' -f1 <log> | sort | uniq -c | sort -rn
```

Example:

```bash
cut -d' ' -f1 access.log | sort | uniq -c | sort -rn | head
```

The classic top-talkers pipeline for web logs.

## Related tools

- [awk](https://terminal.rokibulroni.com/tool/linux/awk)
- [sort](https://terminal.rokibulroni.com/tool/linux/sort)
