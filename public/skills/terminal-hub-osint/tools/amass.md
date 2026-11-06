# OWASP Amass

> In-depth attack-surface mapping: discovers subdomains through passive sources, DNS brute-forcing and permutation, and graphs the results.

- Category: OSINT
- Commands: 17
- Page: https://terminal.rokibulroni.com/tool/osint/amass
- Homepage: https://github.com/owasp-amass/amass
- Documentation: https://github.com/owasp-amass/amass/blob/master/doc/user_guide.md
- Tags: subdomains, DNS, attack surface

## Install

- apt: `sudo apt install amass`
- brew: `brew install amass`
- go: `go install -v github.com/owasp-amass/amass/v4/...@master`

## Enumeration

### amass enum -passive -d <domain>

```bash
amass enum -passive -d <domain>
```

Example:

```bash
amass enum -passive -d example.com
```

Passive subdomain discovery from certificate logs, DNS datasets and APIs — no traffic reaches the target.

### amass enum -d <domain>

```bash
amass enum -d <domain>
```

Example:

```bash
amass enum -d example.com
```

Default enumeration: passive sources plus DNS resolution of what it finds.

### amass enum -active -d <domain>

```bash
amass enum -active -d <domain>
```

Example:

```bash
amass enum -active -d example.com -p 443,8443
```

Active mode: zone-transfer attempts and TLS certificate grabbing on the given ports.

### amass enum -brute -d <domain>

```bash
amass enum -brute -d <domain>
```

Example:

```bash
amass enum -brute -d example.com
```

Adds DNS brute-forcing with the built-in wordlist.

### amass enum -brute -w <wordlist> -d <domain>

```bash
amass enum -brute -w <wordlist> -d <domain>
```

Example:

```bash
amass enum -brute -w subdomains-top1million-5000.txt -d example.com
```

Brute-forces with your own wordlist.

### amass enum -df <file>

```bash
amass enum -df <file>
```

Example:

```bash
amass enum -df domains.txt
```

Enumerates many root domains from a file.

### amass enum -d <domain> -o <file>

```bash
amass enum -d <domain> -o <file>
```

Example:

```bash
amass enum -d example.com -o subs.txt
```

Writes discovered names to a file.

### amass enum -d <domain> -timeout <minutes>

```bash
amass enum -d <domain> -timeout <minutes>
```

Example:

```bash
amass enum -d example.com -timeout 30
```

Stops after a time limit.

### amass enum -d <domain> -rf <resolvers>

```bash
amass enum -d <domain> -rf <resolvers>
```

Example:

```bash
amass enum -d example.com -rf resolvers.txt
```

Uses a trusted resolver list for more reliable results.

### amass enum -d <domain> -config <file>

```bash
amass enum -d <domain> -config <file>
```

Example:

```bash
amass enum -d example.com -config config.yaml
```

Loads API keys for sources such as Shodan, Censys and SecurityTrails, which greatly improves passive coverage.


## Intelligence

### amass intel -org "<name>"

```bash
amass intel -org "<name>"
```

Example:

```bash
amass intel -org "Example Corp"
```

Finds ASNs and network ranges registered to an organisation.

### amass intel -asn <asn>

```bash
amass intel -asn <asn>
```

Example:

```bash
amass intel -asn 13335
```

Finds root domains hosted in an autonomous system.

### amass intel -cidr <cidr>

```bash
amass intel -cidr <cidr>
```

Example:

```bash
amass intel -cidr 203.0.113.0/24
```

Reverse lookups across a network range to find domains.

### amass intel -d <domain> -whois

```bash
amass intel -d <domain> -whois
```

Example:

```bash
amass intel -d example.com -whois
```

Finds related domains through reverse WHOIS.


## Results

### amass subs -names -d <domain>

```bash
amass subs -names -d <domain>
```

Example:

```bash
amass subs -names -d example.com
```

Lists names stored in the local Amass database from earlier runs (v4+).

### amass viz -d3 -d <domain>

```bash
amass viz -d3 -d <domain>
```

Example:

```bash
amass viz -d3 -d example.com
```

Renders the discovered graph as an interactive HTML visualisation.

### amass enum -passive -d <domain> | httpx -silent

```bash
amass enum -passive -d <domain> | httpx -silent
```

Example:

```bash
amass enum -passive -d example.com | httpx -silent
```

Pipes subdomains into httpx to find live web servers.

## Related tools

- [theHarvester](https://terminal.rokibulroni.com/tool/osint/theHarvester)
- [SpiderFoot](https://terminal.rokibulroni.com/tool/osint/spiderfoot)
- [Gobuster](https://terminal.rokibulroni.com/tool/web/gobuster)
