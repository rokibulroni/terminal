# ike-scan

> Discovers and fingerprints IPsec VPN servers using IKE, and can capture aggressive-mode PSK hashes for offline cracking.

- Category: Network
- Commands: 30
- Page: https://terminal.rokibulroni.com/tool/network/ike-scan
- Homepage: https://github.com/royhills/ike-scan
- Documentation: https://github.com/royhills/ike-scan/wiki
- Tags: VPN, IPsec, IKE

## Install

- apt: `sudo apt install ike-scan`
- brew: `brew install ike-scan`

## Basic IKE Discovery

### ike-scan 192.168.1.1

```bash
ike-scan 192.168.1.1
```

Sends standard Main Mode packets for discovery.
Identifies hosts running IKE services on the target IP.


## Target and Range Specification

### ike-scan 192.168.1.0/24

```bash
ike-scan 192.168.1.0/24
```

Scans an entire CIDR subnet for IKE endpoints.
Efficiently maps VPN gateways across a broad network range.

### ike-scan -f targets.txt

```bash
ike-scan -f targets.txt
```

Reads target list from a text file (-f).
Enables batch scanning of specifically documented server addresses.


## Aggressive Mode Scanning

### ike-scan -A 192.168.1.1

```bash
ike-scan -A 192.168.1.1
```

Uses Aggressive Mode for IKE discovery (-A).
Attempts to elicit identity data and hashes from the VPN gateways.


## Main Mode Scanning

### ike-scan -M 192.168.1.1

```bash
ike-scan -M 192.168.1.1
```

Forces Main Mode for the exchange (-M).
Uses the standard, more secure 3-step handshake for identification.


## Pre Shared Key Detection Techniques

### ike-scan -A --id=groupname 192.168.1.1

```bash
ike-scan -A --id=groupname 192.168.1.1
```

Sends a specific Group ID in Aggressive Mode.
Probes for valid responses that contain crackable PSK hashes.


## Basic IKE Discovery

### ike-scan -2 192.168.1.1

```bash
ike-scan -2 192.168.1.1
```

Uses IKEv2 mode for endpoint discovery (-2).
Identifies modern VPN services that support the updated IKE standard.


## Retry, Timeout, and Rate Control

### ike-scan --retry=3 --interval=500 192.168.1.1

```bash
ike-scan --retry=3 --interval=500 192.168.1.1
```

Retries 3 times with 500ms intervals.
Increases reliability when scanning over unstable or distant networks.

### ike-scan --backoff=200 192.168.1.0/24

```bash
ike-scan --backoff=200 192.168.1.0/24
```

Enforces a 200ms delay between packets (--backoff).
Throttles the scan to prevent overwhelming network bandwidth.


## Vendor ID and Device Fingerprinting

### ike-scan --showbackoff 192.168.1.1

```bash
ike-scan --showbackoff 192.168.1.1
```

Displays the backoff fingerprint table.
Helps identify the VPN vendor based on how they handle retransmissions.


## Transform and Proposal Enumeration

### ike-scan --auth=1 --enc=5 --group=2 192.168.1.1

```bash
ike-scan --auth=1 --enc=5 --group=2 192.168.1.1
```

Specifies custom transform parameters.
Tests particular Auth/Enc/DH configurations to find supported proposals.

### ike-scan --trans=5,2,1,2 192.168.1.1

```bash
ike-scan --trans=5,2,1,2 192.168.1.1
```

Manually defines transform payloads string.
Provides absolute control over the proposal data sent to the target.


## Authentication and Exchange Options

### ike-scan --multimode 192.168.1.1

```bash
ike-scan --multimode 192.168.1.1
```

Sends multiple transforms in one packet (--multimode).
Efficiently determines which cryptographic suites the server accepts.


## Source IP and Interface Binding

### ike-scan --interface=eth0 192.168.1.1

```bash
ike-scan --interface=eth0 192.168.1.1
```

Binds the scan to a specific network interface.
Ensures discovery traffic exits through the intended physical adapter.

### ike-scan --sourceip=192.168.1.5 192.168.1.1

```bash
ike-scan --sourceip=192.168.1.5 192.168.1.1
```

Spoofs the source IP address of the probes.
Makes discovery packets appear to come from another host on the network.

### ike-scan --sport=500 192.168.1.1

```bash
ike-scan --sport=500 192.168.1.1
```

Sets source UDP port to 500 (--sport 500).
Uses the standard IKE port to mimic legitimate VPN client traffic.

### ike-scan --sport=0 192.168.1.1

```bash
ike-scan --sport=0 192.168.1.1
```

Randomizes the source UDP port (--sport 0).
Prevents traffic filters from identifying the probe by its source port.


## NAT Traversal Detection

### ike-scan --nat-t 192.168.1.1

```bash
ike-scan --nat-t 192.168.1.1
```

Encapsulates packets in UDP/4500 (--nat-t).
Tests if the VPN endpoint supports and allows NAT Traversal.


## Output Formatting and Logging

### ike-scan -v 192.168.1.1

```bash
ike-scan -v 192.168.1.1
```

Enables verbose mode for detailed tracking (-v).
Displays information about handshake stages and payload contents.


## Quiet, Verbose, and Debug Modes

### ike-scan -q 192.168.1.1

```bash
ike-scan -q 192.168.1.1
```

Runs in quiet mode (-q).
Suppresses non-essential log entries for cleaner automation output.


## Output Formatting and Logging

### ike-scan --hexdump 192.168.1.1

```bash
ike-scan --hexdump 192.168.1.1
```

Displays hex dump of received packets.
Enables deep manual analysis of server-side IKE responses.


## Pre Shared Key Detection Techniques

### ike-scan -A --idtype=2 --id=test 192.168.1.1

```bash
ike-scan -A --idtype=2 --id=test 192.168.1.1
```

Uses DNS hostname for identification (--idtype 2).
Probes targets that require hostname-based ID validation.


## IPv4 and IPv6 Scanning

### ike-scan -6 2001:db8::1

```bash
ike-scan -6 2001:db8::1
```

Scans an IPv6 address endpoint (-6).
Verifies IKE accessibility on modern IPv6 network stacks.


## Red Team VPN Reconnaissance

### ike-scan -A -Phash.txt 192.168.1.1

```bash
ike-scan -A -Phash.txt 192.168.1.1
```

Saves PSK hashes to a file for offline cracking.
Essential for capturing data required to crack VPN passwords.


## Advanced and Combined Real World Scans

### ike-scan --random --retry=1 192.168.1.0/24

```bash
ike-scan --random --retry=1 192.168.1.0/24
```

Randomizes target order with 1 retry.
Implements simple anti-detection measures when scanning large ranges.


## VPN Gateway Identification

### ike-scan --headerlen=100 192.168.1.1

```bash
ike-scan --headerlen=100 192.168.1.1
```

Sets custom ISAKMP header length.
Tests how the target handles malformed or non-standard IKE headers.


## Transform and Proposal Enumeration

### ike-scan --lifetime=28800 --lifesize=10000 192.168.1.1

```bash
ike-scan --lifetime=28800 --lifesize=10000 192.168.1.1
```

Specifies SA lifetime and size proposals.
Checks if the server accepts non-standard security association limits.


## Blue Team Exposure Validation

### ike-scan --shownum 192.168.1.1

```bash
ike-scan --shownum 192.168.1.1
```

Displays the count of returned transforms.
Validates the diversity of crypto proposals the server is willing to accept.


## Advanced and Combined Real World Scans

### ike-scan -M -v --auth=1 192.168.1.1

```bash
ike-scan -M -v --auth=1 192.168.1.1
```

Verbose Main Mode scan for PSK auth.
Performs an audit to see if pre-shared keys are used on specific targets.


## Red Team VPN Reconnaissance

### ike-scan --patterns=custom_vendors.txt 192.168.1.1

```bash
ike-scan --patterns=custom_vendors.txt 192.168.1.1
```

Uses custom vendor signature file.
Identifies specific device models and firmware versions from obscure vendors.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
