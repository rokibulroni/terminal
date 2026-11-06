# Medusa

> A speedy, parallel, modular login brute-forcer — an alternative to Hydra with thread-per-host design.

- Category: Credentials
- Commands: 55
- Page: https://terminal.rokibulroni.com/tool/credentials/medusa
- Homepage: https://github.com/jmk-foofus/medusa
- Tags: brute force, online attacks

## Install

- apt: `sudo apt install medusa`
- brew: `brew install medusa`

## Basic Syntax & Help

### medusa -d

```bash
medusa -d
```

Lists all available authentication modules installed with Medusa

### medusa -M ssh -q

```bash
medusa -M ssh -q
```

Displays usage options and specific flags for the SSH module


## Basic Credential Testing

### medusa -h 127.0.0.1 -u admin -p password -M ssh

```bash
medusa -h 127.0.0.1 -u admin -p password -M ssh
```

Tests a single username and password against an SSH service on a target

### medusa -h 127.0.0.1 -u admin -p password -M ftp

```bash
medusa -h 127.0.0.1 -u admin -p password -M ftp
```

Tests a single username and password against an FTP service

### medusa -h 127.0.0.1 -u admin -p password -M telnet

```bash
medusa -h 127.0.0.1 -u admin -p password -M telnet
```

Tests a single username and password against a Telnet service


## Target Specification

### medusa -H hosts.txt -u admin -p password -M ssh

```bash
medusa -H hosts.txt -u admin -p password -M ssh
```

Performs a login attempt against a list of target hosts specified in a file


## Username List Usage

### medusa -h 127.0.0.1 -U users.txt -p password -M ssh

```bash
medusa -h 127.0.0.1 -U users.txt -p password -M ssh
```

Iterates through a file of usernames with a single fixed password


## Password List Usage

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh
```

Tests a single username against a list of passwords


## Full Wordlist Attack

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh
```

Tests every username in the user list against every password in the password list


## Combo File Attack

### medusa -h 127.0.0.1 -C combo.txt -M ssh

```bash
medusa -h 127.0.0.1 -C combo.txt -M ssh
```

Uses a combo file containing 'user:password' format on each line


## Port Specification

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh -n 2222

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh -n 2222
```

Targets a specific non-standard port for the SSH service


## HTTP Authentication

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M http

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M http
```

Tests HTTP Basic Authentication against the web root


## HTTP Authentication Options

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M http -m DIR:/admin

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M http -m DIR:/admin
```

Tests HTTP Basic Authentication against a specific directory path


## SSL/TLS Encryption

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M http -s

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M http -s
```

Enforces SSL/TLS usage for the connection (HTTPS)


## SMB/Windows Authentication

### medusa -h 127.0.0.1 -u Administrator -P passwords.txt -M smbnt

```bash
medusa -h 127.0.0.1 -u Administrator -P passwords.txt -M smbnt
```

Tests credentials against the Windows SMB service


## Database Authentication (MySQL)

### medusa -h 127.0.0.1 -u root -P passwords.txt -M mysql

```bash
medusa -h 127.0.0.1 -u root -P passwords.txt -M mysql
```

Performs password auditing against a MySQL database server


## Database Authentication (MSSQL)

### medusa -h 127.0.0.1 -u sa -P passwords.txt -M mssql

```bash
medusa -h 127.0.0.1 -u sa -P passwords.txt -M mssql
```

Performs password auditing against a Microsoft SQL Server


## Database Authentication (PostgreSQL)

### medusa -h 127.0.0.1 -u postgres -P passwords.txt -M postgres

```bash
medusa -h 127.0.0.1 -u postgres -P passwords.txt -M postgres
```

Performs password auditing against a PostgreSQL database


## VNC Authentication

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M vnc

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M vnc
```

Tests passwords against a VNC server (username is often ignored or specific)


## SNMP Community String

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M snmp

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M snmp
```

Audits SNMP community strings using the password list as community strings


## Control Flags (Stop on Success)

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -f

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -f
```

Stops scanning the host immediately after the first valid username/password pair is found


## Empty Password Testing

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -e n

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -e n
```

Attempts to login with an empty password for each user in addition to the wordlist


## Same Password Testing

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -e s

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -e s
```

Attempts to login using the username as the password


## Comprehensive Empty/Same Testing

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -e ns

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -e ns
```

Checks both empty passwords and username-as-password for every user


## Output & Logging

### medusa -h 127.0.0.1 -u admin -p password -M ssh -O results.txt

```bash
medusa -h 127.0.0.1 -u admin -p password -M ssh -O results.txt
```

Saves the results of the audit to a specified text file


## Verbose Debugging

### medusa -h 127.0.0.1 -u admin -p password -M ssh -v 6

```bash
medusa -h 127.0.0.1 -u admin -p password -M ssh -v 6
```

Runs with high verbosity level (0-6) to display detailed connection and authentication debug info


## Banner Suppression

### medusa -h 127.0.0.1 -u admin -p password -M ssh -b

```bash
medusa -h 127.0.0.1 -u admin -p password -M ssh -b
```

Suppresses the tool's startup banner for cleaner output in scripts


## Concurrency (Threads)

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -t 10

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -t 10
```

Sets the number of simultaneous threads to use for testing


## Concurrency (Parallel Hosts)

### medusa -H hosts.txt -u admin -P passwords.txt -M ssh -T 5

```bash
medusa -H hosts.txt -u admin -P passwords.txt -M ssh -T 5
```

Tests up to 5 hosts simultaneously from the host list


## Concurrency (Parallel Logins)

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -L 2

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -L 2
```

Allows 2 parallel login attempts per host to speed up testing without overwhelming the service


## Error Handling (Wait)

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -w 5

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -w 5
```

Waits 5 seconds before retrying after an error (e.g., connection drop)


## Retry Control

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -r 5

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -r 5
```

Sets the retry wait time between attempts to avoid locking out accounts or triggering IDS


## Session Resuming

### medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -R 1

```bash
medusa -h 127.0.0.1 -U users.txt -P passwords.txt -M ssh -R 1
```

Resumes a previously aborted session from a specific index


## Web Form Authentication

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M web-form

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M web-form
```

Targets a generic HTML form authentication mechanism


## Email (SMTP)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M smtp

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M smtp
```

Audits credentials for the Simple Mail Transfer Protocol


## Email (IMAP)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M imap

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M imap
```

Audits credentials for the IMAP mail access protocol


## Email (POP3)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M pop3

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M pop3
```

Audits credentials for the POP3 mail access protocol


## Version Control (CVS)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M cvs

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M cvs
```

Audits credentials for a CVS repository server


## Version Control (SVN)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M svn

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M svn
```

Audits credentials for a Subversion repository server


## Legacy Remote Execution (Rexec)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M rexec

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M rexec
```

Tests credentials against the legacy Rexec service


## Legacy Remote Login (Rlogin)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M rlogin

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M rlogin
```

Tests credentials against the legacy Rlogin service


## Advanced SMB Options

### medusa -h 127.0.0.1 -u Administrator -P passwords.txt -M smbnt -m WORKGROUP:CORP

```bash
medusa -h 127.0.0.1 -u Administrator -P passwords.txt -M smbnt -m WORKGROUP:CORP
```

Specifies the Windows Workgroup or Domain name for SMB authentication


## HTTP User Agent Modification

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M http -m USER-AGENT:MedusaScanner/1.0

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M http -m USER-AGENT:MedusaScanner/1.0
```

Modifies the User-Agent header string sent during HTTP authentication attempts


## Alternative HTTP Port

### medusa -h 127.0.0.1 -n 8080 -u admin -P passwords.txt -M http

```bash
medusa -h 127.0.0.1 -n 8080 -u admin -P passwords.txt -M http
```

Targets an HTTP service running on a non-standard port like 8080


## VMware Authentication

### medusa -h 127.0.0.1 -u root -P passwords.txt -M vmauthd

```bash
medusa -h 127.0.0.1 -u root -P passwords.txt -M vmauthd
```

Audits credentials against the VMware Authentication Daemon


## Network File System (PCNFS)

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M pcnfs

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M pcnfs
```

Tests credentials against a PC-NFS service


## Multi-Host SSH Scan

### medusa -H hosts.txt -u root -P passwords.txt -M ssh -t 20 -T 10

```bash
medusa -H hosts.txt -u root -P passwords.txt -M ssh -t 20 -T 10
```

High-performance SSH scan across multiple hosts with increased thread counts


## Slow and Stealthy Scan

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh -r 10 -t 1

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh -r 10 -t 1
```

Minimizes noise by using a single thread and adding a delay between retries


## Credential Validation Workflow

### medusa -h 127.0.0.1 -u known_user -p known_pass -M ssh -v 6

```bash
medusa -h 127.0.0.1 -u known_user -p known_pass -M ssh -v 6
```

Validates a single known credential with maximum verbosity to debug authentication issues


## Default Account Audit

### medusa -h 127.0.0.1 -C defaults.txt -M http -f

```bash
medusa -h 127.0.0.1 -C defaults.txt -M http -f
```

Quickly checks for default credentials using a combo file and stops on first success


## Log File Append

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh -O master_log.txt

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M ssh -O master_log.txt
```

Appends audit results to a centralized log file for aggregation


## Mass SMB Audit

### medusa -H smb_hosts.txt -u Administrator -P passwords.txt -M smbnt -T 20 -f

```bash
medusa -H smb_hosts.txt -u Administrator -P passwords.txt -M smbnt -T 20 -f
```

Audits a list of Windows hosts for a specific admin password, stopping on success per host


## Database Discovery

### medusa -H db_hosts.txt -u root -p root -M mysql -T 10 -v 3

```bash
medusa -H db_hosts.txt -u root -p root -M mysql -T 10 -v 3
```

Scans multiple hosts to identify MySQL instances with default root credentials


## Web Form Input Specifics

### medusa -h 127.0.0.1 -u admin -P passwords.txt -M web-form -m FORM:login_page.php

```bash
medusa -h 127.0.0.1 -u admin -P passwords.txt -M web-form -m FORM:login_page.php
```

Specifies the target PHP file handling the login form logic


## Full Comprehensive Audit

### medusa -H all_targets.txt -U users.txt -P passwords.txt -M ssh -e ns -t 10 -T 5 -f -v 4 -O audit_final.log

```bash
medusa -H all_targets.txt -U users.txt -P passwords.txt -M ssh -e ns -t 10 -T 5 -f -v 4 -O audit_final.log
```

Runs a full scale audit with user/pass lists, empty/same checks, concurrency, and logging

## Related tools

- [Hydra](https://terminal.rokibulroni.com/tool/credentials/hydra)
- [Ncrack](https://terminal.rokibulroni.com/tool/credentials/ncrack)
- [Patator](https://terminal.rokibulroni.com/tool/credentials/patator)
