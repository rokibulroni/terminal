# rpcclient

> Samba’s MS-RPC client. Queries domain users, groups, password policies and SIDs over SMB, often with a null or low-privilege session.

- Category: Enumeration
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/enumeration/rpcclient
- Homepage: https://www.samba.org
- Documentation: https://www.samba.org/samba/docs/current/man-html/rpcclient.1.html
- Tags: MS-RPC, SMB, Active Directory

## Install

- apt: `sudo apt install smbclient`

## Basic Connection

### rpcclient -U "" 192.168.1.10

```bash
rpcclient -U "" 192.168.1.10
```

Connects to the target RPC service using a null session without authentication.

### rpcclient -U "" -N 192.168.1.10

```bash
rpcclient -U "" -N 192.168.1.10
```

Connects using a null session and explicitly suppresses the password prompt.

### rpcclient -U "%" 192.168.1.10

```bash
rpcclient -U "%" 192.168.1.10
```

Attempts to connect with a blank username and blank password shorthand.

### rpcclient -U "user" 192.168.1.10

```bash
rpcclient -U "user" 192.168.1.10
```

Example:

```bash
rpcclient -U "administrator" 192.168.1.10
```

Connects specifying a username and prompts interactively for the password.

### rpcclient -U "user%password" 192.168.1.10

```bash
rpcclient -U "user%password" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%Password123" 192.168.1.10
```

Connects using a username and password provided inline for automation.


## Authentication

### rpcclient -W WORKGROUP -U "user%pass" 192.168.1.10

```bash
rpcclient -W WORKGROUP -U "user%pass" 192.168.1.10
```

Example:

```bash
rpcclient -W CORP -U "jsmith%Summer2023" 10.10.10.5
```

Authenticates to a specific workgroup or domain controller.

### rpcclient -k 192.168.1.10

```bash
rpcclient -k 192.168.1.10
```

Example:

```bash
rpcclient -k dc.example.local
```

Uses Kerberos authentication instead of NTLM (requires valid ticket).

### rpcclient --pw-nt-hash "hash" -U "user" 192.168.1.10

```bash
rpcclient --pw-nt-hash "hash" -U "user" 192.168.1.10
```

Example:

```bash
rpcclient --pw-nt-hash "aad3b435b51404eeaad3b435b51404ee:8846f7eaee8fb117ad06bdd830b7586c" -U "Administrator" 192.168.1.10
```

Performs a Pass-the-Hash attack by authenticating with an NT hash.


## Transport Configuration

### rpcclient -I 192.168.1.10 target_netbios_name

```bash
rpcclient -I 192.168.1.10 target_netbios_name
```

Example:

```bash
rpcclient -I 192.168.1.10 FILESERVER01
```

Forces the destination IP address while resolving a specific NetBIOS name.

### rpcclient -p 445 192.168.1.10

```bash
rpcclient -p 445 192.168.1.10
```

Connects explicitly over SMB port 445 (TCP).

### rpcclient -p 139 192.168.1.10

```bash
rpcclient -p 139 192.168.1.10
```

Connects explicitly over NetBIOS Session port 139 (TCP).


## Security Options

### rpcclient -S on 192.168.1.10

```bash
rpcclient -S on 192.168.1.10
```

Enforces SMB signing state to 'on' for the connection.

### rpcclient -P 192.168.1.10

```bash
rpcclient -P 192.168.1.10
```

Requests SMB sealing (encryption) for the connection.


## Batch Mode

### rpcclient -c "command" 192.168.1.10

```bash
rpcclient -c "command" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "srvinfo" 192.168.1.10
```

Executes a single RPC command non-interactively and exits.

### rpcclient -c "cmd1; cmd2" 192.168.1.10

```bash
rpcclient -c "cmd1; cmd2" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "srvinfo; netshareenum" 192.168.1.10
```

Executes multiple RPC commands in sequence separated by semicolons.


## Server Information

### rpcclient -c "srvinfo" 192.168.1.10

```bash
rpcclient -c "srvinfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "srvinfo" 192.168.1.10
```

Retrieves basic server information including OS version and server type.


## OS and Server Information

### rpcclient -c "srvinfo 101" 192.168.1.10

```bash
rpcclient -c "srvinfo 101" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "srvinfo 101" 192.168.1.10
```

Retrieves Level 101 server information for detailed versioning.


## Shares and Resources

### rpcclient -c "netshareenum" 192.168.1.10

```bash
rpcclient -c "netshareenum" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "netshareenum" 192.168.1.10
```

Enumerates available network shares on the target using Level 1 info.

### rpcclient -c "netshareenumall" 192.168.1.10

```bash
rpcclient -c "netshareenumall" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "netshareenumall" 192.168.1.10
```

Enumerates all shares including administrative hidden shares (C$, IPC$, etc).

### rpcclient -c "netsharegetinfo ShareName" 192.168.1.10

```bash
rpcclient -c "netsharegetinfo ShareName" 192.168.1.10
```

Example:

```bash
rpcclient -U "user%pass" -c "netsharegetinfo IPC$" 192.168.1.10
```

Retrieves detailed information about a specific share.


## Session Enumeration

### rpcclient -c "netsessenum" 192.168.1.10

```bash
rpcclient -c "netsessenum" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "netsessenum" 192.168.1.10
```

Lists active sessions established by users on the target machine.


## File Enumeration

### rpcclient -c "netfileenum" 192.168.1.10

```bash
rpcclient -c "netfileenum" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "netfileenum" 192.168.1.10
```

Lists files currently opened by remote users.


## Disk Enumeration

### rpcclient -c "netdiskenum" 192.168.1.10

```bash
rpcclient -c "netdiskenum" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "netdiskenum" 192.168.1.10
```

Enumerates physical disk drives associated with shares.


## Domain Information

### rpcclient -c "dsroledominfo" 192.168.1.10

```bash
rpcclient -c "dsroledominfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "dsroledominfo" 192.168.1.10
```

Displays the role of the server within the domain (e.g., PDC, Backup, Member).


## LSA Enumeration

### rpcclient -c "lsaquery" 192.168.1.10

```bash
rpcclient -c "lsaquery" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "lsaquery" 192.168.1.10
```

Queries the LSA policy handle to retrieve the Domain SID and Name.


## SID Lookup

### rpcclient -c "lookupnames username" 192.168.1.10

```bash
rpcclient -c "lookupnames username" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "lookupnames administrator" 192.168.1.10
```

Resolves a username to its corresponding SID (Security Identifier).

### rpcclient -c "lookupsids SID" 192.168.1.10

```bash
rpcclient -c "lookupsids SID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "lookupsids S-1-5-21-12345-67890-500" 192.168.1.10
```

Resolves a specific SID back to its username or group name.


## Privilege Enumeration

### rpcclient -c "enumprivs" 192.168.1.10

```bash
rpcclient -c "enumprivs" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumprivs" 192.168.1.10
```

Enumerates all privileges supported by the system's LSA.


## Trust Enumeration

### rpcclient -c "enumtrusts" 192.168.1.10

```bash
rpcclient -c "enumtrusts" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumtrusts" 192.168.1.10
```

Lists trusted domains and their SIDs.


## Account Rights

### rpcclient -c "enumacctrights" 192.168.1.10

```bash
rpcclient -c "enumacctrights" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumacctrights" 192.168.1.10
```

Enumerates privileges assigned to accounts.


## Context Information

### rpcclient -c "getusername" 192.168.1.10

```bash
rpcclient -c "getusername" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getusername" 192.168.1.10
```

Returns the username of the current authenticated session context.


## User Enumeration

### rpcclient -c "enumdomusers" 192.168.1.10

```bash
rpcclient -c "enumdomusers" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumdomusers" 192.168.1.10
```

Lists all domain users with their RIDs.

### rpcclient -c "querydispinfo" 192.168.1.10

```bash
rpcclient -c "querydispinfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querydispinfo" 192.168.1.10
```

Lists users with full names and descriptions (often works when enumdomusers fails).

### rpcclient -c "querydispinfo2" 192.168.1.10

```bash
rpcclient -c "querydispinfo2" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querydispinfo2" 192.168.1.10
```

Alternative query info level 2 for user enumeration.

### rpcclient -c "querydispinfo3" 192.168.1.10

```bash
rpcclient -c "querydispinfo3" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querydispinfo3" 192.168.1.10
```

Alternative query info level 3 for user enumeration.


## Group Enumeration

### rpcclient -c "enumdomgroups" 192.168.1.10

```bash
rpcclient -c "enumdomgroups" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumdomgroups" 192.168.1.10
```

Lists all global domain groups and their RIDs.

### rpcclient -c "enumalsgroups domain" 192.168.1.10

```bash
rpcclient -c "enumalsgroups domain" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumalsgroups builtin" 192.168.1.10
```

Enumerates alias (local) groups, often used with 'builtin' to find Administrators.


## User Details

### rpcclient -c "queryuser RID" 192.168.1.10

```bash
rpcclient -c "queryuser RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "queryuser 500" 192.168.1.10
```

Retrieves detailed account information (logon time, expiration, path) for a user RID.

### rpcclient -c "queryusergroups RID" 192.168.1.10

```bash
rpcclient -c "queryusergroups RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "queryusergroups 500" 192.168.1.10
```

Lists the groups that a specific user RID belongs to.


## Group Details

### rpcclient -c "querygroup RID" 192.168.1.10

```bash
rpcclient -c "querygroup RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querygroup 512" 192.168.1.10
```

Retrieves detailed information about a specific global group.


## Group Membership

### rpcclient -c "querygroupmem RID" 192.168.1.10

```bash
rpcclient -c "querygroupmem RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querygroupmem 512" 192.168.1.10
```

Lists the members (RIDs) of a specific global domain group.

### rpcclient -c "queryaliasmem RID" 192.168.1.10

```bash
rpcclient -c "queryaliasmem RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "queryaliasmem 544" 192.168.1.10
```

Lists the members of a local alias group (e.g., RID 544 for Administrators).


## Alias Details

### rpcclient -c "queryaliasinfo RID" 192.168.1.10

```bash
rpcclient -c "queryaliasinfo RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "queryaliasinfo 544" 192.168.1.10
```

Retrieves information about a specific alias group.


## Password Policy

### rpcclient -c "getdompwinfo" 192.168.1.10

```bash
rpcclient -c "getdompwinfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getdompwinfo" 192.168.1.10
```

Retrieves the domain password policy (complexity, min length, history).

### rpcclient -c "getusrdompwinfo RID" 192.168.1.10

```bash
rpcclient -c "getusrdompwinfo RID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getusrdompwinfo 500" 192.168.1.10
```

Retrieves password policy information specific to a user RID.


## Printer Enumeration

### rpcclient -c "enumprinters" 192.168.1.10

```bash
rpcclient -c "enumprinters" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumprinters" 192.168.1.10
```

Enumerates printers installed on the remote system.

### rpcclient -c "enumports" 192.168.1.10

```bash
rpcclient -c "enumports" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumports" 192.168.1.10
```

Enumerates printer ports.

### rpcclient -c "enumdrivers" 192.168.1.10

```bash
rpcclient -c "enumdrivers" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumdrivers" 192.168.1.10
```

Enumerates installed printer drivers.

### rpcclient -c "enumjobs" 192.168.1.10

```bash
rpcclient -c "enumjobs" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumjobs" 192.168.1.10
```

Enumerates current print jobs in the queue.

### rpcclient -c "getprinter PrinterName" 192.168.1.10

```bash
rpcclient -c "getprinter PrinterName" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getprinter 'Microsoft XPS Document Writer'" 192.168.1.10
```

Retrieves specific configuration details for a named printer.


## DFS Enumeration

### rpcclient -c "dfsquery" 192.168.1.10

```bash
rpcclient -c "dfsquery" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "dfsquery" 192.168.1.10
```

Queries Distributed File System (DFS) information.


## Service Enumeration

### rpcclient -c "enumservices" 192.168.1.10

```bash
rpcclient -c "enumservices" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumservices" 192.168.1.10
```

Enumerates services running on the remote host (requires specific access).


## Logon Information

### rpcclient -c "netlogon" 192.168.1.10

```bash
rpcclient -c "netlogon" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "netlogon" 192.168.1.10
```

Attempts to trigger a netlogon event.

### rpcclient -c "logonctrl2" 192.168.1.10

```bash
rpcclient -c "logonctrl2" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "logonctrl2" 192.168.1.10
```

Retrieves logon control information using version 2 protocol.


## Domain Info

### rpcclient -c "querydominfo" 192.168.1.10

```bash
rpcclient -c "querydominfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querydominfo" 192.168.1.10
```

Queries general domain information.


## Red Team / Account Creation

### rpcclient -c "createdomuser username" 192.168.1.10

```bash
rpcclient -c "createdomuser username" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "createdomuser hacker" 192.168.1.10
```

Creates a new domain user (requires administrative privileges).

### rpcclient -c "deletedomuser username" 192.168.1.10

```bash
rpcclient -c "deletedomuser username" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "deletedomuser hacker" 192.168.1.10
```

Deletes a domain user (requires administrative privileges).


## Red Team / Groups

### rpcclient -c "adddomgroupmem GroupRID UserRID" 192.168.1.10

```bash
rpcclient -c "adddomgroupmem GroupRID UserRID" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "adddomgroupmem 512 1001" 192.168.1.10
```

Adds a user RID to a domain group RID (requires privileges).

### rpcclient -c "deldomgroupmem GroupRID UserRID" 192.168.1.10

```bash
rpcclient -c "deldomgroupmem GroupRID UserRID" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "deldomgroupmem 512 1001" 192.168.1.10
```

Removes a user RID from a domain group RID (requires privileges).


## Red Team / Passwords

### rpcclient -c "setuserinfo2 RID 24 'password'" 192.168.1.10

```bash
rpcclient -c "setuserinfo2 RID 24 'password'" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "setuserinfo2 1001 24 'P@ssw0rd!'" 192.168.1.10
```

Resets a user's password directly via RPC (Info level 24).


## RID Cycling

### rpcclient -c "lookupsids S-1-5-21-X-X-500; lookupsids S-1-5-21-X-X-501" 192.168.1.10

```bash
rpcclient -c "lookupsids S-1-5-21-X-X-500; lookupsids S-1-5-21-X-X-501" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "lookupsids S-1-5-21-123-456-500; lookupsids S-1-5-21-123-456-501" 192.168.1.10
```

Manual RID cycling example checking common RIDs 500 and 501.


## Security Testing

### rpcclient -c "samlogon username" 192.168.1.10

```bash
rpcclient -c "samlogon username" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "samlogon administrator" 192.168.1.10
```

Attempts a SAM logon to test account validity.


## Time Information

### rpcclient -c "nettime" 192.168.1.10

```bash
rpcclient -c "nettime" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "nettime" 192.168.1.10
```

Queries the remote server's system time.


## Registry (Simulated)

### rpcclient -c "shutdown" 192.168.1.10

```bash
rpcclient -c "shutdown" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "shutdown" 192.168.1.10
```

Attempts to shut down the remote server via RPC (rarely works, dangerous).


## Debug Mode

### rpcclient -d 3 -U "" -N 192.168.1.10

```bash
rpcclient -d 3 -U "" -N 192.168.1.10
```

Runs rpcclient with debug level 3 for troubleshooting connection issues.

### rpcclient -d 10 -U "" 192.168.1.10

```bash
rpcclient -d 10 -U "" 192.168.1.10
```

Runs with maximum debug verbosity (Level 10) for deep packet inspection.


## Scripting

### rpcclient -c "querydispinfo" 192.168.1.10 | grep "Name:"

```bash
rpcclient -c "querydispinfo" 192.168.1.10 | grep "Name:"
```

Example:

```bash
rpcclient -U "" -N -c "querydispinfo" 192.168.1.10 | grep "Name:"
```

Example of piping rpcclient output for clean user list extraction.


## LSA Secrets

### rpcclient -c "getprimarydomain" 192.168.1.10

```bash
rpcclient -c "getprimarydomain" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getprimarydomain" 192.168.1.10
```

Retrieves the primary domain name of the target.


## Configuration

### rpcclient -s /etc/samba/smb.conf 192.168.1.10

```bash
rpcclient -s /etc/samba/smb.conf 192.168.1.10
```

Example:

```bash
rpcclient -s /tmp/custom_smb.conf -U "" 192.168.1.10
```

Uses a custom Samba configuration file for the client connection.


## Domain Info

### rpcclient -c "dsenumdomtrusts" 192.168.1.10

```bash
rpcclient -c "dsenumdomtrusts" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "dsenumdomtrusts" 192.168.1.10
```

Enumerates domain trusts using Directory Service RPC calls.


## Timeout Configuration

### rpcclient -t 10 -U "" 192.168.1.10

```bash
rpcclient -t 10 -U "" 192.168.1.10
```

Sets the connection timeout to 10 seconds.


## Advanced

### rpcclient -c "getremotetod" 192.168.1.10

```bash
rpcclient -c "getremotetod" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getremotetod" 192.168.1.10
```

Gets the Time of Day (TOD) from the remote server.


## User Details

### rpcclient -c "queryuseraliases BuiltinRID DomainSID" 192.168.1.10

```bash
rpcclient -c "queryuseraliases BuiltinRID DomainSID" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "queryuseraliases 544 S-1-5-21-12345" 192.168.1.10
```

Queries which aliases a specific user SID belongs to.


## LSA Info

### rpcclient -c "lsaquerysecobj" 192.168.1.10

```bash
rpcclient -c "lsaquerysecobj" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "lsaquerysecobj" 192.168.1.10
```

Queries LSA security objects.


## Group Creation

### rpcclient -c "createdomgroup GroupName" 192.168.1.10

```bash
rpcclient -c "createdomgroup GroupName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "createdomgroup NewGroup" 192.168.1.10
```

Creates a new domain group (requires privileges).


## Group Deletion

### rpcclient -c "deletedomgroup GroupName" 192.168.1.10

```bash
rpcclient -c "deletedomgroup GroupName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "deletedomgroup NewGroup" 192.168.1.10
```

Deletes a domain group (requires privileges).


## Alias Creation

### rpcclient -c "createalias AliasName" 192.168.1.10

```bash
rpcclient -c "createalias AliasName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "createalias LocalAdmin2" 192.168.1.10
```

Creates a new alias (local group) on the target.


## Alias Deletion

### rpcclient -c "deletealias AliasName" 192.168.1.10

```bash
rpcclient -c "deletealias AliasName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "deletealias LocalAdmin2" 192.168.1.10
```

Deletes an alias (local group) from the target.


## Red Team / Alias Member

### rpcclient -c "addaliasmem AliasRID UserSID" 192.168.1.10

```bash
rpcclient -c "addaliasmem AliasRID UserSID" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "addaliasmem 544 S-1-5-21-12345-1001" 192.168.1.10
```

Adds a user to a local alias group (e.g. adding a user to Administrators).

### rpcclient -c "delaliasmem AliasRID UserSID" 192.168.1.10

```bash
rpcclient -c "delaliasmem AliasRID UserSID" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "delaliasmem 544 S-1-5-21-12345-1001" 192.168.1.10
```

Removes a user from a local alias group.


## RPC Endpoint Mapper

### rpcclient -c "epmapper" 192.168.1.10

```bash
rpcclient -c "epmapper" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "epmapper" 192.168.1.10
```

Enumerates endpoints from the Endpoint Mapper (EPM).


## Monitor

### rpcclient -c "enummonitor" 192.168.1.10

```bash
rpcclient -c "enummonitor" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enummonitor" 192.168.1.10
```

Enumerates print monitors.


## Forms

### rpcclient -c "enumforms" 192.168.1.10

```bash
rpcclient -c "enumforms" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumforms" 192.168.1.10
```

Enumerates printer forms.


## Service Info

### rpcclient -c "queryservice ServiceName" 192.168.1.10

```bash
rpcclient -c "queryservice ServiceName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "queryservice Spooler" 192.168.1.10
```

Queries the status and config of a specific service.


## Service Control

### rpcclient -c "stopservice ServiceName" 192.168.1.10

```bash
rpcclient -c "stopservice ServiceName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "stopservice Spooler" 192.168.1.10
```

Stops a remote service (requires Admin).

### rpcclient -c "startservice ServiceName" 192.168.1.10

```bash
rpcclient -c "startservice ServiceName" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "startservice Spooler" 192.168.1.10
```

Starts a remote service (requires Admin).


## DFS

### rpcclient -c "dfsgetinfo Share" 192.168.1.10

```bash
rpcclient -c "dfsgetinfo Share" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "dfsgetinfo \\server\share" 192.168.1.10
```

Gets info about a DFS share.


## User Rights

### rpcclient -c "lsaaddacctrights SID Right" 192.168.1.10

```bash
rpcclient -c "lsaaddacctrights SID Right" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "lsaaddacctrights S-1-5-21-1234 SeShutdownPrivilege" 192.168.1.10
```

Grants a specific privilege/right to a SID.

### rpcclient -c "lsaremoveacctrights SID Right" 192.168.1.10

```bash
rpcclient -c "lsaremoveacctrights SID Right" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "lsaremoveacctrights S-1-5-21-1234 SeShutdownPrivilege" 192.168.1.10
```

Revokes a specific privilege/right from a SID.


## LSA Enum

### rpcclient -c "lsalookupprivvalue Privilege" 192.168.1.10

```bash
rpcclient -c "lsalookupprivvalue Privilege" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "lsalookupprivvalue SeShutdownPrivilege" 192.168.1.10
```

Looks up the LUID value for a named privilege.


## Registry (WinReg)

### rpcclient -c "enumkey KeyHandle" 192.168.1.10

```bash
rpcclient -c "enumkey KeyHandle" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "enumkey 10" 192.168.1.10
```

Enumerates registry keys from an open handle (advanced, requires openkey).


## Network Interface

### rpcclient -c "netr_ServerGetInfo" 192.168.1.10

```bash
rpcclient -c "netr_ServerGetInfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "netr_ServerGetInfo" 192.168.1.10
```

Raw RPC call to get server info (similar to srvinfo but via netr).


## Blue Team Validation

### rpcclient -c "getdompwinfo" 192.168.1.10

```bash
rpcclient -c "getdompwinfo" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getdompwinfo" 192.168.1.10
```

Validation: Checks if the password policy is too weak (e.g., no complexity).

### rpcclient -c "enumdomusers" 192.168.1.10

```bash
rpcclient -c "enumdomusers" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "enumdomusers" 192.168.1.10
```

Validation: Checks if Null Session allows dumping the entire user list.


## Combined Enumeration

### rpcclient -c "querydominfo; enumdomusers; enumdomgroups" 192.168.1.10

```bash
rpcclient -c "querydominfo; enumdomusers; enumdomgroups" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "querydominfo; enumdomusers; enumdomgroups" 192.168.1.10
```

Runs a rapid triage sequence to get domain info, users, and groups in one go.


## Interactive Shell

### rpcclient -U "user" 192.168.1.10

```bash
rpcclient -U "user" 192.168.1.10
```

Example:

```bash
rpcclient -U "administrator" 192.168.1.10
```

Drops into the interactive rpcclient shell for manual exploration.


## Printer Driver

### rpcclient -c "getdriver DriverName" 192.168.1.10

```bash
rpcclient -c "getdriver DriverName" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "getdriver 'HP LaserJet'" 192.168.1.10
```

Gets info about a specific printer driver.


## DFS Enum

### rpcclient -c "dfsnumber" 192.168.1.10

```bash
rpcclient -c "dfsnumber" 192.168.1.10
```

Example:

```bash
rpcclient -U "" -N -c "dfsnumber" 192.168.1.10
```

Returns the number of DFS shares available.


## FSRVP (Shadow Copy)

### rpcclient -c "fss_is_path_supported SharePath" 192.168.1.10

```bash
rpcclient -c "fss_is_path_supported SharePath" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "fss_is_path_supported \\server\share" 192.168.1.10
```

Checks if a share supports Shadow Copy (FSRVP).


## Incident Response

### rpcclient -c "netsessenum; netfileenum" 192.168.1.10

```bash
rpcclient -c "netsessenum; netfileenum" 192.168.1.10
```

Example:

```bash
rpcclient -U "admin%pass" -c "netsessenum; netfileenum" 192.168.1.10
```

Snapshots active sessions and open files to identify suspicious activity.

## Related tools

- [enum4linux](https://terminal.rokibulroni.com/tool/enumeration/enum4linux)
- [smbclient](https://terminal.rokibulroni.com/tool/enumeration/smbclient)
