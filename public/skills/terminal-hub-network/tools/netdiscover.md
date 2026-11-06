# netdiscover

> An active and passive ARP reconnaissance tool for finding live hosts on wireless or switched networks, especially those without DHCP.

- Category: Network
- Commands: 28
- Page: https://terminal.rokibulroni.com/tool/network/netdiscover
- Homepage: https://github.com/netdiscover-scanner/netdiscover
- Tags: host discovery, ARP, passive

## Install

- apt: `sudo apt install netdiscover`

## Basic Network Discovery

### netdiscover

```bash
netdiscover
```

Starts an automated interactive scan on the default network interface.
Identifies live hosts on common private segments through ARP discovery.


## Interface Selection

### netdiscover -i eth0

```bash
netdiscover -i eth0
```

Runs an automated discovery scan on a specific interface (-i).
Required for targeting networks connected via secondary or virtual adapters.


## Target Range and CIDR Specification

### netdiscover -r 192.168.1.0/24

```bash
netdiscover -r 192.168.1.0/24
```

Actively scans a specified Class C subnet for live hosts (-r).
Probes every address in the range to map active local devices.

### netdiscover -r 10.0.0.0/16

```bash
netdiscover -r 10.0.0.0/16
```

Enables ARP discovery on a broad Class B network range.
Used to identify hosts across a medium-sized infrastructure segment.

### netdiscover -r 172.16.0.0/12

```bash
netdiscover -r 172.16.0.0/12
```

Performs reconnaissance on a large /12 private network block.
Discovers hosts across the entire 172.16.0.0 private range.


## Passive Scanning Mode

### netdiscover -p

```bash
netdiscover -p
```

Listens for ARP traffic in passive mode (-p).
Identifies live hosts without sending any packets to avoid detection.

### netdiscover -i wlan0 -p

```bash
netdiscover -i wlan0 -p
```

Sniffs ARP packets passively on a wireless interface.
Maps active WiFi clients and devices without generating network noise.


## Target Range and CIDR Specification

### netdiscover -l ranges.txt

```bash
netdiscover -l ranges.txt
```

Scans multiple network ranges defined in a text file (-l).
Automates discovery across varied disconnected infrastructure segments.


## Timing and Scan Speed Control

### netdiscover -r 192.168.1.0/24 -f

```bash
netdiscover -r 192.168.1.0/24 -f
```

Enables fast mode for accelerated ARP discovery (-f).
Reduces inter-packet wait times to speed up the network audit.

### netdiscover -r 192.168.1.0/24 -s 500

```bash
netdiscover -r 192.168.1.0/24 -s 500
```

Sets a 500ms delay between individual ARP probes (-s).
Slows down the scan to minimize network congestion and footprint.

### netdiscover -r 192.168.1.0/24 -S

```bash
netdiscover -r 192.168.1.0/24 -S
```

Disables all inter-probe sleep intervals (-S).
Forces the tool to transmit discovery packets as fast as possible.


## Active Scanning Mode

### netdiscover -r 192.168.1.0/24 -c 3

```bash
netdiscover -r 192.168.1.0/24 -c 3
```

Probes each host with 3 consecutive ARP requests (-c).
Increases discovery reliability on unstable or lossy network links.


## Output Display and Logging

### netdiscover -r 192.168.1.0/24 -P

```bash
netdiscover -r 192.168.1.0/24 -P
```

Prints discovered hosts to the terminal stdout (-P).
Ideal for logging results directly without the interactive UI.


## Quiet and Non Interactive Modes

### netdiscover -P -r 192.168.1.0/24 > results.txt

```bash
netdiscover -P -r 192.168.1.0/24 > results.txt
```

Executes a non-interactive scan and saves to a file.
Standardizes capture for post-processing and reporting tasks.


## MAC Address and Vendor Identification

### netdiscover -m macs.txt

```bash
netdiscover -m macs.txt
```

Uses a custom MAC-to-vendor mapping file (-m).
Enables granular identification of specialized or proprietary hardware.


## Custom Source and Network Configuration

### netdiscover -r 192.168.1.0/24 -d

```bash
netdiscover -r 192.168.1.0/24 -d
```

Bypasses local configuration files for discovery (-d).
Ensures a clean, default-parameter scan regardless of local settings.


## Advanced and Combined Real World Scans

### netdiscover -r 192.168.1.0/24 -n 100

```bash
netdiscover -r 192.168.1.0/24 -n 100
```

Narrows the scan range to the first 100 hosts in the subnet.
Optimizes reconnaissance when targeting specific address pools.

### netdiscover -i eth0 -r 192.168.1.0/24 -F "arp"

```bash
netdiscover -i eth0 -r 192.168.1.0/24 -F "arp"
```

Applies a custom PCAP filter to the discovery session (-F).
Granularly controls which background traffic is captured and processed.


## Red Team Internal Reconnaissance

### netdiscover -i eth0 -p -s 1000

```bash
netdiscover -i eth0 -p -s 1000
```

Performs stealthy passive reconnaissance on a specific adapter.
Quietly maps assets by monitoring existing ARP traffic in the background.

### netdiscover -P -l targets.txt

```bash
netdiscover -P -l targets.txt
```

Scans a batch list of targets for direct script processing.
Provides clean output for integration into larger reconnaissance pipelines.


## Blue Team Network Visibility Validation

### netdiscover -r 192.168.10.0/24 -c 5 -s 100

```bash
netdiscover -r 192.168.10.0/24 -c 5 -s 100
```

Aggressively audits a subnet with high retry counts.
Ensures that every active device on the segment is identified and mapped.


## Asset Inventory and Network Mapping

### netdiscover -r 192.168.1.0/24 -P -N

```bash
netdiscover -r 192.168.1.0/24 -P -N
```

Outputs raw discovery data without resolving table headers.
Ideal for automated data collection and machine-parsing tasks.


## Advanced and Combined Real World Scans

### netdiscover -i eth0 -r 192.168.1.0/24 -f -P

```bash
netdiscover -i eth0 -r 192.168.1.0/24 -f -P
```

Fast active scan on eth0 with direct terminal output.
Provides a rapid, console-friendly overview of current network occupancy.

### netdiscover -r 192.168.1.0/24 -F "arp and ether src 00:11:22:33:44:55"

```bash
netdiscover -r 192.168.1.0/24 -F "arp and ether src 00:11:22:33:44:55"
```

Filters discovery traffic to a specific source MAC address.
Tracks movement or activity of a particular network device in real-time.


## Timing and Scan Speed Control

### netdiscover -r 192.168.1.0/24 -s 2000 -c 1

```bash
netdiscover -r 192.168.1.0/24 -s 2000 -c 1
```

Performs a low-profile scan with 2s inter-packet delays.
Minimizes detection risk while identifying live systems on the segment.


## Output Display and Logging

### netdiscover -P -r 192.168.1.0/24 -L

```bash
netdiscover -P -r 192.168.1.0/24 -L
```

Prints discovered data in a structured tool-friendly format (-L).
Enables seamless handoff of host lists to other security tools.


## Advanced and Combined Real World Scans

### netdiscover -S -f -r 192.168.1.0/24

```bash
netdiscover -S -f -r 192.168.1.0/24
```

Combines fast mode with no-sleep settings for maximum velocity.
Rapidly enumerates large subnet ranges in time-sensitive scenarios.


## Blue Team Network Visibility Validation

### netdiscover -p -f

```bash
netdiscover -p -f
```

Uses fast passive mode to quickly identify subnet occupancy.
Populates the local ARP cache silently by monitoring existing traffic.

## Related tools

- [arp-scan](https://terminal.rokibulroni.com/tool/network/arp-scan)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
