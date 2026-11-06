# Suricata

> A high-performance, multi-threaded IDS/IPS and network security monitoring engine with EVE JSON logging.

- Category: Monitoring
- Commands: 65
- Page: https://terminal.rokibulroni.com/tool/monitoring/suricata
- Homepage: https://suricata.io
- Documentation: https://docs.suricata.io
- Tags: IDS, IPS, NSM

## Install

- apt: `sudo apt install suricata`
- brew: `brew install suricata`

## General Information

### suricata -V

```bash
suricata -V
```

Displays the currently installed Suricata version

### suricata --build-info

```bash
suricata --build-info
```

Prints detailed build information including enabled features and libraries

### suricata --list-app-layer-protos

```bash
suricata --list-app-layer-protos
```

Lists all supported application layer protocols available for detection

### suricata --list-keywords

```bash
suricata --list-keywords
```

Lists all supported rule keywords that can be used in signatures


## Configuration Testing

### suricata -T

```bash
suricata -T
```

Example:

```bash
suricata -T -c /etc/suricata/suricata.yaml
```

Tests the configuration file for errors without starting the engine

### suricata -T -v

```bash
suricata -T -v
```

Example:

```bash
suricata -T -c /etc/suricata/suricata.yaml -v
```

Tests the configuration file and provides verbose output regarding parsing

### suricata --dump-config

```bash
suricata --dump-config
```

Dumps the effective configuration to the console for verification


## Basic Packet Capture

### suricata -i <interface>

```bash
suricata -i <interface>
```

Example:

```bash
suricata -i eth0
```

Starts Suricata in IDS mode monitoring live traffic on a specific interface

### suricata --af-packet

```bash
suricata --af-packet
```

Example:

```bash
suricata --af-packet=eth0
```

Uses AF_PACKET mode for high-performance packet capture on Linux

### suricata --pcap

```bash
suricata --pcap
```

Example:

```bash
suricata --pcap=eth0
```

Uses standard libpcap mode for packet capture which is more portable but slower


## Offline Analysis

### suricata -r <file>

```bash
suricata -r <file>
```

Example:

```bash
suricata -r capture.pcap
```

Processes a single offline PCAP file for intrusion detection analysis

### suricata -r <directory>

```bash
suricata -r <directory>
```

Example:

```bash
suricata -r /home/analyst/pcaps/
```

Processes all PCAP files found within a specific directory sequentially

### suricata -r <file> -k none

```bash
suricata -r <file> -k none
```

Example:

```bash
suricata -r malicious.pcap -k none
```

Replays a PCAP while disabling checksum validation to force processing of offloaded packets


## Configuration Management

### suricata -c <config>

```bash
suricata -c <config>
```

Example:

```bash
suricata -c /etc/suricata/suricata.yaml -i eth0
```

Specifies a custom configuration file path instead of the default location


## Logging & Output

### suricata -l <directory>

```bash
suricata -l <directory>
```

Example:

```bash
suricata -l /var/log/suricata/case_101/ -r trace.pcap
```

Directs all log output including EVE JSON to a custom directory


## Rule Management

### suricata -s <file>

```bash
suricata -s <file>
```

Example:

```bash
suricata -c suricata.yaml -s /tmp/test_rules.rules -i eth0
```

Loads an additional rule file on top of those defined in the configuration

### suricata -S <file>

```bash
suricata -S <file>
```

Example:

```bash
suricata -c suricata.yaml -S /tmp/exclusive.rules -i eth0
```

Loads ONLY the specified rule file ignoring rules in the configuration


## Filtering & BPF

### suricata <filter>

```bash
suricata <filter>
```

Example:

```bash
suricata -i eth0 'tcp port 80 or tcp port 443'
```

Applies a BPF filter to limit the traffic Suricata inspects


## Performance Tuning

### suricata --runmode <mode>

```bash
suricata --runmode <mode>
```

Example:

```bash
suricata --runmode workers -i eth0
```

Sets the processing runmode to 'workers' for better multicore scaling

### suricata --cpu-affinity

```bash
suricata --cpu-affinity
```

Example:

```bash
suricata --cpu-affinity -i eth0
```

Enables CPU pinning to bind threads to specific cores for performance stability


## Daemon Mode

### suricata -D

```bash
suricata -D
```

Example:

```bash
suricata -D -c suricata.yaml -i eth0
```

Runs Suricata in the background as a daemon process

### suricata --pidfile <file>

```bash
suricata --pidfile <file>
```

Example:

```bash
suricata -D --pidfile /var/run/suricata.pid -c suricata.yaml -i eth0
```

Writes the process ID to a specific file when running in daemon mode


## Security & Permissions

### suricata -u <user>

```bash
suricata -u <user>
```

Example:

```bash
suricata -u suricata -g suricata -i eth0
```

Drops privileges to run as a specific user after initialization


## IPS Mode

### suricata -q <queue>

```bash
suricata -q <queue>
```

Example:

```bash
suricata -q 0
```

Starts Suricata in inline IPS mode using NFQUEUE id 0

### suricata -q <queue> --runmode autofp

```bash
suricata -q <queue> --runmode autofp
```

Example:

```bash
suricata -q 0 --runmode autofp
```

Runs IPS mode with autofp runmode which is often default for NFQUEUE


## Debug & Analysis

### suricata --engine-analysis

```bash
suricata --engine-analysis
```

Example:

```bash
suricata --engine-analysis -c suricata.yaml
```

Prints a report on rule grouping and engine configuration for tuning


## Socket Control

### suricata --unix-socket

```bash
suricata --unix-socket
```

Example:

```bash
suricata --unix-socket=/var/run/suricata/suricata-command.socket -D -i eth0
```

Enables the Unix control socket for runtime interaction


## Socket Client

### suricatasc

```bash
suricatasc
```

Connects to the default Suricata control socket for interactive commands

### suricatasc -c version

```bash
suricatasc -c version
```

Queries the running Suricata instance for its version via socket

### suricatasc -c uptime

```bash
suricatasc -c uptime
```

Queries the running instance for its current uptime

### suricatasc -c reload-rules

```bash
suricatasc -c reload-rules
```

Triggers a live reload of the ruleset without restarting the daemon

### suricatasc -c shutdown

```bash
suricatasc -c shutdown
```

Sends a command to gracefully shut down the Suricata instance

### suricatasc -c capture-mode

```bash
suricatasc -c capture-mode
```

Displays the current capture mode such as AF_PACKET or PCAP

### suricatasc -c iface-stat

```bash
suricatasc -c iface-stat
```

Example:

```bash
suricatasc -c iface-stat eth0
```

Retrieves statistics for a specific interface via the control socket

### suricatasc -c dump-counters

```bash
suricatasc -c dump-counters
```

Dumps all internal performance counters for monitoring health


## SOC Workflow

### suricata -r <pcap> -l <dir>

```bash
suricata -r <pcap> -l <dir>
```

Example:

```bash
suricata -r attack_simulation.pcap -l logs/analysis_01/
```

Standard SOC workflow to analyze a suspicious PCAP and isolate logs

### grep

```bash
grep
```

Example:

```bash
grep '"event_type":"alert"' logs/eve.json
```

Filters the EVE JSON output to show only alert events

### jq

```bash
jq
```

Example:

```bash
cat eve.json | jq 'select(.event_type=="alert") | .alert.signature'
```

Uses jq to parse EVE JSON and extract specific signature names from alerts

### suricata --set <key>=<value>

```bash
suricata --set <key>=<value>
```

Example:

```bash
suricata --set outputs.1.fast.enabled=yes -i eth0
```

Overrides a configuration value from the command line for ad-hoc testing


## Blue Team Validation

### suricata -S <rule> -r <pcap>

```bash
suricata -S <rule> -r <pcap>
```

Example:

```bash
suricata -S specific_cve.rules -r exploit_traffic.pcap -l ./test_out
```

Validates a specific new signature against known exploit traffic

### suricata --simulate-ips

```bash
suricata --simulate-ips
```

Example:

```bash
suricata -r traffic.pcap --simulate-ips
```

Simulates IPS blocking behavior on a PCAP file to see what would drop


## Purple Team

### suricata -k none

```bash
suricata -k none
```

Example:

```bash
suricata -r raw_scapy_packets.pcap -k none
```

Analyzes generated traffic with invalid checksums typical of attack tools

### suricata -v

```bash
suricata -v
```

Example:

```bash
suricata -r test.pcap -v
```

Runs analysis with verbose logging to debug why a signature might not fire


## Advanced Networking

### suricata --netmap

```bash
suricata --netmap
```

Example:

```bash
suricata --netmap=em0
```

Uses NETMAP mode for high-speed packet capture on supported systems

### suricata --pfring

```bash
suricata --pfring
```

Example:

```bash
suricata --pfring=eth0
```

Uses PF_RING for high-speed capture if the library is linked


## Automated Testing

### suricata -U

```bash
suricata -U
```

Runs the built-in unit tests to verify internal engine integrity

### suricata -u <test_regex>

```bash
suricata -u <test_regex>
```

Example:

```bash
suricata -u http
```

Runs only unit tests matching the specified regex pattern


## Troubleshooting

### suricata --init-errors-fatal

```bash
suricata --init-errors-fatal
```

Example:

```bash
suricata -c suricata.yaml -i eth0 --init-errors-fatal
```

Forces Suricata to exit immediately if any rule fails to load at startup

### suricata --reject-dev

```bash
suricata --reject-dev
```

Example:

```bash
suricata --reject-dev=eth1 -i eth0
```

Specifies the interface used to send TCP resets or ICMP unreachables


## Advanced Configuration

### suricata --dag

```bash
suricata --dag
```

Example:

```bash
suricata --dag=0:0
```

Enables hardware capture support for Endace DAG cards

### suricata --napatech

```bash
suricata --napatech
```

Enables support for Napatech capture streams


## Log Management

### suricatasc -c reopen-log-files

```bash
suricatasc -c reopen-log-files
```

Instructs Suricata to close and reopen log files for log rotation


## Incident Response

### suricata -r <pcap> --set outputs.1.eve-log.types.0=flow

```bash
suricata -r <pcap> --set outputs.1.eve-log.types.0=flow
```

Example:

```bash
suricata -r unknown.pcap --set outputs.1.eve-log.types.0=flow
```

Rapidly generates only flow records from a PCAP to trace connections

### suricata -r <pcap> --set outputs.1.eve-log.types.0=fileinfo

```bash
suricata -r <pcap> --set outputs.1.eve-log.types.0=fileinfo
```

Example:

```bash
suricata -r download.pcap --set outputs.1.eve-log.types.0=fileinfo
```

Analyzes a PCAP specifically to extract file metadata and hashes


## Signature Dev

### suricata --conf-test

```bash
suricata --conf-test
```

Example:

```bash
suricata -c suricata.yaml --conf-test
```

Strictly validates the configuration and rules ensuring no warnings exist


## Performance Profiling

### suricatasc -c memcap-list

```bash
suricatasc -c memcap-list
```

Lists the memory cap settings for various internal buffers

### suricatasc -c memcap-set

```bash
suricatasc -c memcap-set
```

Example:

```bash
suricatasc -c memcap-set flow 512mb
```

Dynamically adjusts the memory cap for the flow engine at runtime


## Detection Tuning

### suricatasc -c dataset-add

```bash
suricatasc -c dataset-add
```

Example:

```bash
suricatasc -c dataset-add my-list "192.168.1.1"
```

Adds data to a running dataset for dynamic sticky buffer matching

### suricatasc -c dataset-remove

```bash
suricatasc -c dataset-remove
```

Example:

```bash
suricatasc -c dataset-remove my-list "192.168.1.1"
```

Removes data from a dynamic dataset during runtime


## Cleanup

### rm

```bash
rm
```

Example:

```bash
rm -rf /var/run/suricata/
```

Manually cleans up socket directories if a clean shutdown fails


## Advanced Capture

### suricata --dpdk

```bash
suricata --dpdk
```

Enables DPDK support for ultra high-speed packet processing


## Rule Development

### suricata -T -S <file>

```bash
suricata -T -S <file>
```

Example:

```bash
suricata -T -S experimental.rules
```

Tests a specific rule file for syntax errors without loading the main config


## Metadata Extraction

### suricata -r <pcap> --set app-layer.protocols.tls.enabled=yes

```bash
suricata -r <pcap> --set app-layer.protocols.tls.enabled=yes
```

Example:

```bash
suricata -r encrypted.pcap --set app-layer.protocols.tls.enabled=yes
```

Forces TLS metadata extraction even if disabled in default config


## Live Debugging

### suricatasc -c version-json

```bash
suricatasc -c version-json
```

Returns the version and build info in JSON format for automation


## Process Control

### kill -USR2

```bash
kill -USR2
```

Example:

```bash
kill -USR2 $(pidof suricata)
```

Sends a USR2 signal to the process to trigger a rule reload manually

## Related tools

- [Snort](https://terminal.rokibulroni.com/tool/monitoring/snort)
- [Zeek](https://terminal.rokibulroni.com/tool/monitoring/zeek)
- [tcpdump](https://terminal.rokibulroni.com/tool/traffic/TCPDump)
