# sed

> A stream editor for filtering and transforming text: substitutions, deletions and in-place file edits.

- Category: Linux
- Commands: 16
- Page: https://terminal.rokibulroni.com/tool/linux/sed
- Homepage: https://www.gnu.org/software/sed/
- Documentation: https://www.gnu.org/software/sed/manual/sed.html
- Tags: text processing, regex

## Install

- apt: `sudo apt install sed`
- brew: `brew install gnu-sed`

## Substitution

### sed 's/<old>/<new>/' <file>

```bash
sed 's/<old>/<new>/' <file>
```

Example:

```bash
sed 's/http/https/' urls.txt
```

Replaces the first match on each line and prints the result; the file is unchanged.

### sed 's/<old>/<new>/g' <file>

```bash
sed 's/<old>/<new>/g' <file>
```

Example:

```bash
sed 's/foo/bar/g' config.txt
```

Replaces every match on each line.

### sed 's/<old>/<new>/gI' <file>

```bash
sed 's/<old>/<new>/gI' <file>
```

Example:

```bash
sed 's/error/ERROR/gI' app.log
```

Case-insensitive replacement (GNU).

### sed 's#<old>#<new>#g' <file>

```bash
sed 's#<old>#<new>#g' <file>
```

Example:

```bash
sed 's#/var/www#/srv/www#g' site.conf
```

Use a different delimiter when the pattern contains slashes.

### sed -E 's/(<regex>)/[\1]/g' <file>

```bash
sed -E 's/(<regex>)/[\1]/g' <file>
```

Example:

```bash
sed -E 's/([0-9]+)/[\1]/g' data.txt
```

Extended regex with capture groups; \1 refers to the first group.


## Editing files

### sed -i 's/<old>/<new>/g' <file>

```bash
sed -i 's/<old>/<new>/g' <file>
```

Example:

```bash
sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
```

Edits the file in place. On macOS/BSD use sed -i '' instead.

### sed -i.bak 's/<old>/<new>/g' <file>

```bash
sed -i.bak 's/<old>/<new>/g' <file>
```

Example:

```bash
sed -i.bak 's/8080/9090/' app.conf
```

Edits in place and keeps a backup with the given suffix.


## Selecting lines

### sed -n '<n>p' <file>

```bash
sed -n '<n>p' <file>
```

Example:

```bash
sed -n '42p' app.log
```

Prints only line n.

### sed -n '<a>,<b>p' <file>

```bash
sed -n '<a>,<b>p' <file>
```

Example:

```bash
sed -n '100,120p' app.log
```

Prints a range of lines.

### sed -n '/<start>/,/<end>/p' <file>

```bash
sed -n '/<start>/,/<end>/p' <file>
```

Example:

```bash
sed -n '/BEGIN CERTIFICATE/,/END CERTIFICATE/p' bundle.pem
```

Prints everything between two patterns, inclusive.

### sed '/<pattern>/d' <file>

```bash
sed '/<pattern>/d' <file>
```

Example:

```bash
sed '/^#/d' nginx.conf
```

Deletes matching lines — here, comments.

### sed '/^$/d' <file>

```bash
sed '/^$/d' <file>
```

Example:

```bash
sed '/^$/d' notes.txt
```

Deletes empty lines.

### sed '<n>d' <file>

```bash
sed '<n>d' <file>
```

Example:

```bash
sed '1d' data.csv
```

Deletes line n, such as a CSV header.


## Inserting

### sed '<n>i <text>' <file>

```bash
sed '<n>i <text>' <file>
```

Example:

```bash
sed '1i #!/bin/bash' script.sh
```

Inserts a line before line n.

### sed '/<pattern>/a <text>' <file>

```bash
sed '/<pattern>/a <text>' <file>
```

Example:

```bash
sed '/\[mysqld\]/a bind-address = 127.0.0.1' my.cnf
```

Appends a line after each match.

### sed 's/^[ \t]*//;s/[ \t]*$//' <file>

```bash
sed 's/^[ \t]*//;s/[ \t]*$//' <file>
```

Example:

```bash
sed 's/^[ \t]*//;s/[ \t]*$//' list.txt
```

Trims leading and trailing whitespace; several commands are separated by semicolons.

## Related tools

- [awk](https://terminal.rokibulroni.com/tool/linux/awk)
- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
- [cut](https://terminal.rokibulroni.com/tool/linux/cut)
