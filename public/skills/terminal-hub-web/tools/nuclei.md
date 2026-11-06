# Nuclei

> A fast, template-based vulnerability scanner. Thousands of community YAML templates detect CVEs, misconfigurations and exposures.

- Category: Web
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/web/nuclei
- Homepage: https://github.com/projectdiscovery/nuclei
- Documentation: https://docs.projectdiscovery.io/tools/nuclei/overview
- Tags: vulnerability scanning, templates, CVE, ProjectDiscovery

## Install

- apt: `sudo apt install nuclei`
- brew: `brew install nuclei`
- go: `go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest`

## Basic Template Scanning

### nuclei -u https://example.com

```bash
nuclei -u https://example.com
```

Scans a single target URL using all default Nuclei templates.


## Target Input Methods

### nuclei -l targets.txt

```bash
nuclei -l targets.txt
```

Scans a list of targets provided in a text file.

### cat targets.txt | nuclei

```bash
cat targets.txt | nuclei
```

Accepts targets from standard input (stdin) via piping.


## Template Selection

### nuclei -u https://example.com -t templates/cves/

```bash
nuclei -u https://example.com -t templates/cves/
```

Runs only the templates located in a specific directory.

### nuclei -u https://example.com -t cves/2023/CVE-2023-1234.yaml

```bash
nuclei -u https://example.com -t cves/2023/CVE-2023-1234.yaml
```

Executes a single specific template file against the target.

### nuclei -u https://example.com -tl

```bash
nuclei -u https://example.com -tl
```

Lists all available templates without running a scan.


## Tag Filtering

### nuclei -u https://example.com -tags cve

```bash
nuclei -u https://example.com -tags cve
```

Runs all templates tagged with 'cve' against the target.

### nuclei -u https://example.com -tags cve,misconfig

```bash
nuclei -u https://example.com -tags cve,misconfig
```

Runs templates that match either the 'cve' or 'misconfig' tags.

### nuclei -u https://example.com -etags intrusive

```bash
nuclei -u https://example.com -etags intrusive
```

Excludes templates tagged as 'intrusive' from the scan.


## Severity Filtering

### nuclei -u https://example.com -s critical

```bash
nuclei -u https://example.com -s critical
```

Restricts the scan to templates with 'critical' severity only.

### nuclei -u https://example.com -s high,critical

```bash
nuclei -u https://example.com -s high,critical
```

Runs templates with either 'high' or 'critical' severity levels.

### nuclei -u https://example.com -es info,low

```bash
nuclei -u https://example.com -es info,low
```

Excludes templates with 'info' or 'low' severity from the scan.


## Template Selection

### nuclei -u https://example.com -a projectdiscovery

```bash
nuclei -u https://example.com -a projectdiscovery
```

Runs templates created by a specific author.

### nuclei -u https://example.com -id git-config

```bash
nuclei -u https://example.com -id git-config
```

Runs specific templates matching the provided template IDs.

### nuclei -u https://example.com -eid token-spray

```bash
nuclei -u https://example.com -eid token-spray
```

Excludes specific template IDs from the execution.

### nuclei -u https://example.com -type http

```bash
nuclei -u https://example.com -type http
```

Runs only templates of the 'http' protocol type.

### nuclei -u https://example.com -type dns

```bash
nuclei -u https://example.com -type dns
```

Runs only templates of the 'dns' protocol type.


## Workflow Execution

### nuclei -u https://example.com -w workflows/wordpress-workflow.yaml

```bash
nuclei -u https://example.com -w workflows/wordpress-workflow.yaml
```

Executes a defined workflow to run templates in a specific sequence.

### nuclei -u https://example.com -w workflows/

```bash
nuclei -u https://example.com -w workflows/
```

Runs all workflows found in the specified directory.


## Output Formats

### nuclei -u https://example.com -o output.txt

```bash
nuclei -u https://example.com -o output.txt
```

Saves the scan results to a plain text file.

### nuclei -u https://example.com -j

```bash
nuclei -u https://example.com -j
```

Outputs the findings in JSON format to the console.

### nuclei -u https://example.com -je output.json

```bash
nuclei -u https://example.com -je output.json
```

Writes the findings to a JSON file.

### nuclei -u https://example.com -jlr

```bash
nuclei -u https://example.com -jlr
```

Writes JSON output line by line for easier streaming processing.

### nuclei -u https://example.com -se output.sarif

```bash
nuclei -u https://example.com -se output.sarif
```

Exports the findings in SARIF format for CI/CD integration.

### nuclei -u https://example.com -me output.md

```bash
nuclei -u https://example.com -me output.md
```

Exports the findings in Markdown format.


## Output Customization

### nuclei -u https://example.com -nm

```bash
nuclei -u https://example.com -nm
```

Disables printing metadata in the CLI output to reduce noise.

### nuclei -u https://example.com -silent

```bash
nuclei -u https://example.com -silent
```

Displays only the findings without any progress bars or banners.

### nuclei -u https://example.com -ts

```bash
nuclei -u https://example.com -ts
```

Adds a timestamp to each line of the output log.


## Performance Tuning

### nuclei -u https://example.com -rl 150

```bash
nuclei -u https://example.com -rl 150
```

Limits the scan to a maximum of 150 requests per second.

### nuclei -u https://example.com -rlm 60

```bash
nuclei -u https://example.com -rlm 60
```

Limits the scan to a maximum of 60 requests per minute.

### nuclei -u https://example.com -c 50

```bash
nuclei -u https://example.com -c 50
```

Sets the concurrency level to execute 50 templates in parallel.

### nuclei -u https://example.com -bs 25

```bash
nuclei -u https://example.com -bs 25
```

Sets the bulk size to 25 hosts to be analyzed in parallel per template.

### nuclei -u https://example.com -timeout 10

```bash
nuclei -u https://example.com -timeout 10
```

Sets the HTTP timeout to 10 seconds before giving up on a request.

### nuclei -u https://example.com -retries 3

```bash
nuclei -u https://example.com -retries 3
```

Retries failed requests up to 3 times before marking them as failed.

### nuclei -u https://example.com -mhe 5

```bash
nuclei -u https://example.com -mhe 5
```

Skips the host after 5 consecutive connection errors.


## Rate Limiting

### nuclei -u https://example.com -lp

```bash
nuclei -u https://example.com -lp
```

Pauses the scan if the target server starts responding with errors.


## Network Configuration

### nuclei -u https://example.com -p http://127.0.0.1:8080

```bash
nuclei -u https://example.com -p http://127.0.0.1:8080
```

Routes all traffic through an HTTP proxy (e.g., Burp Suite).

### nuclei -u https://example.com -proxy-socks-url socks5://127.0.0.1:9050

```bash
nuclei -u https://example.com -proxy-socks-url socks5://127.0.0.1:9050
```

Routes all traffic through a SOCKS5 proxy.

### nuclei -u https://example.com -ni

```bash
nuclei -u https://example.com -ni
```

Uses the network interface for scanning without performing DNS lookups.

### nuclei -u https://example.com -scan-all-ips

```bash
nuclei -u https://example.com -scan-all-ips
```

Scans all resolved IP addresses for the target domain.

### nuclei -u https://example.com -ip 192.168.1.1

```bash
nuclei -u https://example.com -ip 192.168.1.1
```

Forces the scan to use a specific IP address for the target domain.

### nuclei -u https://example.com -interface eth0

```bash
nuclei -u https://example.com -interface eth0
```

Binds the scan traffic to a specific network interface.

### nuclei -u https://example.com -source-ip 10.0.0.5

```bash
nuclei -u https://example.com -source-ip 10.0.0.5
```

Sets a specific source IP address for outgoing requests.


## Headers & Auth

### nuclei -u https://example.com -H "User-Agent: BugBountyScanner"

```bash
nuclei -u https://example.com -H "User-Agent: BugBountyScanner"
```

Adds a custom User-Agent header to all HTTP requests.

### nuclei -u https://example.com -H "Authorization: Bearer KEY"

```bash
nuclei -u https://example.com -H "Authorization: Bearer KEY"
```

Adds an authorization header to authenticate requests.

### nuclei -u https://example.com -header "X-Bug-Bounty: true"

```bash
nuclei -u https://example.com -header "X-Bug-Bounty: true"
```

Adds a custom header to identify scan traffic.

### nuclei -u https://example.com -V

```bash
nuclei -u https://example.com -V
```

Displays the version of the installed Nuclei engine.


## Debugging

### nuclei -u https://example.com -v

```bash
nuclei -u https://example.com -v
```

Enables verbose mode to show executed templates and errors.

### nuclei -u https://example.com -vv

```bash
nuclei -u https://example.com -vv
```

Enables extra verbose mode to show request and response details.

### nuclei -u https://example.com -debug

```bash
nuclei -u https://example.com -debug
```

Enables debug mode showing all request/response pairs.

### nuclei -u https://example.com -debug-req

```bash
nuclei -u https://example.com -debug-req
```

Shows only the HTTP requests sent during the scan.

### nuclei -u https://example.com -debug-resp

```bash
nuclei -u https://example.com -debug-resp
```

Shows only the HTTP responses received during the scan.


## Advanced Interactions

### nuclei -u https://example.com -im interactsh

```bash
nuclei -u https://example.com -im interactsh
```

Uses the default interactsh server for out-of-band testing.

### nuclei -u https://example.com -server http://myserver.com

```bash
nuclei -u https://example.com -server http://myserver.com
```

Uses a self-hosted interactsh server for callbacks.

### nuclei -u https://example.com -no-interactsh

```bash
nuclei -u https://example.com -no-interactsh
```

Disables any out-of-band interaction capability.


## Template Management

### nuclei -update

```bash
nuclei -update
```

Updates the Nuclei binary to the latest version.

### nuclei -ut

```bash
nuclei -ut
```

Updates the Nuclei templates to the latest version.

### nuclei -ud templates/custom

```bash
nuclei -ud templates/custom
```

Sets a custom directory for storing and reading templates.

### nuclei -validate

```bash
nuclei -validate
```

Validates the syntax of all available templates.

### nuclei -t custom-template.yaml -validate

```bash
nuclei -t custom-template.yaml -validate
```

Validates the syntax of a specific custom template file.


## Advanced Scanning

### nuclei -u https://example.com -headless

```bash
nuclei -u https://example.com -headless
```

Enables headless mode to scan using a browser automation engine.

### nuclei -u https://example.com -sb

```bash
nuclei -u https://example.com -sb
```

Shows the headless browser window during the scan.

### nuclei -u https://example.com -sc

```bash
nuclei -u https://example.com -sc
```

Captures and saves a screenshot on successful match in headless mode.

### nuclei -u https://example.com -js

```bash
nuclei -u https://example.com -js
```

Enables the Javascript protocol execution in templates.

### nuclei -u https://example.com -code

```bash
nuclei -u https://example.com -code
```

Enables the Code protocol execution in templates.

### nuclei -u https://example.com -fuzz

```bash
nuclei -u https://example.com -fuzz
```

Enables fuzzing mode to discover unknown vulnerabilities.


## Configuration

### nuclei -u https://example.com -config config.yaml

```bash
nuclei -u https://example.com -config config.yaml
```

Loads scanning configuration from a specific YAML file.

### nuclei -rc config.yaml

```bash
nuclei -rc config.yaml
```

Overwrites the default configuration file with the provided one.


## Environment

### nuclei -u https://example.com -env-vars VAR=value

```bash
nuclei -u https://example.com -env-vars VAR=value
```

Passes environment variables to the templates during execution.

### nuclei -u https://example.com -var username=admin

```bash
nuclei -u https://example.com -var username=admin
```

Passes specific variables to replace placeholders in templates.


## Resume

### nuclei -u https://example.com -resume scan-state.json

```bash
nuclei -u https://example.com -resume scan-state.json
```

Resumes a previously interrupted scan from a state file.


## Output Reporting

### nuclei -u https://example.com -irr

```bash
nuclei -u https://example.com -irr
```

Includes the full request and response in the JSON output.

### nuclei -u https://example.com -iser

```bash
nuclei -u https://example.com -iser
```

Includes server error responses in the output.


## Cloud Integration

### nuclei -u https://example.com -cloud

```bash
nuclei -u https://example.com -cloud
```

Uses the ProjectDiscovery Cloud Platform for scanning.

### nuclei -u https://example.com -dashboard

```bash
nuclei -u https://example.com -dashboard
```

Uploads the scan results to the ProjectDiscovery cloud dashboard.


## Offline Scanning

### nuclei -u https://example.com -disable-update-check

```bash
nuclei -u https://example.com -disable-update-check
```

Disables the automatic check for engine and template updates.


## Performance Stats

### nuclei -u https://example.com -stats

```bash
nuclei -u https://example.com -stats
```

Displays real-time statistics about the running scan.

### nuclei -u https://example.com -stats-interval 10

```bash
nuclei -u https://example.com -stats-interval 10
```

Sets the interval for displaying statistics to every 10 seconds.

### nuclei -u https://example.com -metrics 8080

```bash
nuclei -u https://example.com -metrics 8080
```

Exposes scan metrics on port 8080 for monitoring via Prometheus.


## Automated Workflows

### nuclei -u https://example.com -as

```bash
nuclei -u https://example.com -as
```

Enables automatic scan mode to deduce templates based on technology detection.

### nuclei -u https://example.com -new-templates

```bash
nuclei -u https://example.com -new-templates
```

Runs only the templates added in the latest update.


## Advanced Filtering

### nuclei -u https://example.com -etags intrusive -itags cve

```bash
nuclei -u https://example.com -etags intrusive -itags cve
```

Includes 'cve' tags but specifically excludes 'intrusive' tags.

### nuclei -u https://example.com -imac

```bash
nuclei -u https://example.com -imac
```

Excludes templates that only match at the protocol level without a result.


## Input Handling

### nuclei -u https://example.com -input-read-timeout 5s

```bash
nuclei -u https://example.com -input-read-timeout 5s
```

Sets the timeout for reading input from stdin to 5 seconds.


## Network Tuning

### nuclei -u https://example.com -stream

```bash
nuclei -u https://example.com -stream
```

Enables stream mode for handling large inputs with low memory usage.

### nuclei -u https://example.com -skip-host 10.0.0.1

```bash
nuclei -u https://example.com -skip-host 10.0.0.1
```

Excludes a specific host IP from the scan list.


## Template Tuning

### nuclei -u https://example.com -tlm

```bash
nuclei -u https://example.com -tlm
```

Lists all matched templates from the previous run.


## Scanning Mode

### nuclei -u https://example.com -dast

```bash
nuclei -u https://example.com -dast
```

Runs only DAST-related templates designed for dynamic testing.


## Local Scanning

### nuclei -target /var/www/html -t file-templates/

```bash
nuclei -target /var/www/html -t file-templates/
```

Scans a local directory using file-based templates.


## Reporting

### nuclei -u https://example.com -mr 10

```bash
nuclei -u https://example.com -mr 10
```

Limits the number of results to display to a maximum of 10.

### nuclei -u https://example.com -omit-raw

```bash
nuclei -u https://example.com -omit-raw
```

Omits the raw request and response data from the JSON output.


## Output

### nuclei -u https://example.com -no-color

```bash
nuclei -u https://example.com -no-color
```

Disables colored output in the terminal.


## Customization

### nuclei -u https://example.com -project

```bash
nuclei -u https://example.com -project
```

Uses a project folder to avoid sending same requests multiple times.

### nuclei -u https://example.com -project-path ./scan-data

```bash
nuclei -u https://example.com -project-path ./scan-data
```

Specifies the directory to store project-based scan data.


## Advanced

### nuclei -u https://example.com -stop-at-first-match

```bash
nuclei -u https://example.com -stop-at-first-match
```

Stops processing a template or host after the first valid match.

### nuclei -u https://example.com -max-redirects 5

```bash
nuclei -u https://example.com -max-redirects 5
```

Sets the maximum number of HTTP redirects to follow.

### nuclei -u https://example.com -disable-redirects

```bash
nuclei -u https://example.com -disable-redirects
```

Disables following HTTP redirects completely.

### nuclei -u https://example.com -sni example.com

```bash
nuclei -u https://example.com -sni example.com
```

Specifies the Server Name Indication (SNI) for TLS connections.


## CI/CD

### nuclei -l targets.txt -c 50 -silent -je results.json

```bash
nuclei -l targets.txt -c 50 -silent -je results.json
```

Optimized command for CI/CD pipelines producing silent JSON output.


## Full Automation

### nuclei -up && nuclei -u https://example.com -as -c 50 -rl 200 -je scan.json

```bash
nuclei -up && nuclei -u https://example.com -as -c 50 -rl 200 -je scan.json
```

Updates templates then runs an automated scan with high performance settings.

## Related tools

- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [Naabu](https://terminal.rokibulroni.com/tool/network/naabu)
- [Nikto](https://terminal.rokibulroni.com/tool/web/nikto)
