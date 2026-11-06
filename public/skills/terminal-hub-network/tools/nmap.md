# Nmap

> The standard network scanner: discovers hosts, open ports, running services and versions, operating systems, and runs NSE scripts for deeper checks.

- Category: Network
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/network/nmap
- Homepage: https://nmap.org
- Documentation: https://nmap.org/book/man.html
- Tags: port scanning, service detection, OS fingerprinting, NSE

## Install

- apt: `sudo apt install nmap`
- dnf: `sudo dnf install nmap`
- brew: `brew install nmap`
- windows: `winget install Insecure.Nmap`

## Host Discovery

### nmap 192.168.1.1

```bash
nmap 192.168.1.1
```

Scans a single IP address with default parameters.
Probes the top 1000 ports to identify active services on the target.

### nmap scanme.nmap.org

```bash
nmap scanme.nmap.org
```

Performs a scan using a domain hostname.
Automatically handles DNS resolution to find the target's IP address.

### nmap 192.168.1.1 192.168.1.2

```bash
nmap 192.168.1.1 192.168.1.2
```

Probes multiple specific IP addresses in one execution.
Useful for auditing a distinct subset of hosts within a larger network.

### nmap 192.168.1.1-50

```bash
nmap 192.168.1.1-50
```

Scans a contiguous range of IP addresses (1 through 50).
Efficiently audits a specific localized pool of network devices.

### nmap 192.168.1.0/24

```bash
nmap 192.168.1.0/24
```

Performs a scan on a full CIDR-defined subnet.
Enables systematic discovery of all devices sharing the same network segment.

### nmap -iL targets.txt

```bash
nmap -iL targets.txt
```

Loads a list of target IPs or domains from a text file (-iL).
Standardizes large-scale security assessments across non-contiguous networks.

### nmap -sn 192.168.1.0/24

```bash
nmap -sn 192.168.1.0/24
```

Conducts a Ping Sweep to detect live hosts (-sn).
Identifies active network entities without triggering port-level alerts.

### nmap -Pn 192.168.1.1

```bash
nmap -Pn 192.168.1.1
```

Skips host discovery and treats the target as online (-Pn).
Necessary for scanning hosts that block standard ICMP echo requests (ping).

### nmap -PS 192.168.1.1

```bash
nmap -PS 192.168.1.1
```

Performs a TCP SYN Ping discovery check (-PS).
Sends empty SYN packets to common ports to elicit a response from live hosts.

### nmap -PA 192.168.1.1

```bash
nmap -PA 192.168.1.1
```

Performs a TCP ACK Ping discovery check (-PA).
Elicits RST responses from hosts to confirm they are reachable through filters.

### nmap -PU 192.168.1.1

```bash
nmap -PU 192.168.1.1
```

Performs a UDP Ping discovery check (-PU).
Targets uncommon UDP ports to identify systems that may only respond to datagrams.

### nmap -PE 192.168.1.1

```bash
nmap -PE 192.168.1.1
```

Uses standard ICMP Echo Request packets for discovery (-PE).
Classic method for mapping network occupancy if ICMP is not restricted.

### nmap -n 192.168.1.1

```bash
nmap -n 192.168.1.1
```

Disables DNS name resolution for all targets (-n).
Significantly reduces scan completion time by only reporting IP addresses.

### nmap -R 192.168.1.1

```bash
nmap -R 192.168.1.1
```

Forces reverse DNS resolution for all IP addresses (-R).
Used to identify server roles and associations based on PTR records.

### nmap --traceroute 192.168.1.1

```bash
nmap --traceroute 192.168.1.1
```

Traces the network path to each target host (--traceroute).
Visualizes the intermediate hops and latency for each probe.


## Basic Scanning

### nmap -sS 192.168.1.1

```bash
nmap -sS 192.168.1.1
```

Performs a semi-open TCP SYN 'Stealth' scan (-sS).
Fast and relatively low-profile method for identifying active TCP services.

### nmap -sT 192.168.1.1

```bash
nmap -sT 192.168.1.1
```

Executes a full 3-way TCP Connect scan (-sT).
Uses the OS networking stack to establish connections, ensuring reliability.

### nmap -sU 192.168.1.1

```bash
nmap -sU 192.168.1.1
```

Checks for open User Datagram Protocol ports (-sU).
Identifies UDP-based services like DNS, DHCP, and SNMP.

### nmap -sY 192.168.1.1

```bash
nmap -sY 192.168.1.1
```

Performs a Stream Control Transmission Protocol (SCTP) INIT scan (-sY).
Targets specialized communication stacks often found in telephony and mobile networks.

### nmap -sO 192.168.1.1

```bash
nmap -sO 192.168.1.1
```

Conducts an raw IP Protocol scan (-sO).
Determines which protocols (beyond TCP/UDP) are supported by the target stack.


## Port Selection

### nmap -p 80 192.168.1.1

```bash
nmap -p 80 192.168.1.1
```

Probes a single specific port number.
Useful for targeted service availability checks on a known port (e.g., 80).

### nmap -p 80,443 192.168.1.1

```bash
nmap -p 80,443 192.168.1.1
```

Probes multiple explicitly defined ports.
Simultaneously audits several high-value services in a single task.

### nmap -p 1-100 192.168.1.1

```bash
nmap -p 1-100 192.168.1.1
```

Scans a sequential numerical range of ports.
Identifies all services within a specific standard or custom port block.

### nmap -p- 192.168.1.1

```bash
nmap -p- 192.168.1.1
```

Conducts a full audit of all 65,535 TCP ports (-p-).
Prevents missing non-standard services hidden on high-numbered ports.

### nmap -F 192.168.1.1

```bash
nmap -F 192.168.1.1
```

Enables Fast Mode to scan only the top 100 ports (-F).
Drastically reduces scan time while still identifying common entry points.

### nmap --top-ports 2000 192.168.1.1

```bash
nmap --top-ports 2000 192.168.1.1
```

Probes the top 2000 most statistically common ports.
Optimizes for high-probability discovery across a wide range of services.

### nmap -p U:53,T:21-25 192.168.1.1

```bash
nmap -p U:53,T:21-25 192.168.1.1
```

Combines UDP and TCP port groups in one execution.
Broadens discovery by auditing multiple protocols in a single scan pass.

### nmap -p http,https 192.168.1.1

```bash
nmap -p http,https 192.168.1.1
```

Audits ports based on recognized service names.
Makes scripts more readable by using protocol names like 'http' instead of numbers.


## Service and Version Detection

### nmap -sV 192.168.1.1

```bash
nmap -sV 192.168.1.1
```

Identifies the software and version of reachable services (-sV).
Essential for determining the exact vulnerability profile of each open port.

### nmap -sV --version-intensity 9 192.168.1.1

```bash
nmap -sV --version-intensity 9 192.168.1.1
```

Sets version detection to the highest intensity level (9).
Favors thoroughness and identification accuracy over speed.

### nmap -sV --version-light 192.168.1.1

```bash
nmap -sV --version-light 192.168.1.1
```

Configures a faster, lighter version detection intensity.
Provides a quick overview of server software without exhaustive probing.

### nmap -sV --version-all 192.168.1.1

```bash
nmap -sV --version-all 192.168.1.1
```

Exhaustively runs every probe for version identification.
Maximizes the possibility of fingerprinting obscured or non-standard services.


## OS Detection

### nmap -O 192.168.1.1

```bash
nmap -O 192.168.1.1
```

Attempts to identify the host Operating System (-O).
Fingerprints the network stack behavior to predict the target OS and version.

### nmap -O --osscan-guess 192.168.1.1

```bash
nmap -O --osscan-guess 192.168.1.1
```

Asks Nmap to guess the OS if results are ambiguous.
Enables aggressive probabilistic detection when a direct match is unavailable.

### nmap -O --max-os-tries 1 192.168.1.1

```bash
nmap -O --max-os-tries 1 192.168.1.1
```

Limits OS detection to a single attempt per host.
Acccelerates overall scan speed on large network ranges.


## Timing and Performance

### nmap -T0 192.168.1.1

```bash
nmap -T0 192.168.1.1
```

Paranoid timing template (T0) to evade IDS filters.
Executes extremely slowly to appear as normal background noise.

### nmap -T1 192.168.1.1

```bash
nmap -T1 192.168.1.1
```

Sneaky timing template (T1) optimized for stealth.
Slows packet delivery to minimize detection by perimeter security controls.

### nmap -T2 192.168.1.1

```bash
nmap -T2 192.168.1.1
```

Polite timing template (T2) to reduce system load.
Ensures low resource consumption and avoids overwhelming the target's bandwidth.

### nmap -T3 192.168.1.1

```bash
nmap -T3 192.168.1.1
```

Uses the default (Normal) timing template (T3).
Standard balance of scan speed and accuracy for regular auditing.

### nmap -T4 192.168.1.1

```bash
nmap -T4 192.168.1.1
```

Aggressive timing template (T4) for rapid execution.
Optimized for high-speed network environments where detection is less critical.

### nmap -T5 192.168.1.1

```bash
nmap -T5 192.168.1.1
```

Insane timing template (T5) for maximum throughput.
Extremely fast mode that may sacrifice accuracy or crash sensitive legacy hosts.

### nmap --min-rate 1000 192.168.1.1

```bash
nmap --min-rate 1000 192.168.1.1
```

Enforces a minimum packet transmission rate.
Prevents Nmap from slowing down too much on high-latency or busy links.

### nmap --max-retries 1 192.168.1.1

```bash
nmap --max-retries 1 192.168.1.1
```

Caps the number of probe retransmissions to one.
Reduces scan time by avoiding redundant attempts on non-responding ports.

### nmap --host-timeout 10m 192.168.1.1

```bash
nmap --host-timeout 10m 192.168.1.1
```

Abandons a target host after 10 minutes of probing.
Prevents a single slow-responding system from stalling a large network audit.


## Script Scanning (NSE)

### nmap -sC 192.168.1.1

```bash
nmap -sC 192.168.1.1
```

Executes the default suite of Nmap Scripting Engine (NSE) tasks (-sC).
Automates common discovery and security tests during scanning.

### nmap --script=banner 192.168.1.1

```bash
nmap --script=banner 192.168.1.1
```

Runs the specific 'banner' script to grab service headers.
Identifies server software identity strings immediately upon connection.

### nmap --script=http* 192.168.1.1

```bash
nmap --script=http* 192.168.1.1
```

Executes all scripts matching the 'http' wildcard pattern.
Automates deep discovery of web headers, paths, and configurations.


## Vulnerability Detection

### nmap --script=vuln 192.168.1.1

```bash
nmap --script=vuln 192.168.1.1
```

Runs a group of scripts designed for vulnerability identification.
Checks targets for common CVEs and security misconfigurations automatically.


## Authentication and Brute Force

### nmap --script=auth 192.168.1.1

```bash
nmap --script=auth 192.168.1.1
```

Executes authentication-related security scripts.
Tests for default credentials and common service authentication flaws.


## Advanced Scripting

### nmap --script-args user=admin,pass=123 192.168.1.1

```bash
nmap --script-args user=admin,pass=123 192.168.1.1
```

Passes custom credentials or parameters to execution scripts.
Enables deep authenticated auditing using known administrative information.


## Firewall and IDS Evasion

### nmap -f 192.168.1.1

```bash
nmap -f 192.168.1.1
```

Fragments IP packets into 8-byte chunks (-f).
Attempts to evade stateless firewalls that cannot reassemble small fragments.

### nmap --mtu 24 192.168.1.1

```bash
nmap --mtu 24 192.168.1.1
```

Fragments packets using a custom Maximum Transmission Unit (MTU).
Enables precise control over packet fragmentation for evasion testing.

### nmap -D RND:10 192.168.1.1

```bash
nmap -D RND:10 192.168.1.1
```

Injects 10 random decoy IP addresses to mask the scan source.
Makes it difficult for defenders to isolate the actual scanning host.

### nmap -S 192.168.1.200 -e eth0 192.168.1.1

```bash
nmap -S 192.168.1.200 -e eth0 192.168.1.1
```

Sets a custom source IP and interface for outgoing probes (-S).
Spoofs the identity of the scanner for network policy verification.

### nmap --source-port 53 192.168.1.1

```bash
nmap --source-port 53 192.168.1.1
```

Sets the source port to 53 (DNS).
Often used to bypass old firewall rules that trust traffic from well-known ports.

### nmap --data-length 25 192.168.1.1

```bash
nmap --data-length 25 192.168.1.1
```

Appends random data to outgoing scan packets.
Changes the packet size and signature to bypass basic payload analysis.

### nmap --randomize-hosts 192.168.1.0/24

```bash
nmap --randomize-hosts 192.168.1.0/24
```

Shuffles the order of target hosts during a range scan.
Reduces the probability of triggering simple sequential discovery alerts.

### nmap --badsum 192.168.1.1

```bash
nmap --badsum 192.168.1.1
```

Sends packets with deliberate invalid checksums.
Identifies firewalls and IDSs that drop packets containing checksum errors.


## Advanced and Combined Scans

### nmap -sN 192.168.1.1

```bash
nmap -sN 192.168.1.1
```

Executes a TCP Null scan by sending packets with no flags (-sN).
Trick designed to elicit unique responses from non-Windows stacks.

### nmap -sF 192.168.1.1

```bash
nmap -sF 192.168.1.1
```

Performs a TCP FIN scan by sending probe packets with the FIN flag (-sF).
Tests for standard stack behavior in response to closing signals.

### nmap -sX 192.168.1.1

```bash
nmap -sX 192.168.1.1
```

Executes a TCP Xmas scan with FIN, PSH, and URG flags set (-sX).
Probes host response to an illegal and highly distinct flag combination.

### nmap -sA 192.168.1.1

```bash
nmap -sA 192.168.1.1
```

Conducts a TCP ACK scan (-sA).
Specifically used to identify firewall filtering rules rather than open ports.

### nmap -A 192.168.1.1

```bash
nmap -A 192.168.1.1
```

Performs a deep Aggressive scan on the target (-A).
Consolidates OS/version detection, scripting, and traceroute in one step.


## Output and Reporting

### nmap -oN output.txt 192.168.1.1

```bash
nmap -oN output.txt 192.168.1.1
```

Saves findings in a normal human-readable text file (-oN).
Standard format for documenting audit results and manual review.

### nmap -oX output.xml 192.168.1.1

```bash
nmap -oX output.xml 192.168.1.1
```

Exports scan data to an XML file (-oX).
Generates structured results for consumption by post-processing or reporting tools.

### nmap -oG output.grep 192.168.1.1

```bash
nmap -oG output.grep 192.168.1.1
```

Exports data in a Grepable format for CLI processing (-oG).
Ideal for extracting host and port lists using standard linux search tools.

### nmap -oA scan_results 192.168.1.1

```bash
nmap -oA scan_results 192.168.1.1
```

Exports results in all three primary formats simultaneously (-oA).
Ensures data is available for both human review and automated analysis.

### nmap -v 192.168.1.1

```bash
nmap -v 192.168.1.1
```

Increases the detail level of console output (-v).
Provides real-time visibility into scan progress and discovered ports.

### nmap -vv 192.168.1.1

```bash
nmap -vv 192.168.1.1
```

Enables double-verbose output for maximal real-time info (-vv).
Displays every probe event and background task as it happens.

### nmap --reason 192.168.1.1

```bash
nmap --reason 192.168.1.1
```

Includes the reason for each port classification in the results.
Provides technical justification (e.g. 'syn-ack') for port status determinations.

### nmap --open 192.168.1.1

```bash
nmap --open 192.168.1.1
```

Filters output to show only open ports (--open).
Hides the noise of closed and filtered ports for clearer vulnerability mapping.

### nmap --packet-trace 192.168.1.1

```bash
nmap --packet-trace 192.168.1.1
```

Shows all sent and received packets during the scan session.
Essential diagnostic tool for debugging connection issues or firewall behavior.


## IPv6 Scanning

### nmap -6 2001:db8::1

```bash
nmap -6 2001:db8::1
```

Enables IPv6 transport for targeting modern addresses (-6).
Necessary for identifying security posture on next-generation IP infrastructure.


## Real world Penetration Testing Use Cases

### nmap -sS -sV -sC -oA full_scan 192.168.1.1

```bash
nmap -sS -sV -sC -oA full_scan 192.168.1.1
```

Executes a standard comprehensive initial pentest scan.
Combines stealth discovery, versioning, and default security scripts.

### nmap -sU -sS -p U:53,111,137,T:21-25,80,139,8080 192.168.1.1

```bash
nmap -sU -sS -p U:53,111,137,T:21-25,80,139,8080 192.168.1.1
```

Conducts a dual-protocol audit of critical administrative ports.
Simultaneously probes high-value TCP and UDP services for exposure.

### nmap -p 445 --script=smb-os-discovery 192.168.1.1

```bash
nmap -p 445 --script=smb-os-discovery 192.168.1.1
```

Specifically targets port 445 for SMB identification scripts.
Discovers hostname, server role, and precise Windows build numbers.

### nmap -p 80,443 --script=http-title,http-headers 192.168.1.1

```bash
nmap -p 80,443 --script=http-title,http-headers 192.168.1.1
```

Performs quick reconnaissance of web server identity strings.
Captures page titles and server headers for immediate application context.

### nmap -p 443 --script=ssl-enum-ciphers 192.168.1.1

```bash
nmap -p 443 --script=ssl-enum-ciphers 192.168.1.1
```

Enumerates available SSL/TLS cipher suites on port 443.
Identifies weak encryption algorithms or outdated protocol versions.

### nmap --script=smb-vuln* -p 445 192.168.1.1

```bash
nmap --script=smb-vuln* -p 445 192.168.1.1
```

Searches for common SMB-layer vulnerabilities like MS17-010.
Identifies critical patch deficiencies in Windows file sharing services.

### nmap -sV --script=vulners 192.168.1.1

```bash
nmap -sV --script=vulners 192.168.1.1
```

Uses external vulnerability datasets to map versions to CVEs.
Provides immediate context on known exploits for identified service versions.

### nmap --script=ftp-brute -p 21 192.168.1.1

```bash
nmap --script=ftp-brute -p 21 192.168.1.1
```

Attempts to brute-force FTP credentials on port 21.
Tests systems for weak or common passwords on file transfer services.

### nmap -sS -p- -T4 -v 192.168.1.1

```bash
nmap -sS -p- -T4 -v 192.168.1.1
```

Conducts a fast, full-range stealth scan with verbosity.
Rapidly uncovers every possible TCP listener across the entire port space.

### nmap -sn -PE -PP -PS21,22,23,80,3389 192.168.1.0/24

```bash
nmap -sn -PE -PP -PS21,22,23,80,3389 192.168.1.0/24
```

Runs a deep multi-method discovery sweep on a subnet.
Uses mixed probes to find hidden hosts that ignore standard ping requests.

### nmap --resume scan_results.gnmap

```bash
nmap --resume scan_results.gnmap
```

Resumes a previous scan task using its grepable output log.
Saves significant time when continuing an interrupted large-scale audit.

### nmap -sU -p 161 --script=snmp-info 192.168.1.1

```bash
nmap -sU -p 161 --script=snmp-info 192.168.1.1
```

Targets port 161 to extract system info via SNMP probes.
Identifies hardware, OS versions, and network roles of management interfaces.

## Related tools

- [Masscan](https://terminal.rokibulroni.com/tool/network/masscan)
- [RustScan](https://terminal.rokibulroni.com/tool/network/RustScan)
- [Naabu](https://terminal.rokibulroni.com/tool/network/naabu)
- [ZMap](https://terminal.rokibulroni.com/tool/network/ZMap)
