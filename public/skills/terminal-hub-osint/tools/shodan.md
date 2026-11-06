# Shodan CLI

> The command line for Shodan, the search engine for internet-connected devices: search banners, look up hosts and monitor networks.

- Category: OSINT
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/osint/shodan
- Homepage: https://www.shodan.io
- Documentation: https://cli.shodan.io
- Tags: internet scanning, devices, search

## Install

- pipx: `pipx install shodan`

## Setup

### shodan init <api_key>

```bash
shodan init <api_key>
```

Example:

```bash
shodan init YOUR_API_KEY
```

Stores your API key. Query credits and filters depend on your plan.

### shodan info

```bash
shodan info
```

Shows remaining query and scan credits.

### shodan myip

```bash
shodan myip
```

Your public IP address as Shodan sees it.


## Searching

### shodan search "<query>"

```bash
shodan search "<query>"
```

Example:

```bash
shodan search "product:nginx country:GB"
```

Searches banners. Uses query credits for filters and paging.

### shodan search --fields ip_str,port,org,hostnames "<query>"

```bash
shodan search --fields ip_str,port,org,hostnames "<query>"
```

Example:

```bash
shodan search --fields ip_str,port,org,hostnames "ssl.cert.subject.cn:example.com"
```

Prints only the chosen fields.

### shodan count "<query>"

```bash
shodan count "<query>"
```

Example:

```bash
shodan count "port:3389 country:US"
```

Number of results without spending credits on the data.

### shodan stats --facets <facet> "<query>"

```bash
shodan stats --facets <facet> "<query>"
```

Example:

```bash
shodan stats --facets org,port "hostname:example.com"
```

Top values for a facet — a fast attack-surface overview.

### shodan search "hostname:<domain>"

```bash
shodan search "hostname:<domain>"
```

Example:

```bash
shodan search "hostname:example.com"
```

Hosts whose reverse DNS or certificates match a domain.

### shodan search "net:<cidr>"

```bash
shodan search "net:<cidr>"
```

Example:

```bash
shodan search "net:203.0.113.0/24"
```

Everything Shodan has seen in a network range.

### shodan search "http.title:\"<title>\""

```bash
shodan search "http.title:\"<title>\""
```

Example:

```bash
shodan search "http.title:\"Grafana\""
```

Finds web apps by page title.

### shodan search "vuln:<cve>"

```bash
shodan search "vuln:<cve>"
```

Example:

```bash
shodan search "vuln:CVE-2021-44228 org:\"Example Corp\""
```

Hosts flagged as vulnerable to a CVE (needs a qualifying plan).


## Hosts and data

### shodan host <ip>

```bash
shodan host <ip>
```

Example:

```bash
shodan host 203.0.113.10
```

Every service, banner, location and known vulnerability for one IP.

### shodan domain <domain>

```bash
shodan domain <domain>
```

Example:

```bash
shodan domain example.com
```

Subdomains and DNS records Shodan knows about.

### shodan download <file> "<query>"

```bash
shodan download <file> "<query>"
```

Example:

```bash
shodan download results "org:\"Example Corp\""
```

Saves full results to a compressed JSON file.

### shodan parse --fields ip_str,port <file>.json.gz

```bash
shodan parse --fields ip_str,port <file>.json.gz
```

Example:

```bash
shodan parse --fields ip_str,port results.json.gz
```

Extracts fields from a download.

### shodan convert <file>.json.gz <format>

```bash
shodan convert <file>.json.gz <format>
```

Example:

```bash
shodan convert results.json.gz csv
```

Converts downloads to csv, kml, xlsx or images.


## Scanning and alerts

### shodan scan submit <cidr>

```bash
shodan scan submit <cidr>
```

Example:

```bash
shodan scan submit 203.0.113.0/28
```

Requests an on-demand scan of your own network (uses scan credits).

### shodan alert create "<name>" <cidr>

```bash
shodan alert create "<name>" <cidr>
```

Example:

```bash
shodan alert create "Office" 203.0.113.0/28
```

Monitors a range and notifies you about new services.

### shodan stream --ports <ports>

```bash
shodan stream --ports <ports>
```

Example:

```bash
shodan stream --ports 23,2323
```

Real-time stream of new banners (higher plans).

## Related tools

- [SpiderFoot](https://terminal.rokibulroni.com/tool/osint/spiderfoot)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
- [Masscan](https://terminal.rokibulroni.com/tool/network/masscan)
