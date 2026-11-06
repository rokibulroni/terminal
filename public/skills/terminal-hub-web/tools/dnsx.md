# dnsx

> A fast, multi-purpose DNS toolkit from ProjectDiscovery: bulk resolution, record lookups, brute forcing and filtering, built for recon pipelines.

- Category: Web
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/web/dnsx
- Homepage: https://github.com/projectdiscovery/dnsx
- Documentation: https://docs.projectdiscovery.io/tools/dnsx/overview
- Tags: DNS, recon, resolution, ProjectDiscovery

## Install

- apt: `sudo apt install dnsx`
- brew: `brew install dnsx`
- go: `go install -v github.com/projectdiscovery/dnsx/cmd/dnsx@latest`

## Resolving

### dnsx -l <file> -silent

```bash
dnsx -l <file> -silent
```

Example:

```bash
dnsx -l hosts.txt -silent
```

Resolves a list of hosts and keeps only the ones that exist.

### dnsx -l <file> -a -resp

```bash
dnsx -l <file> -a -resp
```

Example:

```bash
dnsx -l hosts.txt -a -resp
```

Shows A records next to each host.

### subfinder -d <domain> -silent | dnsx -silent

```bash
subfinder -d <domain> -silent | dnsx -silent
```

Example:

```bash
subfinder -d example.com -silent | dnsx -silent
```

Filters a subdomain list down to live names.

### dnsx -l <file> -cname -resp

```bash
dnsx -l <file> -cname -resp
```

Example:

```bash
dnsx -l hosts.txt -cname -resp
```

Shows CNAME targets — useful for spotting subdomain-takeover candidates.


## Record types

### dnsx -l <file> -mx -resp

```bash
dnsx -l <file> -mx -resp
```

Example:

```bash
dnsx -l domains.txt -mx -resp
```

Mail servers.

### dnsx -l <file> -ns -resp

```bash
dnsx -l <file> -ns -resp
```

Example:

```bash
dnsx -l domains.txt -ns -resp
```

Name servers.

### dnsx -l <file> -txt -resp

```bash
dnsx -l <file> -txt -resp
```

Example:

```bash
dnsx -l domains.txt -txt -resp
```

TXT records in bulk.

### dnsx -d <domain> -w <wordlist> -silent

```bash
dnsx -d <domain> -w <wordlist> -silent
```

Example:

```bash
dnsx -d example.com -w subdomains.txt -silent
```

DNS brute forcing with a wordlist using the {domain} placeholder.


## Advanced

### dnsx -l <file> -ptr -resp-only

```bash
dnsx -l <file> -ptr -resp-only
```

Example:

```bash
dnsx -l ips.txt -ptr -resp-only
```

Reverse lookups for a list of IPs.

### dnsx -l <file> -rcode noerror,nxdomain

```bash
dnsx -l <file> -rcode noerror,nxdomain
```

Example:

```bash
dnsx -l hosts.txt -rcode noerror
```

Filters by DNS response code.

### dnsx -l <file> -r <resolvers>

```bash
dnsx -l <file> -r <resolvers>
```

Example:

```bash
dnsx -l hosts.txt -r resolvers.txt
```

Uses a custom resolver list for speed and reliability.

## Related tools

- [Subfinder](https://terminal.rokibulroni.com/tool/web/subfinder)
- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [dig](https://terminal.rokibulroni.com/tool/network/dig)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
