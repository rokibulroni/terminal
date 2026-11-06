---
name: terminal-hub
description: "Router for the Terminal command reference: 10,273 copy-ready terminal commands across 200 security, networking, forensics, cloud and Linux tools, plus step-by-step guides and a glossary. Use when the user asks how to run a command-line tool or perform a pentest, recon, forensics or sysadmin task and no more specific terminal-hub-* skill applies, or to look up a security term."
license: MIT
---

# Terminal command reference

Terminal (https://terminal.rokibulroni.com) is a free, MIT-licensed reference of 10,273 commands across 200 tools. Every command has a copy-ready form, an example and a plain-English explanation.

## How to use this skill

1. Find the category for the user’s task below. If the matching `terminal-hub-<category>` skill is installed, use it.
2. Otherwise fetch the tool’s Markdown directly: `https://terminal.rokibulroni.com/api/v1/tools/<category>/<slug>.md` (the tool list below gives both values).
3. For a guided, multi-step workflow, read the matching file in `reference/guides/`.
4. For definitions, read `reference/glossary.md`.
5. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
6. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

A remote MCP server with search is also available at `https://terminal.rokibulroni.com/mcp` (tools: search_commands, get_tool, list_categories, list_tools, list_guides, get_guide, define_term).

## Categories

| Category | Skill | Covers |
| --- | --- | --- |
| Network | `terminal-hub-network` | Port scanning, host discovery and network mapping. |
| Web | `terminal-hub-web` | Web application recon, content discovery and vulnerability scanning. |
| Enumeration | `terminal-hub-enumeration` | Service enumeration for SMB, LDAP, SNMP and NFS. |
| Exploitation | `terminal-hub-exploitation` | Exploit frameworks, C2, payload generation and exploit search. |
| Credentials | `terminal-hub-credentials` | Password cracking, online brute force and wordlist generation. |
| Lateral Movement | `terminal-hub-lateral` | Remote execution and movement between hosts. |
| Wireless | `terminal-hub-wireless` | Wi-Fi auditing, packet capture and WPA/WPS testing. |
| Forensics | `terminal-hub-forensics` | Memory analysis, disk forensics, carving and timelines. |
| Monitoring | `terminal-hub-monitoring` | IDS/IPS, endpoint telemetry and log-driven defence. |
| Cloud | `terminal-hub-cloud` | AWS, Azure and GCP CLIs plus Kubernetes and Docker security. |
| Traffic Analysis | `terminal-hub-traffic` | Packet capture, protocol analysis and traffic replay. |
| Utilities | `terminal-hub-utilities` | HTTP clients, socket tools, multiplexers and data wrangling. |
| OSINT | `terminal-hub-osint` | Open-source intelligence and external attack-surface recon. |
| Mobile | `terminal-hub-mobile` | Android debugging, APK reversing and runtime instrumentation. |
| Containers | `terminal-hub-containers` | Container image scanning and software bill of materials. |
| Reverse Engineering | `terminal-hub-reversing` | Debuggers, disassemblers and system-call tracing. |
| Linux | `terminal-hub-linux` | Core Linux commands for files, processes, packages and text. |
| IoT & Hardware | `terminal-hub-iot` | Raspberry Pi configuration, GPIO, I²C and camera tools. |
| Active Directory | `terminal-hub-active-directory` | Windows domain attacks: Kerberos, credentials, relaying and attack paths. |
| Pivoting & Tunneling | `terminal-hub-pivoting` | Proxies and tunnels for reaching internal networks through a foothold. |
| Crypto & Encoding | `terminal-hub-crypto` | TLS, certificates, encryption, signing and everyday encoding. |

## Tools by category

Format: `category/slug` — name: summary

### Network

- `network/nmap` — Nmap: The standard network scanner: discovers hosts, open ports, running services and versions, operating systems, and runs NSE scripts for deeper checks.
- `network/masscan` — Masscan: An asynchronous TCP port scanner built for speed — it can sweep huge address ranges in minutes using its own TCP/IP stack.
- `network/RustScan` — RustScan: A fast port scanner written in Rust that finds open ports in seconds and then hands them to Nmap for detailed service detection.
- `network/Unicornscan` — Unicornscan: An asynchronous stateless scanner for TCP and UDP that correlates responses separately from sending probes, useful for large or UDP-heavy scans.
- `network/ZMap` — ZMap: A single-packet network scanner designed to survey the entire IPv4 address space for one port at a time, used in internet-wide research.
- `network/naabu` — Naabu: ProjectDiscovery’s fast port scanner (SYN/CONNECT) with host deduplication and easy piping into httpx and nuclei.
- `network/arp-scan` — arp-scan: Discovers every device on the local network segment by sending ARP requests — finds hosts that ignore ping and identifies vendors by MAC.
- `network/fping` — fping: Pings many hosts in parallel and reports which are alive — a faster, script-friendly alternative to looping over ping.
- `network/hping3` — hping3: A packet crafter for TCP, UDP and ICMP: test firewall rules, perform idle scans, trace paths with custom packets and measure latency.
- `network/netdiscover` — netdiscover: An active and passive ARP reconnaissance tool for finding live hosts on wireless or switched networks, especially those without DHCP.
- `network/amap` — amap: An application-protocol mapper that identifies which service is really running on a port, even on non-standard ports.
- `network/ike-scan` — ike-scan: Discovers and fingerprints IPsec VPN servers using IKE, and can capture aggressive-mode PSK hashes for offline cracking.
- `network/dig` — dig: The go-to DNS lookup tool: query any record type, pick the server, attempt zone transfers and trace resolution from the root — essential for recon.
- `network/whois` — whois: Looks up registration records for domains, IP addresses and autonomous systems — ownership, dates and abuse contacts for attack-surface mapping.
- `network/dnsrecon` — dnsrecon: A DNS enumeration script: record retrieval, zone transfers, subdomain brute forcing, reverse lookups, SRV discovery and certificate-log harvesting.
- `network/netstat` — netstat: Shows network connections, listening ports, routing tables and interface statistics. Largely replaced by ss on Linux but still common everywhere.
- `network/ss` — ss: The modern Linux socket statistics tool: lists listening ports, established connections and the processes behind them, faster than netstat.
- `network/iperf` — iperf3: Measures maximum TCP and UDP throughput between two hosts — the standard tool for testing network bandwidth and link quality.
- `network/p0f` — p0f: A passive OS fingerprinting tool that identifies operating systems and clients from traffic it observes, without sending any packets.

### Web

- `web/ffuf` — ffuf: “Fuzz Faster U Fool” — a very fast web fuzzer for directories, parameters, virtual hosts and POST data, with flexible matching and filtering.
- `web/feroxbuster` — feroxbuster: A fast, recursive content-discovery tool in Rust: brute-force directories and files with rich filtering, recursion and resume support.
- `web/dirsearch` — dirsearch: A web path scanner that brute-forces directories and files with smart extension handling, recursion and filtering.
- `web/gobuster` — Gobuster: Brute-forces URIs, DNS subdomains, virtual hosts and cloud buckets. Simple, fast and written in Go.
- `web/wfuzz` — Wfuzz: A Python web fuzzer that replaces the FUZZ keyword in any part of a request — paths, parameters, headers or cookies — with payloads.
- `web/nikto` — Nikto: A web server scanner that checks for thousands of dangerous files, outdated software and common misconfigurations. Noisy by design.
- `web/nuclei` — Nuclei: A fast, template-based vulnerability scanner. Thousands of community YAML templates detect CVEs, misconfigurations and exposures.
- `web/wpscan` — WPScan: A WordPress security scanner that enumerates versions, plugins, themes and users and checks them against a vulnerability database.
- `web/sqlmap` — sqlmap: Automates detection and exploitation of SQL injection: fingerprints the database, extracts data and can reach the file system or OS.
- `web/xsser` — XSSer: An automated framework for detecting and exploiting cross-site scripting (XSS) vulnerabilities in web applications.
- `web/subfinder` — Subfinder: ProjectDiscovery’s fast passive subdomain enumeration tool, pulling from many sources and designed to slot into a recon pipeline.
- `web/dnsx` — dnsx: A fast, multi-purpose DNS toolkit from ProjectDiscovery: bulk resolution, record lookups, brute forcing and filtering, built for recon pipelines.
- `web/httpx` — httpx: ProjectDiscovery’s HTTP toolkit: probes lists of hosts for live web servers and reports status, title, technologies, TLS details and more.
- `web/katana` — Katana: A fast web crawler from ProjectDiscovery with standard and headless modes and JavaScript parsing, built to feed URLs into the rest of a testing pipeline.
- `web/gau` — gau: “GetAllUrls” — fetches known URLs for a domain from the Wayback Machine, Common Crawl, OTX and URLScan for passive recon.
- `web/waybackurls` — waybackurls: Pulls every URL the Wayback Machine has archived for a domain — a quick way to find old endpoints and parameters.
- `web/whatweb` — WhatWeb: Identifies the technologies behind a website — CMS, frameworks, server software, analytics and versions — using over 1,800 plugins.

### Enumeration

- `enumeration/enum4linux` — enum4linux: A wrapper around Samba tools that enumerates users, groups, shares, password policy and OS details from Windows and Samba hosts.
- `enumeration/nbtscan` — nbtscan: Scans networks for NetBIOS name information — hostnames, logged-in users and MAC addresses of Windows machines.
- `enumeration/rpcclient` — rpcclient: Samba’s MS-RPC client. Queries domain users, groups, password policies and SIDs over SMB, often with a null or low-privilege session.
- `enumeration/smbclient` — smbclient: An FTP-like client for SMB/CIFS shares: list shares, browse, upload and download files, with or without credentials.
- `enumeration/crackmapexec-enum` — CrackMapExec (enumeration): Using CrackMapExec/NetExec to enumerate SMB, LDAP, WinRM and MSSQL across a network: shares, users, sessions, policies and more.
- `enumeration/ldapsearch` — ldapsearch: The OpenLDAP query client. Dumps users, groups, computers and attributes from LDAP and Active Directory with precise filters.
- `enumeration/snmpcheck` — snmp-check: Enumerates SNMP devices and prints a readable report of system info, network interfaces, routes, processes and installed software.
- `enumeration/snmpwalk` — snmpwalk: Walks an SNMP agent’s MIB tree with GETNEXT requests, retrieving everything the community string exposes.
- `enumeration/nfs-showmount` — NFS enumeration: Enumerating and mounting NFS exports: list shares, check their access controls and mount them to inspect files and permissions.
- `enumeration/showmount` — showmount: Queries an NFS server’s mount daemon for exported directories and which clients may mount them.

### Exploitation

- `exploitation/metasploit` — Metasploit Framework: The most widely used exploitation framework: thousands of exploits, payloads and post-exploitation modules plus a workspace database.
- `exploitation/msfconsole` — msfconsole: The interactive console for Metasploit: search, configure and run modules, manage sessions and work with the database.
- `exploitation/sliver` — Sliver: An open-source, cross-platform command-and-control framework for adversary emulation, with mTLS, WireGuard, HTTP(S) and DNS implants.
- `exploitation/covenant` — Covenant: A collaborative .NET command-and-control framework with a web interface, built for red teams emulating adversaries.
- `exploitation/exploitdb` — Exploit-DB: The Exploit Database archive: public exploits and proof-of-concept code, searchable offline via its local copy.
- `exploitation/searchsploit` — SearchSploit: The command-line search for a local copy of Exploit-DB — find, examine and copy exploits by product, version or CVE.
- `exploitation/msfvenom` — msfvenom: Metasploit’s payload generator and encoder: builds shellcode, executables and scripts for many platforms and formats.
- `exploitation/setoolkit` — Social-Engineer Toolkit: A framework for authorised social-engineering tests: credential-harvesting pages, phishing campaigns and payload delivery.

### Credentials

- `credentials/hashcat` — Hashcat: The world’s fastest GPU password cracker: hundreds of hash types with dictionary, rule, mask and hybrid attack modes.
- `credentials/john` — John the Ripper: A versatile password cracker (use the “jumbo” build) with automatic hash detection and *2john helpers for files, archives and keys.
- `credentials/hydra` — Hydra: A fast, parallel online login brute-forcer supporting SSH, FTP, HTTP forms, SMB, RDP, databases and dozens more protocols.
- `credentials/medusa` — Medusa: A speedy, parallel, modular login brute-forcer — an alternative to Hydra with thread-per-host design.
- `credentials/ncrack` — Ncrack: Nmap project’s high-speed network authentication cracker for RDP, SSH, SMB, FTP and other services, with timing controls.
- `credentials/patator` — Patator: A modular, highly configurable multi-purpose brute-forcer with fine-grained control over responses and retries.
- `credentials/cewl` — CeWL: Spiders a website and builds a custom wordlist from the words it finds — great for targeted password guesses.
- `credentials/crunch` — Crunch: Generates wordlists from character sets and patterns — every combination of a given length, or a precise mask.
- `credentials/rsmangler` — RSMangler: Takes a wordlist and produces mangled variations — reversals, leetspeak, case changes, appended years — for password attacks.

### Lateral Movement

- `lateral/crackmapexec` — CrackMapExec / NetExec: The Swiss-army knife for Windows networks: spray credentials, execute commands and dump secrets across SMB, WinRM, LDAP and MSSQL. NetExec (nxc) is the maintained fork.
- `lateral/psexec` — PsExec: Running commands on remote Windows hosts via the Service Control Manager — Sysinternals PsExec and Impacket’s psexec.py.
- `lateral/smbexec` — smbexec: Impacket’s smbexec.py: a semi-interactive shell over SMB that creates a service per command instead of uploading a binary.
- `lateral/wmiexec` — wmiexec: Impacket’s wmiexec.py: a semi-interactive shell over DCOM/WMI that leaves fewer artefacts than service-based execution.
- `lateral/evil-winrm` — Evil-WinRM: The go-to WinRM shell for penetration testers: upload and download files, load PowerShell scripts and pass the hash.
- `lateral/winrm` — WinRM: Windows Remote Management from Linux and PowerShell: Enter-PSSession, Invoke-Command and service configuration.
- `lateral/rdp` — RDP clients: Connecting to Windows Remote Desktop from Linux with xfreerdp and rdesktop — including pass-the-hash, drive sharing and clipboard.
- `lateral/ssh` — SSH: OpenSSH: secure remote login, key management, file transfer and port forwarding — local, remote and dynamic SOCKS tunnels.

### Wireless

- `wireless/aircrack-ng` — Aircrack-ng: The core of the Aircrack-ng suite: cracks WEP keys and WPA/WPA2-PSK handshakes captured from Wi-Fi networks.
- `wireless/aireplay-ng` — aireplay-ng: Injects 802.11 frames: deauthentication, fake authentication and ARP replay to generate traffic or capture handshakes.
- `wireless/airmon-ng` — airmon-ng: Puts wireless interfaces into monitor mode and stops processes that would interfere with packet capture.
- `wireless/airodump-ng` — airodump-ng: Captures raw 802.11 frames and lists nearby access points and clients — the first step for handshake capture.
- `wireless/iw` — iw: The modern nl80211 tool for configuring Linux wireless devices: scan, set channels, switch modes and inspect capabilities.
- `wireless/iwconfig` — iwconfig: The legacy wireless-extensions tool for viewing and setting interface parameters like mode, channel and power. Prefer iw on modern systems.
- `wireless/hostapd` — hostapd: A user-space daemon that turns a wireless card into an access point — used for test networks and rogue-AP assessments.
- `wireless/bully` — Bully: A WPS brute-force tool written in C, an alternative to Reaver with improved handling of some access points.
- `wireless/reaver` — Reaver: Brute-forces WPS PINs to recover WPA/WPA2 passphrases from access points with vulnerable WPS implementations.

### Forensics

- `forensics/volatility` — Volatility 2: The original Python 2 memory-forensics framework using profiles. Superseded by Volatility 3 but still found in older workflows and courses.
- `forensics/volatility3` — Volatility 3: The current memory-forensics framework: analyse RAM images from Windows, Linux and macOS for processes, network connections, injected code and more.
- `forensics/binwalk` — Binwalk: Analyses and extracts firmware images: finds embedded file systems, compressed data and executable code by signature and entropy.
- `forensics/foremost` — Foremost: Recovers files from disk images and raw data by carving their headers and footers, even without a file system.
- `forensics/sleuthkit` — The Sleuth Kit: Command-line tools for analysing disk images and file systems: list files, recover deleted ones and build timelines.
- `forensics/bulk-extractor` — bulk_extractor: Scans disk images and files for email addresses, URLs, credit-card numbers and other features without parsing the file system.
- `forensics/autopsy` — Autopsy: A graphical digital-forensics platform built on The Sleuth Kit for disk image analysis, timelines, keyword search and file recovery.
- `forensics/plaso` — Plaso (log2timeline): Extracts timestamps from hundreds of artefact types and builds a “super timeline” for forensic investigation.
- `forensics/exiftool` — ExifTool: Reads, writes and strips metadata in images, documents, audio and video — invaluable for OSINT and forensics.
- `forensics/strings` — strings: Prints sequences of printable characters from binary files — a fast first look at executables, memory dumps and unknown data.

### Monitoring

- `monitoring/snort` — Snort: A network intrusion detection and prevention system that inspects traffic in real time against a rule language.
- `monitoring/suricata` — Suricata: A high-performance, multi-threaded IDS/IPS and network security monitoring engine with EVE JSON logging.
- `monitoring/zeek` — Zeek: A network security monitor that turns traffic into rich, structured logs of connections, DNS, HTTP, TLS and files.
- `monitoring/auditd` — auditd: The Linux Audit daemon: records system calls, file access and command execution according to rules, for compliance and detection.
- `monitoring/osquery` — osquery: Exposes the operating system as a SQL database: query processes, users, ports, packages and more across Linux, macOS and Windows.
- `monitoring/sysmon` — Sysmon: Microsoft Sysinternals System Monitor: logs process creation, network connections, file changes and more to the Windows (and Linux) event log.
- `monitoring/wazuh-agent` — Wazuh agent: The endpoint agent for the open-source Wazuh SIEM/XDR: log collection, file-integrity monitoring and vulnerability detection.
- `monitoring/fail2ban` — Fail2ban: Watches log files for repeated failures — SSH, web logins, mail — and bans offending IPs with firewall rules.

### Cloud

- `cloud/awscli` — AWS CLI: Amazon’s official command line for AWS: manage IAM, S3, EC2, Lambda and every other service, and audit an account’s configuration.
- `cloud/az-cli` — Azure CLI: Microsoft’s cross-platform CLI for Azure: manage subscriptions, Entra ID, VMs, storage and networking, and review security posture.
- `cloud/gcloud` — Google Cloud CLI: The gcloud CLI for Google Cloud: manage projects, IAM, Compute Engine, GKE and storage from the terminal.
- `cloud/kube-bench` — kube-bench: Checks whether a Kubernetes cluster is deployed securely by running the CIS Kubernetes Benchmark tests against nodes and control plane.
- `cloud/kube-hunter` — kube-hunter: Hunts for security weaknesses in Kubernetes clusters from inside or outside, reporting exposed components and known issues. Archived upstream but still informative.
- `cloud/kubectl` — kubectl: The Kubernetes command line: inspect and manage clusters, workloads, RBAC and secrets — and check what an identity is allowed to do.
- `cloud/docker-bench-security` — Docker Bench for Security: A script that checks a Docker host against dozens of CIS Docker Benchmark best practices for production deployments.
- `cloud/docker` — Docker: The Docker CLI: build, run and inspect containers and images, and audit their configuration, mounts, capabilities and networks.
- `containers/trivy` — Trivy: Aqua’s all-in-one scanner for vulnerabilities, misconfigurations, secrets and licenses in container images, filesystems, repositories, IaC and Kubernetes.

### Traffic Analysis

- `traffic/TCPDump` — tcpdump: The classic packet capture tool: capture and filter traffic with BPF expressions and write it to pcap files for later analysis.
- `traffic/tshark` — TShark: Wireshark’s terminal version: capture and decode traffic with full dissectors and display filters, and extract fields to text.
- `traffic/wireshark-cli` — Wireshark CLI tools: The utilities that ship with Wireshark — editcap, mergecap, capinfos, dumpcap and text2pcap — for working with capture files.
- `traffic/netsniff-ng` — netsniff-ng: A high-performance Linux networking toolkit using zero-copy packet mmap: capture, replay, traffic generation and analysis.
- `traffic/ngrep` — ngrep: “Network grep” — matches regular expressions against packet payloads, like grep for network traffic.
- `traffic/tcpreplay` — Tcpreplay: Replays captured pcap traffic onto a network at chosen speeds — useful for testing IDS rules and network devices.
- `traffic/ettercap` — Ettercap: A suite for man-in-the-middle attacks on LANs: ARP poisoning, sniffing and content filtering, for authorised testing.
- `traffic/sniffit` — Sniffit: A legacy packet sniffer with an interactive ncurses mode for watching TCP sessions in real time.

### Utilities

- `utilities/Netcat` — Netcat: The TCP/IP Swiss-army knife: connect to and listen on ports, transfer files, banner-grab and catch reverse shells.
- `utilities/curl` — curl: Transfers data with URLs over HTTP, FTP and many other protocols. Indispensable for testing APIs, headers and authentication.
- `utilities/httpie` — HTTPie: A human-friendly HTTP client with intuitive syntax, JSON support and coloured output — great for exploring APIs.
- `utilities/socat` — socat: A bidirectional data relay between almost any two endpoints — sockets, files, pipes, TLS — ideal for port forwarding and stable shells.
- `utilities/wget` — Wget: A non-interactive downloader for HTTP, HTTPS and FTP that can resume, retry and mirror entire websites recursively.
- `utilities/screen` — GNU Screen: The original terminal multiplexer: detachable sessions, multiple windows and serial-console access.
- `utilities/tmux` — tmux: A terminal multiplexer: split windows into panes, keep sessions alive after disconnect and script complex layouts.
- `utilities/watch` — watch: Runs a command repeatedly and shows its output full-screen, highlighting what changes between runs.
- `utilities/jq` — jq: A lightweight command-line JSON processor: filter, transform and pretty-print JSON from APIs, logs and tool output.
- `utilities/xargs` — xargs: Builds and runs command lines from standard input — the glue for batch operations and parallel jobs in pipelines.

### OSINT

- `osint/amass` — OWASP Amass: In-depth attack-surface mapping: discovers subdomains through passive sources, DNS brute-forcing and permutation, and graphs the results.
- `osint/recon-ng` — Recon-ng: A modular web-reconnaissance framework with a Metasploit-style console, a workspace database and marketplace modules.
- `osint/spiderfoot` — SpiderFoot: Automates OSINT collection across 200+ modules and correlates results about IPs, domains, emails, names and more, via CLI or web UI.
- `osint/theHarvester` — theHarvester: Gathers emails, names, subdomains, IPs and URLs about a domain from public sources like search engines and certificate logs.
- `osint/shodan` — Shodan CLI: The command line for Shodan, the search engine for internet-connected devices: search banners, look up hosts and monitor networks.

### Mobile

- `mobile/adb` — ADB: Android Debug Bridge: install apps, open a shell, pull files, forward ports and read logs on Android devices and emulators.
- `mobile/apktool` — Apktool: Decodes Android APKs to near-original resources and smali code, and rebuilds them after modification.
- `mobile/frida` — Frida: A dynamic instrumentation toolkit: inject JavaScript into running processes on Android, iOS, Windows, macOS and Linux to trace and modify behaviour.
- `mobile/objection` — objection: A runtime mobile-exploration toolkit powered by Frida: bypass SSL pinning, explore the file system and dump keychains without a jailbreak.
- `mobile/drozer` — drozer: A security-testing framework for Android that interacts with app components — activities, providers, services — over IPC to find weaknesses.

### Containers

- `containers/trivy` — Trivy: Aqua’s all-in-one scanner for vulnerabilities, misconfigurations, secrets and licenses in container images, filesystems, repositories, IaC and Kubernetes.
- `containers/grype` — Grype: Anchore’s vulnerability scanner for container images and filesystems; pairs naturally with Syft SBOMs.
- `containers/clair` — Clair: An open-source service for static analysis of vulnerabilities in container images, typically used with registries via clairctl.
- `containers/syft` — Syft: Generates a software bill of materials (SBOM) from container images and filesystems in SPDX, CycloneDX and other formats.

### Reverse Engineering

- `reversing/gdb` — GDB: The GNU Debugger: set breakpoints, step through code, inspect memory and registers. Pair with GEF or pwndbg for exploit development.
- `reversing/strace` — strace: Traces the system calls and signals of a process — see which files it opens, what it sends and why it fails.
- `reversing/ghidra` — Ghidra: The NSA’s open-source reverse-engineering suite with a powerful decompiler; scriptable headless analysis from the command line.
- `reversing/objdump` — objdump: Displays information about object files: headers, sections, symbols and disassembly. Part of GNU binutils.
- `reversing/radare2` — radare2: A complete command-line reverse-engineering framework: disassemble, debug, patch and analyse binaries for many architectures.

### Linux

- `linux/ls` — ls: Lists directory contents with sizes, permissions, owners, timestamps and hidden files.
- `linux/cd` — cd: The shell built-in that changes the current directory, including shortcuts for home, previous and parent directories.
- `linux/pwd` — pwd: Prints the full path of the current working directory, optionally resolving symbolic links.
- `linux/cp` — cp: Copies files and directories, preserving attributes when asked.
- `linux/mv` — mv: Moves or renames files and directories.
- `linux/rm` — rm: Removes files and directories. There is no recycle bin — deletion is immediate.
- `linux/mkdir` — mkdir: Creates directories, including parent paths and with specific permissions.
- `linux/chmod` — chmod: Changes file permissions using symbolic or octal modes, including setuid, setgid and sticky bits.
- `linux/chown` — chown: Changes the owner and group of files and directories.
- `linux/tar` — tar: Creates and extracts archives, with gzip, bzip2, xz or zstd compression.
- `linux/cat` — cat: Concatenates files and prints them to standard output — view, combine and create files.
- `linux/less` — less: A pager for viewing large files and command output one screen at a time, with search and follow mode.
- `linux/head` — head: Prints the first lines or bytes of files — quick previews of logs and data.
- `linux/tail` — tail: Prints the last lines of files and follows them as they grow — the standard way to watch logs.
- `linux/grep` — grep: Searches text for lines matching a pattern, with regular expressions, recursion and context.
- `linux/find` — find: Searches the directory tree by name, type, size, time, owner or permissions — and runs actions on matches.
- `linux/awk` — awk: A pattern-scanning language for column-based text: extract fields, compute totals and reformat output.
- `linux/sed` — sed: A stream editor for filtering and transforming text: substitutions, deletions and in-place file edits.
- `linux/cut` — cut: Extracts columns, fields or characters from each line of input.
- `linux/sort` — sort: Sorts lines of text alphabetically, numerically, by field or by human-readable size.
- `linux/uniq` — uniq: Filters or counts adjacent duplicate lines — usually paired with sort.
- `linux/wc` — wc: Counts lines, words, characters and bytes in files or input.
- `linux/ps` — ps: Reports a snapshot of running processes, with owners, resource usage and full command lines.
- `linux/top` — top: A live, sortable view of processes and system load, CPU and memory.
- `linux/kill` — kill: Sends signals to processes — terminate gracefully, force-kill, reload or pause.
- `linux/systemctl` — systemctl: Controls systemd: start, stop, enable and inspect services, timers and the boot target.
- `linux/journalctl` — journalctl: Queries the systemd journal: logs by service, boot, time range, priority and more.
- `linux/df` — df: Reports free and used disk space on mounted file systems.
- `linux/du` — du: Estimates how much space files and directories use — find what is filling a disk.
- `linux/free` — free: Shows total, used and available memory and swap.
- `linux/whoami` — whoami: Prints the effective user name — the first question after landing a shell.
- `linux/su` — su: Switches to another user (root by default) in a new shell, optionally as a login shell or for a single command.
- `linux/history` — history: The shell built-in that lists, searches and re-runs previous commands, and manages the history file.
- `linux/ip` — ip: The iproute2 tool for addresses, links, routes, neighbours and network namespaces — the modern replacement for ifconfig and route.
- `linux/ping` — ping: Sends ICMP echo requests to test reachability and measure round-trip time.
- `linux/apt` — APT: Debian and Ubuntu’s package manager: install, update, search and remove software and inspect package sources.
- `linux/dnf` — DNF: The package manager for Fedora, RHEL and derivatives: install, update, query and roll back packages.
- `linux/pacman` — pacman: Arch Linux’s package manager: sync, install, upgrade, query and clean packages.

### IoT & Hardware

- `iot/raspi-config` — raspi-config: The Raspberry Pi configuration tool, interactive or scriptable: enable interfaces, set locale, expand storage and tune boot options.
- `iot/vcgencmd` — vcgencmd: Queries the Raspberry Pi’s VideoCore firmware: temperature, clock speeds, voltages, throttling state and memory split.
- `iot/gpio` — GPIO tools: Reading and driving Raspberry Pi GPIO pins from the shell using pinctrl and the libgpiod utilities (gpiodetect, gpioget, gpioset).
- `iot/i2c-tools` — i2c-tools: Utilities to detect, read and write devices on an I²C bus: i2cdetect, i2cget, i2cset and i2cdump.
- `iot/libcamera` — libcamera apps: Capture stills and video from Raspberry Pi camera modules with rpicam-still, rpicam-vid and friends (formerly libcamera-*).

### Active Directory

- `active-directory/impacket` — Impacket: A collection of Python classes and ready-made scripts for Windows network protocols (SMB, MS-RPC, Kerberos, LDAP) — the backbone of modern Active Directory exploitation.
- `lateral/crackmapexec` — CrackMapExec / NetExec: The Swiss-army knife for Windows networks: spray credentials, execute commands and dump secrets across SMB, WinRM, LDAP and MSSQL. NetExec (nxc) is the maintained fork.
- `active-directory/kerbrute` — Kerbrute: A fast Go tool for Kerberos pre-authentication: username enumeration and password spraying against a domain controller, with no Windows event 4625 noise.
- `active-directory/certipy` — Certipy: A tool for enumerating and abusing Active Directory Certificate Services (AD CS) — vulnerable templates, certificate theft and shadow credentials.
- `active-directory/mimikatz` — Mimikatz: The classic Windows post-exploitation tool for extracting plaintext passwords, hashes and Kerberos tickets from memory, and for pass-the-hash, pass-the-ticket and golden-ticket attacks.
- `active-directory/rubeus` — Rubeus: A C# toolset for raw Kerberos interaction and abuse on Windows: ticket requests, Kerberoasting, AS-REP roasting, pass-the-ticket and delegation attacks.
- `active-directory/bloodhound-python` — BloodHound.py: A Python ingestor for BloodHound that collects Active Directory objects, ACLs and sessions from Linux, revealing attack paths to high-value targets.
- `active-directory/responder` — Responder: An LLMNR, NBT-NS and mDNS poisoner that captures Windows authentication hashes on a local network, and a staging ground for NTLM relay attacks.

### Pivoting & Tunneling

- `pivoting/chisel` — Chisel: A fast TCP/UDP tunnel over HTTP secured with SSH, in a single Go binary — used to build SOCKS proxies and port forwards through firewalls during pivoting.
- `pivoting/ligolo-ng` — Ligolo-ng: A modern tunneling tool that exposes internal networks through a lightweight TUN interface — pivot without proxychains, using normal routing.
- `pivoting/sshuttle` — sshuttle: A transparent proxy that tunnels a whole subnet over a plain SSH connection, with DNS support and no special software on the remote host.
- `pivoting/proxychains` — ProxyChains-NG: Forces any program’s TCP traffic through a chain of SOCKS or HTTP proxies — the standard way to run tools across a SOCKS pivot.

### Crypto & Encoding

- `crypto/openssl` — OpenSSL: The ubiquitous toolkit for TLS and general cryptography: inspect certificates, generate keys and CSRs, convert formats, hash, encrypt and create random secrets.
- `crypto/gpg` — GnuPG: The free implementation of OpenPGP: generate keys, encrypt and decrypt files, and create and verify digital signatures — used everywhere from email to release verification.
- `crypto/base64` — base64: Encodes and decodes Base64, the standard way to carry binary data over text channels — common in tokens, config files and shell file-transfer tricks.

## Guides

- [Network recon from zero](reference/guides/network-recon-from-zero.md) — Go from a single IP range to a map of live hosts, open ports and running services. (Beginner, ~20 min)
- [Web application enumeration](reference/guides/web-app-enumeration.md) — Map a web application’s surface: technologies, hidden content, parameters and obvious vulnerability classes. (Intermediate, ~25 min)
- [Linux privilege-escalation checklist](reference/guides/linux-privilege-escalation-checklist.md) — A methodical local enumeration pass to find the path from a low-privilege shell to root. (Intermediate, ~20 min)
- [Active Directory enumeration](reference/guides/active-directory-enumeration.md) — From valid domain credentials to a map of users, groups and attack paths toward Domain Admin. (Advanced, ~30 min)
- [Incident triage on Linux](reference/guides/linux-incident-triage.md) — First-response enumeration on a possibly compromised Linux host, without destroying evidence. (Intermediate, ~25 min)
- [Wi-Fi assessment basics](reference/guides/wifi-assessment.md) — Capture a WPA2 handshake and audit the passphrase — the core workflow of a wireless assessment. (Intermediate, ~20 min)
