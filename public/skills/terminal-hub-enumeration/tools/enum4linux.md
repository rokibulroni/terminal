# enum4linux

> A wrapper around Samba tools that enumerates users, groups, shares, password policy and OS details from Windows and Samba hosts.

- Category: Enumeration
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/enumeration/enum4linux
- Homepage: https://github.com/CiscoCXSecurity/enum4linux
- Tags: SMB, users, shares

## Install

- apt: `sudo apt install enum4linux`

## Basic Enumeration

### enum4linux 192.168.1.10

```bash
enum4linux 192.168.1.10
```

Performs a standard enumeration scan with default settings against the target IP


## Verbose Mode

### enum4linux -v 192.168.1.10

```bash
enum4linux -v 192.168.1.10
```

Runs the scan in verbose mode to show all underlying commands and detailed output


## Complete Enumeration

### enum4linux -a 192.168.1.10

```bash
enum4linux -a 192.168.1.10
```

Executes 'Do Everything' mode, running all standard enumeration options (-U -S -G -P -r -o -n -i)


## NetBIOS Name Enumeration

### enum4linux -n 192.168.1.10

```bash
enum4linux -n 192.168.1.10
```

Queries NetBIOS names using nmblookup to identify the hostname and workgroup


## OS Information

### enum4linux -o 192.168.1.10

```bash
enum4linux -o 192.168.1.10
```

Fetches operating system information using smbclient


## User Enumeration

### enum4linux -U 192.168.1.10

```bash
enum4linux -U 192.168.1.10
```

Enumerates the userlist from the target system using MSRPC or RAP


## Machine Enumeration

### enum4linux -M 192.168.1.10

```bash
enum4linux -M 192.168.1.10
```

Enumerates the machine list (computer accounts) from the target domain controller


## Share Enumeration

### enum4linux -S 192.168.1.10

```bash
enum4linux -S 192.168.1.10
```

Lists available SMB shares and attempts to check access permissions


## Group Enumeration

### enum4linux -G 192.168.1.10

```bash
enum4linux -G 192.168.1.10
```

Enumerates groups and their member lists from the target system


## Password Policy Enumeration

### enum4linux -P 192.168.1.10

```bash
enum4linux -P 192.168.1.10
```

Retrieves the password policy information such as minimum length and lockout thresholds


## Printer Enumeration

### enum4linux -i 192.168.1.10

```bash
enum4linux -i 192.168.1.10
```

Checks for attached printers and print spooler services


## Detailed Enumeration

### enum4linux -d 192.168.1.10

```bash
enum4linux -d 192.168.1.10
```

Performs a detailed enumeration, often useful for retrieving auto-logon information


## LDAP Enumeration

### enum4linux -l 192.168.1.10

```bash
enum4linux -l 192.168.1.10
```

Attempts to retrieve information via LDAP if the target is a Domain Controller


## RID Cycling

### enum4linux -r 192.168.1.10

```bash
enum4linux -r 192.168.1.10
```

Performs RID cycling to find users by iterating through Relative IDs


## Advanced RID Cycling

### enum4linux -R 500-2000 192.168.1.10

```bash
enum4linux -R 500-2000 192.168.1.10
```

Performs RID cycling using a custom range of IDs from 500 to 2000


## RID Cycling with Known User

### enum4linux -k administrator 192.168.1.10

```bash
enum4linux -k administrator 192.168.1.10
```

Optimizes RID cycling by starting checks relative to a known valid username


## Workgroup Specification

### enum4linux -w CORP 192.168.1.10

```bash
enum4linux -w CORP 192.168.1.10
```

Manually specifies the workgroup or domain name 'CORP' for the connection attempt


## Authenticated Enumeration

### enum4linux -u admin -p password123 192.168.1.10

```bash
enum4linux -u admin -p password123 192.168.1.10
```

Performs enumeration using valid credentials for a specific user


## Authenticated Complete Scan

### enum4linux -a -u admin -p password123 192.168.1.10

```bash
enum4linux -a -u admin -p password123 192.168.1.10
```

Runs a full 'Do Everything' scan authenticated as a valid user


## Authenticated Share Enumeration

### enum4linux -S -u admin -p password123 192.168.1.10

```bash
enum4linux -S -u admin -p password123 192.168.1.10
```

Lists shares that are visible or accessible to the specified authenticated user


## Authenticated User List

### enum4linux -U -u guest -p "" 192.168.1.10

```bash
enum4linux -U -u guest -p "" 192.168.1.10
```

Attempts to list users authenticating as the guest account with an empty password


## Explicit Null Session

### enum4linux -u "" -p "" 192.168.1.10

```bash
enum4linux -u "" -p "" 192.168.1.10
```

Forces an explicit null session attempt with empty username and password


## Target Domain Controller

### enum4linux -a dc.example.local

```bash
enum4linux -a dc.example.local
```

Runs a full scan against a Domain Controller using its DNS hostname


## Quiet Mode

### enum4linux 192.168.1.10 | grep "+"

```bash
enum4linux 192.168.1.10 | grep "+"
```

Runs the tool and filters output to show only section headers and findings


## OS and NetBIOS Only

### enum4linux -o -n 192.168.1.10

```bash
enum4linux -o -n 192.168.1.10
```

Performs a lightweight scan checking only OS version and NetBIOS information


## Users and Groups Only

### enum4linux -U -G 192.168.1.10

```bash
enum4linux -U -G 192.168.1.10
```

Focuses enumeration solely on discovering users and group memberships


## Shares and Policy Only

### enum4linux -S -P 192.168.1.10

```bash
enum4linux -S -P 192.168.1.10
```

Targeted scan to find file shares and password policies without aggressive user cycling


## Authenticated RID Cycling

### enum4linux -r -u user -p pass 192.168.1.10

```bash
enum4linux -r -u user -p pass 192.168.1.10
```

Uses valid credentials to perform RID cycling, often revealing more than null sessions


## Large Range RID Cycling

### enum4linux -R 500-10000 192.168.1.10

```bash
enum4linux -R 500-10000 192.168.1.10
```

Aggressive RID cycling over a large range to find hidden accounts on older systems


## SMB Version Detection (Implicit)

### enum4linux -o 10.10.10.5

```bash
enum4linux -o 10.10.10.5
```

Uses the OS check to infer the SMB version based on the reported operating system


## Service Identification

### enum4linux -S 10.10.10.5

```bash
enum4linux -S 10.10.10.5
```

Identifies roles like IPC$ (Inter-Process Communication) during share enumeration


## Red Team Initial Recon

### enum4linux -a -u "" -p "" 192.168.1.10

```bash
enum4linux -a -u "" -p "" 192.168.1.10
```

Quickly checks if a target allows full enumeration via anonymous null sessions


## Blue Team Exposure Validation

### enum4linux -a 10.0.0.5

```bash
enum4linux -a 10.0.0.5
```

Used by defenders to verify if a server is leaking sensitive data to unauthenticated users


## Logging Output

### enum4linux -a 192.168.1.10 > enum_results.txt

```bash
enum4linux -a 192.168.1.10 > enum_results.txt
```

Saves the full enumeration output to a text file for reporting


## Verbose Authenticated Scan

### enum4linux -v -u admin -p pass 192.168.1.10

```bash
enum4linux -v -u admin -p pass 192.168.1.10
```

Debug mode with authentication to troubleshoot why specific checks might be failing


## Workgroup and Users

### enum4linux -w WORKGROUP -U 192.168.1.10

```bash
enum4linux -w WORKGROUP -U 192.168.1.10
```

Targets a specific workgroup context while enumerating the user list


## Check Default Admin

### enum4linux -k Administrator -r 192.168.1.10

```bash
enum4linux -k Administrator -r 192.168.1.10
```

Specifically checks the Administrator account status via RID cycling logic


## Legacy Mode RID

### enum4linux -K 500 -L 1000 192.168.1.10

```bash
enum4linux -K 500 -L 1000 192.168.1.10
```

Uses legacy flags K (start) and L (last) for RID cycling on older script versions


## Incident Response Check

### enum4linux -S -u compromised_user -p pass 192.168.1.10

```bash
enum4linux -S -u compromised_user -p pass 192.168.1.10
```

Simulates what a compromised user account can access on the file shares


## Domain Info Only

### enum4linux -w DOMAIN -o 192.168.1.10

```bash
enum4linux -w DOMAIN -o 192.168.1.10
```

Retrieves OS and domain controller information for a specific domain target


## Share List with Workgroup

### enum4linux -w WORKGROUP -S 192.168.1.10

```bash
enum4linux -w WORKGROUP -S 192.168.1.10
```

Lists shares available to the specific workgroup context


## Printers and OS

### enum4linux -i -o 192.168.1.10

```bash
enum4linux -i -o 192.168.1.10
```

Identifies printer services and the underlying OS version simultaneously


## Groups and Password Policy

### enum4linux -G -P 192.168.1.10

```bash
enum4linux -G -P 192.168.1.10
```

Maps out security groups and the governing password complexity rules


## Authenticated Detailed View

### enum4linux -d -u admin -p pass 192.168.1.10

```bash
enum4linux -d -u admin -p pass 192.168.1.10
```

Gets detailed configuration info including auto-logon registry keys using credentials


## Automation Friendly

### enum4linux -a 192.168.1.10 2>&1 | tee scan.log

```bash
enum4linux -a 192.168.1.10 2>&1 | tee scan.log
```

Runs a full scan and pipes both stdout and stderr to a file for automated processing

## Related tools

- [smbclient](https://terminal.rokibulroni.com/tool/enumeration/smbclient)
- [rpcclient](https://terminal.rokibulroni.com/tool/enumeration/rpcclient)
- [CrackMapExec (enumeration)](https://terminal.rokibulroni.com/tool/enumeration/crackmapexec-enum)
