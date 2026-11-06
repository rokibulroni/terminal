# gau

> “GetAllUrls” — fetches known URLs for a domain from the Wayback Machine, Common Crawl, OTX and URLScan for passive recon.

- Category: Web
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/web/gau
- Homepage: https://github.com/lc/gau
- Documentation: https://github.com/lc/gau#usage
- Tags: URL discovery, passive recon

## Install

- go: `go install github.com/lc/gau/v2/cmd/gau@latest`

## Basic URL Collection

### gau example.com

```bash
gau example.com
```

Fetches all known URLs for the single target domain from all default providers.

### gau www.example.com

```bash
gau www.example.com
```

Fetches URLs specifically for the www subdomain of the target.


## Input from STDIN

### echo example.com | gau

```bash
echo example.com | gau
```

Accepts a single domain from standard input via pipe for automation.

### cat domains.txt | gau

```bash
cat domains.txt | gau
```

Accepts a list of domains from a file via cat and pipe for bulk scanning.


## Subdomain Inclusion

### gau --subs example.com

```bash
gau --subs example.com
```

Includes subdomains of the target domain in the search results.


## Multiple Domain Enumeration

### gau example.com test.com

```bash
gau example.com test.com
```

Accepts multiple domains as command line arguments for simultaneous scanning.


## Provider Selection

### gau --providers wayback example.com

```bash
gau --providers wayback example.com
```

Fetches URLs exclusively from the Wayback Machine provider.

### gau --providers commoncrawl example.com

```bash
gau --providers commoncrawl example.com
```

Fetches URLs exclusively from the Common Crawl provider.

### gau --providers otx example.com

```bash
gau --providers otx example.com
```

Fetches URLs exclusively from AlienVault OTX.

### gau --providers urlscan example.com

```bash
gau --providers urlscan example.com
```

Fetches URLs exclusively from URLScan.io.


## Provider Control

### gau --providers wayback,otx example.com

```bash
gau --providers wayback,otx example.com
```

Fetches URLs only from specific selected providers, comma-separated.


## Extension Filtering

### gau --blacklist png,jpg,gif example.com

```bash
gau --blacklist png,jpg,gif example.com
```

Excludes URLs ending in specific file extensions to reduce noise.

### gau --blacklist ttf,woff,svg,css example.com

```bash
gau --blacklist ttf,woff,svg,css example.com
```

Filters out static asset files like fonts and stylesheets.


## Performance Tuning

### gau --threads 5 example.com

```bash
gau --threads 5 example.com
```

Sets the number of concurrent workers to 5 to control request rate.

### gau --threads 50 example.com

```bash
gau --threads 50 example.com
```

Increases concurrency to 50 threads for faster data retrieval.


## Verbose Mode

### gau --verbose example.com

```bash
gau --verbose example.com
```

Displays real-time progress and active fetching status during execution.


## JSON Output

### gau --json example.com

```bash
gau --json example.com
```

Outputs the results in JSON format containing metadata like method and status code.


## File Output

### gau --o results.txt example.com

```bash
gau --o results.txt example.com
```

Saves the discovered URLs directly to a text file.

### gau --o results.json --json example.com

```bash
gau --o results.json --json example.com
```

Saves the output in JSON format to a file for structured analysis.


## Date Filtering (Wayback)

### gau --from 202301 example.com

```bash
gau --from 202301 example.com
```

Fetches URLs archived from a specific date (YearMonth format) onwards.

### gau --to 202212 example.com

```bash
gau --to 202212 example.com
```

Fetches URLs archived up to a specific date.

### gau --from 202201 --to 202212 example.com

```bash
gau --from 202201 --to 202212 example.com
```

Fetches URLs archived within a specific year range.


## Network Configuration

### gau --retries 10 example.com

```bash
gau --retries 10 example.com
```

Increases the number of retries for failed HTTP requests to improve reliability.


## Proxy Configuration

### gau --proxy http://127.0.0.1:8080 example.com

```bash
gau --proxy http://127.0.0.1:8080 example.com
```

Routes all traffic through a specified HTTP proxy for privacy or analysis.


## Advanced Combination

### gau --subs --blacklist png,jpg,gif example.com

```bash
gau --subs --blacklist png,jpg,gif example.com
```

Fetches URLs including subdomains while excluding common image files.

### gau --subs --providers wayback,commoncrawl example.com

```bash
gau --subs --providers wayback,commoncrawl example.com
```

Queries specific providers for the domain and all its subdomains.


## Red Team URL Discovery

### gau --subs --blacklist png,jpg,css,js,gif --o potential_targets.txt example.com

```bash
gau --subs --blacklist png,jpg,css,js,gif --o potential_targets.txt example.com
```

Collects interesting endpoints by excluding static assets and saving to file.


## Blue Team Surface Mapping

### gau --subs --json --o inventory.json example.com

```bash
gau --subs --json --o inventory.json example.com
```

Creates a full structured inventory of all exposed URLs for a domain organization.


## Parameter Discovery

### gau --subs example.com | grep "="

```bash
gau --subs example.com | grep "="
```

Pipes output to grep to filter only URLs containing query parameters.


## Silent Mode Usage

### gau example.com > urls.txt

```bash
gau example.com > urls.txt
```

Redirects standard output to a file, effectively silencing the terminal output.


## Large Scale Recon

### cat targets.txt | gau --threads 20 --blacklist png,jpg,gif,css

```bash
cat targets.txt | gau --threads 20 --blacklist png,jpg,gif,css
```

Scans a list of targets with moderate concurrency and asset filtering.


## Specific Year Investigation

### gau --from 2023 --to 2023 example.com

```bash
gau --from 2023 --to 2023 example.com
```

Retrieves URLs that were archived specifically during the year 2023.


## URL Normalization

### gau --subs example.com | sort -u

```bash
gau --subs example.com | sort -u
```

Uses standard sort to deduplicate the URL list collected by gau.


## Mime Type Filtering (Advanced)

### gau --mc 200 example.com

```bash
gau --mc 200 example.com
```

Attempt to filter by match status code if supported by the provider index (feature availability varies).


## Web App Reconnaissance

### gau --subs --blacklist exe,zip,rar,tar example.com

```bash
gau --subs --blacklist exe,zip,rar,tar example.com
```

Excludes large binary files to focus on web application endpoints.


## API Discovery

### gau --subs example.com | grep "api"

```bash
gau --subs example.com | grep "api"
```

Filters the output for URLs containing the keyword 'api' to find API endpoints.


## JavaScript File Discovery

### gau --subs example.com | grep "\.js$"

```bash
gau --subs example.com | grep "\.js$"
```

Filters the output to find only JavaScript files for static analysis.


## Configuration File Hunting

### gau --subs example.com | grep -E "\.xml|\.json|\.config"

```bash
gau --subs example.com | grep -E "\.xml|\.json|\.config"
```

Filters for potential configuration files exposed in archives.


## Timeout Configuration

### gau --timeout 60 example.com

```bash
gau --timeout 60 example.com
```

Sets a custom timeout in seconds to prevent hanging on slow providers.


## Exclude Subdomains

### gau example.com

```bash
gau example.com
```

Running without the --subs flag implicitly excludes subdomains, fetching only root domain URLs.


## Short Syntax

### gau -s -b png,jpg example.com

```bash
gau -s -b png,jpg example.com
```

Uses short flags (-s for subs, -b for blacklist) for quicker typing.


## Deep Archive Search

### gau --providers wayback --from 2010 example.com

```bash
gau --providers wayback --from 2010 example.com
```

Performs a deep search into historical archives starting from 2010.


## Pipeline Integration

### gau --subs example.com | httpx -silent

```bash
gau --subs example.com | httpx -silent
```

Pipes discovered URLs directly into httpx to probe for live status.


## Complex Filtering

### gau --subs --blacklist png,jpg,svg,gif,css,woff --providers wayback,otx --threads 10 example.com

```bash
gau --subs --blacklist png,jpg,svg,gif,css,woff --providers wayback,otx --threads 10 example.com
```

A highly specific command combining subdomains, heavy filtering, specific providers, and threading.


## Full Automation

### cat domains.txt | gau --subs --blacklist png,jpg,gif --threads 20 --o all_urls.txt

```bash
cat domains.txt | gau --subs --blacklist png,jpg,gif --threads 20 --o all_urls.txt
```

The ultimate automation command for bulk processing domains with filters and file output.

## Related tools

- [waybackurls](https://terminal.rokibulroni.com/tool/web/waybackurls)
- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
