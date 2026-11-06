# p0f

> A passive OS fingerprinting tool that identifies operating systems and clients from traffic it observes, without sending any packets.

- Category: Network
- Commands: 55
- Page: https://terminal.rokibulroni.com/tool/network/p0f
- Homepage: https://lcamtuf.coredump.cx/p0f3/
- Tags: passive, OS fingerprinting

## Install

- apt: `sudo apt install p0f`

## Basic Passive Monitoring

### p0f -L

```bash
p0f -L
```

Lists all available network interfaces that p0f can listen on (-L).
Essential first step to identify valid target adapters for passive monitoring.

### p0f -i eth0

```bash
p0f -i eth0
```

Starts passive OS fingerprinting on a specific interface (-i).
Quietly identifies remote system characteristics without generating network noise.

### p0f -i any

```bash
p0f -i any
```

Listens on all available interfaces simultaneously (-i any).
Enables comprehensive traffic analysis across the entire host adapter stack.

### p0f -i wlan0 -p

```bash
p0f -i wlan0 -p
```

Enables promiscuous mode on the specified interface (-p).
Captures and analyzes all traffic on the segment, not just packets for this host.


## Offline PCAP Analysis

### p0f -r capture.pcap

```bash
p0f -r capture.pcap
```

Analyzes network traffic from a previously saved PCAP file (-r).
Enables offline reconnaissance and forensic investigation of captured data.


## Logging and Output Files

### p0f -i eth0 -o p0f.log

```bash
p0f -i eth0 -o p0f.log
```

Writes timestamped fingerprinting events to a log file (-o).
Standardizes data capture for long-term monitoring and automated reporting.

### p0f -r evidence.pcap -o forensics.log

```bash
p0f -r evidence.pcap -o forensics.log
```

Processes a forensic PCAP file and saves fingerprints to a log.
Converts raw packet data into a readable summary of identified system states.


## Signature Database Usage

### p0f -i eth0 -f /etc/p0f/p0f.fp

```bash
p0f -i eth0 -f /etc/p0f/p0f.fp
```

Loads a specific custom fingerprint database file (-f).
Enables granular identification using proprietary or updated signature sets.


## Socket and API Integration

### p0f -i eth0 -s /tmp/p0f.sock

```bash
p0f -i eth0 -s /tmp/p0f.sock
```

Creates a UNIX socket for real-time fingerprint queries (-s).
Enables third-party tools to programmatically access p0f's discovery data.


## Daemon and Background Mode

### p0f -i eth0 -d

```bash
p0f -i eth0 -d
```

Runs p0f in the background as a daemon process (-d).
Ideal for continuous, non-interactive network visibility across reboots.

### p0f -i eth0 -d -o /var/log/p0f.log

```bash
p0f -i eth0 -d -o /var/log/p0f.log
```

Runs as a background daemon and logs to a specific file.
Automates persistent reconnaissance without requiring an active terminal session.


## Security and Permissions

### p0f -i eth0 -u nobody

```bash
p0f -i eth0 -u nobody
```

Drops privileges to the specified user account after startup (-u).
Enhances system security by minimizing the impact of a potential tool compromise.

### p0f -i eth0 -d -u p0fuser

```bash
p0f -i eth0 -d -u p0fuser
```

Combines daemon mode with privilege dropping for secure monitoring.
Standard production configuration for persistent background network visibility.


## Performance and Resource Control

### p0f -i eth0 -m 1000

```bash
p0f -i eth0 -m 1000
```

Sets the maximum number of simultaneous tracked connections (-m).
Optimizes memory usage when monitoring extremely high-traffic network links.

### p0f -i eth0 -t 30m

```bash
p0f -i eth0 -t 30m
```

Configures the timeout interval for connection tracking (-t).
Controls how quickly stale sessions are pruned from p0f's internal table.

### p0f -i eth0 -S 20

```bash
p0f -i eth0 -S 20
```

Limits the maximum number of simultaneous API connections (-S).
Protects the monitoring service from resource exhaustion via its query socket.


## Filtering and Traffic Control

### p0f -i eth0 'src host 192.168.1.50'

```bash
p0f -i eth0 'src host 192.168.1.50'
```

Uses BPF filters to target traffic from a specific host IP.
Narrows reconnaissance to a single high-value target to reduce log noise.

### p0f -i eth0 'dst port 80'

```bash
p0f -i eth0 'dst port 80'
```

Filters traffic to specifically analyze packets for TCP port 80.
Focuses reconnaissance on web-based services and underlying server stacks.

### p0f -i eth0 'tcp'

```bash
p0f -i eth0 'tcp'
```

Restricts analysis strictly to the Transmission Control Protocol stack.
Ignores UDP and ICMP traffic to focus on reliable stream-based session analysis.

### p0f -i eth0 'not host 10.0.0.1'

```bash
p0f -i eth0 'not host 10.0.0.1'
```

Excludes a noisy or known host from the fingerprinting session.
Refines the analysis stream by removing traffic from irrelevant network assets.

### p0f -i eth0 'net 192.168.0.0/16'

```bash
p0f -i eth0 'net 192.168.0.0/16'
```

Analyzes traffic only for a specific CIDR-defined subnet range.
Enables systematic mapping of all hosts within a particular network segment.


## IPv4 and IPv6 Traffic Analysis

### p0f -i eth0 'ip6'

```bash
p0f -i eth0 'ip6'
```

Filters input to focus exclusively on IPv6 transport analysis.
Identifies system types communicating over the next-generation protocol stack.

### p0f -i eth0 'ip or ip6'

```bash
p0f -i eth0 'ip or ip6'
```

Explicitly captures both IPv4 and IPv6 packets for analysis.
Provides a complete dual-stack view of all active network assets.


## Red Team Passive Reconnaissance

### p0f -i eth0 -p -o targets.log 'net 10.10.10.0/24'

```bash
p0f -i eth0 -p -o targets.log 'net 10.10.10.0/24'
```

Silently maps OS details of a target subnet using promiscuous mode.
Enables complete infra mapping without ever transmitting a single probe packet.


## Blue Team Continuous Monitoring

### p0f -i eth0 -d -o /var/log/p0f-monitor.log 'port 443 or port 80'

```bash
p0f -i eth0 -d -o /var/log/p0f-monitor.log 'port 443 or port 80'
```

Monitors web traffic indefinitely to identify visitor profiles.
Tracks client-side OS versions and browser signatures for behavioral analysis.


## Network Forensics Use Cases

### p0f -r attack_dump.pcap -o analysis.txt 'host 192.168.1.100'

```bash
p0f -r attack_dump.pcap -o analysis.txt 'host 192.168.1.100'
```

Isolates a specific host within a PCAP for forensic OS identification.
Determines the exact platform and uptime of an asset involved in an incident.


## NAT and Firewall Detection

### p0f -i eth0 -o nat_log.txt

```bash
p0f -i eth0 -o nat_log.txt
```

Standard logging that automatically flags masquerade (NAT) events.
Identifies network sharing or middlebox presence between the sensor and target.


## Advanced Combined Analysis

### p0f -i eth0 -p -f custom.fp -o deep_scan.log

```bash
p0f -i eth0 -p -f custom.fp -o deep_scan.log
```

Combines promiscuous mode, custom signatures, and file logging.
Provides a high-precision, deep-dive forensic audit of local network traffic.


## Socket and API Integration

### p0f -i eth0 -s /var/run/p0f.sock -u www-data -d

```bash
p0f -i eth0 -s /var/run/p0f.sock -u www-data -d
```

Sets up a secure daemonized API socket with custom user shell.
Enables production-ready integration with web backends for client identification.


## Filtering and Traffic Control

### p0f -i eth0 'tcp[tcpflags] & (tcp-syn) != 0'

```bash
p0f -i eth0 'tcp[tcpflags] & (tcp-syn) != 0'
```

Uses a low-level BPF filter to only capture TCP SYN (handshake) packets.
Rapidly analyzes new connection attempts while ignoring established payload flow.

### p0f -i eth0 'port 25 or port 587'

```bash
p0f -i eth0 'port 25 or port 587'
```

Focuses fingerprinting specifically on email infrastructure transport.
Identifies software types used by local or remote SMTP server assets.


## Performance and Resource Control

### p0f -i eth0 -m 5000 -t 10s

```bash
p0f -i eth0 -m 5000 -t 10s
```

High-performance tuning for saturated network links.
Increases capacity and speeds up table cleanup for massive connection counts.


## Incident Response and Investigation

### p0f -r incident.pcap -o timeline.log 'src net 192.168.1.0/24 and dst port 445'

```bash
p0f -r incident.pcap -o timeline.log 'src net 192.168.1.0/24 and dst port 445'
```

Analyzes specific subnet SMB traffic from a PCAP for lateral movement.
Traces file-sharing activity back to identifiable OS and platform signatures.


## Automation and Script Friendly

### p0f -i eth0 -d -o /dev/null -s /tmp/p0f_api.sock

```bash
p0f -i eth0 -d -o /dev/null -s /tmp/p0f_api.sock
```

Runs purely as an API provider without generating local log files.
Provides real-time discovery data while minimizing disk I/O and storage impact.


## OS, Browser, and Device Detection

### p0f -i eth0 'src port 80 or src port 443'

```bash
p0f -i eth0 'src port 80 or src port 443'
```

Analyzes web server response headers and network stack signatures.
Identifies underlying OS and server versions through passive monitoring.


## Advanced Combined Analysis

### p0f -i eth0 -u nobody -f /etc/p0f/p0f.fp -o daily.log -d

```bash
p0f -i eth0 -u nobody -f /etc/p0f/p0f.fp -o daily.log -d
```

A production-optimized background monitoring configuration.
Combines specific signatures, privilege control, and persistent logging.


## Filtering and Traffic Control

### p0f -i eth0 'vlan 10'

```bash
p0f -i eth0 'vlan 10'
```

Filters traffic to only analyze packets on a specific VLAN ID.
Enables targeted reconnaissance within segmented enterprise network environments.


## Offline PCAP Analysis

### p0f -r large_capture.pcap -m 10000

```bash
p0f -r large_capture.pcap -m 10000
```

Processes a large PCAP while scaling internal connection table limits.
Ensures no data loss when analyzing extremely heavy traffic captures.


## MTU and Window Size Analysis

### p0f -i eth0 -o link_params.log 'icmp'

```bash
p0f -i eth0 -o link_params.log 'icmp'
```

Focuses on ICMP traffic to reveal physical link characteristics.
Identifies MTU sizes and potential hop-count distances through passive analysis.


## Filtering and Traffic Control

### p0f -i eth0 'gateway 192.168.1.1'

```bash
p0f -i eth0 'gateway 192.168.1.1'
```

Filters for packets routed through a specific gateway MAC address.
Isolates traffic entering or exiting a particular network segment gateway.


## Blue Team Continuous Monitoring

### p0f -i eth0 -o alerts.log 'dst net 10.0.0.0/8 and not src net 10.0.0.0/8'

```bash
p0f -i eth0 -o alerts.log 'dst net 10.0.0.0/8 and not src net 10.0.0.0/8'
```

Logs only external traffic entering the internal subnet range.
Ideal for perimeter monitoring and identifying unknown inbound assets.


## Advanced Combined Analysis

### p0f -i eth0 -p -m 2000 -t 1m -o high_load.log

```bash
p0f -i eth0 -p -m 2000 -t 1m -o high_load.log
```

Optimizes p0f for high-traffic environments with fast table pruning.
Ensures consistent monitoring performance on saturated promiscuous segments.


## Filtering and Traffic Control

### p0f -i eth0 'less 128'

```bash
p0f -i eth0 'less 128'
```

Captures only packets smaller than 128 bytes to optimize header analysis.
Provides a fast, payload-free look at stack signatures for rapid identification.


## Socket and API Integration

### p0f -i eth0 -s /tmp/p0f.sock -S 5

```bash
p0f -i eth0 -s /tmp/p0f.sock -S 5
```

Opens an API socket with strict concurrent connection throttling.
Protects the p0f discovery service from exhaustion-based denial of service.


## Incident Response and Investigation

### p0f -r malware.pcap 'tcp port 6667'

```bash
p0f -r malware.pcap 'tcp port 6667'
```

Analyzes a PCAP specifically for IRC command and control traffic.
Identifies legacy botnet presence through distinct network stack signatures.


## Filtering and Traffic Control

### p0f -i eth0 'broadcast'

```bash
p0f -i eth0 'broadcast'
```

Analyzes broadcast traffic to identify noisy system announcements.
Discovers new assets by monitoring their network presence advertisements.


## Red Team Passive Reconnaissance

### p0f -i eth0 -o wifi_clients.log 'wlan host 192.168.1.5'

```bash
p0f -i eth0 -o wifi_clients.log 'wlan host 192.168.1.5'
```

Filters for wireless headers to fingerprint specific mobile clients.
Enables passive tracking of individual devices on a wireless segment (if supported).


## Daemon and Background Mode

### p0f -i eth0 -d -u root -o /var/log/p0f_privileged.log

```bash
p0f -i eth0 -d -u root -o /var/log/p0f_privileged.log
```

Runs in background mode with full administrative privileges.
Allows the tool to write logs to protected system paths and access all adapters.


## Filtering and Traffic Control

### p0f -i eth0 'tcp portrange 1-1024'

```bash
p0f -i eth0 'tcp portrange 1-1024'
```

Monitors all privileged ports for identifying standard system services.
Ensures that only authentic, recognized OS services are running on key ports.


## Timestamp and Output Formatting

### p0f -r drift.pcap -o drift_analysis.log

```bash
p0f -r drift.pcap -o drift_analysis.log
```

Processes a PCAP using original packet timestamps for the log file.
Ensures forensic accuracy when correlating p0f data with other system logs.


## Performance and Resource Control

### p0f -i lo -o loopback.log

```bash
p0f -i lo -o loopback.log
```

Listens on the local loopback interface for IPC fingerprinting.
Identifies local services and their internal communication signatures.


## Filtering and Traffic Control

### p0f -i eth0 'ip[8] < 64'

```bash
p0f -i eth0 'ip[8] < 64'
```

Uses BPF filters to identify traffic from distant, multi-hop networks.
Isolates remote assets by analyzing Time To Live (TTL) stack characteristics.


## Advanced Combined Analysis

### p0f -i eth0 -p -f /etc/p0f/p0f.fp -u p0f -d -o /var/log/p0f/full.log -m 5000

```bash
p0f -i eth0 -p -f /etc/p0f/p0f.fp -u p0f -d -o /var/log/p0f/full.log -m 5000
```

Maximum production configuration for multi-link passive reconnaissance.
Standardizes enterprise monitoring with custom signatures and secure daemon mode.


## Incident Response and Investigation

### p0f -r breach.pcap 'tcp[13] & 2 != 0'

```bash
p0f -r breach.pcap 'tcp[13] & 2 != 0'
```

Filters a PCAP for TCP SYN packets to map all connection attempts.
Identifies failed and successful penetration attempts through passive log analysis.


## Network Forensics Use Cases

### p0f -r evidence.pcap -o /tmp/parsed.log -f /dev/null

```bash
p0f -r evidence.pcap -o /tmp/parsed.log -f /dev/null
```

Forensic audit mode using a null configuration to test raw parsing.
Verifies data capture integrity without influence from signature database matching.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [Zeek](https://terminal.rokibulroni.com/tool/monitoring/zeek)
