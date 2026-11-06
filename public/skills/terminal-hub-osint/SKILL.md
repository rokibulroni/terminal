---
name: terminal-hub-osint
description: "Copy-ready OSINT command reference (Open-source intelligence and external attack-surface recon) covering OWASP Amass, Recon-ng, SpiderFoot, theHarvester, Shodan CLI. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a osint task from the terminal."
license: MIT
---

# OSINT commands

Map an organisation’s public footprint — subdomains, email addresses, exposed services — using public data sources, mostly without touching the target directly.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Recon Frameworks

- **OWASP Amass** — In-depth attack-surface mapping: discovers subdomains through passive sources, DNS brute-forcing and permutation, and graphs the results. [`tools/amass.md`](tools/amass.md), 17 commands. Sections: Enumeration, Intelligence, Results.
- **Recon-ng** — A modular web-reconnaissance framework with a Metasploit-style console, a workspace database and marketplace modules. [`tools/recon-ng.md`](tools/recon-ng.md), 21 commands. Sections: Workspaces, Modules, Data, Reporting and automation.
- **SpiderFoot** — Automates OSINT collection across 200+ modules and correlates results about IPs, domains, emails, names and more, via CLI or web UI. [`tools/spiderfoot.md`](tools/spiderfoot.md), 14 commands. Sections: Web UI, Command-line scans, Reference.
- **theHarvester** — Gathers emails, names, subdomains, IPs and URLs about a domain from public sources like search engines and certificate logs. [`tools/theHarvester.md`](tools/theHarvester.md), 13 commands. Sections: Collecting, Active checks, Output.

### Internet Search Engines

- **Shodan CLI** — The command line for Shodan, the search engine for internet-connected devices: search banners, look up hosts and monitor networks. [`tools/shodan.md`](tools/shodan.md), 19 commands. Sections: Setup, Searching, Hosts and data, Scanning and alerts.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/osint. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/osint/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
