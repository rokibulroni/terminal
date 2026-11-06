# WhatWeb

> Identifies the technologies behind a website — CMS, frameworks, server software, analytics and versions — using over 1,800 plugins.

- Category: Web
- Commands: 70
- Page: https://terminal.rokibulroni.com/tool/web/whatweb
- Homepage: https://github.com/urbanadventurer/WhatWeb
- Documentation: https://github.com/urbanadventurer/WhatWeb/wiki
- Tags: fingerprinting, technology detection

## Install

- apt: `sudo apt install whatweb`
- brew: `brew install whatweb`

## Basic Technology Detection

### whatweb example.com

```bash
whatweb example.com
```

Performs a default scan to identify web technologies on a single target domain.

### whatweb http://192.168.1.10

```bash
whatweb http://192.168.1.10
```

Scans a local IP address using the HTTP protocol.

### whatweb https://www.example.com

```bash
whatweb https://www.example.com
```

Scans a secure website using the HTTPS protocol.

### whatweb example.com/page.html

```bash
whatweb example.com/page.html
```

Scans a specific webpage rather than the root domain.


## Multiple Target Scanning

### whatweb example.com google.com yahoo.com

```bash
whatweb example.com google.com yahoo.com
```

Scans multiple space-separated domains in a single execution.

### whatweb 192.168.1.0/24

```bash
whatweb 192.168.1.0/24
```

Scans an entire CIDR network range for web servers.

### whatweb 192.168.1.10-192.168.1.20

```bash
whatweb 192.168.1.10-192.168.1.20
```

Scans a specific range of IP addresses.


## Input from File and STDIN

### whatweb -i targets.txt

```bash
whatweb -i targets.txt
```

Reads a list of targets from a specified file.

### whatweb --input-file=targets.txt

```bash
whatweb --input-file=targets.txt
```

Uses the long-form flag to read targets from a file.


## Aggression Level Control

### whatweb -a 1 example.com

```bash
whatweb -a 1 example.com
```

Performs a stealthy scan that makes only one HTTP request per target.

### whatweb --aggression 1 example.com

```bash
whatweb --aggression 1 example.com
```

Explicitly sets the aggression level to stealth mode.

### whatweb -a 3 example.com

```bash
whatweb -a 3 example.com
```

Performs an aggressive scan with multiple requests and plugin triggers.

### whatweb -a 4 example.com

```bash
whatweb -a 4 example.com
```

Performs a heavy scan that attempts to identify every possible plugin.


## Plugin Listing and Selection

### whatweb -l

```bash
whatweb -l
```

Lists all available plugins currently installed in WhatWeb.

### whatweb --list-plugins

```bash
whatweb --list-plugins
```

Displays the full list of plugins using the long flag.

### whatweb -p wordpress example.com

```bash
whatweb -p wordpress example.com
```

Runs only the WordPress plugin against the target.

### whatweb -p "jquery,html5" example.com

```bash
whatweb -p "jquery,html5" example.com
```

Runs a specific set of comma-separated plugins.

### whatweb --info-plugins="wordpress"

```bash
whatweb --info-plugins="wordpress"
```

Displays detailed information about the specific WordPress plugin.

### whatweb --search-plugins="cms"

```bash
whatweb --search-plugins="cms"
```

Searches for plugins containing the keyword 'cms'.


## User Agent Customization

### whatweb -U "Mozilla/5.0" example.com

```bash
whatweb -U "Mozilla/5.0" example.com
```

Sets a custom User-Agent string for the scan requests.

### whatweb --user-agent "Googlebot/2.1" example.com

```bash
whatweb --user-agent "Googlebot/2.1" example.com
```

Impersonates the Googlebot crawler during the scan.


## HTTP Header and Cookie Analysis

### whatweb -H "X-Custom-Header: value" example.com

```bash
whatweb -H "X-Custom-Header: value" example.com
```

Adds a custom HTTP header to the request.

### whatweb --header "Authorization: Basic 12345" example.com

```bash
whatweb --header "Authorization: Basic 12345" example.com
```

Sends an Authorization header manually.

### whatweb -c "sessionid=12345" example.com

```bash
whatweb -c "sessionid=12345" example.com
```

Sends a custom cookie with the scan request.


## Authentication Handling

### whatweb -u user:password example.com

```bash
whatweb -u user:password example.com
```

Uses Basic HTTP Authentication with the provided credentials.

### whatweb --user user:password example.com

```bash
whatweb --user user:password example.com
```

Uses the long flag to provide Basic Authentication credentials.


## Proxy and Network Configuration

### whatweb --proxy 127.0.0.1:8080 example.com

```bash
whatweb --proxy 127.0.0.1:8080 example.com
```

Routes scan traffic through an HTTP proxy.

### whatweb --proxy-user user:pass example.com

```bash
whatweb --proxy-user user:pass example.com
```

Provides authentication credentials for the proxy server.


## Redirect and Response Handling

### whatweb --follow-redirect=always example.com

```bash
whatweb --follow-redirect=always example.com
```

Forces the scanner to always follow HTTP redirects.

### whatweb --follow-redirect=never example.com

```bash
whatweb --follow-redirect=never example.com
```

Prevents the scanner from following any HTTP redirects.


## Timeout and Performance

### whatweb --max-threads 25 example.com

```bash
whatweb --max-threads 25 example.com
```

Increases the number of concurrent threads to speed up scanning.

### whatweb -t 10 example.com

```bash
whatweb -t 10 example.com
```

Sets the maximum concurrent threads to 10.

### whatweb --open-timeout 5 example.com

```bash
whatweb --open-timeout 5 example.com
```

Sets the connection timeout limit to 5 seconds.

### whatweb --read-timeout 10 example.com

```bash
whatweb --read-timeout 10 example.com
```

Sets the timeout for reading the HTTP response to 10 seconds.

### whatweb --wait 2 example.com

```bash
whatweb --wait 2 example.com
```

Adds a delay of 2 seconds between requests to avoid detection.


## Logging and Output Control

### whatweb --log-brief=result.txt example.com

```bash
whatweb --log-brief=result.txt example.com
```

Logs a brief, one-line summary of results to a text file.

### whatweb --log-verbose=result.txt example.com

```bash
whatweb --log-verbose=result.txt example.com
```

Logs detailed results including headers and descriptions to a text file.

### whatweb --log-xml=result.xml example.com

```bash
whatweb --log-xml=result.xml example.com
```

Exports the scan results in XML format.

### whatweb --log-json=result.json example.com

```bash
whatweb --log-json=result.json example.com
```

Exports the scan results in JSON format.

### whatweb --log-sql=result.sql example.com

```bash
whatweb --log-sql=result.sql example.com
```

Exports results as SQL INSERT statements.

### whatweb --log-magictree=result.xml example.com

```bash
whatweb --log-magictree=result.xml example.com
```

Exports results in MagicTree XML format.

### whatweb --log-object=ruby_object example.com

```bash
whatweb --log-object=ruby_object example.com
```

Logs the raw Ruby object structure.

### whatweb --log-mongo-database=dbname example.com

```bash
whatweb --log-mongo-database=dbname example.com
```

Logs results directly to a MongoDB database.


## Verbose and Debug Modes

### whatweb -v example.com

```bash
whatweb -v example.com
```

Enables verbose mode to show plugins and detailed analysis.

### whatweb --verbose example.com

```bash
whatweb --verbose example.com
```

Uses the long flag to enable verbose output.

### whatweb --debug example.com

```bash
whatweb --debug example.com
```

Enables debug mode to see errors and internal processing.


## Quiet and Script Friendly

### whatweb -q example.com

```bash
whatweb -q example.com
```

Enables quiet mode to suppress standard output.

### whatweb --quiet example.com

```bash
whatweb --quiet example.com
```

Uses the long flag to suppress output.

### whatweb --no-errors example.com

```bash
whatweb --no-errors example.com
```

Suppresses error messages from the output.

### whatweb --color=never example.com

```bash
whatweb --color=never example.com
```

Disables color output for easier text parsing.

### whatweb --color=always example.com

```bash
whatweb --color=always example.com
```

Forces color output even when piping to files.


## Red Team Technology Enumeration

### whatweb -a 3 --no-errors -t 20 192.168.1.0/24

```bash
whatweb -a 3 --no-errors -t 20 192.168.1.0/24
```

Aggressively scans a subnet with high concurrency and error suppression.

### whatweb -a 3 -p "wordpress,joomla,drupal" example.com

```bash
whatweb -a 3 -p "wordpress,joomla,drupal" example.com
```

Aggressively checks specifically for common CMS platforms.

### whatweb --custom-plugin "myplugin.rb" example.com

```bash
whatweb --custom-plugin "myplugin.rb" example.com
```

Runs a custom-written Ruby plugin against the target.


## Blue Team Surface Monitoring

### whatweb --log-json=inventory.json 192.168.1.0/24

```bash
whatweb --log-json=inventory.json 192.168.1.0/24
```

Generates a JSON inventory of all web assets in the network.

### whatweb -a 1 --log-brief=daily_scan.txt -i targets.txt

```bash
whatweb -a 1 --log-brief=daily_scan.txt -i targets.txt
```

Performs a daily stealth scan of known targets for change monitoring.


## Advanced and Combined Real World Scans

### whatweb -a 3 -v --log-xml=report.xml example.com

```bash
whatweb -a 3 -v --log-xml=report.xml example.com
```

Combines aggression, verbosity, and XML logging for a full audit.

### whatweb --proxy 127.0.0.1:9050 --proxy-type socks5 example.com

```bash
whatweb --proxy 127.0.0.1:9050 --proxy-type socks5 example.com
```

Scans a target through a SOCKS5 proxy (e.g., Tor).

### whatweb -a 3 --user-agent "Mozilla/5.0" --header "Referer: google.com" example.com

```bash
whatweb -a 3 --user-agent "Mozilla/5.0" --header "Referer: google.com" example.com
```

Mimics a user clicking from Google with a standard browser agent.

### whatweb -p +Title example.com

```bash
whatweb -p +Title example.com
```

Explicitly enables the Title plugin in addition to defaults.

### whatweb -p -Title example.com

```bash
whatweb -p -Title example.com
```

Excludes the Title plugin from the current scan.

### whatweb --url-prefix https:// example.com

```bash
whatweb --url-prefix https:// example.com
```

Forces the scanner to prepend https:// to the target.

### whatweb --url-suffix /admin example.com

```bash
whatweb --url-suffix /admin example.com
```

Appends a specific path suffix to all target URLs.


## Automation and Pipeline Usage

### cat targets.txt | whatweb --input-file -

```bash
cat targets.txt | whatweb --input-file -
```

Pipes targets from standard input into WhatWeb.

### whatweb --log-json=/dev/stdout example.com | jq .

```bash
whatweb --log-json=/dev/stdout example.com | jq .
```

Pipes JSON output directly to jq for parsing.


## Advanced and Combined Real World Scans

### whatweb --max-redirects 5 example.com

```bash
whatweb --max-redirects 5 example.com
```

Limits the number of redirects followed to prevent loops.

### whatweb --dids

```bash
whatweb --dids
```

Lists the DIDs (Document IDs) of plugins.

### whatweb --grep "Apache" example.com

```bash
whatweb --grep "Apache" example.com
```

Shows only results matching the string 'Apache'.


## Help and Documentation

### whatweb --help

```bash
whatweb --help
```

Displays the short help menu and usage options.

### whatweb --man

```bash
whatweb --man
```

Displays the full manual page for the tool.

## Related tools

- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [WPScan](https://terminal.rokibulroni.com/tool/web/wpscan)
- [Nikto](https://terminal.rokibulroni.com/tool/web/nikto)
