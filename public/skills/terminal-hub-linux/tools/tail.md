# tail

> Prints the last lines of files and follows them as they grow — the standard way to watch logs.

- Category: Linux
- Commands: 9
- Page: https://terminal.rokibulroni.com/tool/linux/tail
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/tail.1.html
- Tags: logs, text

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### tail <file>

```bash
tail <file>
```

Example:

```bash
tail /var/log/syslog
```

Prints the last 10 lines.

### tail -n <n> <file>

```bash
tail -n <n> <file>
```

Example:

```bash
tail -n 50 error.log
```

Prints the last n lines.

### tail -n +<n> <file>

```bash
tail -n +<n> <file>
```

Example:

```bash
tail -n +2 data.csv
```

Prints from line n onward — here, everything after a CSV header.

### tail -c <bytes> <file>

```bash
tail -c <bytes> <file>
```

Example:

```bash
tail -c 200 output.bin
```

Prints the last n bytes.


## Following logs

### tail -f <file>

```bash
tail -f <file>
```

Example:

```bash
tail -f /var/log/nginx/access.log
```

Follows a file as new lines are written. Ctrl-C to stop.

### tail -F <file>

```bash
tail -F <file>
```

Example:

```bash
tail -F /var/log/auth.log
```

Follows by name and reopens the file when it is rotated — use this for long-running watches.

### tail -f <file1> <file2>

```bash
tail -f <file1> <file2>
```

Example:

```bash
tail -f access.log error.log
```

Follows several files at once with headers.

### tail -f <file> | grep --line-buffered <pattern>

```bash
tail -f <file> | grep --line-buffered <pattern>
```

Example:

```bash
tail -f /var/log/auth.log | grep --line-buffered "Failed password"
```

Watches only for matching lines, such as failed SSH logins, as they happen.

### tail -f --pid=<pid> <file>

```bash
tail -f --pid=<pid> <file>
```

Example:

```bash
tail -f --pid=4120 build.log
```

Stops following when the given process exits.

## Related tools

- [head](https://terminal.rokibulroni.com/tool/linux/head)
- [less](https://terminal.rokibulroni.com/tool/linux/less)
- [journalctl](https://terminal.rokibulroni.com/tool/linux/journalctl)
