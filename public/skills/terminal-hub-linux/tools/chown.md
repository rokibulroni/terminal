# chown

> Changes the owner and group of files and directories.

- Category: Linux
- Commands: 10
- Page: https://terminal.rokibulroni.com/tool/linux/chown
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/chown.1.html
- Tags: permissions, ownership

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### chown <user> <file>

```bash
chown <user> <file>
```

Example:

```bash
sudo chown alice report.txt
```

Changes the owner.

### chown <user>:<group> <file>

```bash
chown <user>:<group> <file>
```

Example:

```bash
sudo chown www-data:www-data index.php
```

Changes owner and group together.

### chown :<group> <file>

```bash
chown :<group> <file>
```

Example:

```bash
sudo chown :developers app.py
```

Changes only the group (same as chgrp).

### chown <user>: <file>

```bash
chown <user>: <file>
```

Example:

```bash
sudo chown bob: notes.txt
```

Sets the owner and the owner’s login group.

### chown -R <user>:<group> <dir>

```bash
chown -R <user>:<group> <dir>
```

Example:

```bash
sudo chown -R www-data:www-data /var/www/site
```

Changes ownership recursively.

### chown -v <user> <file>

```bash
chown -v <user> <file>
```

Prints every change.

### chown -h <user> <link>

```bash
chown -h <user> <link>
```

Changes the symbolic link itself rather than its target.

### chown --reference=<ref> <file>

```bash
chown --reference=<ref> <file>
```

Example:

```bash
sudo chown --reference=/var/www /var/www/new
```

Copies ownership from another file (GNU).

### chown <uid>:<gid> <file>

```bash
chown <uid>:<gid> <file>
```

Example:

```bash
sudo chown 1001:1001 data/
```

Numeric IDs, useful in containers where names do not match.

### chgrp <group> <file>

```bash
chgrp <group> <file>
```

Example:

```bash
sudo chgrp adm /var/log/app.log
```

Changes only the group.

## Related tools

- [chmod](https://terminal.rokibulroni.com/tool/linux/chmod)
- [ls](https://terminal.rokibulroni.com/tool/linux/ls)
