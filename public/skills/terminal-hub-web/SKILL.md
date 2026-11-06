---
name: terminal-hub-web
description: "Copy-ready Web command reference (Web application recon, content discovery and vulnerability scanning) covering ffuf, feroxbuster, dirsearch, Gobuster, Wfuzz, Nikto, Nuclei, WPScan, sqlmap, XSSer, Subfinder, dnsx, httpx, Katana, gau, waybackurls, WhatWeb. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a web task from the terminal."
license: MIT
---

# Web commands

Tools for mapping and testing web applications: collect URLs, discover hidden content, fingerprint technologies and probe for common vulnerability classes such as SQL injection and XSS.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Fuzzing & Content Discovery

- **ffuf** — “Fuzz Faster U Fool” — a very fast web fuzzer for directories, parameters, virtual hosts and POST data, with flexible matching and filtering. [`tools/ffuf.md`](tools/ffuf.md), 85 commands. Sections: Basic Directory Fuzzing, Extension Fuzzing, Status Code Matching, Status Code Filtering, Size Filtering, Word Count Filtering, Line Count Filtering, Regex Matching, +69 more.
- **feroxbuster** — A fast, recursive content-discovery tool in Rust: brute-force directories and files with rich filtering, recursion and resume support. [`tools/feroxbuster.md`](tools/feroxbuster.md), 13 commands. Sections: Basics, Filtering, Options.
- **dirsearch** — A web path scanner that brute-forces directories and files with smart extension handling, recursion and filtering. [`tools/dirsearch.md`](tools/dirsearch.md), 70 commands. Sections: Basic Directory Enumeration, File Extension Enumeration, Recursive Scanning, Multiple Target Scanning, Wordlist Selection and Customization, HTTP Methods, Header and Cookie Customization, Authentication Handling, +14 more.
- **Gobuster** — Brute-forces URIs, DNS subdomains, virtual hosts and cloud buckets. Simple, fast and written in Go. [`tools/gobuster.md`](tools/gobuster.md), 70 commands. Sections: Directory Enumeration (Basic), Directory Enumeration (Extensions), Directory Enumeration (Extensions File), Directory Enumeration (Recursive), Directory Enumeration (No Recursion), Directory Enumeration (Status Codes), Directory Enumeration (Blacklist Status), Directory Enumeration (Skip SSL), +62 more.
- **Wfuzz** — A Python web fuzzer that replaces the FUZZ keyword in any part of a request — paths, parameters, headers or cookies — with payloads. [`tools/wfuzz.md`](tools/wfuzz.md), 60 commands. Sections: Basic Directory Fuzzing, Status Code Matching, Extension Fuzzing, Word Count Filtering, Character Count Filtering, Line Count Filtering, GET Parameter Fuzzing, GET Parameter Value Fuzzing, +51 more.

### Vulnerability Scanners

- **Nikto** — A web server scanner that checks for thousands of dangerous files, outdated software and common misconfigurations. Noisy by design. [`tools/nikto.md`](tools/nikto.md), 105 commands. Sections: Basic Web Scan, Target Specification, SSL and HTTPS Scanning, General Info, Tuning and Scan Category, Output Formats, Verbose and Debug, Evasion and IDS Bypass, +34 more.
- **Nuclei** — A fast, template-based vulnerability scanner. Thousands of community YAML templates detect CVEs, misconfigurations and exposures. [`tools/nuclei.md`](tools/nuclei.md), 100 commands. Sections: Basic Template Scanning, Target Input Methods, Template Selection, Tag Filtering, Severity Filtering, Workflow Execution, Output Formats, Output Customization, +28 more.
- **WPScan** — A WordPress security scanner that enumerates versions, plugins, themes and users and checks them against a vulnerability database. [`tools/wpscan.md`](tools/wpscan.md), 85 commands. Sections: Basic WordPress Scan, Connection Options, Enumeration - Plugins, Enumeration - Themes, Enumeration - Users, Enumeration - Files, Enumeration - Media, Enumeration - Combined, +35 more.

### Injection Testing

- **sqlmap** — Automates detection and exploitation of SQL injection: fingerprints the database, extracts data and can reach the file system or OS. [`tools/sqlmap.md`](tools/sqlmap.md), 100 commands. Sections: Basic SQL Injection Detection, Request File Injection, Direct Connection, Google Dorking, POST Data Injection, Cookie Injection, User-Agent Injection, Parameter Splitting, +21 more.
- **XSSer** — An automated framework for detecting and exploiting cross-site scripting (XSS) vulnerabilities in web applications. [`tools/xsser.md`](tools/xsser.md), 75 commands. Sections: Basic XSS Detection, GET and POST Parameter Injection, Header and Cookie Injection, Authentication and Session Handling, Proxy, Tor, and Network Configuration, Timing, Delay, and Performance Tuning, Crawling and Automatic Discovery, Encoding and Filter Evasion, +16 more.

### Subdomains & DNS

- **Subfinder** — ProjectDiscovery’s fast passive subdomain enumeration tool, pulling from many sources and designed to slot into a recon pipeline. [`tools/subfinder.md`](tools/subfinder.md), 11 commands. Sections: Discovery, Output & pipelines, Configuration.
- **dnsx** — A fast, multi-purpose DNS toolkit from ProjectDiscovery: bulk resolution, record lookups, brute forcing and filtering, built for recon pipelines. [`tools/dnsx.md`](tools/dnsx.md), 11 commands. Sections: Resolving, Record types, Advanced.

### Recon & URLs

- **httpx** — ProjectDiscovery’s HTTP toolkit: probes lists of hosts for live web servers and reports status, title, technologies, TLS details and more. [`tools/httpx.md`](tools/httpx.md), 110 commands. Sections: Basic HTTP Probing, Status Code Detection, Title and Technology Fingerprinting, Content Analysis, Network Metadata, Method Handling, Redirect Handling, Port Scanning, +30 more.
- **Katana** — A fast web crawler from ProjectDiscovery with standard and headless modes and JavaScript parsing, built to feed URLs into the rest of a testing pipeline. [`tools/katana.md`](tools/katana.md), 11 commands. Sections: Crawling, Headless, Filtering & output.
- **gau** — “GetAllUrls” — fetches known URLs for a domain from the Wayback Machine, Common Crawl, OTX and URLScan for passive recon. [`tools/gau.md`](tools/gau.md), 45 commands. Sections: Basic URL Collection, Input from STDIN, Subdomain Inclusion, Multiple Domain Enumeration, Provider Selection, Provider Control, Extension Filtering, Performance Tuning, +26 more.
- **waybackurls** — Pulls every URL the Wayback Machine has archived for a domain — a quick way to find old endpoints and parameters. [`tools/waybackurls.md`](tools/waybackurls.md), 45 commands. Sections: Basic URL Enumeration, Multiple Domain Enumeration, Subdomain Handling, Dates and Versions, Output Management, Deduplication, Parameter Discovery, File Extension Discovery, +11 more.
- **WhatWeb** — Identifies the technologies behind a website — CMS, frameworks, server software, analytics and versions — using over 1,800 plugins. [`tools/whatweb.md`](tools/whatweb.md), 70 commands. Sections: Basic Technology Detection, Multiple Target Scanning, Input from File and STDIN, Aggression Level Control, Plugin Listing and Selection, User Agent Customization, HTTP Header and Cookie Analysis, Authentication Handling, +11 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/web. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/web/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
