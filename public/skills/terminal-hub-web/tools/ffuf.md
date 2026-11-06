# ffuf

> “Fuzz Faster U Fool” — a very fast web fuzzer for directories, parameters, virtual hosts and POST data, with flexible matching and filtering.

- Category: Web
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/web/ffuf
- Homepage: https://github.com/ffuf/ffuf
- Documentation: https://github.com/ffuf/ffuf/wiki
- Tags: fuzzing, content discovery, vhosts

## Install

- apt: `sudo apt install ffuf`
- brew: `brew install ffuf`
- go: `go install github.com/ffuf/ffuf/v2@latest`

## Basic Directory Fuzzing

### ffuf -u https://example.com/FUZZ -w wordlist.txt

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt
```

Performs basic directory discovery by injecting words into the URL.

### ffuf -u https://example.com/FUZZ -w wordlist.txt -c

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -c
```

Enables colorized output for better readability during basic fuzzing.


## Extension Fuzzing

### ffuf -u https://example.com/FUZZ -w wordlist.txt -e .php,.html,.txt

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -e .php,.html,.txt
```

Appends specific file extensions to each wordlist entry to find files.


## Status Code Matching

### ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200
```

Filters results to show only responses with a 200 OK status code.

### ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200,301,302

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200,301,302
```

Matches multiple specific HTTP status codes indicating success or redirection.

### ffuf -u https://example.com/FUZZ -w wordlist.txt -mc all

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc all
```

Matches and displays responses with any HTTP status code.


## Status Code Filtering

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fc 404

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fc 404
```

Hides responses that return a 404 Not Found status code.


## Size Filtering

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fs 1234

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fs 1234
```

Filters out responses that have a specific response body size in bytes.


## Word Count Filtering

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fw 50

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fw 50
```

Filters out responses containing exactly 50 words in the body.


## Line Count Filtering

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fl 10

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fl 10
```

Filters out responses containing exactly 10 lines in the body.


## Regex Matching

### ffuf -u https://example.com/FUZZ -w wordlist.txt -mr "root:x:0:0"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mr "root:x:0:0"
```

Matches responses where the body content matches a specific regular expression.


## Regex Filtering

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fr "error"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fr "error"
```

Filters out responses where the body matches a specific regular expression.


## Recursive Fuzzing

### ffuf -u https://example.com/FUZZ -w wordlist.txt -recursion

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -recursion
```

Enables recursive scanning where discovered directories are added to the queue.

### ffuf -u https://example.com/FUZZ -w wordlist.txt -recursion -recursion-depth 2

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -recursion -recursion-depth 2
```

Limits the recursive scanning to a depth of 2 levels.


## HTTP Methods

### ffuf -u https://example.com/resource -w wordlist.txt -X POST

```bash
ffuf -u https://example.com/resource -w wordlist.txt -X POST
```

Sends POST requests instead of the default GET requests.


## POST Data Fuzzing

### ffuf -u https://example.com/login -w wordlist.txt -X POST -d "user=admin&pass=FUZZ"

```bash
ffuf -u https://example.com/login -w wordlist.txt -X POST -d "user=admin&pass=FUZZ"
```

Fuzzes a specific parameter within the POST body data.

### ffuf -u https://example.com/login -w wordlist.txt -X POST -d "user=admin&pass=FUZZ" -H "Content-Type: application/x-www-

```bash
ffuf -u https://example.com/login -w wordlist.txt -X POST -d "user=admin&pass=FUZZ" -H "Content-Type: application/x-www-form-urlencoded"
```

Sets the correct Content-Type header when fuzzing form data.


## JSON API Fuzzing

### ffuf -u https://api.example.com/v1/user -w wordlist.txt -X POST -d '{"username": "FUZZ", "role": "admin"}' -H "Content-T

```bash
ffuf -u https://api.example.com/v1/user -w wordlist.txt -X POST -d '{"username": "FUZZ", "role": "admin"}' -H "Content-Type: application/json"
```

Fuzzes values inside a JSON request body for API testing.


## Header Fuzzing

### ffuf -u https://example.com -w wordlist.txt -H "X-Forwarded-For: FUZZ"

```bash
ffuf -u https://example.com -w wordlist.txt -H "X-Forwarded-For: FUZZ"
```

Fuzzes HTTP headers to test for header injection or proxy bypass.


## Virtual Host Fuzzing

### ffuf -u https://example.com -w subdomains.txt -H "Host: FUZZ.example.com"

```bash
ffuf -u https://example.com -w subdomains.txt -H "Host: FUZZ.example.com"
```

Fuzzes the Host header to discover virtual hosts on the target IP.


## Cookie Fuzzing

### ffuf -u https://example.com/admin -w wordlist.txt -b "PHPSESSID=FUZZ"

```bash
ffuf -u https://example.com/admin -w wordlist.txt -b "PHPSESSID=FUZZ"
```

Fuzzes the Cookie header to test for session hijacking or privilege escalation.

### ffuf -u https://example.com -w wordlist.txt -H "Cookie: user=FUZZ; role=admin"

```bash
ffuf -u https://example.com -w wordlist.txt -H "Cookie: user=FUZZ; role=admin"
```

Alternative method to fuzz cookies using the -H flag explicitly.


## Multiple Wordlists

### ffuf -u https://example.com/W1/W2 -w folders.txt:W1 -w files.txt:W2

```bash
ffuf -u https://example.com/W1/W2 -w folders.txt:W1 -w files.txt:W2
```

Uses multiple wordlists mapped to different fuzzing locations (W1 and W2).


## Clusterbomb Mode

### ffuf -u https://example.com/login -w users.txt:USER -w pass.txt:PASS -mode clusterbomb -d "u=USER&p=PASS"

```bash
ffuf -u https://example.com/login -w users.txt:USER -w pass.txt:PASS -mode clusterbomb -d "u=USER&p=PASS"
```

Tries every combination of payloads from multiple wordlists (Cartesian product).


## Pitchfork Mode

### ffuf -u https://example.com/login -w users.txt:USER -w pass.txt:PASS -mode pitchfork -d "u=USER&p=PASS"

```bash
ffuf -u https://example.com/login -w users.txt:USER -w pass.txt:PASS -mode pitchfork -d "u=USER&p=PASS"
```

Maps words one-to-one from wordlists (1st user with 1st pass, etc).


## Silent Mode

### ffuf -u https://example.com/FUZZ -w wordlist.txt -s

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -s
```

Suppresses the banner and running status, printing only results.


## Verbose Mode

### ffuf -u https://example.com/FUZZ -w wordlist.txt -v

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -v
```

Prints the full URL and redirect location for every result.


## Output to File

### ffuf -u https://example.com/FUZZ -w wordlist.txt -o results.json -of json

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -o results.json -of json
```

Saves the fuzzing results to a file in JSON format.


## Output Formats

### ffuf -u https://example.com/FUZZ -w wordlist.txt -o results.html -of html

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -o results.html -of html
```

Saves the fuzzing results to a generic HTML report.

### ffuf -u https://example.com/FUZZ -w wordlist.txt -o results.csv -of csv

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -o results.csv -of csv
```

Saves the fuzzing results to a CSV file for spreadsheet analysis.


## All Output Formats

### ffuf -u https://example.com/FUZZ -w wordlist.txt -o results -of all

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -o results -of all
```

Generates output files in all supported formats simultaneously.


## Performance Threading

### ffuf -u https://example.com/FUZZ -w wordlist.txt -t 100

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -t 100
```

Increases the number of concurrent threads to 100 for faster scanning.


## Performance Throttling

### ffuf -u https://example.com/FUZZ -w wordlist.txt -p 0.1

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -p 0.1
```

Adds a delay of 0.1 seconds between requests to avoid overwhelming the server.


## Rate Limiting

### ffuf -u https://example.com/FUZZ -w wordlist.txt -rate 50

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -rate 50
```

Limits the scan to strictly 50 requests per second.


## Timeouts

### ffuf -u https://example.com/FUZZ -w wordlist.txt -timeout 5

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -timeout 5
```

Sets the HTTP request timeout to 5 seconds.


## Proxy Configuration

### ffuf -u https://example.com/FUZZ -w wordlist.txt -x http://127.0.0.1:8080

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -x http://127.0.0.1:8080
```

Routes all traffic through a proxy (e.g., Burp Suite) for analysis.


## Proxy Replay

### ffuf -u https://example.com/FUZZ -w wordlist.txt -replay-proxy http://127.0.0.1:8080

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -replay-proxy http://127.0.0.1:8080
```

Routes only successfully matched requests through the proxy.


## Auto Calibration

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ac

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ac
```

Automatically calibrates filtering based on random requests to determine stability.


## Auto Calibration Custom

### ffuf -u https://example.com/FUZZ -w wordlist.txt -acc "User-Agent: Fuzz"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -acc "User-Agent: Fuzz"
```

Customizes the auto-calibration string to be more specific.


## Auto Calibration Strategies

### ffuf -u https://example.com/FUZZ -w wordlist.txt -acs advanced

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -acs advanced
```

Uses advanced auto-calibration strategies to fine-tune filters.


## Ignore Comments

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ic

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ic
```

Ignores lines starting with comments in the wordlist.


## Stop On Error

### ffuf -u https://example.com/FUZZ -w wordlist.txt -se

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -se
```

Aborts the entire process if a spurious error occurs.


## Stop On Spurious 403

### ffuf -u https://example.com/FUZZ -w wordlist.txt -sf

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -sf
```

Stops fuzzing if too many 403 Forbidden errors are received (WAF detection).


## TLS/HTTPS

### ffuf -u https://example.com/FUZZ -w wordlist.txt -k

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -k
```

Ignores SSL/TLS certificate verification errors (useful for internal targets).

### ffuf -u https://example.com/FUZZ -w wordlist.txt -sni example.com

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -sni example.com
```

Sets the TLS SNI (Server Name Indication) explicitly.


## HTTP2

### ffuf -u https://example.com/FUZZ -w wordlist.txt -http2

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -http2
```

Forces the use of the HTTP/2 protocol for the requests.


## Follow Redirects

### ffuf -u https://example.com/FUZZ -w wordlist.txt -r

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -r
```

Follows HTTP redirects to their final destination.


## Request File

### ffuf -request request.txt -w wordlist.txt

```bash
ffuf -request request.txt -w wordlist.txt
```

Loads the raw HTTP request from a file and injects payloads at the FUZZ keyword.


## Request File Options

### ffuf -request request.txt -w wordlist.txt -request-proto https

```bash
ffuf -request request.txt -w wordlist.txt -request-proto https
```

Forces the raw request file to use HTTPS protocol.


## Max Time

### ffuf -u https://example.com/FUZZ -w wordlist.txt -maxtime 60

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -maxtime 60
```

Stops the fuzzing process after 60 seconds.


## Max Time Per Job

### ffuf -u https://example.com/FUZZ -w wordlist.txt -maxtime-job 10

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -maxtime-job 10
```

Stops specific jobs if they exceed 10 seconds (useful in recursion).


## Ignore Body

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ignore-body

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ignore-body
```

Does not fetch the response body, useful for blind timing attacks.


## Input Encoding

### ffuf -u https://example.com/FUZZ -w wordlist.txt -input-encoding latin1

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -input-encoding latin1
```

Specifies the encoding of the input wordlist.


## Output Directory

### ffuf -u https://example.com/FUZZ -w wordlist.txt -od /tmp/out

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -od /tmp/out
```

Saves every matched response body to a separate file in the specified directory.


## Config File

### ffuf -config ffuf.conf

```bash
ffuf -config ffuf.conf
```

Loads fuzzing configuration and options from a configuration file.


## Non-Interactive

### ffuf -u https://example.com/FUZZ -w wordlist.txt -noninteractive

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -noninteractive
```

Disables TTY interactions, suitable for CI/CD pipelines.


## Scraper Mode

### ffuf -u https://example.com/FUZZ -w wordlist.txt -scraperfile scraper.json

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -scraperfile scraper.json
```

Uses a custom scraper definition to extract specific data from responses.


## Match Size Range

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ms 100-200

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ms 100-200
```

Matches responses with a size falling within the 100 to 200 bytes range.


## Match Line Range

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ml 5-10

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ml 5-10
```

Matches responses that have between 5 and 10 lines.


## Match Word Range

### ffuf -u https://example.com/FUZZ -w wordlist.txt -mw 50-100

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mw 50-100
```

Matches responses that have between 50 and 100 words.


## Filter Size Range

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fs 100-200

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fs 100-200
```

Filters out responses with sizes between 100 and 200 bytes.


## Filter Line Range

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fl 1-5

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fl 1-5
```

Filters out responses containing 1 to 5 lines.


## Header Append

### ffuf -u https://example.com/FUZZ -w wordlist.txt -H "User-Agent: BugBounty" -H "Authorization: Bearer 123"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -H "User-Agent: BugBounty" -H "Authorization: Bearer 123"
```

Appends multiple headers by repeating the -H flag.


## Wordlist Offset

### ffuf -u https://example.com/FUZZ -w wordlist.txt:FUZZ:100

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt:FUZZ:100
```

Skips the first 100 words in the wordlist before starting.


## Client Certificate

### ffuf -u https://example.com/FUZZ -w wordlist.txt -cc client.cert -ck client.key

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -cc client.cert -ck client.key
```

Uses a client certificate and private key for mutual TLS authentication.


## Search History

### ffuf -u https://example.com/FUZZ -w wordlist.txt -search-history 5

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -search-history 5
```

Searches through the last 5 request history entries (experimental/advanced).


## Method Fuzzing

### ffuf -u https://example.com/resource -w methods.txt:METHOD -X METHOD

```bash
ffuf -u https://example.com/resource -w methods.txt:METHOD -X METHOD
```

Fuzzes the HTTP verb (GET, POST, PUT, DELETE) itself.


## Combined Calibration

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ac -mc 200

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ac -mc 200
```

Combines auto-calibration with specific status code matching.


## Multiple Keywords

### ffuf -u https://example.com/DIR/FILE -w dirs.txt:DIR -w files.txt:FILE

```bash
ffuf -u https://example.com/DIR/FILE -w dirs.txt:DIR -w files.txt:FILE
```

Uses different keywords in the URL for multi-level directory fuzzing.


## Standard Input Wordlist

### cat wordlist.txt | ffuf -u https://example.com/FUZZ -w -

```bash
cat wordlist.txt | ffuf -u https://example.com/FUZZ -w -
```

Reads the wordlist from standard input (stdin) via pipe.


## Parameter Discovery

### ffuf -u https://example.com/page.php?FUZZ=test -w parameters.txt -fs 400

```bash
ffuf -u https://example.com/page.php?FUZZ=test -w parameters.txt -fs 400
```

Discovers valid GET parameters by observing response size changes.


## Colors Disable

### ffuf -u https://example.com/FUZZ -w wordlist.txt -no-color

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -no-color
```

Disables all color output code (useful for logging).


## Interface Binding

### ffuf -u https://example.com/FUZZ -w wordlist.txt -interface eth0

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -interface eth0
```

Binds the traffic to a specific network interface (e.g., eth0 or tun0).


## Follow Redirects Custom

### ffuf -u https://example.com/FUZZ -w wordlist.txt -r -recursion -lc

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -r -recursion -lc
```

Follows redirects while storing cookies (lc = learn cookies) from responses.


## Rate Limit Per Host

### ffuf -u https://example.com/FUZZ -w wordlist.txt -rate 10 -p 0.5

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -rate 10 -p 0.5
```

Combines rate limiting (10 req/s) with a delay (0.5s) for stealth.


## Output Field Selection

### ffuf -u https://example.com/FUZZ -w wordlist.txt -of csv -o out.csv -or

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -of csv -o out.csv -or
```

Don't create the output file if no results were found (-or).


## Subdomain Enumeration

### ffuf -u https://FUZZ.example.com -w subdomains.txt -v

```bash
ffuf -u https://FUZZ.example.com -w subdomains.txt -v
```

Fuzzes the subdomain portion of the URL directly.


## Raw Request Debug

### ffuf -u https://example.com/FUZZ -w wordlist.txt -debug-log debug.log

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -debug-log debug.log
```

Writes all internal logging and debug information to a file.


## Stop on All

### ffuf -u https://example.com/FUZZ -w wordlist.txt -sa

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -sa
```

Stops the scan on any error (TCP, DNS, timeout, etc).


## Disable Keep-Alive

### ffuf -u https://example.com/FUZZ -w wordlist.txt -H "Connection: close"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -H "Connection: close"
```

Disables HTTP Keep-Alive by setting the Connection header to close.


## Baseline Comparison

### ffuf -u https://example.com/FUZZ -w wordlist.txt -fr "The standard error text"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fr "The standard error text"
```

Filters results containing specific text found in a baseline error response.


## Extension Priority

### ffuf -u https://example.com/FUZZ -w wordlist.txt -e .php -e .bak

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -e .php -e .bak
```

Checks for multiple extensions per wordlist entry in sequence.


## Silent JSON Output

### ffuf -u https://example.com/FUZZ -w wordlist.txt -s -json

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -s -json
```

Prints results in JSON format to stdout silently (deprecated alias for -of json).


## Red Team Discovery

### ffuf -u https://example.com/FUZZ -w wordlist.txt -ac -t 300 -rate 200 -H "User-Agent: Googlebot"

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -ac -t 300 -rate 200 -H "User-Agent: Googlebot"
```

Aggressive, high-speed discovery scan masking as a search engine bot.


## Blue Team Validation

### ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200 -o valid_paths.txt

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200 -o valid_paths.txt
```

Maps all publicly accessible 200 OK paths for exposure verification.

## Related tools

- [Gobuster](https://terminal.rokibulroni.com/tool/web/gobuster)
- [dirsearch](https://terminal.rokibulroni.com/tool/web/dirsearch)
- [Wfuzz](https://terminal.rokibulroni.com/tool/web/wfuzz)
