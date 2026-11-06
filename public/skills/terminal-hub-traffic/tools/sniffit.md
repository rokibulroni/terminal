# Sniffit

> A legacy packet sniffer with an interactive ncurses mode for watching TCP sessions in real time.

- Category: Traffic Analysis
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/traffic/sniffit
- Homepage: https://github.com/resurrecting-open-source-projects/sniffit
- Tags: packet capture, legacy

## Install

- apt: `sudo apt install sniffit`

## Basic Capture

### sniffit -v

```bash
sniffit -v
```

Displays the current version number of the sniffit tool.

### sniffit -i

```bash
sniffit -i
```

Launches sniffit in interactive ncurses mode for real-time monitoring.


## Interface Selection

### sniffit -F eth0

```bash
sniffit -F eth0
```

Forces the tool to listen on the eth0 network interface.

### sniffit -F wlan0 -i

```bash
sniffit -F wlan0 -i
```

Starts interactive mode specifically on the wireless interface wlan0.


## Host and Port Filtering

### sniffit -t 192.168.1.10

```bash
sniffit -t 192.168.1.10
```

Captures only traffic destined for the target IP address 192.168.1.10.

### sniffit -s 192.168.1.50

```bash
sniffit -s 192.168.1.50
```

Captures only traffic originating from the source IP address 192.168.1.50.

### sniffit -b 192.168.1.20

```bash
sniffit -b 192.168.1.20
```

Captures bidirectional traffic (incoming and outgoing) for the specified host.


## Protocol Selection

### sniffit -P tcp

```bash
sniffit -P tcp
```

Filters the capture to include only TCP protocol packets.

### sniffit -P udp

```bash
sniffit -P udp
```

Filters the capture to include only UDP protocol packets.

### sniffit -P icmp

```bash
sniffit -P icmp
```

Filters the capture to include only ICMP control packets like ping.

### sniffit -P ip

```bash
sniffit -P ip
```

Captures raw IP packets regardless of the underlying transport protocol.


## Host and Port Filtering

### sniffit -p 80

```bash
sniffit -p 80
```

Captures traffic on port 80 for web traffic analysis.

### sniffit -p 22

```bash
sniffit -p 22
```

Monitors traffic on port 22 to observe SSH connection attempts.

### sniffit -p 53 -P udp

```bash
sniffit -p 53 -P udp
```

Captures UDP traffic on port 53 for DNS query analysis.

### sniffit -p 21 -t 192.168.1.10

```bash
sniffit -p 21 -t 192.168.1.10
```

Captures FTP command traffic destined for the specific target IP.


## ASCII and Hex Output

### sniffit -a -p 80

```bash
sniffit -a -p 80
```

Displays captured web traffic on port 80 in human-readable ASCII format.

### sniffit -x -p 80

```bash
sniffit -x -p 80
```

Displays captured web traffic on port 80 in hexadecimal format.

### sniffit -d -p 80

```bash
sniffit -d -p 80
```

Dumps the raw packet content of web traffic to the console.

### sniffit -a -p 23 -b 192.168.1.1

```bash
sniffit -a -p 23 -b 192.168.1.1
```

Captures Telnet traffic for the host in ASCII to view cleartext commands.


## Output Formatting

### sniffit -7 -a -p 80

```bash
sniffit -7 -a -p 80
```

Forces 7-bit ASCII mode output for compatibility with older terminals.


## Performance and Buffer Control

### sniffit -l 0 -p 80

```bash
sniffit -l 0 -p 80
```

Sets snaplength to 0 to capture the entire packet regardless of size.

### sniffit -l 200 -p 80

```bash
sniffit -l 200 -p 80
```

Limits capture to the first 200 bytes of data per packet.


## Logging and File Output

### sniffit -L 500 -t 192.168.1.10

```bash
sniffit -L 500 -t 192.168.1.10
```

Sets the log depth to 500 bytes when logging plugin activity.


## Configuration

### sniffit -c config_file

```bash
sniffit -c config_file
```

Example:

```bash
sniffit -c /etc/sniffit.conf
```

Loads capture settings and filtering rules from a specified configuration file.


## Legacy Network Troubleshooting

### sniffit -P icmp -b 192.168.1.1

```bash
sniffit -P icmp -b 192.168.1.1
```

Monitors bidirectional ICMP traffic to troubleshoot connectivity with the gateway.


## Red Team Traffic Validation

### sniffit -a -p 21 -t 10.0.0.5

```bash
sniffit -a -p 21 -t 10.0.0.5
```

Inspects FTP traffic in ASCII to validate cleartext credential transmission.

### sniffit -a -p 110 -t 10.0.0.5

```bash
sniffit -a -p 110 -t 10.0.0.5
```

Monitors POP3 email traffic in ASCII to demonstrate insecure login mechanisms.


## Blue Team Monitoring Scenarios

### sniffit -x -p 443 -t 192.168.1.10

```bash
sniffit -x -p 443 -t 192.168.1.10
```

Inspects the hex dump of HTTPS handshake headers to verify TLS versions.

### sniffit -P tcp -b 192.168.1.100 -l 64

```bash
sniffit -P tcp -b 192.168.1.100 -l 64
```

Captures only headers (first 64 bytes) of TCP traffic for traffic flow analysis.


## Advanced and Combined Real World Usage

### sniffit -F eth0 -a -p 80 -b 192.168.1.5

```bash
sniffit -F eth0 -a -p 80 -b 192.168.1.5
```

Captures ASCII web traffic on eth0 specifically for the target host 192.168.1.5.


## Educational and Learning Use Cases

### sniffit -d -p 25

```bash
sniffit -d -p 25
```

Dumps SMTP email traffic to help students understand email protocol commands.

### sniffit -x -P icmp

```bash
sniffit -x -P icmp
```

Displays ICMP packets in hex to teach packet structure and header fields.


## TCP Session Monitoring

### sniffit -a -p 6667

```bash
sniffit -a -p 6667
```

Captures IRC chat traffic in ASCII to monitor channel conversations.


## UDP Traffic Inspection

### sniffit -d -p 161 -P udp

```bash
sniffit -d -p 161 -P udp
```

Dumps SNMP traffic on port 161 to inspect management strings.


## Output Formatting

### sniffit -A . -a -p 80

```bash
sniffit -A . -a -p 80
```

Replaces non-printable characters with a dot while dumping ASCII web traffic.


## Advanced and Combined Real World Usage

### sniffit -F eth0 -x -t 192.168.1.1 -p 22

```bash
sniffit -F eth0 -x -t 192.168.1.1 -p 22
```

Analyzes the SSH handshake in hex on eth0 specifically for the gateway IP.


## Incident Response Demonstrations

### sniffit -s 203.0.113.5 -P tcp

```bash
sniffit -s 203.0.113.5 -P tcp
```

Isolates all TCP traffic originating from a known malicious external IP.

### sniffit -b 192.168.1.200 -P udp

```bash
sniffit -b 192.168.1.200 -P udp
```

Investigates UDP beaconing behavior coming from a compromised internal host.


## Session Reassembly

### sniffit -a -t 192.168.1.10 -p 80 -l 0

```bash
sniffit -a -t 192.168.1.10 -p 80 -l 0
```

Captures full-length packets in ASCII to assist in manual HTTP session reconstruction.


## Advanced and Combined Real World Usage

### sniffit -n -i

```bash
sniffit -n -i
```

Starts interactive mode with IP address generation turned off for speed or compatibility.


## Legacy Network Troubleshooting

### sniffit -d -s 0.0.0.0

```bash
sniffit -d -s 0.0.0.0
```

Captures DHCP discovery packets which often originate from source 0.0.0.0.


## Output Formatting

### sniffit -d -p 80 > dump.txt

```bash
sniffit -d -p 80 > dump.txt
```

Redirects the raw packet dump output to a file for later analysis.


## Quiet and Verbose Modes

### sniffit -v -i

```bash
sniffit -v -i
```

Starts interactive mode while displaying version or verbose information on startup.


## IPv4 Traffic Analysis

### sniffit -P ip -t 224.0.0.1

```bash
sniffit -P ip -t 224.0.0.1
```

Monitors raw IP traffic destined for the multicast all-hosts address.


## Protocol Selection

### sniffit -P tcp -p 445

```bash
sniffit -P tcp -p 445
```

Filters for SMB traffic over TCP to analyze Windows file sharing activity.


## Host and Port Filtering

### sniffit -b 192.168.1.1 -p 123 -P udp

```bash
sniffit -b 192.168.1.1 -p 123 -P udp
```

Monitors bidirectional NTP time synchronization traffic on UDP port 123.


## Advanced and Combined Real World Usage

### sniffit -F eth0 -a -s 10.0.0.1 -p 23

```bash
sniffit -F eth0 -a -s 10.0.0.1 -p 23
```

Captures Telnet output from a router on eth0 to view configuration changes.


## Traffic Direction Control

### sniffit -t 192.168.1.255

```bash
sniffit -t 192.168.1.255
```

Captures traffic destined for the broadcast address of the local subnet.


## Educational and Learning Use Cases

### sniffit -x -p 21

```bash
sniffit -x -p 21
```

Shows the hexadecimal representation of FTP control commands for protocol study.


## Blue Team Monitoring Scenarios

### sniffit -P tcp -p 3389 -t 192.168.1.50

```bash
sniffit -P tcp -p 3389 -t 192.168.1.50
```

Monitors RDP connection attempts to a critical server for unauthorized access.


## Performance and Buffer Control

### sniffit -l 1500 -p 80

```bash
sniffit -l 1500 -p 80
```

Ensures capture of full Ethernet frames by setting snaplength to the standard MTU.


## Logging and File Output

### sniffit -L 1000 -a -p 80

```bash
sniffit -L 1000 -a -p 80
```

Logs up to 1000 bytes of ASCII web data per packet for deep inspection.


## Advanced and Combined Real World Usage

### sniffit -F eth1 -d -P icmp

```bash
sniffit -F eth1 -d -P icmp
```

Dumps raw ICMP traffic on a secondary interface to troubleshoot routing loops.


## Red Team Traffic Validation

### sniffit -a -p 8080 -t 10.0.0.2

```bash
sniffit -a -p 8080 -t 10.0.0.2
```

Inspects traffic to an alternative web port to find unencrypted administration panels.


## Legacy Network Troubleshooting

### sniffit -x -p 67 -P udp

```bash
sniffit -x -p 67 -P udp
```

Inspects DHCP server traffic in hex to debug address assignment issues.


## Advanced and Combined Real World Usage

### sniffit -d -p 514 -P udp

```bash
sniffit -d -p 514 -P udp
```

Dumps Syslog traffic to verify that logs are being transmitted correctly.


## Output Formatting

### sniffit -A ? -a -t 192.168.1.1

```bash
sniffit -A ? -a -t 192.168.1.1
```

Replaces non-printable characters with a question mark in ASCII output.


## Host and Port Filtering

### sniffit -p 143 -t 192.168.1.5

```bash
sniffit -p 143 -t 192.168.1.5
```

Monitors IMAP traffic to the target server for email retrieval activity.


## Interface Selection

### sniffit -F lo -i

```bash
sniffit -F lo -i
```

Starts interactive monitoring on the loopback interface for local traffic analysis.


## Advanced and Combined Real World Usage

### sniffit -7 -a -p 23 -b 192.168.1.254

```bash
sniffit -7 -a -p 23 -b 192.168.1.254
```

Uses 7-bit ASCII mode to monitor legacy Telnet connections to a core switch.

## Related tools

- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [ngrep](https://terminal.rokibulroni.com/tool/traffic/ngrep)
