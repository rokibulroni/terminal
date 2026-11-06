# iperf3

> Measures maximum TCP and UDP throughput between two hosts — the standard tool for testing network bandwidth and link quality.

- Category: Network
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/network/iperf
- Homepage: https://iperf.fr
- Documentation: https://iperf.fr/iperf-doc.php
- Tags: bandwidth, performance, throughput

## Install

- apt: `sudo apt install iperf3`
- brew: `brew install iperf3`
- windows: `winget install ar51an.iPerf3`

## Basic Server

### iperf3 -s

```bash
iperf3 -s
```

Starts an iperf server to listen for test connections.
Operates on the default port to receive throughput measurements from clients.

### iperf3 -s -p 5201

```bash
iperf3 -s -p 5201
```

Starts the server on a specific custom port (-p).
Required when the default port is blocked or already in use.

### iperf3 -s -D

```bash
iperf3 -s -D
```

Runs the server in daemon mode (-D).
Moves the process to the background, allowing the terminal to be used for other tasks.

### iperf3 -s -1

```bash
iperf3 -s -1
```

Runs the server for exactly one test (-1).
Automatically shuts down the server once the first client completes its test.

### iperf3 -s --logfile server_log.txt

```bash
iperf3 -s --logfile server_log.txt
```

Example:

```bash
iperf3 -s --logfile /var/log/iperf3.log
```

Redirects all server output to a log file.
Ensures test results are persisted for later analysis without polluting the console.

### iperf3 -s -i 1

```bash
iperf3 -s -i 1
```

Sets the reporting interval to 1 second (-i 1).
Provides real-time throughput updates during the progress of the test.


## Basic Client

### iperf3 -c 192.168.1.10

```bash
iperf3 -c 192.168.1.10
```

Initiates a client test to a specific IP.
Connects to the target server to begin measuring network performance.

### iperf3 -c iperf.example.com

```bash
iperf3 -c iperf.example.com
```

Initiates a client test to a hostname.
Uses DNS resolution to find the target server for the performance audit.

### iperf3 -c 192.168.1.10 -p 5201

```bash
iperf3 -c 192.168.1.10 -p 5201
```

Connects to a server on a specific port (-p).
Ensures the client reaches the server matching the listener configuration.


## Format Control

### iperf3 -c 192.168.1.10 -f m

```bash
iperf3 -c 192.168.1.10 -f m
```

Displays bandwidth in Mbits/sec (-f m).
Standardizes output format for easy comparison of multi-megabit links.

### iperf3 -c 192.168.1.10 -f K

```bash
iperf3 -c 192.168.1.10 -f K
```

Displays bandwidth in KBytes/sec (-f K).
Useful for precisely measuring performance on low-speed or legacy connections.


## Duration Control

### iperf3 -c 192.168.1.10 -t 60

```bash
iperf3 -c 192.168.1.10 -t 60
```

Sets test duration to 60 seconds (-t 60).
Provides a sustained measurement of throughput over a significant time period.

### iperf3 -c 192.168.1.10 -n 1G

```bash
iperf3 -c 192.168.1.10 -n 1G
```

Transfers exactly 1 Gigabyte of data (-n 1G).
Completes the test based on data volume rather than a fixed time limit.

### iperf3 -c 192.168.1.10 -k 1000

```bash
iperf3 -c 192.168.1.10 -k 1000
```

Transfers a specific number of blocks (-k 1000).
Allows precise control over the total number of packets sent during the test.


## UDP Testing

### iperf3 -c 192.168.1.10 -u

```bash
iperf3 -c 192.168.1.10 -u
```

Runs the test in UDP mode (-u).
Measures jitter, packet loss, and throughput for connectionless traffic.

### iperf3 -c 192.168.1.10 -u -b 10M

```bash
iperf3 -c 192.168.1.10 -u -b 10M
```

Sets UDP target bandwidth to 10 Mbps (-b 10M).
Throttles the client to a specific rate to test link capacity and packet loss.

### iperf3 -c 192.168.1.10 -u -b 100M -t 30

```bash
iperf3 -c 192.168.1.10 -u -b 100M -t 30
```

Runs a 30-second UDP test at 100 Mbps.
Establishes a baseline for high-speed wireless or wired network performance.

### iperf3 -c 192.168.1.10 -u -b 0

```bash
iperf3 -c 192.168.1.10 -u -b 0
```

UDP test with unlimited bandwidth (-b 0).
Attempts to saturate the link completely to find its maximum physical throughput.

### iperf3 -c 192.168.1.10 -u -l 1000

```bash
iperf3 -c 192.168.1.10 -u -l 1000
```

Sets custom buffer length (-l 1000).
Controls the size of each packet sent to test MTU limits and overhead.


## Direction Control

### iperf3 -c 192.168.1.10 -R

```bash
iperf3 -c 192.168.1.10 -R
```

Enables reverse throughput mode (-R).
Measures download speed by having the server transmit data to the client.

### iperf3 -c 192.168.1.10 --bidir

```bash
iperf3 -c 192.168.1.10 --bidir
```

Runs a bidirectional test (--bidir).
Simulates real-world traffic by sending and receiving data simultaneously.


## Parallel Streams

### iperf3 -c 192.168.1.10 -P 4

```bash
iperf3 -c 192.168.1.10 -P 4
```

Uses 4 parallel TCP streams (-P 4).
Saturates high-bandwidth links by overcoming standard single-stream limitations.

### iperf3 -c 192.168.1.10 -P 8 -t 60

```bash
iperf3 -c 192.168.1.10 -P 8 -t 60
```

Sustained test with 8 parallel streams.
Used for stress testing and validating multi-path efficiency on the network.


## Interface Binding

### iperf3 -c 192.168.1.10 -B 192.168.1.20

```bash
iperf3 -c 192.168.1.10 -B 192.168.1.20
```

Binds client to specific source IP (-B).
Forces traffic out through a particular network interface on the local host.

### iperf3 -s -B 0.0.0.0

```bash
iperf3 -s -B 0.0.0.0
```

Binds server to listen on all IPv4 addresses.
Ensures the listener responds to requests on any available network interface.


## IP Protocols

### iperf3 -c 192.168.1.10 -4

```bash
iperf3 -c 192.168.1.10 -4
```

Forces IPv4 usage for the test (-4).
Ensures no IPv6 resolution or transport is used during the performance run.

### iperf3 -c 2001:db8::1 -6

```bash
iperf3 -c 2001:db8::1 -6
```

Forces IPv6 usage for the test (-6).
Validates throughput and connectivity on the modern IPv6 network stack.


## Output Options

### iperf3 -c 192.168.1.10 -J

```bash
iperf3 -c 192.168.1.10 -J
```

Outputs test results in JSON format (-J).
Provides a structured data stream ideal for automated logging and report generation.

### iperf3 -c 192.168.1.10 --logfile client_results.log

```bash
iperf3 -c 192.168.1.10 --logfile client_results.log
```

Saves client results to a file.
Persists the detailed test output for archival and comparative analysis.

### iperf3 -c 192.168.1.10 --get-server-output

```bash
iperf3 -c 192.168.1.10 --get-server-output
```

Requests and displays server result output.
Provides a complete end-to-end view of the test from both sides of the link.

### iperf3 -c 192.168.1.10 -O 5

```bash
iperf3 -c 192.168.1.10 -O 5
```

Omits first 5 seconds from statistics (-O 5).
Filters out the initial TCP slow-start phase for more accurate steady-state data.

### iperf3 -c 192.168.1.10 -T 'Core Switch Test'

```bash
iperf3 -c 192.168.1.10 -T 'Core Switch Test'
```

Adds a custom title to the output (-T).
Labels the test run for easy identification in aggregate logs or reports.

### iperf3 -c 192.168.1.10 -V

```bash
iperf3 -c 192.168.1.10 -V
```

Enables verbose output for detailed tracking (-V).
Shows extensive connection parameters, CPU usage, and endpoint details.

### iperf3 -c 192.168.1.10 -d

```bash
iperf3 -c 192.168.1.10 -d
```

Enables internal debug mode (-d).
Provides low-level diagnostic data for troubleshooting iperf3 execution issues.


## TCP Tuning

### iperf3 -c 192.168.1.10 -w 512K

```bash
iperf3 -c 192.168.1.10 -w 512K
```

Sets the socket buffer size (-w 512K).
Manually adjusts the TCP window to optimize performance on high-latency links.

### iperf3 -c 192.168.1.10 -M 1400

```bash
iperf3 -c 192.168.1.10 -M 1400
```

Sets TCP Maximum Segment Size (-M 1400).
Limits the size of TCP segments to avoid fragmentation on restrictive paths.

### iperf3 -c 192.168.1.10 -N

```bash
iperf3 -c 192.168.1.10 -N
```

Disables Nagle's algorithm (-N).
Reduces latency by sending all packets immediately without waiting for buffer fills.

### iperf3 -c 192.168.1.10 -Z

```bash
iperf3 -c 192.168.1.10 -Z
```

Enables Zero Copy data transfer (-Z).
Reduces system overhead by moving data between kernel spaces without CPU copying.

### iperf3 -c 192.168.1.10 -C cubic

```bash
iperf3 -c 192.168.1.10 -C cubic
```

Sets TCP congestion control to 'cubic'.
Configures the algorithm used to manage traffic flow and bandwidth usage.

### iperf3 -c 192.168.1.10 -C bbr

```bash
iperf3 -c 192.168.1.10 -C bbr
```

Sets TCP congestion control to 'bbr'.
Uses Google's Bottleneck Bandwidth and RTT algorithm for enhanced performance.


## System Control

### iperf3 -c 192.168.1.10 -A 1

```bash
iperf3 -c 192.168.1.10 -A 1
```

Binds the process to a specific CPU core (-A 1).
Minimizes context switching overhead and ensures consistent processing performance.

### iperf3 -s -I /var/run/iperf3.pid

```bash
iperf3 -s -I /var/run/iperf3.pid
```

Writes server Process ID to a file (-I).
Useful for shell scripts and system monitors to manage the server lifecycle.


## Alternative Protocols

### iperf3 -c 192.168.1.10 --sctp

```bash
iperf3 -c 192.168.1.10 --sctp
```

Uses SCTP transport protocol (--sctp).
Tests performance over the multi-homed, message-oriented SCTP protocol.


## QoS & Marking

### iperf3 -c 192.168.1.10 --dscp 46

```bash
iperf3 -c 192.168.1.10 --dscp 46
```

Sets DSCP marking for the traffic (--dscp 46).
Assigns Expedited Forwarding (EF) quality to packets to test QoS handling.

### iperf3 -c 192.168.1.10 -S 0x10

```bash
iperf3 -c 192.168.1.10 -S 0x10
```

Sets the IP Type of Service byte (-S 0x10).
Provides legacy QoS marking for network path prioritization testing.

### iperf3 -c 192.168.1.10 -L 12345

```bash
iperf3 -c 192.168.1.10 -L 12345
```

Sets the IPv6 Flow Label (-L 12345).
Tags IPv6 packet streams for experimental or path-specific routing tests.


## Security

### iperf3 -s --rsa-private-key-path server.key --authorized-users-path users.csv

```bash
iperf3 -s --rsa-private-key-path server.key --authorized-users-path users.csv
```

Example:

```bash
iperf3 -s --rsa-private-key-path /etc/iperf3/server.key --authorized-users-path /etc/iperf3/users
```

Starts a secure server using RSA authentication.
Protects the performance audit by requiring valid credentials and keys.

### iperf3 -c 192.168.1.10 --username testuser --rsa-public-key-path pub.key

```bash
iperf3 -c 192.168.1.10 --username testuser --rsa-public-key-path pub.key
```

Connects to a secure server with credentials.
Authenticates the client test session to ensure authorized network monitoring.


## Data Control

### iperf3 -c 192.168.1.10 --repeating-payload

```bash
iperf3 -c 192.168.1.10 --repeating-payload
```

Uses a repeating payload pattern.
Simulates highly compressible data to test its impact on link optimization.


## Advanced

### iperf3 -c 192.168.1.10 -X /var/run/sctp_bind

```bash
iperf3 -c 192.168.1.10 -X /var/run/sctp_bind
```

Binds SCTP associations to links (-X).
Advanced control for multi-homing tests over the SCTP transport.

### iperf3 -c 192.168.1.10 --fq-rate 500M

```bash
iperf3 -c 192.168.1.10 --fq-rate 500M
```

Sets Fair Queueing rate limit (--fq-rate).
Throttles the socket at the kernel level for advanced traffic policy simulation.

### iperf3 -s --server-bitrate-limit 100M

```bash
iperf3 -s --server-bitrate-limit 100M
```

Caps maximum acceptable server-side bitrate.
Protects the server from being overwhelmed by high-speed client floods.


## Real World Scenario

### iperf3 -c 192.168.1.10 -t 3600 -i 60 --logfile long_test.txt

```bash
iperf3 -c 192.168.1.10 -t 3600 -i 60 --logfile long_test.txt
```

Performs a 1-hour stability test with periodic logging.
Monitors network performance consistency and identifies long-term drift.

### iperf3 -c 192.168.1.10 -u -b 50M -R

```bash
iperf3 -c 192.168.1.10 -u -b 50M -R
```

Tests UDP download capacity at 50 Mbps.
Establishes specific performance metrics for reverse-direction traffic.

### iperf3 -c 192.168.1.10 -P 16 -w 1M

```bash
iperf3 -c 192.168.1.10 -P 16 -w 1M
```

Heavy load test for high-capacity WAN links.
Combines many parallel streams with large windows to saturate the pipe.

### iperf3 -c 192.168.1.10 -u -b 10M --length 100

```bash
iperf3 -c 192.168.1.10 -u -b 10M --length 100
```

Simulates low-bandwidth VoIP traffic flow.
Uses UDP with small packet sizes to measure jitter and delay characteristics.

### iperf3 -c 192.168.1.10 -6 -P 4

```bash
iperf3 -c 192.168.1.10 -6 -P 4
```

Tests IPv6 specific throughput with multiple streams.
Validates performance parity between IPv4 and IPv6 network paths.

### iperf3 -c 192.168.1.10 --cport 6001

```bash
iperf3 -c 192.168.1.10 --cport 6001
```

Binds the client to a fixed source port (--cport).
Required for testing through restrictive firewalls with static port policies.

### iperf3 -c 192.168.1.10 -J --logfile result.json

```bash
iperf3 -c 192.168.1.10 -J --logfile result.json
```

Saves structured JSON results for automated analysis.
Enables seamless integration into observability and data pipelines.

### iperf3 -c 192.168.1.10 -O 3 -t 10 -J

```bash
iperf3 -c 192.168.1.10 -O 3 -t 10 -J
```

Runs a standardized automated performance test.
Includes warm-up filtering and structured data output for consistency.


## Bandwidth Limiting

### iperf3 -c 192.168.1.10 -b 500K

```bash
iperf3 -c 192.168.1.10 -b 500K
```

Caps TCP bandwidth to 500 Kbits/sec (-b 500K).
Useful for simulating narrowband links and throttling test traffic.

### iperf3 -c 192.168.1.10 -b 2G/100

```bash
iperf3 -c 192.168.1.10 -b 2G/100
```

Sets high-speed target with burst control.
Benchmarks performance while modeling bursty traffic patterns.


## Debugging

### iperf3 -v

```bash
iperf3 -v
```

Displays software build and feature set (-v).
Documents the exact version of iperf3 and its available capabilities.

### iperf3 -h

```bash
iperf3 -h
```

Displays command help menu (-h).
Provides quick reference for all available performance testing flags.


## Server Advanced

### iperf3 -s --idle-timeout 60

```bash
iperf3 -s --idle-timeout 60
```

Client connection timeout setting (--connect-timeout).
Forces a 5s connection wait limit before failing the test attempt.


## Client Advanced

### iperf3 -c 192.168.1.10 --connect-timeout 5000

```bash
iperf3 -c 192.168.1.10 --connect-timeout 5000
```

Client connection timeout setting (--connect-timeout).
Forces a 5s connection wait limit before failing the test attempt.


## Combined

### iperf3 -c 192.168.1.10 -u -b 100M -t 10 -i 1 -V

```bash
iperf3 -c 192.168.1.10 -u -b 100M -t 10 -i 1 -V
```

Verbose high-speed UDP audit (-u -b 100M).
Provides granular reporting and detailed tracking for UDP throughput.

### iperf3 -c 192.168.1.10 --bidir -t 30 -P 2

```bash
iperf3 -c 192.168.1.10 --bidir -t 30 -P 2
```

sustained bidirectional performance measurement.
Uses multiple streams to test full-duplex bandwidth availability.

### iperf3 -c 192.168.1.10 -4 -R -w 2M

```bash
iperf3 -c 192.168.1.10 -4 -R -w 2M
```

IPv4 Download test with optimized window (-4 -R).
Maximizes throughput by increasing the receiver's data buffer.


## Automation

### iperf3 -c 192.168.1.10 --json

```bash
iperf3 -c 192.168.1.10 --json
```

Alias for structured JSON data output.
Ensures the test results are delivered in a machine-parseable format.

### iperf3 -s --json

```bash
iperf3 -s --json
```

Server-side JSON event logging.
Captures all incoming connection events in a structured developer format.


## Advanced

### iperf3 -c 192.168.1.10 --time-wait-interval 2000

```bash
iperf3 -c 192.168.1.10 --time-wait-interval 2000
```

Sets wait time between repeated tests.
Controls the spacing of test iterations for automated scripting.

### iperf3 -c 192.168.1.10 -b 0 -t 20 --pacing-timer 1000

```bash
iperf3 -c 192.168.1.10 -b 0 -t 20 --pacing-timer 1000
```

Sets granular pacing timer for the socket.
Manually adjusts the timing interval for outbound data transmissions.

### iperf3 -c 192.168.1.10 -u -b 20M --packet-size 500

```bash
iperf3 -c 192.168.1.10 -u -b 20M --packet-size 500
```

Customizes UDP packet size for specialized testing.
Validates how the link handles non-standard message lengths.


## Final Complete Test

### iperf3 -c 192.168.1.10 -P 4 -t 60 -i 5 -O 5 -J --logfile full_test.json

```bash
iperf3 -c 192.168.1.10 -P 4 -t 60 -i 5 -O 5 -J --logfile full_test.json
```

Executes a complete, documented performance profile.
A comprehensive audit command for high-speed network validation.

## Related tools

- [ping](https://terminal.rokibulroni.com/tool/linux/ping)
- [ss](https://terminal.rokibulroni.com/tool/network/ss)
