# XSSer

> An automated framework for detecting and exploiting cross-site scripting (XSS) vulnerabilities in web applications.

- Category: Web
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/web/xsser
- Homepage: https://github.com/epsylon/xsser
- Tags: XSS, injection

## Install

- apt: `sudo apt install xsser`

## Basic XSS Detection

### xsser -u "http://example.com"

```bash
xsser -u "http://example.com"
```

Initiates a basic scan against the specified target URL

### xsser -u "http://example.com/search.php?q=test"

```bash
xsser -u "http://example.com/search.php?q=test"
```

Targets a specific URL with query parameters to test for vulnerabilities

### xsser --all-tests -u "http://example.com"

```bash
xsser --all-tests -u "http://example.com"
```

Runs all available heuristics and payload tests against the target


## GET and POST Parameter Injection

### xsser -u "http://example.com" -g "/search?q="

```bash
xsser -u "http://example.com" -g "/search?q="
```

Manually defines the GET parameter to test for XSS

### xsser -u "http://example.com" -p "user=test&pass=test"

```bash
xsser -u "http://example.com" -p "user=test&pass=test"
```

Injects payloads into POST data parameters to test for XSS in form submissions

### xsser -u "http://example.com" --auto

```bash
xsser -u "http://example.com" --auto
```

Automatically analyzes the URL and attempts to inject into all discovered parameters


## Header and Cookie Injection

### xsser -u "http://example.com" --cookie="SessionId=12345"

```bash
xsser -u "http://example.com" --cookie="SessionId=12345"
```

Sets a specific cookie for the session during the XSS scan

### xsser -u "http://example.com" --drop-cookie

```bash
xsser -u "http://example.com" --drop-cookie
```

Tests if the application is vulnerable to XSS via cookie dropping

### xsser -u "http://example.com" --user-agent

```bash
xsser -u "http://example.com" --user-agent
```

Attempts to inject XSS payloads into the HTTP User-Agent header

### xsser -u "http://example.com" --referer

```bash
xsser -u "http://example.com" --referer
```

Attempts to inject XSS payloads into the HTTP Referer header

### xsser -u "http://example.com" --headers

```bash
xsser -u "http://example.com" --headers
```

Performs injection testing across all standard HTTP headers


## Authentication and Session Handling

### xsser -u "http://example.com" --auth-type=Basic --auth-cred="user:pass"

```bash
xsser -u "http://example.com" --auth-type=Basic --auth-cred="user:pass"
```

Scans a target requiring Basic HTTP Authentication

### xsser -u "http://example.com" --auth-type=Digest --auth-cred="user:pass"

```bash
xsser -u "http://example.com" --auth-type=Digest --auth-cred="user:pass"
```

Scans a target requiring Digest HTTP Authentication


## Proxy, Tor, and Network Configuration

### xsser -u "http://example.com" --proxy="http://127.0.0.1:8080"

```bash
xsser -u "http://example.com" --proxy="http://127.0.0.1:8080"
```

Routes scan traffic through a specified HTTP proxy like Burp Suite

### xsser -u "http://example.com" --tor

```bash
xsser -u "http://example.com" --tor
```

Routes traffic through the Tor network for anonymity


## Timing, Delay, and Performance Tuning

### xsser -u "http://example.com" --timeout=30

```bash
xsser -u "http://example.com" --timeout=30
```

Sets the connection timeout to 30 seconds for slow responses

### xsser -u "http://example.com" --delay=2

```bash
xsser -u "http://example.com" --delay=2
```

Adds a 2-second delay between requests to avoid rate limiting

### xsser -u "http://example.com" --threads=5

```bash
xsser -u "http://example.com" --threads=5
```

Runs the scan using 5 concurrent threads for faster results

### xsser -u "http://example.com" --retries=3

```bash
xsser -u "http://example.com" --retries=3
```

Retries failed connection attempts up to 3 times


## Crawling and Automatic Discovery

### xsser -u "http://example.com" --crawl

```bash
xsser -u "http://example.com" --crawl
```

Spiders the website to discover links and injection points automatically

### xsser -u "http://example.com" --crawl --depth=3

```bash
xsser -u "http://example.com" --crawl --depth=3
```

Crawls the target website up to a depth of 3 links deep


## Encoding and Filter Evasion

### xsser -u "http://example.com" --Str

```bash
xsser -u "http://example.com" --Str
```

Uses the String injection method for payloads

### xsser -u "http://example.com" --Hex

```bash
xsser -u "http://example.com" --Hex
```

Encodes payloads using Hexadecimal to bypass filters

### xsser -u "http://example.com" --Hes

```bash
xsser -u "http://example.com" --Hes
```

Uses Hexadecimal String encoding for payload obfuscation

### xsser -u "http://example.com" --Dwo

```bash
xsser -u "http://example.com" --Dwo
```

Encodes IP addresses in payloads as DWORD (double word) format

### xsser -u "http://example.com" --Doo

```bash
xsser -u "http://example.com" --Doo
```

Encodes IP addresses in payloads using Octal representation

### xsser -u "http://example.com" --Coo

```bash
xsser -u "http://example.com" --Coo
```

Injects payloads specifically via Cookie manipulation techniques

### xsser -u "http://example.com" --Base64

```bash
xsser -u "http://example.com" --Base64
```

Encodes the payload in Base64 to bypass WAFs that filter cleartext scripts


## Payload Selection and Custom Payloads

### xsser -u "http://example.com" --payload="<script>alert(1)</script>"

```bash
xsser -u "http://example.com" --payload="<script>alert(1)</script>"
```

Injects a specific manual payload instead of using the built-in dictionary

### xsser -u "http://example.com" --auto-payloads

```bash
xsser -u "http://example.com" --auto-payloads
```

Uses all available automatic vector payloads derived from the internal database

### xsser -u "http://example.com" --fuzzer

```bash
xsser -u "http://example.com" --fuzzer
```

Injects a fuzzing vector to test input validation boundaries


## DOM Based XSS Analysis

### xsser -u "http://example.com" --dom

```bash
xsser -u "http://example.com" --dom
```

Specifically checks for DOM-based XSS vulnerabilities in client-side code

### xsser -u "http://example.com" --check-at="/search.php?q=" --dom

```bash
xsser -u "http://example.com" --check-at="/search.php?q=" --dom
```

Verifies DOM XSS injection at a specific path and parameter


## Advanced Injection Vectors

### xsser -u "http://example.com" --imx

```bash
xsser -u "http://example.com" --imx
```

Tests for Image Metadata XSS (injecting payloads into image tags)

### xsser -u "http://example.com" --fla

```bash
xsser -u "http://example.com" --fla
```

Tests for vulnerabilities related to Flash (SWF) object embedding

### xsser -u "http://example.com" --simple

```bash
xsser -u "http://example.com" --simple
```

Uses simple, less aggressive injection vectors to test basic filtering


## HTTP Method Control

### xsser -u "http://example.com" --head

```bash
xsser -u "http://example.com" --head
```

Uses the HTTP HEAD method for checking target reachability before scanning


## Validation and Verification

### xsser -u "http://example.com" --check="/search.php?q="

```bash
xsser -u "http://example.com" --check="/search.php?q="
```

Performs a stability check on a specific URL to see if it returns a 200 OK

### xsser -u "http://example.com" --reverse-check

```bash
xsser -u "http://example.com" --reverse-check
```

Establishes a connection from the target back to xsser to verify vulnerability execution


## Filter and WAF Evasion Options

### xsser -u "http://example.com" --Bypass=403

```bash
xsser -u "http://example.com" --Bypass=403
```

Attempts to bypass WAF protections when a 403 Forbidden error is encountered


## Output Formats and Logging

### xsser -u "http://example.com" --verbose

```bash
xsser -u "http://example.com" --verbose
```

Enables verbose output to see detailed request and response data

### xsser -u "http://example.com" --save

```bash
xsser -u "http://example.com" --save
```

Saves the scanning results to a file for later analysis

### xsser -u "http://example.com" --xml="report.xml"

```bash
xsser -u "http://example.com" --xml="report.xml"
```

Exports the scan results into an XML formatted report

### xsser -u "http://example.com" --statistics

```bash
xsser -u "http://example.com" --statistics
```

Displays statistical information about the scan progress and results


## Multi Target Scanning

### xsser -i "targets.txt"

```bash
xsser -i "targets.txt"
```

Reads a list of target URLs from a file to perform bulk scanning

### xsser --dork="inurl:search.php?q="

```bash
xsser --dork="inurl:search.php?q="
```

Uses a search engine dork to find and scan multiple targets matching the pattern


## Reflected XSS Scanning

### xsser -u "http://example.com" --heuristic

```bash
xsser -u "http://example.com" --heuristic
```

Uses heuristic analysis to determine if parameters are reflected in the response


## Output Formats and Logging

### xsser -u "http://example.com" --no-head

```bash
xsser -u "http://example.com" --no-head
```

Disables the output banner for cleaner logs in automated pipelines


## Encoding and Filter Evasion

### xsser -u "http://example.com" --Xss

```bash
xsser -u "http://example.com" --Xss
```

Injects typical XSS vectors to test standard filter responses


## Red Team XSS Operations

### xsser -u "http://example.com" --follow-redirects

```bash
xsser -u "http://example.com" --follow-redirects
```

Follows HTTP 3xx redirects to ensure the payload reaches the final destination


## Advanced and Combined Real World Attacks

### xsser -u "http://example.com" --crawl --depth=2 --auto --threads=3

```bash
xsser -u "http://example.com" --crawl --depth=2 --auto --threads=3
```

Combines crawling, automatic injection, and multi-threading for a full site assessment

### xsser -u "http://example.com" --headers --cookie="auth=1" --proxy="http://127.0.0.1:8080"

```bash
xsser -u "http://example.com" --headers --cookie="auth=1" --proxy="http://127.0.0.1:8080"
```

Tests header injection on an authenticated session while routing through a proxy

### xsser -u "http://example.com" --Hex --Hes --Base64

```bash
xsser -u "http://example.com" --Hex --Hes --Base64
```

Combines multiple encoding techniques to bypass complex WAF rules


## Web Application Reconnaissance

### xsser -u "http://example.com" --alive

```bash
xsser -u "http://example.com" --alive
```

Checks if the target URL is alive and reachable before starting any tests


## Advanced Injection Vectors

### xsser -u "http://example.com" --final="<script>alert(1)</script>"

```bash
xsser -u "http://example.com" --final="<script>alert(1)</script>"
```

Injects the payload specifically into the final parameter found in the URL

### xsser -u "http://example.com" --first="<script>alert(1)</script>"

```bash
xsser -u "http://example.com" --first="<script>alert(1)</script>"
```

Injects the payload specifically into the first parameter found in the URL


## Blue Team Detection and Validation

### xsser -u "http://example.com" --short=5

```bash
xsser -u "http://example.com" --short=5
```

Displays only the first 5 characters of the vulnerable response for quick validation


## Red Team XSS Operations

### xsser -u "http://example.com" --launch

```bash
xsser -u "http://example.com" --launch
```

Launches a browser instance to manually verify the XSS upon discovery


## Encoding and Filter Evasion

### xsser -u "http://example.com" --Unescape

```bash
xsser -u "http://example.com" --Unescape
```

Attempts to inject payloads by unescaping characters to bypass sanitization


## Payload Selection and Custom Payloads

### xsser -u "http://example.com" --phpids

```bash
xsser -u "http://example.com" --phpids
```

Uses specific vectors designed to bypass the PHPIDS intrusion detection system


## SSL and HTTPS Configuration

### xsser -u "https://example.com"

```bash
xsser -u "https://example.com"
```

Automatically handles SSL/HTTPS connections when the target scheme is https


## Batch Mode and Automation

### xsser -i "urls.txt" --auto --save --xml="scan_results.xml"

```bash
xsser -i "urls.txt" --auto --save --xml="scan_results.xml"
```

Runs an automated batch scan on a list of URLs and saves results to XML


## Advanced and Combined Real World Attacks

### xsser -u "http://example.com" --post="data=1" --p="q="

```bash
xsser -u "http://example.com" --post="data=1" --p="q="
```

Combines raw POST data with a specific POST parameter definition


## Incident Response and Assessment Scenarios

### xsser -u "http://example.com" --dns-timeout=5

```bash
xsser -u "http://example.com" --dns-timeout=5
```

Sets a specific timeout for DNS resolution to handle network instability


## Filter and WAF Evasion Options

### xsser -u "http://example.com" --Cw="10"

```bash
xsser -u "http://example.com" --Cw="10"
```

Sets the crawling width to 10 to limit horizontal scanning of the site structure

### xsser -u "http://example.com" --Cl

```bash
xsser -u "http://example.com" --Cl
```

Cleans the target URL parameters before starting the injection process


## Red Team XSS Operations

### xsser -u "http://example.com" --xss-platform="http://my-xss-platform.com"

```bash
xsser -u "http://example.com" --xss-platform="http://my-xss-platform.com"
```

Integrates with an external XSS receiver platform to detect blind XSS execution


## Encoding and Filter Evasion

### xsser -u "http://example.com" --Mix

```bash
xsser -u "http://example.com" --Mix
```

Mixes multiple encoding types (String, Hex, Octal) in a single payload

### xsser -u "http://example.com" --Dec

```bash
xsser -u "http://example.com" --Dec
```

Uses Decimal encoding for characters in the XSS payload


## Web Application Reconnaissance

### xsser -u "http://example.com" --server-info

```bash
xsser -u "http://example.com" --server-info
```

Retrieves and displays information about the target web server banner


## Basic XSS Detection

### xsser --gtk

```bash
xsser --gtk
```

Launches the graphical user interface (GUI) version of xsser


## Batch Mode and Automation

### xsser -u "http://example.com" --silent

```bash
xsser -u "http://example.com" --silent
```

Runs the scan in silent mode, suppressing most output except errors


## Output Formats and Logging

### xsser -u "http://example.com" --update

```bash
xsser -u "http://example.com" --update
```

Updates the xsser tool and its internal database to the latest version


## Advanced and Combined Real World Attacks

### xsser -u "http://example.com" --ignore-proxy

```bash
xsser -u "http://example.com" --ignore-proxy
```

Ignores system proxy settings and connects directly to the target


## Incident Response and Assessment Scenarios

### xsser -u "http://example.com" --destroy-cookie

```bash
xsser -u "http://example.com" --destroy-cookie
```

Tests for the ability to overwrite or destroy existing session cookies

## Related tools

- [sqlmap](https://terminal.rokibulroni.com/tool/web/sqlmap)
- [Nuclei](https://terminal.rokibulroni.com/tool/web/nuclei)
