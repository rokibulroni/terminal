# RustScan

> A fast port scanner written in Rust that finds open ports in seconds and then hands them to Nmap for detailed service detection.

- Category: Network
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/network/RustScan
- Homepage: https://github.com/bee-san/RustScan
- Documentation: https://github.com/bee-san/RustScan/wiki
- Tags: port scanning, fast, nmap integration

## Install

- brew: `brew install rustscan`
- cargo: `cargo install rustscan`
- docker: `docker run -it --rm rustscan/rustscan:latest -a <target>`

## Basic Scan

### rustscan -a 192.168.1.1

```bash
rustscan -a 192.168.1.1
```

Executes a high-speed TCP connect scan against a single IP address.
Ideal for rapid initial reconnaissance to quickly identify open ports.

### rustscan -a scanme.nmap.org

```bash
rustscan -a scanme.nmap.org
```

Resolves the hostname to an IP and performs a standard port scan.
Useful when testing domains directly or validating DNS resolution.


## Target Specification

### rustscan -a 192.168.1.0/24

```bash
rustscan -a 192.168.1.0/24
```

Scans an entire /24 subnet to discover live hosts and open ports.
Essential for mapping out network segments and identifying targets.

### rustscan -a '192.168.1.1,192.168.1.5'

```bash
rustscan -a '192.168.1.1,192.168.1.5'
```

Targets a specific list of comma-separated IP addresses.
Allows for focused scanning of known high-value targets without scanning the full range.


## Port Control

### rustscan -a 192.168.1.1 -p 80

```bash
rustscan -a 192.168.1.1 -p 80
```

Scans only a single specific port on the target host.
Best for verifying the availability of a specific service like HTTP or SSH.

### rustscan -a 192.168.1.1 -p 80,443,8080

```bash
rustscan -a 192.168.1.1 -p 80,443,8080
```

Scans a defined list of ports to check for specific services.
Efficient for validating compliance or checking for known services across hosts.


## Port Ranges

### rustscan -a 192.168.1.1 -r 1-1000

```bash
rustscan -a 192.168.1.1 -r 1-1000
```

Scans a sequential range of ports (1-1000) on the target.
Covers most well-known ports while being faster than a full system scan.

### rustscan -a 192.168.1.1 -r 1-65535

```bash
rustscan -a 192.168.1.1 -r 1-65535
```

Scans every valid TCP port from 1 to 65535.
Critical for discovering hidden services running on non-standard high ports.


## Performance Tuning

### rustscan -a 192.168.1.1 -b 1000

```bash
rustscan -a 192.168.1.1 -b 1000
```

Sets the batch size to 1000 to control scan concurrency.
Adjusting this balances speed with network reliability and accuracy.

### rustscan -a 192.168.1.1 -b 65535

```bash
rustscan -a 192.168.1.1 -b 65535
```

Maximizes the batch size to scan all ports in a single pass.
Use this for extreme speed on capable networks, but risk of packet loss increases.

### rustscan -a 192.168.1.1 -b 10

```bash
rustscan -a 192.168.1.1 -b 10
```

Reduces batch size to 10 for a very gentle scan.
Useful for unstable networks or sensitive legacy devices that crash under load.


## Timeout Configuration

### rustscan -a 192.168.1.1 -t 2000

```bash
rustscan -a 192.168.1.1 -t 2000
```

Sets a 2-second timeout for waiting on port responses.
Helps account for network latency or slow services without stalling the scan.

### rustscan -a 192.168.1.1 -t 500

```bash
rustscan -a 192.168.1.1 -t 500
```

Sets a short 500ms timeout for high-speed local scanning.
Best used on low-latency LANs where responses should be immediate.


## System Resource Tuning

### rustscan -a 192.168.1.1 -u 5000

```bash
rustscan -a 192.168.1.1 -u 5000
```

Increases the system's open file limit (ulimit) to 5000.
Necessary when running large batch sizes to prevent 'Too many open files' errors.


## Scanning Strategy

### rustscan -a 192.168.1.1 --tries 2

```bash
rustscan -a 192.168.1.1 --tries 2
```

Retries failed packets twice per port.
Improves scan accuracy on unreliable or congested networks.

### rustscan -a 192.168.1.1 --scan-order random

```bash
rustscan -a 192.168.1.1 --scan-order random
```

Randomizes the order of port scanning.
Helps evade some simple intrusion detection systems that look for sequential patterns.


## Nmap Integration

### rustscan -a 192.168.1.1 -- -sV

```bash
rustscan -a 192.168.1.1 -- -sV
```

Pipelines discovered ports directly to Nmap for Version Detection (-sV).
Combines RustScan's speed with Nmap's deep service analysis.

### rustscan -a 192.168.1.1 -- -O

```bash
rustscan -a 192.168.1.1 -- -O
```

Pipelines ports to Nmap for Operating System Detection (-O).
Crucial for identifying the OS to tailor exploits or further attacks.

### rustscan -a 192.168.1.1 -- -A

```bash
rustscan -a 192.168.1.1 -- -A
```

Pipelines ports to Nmap's Aggressive Scan (-A).
Performs OS detection, versioning, script scanning, and traceroute in one step.

### rustscan -a 192.168.1.1 -- -sC

```bash
rustscan -a 192.168.1.1 -- -sC
```

Runs the default set of Nmap scripts (-sC) on open ports.
Automates the checking of common vulnerabilities and configuration issues.


## Advanced Nmap Integration

### rustscan -a 192.168.1.1 -- -sV -sC

```bash
rustscan -a 192.168.1.1 -- -sV -sC
```

Runs both Version Detection and Default Scripts on discovered ports.
The gold standard for thorough enumeration of open services.


## Script Execution

### rustscan -a 192.168.1.1 -- --script=vuln

```bash
rustscan -a 192.168.1.1 -- --script=vuln
```

Triggers Nmap's vulnerability scanning scripts (--script=vuln).
Rapidly checks discovered services for known CVEs and weaknesses.

### rustscan -a 192.168.1.1 -- --script=http-title

```bash
rustscan -a 192.168.1.1 -- --script=http-title
```

Runs the http-title script to grab web page titles.
Useful for quickly identifying web applications and their purposes.


## Output Handling

### rustscan -a 192.168.1.1 -- -oN scan_results.txt

```bash
rustscan -a 192.168.1.1 -- -oN scan_results.txt
```

Outputs the Nmap scan results to a standard text file.
Preserves a human-readable record of the scan for reporting.

### rustscan -a 192.168.1.1 -- -oX scan_results.xml

```bash
rustscan -a 192.168.1.1 -- -oX scan_results.xml
```

Saves Nmap results in XML format.
Ideal for importing scan data into frameworks like Metasploit or Dradis.

### rustscan -a 192.168.1.1 -- -oG grepable.txt

```bash
rustscan -a 192.168.1.1 -- -oG grepable.txt
```

Saves Nmap results in 'Grepable' format.
Facilitates quick parsing and filtering of results using command-line tools.


## Stealth and Evasion

### rustscan -a 192.168.1.1 -b 50 -t 3000 -- -T2

```bash
rustscan -a 192.168.1.1 -b 50 -t 3000 -- -T2
```

Uses a lower batch size and polite Nmap timing (-T2).
Designed to be less aggressive and reduce the chance of detection or instability.

### rustscan -a 192.168.1.1 -- -f -mtu 24

```bash
rustscan -a 192.168.1.1 -- -f -mtu 24
```

Passes fragmentation and MTU flags to Nmap.
Attempts to bypass simple packet filters and firewalls by breaking up packets.

### rustscan -a 192.168.1.1 -- -D RND:5

```bash
rustscan -a 192.168.1.1 -- -D RND:5
```

Uses 5 random decoy IPs during the Nmap phase.
Obscures the true source IP address to complicate analysis by defenders.


## Full Range High Performance

### rustscan -a 192.168.1.1 -r 1-65535 -b 3000 -t 1000

```bash
rustscan -a 192.168.1.1 -r 1-65535 -b 3000 -t 1000
```

Optimized parameters for maximum performance on huge ranges.
Uses high batch size and low timeout to rapidly assess full systems.


## Firewall Friendly

### rustscan -a 192.168.1.1 -p 80,443,53,8080 -t 2000 -- -Pn

```bash
rustscan -a 192.168.1.1 -p 80,443,53,8080 -t 2000 -- -Pn
```

Scans common ports without pinging the host (-Pn).
Necessary when the target firewall blocks ICMP but services are likely open.


## IPv6 Scanning

### rustscan -a 2001:db8::1 -- -6

```bash
rustscan -a 2001:db8::1 -- -6
```

Initiates an IPv6 scan and passes the -6 flag to Nmap.
Ensures proper protocol handling when targeting IPv6 addresses.


## Automation Pipelines

### rustscan -a 192.168.1.1 --scripts none

```bash
rustscan -a 192.168.1.1 --scripts none
```

Disables the Nmap scripting phase entirely.
Returns only the raw list of open ports found by RustScan, useful for custom scripts.

### rustscan -a 192.168.1.1 -- -sV --version-intensity 0

```bash
rustscan -a 192.168.1.1 -- -sV --version-intensity 0
```

Runs a very light intensity version scan.
Sacrifices some detail for significantly faster execution speed.

### rustscan -a 192.168.1.1 -- -sV --version-all

```bash
rustscan -a 192.168.1.1 -- -sV --version-all
```

Forces Nmap to try every single version probe.
Maximizes accuracy of service identification at the cost of scan time.


## Real World Scenario

### rustscan -a 10.10.10.0/24 -t 500 -b 2000 -- -sV -oA subnet_scan

```bash
rustscan -a 10.10.10.0/24 -t 500 -b 2000 -- -sV -oA subnet_scan
```

Rapidly maps a subnet and saves all formats.
A standard efficiency workflow for internal network assessments.

### rustscan -a 192.168.1.1 -r 1-65535 -- -sC -sV -oN nmap.txt

```bash
rustscan -a 192.168.1.1 -r 1-65535 -- -sC -sV -oN nmap.txt
```

Full 65k port scan followed by detailed analysis.
The typical 'CTF' or 'Pentest' starter command for a thorough host assessment.

### rustscan -a 192.168.1.1 -- -sU

```bash
rustscan -a 192.168.1.1 -- -sU
```

Passes found TCP ports to Nmap's UDP scan (-sU).
Note: RustScan finds TCP ports; this checks if UDP services exist on those same port numbers.


## Advanced Filtering

### rustscan -a 192.168.1.1 -- -sV --script-args http.useragent="Mozilla/5.0"

```bash
rustscan -a 192.168.1.1 -- -sV --script-args http.useragent="Mozilla/5.0"
```

Passes custom arguments to Nmap scripts.
Useful for bypassing restrictions or blending in by changing the User-Agent.

### rustscan -a 192.168.1.1 -- --exclude 192.168.1.100

```bash
rustscan -a 192.168.1.1 -- --exclude 192.168.1.100
```

Excludes specific IPs from the Nmap phase.
Prevents scanning of sensitive or out-of-scope hosts even if they are in the range.


## Shell Integration

### cat targets.txt | rustscan -a -

```bash
cat targets.txt | rustscan -a -
```

Reads IP addresses from stdin and scans them.
Allows RustScan to be part of a larger pipeline, e.g., 'cat targets.txt | rustscan'.

### rustscan -a 192.168.1.1 | grep Open

```bash
rustscan -a 192.168.1.1 | grep Open
```

Pipes the raw output to grep to find open ports.
Useful for quick CLI filtering when you don't need the full Nmap report.


## Container/Docker

### docker run -it --rm --name rustscan rustscan/rustscan:alpine -a 192.168.1.1

```bash
docker run -it --rm --name rustscan rustscan/rustscan:alpine -a 192.168.1.1
```

Runs RustScan from an ephemeral Docker container.
Keeps your host system clean and ensures you are using the latest version.


## Aliases and Shortcuts

### alias fastscan='rustscan -b 2000 -t 1000 -a'

```bash
alias fastscan='rustscan -b 2000 -t 1000 -a'
```

Defines a shell alias for a pre-configured fast scan.
Saves time by creating a shortcut for your preferred scanning parameters.


## Extreme Speed

### rustscan -a 192.168.1.1 -b 4000 -t 200 -- -T5

```bash
rustscan -a 192.168.1.1 -b 4000 -t 200 -- -T5
```

Combines maximum values for all speed parameters.
The 'nuclear' option for when noise is not a concern and speed is everything.

## Related tools

- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
- [Masscan](https://terminal.rokibulroni.com/tool/network/masscan)
- [Naabu](https://terminal.rokibulroni.com/tool/network/naabu)
