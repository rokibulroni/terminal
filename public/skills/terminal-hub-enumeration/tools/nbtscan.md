# nbtscan

> Scans networks for NetBIOS name information — hostnames, logged-in users and MAC addresses of Windows machines.

- Category: Enumeration
- Commands: 30
- Page: https://terminal.rokibulroni.com/tool/enumeration/nbtscan
- Homepage: http://www.unixwiz.net/tools/nbtscan.html
- Tags: NetBIOS, SMB, host discovery

## Install

- apt: `sudo apt install nbtscan`

## Basic NetBIOS Host Discovery

### nbtscan 192.168.1.0/24

```bash
nbtscan 192.168.1.0/24
```

Scans the entire CIDR subnet to discover hosts sharing NetBIOS information.


## Single Host Scanning

### nbtscan 10.10.10.55

```bash
nbtscan 10.10.10.55
```

Queries a specific IP address to identify its NetBIOS name and MAC address.


## Range Based Scanning

### nbtscan 192.168.1.1-100

```bash
nbtscan 192.168.1.1-100
```

Scans a specific range of IP addresses within a subnet.


## Multiple Target Scanning

### nbtscan 192.168.1.50 192.168.1.55 192.168.1.60

```bash
nbtscan 192.168.1.50 192.168.1.55 192.168.1.60
```

Scans multiple individually specified IP addresses in a single command.


## Verbose Output Modes

### nbtscan -v 192.168.1.0/24

```bash
nbtscan -v 192.168.1.0/24
```

Enables verbose mode to display names and services for each discovered host.


## OS and Server Type Identification

### nbtscan -h 192.168.1.0/24

```bash
nbtscan -h 192.168.1.0/24
```

Displays human-readable names for NetBIOS services to help identify server roles.


## Combined Verbose Enumeration

### nbtscan -vh 192.168.1.0/24

```bash
nbtscan -vh 192.168.1.0/24
```

Combines verbose output with human-readable descriptions for detailed analysis.


## Quiet and Minimal Output

### nbtscan -q 10.10.10.0/24

```bash
nbtscan -q 10.10.10.0/24
```

Suppresses headers and banners for cleaner output suitable for lists.


## Script Friendly Output

### nbtscan -s "," 192.168.1.0/24

```bash
nbtscan -s "," 192.168.1.0/24
```

Uses a comma separator between fields to generate CSV-style output.


## Custom Delimiter Parsing

### nbtscan -s "|" 192.168.1.0/24

```bash
nbtscan -s "|" 192.168.1.0/24
```

Uses a pipe character as a separator for easy parsing in shell scripts.


## Format for ETC Hosts

### nbtscan -e 192.168.1.0/24

```bash
nbtscan -e 192.168.1.0/24
```

Formats the output to be compatible with the /etc/hosts file format.


## Format for LMHOSTS

### nbtscan -l 192.168.1.0/24

```bash
nbtscan -l 192.168.1.0/24
```

Formats the output to be compatible with the Windows LMHOSTS file format.


## Input from File

### nbtscan -f targets.txt

```bash
nbtscan -f targets.txt
```

Reads a list of IP addresses or subnets from a text file for scanning.


## Broadcast and Unicast Scanning

### nbtscan -r 192.168.1.0/24

```bash
nbtscan -r 192.168.1.0/24
```

Forces the scan to use local source port 137 to bypass some firewall filters.


## Timeout Control

### nbtscan -t 2000 192.168.1.0/24

```bash
nbtscan -t 2000 192.168.1.0/24
```

Sets the wait time for responses to 2000 milliseconds (2 seconds).


## Fast Scanning

### nbtscan -t 500 192.168.1.0/24

```bash
nbtscan -t 500 192.168.1.0/24
```

Reduces the timeout to 500ms for a faster scan on low-latency local networks.


## Retry Control

### nbtscan -m 3 192.168.1.0/24

```bash
nbtscan -m 3 192.168.1.0/24
```

Retransmits the query 3 times if no response is received.


## Reliable Deep Scan

### nbtscan -m 5 -t 3000 192.168.1.0/24

```bash
nbtscan -m 5 -t 3000 192.168.1.0/24
```

Increases retries and timeouts to maximize discovery on congested networks.


## Packet Dump Debugging

### nbtscan -d 10.10.10.50

```bash
nbtscan -d 10.10.10.50
```

Dumps the full packet contents received for debugging protocol issues.


## Red Team Internal Reconnaissance

### nbtscan -q -s ":" 192.168.1.0/24

```bash
nbtscan -q -s ":" 192.168.1.0/24
```

Produces quiet, colon-separated output ideal for feeding into other attack tools.


## Blue Team Asset Inventory

### nbtscan -e 192.168.1.0/24 > inventory.txt

```bash
nbtscan -e 192.168.1.0/24 > inventory.txt
```

Generates a hostname-to-IP mapping file for network inventory documentation.


## Firewall Evasion Attempt

### nbtscan -r -t 1500 10.10.10.0/24

```bash
nbtscan -r -t 1500 10.10.10.0/24
```

Uses source port 137 with a moderate timeout to traverse strict ACLs.


## DHCP Scope Discovery

### nbtscan 192.168.1.100-200

```bash
nbtscan 192.168.1.100-200
```

Scans a specific DHCP pool range to find active Windows leases.


## Domain Controller Identification

### nbtscan -hv 192.168.1.0/24 | grep "DC"

```bash
nbtscan -hv 192.168.1.0/24 | grep "DC"
```

Scans with service descriptions and filters for Domain Controller indicators.


## MAC Address Discovery

### nbtscan -s " " 192.168.1.0/24

```bash
nbtscan -s " " 192.168.1.0/24
```

Uses a space separator to cleanly expose the MAC address column.


## Incident Response Snapshot

### nbtscan -v -s "," 192.168.1.0/24

```bash
nbtscan -v -s "," 192.168.1.0/24
```

Captures verbose details in a CSV format for forensic timeline analysis.


## Legacy Network Mapping

### nbtscan -l 10.0.0.0/8

```bash
nbtscan -l 10.0.0.0/8
```

Scans a large Class A network (slow) and outputs in LMHOSTS format.


## No Header Scripting

### nbtscan -q -e 192.168.1.0/24

```bash
nbtscan -q -e 192.168.1.0/24
```

Outputs only the host definitions without table headers for immediate processing.


## Aggressive Discovery

### nbtscan -r -m 10 192.168.1.0/24

```bash
nbtscan -r -m 10 192.168.1.0/24
```

Uses root-level source ports and high retries for stubborn hosts.


## Full Comprehensive Scan

### nbtscan -v -h -r -t 2000 192.168.1.0/24

```bash
nbtscan -v -h -r -t 2000 192.168.1.0/24
```

Maximizes information gathering with verbose, readable, robust settings.

## Related tools

- [enum4linux](https://terminal.rokibulroni.com/tool/enumeration/enum4linux)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
