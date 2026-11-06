# sshuttle

> A transparent proxy that tunnels a whole subnet over a plain SSH connection, with DNS support and no special software on the remote host.

- Category: Pivoting & Tunneling
- Commands: 7
- Page: https://terminal.rokibulroni.com/tool/pivoting/sshuttle
- Homepage: https://github.com/sshuttle/sshuttle
- Documentation: https://sshuttle.readthedocs.io
- Tags: pivoting, VPN, SSH, tunneling

## Install

- apt: `sudo apt install sshuttle`
- brew: `brew install sshuttle`
- pipx: `pipx install sshuttle`

## Basics

### sshuttle -r <user>@<host> <subnet>

```bash
sshuttle -r <user>@<host> <subnet>
```

Example:

```bash
sshuttle -r user@pivot 172.16.0.0/24
```

Transparently routes a subnet through SSH — like a poor man’s VPN, no config on the remote side.

### sshuttle -r <user>@<host> 0/0

```bash
sshuttle -r <user>@<host> 0/0
```

Example:

```bash
sshuttle -r user@pivot 0/0
```

Routes all traffic through the host.

### sshuttle -r <user>@<host> --dns <subnet>

```bash
sshuttle -r <user>@<host> --dns <subnet>
```

Example:

```bash
sshuttle -r user@pivot --dns 172.16.0.0/24
```

Also sends DNS queries through the tunnel so internal names resolve.

### sshuttle -r <user>@<host> <subnet> -x <exclude>

```bash
sshuttle -r <user>@<host> <subnet> -x <exclude>
```

Example:

```bash
sshuttle -r user@pivot 172.16.0.0/24 -x 172.16.0.1
```

Excludes an address, such as the gateway, from the tunnel.


## Options

### sshuttle -r <user>@<host> <subnet> --ssh-cmd "ssh -i <key>"

```bash
sshuttle -r <user>@<host> <subnet> --ssh-cmd "ssh -i <key>"
```

Example:

```bash
sshuttle -r user@pivot 172.16.0.0/24 --ssh-cmd "ssh -i id_ed25519"
```

Passes extra SSH options such as a key file.

### sshuttle -r <user>@<host> <subnet> -v

```bash
sshuttle -r <user>@<host> <subnet> -v
```

Example:

```bash
sshuttle -r user@pivot 172.16.0.0/24 -vv
```

Verbose output for debugging the tunnel.

### sshuttle -r <user>@<host> <subnet> -D

```bash
sshuttle -r <user>@<host> <subnet> -D
```

Example:

```bash
sshuttle -r user@pivot 172.16.0.0/24 -D
```

Runs as a daemon in the background.

## Related tools

- [Chisel](https://terminal.rokibulroni.com/tool/pivoting/chisel)
- [Ligolo-ng](https://terminal.rokibulroni.com/tool/pivoting/ligolo-ng)
- [ProxyChains-NG](https://terminal.rokibulroni.com/tool/pivoting/proxychains)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
