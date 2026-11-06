# httpx

> ProjectDiscovery’s HTTP toolkit: probes lists of hosts for live web servers and reports status, title, technologies, TLS details and more.

- Category: Web
- Commands: 110
- Page: https://terminal.rokibulroni.com/tool/web/httpx
- Homepage: https://github.com/projectdiscovery/httpx
- Documentation: https://docs.projectdiscovery.io/tools/httpx/overview
- Tags: probing, web recon, ProjectDiscovery

## Install

- apt: `sudo apt install httpx-toolkit`
- go: `go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest`

## Basic HTTP Probing

### httpx -u https://example.com

```bash
httpx -u https://example.com
```

Probes a single target URL to check for service availability.

### httpx -list targets.txt

```bash
httpx -list targets.txt
```

Runs httpx against a list of targets provided in a file.

### cat targets.txt | httpx

```bash
cat targets.txt | httpx
```

Accepts targets from standard input (STDIN) via a pipe.


## Status Code Detection

### httpx -u https://example.com -sc

```bash
httpx -u https://example.com -sc
```

Displays the HTTP status code returned by the target.


## Title and Technology Fingerprinting

### httpx -u https://example.com -title

```bash
httpx -u https://example.com -title
```

Extracts and displays the page title from the HTTP response.

### httpx -u https://example.com -server

```bash
httpx -u https://example.com -server
```

Displays the 'Server' header value to identify the web server software.

### httpx -u https://example.com -td

```bash
httpx -u https://example.com -td
```

Enables technology detection to identify frameworks and CMS used by the target.


## Content Analysis

### httpx -u https://example.com -cl

```bash
httpx -u https://example.com -cl
```

Displays the Content-Length of the HTTP response body.

### httpx -u https://example.com -ct

```bash
httpx -u https://example.com -ct
```

Displays the Content-Type header (e.g., text/html, application/json).

### httpx -u https://example.com -wc

```bash
httpx -u https://example.com -wc
```

Counts and displays the number of words in the response body.

### httpx -u https://example.com -lc

```bash
httpx -u https://example.com -lc
```

Counts and displays the number of lines in the response body.


## Network Metadata

### httpx -u https://example.com -ip

```bash
httpx -u https://example.com -ip
```

Resolves and displays the IP address of the target web server.

### httpx -u https://example.com -cname

```bash
httpx -u https://example.com -cname
```

Displays the CNAME DNS record if one exists for the target.

### httpx -u https://example.com -asn

```bash
httpx -u https://example.com -asn
```

Displays the Autonomous System Number (ASN) organization details.

### httpx -u https://example.com -cdn

```bash
httpx -u https://example.com -cdn
```

Checks if the target is served via a Content Delivery Network (CDN).

### httpx -u https://example.com -rt

```bash
httpx -u https://example.com -rt
```

Displays the response time (latency) taken to receive the response.


## Method Handling

### httpx -u https://example.com -method

```bash
httpx -u https://example.com -method
```

Displays the allowed HTTP method used for the probe.

### httpx -u https://example.com -x POST

```bash
httpx -u https://example.com -x POST
```

Changes the HTTP request method to POST instead of the default GET.

### httpx -u https://example.com -x PUT

```bash
httpx -u https://example.com -x PUT
```

Sends a PUT request to the target URL.


## Redirect Handling

### httpx -u https://example.com -location

```bash
httpx -u https://example.com -location
```

Displays the 'Location' header value for 3xx redirect responses.

### httpx -u https://example.com -follow-redirects

```bash
httpx -u https://example.com -follow-redirects
```

Automatically follows HTTP redirects to reach the final destination.

### httpx -u https://example.com -follow-host-redirects

```bash
httpx -u https://example.com -follow-host-redirects
```

Follows redirects only if they stay on the same host.

### httpx -u https://example.com -max-redirects 5

```bash
httpx -u https://example.com -max-redirects 5
```

Sets a limit on the number of redirects to follow (default is 10).


## Port Scanning

### httpx -u https://example.com -p 80,443,8080

```bash
httpx -u https://example.com -p 80,443,8080
```

Probes specific ports on the target URL.

### httpx -u https://example.com -p 80-90

```bash
httpx -u https://example.com -p 80-90
```

Probes a range of ports on the target URL.

### httpx -u https://example.com -ports http

```bash
httpx -u https://example.com -ports http
```

Probes standard HTTP ports defined in the tool's predefined list.

### httpx -u https://example.com -ports https

```bash
httpx -u https://example.com -ports https
```

Probes standard HTTPS ports defined in the tool's predefined list.


## Path Probing

### httpx -u https://example.com -path /admin

```bash
httpx -u https://example.com -path /admin
```

Appends a specific path to the target URL before probing.

### httpx -u https://example.com -path /login,/dashboard

```bash
httpx -u https://example.com -path /login,/dashboard
```

Probes multiple paths for the target URL.


## Header Customization

### httpx -u https://example.com -H "User-Agent: CustomBot"

```bash
httpx -u https://example.com -H "User-Agent: CustomBot"
```

Sends a custom header with the request.

### httpx -u https://example.com -H "Cookie: session=123"

```bash
httpx -u https://example.com -H "Cookie: session=123"
```

Includes a Cookie header in the request for authenticated probing.


## TLS and Certificate Analysis

### httpx -u https://example.com -tls-grab

```bash
httpx -u https://example.com -tls-grab
```

Extracts and displays TLS certificate data.

### httpx -u https://example.com -tls-probe

```bash
httpx -u https://example.com -tls-probe
```

Performs a TLS probe to gather detailed SSL/TLS configuration.

### httpx -u https://example.com -csp-probe

```bash
httpx -u https://example.com -csp-probe
```

Probes and displays the Content Security Policy (CSP) of the target.


## Pipeline & Automation

### httpx -u https://example.com -pipeline

```bash
httpx -u https://example.com -pipeline
```

Enables HTTP pipelining to send multiple requests in a single connection.

### httpx -u https://example.com -http2

```bash
httpx -u https://example.com -http2
```

Forces the probe to use the HTTP/2 protocol.

### httpx -u https://example.com -vhost

```bash
httpx -u https://example.com -vhost
```

Probes for VHOSTs by checking for differences in response when modifying the Host header.


## Matchers (Inclusion)

### httpx -l targets.txt -mc 200

```bash
httpx -l targets.txt -mc 200
```

Matches and displays only targets returning a 200 OK status code.

### httpx -l targets.txt -mc 200,302,403

```bash
httpx -l targets.txt -mc 200,302,403
```

Matches targets returning status codes 200, 302, or 403.

### httpx -l targets.txt -ms "admin"

```bash
httpx -l targets.txt -ms "admin"
```

Matches targets containing the specific string 'admin' in the response body.

### httpx -l targets.txt -mr "root:.*:0:0"

```bash
httpx -l targets.txt -mr "root:.*:0:0"
```

Matches targets where the response body matches the provided regex.

### httpx -l targets.txt -ml 100

```bash
httpx -l targets.txt -ml 100
```

Matches targets with a Content-Length exactly equal to 100.

### httpx -l targets.txt -mwc 50

```bash
httpx -l targets.txt -mwc 50
```

Matches targets with exactly 50 words in the response body.

### httpx -l targets.txt -mlc 10

```bash
httpx -l targets.txt -mlc 10
```

Matches targets with exactly 10 lines in the response body.

### httpx -l targets.txt -mrt <1s

```bash
httpx -l targets.txt -mrt <1s
```

Matches targets where the response time is less than 1 second.


## Filters (Exclusion)

### httpx -l targets.txt -fc 404

```bash
httpx -l targets.txt -fc 404
```

Filters out (hides) targets returning a 404 status code.

### httpx -l targets.txt -fc 500,502

```bash
httpx -l targets.txt -fc 500,502
```

Filters out targets returning 500 or 502 status codes.

### httpx -l targets.txt -fs "Forbidden"

```bash
httpx -l targets.txt -fs "Forbidden"
```

Filters out targets containing the string 'Forbidden' in the response.

### httpx -l targets.txt -fr "error"

```bash
httpx -l targets.txt -fr "error"
```

Filters out targets matching the regex 'error' in the response.

### httpx -l targets.txt -fl 0

```bash
httpx -l targets.txt -fl 0
```

Filters out targets with a Content-Length of 0.

### httpx -l targets.txt -fwc 0

```bash
httpx -l targets.txt -fwc 0
```

Filters out targets with 0 words in the response.

### httpx -l targets.txt -flc 0

```bash
httpx -l targets.txt -flc 0
```

Filters out targets with 0 lines in the response.


## Data Extraction

### httpx -l targets.txt -er "title"

```bash
httpx -l targets.txt -er "title"
```

Extracts the response content matching the regex for 'title'.


## Rate Limiting and Performance

### httpx -l targets.txt -t 50

```bash
httpx -l targets.txt -t 50
```

Sets the number of concurrent threads to 50 (default is usually 50).

### httpx -l targets.txt -rl 150

```bash
httpx -l targets.txt -rl 150
```

Limits the rate of requests to 150 requests per second.

### httpx -l targets.txt -rlm 300

```bash
httpx -l targets.txt -rlm 300
```

Limits the rate of requests to 300 requests per minute.


## Timeout and Retries

### httpx -l targets.txt -timeout 10

```bash
httpx -l targets.txt -timeout 10
```

Sets the connection timeout to 10 seconds.

### httpx -l targets.txt -retries 3

```bash
httpx -l targets.txt -retries 3
```

Retries failed requests up to 3 times.


## Output Formatting

### httpx -l targets.txt -o output.txt

```bash
httpx -l targets.txt -o output.txt
```

Saves the results to a text file.

### httpx -l targets.txt -json

```bash
httpx -l targets.txt -json
```

Outputs the results in JSON format to stdout.

### httpx -l targets.txt -json -o output.json

```bash
httpx -l targets.txt -json -o output.json
```

Saves the results in JSON format to a file.

### httpx -l targets.txt -csv

```bash
httpx -l targets.txt -csv
```

Outputs the results in CSV format to stdout.

### httpx -l targets.txt -csv -o output.csv

```bash
httpx -l targets.txt -csv -o output.csv
```

Saves the results in CSV format to a file.


## Response Storage

### httpx -l targets.txt -sr

```bash
httpx -l targets.txt -sr
```

Stores the full HTTP response.

### httpx -l targets.txt -srd responses/

```bash
httpx -l targets.txt -srd responses/
```

Specifies a directory to store the saved HTTP responses.

### httpx -l targets.txt -store-chain

```bash
httpx -l targets.txt -store-chain
```

Stores the entire chain of requests and responses (useful for redirects).


## Visualization

### httpx -l targets.txt -ss

```bash
httpx -l targets.txt -ss
```

Takes a screenshot of the target page (requires headless browser setup).

### httpx -l targets.txt -screenshot-timeout 10

```bash
httpx -l targets.txt -screenshot-timeout 10
```

Sets the timeout for taking a screenshot to 10 seconds.


## Proxy and Network

### httpx -l targets.txt -proxy http://127.0.0.1:8080

```bash
httpx -l targets.txt -proxy http://127.0.0.1:8080
```

Routes all traffic through an HTTP proxy (e.g., Burp Suite).

### httpx -l targets.txt -proxy socks5://127.0.0.1:9050

```bash
httpx -l targets.txt -proxy socks5://127.0.0.1:9050
```

Routes all traffic through a SOCKS5 proxy.

### httpx -l targets.txt -r 8.8.8.8

```bash
httpx -l targets.txt -r 8.8.8.8
```

Uses a custom DNS resolver (Google DNS) for resolution.

### httpx -l targets.txt -r resolvers.txt

```bash
httpx -l targets.txt -r resolvers.txt
```

Uses a list of custom DNS resolvers from a file.


## Display and Debug

### httpx -l targets.txt -silent

```bash
httpx -l targets.txt -silent
```

Suppresses output and shows only the valid results (ideal for piping).

### httpx -l targets.txt -verbose

```bash
httpx -l targets.txt -verbose
```

Displays verbose output including request and response details.

### httpx -l targets.txt -debug

```bash
httpx -l targets.txt -debug
```

Enables debug mode to show detailed internal request processing.

### httpx -l targets.txt -debug-req

```bash
httpx -l targets.txt -debug-req
```

Displays only the raw HTTP requests sent in debug mode.

### httpx -l targets.txt -debug-resp

```bash
httpx -l targets.txt -debug-resp
```

Displays only the raw HTTP responses received in debug mode.

### httpx -l targets.txt -no-color

```bash
httpx -l targets.txt -no-color
```

Disables colored output in the terminal.

### httpx -version

```bash
httpx -version
```

Displays the installed version of httpx.


## Input Handling

### httpx -request raw_request.txt

```bash
httpx -request raw_request.txt
```

Loads a raw HTTP request from a file and sends it to the target.


## Advanced Probing

### httpx -l targets.txt -favicon

```bash
httpx -l targets.txt -favicon
```

Calculates and displays the mmh3 hash of the /favicon.ico file.

### httpx -l targets.txt -jarm

```bash
httpx -l targets.txt -jarm
```

Calculates and displays the JARM fingerprint hash of the SSL server.

### httpx -l targets.txt -hash sha256

```bash
httpx -l targets.txt -hash sha256
```

Calculates and displays the SHA256 hash of the response body.

### httpx -l targets.txt -hash md5

```bash
httpx -l targets.txt -hash md5
```

Calculates and displays the MD5 hash of the response body.

### httpx -l targets.txt -websocket

```bash
httpx -l targets.txt -websocket
```

Probes for WebSocket connections on the target.


## Combined Probing

### httpx -l targets.txt -sc -title -tech-detect

```bash
httpx -l targets.txt -sc -title -tech-detect
```

Combines status code, title, and technology detection in a single run.

### httpx -l targets.txt -sc -cl -wc -lc

```bash
httpx -l targets.txt -sc -cl -wc -lc
```

Combines status code, content length, word count, and line count stats.

### httpx -l targets.txt -status-code -title -server -ip -cname -asn

```bash
httpx -l targets.txt -status-code -title -server -ip -cname -asn
```

Runs a full reconnaissance probe covering status, server info, and network data.


## Match and Extract

### httpx -l targets.txt -mc 200 -er "token:[a-zA-Z0-9]+"

```bash
httpx -l targets.txt -mc 200 -er "token:[a-zA-Z0-9]+"
```

Matches 200 OK responses and extracts patterns looking like tokens.


## Filter and Save

### httpx -l targets.txt -fc 404,403 -o live_hosts.txt

```bash
httpx -l targets.txt -fc 404,403 -o live_hosts.txt
```

Filters out 404/403 errors and saves accessible hosts to a file.


## Automation Integration

### subfinder -d example.com | httpx -sc -title

```bash
subfinder -d example.com | httpx -sc -title
```

Chains subfinder results into httpx to probe discovered subdomains.

### cat urls.txt | httpx -silent -json > results.json

```bash
cat urls.txt | httpx -silent -json > results.json
```

Quietly processes URLs and outputs pure JSON to a file for automation.


## Advanced Network

### httpx -l targets.txt -interface eth0

```bash
httpx -l targets.txt -interface eth0
```

Specifies the network interface to use for sending traffic.

### httpx -l targets.txt -source-ip 192.168.1.50

```bash
httpx -l targets.txt -source-ip 192.168.1.50
```

Spoofs or sets the source IP address for the requests.


## Probe Tuning

### httpx -l targets.txt -delay 100ms

```bash
httpx -l targets.txt -delay 100ms
```

Adds a 100ms delay between each request to avoid rate limiting.

### httpx -l targets.txt -random-agent

```bash
httpx -l targets.txt -random-agent
```

Uses a random User-Agent header for each request.

### httpx -l targets.txt -unsafe

```bash
httpx -l targets.txt -unsafe
```

Enables unsafe mode to handle invalid HTTP implementations or raw packets.

### httpx -l targets.txt -resume resume_file.cfg

```bash
httpx -l targets.txt -resume resume_file.cfg
```

Resumes a scan using a previously generated resume configuration file.


## Filtering

### httpx -l targets.txt -filter-regex "default page"

```bash
httpx -l targets.txt -filter-regex "default page"
```

Filters out targets whose response body matches the regex 'default page'.


## Red Team Operations

### httpx -l targets.txt -path /admin -mc 200 -ss

```bash
httpx -l targets.txt -path /admin -mc 200 -ss
```

Probes for admin panels, matches 200 OK, and takes screenshots of hits.


## Blue Team Validation

### httpx -l internal_hosts.txt -status-code -title -tech-detect -json -o inventory.json

```bash
httpx -l internal_hosts.txt -status-code -title -tech-detect -json -o inventory.json
```

Generates a detailed JSON inventory of internal services for auditing.


## Advanced

### httpx -l targets.txt -bp

```bash
httpx -l targets.txt -bp
```

Enables the Burp Suite proxy integration mode.

### httpx -l targets.txt -tlsi

```bash
httpx -l targets.txt -tlsi
```

Displays the TLS handshake client hello info (TLS Imprint).

### httpx -l targets.txt -cdn-check

```bash
httpx -l targets.txt -cdn-check
```

Checks if the target is behind a CDN and displays the provider name.

### httpx -l targets.txt -exclude-cdn

```bash
httpx -l targets.txt -exclude-cdn
```

Skips probing targets that are identified as being behind a CDN.


## Output

### httpx -l targets.txt -no-fallback

```bash
httpx -l targets.txt -no-fallback
```

Prevents httpx from probing HTTP if HTTPS fails (or vice versa).


## Advanced Probing

### httpx -l targets.txt -probe

```bash
httpx -l targets.txt -probe
```

Displays the probe status (SUCCESS/FAILED) for the target.


## Filter

### httpx -l targets.txt -fhr

```bash
httpx -l targets.txt -fhr
```

Filters out responses that are host redirects.


## Rate Limiting

### httpx -l targets.txt -rate-limit-minute 60

```bash
httpx -l targets.txt -rate-limit-minute 60
```

Strictly limits the scan to 60 requests per minute.


## Tagging

### httpx -l targets.txt -tags customized_scan

```bash
httpx -l targets.txt -tags customized_scan
```

Adds a custom tag field to the JSON output for identification.

## Related tools

- [Naabu](https://terminal.rokibulroni.com/tool/network/naabu)
- [Nuclei](https://terminal.rokibulroni.com/tool/web/nuclei)
- [Subfinder](https://terminal.rokibulroni.com/tool/web/subfinder)
- [Katana](https://terminal.rokibulroni.com/tool/web/katana)
