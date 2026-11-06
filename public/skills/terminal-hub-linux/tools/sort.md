# sort

> Sorts lines of text alphabetically, numerically, by field or by human-readable size.

- Category: Linux
- Commands: 14
- Page: https://terminal.rokibulroni.com/tool/linux/sort
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/sort.1.html
- Tags: text processing

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### sort <file>

```bash
sort <file>
```

Example:

```bash
sort names.txt
```

Sorts lines alphabetically.

### sort -r <file>

```bash
sort -r <file>
```

Example:

```bash
sort -r names.txt
```

Reverse order.

### sort -n <file>

```bash
sort -n <file>
```

Example:

```bash
sort -n numbers.txt
```

Numeric sort, so 10 comes after 9.

### sort -h <file>

```bash
sort -h <file>
```

Example:

```bash
du -sh * | sort -h
```

Sorts human-readable sizes like 4K, 2M and 1G correctly.

### sort -u <file>

```bash
sort -u <file>
```

Example:

```bash
sort -u ips.txt
```

Sorts and removes duplicates in one step.

### sort -f <file>

```bash
sort -f <file>
```

Example:

```bash
sort -f words.txt
```

Ignores case.


## Keys and fields

### sort -t<sep> -k<n> <file>

```bash
sort -t<sep> -k<n> <file>
```

Example:

```bash
sort -t: -k3 -n /etc/passwd
```

Sorts by field n using a delimiter — here, by UID.

### sort -k<n>,<n>nr <file>

```bash
sort -k<n>,<n>nr <file>
```

Example:

```bash
sort -k2,2nr scores.txt
```

Sorts by one field numerically in reverse; limiting the key to n,n stops it spilling into later fields.

### sort -V <file>

```bash
sort -V <file>
```

Example:

```bash
sort -V versions.txt
```

Version sort: 1.2 < 1.10.

### sort -t. -k1,1n -k2,2n -k3,3n -k4,4n <file>

```bash
sort -t. -k1,1n -k2,2n -k3,3n -k4,4n <file>
```

Example:

```bash
sort -t. -k1,1n -k2,2n -k3,3n -k4,4n ips.txt
```

Sorts IPv4 addresses numerically, octet by octet.


## Large data

### sort -o <file> <file>

```bash
sort -o <file> <file>
```

Example:

```bash
sort -o list.txt list.txt
```

Writes the result back to the same file safely (unlike > list.txt).

### sort -R <file>

```bash
sort -R <file>
```

Example:

```bash
sort -R wordlist.txt
```

Shuffles lines randomly.

### sort --parallel=<n> -S <size> <file>

```bash
sort --parallel=<n> -S <size> <file>
```

Example:

```bash
sort --parallel=4 -S 2G huge.txt
```

Uses more threads and memory for very large files.

### sort -c <file>

```bash
sort -c <file>
```

Example:

```bash
sort -c ids.txt
```

Checks whether a file is already sorted.

## Related tools

- [uniq](https://terminal.rokibulroni.com/tool/linux/uniq)
- [cut](https://terminal.rokibulroni.com/tool/linux/cut)
