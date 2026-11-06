# ss

> The modern Linux socket statistics tool: lists listening ports, established connections and the processes behind them, faster than netstat.

- Category: Network
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/network/ss
- Documentation: https://man7.org/linux/man-pages/man8/ss.8.html
- Tags: connections, listening ports, sockets

## Install

- apt: `sudo apt install iproute2`

## Basic Socket Listing

### ss

```bash
ss
```

Displays a list of all active non-listening network connections.
Provides a rapid overview of currently occupied socket streams.

### ss -s

```bash
ss -s
```

Prints a high-level summary of system-wide socket statistics (-s).
Shows a breakdown of active, listening, and closed sockets by protocol.

### ss -a

```bash
ss -a
```

Displays all sockets, including both listening and established states (-a).
Full visualization of the system's entire active and passive network footprint.

### ss -l

```bash
ss -l
```

Lists only sockets currently in a listening state (-l).
Identifies all services waiting for incoming connection requests on the host.


## Numerical and Resolved Output

### ss -n

```bash
ss -n
```

Displays all addresses and port numbers in numerical format (-n).
Accelerates output by skipping time-consuming DNS and service name resolution.

### ss -r

```bash
ss -r
```

Attempts to resolve numeric IPs and ports to readable names (-r).
Provides a more intuitive view of connections for human analysis.


## TCP Socket Inspection

### ss -t

```bash
ss -t
```

Filters the output to display only TCP protocol sockets (-t).
Limits analysis to connection-oriented Transmission Control Protocol sessions.


## UDP Socket Inspection

### ss -u

```bash
ss -u
```

Filters the output to display only UDP protocol sockets (-u).
Displays active and recently used User Datagram Protocol datagram streams.


## Raw Socket Inspection

### ss -w

```bash
ss -w
```

Displays information about active RAW sockets (-w).
Enables visibility of low-level protocol access often used by diagnostic tools.


## Unix Socket Inspection

### ss -x

```bash
ss -x
```

Lists active UNIX domain sockets used for local IPC (-x).
Provides visibility into internal communication between local system processes.


## IPv4 and IPv6 Sockets

### ss -4

```bash
ss -4
```

Filters output to show only IPv4 address family sockets (-4).
Excludes modern IPv6 data to focus strictly on legacy transport layer auditing.

### ss -6

```bash
ss -6
```

Filters output to show only IPv6 address family sockets (-6).
Exposes active communications specifically on the modern IPv6 transport stack.


## Listening Sockets

### ss -lt

```bash
ss -lt
```

Lists all TCP sockets currently in a listening state (-lt).
Focuses on available TCP-based server services currently active on the host.

### ss -lu

```bash
ss -lu
```

Lists all UDP sockets that are actively receptive to packets (-lu).
Identifies open UDP ports that are ready to process incoming datagrams.

### ss -lx

```bash
ss -lx
```

Lists all listening UNIX domain sockets for local services (-lx).
Identifies active IPC endpoints waiting for internal application connections.


## Process and PID Association

### ss -p

```bash
ss -p
```

Shows the PID and process name for each active socket (-p).
Critically links all network communications to their initiating system processes.

### ss -lp

```bash
ss -lp
```

Lists listening sockets with their associated process information (-lp).
Identifies which software binaries are responsible for each open port.


## Blue Team Defensive Monitoring

### ss -lnt

```bash
ss -lnt
```

Displays listening TCP sockets with numerical ports (-lnt).
Standard method for quickly auditing open server ports without DNS latency.

### ss -lntp

```bash
ss -lntp
```

Displays listening TCP sockets with PIDs and numeric ports (-lntp).
Essential admin command for identifying and auditing every local server service.

### ss -lnup

```bash
ss -lnup
```

Displays listening UDP sockets with PIDs and numeric ports (-lnup).
Enables auditing of datagram-based services and their corresponding binaries.


## Extended and Detailed Output

### ss -e

```bash
ss -e
```

Shows extended socket info including owner UID and inode (-e).
Provides security context and file-system reference for each network socket.


## Timing and Statistics Output

### ss -o

```bash
ss -o
```

Displays network timer information for each socket (-o).
Includes keepalive and retransmission states for protocol health diagnosis.


## Memory Usage and Queue Analysis

### ss -m

```bash
ss -m
```

Displays detailed memory usage for each network socket (-m).
Enables identification of socket-level resource exhaustion or performance issues.


## TCP States and Flags Inspection

### ss -i

```bash
ss -i
```

Displays internal TCP protocol metrics including RTT and cwnd (-i).
Deep diagnostic tool for analyzing transport layer efficiency and congestion.


## Extended and Detailed Output

### ss -emp

```bash
ss -emp
```

Combines extended info, memory stats, and process IDs (-emp).
The definitive view for deep-dive technical auditing of individual sockets.


## Socket State Filtering

### ss state established

```bash
ss state established
```

Filters output to only show successfully ESTABLISHED connections.
Focuses analysis on active, live communication sessions between hosts.

### ss state connected

```bash
ss state connected
```

Filters for all sockets in any successfully connected state.
Excludes passive listeners to focus on outgoing and established flows.

### ss state listening

```bash
ss state listening
```

Specifically filters the list for sockets in the LISTENING state.
Enables systematic auditing of all available network-accessible local services.

### ss -t state time-wait

```bash
ss -t state time-wait
```

Lists TCP sockets currently in the TIME-WAIT state.
Identifies connections that have recently closed but are still in the final timeout.

### ss -t state close-wait

```bash
ss -t state close-wait
```

Lists TCP sockets stuck in the CLOSE-WAIT state.
Often indicates an application failure to properly terminate its network sessions.

### ss -t state fin-wait-1

```bash
ss -t state fin-wait-1
```

Shows sockets in FIN-WAIT-1, waiting for remote acknowledgment of a close.
Useful for diagnosing half-closed or hung session termination sequences.

### ss -t state syn-sent

```bash
ss -t state syn-sent
```

Displays sockets currently attempting to initiate a new connection (SYN sent).
Identifies active outbound connection attempts and potential timeouts.

### ss -t state syn-recv

```bash
ss -t state syn-recv
```

Displays sockets processing an incoming connection request (SYN received).
Identifies current high rates of connection establishment or potential SYN flooding.

### ss -4 state closing

```bash
ss -4 state closing
```

Filters output for IPv4 sockets in the CLOSING state.
Used to identify legacy protocol sockets currently in the process of shutting down.


## Port and Address Filtering

### ss dport = :80

```bash
ss dport = :80
```

Filters sockets where the remote destination port is 80 (HTTP).
Isolates all active web browsing or outgoing HTTP API traffic.

### ss sport = :22

```bash
ss sport = :22
```

Filters connections where the local source port is 22 (SSH).
Enables auditing of incoming remote administrative access sessions.

### ss dport = :ssh

```bash
ss dport = :ssh
```

Uses service name 'ssh' instead of numeric port 22 for filtering.
Provides a more readable approach to service-based socket auditing.

### ss dport > :1024

```bash
ss dport > :1024
```

Lists connections using non-privileged destination ports (> 1024).
Identifies traffic to dynamic or non-standard server services.

### ss sport < :1024

```bash
ss sport < :1024
```

Lists connections originating from local privileged ports (0-1023).
Monitors traffic from authenticated system services or administrative tasks.

### ss dport >= :5000

```bash
ss dport >= :5000
```

Filters for connections targeting ports 5000 and higher.
Narrows focus to modern web frameworks or specialized custom server listeners.

### ss sport le :100

```bash
ss sport le :100
```

Filters for local source ports less than or equal to 100.
Focuses audit on core foundational system services like DNS, HTTP, or FTP.

### ss dst 192.168.1.1

```bash
ss dst 192.168.1.1
```

Filters for all sockets specifically destined for the IP 192.168.1.1.
Isolates communication with a particular network host or gateway.

### ss src 10.0.0.5

```bash
ss src 10.0.0.5
```

Filters for sessions originating from a specific local interface IP.
Determines which local ethernet adapter or virtual IP is handling specific flows.

### ss dst 192.168.1.0/24

```bash
ss dst 192.168.1.0/24
```

Filters connections for an entire CIDR-defined destination subnet.
Enables broad auditing of traffic to a specific department or network segment.

### ss src 127.0.0.0/8

```bash
ss src 127.0.0.0/8
```

Filters for traffic originating from the local loopback subnet.
Makes all internal, on-host service communications visible for audit.


## Advanced and Combined Real World Analysis

### ss -nt state established

```bash
ss -nt state established
```

Shows established TCP connections numerically for fast processing.
Standard high-performance method for watching live system communication.

### ss -nt '( dport = :80 or dport = :443 )'

```bash
ss -nt '( dport = :80 or dport = :443 )'
```

Uses logical OR to filter for both HTTP and HTTPS TCP connections.
Provides a consolidated view of all active web-traffic transport sessions.

### ss -nt dst :443 state established

```bash
ss -nt dst :443 state established
```

Filters specifically for established connections to remote port 443.
Identifies all and only live encrypted web or API session data.

### ss -nt dport != :22

```bash
ss -nt dport != :22
```

Displays all TCP connections except those on the SSH port (22).
Filters out administrative noise to focus on other active network services.

### ss -lp src :8080

```bash
ss -lp src :8080
```

Reveals the exact process listening on local port 8080.
Directly identifies the software application responsible for a specific port.


## Security and Incident Response Use Cases

### ss -lntpZ

```bash
ss -lntpZ
```

Lists listening ports with PIDs and SELinux security contexts (-lntpZ).
Critical for auditing system security policy and mandatory access controls.

### ss -p dst 1.1.1.1

```bash
ss -p dst 1.1.1.1
```

Identifies the local process communicating with a specific remote IP.
Essential for pinpointing which application is sending data to a suspect host.

### ss -x src /tmp/.X11-unix/*

```bash
ss -x src /tmp/.X11-unix/*
```

Filters for Unix domain sockets matching a specific system path.
Audits local process communication related to the X11 graphics system.


## Real Time Monitoring and Watching

### ss -E

```bash
ss -E
```

Continuously monitors and displays new socket events in real-time (-E).
Ideal for detecting rapid port usage changes or malicious connection spikes.

### ss -E grep tcp

```bash
ss -E grep tcp
```

Live stream monitor for TCP socket creation and termination events.
Provides a scrolling terminal view of every new TCP handshake on the system.


## Memory Usage and Queue Analysis

### ss -tm

```bash
ss -tm
```

Displays memory allocation statistics specifically for TCP sockets.
Identifies potential buffer leaks or resource-heavy transport sessions.

### ss -ltm

```bash
ss -ltm
```

Shows detailed memory footprints for all listening TCP services.
Enables resource auditing of server-side applications and their network buffers.


## TCP States and Flags Inspection

### ss -ti

```bash
ss -ti
```

Analyzes internal TCP metrics to diagnose latency and throughput issues.
Exposes RTT and congestion window data for transport-layer optimization.

### ss -tie

```bash
ss -tie
```

Combines extended attributes with internal protocol metrics (-tie).
Maximal diagnostic view for auditing both security context and protocol health.


## Interface Based Filtering

### ss -I eth0

```bash
ss -I eth0
```

Filters output for sockets strictly bound to the 'eth0' network interface.
Isolates analysis to traffic traversing a single specific hardware adapter.

### ss dev eth0

```bash
ss dev eth0
```

Uses device-based filtering to show connections on adapter 'eth0'.
Alternate syntax for isolating network traffic by physical or virtual interface.


## Advanced and Combined Real World Analysis

### ss -a -A tcp

```bash
ss -a -A tcp
```

Uses the family flag to select all active TCP sockets in the system.
Comprehensive view of all Transmission Control Protocol states.

### ss -a -A udp

```bash
ss -a -A udp
```

Uses the family flag to select all active UDP sockets in the system.
Full visualization of User Datagram Protocol usage across the host.

### ss -A unix

```bash
ss -A unix
```

Explicitly selects only Unix domain socket address family members.
Focuses reconnaissance on local platform-specific inter-process flow.

### ss -A packet

```bash
ss -A packet
```

Displays raw packet sockets used by sniffers and diagnostic tools.
Identifies applications performing direct link-layer network interaction.

### ss -A netlink

```bash
ss -A netlink
```

Shows Netlink sockets for internal kernel-to-user space messaging.
Enables visibility into system configuration and routing update channels.

### ss --vsock

```bash
ss --vsock
```

Displays VSOCK sockets for host-to-guest communication in VMs.
Identifies internal transport links between the hypervisor and virtual machines.

### ss --xdp

```bash
ss --xdp
```

Displays eXpress Data Path (XDP) network sockets.
Enables visibility into high-performance, kernel-bypass packet processing.


## Network Troubleshooting Scenarios

### ss -t state established '( dport = :http or sport = :http )'

```bash
ss -t state established '( dport = :http or sport = :http )'
```

Finds all active HTTP sessions, regardless of flow direction.
Identifies both hosted web services and outgoing web client connections.

### ss -o state established '( dport = :ssh or sport = :ssh )'

```bash
ss -o state established '( dport = :ssh or sport = :ssh )'
```

Checks SSH connections including timers for keepalive monitoring.
Identified sessions that are idle but maintained by protocol keepalive signals.

### ss -4 state time-wait src 10.0.0.5

```bash
ss -4 state time-wait src 10.0.0.5
```

Audits TIME-WAIT state IPv4 sockets on a specific interface address.
Diagnoses potential source port exhaustion issues for a particular IP.


## Quiet and Summary Views

### ss -H

```bash
ss -H
```

Suppresses output header lines to facilitate automated parsing (-H).
Provides a clean, data-only stream for secondary script processing.

### ss -H -t -n

```bash
ss -H -t -n
```

Outputs raw numeric TCP data without headers for downstream processing.
Optimized format for piped commands like grep, awk, or custom loggers.


## Process and PID Association

### ss -pt state established

```bash
ss -pt state established
```

Lists established TCP connections and their owning software processes.
Identifies exact binaries responsible for all currently active transport sessions.


## Security and Incident Response Use Cases

### ss -K dst 192.168.1.100

```bash
ss -K dst 192.168.1.100
```

Forcibly terminates all network connections to a specific remote host (-K).
Immediate mitigation tool for severing links to compromised or hostile IPs.

### ss -K dport = :4444

```bash
ss -K dport = :4444
```

Forcibly kills connections on the specified suspicious port (-K).
Standard response tool for immediately severing reverse-shell communication links.


## Red Team Post Exploitation Validation

### ss -lntp | grep -v 127.0.0.1

```bash
ss -lntp | grep -v 127.0.0.1
```

Identifies services exposed to the network by excluding localhost.
Provides a filtered view of the true external attack surface of the system.

### ss -plu

```bash
ss -plu
```

Checks for listening UDP services and their owning process names.
Exposes datagram-based entry points that may hide from standard TCP audits.

### ss -pw -a

```bash
ss -pw -a
```

Checks for all active raw sockets and their associated PIDs.
Identifies potential packet sniffers or unauthorized low-level protocols.


## JSON and Script Friendly Output

### ss -j

```bash
ss -j
```

Outputs all socket data in structured JSON format (-j).
Enables seamless handoff of system network state to modern automation tools.

### ss -lj

```bash
ss -lj
```

Outputs listening sockets in a machine-parseable JSON format (-lj).
Standardizes service inventory collection for large-scale infrastructure auditing.


## Advanced and Combined Real World Analysis

### ss -o state connected

```bash
ss -o state connected
```

Lists all connected sockets with integrated timestamp and timer data.
Provides a temporal context for analyzing session longevity and health.

### ss -4 -t -n state established

```bash
ss -4 -t -n state established
```

Precise filter for established legacy IPv4 TCP sessions numerically.
High-speed method for monitoring traditional server-client communication flows.

### ss -D /tmp/ss.dump

```bash
ss -D /tmp/ss.dump
```

Dumps current system-wide socket state to a binary file (-D).
Enables capturing a high-fidelity snapshot for future forensic playback.

### ss -F /tmp/ss.dump

```bash
ss -F /tmp/ss.dump
```

Restores and displays socket data from a previous binary dump (-F).
Enables detailed time-travel analysis of historical network states.

### ss -f inet

```bash
ss -f inet
```

Forces address family to IPv4 for the current filter task.
Ensures subsequent commands only process legacy internet protocol data.

### ss -f inet6

```bash
ss -f inet6
```

Forces address family to IPv6 for the current filter task.
Limits output strictly to modern next-generation IP transport data.

### ss -f link

```bash
ss -f link
```

Displays all Link Layer (MAC layer) sockets in the system.
Provides visibility into the absolute lowest level of network stack interface.

### ss -f vsock

```bash
ss -f vsock
```

Filters for virtual machine guest-to-host VSOCK sockets.
Exposes internal virtualization-layer transport channels for audit.

### ss -t -a -Z

```bash
ss -t -a -Z
```

Lists all TCP sockets including SELinux security labels (-a -Z).
Essential for auditing mandatory access control policies on network objects.


## Network Troubleshooting Scenarios

### ss -b

```bash
ss -b
```

Show socket-specific BPF (Berkeley Packet Filter) code (-b).
Reveals low-level packet processing logic and potential filtering bypasses.


## Advanced and Combined Real World Analysis

### ss -M

```bash
ss -M
```

Alias for dumping binary socket statistics to a local file (-M).
Provides a rapid method for capturing raw transport layer state data.


## Extended and Detailed Output

### ss -O

```bash
ss -O
```

Alias for printing keepalive and retransmission timer data (-O).
Identifies protocol-level timeouts and connection health metrics.


## Process and PID Association

### ss -N netns1

```bash
ss -N netns1
```

Queries sockets within a specific non-default network namespace.
Enables auditing of containerized or isolated network environments.


## Advanced and Combined Real World Analysis

### ss state synchronized

```bash
ss state synchronized
```

Filters for synchronized states (ESTABLISHED, SYN-RECV, FIN-WAIT).
Identifies sessions that have successfully completed a handshake phase.

### ss state bucket

```bash
ss state bucket
```

Filters for 'bucket' minisockets like TIME-WAIT and SYN-RECV.
Optimizes analysis of short-lived or transitional connection states.

### ss state big

```bash
ss state big
```

Filters for standard (large) sockets that are not transitional.
Concentrates audit on sustained, bidirectional communication streams.


## Security and Incident Response Use Cases

### ss -tlp sport = :3306

```bash
ss -tlp sport = :3306
```

Verifies if a database process is listening on terminal port 3306.
Directly confirms availability and process-ownership of the MySQL service.

### ss -at '( dport = :23 or sport = :23 )'

```bash
ss -at '( dport = :23 or sport = :23 )'
```

Audits the system for active insecure Telnet communication flows.
Identifies legacy, plain-text administration sessions that should be secured.


## Advanced and Combined Real World Analysis

### ss -temoi -4 state established

```bash
ss -temoi -4 state established
```

The ultimate detailed view for established IPv4 TCP transport units.
Consolidates memory, timers, PIDs, and internal metrics in one snapshot.

## Related tools

- [netstat](https://terminal.rokibulroni.com/tool/network/netstat)
- [ip](https://terminal.rokibulroni.com/tool/linux/ip)
