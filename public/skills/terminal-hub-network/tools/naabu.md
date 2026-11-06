# Naabu

> ProjectDiscovery’s fast port scanner (SYN/CONNECT) with host deduplication and easy piping into httpx and nuclei.

- Category: Network
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/network/naabu
- Homepage: https://github.com/projectdiscovery/naabu
- Documentation: https://docs.projectdiscovery.io/tools/naabu/overview
- Tags: port scanning, recon pipeline, ProjectDiscovery

## Install

- apt: `sudo apt install naabu`
- go: `go install -v github.com/projectdiscovery/naabu/v2/cmd/naabu@latest`
- docker: `docker run -it --rm projectdiscovery/naabu -host <target>`

## Basic Scanning

### naabu -host 192.168.1.1

```bash
naabu -host 192.168.1.1
```

Performs a default TCP scan against a single IP target.
Provides a fast and effective way to identify common open ports.

### naabu -host scanme.nmap.org

```bash
naabu -host scanme.nmap.org
```

Scans a domain name for available TCP services.
Automatically resolves the target to its IP addresses before probing.


## Target Specification

### naabu -host 10.10.10.0/24

```bash
naabu -host 10.10.10.0/24
```

Scans an entire CIDR subnet range for open ports.
Enables rapid service discovery across local or remote network segments.

### naabu -list hosts.txt

```bash
naabu -list hosts.txt
```

Loads target lists from an external text file (-list).
Processes multiple hosts or ranges in a single automated scan run.


## Port Selection

### naabu -host 192.168.1.1 -p 80

```bash
naabu -host 192.168.1.1 -p 80
```

Explicitly scans a single specified port on the target.
Useful for targeted checks of a specific service like HTTP or SSH.

### naabu -host 192.168.1.1 -p 80,443,8080

```bash
naabu -host 192.168.1.1 -p 80,443,8080
```

Scans a custom list of comma-separated ports.
Provides granular control over which services are probed for availability.

### naabu -host 192.168.1.1 -p 1-1000

```bash
naabu -host 192.168.1.1 -p 1-1000
```

Scans a range of ports from 1 to 1000 inclusively.
Identifies most common system and service ports on the target.

### naabu -host 192.168.1.1 -p -

```bash
naabu -host 192.168.1.1 -p -
```

Performs a comprehensive scan of all 65,535 TCP ports.
Ensures complete visibility of all services running on the target host.


## Top Ports

### naabu -host 192.168.1.1 -top-ports 100

```bash
naabu -host 192.168.1.1 -top-ports 100
```

Scans the 100 most statistically common ports.
Prioritizes high-value service discovery to optimize scan time.

### naabu -host 192.168.1.1 -top-ports 1000

```bash
naabu -host 192.168.1.1 -top-ports 1000
```

Scans the 1000 most common network ports.
Provides a baseline survey of services using standard port mappings.


## Excluding Hosts and Ports

### naabu -host 192.168.1.1 -exclude-ports 80,443

```bash
naabu -host 192.168.1.1 -exclude-ports 80,443
```

Excludes specific ports from the scan session.
Prevents interference with sensitive services or known restricted ports.

### naabu -host 192.168.1.0/24 -exclude-hosts 192.168.1.5

```bash
naabu -host 192.168.1.0/24 -exclude-hosts 192.168.1.5
```

Excludes specific host IPs from a larger range scan.
Ensures critical systems are bypassed during automated network audits.


## Scan Rate and Performance

### naabu -host 192.168.1.1 -rate 100

```bash
naabu -host 192.168.1.1 -rate 100
```

Throttles the scan to 100 packets per second (-rate).
Balances reconnaissance speed with network stability and stealth.

### naabu -host 192.168.1.1 -c 50

```bash
naabu -host 192.168.1.1 -c 50
```

Sets concurrency to 50 simultaneous worker threads (-c).
Accelerates large-scale scans by processing multiple ports in parallel.


## Timeout and Retries

### naabu -host 192.168.1.1 -timeout 2000

```bash
naabu -host 192.168.1.1 -timeout 2000
```

Sets probe timeout to 2 seconds per port (-timeout).
Adjusts tool sensitivity for high-latency or slow-responding networks.

### naabu -host 192.168.1.1 -retries 3

```bash
naabu -host 192.168.1.1 -retries 3
```

Retries failed port probes up to 3 times.
Ensures reliable service detection on lossy or congested network links.

### naabu -host 192.168.1.1 -warm-up-time 5

```bash
naabu -host 192.168.1.1 -warm-up-time 5
```

Adds a 5-second warm-up delay before scanning.
Allows the network stack and connection to stabilize before traffic peaks.


## Output Formats

### naabu -host 192.168.1.1 -o output.txt

```bash
naabu -host 192.168.1.1 -o output.txt
```

Saves findings to a simple text output file (-o).
Provides a clear log of identified open ports for documentation.


## JSON Output

### naabu -host 192.168.1.1 -json -o results.json

```bash
naabu -host 192.168.1.1 -json -o results.json
```

Generates structured JSON output saved to a file.
Ideal for integration with post-processing scripts and security dashboards.


## Silent and Minimal Output

### naabu -host 192.168.1.1 -silent

```bash
naabu -host 192.168.1.1 -silent
```

Suppresses standard tool banners and progress indicators.
Outputs only the raw port data, perfect for command-line pipes.


## Verbose and Debug

### naabu -host 192.168.1.1 -v

```bash
naabu -host 192.168.1.1 -v
```

Enables verbose output for detailed execution tracking (-v).
Displays real-time status and information about individual probe attempts.

### naabu -host 192.168.1.1 -no-color

```bash
naabu -host 192.168.1.1 -no-color
```

Disables colored text in the terminal output.
Ensures clean, readable logs when results are redirected to files or pipes.


## Output Formats

### naabu -host 192.168.1.1 -csv

```bash
naabu -host 192.168.1.1 -csv
```

Outputs scan results in CSV format.
Enables easy data import into spreadsheet software for reporting.


## Interface Configuration

### naabu -host 192.168.1.1 -interface eth0

```bash
naabu -host 192.168.1.1 -interface eth0
```

Binds the scan to a specific network interface adapter.
Forces traffic through the correct logical or physical connection point.


## Source IP Configuration

### naabu -host 192.168.1.1 -source-ip 192.168.1.5

```bash
naabu -host 192.168.1.1 -source-ip 192.168.1.5
```

Sets a specific source IP address for outgoing probes.
Controls the originating identity of the scan for advanced network testing.


## Firewall Friendly Scanning

### naabu -host 192.168.1.1 -source-port 53

```bash
naabu -host 192.168.1.1 -source-port 53
```

Configures a specific source port for discovery packets.
Mimics legitimate traffic types like DNS (53) to test ingress filters.


## Verification

### naabu -host 192.168.1.1 -verify

```bash
naabu -host 192.168.1.1 -verify
```

Validates open ports with a secondary verification check.
Significantly reduces false positive rates in dynamic environments.


## Host Discovery

### naabu -host 10.10.10.0/24 -ping

```bash
naabu -host 10.10.10.0/24 -ping
```

Performs host discovery to identify live systems before scanning.
Conserves resources by only probing ports on reachable network entities.


## Integration with Nmap

### naabu -host 192.168.1.1 -nmap-cli 'nmap -sV'

```bash
naabu -host 192.168.1.1 -nmap-cli 'nmap -sV'
```

Pipes identified open ports to Nmap for service versioning.
Provides a bridge between high-speed discovery and deep inspection.

### naabu -host 192.168.1.1 -nmap-cli 'nmap -O -sC'

```bash
naabu -host 192.168.1.1 -nmap-cli 'nmap -O -sC'
```

Runs Nmap OS detection and vulnerability scripts on found ports.
Combines Naabu's scanning speed with Nmap's powerful scripting engine.


## IPv6 Scanning

### naabu -host ::1 -ipv6

```bash
naabu -host ::1 -ipv6
```

Enables IPv6 transport mode for the scan session.
Required for auditing services available on modern IPv6 addresses.


## DNS and IP Handling

### naabu -host example.com -scan-all-ips

```bash
naabu -host example.com -scan-all-ips
```

Scans all resolved IP addresses for a given hostname.
Ensures comprehensive coverage for domains with multiple DNS records.


## Proxy Usage

### naabu -host 192.168.1.1 -proxy socks5://127.0.0.1:9050

```bash
naabu -host 192.168.1.1 -proxy socks5://127.0.0.1:9050
```

Routes all scan traffic through a SOCKS5 proxy server.
Obfuscates the scanning source and enables audits from alternate locations.


## Resume Scan

### naabu -host 192.168.1.1 -resume

```bash
naabu -host 192.168.1.1 -resume
```

Resumes a previously interrupted scan from its last state.
Avoids redundant effort and saves time on long-running network audits.


## Statistics

### naabu -host 10.10.10.0/24 -stats

```bash
naabu -host 10.10.10.0/24 -stats
```

Displays real-time statistics about scan progress and health.
Monitor PPS rates, completion percentage, and estimated time remaining.


## Port Lists from File

### naabu -host 192.168.1.1 -ports-file custom_ports.txt

```bash
naabu -host 192.168.1.1 -ports-file custom_ports.txt
```

Scans specifically enumerated ports from a local file.
Allows focusing the audit on custom or sensitive application ports.


## Exclude from File

### naabu -list targets.txt -exclude-file ignore.txt

```bash
naabu -list targets.txt -exclude-file ignore.txt
```

Skips hosts listed in a specific suppression file.
Ensures production or sensitive system IP addresses are not probed.


## Passive Discovery

### naabu -host example.com -passive

```bash
naabu -host example.com -passive
```

Uses passive external records only to discover open ports.
Identifies reachable services without sending any direct traffic to the target.


## Real World Red Team

### naabu -list hosts.txt -p - -rate 3000 -silent -o all_ports.txt

```bash
naabu -list hosts.txt -p - -rate 3000 -silent -o all_ports.txt
```

High-intensity silent scan across all 65k TCP ports.
Generates a complete port map for a large list of hosts rapidly.


## Defensive Validation

### naabu -host 192.168.1.0/24 -top-ports 1000 -nmap-cli 'nmap -sV --script vulners'

```bash
naabu -host 192.168.1.0/24 -top-ports 1000 -nmap-cli 'nmap -sV --script vulners'
```

Finds ports and immediately runs Nmap vulnerability scripts.
Streamlines the workflow from asset discovery to security validation.


## Stealth Scanning

### naabu -host 192.168.1.1 -rate 50 -retries 2 -warm-up-time 10

```bash
naabu -host 192.168.1.1 -rate 50 -retries 2 -warm-up-time 10
```

Carefully throttled scan with extended warm-up intervals.
implements a low-profile audit to minimize network disruption and footprint.


## Automation Pipeline

### echo 192.168.1.1 | naabu -silent -json

```bash
echo 192.168.1.1 | naabu -silent -json
```

Accepts target IP/Domain via standard input stream.
Integrates seamlessly into complex command chains and automation scripts.


## Advanced

### naabu -host 192.168.1.1 -rev-ptr

```bash
naabu -host 192.168.1.1 -rev-ptr
```

Performs Reverse PTR lookups for identified IP addresses.
Resolves systems to hostnames for easier identification and inventory.


## Service Discovery

### naabu -host 192.168.1.1 -s d

```bash
naabu -host 192.168.1.1 -s d
```

Attempts to fingerprint services running on found open ports.
Supplements basic discovery with high-level protocol and service markers.


## Host Discovery Only

### naabu -host 10.10.10.0/24 -host-discovery -silent

```bash
naabu -host 10.10.10.0/24 -host-discovery -silent
```

Identifies live hosts on a network without port auditing.
Generates a list of reachable IP addresses for subsequent deeper scans.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [Nuclei](https://terminal.rokibulroni.com/tool/web/nuclei)
- [RustScan](https://terminal.rokibulroni.com/tool/network/RustScan)
