# arp-scan

> Discovers every device on the local network segment by sending ARP requests — finds hosts that ignore ping and identifies vendors by MAC.

- Category: Network
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/network/arp-scan
- Homepage: https://github.com/royhills/arp-scan
- Documentation: https://github.com/royhills/arp-scan/wiki/arp-scan-User-Guide
- Tags: host discovery, ARP, layer 2

## Install

- apt: `sudo apt install arp-scan`
- brew: `brew install arp-scan`

## Basic Scan

### arp-scan -l

```bash
arp-scan -l
```

Detects the local interface and subnet for discovery (-l).
Automatically requests mapping for active hosts on the connected local network segment.

### arp-scan --localnet

```bash
arp-scan --localnet
```

Verbose alias for local network scanning (--localnet).
Convenient way to scan the locally attached subnet using system configuration.


## Target Specification

### arp-scan 192.168.1.1

```bash
arp-scan 192.168.1.1
```

Sends ARP requests to a single IP address.
Used to determine if a specific host is online and what its MAC address is.

### arp-scan 192.168.1.0/24

```bash
arp-scan 192.168.1.0/24
```

Scans an entire CIDR subnet block.
Identifies all active devices within the specified network range.

### arp-scan 10.0.0.1 10.0.0.2 10.0.0.3

```bash
arp-scan 10.0.0.1 10.0.0.2 10.0.0.3
```

Scans a space-delimited list of IP addresses.
Allows targeting a specific set of hosts without scanning the whole subnet.

### arp-scan 172.16.0.0:255.255.0.0

```bash
arp-scan 172.16.0.0:255.255.0.0
```

Defines target network using IP:Netmask format.
Alternative notation for specifying network ranges to scan.

### arp-scan 192.168.1.10-192.168.1.50

```bash
arp-scan 192.168.1.10-192.168.1.50
```

Scans an inclusive range of IP addresses.
Useful for scanning a sub-segment of a larger network block.


## Interface Selection

### arp-scan -I eth0 -l

```bash
arp-scan -I eth0 -l
```

Forces usage of a specific network interface (-I).
Required when the system has multiple interfaces or for non-default routes.

### arp-scan --interface=wlan0 192.168.0.0/24

```bash
arp-scan --interface=wlan0 192.168.0.0/24
```

Specifies a wireless interface using the long flag.
Ensures ARP requests are sent over the correct wifi adapter.


## Target Specification

### arp-scan -f hosts.txt

```bash
arp-scan -f hosts.txt
```

Reads targets from a file (-f).
Enables batch scanning of large or complex lists of IP addresses.


## Retry and Timeout

### arp-scan -r 5 -l

```bash
arp-scan -r 5 -l
```

Increases retry count to 5 (-r) for reliability.
Helps when scanning over lossy wifi or congested networks.

### arp-scan --retry=1 192.168.1.0/24

```bash
arp-scan --retry=1 192.168.1.0/24
```

Reduces retries to 1 for speed.
Suitable for reliable wired networks where packet loss is negligible.

### arp-scan -t 2000 -l

```bash
arp-scan -t 2000 -l
```

Sets per-host timeout to 2000ms (-t).
Gives devices ample time to respond, useful for slow or busy hosts.

### arp-scan --timeout=200 10.0.0.0/8

```bash
arp-scan --timeout=200 10.0.0.0/8
```

Sets a short 200ms timeout for speed.
Ideal for high-speed scanning of responsive local networks.

### arp-scan -i 100 -l

```bash
arp-scan -i 100 -l
```

Enforces a 100ms packet interval delay (-i).
Slows down the scan to reduce network load or avoid detection.

### arp-scan --interval=1000 192.168.1.0/24

```bash
arp-scan --interval=1000 192.168.1.0/24
```

Sets a 1-second delay between packets.
Stealthy mode that minimizes the chance of triggering traffic alarms.

### arp-scan -B 2 -l

```bash
arp-scan -B 2 -l
```

Sets backoff factor to 2 (-B).
Doubles the wait time after each dropped packet to adaptively handle congestion.


## Output Formatting

### arp-scan -q -l

```bash
arp-scan -q -l
```

Runs in quiet mode (-q).
Suppresses non-essential headers and metadata for cleaner output.

### arp-scan --plain -l

```bash
arp-scan --plain -l
```

Outputs plain data (IP and MAC) only (--plain).
Simplifies output parsing for scripts by removing formatting.

### arp-scan -N -l

```bash
arp-scan -N -l
```

Displays unaligned columns (-N).
Removing alignment spaces makes it easier to cut/awk specific fields.

### arp-scan -n -l

```bash
arp-scan -n -l
```

Numeric only mode (-n).
Disables DNS resolution to speed up the scan and prevent DNS traffic.

### arp-scan -v -l

```bash
arp-scan -v -l
```

Enables verbose output (-v).
Shows details about packet construction and the scanning process.

### arp-scan -vv -l

```bash
arp-scan -vv -l
```

Enables extra verbose output (-vv).
Provides deep debugging information about ARP packet fields.

### arp-scan -e -l

```bash
arp-scan -e -l
```

Displays Round Trip Time (-e).
Measures latency to each host, helping identify network performance issues.

### arp-scan -x -l

```bash
arp-scan -x -l
```

Displays packet data in hex (-x).
Useful for analyzing non-standard data in ARP payloads.


## Filtering

### arp-scan -g -l

```bash
arp-scan -g -l
```

Ignores duplicate ARP replies (-g).
Prevents clutter when multiple interfaces or paths return a response.

### arp-scan --ignoredups -l

```bash
arp-scan --ignoredups -l
```

Suppress duplicate packet responses (--ignoredups).
Ensures each host is listed only once in the final report.


## ARP Packet Customization

### arp-scan -s 10.0.0.50 192.168.1.0/24

```bash
arp-scan -s 10.0.0.50 192.168.1.0/24
```

Spoofs the source IP address (-s).
Makes ARP requests appear to originate from another IP on the subnet.

### arp-scan --arpspa=10.0.0.99 -l

```bash
arp-scan --arpspa=10.0.0.99 -l
```

Sets ARP Source Protocol Address (SPA) explicitly.
Advanced spoofing control for testing ARP handling.

### arp-scan -S 00:11:22:33:44:55 -l

```bash
arp-scan -S 00:11:22:33:44:55 -l
```

Spoofs the source MAC address (-S).
Masquerades the sender's physical identity.

### arp-scan --arpsha=DE:AD:BE:EF:CA:FE 192.168.1.1

```bash
arp-scan --arpsha=DE:AD:BE:EF:CA:FE 192.168.1.1
```

Sets ARP Source Hardware Address (SHA) explicitly.
Advanced control for crafting specific ARP payloads.

### arp-scan -T 01:00:5e:00:00:01 192.168.1.0/24

```bash
arp-scan -T 01:00:5e:00:00:01 192.168.1.0/24
```

Sets the Target MAC address in the Ethernet frame (-T).
Rarely used, but allows directing unicast ARP requests.

### arp-scan --destaddr=FF:FF:FF:FF:FF:FF -l

```bash
arp-scan --destaddr=FF:FF:FF:FF:FF:FF -l
```

Sets the destination MAC address explicitly.
Can be used to test how devices handle broadcast vs unicast ARPs.


## Advanced Features

### arp-scan -Q 10 -l

```bash
arp-scan -Q 10 -l
```

Adds an 802.1Q VLAN tag (-Q).
Required when scanning tagged VLAN trunks directly.

### arp-scan --vlan=20 192.168.50.0/24

```bash
arp-scan --vlan=20 192.168.50.0/24
```

Scans a specific VLAN ID.
Allows mapping hosts segregated on different virtual LANs.

### arp-scan -A -l

```bash
arp-scan -A -l
```

Uses ARP packet padding (-A).
Fills the frame to meet minimum Ethernet length standards.

### arp-scan --padding=32 -l

```bash
arp-scan --padding=32 -l
```

Adds 32 bytes of padding to the payload.
Can be used to test how devices handle oversized ARP packets.


## MAC Vendor Resolution

### arp-scan -O /usr/share/arp-scan/ieee-oui.txt -l

```bash
arp-scan -O /usr/share/arp-scan/ieee-oui.txt -l
```

Specifies a custom OUI file (-O).
Enables manufacturer resolution using a specific database.

### arp-scan --ouifile=./custom-oui.txt 192.168.1.0/24

```bash
arp-scan --ouifile=./custom-oui.txt 192.168.1.0/24
```

Uses a local custom file for OUI resolution.
Useful when working with private or unlisted manufacturer codes.


## File Output

### arp-scan -W scan_results.pcap -l

```bash
arp-scan -W scan_results.pcap -l
```

Writes ARP responses to a PCAP file (-W).
Essential for capturing evidence or detailed traffic analysis.

### arp-scan --write=evidence.pcap 192.168.1.100

```bash
arp-scan --write=evidence.pcap 192.168.1.100
```

Captures ARP exchange to a file.
Logs the specific interaction with the target host.


## Advanced Randomization

### arp-scan -R -l

```bash
arp-scan -R -l
```

Randomizes the target scan order (-R).
Prevents scanning sequentially, which can trigger IDS thresholds.

### arp-scan --random -l

```bash
arp-scan --random -l
```

Randomizes target list order.
Stealth technique to distribute traffic patterns across the subnet.


## Performance Tuning

### arp-scan -B 1.5 -r 3 -t 500 -l

```bash
arp-scan -B 1.5 -r 3 -t 500 -l
```

Optimized adaptive scan settings (-B -r -t).
Combines backoff, retry, and timeout for a balanced approach.


## Red Team Recon

### arp-scan -s 0.0.0.0 -l

```bash
arp-scan -s 0.0.0.0 -l
```

Sets source IP to 0.0.0.0 (Duplicate Address Detection).
Can provoke replies from some stacks that ignore other ARPs.

### arp-scan -S 00:00:00:00:00:00 -l

```bash
arp-scan -S 00:00:00:00:00:00 -l
```

Uses a null MAC source address.
Tests switch security controls and port security configurations.


## Blue Team Validation

### arp-scan --destaddr=01:00:0c:cc:cc:cc -l

```bash
arp-scan --destaddr=01:00:0c:cc:cc:cc -l
```

Sends to Cisco CDP/VTP multicast address.
Used to identify Cisco network equipment listening on this address.


## Asset Inventory

### arp-scan -l -e --plain --ignoredups

```bash
arp-scan -l -e --plain --ignoredups
```

Produces a clean asset list with metrics.
Ideal for generating inventory reports with latency data.


## General Utility

### arp-scan --version

```bash
arp-scan --version
```

Displays installed version info.
Checks version and dependencies for compatibility verification.

### arp-scan --help

```bash
arp-scan --help
```

Prints help menu.
Shows all available command-line flags and usage syntax.


## Advanced Limits

### arp-scan -l --limit=1024

```bash
arp-scan -l --limit=1024
```

Limits max hosts to scan (--limit).
Caps the scan size to prevent overwhelming the application or network.


## Output Control

### arp-scan -l -q > active_hosts.txt

```bash
arp-scan -l -q > active_hosts.txt
```

Redirects quiet output to a file.
Saves the list of discovered active hosts for scripting and automation.


## Red Team Recon

### arp-scan -l -s 192.168.1.1

```bash
arp-scan -l -s 192.168.1.1
```

Impersonates the gateway IP address (-s).
Can bypass some client-side filters that accept ARP only from the gateway.


## Combined Scan

### arp-scan -I eth0 -l --retry=5 --timeout=3000

```bash
arp-scan -I eth0 -l --retry=5 --timeout=3000
```

High-reliability scan profile.
Uses aggressive retries and long timeouts for difficult network conditions.

### arp-scan -I eth0 -l --interval=5000

```bash
arp-scan -I eth0 -l --interval=5000
```

Low-and-slow stealth scan.
Sends packets infrequently to avoid detection by traffic monitors.


## VLAN Discovery

### arp-scan -Q 100 -s 10.100.0.1 10.100.0.0/24

```bash
arp-scan -Q 100 -s 10.100.0.1 10.100.0.0/24
```

Attempts to map a specific VLAN.
Spoofs the gateway IP for that VLAN to elicit responses from hosts.


## Advanced Output

### arp-scan -l --pcapsave=trace.pcap

```bash
arp-scan -l --pcapsave=trace.pcap
```

Saves output to PCAP (alias).
Convenient method for capturing scan traffic for Wireshark.


## Blue Team Validation

### arp-scan -l --arpsha=00:50:56:XX:XX:XX

```bash
arp-scan -l --arpsha=00:50:56:XX:XX:XX
```

Example:

```bash
arp-scan -l --arpsha=00:50:56:00:00:01
```

Uses a VMware OUI source.
Tests if the network permits or blocks virtualization specific OUI ranges.


## Target Specification

### arp-scan 10.0.0.0/24:10.0.1.0/24

```bash
arp-scan 10.0.0.0/24:10.0.1.0/24
```

Scans multiple CIDR ranges.
Accepts multiple arguments to scan distinct subnets in one pass.


## Advanced Features

### arp-scan --snap -l

```bash
arp-scan --snap -l
```

Forces 802.2 LLC/SNAP encapsulation (--snap).
Uses legacy framing format to test compatibility or specific detection.

## Related tools

- [netdiscover](https://terminal.rokibulroni.com/tool/network/netdiscover)
- [fping](https://terminal.rokibulroni.com/tool/network/fping)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
