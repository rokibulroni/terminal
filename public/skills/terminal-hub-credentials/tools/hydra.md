# Hydra

> A fast, parallel online login brute-forcer supporting SSH, FTP, HTTP forms, SMB, RDP, databases and dozens more protocols.

- Category: Credentials
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/credentials/hydra
- Homepage: https://github.com/vanhauser-thc/thc-hydra
- Documentation: https://github.com/vanhauser-thc/thc-hydra#readme
- Tags: brute force, online attacks, authentication

## Install

- apt: `sudo apt install hydra`
- brew: `brew install hydra`

## Basic Syntax

### hydra -h

```bash
hydra -h
```

Displays the main help menu and list of supported protocols.


## Basic Credential Testing

### hydra -l admin -p password ssh://127.0.0.1

```bash
hydra -l admin -p password ssh://127.0.0.1
```

Tests a single username and single password against an SSH service.

### hydra -l root -p toor ftp://127.0.0.1

```bash
hydra -l root -p toor ftp://127.0.0.1
```

Tests a single username and password against an FTP service.


## Target Specification

### hydra -l admin -p password ssh://127.0.0.1:2222

```bash
hydra -l admin -p password ssh://127.0.0.1:2222
```

Targets a service running on a non-standard port using URI syntax.

### hydra -l admin -p password -s 2222 127.0.0.1 ssh

```bash
hydra -l admin -p password -s 2222 127.0.0.1 ssh
```

Targets a service on a non-standard port using the -s flag.


## Username and Password Handling

### hydra -L users.txt -p password ssh://127.0.0.1

```bash
hydra -L users.txt -p password ssh://127.0.0.1
```

Tests a list of usernames against a single fixed password.

### hydra -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -l admin -P passwords.txt ssh://127.0.0.1
```

Tests a single username against a wordlist of passwords.

### hydra -L users.txt -P passwords.txt ssh://127.0.0.1

```bash
hydra -L users.txt -P passwords.txt ssh://127.0.0.1
```

Performs a full matrix attack using both a username list and a password list.

### hydra -C creds.txt ssh://127.0.0.1

```bash
hydra -C creds.txt ssh://127.0.0.1
```

Uses a colon-separated credentials file (user:pass) instead of separate lists.


## Password Generation

### hydra -l admin -x 4:4:a ssh://127.0.0.1

```bash
hydra -l admin -x 4:4:a ssh://127.0.0.1
```

Generates passwords on the fly (4 chars, lowercase only) instead of using a wordlist.

### hydra -l admin -x 4:6:a1 ssh://127.0.0.1

```bash
hydra -l admin -x 4:6:a1 ssh://127.0.0.1
```

Generates passwords from length 4 to 6 using lowercase letters and numbers.


## Target Lists

### hydra -M targets.txt -l admin -P passwords.txt ssh

```bash
hydra -M targets.txt -l admin -P passwords.txt ssh
```

Attacks a list of target IPs provided in a file.


## Protocol Specific: RDP

### hydra -l admin -P passwords.txt rdp://127.0.0.1

```bash
hydra -l admin -P passwords.txt rdp://127.0.0.1
```

Tests credentials against Remote Desktop Protocol (RDP).


## Protocol Specific: SMB

### hydra -l admin -P passwords.txt smb://127.0.0.1

```bash
hydra -l admin -P passwords.txt smb://127.0.0.1
```

Tests credentials against Server Message Block (SMB).


## Protocol Specific: VNC

### hydra -P passwords.txt vnc://127.0.0.1

```bash
hydra -P passwords.txt vnc://127.0.0.1
```

Tests passwords against VNC (which typically only requires a password).


## Protocol Specific: Databases

### hydra -l root -P passwords.txt mysql://127.0.0.1

```bash
hydra -l root -P passwords.txt mysql://127.0.0.1
```

Tests credentials against a MySQL database server.

### hydra -l postgres -P passwords.txt postgres://127.0.0.1

```bash
hydra -l postgres -P passwords.txt postgres://127.0.0.1
```

Tests credentials against a PostgreSQL database server.

### hydra -P passwords.txt redis://127.0.0.1

```bash
hydra -P passwords.txt redis://127.0.0.1
```

Tests passwords against a Redis instance.


## Protocol Specific: SNMP

### hydra -P communities.txt snmp://127.0.0.1

```bash
hydra -P communities.txt snmp://127.0.0.1
```

Tests for valid SNMP community strings using the password list.


## HTTP Authentication

### hydra -l admin -P passwords.txt http-get://127.0.0.1/admin

```bash
hydra -l admin -P passwords.txt http-get://127.0.0.1/admin
```

Tests Basic Auth on a specific path using HTTP GET.


## SSL/TLS Support

### hydra -S -l admin -P passwords.txt https-get://127.0.0.1/admin

```bash
hydra -S -l admin -P passwords.txt https-get://127.0.0.1/admin
```

Enables SSL/TLS explicitly for the connection using the -S flag.


## HTTP Form Authentication

### hydra -l admin -P passwords.txt 127.0.0.1 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Login failed"

```bash
hydra -l admin -P passwords.txt 127.0.0.1 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Login failed"
```

Attacks an HTTP POST login form by defining the path, body parameters, and a failure string.

### hydra -l admin -P passwords.txt 127.0.0.1 http-post-form "/login.php:u=^USER^&p=^PASS^:S=Welcome back"

```bash
hydra -l admin -P passwords.txt 127.0.0.1 http-post-form "/login.php:u=^USER^&p=^PASS^:S=Welcome back"
```

Attacks an HTTP POST login form using a Success string (S=) match instead of failure.


## HTTP Header Manipulation

### hydra -l admin -P pass.txt 127.0.0.1 http-post-form "/api/login:user=^USER^&pass=^PASS^:F=fail:H=X-Custom-Header: value"

```bash
hydra -l admin -P pass.txt 127.0.0.1 http-post-form "/api/login:user=^USER^&pass=^PASS^:F=fail:H=X-Custom-Header: value"
```

Injects a custom HTTP header into the request using the H= parameter.


## HTTP Cookie Handling

### hydra -l admin -P pass.txt 127.0.0.1 http-post-form "/login:u=^USER^&p=^PASS^:F=Bad:H=Cookie: session=123"

```bash
hydra -l admin -P pass.txt 127.0.0.1 http-post-form "/login:u=^USER^&p=^PASS^:F=Bad:H=Cookie: session=123"
```

Passes a specific session cookie in the headers during the attack.


## Performance Tuning

### hydra -t 1 -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -t 1 -l admin -P passwords.txt ssh://127.0.0.1
```

Limits the attack to exactly 1 task (thread) to reduce server load.

### hydra -t 32 -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -t 32 -l admin -P passwords.txt ssh://127.0.0.1
```

Increases parallelism to 32 tasks for faster scanning on capable networks.


## Rate Limiting

### hydra -w 5 -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -w 5 -l admin -P passwords.txt ssh://127.0.0.1
```

Waits 5 seconds between connection attempts to evade simple rate limits.

### hydra -W 2 -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -W 2 -l admin -P passwords.txt ssh://127.0.0.1
```

Adds a random wait time (up to 2 seconds) between connects.


## Logging and Output

### hydra -v -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -v -l admin -P passwords.txt ssh://127.0.0.1
```

Enables verbose mode to show login attempts and errors.

### hydra -V -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -V -l admin -P passwords.txt ssh://127.0.0.1
```

Enables debug mode showing username/password combinations as they are tried.

### hydra -o results.txt -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -o results.txt -l admin -P passwords.txt ssh://127.0.0.1
```

Writes the valid found pairs to a text file.

### hydra -o results.json -b json -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -o results.json -b json -l admin -P passwords.txt ssh://127.0.0.1
```

Outputs the results in JSON format for easier parsing by other tools.


## Session Management

### hydra -R

```bash
hydra -R
```

Restores a previously aborted session using the hydra.restore file.


## Advanced Networking

### hydra -4 -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -4 -l admin -P passwords.txt ssh://127.0.0.1
```

Forces the use of IPv4 addresses only.

### hydra -6 -l admin -P passwords.txt ssh://[::1]

```bash
hydra -6 -l admin -P passwords.txt ssh://[::1]
```

Forces the use of IPv6 addresses only.


## Proxy Usage

### hydra -x http:127.0.0.1:8080 -l admin -P passwords.txt http-get://test.lab

```bash
hydra -x http:127.0.0.1:8080 -l admin -P passwords.txt http-get://test.lab
```

Routes the attack traffic through an HTTP proxy.

### hydra -x socks5:127.0.0.1:9050 -l admin -P passwords.txt ssh://test.lab

```bash
hydra -x socks5:127.0.0.1:9050 -l admin -P passwords.txt ssh://test.lab
```

Routes the attack traffic through a SOCKS5 proxy (e.g., Tor).

### hydra -x socks5:user:pass@127.0.0.1:1080 -l admin -P pass.txt ssh://test.lab

```bash
hydra -x socks5:user:pass@127.0.0.1:1080 -l admin -P pass.txt ssh://test.lab
```

Routes traffic through an authenticated SOCKS5 proxy.


## Module Options

### hydra -m /path/to/key -l user -P pass.txt ssh://127.0.0.1

```bash
hydra -m /path/to/key -l user -P pass.txt ssh://127.0.0.1
```

Uses the -m flag to pass module-specific options (e.g., SSH private key path).


## Exit Conditions

### hydra -f -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -f -l admin -P passwords.txt ssh://127.0.0.1
```

Exits immediately after the first valid credential pair is found.

### hydra -F -L users.txt -P passwords.txt ssh://127.0.0.1

```bash
hydra -F -L users.txt -P passwords.txt ssh://127.0.0.1
```

Stops the entire audit (all targets) after finding any valid credential.


## Looping

### hydra -l admin -p password -u ssh://127.0.0.1

```bash
hydra -l admin -p password -u ssh://127.0.0.1
```

Loops across usernames (-u) checking all passwords for one user before moving to next.


## Null Password Checks

### hydra -e n -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -e n -l admin -P passwords.txt ssh://127.0.0.1
```

Specifically adds a check for a null (empty) password.


## Same-as-Login Checks

### hydra -e s -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -e s -l admin -P passwords.txt ssh://127.0.0.1
```

Adds a check where the password is the same as the username.


## Reverse Login Checks

### hydra -e r -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -e r -l admin -P passwords.txt ssh://127.0.0.1
```

Adds a check where the password is the username reversed.


## Comprehensive Checks

### hydra -e nsr -l admin -P passwords.txt ssh://127.0.0.1

```bash
hydra -e nsr -l admin -P passwords.txt ssh://127.0.0.1
```

Checks null, same-as-user, and reverse-user passwords in addition to the wordlist.


## SMTP Enumeration

### hydra -l user -P pass.txt smtp-enum://127.0.0.1

```bash
hydra -l user -P pass.txt smtp-enum://127.0.0.1
```

Uses the SMTP VRFY command to enumerate valid users before attacking.


## Cisco Enable

### hydra -P passwords.txt cisco-enable://127.0.0.1

```bash
hydra -P passwords.txt cisco-enable://127.0.0.1
```

Targets the enable password on Cisco devices.


## LDAP Authentication

### hydra -l admin -P pass.txt ldap://127.0.0.1

```bash
hydra -l admin -P pass.txt ldap://127.0.0.1
```

Tests credentials against an LDAP directory service.


## Oracle Listener

### hydra -l admin -P pass.txt oracle-listener://127.0.0.1

```bash
hydra -l admin -P pass.txt oracle-listener://127.0.0.1
```

Targets the Oracle TNS listener.


## Red Team Simulation

### hydra -t 1 -W 10 -f -l admin -P top10.txt ssh://127.0.0.1

```bash
hydra -t 1 -W 10 -f -l admin -P top10.txt ssh://127.0.0.1
```

Simulates a stealthy low-and-slow attack using very few threads and long waits.


## Blue Team Validation

### hydra -t 64 -l admin -P rockyou.txt ssh://127.0.0.1

```bash
hydra -t 64 -l admin -P rockyou.txt ssh://127.0.0.1
```

Simulates a noisy, high-velocity brute force to test IDS/IPS triggering.


## User-Agent Spoofing

### hydra -l admin -P pass.txt -w 1 http-get://127.0.0.1/ -H "User-Agent: Mozilla/5.0"

```bash
hydra -l admin -P pass.txt -w 1 http-get://127.0.0.1/ -H "User-Agent: Mozilla/5.0"
```

Spoofs the User-Agent header to bypass simple WAF filtering or look legitimate.


## Service Scan Verification

### hydra -U -m /path/to/passwords ssh://127.0.0.1

```bash
hydra -U -m /path/to/passwords ssh://127.0.0.1
```

Prints the service module details without running the attack (-U).


## Time-based Termination

### hydra -l admin -P massive_list.txt ssh://127.0.0.1

```bash
hydra -l admin -P massive_list.txt ssh://127.0.0.1
```

Example:

```bash
timeout 60s hydra -l admin -P massive_list.txt ssh://127.0.0.1
```

Combines with OS 'timeout' to limit attack duration during automated testing.


## FTP Specifics

### hydra -l user -P pass.txt ftp://127.0.0.1 -vV

```bash
hydra -l user -P pass.txt ftp://127.0.0.1 -vV
```

Verbose FTP attack to debug connection or protocol handshake issues.


## IMAP/POP3 Mail

### hydra -l user -P pass.txt imap://127.0.0.1

```bash
hydra -l user -P pass.txt imap://127.0.0.1
```

Tests credentials against an IMAP mail server.

### hydra -l user -P pass.txt pop3://127.0.0.1

```bash
hydra -l user -P pass.txt pop3://127.0.0.1
```

Tests credentials against a POP3 mail server.


## SOCKS Proxy Attack

### hydra -l user -P pass.txt socks5://127.0.0.1

```bash
hydra -l user -P pass.txt socks5://127.0.0.1
```

Attacks the credentials of the SOCKS proxy server itself.


## Telnet Legacy

### hydra -l root -P pass.txt telnet://127.0.0.1

```bash
hydra -l root -P pass.txt telnet://127.0.0.1
```

Tests credentials on legacy Telnet services.


## TeamCity/CI CD

### hydra -l admin -P pass.txt teamcity://127.0.0.1

```bash
hydra -l admin -P pass.txt teamcity://127.0.0.1
```

Targets JetBrains TeamCity build servers.


## VMware vCenter

### hydra -l administrator@vsphere.local -P pass.txt vcenter://127.0.0.1

```bash
hydra -l administrator@vsphere.local -P pass.txt vcenter://127.0.0.1
```

Targets VMware vCenter authentication.


## Subversion (SVN)

### hydra -l admin -P pass.txt svn://127.0.0.1

```bash
hydra -l admin -P pass.txt svn://127.0.0.1
```

Tests credentials against an SVN repository.


## IRC Authentication

### hydra -l user -P pass.txt irc://127.0.0.1

```bash
hydra -l user -P pass.txt irc://127.0.0.1
```

Attacks IRC server passwords.


## PC Anywhere

### hydra -P pass.txt pcanywhere://127.0.0.1

```bash
hydra -P pass.txt pcanywhere://127.0.0.1
```

Targets legacy PC Anywhere remote access services.


## RSH/Rexec

### hydra -l root -P pass.txt rexec://127.0.0.1

```bash
hydra -l root -P pass.txt rexec://127.0.0.1
```

Targets remote execution services.


## Rlogin

### hydra -l root -P pass.txt rlogin://127.0.0.1

```bash
hydra -l root -P pass.txt rlogin://127.0.0.1
```

Targets the legacy rlogin protocol.


## SIP/VoIP

### hydra -l 1001 -P pass.txt sip://127.0.0.1

```bash
hydra -l 1001 -P pass.txt sip://127.0.0.1
```

Tests credentials on SIP-based VoIP servers.


## Environment Variable Input

### HYDRA_PROXY_HTTP=http://127.0.0.1:8080 hydra -l u -P p.txt ssh://target

```bash
HYDRA_PROXY_HTTP=http://127.0.0.1:8080 hydra -l u -P p.txt ssh://target
```

Uses environment variables to configure proxy settings outside the command flags.


## Detection Evasion

### hydra -t 1 -w 15 -f -l admin -P pass.txt ssh://127.0.0.1

```bash
hydra -t 1 -w 15 -f -l admin -P pass.txt ssh://127.0.0.1
```

Extreme slow-roll configuration to attempt bypassing account lockout policies.


## Automated Pipeline

### hydra -l admin -P pass.txt -o /tmp/audit.json -b json ssh://127.0.0.1 > /dev/null

```bash
hydra -l admin -P pass.txt -o /tmp/audit.json -b json ssh://127.0.0.1 > /dev/null
```

Run silently in CI/CD, outputting only a JSON artifact.


## Windows Auth (SMB2)

### hydra -l Administrator -P pass.txt smb://127.0.0.1 -m smb2

```bash
hydra -l Administrator -P pass.txt smb://127.0.0.1 -m smb2
```

Forces SMB version 2 for Windows authentication testing.


## Interactive Verification

### hydra -l admin -p password -s 22 ssh://127.0.0.1 -v

```bash
hydra -l admin -p password -s 22 ssh://127.0.0.1 -v
```

Manual verification of a single credential with verbose output to confirm access.


## Complex HTTP Pattern

### hydra -l user -P pass.txt http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Error" -c 30

```bash
hydra -l user -P pass.txt http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Error" -c 30
```

Limits the wait time for socket connections to 30 seconds using -c.

## Related tools

- [Medusa](https://terminal.rokibulroni.com/tool/credentials/medusa)
- [Ncrack](https://terminal.rokibulroni.com/tool/credentials/ncrack)
- [Patator](https://terminal.rokibulroni.com/tool/credentials/patator)
