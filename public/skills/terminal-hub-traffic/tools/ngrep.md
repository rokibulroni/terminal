# ngrep

> “Network grep” — matches regular expressions against packet payloads, like grep for network traffic.

- Category: Traffic Analysis
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/traffic/ngrep
- Homepage: https://github.com/jpr5/ngrep
- Tags: packet capture, pattern matching

## Install

- apt: `sudo apt install ngrep`
- brew: `brew install ngrep`

## Basic Pattern Matching

### ngrep .

```bash
ngrep .
```

Captures and displays all traffic on the default interface by matching any character.

### ngrep error

```bash
ngrep error
```

Searches for the string 'error' in all network packets on the default interface.


## Interface Selection

### ngrep -d eth0 .

```bash
ngrep -d eth0 .
```

Listens for traffic specifically on the 'eth0' network interface.

### ngrep -d any .

```bash
ngrep -d any .
```

Listens for traffic on all available network interfaces simultaneously.

### ngrep -d lo0 .

```bash
ngrep -d lo0 .
```

Listens for localhost loopback traffic specifically.


## Quiet Mode

### ngrep -q GET

```bash
ngrep -q GET
```

Runs in quiet mode, suppressing the '#' hash marks for non-matching packets.


## Case Insensitive Matching

### ngrep -i pass

```bash
ngrep -i pass
```

Searches for 'pass' regardless of case (e.g., matching PASS, Pass, or pass).


## Invert Matching

### ngrep -v HTTP

```bash
ngrep -v HTTP
```

Displays only packets that do NOT contain the pattern 'HTTP'.


## Word Boundary Matching

### ngrep -w user

```bash
ngrep -w user
```

Matches 'user' as a whole word, ignoring substrings like 'username'.


## Port Filtering

### ngrep . port 80

```bash
ngrep . port 80
```

Captures all traffic destined for or originating from port 80.

### ngrep . port 443

```bash
ngrep . port 443
```

Captures all traffic associated with HTTPS port 443.


## Host Filtering

### ngrep . host 192.168.1.5

```bash
ngrep . host 192.168.1.5
```

Filters traffic to show only packets sent to or from host 192.168.1.5.

### ngrep . dst host 10.0.0.1

```bash
ngrep . dst host 10.0.0.1
```

Captures only packets where the destination IP is 10.0.0.1.

### ngrep . src host 10.0.0.1

```bash
ngrep . src host 10.0.0.1
```

Captures only packets where the source IP is 10.0.0.1.


## Network Filtering

### ngrep . net 192.168.1.0/24

```bash
ngrep . net 192.168.1.0/24
```

Captures traffic for the entire 192.168.1.0/24 subnet.


## Output Formatting

### ngrep -W byline GET port 80

```bash
ngrep -W byline GET port 80
```

Formats the payload output with line breaks, making HTTP headers readable.

### ngrep -W single GET port 80

```bash
ngrep -W single GET port 80
```

Forces the output of the matching packet payload onto a single line.

### ngrep -W none GET

```bash
ngrep -W none GET
```

Displays payload without any special formatting (raw wrapping).


## Timestamping

### ngrep -t .

```bash
ngrep -t .
```

Prints a timestamp in YYYY/MM/DD HH:MM:SS.UUUUUU format for every match.

### ngrep -T .

```bash
ngrep -T .
```

Prints the time delta (elapsed time) between matched packets.


## Packet Count Control

### ngrep -n 5 .

```bash
ngrep -n 5 .
```

Captures exactly 5 matching packets and then exits.

### ngrep -n 1 GET

```bash
ngrep -n 1 GET
```

Finds the first packet containing 'GET' and immediately exits.


## Protocol Filtering

### ngrep . tcp port 22

```bash
ngrep . tcp port 22
```

Restricts inspection to TCP traffic on port 22 (SSH).

### ngrep . udp port 53

```bash
ngrep . udp port 53
```

Restricts inspection to UDP traffic on port 53 (DNS).

### ngrep . icmp

```bash
ngrep . icmp
```

Captures only ICMP traffic (ping, traceroute).


## Hex Output

### ngrep -x .

```bash
ngrep -x .
```

Displays the packet payload in both hexadecimal and ASCII format.

### ngrep -x GET port 80

```bash
ngrep -x GET port 80
```

Matches 'GET' and shows the full packet in hex dump format.


## Hex Pattern Matching

### ngrep -X 0x474554

```bash
ngrep -X 0x474554
```

Searches traffic for the hex signature 474554 (which is 'GET' in ASCII).

### ngrep -X 0xDEADBEEF

```bash
ngrep -X 0xDEADBEEF
```

Searches for the specific binary magic bytes 0xDEADBEEF in the payload.


## Saving to File

### ngrep -O capture.pcap .

```bash
ngrep -O capture.pcap .
```

Saves all matched packets to a file named 'capture.pcap' in pcap format.

### ngrep -O suspicious.pcap -q evil

```bash
ngrep -O suspicious.pcap -q evil
```

Saves only packets containing 'evil' to a pcap file without printing hash marks.


## Reading from File

### ngrep -I capture.pcap .

```bash
ngrep -I capture.pcap .
```

Reads and analyzes packets from an existing 'capture.pcap' file instead of live traffic.

### ngrep -I capture.pcap -W byline HTTP

```bash
ngrep -I capture.pcap -W byline HTTP
```

Searches for 'HTTP' within a pcap file and displays output in readable line format.


## Complex Filters

### ngrep . 'src host 1.1.1.1 and dst port 80'

```bash
ngrep . 'src host 1.1.1.1 and dst port 80'
```

Combines host and port filters to see web traffic originating from 1.1.1.1.

### ngrep . 'tcp and not port 22'

```bash
ngrep . 'tcp and not port 22'
```

Captures all TCP traffic excluding traffic on port 22 (SSH).

### ngrep . 'host 10.0.0.1 or host 10.0.0.2'

```bash
ngrep . 'host 10.0.0.1 or host 10.0.0.2'
```

Captures traffic involving either 10.0.0.1 or 10.0.0.2.


## HTTP Analysis

### ngrep -W byline "^GET" port 80

```bash
ngrep -W byline "^GET" port 80
```

Captures HTTP GET requests, formatting headers cleanly.

### ngrep -W byline "^POST" port 80

```bash
ngrep -W byline "^POST" port 80
```

Captures HTTP POST requests to analyze submitted form data.

### ngrep -W byline "User-Agent:" port 80

```bash
ngrep -W byline "User-Agent:" port 80
```

Inspects HTTP traffic specifically to see User-Agent strings.

### ngrep -W byline "Cookie:" port 80

```bash
ngrep -W byline "Cookie:" port 80
```

Extracts Cookie headers from HTTP traffic for session analysis.


## DNS Analysis

### ngrep -d any . port 53

```bash
ngrep -d any . port 53
```

Monitors all DNS queries and responses on all interfaces.

### ngrep -i "google" udp port 53

```bash
ngrep -i "google" udp port 53
```

Filters DNS traffic specifically for queries related to 'google'.


## FTP Analysis

### ngrep -W byline "USER|PASS" port 21

```bash
ngrep -W byline "USER|PASS" port 21
```

Watches FTP control traffic for login attempts (username and password).


## SMTP Analysis

### ngrep -W byline "MAIL FROM" port 25

```bash
ngrep -W byline "MAIL FROM" port 25
```

Monitors outgoing emails by filtering for the SMTP MAIL FROM command.

### ngrep -W byline "RCPT TO" port 25

```bash
ngrep -W byline "RCPT TO" port 25
```

Monitors incoming email destinations via the SMTP RCPT TO command.


## Telnet Analysis

### ngrep -q . port 23

```bash
ngrep -q . port 23
```

Captures cleartext Telnet traffic.


## Snapshot Length

### ngrep -s 1500 .

```bash
ngrep -s 1500 .
```

Sets the snaplen (capture size) to 1500 bytes to capture full Ethernet frames.

### ngrep -s 60 .

```bash
ngrep -s 60 .
```

Sets a small snaplen to capture only packet headers, saving performance.


## Regular Expressions

### ngrep "^G.+HTTP" port 80

```bash
ngrep "^G.+HTTP" port 80
```

Uses regex to match packets starting with G, followed by chars, ending with HTTP.

### ngrep "[0-9]{3}-[0-9]{2}-[0-9]{4}" .

```bash
ngrep "[0-9]{3}-[0-9]{2}-[0-9]{4}" .
```

Searches traffic for patterns resembling Social Security Numbers (regex).

### ngrep "admin|root" port 22

```bash
ngrep "admin|root" port 22
```

Looks for 'admin' OR 'root' in SSH traffic (note: SSH is encrypted, usually yields no match unless re-keying).


## SQL Injection Monitoring

### ngrep -i "UNION SELECT" port 80

```bash
ngrep -i "UNION SELECT" port 80
```

Detects potential SQL Injection attempts containing 'UNION SELECT'.

### ngrep -i "' OR '1'='1" port 80

```bash
ngrep -i "' OR '1'='1" port 80
```

Detects classic tautology based SQL Injection patterns.


## XSS Monitoring

### ngrep -i "<script>" port 80

```bash
ngrep -i "<script>" port 80
```

Detects Cross-Site Scripting (XSS) payloads in cleartext HTTP.


## Shellshock Detection

### ngrep -d any "() { :;};" port 80

```bash
ngrep -d any "() { :;};" port 80
```

Monitors for the specific signature of the Shellshock vulnerability.


## Credit Card Hunting

### ngrep "[0-9]{4}.[0-9]{4}.[0-9]{4}.[0-9]{4}" port 80

```bash
ngrep "[0-9]{4}.[0-9]{4}.[0-9]{4}.[0-9]{4}" port 80
```

Uses regex to hunt for cleartext credit card number patterns.


## SSH Version Scan

### ngrep -P "SSH-" port 22

```bash
ngrep -P "SSH-" port 22
```

Identifies the SSH version string during the initial handshake.


## Empty Pattern Filter

### ngrep "" port 80

```bash
ngrep "" port 80
```

Matches ALL packets on port 80 without searching for a specific string.


## IPv6 Analysis

### ngrep . ip6

```bash
ngrep . ip6
```

Filters and captures only IPv6 protocol traffic.

### ngrep . ip6 and port 80

```bash
ngrep . ip6 and port 80
```

Captures web traffic specifically over IPv6 networks.


## VLAN Tagged Traffic

### ngrep . vlan

```bash
ngrep . vlan
```

Captures traffic that contains 802.1Q VLAN tags.


## Broadcast Traffic

### ngrep . broadcast

```bash
ngrep . broadcast
```

Monitors network broadcast traffic.


## Multicast Traffic

### ngrep . multicast

```bash
ngrep . multicast
```

Monitors network multicast traffic.


## TCP Flags

### ngrep . 'tcp[tcpflags] & tcp-syn != 0'

```bash
ngrep . 'tcp[tcpflags] & tcp-syn != 0'
```

Captures only TCP packets with the SYN flag set (connection initiation).

### ngrep . 'tcp[tcpflags] & (tcp-syn|tcp-ack) == (tcp-syn|tcp-ack)'

```bash
ngrep . 'tcp[tcpflags] & (tcp-syn|tcp-ack) == (tcp-syn|tcp-ack)'
```

Captures TCP SYN-ACK packets (handshake response).

### ngrep . 'tcp[tcpflags] & tcp-rst != 0'

```bash
ngrep . 'tcp[tcpflags] & tcp-rst != 0'
```

Captures TCP Reset (RST) packets, useful for debugging connection drops.


## Hex with Formatting

### ngrep -x -W byline GET port 80

```bash
ngrep -x -W byline GET port 80
```

Combines hex dump and byline formatting for detailed HTTP inspection.


## Combined Filters

### ngrep -d eth0 -q -W byline "POST" port 80 and host 10.10.10.5

```bash
ngrep -d eth0 -q -W byline "POST" port 80 and host 10.10.10.5
```

Quietly monitors POST requests on eth0 specifically involving host 10.10.10.5.


## User/Pass Pattern

### ngrep -i "user|pass|login" port 80

```bash
ngrep -i "user|pass|login" port 80
```

Generic search for login-related terms in cleartext web traffic.


## Range of Ports

### ngrep . portrange 8000-8080

```bash
ngrep . portrange 8000-8080
```

Captures traffic spanning a range of ports from 8000 to 8080.


## Exclude Source

### ngrep . not src host 192.168.1.1

```bash
ngrep . not src host 192.168.1.1
```

Captures everything EXCEPT traffic coming from 192.168.1.1.


## Timestamp Delta Debug

### ngrep -T -q . icmp

```bash
ngrep -T -q . icmp
```

Quietly pings with delta timestamps to measure network latency jitter.


## Non-Printable Char

### ngrep -X "00" port 80

```bash
ngrep -X "00" port 80
```

Searches for null bytes (0x00) which might indicate binary data or overflow attempts.


## IRC Traffic

### ngrep -i "JOIN" port 6667

```bash
ngrep -i "JOIN" port 6667
```

Monitors IRC channel joins on the standard IRC port.

### ngrep -i "PRIVMSG" port 6667

```bash
ngrep -i "PRIVMSG" port 6667
```

Monitors private messages in IRC traffic.


## Database Traffic

### ngrep . port 3306

```bash
ngrep . port 3306
```

Monitors generic MySQL database traffic.

### ngrep . port 5432

```bash
ngrep . port 5432
```

Monitors generic PostgreSQL database traffic.


## Kill TCP Connection

### ngrep -K 1 pattern

```bash
ngrep -K 1 pattern
```

Attempts to send TCP RST to kill connections matching the pattern (works on some systems).


## Limit Context

### ngrep -n 3 -W byline . host 1.2.3.4

```bash
ngrep -n 3 -W byline . host 1.2.3.4
```

Debugging a specific host with formatting, stopping after 3 packets.


## ARP Traffic

### ngrep . arp

```bash
ngrep . arp
```

Monitors Address Resolution Protocol packets for ARP spoofing detection.


## RARP Traffic

### ngrep . rarp

```bash
ngrep . rarp
```

Monitors Reverse ARP traffic.


## Packet Size Filter

### ngrep . 'greater 100'

```bash
ngrep . 'greater 100'
```

Captures only packets larger than 100 bytes.

### ngrep . 'less 64'

```bash
ngrep . 'less 64'
```

Captures only packets smaller than 64 bytes (runts/control frames).


## DHCP Discovery

### ngrep . port 67 or port 68

```bash
ngrep . port 67 or port 68
```

Monitors DHCP requests and responses.


## NTP Analysis

### ngrep . port 123

```bash
ngrep . port 123
```

Monitors Network Time Protocol traffic.


## SNMP Analysis

### ngrep . port 161

```bash
ngrep . port 161
```

Monitors Simple Network Management Protocol traffic.


## Wildcard Interface

### ngrep -d any -q .

```bash
ngrep -d any -q .
```

Quietly captures everything on every interface.


## High Speed Capture

### ngrep -d eth0 -n 1000 -q .

```bash
ngrep -d eth0 -n 1000 -q .
```

Rapidly grabs a 1000 packet sample from eth0 without screen output overhead.


## SIP/VoIP Analysis

### ngrep -W byline "INVITE" port 5060

```bash
ngrep -W byline "INVITE" port 5060
```

Detects SIP VoIP call initiation packets.

### ngrep -W byline "REGISTER" port 5060

```bash
ngrep -W byline "REGISTER" port 5060
```

Detects SIP phone registration attempts.


## JSON API Debugging

### ngrep -W byline "application/json" port 80

```bash
ngrep -W byline "application/json" port 80
```

Filters for HTTP packets indicating JSON content type.


## Basic Auth Discovery

### ngrep -W byline "Authorization: Basic" port 80

```bash
ngrep -W byline "Authorization: Basic" port 80
```

Finds HTTP headers using Basic Authentication (Base64 encoded creds).


## PCAP Replay Analysis

### ngrep -I traffic.pcap -O filtered.pcap "GET"

```bash
ngrep -I traffic.pcap -O filtered.pcap "GET"
```

Reads traffic.pcap, finds packets with 'GET', and saves them to filtered.pcap.


## Configuration Files

### ngrep -F patterns.txt .

```bash
ngrep -F patterns.txt .
```

Reads search patterns from a file named 'patterns.txt' instead of command line.


## Ignore Case Regex

### ngrep -i "^error|^fail" .

```bash
ngrep -i "^error|^fail" .
```

Case-insensitive regex search for error or failure at line start.


## IMAP Traffic

### ngrep . port 143

```bash
ngrep . port 143
```

Monitors unencrypted IMAP email traffic.


## POP3 Traffic

### ngrep . port 110

```bash
ngrep . port 110
```

Monitors unencrypted POP3 email traffic.


## LDAP Traffic

### ngrep . port 389

```bash
ngrep . port 389
```

Monitors Lightweight Directory Access Protocol queries.


## Forensic Hex Search

### ngrep -X "4d 5a" port 80

```bash
ngrep -X "4d 5a" port 80
```

Searches for 'MZ' header (4D 5A) indicating Windows executable downloads.


## Advanced Troubleshooting

### ngrep -d any -t -T -W byline "Error" port 80

```bash
ngrep -d any -t -T -W byline "Error" port 80
```

Combines interface, timestamp, delta, formatting, and pattern for deep analysis.

## Related tools

- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [TShark](https://terminal.rokibulroni.com/tool/traffic/tshark)
