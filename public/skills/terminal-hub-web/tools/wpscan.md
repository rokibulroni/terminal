# WPScan

> A WordPress security scanner that enumerates versions, plugins, themes and users and checks them against a vulnerability database.

- Category: Web
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/web/wpscan
- Homepage: https://wpscan.com
- Documentation: https://github.com/wpscanteam/wpscan/wiki/WPScan-User-Documentation
- Tags: WordPress, CMS, enumeration

## Install

- apt: `sudo apt install wpscan`
- brew: `brew install wpscanteam/tap/wpscan`
- docker: `docker run -it --rm wpscanteam/wpscan --url <target>`

## Basic WordPress Scan

### wpscan --url https://example.com

```bash
wpscan --url https://example.com
```

Performs a simple scan to detect core version, main theme, and common plugins.

### wpscan --url https://example.com --verbose

```bash
wpscan --url https://example.com --verbose
```

Runs a basic scan with verbose output to show more details about the execution.

### wpscan --url https://example.com --no-banner

```bash
wpscan --url https://example.com --no-banner
```

Runs the scan without displaying the WPScan ASCII art banner.


## Connection Options

### wpscan --url https://example.com --random-user-agent

```bash
wpscan --url https://example.com --random-user-agent
```

Uses a random user-agent for each request to bypass basic firewall rules.

### wpscan --url https://example.com --user-agent "CustomAgent/1.0"

```bash
wpscan --url https://example.com --user-agent "CustomAgent/1.0"
```

Sets a specific custom User-Agent string for all requests.


## Enumeration - Plugins

### wpscan --url https://example.com --enumerate vp

```bash
wpscan --url https://example.com --enumerate vp
```

Enumerates only plugins that are known to be vulnerable.

### wpscan --url https://example.com --enumerate p

```bash
wpscan --url https://example.com --enumerate p
```

Enumerates the most popular WordPress plugins.

### wpscan --url https://example.com --enumerate ap

```bash
wpscan --url https://example.com --enumerate ap
```

Enumerates all plugins (aggressive detection, may take a long time).


## Enumeration - Themes

### wpscan --url https://example.com --enumerate vt

```bash
wpscan --url https://example.com --enumerate vt
```

Enumerates only themes that are known to be vulnerable.

### wpscan --url https://example.com --enumerate t

```bash
wpscan --url https://example.com --enumerate t
```

Enumerates the most popular WordPress themes.

### wpscan --url https://example.com --enumerate at

```bash
wpscan --url https://example.com --enumerate at
```

Enumerates all themes (aggressive detection).


## Enumeration - Users

### wpscan --url https://example.com --enumerate u

```bash
wpscan --url https://example.com --enumerate u
```

Enumerates users using default methods (IDs 1-10).

### wpscan --url https://example.com --enumerate u1-50

```bash
wpscan --url https://example.com --enumerate u1-50
```

Enumerates users with IDs specifically within the range of 1 to 50.


## Enumeration - Files

### wpscan --url https://example.com --enumerate tt

```bash
wpscan --url https://example.com --enumerate tt
```

Scans specifically for TimThumb files (image resizing scripts often vulnerable).

### wpscan --url https://example.com --enumerate cb

```bash
wpscan --url https://example.com --enumerate cb
```

Scans for configuration backup files (e.g., wp-config.php.bak).

### wpscan --url https://example.com --enumerate dbe

```bash
wpscan --url https://example.com --enumerate dbe
```

Scans for database export files which may contain sensitive data.


## Enumeration - Media

### wpscan --url https://example.com --enumerate m

```bash
wpscan --url https://example.com --enumerate m
```

Enumerates media IDs range to identify attachment names.


## Enumeration - Combined

### wpscan --url https://example.com --enumerate vp,vt,tt,cb,dbe,u,m

```bash
wpscan --url https://example.com --enumerate vp,vt,tt,cb,dbe,u,m
```

Runs a comprehensive enumeration for vuln plugins, themes, timthumbs, backups, DB exports, users, and media.


## Vulnerability Database API

### wpscan --url https://example.com --api-token YOUR_TOKEN

```bash
wpscan --url https://example.com --api-token YOUR_TOKEN
```

Example:

```bash
wpscan --url https://example.com --api-token ABC123XYZ
```

Uses the WPVulnDB API token to display specific vulnerability data for identified components.


## Detection Mode

### wpscan --url https://example.com --detection-mode passive

```bash
wpscan --url https://example.com --detection-mode passive
```

Forces passive detection mode, processing only the homepage and avoiding aggressive requests.

### wpscan --url https://example.com --detection-mode aggressive

```bash
wpscan --url https://example.com --detection-mode aggressive
```

Forces aggressive detection mode, requesting every potential plugin/theme url to verify existence.

### wpscan --url https://example.com --plugins-detection mixed

```bash
wpscan --url https://example.com --plugins-detection mixed
```

Uses a mix of passive and aggressive methods for plugin detection.

### wpscan --url https://example.com --plugins-version-detection passive

```bash
wpscan --url https://example.com --plugins-version-detection passive
```

Checks plugin versions solely based on the readme file or file headers without aggressive probing.


## Bypass & Evasion

### wpscan --url https://example.com --stealthy

```bash
wpscan --url https://example.com --stealthy
```

Alias command that enables random user agent, passive detection, and passive version detection.

### wpscan --url https://example.com --throttle 500

```bash
wpscan --url https://example.com --throttle 500
```

Waits 500 milliseconds between requests to avoid hitting rate limits.

### wpscan --url https://example.com --request-timeout 60

```bash
wpscan --url https://example.com --request-timeout 60
```

Sets the request timeout to 60 seconds for slow servers.

### wpscan --url https://example.com --connect-timeout 30

```bash
wpscan --url https://example.com --connect-timeout 30
```

Sets the connection timeout to 30 seconds.


## Performance

### wpscan --url https://example.com --max-threads 10

```bash
wpscan --url https://example.com --max-threads 10
```

Increases the scanning speed by using 10 concurrent threads.


## Proxy & Tor

### wpscan --url https://example.com --proxy http://127.0.0.1:8080

```bash
wpscan --url https://example.com --proxy http://127.0.0.1:8080
```

Routes all traffic through an HTTP proxy (e.g., Burp Suite).

### wpscan --url https://example.com --proxy socks5://127.0.0.1:9050

```bash
wpscan --url https://example.com --proxy socks5://127.0.0.1:9050
```

Routes all traffic through a SOCKS5 proxy (e.g., Tor).

### wpscan --url https://example.com --proxy-auth username:password

```bash
wpscan --url https://example.com --proxy-auth username:password
```

Example:

```bash
wpscan --url https://example.com --proxy http://1.2.3.4:8080 --proxy-auth admin:secret
```

Provides authentication credentials for the proxy server.


## Authentication (Target)

### wpscan --url https://example.com --http-auth username:password

```bash
wpscan --url https://example.com --http-auth username:password
```

Example:

```bash
wpscan --url https://example.com --http-auth admin:secret
```

Uses HTTP Basic Authentication for targets protected by .htaccess/htpasswd.

### wpscan --url https://example.com --cookie "wordpress_logged_in_hash=value"

```bash
wpscan --url https://example.com --cookie "wordpress_logged_in_hash=value"
```

Example:

```bash
wpscan --url https://example.com --cookie "wordpress_logged_in_x=12345"
```

Supplies a session cookie to simulate a logged-in user scan.


## Networking

### wpscan --url https://example.com --headers "X-Custom-Header: value"

```bash
wpscan --url https://example.com --headers "X-Custom-Header: value"
```

Example:

```bash
wpscan --url https://example.com --headers "X-Bug-Bounty: user123"
```

Adds custom HTTP headers to every request sent by the scanner.

### wpscan --url https://example.com --disable-tls-checks

```bash
wpscan --url https://example.com --disable-tls-checks
```

Disables SSL/TLS certificate verification (useful for self-signed certificates).


## Advanced Scanning

### wpscan --url https://example.com --force

```bash
wpscan --url https://example.com --force
```

Forces the scan to proceed even if the target does not appear to be WordPress.

### wpscan --url https://example.com --ignore-main-redirect

```bash
wpscan --url https://example.com --ignore-main-redirect
```

Prevents the scanner from following a redirect on the main URL.

### wpscan --url https://example.com --wp-content-dir custom-content

```bash
wpscan --url https://example.com --wp-content-dir custom-content
```

Example:

```bash
wpscan --url https://example.com --wp-content-dir wp-content-renamed
```

Manually specifies the wp-content directory if it has been renamed for security.

### wpscan --url https://example.com --wp-plugins-dir custom-plugins

```bash
wpscan --url https://example.com --wp-plugins-dir custom-plugins
```

Example:

```bash
wpscan --url https://example.com --wp-plugins-dir assets/plugins
```

Manually specifies the plugins directory location.


## Brute Force - Preparation

### wpscan --url https://example.com --enumerate u

```bash
wpscan --url https://example.com --enumerate u
```

First step of brute force: identifying valid usernames to attack.


## Brute Force

### wpscan --url https://example.com --passwords rockyou.txt --usernames admin

```bash
wpscan --url https://example.com --passwords rockyou.txt --usernames admin
```

Example:

```bash
wpscan --url https://example.com -P rockyou.txt -U admin
```

Performs a password dictionary attack against a single username 'admin'.

### wpscan --url https://example.com --passwords pass.txt --usernames users.txt

```bash
wpscan --url https://example.com --passwords pass.txt --usernames users.txt
```

Example:

```bash
wpscan --url https://example.com -P pass.txt -U users.txt
```

Performs a password attack using a list of usernames and a list of passwords.

### wpscan --url https://example.com --wordlist dictionary.txt --threads 20

```bash
wpscan --url https://example.com --wordlist dictionary.txt --threads 20
```

Example:

```bash
wpscan --url https://example.com -P dictionary.txt -U admin -t 20
```

Runs a brute force attack with increased concurrency (20 threads).

### wpscan --url https://example.com --password-attack wp-login

```bash
wpscan --url https://example.com --password-attack wp-login
```

Example:

```bash
wpscan --url https://example.com -P list.txt -U admin --password-attack wp-login
```

Forces the brute force attack to use the standard wp-login.php form.

### wpscan --url https://example.com --password-attack xmlrpc

```bash
wpscan --url https://example.com --password-attack xmlrpc
```

Example:

```bash
wpscan --url https://example.com -P list.txt -U admin --password-attack xmlrpc
```

Forces the brute force attack to use the XML-RPC interface (faster than wp-login).

### wpscan --url https://example.com --multicall-max-passwords 500

```bash
wpscan --url https://example.com --multicall-max-passwords 500
```

Example:

```bash
wpscan --url https://example.com -P list.txt -U admin --password-attack xmlrpc --multicall-max-passwords 500
```

Attempts 500 passwords per single XML-RPC request to optimize speed.

### wpscan --url https://example.com --exclude-content-based "Error"

```bash
wpscan --url https://example.com --exclude-content-based "Error"
```

Example:

```bash
wpscan --url https://example.com -U admin -P list.txt --exclude-content-based "Error"
```

Excludes responses containing specific text 'Error' from valid login results.


## Output & Logging

### wpscan --url https://example.com --format json

```bash
wpscan --url https://example.com --format json
```

Outputs the scan results to the console in JSON format.

### wpscan --url https://example.com --format cli-no-colour

```bash
wpscan --url https://example.com --format cli-no-colour
```

Outputs text results without ANSI color codes (good for logging).

### wpscan --url https://example.com --output report.txt

```bash
wpscan --url https://example.com --output report.txt
```

Saves the default output into a file named report.txt.

### wpscan --url https://example.com --format json --output result.json

```bash
wpscan --url https://example.com --format json --output result.json
```

Saves the scan results in JSON format to a specific file.

### wpscan --url https://example.com --debug-output

```bash
wpscan --url https://example.com --debug-output
```

Prints raw requests and responses to the console for debugging scan issues.


## Update

### wpscan --update

```bash
wpscan --update
```

Updates the WPScan internal database (requires internet connection).


## General

### wpscan --version

```bash
wpscan --version
```

Displays the currently installed version of WPScan.


## Automation

### wpscan --url https://example.com --no-update

```bash
wpscan --url https://example.com --no-update
```

Prevents WPScan from attempting to update the database before scanning (faster start).


## Scope Control

### wpscan --url https://example.com --scope-include-content

```bash
wpscan --url https://example.com --scope-include-content
```

Allows the scanner to analyze content that might be outside the main domain scope.


## Advanced Enumeration

### wpscan --url https://example.com --enumerate u --users-detection-mode mixed

```bash
wpscan --url https://example.com --enumerate u --users-detection-mode mixed
```

Uses both passive (author archives) and aggressive (login error messages) techniques to find users.


## Custom Directories

### wpscan --url https://example.com --wp-themes-dir css/themes

```bash
wpscan --url https://example.com --wp-themes-dir css/themes
```

Specifies a custom location for the themes directory.


## Config Backup

### wpscan --url https://example.com --config-file custom_config.yml

```bash
wpscan --url https://example.com --config-file custom_config.yml
```

Uses a YAML configuration file to define scan parameters instead of command line flags.


## API Integration

### wpscan --url https://example.com --api-token TOKEN --enumerate vp,vt

```bash
wpscan --url https://example.com --api-token TOKEN --enumerate vp,vt
```

Combines API token with vulnerable plugin/theme enumeration for rich vulnerability data.


## Request Modifiers

### wpscan --url https://example.com --exclude-usernames admin,root

```bash
wpscan --url https://example.com --exclude-usernames admin,root
```

Example:

```bash
wpscan --url https://example.com --enumerate u --exclude-usernames admin,root
```

Excludes specific usernames from being reported or attacked.


## Debugging

### wpscan --url https://example.com --log file.log

```bash
wpscan --url https://example.com --log file.log
```

Creates a log file capturing the standard output of the scan.


## Complex Scan

### wpscan --url https://example.com -e vp,vt,u --api-token TOKEN --random-user-agent --ignore-main-redirect

```bash
wpscan --url https://example.com -e vp,vt,u --api-token TOKEN --random-user-agent --ignore-main-redirect
```

A realistic red-team scan: enumerate vulns/users, use API, fake UA, and ignore redirects.

### wpscan --url https://example.com --stealthy --api-token TOKEN --format json --output scan.json

```bash
wpscan --url https://example.com --stealthy --api-token TOKEN --format json --output scan.json
```

A stealthy, automated scan saving results to JSON for CI/CD pipelines.


## Brute Force

### wpscan --url https://example.com -U users.txt -P passwords.txt --login-uri /my-custom-login

```bash
wpscan --url https://example.com -U users.txt -P passwords.txt --login-uri /my-custom-login
```

Targets a custom login page URL instead of the default wp-login.php.


## Detection Tweaks

### wpscan --url https://example.com --plugins-version-detection aggressive

```bash
wpscan --url https://example.com --plugins-version-detection aggressive
```

Aggressively probes plugins to determine their exact versions.

### wpscan --url https://example.com --themes-version-detection mixed

```bash
wpscan --url https://example.com --themes-version-detection mixed
```

Uses mixed methods to determine theme versions.


## Enumeration - TimThumb

### wpscan --url https://example.com --enumerate tt

```bash
wpscan --url https://example.com --enumerate tt
```

Specific check for legacy TimThumb vulnerability existence.


## Network Security

### wpscan --url https://example.com --ssl-client-cert client.crt --ssl-client-key client.key

```bash
wpscan --url https://example.com --ssl-client-cert client.crt --ssl-client-key client.key
```

Provides client-side SSL certificates if the server requires mutual TLS.


## Basic Scan

### wpscan --help

```bash
wpscan --help
```

Displays the full help menu with all available flags and options.


## Enumeration

### wpscan --url https://example.com --enumerate ap --plugins-list plugins.txt

```bash
wpscan --url https://example.com --enumerate ap --plugins-list plugins.txt
```

Uses a custom list of plugins to check against the target instead of the default database.

### wpscan --url https://example.com --enumerate at --themes-list themes.txt

```bash
wpscan --url https://example.com --enumerate at --themes-list themes.txt
```

Uses a custom list of themes to check against the target.


## Performance

### wpscan --url https://example.com --request-timeout 10 --connect-timeout 5

```bash
wpscan --url https://example.com --request-timeout 10 --connect-timeout 5
```

Highly restrictive timeouts for failing fast on unresponsive targets.


## Output

### wpscan --url https://example.com --format cli

```bash
wpscan --url https://example.com --format cli
```

Forces the standard command line interface output format.


## Enumeration

### wpscan --url https://example.com --enumerate u --users-list users.txt

```bash
wpscan --url https://example.com --enumerate u --users-list users.txt
```

Checks for the existence of specific users from a provided list.


## Brute Force

### wpscan --url https://example.com -U admin -P pass.txt --password-attack wp-login --request-timeout 90

```bash
wpscan --url https://example.com -U admin -P pass.txt --password-attack wp-login --request-timeout 90
```

Brute force on wp-login with extended timeout to handle server lag.


## Authentication

### wpscan --url https://example.com --cookie "PHPSESSID=123; path=/"

```bash
wpscan --url https://example.com --cookie "PHPSESSID=123; path=/"
```

Sets a generic PHP session ID cookie for the scan.


## Bypass

### wpscan --url https://example.com --random-user-agent --throttle 1000

```bash
wpscan --url https://example.com --random-user-agent --throttle 1000
```

Slow, randomized scan (1 request/sec) to evade WAF rate limiting.


## Enumeration - All

### wpscan --url https://example.com --enumerate vp,vt,tt,cb,dbe,u,m --detection-mode aggressive

```bash
wpscan --url https://example.com --enumerate vp,vt,tt,cb,dbe,u,m --detection-mode aggressive
```

Maximum noise scan: enumerates everything possible with aggressive detection enabled.


## Output

### wpscan --url https://example.com --no-banner --format json

```bash
wpscan --url https://example.com --no-banner --format json
```

Clean JSON output without the banner, suitable for parsing by other tools.


## Network

### wpscan --url https://example.com --server https://githack.com

```bash
wpscan --url https://example.com --server https://githack.com
```

Example:

```bash
wpscan --url https://example.com --server https://custom-update-server.com
```

Specifies a custom server URL for WPScan updates (rarely used).


## Headers

### wpscan --url https://example.com --headers "Authorization: Bearer XYZ"

```bash
wpscan --url https://example.com --headers "Authorization: Bearer XYZ"
```

Passes an OAuth bearer token in the headers for scans behind API gateways.


## Enumeration - Range

### wpscan --url https://example.com --enumerate m1-100

```bash
wpscan --url https://example.com --enumerate m1-100
```

Enumerates media attachments specifically within ID range 1 to 100.


## Brute Force

### wpscan --url https://example.com -U admin -P pass.txt --view-state "XYZ"

```bash
wpscan --url https://example.com -U admin -P pass.txt --view-state "XYZ"
```

Passes a specific ViewState parameter if required by the login form.


## Full Audit

### wpscan --url https://example.com --enumerate vp,vt,u --api-token TOKEN --random-user-agent --format json --output audit.

```bash
wpscan --url https://example.com --enumerate vp,vt,u --api-token TOKEN --random-user-agent --format json --output audit.json
```

Example:

```bash
wpscan --url https://example.com -e vp,vt,u --api-token TOKEN --ua --format json -o audit.json
```

Complete audit command generating a JSON report with vuln data and randomized agent.

## Related tools

- [Nikto](https://terminal.rokibulroni.com/tool/web/nikto)
- [Nuclei](https://terminal.rokibulroni.com/tool/web/nuclei)
- [WhatWeb](https://terminal.rokibulroni.com/tool/web/whatweb)
