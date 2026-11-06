# grep

> Searches text for lines matching a pattern, with regular expressions, recursion and context.

- Category: Linux
- Commands: 21
- Page: https://terminal.rokibulroni.com/tool/linux/grep
- Homepage: https://www.gnu.org/software/grep/
- Documentation: https://man7.org/linux/man-pages/man1/grep.1.html
- Tags: search, regex, text

## Install

- apt: `sudo apt install grep`
- brew: `brew install grep`

## Basics

### grep "<pattern>" <file>

```bash
grep "<pattern>" <file>
```

Example:

```bash
grep "ERROR" app.log
```

Prints every line containing the pattern.

### grep -i "<pattern>" <file>

```bash
grep -i "<pattern>" <file>
```

Example:

```bash
grep -i "error" app.log
```

Case-insensitive match.

### grep -v "<pattern>" <file>

```bash
grep -v "<pattern>" <file>
```

Example:

```bash
grep -v "DEBUG" app.log
```

Inverts the match: prints lines that do not contain the pattern.

### grep -n "<pattern>" <file>

```bash
grep -n "<pattern>" <file>
```

Example:

```bash
grep -n "TODO" main.c
```

Prefixes each match with its line number.

### grep -c "<pattern>" <file>

```bash
grep -c "<pattern>" <file>
```

Example:

```bash
grep -c "Failed password" /var/log/auth.log
```

Counts matching lines instead of printing them.

### grep -w "<word>" <file>

```bash
grep -w "<word>" <file>
```

Example:

```bash
grep -w "root" /etc/passwd
```

Matches whole words only, so “root” does not match “chroot”.

### grep -x "<line>" <file>

```bash
grep -x "<line>" <file>
```

Example:

```bash
grep -x "PermitRootLogin yes" /etc/ssh/sshd_config
```

Matches only if the entire line is the pattern.


## Searching trees

### grep -r "<pattern>" <dir>

```bash
grep -r "<pattern>" <dir>
```

Example:

```bash
grep -r "password" /etc
```

Searches every file under a directory recursively.

### grep -rl "<pattern>" <dir>

```bash
grep -rl "<pattern>" <dir>
```

Example:

```bash
grep -rl "api_key" ~/projects
```

Lists only the names of files that match.

### grep -rn --include="<glob>" "<pattern>" <dir>

```bash
grep -rn --include="<glob>" "<pattern>" <dir>
```

Example:

```bash
grep -rn --include="*.php" "eval(" /var/www
```

Restricts the search to certain file types.

### grep -r --exclude-dir=<dir> "<pattern>" .

```bash
grep -r --exclude-dir=<dir> "<pattern>" .
```

Example:

```bash
grep -r --exclude-dir=node_modules "TODO" .
```

Skips directories you do not care about.

### grep -rIl "<pattern>" <dir>

```bash
grep -rIl "<pattern>" <dir>
```

Example:

```bash
grep -rIl "BEGIN RSA PRIVATE KEY" / 2>/dev/null
```

Skips binary files (-I) — here hunting for private keys left on disk.


## Patterns

### grep -E "<a>|<b>" <file>

```bash
grep -E "<a>|<b>" <file>
```

Example:

```bash
grep -E "error|fail|denied" syslog
```

Extended regular expressions: alternation, +, ? and {n} without backslashes.

### grep -o "<regex>" <file>

```bash
grep -o "<regex>" <file>
```

Example:

```bash
grep -oE "[0-9]{1,3}(\.[0-9]{1,3}){3}" access.log
```

Prints only the matched part of each line — here, every IPv4 address.

### grep -F "<string>" <file>

```bash
grep -F "<string>" <file>
```

Example:

```bash
grep -F "a.b*c" notes.txt
```

Treats the pattern as a fixed string, not a regex — faster and no escaping.

### grep -P "<regex>" <file>

```bash
grep -P "<regex>" <file>
```

Example:

```bash
grep -P "\d{4}-\d{2}-\d{2}" app.log
```

Perl-compatible regex with \d, lookarounds and lazy quantifiers (GNU grep).

### grep -f <patterns> <file>

```bash
grep -f <patterns> <file>
```

Example:

```bash
grep -f iocs.txt proxy.log
```

Reads many patterns from a file, one per line — handy for IOC matching.


## Context

### grep -A <n> "<pattern>" <file>

```bash
grep -A <n> "<pattern>" <file>
```

Example:

```bash
grep -A 3 "Exception" app.log
```

Shows n lines after each match.

### grep -B <n> "<pattern>" <file>

```bash
grep -B <n> "<pattern>" <file>
```

Example:

```bash
grep -B 2 "segfault" kern.log
```

Shows n lines before each match.

### grep -C <n> "<pattern>" <file>

```bash
grep -C <n> "<pattern>" <file>
```

Example:

```bash
grep -C 5 "Accepted password" auth.log
```

Shows n lines either side.

### <command> | grep "<pattern>"

```bash
<command> | grep "<pattern>"
```

Example:

```bash
ps aux | grep sshd
```

Filters the output of another command.

## Related tools

- [sed](https://terminal.rokibulroni.com/tool/linux/sed)
- [awk](https://terminal.rokibulroni.com/tool/linux/awk)
- [find](https://terminal.rokibulroni.com/tool/linux/find)
