# GnuPG

> The free implementation of OpenPGP: generate keys, encrypt and decrypt files, and create and verify digital signatures — used everywhere from email to release verification.

- Category: Crypto & Encoding
- Commands: 16
- Page: https://terminal.rokibulroni.com/tool/crypto/gpg
- Homepage: https://gnupg.org
- Documentation: https://www.gnupg.org/documentation/manuals/gnupg/
- Tags: encryption, PGP, signing, keys

## Install

- apt: `sudo apt install gnupg`
- brew: `brew install gnupg`

## Keys

### gpg --full-generate-key

```bash
gpg --full-generate-key
```

Interactively creates a new key pair; choose RSA 4096 or an ECC curve.

### gpg --list-keys

```bash
gpg --list-keys
```

Lists public keys in your keyring; --list-secret-keys shows private keys.

### gpg --export -a <id> > <file>

```bash
gpg --export -a <id> > <file>
```

Example:

```bash
gpg --export -a alice@example.com > alice.pub
```

Exports a public key in ASCII-armored form.

### gpg --import <file>

```bash
gpg --import <file>
```

Example:

```bash
gpg --import alice.pub
```

Imports a key into your keyring.

### gpg --fingerprint <id>

```bash
gpg --fingerprint <id>
```

Example:

```bash
gpg --fingerprint alice@example.com
```

Shows a key’s fingerprint to verify it out of band.


## Encrypting

### gpg -e -r <recipient> <file>

```bash
gpg -e -r <recipient> <file>
```

Example:

```bash
gpg -e -r alice@example.com report.pdf
```

Encrypts a file to a recipient’s public key, producing file.gpg.

### gpg -e -r <a> -r <b> <file>

```bash
gpg -e -r <a> -r <b> <file>
```

Example:

```bash
gpg -e -r alice@example.com -r bob@example.com report.pdf
```

Encrypts so several recipients can each decrypt.

### gpg -c <file>

```bash
gpg -c <file>
```

Example:

```bash
gpg -c backup.tar
```

Symmetric encryption with a passphrase — no keys needed.

### gpg -d <file>.gpg > <out>

```bash
gpg -d <file>.gpg > <out>
```

Example:

```bash
gpg -d report.pdf.gpg > report.pdf
```

Decrypts a file.


## Signing & verifying

### gpg --sign <file>

```bash
gpg --sign <file>
```

Example:

```bash
gpg --sign release.tar
```

Creates a signed, compressed version of a file.

### gpg --detach-sign -a <file>

```bash
gpg --detach-sign -a <file>
```

Example:

```bash
gpg --detach-sign -a release.tar
```

Creates a separate .asc signature, the usual way to sign releases.

### gpg --verify <sig> <file>

```bash
gpg --verify <sig> <file>
```

Example:

```bash
gpg --verify release.tar.asc release.tar
```

Verifies a detached signature against the file.

### gpg --verify <file>.asc

```bash
gpg --verify <file>.asc
```

Example:

```bash
gpg --verify SHA256SUMS.asc
```

Verifies a clearsigned or inline-signed file.


## Maintenance

### gpg --edit-key <id>

```bash
gpg --edit-key <id>
```

Example:

```bash
gpg --edit-key alice@example.com
```

Opens the key editor to set trust, add user IDs or expiry.

### gpg --export-secret-keys -a <id> > <file>

```bash
gpg --export-secret-keys -a <id> > <file>
```

Example:

```bash
gpg --export-secret-keys -a alice@example.com > alice.key
```

Backs up a private key — store it somewhere safe.

### gpg --armor --export <id> | gpg --keyserver <ks> --send-keys <id>

```bash
gpg --armor --export <id> | gpg --keyserver <ks> --send-keys <id>
```

Example:

```bash
gpg --send-keys 0xDEADBEEF
```

Publishes a public key to a keyserver.

## Related tools

- [OpenSSL](https://terminal.rokibulroni.com/tool/crypto/openssl)
- [base64](https://terminal.rokibulroni.com/tool/crypto/base64)
