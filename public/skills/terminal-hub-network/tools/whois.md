# whois

> Looks up registration records for domains, IP addresses and autonomous systems — ownership, dates and abuse contacts for attack-surface mapping.

- Category: Network
- Commands: 7
- Page: https://terminal.rokibulroni.com/tool/network/whois
- Homepage: https://github.com/rfc1036/whois
- Documentation: https://man7.org/linux/man-pages/man1/whois.1.html
- Tags: WHOIS, recon, OSINT, DNS

## Install

- apt: `sudo apt install whois`
- brew: `brew install whois`

## Domains

### whois <domain>

```bash
whois <domain>
```

Example:

```bash
whois example.com
```

Registration details: registrar, creation and expiry dates, name servers and (unless redacted) contacts.

### whois <domain> | grep -iE "registrar|creat|expir|name server"

```bash
whois <domain> | grep -iE "registrar|creat|expir|name server"
```

Example:

```bash
whois example.com | grep -iE "registrar|creat|expir|name server"
```

Pulls the lines that matter most for recon.

### whois -h <server> <query>

```bash
whois -h <server> <query>
```

Example:

```bash
whois -h whois.verisign-grs.com example.com
```

Queries a specific WHOIS server.


## IP addresses & networks

### whois <ip>

```bash
whois <ip>
```

Example:

```bash
whois 203.0.113.10
```

The organisation, network range and abuse contact that owns an IP — maps targets to owners.

### whois <ip> | grep -iE "orgname|netrange|cidr|country"

```bash
whois <ip> | grep -iE "orgname|netrange|cidr|country"
```

Example:

```bash
whois 8.8.8.8 | grep -iE "orgname|netrange|cidr|country"
```

The ownership summary for an address.

### whois -h whois.cymru.com " -v <ip>"

```bash
whois -h whois.cymru.com " -v <ip>"
```

Example:

```bash
whois -h whois.cymru.com " -v 8.8.8.8"
```

Team Cymru: maps an IP to its ASN, owner and country in one line.

### whois AS<number>

```bash
whois AS<number>
```

Example:

```bash
whois AS15169
```

Details of an autonomous system.

## Related tools

- [dig](https://terminal.rokibulroni.com/tool/network/dig)
- [dnsrecon](https://terminal.rokibulroni.com/tool/network/dnsrecon)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
