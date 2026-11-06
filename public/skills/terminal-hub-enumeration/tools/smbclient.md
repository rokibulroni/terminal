# smbclient

> An FTP-like client for SMB/CIFS shares: list shares, browse, upload and download files, with or without credentials.

- Category: Enumeration
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/enumeration/smbclient
- Homepage: https://www.samba.org
- Documentation: https://www.samba.org/samba/docs/current/man-html/smbclient.1.html
- Tags: SMB, file shares

## Install

- apt: `sudo apt install smbclient`
- brew: `brew install samba`

## Share Enumeration

### smbclient -L //192.168.1.10 -N

```bash
smbclient -L //192.168.1.10 -N
```

Lists available shares on the target using a null session (no authentication).

### smbclient -L //192.168.1.10 -U guest%

```bash
smbclient -L //192.168.1.10 -U guest%
```

Lists shares using the guest account with a blank password.

### smbclient -L //192.168.1.10 -U username

```bash
smbclient -L //192.168.1.10 -U username
```

Example:

```bash
smbclient -L //192.168.1.10 -U administrator
```

Lists shares prompting for a password for the specified user.


## Basic Connection

### smbclient //192.168.1.10/share -N

```bash
smbclient //192.168.1.10/share -N
```

Example:

```bash
smbclient //192.168.1.10/public -N
```

Connects to a specific share using a null session.

### smbclient //192.168.1.10/share -U username%password

```bash
smbclient //192.168.1.10/share -U username%password
```

Example:

```bash
smbclient //192.168.1.10/c$ -U admin%SecurePass123
```

Connects to a share providing both username and password inline.


## Domain Authentication

### smbclient //dc.example.local/share -W DOMAIN -U user

```bash
smbclient //dc.example.local/share -W DOMAIN -U user
```

Example:

```bash
smbclient //192.168.1.5/files -W CORP -U john.doe
```

Connects to a share authenticating against a specific Windows domain or workgroup.


## Authentication

### smbclient //192.168.1.10/share -A authfile.txt

```bash
smbclient //192.168.1.10/share -A authfile.txt
```

Example:

```bash
smbclient //192.168.1.10/finance -A creds.txt
```

Uses a file containing username, password, and domain for authentication to avoid CLI logging.


## Kerberos Authentication

### smbclient -k //dc.example.local/share

```bash
smbclient -k //dc.example.local/share
```

Example:

```bash
smbclient -k //fileserver.corp.local/data
```

Connects using an existing Kerberos ticket (ccache) instead of a password.

### smbclient -k -L //dc.example.local

```bash
smbclient -k -L //dc.example.local
```

Example:

```bash
smbclient -k -L //dc.corp.local
```

Lists shares using Kerberos authentication.


## Connection Options

### smbclient //192.168.1.10/share -p 445

```bash
smbclient //192.168.1.10/share -p 445
```

Forces the connection to use TCP port 445 explicitly.

### smbclient //192.168.1.10/share -p 139

```bash
smbclient //192.168.1.10/share -p 139
```

Forces the connection to use NetBIOS over TCP port 139.


## Target Specification

### smbclient //hostname/share -I 192.168.1.10

```bash
smbclient //hostname/share -I 192.168.1.10
```

Example:

```bash
smbclient //fileserver/docs -I 192.168.1.50 -U user
```

Connects to a hostname but overrides the destination IP address (useful for DNS spoofing/testing).


## NetBIOS

### smbclient //192.168.1.10/share -n NETBIOS_NAME

```bash
smbclient //192.168.1.10/share -n NETBIOS_NAME
```

Example:

```bash
smbclient //192.168.1.10/share -n KALI_BOX -U user
```

Sets the NetBIOS name of the client source machine during the handshake.


## Protocol Selection

### smbclient //192.168.1.10/share -m SMB2

```bash
smbclient //192.168.1.10/share -m SMB2
```

Example:

```bash
smbclient //192.168.1.10/legacy -m SMB2 -U user
```

Forces the client to use the SMB2 protocol version max.

### smbclient //192.168.1.10/share -m SMB3

```bash
smbclient //192.168.1.10/share -m SMB3
```

Example:

```bash
smbclient //192.168.1.10/secure -m SMB3 -U user
```

Forces the client to use the SMB3 protocol version max (often required for newer Windows).

### smbclient //192.168.1.10/share -m NT1

```bash
smbclient //192.168.1.10/share -m NT1
```

Example:

```bash
smbclient //192.168.1.10/ancient -m NT1 -U user
```

Forces the use of NT1 (SMB1), useful for targeting legacy Windows XP or Server 2003 systems.


## Interactive Mode

### smbclient //192.168.1.10/share

```bash
smbclient //192.168.1.10/share
```

Example:

```bash
smbclient //192.168.1.10/share -U user
```

Starts an interactive shell session where you can type commands like ls, get, and put.


## Command Execution

### smbclient //192.168.1.10/share -c 'ls'

```bash
smbclient //192.168.1.10/share -c 'ls'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'ls'
```

Connects, lists the files in the root directory, and disconnects immediately.


## File Retrieval

### smbclient //192.168.1.10/share -c 'get sensitive.docx'

```bash
smbclient //192.168.1.10/share -c 'get sensitive.docx'
```

Example:

```bash
smbclient //192.168.1.10/hr -U user -c 'get payroll.xls'
```

Connects and downloads a specific single file non-interactively.


## File Upload

### smbclient //192.168.1.10/share -c 'put payload.exe'

```bash
smbclient //192.168.1.10/share -c 'put payload.exe'
```

Example:

```bash
smbclient //192.168.1.10/wwwroot -U user -c 'put shell.aspx'
```

Connects and uploads a file to the remote share.


## Directory Management

### smbclient //192.168.1.10/share -c 'mkdir tempdir'

```bash
smbclient //192.168.1.10/share -c 'mkdir tempdir'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'mkdir hidden'
```

Creates a new directory on the remote share.


## Recursive Operations

### smbclient //192.168.1.10/share -c 'recurse; ls'

```bash
smbclient //192.168.1.10/share -c 'recurse; ls'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'recurse; ls'
```

Toggles recursion to ON and lists all files in the share including subdirectories.


## Recursive Download

### smbclient //192.168.1.10/share -c 'prompt OFF; recurse ON; mget *'

```bash
smbclient //192.168.1.10/share -c 'prompt OFF; recurse ON; mget *'
```

Example:

```bash
smbclient //192.168.1.10/backup -U user -c 'prompt OFF; recurse ON; mget *'
```

Downloads the entire contents of a share recursively without asking for confirmation per file.


## File Deletion

### smbclient //192.168.1.10/share -c 'del oldfile.txt'

```bash
smbclient //192.168.1.10/share -c 'del oldfile.txt'
```

Example:

```bash
smbclient //192.168.1.10/logs -U user -c 'del error.log'
```

Deletes a specific file from the remote share.

### smbclient //192.168.1.10/share -c 'rmdir old_folder'

```bash
smbclient //192.168.1.10/share -c 'rmdir old_folder'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'rmdir temp'
```

Removes an empty directory from the remote share.


## File Reading

### smbclient //192.168.1.10/share -c 'more readme.txt'

```bash
smbclient //192.168.1.10/share -c 'more readme.txt'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'more config.ini'
```

Displays the contents of a remote file directly to stdout.


## Archive Operations

### smbclient //192.168.1.10/share -T c backup.tar *

```bash
smbclient //192.168.1.10/share -T c backup.tar *
```

Example:

```bash
smbclient //192.168.1.10/docs -U user -T c docs_backup.tar *
```

Creates a local TAR archive of all files on the remote share directly.

### smbclient //192.168.1.10/share -T x restore.tar

```bash
smbclient //192.168.1.10/share -T x restore.tar
```

Example:

```bash
smbclient //192.168.1.10/docs -U user -T x local_backup.tar
```

Extracts a local TAR archive and uploads the files to the remote share.


## Debug & Logging

### smbclient //192.168.1.10/share -d 5

```bash
smbclient //192.168.1.10/share -d 5
```

Example:

```bash
smbclient //192.168.1.10/share -U user -d 5
```

Increases the debug level to 5, showing detailed protocol handshake and error information.


## Connection Control

### smbclient //192.168.1.10/share -t 60

```bash
smbclient //192.168.1.10/share -t 60
```

Example:

```bash
smbclient //192.168.1.10/large_share -U user -t 120
```

Sets the connection timeout in seconds (useful for slow links or large transfers).


## Misc Options

### smbclient //192.168.1.10/share -g

```bash
smbclient //192.168.1.10/share -g
```

Example:

```bash
smbclient -L //192.168.1.10 -U user -g
```

Uses grepable output format, useful for parsing results in scripts.


## Messaging

### smbclient -M NETBIOS_NAME

```bash
smbclient -M NETBIOS_NAME
```

Example:

```bash
smbclient -M WIN10-TARGET -U user
```

Sends a WinPopup message to the target machine (requires Messenger service).


## IPv6 Connection

### smbclient //ipv6-address/share -U user

```bash
smbclient //ipv6-address/share -U user
```

Example:

```bash
smbclient //2001:db8::1/share -U user
```

Connects to an SMB share hosted on an IPv6 address.


## System Info

### smbclient //192.168.1.10/IPC$ -c 'q'

```bash
smbclient //192.168.1.10/IPC$ -c 'q'
```

Example:

```bash
smbclient //192.168.1.10/IPC$ -N -c 'q'
```

Connects to IPC$ (Inter-Process Communication) merely to validate access rights or null session capability.


## Permissions

### smbclient //192.168.1.10/share -c 'getfacl filename'

```bash
smbclient //192.168.1.10/share -c 'getfacl filename'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'getfacl confidential.txt'
```

Displays the Access Control List (ACL) and permissions for a specific file (if server supports UNIX extensions).

### smbclient //192.168.1.10/share -c 'stat filename'

```bash
smbclient //192.168.1.10/share -c 'stat filename'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'stat report.pdf'
```

Shows file attributes, timestamps, and size information.


## File Operations

### smbclient //192.168.1.10/share -c 'rename old new'

```bash
smbclient //192.168.1.10/share -c 'rename old new'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'rename draft.txt final.txt'
```

Renames a file on the remote server.


## Advanced Config

### smbclient //192.168.1.10/share -O 'socket options'

```bash
smbclient //192.168.1.10/share -O 'socket options'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -O 'TCP_NODELAY SO_KEEPALIVE'
```

Sets TCP socket options for performance tuning or stability.


## Scripting

### smbclient //192.168.1.10/share -E

```bash
smbclient //192.168.1.10/share -E
```

Example:

```bash
smbclient //192.168.1.10/share -U user -E -c 'ls'
```

Writes messages to stderr instead of stdout, keeping stdout clean for data piping.


## Directory Navigation

### smbclient //192.168.1.10/share -D directory

```bash
smbclient //192.168.1.10/share -D directory
```

Example:

```bash
smbclient //192.168.1.10/share -U user -D 'Documents/Finance'
```

Starts the session directly inside a specific subdirectory within the share.


## IO Control

### smbclient //192.168.1.10/share -b size

```bash
smbclient //192.168.1.10/share -b size
```

Example:

```bash
smbclient //192.168.1.10/share -U user -b 16384
```

Changes the transmit/send buffer size (useful for performance tuning on specific networks).


## Config File

### smbclient -s /etc/samba/smb.conf

```bash
smbclient -s /etc/samba/smb.conf
```

Example:

```bash
smbclient -L //192.168.1.10 -s ./local-smb.conf
```

Uses a specific local Samba configuration file instead of the default.


## Interactive

### smbclient //192.168.1.10/share -c 'history'

```bash
smbclient //192.168.1.10/share -c 'history'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'history'
```

Displays the command history within the smbclient context (mostly useful in interactive mode).


## File Integrity

### smbclient //192.168.1.10/share -c 'md5 filename'

```bash
smbclient //192.168.1.10/share -c 'md5 filename'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'md5 image.iso'
```

Calculates MD5 hash of a remote file (if supported by server/client extensions).


## Red Team

### smbclient //192.168.1.10/C$ -U user

```bash
smbclient //192.168.1.10/C$ -U user
```

Example:

```bash
smbclient //192.168.1.10/C$ -U Administrator%Password
```

Connects to the administrative C$ share, typically allowing full filesystem access.

### smbclient //192.168.1.10/ADMIN$ -U user

```bash
smbclient //192.168.1.10/ADMIN$ -U user
```

Example:

```bash
smbclient //192.168.1.10/ADMIN$ -U Administrator
```

Connects to the ADMIN$ share, often used for remote execution and PsExec-style attacks.


## Path parsing

### smbclient \\192.168.1.10\share -U user

```bash
smbclient \\192.168.1.10\share -U user
```

Connects using Windows-style backslashes (must be escaped in shell).


## Quiet Mode

### smbclient //192.168.1.10/share -q

```bash
smbclient //192.168.1.10/share -q
```

Example:

```bash
smbclient //192.168.1.10/share -U user -q
```

Suppresses informational messages, useful for scripts expecting clean output.


## Advanced

### smbclient //192.168.1.10/share -c 'posix'

```bash
smbclient //192.168.1.10/share -c 'posix'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'posix'
```

Turns on POSIX path handling to allow case-sensitive filenames if server supports it.

### smbclient //192.168.1.10/share -c 'case_sensitive'

```bash
smbclient //192.168.1.10/share -c 'case_sensitive'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'case_sensitive'
```

Toggles case sensitivity for file matching.


## Printing

### smbclient //192.168.1.10/print$ -c 'print file.pdf'

```bash
smbclient //192.168.1.10/print$ -c 'print file.pdf'
```

Example:

```bash
smbclient //192.168.1.10/print$ -U user -c 'print document.pdf'
```

Uploads and queues a file to be printed on a remote printer share.


## Offline

### smbclient //192.168.1.10/share -c 'logon'

```bash
smbclient //192.168.1.10/share -c 'logon'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'logon'
```

Establishes a new logon context (re-authenticates) within the session.


## Resolve Order

### smbclient //hostname/share -R lmhosts

```bash
smbclient //hostname/share -R lmhosts
```

Example:

```bash
smbclient //server/share -R wins -U user
```

Sets the name resolution order (e.g., lmhosts, host, wins, bcast).


## Encryption

### smbclient -e //192.168.1.10/share

```bash
smbclient -e //192.168.1.10/share
```

Example:

```bash
smbclient -e //192.168.1.10/private -U user
```

Forces SMB encryption (SMB3) for the connection, protecting data on the wire.


## Advanced

### smbclient //192.168.1.10/share -c 'l'

```bash
smbclient //192.168.1.10/share -c 'l'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'l'
```

Alternative command for 'ls' (list) inside the interactive shell.


## File Ops

### smbclient //192.168.1.10/share -c 'du'

```bash
smbclient //192.168.1.10/share -c 'du'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'du'
```

Displays disk usage for the current share.


## Batch

### echo 'ls' | smbclient //192.168.1.10/share

```bash
echo 'ls' | smbclient //192.168.1.10/share
```

Example:

```bash
echo 'ls' | smbclient //192.168.1.10/share -N
```

Pipes commands directly into smbclient from stdin (alternative to -c).


## Enumeration

### smbclient -L 192.168.1.10 -I 192.168.1.10

```bash
smbclient -L 192.168.1.10 -I 192.168.1.10
```

Example:

```bash
smbclient -L 192.168.1.10 -I 192.168.1.10 -N
```

Enumerates shares when the NetBIOS name is unknown or identical to IP.


## Interactive

### smbclient //192.168.1.10/share -c 'volume'

```bash
smbclient //192.168.1.10/share -c 'volume'
```

Example:

```bash
smbclient //192.168.1.10/share -U user -c 'volume'
```

Prints the volume serial number of the remote share.


## Archive

### smbclient //192.168.1.10/share -D folder -T c archive.tar

```bash
smbclient //192.168.1.10/share -D folder -T c archive.tar
```

Example:

```bash
smbclient //192.168.1.10/share -U user -D 'sub/folder' -T c backup.tar
```

Changes directory to a subfolder first, then creates a tar archive of its contents.

## Related tools

- [rpcclient](https://terminal.rokibulroni.com/tool/enumeration/rpcclient)
- [enum4linux](https://terminal.rokibulroni.com/tool/enumeration/enum4linux)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
