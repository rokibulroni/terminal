# Wireshark CLI tools

> The utilities that ship with Wireshark — editcap, mergecap, capinfos, dumpcap and text2pcap — for working with capture files.

- Category: Traffic Analysis
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/traffic/wireshark-cli
- Homepage: https://www.wireshark.org
- Documentation: https://www.wireshark.org/docs/man-pages/
- Tags: pcap, capture files, Wireshark

## Install

- apt: `sudo apt install wireshark-common`
- brew: `brew install wireshark`

## Setup and Info

### tshark -v

```bash
tshark -v
```

Displays the version information and compiled-in options for Tshark.

### dumpcap -v

```bash
dumpcap -v
```

Displays the version information for the raw capture tool Dumpcap.

### capinfos -v

```bash
capinfos -v
```

Displays the version information for the capture file metadata tool Capinfos.


## Interface Listing

### dumpcap -D

```bash
dumpcap -D
```

Lists all available network interfaces that can be used for capturing packets.

### tshark -D

```bash
tshark -D
```

Lists available interfaces using Tshark which may differ slightly from Dumpcap regarding pipes.


## File Metadata

### capinfos capture.pcap

```bash
capinfos capture.pcap
```

Example:

```bash
capinfos traffic.pcap
```

Prints general metadata statistics about a capture file including duration and packet counts.

### capinfos -c capture.pcap

```bash
capinfos -c capture.pcap
```

Example:

```bash
capinfos -c traffic.pcap
```

Displays only the total count of packets contained in the capture file.

### capinfos -u capture.pcap

```bash
capinfos -u capture.pcap
```

Example:

```bash
capinfos -u traffic.pcap
```

Displays the start and end timestamps of the capture duration.

### capinfos -s capture.pcap

```bash
capinfos -s capture.pcap
```

Example:

```bash
capinfos -s traffic.pcap
```

Displays the size of the capture file in bytes.

### capinfos -d capture.pcap

```bash
capinfos -d capture.pcap
```

Example:

```bash
capinfos -d traffic.pcap
```

Displays the total data size of all packets excluding file overhead.


## Basic Capture

### dumpcap -i eth0 -w output.pcap

```bash
dumpcap -i eth0 -w output.pcap
```

Example:

```bash
dumpcap -i eth0 -w raw_capture.pcap
```

Captures packets from a specific interface and writes them directly to a file.

### dumpcap -i any -w output.pcap

```bash
dumpcap -i any -w output.pcap
```

Example:

```bash
dumpcap -i any -w all_interfaces.pcap
```

Captures traffic from all available interfaces simultaneously on Linux systems.


## Capture Limits

### dumpcap -i eth0 -c 100 -w output.pcap

```bash
dumpcap -i eth0 -c 100 -w output.pcap
```

Example:

```bash
dumpcap -i eth0 -c 100 -w sample.pcap
```

Stops the packet capture automatically after capturing exactly 100 packets.

### dumpcap -i eth0 -a duration:60 -w output.pcap

```bash
dumpcap -i eth0 -a duration:60 -w output.pcap
```

Example:

```bash
dumpcap -i eth0 -a duration:60 -w minute_capture.pcap
```

Stops the packet capture automatically after 60 seconds.

### dumpcap -i eth0 -a filesize:10000 -w output.pcap

```bash
dumpcap -i eth0 -a filesize:10000 -w output.pcap
```

Example:

```bash
dumpcap -i eth0 -a filesize:10000 -w limited_size.pcap
```

Stops the capture when the output file size reaches 10,000 kilobytes.


## Ring Buffer

### dumpcap -i eth0 -b files:5 -b filesize:50000 -w buffer.pcap

```bash
dumpcap -i eth0 -b files:5 -b filesize:50000 -w buffer.pcap
```

Example:

```bash
dumpcap -i eth0 -b files:5 -b filesize:50000 -w evidence.pcap
```

Uses a ring buffer to keep the last 5 files of 50MB each, overwriting old ones.

### dumpcap -i eth0 -b duration:3600 -w hourly.pcap

```bash
dumpcap -i eth0 -b duration:3600 -w hourly.pcap
```

Example:

```bash
dumpcap -i eth0 -b duration:3600 -w hourly_log.pcap
```

Creates a new capture file every hour continuously.


## Capture Filters

### dumpcap -i eth0 -f "tcp port 80" -w web.pcap

```bash
dumpcap -i eth0 -f "tcp port 80" -w web.pcap
```

Example:

```bash
dumpcap -i eth0 -f "tcp port 80" -w web_traffic.pcap
```

Captures only TCP traffic destined for or originating from port 80.

### dumpcap -i eth0 -f "host 192.168.1.5" -w host.pcap

```bash
dumpcap -i eth0 -f "host 192.168.1.5" -w host.pcap
```

Example:

```bash
dumpcap -i eth0 -f "host 192.168.1.5" -w target.pcap
```

Captures only traffic involving the specific IP address 192.168.1.5.

### dumpcap -i eth0 -f "not port 22" -w no_ssh.pcap

```bash
dumpcap -i eth0 -f "not port 22" -w no_ssh.pcap
```

Example:

```bash
dumpcap -i eth0 -f "not port 22" -w clean.pcap
```

Captures all traffic except SSH traffic on port 22.


## Promiscuous Mode

### dumpcap -i eth0 -p -w output.pcap

```bash
dumpcap -i eth0 -p -w output.pcap
```

Example:

```bash
dumpcap -i eth0 -p -w unicast_only.pcap
```

Captures in non-promiscuous mode, seeing only traffic addressed to the interface.


## Basic Analysis

### tshark -r capture.pcap

```bash
tshark -r capture.pcap
```

Example:

```bash
tshark -r traffic.pcap
```

Reads and displays a summary of packets from an existing capture file.

### tshark -i eth0

```bash
tshark -i eth0
```

Captures packets from an interface and prints decoded one-line summaries to the terminal.


## Time Formatting

### tshark -r capture.pcap -t ad

```bash
tshark -r capture.pcap -t ad
```

Example:

```bash
tshark -r traffic.pcap -t ad
```

Displays packet timestamps as absolute dates with time.

### tshark -r capture.pcap -t ud

```bash
tshark -r capture.pcap -t ud
```

Example:

```bash
tshark -r traffic.pcap -t ud
```

Displays packet timestamps using UTC absolute date and time.

### tshark -r capture.pcap -t d

```bash
tshark -r capture.pcap -t d
```

Example:

```bash
tshark -r traffic.pcap -t d
```

Displays timestamps as the time delta from the previous displayed packet.


## Display Filters

### tshark -r capture.pcap -Y "http"

```bash
tshark -r capture.pcap -Y "http"
```

Example:

```bash
tshark -r traffic.pcap -Y "http"
```

Displays only packets that are identified as HTTP protocol.

### tshark -r capture.pcap -Y "ip.addr == 192.168.1.1"

```bash
tshark -r capture.pcap -Y "ip.addr == 192.168.1.1"
```

Example:

```bash
tshark -r traffic.pcap -Y "ip.addr == 192.168.1.1"
```

Displays only packets where the source or destination IP matches the address.

### tshark -r capture.pcap -Y "tcp.flags.reset == 1"

```bash
tshark -r capture.pcap -Y "tcp.flags.reset == 1"
```

Example:

```bash
tshark -r traffic.pcap -Y "tcp.flags.reset == 1"
```

Displays only TCP packets where the RST (reset) flag is set.

### tshark -r capture.pcap -Y "frame.len > 1000"

```bash
tshark -r capture.pcap -Y "frame.len > 1000"
```

Example:

```bash
tshark -r traffic.pcap -Y "frame.len > 1000"
```

Displays only packets with a frame length greater than 1000 bytes.


## Two-Pass Analysis

### tshark -r capture.pcap -2 -R "tcp.analysis.retransmission"

```bash
tshark -r capture.pcap -2 -R "tcp.analysis.retransmission"
```

Example:

```bash
tshark -r traffic.pcap -2 -R "tcp.analysis.retransmission"
```

Performs a two-pass analysis to accurately detect and filter TCP retransmissions.


## Field Extraction

### tshark -r capture.pcap -T fields -e ip.src -e ip.dst

```bash
tshark -r capture.pcap -T fields -e ip.src -e ip.dst
```

Example:

```bash
tshark -r traffic.pcap -T fields -e ip.src -e ip.dst
```

Extracts and prints only the source and destination IP addresses.

### tshark -r capture.pcap -T fields -e http.host -e http.request.uri

```bash
tshark -r capture.pcap -T fields -e http.host -e http.request.uri
```

Example:

```bash
tshark -r traffic.pcap -T fields -e http.host -e http.request.uri
```

Extracts the HTTP host and requested URI from HTTP traffic.

### tshark -r capture.pcap -T fields -e dns.qry.name

```bash
tshark -r capture.pcap -T fields -e dns.qry.name
```

Example:

```bash
tshark -r traffic.pcap -T fields -e dns.qry.name
```

Extracts only the DNS query names being requested in the traffic.


## CSV Output

### tshark -r capture.pcap -T fields -e frame.number -e ip.src -E separator=,

```bash
tshark -r capture.pcap -T fields -e frame.number -e ip.src -E separator=,
```

Example:

```bash
tshark -r traffic.pcap -T fields -e frame.number -e ip.src -E separator=,
```

Outputs the extracted fields in CSV format separated by commas.

### tshark -r capture.pcap -T fields -e ip.src -E header=y

```bash
tshark -r capture.pcap -T fields -e ip.src -E header=y
```

Example:

```bash
tshark -r traffic.pcap -T fields -e ip.src -E header=y
```

Includes a header row describing the fields in the text output.


## JSON Output

### tshark -r capture.pcap -T json

```bash
tshark -r capture.pcap -T json
```

Example:

```bash
tshark -r traffic.pcap -T json
```

Exports the full dissection of packets into a detailed JSON format.

### tshark -r capture.pcap -T jsonraw

```bash
tshark -r capture.pcap -T jsonraw
```

Example:

```bash
tshark -r traffic.pcap -T jsonraw
```

Exports the packet dissection to JSON including the raw hex data for fields.

### tshark -r capture.pcap -T ek

```bash
tshark -r capture.pcap -T ek
```

Example:

```bash
tshark -r traffic.pcap -T ek
```

Exports packets in Newline Delimited JSON format suitable for Elasticsearch.


## Verbose Output

### tshark -r capture.pcap -V

```bash
tshark -r capture.pcap -V
```

Example:

```bash
tshark -r traffic.pcap -V
```

Displays the full, verbose packet tree details for every packet in the file.

### tshark -r capture.pcap -O http

```bash
tshark -r capture.pcap -O http
```

Example:

```bash
tshark -r traffic.pcap -O http
```

Displays full verbose details only for the HTTP protocol layer.


## Hex Output

### tshark -r capture.pcap -x

```bash
tshark -r capture.pcap -x
```

Example:

```bash
tshark -r traffic.pcap -x
```

Prints the packet data in both hex and ASCII format alongside the summary.


## Statistics

### tshark -r capture.pcap -q -z io,phs

```bash
tshark -r capture.pcap -q -z io,phs
```

Example:

```bash
tshark -r traffic.pcap -q -z io,phs
```

Displays the Protocol Hierarchy Statistics showing traffic distribution by protocol.

### tshark -r capture.pcap -q -z conv,ip

```bash
tshark -r capture.pcap -q -z conv,ip
```

Example:

```bash
tshark -r traffic.pcap -q -z conv,ip
```

Displays a table of IPv4 conversations including packet counts and bytes.

### tshark -r capture.pcap -q -z conv,tcp

```bash
tshark -r capture.pcap -q -z conv,tcp
```

Example:

```bash
tshark -r traffic.pcap -q -z conv,tcp
```

Displays a table of TCP conversations identifying active connections.

### tshark -r capture.pcap -q -z endpoints,ip

```bash
tshark -r capture.pcap -q -z endpoints,ip
```

Example:

```bash
tshark -r traffic.pcap -q -z endpoints,ip
```

Lists all IPv4 endpoints found in the capture file with traffic stats.

### tshark -r capture.pcap -q -z expert

```bash
tshark -r capture.pcap -q -z expert
```

Example:

```bash
tshark -r traffic.pcap -q -z expert
```

Displays expert info warnings, errors, and notes detected in the trace.


## Advanced Statistics

### tshark -r capture.pcap -q -z http,tree

```bash
tshark -r capture.pcap -q -z http,tree
```

Example:

```bash
tshark -r traffic.pcap -q -z http,tree
```

Calculates and displays a statistical tree of HTTP packet distribution.

### tshark -r capture.pcap -q -z http,stat

```bash
tshark -r capture.pcap -q -z http,stat
```

Example:

```bash
tshark -r traffic.pcap -q -z http,stat
```

Displays HTTP status code statistics and request distribution.

### tshark -r capture.pcap -q -z dns,tree

```bash
tshark -r capture.pcap -q -z dns,tree
```

Example:

```bash
tshark -r traffic.pcap -q -z dns,tree
```

Displays a statistical tree summarizing DNS query types and response codes.

### tshark -r capture.pcap -q -z io,stat,1

```bash
tshark -r capture.pcap -q -z io,stat,1
```

Example:

```bash
tshark -r traffic.pcap -q -z io,stat,1
```

Calculates traffic statistics in 1-second intervals.

### tshark -r capture.pcap -q -z io,stat,1,"COUNT(tcp.analysis.retransmission) tcp.analysis.retransmission"

```bash
tshark -r capture.pcap -q -z io,stat,1,"COUNT(tcp.analysis.retransmission) tcp.analysis.retransmission"
```

Example:

```bash
tshark -r traffic.pcap -q -z io,stat,1,"COUNT(tcp.analysis.retransmission) tcp.analysis.retransmission"
```

Counts TCP retransmissions per second to identify network congestion.


## Decryption

### tshark -r capture.pcap -o "ssl.keys_list:0.0.0.0,443,http,server.pem"

```bash
tshark -r capture.pcap -o "ssl.keys_list:0.0.0.0,443,http,server.pem"
```

Example:

```bash
tshark -r traffic.pcap -o "ssl.keys_list:0.0.0.0,443,http,server.pem"
```

Decrypts SSL/TLS traffic using the provided server private key file.

### tshark -r capture.pcap -o "tls.keylog_file:secrets.log"

```bash
tshark -r capture.pcap -o "tls.keylog_file:secrets.log"
```

Example:

```bash
tshark -r traffic.pcap -o "tls.keylog_file:secrets.log"
```

Decrypts TLS traffic using a browser-generated session key log file.


## Protocol Preferences

### tshark -r capture.pcap -o "tcp.desegment_tcp_streams:TRUE"

```bash
tshark -r capture.pcap -o "tcp.desegment_tcp_streams:TRUE"
```

Example:

```bash
tshark -r traffic.pcap -o "tcp.desegment_tcp_streams:TRUE"
```

Forces reassembly of TCP segments to analyze complete application layer payloads.

### tshark -r capture.pcap -d tcp.port==8080,http

```bash
tshark -r capture.pcap -d tcp.port==8080,http
```

Example:

```bash
tshark -r traffic.pcap -d tcp.port==8080,http
```

Decodes traffic on TCP port 8080 as HTTP regardless of standard port assignments.


## Stream Analysis

### tshark -r capture.pcap -z follow,tcp,ascii,0

```bash
tshark -r capture.pcap -z follow,tcp,ascii,0
```

Example:

```bash
tshark -r traffic.pcap -z follow,tcp,ascii,0
```

Follows TCP stream index 0 and displays the content in ASCII format.

### tshark -r capture.pcap -z follow,udp,hex,0

```bash
tshark -r capture.pcap -z follow,udp,hex,0
```

Example:

```bash
tshark -r traffic.pcap -z follow,udp,hex,0
```

Follows UDP stream index 0 and displays the content in Hex format.


## Object Extraction

### tshark -r capture.pcap --export-objects http,./output_dir

```bash
tshark -r capture.pcap --export-objects http,./output_dir
```

Example:

```bash
tshark -r traffic.pcap --export-objects http,./files
```

Extracts all files (images, binaries) transferred via HTTP to the specified directory.

### tshark -r capture.pcap --export-objects smb,./output_dir

```bash
tshark -r capture.pcap --export-objects smb,./output_dir
```

Example:

```bash
tshark -r traffic.pcap --export-objects smb,./files
```

Extracts files transferred over SMB/CIFS shares to the specified directory.


## GeoIP

### tshark -r capture.pcap -T fields -e ip.src -e ip.geoip.country

```bash
tshark -r capture.pcap -T fields -e ip.src -e ip.geoip.country
```

Example:

```bash
tshark -r traffic.pcap -T fields -e ip.src -e ip.geoip.country
```

Displays source IP addresses alongside their resolved GeoIP country.


## Name Resolution

### tshark -r capture.pcap -n

```bash
tshark -r capture.pcap -n
```

Example:

```bash
tshark -r traffic.pcap -n
```

Disables network name resolution (DNS) to speed up processing.

### tshark -r capture.pcap -N n

```bash
tshark -r capture.pcap -N n
```

Example:

```bash
tshark -r traffic.pcap -N n
```

Enables network name resolution to resolve IP addresses to hostnames.


## Filtering and Saving

### tshark -r full.pcap -Y "tcp.port == 80" -w http_only.pcap

```bash
tshark -r full.pcap -Y "tcp.port == 80" -w http_only.pcap
```

Reads a capture file, applies a display filter, and saves the matches to a new file.


## Anonymization

### editcap -I 128 input.pcap output.pcap

```bash
editcap -I 128 input.pcap output.pcap
```

Example:

```bash
editcap -I 128 sensitive.pcap sanitized.pcap
```

Injects packet length errors or trims packets to remove sensitive payload data (requires editcap).


## Slicing

### tshark -r capture.pcap -s 64 -w header_only.pcap

```bash
tshark -r capture.pcap -s 64 -w header_only.pcap
```

Example:

```bash
tshark -r traffic.pcap -s 64 -w headers.pcap
```

Reads a file and saves only the first 64 bytes of each packet, discarding payloads.


## IPv6 Analysis

### tshark -r capture.pcap -Y "ipv6"

```bash
tshark -r capture.pcap -Y "ipv6"
```

Example:

```bash
tshark -r traffic.pcap -Y "ipv6"
```

Filters and displays only IPv6 traffic.

### tshark -r capture.pcap -q -z conv,ipv6

```bash
tshark -r capture.pcap -q -z conv,ipv6
```

Example:

```bash
tshark -r traffic.pcap -q -z conv,ipv6
```

Displays statistics for IPv6 conversations.


## Tunneling

### tshark -r capture.pcap -Y "gtp"

```bash
tshark -r capture.pcap -Y "gtp"
```

Example:

```bash
tshark -r traffic.pcap -Y "gtp"
```

Filters traffic to show GPRS Tunneling Protocol packets used in mobile networks.

### tshark -r capture.pcap -Y "vxlan"

```bash
tshark -r capture.pcap -Y "vxlan"
```

Example:

```bash
tshark -r traffic.pcap -Y "vxlan"
```

Filters traffic to show VXLAN encapsulated packets common in data centers.


## VLAN Analysis

### tshark -r capture.pcap -Y "vlan.id == 10"

```bash
tshark -r capture.pcap -Y "vlan.id == 10"
```

Example:

```bash
tshark -r traffic.pcap -Y "vlan.id == 10"
```

Filters traffic belonging specifically to VLAN ID 10.


## WLAN Analysis

### tshark -r wifi.pcap -Y "wlan.fc.type_subtype == 0x08"

```bash
tshark -r wifi.pcap -Y "wlan.fc.type_subtype == 0x08"
```

Filters specific 802.11 frame types, such as Beacon frames (subtype 0x08).


## USB Analysis

### tshark -i usbmon0

```bash
tshark -i usbmon0
```

Captures USB traffic on Linux systems using the usbmon interface.


## Bluetooth Analysis

### tshark -i bluetooth0

```bash
tshark -i bluetooth0
```

Captures Bluetooth traffic if the hardware and drivers support monitor mode.


## VoIP Analysis

### tshark -r capture.pcap -Y "sip || rtp"

```bash
tshark -r capture.pcap -Y "sip || rtp"
```

Example:

```bash
tshark -r traffic.pcap -Y "sip || rtp"
```

Filters traffic to show only SIP signaling and RTP media streams.

### tshark -r capture.pcap -q -z sip,stat

```bash
tshark -r capture.pcap -q -z sip,stat
```

Example:

```bash
tshark -r traffic.pcap -q -z sip,stat
```

Displays statistics for SIP methods and response codes.


## Error Analysis

### tshark -r capture.pcap -Y "tcp.analysis.lost_segment"

```bash
tshark -r capture.pcap -Y "tcp.analysis.lost_segment"
```

Example:

```bash
tshark -r traffic.pcap -Y "tcp.analysis.lost_segment"
```

Identifies packets that indicate a previous TCP segment was lost in transit.

### tshark -r capture.pcap -Y "tcp.analysis.window_full"

```bash
tshark -r capture.pcap -Y "tcp.analysis.window_full"
```

Example:

```bash
tshark -r traffic.pcap -Y "tcp.analysis.window_full"
```

Identifies when the TCP receive window is full, indicating a potential bottleneck.


## Security Monitoring

### tshark -r capture.pcap -Y "http.request.method == POST"

```bash
tshark -r capture.pcap -Y "http.request.method == POST"
```

Example:

```bash
tshark -r traffic.pcap -Y "http.request.method == POST"
```

Filters for HTTP POST requests which often contain form submissions or uploads.

### tshark -r capture.pcap -Y "tcp.port == 4444"

```bash
tshark -r capture.pcap -Y "tcp.port == 4444"
```

Example:

```bash
tshark -r traffic.pcap -Y "tcp.port == 4444"
```

Filters for traffic on port 4444, a common default port for Metasploit payloads.

### tshark -r capture.pcap -Y "dns.qry.name contains \"base64\""

```bash
tshark -r capture.pcap -Y "dns.qry.name contains \"base64\""
```

Example:

```bash
tshark -r traffic.pcap -Y "dns.qry.name contains \"base64\""
```

Searches for DNS queries containing suspicious strings like 'base64' indicating tunneling.

### tshark -r capture.pcap -Y "tls.handshake.extensions_server_name"

```bash
tshark -r capture.pcap -Y "tls.handshake.extensions_server_name"
```

Example:

```bash
tshark -r traffic.pcap -Y "tls.handshake.extensions_server_name"
```

Inspects the SNI (Server Name Indication) in TLS handshakes to see target domains.


## Formatting

### tshark -r capture.pcap -T text -e frame.number

```bash
tshark -r capture.pcap -T text -e frame.number
```

Example:

```bash
tshark -r traffic.pcap -T text
```

Forces standard text output even if configured otherwise in preferences.

### tshark -r capture.pcap -T tabs

```bash
tshark -r capture.pcap -T tabs
```

Example:

```bash
tshark -r traffic.pcap -T tabs
```

Displays packet summaries with tab-separated columns for easier parsing.


## Live Display

### tshark -i eth0 -l

```bash
tshark -i eth0 -l
```

Flushes the standard output after every packet, useful when piping to other tools.


## Live Limits

### tshark -i eth0 -a duration:10

```bash
tshark -i eth0 -a duration:10
```

Captures and displays packets for 10 seconds before terminating.


## Read Filter

### tshark -r capture.pcap -R "ip.addr==1.2.3.4" -2

```bash
tshark -r capture.pcap -R "ip.addr==1.2.3.4" -2
```

Example:

```bash
tshark -r traffic.pcap -R "ip.addr==1.2.3.4" -2
```

Uses a read filter with two-pass analysis, necessary for some complex filters.


## Merge

### mergecap -w merged.pcap file1.pcap file2.pcap

```bash
mergecap -w merged.pcap file1.pcap file2.pcap
```

Example:

```bash
mergecap -w combined.pcap part1.pcap part2.pcap
```

Combines multiple capture files into a single file based on packet timestamps.


## Compare

### diff <(tshark -r f1.pcap) <(tshark -r f2.pcap)

```bash
diff <(tshark -r f1.pcap) <(tshark -r f2.pcap)
```

Uses bash process substitution and tshark to textually compare two capture files.


## Deduplication

### editcap -d input.pcap output.pcap

```bash
editcap -d input.pcap output.pcap
```

Example:

```bash
editcap -d duplicate.pcap unique.pcap
```

Removes duplicate packets from a capture file based on a moving time window.


## Time Adjustment

### editcap -t 3600 input.pcap output.pcap

```bash
editcap -t 3600 input.pcap output.pcap
```

Example:

```bash
editcap -t 3600 input.pcap timezone_fix.pcap
```

Adjusts the timestamp of every packet in the file forward by 3600 seconds.


## Format Conversion

### editcap -F pcapng input.pcap output.pcapng

```bash
editcap -F pcapng input.pcap output.pcapng
```

Example:

```bash
editcap -F pcapng old.pcap new.pcapng
```

Converts an old PCAP file format to the newer, more versatile PCAPNG format.


## Protocol Hierarchy

### tshark -r capture.pcap -z io,phs,udp

```bash
tshark -r capture.pcap -z io,phs,udp
```

Example:

```bash
tshark -r traffic.pcap -z io,phs,udp
```

Displays protocol hierarchy statistics specifically filtering for the UDP branch.


## Latency Analysis

### tshark -r capture.pcap -T fields -e frame.number -e tcp.analysis.ack_rtt

```bash
tshark -r capture.pcap -T fields -e frame.number -e tcp.analysis.ack_rtt
```

Example:

```bash
tshark -r traffic.pcap -T fields -e frame.number -e tcp.analysis.ack_rtt
```

Extracts the Round Trip Time (RTT) for TCP acknowledgments to analyze latency.


## Large File Analysis

### tshark -r large.pcap -c 1000

```bash
tshark -r large.pcap -c 1000
```

Example:

```bash
tshark -r gigabyte.pcap -c 1000
```

Reads only the first 1000 packets of a large file to avoid loading everything.


## Credential Hunting

### tshark -r capture.pcap -Y "http.authbasic"

```bash
tshark -r capture.pcap -Y "http.authbasic"
```

Example:

```bash
tshark -r traffic.pcap -Y "http.authbasic"
```

Filters for HTTP Basic Authentication headers which contain base64 credentials.

### tshark -r capture.pcap -Y "ftp.request.command == USER || ftp.request.command == PASS"

```bash
tshark -r capture.pcap -Y "ftp.request.command == USER || ftp.request.command == PASS"
```

Example:

```bash
tshark -r traffic.pcap -Y "ftp.request.command == USER || ftp.request.command == PASS"
```

Filters for FTP login commands to capture cleartext usernames and passwords.


## Elasticsearch

### tshark -r capture.pcap -T ek -J "http tcp ip"

```bash
tshark -r capture.pcap -T ek -J "http tcp ip"
```

Example:

```bash
tshark -r traffic.pcap -T ek -J "http tcp ip"
```

Generates Elasticsearch-compatible JSON only for the HTTP, TCP, and IP layers.


## Custom Columns

### tshark -r capture.pcap -o "gui.column.format:\"Source\",\"%s\",\"Dest\",\"%d\""

```bash
tshark -r capture.pcap -o "gui.column.format:\"Source\",\"%s\",\"Dest\",\"%d\""
```

Example:

```bash
tshark -r traffic.pcap -o "gui.column.format:\"Source\",\"%s\",\"Dest\",\"%d\""
```

Overrides the default summary columns with custom columns defined in the command.


## Advanced Capture

### dumpcap -i eth0 -w output.pcap -f "tcp[13] & 8 != 0"

```bash
dumpcap -i eth0 -w output.pcap -f "tcp[13] & 8 != 0"
```

Example:

```bash
dumpcap -i eth0 -w push.pcap -f "tcp[13] & 8 != 0"
```

Uses a raw BPF bitmask filter to capture only TCP packets with the PSH flag set.

## Related tools

- [TShark](https://terminal.rokibulroni.com/tool/traffic/tshark)
- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [Tcpreplay](https://terminal.rokibulroni.com/tool/traffic/tcpreplay)
