# OpenSSL

> The ubiquitous toolkit for TLS and general cryptography: inspect certificates, generate keys and CSRs, convert formats, hash, encrypt and create random secrets.

- Category: Crypto & Encoding
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/crypto/openssl
- Homepage: https://www.openssl.org
- Documentation: https://docs.openssl.org/master/man1/
- Tags: TLS, certificates, cryptography, encoding

## Install

- apt: `sudo apt install openssl`
- brew: `brew install openssl`

## Inspecting certificates

### openssl s_client -connect <host>:<port>

```bash
openssl s_client -connect <host>:<port>
```

Example:

```bash
openssl s_client -connect example.com:443
```

Opens a TLS connection and prints the certificate chain and negotiated parameters.

### openssl s_client -connect <host>:443 -servername <host> </dev/null 2>/dev/null | openssl x509 -noout -text

```bash
openssl s_client -connect <host>:443 -servername <host> </dev/null 2>/dev/null | openssl x509 -noout -text
```

Example:

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -text
```

Fetches and fully decodes a server certificate, SNI included.

### openssl x509 -in <file> -noout -text

```bash
openssl x509 -in <file> -noout -text
```

Example:

```bash
openssl x509 -in cert.pem -noout -text
```

Decodes a certificate file to human-readable form.

### openssl x509 -in <file> -noout -dates

```bash
openssl x509 -in <file> -noout -dates
```

Example:

```bash
openssl x509 -in cert.pem -noout -dates
```

Just the validity dates — handy for expiry checks.

### openssl x509 -in <file> -noout -fingerprint -sha256

```bash
openssl x509 -in <file> -noout -fingerprint -sha256
```

The SHA-256 fingerprint of a certificate.


## Keys and CSRs

### openssl genrsa -out <file> <bits>

```bash
openssl genrsa -out <file> <bits>
```

Example:

```bash
openssl genrsa -out key.pem 4096
```

Generates an RSA private key.

### openssl ecparam -genkey -name prime256v1 -out <file>

```bash
openssl ecparam -genkey -name prime256v1 -out <file>
```

Example:

```bash
openssl ecparam -genkey -name prime256v1 -out ec-key.pem
```

Generates an elliptic-curve private key.

### openssl req -new -key <key> -out <csr>

```bash
openssl req -new -key <key> -out <csr>
```

Example:

```bash
openssl req -new -key key.pem -out req.csr
```

Creates a certificate signing request.

### openssl req -x509 -newkey rsa:4096 -keyout <key> -out <cert> -days <n> -nodes

```bash
openssl req -x509 -newkey rsa:4096 -keyout <key> -out <cert> -days <n> -nodes
```

Example:

```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
```

Creates a self-signed certificate and key in one step.

### openssl rsa -in <key> -noout -check

```bash
openssl rsa -in <key> -noout -check
```

Example:

```bash
openssl rsa -in key.pem -noout -check
```

Validates an RSA private key.


## Converting formats

### openssl pkcs12 -export -out <p12> -inkey <key> -in <cert>

```bash
openssl pkcs12 -export -out <p12> -inkey <key> -in <cert>
```

Example:

```bash
openssl pkcs12 -export -out bundle.p12 -inkey key.pem -in cert.pem
```

Bundles a key and certificate into a PKCS#12 file.

### openssl pkcs12 -in <p12> -nodes -out <pem>

```bash
openssl pkcs12 -in <p12> -nodes -out <pem>
```

Example:

```bash
openssl pkcs12 -in bundle.p12 -nodes -out all.pem
```

Extracts a key and certificate from a .p12.

### openssl x509 -in <der> -inform der -out <pem> -outform pem

```bash
openssl x509 -in <der> -inform der -out <pem> -outform pem
```

Example:

```bash
openssl x509 -in cert.der -inform der -out cert.pem -outform pem
```

Converts DER to PEM.


## Hashing, encoding and crypto

### openssl dgst -sha256 <file>

```bash
openssl dgst -sha256 <file>
```

Example:

```bash
openssl dgst -sha256 payload.bin
```

SHA-256 digest of a file.

### openssl rand -base64 <n>

```bash
openssl rand -base64 <n>
```

Example:

```bash
openssl rand -base64 24
```

Generates cryptographically random bytes — a quick password or token.

### openssl rand -hex <n>

```bash
openssl rand -hex <n>
```

Example:

```bash
openssl rand -hex 16
```

Random bytes as hex.

### openssl enc -aes-256-cbc -salt -pbkdf2 -in <in> -out <out>

```bash
openssl enc -aes-256-cbc -salt -pbkdf2 -in <in> -out <out>
```

Example:

```bash
openssl enc -aes-256-cbc -salt -pbkdf2 -in secret.txt -out secret.enc
```

Encrypts a file with AES; add -d to decrypt. Always use -pbkdf2.

### openssl passwd -6 <password>

```bash
openssl passwd -6 <password>
```

Example:

```bash
openssl passwd -6 Summer2026
```

Generates a SHA-512 crypt hash suitable for /etc/shadow.

### echo -n "<text>" | openssl base64

```bash
echo -n "<text>" | openssl base64
```

Example:

```bash
echo -n "admin:pass" | openssl base64
```

Base64-encodes input; add -d to decode.

## Related tools

- [GnuPG](https://terminal.rokibulroni.com/tool/crypto/gpg)
- [base64](https://terminal.rokibulroni.com/tool/crypto/base64)
- [curl](https://terminal.rokibulroni.com/tool/utilities/curl)
