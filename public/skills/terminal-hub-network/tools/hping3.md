# hping3

> A packet crafter for TCP, UDP and ICMP: test firewall rules, perform idle scans, trace paths with custom packets and measure latency.

- Category: Network
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/network/hping3
- Homepage: http://www.hping.org
- Documentation: http://www.hping.org/manpage.html
- Tags: packet crafting, firewall testing, TCP/IP

## Install

- apt: `sudo apt install hping3`

## Basic Connectivity

### hping3 192.168.1.1

```bash
hping3 192.168.1.1
```

Sends TCP NULL packets to target port 0.
Tests reachability without setting specific flags (default tool behavior).


## Basic ICMP

### hping3 -1 192.168.1.1

```bash
hping3 -1 192.168.1.1
```

Sends ICMP Echo Request packets (-1).
Functions like a standard ping to verify host availability.

### hping3 --icmp 192.168.1.1

```bash
hping3 --icmp 192.168.1.1
```

Alternative alias for sending ICMP Echo Requests.
Provides a human-readable way to specify the ICMP protocol.


## Basic UDP

### hping3 -2 192.168.1.1

```bash
hping3 -2 192.168.1.1
```

Sends UDP packets to the target (-2).
Useful for testing network reachability over connectionless protocols.

### hping3 --udp 192.168.1.1

```bash
hping3 --udp 192.168.1.1
```

Alternative alias for sending UDP packets.
Identifies the transport protocol as UDP using verbose syntax.


## Port Selection

### hping3 -p 80 192.168.1.1

```bash
hping3 -p 80 192.168.1.1
```

Sends TCP packets to a specific port (-p).
Used to probe specialized services or common ports like 80.

### hping3 -p ++80 192.168.1.1

```bash
hping3 -p ++80 192.168.1.1
```

Increments the destination port by 1 for each packet (++80).
Iterates through a sequence of ports starting from the specified base.

### hping3 -p 80++ 192.168.1.1

```bash
hping3 -p 80++ 192.168.1.1
```

Increments the port after every received response (80++).
Automatically traverses ports until a successful interaction occurs.


## Scanning Mode

### hping3 -8 1-1000 192.168.1.1

```bash
hping3 -8 1-1000 192.168.1.1
```

Scans a range of ports using TCP SYN mode (-8).
Identifies open ports by attempting half-open connections.

### hping3 --scan 80,443,8080 192.168.1.1

```bash
hping3 --scan 80,443,8080 192.168.1.1
```

Scans specifically listed ports in SYN mode.
Allows granular targeting of specific services on the host.

### hping3 -8 known 192.168.1.1

```bash
hping3 -8 known 192.168.1.1
```

Scans a predefined list of common ports.
Quickly checks for the most frequently used network services.


## TCP Flags

### hping3 -S -p 80 192.168.1.1

```bash
hping3 -S -p 80 192.168.1.1
```

Sends TCP SYN packets for half-open scanning (-S).
Probes a port to see if it responds with SYN-ACK without completing the handshake.

### hping3 -A -p 80 192.168.1.1

```bash
hping3 -A -p 80 192.168.1.1
```

Sends TCP ACK packets (-A).
Used to map firewall rules and determine if ports are filtered or unfiltered.

### hping3 -F -p 80 192.168.1.1

```bash
hping3 -F -p 80 192.168.1.1
```

Sends TCP FIN packets (-F).
Tests firewall filtering behavior or cleanly requests connection termination.

### hping3 -R -p 80 192.168.1.1

```bash
hping3 -R -p 80 192.168.1.1
```

Sends TCP RST (Reset) packets (-R).
Forcefully terminates a connection or tests the target's reset logic.

### hping3 -P -p 80 192.168.1.1

```bash
hping3 -P -p 80 192.168.1.1
```

Sends TCP PSH (Push) packets (-P).
Instructs the receiver to pass data directly to the application without buffering.

### hping3 -U -p 80 192.168.1.1

```bash
hping3 -U -p 80 192.168.1.1
```

Sends TCP URG (Urgent) packets (-U).
Signals that the packet contains data that should be processed immediately.

### hping3 -X -p 80 192.168.1.1

```bash
hping3 -X -p 80 192.168.1.1
```

Sends TCP Xmas scan packets (-X).
Sets FIN, URG, and PSH flags to elicit specific stack responses for OS detection.

### hping3 -Y -p 80 192.168.1.1

```bash
hping3 -Y -p 80 192.168.1.1
```

Sends TCP Ymas scan packets (-Y).
Sets FIN, URG, PSH, and ACK flags to probe advanced filtering responses.

### hping3 -S -A -p 80 192.168.1.1

```bash
hping3 -S -A -p 80 192.168.1.1
```

Sends TCP SYN-ACK packets (-S -A).
Crafts a response typically sent by a server to a client SYN request.


## Packet Counting

### hping3 -c 3 192.168.1.1

```bash
hping3 -c 3 192.168.1.1
```

Sends exactly 3 packets and stops (-c 3).
Useful for controlled connectivity checks without infinite looping.


## Timing and Interval

### hping3 -i 5 192.168.1.1

```bash
hping3 -i 5 192.168.1.1
```

Sets a 5-second interval between packets (-i 5).
Slows down the probe rate to reduce network load or avoid detection.

### hping3 -i u1000 192.168.1.1

```bash
hping3 -i u1000 192.168.1.1
```

Sets a 1-millisecond interval between packets (-i u1000).
Increases the scanning speed for high-performance network testing.

### hping3 --fast 192.168.1.1

```bash
hping3 --fast 192.168.1.1
```

Sends 10 packets per second (--fast).
Balances speed and network stability for general discovery.

### hping3 --faster 192.168.1.1

```bash
hping3 --faster 192.168.1.1
```

Sends 100 packets per second (--faster).
High-speed mode for rapid port scanning and network stress analysis.


## Stress Testing

### hping3 --flood -c 1000 192.168.1.1

```bash
hping3 --flood -c 1000 192.168.1.1
```

Sends packets as fast as possible (--flood).
Generates massive traffic for saturation testing and firewall stress analysis.


## IP Spoofing

### hping3 -a 10.0.0.5 192.168.1.1

```bash
hping3 -a 10.0.0.5 192.168.1.1
```

Spoofs the source IP address (-a).
Makes outgoing packets appear to originate from another host.

### hping3 --rand-source 192.168.1.1

```bash
hping3 --rand-source 192.168.1.1
```

Uses a random source IP for every packet (--rand-source).
Obfuscates the source of the scan across a wide range of addresses.


## Source Port Control

### hping3 -s 5050 -p 80 192.168.1.1

```bash
hping3 -s 5050 -p 80 192.168.1.1
```

Sets the source port explicitly (-s).
Useful for testing policies that depend on specific originating ports.

### hping3 -s 5050 -k -p 80 192.168.1.1

```bash
hping3 -s 5050 -k -p 80 192.168.1.1
```

Keeps the source port constant (-k).
Prevents the tool from incrementing the originating port for subsequent packets.


## Data Size

### hping3 -d 120 192.168.1.1

```bash
hping3 -d 120 192.168.1.1
```

Sets the packet data payload size (-d 120).
Adds arbitrary data to the packet to test MTU or application handling.


## Data Content

### hping3 -E /etc/issue -d 100 192.168.1.1

```bash
hping3 -E /etc/issue -d 100 192.168.1.1
```

Loads data from a file into the payload (-E).
Sends specific binary or text content from local storage within the packets.

### hping3 -e 'signature' 192.168.1.1

```bash
hping3 -e 'signature' 192.168.1.1
```

Fills the payload with a specific string (-e).
Customizes the data section to include signatures or identifying markers.


## Fragmentation

### hping3 -f -d 1000 192.168.1.1

```bash
hping3 -f -d 1000 192.168.1.1
```

Splits packets into fragments (-f).
Tests how target stacks and firewalls handle fragmented IP traffic.

### hping3 -x -d 1000 192.168.1.1

```bash
hping3 -x -d 1000 192.168.1.1
```

Sets the 'More Fragments' (MF) IP flag (-x).
Indicates that subsequent fragments follow, part of fragmentation testing.

### hping3 -y -d 1000 192.168.1.1

```bash
hping3 -y -d 1000 192.168.1.1
```

Sets the 'Don't Fragment' (DF) IP flag (-y).
Prevents intermediate routers from fragmenting the packet, used for MTU discovery.

### hping3 -g 8 192.168.1.1

```bash
hping3 -g 8 192.168.1.1
```

Sets the fragment offset value (-g 8).
Manually controls the placement of data within the fragmented sequence.


## TTL Manipulation

### hping3 -t 64 192.168.1.1

```bash
hping3 -t 64 192.168.1.1
```

Sets the IP Time To Live (TTL) value (-t 64).
Controls how many hops a packet can take before being discarded.

### hping3 --ttl 128 192.168.1.1

```bash
hping3 --ttl 128 192.168.1.1
```

Alias for setting the TTL value (--ttl).
Determines the lifespan of the packet across the network path.


## Traceroute

### hping3 --traceroute 192.168.1.1

```bash
hping3 --traceroute 192.168.1.1
```

Runs in traceroute mode (--traceroute).
Maps the network path to the target by incrementing TTL values.

### hping3 --traceroute -S -p 80 192.168.1.1

```bash
hping3 --traceroute -S -p 80 192.168.1.1
```

Performs a TCP SYN traceroute to port 80.
Combines SYN scanning with traceroute to map hop-by-hop filtered paths.


## Sequence Numbers

### hping3 -M 1000 192.168.1.1

```bash
hping3 -M 1000 192.168.1.1
```

Sets the TCP Sequence Number explicitly (-M 1000).
Manually specifies the packet's identification in a TCP stream.

### hping3 -L 2000 192.168.1.1

```bash
hping3 -L 2000 192.168.1.1
```

Sets the TCP Acknowledgement (ACK) Number (-L 2000).
Used to craft specific responses for stream analysis or session hijacking tests.


## Window Size

### hping3 -w 64 192.168.1.1

```bash
hping3 -w 64 192.168.1.1
```

Sets the TCP Window size (-w 64).
Controls the amount of data the sender is willing to receive without acknowledgement.


## IP ID

### hping3 -N 5555 192.168.1.1

```bash
hping3 -N 5555 192.168.1.1
```

Sets the IP Identification field (-N 5555).
Provides a unique ID for the packet, useful for tracking fragments or OS fingerprinting.


## Output Control

### hping3 -q 192.168.1.1

```bash
hping3 -q 192.168.1.1
```

Runs in quiet mode (-q).
Suppresses standard packet summary output for cleaner results.

### hping3 -V 192.168.1.1

```bash
hping3 -V 192.168.1.1
```

Runs in verbose mode (-V).
Shows detailed packet fields and headers for in-depth analysis.

### hping3 -D 192.168.1.1

```bash
hping3 -D 192.168.1.1
```

Runs in debug mode (-D).
Displays internal debugging information sent by the hping3 process.


## Interface

### hping3 -I eth0 192.168.1.1

```bash
hping3 -I eth0 192.168.1.1
```

Sends packets via a specific interface (-I eth0).
Ensures traffic exits through the correct network adapter.


## Raw IP

### hping3 -0 192.168.1.1

```bash
hping3 -0 192.168.1.1
```

Sends RAW IP packets (-0).
Transmits data at the network layer without a transport header by default.

### hping3 --rawip 192.168.1.1

```bash
hping3 --rawip 192.168.1.1
```

Alias for RAW IP mode (--rawip).
Operates purely at the IP layer for custom protocol testing.


## ICMP Customization

### hping3 -1 -C 13 192.168.1.1

```bash
hping3 -1 -C 13 192.168.1.1
```

Sends ICMP Timestamp Request packets (-C 13).
Used to query the target host's current system time.

### hping3 -1 -K 0 192.168.1.1

```bash
hping3 -1 -K 0 192.168.1.1
```

Sets the ICMP Code field (-K 0).
Granularly controls the sub-type of the ICMP message being sent.

### hping3 --icmp-ts 192.168.1.1

```bash
hping3 --icmp-ts 192.168.1.1
```

Alias for sending ICMP Timestamp requests (--icmp-ts).
Specifically probes for time synchronization data.

### hping3 --icmp-addr 192.168.1.1

```bash
hping3 --icmp-addr 192.168.1.1
```

Sends ICMP Address Mask Request packets (--icmp-addr).
Attempts to discover the subnet mask used by the target host.


## Routing

### hping3 -r 192.168.1.1

```bash
hping3 -r 192.168.1.1
```

Displays incremental ID field relativity (-r).
Estimates target host traffic levels based on IP ID field progression.


## Checksum

### hping3 -b 192.168.1.1

```bash
hping3 -b 192.168.1.1
```

Sends packets with invalid checksums (-b).
Tests whether the target stack correctly drops corrupted traffic.


## Hex Output

### hping3 -J 192.168.1.1

```bash
hping3 -J 192.168.1.1
```

Dumps received packets in printable hex format (-J).
Allows human readers to inspect the raw data of incoming responses.

### hping3 -j 192.168.1.1

```bash
hping3 -j 192.168.1.1
```

Dumps received packets in raw hexadecimal format (-j).
Provides exact binary representation of the collected responses.


## Listening Mode

### hping3 -9 signature

```bash
hping3 -9 signature
```

Listens for packets containing a specific signature (-9).
Acts like a specialized sniffer that triggers on particular data patterns.

### hping3 --listen signature

```bash
hping3 --listen signature
```

Alias for signature listening mode (--listen).
Used for detecting specific trigger strings in network traffic.


## TCP Options

### hping3 -O 192.168.1.1

```bash
hping3 -O 192.168.1.1
```

Sends packets with a fake TCP Timestamp option (-O).
Probes how the target handles modern TCP extensions.

### hping3 --tcpoff 192.168.1.1

```bash
hping3 --tcpoff 192.168.1.1
```

Sets the TCP data offset manually (--tcpoff).
Used in advanced packet crafting to test stack boundary conditions.

### hping3 --tcpseq 123456789 192.168.1.1

```bash
hping3 --tcpseq 123456789 192.168.1.1
```

Sets a specific 32-bit TCP sequence number (--tcpseq).
Forces a particular stream position for traffic analysis.


## Interactive

### hping3 -z 192.168.1.1

```bash
hping3 -z 192.168.1.1
```

Binds CTRL+Z to increment the TTL of outgoing packets (-z).
Allows interactive Path MTU discovery during an active session.

### hping3 -Z 192.168.1.1

```bash
hping3 -Z 192.168.1.1
```

Unbinds the CTRL+Z shortcut (-Z).
Restores CTRL+Z to the standard system backgrounding behavior.


## MTU Discovery

### hping3 -V -p 80 -S -y -d 1472 192.168.1.1

```bash
hping3 -V -p 80 -S -y -d 1472 192.168.1.1
```

Tests for MTU issues on port 80.
Sends max-sized frames with SYN and Don't Fragment set for path testing.


## Timestamp

### hping3 --ts 192.168.1.1

```bash
hping3 --ts 192.168.1.1
```

Adds a timestamp to the packet log (--ts).
Provides exact timing for each packet event in the output stream.


## Help

### hping3 --help

```bash
hping3 --help
```

Displays the help menu (--help).
Provides a quick reference for hping3 usage and flags.


## Version

### hping3 --version

```bash
hping3 --version
```

Displays the hping3 version info (--version).
Identifies the current software build and capabilities.


## Safe Flood

### hping3 -S -p 80 --flood -c 100 192.168.1.1

```bash
hping3 -S -p 80 --flood -c 100 192.168.1.1
```

Performs a limited TCP SYN flood on port 80.
Sends 100 packets quickly to validate firewall rate limiting rules.


## Advanced Crafting

### hping3 -S -P -U -p 80 192.168.1.1

```bash
hping3 -S -P -U -p 80 192.168.1.1
```

Sends packets with multiple TCP flags set simultaneously.
Crafts complex combinations of SYN, PUSH, and URG to probe stack handling.

### hping3 -F -R -p 80 192.168.1.1

```bash
hping3 -F -R -p 80 192.168.1.1
```

Sends packets with FIN and RST flags set.
Used to test stateless filters that may allow illegal combined flags.


## Audible

### hping3 --beep 192.168.1.1

```bash
hping3 --beep 192.168.1.1
```

Plays an audible alert for every response (--beep).
Provides a sound-based indicator of host connectivity during testing.


## Loose Source Routing

### hping3 --lsrr 10.0.0.1 192.168.1.1

```bash
hping3 --lsrr 10.0.0.1 192.168.1.1
```

Uses Loose Source Record Route option (--lsrr).
Attempts to route packets through specific intermediate hop addresses.


## Strict Source Routing

### hping3 --ssrr 10.0.0.1 192.168.1.1

```bash
hping3 --ssrr 10.0.0.1 192.168.1.1
```

Uses Strict Source Record Route option (--ssrr).
Forces packets to take an exact, predefined path through the network.


## Route Recording

### hping3 --rroute 192.168.1.1

```bash
hping3 --rroute 192.168.1.1
```

Uses Record Route option (--rroute).
Traces the route by having hops add their IPs to the packet header.


## Spoofing

### hping3 -a 192.168.1.254 -S 192.168.1.1

```bash
hping3 -a 192.168.1.254 -S 192.168.1.1
```

Spoofs traffic from the gateway IP address.
Simulates incoming traffic originating from the local network exit point.


## WinID

### hping3 -W 192.168.1.1

```bash
hping3 -W 192.168.1.1
```

Uses sliding window ID analysis (-W).
Analyzes flow control mechanisms and window scaling on the target host.


## Keep

### hping3 -k -s 3000 -p 80 192.168.1.1

```bash
hping3 -k -s 3000 -p 80 192.168.1.1
```

Forces source port to remain constant (-k).
Ensures all probes originate from exactly the same port for policy testing.


## Numeric Output

### hping3 -n 192.168.1.1

```bash
hping3 -n 192.168.1.1
```

Displays numeric IP addresses (-n).
Prevents time-consuming DNS reverse lookups during scanning.


## Microsecond Timing

### hping3 --u1000 192.168.1.1

```bash
hping3 --u1000 192.168.1.1
```

Sets timing in microseconds (--u1000).
Legacy alias for nanosecond-precision interval configuration.


## End Indicator

### hping3 --end 192.168.1.1

```bash
hping3 --end 192.168.1.1
```

Indicates end of file transfer (--end).
Signals that the packet stream for a file transmission is complete.


## Safe Scan

### hping3 --scan 1-1024 -S 192.168.1.1

```bash
hping3 --scan 1-1024 -S 192.168.1.1
```

Standard SYN scan of privileged ports.
Probes ports 1-1024 to identify foundational network services.

### hping3 --scan 1-1024 -A 192.168.1.1

```bash
hping3 --scan 1-1024 -A 192.168.1.1
```

ACK scan of privileged ports.
Used specifically for determining firewall filtering status on standard ports.


## IP Protocol

### hping3 -H 47 192.168.1.1

```bash
hping3 -H 47 192.168.1.1
```

Sets the IP protocol field manually (-H).
Tests transport protocols like GRE (47) directly at the IP layer.

### hping3 -H 50 192.168.1.1

```bash
hping3 -H 50 192.168.1.1
```

Probes IP protocol 50 (IPSec ESP).
Used to verify connectivity and reachability of VPN services.


## Combined Flags

### hping3 -S -F -p 80 192.168.1.1

```bash
hping3 -S -F -p 80 192.168.1.1
```

Sets illegal SYN and FIN flags simultaneously.
Tests if the target stack follows RFCs or exhibits anomalous behavior.

### hping3 -S -R -p 80 192.168.1.1

```bash
hping3 -S -R -p 80 192.168.1.1
```

Sets illegal SYN and RST flags.
Probes for specific OS responses to contradictory TCP flag combinations.


## Signaturizing

### hping3 -e 'TEST' -p 80 192.168.1.1

```bash
hping3 -e 'TEST' -p 80 192.168.1.1
```

Adds custom signature to the payload (-e).
Checks if Deep Packet Inspection (DPI) or IDS triggers on specific content.


## TOS Field

### hping3 --tos 0x10 192.168.1.1

```bash
hping3 --tos 0x10 192.168.1.1
```

Sets IP Type of Service field to Minimize Delay.
Tests QoS prioritization for real-time traffic handling.

### hping3 --tos 0x04 192.168.1.1

```bash
hping3 --tos 0x04 192.168.1.1
```

Sets TOS field to Maximize Reliability.
Tests network handling for traffic requiring high data integrity.


## Null Scan

### hping3 -p 80 192.168.1.1

```bash
hping3 -p 80 192.168.1.1
```

Sends a TCP packet with no flags set (Null Scan).
Probes ports to elicit a response according to standard stack behavior.


## Interface Promiscuous

### hping3 -I eth0 -9 signature

```bash
hping3 -I eth0 -9 signature
```

Listens in promiscuous mode for signature on eth0.
Captures matching packets passing through the interface, regardless of destination.


## File Transfer

### hping3 -f -p 53 -d 100 -E payload.bin 192.168.1.1

```bash
hping3 -f -p 53 -d 100 -E payload.bin 192.168.1.1
```

Transfers file data via DNS tunnel simulation.
Sends fragmented packets to port 53 to test exfiltration detection.


## IPv6

### hping3 -6 2001:db8::1

```bash
hping3 -6 2001:db8::1
```

Enables IPv6 mode (-6).
Allows testing reachability and protocol interactions on IPv6 addresses.


## UDP Scan

### hping3 -2 -p 53 192.168.1.1

```bash
hping3 -2 -p 53 192.168.1.1
```

Sends UDP packets to DNS port 53.
Verifies if UDP services are responding on the target host.


## Force Fragmentation

### hping3 -f -m 24 192.168.1.1

```bash
hping3 -f -m 24 192.168.1.1
```

Forces extreme fragmentation with 24-byte MTU.
Aggressively tests stack fragmentation reassembly and IDS evasion.


## Advanced Flood

### hping3 --rand-source -S -p 80 --flood 192.168.1.1

```bash
hping3 --rand-source -S -p 80 --flood 192.168.1.1
```

Simulates a DDoS flood with random sources.
Aggressive stress test for network infrastructure and security controls.


## Full Evasion

### hping3 -f -t 24 -P -p 80 192.168.1.1

```bash
hping3 -f -t 24 -P -p 80 192.168.1.1
```

Combines fragmentation, evasion TTL, and PUSH flags.
A sophisticated probe designed to bypass simple security monitoring.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [fping](https://terminal.rokibulroni.com/tool/network/fping)
