# Gobuster

> Brute-forces URIs, DNS subdomains, virtual hosts and cloud buckets. Simple, fast and written in Go.

- Category: Web
- Commands: 70
- Page: https://terminal.rokibulroni.com/tool/web/gobuster
- Homepage: https://github.com/OJ/gobuster
- Documentation: https://github.com/OJ/gobuster#usage
- Tags: content discovery, subdomains, vhosts

## Install

- apt: `sudo apt install gobuster`
- brew: `brew install gobuster`
- go: `go install github.com/OJ/gobuster/v3@latest`

## Directory Enumeration (Basic)

### gobuster dir -u https://example.com -w wordlist.txt

```bash
gobuster dir -u https://example.com -w wordlist.txt
```

Example:

```bash
gobuster dir -u https://example.com -w /usr/share/wordlists/dirb/common.txt
```

Performs a basic directory brute-force scan against the target URL using a specified wordlist.


## Directory Enumeration (Extensions)

### gobuster dir -u https://example.com -w wordlist.txt -x php,html,txt

```bash
gobuster dir -u https://example.com -w wordlist.txt -x php,html,txt
```

Searches for specific file extensions in addition to directories.


## Directory Enumeration (Extensions File)

### gobuster dir -u https://example.com -w wordlist.txt -X extensions.txt

```bash
gobuster dir -u https://example.com -w wordlist.txt -X extensions.txt
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt -X extensions_list.txt
```

Reads the list of extensions to search for from a file.


## Directory Enumeration (Recursive)

### gobuster dir -u https://example.com -w wordlist.txt -r

```bash
gobuster dir -u https://example.com -w wordlist.txt -r
```

Enables recursive mode to scan discovered directories immediately.


## Directory Enumeration (No Recursion)

### gobuster dir -u https://example.com -w wordlist.txt --no-recursion

```bash
gobuster dir -u https://example.com -w wordlist.txt --no-recursion
```

Explicitly disables recursive scanning if it was enabled by default configurations.


## Directory Enumeration (Status Codes)

### gobuster dir -u https://example.com -w wordlist.txt -s 200,301,302

```bash
gobuster dir -u https://example.com -w wordlist.txt -s 200,301,302
```

Whitelists specific status codes to display, ignoring all others.


## Directory Enumeration (Blacklist Status)

### gobuster dir -u https://example.com -w wordlist.txt -b 404,403

```bash
gobuster dir -u https://example.com -w wordlist.txt -b 404,403
```

Blacklists specific status codes to hide them from the output.


## Directory Enumeration (Skip SSL)

### gobuster dir -u https://example.com -w wordlist.txt -k

```bash
gobuster dir -u https://example.com -w wordlist.txt -k
```

Skips TLS/SSL certificate verification, useful for self-signed certificates.


## Directory Enumeration (Expanded)

### gobuster dir -u https://example.com -w wordlist.txt -e

```bash
gobuster dir -u https://example.com -w wordlist.txt -e
```

Prints the full URL for each result instead of just the path.


## Directory Enumeration (No Status)

### gobuster dir -u https://example.com -w wordlist.txt -n

```bash
gobuster dir -u https://example.com -w wordlist.txt -n
```

Hides the status code from the printed output.


## Directory Enumeration (Performance)

### gobuster dir -u https://example.com -w wordlist.txt -t 50

```bash
gobuster dir -u https://example.com -w wordlist.txt -t 50
```

Sets the number of concurrent threads to 50 for faster scanning.


## Directory Enumeration (Slow Scan)

### gobuster dir -u https://example.com -w wordlist.txt --delay 1000ms

```bash
gobuster dir -u https://example.com -w wordlist.txt --delay 1000ms
```

Adds a delay of 1000ms between requests to avoid rate limiting.


## Directory Enumeration (Timeout)

### gobuster dir -u https://example.com -w wordlist.txt --timeout 10s

```bash
gobuster dir -u https://example.com -w wordlist.txt --timeout 10s
```

Sets the HTTP request timeout to 10 seconds.


## Directory Enumeration (User Agent)

### gobuster dir -u https://example.com -w wordlist.txt -a "Mozilla/5.0"

```bash
gobuster dir -u https://example.com -w wordlist.txt -a "Mozilla/5.0"
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt -a "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
```

Sets a custom User-Agent string to bypass filters or simulate a browser.


## Directory Enumeration (Headers)

### gobuster dir -u https://example.com -w wordlist.txt -H "Authorization: Bearer token"

```bash
gobuster dir -u https://example.com -w wordlist.txt -H "Authorization: Bearer token"
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt -H "Authorization: Bearer 12345" -H "X-Custom: Value"
```

Adds custom HTTP headers to every request.


## Directory Enumeration (Cookies)

### gobuster dir -u https://example.com -w wordlist.txt -c "sessionid=12345"

```bash
gobuster dir -u https://example.com -w wordlist.txt -c "sessionid=12345"
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt -c "sessionid=12345; user=admin"
```

Sets the cookie string to use for authenticated scanning.


## Directory Enumeration (Basic Auth)

### gobuster dir -u https://example.com -w wordlist.txt -U username -P password

```bash
gobuster dir -u https://example.com -w wordlist.txt -U username -P password
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt -U admin -P secret
```

Uses HTTP Basic Authentication with the provided credentials.


## Directory Enumeration (Proxy)

### gobuster dir -u https://example.com -w wordlist.txt --proxy http://127.0.0.1:8080

```bash
gobuster dir -u https://example.com -w wordlist.txt --proxy http://127.0.0.1:8080
```

Routes all traffic through a specified proxy, such as Burp Suite.


## Directory Enumeration (Output File)

### gobuster dir -u https://example.com -w wordlist.txt -o result.txt

```bash
gobuster dir -u https://example.com -w wordlist.txt -o result.txt
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt -o scan_results.txt
```

Saves the scan output to a file.


## Directory Enumeration (Quiet Mode)

### gobuster dir -u https://example.com -w wordlist.txt -q

```bash
gobuster dir -u https://example.com -w wordlist.txt -q
```

Enables quiet mode, printing only the positive results and suppressing banner/errors.


## Directory Enumeration (Verbose)

### gobuster dir -u https://example.com -w wordlist.txt -v

```bash
gobuster dir -u https://example.com -w wordlist.txt -v
```

Enables verbose output for detailed logging.


## Directory Enumeration (Hide Length)

### gobuster dir -u https://example.com -w wordlist.txt --hide-length

```bash
gobuster dir -u https://example.com -w wordlist.txt --hide-length
```

Hides the length of the response body in the output.


## Directory Enumeration (Exclude Length)

### gobuster dir -u https://example.com -w wordlist.txt --exclude-length 1234

```bash
gobuster dir -u https://example.com -w wordlist.txt --exclude-length 1234
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt --exclude-length 1234,0
```

Excludes results that match a specific response content length.


## Directory Enumeration (Follow Redirects)

### gobuster dir -u https://example.com -w wordlist.txt -r

```bash
gobuster dir -u https://example.com -w wordlist.txt -r
```

Follows HTTP redirects to determine the final destination.


## Directory Enumeration (Method)

### gobuster dir -u https://example.com -w wordlist.txt --method POST

```bash
gobuster dir -u https://example.com -w wordlist.txt --method POST
```

Uses a different HTTP method (e.g., POST) instead of the default GET.


## Directory Enumeration (Regex Filter)

### gobuster dir -u https://example.com -w wordlist.txt --exclude-content-pattern "Error"

```bash
gobuster dir -u https://example.com -w wordlist.txt --exclude-content-pattern "Error"
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt --exclude-content-pattern "Access Denied"
```

Excludes results where the response body matches the given regex pattern.


## Directory Enumeration (Pattern File)

### gobuster dir -u https://example.com -w wordlist.txt -p patterns.txt

```bash
gobuster dir -u https://example.com -w wordlist.txt -p patterns.txt
```

Uses a pattern file to apply replacements to the wordlist (e.g., {GOBUSTER}).


## Directory Enumeration (Client Cert)

### gobuster dir -u https://example.com -w wordlist.txt --client-cert-p12 cert.p12 --client-cert-p12-password pass

```bash
gobuster dir -u https://example.com -w wordlist.txt --client-cert-p12 cert.p12 --client-cert-p12-password pass
```

Example:

```bash
gobuster dir -u https://example.com -w wordlist.txt --client-cert-p12 client.p12 --client-cert-p12-password secret
```

Uses a P12 client certificate for mutual TLS (mTLS) authentication.


## Directory Enumeration (Retry)

### gobuster dir -u https://example.com -w wordlist.txt --retry

```bash
gobuster dir -u https://example.com -w wordlist.txt --retry
```

Retries requests on timeout or error.


## Directory Enumeration (Retry Attempts)

### gobuster dir -u https://example.com -w wordlist.txt --retry-attempts 3

```bash
gobuster dir -u https://example.com -w wordlist.txt --retry-attempts 3
```

Specifies the number of times to retry a failed request.


## DNS Enumeration (Basic)

### gobuster dns -d example.com -w subdomains.txt

```bash
gobuster dns -d example.com -w subdomains.txt
```

Example:

```bash
gobuster dns -d example.com -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-5000.txt
```

Enumerates subdomains for the target domain using a wordlist.


## DNS Enumeration (Show IP)

### gobuster dns -d example.com -w subdomains.txt -i

```bash
gobuster dns -d example.com -w subdomains.txt -i
```

Displays the resolved IP address for each discovered subdomain.


## DNS Enumeration (Wildcard)

### gobuster dns -d example.com -w subdomains.txt --wildcard

```bash
gobuster dns -d example.com -w subdomains.txt --wildcard
```

Forces scanning even if a wildcard DNS record is detected.


## DNS Enumeration (Custom Server)

### gobuster dns -d example.com -w subdomains.txt -r 8.8.8.8

```bash
gobuster dns -d example.com -w subdomains.txt -r 8.8.8.8
```

Example:

```bash
gobuster dns -d example.com -w subdomains.txt -r 1.1.1.1
```

Uses a specific DNS server for resolution instead of the system default.


## DNS Enumeration (CNAME)

### gobuster dns -d example.com -w subdomains.txt --show-cname

```bash
gobuster dns -d example.com -w subdomains.txt --show-cname
```

Displays CNAME records for discovered subdomains.


## DNS Enumeration (Timeout)

### gobuster dns -d example.com -w subdomains.txt --timeout 2s

```bash
gobuster dns -d example.com -w subdomains.txt --timeout 2s
```

Sets the DNS query timeout to 2 seconds.


## DNS Enumeration (Threads)

### gobuster dns -d example.com -w subdomains.txt -t 100

```bash
gobuster dns -d example.com -w subdomains.txt -t 100
```

Increases DNS enumeration threads to 100 for high-speed scanning.


## VHost Enumeration (Basic)

### gobuster vhost -u https://example.com -w vhosts.txt

```bash
gobuster vhost -u https://example.com -w vhosts.txt
```

Example:

```bash
gobuster vhost -u https://example.com -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-5000.txt
```

Enumerates virtual hosts by brute-forcing the Host header.


## VHost Enumeration (Append Domain)

### gobuster vhost -u https://example.com -w subdomains.txt --append-domain

```bash
gobuster vhost -u https://example.com -w subdomains.txt --append-domain
```

Appends the base domain to each word in the wordlist (e.g., word.example.com).


## VHost Enumeration (Exclude Length)

### gobuster vhost -u https://example.com -w vhosts.txt --exclude-length 300

```bash
gobuster vhost -u https://example.com -w vhosts.txt --exclude-length 300
```

Excludes virtual host results that match a specific response size.


## VHost Enumeration (Method)

### gobuster vhost -u https://example.com -w vhosts.txt -m HEAD

```bash
gobuster vhost -u https://example.com -w vhosts.txt -m HEAD
```

Uses the HEAD method for virtual host enumeration to reduce traffic.


## VHost Enumeration (Proxy)

### gobuster vhost -u https://example.com -w vhosts.txt --proxy http://127.0.0.1:8080

```bash
gobuster vhost -u https://example.com -w vhosts.txt --proxy http://127.0.0.1:8080
```

Routes virtual host enumeration traffic through a proxy.


## Fuzzing Mode (Basic)

### gobuster fuzz -u https://example.com/FUZZ -w wordlist.txt

```bash
gobuster fuzz -u https://example.com/FUZZ -w wordlist.txt
```

Fuzzes the URL by replacing the FUZZ keyword with words from the wordlist.


## Fuzzing Mode (Query Param)

### gobuster fuzz -u https://example.com?id=FUZZ -w numbers.txt

```bash
gobuster fuzz -u https://example.com?id=FUZZ -w numbers.txt
```

Fuzzes a specific query parameter in the URL.


## Fuzzing Mode (Exclude Length)

### gobuster fuzz -u https://example.com/FUZZ -w wordlist.txt --exclude-length 0

```bash
gobuster fuzz -u https://example.com/FUZZ -w wordlist.txt --exclude-length 0
```

Hides fuzzing results that return an empty response body.


## Fuzzing Mode (Headers)

### gobuster fuzz -u https://example.com -H "User-Agent: FUZZ" -w user_agents.txt

```bash
gobuster fuzz -u https://example.com -H "User-Agent: FUZZ" -w user_agents.txt
```

Fuzzes HTTP headers by placing the FUZZ keyword in the header value.


## Fuzzing Mode (Post Body)

### gobuster fuzz -u https://example.com -d "data=FUZZ" -w wordlist.txt -m POST

```bash
gobuster fuzz -u https://example.com -d "data=FUZZ" -w wordlist.txt -m POST
```

Fuzzes the POST data body using the FUZZ keyword.


## Fuzzing Mode (Basic Auth)

### gobuster fuzz -u https://example.com -w wordlist.txt -U admin -P FUZZ

```bash
gobuster fuzz -u https://example.com -w wordlist.txt -U admin -P FUZZ
```

Brute-forces the Basic Auth password field using the FUZZ keyword.


## S3 Enumeration (Basic)

### gobuster s3 -w buckets.txt

```bash
gobuster s3 -w buckets.txt
```

Enumerates AWS S3 buckets using a specified wordlist.


## S3 Enumeration (Max Files)

### gobuster s3 -w buckets.txt --max-files 5

```bash
gobuster s3 -w buckets.txt --max-files 5
```

Limits the number of files listed from each discovered bucket to 5.


## S3 Enumeration (User Agent)

### gobuster s3 -w buckets.txt -a "CustomAgent"

```bash
gobuster s3 -w buckets.txt -a "CustomAgent"
```

Example:

```bash
gobuster s3 -w buckets.txt -a "BugBountyScanner"
```

Sets a custom User-Agent for S3 enumeration requests.


## S3 Enumeration (Proxy)

### gobuster s3 -w buckets.txt --proxy http://127.0.0.1:8080

```bash
gobuster s3 -w buckets.txt --proxy http://127.0.0.1:8080
```

Routes S3 enumeration traffic through a proxy.


## GCS Enumeration (Basic)

### gobuster gcs -w buckets.txt

```bash
gobuster gcs -w buckets.txt
```

Enumerates Google Cloud Storage (GCS) buckets using a wordlist.


## GCS Enumeration (Max Files)

### gobuster gcs -w buckets.txt --max-files 10

```bash
gobuster gcs -w buckets.txt --max-files 10
```

Limits listing of files in GCS buckets to the first 10.


## TFTP Enumeration (Basic)

### gobuster tftp -s tftp.example.com -w files.txt

```bash
gobuster tftp -s tftp.example.com -w files.txt
```

Brute-forces filenames on a TFTP server.


## Global (Quiet & No Color)

### gobuster dir -u https://example.com -w wordlist.txt -q --no-color

```bash
gobuster dir -u https://example.com -w wordlist.txt -q --no-color
```

Runs a clean, uncolored scan suitable for parsing in scripts.


## Global (Debug)

### gobuster dir -u https://example.com -w wordlist.txt --debug

```bash
gobuster dir -u https://example.com -w wordlist.txt --debug
```

Runs gobuster in debug mode to troubleshoot errors.


## Advanced (Combined Auth & Proxy)

### gobuster dir -u https://example.com -w wordlist.txt -U user -P pass --proxy http://127.0.0.1:8080 -k

```bash
gobuster dir -u https://example.com -w wordlist.txt -U user -P pass --proxy http://127.0.0.1:8080 -k
```

Combines Basic Auth, Proxy, and SSL skipping for a complex target environment.


## Advanced (Precise Status Filtering)

### gobuster dir -u https://example.com -w wordlist.txt -s 200 -b 404 --exclude-length 0

```bash
gobuster dir -u https://example.com -w wordlist.txt -s 200 -b 404 --exclude-length 0
```

Highly filtered scan allowing only status 200 and removing empty responses.


## Advanced (API Fuzzing JSON)

### gobuster fuzz -u https://api.example.com/v1/user -m POST -H "Content-Type: application/json" -d '{"id": "FUZZ"}' -w ids.

```bash
gobuster fuzz -u https://api.example.com/v1/user -m POST -H "Content-Type: application/json" -d '{"id": "FUZZ"}' -w ids.txt
```

Fuzzes a JSON POST body field, essential for API penetration testing.


## Advanced (VHost with Cookie)

### gobuster vhost -u https://staging.example.com -w subdomains.txt -c "dev_access=true"

```bash
gobuster vhost -u https://staging.example.com -w subdomains.txt -c "dev_access=true"
```

Enumerates virtual hosts on a staging server that requires an access cookie.


## Advanced (Recursive Extensions)

### gobuster dir -u https://example.com -w wordlist.txt -x php,txt -r --timeout 5s

```bash
gobuster dir -u https://example.com -w wordlist.txt -x php,txt -r --timeout 5s
```

Recursively scans for directories and specific file extensions with a short timeout.


## Advanced (Pattern Based)

### gobuster dir -u https://example.com -w wordlist.txt -p patterns.txt -t 60

```bash
gobuster dir -u https://example.com -w wordlist.txt -p patterns.txt -t 60
```

Uses a pattern file to mutate the wordlist for smarter enumeration.


## Advanced (Redirect Analysis)

### gobuster dir -u https://example.com -w wordlist.txt -r -s 301,302,307 -e

```bash
gobuster dir -u https://example.com -w wordlist.txt -r -s 301,302,307 -e
```

Focuses on identifying and following redirects, showing full URLs.


## Advanced (DNS High Volume)

### gobuster dns -d example.com -w massive_subs.txt -t 100 --timeout 1s --no-error

```bash
gobuster dns -d example.com -w massive_subs.txt -t 100 --timeout 1s --no-error
```

Optimized high-speed DNS scan that suppresses error messages.


## Advanced (Fuzzing Auth Headers)

### gobuster fuzz -u https://api.example.com -H "Authorization: Bearer FUZZ" -w tokens.txt -b 401

```bash
gobuster fuzz -u https://api.example.com -H "Authorization: Bearer FUZZ" -w tokens.txt -b 401
```

Fuzzes the Bearer token header and hides 'Unauthorized' responses to find valid tokens.


## Advanced (Dir with Cookies & UserAgent)

### gobuster dir -u https://internal.example.com -w common.txt -c "PHPSESSID=xyz" -a "AdminBrowser" -k

```bash
gobuster dir -u https://internal.example.com -w common.txt -c "PHPSESSID=xyz" -a "AdminBrowser" -k
```

Simulates an authenticated internal browser session ignoring SSL errors.


## Advanced (S3 Max Listing)

### gobuster s3 -w buckets.txt --max-files 50 --no-color -v

```bash
gobuster s3 -w buckets.txt --max-files 50 --no-color -v
```

Verbose S3 enumeration listing up to 50 files per bucket without color codes.


## Advanced (GCS with Timeout)

### gobuster gcs -w buckets.txt --timeout 5s -t 20

```bash
gobuster gcs -w buckets.txt --timeout 5s -t 20
```

GCS bucket enumeration with adjusted timeout and concurrency.


## Advanced (Full Recon Pipeline)

### gobuster dir -u https://target.com -w wordlist.txt -x php,html,js,json -r -k -t 50 -o full_scan.txt

```bash
gobuster dir -u https://target.com -w wordlist.txt -x php,html,js,json -r -k -t 50 -o full_scan.txt
```

A comprehensive 'all-in-one' style command for initial web reconnaissance.

## Related tools

- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
- [dirsearch](https://terminal.rokibulroni.com/tool/web/dirsearch)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
