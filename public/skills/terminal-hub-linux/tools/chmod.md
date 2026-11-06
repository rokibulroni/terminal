# chmod

> Changes file permissions using symbolic or octal modes, including setuid, setgid and sticky bits.

- Category: Linux
- Commands: 17
- Page: https://terminal.rokibulroni.com/tool/linux/chmod
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/chmod.1.html
- Tags: permissions, security

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Symbolic modes

### chmod +x <file>

```bash
chmod +x <file>
```

Example:

```bash
chmod +x exploit.sh
```

Makes a file executable.

### chmod u+x <file>

```bash
chmod u+x <file>
```

Example:

```bash
chmod u+x run.sh
```

Executable for the owner only.

### chmod go-rwx <file>

```bash
chmod go-rwx <file>
```

Example:

```bash
chmod go-rwx id_rsa
```

Removes all access for group and others.

### chmod a+r <file>

```bash
chmod a+r <file>
```

Example:

```bash
chmod a+r index.html
```

Readable by everyone.

### chmod u=rw,go=r <file>

```bash
chmod u=rw,go=r <file>
```

Example:

```bash
chmod u=rw,go=r notes.txt
```

Sets exact permissions per class.


## Octal modes

### chmod 644 <file>

```bash
chmod 644 <file>
```

Example:

```bash
chmod 644 index.html
```

rw-r--r--: owner reads and writes, everyone else reads. Typical for files.

### chmod 755 <dir>

```bash
chmod 755 <dir>
```

Example:

```bash
chmod 755 /var/www/html
```

rwxr-xr-x: typical for directories and scripts.

### chmod 600 <file>

```bash
chmod 600 <file>
```

Example:

```bash
chmod 600 ~/.ssh/id_ed25519
```

rw-------: private keys must be this strict or SSH refuses them.

### chmod 700 <dir>

```bash
chmod 700 <dir>
```

Example:

```bash
chmod 700 ~/.ssh
```

Only the owner can enter or list.


## Special bits

### chmod u+s <file>

```bash
chmod u+s <file>
```

Example:

```bash
chmod u+s /usr/local/bin/tool
```

Sets SUID: the program runs with its owner’s privileges. Dangerous on root-owned binaries.

### chmod g+s <dir>

```bash
chmod g+s <dir>
```

Example:

```bash
chmod g+s /srv/shared
```

SGID on a directory: new files inherit the directory’s group.

### chmod +t <dir>

```bash
chmod +t <dir>
```

Example:

```bash
chmod +t /srv/upload
```

Sticky bit: users can delete only their own files, as in /tmp.

### chmod 4755 <file>

```bash
chmod 4755 <file>
```

Octal SUID plus 755. The leading digit is 4 for SUID, 2 for SGID and 1 for sticky.


## Recursive

### chmod -R <mode> <dir>

```bash
chmod -R <mode> <dir>
```

Example:

```bash
chmod -R go-w /var/www
```

Applies a mode to a whole tree.

### find <dir> -type d -exec chmod 755 {} +

```bash
find <dir> -type d -exec chmod 755 {} +
```

Example:

```bash
find /var/www -type d -exec chmod 755 {} +
```

Sets directories and files differently — usually what you want instead of chmod -R.

### find <dir> -type f -exec chmod 644 {} +

```bash
find <dir> -type f -exec chmod 644 {} +
```

Example:

```bash
find /var/www -type f -exec chmod 644 {} +
```

Sets every file to 644.

### chmod --reference=<ref> <file>

```bash
chmod --reference=<ref> <file>
```

Example:

```bash
chmod --reference=good.conf broken.conf
```

Copies permissions from another file (GNU).

## Related tools

- [chown](https://terminal.rokibulroni.com/tool/linux/chown)
- [ls](https://terminal.rokibulroni.com/tool/linux/ls)
- [find](https://terminal.rokibulroni.com/tool/linux/find)
