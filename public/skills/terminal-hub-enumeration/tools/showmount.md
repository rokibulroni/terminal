# showmount

> Queries an NFS server’s mount daemon for exported directories and which clients may mount them.

- Category: Enumeration
- Commands: 20
- Page: https://terminal.rokibulroni.com/tool/enumeration/showmount
- Documentation: https://man7.org/linux/man-pages/man8/showmount.8.html
- Tags: NFS, file shares

## Install

- apt: `sudo apt install nfs-common`

## Basic Export Enumeration

### showmount -e 192.168.1.20

```bash
showmount -e 192.168.1.20
```

Lists exported NFS directories available on the target IP address.

### showmount --exports 192.168.1.20

```bash
showmount --exports 192.168.1.20
```

Uses the long-form flag to list exported directories on the target.


## Hostname and DNS Based Enumeration

### showmount -e nfs.example.local

```bash
showmount -e nfs.example.local
```

Queries the NFS exports of a target server defined by its hostname.


## Client Access and Permission Enumeration

### showmount -a 192.168.1.20

```bash
showmount -a 192.168.1.20
```

Lists all active mount points in the format host:directory.


## Listing Mounted Clients

### showmount --all 192.168.1.20

```bash
showmount --all 192.168.1.20
```

Uses the long-form flag to display both client IP and mounted directory.


## Listing Exported Directories

### showmount -d 192.168.1.20

```bash
showmount -d 192.168.1.20
```

Lists only the directories that are currently mounted by some client.

### showmount --directories 192.168.1.20

```bash
showmount --directories 192.168.1.20
```

Uses the long-form flag to list currently mounted directories without client IPs.


## NFS Server Status Queries

### showmount 192.168.1.20

```bash
showmount 192.168.1.20
```

Runs with default behavior (typically equivalent to -a or list clients) against the target.


## Local Host Enumeration

### showmount -e localhost

```bash
showmount -e localhost
```

Checks the local machine for its own NFS exports.


## General Tool Information

### showmount --help

```bash
showmount --help
```

Displays the help message summarizing usage and flags.

### showmount --version

```bash
showmount --version
```

Outputs the version information of the installed showmount tool.


## IPv6 Target Enumeration

### showmount -e 2001:db8::1

```bash
showmount -e 2001:db8::1
```

Queries NFS exports from a target specified by an IPv6 address.


## Red Team Initial Unix Reconnaissance

### showmount -e 10.10.10.15

```bash
showmount -e 10.10.10.15
```

Identifies potential entry points by listing accessible file shares on a specific target.


## Blue Team Exposure Validation

### showmount -e internal-nfs

```bash
showmount -e internal-nfs
```

Verifies that sensitive exports are not inadvertently exposed to the internal network.


## Incident Response and Assessment

### showmount -a 10.10.10.15

```bash
showmount -a 10.10.10.15
```

Reveals which IP addresses are currently connected to the compromised NFS server.


## Quiet and Script Friendly Output

### showmount --no-headers -e 192.168.1.20

```bash
showmount --no-headers -e 192.168.1.20
```

Suppresses header lines for easier parsing in scripts (if supported by version).


## Advanced Combined Enumeration

### showmount -a nfs-primary.corp

```bash
showmount -a nfs-primary.corp
```

Maps the full relationship of clients to mounts on the primary corporate NFS server.


## Specific Directory Discovery

### showmount -d backup-server

```bash
showmount -d backup-server
```

Checks specifically for directories actively in use on the backup server.


## Export Information with Hostnames

### showmount -e db-server.local

```bash
showmount -e db-server.local
```

Retrieves the export list to determine allowed host subnets or wildcards.


## All Hosts Export Visibility

### showmount -a localhost

```bash
showmount -a localhost
```

Audits the local system to see all incoming NFS connections from the network.

## Related tools

- [NFS enumeration](https://terminal.rokibulroni.com/tool/enumeration/nfs-showmount)
