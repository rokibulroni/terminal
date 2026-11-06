# Ncrack

> Nmap project’s high-speed network authentication cracker for RDP, SSH, SMB, FTP and other services, with timing controls.

- Category: Credentials
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/credentials/ncrack
- Homepage: https://nmap.org/ncrack/
- Documentation: https://nmap.org/ncrack/man.html
- Tags: brute force, RDP, SSH

## Install

- apt: `sudo apt install ncrack`
- brew: `brew install ncrack`

## Basic Ncrack Usage

### ncrack --version

```bash
ncrack --version
```

Displays the currently installed version of Ncrack to verify availability.

### ncrack --help

```bash
ncrack --help
```

Prints the main help menu listing supported flags and usage syntax.

### ncrack -V

```bash
ncrack -V
```

Runs Ncrack with increased verbosity to show detailed runtime information.

### ncrack --list-modules

```bash
ncrack --list-modules
```

Lists all supported authentication modules and default ports available in the current installation.


## Single Target Testing

### ncrack -u admin --pass 'Password123' ftp://127.0.0.1

```bash
ncrack -u admin --pass 'Password123' ftp://127.0.0.1
```

Tests a single username and password against an FTP service using URL syntax.

### ncrack -u root --pass toor ssh://127.0.0.1

```bash
ncrack -u root --pass toor ssh://127.0.0.1
```

Tests a single username and password against an SSH service using URL syntax.

### ncrack -p 22 --user root --pass toor 127.0.0.1

```bash
ncrack -p 22 --user root --pass toor 127.0.0.1
```

Explicitly specifies port 22 for an SSH login attempt against a target IP.


## Wordlist Based Testing

### ncrack -u admin -P passwords.txt 127.0.0.1:21

```bash
ncrack -u admin -P passwords.txt 127.0.0.1:21
```

Tests a single username against a list of passwords for an FTP service on port 21.

### ncrack -U users.txt -P passwords.txt ssh://127.0.0.1

```bash
ncrack -U users.txt -P passwords.txt ssh://127.0.0.1
```

Performs a full audit using a list of users and a list of passwords against an SSH target.

### ncrack -U users.txt --pass 'Summer2023!' rdp://192.168.1.10

```bash
ncrack -U users.txt --pass 'Summer2023!' rdp://192.168.1.10
```

Performs a password spraying attack using a list of users and one common password against RDP.


## Target Specification

### ncrack -iL targets.txt -p ssh

```bash
ncrack -iL targets.txt -p ssh
```

Scans multiple targets provided in a text file against the default SSH port.

### ncrack -p ssh 192.168.1.0/24

```bash
ncrack -p ssh 192.168.1.0/24
```

Targets an entire CIDR subnet range for SSH authentication discovery.

### ncrack -p 80,443,8080 127.0.0.1

```bash
ncrack -p 80,443,8080 127.0.0.1
```

Specifies multiple ports manually to check for services on a single host.


## Protocol Specific - Windows

### ncrack -p smb -u Administrator -P passlist.txt 192.168.1.50

```bash
ncrack -p smb -u Administrator -P passlist.txt 192.168.1.50
```

Targets the SMB protocol specifically for Windows authentication auditing.

### ncrack -p rdp -U users.txt -P pass.txt 192.168.1.50

```bash
ncrack -p rdp -U users.txt -P pass.txt 192.168.1.50
```

Audits Remote Desktop Protocol credentials using user and password lists.

### ncrack -p winrm -u admin -P passwords.txt 192.168.1.50

```bash
ncrack -p winrm -u admin -P passwords.txt 192.168.1.50
```

Targets Windows Remote Management service for authentication testing.


## Protocol Specific - Database

### ncrack -p 3306 -u root -P mysql_pass.txt 127.0.0.1

```bash
ncrack -p 3306 -u root -P mysql_pass.txt 127.0.0.1
```

Audits a MySQL database instance on the default port 3306.

### ncrack -p 5432 -u postgres -P pg_pass.txt 127.0.0.1

```bash
ncrack -p 5432 -u postgres -P pg_pass.txt 127.0.0.1
```

Audits a PostgreSQL database instance on the default port 5432.

### ncrack -p 1433 -u sa -P mssql_pass.txt 192.168.1.20

```bash
ncrack -p 1433 -u sa -P mssql_pass.txt 192.168.1.20
```

Targets a Microsoft SQL Server instance using the 'sa' account.

### ncrack -p 6379 -u default -P redis_pass.txt 127.0.0.1

```bash
ncrack -p 6379 -u default -P redis_pass.txt 127.0.0.1
```

Tests authentication against a Redis data store on port 6379.

### ncrack -p 27017 -u admin -P mongo_pass.txt 127.0.0.1

```bash
ncrack -p 27017 -u admin -P mongo_pass.txt 127.0.0.1
```

Audits a MongoDB instance using the default port 27017.


## Protocol Specific - Web

### ncrack -p http -u admin -P web_pass.txt 127.0.0.1

```bash
ncrack -p http -u admin -P web_pass.txt 127.0.0.1
```

Tests HTTP Basic Authentication against the web root.

### ncrack -p https -u admin -P web_pass.txt 127.0.0.1

```bash
ncrack -p https -u admin -P web_pass.txt 127.0.0.1
```

Tests HTTPS Basic Authentication ensuring SSL/TLS encryption is used.

### ncrack http://127.0.0.1,path=/admin

```bash
ncrack http://127.0.0.1,path=/admin
```

Specifies a specific URL path '/admin' for the HTTP authentication test.


## Protocol Specific - Mail

### ncrack -p 110 -u user -P mail_pass.txt 127.0.0.1

```bash
ncrack -p 110 -u user -P mail_pass.txt 127.0.0.1
```

Targets a POP3 mail server on port 110.

### ncrack -p 143 -u user -P mail_pass.txt 127.0.0.1

```bash
ncrack -p 143 -u user -P mail_pass.txt 127.0.0.1
```

Targets an IMAP mail server on port 143.


## Protocol Specific - Legacy

### ncrack -p 23 -u root -P telnet_pass.txt 192.168.1.1

```bash
ncrack -p 23 -u root -P telnet_pass.txt 192.168.1.1
```

Audits a legacy Telnet service on port 23.


## Protocol Specific - VNC

### ncrack -p 5900 -u user -P vnc_pass.txt 192.168.1.5

```bash
ncrack -p 5900 -u user -P vnc_pass.txt 192.168.1.5
```

Tests VNC remote access passwords on default port 5900.


## SSL/TLS Options

### ncrack -p ssl:21 -u admin -P pass.txt 127.0.0.1

```bash
ncrack -p ssl:21 -u admin -P pass.txt 127.0.0.1
```

Forces SSL connection on a standard FTP port (FTPS explicit).

### ncrack -p 993 -u user -P pass.txt 127.0.0.1

```bash
ncrack -p 993 -u user -P pass.txt 127.0.0.1
```

Tests IMAPS (IMAP over SSL) on the standard secure port.


## Timing and Performance

### ncrack -p ssh --connection-limit 5 127.0.0.1

```bash
ncrack -p ssh --connection-limit 5 127.0.0.1
```

Limits the number of concurrent connections per service to 5.

### ncrack -p ssh --auth-limit 2 127.0.0.1

```bash
ncrack -p ssh --auth-limit 2 127.0.0.1
```

Limits the number of authentication attempts per connection to 2.

### ncrack -p ssh --time-limit 1h 127.0.0.1

```bash
ncrack -p ssh --time-limit 1h 127.0.0.1
```

Sets a hard time limit of 1 hour for the entire cracking session.

### ncrack -p ssh -g cl=10 127.0.0.1

```bash
ncrack -p ssh -g cl=10 127.0.0.1
```

Uses the global option flag to set the connection limit to 10.

### ncrack -p ssh -g at=1 127.0.0.1

```bash
ncrack -p ssh -g at=1 127.0.0.1
```

Sets the authentication tries per connection to exactly 1 (useful for avoiding lockouts).

### ncrack -p ssh -g to=5s 127.0.0.1

```bash
ncrack -p ssh -g to=5s 127.0.0.1
```

Sets the connection timeout to 5 seconds to fail fast on unresponsive hosts.


## Output and Logging

### ncrack -p ssh -u user -P pass.txt 127.0.0.1 -oN output.txt

```bash
ncrack -p ssh -u user -P pass.txt 127.0.0.1 -oN output.txt
```

Saves the results in Normal human-readable format to a file.

### ncrack -p ssh -u user -P pass.txt 127.0.0.1 -oX output.xml

```bash
ncrack -p ssh -u user -P pass.txt 127.0.0.1 -oX output.xml
```

Saves the results in XML format for easier parsing by other tools.

### ncrack -p ssh -u user -P pass.txt 127.0.0.1 -oA ncrack_scan

```bash
ncrack -p ssh -u user -P pass.txt 127.0.0.1 -oA ncrack_scan
```

Saves the results in all available formats (Normal, XML, Grepable) with the given basename.

### ncrack -v -p ssh 127.0.0.1

```bash
ncrack -v -p ssh 127.0.0.1
```

Runs in verbose mode to see more details about the connection process.

### ncrack -d -p ssh 127.0.0.1

```bash
ncrack -d -p ssh 127.0.0.1
```

Runs in debugging mode to troubleshoot connection or module errors.

### ncrack -d2 -p ssh 127.0.0.1

```bash
ncrack -d2 -p ssh 127.0.0.1
```

Runs with high debugging level (level 2) for deep protocol inspection.


## Session Management

### ncrack -p ssh -U users.txt -P biglist.txt 127.0.0.1 --save session.dat

```bash
ncrack -p ssh -U users.txt -P biglist.txt 127.0.0.1 --save session.dat
```

Saves the session state to a file periodically to allow pausing.

### ncrack --resume session.dat

```bash
ncrack --resume session.dat
```

Resumes a previously saved or interrupted Ncrack session from the file.


## Advanced List Handling

### ncrack -p ssh --pairwise 127.0.0.1

```bash
ncrack -p ssh --pairwise 127.0.0.1
```

Tests usernames against passwords in pairs (u1 with p1, u2 with p2) rather than all-to-all.

### ncrack -p ssh --passwords-first 127.0.0.1

```bash
ncrack -p ssh --passwords-first 127.0.0.1
```

Iterates through the password list first for each username (inverts the default loops).


## Advanced Targeting

### ncrack -iL targets.txt --exclude 192.168.1.1

```bash
ncrack -iL targets.txt --exclude 192.168.1.1
```

Scans a list of targets but explicitly excludes a specific IP address.

### ncrack -p ssh --exclude-file safe_hosts.txt 192.168.1.0/24

```bash
ncrack -p ssh --exclude-file safe_hosts.txt 192.168.1.0/24
```

Scans a subnet but excludes all hosts listed in a specific file.


## Advanced Protocol Options

### ncrack -p sip -u 100 -P pass.txt 192.168.1.50

```bash
ncrack -p sip -u 100 -P pass.txt 192.168.1.50
```

Audits a SIP (VoIP) server using extension numbers as usernames.

### ncrack -p dicom -u admin -P pass.txt 192.168.1.60

```bash
ncrack -p dicom -u admin -P pass.txt 192.168.1.60
```

Audits a DICOM medical imaging server for default credentials.

### ncrack -p cvs -u root -P pass.txt 127.0.0.1

```bash
ncrack -p cvs -u root -P pass.txt 127.0.0.1
```

Audits a CVS (Concurrent Versions System) server.

### ncrack -p mqtt -u user -P pass.txt 127.0.0.1

```bash
ncrack -p mqtt -u user -P pass.txt 127.0.0.1
```

Audits an MQTT broker often used in IoT environments.


## Module Specific Options

### ncrack -p ssh,ftp:3000 127.0.0.1

```bash
ncrack -p ssh,ftp:3000 127.0.0.1
```

Scans default SSH port and a non-standard FTP port (3000) simultaneously.


## Red Team Workflows

### ncrack -p smb -U users.txt --pass 'Company2024!' -g at=1,cl=1 192.168.1.0/24

```bash
ncrack -p smb -U users.txt --pass 'Company2024!' -g at=1,cl=1 192.168.1.0/24
```

Low-and-slow password spraying attack against an SMB range to avoid account lockouts.

### ncrack -p ssh -u root -P top500.txt 192.168.1.10 -g to=10s

```bash
ncrack -p ssh -u root -P top500.txt 192.168.1.10 -g to=10s
```

Targeted brute force of the root account using a curated top 500 password list.


## Blue Team Validation

### ncrack -p ssh -u audit_test -P bad_passwords.txt 127.0.0.1

```bash
ncrack -p ssh -u audit_test -P bad_passwords.txt 127.0.0.1
```

Simulates attacks to verify if the SIEM or IDS triggers on repeated SSH failures.

### ncrack -p http -U known_users.txt -P weak_pass.txt 127.0.0.1

```bash
ncrack -p http -U known_users.txt -P weak_pass.txt 127.0.0.1
```

Verifies that web application accounts have strong passwords by testing against a weak list.


## Performance Tuning

### ncrack -p ftp -g cl=200,at=5 127.0.0.1

```bash
ncrack -p ftp -g cl=200,at=5 127.0.0.1
```

Aggressive high-speed scan with high connection limits for a stress test in a lab.


## Combined Workflow

### ncrack -iL all_servers.txt -p ssh,rdp,winrm -U admins.txt -P passwords.txt -oA internal_audit

```bash
ncrack -iL all_servers.txt -p ssh,rdp,winrm -U admins.txt -P passwords.txt -oA internal_audit
```

Comprehensive infrastructure audit checking SSH, RDP, and WinRM across all servers.


## Credential Stuffing Simulation

### ncrack -p https --pairwise -U leaked_users.txt -P leaked_pass.txt 127.0.0.1

```bash
ncrack -p https --pairwise -U leaked_users.txt -P leaked_pass.txt 127.0.0.1
```

Tests exact username:password pairs from a breach against a secure web portal.


## Protocol Specific - Network

### ncrack -p 23 -u cisco -P cisco_pass.txt 192.168.1.254

```bash
ncrack -p 23 -u cisco -P cisco_pass.txt 192.168.1.254
```

Tests default credentials on network infrastructure equipment via Telnet.


## IPv6 Targeting

### ncrack -6 -p ssh -u root -P pass.txt 2001:db8::1

```bash
ncrack -6 -p ssh -u root -P pass.txt 2001:db8::1
```

Targets an IPv6 address for SSH authentication testing.


## Verbose Debugging

### ncrack -vv -d -p ssh 127.0.0.1

```bash
ncrack -vv -d -p ssh 127.0.0.1
```

Combines high verbosity and debug mode for maximum runtime visibility.


## Interactive Mode

### ncrack -p ssh -u user -P pass.txt 127.0.0.1

```bash
ncrack -p ssh -u user -P pass.txt 127.0.0.1
```

Runs in interactive mode where keys like 'p', 'v', 'd' can be pressed to toggle status lines.


## Time Limit Audit

### ncrack -p smb -U users.txt -P pass.txt --time-limit 10m 192.168.1.0/24

```bash
ncrack -p smb -U users.txt -P pass.txt --time-limit 10m 192.168.1.0/24
```

Runs an SMB audit across a subnet but strictly terminates after 10 minutes.


## Specific MongoDB Auth

### ncrack -p 27017 -u admin -P pass.txt --module-opt authdb=admin 127.0.0.1

```bash
ncrack -p 27017 -u admin -P pass.txt --module-opt authdb=admin 127.0.0.1
```

Specifies the MongoDB authentication database explicitly using module options.


## Cassandra DB

### ncrack -p 9042 -u cassandra -P pass.txt 127.0.0.1

```bash
ncrack -p 9042 -u cassandra -P pass.txt 127.0.0.1
```

Audits a Cassandra database service on its native protocol port.


## Wordpress XMLRPC

### ncrack -p http -u admin -P pass.txt --module-opt path=/xmlrpc.php 127.0.0.1

```bash
ncrack -p http -u admin -P pass.txt --module-opt path=/xmlrpc.php 127.0.0.1
```

Targets the WordPress XML-RPC interface for authentication brute forcing.


## Custom HTTP Method

### ncrack -p http -u admin -P pass.txt --module-opt method=HEAD 127.0.0.1

```bash
ncrack -p http -u admin -P pass.txt --module-opt method=HEAD 127.0.0.1
```

Uses the HEAD method instead of GET/POST for HTTP authentication attempts.


## WinRM HTTPS

### ncrack -p 5986 -u Administrator -P pass.txt 192.168.1.50

```bash
ncrack -p 5986 -u Administrator -P pass.txt 192.168.1.50
```

Targets WinRM over HTTPS (port 5986) for secure management auditing.


## Postgres Specific Database

### ncrack -p 5432 -u postgres -P pass.txt --module-opt dbname=template1 127.0.0.1

```bash
ncrack -p 5432 -u postgres -P pass.txt --module-opt dbname=template1 127.0.0.1
```

Connects to a specific PostgreSQL database name 'template1' during authentication.


## FTP Passive Mode

### ncrack -p ftp -u admin -P pass.txt --module-opt passive 127.0.0.1

```bash
ncrack -p ftp -u admin -P pass.txt --module-opt passive 127.0.0.1
```

Forces the FTP module to use passive mode for data connection compatibility.


## SSH Key Exchange

### ncrack -p ssh -u root -P pass.txt --module-opt kex=diffie-hellman-group1-sha1 127.0.0.1

```bash
ncrack -p ssh -u root -P pass.txt --module-opt kex=diffie-hellman-group1-sha1 127.0.0.1
```

Specifies a legacy key exchange algorithm for SSH to support older targets.


## Full Automation Chain

### ncrack -iL targets.txt -p ssh,rdp,smb -U users.txt -P pass.txt -g cl=2,at=1 -oA full_audit --save checkpoint.dat

```bash
ncrack -iL targets.txt -p ssh,rdp,smb -U users.txt -P pass.txt -g cl=2,at=1 -oA full_audit --save checkpoint.dat
```

A complete, safe automation command combining throttling, logging, checkpoints, and multi-protocol targeting.


## Quiet Scan

### ncrack -p ssh -u user -P pass.txt 127.0.0.1 -q

```bash
ncrack -p ssh -u user -P pass.txt 127.0.0.1 -q
```

Runs the scan in quiet mode, suppressing most non-critical output to stdout.

## Related tools

- [Hydra](https://terminal.rokibulroni.com/tool/credentials/hydra)
- [Medusa](https://terminal.rokibulroni.com/tool/credentials/medusa)
- [Nmap](https://terminal.rokibulroni.com/tool/network/nmap)
