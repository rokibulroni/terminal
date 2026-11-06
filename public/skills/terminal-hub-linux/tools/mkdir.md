# mkdir

> Creates directories, including parent paths and with specific permissions.

- Category: Linux
- Commands: 8
- Page: https://terminal.rokibulroni.com/tool/linux/mkdir
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/mkdir.1.html
- Tags: directories

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Basics

### mkdir <dir>

```bash
mkdir <dir>
```

Example:

```bash
mkdir notes
```

Creates a directory.

### mkdir -p <path>

```bash
mkdir -p <path>
```

Example:

```bash
mkdir -p cases/2026/acme/evidence
```

Creates the full path, including missing parents; no error if it exists.

### mkdir <a> <b> <c>

```bash
mkdir <a> <b> <c>
```

Example:

```bash
mkdir logs scans loot
```

Creates several directories at once.

### mkdir -p <dir>/{<a>,<b>,<c>}

```bash
mkdir -p <dir>/{<a>,<b>,<c>}
```

Example:

```bash
mkdir -p engagement/{recon,exploit,loot,report}
```

Brace expansion builds a whole project layout in one go.

### mkdir -m <mode> <dir>

```bash
mkdir -m <mode> <dir>
```

Example:

```bash
mkdir -m 700 private
```

Sets permissions at creation — 700 means only the owner can enter.

### mkdir -v <dir>

```bash
mkdir -v <dir>
```

Prints each directory created.

### mkdir -p <dir> && cd <dir>

```bash
mkdir -p <dir> && cd <dir>
```

Example:

```bash
mkdir -p work && cd work
```

Creates a directory and enters it.

### mktemp -d

```bash
mktemp -d
```

Creates a uniquely named temporary directory and prints its path — safer than a fixed name in /tmp.

## Related tools

- [cd](https://terminal.rokibulroni.com/tool/linux/cd)
- [chmod](https://terminal.rokibulroni.com/tool/linux/chmod)
