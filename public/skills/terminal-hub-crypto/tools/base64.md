# base64

> Encodes and decodes Base64, the standard way to carry binary data over text channels — common in tokens, config files and shell file-transfer tricks.

- Category: Crypto & Encoding
- Commands: 10
- Page: https://terminal.rokibulroni.com/tool/crypto/base64
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/base64.1.html
- Tags: encoding, base64, data transfer

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Encoding

### echo -n "<text>" | base64

```bash
echo -n "<text>" | base64
```

Example:

```bash
echo -n "admin:password" | base64
```

Encodes text to Base64. -n stops echo adding a newline that would change the output.

### base64 <file>

```bash
base64 <file>
```

Example:

```bash
base64 payload.bin
```

Encodes a file, for example to paste a binary over a text-only channel.

### base64 -w 0 <file>

```bash
base64 -w 0 <file>
```

Example:

```bash
base64 -w 0 shell.elf
```

Encodes with no line wrapping — needed when the receiver expects a single line (GNU).


## Decoding

### echo "<b64>" | base64 -d

```bash
echo "<b64>" | base64 -d
```

Example:

```bash
echo "YWRtaW46cGFzcw==" | base64 -d
```

Decodes Base64 back to text. On macOS use -D.

### base64 -d <file> > <out>

```bash
base64 -d <file> > <out>
```

Example:

```bash
base64 -d encoded.txt > decoded.bin
```

Decodes a file.

### echo "<b64>" | base64 -d | xxd | head

```bash
echo "<b64>" | base64 -d | xxd | head
```

Example:

```bash
echo "f0VMRgIBAQ..." | base64 -d | xxd | head
```

Decodes and inspects bytes — ELF starts with 7f 45 4c 46, PNG with 89 50 4e 47.


## Transfer trick

### base64 -w 0 <file>; # then on target: echo <b64> | base64 -d > <file>

```bash
base64 -w 0 <file>; # then on target: echo <b64> | base64 -d > <file>
```

Example:

```bash
base64 -w 0 linpeas.sh
```

Moves a file to a host with only a shell: encode here, paste and decode there.


## Related encodings

### echo "<text>" | base32

```bash
echo "<text>" | base32
```

Example:

```bash
echo "secret" | base32
```

Base32 for case-insensitive or DNS-friendly channels; -d decodes.

### echo -n "<text>" | xxd -p

```bash
echo -n "<text>" | xxd -p
```

Example:

```bash
echo -n "ABC" | xxd -p
```

Hex encoding; xxd -p -r reverses it.

### printf "%s" "<text>" | od -An -tx1

```bash
printf "%s" "<text>" | od -An -tx1
```

Example:

```bash
printf "%s" "hi" | od -An -tx1
```

Shows raw byte values in hex.

## Related tools

- [OpenSSL](https://terminal.rokibulroni.com/tool/crypto/openssl)
- [GnuPG](https://terminal.rokibulroni.com/tool/crypto/gpg)
- [jq](https://terminal.rokibulroni.com/tool/utilities/jq)
