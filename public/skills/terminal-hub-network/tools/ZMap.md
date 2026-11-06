# ZMap

> A single-packet network scanner designed to survey the entire IPv4 address space for one port at a time, used in internet-wide research.

- Category: Network
- Commands: 72
- Page: https://terminal.rokibulroni.com/tool/network/ZMap
- Homepage: https://zmap.io
- Documentation: https://github.com/zmap/zmap/wiki
- Tags: internet-scale, research, port scanning

## Install

- apt: `sudo apt install zmap`
- brew: `brew install zmap`

## Basic Scan

### zmap -p 80 192.168.1.0/24

```bash
zmap -p 80 192.168.1.0/24
```

Scans a specific CIDR block for open TCP port 80.
ZMap's unique architecture scans such ranges in seconds.

### zmap -p 443 10.0.0.0/8

```bash
zmap -p 443 10.0.0.0/8
```

Scans a large private network range (Class A) for HTTPS.
Ideal for large-scale internal audits or discovery.

### zmap -p 80 0.0.0.0/0

```bash
zmap -p 80 0.0.0.0/0
```

Initiates a scan of the entire IPv4 Internet for port 80.
ZMap's primary use case; capable of scanning the whole internet in under 45 minutes.


## Scan Rate and Bandwidth Control

### zmap -p 80 -r 1000 192.168.1.0/24

```bash
zmap -p 80 -r 1000 192.168.1.0/24
```

Limits the scan rate to 1000 packets per second.
Crucial for being a good network citizen and not flooding upstream providers.

### zmap -p 80 -B 10M 0.0.0.0/0

```bash
zmap -p 80 -B 10M 0.0.0.0/0
```

Limits the scan bandwidth usage to 10 Mbps.
Ensures the scan adds only a negligible load to the network connection.

### zmap -p 80 -B 1G 0.0.0.0/0

```bash
zmap -p 80 -B 1G 0.0.0.0/0
```

Sets the bandwidth limit to 1 Gbps.
Designed for high-speed datacenter connections to maximize scan throughput.

### zmap -p 80 --max-runtime=300 0.0.0.0/0

```bash
zmap -p 80 --max-runtime=300 0.0.0.0/0
```

Forces the scan to abort after 5 minutes.
Useful for time-boxed experiments or ensuring scans don't run indefinitely.

### zmap -p 80 --max-results=1000 0.0.0.0/0

```bash
zmap -p 80 --max-results=1000 0.0.0.0/0
```

Stops the scan once 1000 open ports are found.
Great for sampling the network or verifying if a vulnerability exists widely.


## Network Interface Configuration

### zmap -p 80 -i eth0 192.168.1.0/24

```bash
zmap -p 80 -i eth0 192.168.1.0/24
```

Specifies the network interface for the scan.
Required when multiple interfaces exist or when ignoring the default route.


## Source IP, MAC, and Gateway Configuration

### zmap -p 80 -S 1.2.3.4 0.0.0.0/0

```bash
zmap -p 80 -S 1.2.3.4 0.0.0.0/0
```

Spoofs the source IP address of the scan packets.
Advanced usage for testing firewall rules or response routing.

### zmap -p 80 -G 00:11:22:33:44:55 0.0.0.0/0

```bash
zmap -p 80 -G 00:11:22:33:44:55 0.0.0.0/0
```

Specify a custom gateway MAC address.
Bypasses ARP lookup, useful for scanning on strange network topologies.

### zmap -p 80 --source-port=12345-12350 0.0.0.0/0

```bash
zmap -p 80 --source-port=12345-12350 0.0.0.0/0
```

Restricts the source port range for outgoing packets.
Useful if firewalls only permit traffic from specific source ports.


## Probe Modules

### zmap -M icmp_echoscan 192.168.1.0/24

```bash
zmap -M icmp_echoscan 192.168.1.0/24
```

Uses ICMP Echo Requests (Ping) instead of TCP.
Maps active hosts regardless of open ports.

### zmap -M udp 192.168.1.0/24

```bash
zmap -M udp 192.168.1.0/24
```

Uses UDP probes for identifying UDP services.
Connectionless scanning requires specific payloads for best results.

### zmap -M tcp_synscan -p 443 0.0.0.0/0

```bash
zmap -M tcp_synscan -p 443 0.0.0.0/0
```

Explicitly selects the TCP SYN scan module.
This is the default and most efficient method for finding open TCP ports.

### zmap -M udp --probe-args=text:hello 192.168.1.0/24

```bash
zmap -M udp --probe-args=text:hello 192.168.1.0/24
```

Sends UDP packets with an ASCII 'hello' payload.
Some simple UDP services will respond to any data.

### zmap -M udp --probe-args=file:payload.pkt 192.168.1.0/24

```bash
zmap -M udp --probe-args=file:payload.pkt 192.168.1.0/24
```

Sends a custom binary payload from a file.
Essential for scanning complex UDP protocols like DNS or NTP.


## Output Modules and Output Fields

### zmap -p 80 -o results.csv 0.0.0.0/0

```bash
zmap -p 80 -o results.csv 0.0.0.0/0
```

Saves scan results to a CSV file.
Standard format for easy import into spreadsheets or databases.

### zmap -p 80 -o - 0.0.0.0/0

```bash
zmap -p 80 -o - 0.0.0.0/0
```

Prints results to standard output.
Allows piping results directly into other tools for real-time processing.

### zmap -p 80 --output-module=csv 0.0.0.0/0

```bash
zmap -p 80 --output-module=csv 0.0.0.0/0
```

Formats the output as Comma-Separated Values.
The default and most compact text format for ZMap results.

### zmap -p 80 --output-module=json 0.0.0.0/0

```bash
zmap -p 80 --output-module=json 0.0.0.0/0
```

Formats output as JSON objects.
Ideal for programmatic ingestion by log collectors like Elasticsearch.

### zmap -p 80 -f saddr,daddr,sport,dport 0.0.0.0/0

```bash
zmap -p 80 -f saddr,daddr,sport,dport 0.0.0.0/0
```

Customizes which fields to include in the output.
Adds source/dest IP and ports for detailed connection tracking.

### zmap -p 80 -f saddr,timestamp_str,cooldown 0.0.0.0/0

```bash
zmap -p 80 -f saddr,timestamp_str,cooldown 0.0.0.0/0
```

Includes timestamp and cooldown info in results.
Useful for analyzing scan timing and network response latency.

### zmap -p 80 --output-filter="success = 1" 0.0.0.0/0

```bash
zmap -p 80 --output-filter="success = 1" 0.0.0.0/0
```

Records only successful responses (open ports).
Reduces log size by ignoring failure states.


## Allowlist and Blocklist Usage

### zmap -p 80 -w targets.txt

```bash
zmap -p 80 -w targets.txt
```

Limits the scan to IP ranges in the whitelist file.
Ensures you only scan authorized targets.

### zmap -p 80 -b blacklist.conf 0.0.0.0/0

```bash
zmap -p 80 -b blacklist.conf 0.0.0.0/0
```

Excludes specific subnets in the blacklist file.
Critical for avoiding sensitive networks like military or government ranges.

### zmap -p 80 --whitelist-file=targets.txt

```bash
zmap -p 80 --whitelist-file=targets.txt
```

Specifies the whitelist file using the long flag.
Restricts scanning effectively to a predefined valid scope.

### zmap -p 80 --blacklist-file=blacklist.conf 0.0.0.0/0

```bash
zmap -p 80 --blacklist-file=blacklist.conf 0.0.0.0/0
```

Specifies the blacklist file using the long flag.
A mandatory best practice for internet-wide scanning.


## Scan Duration and Cooldown Control

### zmap -p 80 --cooldown-time=10 0.0.0.0/0

```bash
zmap -p 80 --cooldown-time=10 0.0.0.0/0
```

Waits 10 seconds after scanning to catch stragglers.
Ensures late responses from slow links are still recorded.


## Sharding and Distributed Scanning

### zmap -p 80 --shards=10 --shard=0 0.0.0.0/0

```bash
zmap -p 80 --shards=10 --shard=0 0.0.0.0/0
```

Runs shard 0 of a 10-shard scan.
Enables distributed scanning across multiple machines to speed up the job.

### zmap -p 80 --shards=4 --shard=3 0.0.0.0/0

```bash
zmap -p 80 --shards=4 --shard=3 0.0.0.0/0
```

Executes shard 3 of a 4-shard scan.
Part of a coordinated distributed scan strategy.


## Seed and Randomization Control

### zmap -p 80 --seed=12345 0.0.0.0/0

```bash
zmap -p 80 --seed=12345 0.0.0.0/0
```

Sets the random seed for address generation.
Ensures scan reproducibility by determining the exact scan order.


## Retry and Failure Handling

### zmap -p 80 --probes=3 0.0.0.0/0

```bash
zmap -p 80 --probes=3 0.0.0.0/0
```

Sends 3 probes per IP to increase reliability.
Helps overcome random packet loss on the internet.


## Logging and Verbosity

### zmap -p 80 -q 0.0.0.0/0

```bash
zmap -p 80 -q 0.0.0.0/0
```

Runs in quiet mode, suppressing status updates.
Useful when running in scripts or background jobs.

### zmap -p 80 -v 5 0.0.0.0/0

```bash
zmap -p 80 -v 5 0.0.0.0/0
```

Sets verbosity to debug level.
Maximum detail for troubleshooting internal ZMap errors.

### zmap -p 80 --log-file=zmap.log 0.0.0.0/0

```bash
zmap -p 80 --log-file=zmap.log 0.0.0.0/0
```

Redirects log output to a file.
Keeps standard error clean and persists logs for audit.

### zmap -p 80 --status-updates-file=status.txt 0.0.0.0/0

```bash
zmap -p 80 --status-updates-file=status.txt 0.0.0.0/0
```

Writes status updates to a file.
Allows monitoring of scan progress by reading a file.

### zmap -p 80 --disable-syslog 0.0.0.0/0

```bash
zmap -p 80 --disable-syslog 0.0.0.0/0
```

Disables syslog logging.
Prevents ZMap from flooding the local system logs with scan messages.


## Metadata and Result Enrichment

### zmap -p 80 --metadata-file=meta.json 0.0.0.0/0

```bash
zmap -p 80 --metadata-file=meta.json 0.0.0.0/0
```

Saves scan configuration metadata to a file.
Important for record-keeping and reproducing the scan later.

### zmap -p 80 --user-metadata="project:research" 0.0.0.0/0

```bash
zmap -p 80 --user-metadata="project:research" 0.0.0.0/0
```

Injects custom metadata fields into the output.
useful for tagging results with a project name or scan ID.


## Configuration File Usage

### zmap --config=my_scan.conf

```bash
zmap --config=my_scan.conf
```

Loads configuration from a specific file.
Allows managing complex scan setups via config files instead of flags.

### zmap -C /etc/zmap/zmap.conf

```bash
zmap -C /etc/zmap/zmap.conf
```

Alternate flag for specifying config file.
Points ZMap to a configuration file for default settings.


## Dry Run and Testing Modes

### zmap -p 80 --dryrun 0.0.0.0/0

```bash
zmap -p 80 --dryrun 0.0.0.0/0
```

Simulates the scan without sending packets.
Verifies command syntax and resource availability safely.

### zmap -p 80 --dryrun --max-results=10 0.0.0.0/0

```bash
zmap -p 80 --dryrun --max-results=10 0.0.0.0/0
```

Performs a limited 10-packet dry run.
Useful for checking output formatting before a full scan.


## Advanced and Combined Real World Scans

### zmap -p 80 -B 50M -o - | ztee results.csv

```bash
zmap -p 80 -B 50M -o - | ztee results.csv
```

Pipes results to 'ztee' for splitting output.
Saves results to a file while also piping them to another tool.

### zmap -p 80 -N 1000 -B 10M -o results.txt 0.0.0.0/0

```bash
zmap -p 80 -N 1000 -B 10M -o results.txt 0.0.0.0/0
```

Sampling scan for 1000 random hosts at 10M bandwidth.
Efficient way to get a statistical snapshot of the internet.

### zmap -p 443 -f saddr,sport,seq,ack,window -o extended_results.csv 0.0.0.0/0

```bash
zmap -p 443 -f saddr,sport,seq,ack,window -o extended_results.csv 0.0.0.0/0
```

Captures detailed TCP header fields.
Used for fingerprinting operating systems or analyzing network stack behaviors.

### zmap -p 123 -M udp --probe-args=file:ntp_monlist.pkt -o ntp_open.txt 0.0.0.0/0

```bash
zmap -p 123 -M udp --probe-args=file:ntp_monlist.pkt -o ntp_open.txt 0.0.0.0/0
```

Scans for open NTP servers using a probe file.
Identifies NTP servers that may be vulnerable to amplification attacks.

### zmap -p 80 --list-output-modules

```bash
zmap -p 80 --list-output-modules
```

Lists all available output modules.
Helps you discover what output formats (csv, json, redis) are installed.

### zmap -p 80 --list-probe-modules

```bash
zmap -p 80 --list-probe-modules
```

Lists all available probe modules.
Shows which scan types (TCP SYN, UDP, ICMP, etc.) are supported.


## Research Safe Internet Wide Scanning

### zmap -p 80 -b /etc/zmap/blacklist.conf -w my_scope.txt

```bash
zmap -p 80 -b /etc/zmap/blacklist.conf -w my_scope.txt
```

Combines a safety blacklist with a target whitelist.
Ensures strict adherence to scope for research or authorized scanning.

### zmap -p 80 -r 5000 --max-results=50000 0.0.0.0/0

```bash
zmap -p 80 -r 5000 --max-results=50000 0.0.0.0/0
```

Performs a large sampling scan.
Scans randomly until 50,000 results are found, then stops.

### zmap -p 80 --notes="Authorized Scan ID 101" 0.0.0.0/0

```bash
zmap -p 80 --notes="Authorized Scan ID 101" 0.0.0.0/0
```

Embeds a contact note in scan metadata.
Good practice for internet-wide scans to allow abuse reporting.


## Defensive and Blue Team Use Cases

### zmap -p 3389 -w internal_subnets.txt -o rdp_exposure.csv

```bash
zmap -p 3389 -w internal_subnets.txt -o rdp_exposure.csv
```

Rapidly checks internal subnets for exposed RDP.
Critical for securing internal networks against ransomware vectors.

### zmap -M icmp_echoscan -w critical_assets.txt -r 100

```bash
zmap -M icmp_echoscan -w critical_assets.txt -r 100
```

Monitors uptime of assets using ICMP.
Uses ZMap's speed for high-frequency availability checks.


## IPv6 Scanning (if supported by module)

### zmap -M ipv6_tcp_synscan -p 80 2001:db8::/32

```bash
zmap -M ipv6_tcp_synscan -p 80 2001:db8::/32
```

Initiates an IPv6 TCP SYN scan.
Targets IPv6 addresses (requires ZMap to be built with IPv6 support).


## High Speed Measurement Scenarios

### zmap -p 80 --output-module=redis --output-args="tcp://127.0.0.1:6379/zmap" 0.0.0.0/0

```bash
zmap -p 80 --output-module=redis --output-args="tcp://127.0.0.1:6379/zmap" 0.0.0.0/0
```

Sends results directly to Redis.
Enables high-throughput real-time processing pipelines.


## Sender and Receiver Configuration

### zmap --sender-threads=3 -p 80 0.0.0.0/0

```bash
zmap --sender-threads=3 -p 80 0.0.0.0/0
```

Uses 3 sender threads for packet injection.
Increases send rate on multi-core systems by parallelizing packet creation.

### zmap --cores=0,1,2 -p 80 0.0.0.0/0

```bash
zmap --cores=0,1,2 -p 80 0.0.0.0/0
```

Pins ZMap to specific CPU cores.
Optimizes cache usage and performance on high-speed scanning rigs.


## Output Modules and Output Fields

### zmap -p 80 --output-fields=* 0.0.0.0/0

```bash
zmap -p 80 --output-fields=* 0.0.0.0/0
```

Outputs every available field for the probe.
Provides the maximum amount of information possible for each response.


## Target Specification and CIDR Ranges

### zmap -p 80 10.0.0.0/8 192.168.0.0/16

```bash
zmap -p 80 10.0.0.0/8 192.168.0.0/16
```

Scans multiple disconnected CIDR ranges.
Allows targeting specific disparate networks in a single job.


## Advanced and Combined Real World Scans

### zmap -p 80 -G 00:11:22:33:44:55 --source-ip=192.168.1.50 0.0.0.0/0

```bash
zmap -p 80 -G 00:11:22:33:44:55 --source-ip=192.168.1.50 0.0.0.0/0
```

Combines gateway spoofing with source IP spoofing.
Complete control over packet headers for advanced network testing.


## Logging and Verbosity

### zmap --quiet -p 80 0.0.0.0/0

```bash
zmap --quiet -p 80 0.0.0.0/0
```

Runs in quiet mode (long flag).
Identical to -q, keeps the terminal output clean.


## Retry and Failure Handling

### zmap -p 80 --ignore-blacklist-errors 0.0.0.0/0

```bash
zmap -p 80 --ignore-blacklist-errors 0.0.0.0/0
```

Ignores errors in the blacklist file.
Risky, but allows the scan to proceed even if the blacklist is malformed.


## Output Modules and Output Fields

### zmap -p 80 --no-header -o results.csv 0.0.0.0/0

```bash
zmap -p 80 --no-header -o results.csv 0.0.0.0/0
```

Outputs CSV without a header row.
Useful for appending results to an existing file or piping to tools that expect raw data.


## High Speed Measurement Scenarios

### zmap -p 80 --monitor 0.0.0.0/0

```bash
zmap -p 80 --monitor 0.0.0.0/0
```

Enables monitor mode (dashboard style).
Visualizes scan rates and completion status in real-time.


## Probe Modules

### zmap -M udp --probe-args=hex:41424344 192.168.1.0/24

```bash
zmap -M udp --probe-args=hex:41424344 192.168.1.0/24
```

Sends UDP packets with a hex-defined payload.
Allows sending precise byte sequences to test protocol responses.


## Advanced and Combined Real World Scans

### zmap -p 80 -S 1.2.3.4 -B 100M --seed=5555 --shards=2 --shard=1 0.0.0.0/0

```bash
zmap -p 80 -S 1.2.3.4 -B 100M --seed=5555 --shards=2 --shard=1 0.0.0.0/0
```

Runs a complex, fully specified distributed scan.
Combines fixed seed, sharding, and spoofing for a rigorous measurement experiment.


## Research Safe Internet Wide Scanning

### zmap -p 80 --block-file=/etc/zmap/blacklist.conf 0.0.0.0/0

```bash
zmap -p 80 --block-file=/etc/zmap/blacklist.conf 0.0.0.0/0
```

Uses the alternate syntax for blocking networks.
Explicitly points to the blacklist configuration file.


## Configuration File Usage

### zmap --help

```bash
zmap --help
```

Displays the help screen.
Lists all command-line arguments and their usage.

### zmap --version

```bash
zmap --version
```

Prints the version information.
Useful for verifying the installed build and supported features.


## Output Modules and Output Fields

### zmap -p 80 -f ipid,ttl,classification 0.0.0.0/0

```bash
zmap -p 80 -f ipid,ttl,classification 0.0.0.0/0
```

Outputs IPID, TTL, and Classification.
Key metrics for understanding network topology and behavior.

## Related tools

- [Masscan](https://terminal.rokibulroni.com/tool/network/masscan)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
