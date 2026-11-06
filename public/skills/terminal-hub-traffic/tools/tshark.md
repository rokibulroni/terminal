# TShark

> Wireshark’s terminal version: capture and decode traffic with full dissectors and display filters, and extract fields to text.

- Category: Traffic Analysis
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/traffic/tshark
- Homepage: https://www.wireshark.org
- Documentation: https://www.wireshark.org/docs/man-pages/tshark.html
- Tags: packet analysis, Wireshark, dissectors

## Install

- apt: `sudo apt install tshark`
- brew: `brew install wireshark`

## Basic Packet Capture

### tshark -D

```bash
tshark -D
```

Lists all network interfaces available for packet capturing

### tshark -i eth0

```bash
tshark -i eth0
```

Captures live traffic from a specific interface named eth0

### tshark -i any

```bash
tshark -i any
```

Captures traffic from all available interfaces simultaneously

### tshark -p -i eth0

```bash
tshark -p -i eth0
```

Captures traffic in non-promiscuous mode, seeing only traffic destined for the host


## Packet Count and Duration Control

### tshark -c 100 -i eth0

```bash
tshark -c 100 -i eth0
```

Captures exactly 100 packets and then exits automatically

### tshark -a duration:60 -i eth0

```bash
tshark -a duration:60 -i eth0
```

Stops the capture automatically after 60 seconds

### tshark -a filesize:10000 -w capture.pcap

```bash
tshark -a filesize:10000 -w capture.pcap
```

Stops writing to the file after it reaches 10,000 KB in size


## Writing Capture Files

### tshark -w capture.pcap -i eth0

```bash
tshark -w capture.pcap -i eth0
```

Writes captured raw packet data to a file in pcapng format

### tshark -b files:5 -b filesize:10000 -w rolling.pcap

```bash
tshark -b files:5 -b filesize:10000 -w rolling.pcap
```

Creates a ring buffer of 5 files, rotating when each reaches 10MB

### tshark -F pcap -w legacy.pcap

```bash
tshark -F pcap -w legacy.pcap
```

Saves the capture in the legacy pcap format instead of pcapng


## Reading PCAP Files

### tshark -r capture.pcap

```bash
tshark -r capture.pcap
```

Reads and displays packets from a previously saved capture file


## Capture Filters (BPF)

### tshark -f "host 192.168.1.10" -i eth0

```bash
tshark -f "host 192.168.1.10" -i eth0
```

Captures only traffic to or from a specific IP address

### tshark -f "tcp port 80" -i eth0

```bash
tshark -f "tcp port 80" -i eth0
```

Captures only TCP traffic on port 80

### tshark -f "net 10.0.0.0/24" -i eth0

```bash
tshark -f "net 10.0.0.0/24" -i eth0
```

Captures traffic belonging to the specified subnet

### tshark -f "not arp and not port 53" -i eth0

```bash
tshark -f "not arp and not port 53" -i eth0
```

Excludes ARP and DNS traffic from the capture to reduce noise

### tshark -s 64 -i eth0

```bash
tshark -s 64 -i eth0
```

Captures only the first 64 bytes of each packet (snapshot length)


## Display Filters

### tshark -r capture.pcap -Y "http.request"

```bash
tshark -r capture.pcap -Y "http.request"
```

Displays only HTTP request packets from the loaded file

### tshark -r capture.pcap -Y "ip.addr == 192.168.1.5"

```bash
tshark -r capture.pcap -Y "ip.addr == 192.168.1.5"
```

Filters the view to show only packets involving a specific IP

### tshark -r capture.pcap -Y "tcp.flags.reset == 1"

```bash
tshark -r capture.pcap -Y "tcp.flags.reset == 1"
```

Displays only TCP packets where the RST (reset) flag is set

### tshark -r capture.pcap -Y "frame.time_delta > 0.2"

```bash
tshark -r capture.pcap -Y "frame.time_delta > 0.2"
```

Shows packets that arrived more than 200ms after the previous packet

### tshark -r capture.pcap -2 -R "tcp.analysis.flags"

```bash
tshark -r capture.pcap -2 -R "tcp.analysis.flags"
```

Performs a two-pass analysis to accurately filter TCP retransmissions and flags


## Output Formats

### tshark -r capture.pcap -V

```bash
tshark -r capture.pcap -V
```

Displays the full verbose packet details tree for every packet

### tshark -r capture.pcap -x

```bash
tshark -r capture.pcap -x
```

Displays the packet data in both hexadecimal and ASCII formats

### tshark -r capture.pcap -O http

```bash
tshark -r capture.pcap -O http
```

Shows full verbose details only for the HTTP protocol layers


## Timestamp and Time Format Control

### tshark -r capture.pcap -t ad

```bash
tshark -r capture.pcap -t ad
```

Displays timestamps as absolute dates with YYYY-MM-DD format

### tshark -r capture.pcap -t ud

```bash
tshark -r capture.pcap -t ud
```

Displays timestamps in UTC date and time format

### tshark -r capture.pcap -t d

```bash
tshark -r capture.pcap -t d
```

Displays timestamps as the delta time since the previous packet


## Extracting Fields and Objects

### tshark -r capture.pcap -T fields -e ip.src -e ip.dst

```bash
tshark -r capture.pcap -T fields -e ip.src -e ip.dst
```

Extracts only the source and destination IP addresses

### tshark -r capture.pcap -T fields -e http.host -e http.request.uri

```bash
tshark -r capture.pcap -T fields -e http.host -e http.request.uri
```

Extracts the hostname and URI from HTTP requests

### tshark -r capture.pcap -T fields -E separator=, -e frame.number -e ip.addr

```bash
tshark -r capture.pcap -T fields -E separator=, -e frame.number -e ip.addr
```

Outputs extracted fields in a CSV-like format separated by commas

### tshark -r capture.pcap -T fields -E header=y -e ip.src -e tcp.port

```bash
tshark -r capture.pcap -T fields -E header=y -e ip.src -e tcp.port
```

Includes a header row with field names in the output


## JSON, CSV, and Structured Output

### tshark -r capture.pcap -T json

```bash
tshark -r capture.pcap -T json
```

Outputs the packet details in a full, hierarchical JSON format

### tshark -r capture.pcap -T ek

```bash
tshark -r capture.pcap -T ek
```

Outputs newline-delimited JSON compatible with Elasticsearch Bulk API

### tshark -r capture.pcap -T pdml

```bash
tshark -r capture.pcap -T pdml
```

Outputs packet details in Packet Details Markup Language (XML)


## Statistics and Conversations

### tshark -r capture.pcap -q -z io,phs

```bash
tshark -r capture.pcap -q -z io,phs
```

Displays a protocol hierarchy statistics tree without printing packets

### tshark -r capture.pcap -q -z conv,ip

```bash
tshark -r capture.pcap -q -z conv,ip
```

Shows a table of conversations between IPv4 addresses

### tshark -r capture.pcap -q -z conv,tcp

```bash
tshark -r capture.pcap -q -z conv,tcp
```

Displays TCP conversation statistics including duration and byte counts

### tshark -r capture.pcap -q -z endpoints,ip

```bash
tshark -r capture.pcap -q -z endpoints,ip
```

Lists all unique IP endpoints found in the capture file

### tshark -r capture.pcap -q -z http,tree

```bash
tshark -r capture.pcap -q -z http,tree
```

Generates a breakdown of HTTP packet counts and response codes

### tshark -r capture.pcap -q -z dns,tree

```bash
tshark -r capture.pcap -q -z dns,tree
```

Displays statistics on DNS query types and response codes

### tshark -r capture.pcap -z expert

```bash
tshark -r capture.pcap -z expert
```

Displays expert information including errors, warnings, and notes


## Follow TCP and UDP Streams

### tshark -r capture.pcap -z follow,tcp,ascii,0

```bash
tshark -r capture.pcap -z follow,tcp,ascii,0
```

Follows TCP stream index 0 and outputs the content in ASCII

### tshark -r capture.pcap -z follow,udp,hex,1

```bash
tshark -r capture.pcap -z follow,udp,hex,1
```

Follows UDP stream index 1 and outputs the content in hexadecimal

### tshark -r capture.pcap -z follow,http,ascii,2

```bash
tshark -r capture.pcap -z follow,http,ascii,2
```

Follows the HTTP stream index 2 showing request and response bodies


## Name Resolution

### tshark -r capture.pcap -n

```bash
tshark -r capture.pcap -n
```

Disables all name resolution (DNS, MAC, Transport) for speed

### tshark -r capture.pcap -N n

```bash
tshark -r capture.pcap -N n
```

Enables only network name resolution (DNS hostnames)

### tshark -r capture.pcap -N m

```bash
tshark -r capture.pcap -N m
```

Enables MAC address resolution to vendor names


## Decryption and Key Usage

### tshark -r capture.pcap -o "ssl.keys_list:127.0.0.1,443,http,server.pem"

```bash
tshark -r capture.pcap -o "ssl.keys_list:127.0.0.1,443,http,server.pem"
```

Decrypts SSL/TLS traffic using the specified server private key

### tshark -r capture.pcap -o "tls.keylog_file:keys.log"

```bash
tshark -r capture.pcap -o "tls.keylog_file:keys.log"
```

Decrypts TLS traffic using a browser-generated session key log file

### tshark -r capture.pcap -U "secrets.txt"

```bash
tshark -r capture.pcap -U "secrets.txt"
```

Uses an IPsec ESP secret key file for decryption


## VLAN, Tunnel, and Encapsulation Handling

### tshark -r capture.pcap -Y "vlan.id == 10"

```bash
tshark -r capture.pcap -Y "vlan.id == 10"
```

Filters traffic specifically tagged with VLAN ID 10

### tshark -r capture.pcap -Y "mpls"

```bash
tshark -r capture.pcap -Y "mpls"
```

Displays packets containing MPLS labels

### tshark -r capture.pcap -d udp.port==8472,vxlan

```bash
tshark -r capture.pcap -d udp.port==8472,vxlan
```

Forces decoding of UDP traffic on port 8472 as VXLAN


## IPv4 and IPv6 Traffic Analysis

### tshark -r capture.pcap -Y "ipv6"

```bash
tshark -r capture.pcap -Y "ipv6"
```

Shows only IPv6 traffic

### tshark -r capture.pcap -z conv,ipv6

```bash
tshark -r capture.pcap -z conv,ipv6
```

Displays conversation statistics specifically for IPv6 endpoints


## Error, Retransmission, and Latency Analysis

### tshark -r capture.pcap -Y "tcp.analysis.retransmission"

```bash
tshark -r capture.pcap -Y "tcp.analysis.retransmission"
```

Filters for packets identified as TCP retransmissions

### tshark -r capture.pcap -Y "tcp.analysis.lost_segment"

```bash
tshark -r capture.pcap -Y "tcp.analysis.lost_segment"
```

Identifies gaps in the sequence numbers indicating lost segments

### tshark -r capture.pcap -T fields -e tcp.analysis.ack_rtt

```bash
tshark -r capture.pcap -T fields -e tcp.analysis.ack_rtt
```

Extracts the Round Trip Time (RTT) calculated from ACK packets


## Security Monitoring and Threat Hunting

### tshark -r capture.pcap -Y "http.user_agent contains 'python'"

```bash
tshark -r capture.pcap -Y "http.user_agent contains 'python'"
```

Detects HTTP requests made by Python scripts, often used by bots

### tshark -r capture.pcap -Y "dns.qry.name.len > 50"

```bash
tshark -r capture.pcap -Y "dns.qry.name.len > 50"
```

Identifies unusually long DNS queries potentially indicating tunneling

### tshark -r capture.pcap -Y "tcp.dstport == 4444 or tcp.dstport == 1337"

```bash
tshark -r capture.pcap -Y "tcp.dstport == 4444 or tcp.dstport == 1337"
```

Monitors ports commonly used by malware and reverse shells

### tshark -r capture.pcap -Y "icmp.type == 8 and data.len > 100"

```bash
tshark -r capture.pcap -Y "icmp.type == 8 and data.len > 100"
```

Detects large ICMP Echo Requests which may indicate data exfiltration


## Incident Response and Forensics

### tshark -r capture.pcap --export-objects "http,dest_dir"

```bash
tshark -r capture.pcap --export-objects "http,dest_dir"
```

Extracts all files transferred over HTTP to a destination directory

### tshark -r capture.pcap --export-objects "smb,dest_dir"

```bash
tshark -r capture.pcap --export-objects "smb,dest_dir"
```

Extracts files transferred via SMB file shares

### tshark -r capture.pcap -Y "ftp.request.command == 'USER' or ftp.request.command == 'PASS'"

```bash
tshark -r capture.pcap -Y "ftp.request.command == 'USER' or ftp.request.command == 'PASS'"
```

Filters for plaintext FTP credentials found in the capture


## Protocol and Field Filtering

### tshark -r capture.pcap -Y "smb2.filename contains 'pass'"

```bash
tshark -r capture.pcap -Y "smb2.filename contains 'pass'"
```

Searches for SMB2 file access requests containing 'pass' in the name

### tshark -r capture.pcap -Y "mysql.query"

```bash
tshark -r capture.pcap -Y "mysql.query"
```

Displays packets containing MySQL database queries

### tshark -r capture.pcap -Y "sip.Method == 'INVITE'"

```bash
tshark -r capture.pcap -Y "sip.Method == 'INVITE'"
```

Filters for VoIP SIP calls initiation packets

### tshark -r capture.pcap -Y "wlan.fc.type_subtype == 0x08"

```bash
tshark -r capture.pcap -Y "wlan.fc.type_subtype == 0x08"
```

Filters for 802.11 Beacon frames in WiFi traffic


## Quiet and Script Friendly Output

### tshark -r capture.pcap -q -z hosts

```bash
tshark -r capture.pcap -q -z hosts
```

Quietly extracts all IPv4 and IPv6 addresses and hostnames

### tshark -r capture.pcap -T fields -e frame.time_epoch -e frame.len

```bash
tshark -r capture.pcap -T fields -e frame.time_epoch -e frame.len
```

Outputs only Unix timestamp and frame length for easy plotting


## Automation and Pipeline Usage

### tshark -i eth0 -l -T json

```bash
tshark -i eth0 -l -T json
```

Captures live and flushes stdout immediately for piping to other tools

### tshark -r capture.pcap -T fields -e ip.src | sort | uniq -c

```bash
tshark -r capture.pcap -T fields -e ip.src | sort | uniq -c
```

Pipes extracted IPs to shell commands to count unique sources


## Red Team Traffic Validation

### tshark -i eth0 -Y "icmp.code == 0" -c 5

```bash
tshark -i eth0 -Y "icmp.code == 0" -c 5
```

Verifies that ping replies are being received during a connectivity test

### tshark -r capture.pcap -Y "tcp.flags.syn==1 and tcp.flags.ack==0"

```bash
tshark -r capture.pcap -Y "tcp.flags.syn==1 and tcp.flags.ack==0"
```

Analyzes the volume of SYN packets to validate scanning activity


## Blue Team Continuous Monitoring

### tshark -i eth0 -Y "tcp.flags.syn==1" -z io,stat,1

```bash
tshark -i eth0 -Y "tcp.flags.syn==1" -z io,stat,1
```

Monitors the rate of new TCP connections per second in real-time

### tshark -i eth0 -f "port 22" -T fields -e ip.src

```bash
tshark -i eth0 -f "port 22" -T fields -e ip.src
```

Continuously logs source IPs attempting SSH connections


## Advanced and Combined Real World Analysis

### tshark -r capture.pcap -Y "http.request.method == 'POST'" -T fields -e http.file_data

```bash
tshark -r capture.pcap -Y "http.request.method == 'POST'" -T fields -e http.file_data
```

Extracts the actual payload data sent in HTTP POST requests

### tshark -r capture.pcap -o "gui.column.format:\"Time\",\"%t\",\"Delta\",\"%D\""

```bash
tshark -r capture.pcap -o "gui.column.format:\"Time\",\"%t\",\"Delta\",\"%D\""
```

Customizes the output columns to show Time and Delta columns only

### tshark -r capture.pcap -z io,stat,1,"COUNT(http.request) http.request","AVG(frame.len) frame.len"

```bash
tshark -r capture.pcap -z io,stat,1,"COUNT(http.request) http.request","AVG(frame.len) frame.len"
```

Calculates HTTP request count and average frame length per second

### tshark -r capture.pcap -Y "tls.handshake.type == 1" -T fields -e tls.handshake.extensions_server_name

```bash
tshark -r capture.pcap -Y "tls.handshake.type == 1" -T fields -e tls.handshake.extensions_server_name
```

Extracts the SNI (Server Name Indication) from TLS Client Hellos

### tshark -r capture.pcap -Y "modbus.func_code"

```bash
tshark -r capture.pcap -Y "modbus.func_code"
```

Filters for SCADA/ICS Modbus traffic function codes

### tshark -G protocols

```bash
tshark -G protocols
```

Lists all protocols supported by the installed version of tshark

### tshark -G fields | grep "wifi"

```bash
tshark -G fields | grep "wifi"
```

Searches the glossary of filter fields for WiFi related fields


## GeoIP and Location Analysis

### tshark -r capture.pcap -T fields -e ip.src -e ip.geoip.country

```bash
tshark -r capture.pcap -T fields -e ip.src -e ip.geoip.country
```

Extracts source IPs and their associated GeoIP country code


## Hex, ASCII, and Raw Output

### tshark -r capture.pcap -P

```bash
tshark -r capture.pcap -P
```

Prints the packet summary line even when writing to a file

### tshark -r capture.pcap -x -Y "frame.number==1"

```bash
tshark -r capture.pcap -x -Y "frame.number==1"
```

Dumps the full hex and ASCII representation of just the first packet


## Statistics and Conversations

### tshark -r capture.pcap -z service_response_time,http

```bash
tshark -r capture.pcap -z service_response_time,http
```

Calculates the time between HTTP requests and their corresponding responses


## Interface Selection

### tshark -i -

```bash
tshark -i -
```

Reads live capture data piped from standard input

### tshark -i 1

```bash
tshark -i 1
```

Captures from the interface corresponding to index 1 in the interface list


## Display Filters

### tshark -r capture.pcap -Y "!(ip.addr == 192.168.1.1)"

```bash
tshark -r capture.pcap -Y "!(ip.addr == 192.168.1.1)"
```

Displays all traffic NOT involving the specified IP address


## Extracting Fields and Objects

### tshark -r capture.pcap -T fields -e text

```bash
tshark -r capture.pcap -T fields -e text
```

Extracts the top-level summary text for each packet


## Protocol and Field Filtering

### tshark -r capture.pcap -Y "eth.dst == ff:ff:ff:ff:ff:ff"

```bash
tshark -r capture.pcap -Y "eth.dst == ff:ff:ff:ff:ff:ff"
```

Filters specifically for Ethernet broadcast traffic


## Error, Retransmission, and Latency Analysis

### tshark -r capture.pcap -Y "tcp.analysis.window_update"

```bash
tshark -r capture.pcap -Y "tcp.analysis.window_update"
```

Shows packets that only update the TCP window size


## Security Monitoring and Threat Hunting

### tshark -r capture.pcap -Y "kerberos.error_code"

```bash
tshark -r capture.pcap -Y "kerberos.error_code"
```

Displays Kerberos authentication errors useful for detecting attacks


## Incident Response and Forensics

### tshark -r capture.pcap -Y "usb.urb_type"

```bash
tshark -r capture.pcap -Y "usb.urb_type"
```

Analyzes USB traffic captured via usbmon


## Statistics and Conversations

### tshark -r capture.pcap -z expert,error

```bash
tshark -r capture.pcap -z expert,error
```

Displays only the error-level items from the expert information


## Advanced and Combined Real World Analysis

### tshark -r capture.pcap -Y "frame contains \"password\""

```bash
tshark -r capture.pcap -Y "frame contains \"password\""
```

Searches the entire packet raw bytes for the string 'password'

### tshark -r capture.pcap -Y "frame matches \"(?i)login\""

```bash
tshark -r capture.pcap -Y "frame matches \"(?i)login\""
```

Uses case-insensitive regex to search for 'login' in the packet

### tshark -v

```bash
tshark -v
```

Displays version information, compiled libraries, and running environment

## Related tools

- [Wireshark CLI tools](https://terminal.rokibulroni.com/tool/traffic/wireshark-cli)
- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [Zeek](https://terminal.rokibulroni.com/tool/monitoring/zeek)
