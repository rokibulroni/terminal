---
name: terminal-hub-network
description: "Copy-ready Network command reference (Port scanning, host discovery and network mapping) covering Nmap, Masscan, RustScan, Unicornscan, ZMap, Naabu, arp-scan, fping, hping3, netdiscover, amap, ike-scan, dig, whois, dnsrecon, netstat, ss, iperf3, p0f. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a network task from the terminal."
license: MIT
---

# Network commands

Find out what is alive on a network and what it is running. Start with host discovery, move to fast port sweeps, then fingerprint services in depth. Only scan networks you own or are explicitly authorised to test.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Port Scanners

- **Nmap** — The standard network scanner: discovers hosts, open ports, running services and versions, operating systems, and runs NSE scripts for deeper checks. [`tools/nmap.md`](tools/nmap.md), 85 commands. Sections: Host Discovery, Basic Scanning, Port Selection, Service and Version Detection, OS Detection, Timing and Performance, Script Scanning (NSE), Vulnerability Detection, +7 more.
- **Masscan** — An asynchronous TCP port scanner built for speed — it can sweep huge address ranges in minutes using its own TCP/IP stack. [`tools/masscan.md`](tools/masscan.md), 60 commands. Sections: Basic Scan, Port Selection, Rate Control, Output Formats, TCP and UDP Scanning, Excluding Targets, Interface Configuration, Source Configuration, +29 more.
- **RustScan** — A fast port scanner written in Rust that finds open ports in seconds and then hands them to Nmap for detailed service detection. [`tools/RustScan.md`](tools/RustScan.md), 45 commands. Sections: Basic Scan, Target Specification, Port Control, Port Ranges, Performance Tuning, Timeout Configuration, System Resource Tuning, Scanning Strategy, +15 more.
- **Unicornscan** — An asynchronous stateless scanner for TCP and UDP that correlates responses separately from sending probes, useful for large or UDP-heavy scans. [`tools/Unicornscan.md`](tools/Unicornscan.md), 60 commands. Sections: Basic Scan, Target and Port Specification, Verbosity and Output, Interface Control, UDP Scanning, Timing and Throttling, Packet Reliability, Source Spoofing, +22 more.
- **ZMap** — A single-packet network scanner designed to survey the entire IPv4 address space for one port at a time, used in internet-wide research. [`tools/ZMap.md`](tools/ZMap.md), 72 commands. Sections: Basic Scan, Scan Rate and Bandwidth Control, Network Interface Configuration, Source IP, MAC, and Gateway Configuration, Probe Modules, Output Modules and Output Fields, Allowlist and Blocklist Usage, Scan Duration and Cooldown Control, +14 more.
- **Naabu** — ProjectDiscovery’s fast port scanner (SYN/CONNECT) with host deduplication and easy piping into httpx and nuclei. [`tools/naabu.md`](tools/naabu.md), 45 commands. Sections: Basic Scanning, Target Specification, Port Selection, Top Ports, Excluding Hosts and Ports, Scan Rate and Performance, Timeout and Retries, Output Formats, +24 more.

### Host Discovery

- **arp-scan** — Discovers every device on the local network segment by sending ARP requests — finds hosts that ignore ping and identifies vendors by MAC. [`tools/arp-scan.md`](tools/arp-scan.md), 60 commands. Sections: Basic Scan, Target Specification, Interface Selection, Retry and Timeout, Output Formatting, Filtering, ARP Packet Customization, Advanced Features, +13 more.
- **fping** — Pings many hosts in parallel and reports which are alive — a faster, script-friendly alternative to looping over ping. [`tools/fping.md`](tools/fping.md), 30 commands. Sections: Basic Host Reachability, Multiple Hosts and CIDR Ranges, Input from File, Alive Host Detection, Unreachable Host Detection, Quiet and Summary Modes, Latency and Statistics Reporting, Packet Count and Interval Control, +11 more.
- **hping3** — A packet crafter for TCP, UDP and ICMP: test firewall rules, perform idle scans, trace paths with custom packets and measure latency. [`tools/hping3.md`](tools/hping3.md), 100 commands. Sections: Basic Connectivity, Basic ICMP, Basic UDP, Port Selection, Scanning Mode, TCP Flags, Packet Counting, Timing and Interval, +50 more.
- **netdiscover** — An active and passive ARP reconnaissance tool for finding live hosts on wireless or switched networks, especially those without DHCP. [`tools/netdiscover.md`](tools/netdiscover.md), 28 commands. Sections: Basic Network Discovery, Interface Selection, Target Range and CIDR Specification, Passive Scanning Mode, Timing and Scan Speed Control, Active Scanning Mode, Output Display and Logging, Quiet and Non Interactive Modes, +6 more.
- **amap** — An application-protocol mapper that identifies which service is really running on a port, even on non-standard ports. [`tools/amap.md`](tools/amap.md), 45 commands. Sections: Basic Service Fingerprinting, Target and Port Specification, Banner Grabbing, UDP Scanning, Protocol Specification, IPv6 Scanning, Scan Optimization, Verbose and Debug Modes, +15 more.
- **ike-scan** — Discovers and fingerprints IPsec VPN servers using IKE, and can capture aggressive-mode PSK hashes for offline cracking. [`tools/ike-scan.md`](tools/ike-scan.md), 30 commands. Sections: Basic IKE Discovery, Target and Range Specification, Aggressive Mode Scanning, Main Mode Scanning, Pre Shared Key Detection Techniques, Retry, Timeout, and Rate Control, Vendor ID and Device Fingerprinting, Transform and Proposal Enumeration, +10 more.

### DNS & WHOIS

- **dig** — The go-to DNS lookup tool: query any record type, pick the server, attempt zone transfers and trace resolution from the root — essential for recon. [`tools/dig.md`](tools/dig.md), 14 commands. Sections: Basic lookups, Recon, Troubleshooting.
- **whois** — Looks up registration records for domains, IP addresses and autonomous systems — ownership, dates and abuse contacts for attack-surface mapping. [`tools/whois.md`](tools/whois.md), 7 commands. Sections: Domains, IP addresses & networks.
- **dnsrecon** — A DNS enumeration script: record retrieval, zone transfers, subdomain brute forcing, reverse lookups, SRV discovery and certificate-log harvesting. [`tools/dnsrecon.md`](tools/dnsrecon.md), 10 commands. Sections: Standard enumeration, Brute forcing, Other modes.

### Network Analysis

- **netstat** — Shows network connections, listening ports, routing tables and interface statistics. Largely replaced by ss on Linux but still common everywhere. [`tools/netstat.md`](tools/netstat.md), 85 commands. Sections: Basic Network Status, Numerical and Resolved Output, TCP Connections, UDP Connections, UNIX Domain Sockets, Raw Sockets, Process and PID Association, Extended and Verbose Output, +14 more.
- **ss** — The modern Linux socket statistics tool: lists listening ports, established connections and the processes behind them, faster than netstat. [`tools/ss.md`](tools/ss.md), 100 commands. Sections: Basic Socket Listing, Numerical and Resolved Output, TCP Socket Inspection, UDP Socket Inspection, Raw Socket Inspection, Unix Socket Inspection, IPv4 and IPv6 Sockets, Listening Sockets, +16 more.
- **iperf3** — Measures maximum TCP and UDP throughput between two hosts — the standard tool for testing network bandwidth and link quality. [`tools/iperf.md`](tools/iperf.md), 75 commands. Sections: Basic Server, Basic Client, Format Control, Duration Control, UDP Testing, Direction Control, Parallel Streams, Interface Binding, +17 more.
- **p0f** — A passive OS fingerprinting tool that identifies operating systems and clients from traffic it observes, without sending any packets. [`tools/p0f.md`](tools/p0f.md), 55 commands. Sections: Basic Passive Monitoring, Offline PCAP Analysis, Logging and Output Files, Signature Database Usage, Socket and API Integration, Daemon and Background Mode, Security and Permissions, Performance and Resource Control, +12 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/network. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/network/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
