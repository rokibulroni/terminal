# Nikto

> A web server scanner that checks for thousands of dangerous files, outdated software and common misconfigurations. Noisy by design.

- Category: Web
- Commands: 105
- Page: https://terminal.rokibulroni.com/tool/web/nikto
- Homepage: https://cirt.net/Nikto2
- Documentation: https://github.com/sullo/nikto/wiki
- Tags: vulnerability scanning, web server, misconfiguration

## Install

- apt: `sudo apt install nikto`
- brew: `brew install nikto`

## Basic Web Scan

### nikto -h http://example.com

```bash
nikto -h http://example.com
```

Performs a standard comprehensive scan against a target web server.

### nikto -h 192.168.1.10

```bash
nikto -h 192.168.1.10
```

Scans a target server specified by its IP address.


## Target Specification

### nikto -h http://example.com -p 8080

```bash
nikto -h http://example.com -p 8080
```

Scans the target on a specific non-standard port.

### nikto -h https://example.com -p 443,8443

```bash
nikto -h https://example.com -p 443,8443
```

Scans multiple specified ports on the same target host.

### nikto -h http://example.com -p 80-90

```bash
nikto -h http://example.com -p 80-90
```

Scans a range of ports on the target host.


## SSL and HTTPS Scanning

### nikto -h example.com -ssl

```bash
nikto -h example.com -ssl
```

Forces SSL/HTTPS mode for the scan regardless of port detection.

### nikto -h http://example.com -nossl

```bash
nikto -h http://example.com -nossl
```

Disables SSL usage even if scanning port 443.


## General Info

### nikto -Version

```bash
nikto -Version
```

Displays the Nikto software version and plugin versions.

### nikto -list-plugins

```bash
nikto -list-plugins
```

Lists all available plugins that can be run against a target.


## Tuning and Scan Category

### nikto -h http://example.com -Tuning 1

```bash
nikto -h http://example.com -Tuning 1
```

Scans only for 'Interesting File' vulnerabilities like logs or backups.

### nikto -h http://example.com -Tuning 2

```bash
nikto -h http://example.com -Tuning 2
```

Scans strictly for server misconfigurations.

### nikto -h http://example.com -Tuning 3

```bash
nikto -h http://example.com -Tuning 3
```

Checks for information disclosure vulnerabilities.

### nikto -h http://example.com -Tuning 4

```bash
nikto -h http://example.com -Tuning 4
```

Focuses the scan on injection vulnerabilities like XSS and HTML injection.

### nikto -h http://example.com -Tuning 5

```bash
nikto -h http://example.com -Tuning 5
```

Scans for remote file retrieval vulnerabilities.

### nikto -h http://example.com -Tuning 6

```bash
nikto -h http://example.com -Tuning 6
```

Checks for denial of service conditions.

### nikto -h http://example.com -Tuning 7

```bash
nikto -h http://example.com -Tuning 7
```

Scans specifically for remote file inclusion vulnerabilities.

### nikto -h http://example.com -Tuning 8

```bash
nikto -h http://example.com -Tuning 8
```

Focuses on command execution vulnerabilities.

### nikto -h http://example.com -Tuning 9

```bash
nikto -h http://example.com -Tuning 9
```

Scans specifically for SQL injection vulnerabilities.

### nikto -h http://example.com -Tuning 0

```bash
nikto -h http://example.com -Tuning 0
```

Checks for file upload vulnerabilities.

### nikto -h http://example.com -Tuning a

```bash
nikto -h http://example.com -Tuning a
```

Scans for authentication bypass vulnerabilities.

### nikto -h http://example.com -Tuning b

```bash
nikto -h http://example.com -Tuning b
```

Identifies installed software banners.

### nikto -h http://example.com -Tuning c

```bash
nikto -h http://example.com -Tuning c
```

Checks for remote source inclusion vulnerabilities.

### nikto -h http://example.com -Tuning x

```bash
nikto -h http://example.com -Tuning x
```

Runs reverse tuning options to exclude specific checks.

### nikto -h http://example.com -Tuning 123

```bash
nikto -h http://example.com -Tuning 123
```

Combines tuning types to scan for Interesting Files, Misconfigurations, and Info Disclosure.


## Output Formats

### nikto -h http://example.com -o scan_result.txt

```bash
nikto -h http://example.com -o scan_result.txt
```

Saves the scan output to a plain text file.

### nikto -h http://example.com -o scan_result.html -Format html

```bash
nikto -h http://example.com -o scan_result.html -Format html
```

Generates a readable HTML report of the scan findings.

### nikto -h http://example.com -o scan_result.xml -Format xml

```bash
nikto -h http://example.com -o scan_result.xml -Format xml
```

Saves output in XML format for integration with other tools.

### nikto -h http://example.com -o scan_result.csv -Format csv

```bash
nikto -h http://example.com -o scan_result.csv -Format csv
```

Exports scan results to a CSV file for spreadsheet analysis.

### nikto -h http://example.com -o scan_result.json -Format json

```bash
nikto -h http://example.com -o scan_result.json -Format json
```

Outputs the results in JSON format for programmatic parsing.

### nikto -h http://example.com -o scan.nbe -Format nbe

```bash
nikto -h http://example.com -o scan.nbe -Format nbe
```

Saves results in Nessus NBE format.

### nikto -h http://example.com -o .

```bash
nikto -h http://example.com -o .
```

Saves output to a file with an auto-generated name in the current directory.


## Verbose and Debug

### nikto -h http://example.com -Display 1

```bash
nikto -h http://example.com -Display 1
```

Shows redirects received from the web server during the scan.

### nikto -h http://example.com -Display 2

```bash
nikto -h http://example.com -Display 2
```

Displays cookies received during the scan.

### nikto -h http://example.com -Display 3

```bash
nikto -h http://example.com -Display 3
```

Prints all 200 OK responses to the screen.

### nikto -h http://example.com -Display 4

```bash
nikto -h http://example.com -Display 4
```

Shows URLs that require authentication.

### nikto -h http://example.com -Display D

```bash
nikto -h http://example.com -Display D
```

Enables debug output for troubleshooting.

### nikto -h http://example.com -Display V

```bash
nikto -h http://example.com -Display V
```

Enables verbose mode to see detailed progress.


## Evasion and IDS Bypass

### nikto -h http://example.com -evasion 1

```bash
nikto -h http://example.com -evasion 1
```

Encodes the URI using random URI encoding to bypass IDS.

### nikto -h http://example.com -evasion 2

```bash
nikto -h http://example.com -evasion 2
```

Adds a self-reference directory (/./) to the request URI.

### nikto -h http://example.com -evasion 3

```bash
nikto -h http://example.com -evasion 3
```

Ends the URL prematurely to confuse certain filters.

### nikto -h http://example.com -evasion 4

```bash
nikto -h http://example.com -evasion 4
```

Prepends a long random string to the request URI.

### nikto -h http://example.com -evasion 5

```bash
nikto -h http://example.com -evasion 5
```

Appends a fake parameter to the file request.

### nikto -h http://example.com -evasion 6

```bash
nikto -h http://example.com -evasion 6
```

Uses TAB as a request spacer instead of spaces.

### nikto -h http://example.com -evasion 7

```bash
nikto -h http://example.com -evasion 7
```

Randomly changes the case of the URL characters.

### nikto -h http://example.com -evasion 8

```bash
nikto -h http://example.com -evasion 8
```

Uses Windows-style directory separators (\) instead of forward slashes.

### nikto -h http://example.com -evasion 17

```bash
nikto -h http://example.com -evasion 17
```

Combines Random URI encoding and Case changing for stronger evasion.


## User Agent Customization

### nikto -h http://example.com -useragent "MyCustomAgent/1.0"

```bash
nikto -h http://example.com -useragent "MyCustomAgent/1.0"
```

Sets a custom User-Agent string to identify or hide the scanner.


## Authentication

### nikto -h http://example.com -id admin:password

```bash
nikto -h http://example.com -id admin:password
```

Uses Basic Authentication with the provided username and password.

### nikto -h http://example.com -id "realm:admin:password"

```bash
nikto -h http://example.com -id "realm:admin:password"
```

Uses Basic Authentication for a specific realm.


## Proxy Integration

### nikto -h http://example.com -useproxy http://127.0.0.1:8080

```bash
nikto -h http://example.com -useproxy http://127.0.0.1:8080
```

Routes the scan traffic through an HTTP proxy.

### nikto -h http://example.com -useproxy http://user:pass@127.0.0.1:8080

```bash
nikto -h http://example.com -useproxy http://user:pass@127.0.0.1:8080
```

Routes traffic through an authenticated HTTP proxy.


## Timeout and Throttling

### nikto -h http://example.com -timeout 10

```bash
nikto -h http://example.com -timeout 10
```

Sets the connection timeout to 10 seconds.

### nikto -h http://example.com -maxtime 60s

```bash
nikto -h http://example.com -maxtime 60s
```

Stops the scan entirely after 60 seconds.

### nikto -h http://example.com -pause 2

```bash
nikto -h http://example.com -pause 2
```

Waits 2 seconds between every request to reduce load.


## CGI and Specific Tests

### nikto -h http://example.com -Cgidirs /cgi-bin/

```bash
nikto -h http://example.com -Cgidirs /cgi-bin/
```

Forces scanning of a specific CGI directory.

### nikto -h http://example.com -Cgidirs none

```bash
nikto -h http://example.com -Cgidirs none
```

Disables scanning of any CGI directories.

### nikto -h http://example.com -Cgidirs all

```bash
nikto -h http://example.com -Cgidirs all
```

Forces scanning of all discovered directories as CGI directories.

### nikto -h http://example.com -root /app

```bash
nikto -h http://example.com -root /app
```

Sets the root directory for the scan to a subdirectory.


## Mutation Techniques

### nikto -h http://example.com -mutate 1

```bash
nikto -h http://example.com -mutate 1
```

Tests all files within all root directories.

### nikto -h http://example.com -mutate 2

```bash
nikto -h http://example.com -mutate 2
```

Guesses password file names.

### nikto -h http://example.com -mutate 3

```bash
nikto -h http://example.com -mutate 3
```

Enumerates user names using Apache home directory syntax (~user).

### nikto -h http://example.com -mutate 4

```bash
nikto -h http://example.com -mutate 4
```

Guesses parameter values for common files.

### nikto -h http://example.com -mutate 5

```bash
nikto -h http://example.com -mutate 5
```

Brute forces subdomains (requires the host to be an IP or name).

### nikto -h http://example.com -mutate 6

```bash
nikto -h http://example.com -mutate 6
```

Guesses directory names using a dictionary.


## Advanced Configuration

### nikto -h http://example.com -config /path/to/nikto.conf

```bash
nikto -h http://example.com -config /path/to/nikto.conf
```

Uses a custom configuration file for the scan.

### nikto -h http://example.com -nolookup

```bash
nikto -h http://example.com -nolookup
```

Disables DNS name lookups.

### nikto -h http://example.com -nossl

```bash
nikto -h http://example.com -nossl
```

Disables SSL completely.

### nikto -h http://example.com -no404

```bash
nikto -h http://example.com -no404
```

Disables 404 (Not Found) detection logic.

### nikto -h http://example.com -ignorecode 302

```bash
nikto -h http://example.com -ignorecode 302
```

Ignores specific HTTP status codes during the scan.

### nikto -h http://example.com -404code 404

```bash
nikto -h http://example.com -404code 404
```

Ignores a specific HTTP code when determining 404 responses.

### nikto -h http://example.com -404string "Not Found"

```bash
nikto -h http://example.com -404string "Not Found"
```

Uses a custom string to identify 404 error pages.


## Plugin Control

### nikto -h http://example.com -Plugins apache_expect_xss

```bash
nikto -h http://example.com -Plugins apache_expect_xss
```

Runs only the specified plugin.

### nikto -h http://example.com -Plugins "@@NONE"

```bash
nikto -h http://example.com -Plugins "@@NONE"
```

Runs no plugins (useful for just header checks or port verification).

### nikto -h http://example.com -dbcheck

```bash
nikto -h http://example.com -dbcheck
```

Checks the syntax of the scan databases.


## Combined Real World

### nikto -h http://example.com -ssl -Cgidirs none -Tuning 9

```bash
nikto -h http://example.com -ssl -Cgidirs none -Tuning 9
```

Quick SQL injection scan over SSL ignoring CGI directories.

### nikto -h http://example.com -Tuning x 6

```bash
nikto -h http://example.com -Tuning x 6
```

Scans for everything EXCEPT Denial of Service tests.

### nikto -h http://example.com -useragent "Mozilla/5.0" -evasion 1 -timeout 5

```bash
nikto -h http://example.com -useragent "Mozilla/5.0" -evasion 1 -timeout 5
```

Stealthy scan with browser UA, URI encoding evasion, and short timeouts.

### nikto -h http://example.com -output scan.xml -Format xml -maxtime 300

```bash
nikto -h http://example.com -output scan.xml -Format xml -maxtime 300
```

Time-boxed 5-minute scan exporting directly to XML.


## Interactive

### nikto -h http://example.com -nointeractive

```bash
nikto -h http://example.com -nointeractive
```

Disables interactive features (like pressing space for status) for background jobs.


## Update

### nikto -update

```bash
nikto -update
```

Updates the Nikto plugins and databases (may require root).


## Multiple Targets

### nikto -h targets.txt

```bash
nikto -h targets.txt
```

Scans multiple hosts listed in a text file.

### nmap -p80 192.168.1.0/24 -oG - | nikto -h -

```bash
nmap -p80 192.168.1.0/24 -oG - | nikto -h -
```

Pipes Nmap grepable output directly into Nikto for scanning.


## Advanced Auth

### nikto -h http://example.com -id user:pass -realm "Restricted Area"

```bash
nikto -h http://example.com -id user:pass -realm "Restricted Area"
```

Authenticates to a specific realm using Basic Auth.


## Tuning Exclusion

### nikto -h http://example.com -Tuning x 6

```bash
nikto -h http://example.com -Tuning x 6
```

Runs all tests except Denial of Service checks to prevent crashing the server.


## Header Customization

### nikto -h http://example.com -useragent "Googlebot/2.1"

```bash
nikto -h http://example.com -useragent "Googlebot/2.1"
```

Spoofs the User-Agent to appear as a Google crawler.


## Client Certificate

### nikto -h https://example.com -clientcert /path/cert.pem

```bash
nikto -h https://example.com -clientcert /path/cert.pem
```

Uses a client-side certificate for mutual TLS authentication.

### nikto -h https://example.com -clientkey /path/key.pem

```bash
nikto -h https://example.com -clientkey /path/key.pem
```

Specifies the private key file for the client certificate.


## IPv6 Scanning

### nikto -h [dead:beef::1]

```bash
nikto -h [dead:beef::1]
```

Scans a target specified by an IPv6 address.


## Host Header

### nikto -h 192.168.1.10 -vhost example.com

```bash
nikto -h 192.168.1.10 -vhost example.com
```

Scans an IP but sends a specific Host header for virtual host routing.


## Report Generation

### nikto -h http://example.com -o results.html -F html -o results.xml -F xml

```bash
nikto -h http://example.com -o results.html -F html -o results.xml -F xml
```

Saves the report in both HTML and XML formats simultaneously.


## Red Team

### nikto -h http://example.com -evasion 1234 -pause 10

```bash
nikto -h http://example.com -evasion 1234 -pause 10
```

Highly evasive scan with multiple encoding methods and slow request delay.


## Blue Team Validation

### nikto -h http://example.com -Tuning 02 -Display V

```bash
nikto -h http://example.com -Tuning 02 -Display V
```

Verbose scan focusing on uploads and misconfigurations for verification.


## Automated Pipeline

### nikto -h http://example.com -nointeractive -o scan.json -Format json

```bash
nikto -h http://example.com -nointeractive -o scan.json -Format json
```

Non-interactive scan suitable for CI/CD pipelines producing JSON output.


## Port Definition

### nikto -h https://example.com -p 443 -ssl

```bash
nikto -h https://example.com -p 443 -ssl
```

Explicitly defines port 443 and forces SSL mode.


## Cookie Manipulation

### nikto -h http://example.com -Display 2

```bash
nikto -h http://example.com -Display 2
```

Displays all cookies set by the server during the scan.


## Plugin Tuning

### nikto -h http://example.com -Plugins tests(report:500)

```bash
nikto -h http://example.com -Plugins tests(report:500)
```

Passes specific arguments to plugins (e.g., reporting 500 errors).


## Quiet Scan

### nikto -h http://example.com -Display V -o /dev/null

```bash
nikto -h http://example.com -Display V -o /dev/null
```

Runs scan displaying verbose output to screen but discarding file output.


## Resume Scan

### nikto -h http://example.com -until 12:00

```bash
nikto -h http://example.com -until 12:00
```

Runs the scan until a specified time.


## Force IP

### nikto -h example.com -force-ip

```bash
nikto -h example.com -force-ip
```

Forces Nikto to resolve the IP and scan the IP instead of hostname.


## Ignore Cookies

### nikto -h http://example.com -nocache

```bash
nikto -h http://example.com -nocache
```

Disables response caching to ensure fresh results.


## Metasploit Format

### nikto -h http://example.com -Format msf+

```bash
nikto -h http://example.com -Format msf+
```

Outputs logs in a format compatible with Metasploit.


## Environment Variable

### NIKTO_IGNORE_CODE=404 nikto -h http://example.com

```bash
NIKTO_IGNORE_CODE=404 nikto -h http://example.com
```

Uses environment variables to control configuration.


## Single Plugin Test

### nikto -h http://example.com -Plugins sitefiles

```bash
nikto -h http://example.com -Plugins sitefiles
```

Runs only the sitefiles plugin to find backup files and zip archives.


## Advanced

### nikto -h http://example.com -mutate 3 -mutate-options user_list.txt

```bash
nikto -h http://example.com -mutate 3 -mutate-options user_list.txt
```

Enumerates users providing a custom user list for mutation.


## Full Comprehensive

### nikto -h http://example.com -Cgidirs all -Tuning 1234567890abc -format txt -output full_scan.txt

```bash
nikto -h http://example.com -Cgidirs all -Tuning 1234567890abc -format txt -output full_scan.txt
```

Runs every possible tuning category on all CGI directories saving to text.

## Related tools

- [Nuclei](https://terminal.rokibulroni.com/tool/web/nuclei)
- [WhatWeb](https://terminal.rokibulroni.com/tool/web/whatweb)
- [WPScan](https://terminal.rokibulroni.com/tool/web/wpscan)
