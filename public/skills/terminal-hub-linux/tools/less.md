# less

> A pager for viewing large files and command output one screen at a time, with search and follow mode.

- Category: Linux
- Commands: 12
- Page: https://terminal.rokibulroni.com/tool/linux/less
- Homepage: https://www.greenwoodsoftware.com/less/
- Documentation: https://man7.org/linux/man-pages/man1/less.1.html
- Tags: pager, text

## Install

- apt: `sudo apt install less`

## Opening

### less <file>

```bash
less <file>
```

Example:

```bash
less /var/log/syslog
```

Opens a file in a scrollable pager without loading it all into memory.

### less -N <file>

```bash
less -N <file>
```

Example:

```bash
less -N app.py
```

Shows line numbers.

### less -S <file>

```bash
less -S <file>
```

Example:

```bash
less -S access.log
```

Chops long lines instead of wrapping — scroll sideways with the arrow keys.

### less +F <file>

```bash
less +F <file>
```

Example:

```bash
less +F /var/log/auth.log
```

Follows the file like tail -f. Press Ctrl-C to stop following and F to resume.

### less -R <file>

```bash
less -R <file>
```

Example:

```bash
less -R build.log
```

Displays ANSI colour codes correctly.

### <command> | less

```bash
<command> | less
```

Example:

```bash
journalctl -b | less
```

Pages through the output of any command.


## Inside less

### /<pattern>

```bash
/<pattern>
```

Example:

```bash
/error
```

Searches forward; press n for the next match and N for the previous.

### ?<pattern>

```bash
?<pattern>
```

Example:

```bash
?Failed password
```

Searches backward.

### &<pattern>

```bash
&<pattern>
```

Example:

```bash
&sshd
```

Shows only lines matching the pattern; & with no pattern clears the filter.

### g / G

```bash
g / G
```

Jumps to the start (g) or end (G) of the file.

### <n>g

```bash
<n>g
```

Example:

```bash
250g
```

Jumps to line n.

### q

```bash
q
```

Quits.

## Related tools

- [cat](https://terminal.rokibulroni.com/tool/linux/cat)
- [tail](https://terminal.rokibulroni.com/tool/linux/tail)
- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
