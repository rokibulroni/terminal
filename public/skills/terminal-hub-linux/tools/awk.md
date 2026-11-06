# awk

> A pattern-scanning language for column-based text: extract fields, compute totals and reformat output.

- Category: Linux
- Commands: 15
- Page: https://terminal.rokibulroni.com/tool/linux/awk
- Homepage: https://www.gnu.org/software/gawk/
- Documentation: https://www.gnu.org/software/gawk/manual/gawk.html
- Tags: text processing, columns

## Install

- apt: `sudo apt install gawk`
- brew: `brew install gawk`

## Fields

### awk '{print $1}' <file>

```bash
awk '{print $1}' <file>
```

Example:

```bash
awk '{print $1}' access.log
```

Prints the first whitespace-separated field of each line — the client IP in a web log.

### awk '{print $1, $NF}' <file>

```bash
awk '{print $1, $NF}' <file>
```

Example:

```bash
awk '{print $1, $NF}' data.txt
```

Prints the first and last field; NF is the number of fields.

### awk -F'<sep>' '{print $<n>}' <file>

```bash
awk -F'<sep>' '{print $<n>}' <file>
```

Example:

```bash
awk -F: '{print $1, $7}' /etc/passwd
```

Sets a custom field separator — here, user names and login shells.

### awk -F, 'NR>1 {print $2}' <file>

```bash
awk -F, 'NR>1 {print $2}' <file>
```

Example:

```bash
awk -F, 'NR>1 {print $2}' users.csv
```

Skips the header row (NR is the line number).


## Filtering

### awk '/<pattern>/' <file>

```bash
awk '/<pattern>/' <file>
```

Example:

```bash
awk '/Failed password/' /var/log/auth.log
```

Prints lines matching a regex, like grep.

### awk '$<n> <op> <value>' <file>

```bash
awk '$<n> <op> <value>' <file>
```

Example:

```bash
awk '$9 == 404' access.log
```

Filters on a field value — here, requests that returned 404.

### awk -F: '$3 == 0' /etc/passwd

```bash
awk -F: '$3 == 0' /etc/passwd
```

Finds every account with UID 0. Anything other than root is a red flag.

### awk -F: '$7 !~ /nologin|false/' /etc/passwd

```bash
awk -F: '$7 !~ /nologin|false/' /etc/passwd
```

Lists accounts that have a real login shell.

### awk 'length > <n>' <file>

```bash
awk 'length > <n>' <file>
```

Example:

```bash
awk 'length > 200' app.log
```

Prints lines longer than n characters.


## Counting and summing

### awk '{sum += $<n>} END {print sum}' <file>

```bash
awk '{sum += $<n>} END {print sum}' <file>
```

Example:

```bash
awk '{sum += $10} END {print sum}' access.log
```

Sums a column — here, total bytes sent.

### awk '{c[$1]++} END {for (k in c) print c[k], k}' <file> | sort -rn

```bash
awk '{c[$1]++} END {for (k in c) print c[k], k}' <file> | sort -rn
```

Example:

```bash
awk '{c[$1]++} END {for (k in c) print c[k], k}' access.log | sort -rn | head
```

Counts occurrences of each value — the top requesting IPs.

### awk 'END {print NR}' <file>

```bash
awk 'END {print NR}' <file>
```

Example:

```bash
awk 'END {print NR}' targets.txt
```

Counts lines, like wc -l.

### awk '!seen[$0]++' <file>

```bash
awk '!seen[$0]++' <file>
```

Example:

```bash
awk '!seen[$0]++' urls.txt
```

Removes duplicate lines while keeping the original order.


## Formatting

### awk '{printf "%-20s %s\n", $1, $2}' <file>

```bash
awk '{printf "%-20s %s\n", $1, $2}' <file>
```

Example:

```bash
awk '{printf "%-20s %s\n", $1, $2}' hosts.txt
```

Formats output in aligned columns with printf.

### awk 'BEGIN {OFS=","} {$1=$1; print}' <file>

```bash
awk 'BEGIN {OFS=","} {$1=$1; print}' <file>
```

Example:

```bash
awk 'BEGIN {OFS=","} {$1=$1; print}' table.txt
```

Converts whitespace-separated columns to CSV.

## Related tools

- [sed](https://terminal.rokibulroni.com/tool/linux/sed)
- [cut](https://terminal.rokibulroni.com/tool/linux/cut)
- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
