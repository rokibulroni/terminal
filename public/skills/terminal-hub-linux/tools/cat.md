# cat

> Concatenates files and prints them to standard output — view, combine and create files.

- Category: Linux
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/linux/cat
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/cat.1.html
- Tags: files, text

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Viewing

### cat <file>

```bash
cat <file>
```

Example:

```bash
cat /etc/os-release
```

Prints a file to the terminal. /etc/os-release is a quick way to identify the distribution.

### cat -n <file>

```bash
cat -n <file>
```

Example:

```bash
cat -n script.sh
```

Numbers every output line.

### cat -b <file>

```bash
cat -b <file>
```

Example:

```bash
cat -b config.ini
```

Numbers only non-blank lines.

### cat -A <file>

```bash
cat -A <file>
```

Example:

```bash
cat -A data.csv
```

Reveals hidden characters: tabs as ^I, line ends as $ — great for spotting Windows line endings (^M$).

### cat -s <file>

```bash
cat -s <file>
```

Example:

```bash
cat -s notes.txt
```

Squeezes repeated blank lines into one.


## Combining and creating

### cat <file1> <file2> > <out>

```bash
cat <file1> <file2> > <out>
```

Example:

```bash
cat part1.txt part2.txt > full.txt
```

Concatenates files into a new file.

### cat <file> >> <out>

```bash
cat <file> >> <out>
```

Example:

```bash
cat new-hosts.txt >> targets.txt
```

Appends a file to the end of another.

### cat > <file> << 'EOF'

```bash
cat > <file> << 'EOF'
```

Example:

```bash
cat > hello.sh << 'EOF'
#!/bin/sh
echo hello
EOF
```

Writes multiple lines into a file using a here-document; quoting EOF stops variable expansion.

### cat -

```bash
cat -
```

Reads from standard input until Ctrl-D — a quick way to paste text.


## Recon

### cat /etc/passwd

```bash
cat /etc/passwd
```

Lists local accounts, their UID/GID, home directory and login shell.

### cat /proc/version

```bash
cat /proc/version
```

Shows the kernel version and the compiler used to build it.

### cat /etc/hosts

```bash
cat /etc/hosts
```

Shows static hostname mappings, which can reveal internal hosts.

### cat ~/.bash_history

```bash
cat ~/.bash_history
```

Reads the shell history — often contains typed passwords, hostnames and paths.

## Related tools

- [less](https://terminal.rokibulroni.com/tool/linux/less)
- [head](https://terminal.rokibulroni.com/tool/linux/head)
- [tail](https://terminal.rokibulroni.com/tool/linux/tail)
