# amap

> An application-protocol mapper that identifies which service is really running on a port, even on non-standard ports.

- Category: Network
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/network/amap
- Homepage: https://github.com/vanhauser-thc/THC-Archive
- Tags: service detection, fingerprinting

## Install

- apt: `sudo apt install amap`

## Basic Service Fingerprinting

### amap 192.168.1.1 80

```bash
amap 192.168.1.1 80
```

Performs default application fingerprinting on a single target and port.
Identifies the service running on the port even if it's on a non-standard port.

### amap 192.168.1.1 21 22 80

```bash
amap 192.168.1.1 21 22 80
```

Scans multiple specific ports on a single target.
Useful for checking a set of known services simultaneously.


## Target and Port Specification

### amap 192.168.1.1 1-100

```bash
amap 192.168.1.1 1-100
```

Scans a sequential range of ports on the specified IP.
Detects applications running on standard and non-standard ports within the range.

### amap 192.168.1.1 80 8080 443

```bash
amap 192.168.1.1 80 8080 443
```

Fingerprints common web ports to identify server software.
Helps determine if the web server is Apache, IIS, Nginx, or something else.


## Banner Grabbing

### amap -B 192.168.1.1 21

```bash
amap -B 192.168.1.1 21
```

Runs in banner mode to collect service banners (-B).
Retrieves the raw banner without sending active application triggers.

### amap -b 192.168.1.1 80

```bash
amap -b 192.168.1.1 80
```

Fetches ASCII banners in addition to fingerprinting responses.
Provides extra context about the service version and configuration.


## UDP Scanning

### amap -u 192.168.1.1 53

```bash
amap -u 192.168.1.1 53
```

Switches to UDP mode for scanning connectionless services.
Essential for mapping DNS, SNMP, and other UDP-based protocols.

### amap -u 192.168.1.1 161 162

```bash
amap -u 192.168.1.1 161 162
```

Identifies SNMP services by sending specific UDP triggers.
Can reveal device information if default community strings are used.


## Protocol Specification

### amap -P tcp 192.168.1.1 80

```bash
amap -P tcp 192.168.1.1 80
```

Explicitly specifies simple TCP scan mode.
Ensures the scanner uses TCP connect calls for the investigation.

### amap -P udp 192.168.1.1 53

```bash
amap -P udp 192.168.1.1 53
```

Explicitly specifies the UDP protocol for the scan.
Forces UDP usage even if the tool defaults to TCP.


## IPv6 Scanning

### amap -6 ::1 80

```bash
amap -6 ::1 80
```

Performs application fingerprinting on an IPv6 address.
Validates services running on the IPv6 stack.

### amap -6 fe80::1 22

```bash
amap -6 fe80::1 22
```

Scans an IPv6 link-local address for SSH.
Useful for local network discovery where global IPv6 addresses aren't configured.


## Scan Optimization

### amap -1 192.168.1.1 80

```bash
amap -1 192.168.1.1 80
```

Sends only triggers defined for the specific port (-1).
Optimizes speed by skipping heuristic checks for other protocols.

### amap -H 192.168.1.1 80

```bash
amap -H 192.168.1.1 80
```

Disables heuristic triggers (-H).
Prevents the scanner from guessing protocols, reducing noise and scan time.

### amap -U 192.168.1.1 80

```bash
amap -U 192.168.1.1 80
```

Disables unidentified triggers (-U).
Focuses output only on successfully identified services, reducing clutter.


## Verbose and Debug Modes

### amap -v 192.168.1.1 80

```bash
amap -v 192.168.1.1 80
```

Enables verbose output (-v).
Displays details about the connection process and triggers being sent.

### amap -vv 192.168.1.1 80

```bash
amap -vv 192.168.1.1 80
```

Enables double verbosity (-vv) for deep inspection.
Shows extensive details, useful for troubleshooting incorrect identifications.

### amap -d 192.168.1.1 80

```bash
amap -d 192.168.1.1 80
```

Activates debug mode (-d).
Dumps all packet data sent and received for protocol analysis.


## Output Formatting

### amap -q 192.168.1.1 80

```bash
amap -q 192.168.1.1 80
```

Runs in quiet mode (-q).
Suppresses non-essential output, printing only finding summaries.

### amap -o results.txt 192.168.1.1 80

```bash
amap -o results.txt 192.168.1.1 80
```

Saves scan results to a file.
Persists the output for later review or documentation.

### amap -m 192.168.1.1 80

```bash
amap -m 192.168.1.1 80
```

Generates machine-readable output (-m).
Formats the data for easy parsing by scripts or other security tools.

### amap -m -o parse_me.log 192.168.1.1 80

```bash
amap -m -o parse_me.log 192.168.1.1 80
```

Writes machine-readable output directly to a file.
Ideal for automated logging pipelines or SIEM ingestion.


## Integration with Port Scanners

### amap -i scan.gnmap

```bash
amap -i scan.gnmap
```

Imports targets from an Nmap grepable file (-i).
Seamlessly integrates into a workflow starting with Nmap port discovery.


## Timeout and Performance

### amap -t 2 192.168.1.1 80

```bash
amap -t 2 192.168.1.1 80
```

Sets connection timeout to 2 seconds.
Speeds up scanning on low-latency local networks by failing faster.

### amap -T 10 192.168.1.1 80

```bash
amap -T 10 192.168.1.1 80
```

Sets read timeout to 10 seconds (-T).
Allows more time for slow services or heavily loaded servers to respond.

### amap -C 5 192.168.1.1 80

```bash
amap -C 5 192.168.1.1 80
```

Configures retry count to 5 on timeout.
Increases reliability on unstable or congested networks.

### amap -c 16 192.168.1.1 1-1000

```bash
amap -c 16 192.168.1.1 1-1000
```

Sets parallel connections to 16 (-c).
Increases scan throughput by processing multiple tasks simultaneously.


## Custom Probe Control

### amap -R 192.168.1.1 111

```bash
amap -R 192.168.1.1 111
```

Skips RPC service identification steps (-R).
Avoids sending RPC specific probes if RPC services are not of interest.


## SSL and Encrypted Service Detection

### amap -S 192.168.1.1 443

```bash
amap -S 192.168.1.1 443
```

Forces SSL mode for the scan (-S).
Assumes the target port is using SSL/TLS, skipping the plaintext handshake attempt.


## Advanced Combined Scans

### amap -b -v 192.168.1.1 21

```bash
amap -b -v 192.168.1.1 21
```

Combines banner grabbing with verbose output.
Provides a detailed look at the service banner and the handshake process.

### amap -u -b 192.168.1.1 161

```bash
amap -u -b 192.168.1.1 161
```

Performs UDP banner grabbing (-u -b).
Attempts to retrieve text banners from UDP services like TFTP or legacy protocols.


## Red Team Service Enumeration

### amap -A -b -q 192.168.1.1 1-65535

```bash
amap -A -b -q 192.168.1.1 1-65535
```

Quietly maps applications on all ports (-A -b -q).
A comprehensive enumeration strategy for red team engagements.


## Blue Team Exposure Validation

### amap -1 -b 192.168.1.1 80 443 8080

```bash
amap -1 -b 192.168.1.1 80 443 8080
```

Checks common ports with specific triggers only (-1).
Used to validate standard service configurations without generating excess noise.


## Incident Response Support

### amap -d -o forensic_log.txt 192.168.1.100 6667

```bash
amap -d -o forensic_log.txt 192.168.1.100 6667
```

Captures a full packet dump for forensics (-d).
Documents the exact interaction with a suspicious service for later analysis.


## False Positive Reduction

### amap -H -U 192.168.1.1 80

```bash
amap -H -U 192.168.1.1 80
```

Disables heuristic and unidentified triggers.
A strict scanning mode that reports only high-confidence identifications.


## Automation and Pipeline Usage

### amap -m -q 192.168.1.1 22 >> scan_results.log

```bash
amap -m -q 192.168.1.1 22 >> scan_results.log
```

Appends machine-readable output to a log file.
Designed for scheduled tasks or continuous monitoring scripts.


## Rate and Performance Control

### amap -t 1 -T 1 -c 32 192.168.1.1 80

```bash
amap -t 1 -T 1 -c 32 192.168.1.1 80
```

Maximizes scanning speed with aggressive timeouts and parallelism.
Use with caution as it generates significant network noise and load.


## Advanced Combined Scans

### amap -1 -u -b 192.168.1.1 123

```bash
amap -1 -u -b 192.168.1.1 123
```

Targets UDP port 123 (NTP) with specific checks.
Effectively identifies NTP servers and grabs version banners.


## Input from File

### amap -i targets.gnmap -o scan_report.txt

```bash
amap -i targets.gnmap -o scan_report.txt
```

Reads targets from Nmap (-i) and writes a report (-o).
Streamlines the process of verifying Nmap discovery results.


## Legacy Support Mode

### amap -W 192.168.1.1 80

```bash
amap -W 192.168.1.1 80
```

Activates legacy web application fingerprinting (-W).
Compatibility mode for identifying older web architectures.


## Advanced Combined Scans

### amap -P tcp -b -v 192.168.1.1 25

```bash
amap -P tcp -b -v 192.168.1.1 25
```

Explicitly scans TCP port 25 for SMTP banners.
Verifies mail server configuration and identifying banners.

### amap -6 -u -v ::1 5353

```bash
amap -6 -u -v ::1 5353
```

Scans mDNS over UDP on IPv6 localhost.
Checks for multicast DNS services running on the local system.


## Custom Probe Control

### amap -H -1 10.0.0.5 8080

```bash
amap -H -1 10.0.0.5 8080
```

Strict signature match on port 8080.
Combines specific triggers with disabled heuristics for precise identification.


## Red Team Service Enumeration

### amap -i targets.gnmap -m -b

```bash
amap -i targets.gnmap -m -b
```

Batch processes targets for machine-readable output.
Efficient for large-scale service auditing across a network.


## Full Comprehensive Scan

### amap -A -b -v -t 3 -T 5 192.168.1.1 1-1024

```bash
amap -A -b -v -t 3 -T 5 192.168.1.1 1-1024
```

Executes a comprehensive, verbose scan on privileged ports.
A thorough audit command for mapping all services on a host.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [WhatWeb](https://terminal.rokibulroni.com/tool/web/whatweb)
