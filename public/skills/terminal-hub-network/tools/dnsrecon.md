# dnsrecon

> A DNS enumeration script: record retrieval, zone transfers, subdomain brute forcing, reverse lookups, SRV discovery and certificate-log harvesting.

- Category: Network
- Commands: 10
- Page: https://terminal.rokibulroni.com/tool/network/dnsrecon
- Homepage: https://github.com/darkoperator/dnsrecon
- Documentation: https://github.com/darkoperator/dnsrecon
- Tags: DNS, enumeration, recon, subdomains

## Install

- apt: `sudo apt install dnsrecon`
- pipx: `pipx install dnsrecon`

## Standard enumeration

### dnsrecon -d <domain>

```bash
dnsrecon -d <domain>
```

Example:

```bash
dnsrecon -d example.com
```

Default scan: SOA, NS, MX, A, AAAA, SRV and TXT records, plus a zone-transfer attempt.

### dnsrecon -d <domain> -a

```bash
dnsrecon -d <domain> -a
```

Example:

```bash
dnsrecon -d example.com -a
```

Also tries AXFR zone transfers against every name server.

### dnsrecon -d <domain> -n <server>

```bash
dnsrecon -d <domain> -n <server>
```

Example:

```bash
dnsrecon -d example.com -n 1.1.1.1
```

Uses a specific resolver.


## Brute forcing

### dnsrecon -d <domain> -D <wordlist> -t brt

```bash
dnsrecon -d <domain> -D <wordlist> -t brt
```

Example:

```bash
dnsrecon -d example.com -D subdomains.txt -t brt
```

Brute-forces subdomains from a wordlist.

### dnsrecon -d <domain> -t std,brt -D <wordlist>

```bash
dnsrecon -d <domain> -t std,brt -D <wordlist>
```

Example:

```bash
dnsrecon -d example.com -t std,brt -D /usr/share/wordlists/dnsmap.txt
```

Combines standard enumeration with brute forcing.

### dnsrecon -d <domain> -t srv

```bash
dnsrecon -d <domain> -t srv
```

Example:

```bash
dnsrecon -d example.com -t srv
```

Enumerates common SRV records (LDAP, Kerberos, SIP, autodiscover) — useful for finding AD and VoIP services.


## Other modes

### dnsrecon -r <cidr>

```bash
dnsrecon -r <cidr>
```

Example:

```bash
dnsrecon -r 203.0.113.0/24
```

Reverse lookups across a network range.

### dnsrecon -d <domain> -t zonewalk

```bash
dnsrecon -d <domain> -t zonewalk
```

Example:

```bash
dnsrecon -d example.com -t zonewalk
```

Walks an NSEC-signed zone to enumerate names.

### dnsrecon -d <domain> -j <file>

```bash
dnsrecon -d <domain> -j <file>
```

Example:

```bash
dnsrecon -d example.com -j out.json
```

Saves results as JSON; -c writes CSV and -x XML.

### dnsrecon -d <domain> -t goo,crt

```bash
dnsrecon -d <domain> -t goo,crt
```

Example:

```bash
dnsrecon -d example.com -t crt
```

Pulls subdomains from certificate-transparency logs (crt) and search engines (goo).

## Related tools

- [dig](https://terminal.rokibulroni.com/tool/network/dig)
- [whois](https://terminal.rokibulroni.com/tool/network/whois)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
