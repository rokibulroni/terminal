# SpiderFoot

> Automates OSINT collection across 200+ modules and correlates results about IPs, domains, emails, names and more, via CLI or web UI.

- Category: OSINT
- Commands: 14
- Page: https://terminal.rokibulroni.com/tool/osint/spiderfoot
- Homepage: https://github.com/smicallef/spiderfoot
- Documentation: https://github.com/smicallef/spiderfoot#readme
- Tags: automation, reconnaissance, correlation

## Install

- apt: `sudo apt install spiderfoot`
- docker: `docker run -p 5001:5001 smicallef/spiderfoot`

## Web UI

### spiderfoot -l 127.0.0.1:5001

```bash
spiderfoot -l 127.0.0.1:5001
```

Starts the web interface on port 5001. Keep it on localhost; it has no authentication by default.

### docker run -p 127.0.0.1:5001:5001 smicallef/spiderfoot

```bash
docker run -p 127.0.0.1:5001:5001 smicallef/spiderfoot
```

Runs the web UI in Docker, published only on localhost.


## Command-line scans

### spiderfoot -s <target> -u passive

```bash
spiderfoot -s <target> -u passive
```

Example:

```bash
spiderfoot -s example.com -u passive
```

Runs every module that does not touch the target directly.

### spiderfoot -s <target> -u footprint

```bash
spiderfoot -s <target> -u footprint
```

Example:

```bash
spiderfoot -s example.com -u footprint
```

Footprinting: maps the target’s internet presence.

### spiderfoot -s <target> -u investigate

```bash
spiderfoot -s <target> -u investigate
```

Example:

```bash
spiderfoot -s 203.0.113.10 -u investigate
```

Investigation: looks for malicious indicators about the target.

### spiderfoot -s <target> -u all

```bash
spiderfoot -s <target> -u all
```

Example:

```bash
spiderfoot -s example.com -u all
```

Every module — slow and can be noisy.

### spiderfoot -s <target> -m <modules>

```bash
spiderfoot -s <target> -m <modules>
```

Example:

```bash
spiderfoot -s example.com -m sfp_dnsresolve,sfp_crt,sfp_whois
```

Only the listed modules.

### spiderfoot -s <target> -t <types>

```bash
spiderfoot -s <target> -t <types>
```

Example:

```bash
spiderfoot -s example.com -t EMAILADDR,INTERNET_NAME
```

Only collects certain data types.

### spiderfoot -s <target> -u passive -o json > <file>

```bash
spiderfoot -s <target> -u passive -o json > <file>
```

Example:

```bash
spiderfoot -s example.com -u passive -o json > results.json
```

JSON output for later processing; csv and tab are also available.

### spiderfoot -s <target> -u passive -q

```bash
spiderfoot -s <target> -u passive -q
```

Example:

```bash
spiderfoot -s example.com -u passive -q
```

Hides log messages and prints only results.

### spiderfoot -s <target> -u passive -x -t <type>

```bash
spiderfoot -s <target> -u passive -x -t <type>
```

Example:

```bash
spiderfoot -s example.com -x -t EMAILADDR
```

Strict mode: only modules that directly produce the requested type.


## Reference

### spiderfoot -M

```bash
spiderfoot -M
```

Lists all modules with short descriptions.

### spiderfoot -T

```bash
spiderfoot -T
```

Lists every data type modules can produce.

### spiderfoot -C <scan_id>

```bash
spiderfoot -C <scan_id>
```

Example:

```bash
spiderfoot -C 3F6A2B…
```

Runs the correlation rules against a completed scan.

## Related tools

- [Recon-ng](https://terminal.rokibulroni.com/tool/osint/recon-ng)
- [theHarvester](https://terminal.rokibulroni.com/tool/osint/theHarvester)
- [Shodan CLI](https://terminal.rokibulroni.com/tool/osint/shodan)
