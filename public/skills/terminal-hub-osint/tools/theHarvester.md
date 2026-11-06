# theHarvester

> Gathers emails, names, subdomains, IPs and URLs about a domain from public sources like search engines and certificate logs.

- Category: OSINT
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/osint/theHarvester
- Homepage: https://github.com/laramies/theHarvester
- Documentation: https://github.com/laramies/theHarvester/wiki
- Tags: emails, subdomains, reconnaissance

## Install

- apt: `sudo apt install theharvester`

## Collecting

### theHarvester -d <domain> -b <sources>

```bash
theHarvester -d <domain> -b <sources>
```

Example:

```bash
theHarvester -d example.com -b crtsh,duckduckgo,bing
```

Searches the chosen sources for emails, hosts and IPs related to the domain.

### theHarvester -d <domain> -b all

```bash
theHarvester -d <domain> -b all
```

Example:

```bash
theHarvester -d example.com -b all
```

Queries every available source. Sources that need API keys are skipped unless keys are configured.

### theHarvester -d <domain> -b crtsh

```bash
theHarvester -d <domain> -b crtsh
```

Example:

```bash
theHarvester -d example.com -b crtsh
```

Subdomains from certificate-transparency logs — fast and keyless.

### theHarvester -d <domain> -b <source> -l <n>

```bash
theHarvester -d <domain> -b <source> -l <n>
```

Example:

```bash
theHarvester -d example.com -b bing -l 500
```

Limits the number of results fetched from search engines.

### theHarvester -d <domain> -b <source> -S <start>

```bash
theHarvester -d <domain> -b <source> -S <start>
```

Example:

```bash
theHarvester -d example.com -b bing -S 100
```

Starts from a later result offset.


## Active checks

### theHarvester -d <domain> -b <source> -r

```bash
theHarvester -d <domain> -b <source> -r
```

Example:

```bash
theHarvester -d example.com -b crtsh -r
```

Resolves discovered hosts with DNS.

### theHarvester -d <domain> -b <source> -c

```bash
theHarvester -d <domain> -b <source> -c
```

Example:

```bash
theHarvester -d example.com -b crtsh -c
```

DNS brute-forces subdomains.

### theHarvester -d <domain> -b <source> -n

```bash
theHarvester -d <domain> -b <source> -n
```

Example:

```bash
theHarvester -d example.com -b crtsh -n
```

Reverse DNS lookups on discovered IP ranges.

### theHarvester -d <domain> -b <source> -t

```bash
theHarvester -d <domain> -b <source> -t
```

Example:

```bash
theHarvester -d example.com -b crtsh -t
```

Checks discovered hosts for subdomain-takeover candidates.

### theHarvester -d <domain> -b shodan

```bash
theHarvester -d <domain> -b shodan
```

Example:

```bash
theHarvester -d example.com -b shodan
```

Enriches hosts with Shodan data (needs an API key).


## Output

### theHarvester -d <domain> -b <source> -f <file>

```bash
theHarvester -d <domain> -b <source> -f <file>
```

Example:

```bash
theHarvester -d example.com -b all -f example_report
```

Saves results as XML and JSON.

### theHarvester -d <domain> -b <source> -q

```bash
theHarvester -d <domain> -b <source> -q
```

Example:

```bash
theHarvester -d example.com -b crtsh -q
```

Quiet mode with fewer warnings.

### cat ~/.theHarvester/api-keys.yaml

```bash
cat ~/.theHarvester/api-keys.yaml
```

API key configuration file (in /etc/theHarvester/ on some installs). Adding keys unlocks sources like Hunter, Shodan and SecurityTrails.

## Related tools

- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
- [Recon-ng](https://terminal.rokibulroni.com/tool/osint/recon-ng)
- [SpiderFoot](https://terminal.rokibulroni.com/tool/osint/spiderfoot)
