# HTTPie

> A human-friendly HTTP client with intuitive syntax, JSON support and coloured output — great for exploring APIs.

- Category: Utilities
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/utilities/httpie
- Homepage: https://httpie.io/cli
- Documentation: https://httpie.io/docs/cli
- Tags: HTTP, APIs, JSON

## Install

- apt: `sudo apt install httpie`
- brew: `brew install httpie`
- pipx: `pipx install httpie`

## Basic HTTP Request

### http https://api.example.com/health

```bash
http https://api.example.com/health
```

Sends a basic GET request to the specified URL using default settings.

### http GET https://api.example.com/users

```bash
http GET https://api.example.com/users
```

Explicitly specifies the GET method for clarity when fetching resources.

### http POST https://api.example.com/users name="John Doe"

```bash
http POST https://api.example.com/users name="John Doe"
```

Sends a POST request with a JSON body containing a string field.

### http PUT https://api.example.com/users/1 active:=true

```bash
http PUT https://api.example.com/users/1 active:=true
```

Sends a PUT request using non-string JSON data types like booleans.

### http DELETE https://api.example.com/users/1

```bash
http DELETE https://api.example.com/users/1
```

Sends a DELETE request to remove a resource.

### http PATCH https://api.example.com/users/1 email="new@example.com"

```bash
http PATCH https://api.example.com/users/1 email="new@example.com"
```

Sends a PATCH request to partially update a resource.

### http HEAD https://api.example.com/large-file.zip

```bash
http HEAD https://api.example.com/large-file.zip
```

Retrieves only the headers of a resource without downloading the body.

### http OPTIONS https://api.example.com/users

```bash
http OPTIONS https://api.example.com/users
```

Queries the supported HTTP methods for a specific endpoint.


## URL Parameters

### http https://api.example.com/search q==httpie page==1

```bash
http https://api.example.com/search q==httpie page==1
```

Appends URL query parameters automatically using the double equals syntax.

### http https://api.example.com/filter tags==api tags==testing

```bash
http https://api.example.com/filter tags==api tags==testing
```

Sends multiple values for the same query parameter key.


## Data Submission (JSON)

### http POST https://api.example.com/orders id:=42 price:=19.99

```bash
http POST https://api.example.com/orders id:=42 price:=19.99
```

Constructs a JSON body with integer and float values using the colon-equals syntax.

### http POST https://api.example.com/config settings:='{"theme": "dark"}'

```bash
http POST https://api.example.com/config settings:='{"theme": "dark"}'
```

Embeds a raw JSON object inside a specific field of the request payload.

### http POST https://api.example.com/data items:='[1, 2, 3]'

```bash
http POST https://api.example.com/data items:='[1, 2, 3]'
```

Sends a JSON array within a specific field of the request body.


## Data Submission (Form)

### http -f POST https://api.example.com/login username=admin password=secret

```bash
http -f POST https://api.example.com/login username=admin password=secret
```

Submits data as 'application/x-www-form-urlencoded' instead of JSON.


## Headers

### http https://api.example.com/secure X-API-Key:123456

```bash
http https://api.example.com/secure X-API-Key:123456
```

Adds a custom HTTP header to the request using the colon syntax.

### http https://api.example.com/mobile User-Agent:iOS/15.0

```bash
http https://api.example.com/mobile User-Agent:iOS/15.0
```

Overrides the default User-Agent header to simulate a different client.

### http https://api.example.com/resource If-None-Match:"etag_value"

```bash
http https://api.example.com/resource If-None-Match:"etag_value"
```

Sends conditional headers to check for resource updates.

### http https://api.example.com/protected Authorization:"Bearer mytoken"

```bash
http https://api.example.com/protected Authorization:"Bearer mytoken"
```

Manually sets the Authorization header for token-based access.


## Data Submission (Files)

### http POST https://api.example.com/upload @/path/to/data.json

```bash
http POST https://api.example.com/upload @/path/to/data.json
```

Uploads the contents of a file as the raw request body.

### http -f POST https://api.example.com/upload profile_pic@/path/to/image.png

```bash
http -f POST https://api.example.com/upload profile_pic@/path/to/image.png
```

Uploads a file as a field in a Multipart-Encoded form.


## Authentication

### http -a user:password https://api.example.com/protected

```bash
http -a user:password https://api.example.com/protected
```

Performs Basic Authentication with the provided username and password.

### http -a user https://api.example.com/protected

```bash
http -a user https://api.example.com/protected
```

Prompts interactively for the password for Basic Authentication.

### http -A digest -a user:pass https://api.example.com/digest-auth

```bash
http -A digest -a user:pass https://api.example.com/digest-auth
```

Uses Digest Authentication instead of the default Basic Auth.

### http -A bearer -a 'token_string' https://api.example.com/api

```bash
http -A bearer -a 'token_string' https://api.example.com/api
```

Simplifies Bearer Token authentication syntax.


## Session Management

### http --session=logged-in -a user:pass https://api.example.com/login

```bash
http --session=logged-in -a user:pass https://api.example.com/login
```

Creates a named session that persists cookies and auth headers.

### http --session=logged-in https://api.example.com/dashboard

```bash
http --session=logged-in https://api.example.com/dashboard
```

Reuses an existing session to maintain state across requests.

### http --session-read-only=logged-in https://api.example.com/view

```bash
http --session-read-only=logged-in https://api.example.com/view
```

Uses a session's cookies but does not save any new cookies received.


## Output Control

### http -v https://api.example.com/debug

```bash
http -v https://api.example.com/debug
```

Prints the whole HTTP exchange (request and response) for debugging.

### http -h https://api.example.com/headers

```bash
http -h https://api.example.com/headers
```

Prints only the response headers, suppressing the body.

### http -b https://api.example.com/json

```bash
http -b https://api.example.com/json
```

Prints only the response body, suppressing the headers.

### http -p Hh https://api.example.com/trace

```bash
http -p Hh https://api.example.com/trace
```

Prints request headers (H) and response headers (h) only.

### http --style=solarized https://api.example.com/color

```bash
http --style=solarized https://api.example.com/color
```

Changes the syntax highlighting color scheme of the output.

### http --pretty=none https://api.example.com/raw

```bash
http --pretty=none https://api.example.com/raw
```

Disables all formatting and colors for raw output.

### http --pretty=format https://api.example.com/data

```bash
http --pretty=format https://api.example.com/data
```

Applies formatting to the JSON output but disables colors.


## Downloads

### http -d https://api.example.com/files/report.pdf

```bash
http -d https://api.example.com/files/report.pdf
```

Downloads the file and saves it with the filename from the Content-Disposition header.

### http -o my_report.pdf https://api.example.com/files/report.pdf

```bash
http -o my_report.pdf https://api.example.com/files/report.pdf
```

Downloads the file and saves it with a custom filename.

### http --download --output report.pdf https://api.example.com/report

```bash
http --download --output report.pdf https://api.example.com/report
```

Explicit long-form command to download a resource to a file.


## SSL & Security

### http --verify=no https://self-signed.local/admin

```bash
http --verify=no https://self-signed.local/admin
```

Skips SSL certificate verification (insecure) for testing self-signed certs.

### http --verify=/path/to/ca.pem https://internal.api.com

```bash
http --verify=/path/to/ca.pem https://internal.api.com
```

Verifies the SSL certificate using a custom CA bundle.

### http --cert=client.pem --cert-key=key.pem https://mtls.example.com

```bash
http --cert=client.pem --cert-key=key.pem https://mtls.example.com
```

Uses a client certificate and private key for Mutual TLS (mTLS) authentication.

### http --ssl=tls1.2 https://legacy.example.com

```bash
http --ssl=tls1.2 https://legacy.example.com
```

Forces a specific SSL/TLS version for the connection.


## Proxy Usage

### http --proxy=http:http://10.0.0.1:8080 https://api.example.com

```bash
http --proxy=http:http://10.0.0.1:8080 https://api.example.com
```

Routes HTTP traffic through a specific proxy server.

### http --proxy=https:socks5://127.0.0.1:9050 https://onion.example.com

```bash
http --proxy=https:socks5://127.0.0.1:9050 https://onion.example.com
```

Routes HTTPS traffic through a SOCKS5 proxy.

### http --proxy-auth=user:pass --proxy=http:10.0.0.1:8080 https://api.example.com

```bash
http --proxy-auth=user:pass --proxy=http:10.0.0.1:8080 https://api.example.com
```

Authenticates with the proxy server using Basic Auth.


## Networking

### http --timeout=5 https://slow.example.com

```bash
http --timeout=5 https://slow.example.com
```

Sets a connection and read timeout in seconds.

### http --follow https://redirect.example.com

```bash
http --follow https://redirect.example.com
```

Automatically follows 30x redirects.

### http --max-redirects=3 --follow https://loop.example.com

```bash
http --max-redirects=3 --follow https://loop.example.com
```

Limits the number of redirects followed to prevent infinite loops.

### http --ipv4 https://api.example.com

```bash
http --ipv4 https://api.example.com
```

Forces the connection to use IPv4 only.

### http --ipv6 https://api.example.com

```bash
http --ipv6 https://api.example.com
```

Forces the connection to use IPv6 only.


## Advanced Workflow

### http --chunked POST https://api.example.com/stream @large_file.txt

```bash
http --chunked POST https://api.example.com/stream @large_file.txt
```

Forces chunked transfer encoding for uploading large files.


## Offline & Debug

### http --offline https://api.example.com/test

```bash
http --offline https://api.example.com/test
```

Prints the request that would be sent without actually sending it.

### http --debug https://api.example.com

```bash
http --debug https://api.example.com
```

Prints detailed exception tracebacks for troubleshooting HTTPie errors.


## Scripting & Automation

### http --check-status https://api.example.com/health

```bash
http --check-status https://api.example.com/health
```

Exits with an error code if the HTTP status is not 2xx, useful for scripts.

### http --ignore-stdin https://api.example.com/test

```bash
http --ignore-stdin https://api.example.com/test
```

Prevents HTTPie from reading data piped to stdin.

### echo '{"foo": "bar"}' | http POST https://api.example.com/pipe

```bash
echo '{"foo": "bar"}' | http POST https://api.example.com/pipe
```

Pipes JSON from the shell directly into the request body.


## Red Team / Testing

### http POST https://api.example.com/login username=' admin'--'

```bash
http POST https://api.example.com/login username=' admin'--'
```

Injects SQL payloads into JSON fields for vulnerability testing.

### http https://api.example.com/admin Cookie:session_id=admin_cookie

```bash
http https://api.example.com/admin Cookie:session_id=admin_cookie
```

Manually injects a session cookie to test session hijacking scenarios.

### http -v PUT https://api.example.com/profile Host:internal-admin.local

```bash
http -v PUT https://api.example.com/profile Host:internal-admin.local
```

Spoofs the Host header to test for Host Header Injection vulnerabilities.

### http DELETE https://api.example.com/users/1 X-HTTP-Method-Override:PUT

```bash
http DELETE https://api.example.com/users/1 X-HTTP-Method-Override:PUT
```

Tests for HTTP method override vulnerabilities in APIs.


## Blue Team / Validation

### http --print=h https://api.example.com | grep 'Strict-Transport-Security'

```bash
http --print=h https://api.example.com | grep 'Strict-Transport-Security'
```

Validates the presence of security headers in the response.

### http --max-headers=1024 https://api.example.com

```bash
http --max-headers=1024 https://api.example.com
```

Adjusts the maximum allowed header size to test boundary conditions.


## Incident Response

### http -v --all https://api.example.com/suspicious-endpoint

```bash
http -v --all https://api.example.com/suspicious-endpoint
```

Captures the entire redirect chain and all headers for forensic analysis.


## Advanced Workflow

### http -f POST https://api.example.com/search query='test' filters:='{"active":true}'

```bash
http -f POST https://api.example.com/search query='test' filters:='{"active":true}'
```

Mixes form fields and JSON strings in a single form-encoded request.

### cat config.json | http POST https://api.example.com/setup env==production

```bash
cat config.json | http POST https://api.example.com/setup env==production
```

Uploads a file via piping while simultaneously adding URL query parameters.

### http --compress POST https://api.example.com/logs @large_log.txt

```bash
http --compress POST https://api.example.com/logs @large_log.txt
```

Compresses the request body using gzip before sending.


## API Testing

### http https://api.example.com/users | http POST https://api.backup.com/users

```bash
http https://api.example.com/users | http POST https://api.backup.com/users
```

Downloads data from one API and immediately pipes it as a POST body to another.

### http --session=test https://api.example.com/token && http --session=test https://api.example.com/data

```bash
http --session=test https://api.example.com/token && http --session=test https://api.example.com/data
```

Chains commands in shell using the same session for sequential testing.


## Output Control

### http --print=b --pretty=format https://api.example.com/data > output.json

```bash
http --print=b --pretty=format https://api.example.com/data > output.json
```

Saves only the formatted response body to a file for later inspection.


## Configuration

### http --default-scheme=https example.com

```bash
http --default-scheme=https example.com
```

Sets the default protocol scheme to HTTPS for the request.


## Advanced Auth

### http --auth-type=digest -a user:pass POST https://api.example.com/upload @file.bin

```bash
http --auth-type=digest -a user:pass POST https://api.example.com/upload @file.bin
```

Combines Digest Auth with binary file uploading.


## Data Submission (JSON)

### http POST https://api.example.com/users null:=null empty:=""

```bash
http POST https://api.example.com/users null:=null empty:=""
```

Sends explicit null values and empty strings in a JSON payload.

### http POST https://api.example.com/math pi:=3.14159

```bash
http POST https://api.example.com/math pi:=3.14159
```

Sends floating point numbers directly in the JSON body.


## Advanced Workflow

### http --quiet POST https://api.example.com/ping

```bash
http --quiet POST https://api.example.com/ping
```

Suppresses all output entirely, useful for silent heartbeat scripts.


## Headers

### http https://api.example.com header-with-empty-value:

```bash
http https://api.example.com header-with-empty-value:
```

Sends a header with an empty value.

### http https://api.example.com header-to-remove:

```bash
http https://api.example.com header-to-remove:
```

Removes a default header (like Accept-Encoding) by setting it to empty.


## Output Control

### http --print=HB https://api.example.com

```bash
http --print=HB https://api.example.com
```

Prints the request headers (H) and request body (B) only.


## Scripting & Automation

### http --timeout=0.1 https://local.test

```bash
http --timeout=0.1 https://local.test
```

Sets a very short timeout to test latency handling.


## Red Team / Testing

### http POST https://api.example.com/xml Content-Type:application/xml @payload.xml

```bash
http POST https://api.example.com/xml Content-Type:application/xml @payload.xml
```

Manually sets Content-Type to send XXE payloads via raw XML files.


## Session Management

### http --session=secure_user --ssl=tls1.3 https://api.example.com/profile

```bash
http --session=secure_user --ssl=tls1.3 https://api.example.com/profile
```

Saves a session that forces TLS 1.3 for future requests.


## Red Team / Testing

### http POST https://api.example.com/login 'username=admin'' OR ''1''=''1'

```bash
http POST https://api.example.com/login 'username=admin'' OR ''1''=''1'
```

Tests SQL injection vulnerabilities using form fields.


## Data Submission (JSON)

### http POST https://api.example.com/array list:='[{"id":1}, {"id":2}]'

```bash
http POST https://api.example.com/array list:='[{"id":1}, {"id":2}]'
```

Sends a list of objects within a JSON field.


## Proxy Usage

### http --proxy=http:http://user:pass@10.10.1.1:8080 https://api.example.com

```bash
http --proxy=http:http://user:pass@10.10.1.1:8080 https://api.example.com
```

Inline proxy authentication syntax within the proxy URL.


## Output Control

### http --stream https://api.example.com/events

```bash
http --stream https://api.example.com/events
```

Streams the response output line-by-line, ideal for Server-Sent Events (SSE).


## Downloads

### http -d -o archive.zip https://api.example.com/generate-zip

```bash
http -d -o archive.zip https://api.example.com/generate-zip
```

Combines download flag with output filename for clear intent.


## Red Team / Testing

### http GET https://api.example.com/admin 'X-Original-URL:/admin'

```bash
http GET https://api.example.com/admin 'X-Original-URL:/admin'
```

Tests for access control bypass using framework-specific override headers.


## Advanced Workflow

### http --session=temp https://api.example.com/1 && http --session=temp https://api.example.com/2

```bash
http --session=temp https://api.example.com/1 && http --session=temp https://api.example.com/2
```

Uses a temporary named session for a quick multi-step workflow.


## Blue Team / Validation

### http HEAD https://api.example.com | grep -i "server"

```bash
http HEAD https://api.example.com | grep -i "server"
```

Inspects the Server header to identify backend technology.


## Scripting & Automation

### http --check-status --ignore-stdin GET https://healthcheck.local

```bash
http --check-status --ignore-stdin GET https://healthcheck.local
```

Robust health check command for cron jobs.


## Data Submission (Files)

### http --form POST https://api.example.com/upload file@/dev/null

```bash
http --form POST https://api.example.com/upload file@/dev/null
```

Simulates a file upload with an empty file.


## Output Control

### http --style=monokai https://api.example.com/code

```bash
http --style=monokai https://api.example.com/code
```

Uses the Monokai color scheme for better visibility of code responses.


## Networking

### http --max-redirects=0 https://api.example.com/redirect

```bash
http --max-redirects=0 https://api.example.com/redirect
```

Prevents following any redirects to inspect the 3xx response directly.


## Advanced Auth

### http -a user:pass --auth-type=basic https://api.example.com

```bash
http -a user:pass --auth-type=basic https://api.example.com
```

Explicitly sets auth type to Basic (redundant but explicit for scripts).


## Data Submission (JSON)

### http POST https://api.example.com/hook payload:='{"a": [1,2], "b": {"c": 3}}'

```bash
http POST https://api.example.com/hook payload:='{"a": [1,2], "b": {"c": 3}}'
```

Sends complex nested JSON structures in a single command.


## API Testing

### http PUT https://api.example.com/items/1 updated_at:=`date +%s`

```bash
http PUT https://api.example.com/items/1 updated_at:=`date +%s`
```

Uses shell command substitution to send a current timestamp.


## Red Team / Testing

### http -v OPTIONS https://api.example.com

```bash
http -v OPTIONS https://api.example.com
```

Checks for CORS misconfigurations and allowed methods verbally.


## Blue Team / Validation

### http --verify=no HEAD https://expired.example.com

```bash
http --verify=no HEAD https://expired.example.com
```

Checks connectivity to a host with an expired certificate without failing.


## Advanced Workflow

### http --print=b https://api.example.com/ip | http POST https://api.tracker.com/log ip=@-

```bash
http --print=b https://api.example.com/ip | http POST https://api.tracker.com/log ip=@-
```

Pipes the body of one response into a field of the next request.


## Output Control

### http --pretty=all --style=fruity https://api.example.com

```bash
http --pretty=all --style=fruity https://api.example.com
```

Maximizes readability with pretty printing and a vibrant color style.


## Scripting & Automation

### http --check-status --timeout=2 HEAD https://critical.service.local

```bash
http --check-status --timeout=2 HEAD https://critical.service.local
```

A fast, strict availability check for monitoring systems.


## Cleanup

### http --session=logged-in DELETE https://api.example.com/logout

```bash
http --session=logged-in DELETE https://api.example.com/logout
```

Uses the session to call the logout endpoint before discarding the session file.

## Related tools

- [curl](https://terminal.rokibulroni.com/tool/utilities/curl)
- [jq](https://terminal.rokibulroni.com/tool/utilities/jq)
- [Wget](https://terminal.rokibulroni.com/tool/utilities/wget)
