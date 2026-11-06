# Network recon from zero

> Go from a single IP range to a map of live hosts, open ports and running services.

- Level: Beginner
- Time: ~20 minutes
- Tags: recon, scanning, network, nmap
- Page: https://terminal.rokibulroni.com/guide/network-recon-from-zero
- Updated: 2026-11-06

You have been given a network range and permission to test it. This walkthrough takes you from nothing to a clear picture of what is alive and what it is running, in the order an experienced tester would work. Only scan networks you own or are explicitly authorised to assess.

## Prerequisites

- An in-scope IP address or CIDR range
- A Linux box with nmap installed
- Written authorisation for the target

## 1. Find the live hosts

Before port scanning, work out which addresses respond. A quick ARP sweep on a local segment, or an nmap ping sweep across a routed range, saves you from scanning dead space.

Tool: [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md)

```bash
nmap -sn 10.10.10.0/24 -oA hosts
```

Ping sweep; no port scan. Writes results in all formats.

```bash
arp-scan -l
```

Layer-2 discovery on the local segment — finds hosts that ignore ping.

## 2. Fast sweep for open ports

Scan the live hosts quickly to see which ports are open before spending time on detailed probes. A fast scanner like RustScan or masscan finds the ports; nmap then investigates them.

Tool: [RustScan](https://terminal.rokibulroni.com/api/v1/tools/network/RustScan.md)

```bash
rustscan -a 10.10.10.5 --range 1-65535 -- -sV
```

RustScan finds open ports, then hands them to nmap for service detection.

```bash
masscan 10.10.10.0/24 -p1-65535 --rate 1000 -oL masscan.txt
```

Sweep a whole range fast; tune the rate to the network.

## 3. Fingerprint the services

For each open port, identify the service, version and — where useful — the operating system. Version detail drives everything that follows, from exploit search to default-credential checks.

Tool: [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md)

```bash
nmap -sV -sC -p 22,80,443,445 10.10.10.5 -oA services
```

Version detection plus the default safe scripts on the ports you found.

```bash
nmap -sV -p- --min-rate 1000 10.10.10.5
```

A thorough all-ports version scan when time allows.

## 4. Enumerate the interesting services

Turn versions into findings. Web servers, SMB and SNMP each have dedicated enumeration tools that pull out far more than a port scan.

Tool: [WhatWeb](https://terminal.rokibulroni.com/api/v1/tools/web/whatweb.md)

```bash
whatweb http://10.10.10.5
```

Identify the web stack and versions.

```bash
enum4linux -a 10.10.10.5
```

Users, shares and policy from SMB.

## 5. Record and prioritise

Keep your output in a consistent format so nothing is lost and you can diff later. Prioritise by exposure and known vulnerabilities, not by port number.

Tool: [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md)

```bash
nmap --script vuln -p 80,443 10.10.10.5
```

Check for widely known issues on the web ports.

## Wrap-up

From here, each live service becomes its own thread: web apps lead into the web-app enumeration guide, SMB and LDAP into enumeration tooling, and version numbers into searchsploit and nuclei. Keep everything scoped and logged.
