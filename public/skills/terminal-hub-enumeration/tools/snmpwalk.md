# snmpwalk

> Walks an SNMP agent’s MIB tree with GETNEXT requests, retrieving everything the community string exposes.

- Category: Enumeration
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/enumeration/snmpwalk
- Homepage: http://www.net-snmp.org
- Documentation: http://www.net-snmp.org/docs/man/snmpwalk.html
- Tags: SNMP, MIB

## Install

- apt: `sudo apt install snmp`
- brew: `brew install net-snmp`

## Basic SNMP Enumeration

### snmpwalk -v 1 -c public 192.168.1.1

```bash
snmpwalk -v 1 -c public 192.168.1.1
```

Performs a basic SNMP walk using the older SNMPv1 protocol and community string.

### snmpwalk -v 2c -c public 192.168.1.1

```bash
snmpwalk -v 2c -c public 192.168.1.1
```

Executes a standard walk using the widely supported SNMPv2c protocol.


## OID Based Enumeration

### snmpwalk -v 2c -c public 192.168.1.1 system

```bash
snmpwalk -v 2c -c public 192.168.1.1 system
```

Restricts the walk specifically to the 'system' subtree to gather device details.

### snmpwalk -v 2c -c public 192.168.1.1 1.3.6.1.2.1.1

```bash
snmpwalk -v 2c -c public 192.168.1.1 1.3.6.1.2.1.1
```

Queries the system information subtree using its numeric OID representation.


## Output Formatting

### snmpwalk -v 2c -c public -On 192.168.1.1

```bash
snmpwalk -v 2c -c public -On 192.168.1.1
```

Displays output OIDs numerically (e.g., .1.3.6...) instead of using symbolic names.

### snmpwalk -v 2c -c public -Of 192.168.1.1

```bash
snmpwalk -v 2c -c public -Of 192.168.1.1
```

Shows the full path of the OID symbolic name in the output.

### snmpwalk -v 2c -c public -Os 192.168.1.1

```bash
snmpwalk -v 2c -c public -Os 192.168.1.1
```

Displays only the last symbolic part of the OID for cleaner reading.

### snmpwalk -v 2c -c public -Oq 192.168.1.1

```bash
snmpwalk -v 2c -c public -Oq 192.168.1.1
```

Enables 'quick' print mode for easier parsing, removing the equal sign and type information.

### snmpwalk -v 2c -c public -Ov 192.168.1.1

```bash
snmpwalk -v 2c -c public -Ov 192.168.1.1
```

Outputs only the values of the variables, hiding the OID names entirely.

### snmpwalk -v 2c -c public -Ox 192.168.1.1

```bash
snmpwalk -v 2c -c public -Ox 192.168.1.1
```

Forces string values to be displayed in Hexadecimal format.

### snmpwalk -v 2c -c public -Ob 192.168.1.1

```bash
snmpwalk -v 2c -c public -Ob 192.168.1.1
```

Forces output to display bit indexes where available.

### snmpwalk -v 2c -c public -Oe 192.168.1.1

```bash
snmpwalk -v 2c -c public -Oe 192.168.1.1
```

Removes symbolic labels from enumerated values, showing the raw integer instead.

### snmpwalk -v 2c -c public -Ot 192.168.1.1

```bash
snmpwalk -v 2c -c public -Ot 192.168.1.1
```

Displays timeticks as raw integers instead of formatted time strings.

### snmpwalk -v 2c -c public -OT 192.168.1.1

```bash
snmpwalk -v 2c -c public -OT 192.168.1.1
```

Forces hexadecimal display specifically for transport address values.


## Rate and Performance Control

### snmpwalk -v 2c -c public -t 5 192.168.1.1

```bash
snmpwalk -v 2c -c public -t 5 192.168.1.1
```

Sets the timeout to 5 seconds to wait longer for responses from slow devices.

### snmpwalk -v 2c -c public -r 3 192.168.1.1

```bash
snmpwalk -v 2c -c public -r 3 192.168.1.1
```

Configures the tool to retry the request 3 times if no response is received.


## MIB Usage and Name Resolution

### snmpwalk -v 2c -c public -m ALL 192.168.1.1

```bash
snmpwalk -v 2c -c public -m ALL 192.168.1.1
```

Loads all available MIB modules to resolve OIDs to names as much as possible.

### snmpwalk -v 2c -c public -M /opt/mibs 192.168.1.1

```bash
snmpwalk -v 2c -c public -M /opt/mibs 192.168.1.1
```

Specifies a custom directory to look for MIB files.


## Advanced Error Handling

### snmpwalk -v 2c -c public -Cc 192.168.1.1

```bash
snmpwalk -v 2c -c public -Cc 192.168.1.1
```

Disables the check that ensures OIDs are returned in increasing order.

### snmpwalk -v 2c -c public -Ci 192.168.1.1

```bash
snmpwalk -v 2c -c public -Ci 192.168.1.1
```

Includes the requested OID itself in the output, which is usually skipped.

### snmpwalk -v 2c -c public -Cp 192.168.1.1

```bash
snmpwalk -v 2c -c public -Cp 192.168.1.1
```

Prints statistics about how many variables were found at the end of the walk.

### snmpwalk -v 2c -c public -Ct 192.168.1.1

```bash
snmpwalk -v 2c -c public -Ct 192.168.1.1
```

Prints the total wall-clock time taken to complete the walk upon completion.


## Debug and Verbose Modes

### snmpwalk -v 2c -c public -d 192.168.1.1

```bash
snmpwalk -v 2c -c public -d 192.168.1.1
```

Dumps the raw input and output SNMP packets for low-level debugging.

### snmpwalk -v 2c -c public -D all 192.168.1.1

```bash
snmpwalk -v 2c -c public -D all 192.168.1.1
```

Enables verbose debugging output for all internal SNMP library tokens.


## Target and Transport Specification

### snmpwalk -v 2c -c public tcp:192.168.1.1

```bash
snmpwalk -v 2c -c public tcp:192.168.1.1
```

Forces the connection to use TCP instead of the default UDP transport.

### snmpwalk -v 2c -c public udp6:[::1]

```bash
snmpwalk -v 2c -c public udp6:[::1]
```

Targets an IPv6 address using UDP explicitly.

### snmpwalk -v 2c -c public 192.168.1.1:1161

```bash
snmpwalk -v 2c -c public 192.168.1.1:1161
```

Specifies a custom destination port (1161) instead of the default 161.


## User Based Security Model (USM)

### snmpwalk -v 3 -u myuser -l noAuthNoPriv 192.168.1.1

```bash
snmpwalk -v 3 -u myuser -l noAuthNoPriv 192.168.1.1
```

Uses SNMPv3 with a username but without authentication or privacy (encryption).


## Authentication Protocols

### snmpwalk -v 3 -u myuser -l authNoPriv -a MD5 -A mypassword 192.168.1.1

```bash
snmpwalk -v 3 -u myuser -l authNoPriv -a MD5 -A mypassword 192.168.1.1
```

Uses SNMPv3 with MD5 authentication but no encryption.

### snmpwalk -v 3 -u myuser -l authNoPriv -a SHA -A mypassword 192.168.1.1

```bash
snmpwalk -v 3 -u myuser -l authNoPriv -a SHA -A mypassword 192.168.1.1
```

Uses SNMPv3 with SHA authentication but no encryption.


## Privacy Protocols

### snmpwalk -v 3 -u myuser -l authPriv -a MD5 -A authpass -x DES -X privpass 192.168.1.1

```bash
snmpwalk -v 3 -u myuser -l authPriv -a MD5 -A authpass -x DES -X privpass 192.168.1.1
```

Uses SNMPv3 with MD5 authentication and DES encryption (Privacy).

### snmpwalk -v 3 -u myuser -l authPriv -a SHA -A authpass -x AES -X privpass 192.168.1.1

```bash
snmpwalk -v 3 -u myuser -l authPriv -a SHA -A authpass -x AES -X privpass 192.168.1.1
```

Uses SNMPv3 with SHA authentication and AES encryption (Privacy).

### snmpwalk -v 3 -u myuser -l authPriv -a SHA -A authpass -x AES128 -X privpass 192.168.1.1

```bash
snmpwalk -v 3 -u myuser -l authPriv -a SHA -A authpass -x AES128 -X privpass 192.168.1.1
```

Explicitly specifies AES128 for the privacy protocol in SNMPv3.


## SNMPv3 Contexts

### snmpwalk -v 3 -n contextName -u myuser -l noAuthNoPriv 192.168.1.1

```bash
snmpwalk -v 3 -n contextName -u myuser -l noAuthNoPriv 192.168.1.1
```

Queries a specific SNMPv3 context name on the target device.

### snmpwalk -v 3 -e 0x8000000001 -u myuser -l noAuthNoPriv 192.168.1.1

```bash
snmpwalk -v 3 -e 0x8000000001 -u myuser -l noAuthNoPriv 192.168.1.1
```

Specifies the authoritative security engine ID for the SNMPv3 request.


## SNMPv3 Advanced

### snmpwalk -v 3 -Z 10 -u myuser -l noAuthNoPriv 192.168.1.1

```bash
snmpwalk -v 3 -Z 10 -u myuser -l noAuthNoPriv 192.168.1.1
```

Sets the engine boot count and time for SNMPv3 communication manually.


## Interface Enumeration

### snmpwalk -v 2c -c public 192.168.1.1 ifTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 ifTable
```

Walks the Interface Table to list network interfaces and their metrics.

### snmpwalk -v 2c -c public 192.168.1.1 ifXTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 ifXTable
```

Walks the Extended Interface Table for high-capacity counters on modern devices.

### snmpwalk -v 2c -c public 192.168.1.1 ifDescr

```bash
snmpwalk -v 2c -c public 192.168.1.1 ifDescr
```

Enumerates only the descriptions of the network interfaces.


## Routing Table Enumeration

### snmpwalk -v 2c -c public 192.168.1.1 ipRouteTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 ipRouteTable
```

Dumps the device's routing table to understand network topology.


## Address Resolution Enumeration

### snmpwalk -v 2c -c public 192.168.1.1 ipNetToMediaTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 ipNetToMediaTable
```

Retrieves the ARP table (IP to MAC mappings) from the target device.


## System and Host Information

### snmpwalk -v 2c -c public 192.168.1.1 hrSWRunTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 hrSWRunTable
```

Lists software currently running on the host via the Host Resources MIB.

### snmpwalk -v 2c -c public 192.168.1.1 hrStorageTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 hrStorageTable
```

Enumerates storage devices and their usage statistics.

### snmpwalk -v 2c -c public 192.168.1.1 hrSystemProcesses

```bash
snmpwalk -v 2c -c public 192.168.1.1 hrSystemProcesses
```

Returns the number of currently active processes on the system.


## Protocol Stats

### snmpwalk -v 2c -c public 192.168.1.1 tcpConnTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 tcpConnTable
```

Lists active TCP connections on the device.

### snmpwalk -v 2c -c public 192.168.1.1 udpTable

```bash
snmpwalk -v 2c -c public 192.168.1.1 udpTable
```

Lists open UDP listening ports on the device.


## Red Team Reconnaissance

### snmpwalk -v 2c -c public 192.168.1.1 1.3.6.1.4.1

```bash
snmpwalk -v 2c -c public 192.168.1.1 1.3.6.1.4.1
```

Walks the 'enterprises' subtree to find vendor-specific configurations and potential vulnerabilities.


## Blue Team Asset Inventory

### snmpwalk -v 2c -c public 192.168.1.1 entPhysicalSerialNum

```bash
snmpwalk -v 2c -c public 192.168.1.1 entPhysicalSerialNum
```

Extracts serial numbers for hardware components for asset tracking.


## Incident Response

### snmpwalk -v 2c -c public 192.168.1.1 1.3.6.1.2.1.25.4.2.1.2

```bash
snmpwalk -v 2c -c public 192.168.1.1 1.3.6.1.2.1.25.4.2.1.2
```

Enumerates running process names specifically to identify suspicious activity.


## Advanced Configuration

### snmpwalk -v 2c -c public -Lsd 192.168.1.1

```bash
snmpwalk -v 2c -c public -Lsd 192.168.1.1
```

Logs messages to syslog with the 'daemon' facility during execution.

### snmpwalk -v 2c -c public -Lf /tmp/snmp.log 192.168.1.1

```bash
snmpwalk -v 2c -c public -Lf /tmp/snmp.log 192.168.1.1
```

Redirects log messages to a specific file instead of standard output.


## Output Formatting

### snmpwalk -v 2c -c public -O T 192.168.1.1

```bash
snmpwalk -v 2c -c public -O T 192.168.1.1
```

Ensures that printable characters are hex-encoded to avoid terminal issues.

### snmpwalk -v 2c -c public -O v 192.168.1.1

```bash
snmpwalk -v 2c -c public -O v 192.168.1.1
```

Outputs only the values (terse mode) which is useful for scripts.


## Combined Real World Walk

### snmpwalk -v 2c -c public -On -t 2 -r 1 192.168.1.1 system

```bash
snmpwalk -v 2c -c public -On -t 2 -r 1 192.168.1.1 system
```

Fast system walk with numeric OIDs, short timeout, and low retries for quick scanning.

### snmpwalk -v 3 -u admin -l authPriv -a SHA -A pass -x AES -X priv -Oq 192.168.1.1

```bash
snmpwalk -v 3 -u admin -l authPriv -a SHA -A pass -x AES -X priv -Oq 192.168.1.1
```

Secure, encrypted walk with quick output formatting for parsing.

### snmpwalk -v 2c -c public -Cp -Ci -Ct 192.168.1.1

```bash
snmpwalk -v 2c -c public -Cp -Ci -Ct 192.168.1.1
```

Comprehensive audit walk printing stats, time, and ensuring all OIDs are included.


## Input Configuration

### snmpwalk -v 2c -c public -I R 192.168.1.1

```bash
snmpwalk -v 2c -c public -I R 192.168.1.1
```

Uses random access lookup for the MIB file parsing.


## Alias Usage

### snmpwalk -v 2c -c public 192.168.1.1 nsCache

```bash
snmpwalk -v 2c -c public 192.168.1.1 nsCache
```

Walks the Net-SNMP internal cache information subtree.

### snmpwalk -v 2c -c public 192.168.1.1 nsError

```bash
snmpwalk -v 2c -c public 192.168.1.1 nsError
```

Walks the Net-SNMP internal error counting subtree.


## Legacy Compatibility

### snmpwalk -v 1 -c public -Oa 192.168.1.1

```bash
snmpwalk -v 1 -c public -Oa 192.168.1.1
```

Walks using SNMPv1 and forces string output to be ASCII only.

## Related tools

- [snmp-check](https://terminal.rokibulroni.com/tool/enumeration/snmpcheck)
