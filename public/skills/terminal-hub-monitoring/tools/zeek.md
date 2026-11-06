# Zeek

> A network security monitor that turns traffic into rich, structured logs of connections, DNS, HTTP, TLS and files.

- Category: Monitoring
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/monitoring/zeek
- Homepage: https://zeek.org
- Documentation: https://docs.zeek.org
- Tags: NSM, network logs, threat hunting

## Install

- brew: `brew install zeek`
- other: `See https://docs.zeek.org/en/master/install.html for distribution packages`

## Basic Syntax & Help

### zeek -h

```bash
zeek -h
```

Displays the command line help summary and available options.

### zeek -v

```bash
zeek -v
```

Prints the current Zeek version number to verify installation.


## Interface Selection

### zeek -i <interface>

```bash
zeek -i <interface>
```

Example:

```bash
zeek -i eth0
```

Starts Zeek in live capture mode listening on the specified network interface.


## Offline Analysis

### zeek -r <pcap_file>

```bash
zeek -r <pcap_file>
```

Example:

```bash
zeek -r traffic.pcap
```

Processes a PCAP file offline to generate logs without live capture.

### zeek -C -r <pcap_file>

```bash
zeek -C -r <pcap_file>
```

Example:

```bash
zeek -C -r trace.pcap
```

Analyzes a PCAP file while ignoring invalid IP checksums to prevent dropped packets.


## Configuration

### zeek -N

```bash
zeek -N
```

Lists all loaded scripts, plugins, and protocol analyzers.


## Policy Management

### zeek -i <interface> local

```bash
zeek -i <interface> local
```

Example:

```bash
zeek -i eth0 local
```

Runs Zeek on an interface loading the 'local' policy script set for standard monitoring.


## Filtering

### zeek -f <bpf_filter> -i <interface>

```bash
zeek -f <bpf_filter> -i <interface>
```

Example:

```bash
zeek -f "tcp port 80" -i eth0
```

Applies a BPF packet filter to limit analysis to specific traffic only.


## Logging Formats

### zeek -r <pcap> LogAscii::use_json=T

```bash
zeek -r <pcap> LogAscii::use_json=T
```

Example:

```bash
zeek -r test.pcap LogAscii::use_json=T
```

Forces all log files to be generated in JSON format instead of TSV.


## File Analysis

### zeek -r <pcap> frameworks/files/extract-all-files

```bash
zeek -r <pcap> frameworks/files/extract-all-files
```

Example:

```bash
zeek -r malware.pcap frameworks/files/extract-all-files
```

Automatically extracts all files seen in the traffic to the disk.

### zeek -r <pcap> frameworks/files/hash-all-files

```bash
zeek -r <pcap> frameworks/files/hash-all-files
```

Example:

```bash
zeek -r transfer.pcap frameworks/files/hash-all-files
```

Calculates MD5 and SHA1 hashes for all transferred files and adds them to files.log.


## Signature Matching

### zeek -s <signature_file> -r <pcap>

```bash
zeek -s <signature_file> -r <pcap>
```

Example:

```bash
zeek -s malware.sig -r traffic.pcap
```

Loads a custom signature file to detect specific payload patterns.


## Script Debugging

### zeek -B <level> -r <pcap>

```bash
zeek -B <level> -r <pcap>
```

Example:

```bash
zeek -B scripts -r loop.pcap
```

Enables verbose debugging output for a specific subsystem like scripts.


## Performance Tuning

### zeek -Q -r <pcap>

```bash
zeek -Q -r <pcap>
```

Example:

```bash
zeek -Q -r massive.pcap
```

Runs in quiet mode and disables the watchdog timer for processing large files.


## Event Handling

### zeek -r <pcap> misc/dump-events

```bash
zeek -r <pcap> misc/dump-events
```

Example:

```bash
zeek -r sample.pcap misc/dump-events
```

Prints every event raised during processing to stdout for script development.


## Protocol Analysis

### zeek -r <pcap> protocols/ssl/validate-certs

```bash
zeek -r <pcap> protocols/ssl/validate-certs
```

Example:

```bash
zeek -r https.pcap protocols/ssl/validate-certs
```

Performs strict validation of SSL/TLS certificates and logs errors.

### zeek -r <pcap> protocols/ssh/detect-bruteforce

```bash
zeek -r <pcap> protocols/ssh/detect-bruteforce
```

Example:

```bash
zeek -r ssh_attack.pcap protocols/ssh/detect-bruteforce
```

Enables logic to detect and log SSH brute force login attempts.


## Incident Response

### zeek -r <pcap> misc/scan

```bash
zeek -r <pcap> misc/scan
```

Example:

```bash
zeek -r portscan.pcap misc/scan
```

Detects various types of port scans and address scans.

### zeek -r <pcap> misc/detect-traceroute

```bash
zeek -r <pcap> misc/detect-traceroute
```

Example:

```bash
zeek -r trace.pcap misc/detect-traceroute
```

Identifies traceroute traffic and logs the detecting hosts.


## Protocol Analysis

### zeek -r <pcap> protocols/smb

```bash
zeek -r <pcap> protocols/smb
```

Example:

```bash
zeek -r smb_traffic.pcap protocols/smb
```

Loads detailed SMB analyzers for parsing Windows file sharing traffic.


## Monitoring Statistics

### zeek -r <pcap> misc/capture-loss

```bash
zeek -r <pcap> misc/capture-loss
```

Example:

```bash
zeek -r live_capture.pcap misc/capture-loss
```

Estimates and logs packet loss percentage during the capture.


## Script Management

### zeek -r <pcap> misc/loaded-scripts

```bash
zeek -r <pcap> misc/loaded-scripts
```

Example:

```bash
zeek -r test.pcap misc/loaded-scripts
```

Logs the names of all scripts that were loaded during the session.


## Log Analysis Tool

### zeek-cut <column_names>

```bash
zeek-cut <column_names>
```

Example:

```bash
cat conn.log | zeek-cut id.orig_h id.resp_h
```

Extracts specific columns from Zeek TSV logs for easy reading.

### zeek-cut -d <timestamp_column>

```bash
zeek-cut -d <timestamp_column>
```

Example:

```bash
cat conn.log | zeek-cut -d ts
```

Converts epoch timestamps in logs to human-readable date formats.


## Package Management

### zkg list

```bash
zkg list
```

Lists all currently installed Zeek packages.

### zkg install <package_source>

```bash
zkg install <package_source>
```

Example:

```bash
zkg install zeek/salesforce/ja3
```

Downloads and installs a Zeek package from a git repository.

### zkg load <package_name>

```bash
zkg load <package_name>
```

Example:

```bash
zkg load zeek/salesforce/ja3
```

Configures a package to be loaded automatically by Zeek.


## Cluster Control

### zeekctl deploy

```bash
zeekctl deploy
```

Refreshes policy, installs scripts, and restarts the Zeek cluster.

### zeekctl status

```bash
zeekctl status
```

Shows the operational status of all Zeek manager, logger, and worker nodes.

### zeekctl stop

```bash
zeekctl stop
```

Gracefully stops all running Zeek processes in the cluster.

### zeekctl diag

```bash
zeekctl diag
```

Collects debugging information and crash dumps from nodes.


## Custom Scripting

### zeek -r <pcap> -e <event_handler>

```bash
zeek -r <pcap> -e <event_handler>
```

Example:

```bash
zeek -r test.pcap -e 'event zeek_init() { print "Starting"; }'
```

Executes a one-line script handler directly from the command line.


## Log Customization

### zeek -r <pcap> Log::default_logdir=<dir>

```bash
zeek -r <pcap> Log::default_logdir=<dir>
```

Example:

```bash
zeek -r test.pcap Log::default_logdir=logs/
```

Changes the output directory for all generated log files.

### zeek -r <pcap> LogAscii::log_extension=<ext>

```bash
zeek -r <pcap> LogAscii::log_extension=<ext>
```

Example:

```bash
zeek -r test.pcap LogAscii::log_extension=.txt
```

Changes the default file extension for generated log files.

### zeek -r <pcap> LogAscii::separator=<char>

```bash
zeek -r <pcap> LogAscii::separator=<char>
```

Example:

```bash
zeek -r test.pcap LogAscii::separator=","
```

Changes the field separator in TSV logs (e.g., to comma).


## Performance Tuning

### zeek -r <pcap> PacketFilter::default_capture_filter=<bpf>

```bash
zeek -r <pcap> PacketFilter::default_capture_filter=<bpf>
```

Example:

```bash
zeek -r test.pcap PacketFilter::default_capture_filter="net 10.0.0.0/8"
```

Sets the default BPF filter via script variable.


## Advanced Protocol

### zeek -r <pcap> protocols/conn/known-services

```bash
zeek -r <pcap> protocols/conn/known-services
```

Example:

```bash
zeek -r test.pcap protocols/conn/known-services
```

Detects and logs services running on non-standard ports.

### zeek -r <pcap> protocols/conn/known-hosts

```bash
zeek -r <pcap> protocols/conn/known-hosts
```

Example:

```bash
zeek -r test.pcap protocols/conn/known-hosts
```

Tracks and logs all unique IP addresses observed on the network.


## SOC Workflow

### zeek -r <pcap> frameworks/software/vulnerable

```bash
zeek -r <pcap> frameworks/software/vulnerable
```

Example:

```bash
zeek -r test.pcap frameworks/software/vulnerable
```

Detects outdated software versions if a version database is provided.

### zeek -r <pcap> frameworks/intel/seen

```bash
zeek -r <pcap> frameworks/intel/seen
```

Example:

```bash
zeek -r test.pcap frameworks/intel/seen
```

Enables the Intelligence framework to track seen indicators.

### zeek -r <pcap> frameworks/intel/do_notice

```bash
zeek -r <pcap> frameworks/intel/do_notice
```

Example:

```bash
zeek -r test.pcap frameworks/intel/do_notice
```

Configures the Intel framework to generate notices for matches.


## Blue Team Validation

### zeek -r <pcap> protocols/dhcp/software

```bash
zeek -r <pcap> protocols/dhcp/software
```

Example:

```bash
zeek -r dhcp.pcap protocols/dhcp/software
```

Extracts software and OS information from DHCP requests.

### zeek -r <pcap> protocols/dns/detect-external-names

```bash
zeek -r <pcap> protocols/dns/detect-external-names
```

Example:

```bash
zeek -r dns.pcap protocols/dns/detect-external-names
```

Detects when local clients query external DNS names.


## Purple Team Sim

### zeek -r <pcap> protocols/ftp/detect

```bash
zeek -r <pcap> protocols/ftp/detect
```

Example:

```bash
zeek -r ftp.pcap protocols/ftp/detect
```

Detects FTP server activity and potentially brute force attempts.

### zeek -r <pcap> protocols/http/detect-sqli

```bash
zeek -r <pcap> protocols/http/detect-sqli
```

Example:

```bash
zeek -r http.pcap protocols/http/detect-sqli
```

Analyzes HTTP URI and body for SQL injection patterns.


## Forensics

### zeek -r <pcap> protocols/rdp

```bash
zeek -r <pcap> protocols/rdp
```

Example:

```bash
zeek -r rdp.pcap protocols/rdp
```

Parses RDP connection details for forensic investigation.

### zeek -r <pcap> protocols/smtp/software

```bash
zeek -r <pcap> protocols/smtp/software
```

Example:

```bash
zeek -r email.pcap protocols/smtp/software
```

Identifies mail server and client software from SMTP banners.


## Output Rotation

### zeek -r <pcap> Log::default_rotation_interval=1hr

```bash
zeek -r <pcap> Log::default_rotation_interval=1hr
```

Example:

```bash
zeek -r long.pcap Log::default_rotation_interval=1hr
```

Sets the interval for rotating log files during long runs.


## Automation

### zeek -r <pcap> Input::add_event

```bash
zeek -r <pcap> Input::add_event
```

Example:

```bash
zeek -r test.pcap Input::add_event="..."
```

Injects input events dynamically for testing logic scripts.

### zeek -D <pcap>

```bash
zeek -D <pcap>
```

Example:

```bash
zeek -D test.pcap
```

Runs Zeek in deterministic mode for debugging consistency.


## Advanced Analysis

### zeek -r <pcap> frameworks/packet-filter/utils

```bash
zeek -r <pcap> frameworks/packet-filter/utils
```

Example:

```bash
zeek -r test.pcap frameworks/packet-filter/utils
```

Loads utilities for compiling and installing BPF filters dynamically.

### zeek -r <pcap> base/protocols/conn/polling

```bash
zeek -r <pcap> base/protocols/conn/polling
```

Example:

```bash
zeek -r test.pcap base/protocols/conn/polling
```

Enables polling of the connection analyzer for long-running connections.


## Performance Tuning

### zeek -r <pcap> --report-coverage

```bash
zeek -r <pcap> --report-coverage
```

Example:

```bash
zeek -r test.pcap --report-coverage
```

Reports script coverage statistics after execution.


## Advanced Logging

### zeek -r <pcap> Log::enable_local_logging=F

```bash
zeek -r <pcap> Log::enable_local_logging=F
```

Example:

```bash
zeek -r test.pcap Log::enable_local_logging=F
```

Disables local disk logging, often used when shipping logs remotely.

### zeek -r <pcap> Log::enable_remote_logging=T

```bash
zeek -r <pcap> Log::enable_remote_logging=T
```

Example:

```bash
zeek -r test.pcap Log::enable_remote_logging=T
```

Enables sending logs to a remote logger node.


## Cluster Config

### zeekctl config

```bash
zeekctl config
```

Prints the current cluster configuration values.

### zeekctl check

```bash
zeekctl check
```

Verifies the configuration files for errors before deploying.

### zeekctl cleanup

```bash
zeekctl cleanup
```

Clears state from previous runs and resets the cluster nodes.


## Advanced Debugging

### zeek -r <pcap> -g

```bash
zeek -r <pcap> -g
```

Example:

```bash
zeek -r test.pcap -g
```

Dumps the internal state of the script engine for debugging.


## Safe Termination

### kill -TERM <pid>

```bash
kill -TERM <pid>
```

Example:

```bash
kill -TERM 1234
```

Sends a termination signal to Zeek to ensure logs are flushed properly.

## Related tools

- [Suricata](https://terminal.rokibulroni.com/tool/monitoring/suricata)
- [Snort](https://terminal.rokibulroni.com/tool/monitoring/snort)
- [TShark](https://terminal.rokibulroni.com/tool/traffic/tshark)
