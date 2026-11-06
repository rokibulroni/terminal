# uniq

> Filters or counts adjacent duplicate lines — usually paired with sort.

- Category: Linux
- Commands: 9
- Page: https://terminal.rokibulroni.com/tool/linux/uniq
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/uniq.1.html
- Tags: text processing, counting

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### sort <file> | uniq

```bash
sort <file> | uniq
```

Example:

```bash
sort ips.txt | uniq
```

Removes duplicate lines. uniq only compares neighbours, so sort first.

### sort <file> | uniq -c

```bash
sort <file> | uniq -c
```

Example:

```bash
sort ips.txt | uniq -c
```

Prefixes each line with how many times it occurs.

### sort <file> | uniq -c | sort -rn

```bash
sort <file> | uniq -c | sort -rn
```

Example:

```bash
sort ips.txt | uniq -c | sort -rn | head
```

Frequency ranking — the most common lines first.

### sort <file> | uniq -d

```bash
sort <file> | uniq -d
```

Example:

```bash
sort users.txt | uniq -d
```

Prints only lines that appear more than once.

### sort <file> | uniq -u

```bash
sort <file> | uniq -u
```

Example:

```bash
sort users.txt | uniq -u
```

Prints only lines that appear exactly once.

### sort <file> | uniq -i

```bash
sort <file> | uniq -i
```

Example:

```bash
sort -f names.txt | uniq -i
```

Ignores case when comparing.


## Fields

### uniq -f <n> <file>

```bash
uniq -f <n> <file>
```

Example:

```bash
uniq -f 1 events.txt
```

Skips the first n fields when comparing — useful when lines start with timestamps.

### uniq -s <n> <file>

```bash
uniq -s <n> <file>
```

Example:

```bash
uniq -s 20 log.txt
```

Skips the first n characters when comparing.

### uniq -w <n> <file>

```bash
uniq -w <n> <file>
```

Example:

```bash
uniq -w 12 macs.txt
```

Compares only the first n characters.

## Related tools

- [sort](https://terminal.rokibulroni.com/tool/linux/sort)
- [wc](https://terminal.rokibulroni.com/tool/linux/wc)
