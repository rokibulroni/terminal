# dig

> The go-to DNS lookup tool: query any record type, pick the server, attempt zone transfers and trace resolution from the root — essential for recon.

- Category: Network
- Commands: 14
- Page: https://terminal.rokibulroni.com/tool/network/dig
- Homepage: https://www.isc.org/bind/
- Documentation: https://linux.die.net/man/1/dig
- Tags: DNS, recon, enumeration

## Install

- apt: `sudo apt install dnsutils`
- dnf: `sudo dnf install bind-utils`
- brew: `brew install bind`

## Basic lookups

### dig <domain>

```bash
dig <domain>
```

Example:

```bash
dig example.com
```

Queries the A records for a domain with full detail.

### dig <domain> +short

```bash
dig <domain> +short
```

Example:

```bash
dig example.com +short
```

Just the answer, ideal for scripts.

### dig <domain> <type>

```bash
dig <domain> <type>
```

Example:

```bash
dig example.com MX
```

Queries a specific record type: A, AAAA, MX, NS, TXT, SOA, CNAME, SRV, CAA, PTR.

### dig <domain> ANY

```bash
dig <domain> ANY
```

Example:

```bash
dig example.com ANY
```

Asks for all record types (many servers now refuse or minimise this).

### dig @<server> <domain>

```bash
dig @<server> <domain>
```

Example:

```bash
dig @1.1.1.1 example.com
```

Queries a specific DNS server instead of your resolver.


## Recon

### dig <domain> NS +short

```bash
dig <domain> NS +short
```

Example:

```bash
dig example.com NS +short
```

The authoritative name servers — the first step before a zone transfer attempt.

### dig <domain> TXT +short

```bash
dig <domain> TXT +short
```

Example:

```bash
dig example.com TXT +short
```

TXT records, which hold SPF, DKIM, DMARC and verification tokens that can leak services in use.

### dig -x <ip> +short

```bash
dig -x <ip> +short
```

Example:

```bash
dig -x 203.0.113.10 +short
```

Reverse lookup: the PTR record for an IP.

### dig axfr <domain> @<ns>

```bash
dig axfr <domain> @<ns>
```

Example:

```bash
dig axfr example.com @ns1.example.com
```

Attempts a zone transfer; a misconfigured server dumps every record — a classic finding.

### dig <domain> +trace

```bash
dig <domain> +trace
```

Example:

```bash
dig example.com +trace
```

Traces resolution from the root servers down, showing the full delegation path.

### dig CAA <domain> +short

```bash
dig CAA <domain> +short
```

Example:

```bash
dig CAA example.com +short
```

Which certificate authorities are allowed to issue for the domain.


## Troubleshooting

### dig <domain> +noall +answer

```bash
dig <domain> +noall +answer
```

Example:

```bash
dig example.com +noall +answer
```

Prints only the answer section.

### dig <domain> +dnssec

```bash
dig <domain> +dnssec
```

Example:

```bash
dig example.com +dnssec
```

Requests DNSSEC records (RRSIG) to check signing.

### dig +nssearch <domain>

```bash
dig +nssearch <domain>
```

Example:

```bash
dig +nssearch example.com
```

Queries each authoritative server for the SOA to spot inconsistencies.

## Related tools

- [whois](https://terminal.rokibulroni.com/tool/network/whois)
- [dnsrecon](https://terminal.rokibulroni.com/tool/network/dnsrecon)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
