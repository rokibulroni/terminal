# Wfuzz

> A Python web fuzzer that replaces the FUZZ keyword in any part of a request — paths, parameters, headers or cookies — with payloads.

- Category: Web
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/web/wfuzz
- Homepage: https://github.com/xmendez/wfuzz
- Documentation: https://wfuzz.readthedocs.io
- Tags: fuzzing, parameters, brute force

## Install

- apt: `sudo apt install wfuzz`
- pipx: `pipx install wfuzz`

## Basic Directory Fuzzing

### wfuzz -c -z file,wordlist.txt https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt https://example.com/FUZZ
```

Scans for directories using a wordlist and displays colored output.

### wfuzz -c -z file,wordlist.txt --hc 404 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --hc 404 https://example.com/FUZZ
```

Scans for directories while hiding all responses with a 404 status code.


## Status Code Matching

### wfuzz -c -z file,wordlist.txt --sc 200,301 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --sc 200,301 https://example.com/FUZZ
```

Filters the output to show only responses with 200 OK or 301 Redirect status codes.


## Extension Fuzzing

### wfuzz -c -z file,wordlist.txt https://example.com/FUZZ.php

```bash
wfuzz -c -z file,wordlist.txt https://example.com/FUZZ.php
```

Fuzzes for files with a specific extension by appending it to the FUZZ keyword.


## Word Count Filtering

### wfuzz -c -z file,wordlist.txt --hw 50 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --hw 50 https://example.com/FUZZ
```

Hides responses that contain exactly 50 words to filter out custom error pages.


## Character Count Filtering

### wfuzz -c -z file,wordlist.txt --hh 1250 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --hh 1250 https://example.com/FUZZ
```

Hides responses that contain exactly 1250 characters to reduce false positives.


## Line Count Filtering

### wfuzz -c -z file,wordlist.txt --hl 15 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --hl 15 https://example.com/FUZZ
```

Hides responses that contain exactly 15 lines of text in the body.


## GET Parameter Fuzzing

### wfuzz -c -z file,params.txt https://example.com/page.php?FUZZ=test

```bash
wfuzz -c -z file,params.txt https://example.com/page.php?FUZZ=test
```

Identifies valid GET parameters by fuzzing the parameter name.


## GET Parameter Value Fuzzing

### wfuzz -c -z file,ids.txt https://example.com/items?id=FUZZ

```bash
wfuzz -c -z file,ids.txt https://example.com/items?id=FUZZ
```

Tests different values for a known parameter ID to find accessible objects.


## POST Body Fuzzing

### wfuzz -c -z file,passwords.txt -d "user=admin&pass=FUZZ" https://example.com/login

```bash
wfuzz -c -z file,passwords.txt -d "user=admin&pass=FUZZ" https://example.com/login
```

Performs a dictionary attack on a login form using POST data.


## HTTP Header Fuzzing

### wfuzz -c -z file,headers.txt -H "FUZZ: 127.0.0.1" https://example.com/

```bash
wfuzz -c -z file,headers.txt -H "FUZZ: 127.0.0.1" https://example.com/
```

Injects payloads into HTTP header names to test for proxy misconfigurations.


## User-Agent Fuzzing

### wfuzz -c -z file,user_agents.txt -H "User-Agent: FUZZ" https://example.com/

```bash
wfuzz -c -z file,user_agents.txt -H "User-Agent: FUZZ" https://example.com/
```

Rotates User-Agent strings to bypass restrictions or identify device-specific content.


## Cookie Fuzzing

### wfuzz -c -z range,1-100 -b "session_id=FUZZ" https://example.com/profile

```bash
wfuzz -c -z range,1-100 -b "session_id=FUZZ" https://example.com/profile
```

Iterates through a numeric range in the Cookie header to test for session predictability.


## HTTP Method Fuzzing

### wfuzz -c -z list,GET-POST-PUT-DELETE -X FUZZ https://example.com/resource

```bash
wfuzz -c -z list,GET-POST-PUT-DELETE -X FUZZ https://example.com/resource
```

Tests which HTTP verbs are accepted by the target endpoint.


## Payload Generator: Range

### wfuzz -c -z range,0-50 https://example.com/id/FUZZ

```bash
wfuzz -c -z range,0-50 https://example.com/id/FUZZ
```

Generates a sequence of integers from 0 to 50 for ID enumeration.


## Payload Generator: List

### wfuzz -c -z list,admin-guest-test https://example.com/FUZZ

```bash
wfuzz -c -z list,admin-guest-test https://example.com/FUZZ
```

Uses a comma-separated list of strings directly from the command line.


## Multiple Payloads

### wfuzz -c -z list,admin-user -z file,passwords.txt https://example.com/login?u=FUZZ&p=FUZ2Z

```bash
wfuzz -c -z list,admin-user -z file,passwords.txt https://example.com/login?u=FUZZ&p=FUZ2Z
```

Uses two distinct injection points mapped to FUZZ and FUZ2Z respectively.


## Clusterbomb Attack

### wfuzz -c -z list,user1-user2 -z file,pass.txt -m product -d "u=FUZZ&p=FUZ2Z" https://example.com/auth

```bash
wfuzz -c -z list,user1-user2 -z file,pass.txt -m product -d "u=FUZZ&p=FUZ2Z" https://example.com/auth
```

Tests every combination of usernames and passwords using the product iterator.


## Zip Iterator (Default)

### wfuzz -c -z file,users.txt -z file,pass.txt -m zip -d "u=FUZZ&p=FUZ2Z" https://example.com/auth

```bash
wfuzz -c -z file,users.txt -z file,pass.txt -m zip -d "u=FUZZ&p=FUZ2Z" https://example.com/auth
```

Pairs payloads line-by-line (line 1 with line 1) rather than mixing all combinations.


## Encoders: Base64

### wfuzz -c -z file,wordlist.txt,base64 https://example.com/api/token/FUZZ

```bash
wfuzz -c -z file,wordlist.txt,base64 https://example.com/api/token/FUZZ
```

Encodes the payload from the wordlist into Base64 before sending the request.


## Encoders: MD5

### wfuzz -c -z file,wordlist.txt,md5 https://example.com/verify?hash=FUZZ

```bash
wfuzz -c -z file,wordlist.txt,md5 https://example.com/verify?hash=FUZZ
```

Computes the MD5 hash of each payload string before injection.


## Encoders: URL Encoding

### wfuzz -c -z file,sqli.txt,urlencode -d "search=FUZZ" https://example.com/query

```bash
wfuzz -c -z file,sqli.txt,urlencode -d "search=FUZZ" https://example.com/query
```

URL-encodes special characters in the payload to ensure valid HTTP transmission.


## Basic Authentication

### wfuzz -c -z file,dirs.txt --basic "admin:secret" https://example.com/FUZZ

```bash
wfuzz -c -z file,dirs.txt --basic "admin:secret" https://example.com/FUZZ
```

Adds an HTTP Basic Authentication header with the specified credentials to every request.


## Recursive Fuzzing

### wfuzz -c -z file,wordlist.txt -R 2 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -R 2 https://example.com/FUZZ
```

Recursively scans discovered directories up to a depth of 2 levels.


## Dry Run

### wfuzz -c -z file,wordlist.txt --dry-run https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --dry-run https://example.com/FUZZ
```

Simulates the operation showing generated requests without sending traffic to the target.


## Auto-Calibration

### wfuzz -c -z file,wordlist.txt --ac https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --ac https://example.com/FUZZ
```

Automatically analyzes the baseline response to calibrate filters and reduce noise.


## Regex Matching

### wfuzz -c -z file,wordlist.txt --ss "Password incorrect" https://example.com/login?p=FUZZ

```bash
wfuzz -c -z file,wordlist.txt --ss "Password incorrect" https://example.com/login?p=FUZZ
```

Shows only responses where the response body contains the specified string regex.


## Regex Filtering

### wfuzz -c -z file,wordlist.txt --hs "Forbidden" https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --hs "Forbidden" https://example.com/FUZZ
```

Hides responses where the response body contains the specified string regex.


## Follow Redirects

### wfuzz -c -z file,wordlist.txt -L https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -L https://example.com/FUZZ
```

Instructs wfuzz to follow HTTP 3xx redirects to the final destination.


## HEAD Requests

### wfuzz -c -z file,wordlist.txt -I https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -I https://example.com/FUZZ
```

Uses the HTTP HEAD method to fetch only headers, saving bandwidth and time.


## Proxy Configuration

### wfuzz -c -z file,wordlist.txt -p 127.0.0.1:8080 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -p 127.0.0.1:8080 https://example.com/FUZZ
```

Routes all traffic through a specified proxy, such as Burp Suite or ZAP.


## Multiple Proxies

### wfuzz -c -z file,wordlist.txt -p 127.0.0.1:8080 -p 127.0.0.1:9090 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -p 127.0.0.1:8080 -p 127.0.0.1:9090 https://example.com/FUZZ
```

Distributes requests across multiple proxies to balance load or evade IP bans.


## SOCKS Proxy

### wfuzz -c -z file,wordlist.txt -p 127.0.0.1:9050:SOCKS5 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -p 127.0.0.1:9050:SOCKS5 https://example.com/FUZZ
```

Routes traffic through a SOCKS5 proxy, commonly used with Tor.


## Time Delay

### wfuzz -c -z file,wordlist.txt -s 2 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -s 2 https://example.com/FUZZ
```

Adds a delay of 2 seconds between each request to avoid rate limiting.


## Request Delay

### wfuzz -c -z file,wordlist.txt --req-delay 500 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --req-delay 500 https://example.com/FUZZ
```

Sets a precise delay of 500 milliseconds between requests.


## Threading

### wfuzz -c -z file,wordlist.txt -t 50 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -t 50 https://example.com/FUZZ
```

Increases the number of concurrent threads to 50 for faster scanning.


## Disable Keep-Alive

### wfuzz -c -z file,wordlist.txt --no-keepalive https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --no-keepalive https://example.com/FUZZ
```

Forces a new TCP connection for every request by disabling HTTP Keep-Alive.


## JSON Output

### wfuzz -c -z file,wordlist.txt -f results.json,json https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -f results.json,json https://example.com/FUZZ
```

Saves the fuzzing results to a file named results.json in JSON format.


## CSV Output

### wfuzz -c -z file,wordlist.txt -f results.csv,csv https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -f results.csv,csv https://example.com/FUZZ
```

Exports the scan data to a CSV file for easy analysis in spreadsheet software.


## HTML Output

### wfuzz -c -z file,wordlist.txt -f report.html,html https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -f report.html,html https://example.com/FUZZ
```

Generates a human-readable HTML report of the findings.


## Verbose Mode

### wfuzz -c -z file,wordlist.txt -v https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -v https://example.com/FUZZ
```

Enables verbose output to display additional details about every request.


## Subdomain Fuzzing

### wfuzz -c -z file,subdomains.txt -H "Host: FUZZ.example.com" https://example.com

```bash
wfuzz -c -z file,subdomains.txt -H "Host: FUZZ.example.com" https://example.com
```

Fuzzes the Host header to discover virtual host subdomains on the target IP.


## JSON POST Data

### wfuzz -c -z file,values.txt -d "{\"id\": \"FUZZ\"}" -H "Content-Type: application/json" https://api.example.com/data

```bash
wfuzz -c -z file,values.txt -d "{\"id\": \"FUZZ\"}" -H "Content-Type: application/json" https://api.example.com/data
```

Injects payloads into a JSON structure within the POST body, requiring escaped quotes.


## API Version Fuzzing

### wfuzz -c -z list,v1-v2-v3-beta https://api.example.com/FUZZ/users

```bash
wfuzz -c -z list,v1-v2-v3-beta https://api.example.com/FUZZ/users
```

Tests different API version segments to find older, potentially vulnerable endpoints.


## Baseline Comparison

### wfuzz -c -z file,wordlist.txt --aa https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --aa https://example.com/FUZZ
```

Enables auto-audit mode which compares responses against a baseline to flag anomalies.


## Prev Filter (Advanced)

### wfuzz -c -z file,wordlist.txt --prev https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --prev https://example.com/FUZZ
```

Shows response only if it is different from the previous response.


## Color Output Control

### wfuzz -z file,wordlist.txt --efield url https://example.com/FUZZ

```bash
wfuzz -z file,wordlist.txt --efield url https://example.com/FUZZ
```

Uses specific field printing to display only the URL without default formatting.


## Stdin Payload

### cat wordlist.txt | wfuzz -c -z stdin https://example.com/FUZZ

```bash
cat wordlist.txt | wfuzz -c -z stdin https://example.com/FUZZ
```

Reads the payload list directly from standard input (pipeline).


## NTLM Authentication

### wfuzz -c -z file,wordlist.txt --ntlm "user:pass" https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --ntlm "user:pass" https://example.com/FUZZ
```

Uses NTLM authentication, commonly required for internal corporate Windows environments.


## Digest Authentication

### wfuzz -c -z file,wordlist.txt --digest "user:pass" https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --digest "user:pass" https://example.com/FUZZ
```

Uses HTTP Digest authentication to authenticate against protected resources.


## Combination of Encoders

### wfuzz -c -z file,wordlist.txt,base64-md5 https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt,base64-md5 https://example.com/FUZZ
```

Chains encoders to first Base64 encode and then MD5 hash the payload.


## Ignored Parameters

### wfuzz -c -z file,params.txt --filter "params.count > 0" https://example.com/?FUZZ=1

```bash
wfuzz -c -z file,params.txt --filter "params.count > 0" https://example.com/?FUZZ=1
```

Uses the filter language to only show results meeting complex logical conditions.


## Save Recipe

### wfuzz -c -z file,wordlist.txt --dump-recipe recipe.txt https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --dump-recipe recipe.txt https://example.com/FUZZ
```

Saves the current configuration and arguments into a recipe file for later reuse.


## Load Recipe

### wfuzz -c --recipe recipe.txt

```bash
wfuzz -c --recipe recipe.txt
```

Loads and executes a scan from a previously saved recipe file.


## Script: Robots.txt

### wfuzz -c -z list,1 --script=robots https://example.com

```bash
wfuzz -c -z list,1 --script=robots https://example.com
```

Runs the built-in robots.txt parser script against the target.


## Custom Headers Repeated

### wfuzz -c -z file,wordlist.txt -H "X-Forwarded-For: 127.0.0.1" -H "X-Origin: 127.0.0.1" https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt -H "X-Forwarded-For: 127.0.0.1" -H "X-Origin: 127.0.0.1" https://example.com/FUZZ
```

Sends multiple custom headers in a single request to spoof internal access.


## Payload Slicing

### wfuzz -c -z slice,0-3,file,wordlist.txt https://example.com/FUZZ

```bash
wfuzz -c -z slice,0-3,file,wordlist.txt https://example.com/FUZZ
```

Takes a slice of the wordlist (items 0 to 3) effectively acting as a head command for payloads.


## Scan Mode (Iterate Cookies)

### wfuzz -c -z file,users.txt -b "user=FUZZ" --scan-mode https://example.com/

```bash
wfuzz -c -z file,users.txt -b "user=FUZZ" --scan-mode https://example.com/
```

Enables scan mode which ignores the standard payload iteration logic for specific plugin testing.


## Advanced Response Filtering

### wfuzz -c -z file,wordlist.txt --filter "c=200 and l>10" https://example.com/FUZZ

```bash
wfuzz -c -z file,wordlist.txt --filter "c=200 and l>10" https://example.com/FUZZ
```

Uses logic to show only responses with code 200 AND line count greater than 10.


## IP Range Fuzzing

### wfuzz -c -z ip,192.168.1.0-192.168.1.255 https://FUZZ/admin

```bash
wfuzz -c -z ip,192.168.1.0-192.168.1.255 https://FUZZ/admin
```

Generates IP addresses within the specified range to scan a local subnet.

## Related tools

- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
- [Gobuster](https://terminal.rokibulroni.com/tool/web/gobuster)
