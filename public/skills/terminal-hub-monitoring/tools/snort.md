# Snort

> A network intrusion detection and prevention system that inspects traffic in real time against a rule language.

- Category: Monitoring
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/monitoring/snort
- Homepage: https://www.snort.org
- Documentation: https://docs.snort.org
- Tags: IDS, IPS, network monitoring

## Install

- apt: `sudo apt install snort`
- brew: `brew install snort`

## Basic Snort Syntax

### snort -V

```bash
snort -V
```

Displays the installed Snort version and build information to verify successful installation.

### snort -?

```bash
snort -?
```

Lists all available command-line switches and usage instructions for the current version.


## Sniffer Mode Operation

### snort -v

```bash
snort -v
```

Runs Snort in verbose mode to print TCP/IP packet headers to the console without logging.

### snort -vd

```bash
snort -vd
```

Displays packet headers and application layer data (payloads) in verbose mode.

### snort -vde

```bash
snort -vde
```

Displays packet headers, payloads, and Data Link Layer (Layer 2) headers for deep inspection.

### snort -v -X

```bash
snort -v -X
```

Dumps the raw packet data starting from the link layer in hex and ASCII format.


## Interface Selection

### snort -i

```bash
snort -i
```

Example:

```bash
snort -i eth0 -v
```

Specifies the network interface to listen on for traffic capture and inspection.


## Packet Logger Mode

### snort -l

```bash
snort -l
```

Example:

```bash
snort -v -l ./log
```

Logs captured packets to the specified directory, creating hierarchical folders based on IP addresses.

### snort -b

```bash
snort -b
```

Example:

```bash
snort -l ./log -b
```

Logs packets in binary (tcpdump) format, which is much faster than ASCII logging.

### snort -K ascii

```bash
snort -K ascii
```

Example:

```bash
snort -l ./log -K ascii -v
```

Forces Snort to log packets in ASCII format regardless of other default settings.

### snort -K none

```bash
snort -K none
```

Example:

```bash
snort -l ./log -K none
```

Disables packet logging entirely, useful when only alerting is required to save disk space.


## Configuration File Usage

### snort -c

```bash
snort -c
```

Example:

```bash
snort -c /etc/snort/snort.conf
```

Loads the main configuration file containing rules, preprocessors, and variable definitions.

### snort -T

```bash
snort -T
```

Example:

```bash
snort -T -c /etc/snort/snort.conf
```

Validates the configuration file and rules for errors without actually starting the engine.


## Network Intrusion Detection Mode

### snort -A console

```bash
snort -A console
```

Example:

```bash
snort -c /etc/snort/snort.conf -A console
```

Prints alerts directly to the console screen for real-time monitoring of rule matches.

### snort -A fast

```bash
snort -A fast
```

Example:

```bash
snort -c /etc/snort/snort.conf -A fast
```

Logs alerts in a single-line format including timestamp, message, IPs, and ports for rapid parsing.

### snort -A full

```bash
snort -A full
```

Example:

```bash
snort -c /etc/snort/snort.conf -A full
```

Logs alerts with full packet header information, providing maximum context for each detection.

### snort -A unsock

```bash
snort -A unsock
```

Example:

```bash
snort -c /etc/snort/snort.conf -A unsock
```

Sends alerts to a UNIX socket for processing by external programs.

### snort -A none

```bash
snort -A none
```

Example:

```bash
snort -c /etc/snort/snort.conf -A none
```

Disables internal alerting, typically used when logging is handled strictly by Unified2 output.

### snort -q

```bash
snort -q
```

Example:

```bash
snort -q -A console -c /etc/snort/snort.conf
```

Runs Snort in quiet mode, suppressing banner and initialization messages to focus on alerts.


## Alert Generation

### snort -A cmg

```bash
snort -A cmg
```

Example:

```bash
snort -A cmg -c /etc/snort/snort.conf
```

Generates 'cozy' alerts that display the packet payload in hex and text alongside the alert message.


## Packet Capture Handling

### snort -r

```bash
snort -r
```

Example:

```bash
snort -r capture.pcap -c /etc/snort/snort.conf
```

Reads and processes a single PCAP file through the NIDS engine instead of listening on an interface.

### snort --pcap-dir

```bash
snort --pcap-dir
```

Example:

```bash
snort --pcap-dir=/var/pcaps/ -c /etc/snort/snort.conf
```

Recursively processes all PCAP files found within the specified directory.

### snort --pcap-filter

```bash
snort --pcap-filter
```

Example:

```bash
snort --pcap-dir=/pcaps --pcap-filter="*.pcap" -c snort.conf
```

Filters the files in a PCAP directory to only process those matching a specific shell pattern.

### snort --pcap-show

```bash
snort --pcap-show
```

Example:

```bash
snort -r capture.pcap -A console --pcap-show
```

Displays the name of the PCAP file currently being processed during a bulk read operation.


## Blue Team Detection Validation

### snort -r -n

```bash
snort -r -n
```

Example:

```bash
snort -r attack.pcap -c snort.conf -n 10
```

Processes only the first N packets of a capture file, useful for quick rule validation on large files.


## Performance Tuning

### snort -N

```bash
snort -N
```

Example:

```bash
snort -N -c /etc/snort/snort.conf
```

Disables packet logging regardless of configuration, retaining only alerts to improve I/O performance.

### snort -D

```bash
snort -D
```

Example:

```bash
snort -D -c /etc/snort/snort.conf
```

Runs Snort as a background daemon process, detaching it from the current terminal session.

### snort -k none

```bash
snort -k none
```

Example:

```bash
snort -k none -c /etc/snort/snort.conf
```

Disables checksum verification, useful if packets are captured on interfaces performing checksum offloading.


## Rule Management

### snort --dump-dynamic-rules

```bash
snort --dump-dynamic-rules
```

Example:

```bash
snort -c snort.conf --dump-dynamic-rules=/tmp/rules
```

Exports loaded dynamic rules (shared object rules) to text files for inspection and debugging.


## Custom Rule Testing

### snort -S

```bash
snort -S
```

Example:

```bash
snort -c snort.conf -S HOME_NET=192.168.1.0/24
```

Overrides variable definitions from the command line without modifying the configuration file.


## SOC Monitoring Workflow

### BPF Filtering

```bash
BPF Filtering
```

Example:

```bash
snort -c snort.conf -A console 'not port 22'
```

Applies a Berkeley Packet Filter (BPF) at the end of the command to ignore specific traffic (e.g., SSH).

### snort -u -g

```bash
snort -u -g
```

Example:

```bash
snort -D -c snort.conf -u snort_user -g snort_group
```

Runs Snort as a specific user and group to minimize security risks associated with running as root.


## Output Formats

### snort -L

```bash
snort -L
```

Example:

```bash
snort -c snort.conf -l ./log -b -L binary_log
```

Sets the base filename for binary log files when running in packet logger mode.

### snort -U

```bash
snort -U
```

Example:

```bash
snort -c snort.conf -A fast -U
```

Forces timestamps in logs to use UTC instead of the local system timezone.


## Advanced Usage

### snort --snaplen

```bash
snort --snaplen
```

Example:

```bash
snort -i eth0 --snaplen 1518 -v
```

Sets the snap length (packet capture size) manually, ensuring full packet capture for jumbo frames.

### snort -M

```bash
snort -M
```

Example:

```bash
snort -c snort.conf -A console -M
```

Logs console messages to syslog in addition to printing them to the screen.

### snort --conf-error-out

```bash
snort --conf-error-out
```

Example:

```bash
snort -c snort.conf --conf-error-out
```

Forces Snort to stop processing and exit immediately upon encountering the first configuration error.


## Preprocessor Configuration

### snort --disable-inline-init

```bash
snort --disable-inline-init
```

Example:

```bash
snort -c snort.conf --disable-inline-init
```

Allows Snort to run in inline mode without requiring hardware bridging initialization.


## Inline and IPS Mode

### snort -Q

```bash
snort -Q
```

Example:

```bash
snort -c snort.conf -Q --daq afpacket -i eth0:eth1
```

Enables Inline Mode (IPS), allowing Snort to drop packets defined by 'drop' rules.

### snort --daq

```bash
snort --daq
```

Example:

```bash
snort --daq pcap -c snort.conf
```

Specifies the Data Acquisition (DAQ) module type (e.g., pcap, afpacket, nfq) for packet I/O.

### snort --daq-dir

```bash
snort --daq-dir
```

Example:

```bash
snort --daq-dir /usr/local/lib/daq --daq afpacket
```

Tells Snort where to look for DAQ modules if they are not in the standard system library path.

### snort --daq-list

```bash
snort --daq-list
```

Lists the available Data Acquisition (DAQ) modules installed on the system.


## Purple Team Simulation

### snort -O

```bash
snort -O
```

Example:

```bash
snort -c snort.conf -O
```

Obfuscates IP addresses in printed logs to sanitize data during sensitive sharing or testing.


## Blue Team Defensive Validation

### snort --warn-all

```bash
snort --warn-all
```

Example:

```bash
snort -c snort.conf --warn-all
```

Enables all warning messages during configuration loading to identify potential rule syntax issues.


## Performance Tuning

### snort --search-method

```bash
snort --search-method
```

Example:

```bash
snort -c snort.conf --search-method ac-split
```

Forces the use of a specific pattern matching algorithm (e.g., Aho-Corasick) for performance testing.


## Incident Response Investigation

### snort --logid

```bash
snort --logid
```

Example:

```bash
snort -c snort.conf -l ./log --logid 101
```

Appends a specific Log ID to output filenames to distinguish between parallel Snort instances.

### snort -y

```bash
snort -y
```

Example:

```bash
snort -c snort.conf -A fast -y
```

Includes the year in the timestamp of alert logs, critical for long-term forensic timelines.


## Automation and Scripting

### snort --pid-path

```bash
snort --pid-path
```

Example:

```bash
snort -D -c snort.conf --pid-path /var/run/snort
```

Specifies the directory where the PID file should be written, essential for service management scripts.

### snort --nolock-pidfile

```bash
snort --nolock-pidfile
```

Example:

```bash
snort -c snort.conf --pid-path /var/run --nolock-pidfile
```

Creates the PID file without locking it, useful in specific containerized or scripted environments.


## Debugging Rules

### snort --rule-to-hex

```bash
snort --rule-to-hex
```

Outputs the binary rule database in a hex format, typically used for low-level rule engine debugging.


## Advanced Combined Workflow

### Validate Local Rules

```bash
Validate Local Rules
```

Example:

```bash
snort -T -c /etc/snort/snort.conf --include-path /home/user/custom_rules
```

Validates the main config while dynamically adding a custom rule path not defined in the main file.

### Offline PCAP Forensics

```bash
Offline PCAP Forensics
```

Example:

```bash
snort -r malware.pcap -c snort.conf -k none -A full
```

Analyzes a malware PCAP ignoring checksums and generating full-detail alerts for forensic review.

### High Performance Sniffing

```bash
High Performance Sniffing
```

Example:

```bash
snort -i eth0 -b -l /tmp/snort_raw -k none
```

Captures packets to a binary log file with no checksums or alerting for maximum write speed.

### Rule Profiling

```bash
Rule Profiling
```

Example:

```bash
snort -c snort.conf --pcap-dir=./test_pcaps --profile-rules
```

Runs against a directory of PCAPs and prints performance statistics for the top CPU-consuming rules.

### Preprocessor Profiling

```bash
Preprocessor Profiling
```

Example:

```bash
snort -c snort.conf --pcap-dir=./test_pcaps --profile-preprocs
```

Profiles the performance of enabled preprocessors to identify bottlenecks in inspection modules.

### Packet Data Printing

```bash
Packet Data Printing
```

Example:

```bash
snort -d -e -v -C
```

Prints packet data in a character-only format, omitting hex dumps, for easier reading of text payloads.


## Interface Configuration

### snort --address

```bash
snort --address
```

Example:

```bash
snort -i eth0 --address 192.168.1.50
```

Specifies the IP address of the listening interface if Snort cannot auto-detect it correctly.


## Cleanup and Termination

### Signal Handling

```bash
Signal Handling
```

Example:

```bash
kill -SIGHUP $(pidof snort)
```

Sends a SIGHUP signal to the Snort process to force it to reload the configuration file and restart.

### Signal Handling

```bash
Signal Handling
```

Example:

```bash
kill -SIGUSR1 $(pidof snort)
```

Forces Snort to dump current packet capture statistics to the console/syslog without stopping the process.


## Purple Team Attack Simulation

### Verbose Replay Inspection

```bash
Verbose Replay Inspection
```

Example:

```bash
snort -A cmg -q -c snort.conf -r exploit_traffic.pcap
```

Replays exploit traffic quietly while showing 'cozy' alerts with payload data to confirm signature match location.


## Sniffer Mode Operation

### snort -e

```bash
snort -e
```

Displays the Layer 2 (Data Link) headers, including MAC addresses, for captured packets.


## Logging Behavior

### snort -n

```bash
snort -n
```

Example:

```bash
snort -i eth0 -n 100
```

Processes only the specified number of packets and then exits automatically.


## Output Plugins

### CSV Output

```bash
CSV Output
```

Example:

```bash
snort -c snort.conf -A fast -y --csv-separator ,
```

Customizes the output format of logs (if CSV output plugin is enabled) by defining the separator character.


## Advanced Combined Workflow

### Specific Interface Type

```bash
Specific Interface Type
```

Example:

```bash
snort -i eth0 --daq-var buffer_size_mb=1024
```

Passes specific variables to the DAQ module, such as increasing the buffer size to prevent packet loss.


## Rule Management

### snort --pause

```bash
snort --pause
```

Example:

```bash
snort -c snort.conf --pause
```

Starts Snort but pauses processing immediately, waiting for a resume signal, used in synchronized testing.


## Logging Behavior

### snort -t

```bash
snort -t
```

Example:

```bash
snort -D -t /var/chroot/snort -c snort.conf
```

Chroots the Snort process to a specific directory after initialization for enhanced security isolation.


## Advanced Usage

### snort --create-pidfile

```bash
snort --create-pidfile
```

Example:

```bash
snort -c snort.conf --create-pidfile
```

Forces creation of a PID file even if Snort is not running in daemon mode.


## Debugging and Development

### snort --version

```bash
snort --version
```

Prints the full version information including library versions and compiler options.


## Packet Capture Handling

### snort --pcap-reset

```bash
snort --pcap-reset
```

Example:

```bash
snort --pcap-dir ./pcaps --pcap-reset -c snort.conf
```

Resets the internal Snort state between processing each PCAP file in a directory to ensure clean tests.


## Performance Tuning

### snort --max-packet-threads

```bash
snort --max-packet-threads
```

Example:

```bash
snort -c snort.conf --max-packet-threads 4
```

Limits the number of packet processing threads (Snort 3 specific or experimental threading builds).


## Advanced Combined Workflow

### Alert to Syslog Only

```bash
Alert to Syslog Only
```

Example:

```bash
snort -c snort.conf -s -l /dev/null
```

Sends alerts to syslog facilities and discards local log files by pointing the log directory to null.


## SOC Monitoring Workflow

### Show Application Data

```bash
Show Application Data
```

Example:

```bash
snort -d
```

Dumps the application layer (payload) data for captured packets, useful for inspecting HTTP or DNS bodies.


## Interface Selection

### snort --help

```bash
snort --help
```

Displays a summary of command-line options (synonym for -?).


## Blue Team Defensive Validation

### Capture and Analyze

```bash
Capture and Analyze
```

Example:

```bash
snort -i eth0 -b -l ./temp && snort -r ./temp/snort.log.* -c snort.conf
```

Workflow: Captures traffic to binary first, then analyzes it offline with full rules to minimize packet drops.


## Clean Termination

### Quit

```bash
Quit
```

Example:

```bash
kill -SIGTERM $(pidof snort)
```

Gracefully shuts down the Snort process, ensuring all logs are flushed and closed properly.

## Related tools

- [Suricata](https://terminal.rokibulroni.com/tool/monitoring/suricata)
- [Zeek](https://terminal.rokibulroni.com/tool/monitoring/zeek)
- [TShark](https://terminal.rokibulroni.com/tool/traffic/tshark)
