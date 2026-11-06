# dirsearch

> A web path scanner that brute-forces directories and files with smart extension handling, recursion and filtering.

- Category: Web
- Commands: 70
- Page: https://terminal.rokibulroni.com/tool/web/dirsearch
- Homepage: https://github.com/maurosoria/dirsearch
- Documentation: https://github.com/maurosoria/dirsearch#usage
- Tags: content discovery, brute force, directories

## Install

- apt: `sudo apt install dirsearch`
- pipx: `pipx install dirsearch`

## Basic Directory Enumeration

### dirsearch -u https://example.com

```bash
dirsearch -u https://example.com
```

Performs a standard directory brute-force scan on a single target URL using default settings.

### dirsearch -u https://example.com/

```bash
dirsearch -u https://example.com/
```

Runs a scan ensuring the target URL includes a trailing slash for root directory enumeration.

### dirsearch -u https://example.com/admin

```bash
dirsearch -u https://example.com/admin
```

Targets a specific subdirectory path to begin the enumeration process.


## File Extension Enumeration

### dirsearch -u https://example.com -e php

```bash
dirsearch -u https://example.com -e php
```

Scans for files with the specific .php extension along with directories.

### dirsearch -u https://example.com -e php,html,js

```bash
dirsearch -u https://example.com -e php,html,js
```

Enumerates files matching multiple extensions separated by commas.

### dirsearch -u https://example.com -e *

```bash
dirsearch -u https://example.com -e *
```

Forces the tool to fuzz with all extensions found in the selected wordlist.

### dirsearch -u https://example.com -X php

```bash
dirsearch -u https://example.com -X php
```

Excludes specific file extensions from the scan results to reduce noise.


## Recursive Scanning

### dirsearch -u https://example.com -r

```bash
dirsearch -u https://example.com -r
```

Enables recursive scanning to brute-force subdirectories found during the initial scan.

### dirsearch -u https://example.com -r --recursion-depth 3

```bash
dirsearch -u https://example.com -r --recursion-depth 3
```

Limits the recursive scan to a maximum depth of 3 directory levels.

### dirsearch -u https://example.com -r --recursion-status 200-399

```bash
dirsearch -u https://example.com -r --recursion-status 200-399
```

Only triggers recursion on paths that return status codes between 200 and 399.

### dirsearch -u https://example.com --deep-recursive

```bash
dirsearch -u https://example.com --deep-recursive
```

Forces deep recursion on all found paths regardless of status code heuristics.


## Multiple Target Scanning

### dirsearch -l targets.txt

```bash
dirsearch -l targets.txt
```

Scans a list of URLs provided in a text file line by line.

### dirsearch --stdin

```bash
dirsearch --stdin
```

Example:

```bash
cat urls.txt | dirsearch --stdin
```

Accepts target URLs piped directly from standard input for pipeline integration.


## Wordlist Selection and Customization

### dirsearch -u https://example.com -w /path/to/wordlist.txt

```bash
dirsearch -u https://example.com -w /path/to/wordlist.txt
```

Example:

```bash
dirsearch -u https://example.com -w /usr/share/wordlists/dirb/common.txt
```

Specifies a custom dictionary file instead of using the built-in default wordlist.

### dirsearch -u https://example.com --prefixes .admin

```bash
dirsearch -u https://example.com --prefixes .admin
```

Adds a custom prefix to all wordlist entries during the scan.

### dirsearch -u https://example.com --suffixes .bak

```bash
dirsearch -u https://example.com --suffixes .bak
```

Appends a custom suffix to all wordlist entries to find backup files.

### dirsearch -u https://example.com --uppercase

```bash
dirsearch -u https://example.com --uppercase
```

Mutates the wordlist to use uppercase characters for case-sensitive servers.


## HTTP Methods

### dirsearch -u https://example.com -m POST

```bash
dirsearch -u https://example.com -m POST
```

Changes the HTTP request method to POST for all enumeration attempts.

### dirsearch -u https://example.com -m HEAD

```bash
dirsearch -u https://example.com -m HEAD
```

Uses HEAD requests to reduce bandwidth usage while checking for existence.


## Header and Cookie Customization

### dirsearch -u https://example.com --header "Authorization: Bearer <token>"

```bash
dirsearch -u https://example.com --header "Authorization: Bearer <token>"
```

Example:

```bash
dirsearch -u https://example.com --header "Authorization: Bearer 12345"
```

Injects a custom HTTP header such as an Authorization token into every request.

### dirsearch -u https://example.com --cookie "SessionId=123"

```bash
dirsearch -u https://example.com --cookie "SessionId=123"
```

Sets a custom cookie to perform authenticated scanning or session testing.

### dirsearch -u https://example.com --user-agent "Googlebot/2.1"

```bash
dirsearch -u https://example.com --user-agent "Googlebot/2.1"
```

Spoofs the User-Agent string to bypass filters or emulate specific clients.

### dirsearch -u https://example.com --random-agent

```bash
dirsearch -u https://example.com --random-agent
```

Rotates a random User-Agent for each request to evade simple WAF blocking.


## Authentication Handling

### dirsearch -u https://example.com --auth "user:password"

```bash
dirsearch -u https://example.com --auth "user:password"
```

Example:

```bash
dirsearch -u https://example.com --auth "admin:secret"
```

Uses Basic Authentication credentials for protected endpoints.

### dirsearch -u https://example.com --auth-type digest --auth "user:password"

```bash
dirsearch -u https://example.com --auth-type digest --auth "user:password"
```

Example:

```bash
dirsearch -u https://example.com --auth-type digest --auth "admin:secret"
```

Specifies Digest authentication method instead of the default Basic auth.


## Proxy and Burp Integration

### dirsearch -u https://example.com --proxy 127.0.0.1:8080

```bash
dirsearch -u https://example.com --proxy 127.0.0.1:8080
```

Routes all traffic through an HTTP proxy like Burp Suite or OWASP ZAP.

### dirsearch -u https://example.com --proxy socks5://127.0.0.1:9050

```bash
dirsearch -u https://example.com --proxy socks5://127.0.0.1:9050
```

Routes scan traffic through a SOCKS5 proxy such as Tor.

### dirsearch -u https://example.com --proxy-auth "user:pass"

```bash
dirsearch -u https://example.com --proxy-auth "user:pass"
```

Provides credentials for authenticating with an upstream proxy server.


## TLS and HTTPS Configuration

### dirsearch -u https://example.com --scheme https

```bash
dirsearch -u https://example.com --scheme https
```

Example:

```bash
dirsearch -u example.com --scheme https
```

Forces the scanner to use HTTPS if the protocol was not specified in the URL.


## Status Code Matching and Filtering

### dirsearch -u https://example.com -i 200,301

```bash
dirsearch -u https://example.com -i 200,301
```

Includes only specific status codes (e.g., 200 OK and 301 Redirect) in the output.

### dirsearch -u https://example.com -x 404,500

```bash
dirsearch -u https://example.com -x 404,500
```

Excludes specific status codes (e.g., 404 Not Found) from the results.

### dirsearch -u https://example.com --exclude-status 403,401

```bash
dirsearch -u https://example.com --exclude-status 403,401
```

An alternative long-form flag to hide Forbidden and Unauthorized responses.


## Response Size and Line Filtering

### dirsearch -u https://example.com --exclude-sizes 0B,123B

```bash
dirsearch -u https://example.com --exclude-sizes 0B,123B
```

Filters out responses based on specific content lengths in bytes.

### dirsearch -u https://example.com --exclude-text "Not Found"

```bash
dirsearch -u https://example.com --exclude-text "Not Found"
```

Excludes responses containing a specific text string in the body.

### dirsearch -u https://example.com --minimal 200

```bash
dirsearch -u https://example.com --minimal 200
```

Only reports responses that are larger than the specified size in bytes.

### dirsearch -u https://example.com --maximal 5000

```bash
dirsearch -u https://example.com --maximal 5000
```

Only reports responses that are smaller than the specified size in bytes.


## Regex Based Filtering

### dirsearch -u https://example.com --exclude-regex "^Error.*$"

```bash
dirsearch -u https://example.com --exclude-regex "^Error.*$"
```

Uses a regular expression to filter out responses matching a specific pattern.

### dirsearch -u https://example.com --exclude-redirect "google.com"

```bash
dirsearch -u https://example.com --exclude-redirect "google.com"
```

Excludes redirects that point to a specific URL or domain pattern.


## Threading and Performance Tuning

### dirsearch -u https://example.com -t 50

```bash
dirsearch -u https://example.com -t 50
```

Increases the number of concurrent threads to 50 to speed up the scan.

### dirsearch -u https://example.com --max-rate 10

```bash
dirsearch -u https://example.com --max-rate 10
```

Limits the scan speed to a maximum of 10 requests per second to avoid rate limiting.


## Timeout, Delay, and Retry Control

### dirsearch -u https://example.com --delay 0.5

```bash
dirsearch -u https://example.com --delay 0.5
```

Adds a half-second delay between requests to be stealthier.

### dirsearch -u https://example.com --timeout 10

```bash
dirsearch -u https://example.com --timeout 10
```

Sets the maximum time to wait for a server response to 10 seconds.

### dirsearch -u https://example.com --retries 3

```bash
dirsearch -u https://example.com --retries 3
```

Retries failed requests up to 3 times before giving up on a path.


## Output Formats

### dirsearch -u https://example.com --format json -o report.json

```bash
dirsearch -u https://example.com --format json -o report.json
```

Saves the scan results in a structured JSON file for parsing.

### dirsearch -u https://example.com --format csv -o report.csv

```bash
dirsearch -u https://example.com --format csv -o report.csv
```

Exports the findings to a CSV file for spreadsheet analysis.

### dirsearch -u https://example.com --format simple -o report.txt

```bash
dirsearch -u https://example.com --format simple -o report.txt
```

Saves results in a simple, human-readable text format.


## Verbose and Debug Modes

### dirsearch -u https://example.com --quiet

```bash
dirsearch -u https://example.com --quiet
```

Example:

```bash
dirsearch -u https://example.com -q
```

Suppresses the banner and standard output, showing only successful findings.

### dirsearch -u https://example.com --full-url

```bash
dirsearch -u https://example.com --full-url
```

Displays the full URL in the output instead of just the path.

### dirsearch -u https://example.com --no-color

```bash
dirsearch -u https://example.com --no-color
```

Disables colored output, useful for logging to files or terminals without color support.


## Automation and Pipeline Usage

### dirsearch -u https://example.com --exit-on-error

```bash
dirsearch -u https://example.com --exit-on-error
```

Forces the tool to exit immediately if an error occurs, useful in automated scripts.


## Web Application Reconnaissance

### dirsearch -u https://example.com --subdirs admin/,backup/,test/

```bash
dirsearch -u https://example.com --subdirs admin/,backup/,test/
```

Scans the target wordlist against specific provided subdirectories.

### dirsearch -u https://example.com --skip-on-status 429

```bash
dirsearch -u https://example.com --skip-on-status 429
```

Skips the current target if a 'Too Many Requests' (429) status is received.


## Red Team Web Enumeration

### dirsearch -u https://example.com -r -e php,aspx,jsp --exclude-status 404 --random-agent

```bash
dirsearch -u https://example.com -r -e php,aspx,jsp --exclude-status 404 --random-agent
```

A combined command for stealthy, recursive discovery of dynamic application files.

### dirsearch -u https://example.com --header "X-Forwarded-For: 127.0.0.1" -e conf,config,bak

```bash
dirsearch -u https://example.com --header "X-Forwarded-For: 127.0.0.1" -e conf,config,bak
```

Attempts to bypass access controls while hunting for sensitive configuration backups.

### dirsearch -u https://example.com -m POST --data "debug=true"

```bash
dirsearch -u https://example.com -m POST --data "debug=true"
```

Sends POST requests with specific data payload to trigger debug responses.


## Blue Team Exposure Validation

### dirsearch -u https://example.com -w sensitive_files.txt --include-status 200

```bash
dirsearch -u https://example.com -w sensitive_files.txt --include-status 200
```

Validates if a specific list of sensitive files is publicly accessible (Status 200).

### dirsearch -u https://example.com --exclude-sizes 0-500 --format json -o internal_audit.json

```bash
dirsearch -u https://example.com --exclude-sizes 0-500 --format json -o internal_audit.json
```

Generates an audit report of potentially non-empty exposed endpoints.


## Advanced and Combined Real World Scans

### dirsearch -u https://example.com -t 100 --random-agent -e php --exclude-status 403,404,500

```bash
dirsearch -u https://example.com -t 100 --random-agent -e php --exclude-status 403,404,500
```

Aggressive, high-thread php file discovery filtering out common error codes.

### dirsearch -u https://example.com --crawl

```bash
dirsearch -u https://example.com --crawl
```

Enables the experimental crawling mode to discover paths via links in responses.

### dirsearch -u https://example.com --remove-extensions

```bash
dirsearch -u https://example.com --remove-extensions
```

Removes extensions from wordlist entries, useful for modern REST API endpoint discovery.

### dirsearch -u https://example.com --overwrite-extensions

```bash
dirsearch -u https://example.com --overwrite-extensions
```

Example:

```bash
dirsearch -u https://example.com -e php --overwrite-extensions
```

Replaces any extensions in the wordlist with the one specified in the -e flag.

### dirsearch -u https://example.com --force-extensions

```bash
dirsearch -u https://example.com --force-extensions
```

Example:

```bash
dirsearch -u https://example.com -e php --force-extensions
```

Forces the appending of extensions to every wordlist entry, even if one exists.

### dirsearch -u https://example.com --suppress-empty

```bash
dirsearch -u https://example.com --suppress-empty
```

Hides results that return an empty response body.

### dirsearch -u https://example.com --calibration

```bash
dirsearch -u https://example.com --calibration
```

Performs calibration on non-existent paths to automatically determine filters.

### dirsearch -u https://example.com --min-response-size 1000

```bash
dirsearch -u https://example.com --min-response-size 1000
```

Filters out any responses smaller than 1KB, often removing default error pages.

### dirsearch -u https://example.com --max-response-size 100000

```bash
dirsearch -u https://example.com --max-response-size 100000
```

Filters out large responses, useful for skipping large media files.

### dirsearch -u https://example.com --request-by-hostname

```bash
dirsearch -u https://example.com --request-by-hostname
```

Forces the tool to request by hostname rather than IP, critical for virtual hosts.

### dirsearch -u https://example.com --ip 192.168.1.1

```bash
dirsearch -u https://example.com --ip 192.168.1.1
```

Resolves the target domain to a specific IP address manually.

### dirsearch -u https://example.com --exclude-content /error.html

```bash
dirsearch -u https://example.com --exclude-content /error.html
```

Excludes pages that look like the content of the specified file path.

### dirsearch -u https://example.com --raw-http-request /path/to/req.txt

```bash
dirsearch -u https://example.com --raw-http-request /path/to/req.txt
```

Example:

```bash
dirsearch -u https://example.com --raw-http-request /tmp/request.txt
```

Loads a raw HTTP request from a file to perform scanning with exact headers.

## Related tools

- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
- [Gobuster](https://terminal.rokibulroni.com/tool/web/gobuster)
- [Wfuzz](https://terminal.rokibulroni.com/tool/web/wfuzz)
