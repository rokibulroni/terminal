# netstat

> Shows network connections, listening ports, routing tables and interface statistics. Largely replaced by ss on Linux but still common everywhere.

- Category: Network
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/network/netstat
- Documentation: https://man7.org/linux/man-pages/man8/netstat.8.html
- Tags: connections, listening ports, legacy

## Install

- apt: `sudo apt install net-tools`
- dnf: `sudo dnf install net-tools`

## Basic Network Status

### netstat

```bash
netstat
```

Displays all active open network sockets and established connections.
Provides a baseline view of current system-wide network activity.

### netstat -a

```bash
netstat -a
```

Shows all sockets, including both listening and established states (-a).
Comprehensive list of all ports regardless of their current status.

### netstat -l

```bash
netstat -l
```

Lists only sockets that are currently in a listening state (-l).
Identifies ports waiting for incoming connection requests.


## Numerical and Resolved Output

### netstat -n

```bash
netstat -n
```

Displays addresses and port numbers in numerical format (-n).
Accelerates output by skipping time-consuming DNS and service name lookups.

### netstat -an

```bash
netstat -an
```

Shows all sockets and listening ports in numeric format (-an).
Combines comprehensive listing with high-performance numerical output.


## TCP Connections

### netstat -t

```bash
netstat -t
```

Filters output to display only TCP protocol connections (-t).
Limits the view to Transmission Control Protocol session data.

### netstat -at

```bash
netstat -at
```

Shows all TCP connections, including listening and active sessions (-at).
Provides a complete picture of all TCP-based service states.

### netstat -lt

```bash
netstat -lt
```

Lists only the TCP sockets currently waiting for connections (-lt).
Focuses on available TCP-based server services on the host.

### netstat -tn

```bash
netstat -tn
```

Displays TCP data with numerical addresses and ports (-tn).
Ideal for high-speed monitoring of active TCP sessions without DNS overhead.

### netstat -ant

```bash
netstat -ant
```

Combined view of all TCP sockets (listening and active) in numeric format (-ant).
Provides a rapid and detailed overview of the entire TCP stack state.


## UDP Connections

### netstat -u

```bash
netstat -u
```

Filters output to display only UDP protocol connections (-u).
Displays active and recently used User Datagram Protocol socket data.

### netstat -au

```bash
netstat -au
```

Shows all UDP connections, including listening sockets (-au).
Enables discovery of both established flows and available UDP services.

### netstat -lu

```bash
netstat -lu
```

Lists only UDP sockets that are actively listening for packets (-lu).
Identifies open UDP ports that could be used for incoming payloads.

### netstat -un

```bash
netstat -un
```

Displays UDP connections with numerical addresses and ports (-un).
Provides a fast look at UDP traffic without resolving names.

### netstat -anu

```bash
netstat -anu
```

Shows all UDP socket states in numerical format (-anu).
Comprehensive and efficient view of all local UDP service availability.


## UNIX Domain Sockets

### netstat -x

```bash
netstat -x
```

Displays information about active UNIX domain sockets (-x).
Makes local inter-process communication (IPC) channels visible for analysis.

### netstat -lx

```bash
netstat -lx
```

Lists only listening UNIX domain sockets (-lx).
Identifies local system services waiting for internal application connections.

### netstat -ax

```bash
netstat -ax
```

Shows all UNIX domain sockets, both listening and connected (-ax).
Full visualization of internal system-wide socket-based IPC.


## Raw Sockets

### netstat -w

```bash
netstat -w
```

Displays raw socket data if supported by the kernel (-w).
Enables visibility of low-level protocol interactions below the transport layer.


## Process and PID Association

### netstat -p

```bash
netstat -p
```

Example:

```bash
sudo netstat -p
```

Shows the PID and program name for each network socket (-p).
Critically links network activity to specific running software processes.

### netstat -tp

```bash
netstat -tp
```

Example:

```bash
sudo netstat -tp
```

Displays TCP connections with associated process IDs and names (-tp).
Maps transport layer activity directly to the initiating application.

### netstat -up

```bash
netstat -up
```

Example:

```bash
sudo netstat -up
```

Displays UDP connections with associated process IDs and names (-up).
Identifies which system processes are handling datagram traffic.

### netstat -xlp

```bash
netstat -xlp
```

Example:

```bash
sudo netstat -xlp
```

Lists listening UNIX sockets with their associated process info (-xlp).
Allows tracing of internal L5 services back to their binary sources.

### netstat -tulpn

```bash
netstat -tulpn
```

Example:

```bash
sudo netstat -tulpn
```

Standard admin view of all listening TCP/UDP ports with PIDs (-tulpn).
Essential tool for auditing server security and verifying listening services.

### netstat -anp

```bash
netstat -anp
```

Example:

```bash
sudo netstat -anp
```

Displays all connections and listening ports with PIDs numerically (-anp).
Provides maximum visibility into the entire active network footprint of the OS.

### netstat -ep

```bash
netstat -ep
```

Example:

```bash
sudo netstat -ep
```

Shows process info with extended user ID and inode data (-ep).
Provides deep system integration details for socket-to-file matching.


## Extended and Verbose Output

### netstat -e

```bash
netstat -e
```

Displays extended socket info including owner UID and inode (-e).
Useful for determining the security context and identity of connection owners.

### netstat -ee

```bash
netstat -ee
```

Displays very verbose kernel-level socket information (-ee).
Provides deepest possible visibility into internal networking structures.

### netstat -ne

```bash
netstat -ne
```

Numerical addresses combined with extended owner details (-ne).
High-performance view that includes security identifier (UID) for each socket.

### netstat -v

```bash
netstat -v
```

Enables verbose mode, printing info on protocol family status (-v).
Helps diagnose why certain protocols may not be displaying active sockets.

### netstat -W

```bash
netstat -W
```

Enables wide mode to prevent address truncation (-W).
Ensures that long IPv6 or hostname strings are fully readable in the output.

### netstat -tunlpW

```bash
netstat -tunlpW
```

Example:

```bash
sudo netstat -tunlpW
```

Shows listening TCP/UDP ports with PIDs and full IP strings (-tunlpW).
Full-detail admin view for comprehensive local service identification.


## Continuous and Periodic Output

### netstat -c

```bash
netstat -c
```

Updates the netstat output continuously every second (-c).
Enables real-time monitoring of connection state changes and bursts.

### netstat -tc

```bash
netstat -tc
```

Continuously monitors TCP connection states every second (-tc).
Provides a live dashboard of Transmission Control Protocol activity.

### netstat -uc

```bash
netstat -uc
```

Continuously monitors UDP datagram flow every second (-uc).
Identifies real-time spikes or patterns in User Datagram Protocol usage.

### netstat -anc

```bash
netstat -anc
```

Continuously displays all connections in numeric format (-anc).
Monitors system-wide socket activity without DNS resolution delay.


## Timers and Advanced Info

### netstat -o

```bash
netstat -o
```

Displays network state timer information (-o).
Provides visibility into socket timeout, keepalive, and retransmission states.

### netstat -to

```bash
netstat -to
```

Shows TCP connections with their active timer states (-to).
Essential for diagnosing stuck sessions or performance-degrading retransmissions.

### netstat -anto

```bash
netstat -anto
```

Displays all numerical TCP connections including active timers (-anto).
High-precision diagnostic view for transport-layer protocol behavior.

### netstat -apo

```bash
netstat -apo
```

Example:

```bash
sudo netstat -apo
```

Shows all sockets with PIDs and timer data (-apo).
Enables deep debugging of process-specific network hang issues.


## Protocol Statistics

### netstat -s

```bash
netstat -s
```

Displays summary statistics for each network protocol (-s).
Aggregates error counts, packet totals, and flow metrics across the stack.

### netstat -su

```bash
netstat -su
```

Shows detailed statistics specifically for the UDP protocol (-su).
Useful for identifying datagram loss or buffer overflow issues in the stack.

### netstat -st

```bash
netstat -st
```

Shows detailed statistics specifically for the TCP protocol (-st).
Enables auditing of connection establishment, segments, and error rates.

### netstat -ss

```bash
netstat -ss
```

Displays maximal protocol statistics including rare counters (-ss).
Deep-dive audit into low-level protocol event and failure statistics.


## Routing Table Display

### netstat -r

```bash
netstat -r
```

Displays the kernel IP routing table (-r).
Visualizes the system's pathing logic for different destination networks.

### netstat -rn

```bash
netstat -rn
```

Displays the routing table with numerical IP addresses (-rn).
Prevents slow DNS lookups when auditing network routing configurations.

### netstat -rF

```bash
netstat -rF
```

Displays the Forwarding Information Base routing table (-rF).
Shows the active forwarding rules used by the kernel for packet transit.

### netstat -rC

```bash
netstat -rC
```

Displays the routing cache for recently used paths (-rC).
Provides visibility into recent destination routing decisions and metrics.

### netstat -rne

```bash
netstat -rne
```

Numerical routing table with extended kernel info (-rne).
Detailed view of paths including MTU, window, and hop characteristics.


## Network Interface Statistics

### netstat -i

```bash
netstat -i
```

Displays a table of all network interfaces and statistics (-i).
Summary of RX/TX packet counts, errors, and drops for each adapter.

### netstat -ie

```bash
netstat -ie
```

Displays interface statistics in a long format (-ie).
Provides detailed hardware configuration and status mirroring ifconfig output.

### netstat -ia

```bash
netstat -ia
```

Shows statistics for all interfaces, including inactive ones (-ia).
Full inventory of physical and virtual networking hardware capabilities.


## Multicast and Broadcast Information

### netstat -g

```bash
netstat -g
```

Displays multicast group membership for local interfaces (-g).
Identifies which multicast groups the host is currently participating in.

### netstat -gn

```bash
netstat -gn
```

Displays multicast groups with numerical interface IPs (-gn).
Clear accounting of multicast participation without resolution delays.


## IPv4 and IPv6 Views

### netstat -4

```bash
netstat -4
```

Filters output to show only IPv4 network connections (-4).
Excludes modern IPv6 data to focus on legacy stack auditing.

### netstat -6

```bash
netstat -6
```

Filters output to show only IPv6 network connections (-6).
Exposes active communications specifically on the modern IPv6 stack.

### netstat -l6

```bash
netstat -l6
```

Displays only listening sockets on the IPv6 family (-l6).
Identifies services exclusively exposed via IPv6 transport protocols.

### netstat -u4

```bash
netstat -u4
```

Displays only UDP connections using IPv4 (-u4).
Targets the User Datagram Protocol specifically on the IPv4 layer.

### netstat -t4n

```bash
netstat -t4n
```

Shows numerical TCP connections for IPv4 only (-t4n).
Highly specific, high-performance view of legacy transport session data.


## Port and Address Filtering

### netstat --numeric-ports

```bash
netstat --numeric-ports
```

Resolves hostnames while keeping port numbers numerical (--numeric-ports).
Provides human-readable targets while maintaining exact technical port identification.

### netstat --numeric-hosts

```bash
netstat --numeric-hosts
```

Numerical IP addresses with service name resolution (--numeric-hosts).
Easily identifies the type of service (e.g. 'http') while keeping IPs exact.

### netstat --numeric-users

```bash
netstat --numeric-users
```

Shows numerical user IDs (UID) instead of names (--numeric-users).
Crucial for shell-based parsing where UID stability is preferred over names.


## Advanced and Combined Real World Analysis

### netstat -A inet

```bash
netstat -A inet
```

Filters connections to the 'inet' (IPv4) address family (-A inet).
Explicitly selects the IPv4 transport layer for detailed socket analysis.

### netstat -A inet6

```bash
netstat -A inet6
```

Filters connections to the 'inet6' (IPv6) address family (-A inet6).
Focuses documentation and analysis on the modern IPv6 transport layer.

### netstat -A unix

```bash
netstat -A unix
```

Explicitly selects only UNIX domain socket family (-A unix).
Perfect for auditing internal local application inter-communication.


## Network Troubleshooting Scenarios

### netstat -tln

```bash
netstat -tln
```

Quick check for open and listening TCP ports (-tln).
Fast standard method for verifying server service availability numerically.

### netstat -uln

```bash
netstat -uln
```

Quick check for open and listening UDP ports (-uln).
Determines which datagram-based services are active on the host.

### netstat -rnC

```bash
netstat -rnC
```

Inspects the routing cache to debug routing decisions (-rnC).
Identifies why specific destination traffic might be taking an unexpected path.

### netstat -ie

```bash
netstat -ie
```

Checks for RX/TX errors or dropped packets on interfaces (-ie).
Fundamental tool for diagnosing physical layer or driver-level throughput issues.


## Security and Incident Response Use Cases

### netstat -anp

```bash
netstat -anp
```

Example:

```bash
sudo netstat -anp
```

Maps connection to PID for malware and intrusion hunting (-anp).
Identifies exact binaries initiating or receiving connections in suspicious patterns.

### netstat -antp

```bash
netstat -antp
```

Example:

```bash
sudo netstat -antp
```

Focuses on TCP connections with PIDs to find backdoors (-antp).
Targets unauthorized remote shells or C2 traffic originating from the OS.

### netstat -anup

```bash
netstat -anup
```

Example:

```bash
sudo netstat -anup
```

Focuses on UDP to find hidden datagram-based trojans (-anup).
Exposes non-stream communication channels used for data exfiltration.

### netstat -lxp

```bash
netstat -lxp
```

Example:

```bash
sudo netstat -lxp
```

Audits local IPC sockets for suspicious local activities (-lxp).
Uncovers internal process masquerading or illegal local pipe usage.


## Blue Team Defensive Monitoring

### netstat -c -ant

```bash
netstat -c -ant
```

Real-time monitor of TCP connections for new inbound probes (-c -ant).
Diagnostic tool for watching active port knocking or connection floods.

### netstat -s | grep -i retrans

```bash
netstat -s | grep -i retrans
```

Example:

```bash
netstat -s
```

Analyzes protocol retransmissions for DoS monitoring (-s).
High numbers of retransmits often indicate a significant network layer bottleneck.

### netstat -g

```bash
netstat -g
```

Verifies host membership in multicast discovery groups (-g).
Checks for participation in protocols like SSDP or mDNS for network leakage.


## Red Team Post Exploitation Validation

### netstat -ant | grep ESTABLISHED

```bash
netstat -ant | grep ESTABLISHED
```

Example:

```bash
netstat -ant
```

Identifies currently active TCP sessions in ESTABLISHED state.
Quickly highlights active infiltration or admin sessions for hijack targeting.

### netstat -rn

```bash
netstat -rn
```

Numerical routing map for internal subnet discovery (-rn).
Builds a logical picture of the network topology for internal pivoting planning.

### netstat -punta

```bash
netstat -punta
```

Example:

```bash
sudo netstat -punta
```

Full-stack enumeration of all protocols and their binaries (-punta).
Maximum intensity reconnaissance of the targets' communication footprint.


## Legacy System Diagnostics

### netstat -M

```bash
netstat -M
```

Displays legacy IP masqueraded connections (-M).
Required for auditing NAT translation states on ancient Linux kernels.

### netstat --symbolic

```bash
netstat --symbolic
```

Alternative syntax for enabling symbolic hostname resolution.
Forces the tool to translate IP addresses into readable domain names.

### netstat --route

```bash
netstat --route
```

Long-form argument for displaying the kernel routing table.
Human-readable equivalent to the -r flag for easier scripting maintenance.

### netstat --interfaces

```bash
netstat --interfaces
```

Long-form argument for displaying the network interface table.
Explicitly calls for adapter-level TX/RX and error packet statistics.


## Advanced and Combined Real World Analysis

### netstat -aneo

```bash
netstat -aneo
```

Numeric view with extended details and connection timers (-aneo).
A deep TCP session analysis view including user identity and inode context.

### netstat -tupln

```bash
netstat -tupln
```

Example:

```bash
sudo netstat -tupln
```

The ultimate standard command for listing all active listeners (-tupln).
Displays all TCP/UDP ports, numeric targets, and the owning process ID.

## Related tools

- [ss](https://terminal.rokibulroni.com/tool/network/ss)
- [ip](https://terminal.rokibulroni.com/tool/linux/ip)
