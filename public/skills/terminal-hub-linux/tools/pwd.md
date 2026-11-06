# pwd

> Prints the full path of the current working directory, optionally resolving symbolic links.

- Category: Linux
- Commands: 6
- Page: https://terminal.rokibulroni.com/tool/linux/pwd
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/pwd.1.html
- Tags: navigation

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### pwd

```bash
pwd
```

Prints the absolute path of the current working directory.

### pwd -P

```bash
pwd -P
```

Prints the physical path with all symbolic links resolved.

### pwd -L

```bash
pwd -L
```

Prints the logical path, keeping symbolic links as you navigated them (the default).

### echo "$PWD"

```bash
echo "$PWD"
```

The same information from the PWD environment variable, useful in scripts.

### echo "$OLDPWD"

```bash
echo "$OLDPWD"
```

Shows the previous directory, which `cd -` returns to.

### readlink -f .

```bash
readlink -f .
```

Another way to print the fully resolved path of the current directory.

## Related tools

- [cd](https://terminal.rokibulroni.com/tool/linux/cd)
- [ls](https://terminal.rokibulroni.com/tool/linux/ls)
