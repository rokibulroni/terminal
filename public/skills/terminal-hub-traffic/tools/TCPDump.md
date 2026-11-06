# tcpdump

> The classic packet capture tool: capture and filter traffic with BPF expressions and write it to pcap files for later analysis.

- Category: Traffic Analysis
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/traffic/TCPDump
- Homepage: https://www.tcpdump.org
- Documentation: https://www.tcpdump.org/manpages/tcpdump.1.html
- Tags: packet capture, pcap, BPF

## Install

- apt: `sudo apt install tcpdump`
- brew: `brew install tcpdump`

## Interface Selection

### tcpdump -D

```bash
tcpdump -D
```

Lists all available network interfaces on the system that can be captured.


## Basic Capture

### tcpdump -i eth0

```bash
tcpdump -i eth0
```

Captures all traffic flowing through the specific interface named eth0.

### tcpdump -i any

```bash
tcpdump -i any
```

Captures traffic from all active interfaces simultaneously (Pseudo-device capture).


## Output Formatting

### tcpdump -n

```bash
tcpdump -n
```

Example:

```bash
tcpdump -n -i eth0
```

Disables DNS name resolution to display IP addresses instead of hostnames.

### tcpdump -nn

```bash
tcpdump -nn
```

Example:

```bash
tcpdump -nn -i eth0
```

Disables both DNS name resolution and port name resolution (shows port numbers).


## Capture Count

### tcpdump -c 10

```bash
tcpdump -c 10
```

Example:

```bash
tcpdump -c 10 -i eth0
```

Captures exactly 10 packets and then automatically exits.


## Verbosity

### tcpdump -v

```bash
tcpdump -v
```

Example:

```bash
tcpdump -v -i eth0
```

Enables verbose output to see TTL, ID, total length, and options.

### tcpdump -vv

```bash
tcpdump -vv
```

Example:

```bash
tcpdump -vv -i eth0
```

Enables extra verbose output including NFS and SMB file decoding.

### tcpdump -vvv

```bash
tcpdump -vvv
```

Example:

```bash
tcpdump -vvv -i eth0
```

Enables maximum verbosity for full protocol decoding and analysis.


## Quiet Output

### tcpdump -q

```bash
tcpdump -q
```

Example:

```bash
tcpdump -q -i eth0
```

Prints less protocol information for a cleaner, easier to read line.


## Output Formatting

### tcpdump -t

```bash
tcpdump -t
```

Example:

```bash
tcpdump -t -i eth0
```

Disables timestamp printing on each line.

### tcpdump -tt

```bash
tcpdump -tt
```

Example:

```bash
tcpdump -tt -i eth0
```

Prints an unformatted unix epoch timestamp on each line.

### tcpdump -tttt

```bash
tcpdump -tttt
```

Example:

```bash
tcpdump -tttt -i eth0
```

Prints a human-readable date and timestamp for every packet.


## Link Layer

### tcpdump -e

```bash
tcpdump -e
```

Example:

```bash
tcpdump -e -i eth0
```

Prints the link-level header on each line, showing MAC addresses.


## Packet Display

### tcpdump -A

```bash
tcpdump -A
```

Example:

```bash
tcpdump -A -i eth0
```

Prints packets in ASCII format, useful for reading web pages or plain text data.

### tcpdump -X

```bash
tcpdump -X
```

Example:

```bash
tcpdump -X -i eth0
```

Prints packets in both Hex and ASCII format, essential for payload analysis.

### tcpdump -xx

```bash
tcpdump -xx
```

Example:

```bash
tcpdump -xx -i eth0
```

Prints the full packet data in hex, including the ethernet header.


## Snapshot Length

### tcpdump -s 0

```bash
tcpdump -s 0
```

Example:

```bash
tcpdump -s 0 -i eth0
```

Sets snapshot length to default (unlimited) to capture full packet bodies instead of truncating.


## Writing to File

### tcpdump -w capture.pcap

```bash
tcpdump -w capture.pcap
```

Example:

```bash
tcpdump -w capture.pcap -i eth0
```

Writes raw packet data to a standard PCAP file for later analysis.


## Reading from File

### tcpdump -r capture.pcap

```bash
tcpdump -r capture.pcap
```

Reads and analyzes packets from a previously saved PCAP file.


## File Rotation

### tcpdump -C 100 -w capture.pcap

```bash
tcpdump -C 100 -w capture.pcap
```

Rotates the capture file every 100 million bytes (approx 100MB).

### tcpdump -G 3600 -w capture_%H.pcap

```bash
tcpdump -G 3600 -w capture_%H.pcap
```

Rotates the capture file every 3600 seconds (1 hour) incorporating timestamp into filename.


## Host Filter

### tcpdump host 192.168.1.50

```bash
tcpdump host 192.168.1.50
```

Example:

```bash
tcpdump -n host 192.168.1.50
```

Filters traffic specifically to or from the host IP 192.168.1.50.


## Direction Filter

### tcpdump src 192.168.1.50

```bash
tcpdump src 192.168.1.50
```

Example:

```bash
tcpdump -n src 192.168.1.50
```

Captures only traffic originating from the specific IP address.

### tcpdump dst 192.168.1.50

```bash
tcpdump dst 192.168.1.50
```

Example:

```bash
tcpdump -n dst 192.168.1.50
```

Captures only traffic destined to the specific IP address.


## Network Filter

### tcpdump net 10.0.0.0/24

```bash
tcpdump net 10.0.0.0/24
```

Example:

```bash
tcpdump -n net 10.0.0.0/24
```

Captures all traffic belonging to the 10.0.0.0/24 subnet.


## Port Filter

### tcpdump port 80

```bash
tcpdump port 80
```

Example:

```bash
tcpdump -n port 80
```

Captures traffic flowing through port 80 (HTTP) regardless of direction.


## Port Range

### tcpdump portrange 1000-2000

```bash
tcpdump portrange 1000-2000
```

Example:

```bash
tcpdump -n portrange 1000-2000
```

Captures traffic on a range of ports from 1000 to 2000.


## Protocol Filter

### tcpdump tcp

```bash
tcpdump tcp
```

Example:

```bash
tcpdump -n tcp
```

Filters output to show only TCP protocol traffic.

### tcpdump udp

```bash
tcpdump udp
```

Example:

```bash
tcpdump -n udp
```

Filters output to show only UDP protocol traffic.

### tcpdump icmp

```bash
tcpdump icmp
```

Example:

```bash
tcpdump -n icmp
```

Filters output to show only ICMP (Ping/Unreachable) traffic.

### tcpdump arp

```bash
tcpdump arp
```

Example:

```bash
tcpdump -n arp
```

Filters output to show only ARP address resolution traffic.

### tcpdump ip6

```bash
tcpdump ip6
```

Example:

```bash
tcpdump -n ip6
```

Filters output to show only IPv6 traffic.


## Logical Operators

### tcpdump "src 10.0.0.1 and dst port 80"

```bash
tcpdump "src 10.0.0.1 and dst port 80"
```

Example:

```bash
tcpdump -n "src 10.0.0.1 and dst port 80"
```

Combines filters to match packets from 10.0.0.1 going to port 80.

### tcpdump "port 80 or port 443"

```bash
tcpdump "port 80 or port 443"
```

Example:

```bash
tcpdump -n "port 80 or port 443"
```

Matches packets using either port 80 or port 443.

### tcpdump "not port 22"

```bash
tcpdump "not port 22"
```

Example:

```bash
tcpdump -n "not port 22"
```

Excludes all SSH traffic from the capture.


## Complex Logic

### tcpdump "host 10.0.0.1 and (port 80 or port 443)"

```bash
tcpdump "host 10.0.0.1 and (port 80 or port 443)"
```

Example:

```bash
tcpdump -n "host 10.0.0.1 and (port 80 or port 443)"
```

Uses parentheses to group logic for a specific host on web ports.


## TCP Flags

### tcpdump "tcp[tcpflags] & tcp-syn != 0"

```bash
tcpdump "tcp[tcpflags] & tcp-syn != 0"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & tcp-syn != 0"
```

Captures only TCP packets with the SYN flag set (connection requests).

### tcpdump "tcp[tcpflags] & tcp-ack != 0"

```bash
tcpdump "tcp[tcpflags] & tcp-ack != 0"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & tcp-ack != 0"
```

Captures only TCP packets with the ACK flag set.

### tcpdump "tcp[tcpflags] & tcp-fin != 0"

```bash
tcpdump "tcp[tcpflags] & tcp-fin != 0"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & tcp-fin != 0"
```

Captures only TCP packets with the FIN flag set (connection termination).

### tcpdump "tcp[tcpflags] & tcp-rst != 0"

```bash
tcpdump "tcp[tcpflags] & tcp-rst != 0"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & tcp-rst != 0"
```

Captures only TCP packets with the RST flag set (connection reset).

### tcpdump "tcp[tcpflags] & tcp-push != 0"

```bash
tcpdump "tcp[tcpflags] & tcp-push != 0"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & tcp-push != 0"
```

Captures packets with the PUSH flag, indicating data should be processed immediately.


## Specific Flows

### tcpdump "tcp[tcpflags] & (tcp-syn|tcp-ack) == (tcp-syn|tcp-ack)"

```bash
tcpdump "tcp[tcpflags] & (tcp-syn|tcp-ack) == (tcp-syn|tcp-ack)"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & (tcp-syn|tcp-ack) == (tcp-syn|tcp-ack)"
```

Captures only SYN-ACK packets, representing the server response in a handshake.


## Packet Size

### tcpdump "less 32"

```bash
tcpdump "less 32"
```

Example:

```bash
tcpdump -n "less 32"
```

Captures packets smaller than 32 bytes.

### tcpdump "greater 1000"

```bash
tcpdump "greater 1000"
```

Example:

```bash
tcpdump -n "greater 1000"
```

Captures packets larger than 1000 bytes.


## Advanced BPF

### tcpdump "ip[2:2] > 600"

```bash
tcpdump "ip[2:2] > 600"
```

Example:

```bash
tcpdump -n "ip[2:2] > 600"
```

Uses byte offset filtering to capture packets with a total IP length greater than 600.

### tcpdump "tcp[13] & 2 != 0"

```bash
tcpdump "tcp[13] & 2 != 0"
```

Example:

```bash
tcpdump -n "tcp[13] & 2 != 0"
```

Manual BPF filter checking the 13th byte of TCP header for the SYN flag.


## ICMP Type

### tcpdump "icmp[icmptype] == icmp-echo"

```bash
tcpdump "icmp[icmptype] == icmp-echo"
```

Example:

```bash
tcpdump -n "icmp[icmptype] == icmp-echo"
```

Captures only ICMP Echo Requests (standard Pings).

### tcpdump "icmp[icmptype] == icmp-echoreply"

```bash
tcpdump "icmp[icmptype] == icmp-echoreply"
```

Example:

```bash
tcpdump -n "icmp[icmptype] == icmp-echoreply"
```

Captures only ICMP Echo Replies (Pong).


## Broadcast/Multicast

### tcpdump "ether dst ff:ff:ff:ff:ff:ff"

```bash
tcpdump "ether dst ff:ff:ff:ff:ff:ff"
```

Example:

```bash
tcpdump -n "ether dst ff:ff:ff:ff:ff:ff"
```

Captures layer 2 broadcast traffic specifically.

### tcpdump "ip multicast"

```bash
tcpdump "ip multicast"
```

Example:

```bash
tcpdump -n "ip multicast"
```

Captures traffic destined for multicast groups.


## VLAN Capture

### tcpdump vlan

```bash
tcpdump vlan
```

Example:

```bash
tcpdump -n -i eth0 vlan
```

Filters for traffic containing 802.1Q VLAN headers.

### tcpdump vlan 100

```bash
tcpdump vlan 100
```

Example:

```bash
tcpdump -n -i eth0 vlan 100
```

Captures traffic specifically tagged with VLAN ID 100.


## IPv6 Capture

### tcpdump ip6 proto 6

```bash
tcpdump ip6 proto 6
```

Example:

```bash
tcpdump -n ip6 proto 6
```

Captures IPv6 traffic specifically using the TCP protocol (Protocol 6).


## Security Forensics

### tcpdump -X -s 0 port 80

```bash
tcpdump -X -s 0 port 80
```

Captures full HTTP packets in Hex/ASCII to inspect payloads for malicious data.

### tcpdump "tcp[tcpflags] == 0"

```bash
tcpdump "tcp[tcpflags] == 0"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] == 0"
```

Detects Null Scan attacks where a packet is sent with no TCP flags set.

### tcpdump "tcp[tcpflags] & (tcp-fin|tcp-urg|tcp-push) == (tcp-fin|tcp-urg|tcp-push)"

```bash
tcpdump "tcp[tcpflags] & (tcp-fin|tcp-urg|tcp-push) == (tcp-fin|tcp-urg|tcp-push)"
```

Example:

```bash
tcpdump -n "tcp[tcpflags] & (tcp-fin|tcp-urg|tcp-push) == (tcp-fin|tcp-urg|tcp-push)"
```

Detects Xmas Tree scans which set the FIN, URG, and PUSH flags simultaneously.

### tcpdump "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420"

```bash
tcpdump "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420"
```

Example:

```bash
tcpdump -A "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420"
```

Advanced filter matching the bytes 'GET ' at the beginning of the TCP payload.

### tcpdump "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354"

```bash
tcpdump "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354"
```

Example:

```bash
tcpdump -A "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x504f5354"
```

Advanced filter matching the bytes 'POST' at the beginning of the TCP payload.

### tcpdump "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x48545450"

```bash
tcpdump "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x48545450"
```

Example:

```bash
tcpdump -A "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x48545450"
```

Matches 'HTTP' in payload, useful for finding HTTP responses or custom headers.

### tcpdump -l

```bash
tcpdump -l
```

Example:

```bash
tcpdump -l -i eth0 | grep 'Error'
```

Makes stdout line-buffered, allowing immediate piping to tools like grep.


## Tunnel Traffic

### tcpdump proto 47

```bash
tcpdump proto 47
```

Example:

```bash
tcpdump -n proto 47
```

Captures GRE (Generic Routing Encapsulation) tunnel traffic.

### tcpdump port 4789

```bash
tcpdump port 4789
```

Example:

```bash
tcpdump -n port 4789
```

Captures VXLAN traffic commonly used in modern cloud and container networking.


## Performance Tuning

### tcpdump -B 4096

```bash
tcpdump -B 4096
```

Example:

```bash
tcpdump -B 4096 -i eth0
```

Increases the capture buffer size to 4096KB to prevent packet drops during heavy load.

### tcpdump -K

```bash
tcpdump -K
```

Example:

```bash
tcpdump -K -i eth0
```

Don't verify checksums (default on some systems), improves performance on high-speed interfaces.


## User Agent Detection

### tcpdump -A -s 0 "tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)"

```bash
tcpdump -A -s 0 "tcp port 80 and (((ip[2:2] - ((ip[0]&0xf)<<2)) - ((tcp[12]&0xf0)>>2)) != 0)"
```

Filters for TCP segments that actually contain data (payload) to ignore empty ACKs.


## DNS Analysis

### tcpdump udp port 53

```bash
tcpdump udp port 53
```

Example:

```bash
tcpdump -n udp port 53
```

Standard filter for monitoring DNS queries and responses.


## NTP Analysis

### tcpdump udp port 123

```bash
tcpdump udp port 123
```

Example:

```bash
tcpdump -n udp port 123
```

Captures Network Time Protocol traffic for troubleshooting sync issues.


## DHCP Analysis

### tcpdump port 67 or port 68

```bash
tcpdump port 67 or port 68
```

Example:

```bash
tcpdump -n port 67 or port 68
```

Captures DHCP discovery, offer, request, and ack sequences.


## Intrusion Detection

### tcpdump "icmp[icmptype] == icmp-timexceed"

```bash
tcpdump "icmp[icmptype] == icmp-timexceed"
```

Example:

```bash
tcpdump -n "icmp[icmptype] == icmp-timexceed"
```

Captures TTL Exceeded messages, useful for visualizing traceroutes targeting your network.

### tcpdump "icmp[icmptype] == icmp-unreach"

```bash
tcpdump "icmp[icmptype] == icmp-unreach"
```

Example:

```bash
tcpdump -n "icmp[icmptype] == icmp-unreach"
```

Captures Destination Unreachable messages, often indicating closed ports or firewall rejects.


## Red Team

### tcpdump -w sensitive.pcap port 21 or port 23 or port 110

```bash
tcpdump -w sensitive.pcap port 21 or port 23 or port 110
```

Captures cleartext protocols (FTP, Telnet, POP3) to harvest credentials.


## Advanced Filtering

### tcpdump -i eth0 -n "broadcast or multicast"

```bash
tcpdump -i eth0 -n "broadcast or multicast"
```

Identifies noisy broadcast traffic that might be causing network storms.


## Specific Host Noise

### tcpdump -n "not host 192.168.1.50"

```bash
tcpdump -n "not host 192.168.1.50"
```

Captures everything EXCEPT traffic from a specific noisy backup server or admin host.


## Packet Header Analysis

### tcpdump -x

```bash
tcpdump -x
```

Example:

```bash
tcpdump -x -i eth0
```

Prints payload in hex without ASCII, useful for strict byte-level header verification.


## Absolute Sequence

### tcpdump -S

```bash
tcpdump -S
```

Example:

```bash
tcpdump -S -i eth0
```

Prints absolute TCP sequence numbers instead of relative ones, critical for TCP stream analysis.


## MPLS Capture

### tcpdump mpls

```bash
tcpdump mpls
```

Example:

```bash
tcpdump -n mpls
```

Captures Multi-Protocol Label Switching packets.


## Cookie/Header Hunt

### tcpdump -A -s 0 'tcp port 80 and tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x436f6f6b'

```bash
tcpdump -A -s 0 'tcp port 80 and tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x436f6f6b'
```

Matches packets starting with 'Cook' (Cookie) in the payload.


## Directional Interface

### tcpdump -Q in

```bash
tcpdump -Q in
```

Example:

```bash
tcpdump -Q in -i eth0
```

Captures only ingress (incoming) traffic on the interface (Linux specific).

### tcpdump -Q out

```bash
tcpdump -Q out
```

Example:

```bash
tcpdump -Q out -i eth0
```

Captures only egress (outgoing) traffic on the interface (Linux specific).


## Raw Capture

### tcpdump -U -w capture.pcap

```bash
tcpdump -U -w capture.pcap
```

Writes packets to file immediately as they arrive without buffering (Packet Buffered).


## Protocol Specific

### tcpdump proto 89

```bash
tcpdump proto 89
```

Example:

```bash
tcpdump -n proto 89
```

Captures OSPF routing protocol traffic.

### tcpdump port 179

```bash
tcpdump port 179
```

Example:

```bash
tcpdump -n port 179
```

Captures BGP (Border Gateway Protocol) traffic.


## Advanced BPF

### tcpdump "ip[6] & 128 != 0"

```bash
tcpdump "ip[6] & 128 != 0"
```

Example:

```bash
tcpdump -n "ip[6] & 128 != 0"
```

Detects packets with the 'Evil Bit' (Reserved bit) set in the IP header.


## Complex Exclusion

### tcpdump "host 10.0.0.1 and not port 22 and not port 53"

```bash
tcpdump "host 10.0.0.1 and not port 22 and not port 53"
```

Example:

```bash
tcpdump -n "host 10.0.0.1 and not port 22 and not port 53"
```

Focuses on a host while removing standard administrative noise like SSH and DNS.

## Related tools

- [TShark](https://terminal.rokibulroni.com/tool/traffic/tshark)
- [ngrep](https://terminal.rokibulroni.com/tool/traffic/ngrep)
- [Wireshark CLI tools](https://terminal.rokibulroni.com/tool/traffic/wireshark-cli)
