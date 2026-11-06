---
name: terminal-hub-crypto
description: "Copy-ready Crypto & Encoding command reference (TLS, certificates, encryption, signing and everyday encoding) covering OpenSSL, GnuPG, base64. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a crypto & encoding task from the terminal."
license: MIT
---

# Crypto & Encoding commands

Work with certificates and keys, encrypt and sign data, and convert between the encodings that turn up throughout security work — from Base64 tokens to PEM bundles.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Cryptography

- **OpenSSL** — The ubiquitous toolkit for TLS and general cryptography: inspect certificates, generate keys and CSRs, convert formats, hash, encrypt and create random secrets. [`tools/openssl.md`](tools/openssl.md), 19 commands. Sections: Inspecting certificates, Keys and CSRs, Converting formats, Hashing, encoding and crypto.
- **GnuPG** — The free implementation of OpenPGP: generate keys, encrypt and decrypt files, and create and verify digital signatures — used everywhere from email to release verification. [`tools/gpg.md`](tools/gpg.md), 16 commands. Sections: Keys, Encrypting, Signing & verifying, Maintenance.

### Encoding

- **base64** — Encodes and decodes Base64, the standard way to carry binary data over text channels — common in tokens, config files and shell file-transfer tricks. [`tools/base64.md`](tools/base64.md), 10 commands. Sections: Encoding, Decoding, Transfer trick, Related encodings.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/crypto. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/crypto/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
