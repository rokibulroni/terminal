# Subfinder

> ProjectDiscovery’s fast passive subdomain enumeration tool, pulling from many sources and designed to slot into a recon pipeline.

- Category: Web
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/web/subfinder
- Homepage: https://github.com/projectdiscovery/subfinder
- Documentation: https://docs.projectdiscovery.io/tools/subfinder/overview
- Tags: subdomains, recon, passive, ProjectDiscovery

## Install

- apt: `sudo apt install subfinder`
- brew: `brew install subfinder`
- go: `go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest`

## Discovery

### subfinder -d <domain>

```bash
subfinder -d <domain>
```

Example:

```bash
subfinder -d example.com
```

Passive subdomain discovery from dozens of online sources.

### subfinder -d <domain> -silent

```bash
subfinder -d <domain> -silent
```

Example:

```bash
subfinder -d example.com -silent
```

Prints only the subdomains, perfect for piping.

### subfinder -dL <file> -silent

```bash
subfinder -dL <file> -silent
```

Example:

```bash
subfinder -dL domains.txt -silent
```

Enumerates many root domains from a file.

### subfinder -d <domain> -all

```bash
subfinder -d <domain> -all
```

Example:

```bash
subfinder -d example.com -all
```

Uses every source, including the slower ones.

### subfinder -d <domain> -recursive

```bash
subfinder -d <domain> -recursive
```

Example:

```bash
subfinder -d example.com -recursive
```

Recursively enumerates sources that can reveal deeper subdomains.


## Output & pipelines

### subfinder -d <domain> -o <file>

```bash
subfinder -d <domain> -o <file>
```

Example:

```bash
subfinder -d example.com -o subs.txt
```

Writes results to a file.

### subfinder -d <domain> -oJ -o <file>

```bash
subfinder -d <domain> -oJ -o <file>
```

Example:

```bash
subfinder -d example.com -oJ -o subs.json
```

JSON Lines output with the source of each finding.

### subfinder -d <domain> -silent | httpx -silent

```bash
subfinder -d <domain> -silent | httpx -silent
```

Example:

```bash
subfinder -d example.com -silent | httpx -silent
```

Finds subdomains, then live web servers among them.

### subfinder -d <domain> -silent | dnsx -silent -a -resp

```bash
subfinder -d <domain> -silent | dnsx -silent -a -resp
```

Example:

```bash
subfinder -d example.com -silent | dnsx -silent -a -resp
```

Resolves discovered subdomains to filter out dead ones.


## Configuration

### subfinder -ls

```bash
subfinder -ls
```

Lists the available sources.

### cat ~/.config/subfinder/provider-config.yaml

```bash
cat ~/.config/subfinder/provider-config.yaml
```

API keys for sources like Censys, SecurityTrails and Shodan — adding them greatly widens coverage.

## Related tools

- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
- [dnsx](https://terminal.rokibulroni.com/tool/web/dnsx)
- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [Gobuster](https://terminal.rokibulroni.com/tool/web/gobuster)
