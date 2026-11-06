# netsniff-ng

> A high-performance Linux networking toolkit using zero-copy packet mmap: capture, replay, traffic generation and analysis.

- Category: Traffic Analysis
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/traffic/netsniff-ng
- Homepage: http://netsniff-ng.org
- Documentation: http://netsniff-ng.org
- Tags: packet capture, performance, Linux

## Install

- apt: `sudo apt install netsniff-ng`

## Basic Packet Capture

### netsniff-ng -i eth0

```bash
netsniff-ng -i eth0
```

Captures packets from the eth0 interface and prints basic header information to the console.

### netsniff-ng --in any

```bash
netsniff-ng --in any
```

Captures traffic from all available network interfaces simultaneously using the 'any' device.


## Console Output Formatting

### netsniff-ng -i eth0 -X

```bash
netsniff-ng -i eth0 -X
```

Captures packets and displays the payload in both hexadecimal and ASCII format for deep inspection.

### netsniff-ng -i eth0 -l

```bash
netsniff-ng -i eth0 -l
```

Displays one line of summary information per packet, useful for high-volume traffic monitoring.

### netsniff-ng -i eth0 -V

```bash
netsniff-ng -i eth0 -V
```

Enables verbose mode to show detailed internal status and packet processing information.


## Quiet and Silent Mode

### netsniff-ng -i eth0 -q

```bash
netsniff-ng -i eth0 -q
```

Runs in quiet mode, suppressing the startup banner and printing less non-essential information.

### netsniff-ng -i eth0 -s

```bash
netsniff-ng -i eth0 -s
```

Runs in silent mode, capturing packets without printing anything to the console to maximize performance.


## Promiscuous Mode Control

### netsniff-ng -i eth0 -p

```bash
netsniff-ng -i eth0 -p
```

Explicitly disables promiscuous mode, capturing only packets destined for the interface's MAC address.


## Writing PCAP Files

### netsniff-ng -i eth0 -o dump.pcap

```bash
netsniff-ng -i eth0 -o dump.pcap
```

Example:

```bash
netsniff-ng -i eth0 -o capture.pcap
```

Captures packets from eth0 and writes them directly to a PCAP file using zero-copy mechanisms.

### netsniff-ng -i eth0 -o /mnt/data/dump.pcap -s

```bash
netsniff-ng -i eth0 -o /mnt/data/dump.pcap -s
```

Writes packets to a file silently without console output, ideal for high-speed background recording.


## Reading PCAP Files

### netsniff-ng -i dump.pcap

```bash
netsniff-ng -i dump.pcap
```

Example:

```bash
netsniff-ng -i capture.pcap
```

Reads a previously saved PCAP file and displays the packet contents to the standard output.


## Traffic Replay

### netsniff-ng -i dump.pcap -o eth0

```bash
netsniff-ng -i dump.pcap -o eth0
```

Example:

```bash
netsniff-ng -i traffic.pcap -o eth0
```

Replays packets from a PCAP file out through the eth0 network interface onto the live network.

### netsniff-ng -i dump.pcap -o eth0 -s

```bash
netsniff-ng -i dump.pcap -o eth0 -s
```

Example:

```bash
netsniff-ng -i traffic.pcap -o eth0 -s
```

Replays traffic silently to the network interface to achieve maximum throughput generation.


## Replay Timing Control

### netsniff-ng -i dump.pcap -o eth0 -I 100

```bash
netsniff-ng -i dump.pcap -o eth0 -I 100
```

Replays packets with a fixed inter-packet interval of 100 microseconds, ignoring original timestamps.


## Packet Limit

### netsniff-ng -i eth0 -n 1000

```bash
netsniff-ng -i eth0 -n 1000
```

Captures exactly 1000 packets and then automatically exits.


## Duration Limit

### netsniff-ng -i eth0 -T 10s

```bash
netsniff-ng -i eth0 -T 10s
```

Captures traffic for exactly 10 seconds and then terminates the process.


## Ring Buffer Tuning

### netsniff-ng -i eth0 -S 64MiB

```bash
netsniff-ng -i eth0 -S 64MiB
```

Allocates a 64 Mebibyte kernel ring buffer for packet capture to prevent drops during traffic spikes.

### netsniff-ng -i eth0 -S 1GiB

```bash
netsniff-ng -i eth0 -S 1GiB
```

Allocates a massive 1 Gibibyte ring buffer for extremely high-throughput enterprise network monitoring.


## CPU Affinity

### netsniff-ng -i eth0 -b 0

```bash
netsniff-ng -i eth0 -b 0
```

Pins the packet capture process to CPU core 0 to reduce cache misses and improve capture performance.


## CPU Affinity and Optimization

### netsniff-ng -i eth0 -b 1 -s -o dump.pcap

```bash
netsniff-ng -i eth0 -b 1 -s -o dump.pcap
```

Combines CPU pinning to core 1, silent mode, and file writing for an optimized capture pipeline.


## Process Priority

### netsniff-ng -i eth0 -H

```bash
netsniff-ng -i eth0 -H
```

Runs the process with high priority (SCHED_FIFO) to minimize latency and packet loss on loaded systems.


## Hardware Timestamping

### netsniff-ng -i eth0 --hwtstamp-unsync

```bash
netsniff-ng -i eth0 --hwtstamp-unsync
```

Enables hardware timestamping if the NIC supports it, without synchronizing to the system clock.


## Packet Filtering

### netsniff-ng -i eth0 -f filter.bpf

```bash
netsniff-ng -i eth0 -f filter.bpf
```

Example:

```bash
netsniff-ng -i eth0 -f http_filter.bpf
```

Applies a pre-compiled Berkeley Packet Filter (BPF) code from a file to filter traffic at the kernel level.

### netsniff-ng -i eth0 -f /etc/netsniff-ng/rules.bpf -o filtered.pcap

```bash
netsniff-ng -i eth0 -f /etc/netsniff-ng/rules.bpf -o filtered.pcap
```

Example:

```bash
netsniff-ng -i eth0 -f rules.bpf -o filtered.pcap
```

Captures only packets matching the BPF rules defined in the file and writes them to disk.


## Scatter/Gather I/O

### netsniff-ng -i eth0 --scatter-gather

```bash
netsniff-ng -i eth0 --scatter-gather
```

Enables scatter-gather I/O on the packet socket, which may improve performance on specific hardware configurations.


## Mmap Mode

### netsniff-ng -i eth0 --mmap

```bash
netsniff-ng -i eth0 --mmap
```

Explicitly forces memory-mapped packet socket mode (standard in netsniff-ng) for zero-copy efficiency.


## PCAP Rotation

### netsniff-ng -i eth0 -o /var/log/pcap/ -P dump -n 10000

```bash
netsniff-ng -i eth0 -o /var/log/pcap/ -P dump -n 10000
```

Writes to a directory with a file prefix, rotating the file after every 10,000 packets.


## PCAP Rotation by Size

### netsniff-ng -i eth0 -o . -P trace -F 100MiB

```bash
netsniff-ng -i eth0 -o . -P trace -F 100MiB
```

Rotates capture files in the current directory with prefix 'trace' whenever a file reaches 100 MiB.


## User Privilege Drop

### netsniff-ng -i eth0 -u 1000 -g 1000

```bash
netsniff-ng -i eth0 -u 1000 -g 1000
```

Drops root privileges to the specified user and group ID after initializing the capture socket for security.


## Jumbo Frames

### netsniff-ng -i eth0 -J

```bash
netsniff-ng -i eth0 -J
```

Enables support for jumbo frames in the ring buffer layout to accommodate packets larger than standard MTU.


## Randomized MAC

### netsniff-ng -i eth0 --rand

```bash
netsniff-ng -i eth0 --rand
```

Randomizes the MAC address of the interface before starting operations (if supported by driver).


## RFMON Mode

### netsniff-ng -i wlan0 --rfraw

```bash
netsniff-ng -i wlan0 --rfraw
```

Enables raw radio frequency monitor mode on wireless interfaces for capturing 802.11 management frames.


## VLAN Capture

### netsniff-ng -i eth0 -o vlan.pcap --verbose

```bash
netsniff-ng -i eth0 -o vlan.pcap --verbose
```

Captures traffic including VLAN tags and prints detailed protocol structures for verification.


## Traffic Generation

### netsniff-ng -i eth0 --trafgen

```bash
netsniff-ng -i eth0 --trafgen
```

Usually redirects to the trafgen tool, but netsniff-ng handles replay; this mode relates to TX path optimization.


## Kernel Statistics

### netsniff-ng -i eth0 --stats

```bash
netsniff-ng -i eth0 --stats
```

Prints kernel-level packet socket statistics including drop counts and freeze status upon exit.


## Lock Memory

### netsniff-ng -i eth0 -k

```bash
netsniff-ng -i eth0 -k
```

Locks the process memory into RAM (mlockall) to prevent swapping and ensure consistent high-speed capture.


## Loopback Capture

### netsniff-ng -i lo -o loopback.pcap

```bash
netsniff-ng -i lo -o loopback.pcap
```

Captures internal local traffic on the loopback interface and saves it to a file.


## Pipe Output

### netsniff-ng -i eth0 --pipe

```bash
netsniff-ng -i eth0 --pipe
```

Writes raw packet data to stdout for piping into other tools without pcap headers.


## Advanced Replay

### netsniff-ng -i malicious.pcap -o eth0 -k -s -b 0

```bash
netsniff-ng -i malicious.pcap -o eth0 -k -s -b 0
```

Replays malicious traffic for IDS testing with memory locking, CPU pinning, and silent mode for precision.


## Interval Capture

### netsniff-ng -i eth0 -G 5s

```bash
netsniff-ng -i eth0 -G 5s
```

Rotates the capture file every 5 seconds, useful for segmenting continuous monitoring data.


## Specific Protocol Dump

### netsniff-ng -i eth0 --hex

```bash
netsniff-ng -i eth0 --hex
```

Dumps the packet content in a hex format, an alias for the -X option.


## Version Check

### netsniff-ng -v

```bash
netsniff-ng -v
```

Displays the version information and build features of the installed netsniff-ng tool.


## Help Menu

### netsniff-ng -h

```bash
netsniff-ng -h
```

Shows the brief help menu listing available flags and usage syntax.


## Full Help

### netsniff-ng --help

```bash
netsniff-ng --help
```

Displays the complete help documentation with all available command-line options.


## Combined Security Monitoring

### netsniff-ng -i eth0 -s -o /var/log/traffic/ -P daily -S 512MiB -k -b 0

```bash
netsniff-ng -i eth0 -s -o /var/log/traffic/ -P daily -S 512MiB -k -b 0
```

A production-grade monitoring command with silent capture, large ring buffer, memory locking, CPU affinity, and file rotation.

## Related tools

- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [Tcpreplay](https://terminal.rokibulroni.com/tool/traffic/tcpreplay)
