# Tcpreplay

> Replays captured pcap traffic onto a network at chosen speeds — useful for testing IDS rules and network devices.

- Category: Traffic Analysis
- Commands: 50
- Page: https://terminal.rokibulroni.com/tool/traffic/tcpreplay
- Homepage: https://tcpreplay.appneta.com
- Documentation: https://tcpreplay.appneta.com/wiki/tcpreplay-man.html
- Tags: pcap, replay, testing

## Install

- apt: `sudo apt install tcpreplay`
- brew: `brew install tcpreplay`

## General Information

### tcpreplay -V

```bash
tcpreplay -V
```

Displays the version of tcpreplay installed and the compilation options used.

### tcpreplay -h

```bash
tcpreplay -h
```

Prints the help screen with a summary of available commands and flags.


## Interface Selection

### tcpreplay --list-nics

```bash
tcpreplay --list-nics
```

Lists available network interfaces and their capture methods to verify hardware visibility.


## Basic Replay

### tcpreplay -i eth0 capture.pcap

```bash
tcpreplay -i eth0 capture.pcap
```

Replays packets from the specified pcap file onto the interface eth0 at the speed recorded in the file.

### tcpreplay --intf1=wlan0 capture.pcap

```bash
tcpreplay --intf1=wlan0 capture.pcap
```

Replays traffic onto a wireless interface using the long-form flag for clarity.


## Replay Speed Control

### tcpreplay -i eth0 -t capture.pcap

```bash
tcpreplay -i eth0 -t capture.pcap
```

Replays traffic at 'topspeed', ignoring packet timing to send as fast as the hardware allows.


## Packet Rate Limiting

### tcpreplay -i eth0 -p 50 capture.pcap

```bash
tcpreplay -i eth0 -p 50 capture.pcap
```

Replays traffic at a constant rate of 50 packets per second, overriding original timing.


## Bandwidth Limiting

### tcpreplay -i eth0 -M 10.0 capture.pcap

```bash
tcpreplay -i eth0 -M 10.0 capture.pcap
```

Limits the replay traffic throughput to 10.0 Megabits per second.


## Replay Speed Control

### tcpreplay -i eth0 -x 2.0 capture.pcap

```bash
tcpreplay -i eth0 -x 2.0 capture.pcap
```

Replays traffic at exactly 2.0 times the speed of the original capture speed.

### tcpreplay -i eth0 -x 0.5 capture.pcap

```bash
tcpreplay -i eth0 -x 0.5 capture.pcap
```

Replays traffic in slow motion at half the original capture speed.


## Preload and Caching

### tcpreplay -i eth0 -K capture.pcap

```bash
tcpreplay -i eth0 -K capture.pcap
```

Preloads the entire pcap file into RAM before sending to improve performance and reduce disk I/O.

### tcpreplay -i eth0 --preload-pcap capture.pcap

```bash
tcpreplay -i eth0 --preload-pcap capture.pcap
```

Long-form command to load the file into memory before starting the replay.


## Looping and Continuous

### tcpreplay -i eth0 -l 0 capture.pcap

```bash
tcpreplay -i eth0 -l 0 capture.pcap
```

Replays the capture file in an infinite loop until manually stopped.

### tcpreplay -i eth0 --loop=5 capture.pcap

```bash
tcpreplay -i eth0 --loop=5 capture.pcap
```

Replays the capture file exactly 5 times and then exits.

### tcpreplay -i eth0 -l 0 --loopdelay-ms=1000 capture.pcap

```bash
tcpreplay -i eth0 -l 0 --loopdelay-ms=1000 capture.pcap
```

Loops infinitely with a 1000 millisecond (1 second) pause between each iteration.


## Stats and Reporting

### tcpreplay -i eth0 --stats=1 capture.pcap

```bash
tcpreplay -i eth0 --stats=1 capture.pcap
```

Prints replay statistics to the console every 1 second during execution.

### tcpreplay -i eth0 -S capture.pcap

```bash
tcpreplay -i eth0 -S capture.pcap
```

Wait for enter key before starting, then print statistics during replay.


## Packet Count Limiting

### tcpreplay -i eth0 -L 100 capture.pcap

```bash
tcpreplay -i eth0 -L 100 capture.pcap
```

Stops the replay immediately after sending the first 100 packets.


## Timing Preservation

### tcpreplay -i eth0 --duration=10 capture.pcap

```bash
tcpreplay -i eth0 --duration=10 capture.pcap
```

Limits the total execution time to 10 seconds, regardless of how many packets are sent.


## Verbose and Debug

### tcpreplay -i eth0 -v capture.pcap

```bash
tcpreplay -i eth0 -v capture.pcap
```

Enables verbose mode, printing decoded packet headers to STDOUT (similar to tcpdump) while replaying.

### tcpreplay -i eth0 -A "n,v,x" -v capture.pcap

```bash
tcpreplay -i eth0 -A "n,v,x" -v capture.pcap
```

Enables verbose mode using specific tcpdump args (numeric, verbose, hex) for the decoder.


## Quiet Output

### tcpreplay -i eth0 -q capture.pcap

```bash
tcpreplay -i eth0 -q capture.pcap
```

Runs in quiet mode, suppressing non-error output (useful for scripts).


## Flow Modification

### tcpreplay -i eth0 --unique-ip capture.pcap

```bash
tcpreplay -i eth0 --unique-ip capture.pcap
```

Modifies IP addresses per loop iteration to ensure each flow appears unique to network devices.

### tcpreplay -i eth0 --unique-ip-loops=5 capture.pcap

```bash
tcpreplay -i eth0 --unique-ip-loops=5 capture.pcap
```

Loops traffic, modifying IP addresses to create unique flows for 5 iterations.


## Dual Interface Replay

### tcpreplay -i eth0 -I eth1 --cachefile=split.cache capture.pcap

```bash
tcpreplay -i eth0 -I eth1 --cachefile=split.cache capture.pcap
```

Splits traffic between two interfaces (client/server) based on a tcpprep cache file.

### tcpreplay --intf1=eth0 --intf2=eth1 --cachefile=split.cache capture.pcap

```bash
tcpreplay --intf1=eth0 --intf2=eth1 --cachefile=split.cache capture.pcap
```

Long-form command to split traffic bi-directionally between eth0 and eth1 using a cache.


## Advanced Timing

### tcpreplay -i eth0 -1 capture.pcap

```bash
tcpreplay -i eth0 -1 capture.pcap
```

Sends one packet at a time, waiting for a user keypress before sending the next.

### tcpreplay -i eth0 --timer=gtod capture.pcap

```bash
tcpreplay -i eth0 --timer=gtod capture.pcap
```

Uses the 'gettimeofday' system call for packet timing, which provides microsecond compatibility.

### tcpreplay -i eth0 --timer=nano capture.pcap

```bash
tcpreplay -i eth0 --timer=nano capture.pcap
```

Uses the 'nanosleep' API for high-precision packet timing delays.

### tcpreplay -i eth0 --maxsleep=500 capture.pcap

```bash
tcpreplay -i eth0 --maxsleep=500 capture.pcap
```

Forces pauses between packets to never exceed 500 milliseconds, effectively compressing long idle gaps.

### tcpreplay -i eth0 --sleep-accel=2 capture.pcap

```bash
tcpreplay -i eth0 --sleep-accel=2 capture.pcap
```

Reduces the amount of time slept by 2 microseconds per packet to compensate for system latency.


## IDS and IPS Testing

### tcpreplay -i eth0 -t -K --loop=0 capture.pcap

```bash
tcpreplay -i eth0 -t -K --loop=0 capture.pcap
```

Stress tests an IDS by preloading the pcap and looping at maximum hardware speed.


## Red Team Simulation

### tcpreplay -i eth0 -p 1 -l 0 capture.pcap

```bash
tcpreplay -i eth0 -p 1 -l 0 capture.pcap
```

Sends a 'Low and Slow' attack simulation by sending only 1 packet per second continuously.

### tcpreplay -i eth0 --unique-ip --mbps=500 capture.pcap

```bash
tcpreplay -i eth0 --unique-ip --mbps=500 capture.pcap
```

Simulates a DDoS attack or botnet by generating high bandwidth traffic with constantly changing IP addresses.


## Blue Team Detection

### tcpreplay -i eth0 -x 1.0 capture.pcap

```bash
tcpreplay -i eth0 -x 1.0 capture.pcap
```

Replays an attack capture at exactly real-time speed to verify if the SIEM/IDS triggers correctly.


## Network Troubleshooting

### tcpreplay -i eth0 -M 1000.0 -l 60 capture.pcap

```bash
tcpreplay -i eth0 -M 1000.0 -l 60 capture.pcap
```

Loads the link with 1Gbps of traffic for 60 loops to test throughput stability.


## MTU Handling

### tcpreplay -i eth0 --mtu=1500 capture.pcap

```bash
tcpreplay -i eth0 --mtu=1500 capture.pcap
```

Specifies the Maximum Transmission Unit size to 1500 bytes for the replay interface.

### tcpreplay -i eth0 --mtu-trunc capture.pcap

```bash
tcpreplay -i eth0 --mtu-trunc capture.pcap
```

Truncates packets that exceed the specified MTU size rather than skipping them.


## Error Handling

### tcpreplay -i eth0 --no-arg-check capture.pcap

```bash
tcpreplay -i eth0 --no-arg-check capture.pcap
```

Disables the validation of arguments, allowing execution even if settings seem conflicting.

### tcpreplay -i eth0 --skip-soft-errors capture.pcap

```bash
tcpreplay -i eth0 --skip-soft-errors capture.pcap
```

Continues replaying packets even if minor errors occur (e.g., failed to send a specific packet).


## Netmap/AF_XDP High Speed

### tcpreplay -i netmap:eth0 -t -K capture.pcap

```bash
tcpreplay -i netmap:eth0 -t -K capture.pcap
```

Uses the netmap driver (if supported) for ultra-high-speed packet injection.


## Verbosity

### tcpreplay -i eth0 --verbose --decode="len=10" capture.pcap

```bash
tcpreplay -i eth0 --verbose --decode="len=10" capture.pcap
```

Replays with verbose output but passes arguments to the decoder to limit length.


## Looping

### tcpreplay -i eth0 --loop=100 --loopdelay-ms=10 capture.pcap

```bash
tcpreplay -i eth0 --loop=100 --loopdelay-ms=10 capture.pcap
```

Runs 100 loops with a very short 10ms gap between loops to maintain near-continuous pressure.


## Bandwidth

### tcpreplay -i eth0 --mbps=0.1 capture.pcap

```bash
tcpreplay -i eth0 --mbps=0.1 capture.pcap
```

Replays traffic at a very low rate of 100Kbps (0.1 Mbps) to test timeouts.


## PPS Control

### tcpreplay -i eth0 --pps=20000 capture.pcap

```bash
tcpreplay -i eth0 --pps=20000 capture.pcap
```

Injects packets at a high rate of 20,000 packets per second regardless of packet size.


## Flow Modification

### tcpreplay -i eth0 --unique-ip --netmap capture.pcap

```bash
tcpreplay -i eth0 --unique-ip --netmap capture.pcap
```

Combines unique IP generation with netmap detection for high-performance unique flow generation.


## Timing

### tcpreplay -i eth0 --timer=rdtsc capture.pcap

```bash
tcpreplay -i eth0 --timer=rdtsc capture.pcap
```

Uses the CPU cycle counter (RDTSC) for the highest possible timing precision on supported CPUs.


## Packet Selection

### tcpreplay -i eth0 --limit=1 capture.pcap

```bash
tcpreplay -i eth0 --limit=1 capture.pcap
```

Sends strictly the first packet of the capture file and then exits immediately.


## Performance Tuning

### tcpreplay -i eth0 --preload-pcap --quiet capture.pcap

```bash
tcpreplay -i eth0 --preload-pcap --quiet capture.pcap
```

A high-performance script-friendly mode that preloads data and suppresses output.


## Advanced Combined

### tcpreplay -i eth0 --mbps=100 --loop=0 --unique-ip --stats=5 capture.pcap

```bash
tcpreplay -i eth0 --mbps=100 --loop=0 --unique-ip --stats=5 capture.pcap
```

A complex scenario: infinite loop, unique IPs, 100Mbps limit, with stats printed every 5 seconds.

## Related tools

- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
- [Suricata](https://terminal.rokibulroni.com/tool/monitoring/suricata)
- [Snort](https://terminal.rokibulroni.com/tool/monitoring/snort)
