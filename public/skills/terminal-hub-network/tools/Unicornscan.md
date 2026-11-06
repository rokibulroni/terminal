# Unicornscan

> An asynchronous stateless scanner for TCP and UDP that correlates responses separately from sending probes, useful for large or UDP-heavy scans.

- Category: Network
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/network/Unicornscan
- Homepage: https://sourceforge.net/projects/osace/
- Tags: port scanning, UDP, asynchronous

## Install

- apt: `sudo apt install unicornscan`

## Basic Scan

### unicornscan 192.168.1.1

```bash
unicornscan 192.168.1.1
```

Performs a basic TCP SYN scan against a single target IP.
Unicornscan's asynchronous engine makes this extremely fast and efficient.

### unicornscan 192.168.1.1:80

```bash
unicornscan 192.168.1.1:80
```

Scans the target host specifically for TCP port 80.
Focusing on a single port is ideal for checking service availability.

### unicornscan scanme.nmap.org

```bash
unicornscan scanme.nmap.org
```

Resolves the hostname and performs a basic scan.
Useful for targeting web servers or domains where the IP is dynamic.


## Target and Port Specification

### unicornscan 192.168.1.0/24:80

```bash
unicornscan 192.168.1.0/24:80
```

Scans an entire Class C subnet for web servers (port 80).
Efficiently identifies active http services across a network segment.

### unicornscan 192.168.1.1:80,443,8080

```bash
unicornscan 192.168.1.1:80,443,8080
```

Scans a defined list of ports on the target.
Quickly checks for common services like HTTP, HTTPS, and Proxies simultaneously.

### unicornscan 192.168.1.1:1-65535

```bash
unicornscan 192.168.1.1:1-65535
```

Performs a full TCP port scan (1-65535).
Essential for finding services running on non-standard or high-numbered ports.

### unicornscan 192.168.1.1:1-1024

```bash
unicornscan 192.168.1.1:1-1024
```

Scans the standard reserved ports (1-1024).
These ports host the most critical system services and are often the first to check.

### unicornscan 192.168.1.1 192.168.1.5

```bash
unicornscan 192.168.1.1 192.168.1.5
```

Scans multiple distinct IP addresses in one command.
Allows processing a list of disparate targets without relaunching the tool.


## Verbosity and Output

### unicornscan -v 192.168.1.1

```bash
unicornscan -v 192.168.1.1
```

Enables verbose mode to show packet details.
Useful for understanding scan progress and seeing immediate feedback.

### unicornscan -vv 192.168.1.1

```bash
unicornscan -vv 192.168.1.1
```

Enables extra verbose output for deep debugging.
Shows internal state and packet details, helpful for troubleshooting scan issues.

### unicornscan -I 192.168.1.1

```bash
unicornscan -I 192.168.1.1
```

Activates Immediate mode to report results instantly.
Crucial for real-time monitoring as ports are discovered.


## Interface Control

### unicornscan -i eth0 192.168.1.1

```bash
unicornscan -i eth0 192.168.1.1
```

Forces the scanner to use a specific network interface.
Necessary when working with multiple adapters or VPN tunnels.


## UDP Scanning

### unicornscan -m U 192.168.1.1

```bash
unicornscan -m U 192.168.1.1
```

Switches the scan mode to UDP protocol.
UDP is connectionless and harder to scan, but Unicornscan is optimized for it.

### unicornscan -m U 192.168.1.1:53

```bash
unicornscan -m U 192.168.1.1:53
```

Scans specifically for UDP DNS service on port 53.
Fast and effective for identifying DNS servers or open resolvers.

### unicornscan -m U 192.168.1.1:161,162

```bash
unicornscan -m U 192.168.1.1:161,162
```

Scans for UDP SNMP services on standard ports.
SNMP can reveal vast amounts of system information if exposed.


## Timing and Throttling

### unicornscan -r 300 192.168.1.1

```bash
unicornscan -r 300 192.168.1.1
```

Sets a conservative packet rate of 300 pps.
Balances speed with accuracy to avoid dropping packets on standard networks.

### unicornscan -r 1000 192.168.1.1

```bash
unicornscan -r 1000 192.168.1.1
```

Increases scan speed to 1000 packets per second.
Use this on robust networks to significantly reduce scan time.

### unicornscan -r 10 192.168.1.1

```bash
unicornscan -r 10 192.168.1.1
```

Reduces scan speed for stealth or stability.
Helps avoid detection by IDS or overwhelming fragile legacy hardware.


## Packet Reliability

### unicornscan -R 2 192.168.1.1

```bash
unicornscan -R 2 192.168.1.1
```

Repeats every packet 2 times to ensure delivery.
Vital for scanning across lossy networks or unreliable wireless connections.

### unicornscan -R 5 -r 500 192.168.1.1

```bash
unicornscan -R 5 -r 500 192.168.1.1
```

Sends 5 copies of every packet at 500 pps.
Maximizes probability of detection in high-noise or packet-loss environments.


## Source Spoofing

### unicornscan -s 10.0.0.5 192.168.1.1

```bash
unicornscan -s 10.0.0.5 192.168.1.1
```

Spoofs the source IP address of the scan packets.
Used for decoy scanning or testing firewall handling of specific IPs.

### unicornscan -B 53 192.168.1.1

```bash
unicornscan -B 53 192.168.1.1
```

Sets the source port to 53 (DNS).
Often allows packets to bypass firewalls that permit traffic from DNS servers.

### unicornscan -B 443 192.168.1.1:80

```bash
unicornscan -B 443 192.168.1.1:80
```

Scans with source port 443 (HTTPS).
Technique to bypass egress filtering by masquerading as return web traffic.


## TCP Scan Types

### unicornscan -m T -t syn 192.168.1.1

```bash
unicornscan -m T -t syn 192.168.1.1
```

Explicitly selects TCP SYN scan mode.
This is the default and most reliable method for discovering open TCP ports.

### unicornscan -m T -t ack 192.168.1.1

```bash
unicornscan -m T -t ack 192.168.1.1
```

Performs a TCP ACK scan to map firewall rules.
Hosts usually reply with RST if unfiltered, helping to identify rule sets.

### unicornscan -m T -t fin 192.168.1.1

```bash
unicornscan -m T -t fin 192.168.1.1
```

Performs a TCP FIN scan.
Can sometimes bypass simple firewalls or identify OS behaviors based on RFC compliance.

### unicornscan -m T -t null 192.168.1.1

```bash
unicornscan -m T -t null 192.168.1.1
```

Performs a TCP Null scan (no flags).
Useful for fingerprinting as different operating systems respond differently to invalid packets.

### unicornscan -m T -t xmas 192.168.1.1

```bash
unicornscan -m T -t xmas 192.168.1.1
```

Performs a TCP Xmas scan (FIN, URG, PUSH).

### unicornscan -m T -t dump 192.168.1.1

```bash
unicornscan -m T -t dump 192.168.1.1
```

Captures and dumps packet headers during the scan.
Useful for low-level analysis of the responses.


## Logging and Evidence

### unicornscan -l /tmp/scanlogs 192.168.1.1

```bash
unicornscan -l /tmp/scanlogs 192.168.1.1
```

Logs scan output to a specified directory.
Ensures results are persisted for reporting or later analysis.

### unicornscan -w capture.pcap 192.168.1.1

```bash
unicornscan -w capture.pcap 192.168.1.1
```

Writes raw packet data to a PCAP file.
Allows for detailed post-scan analysis in tools like Wireshark.

### unicornscan -W 192.168.1.1

```bash
unicornscan -W 192.168.1.1
```

Saves OS fingerprinting data.
Collects specific packet signatures to help identify the remote operating system.


## Advanced Protocol Scanning

### unicornscan -m T -p 80 -G 1 192.168.1.1

```bash
unicornscan -m T -p 80 -G 1 192.168.1.1
```

Sends a pre-defined payload (Group 1) to port 80.
Useful for eliciting responses from specific application protocols.


## Error Handling

### unicornscan -E 192.168.1.1

```bash
unicornscan -E 192.168.1.1
```

Processes ICMP 'Destination Unreachable' messages.
Helps identify ports that are filtered by a firewall rather than just closed.


## Combinations (Red Team)

### unicornscan -i eth0 -I -r 300 192.168.1.0/24:445

```bash
unicornscan -i eth0 -I -r 300 192.168.1.0/24:445
```

Rapidly scans a subnet for SMB with immediate reporting.
A common Red Team tactic to quickly find Windows hosts.

### unicornscan -m U -I -r 300 192.168.1.1:161

```bash
unicornscan -m U -I -r 300 192.168.1.1:161
```

Performs a fast UDP SNMP scan.
SNMP is often overlooked and can provide a wealth of internal network data.


## Combinations (Stealth)

### unicornscan -r 5 -s 192.168.1.200 192.168.1.1:80

```bash
unicornscan -r 5 -s 192.168.1.200 192.168.1.1:80
```

Scanning slowly with a spoofed IP to blend in.
Designed to evade detection by resembling legitimate low-volume traffic.


## Advanced TCP Flags

### unicornscan -m T -t syn,ack 192.168.1.1

```bash
unicornscan -m T -t syn,ack 192.168.1.1
```

Sends packets with SYN and ACK flags set.
Tests how the target TCP stack handles out-of-state packets.

### unicornscan -m T -t syn,fin 192.168.1.1

```bash
unicornscan -m T -t syn,fin 192.168.1.1
```

Sends packets with SYN and FIN flags set.
This combination is illegal in TCP/IP and helps fingerprint the stack.

### unicornscan -m T -t fin,push,urg 192.168.1.1

```bash
unicornscan -m T -t fin,push,urg 192.168.1.1
```

Explicitly defines Xmas scan flags.
Used for advanced evasion or determining OS behavior.

### unicornscan -m T -t rst 192.168.1.1

```bash
unicornscan -m T -t rst 192.168.1.1
```

Sends RST (Reset) packets.
Can be used to test firewall statefulness or terminate connections.


## Advanced Targeting

### unicornscan 10.0.0.0/8:80

```bash
unicornscan 10.0.0.0/8:80
```

Scans a massive network range for web servers.
Demonstrates Unicornscan's ability to handle Class A sized networks efficiently.


## Defensive Validation

### unicornscan -r 1000 -R 3 192.168.1.1:1-65535

```bash
unicornscan -r 1000 -R 3 192.168.1.1:1-65535
```

Aggressive repeated scanning of all ports.
Used to test the sensitivity and triggering thresholds of IDS/IPS solutions.


## Packet Crafting

### unicornscan -m T -B 20 192.168.1.1

```bash
unicornscan -m T -B 20 192.168.1.1
```

Sets source port to 20 (FTP Data).
Some legacy firewalls allow traffic from port 20 assuming it is an active FTP session.

### unicornscan -m T -B 25 192.168.1.1

```bash
unicornscan -m T -B 25 192.168.1.1
```

Sets source port to 25 (SMTP).
May bypass firewalls that are configured to allow mail server traffic.


## Target List File

### unicornscan -L 5 192.168.1.1

```bash
unicornscan -L 5 192.168.1.1
```

Sets the timeout to 5 seconds.
Useful when scanning over high-latency links like satellite or congested WANs.


## Database Interaction

### unicornscan -d 192.168.1.1

```bash
unicornscan -d 192.168.1.1
```

Pushes results to a PostgreSQL database.
 Enables centralized data collection for large-scale distributed scanning.


## Host Identification

### unicornscan -m A 192.168.1.1

```bash
unicornscan -m A 192.168.1.1
```

Uses ARP to identify active hosts on the local LAN.
Faster and more reliable than IP scanning for local layer-2 discovery.


## Verbose Debugging

### unicornscan -vvv 192.168.1.1

```bash
unicornscan -vvv 192.168.1.1
```

Enables maximum verbosity.
Used primarily for debugging Unicornscan itself or understanding complex packet flows.


## Real World Scenario

### unicornscan -i wlan0 -I -r 200 192.168.1.1:22,23,80,443

```bash
unicornscan -i wlan0 -I -r 200 192.168.1.1:22,23,80,443
```

Scans a wireless interface for management ports.
Common scenario for assessing the security of wireless network infrastructure.

### unicornscan -m U -r 100 -I 192.168.1.1:500,4500

```bash
unicornscan -m U -r 100 -I 192.168.1.1:500,4500
```

UDP scan for VPN endpoints (IKE/IPSec).
Identifying these services is the first step in auditing VPN security.

### unicornscan -m U -r 100 -I 192.168.1.1:123

```bash
unicornscan -m U -r 100 -I 192.168.1.1:123
```

Scans for NTP servers.
Open NTP servers can be used for amplification attacks or information disclosure.


## Advanced

### unicornscan -m T -t 0 192.168.1.1

```bash
unicornscan -m T -t 0 192.168.1.1
```

Uses numeric flag syntax for a NULL scan.
Alternative way to specify no flags (0) for stacking testing.

### unicornscan -m T -t 6 192.168.1.1

```bash
unicornscan -m T -t 6 192.168.1.1
```

Manually sets TCP flags using a numeric value.
Allows for creating custom packet types not covered by standard names.


## Packet Capture

### unicornscan -w /tmp/evidence.pcap -r 10 192.168.1.1

```bash
unicornscan -w /tmp/evidence.pcap -r 10 192.168.1.1
```

Slow, logged scan saving to PCAP.
Ideal for professional engagements where a clean chain of evidence is required.


## Payload Options

### unicornscan -G 2 192.168.1.1

```bash
unicornscan -G 2 192.168.1.1
```

Sends a configured payload group to test responses.
Allows Unicornscan to perform simple protocol interaction.


## Evasion

### unicornscan -s 192.168.1.50 -B 80 192.168.1.1:80

```bash
unicornscan -s 192.168.1.50 -B 80 192.168.1.1:80
```

Spoofs both source IP and source port.
Advanced evasion technique to masquerade as established return traffic.


## Large Scale

### unicornscan -r 4000 10.0.0.0/16:80

```bash
unicornscan -r 4000 10.0.0.0/16:80
```

High-speed scan of a large network block.
Tests the capacity of the network infrastructure and the scanner's performance.


## UDP Verification

### unicornscan -m U -R 4 -r 200 192.168.1.1:137

```bash
unicornscan -m U -R 4 -r 200 192.168.1.1:137
```

Highly repetitive UDP scan for NetBIOS.
UDP is unreliable; repeating packets ensures that open services are detected.


## Help

### unicornscan -h

```bash
unicornscan -h
```

Displays the help menu.
Shows all command-line flags and syntax options.

## Related tools

- [Masscan](https://terminal.rokibulroni.com/tool/network/masscan)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
