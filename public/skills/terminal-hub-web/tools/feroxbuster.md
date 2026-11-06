# feroxbuster

> A fast, recursive content-discovery tool in Rust: brute-force directories and files with rich filtering, recursion and resume support.

- Category: Web
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/web/feroxbuster
- Homepage: https://github.com/epi052/feroxbuster
- Documentation: https://epi052.github.io/feroxbuster-docs/
- Tags: content discovery, brute force, directories, Rust

## Install

- apt: `sudo apt install feroxbuster`
- brew: `brew install feroxbuster`
- cargo: `cargo install feroxbuster`

## Basics

### feroxbuster -u <url>

```bash
feroxbuster -u <url>
```

Example:

```bash
feroxbuster -u https://example.com
```

Recursively brute-forces content with the default wordlist.

### feroxbuster -u <url> -w <wordlist>

```bash
feroxbuster -u <url> -w <wordlist>
```

Example:

```bash
feroxbuster -u https://example.com -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
```

Uses a specific wordlist.

### feroxbuster -u <url> -x <exts>

```bash
feroxbuster -u <url> -x <exts>
```

Example:

```bash
feroxbuster -u https://example.com -x php,html,txt
```

Appends extensions to each word.

### feroxbuster -u <url> --depth <n>

```bash
feroxbuster -u <url> --depth <n>
```

Example:

```bash
feroxbuster -u https://example.com --depth 2
```

Limits recursion depth; -n turns recursion off entirely.


## Filtering

### feroxbuster -u <url> -s <codes>

```bash
feroxbuster -u <url> -s <codes>
```

Example:

```bash
feroxbuster -u https://example.com -s 200,301,302
```

Shows only certain status codes.

### feroxbuster -u <url> -C <codes>

```bash
feroxbuster -u <url> -C <codes>
```

Example:

```bash
feroxbuster -u https://example.com -C 404,403
```

Hides certain status codes.

### feroxbuster -u <url> --filter-size <n>

```bash
feroxbuster -u <url> --filter-size <n>
```

Example:

```bash
feroxbuster -u https://example.com --filter-size 1234
```

Filters out responses of a given byte size — removes a noisy soft-404 page.

### feroxbuster -u <url> --filter-words <n>

```bash
feroxbuster -u <url> --filter-words <n>
```

Example:

```bash
feroxbuster -u https://example.com --filter-words 57
```

Filters by word count instead of size.


## Options

### feroxbuster -u <url> -H "<header>"

```bash
feroxbuster -u <url> -H "<header>"
```

Example:

```bash
feroxbuster -u https://example.com -H "Authorization: Bearer TOKEN"
```

Adds a header, for example to scan an authenticated area.

### feroxbuster -u <url> -b "<cookie>"

```bash
feroxbuster -u <url> -b "<cookie>"
```

Example:

```bash
feroxbuster -u https://example.com -b "session=abc123"
```

Sends a cookie.

### feroxbuster -u <url> -t <n>

```bash
feroxbuster -u <url> -t <n>
```

Example:

```bash
feroxbuster -u https://example.com -t 50
```

Sets the number of concurrent threads.

### feroxbuster -u <url> -o <file>

```bash
feroxbuster -u <url> -o <file>
```

Example:

```bash
feroxbuster -u https://example.com -o ferox.txt
```

Saves results.

### feroxbuster --resume-from <state>

```bash
feroxbuster --resume-from <state>
```

Example:

```bash
feroxbuster --resume-from ferox.state
```

Resumes an interrupted scan from its saved state.

## Related tools

- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
- [Gobuster](https://terminal.rokibulroni.com/tool/web/gobuster)
- [dirsearch](https://terminal.rokibulroni.com/tool/web/dirsearch)
