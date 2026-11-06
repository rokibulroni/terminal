# Masscan

> An asynchronous TCP port scanner built for speed — it can sweep huge address ranges in minutes using its own TCP/IP stack.

- Category: Network
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/network/masscan
- Homepage: https://github.com/robertdavidgraham/masscan
- Documentation: https://github.com/robertdavidgraham/masscan#usage
- Tags: port scanning, internet-scale, fast

## Install

- apt: `sudo apt install masscan`
- brew: `brew install masscan`

## Basic Scan

### masscan 192.168.1.1 -p80

```bash
masscan 192.168.1.1 -p80
```

Scans a single IP address for port 80.
Provides a quick check for web service availability on the target.

### masscan 10.0.0.0/24 -p443

```bash
masscan 10.0.0.0/24 -p443
```

Scans an entire CIDR subnet for port 443.
Efficiently maps SSL/TLS services across a local or remote network.

### masscan 192.168.1.1 -p22,80,443

```bash
masscan 192.168.1.1 -p22,80,443
```

Scans a target for multiple specific ports.
Simultaneously probes SSH, HTTP, and HTTPS services on a single host.


## Port Selection

### masscan 192.168.1.1 -p1-1024

```bash
masscan 192.168.1.1 -p1-1024
```

Scans a comprehensive range of privileged ports.
Identifies common system and server services running on the target.

### masscan 10.0.0.0/8 -p0-65535

```bash
masscan 10.0.0.0/8 -p0-65535
```

Performs a full port scan on a large network range.
Discovers all active TCP services across a wide swath of IP addresses.


## Rate Control

### masscan 10.0.0.0/16 -p80 --rate 100

```bash
masscan 10.0.0.0/16 -p80 --rate 100
```

Throttles scan speed to 100 packets per second.
Reduces network impact and helps avoid triggering basic rate-limiting alerts.

### masscan 10.0.0.0/8 -p80 --rate 100000

```bash
masscan 10.0.0.0/8 -p80 --rate 100000
```

Configures a high-speed scan rate of 100k pps.
Forces rapid network discovery for large-scale infrastructure audits.


## Output Formats

### masscan 192.168.1.0/24 -p80 -oX output.xml

```bash
masscan 192.168.1.0/24 -p80 -oX output.xml
```

Exports scan results to an XML file (-oX).
Generates structured data suitable for integration with reporting tools.

### masscan 192.168.1.0/24 -p80 -oJ output.json

```bash
masscan 192.168.1.0/24 -p80 -oJ output.json
```

Exports scan results to a JSON file (-oJ).
Provides a modern, machine-parseable format for automation and analysis.

### masscan 192.168.1.0/24 -p80 -oL output.txt

```bash
masscan 192.168.1.0/24 -p80 -oL output.txt
```

Saves results in a simple grepable list (-oL).
Ideal for quick command-line filtering and extracting host lists.

### masscan 192.168.1.0/24 -p80 -oB output.bin

```bash
masscan 192.168.1.0/24 -p80 -oB output.bin
```

Saves results in binary format for efficiency (-oB).
Ideal for high-speed scanning where minimizing disk I/O is critical.


## TCP and UDP Scanning

### masscan 192.168.1.100 -pU:53

```bash
masscan 192.168.1.100 -pU:53
```

Performs a scan specifically for UDP port 53.
Identifies reachable DNS servers on the target IP or range.

### masscan 192.168.1.100 -pU:161,162

```bash
masscan 192.168.1.100 -pU:161,162
```

Scans for standard SNMP UDP ports 161 and 162.
Discovers network devices and services exposing management interfaces.

### masscan 192.168.1.1 -p80,U:53

```bash
masscan 192.168.1.1 -p80,U:53
```

Combines TCP and UDP ports in a single scan run.
Broadens discovery coverage across different transport layer protocols.


## Excluding Targets

### masscan 10.0.0.0/8 -p80 --exclude 10.0.0.1

```bash
masscan 10.0.0.0/8 -p80 --exclude 10.0.0.1
```

Excludes specific IP addresses from the scan task.
Ensures critical or sensitive hosts are not probed during discovery.

### masscan 10.0.0.0/8 -p80 --excludefile exclude.txt

```bash
masscan 10.0.0.0/8 -p80 --excludefile exclude.txt
```

Excludes a list of targets provided in a text file.
Enables systematic avoidance of restricted IP ranges and hostlists.


## Interface Configuration

### masscan 192.168.1.0/24 -p80 --interface eth0

```bash
masscan 192.168.1.0/24 -p80 --interface eth0
```

Forces the scan to use a specific network adapter.
Ensures traffic exits through the correct physical or logical interface.

### masscan 192.168.1.0/24 -p80 --router-mac 00:11:22:33:44:55

```bash
masscan 192.168.1.0/24 -p80 --router-mac 00:11:22:33:44:55
```

Specifies the gateway MAC address explicitly.
Bypasses local routing lookups to increase packet generation efficiency.


## Source Configuration

### masscan 10.0.0.0/8 -p80 --adapter-ip 192.168.1.200

```bash
masscan 10.0.0.0/8 -p80 --adapter-ip 192.168.1.200
```

Sets a custom source IP for outgoing scan packets.
Makes discovery traffic appear to originate from a different host.

### masscan 10.0.0.0/8 -p80 --adapter-port 60000

```bash
masscan 10.0.0.0/8 -p80 --adapter-port 60000
```

Sets a fixed source port for the scan session.
Useful for testing through firewalls that permit specific source ports.

### masscan 10.0.0.0/8 -p80 --adapter-port 60000-60100

```bash
masscan 10.0.0.0/8 -p80 --adapter-port 60000-60100
```

Uses a specific range of source ports for probes.
Prevents traffic pattern signatures from being tied to a single source port.


## Banner Grabbing

### masscan 10.0.0.0/24 -p80 --banners

```bash
masscan 10.0.0.0/24 -p80 --banners
```

Attempts to capture service banners from open ports.
Enables light service identification and version detection during scanning.

### masscan 10.0.0.0/24 -p80 --banners --http-user-agent "Mozilla/5.0"

```bash
masscan 10.0.0.0/24 -p80 --banners --http-user-agent "Mozilla/5.0"
```

Specifies a custom User-Agent for banner grabbing.
Mimics legitimate browser traffic to bypass simple HTTP security filters.

### masscan 192.168.1.0/24 -p22 --banners --source-ip 192.168.1.200

```bash
masscan 192.168.1.0/24 -p22 --banners --source-ip 192.168.1.200
```

Grabs SSH banners using a specific source IP address.
Combines service probing with source IP obfuscation for reconnaissance.


## Configuration Files

### masscan -c scan.conf

```bash
masscan -c scan.conf
```

Executes a scan using settings from a config file (-c).
Standardizes complex scan parameters for repeatable security audits.

### masscan 10.0.0.0/24 -p80 --echo > scan.conf

```bash
masscan 10.0.0.0/24 -p80 --echo > scan.conf
```

Saves current scan parameters to a configuration file.
Enables documentation and subsequent reuse of specific scan settings.


## Scanning Efficiency

### masscan 0.0.0.0/0 -p80 --shard 1/10

```bash
masscan 0.0.0.0/0 -p80 --shard 1/10
```

Participates in a distributed scan using sharding.
Divides the workload across multiple machines for massively parallel discovery.

### masscan 0.0.0.0/0 -p80 --seed 123456

```bash
masscan 0.0.0.0/0 -p80 --seed 123456
```

Randomizes IP generation using a specific seed value.
Ensures reproducible scan order for verification and debugging.

### masscan --resume paused.conf

```bash
masscan --resume paused.conf
```

Resumes an interrupted scan from a saved state file.
Prevents data loss and redundant probing on long-running network scans.


## Safe Internal Network Scanning

### masscan 10.0.0.0/8 -p80 --rate 500 --ttl 10

```bash
masscan 10.0.0.0/8 -p80 --rate 500 --ttl 10
```

Low-rate internal scan with restricted hop limits (TTL).
Safely discovery internal assets while preventing packets from exiting the network.

### masscan 192.168.0.0/16 -p445 --rate 100 --wait 0

```bash
masscan 192.168.0.0/16 -p445 --rate 100 --wait 0
```

Rapidly probes for SMB services without long waits.
Quickly identifies systems exposing Windows file sharing ports.


## Output Control

### masscan 10.0.0.0/24 -p80 --open-only

```bash
masscan 10.0.0.0/24 -p80 --open-only
```

Reports only open ports and suppresses all other output.
Streamlines discovery results for immediate action or pipe consumption.

### masscan 10.0.0.0/24 -p80 --pcap output.pcap

```bash
masscan 10.0.0.0/24 -p80 --pcap output.pcap
```

Captures raw scan traffic directly to a PCAP file.
Enables detailed offline analysis of network responses and behaviors.


## Packet Customization

### masscan 10.0.0.0/24 -p80 --hello-string "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"

```bash
masscan 10.0.0.0/24 -p80 --hello-string "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
```

Sends a custom payload string upon connection establishment.
Probes application-layer behavior with specific protocol-compliant strings.


## Reliability

### masscan 10.0.0.0/24 -p80 --retries 3

```bash
masscan 10.0.0.0/24 -p80 --retries 3
```

Retries failed packet transmissions to improve scan accuracy.
Essential for reliable results on lossy or high-congestion network links.


## Advanced

### masscan 10.0.0.0/16 --top-ports 100 --rate 1000

```bash
masscan 10.0.0.0/16 --top-ports 100 --rate 1000
```

Scans the 100 most statistically common network ports.
Prioritizes high-value service discovery to speed up the reconnaissance phase.

### masscan 192.168.1.1 -p0-65535 --rate 100000 --banner

```bash
masscan 192.168.1.1 -p0-65535 --rate 100000 --banner
```

Full range port scan with high-speed banner grabbing.
Deeply audits a single host for all services at maximum tool performance.


## Status Monitoring

### masscan 10.0.0.0/8 -p80 --status-seconds 10

```bash
masscan 10.0.0.0/8 -p80 --status-seconds 10
```

Prints scan status updates every 10 seconds in the console.
Provides visibility into progress and ETA during long-running tasks.


## Input Handling

### masscan -iL targets.txt -p80

```bash
masscan -iL targets.txt -p80
```

Loads target IP lists from an external text file (-iL).
Standardizes targets for large-scale security assessments across ranges.


## Multiple Ranges

### masscan 10.0.0.0/8 192.168.0.0/16 -p80,443

```bash
masscan 10.0.0.0/8 192.168.0.0/16 -p80,443
```

Scans multiple disjoint networks in a single execution.
Consolidates discovery efforts for varied infrastructure in one task.


## Internet Scale

### masscan 0.0.0.0/0 -p443 --exclude 255.255.255.255

```bash
masscan 0.0.0.0/0 -p443 --exclude 255.255.255.255
```

Attempts a full IP space scan for port 443 availability.
An extreme internet-scale operation for world-wide service mapping.

### masscan 0.0.0.0/0 -p80 --max-rate 10000000

```bash
masscan 0.0.0.0/0 -p80 --max-rate 10000000
```

Simulates 10 million packets per second internet scan throughput.
Tests hardware and network stack limits for peak scanning performance.


## Heartbleed Check

### masscan 10.0.0.0/24 -p443 --heartbleed

```bash
masscan 10.0.0.0/24 -p443 --heartbleed
```

Audits SSL/TLS endpoints for the Heartbleed vulnerability.
Specifically detects systems with vulnerable OpenSSL implementations on port 443.


## Combined Use Case

### masscan 192.168.1.0/24 -p22,80,443,3389 --rate 1000 --banners -oJ detailed.json

```bash
masscan 192.168.1.0/24 -p22,80,443,3389 --rate 1000 --banners -oJ detailed.json
```

Comprehensive scan targeting common administrative and web ports.
Includes banner identification and structured JSON output for documentation.

### masscan 10.0.0.0/16 -p80 --adapter-ip 192.168.1.10 --adapter-port 40000 --rate 500

```bash
masscan 10.0.0.0/16 -p80 --adapter-ip 192.168.1.10 --adapter-port 40000 --rate 500
```

Controlled rate scan with fixed source parameters.
Mimics a specific network device while discovering web services.


## Ping Scan

### masscan 192.168.1.0/24 --ping

```bash
masscan 192.168.1.0/24 --ping
```

Performs an ICMP ping scan to identify reachable hosts.
Quickly detects live systems without performing transport layer port audits.


## Connection Timeout

### masscan 10.0.0.0/24 -p80 --wait 5

```bash
masscan 10.0.0.0/24 -p80 --wait 5
```

Configures a 5-second wait for probe response before timeout.
Adjusts tool sensitivity for high-latency or slow-responding networks.


## ARP Scanning

### masscan 192.168.1.0/24 --arp

```bash
masscan 192.168.1.0/24 --arp
```

Uses ARP requests for local network asset discovery.
Extremely fast and effective method for mapping the local L2 segment.


## Hardware Address

### masscan 192.168.1.0/24 -p80 --adapter-mac 00:11:22:33:44:55

```bash
masscan 192.168.1.0/24 -p80 --adapter-mac 00:11:22:33:44:55
```

Spoofs the source hardware MAC address for scan traffic.
Bypasses MAC-based filters or identifies as another device on the network.


## Vulnerability Scanning

### masscan 10.0.0.0/16 -p443 --script safe

```bash
masscan 10.0.0.0/16 -p443 --script safe
```

Runs limited safe scripts against HTTPS service endpoints.
Attempts basic vulnerability detection during the scanning phase.


## Offline Analysis

### masscan --readscan output.bin -oX converted.xml

```bash
masscan --readscan output.bin -oX converted.xml
```

Converts binary scan logs into structured XML for viewing.
Enables offline processing and reporting from previously run high-speed scans.


## Blacklist

### masscan 0.0.0.0/0 -p80 --blackrock-rounds 4

```bash
masscan 0.0.0.0/0 -p80 --blackrock-rounds 4
```

Increases cryptographic randomization rounds for IP sequencing.
Obfuscates the scanning pattern to avoid simple sequence-based detection.


## Red Team

### masscan 10.0.0.0/8 -p22,3389 --rate 100 --adapter-port 53

```bash
masscan 10.0.0.0/8 -p22,3389 --rate 100 --adapter-port 53
```

Slowly scans for administrative ports using DNS source port 53.
Optimized for evading ingress filters that trust common network protocols.


## Blue Team

### masscan 192.168.0.0/16 -p0-65535 --rate 100000 --banners -oB baseline.bin

```bash
masscan 192.168.0.0/16 -p0-65535 --rate 100000 --banners -oB baseline.bin
```

Rapidly baselines all TCP services across an entire network.
Generates a complete snapshot of the network state for defensive monitoring.


## Service Discovery

### masscan 10.0.0.0/16 -p80,8080,8000,8888 --banners

```bash
masscan 10.0.0.0/16 -p80,8080,8000,8888 --banners
```

Searches for web servers on common and alternative HTTP ports.
Identifies development and standard web interfaces across the infrastructure.


## Database Discovery

### masscan 10.0.0.0/16 -p3306,5432,1433,27017

```bash
masscan 10.0.0.0/16 -p3306,5432,1433,27017
```

Targets standard database listener ports on the network.
Identifies MySQL, MariaDB, Postgres, and SQL Server instances efficiently.


## Infrastructure

### masscan 10.0.0.0/8 -p179,500,4500

```bash
masscan 10.0.0.0/8 -p179,500,4500
```

Identifies routing and VPN infrastructure through key ports.
Discovers BGP peering points and IPsec/VPN terminators.


## Randomization

### masscan 10.0.0.0/16 -p80 --randomize-hosts

```bash
masscan 10.0.0.0/16 -p80 --randomize-hosts
```

Enforces non-sequential target IP order during the scan.
Reduces the likelihood of triggering simple range-based scanning alerts.


## Capture Filter

### masscan 10.0.0.0/24 -p80 --capture html

```bash
masscan 10.0.0.0/24 -p80 --capture html
```

Extracts HTML response data from reachable web servers.
Enables light content reconnaissance and identification of page titles.


## Debug

### masscan 192.168.1.1 -p80 --debug

```bash
masscan 192.168.1.1 -p80 --debug
```

Displays low-level packets and internal tool debugging data.
Essential for troubleshooting connection issues or tool execution failures.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [ZMap](https://terminal.rokibulroni.com/tool/network/ZMap)
- [RustScan](https://terminal.rokibulroni.com/tool/network/RustScan)
