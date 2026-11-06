# ProxyChains-NG

> Forces any program’s TCP traffic through a chain of SOCKS or HTTP proxies — the standard way to run tools across a SOCKS pivot.

- Category: Pivoting & Tunneling
- Commands: 8
- Page: https://terminal.rokibulroni.com/tool/pivoting/proxychains
- Homepage: https://github.com/rofl0r/proxychains-ng
- Documentation: https://github.com/rofl0r/proxychains-ng
- Tags: pivoting, SOCKS, proxy

## Install

- apt: `sudo apt install proxychains4`
- brew: `brew install proxychains-ng`

## Configuration

### cat /etc/proxychains4.conf

```bash
cat /etc/proxychains4.conf
```

The config file. The proxy list at the bottom defines the chain; add `socks5 127.0.0.1 1080` to use a SOCKS proxy from chisel or SSH.

### set dynamic_chain in the config

```bash
set dynamic_chain in the config
```

Dynamic chain skips dead proxies; strict_chain requires every proxy in order; random_chain picks a random subset.

### set proxy_dns in the config

```bash
set proxy_dns in the config
```

Resolves DNS through the proxy so internal names work and you do not leak lookups.


## Running tools

### proxychains <command>

```bash
proxychains <command>
```

Example:

```bash
proxychains curl http://172.16.0.10
```

Routes a command’s TCP connections through the configured proxy chain.

### proxychains -q <command>

```bash
proxychains -q <command>
```

Example:

```bash
proxychains -q firefox
```

Quiet mode, without the per-connection output.

### proxychains nmap -sT -Pn -n <target>

```bash
proxychains nmap -sT -Pn -n <target>
```

Example:

```bash
proxychains nmap -sT -Pn -n 172.16.0.0/24
```

Scans through the proxy. Use -sT (full connect) and -Pn, since SOCKS cannot carry raw SYN or ICMP.

### proxychains -f <conf> <command>

```bash
proxychains -f <conf> <command>
```

Example:

```bash
proxychains -f ./custom.conf crackmapexec smb 172.16.0.10
```

Uses an alternate config file.


## Tips

### ssh -D <port> <user>@<host> then use socks5 127.0.0.1 <port>

```bash
ssh -D <port> <user>@<host> then use socks5 127.0.0.1 <port>
```

Example:

```bash
ssh -D 1080 user@pivot
```

SSH dynamic forwarding provides a SOCKS proxy that proxychains can use directly.

## Related tools

- [Chisel](https://terminal.rokibulroni.com/tool/pivoting/chisel)
- [Ligolo-ng](https://terminal.rokibulroni.com/tool/pivoting/ligolo-ng)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
