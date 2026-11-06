# snmp-check

> Enumerates SNMP devices and prints a readable report of system info, network interfaces, routes, processes and installed software.

- Category: Enumeration
- Commands: 32
- Page: https://terminal.rokibulroni.com/tool/enumeration/snmpcheck
- Homepage: https://www.nothink.org/codes/snmpcheck/
- Tags: SNMP, enumeration

## Install

- apt: `sudo apt install snmpcheck`

## Basic SNMP Enumeration

### snmpcheck -h

```bash
snmpcheck -h
```

Displays the help menu listing all available command line options and syntax usage.

### snmpcheck -t 192.168.1.1

```bash
snmpcheck -t 192.168.1.1
```

Performs a standard automated SNMP enumeration against the target IP using default settings.


## Target and Transport Specification

### snmpcheck -t router.example.local

```bash
snmpcheck -t router.example.local
```

Initiates an enumeration scan against a target specified by its hostname instead of IP address.


## Community String Based Enumeration

### snmpcheck -t 192.168.1.1 -c public

```bash
snmpcheck -t 192.168.1.1 -c public
```

Explicitly defines the community string 'public' to authenticate the SNMP session.

### snmpcheck -t 192.168.1.1 -c private

```bash
snmpcheck -t 192.168.1.1 -c private
```

Uses the common read-write community string 'private' to attempt deeper enumeration.

### snmpcheck -t 10.0.0.5 -c manager

```bash
snmpcheck -t 10.0.0.5 -c manager
```

Attempts enumeration using an alternative administrative community string 'manager'.


## Target and Transport Specification

### snmpcheck -t 192.168.1.1 -p 161

```bash
snmpcheck -t 192.168.1.1 -p 161
```

Manually specifies the standard UDP port 161 for the SNMP connection.

### snmpcheck -t 192.168.1.1 -p 1161

```bash
snmpcheck -t 192.168.1.1 -p 1161
```

Directs the scan to a non-standard SNMP port, often used on security hardened devices.


## SNMP Version Selection

### snmpcheck -t 192.168.1.1 -v 1

```bash
snmpcheck -t 192.168.1.1 -v 1
```

Forces the tool to use legacy SNMP Version 1 for the enumeration process.

### snmpcheck -t 192.168.1.1 -v 2c

```bash
snmpcheck -t 192.168.1.1 -v 2c
```

Uses SNMP Version 2c, which allows for retrieving larger data counters and bulk transfers.


## System Information Enumeration

### snmpcheck -t 192.168.1.10 -c public

```bash
snmpcheck -t 192.168.1.10 -c public
```

Retrieves system description, uptime, contact info, and hostname from the target.


## Network Interface Enumeration

### snmpcheck -t 10.10.10.1 -v 2c

```bash
snmpcheck -t 10.10.10.1 -v 2c
```

Enumerates network interfaces, IP addresses, and MAC addresses using version 2c for better accuracy.


## Red Team Network Reconnaissance

### snmpcheck -t 192.168.1.1 -w

```bash
snmpcheck -t 192.168.1.1 -w
```

Enables write-access detection to identify if the community string allows modifying device configuration.

### snmpcheck -t 192.168.1.1 -c public -w

```bash
snmpcheck -t 192.168.1.1 -c public -w
```

Checks for write permissions specifically using the 'public' community string.


## Rate and Performance Control

### snmpcheck -t 192.168.1.1 -d

```bash
snmpcheck -t 192.168.1.1 -d
```

Disables TCP connection enumeration to speed up the scan and reduce network noise.


## Routing and ARP Table Enumeration

### snmpcheck -t 172.16.0.1 -d

```bash
snmpcheck -t 172.16.0.1 -d
```

Focuses on retrieving routing and ARP tables quickly by skipping the TCP connection checks.


## Timeout and Retry Configuration

### snmpcheck -t 192.168.1.1 -T 10

```bash
snmpcheck -t 192.168.1.1 -T 10
```

Increases the response timeout to 10 seconds for slow or congested network links.

### snmpcheck -t 192.168.1.1 -r 5

```bash
snmpcheck -t 192.168.1.1 -r 5
```

Sets the retry count to 5 to handle packet loss on unreliable networks.


## Service and Process Enumeration

### snmpcheck -t 10.0.0.50 -v 2c

```bash
snmpcheck -t 10.0.0.50 -v 2c
```

Enumerates running processes and installed software services using the more efficient version 2c.


## User and Group Enumeration

### snmpcheck -t 192.168.1.5 -c public

```bash
snmpcheck -t 192.168.1.5 -c public
```

Extracts the list of system user accounts if exposed by the target's SNMP agent.


## Device and OS Fingerprinting

### snmpcheck -t 192.168.1.254 -v 1

```bash
snmpcheck -t 192.168.1.254 -v 1
```

Queries the system description OID to identify the specific OS version and hardware model.


## IPv4 and IPv6 Targets

### snmpcheck -t 2001:db8::1

```bash
snmpcheck -t 2001:db8::1
```

Performs SNMP enumeration against an IPv6 address (requires host system IPv6 support).


## Network Infrastructure Enumeration

### snmpcheck -t core-switch.local -c cisco

```bash
snmpcheck -t core-switch.local -c cisco
```

Targets a network infrastructure device using a vendor-specific community string.


## Quiet and Script Friendly Output

### snmpcheck -t 192.168.1.1 -d -T 2

```bash
snmpcheck -t 192.168.1.1 -d -T 2
```

Runs a fast, minimal-noise scan suitable for quick scripting checks by disabling TCP checks and lowering timeout.


## Verbose and Debug Modes

### snmpcheck -t 192.168.1.1 -v 2c -r 0

```bash
snmpcheck -t 192.168.1.1 -v 2c -r 0
```

Runs a scan with no retries to immediately identify connectivity issues, relying on full standard output for details.


## Blue Team Asset Inventory and Monitoring

### snmpcheck -t 192.168.10.5 -c monitor -v 2c

```bash
snmpcheck -t 192.168.10.5 -c monitor -v 2c
```

Uses a dedicated monitoring community string to validate asset visibility and inventory data.


## Incident Response and Audit Scenarios

### snmpcheck -t 10.1.1.100 -w -v 2c

```bash
snmpcheck -t 10.1.1.100 -w -v 2c
```

audits a specific host for dangerous write permissions during a security incident investigation.


## Advanced and Combined Real World Checks

### snmpcheck -t 192.168.1.1 -c secret -p 161 -w

```bash
snmpcheck -t 192.168.1.1 -c secret -p 161 -w
```

Combines custom community, explicit port, and write access checks for a thorough security audit.

### snmpcheck -t 192.168.1.1 -v 2c -w -d

```bash
snmpcheck -t 192.168.1.1 -v 2c -w -d
```

A comprehensive scan using version 2c and write detection, while skipping TCP checks for efficiency.

### snmpcheck -t 10.0.0.1 -T 15 -r 3 -v 2c

```bash
snmpcheck -t 10.0.0.1 -T 15 -r 3 -v 2c
```

Performs a robust scan over a high-latency connection by increasing timeouts and retries significantly.


## Output Formatting and Display Control

### snmpcheck -t 192.168.1.1 -c public -d

```bash
snmpcheck -t 192.168.1.1 -c public -d
```

Produces cleaner output by suppressing TCP connection timeout errors often seen on firewalled hosts.


## Advanced and Combined Real World Checks

### snmpcheck -t 192.168.1.1 -c public -v 2c -w -d -T 5 -r 2

```bash
snmpcheck -t 192.168.1.1 -c public -v 2c -w -d -T 5 -r 2
```

The ultimate full-feature command employing all major flags for maximum enumeration and reliability.

## Related tools

- [snmpwalk](https://terminal.rokibulroni.com/tool/enumeration/snmpwalk)
