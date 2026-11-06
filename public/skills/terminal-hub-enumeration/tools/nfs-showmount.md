# NFS enumeration

> Enumerating and mounting NFS exports: list shares, check their access controls and mount them to inspect files and permissions.

- Category: Enumeration
- Commands: 25
- Page: https://terminal.rokibulroni.com/tool/enumeration/nfs-showmount
- Documentation: https://man7.org/linux/man-pages/man8/showmount.8.html
- Tags: NFS, file shares

## Install

- apt: `sudo apt install nfs-common`

## Basic Export Enumeration

### showmount -e 192.168.1.20

```bash
showmount -e 192.168.1.20
```

Lists the NFS export list (shared directories) available on the target IPv4 address.

### showmount --exports 10.10.10.15

```bash
showmount --exports 10.10.10.15
```

Uses the long-form flag to request the list of exported filesystems from the target.


## Hostname Based Enumeration

### showmount -e nfs.example.local

```bash
showmount -e nfs.example.local
```

Queries the NFS exports from a target identified by its DNS hostname or FQDN.


## Local Host Enumeration

### showmount -e

```bash
showmount -e
```

Queries the local host's rpc.mountd to see what the local machine is currently exporting.


## Local Host Enumeration (Explicit)

### showmount -e localhost

```bash
showmount -e localhost
```

Explicitly targets the localhost loopback interface to verify local NFS export configurations.


## Client Access and Permission Enumeration

### showmount -a 192.168.1.20

```bash
showmount -a 192.168.1.20
```

Lists all mount points in the form 'host:dir' to see which clients are currently connected.

### showmount --all 10.10.10.15

```bash
showmount --all 10.10.10.15
```

Uses the long-form flag to display both the client hostname and the directory they have mounted.


## Blue Team Exposure Validation

### showmount -a nfs-server.corp.internal

```bash
showmount -a nfs-server.corp.internal
```

Checks a specific corporate server to identify unauthorized active client connections.


## Listing Mounted Directories

### showmount -d 192.168.1.20

```bash
showmount -d 192.168.1.20
```

Lists only the directories that are currently mounted by remote clients, excluding client IPs.

### showmount --directories 10.10.10.15

```bash
showmount --directories 10.10.10.15
```

Uses the long-form flag to list only the filesystem paths currently in use by clients.


## Quiet and Script Friendly Output

### showmount -e --no-headers 192.168.1.20

```bash
showmount -e --no-headers 192.168.1.20
```

Lists exports without the descriptive header line, ideal for parsing in bash scripts.

### showmount -a --no-headers 10.10.10.15

```bash
showmount -a --no-headers 10.10.10.15
```

Lists active client mounts without headers for easy text processing or piping to awk.

### showmount -d --no-headers 192.168.1.50

```bash
showmount -d --no-headers 192.168.1.50
```

Lists actively mounted directories without headers to quickly identify hot data paths.


## IPv6 Target Enumeration

### showmount -e 2001:db8::1

```bash
showmount -e 2001:db8::1
```

Queries NFS exports on a target using its IPv6 address.


## IPv6 Client Enumeration

### showmount -a 2001:db8::1

```bash
showmount -a 2001:db8::1
```

Lists active clients and mount points on an IPv6-enabled NFS server.


## Red Team Initial Reconnaissance

### showmount -e --no-headers target-dmz.local

```bash
showmount -e --no-headers target-dmz.local
```

Stealthier initial check for exports on a DMZ target to feed directly into mount tools.


## Red Team Active User Reconnaissance

### showmount -a --no-headers 192.168.100.10

```bash
showmount -a --no-headers 192.168.100.10
```

Identifies which IP addresses are actively using the share to target specific users.


## Incident Response Assessment

### showmount -a 127.0.0.1

```bash
showmount -a 127.0.0.1
```

Run locally on a compromised server to identify if data is actively being exfiltrated via NFS.


## Tool Verification and Help

### showmount --help

```bash
showmount --help
```

Displays the help message to verify supported flags and syntax.


## Tool Verification and Version

### showmount --version

```bash
showmount --version
```

Checks the installed version of nfs-utils/showmount for compatibility or bug checking.


## Advanced Combined Enumeration (Exports)

### showmount --exports --no-headers 172.16.1.5

```bash
showmount --exports --no-headers 172.16.1.5
```

Combines long-form export flag with no-headers for clear, verbose-syntax scripting.


## Advanced Combined Enumeration (All)

### showmount --all --no-headers 172.16.1.5

```bash
showmount --all --no-headers 172.16.1.5
```

Combines long-form all flag with no-headers to audit connections programmatically.


## Advanced Combined Enumeration (Directories)

### showmount --directories --no-headers 172.16.1.5

```bash
showmount --directories --no-headers 172.16.1.5
```

Combines long-form directory flag with no-headers to map active file system usage.


## Blue Team Hardening Validation

### showmount -e 10.0.0.5

```bash
showmount -e 10.0.0.5
```

Verifies that sensitive directories are not being exported to the world (everyone).

### showmount -a 10.0.0.5

```bash
showmount -a 10.0.0.5
```

Verifies that only authorized hosts are currently mounted to the NFS shares.

## Related tools

- [showmount](https://terminal.rokibulroni.com/tool/enumeration/showmount)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
