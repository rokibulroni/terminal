# fping

> Pings many hosts in parallel and reports which are alive — a faster, script-friendly alternative to looping over ping.

- Category: Network
- Commands: 30
- Page: https://terminal.rokibulroni.com/tool/network/fping
- Homepage: https://fping.org
- Documentation: https://fping.org/fping.8.html
- Tags: host discovery, ICMP, ping sweep

## Install

- apt: `sudo apt install fping`
- brew: `brew install fping`

## Basic Host Reachability

### fping 192.168.1.1

```bash
fping 192.168.1.1
```

Sends ICMP echo requests to a single target.
Verifies connectivity quickly using ICMP.


## Multiple Hosts and CIDR Ranges

### fping 192.168.1.1 192.168.1.2

```bash
fping 192.168.1.1 192.168.1.2
```

Pings multiple specified IPs sequentially.
Efficiently checks a list of hosts without multiple command calls.

### fping -g 192.168.1.0/24

```bash
fping -g 192.168.1.0/24
```

Generates target list from CIDR mask (-g).
Sweeps an entire subnet to find active hosts.

### fping -g 192.168.1.1 192.168.1.50

```bash
fping -g 192.168.1.1 192.168.1.50
```

Scans a specific IP range (-g start end).
Defined by start and end IP addresses for precise scope control.


## Input from File

### fping -f targets.txt

```bash
fping -f targets.txt
```

Reads targets from a file (-f).
Ideal for bulk scanning lists of servers or devices.


## Alive Host Detection

### fping -a -g 192.168.1.0/24

```bash
fping -a -g 192.168.1.0/24
```

Displays only alive hosts (-a).
Filters output to show only reachable targets, reducing noise.


## Unreachable Host Detection

### fping -u -g 192.168.1.0/24

```bash
fping -u -g 192.168.1.0/24
```

Displays only unreachable hosts (-u).
Useful for identifying downed servers or connectivity gaps.


## Quiet and Summary Modes

### fping -q -g 192.168.1.0/24

```bash
fping -q -g 192.168.1.0/24
```

Quiet mode (-q).
Suppresses per-host output, showing only final summary or specified status.


## Latency and Statistics Reporting

### fping -s -g 192.168.1.0/24

```bash
fping -s -g 192.168.1.0/24
```

Prints cumulative statistics (-s).
Shows total targets found, elapsed time, and other metrics upon completion.

### fping -e 192.168.1.1

```bash
fping -e 192.168.1.1
```

Displays elapsed round trip time (-e).
Shows latency for each response, helping diagnose network slowness.


## Packet Count and Interval Control

### fping -c 5 192.168.1.1

```bash
fping -c 5 192.168.1.1
```

Sends 5 packets per target (-c).
Provides a more reliable connectivity test than a single ping.

### fping -i 10 -g 192.168.1.0/24

```bash
fping -i 10 -g 192.168.1.0/24
```

Sets packet interval to 10ms (-i).
Controls the rate of sending packets to manage network load.


## Timeout and Retry Configuration

### fping -t 500 192.168.1.1

```bash
fping -t 500 192.168.1.1
```

Sets per-packet timeout to 500ms (-t).
Speeds up failure detection for unresponsive hosts.

### fping -r 3 192.168.1.1

```bash
fping -r 3 192.168.1.1
```

Retries 3 times on failure (-r).
Increases robustness against transient packet loss.


## Loop and Continuous Monitoring

### fping -l 192.168.1.1

```bash
fping -l 192.168.1.1
```

Loops indefinitely (-l).
Continuous monitoring similar to standard ping, useful for stability testing.


## Output Formatting and Script Friendly Output

### fping -C 5 192.168.1.1

```bash
fping -C 5 192.168.1.1
```

Columnar output format (-C).
Prints results in columns for easier parsing and visual comparison.


## Logging and File Output

### fping -D -l 192.168.1.1

```bash
fping -D -l 192.168.1.1
```

Adds timestamps to output (-D).
Logs when each ping occurred, essential for correlating network events.


## IPv4 and IPv6 Scanning

### fping -6 ::1

```bash
fping -6 ::1
```

Forces IPv6 usage (-6).
Ensures the tool uses the IPv6 stack for connectivity checks.


## Packet Count and Interval Control

### fping -b 100 192.168.1.1

```bash
fping -b 100 192.168.1.1
```

Sets packet payload size (-b).
Tests MTU and throughput by sending larger data chunks.


## Source Address and Interface Binding

### fping -I eth0 192.168.1.1

```bash
fping -I eth0 192.168.1.1
```

Binds to interface (-I).
Forces traffic out a specific network interface.

### fping -S 192.168.1.5 192.168.1.1

```bash
fping -S 192.168.1.5 192.168.1.1
```

Sets source IP address (-S).
Spoofs or specifices the source IP for the ping packets.


## Network Troubleshooting Use Cases

### fping -O 0x10 192.168.1.1

```bash
fping -O 0x10 192.168.1.1
```

Sets TOS byte (-O).
Tests IP ToS configurations for QoS and traffic shaping verification.

### fping -H 10 192.168.1.1

```bash
fping -H 10 192.168.1.1
```

Sets TTL value (-H).
useful for testing path reachability limits or mapping hop counts.


## Asset Discovery and Inventory

### fping -A -g 192.168.1.0/24

```bash
fping -A -g 192.168.1.0/24
```

Displays targets by hostname (-A).
Resolves IPs to hostnames for easier identification of targets.


## Blue Team Monitoring Scenarios

### fping -l -Q 10 192.168.1.1

```bash
fping -l -Q 10 192.168.1.1
```

Loops and prints summary every 10s (-l -Q).
Continuous monitoring with periodic status updates.


## Red Team Reconnaissance Validation

### fping -aq -g 10.0.0.0/24 > live_hosts.txt

```bash
fping -aq -g 10.0.0.0/24 > live_hosts.txt
```

Quietly scans and saves live hosts (-aq).
Produces a clean list of active IPs for further enumeration.


## Advanced and Combined Real World Usage

### fping -c 20 -p 500 -e 192.168.1.1

```bash
fping -c 20 -p 500 -e 192.168.1.1
```

Precision latency testing.
Sends 20 packets with 500ms intervals, showing RTT for each.

### fping -g 192.168.1.0/24 -a -r 0

```bash
fping -g 192.168.1.0/24 -a -r 0
```

Fast sweep with zero retries.
Maximizes speed for quick network discovery.


## Blue Team Monitoring Scenarios

### fping -d 8.8.8.8

```bash
fping -d 8.8.8.8
```

DNS lookup of return address (-d).
Verifies the reverse DNS record of the target IP.


## Advanced and Combined Real World Usage

### fping -f targets.txt -C 5 -q -s

```bash
fping -f targets.txt -C 5 -q -s
```

Batch ping with summary stats.
Efficiency checks a list of targets and reports final availability metrics.

## Related tools

- [ping](https://terminal.rokibulroni.com/tool/linux/ping)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [arp-scan](https://terminal.rokibulroni.com/tool/network/arp-scan)
