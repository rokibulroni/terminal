# Web application enumeration

> Map a web application’s surface: technologies, hidden content, parameters and obvious vulnerability classes.

- Level: Intermediate
- Time: ~25 minutes
- Tags: web, recon, content discovery, fuzzing
- Page: https://terminal.rokibulroni.com/guide/web-app-enumeration
- Updated: 2026-11-06

A web server is open on port 443. This guide maps the application the way a tester does: fingerprint the stack, discover content and endpoints, then probe the most common vulnerability classes. Stay inside the agreed scope and rate limits.

## Prerequisites

- An in-scope web application URL
- ffuf, nuclei and a wordlist installed
- A proxy such as Burp or mitmproxy (optional but recommended)

## 1. Fingerprint the stack

Identify the server, framework, CMS and any versions. This tells you which wordlists, scanners and known issues are relevant.

Tool: [WhatWeb](https://terminal.rokibulroni.com/api/v1/tools/web/whatweb.md)

```bash
whatweb -a 3 https://target.example.com
```

Aggressive fingerprint of technologies and versions.

```bash
httpx -u https://target.example.com -title -tech-detect -status-code
```

Probe and summarise the response in one line.

## 2. Discover subdomains and live hosts

Applications often sprawl across subdomains. Enumerate them passively, then keep the ones that actually serve traffic.

Tool: [Subfinder](https://terminal.rokibulroni.com/api/v1/tools/web/subfinder.md)

```bash
subfinder -d example.com -silent | httpx -silent
```

Passive subdomains, filtered to live web servers.

## 3. Brute-force content

Find directories, files and endpoints that are not linked. Choose a wordlist that matches the stack you fingerprinted.

Tool: [ffuf](https://terminal.rokibulroni.com/api/v1/tools/web/ffuf.md)

```bash
ffuf -u https://target.example.com/FUZZ -w raft-medium-directories.txt -mc 200,301,302,403
```

Directory discovery, filtered to interesting status codes.

```bash
feroxbuster -u https://target.example.com -x php,txt --depth 2
```

Recursive discovery with extensions.

## 4. Collect URLs and parameters

Crawl the app and pull historical URLs to find parameters worth testing. Parameters are where injection lives.

Tool: [Katana](https://terminal.rokibulroni.com/api/v1/tools/web/katana.md)

```bash
katana -u https://target.example.com -silent | tee urls.txt
```

Crawl for in-app URLs.

```bash
gau example.com | grep "=" | tee params.txt
```

Historical URLs that carry query parameters.

## 5. Scan for known issues

Run a template-based scanner for CVEs, misconfigurations and exposures. Review findings by hand — scanners produce false positives.

Tool: [Nuclei](https://terminal.rokibulroni.com/api/v1/tools/web/nuclei.md)

```bash
nuclei -u https://target.example.com -s medium,high,critical
```

Run medium-and-above templates against the target.

## 6. Probe injection points

Test the parameters you collected for the classic classes. Start carefully; destructive payloads belong only in explicitly authorised tests.

Tool: [sqlmap](https://terminal.rokibulroni.com/api/v1/tools/web/sqlmap.md)

```bash
sqlmap -u "https://target.example.com/item?id=1" --batch --level 2
```

Automated SQL-injection detection on one parameter.

## Wrap-up

Treat scanner output as leads, not conclusions. The real work is confirming each finding manually, understanding its impact, and writing it up with a clear reproduction. Keep within scope, authentication rules and rate limits throughout.
