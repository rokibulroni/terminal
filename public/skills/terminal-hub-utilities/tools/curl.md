# curl

> Transfers data with URLs over HTTP, FTP and many other protocols. Indispensable for testing APIs, headers and authentication.

- Category: Utilities
- Commands: 150
- Page: https://terminal.rokibulroni.com/tool/utilities/curl
- Homepage: https://curl.se
- Documentation: https://curl.se/docs/manpage.html
- Tags: HTTP, APIs, downloads

## Install

- apt: `sudo apt install curl`
- brew: `brew install curl`

## Basic Syntax

### curl https://example.com

```bash
curl https://example.com
```

Performs a standard GET request to the specified URL and prints the response to stdout.

### curl -v https://example.com

```bash
curl -v https://example.com
```

Enables verbose mode to display request and response headers along with the handshake.

### curl -I https://example.com

```bash
curl -I https://example.com
```

Fetches only the HTTP headers using a HEAD request.

### curl -i https://example.com

```bash
curl -i https://example.com
```

Includes the HTTP response headers in the output before the response body.

### curl --help

```bash
curl --help
```

Displays the summary of curl options and usage categories.


## Redirect Handling

### curl -L https://example.com

```bash
curl -L https://example.com
```

Follows HTTP 3xx redirects to the final destination URL.

### curl -L --max-redirs 5 https://example.com

```bash
curl -L --max-redirs 5 https://example.com
```

Follows redirects but limits the maximum number of hops to prevent infinite loops.


## File Handling

### curl -O https://example.com/file.zip

```bash
curl -O https://example.com/file.zip
```

Downloads the file and saves it using the remote filename.

### curl -o output.html https://example.com

```bash
curl -o output.html https://example.com
```

Saves the response output to a specifically named local file.

### curl -C - -O https://example.com/large.iso

```bash
curl -C - -O https://example.com/large.iso
```

Resumes a specific file download from where it was interrupted.


## HTTP Methods

### curl -X POST https://api.local/resource

```bash
curl -X POST https://api.local/resource
```

Sends an HTTP POST request with no data payload.

### curl -X DELETE https://api.local/resource/1

```bash
curl -X DELETE https://api.local/resource/1
```

Sends an HTTP DELETE request to remove a resource.

### curl -X PUT -d "new data" https://api.local/resource/1

```bash
curl -X PUT -d "new data" https://api.local/resource/1
```

Sends an HTTP PUT request to update or create a resource with data.

### curl -X PATCH -d "update" https://api.local/resource/1

```bash
curl -X PATCH -d "update" https://api.local/resource/1
```

Sends an HTTP PATCH request to partially update a resource.

### curl -X OPTIONS https://api.local/resource

```bash
curl -X OPTIONS https://api.local/resource
```

Sends an OPTIONS request to determine allowed methods on the server.


## Data Submission

### curl -d "param1=value1&param2=value2" https://example.com/login

```bash
curl -d "param1=value1&param2=value2" https://example.com/login
```

Sends data as application/x-www-form-urlencoded in a POST request.

### curl --data-urlencode "name=John Doe" https://example.com/submit

```bash
curl --data-urlencode "name=John Doe" https://example.com/submit
```

Automatically URL-encodes the provided data field before sending.

### curl -H "Content-Type: application/json" -d '{"key":"value"}' https://api.local

```bash
curl -H "Content-Type: application/json" -d '{"key":"value"}' https://api.local
```

Sends a raw JSON payload with the correct Content-Type header.

### curl --data-binary @filename.bin https://example.com/upload

```bash
curl --data-binary @filename.bin https://example.com/upload
```

Posts the exact binary content of a file without processing.

### curl -F "profile=@portrait.jpg" -F "name=User" https://example.com/upload

```bash
curl -F "profile=@portrait.jpg" -F "name=User" https://example.com/upload
```

Submits a multipart/form-data request simulating a file upload form.

### curl -F "file=@local.txt;filename=remote.txt" https://example.com

```bash
curl -F "file=@local.txt;filename=remote.txt" https://example.com
```

Uploads a file via multipart form but renames it for the server.


## Query Parameters

### curl -G -d "q=search" -d "page=1" https://example.com/api

```bash
curl -G -d "q=search" -d "page=1" https://example.com/api
```

Forces a GET request and appends data parameters to the URL query string.


## Headers

### curl -H "X-Custom-Header: value" https://example.com

```bash
curl -H "X-Custom-Header: value" https://example.com
```

Sends a custom HTTP header with the request.

### curl -A "Mozilla/5.0" https://example.com

```bash
curl -A "Mozilla/5.0" https://example.com
```

Spoofs the User-Agent string to identify as a web browser.

### curl -e "https://google.com" https://example.com

```bash
curl -e "https://google.com" https://example.com
```

Sets the Referer header to simulate navigation from another site.

### curl -H "Host: internal.local" https://192.168.1.10

```bash
curl -H "Host: internal.local" https://192.168.1.10
```

Manually sets the Host header, useful for virtual host discovery.


## Authentication

### curl -u username:password https://example.com

```bash
curl -u username:password https://example.com
```

Performs Basic Authentication using a username and password.

### curl -u username https://example.com

```bash
curl -u username https://example.com
```

Prompts the user interactively for the password for Basic Auth.

### curl -H "Authorization: Bearer <token>" https://api.local

```bash
curl -H "Authorization: Bearer <token>" https://api.local
```

Authenticates using a Bearer token in the header.

### curl --digest -u user:pass https://example.com

```bash
curl --digest -u user:pass https://example.com
```

Uses Digest authentication instead of Basic.

### curl --ntlm -u user:pass https://example.com

```bash
curl --ntlm -u user:pass https://example.com
```

Uses NTLM authentication, common in Windows environments.

### curl --negotiate -u : https://example.com

```bash
curl --negotiate -u : https://example.com
```

Uses GSS-API/SPNEGO Negotiate auth, often for Kerberos.

### curl --aws-sigv4 "aws:amz:region:service" --user "key:secret" https://api.amazonaws.com

```bash
curl --aws-sigv4 "aws:amz:region:service" --user "key:secret" https://api.amazonaws.com
```

Signs the request using AWS Signature Version 4.


## Cookies

### curl -c cookies.txt https://example.com/login

```bash
curl -c cookies.txt https://example.com/login
```

Saves received cookies from the server to a text file (cookie jar).

### curl -b cookies.txt https://example.com/dashboard

```bash
curl -b cookies.txt https://example.com/dashboard
```

Sends cookies from a previously saved file to the server.

### curl -b "session_id=12345; user=admin" https://example.com

```bash
curl -b "session_id=12345; user=admin" https://example.com
```

Manually passes cookie data in the request headers.

### curl -b cookies.txt -c cookies.txt https://example.com

```bash
curl -b cookies.txt -c cookies.txt https://example.com
```

Reads cookies from a file and writes updates back to the same file.

### curl -j -b cookies.txt https://example.com

```bash
curl -j -b cookies.txt https://example.com
```

Ignores session cookies (junk) from the file and reads only persistent ones.


## Proxy Usage

### curl -x http://proxy.local:8080 https://example.com

```bash
curl -x http://proxy.local:8080 https://example.com
```

Routes the request through an HTTP proxy.

### curl -x socks5://proxy.local:1080 https://example.com

```bash
curl -x socks5://proxy.local:1080 https://example.com
```

Routes the request through a SOCKS5 proxy.

### curl --proxy-user user:pass -x http://proxy.local:8080 https://example.com

```bash
curl --proxy-user user:pass -x http://proxy.local:8080 https://example.com
```

Authenticates to the proxy server using Basic auth.

### curl --noproxy "*" https://internal.local

```bash
curl --noproxy "*" https://internal.local
```

Bypasses configured proxies for specific hosts or all hosts.

### curl --proxytunnel -x http://proxy.local:8080 https://example.com

```bash
curl --proxytunnel -x http://proxy.local:8080 https://example.com
```

Uses the CONNECT method to tunnel SSL through an HTTP proxy.


## SSL/TLS Security

### curl -k https://self-signed.local

```bash
curl -k https://self-signed.local
```

Allows insecure connections to sites with invalid or self-signed SSL certificates.

### curl --cert client.pem --key key.pem https://secure.local

```bash
curl --cert client.pem --key key.pem https://secure.local
```

Authenticates using a client-side certificate and private key.

### curl --cacert ca-bundle.crt https://example.com

```bash
curl --cacert ca-bundle.crt https://example.com
```

Verifies the server using a specific CA certificate bundle.

### curl --tlsv1.2 https://example.com

```bash
curl --tlsv1.2 https://example.com
```

Forces the connection to use TLS version 1.2.

### curl --tlsv1.3 https://example.com

```bash
curl --tlsv1.3 https://example.com
```

Forces the connection to use TLS version 1.3.

### curl --ciphers ECDHE-RSA-AES256-GCM-SHA384 https://example.com

```bash
curl --ciphers ECDHE-RSA-AES256-GCM-SHA384 https://example.com
```

Specifies exactly which cipher suite to use for the TLS handshake.

### curl --pinnedpubkey sha256//hashvalue https://example.com

```bash
curl --pinnedpubkey sha256//hashvalue https://example.com
```

Enforces SSL pinning by requiring the server key to match the provided hash.


## Performance Tuning

### curl --compressed https://example.com

```bash
curl --compressed https://example.com
```

Requests a compressed response (gzip/brotli) and decompresses it automatically.

### curl --no-keepalive https://example.com

```bash
curl --no-keepalive https://example.com
```

Disables TCP keep-alive to force a new connection for the request.

### curl --limit-rate 100k https://example.com/largefile

```bash
curl --limit-rate 100k https://example.com/largefile
```

Throttles the download speed to 100 kilobytes per second.


## Network Control

### curl --connect-timeout 5 https://example.com

```bash
curl --connect-timeout 5 https://example.com
```

Aborts if the connection to the server takes longer than 5 seconds.

### curl -m 20 https://example.com

```bash
curl -m 20 https://example.com
```

Sets the maximum total time allowed for the entire operation to 20 seconds.

### curl --retry 3 --retry-delay 5 https://unstable.local

```bash
curl --retry 3 --retry-delay 5 https://unstable.local
```

Retries the request up to 3 times with a 5-second delay on transient errors.

### curl --ipv4 https://example.com

```bash
curl --ipv4 https://example.com
```

Forces curl to resolve the name to an IPv4 address only.

### curl --ipv6 https://example.com

```bash
curl --ipv6 https://example.com
```

Forces curl to resolve the name to an IPv6 address only.

### curl --interface eth0 https://example.com

```bash
curl --interface eth0 https://example.com
```

Binds the connection to a specific network interface.

### curl --resolve example.com:443:127.0.0.1 https://example.com

```bash
curl --resolve example.com:443:127.0.0.1 https://example.com
```

Manually forces the domain to resolve to a specific IP address for testing.


## Advanced HTTP

### curl --http2 https://example.com

```bash
curl --http2 https://example.com
```

Forces the client to attempt an HTTP/2 connection.

### curl --http2-prior-knowledge https://example.com

```bash
curl --http2-prior-knowledge https://example.com
```

Issues HTTP/2 requests immediately without an HTTP/1.1 upgrade handshake.

### curl --http3 https://example.com

```bash
curl --http3 https://example.com
```

Forces the client to use HTTP/3 (QUIC) if supported by the build.


## Output Formatting

### curl -s https://example.com

```bash
curl -s https://example.com
```

Enables silent mode, suppressing the progress meter and error messages.

### curl -sS https://example.com

```bash
curl -sS https://example.com
```

Enables silent mode but still outputs errors if they occur.

### curl -w "Status: %{http_code}\n" https://example.com

```bash
curl -w "Status: %{http_code}\n" https://example.com
```

Writes a custom output format displaying the HTTP status code after completion.

### curl -w "Time: %{time_total}\n" -o /dev/null -s https://example.com

```bash
curl -w "Time: %{time_total}\n" -o /dev/null -s https://example.com
```

Measures total request time while discarding the response body.

### curl -w "DNS: %{time_namelookup} Connect: %{time_connect}\n" https://example.com

```bash
curl -w "DNS: %{time_namelookup} Connect: %{time_connect}\n" https://example.com
```

Provides a breakdown of DNS resolution and TCP connection timing.

### curl --dump-header headers.txt https://example.com

```bash
curl --dump-header headers.txt https://example.com
```

Saves the HTTP response headers into a separate file.


## Debugging

### curl --trace dump.txt https://example.com

```bash
curl --trace dump.txt https://example.com
```

Performs a full hex dump of incoming and outgoing data for debugging.

### curl --trace-ascii dump.txt https://example.com

```bash
curl --trace-ascii dump.txt https://example.com
```

Performs an ASCII dump of data traffic, easier to read than hex.

### curl --trace-time -v https://example.com

```bash
curl --trace-time -v https://example.com
```

Prepends a timestamp to every line of verbose output.

### curl --libcurl code.c https://example.com

```bash
curl --libcurl code.c https://example.com
```

Generates C source code equivalent to the command line usage.

### curl --no-buffer https://example.com

```bash
curl --no-buffer https://example.com
```

Disables output buffering to display data as fast as it arrives.


## Red Team / Security

### curl --path-as-is https://example.com/../../etc/passwd

```bash
curl --path-as-is https://example.com/../../etc/passwd
```

Sends the path exactly as provided without dot-segment removal, for traversal testing.

### curl -X PUT --upload-file shell.php https://vuln.local/uploads/

```bash
curl -X PUT --upload-file shell.php https://vuln.local/uploads/
```

Attempts to upload a file using the PUT method for vulnerability testing.

### curl --request-target "*" -X OPTIONS https://example.com

```bash
curl --request-target "*" -X OPTIONS https://example.com
```

Sends an OPTIONS request to the server root to check global supported methods.

### curl -H "Host: malicious.com" -k https://target.com

```bash
curl -H "Host: malicious.com" -k https://target.com
```

Tests for Host Header Injection vulnerabilities.

### curl -H "User-Agent: () { :;}; echo CVE-2014-6271" https://example.com/cgi-bin/test

```bash
curl -H "User-Agent: () { :;}; echo CVE-2014-6271" https://example.com/cgi-bin/test
```

Sends a Shellshock payload in the User-Agent header.


## Blue Team / Validation

### curl -I -s https://example.com | grep -i "Content-Security-Policy"

```bash
curl -I -s https://example.com | grep -i "Content-Security-Policy"
```

Checks for the presence of the CSP security header.

### curl -I -s https://example.com | grep -i "Strict-Transport-Security"

```bash
curl -I -s https://example.com | grep -i "Strict-Transport-Security"
```

Verifies that HSTS is enabled on the server.

### curl -s -o /dev/null -w "%{ssl_verify_result}\n" https://example.com

```bash
curl -s -o /dev/null -w "%{ssl_verify_result}\n" https://example.com
```

Checks the SSL verification result code (0 means success).

### curl --doh-url https://cloudflare-dns.com/dns-query https://example.com

```bash
curl --doh-url https://cloudflare-dns.com/dns-query https://example.com
```

Uses DNS-over-HTTPS (DoH) to bypass local DNS filters or logging.


## Protocol Fuzzing

### curl -v --header "Transfer-Encoding: chunked" --header "Content-Length: 10" https://example.com

```bash
curl -v --header "Transfer-Encoding: chunked" --header "Content-Length: 10" https://example.com
```

Sends conflicting headers to test for Request Smuggling vulnerabilities.


## Other Protocols

### curl ftp://user:pass@ftp.example.com/file.txt

```bash
curl ftp://user:pass@ftp.example.com/file.txt
```

Downloads a file using the FTP protocol.

### curl -T local.txt ftp://user:pass@ftp.example.com/upload/

```bash
curl -T local.txt ftp://user:pass@ftp.example.com/upload/
```

Uploads a file using FTP.

### curl telnet://example.com:23

```bash
curl telnet://example.com:23
```

Initiates a raw Telnet connection to the host.

### curl smtp://mail.example.com --mail-from me@example.com --mail-rcpt you@example.com --upload-file mail.txt

```bash
curl smtp://mail.example.com --mail-from me@example.com --mail-rcpt you@example.com --upload-file mail.txt
```

Sends an email using the SMTP protocol.

### curl ldap://ldap.example.com/dc=example,dc=com

```bash
curl ldap://ldap.example.com/dc=example,dc=com
```

Queries an LDAP server.

### curl pop3://pop.example.com -u user:password

```bash
curl pop3://pop.example.com -u user:password
```

Connects to a POP3 server to check mail.

### curl dict://dict.org/d:curl

```bash
curl dict://dict.org/d:curl
```

Uses the DICT protocol to look up a word definition.

### curl tftp://192.168.1.1/file.txt

```bash
curl tftp://192.168.1.1/file.txt
```

Downloads a file using TFTP (Trivial File Transfer Protocol).

### curl -u user:key sftp://example.com/file.txt

```bash
curl -u user:key sftp://example.com/file.txt
```

Downloads a file using SFTP (SSH File Transfer Protocol).

### curl gopher://example.com/

```bash
curl gopher://example.com/
```

Connects to a server using the legacy Gopher protocol.


## Automation / CI

### curl -s -f https://example.com/health || exit 1

```bash
curl -s -f https://example.com/health || exit 1
```

Fails silently (exit code 22) if the HTTP response is an error (4xx/5xx), suitable for pipelines.

### curl --create-dirs -o /tmp/folder/file.txt https://example.com

```bash
curl --create-dirs -o /tmp/folder/file.txt https://example.com
```

Automatically creates the local directory structure if it does not exist.

### curl -R -O https://example.com/file.zip

```bash
curl -R -O https://example.com/file.zip
```

Sets the timestamp of the local file to match the remote file time.


## Advanced Config

### curl -K config.txt

```bash
curl -K config.txt
```

Reads arguments and URLs from a configuration file.

### curl --url-query "name=val" https://example.com

```bash
curl --url-query "name=val" https://example.com
```

Appends a query parameter to the URL, handling encoding automatically (newer curl versions).

### curl --haproxy-protocol https://example.com

```bash
curl --haproxy-protocol https://example.com
```

Sends the HAProxy PROXY protocol header at the start of the connection.


## Cookie Manipulation

### curl --junk-session-cookies -c newjars.txt https://example.com

```bash
curl --junk-session-cookies -c newjars.txt https://example.com
```

Ignores session cookies from previous runs when creating a new jar.


## Header Manipulation

### curl -H "Accept:" https://example.com

```bash
curl -H "Accept:" https://example.com
```

Removes the default Accept header by sending it empty.

### curl -H "Expect:" -F "file=@large.iso" https://example.com

```bash
curl -H "Expect:" -F "file=@large.iso" https://example.com
```

Disables the Expect: 100-continue header to reduce latency on large posts.


## DNS Control

### curl --dns-servers 1.1.1.1 https://example.com

```bash
curl --dns-servers 1.1.1.1 https://example.com
```

Forces curl to use a specific DNS server for resolution.

### curl --dns-interface eth1 https://example.com

```bash
curl --dns-interface eth1 https://example.com
```

Forces DNS requests to go out through a specific network interface.


## Connection Control

### curl --keepalive-time 10 https://example.com

```bash
curl --keepalive-time 10 https://example.com
```

Sets the interval for TCP keep-alive probes to 10 seconds.


## Rate Limiting Simulation

### curl --limit-rate 500B https://example.com

```bash
curl --limit-rate 500B https://example.com
```

Simulates extremely slow network conditions (500 bytes/sec).


## Security Testing

### curl -v --tls-max 1.1 https://example.com

```bash
curl -v --tls-max 1.1 https://example.com
```

Forces the connection to use no higher than TLS 1.1 to test legacy support.

### curl --crlfile revoked.crl https://example.com

```bash
curl --crlfile revoked.crl https://example.com
```

Provides a Certificate Revocation List to check if the server cert is revoked.


## File Upload

### curl -T file.txt https://example.com/put

```bash
curl -T file.txt https://example.com/put
```

Short-hand for PUT file upload.

### curl -T "{file1,file2}.txt" https://example.com/

```bash
curl -T "{file1,file2}.txt" https://example.com/
```

Uploads multiple files using globbing support.


## Globbing

### curl -O "https://example.com/img[001-100].jpg"

```bash
curl -O "https://example.com/img[001-100].jpg"
```

Downloads a sequence of files numbered 001 to 100.

### curl -O "https://example.com/{frontend,backend,db}.log"

```bash
curl -O "https://example.com/{frontend,backend,db}.log"
```

Downloads multiple specific files using brace expansion.


## Unix Socket

### curl --unix-socket /var/run/docker.sock http://localhost/info

```bash
curl --unix-socket /var/run/docker.sock http://localhost/info
```

Connects to an HTTP server listening on a Unix Domain Socket (e.g., Docker).


## Output Handling

### curl --stderr output.log https://example.com

```bash
curl --stderr output.log https://example.com
```

Redirects stderr (progress/errors) to a file instead of the terminal.


## Advanced Post

### curl -d @data.json -H "Content-Type: application/json" https://example.com

```bash
curl -d @data.json -H "Content-Type: application/json" https://example.com
```

Reads POST data directly from a local file.

### curl --data-raw "@literal" https://example.com

```bash
curl --data-raw "@literal" https://example.com
```

Sends data containing an '@' symbol literally, without treating it as a filename.


## Advanced Auth

### curl --oauth2-bearer "TOKEN" https://example.com

```bash
curl --oauth2-bearer "TOKEN" https://example.com
```

Specific flag for providing an OAuth 2.0 bearer token.


## TLS 1.3 Features

### curl --tls13-ciphers TLS_AES_256_GCM_SHA384 https://example.com

```bash
curl --tls13-ciphers TLS_AES_256_GCM_SHA384 https://example.com
```

Specifies cipher suites specifically for TLS 1.3 connections.


## Connection Debugging

### curl -v --trace-ids https://example.com

```bash
curl -v --trace-ids https://example.com
```

Adds connection and transfer IDs to verbose output for tracking multiplexed streams.


## Metalink

### curl --metalink file.meta

```bash
curl --metalink file.meta
```

Downloads files listed in a Metalink XML file (if supported).


## URL Handling

### curl --location-trusted -u user:pass https://example.com

```bash
curl --location-trusted -u user:pass https://example.com
```

Follows redirects and forwards authentication credentials to the new host.


## Parallel Downloads

### curl -Z -O https://example.com/file1 -O https://example.com/file2

```bash
curl -Z -O https://example.com/file1 -O https://example.com/file2
```

Performs parallel downloads of multiple URLs (requires libcurl with parallel support).


## Time Conditions

### curl -z "21 Dec 2023" https://example.com/file.txt

```bash
curl -z "21 Dec 2023" https://example.com/file.txt
```

Downloads the file only if it was modified later than the specified date.

### curl -z -file.txt -O https://example.com/file.txt

```bash
curl -z -file.txt -O https://example.com/file.txt
```

Downloads the file only if the remote file is newer than the local file.


## Incident Response

### curl -s -I -X GET https://compromised.local

```bash
curl -s -I -X GET https://compromised.local
```

Safely retrieves headers from a potentially compromised host without executing content.

### curl --max-time 2 https://suspicious-ip.local

```bash
curl --max-time 2 https://suspicious-ip.local
```

Probes a suspicious IP with a hard timeout to avoid hanging on tar-pits.

### curl -A "IncidentResponseBot/1.0" https://internal.log

```bash
curl -A "IncidentResponseBot/1.0" https://internal.log
```

Uses a specific User-Agent to tag traffic during an investigation.


## Tor / Anonymity

### curl --socks5-hostname localhost:9050 https://check.torproject.org

```bash
curl --socks5-hostname localhost:9050 https://check.torproject.org
```

Routes traffic through Tor, resolving DNS remotely via the SOCKS proxy.


## HTTP/3

### curl --alt-svc altsvc.cache https://example.com

```bash
curl --alt-svc altsvc.cache https://example.com
```

Uses the Alt-Svc cache to upgrade connections to HTTP/3 or HTTP/2.


## Cookies

### curl --cookie-jar - https://example.com

```bash
curl --cookie-jar - https://example.com
```

Writes the cookie jar to stdout after the operation.


## Data Submission

### curl --json '{"key": "value"}' https://example.com

```bash
curl --json '{"key": "value"}' https://example.com
```

Shortcut (curl 7.82+) that sets Content-Type: application/json and Accept: application/json.


## Debugging

### curl --fail-with-body https://example.com/api

```bash
curl --fail-with-body https://example.com/api
```

Returns an error code on 400+ status but still saves the response body.


## Network

### curl --local-port 10000-11000 https://example.com

```bash
curl --local-port 10000-11000 https://example.com
```

Forces the client to use a source port within a specific range.


## SSH

### curl -u user:pass scp://example.com/~/file.txt

```bash
curl -u user:pass scp://example.com/~/file.txt
```

Downloads a file via SCP (Secure Copy Protocol).


## Output Formatting

### curl -w "Type: %{content_type} Size: %{size_download}\n" https://example.com

```bash
curl -w "Type: %{content_type} Size: %{size_download}\n" https://example.com
```

Reports the content type and downloaded size after completion.


## Proxy Usage

### curl --proxy-insecure -x https://proxy.local https://example.com

```bash
curl --proxy-insecure -x https://proxy.local https://example.com
```

Connects to an HTTPS proxy ignoring its certificate errors.


## TLS Security

### curl --tlsuser user --tlspassword pass https://example.com

```bash
curl --tlsuser user --tlspassword pass https://example.com
```

Provides username/password for TLS-SRP authentication.


## Headers

### curl --header "X-Header:@file.txt" https://example.com

```bash
curl --header "X-Header:@file.txt" https://example.com
```

Reads the header value from a file (stripping newlines).


## Rate Limiting

### curl --speed-limit 1000 --speed-time 10 https://example.com

```bash
curl --speed-limit 1000 --speed-time 10 https://example.com
```

Aborts the download if speed drops below 1000 bytes/sec for 10 seconds.


## Output

### curl --progress-bar -O https://example.com/large.zip

```bash
curl --progress-bar -O https://example.com/large.zip
```

Displays a simple progress bar instead of the standard meter.


## Red Team / Recon

### curl -I -X DELETE https://example.com/admin

```bash
curl -I -X DELETE https://example.com/admin
```

Checks if the DELETE method is enabled on a sensitive endpoint without executing it completely.


## FTP

### curl --ftp-create-dirs -T local.txt ftp://example.com/new/path/

```bash
curl --ftp-create-dirs -T local.txt ftp://example.com/new/path/
```

Uploads a file via FTP and creates the remote directory structure if missing.

### curl --ftp-ssl -u user:pass ftp://example.com

```bash
curl --ftp-ssl -u user:pass ftp://example.com
```

Forces FTPS (FTP over SSL) for secure transfer.


## Cleanup

### curl -K cleanup_config.txt

```bash
curl -K cleanup_config.txt
```

Runs a batch of delete/logout commands defined in a config file.


## API Testing

### curl -X POST -H "Content-Type: application/xml" -d "<xml>data</xml>" https://api.local

```bash
curl -X POST -H "Content-Type: application/xml" -d "<xml>data</xml>" https://api.local
```

Submits an XML payload to a SOAP or XML-RPC endpoint.


## Red Team / Fuzzing

### curl -H "Range: bytes=0-18446744073709551615" https://example.com

```bash
curl -H "Range: bytes=0-18446744073709551615" https://example.com
```

Sends a malformed Range header to test for integer overflow vulnerabilities.


## Blue Team / Monitoring

### curl -s -w "%{remote_ip}" https://example.com

```bash
curl -s -w "%{remote_ip}" https://example.com
```

Outputs only the remote IP address of the server connected to.


## Proxy

### curl --proxy-header "Custom: Header" -x http://proxy.local https://example.com

```bash
curl --proxy-header "Custom: Header" -x http://proxy.local https://example.com
```

Sends a custom header to the proxy server itself, not the destination.


## Advanced

### curl --engine list

```bash
curl --engine list
```

Lists available OpenSSL crypto engines supported by the build.

## Related tools

- [Wget](https://terminal.rokibulroni.com/tool/utilities/wget)
- [HTTPie](https://terminal.rokibulroni.com/tool/utilities/httpie)
- [jq](https://terminal.rokibulroni.com/tool/utilities/jq)
