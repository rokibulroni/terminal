# waybackurls

> Pulls every URL the Wayback Machine has archived for a domain — a quick way to find old endpoints and parameters.

- Category: Web
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/web/waybackurls
- Homepage: https://github.com/tomnomnom/waybackurls
- Tags: URL discovery, passive recon, archive

## Install

- go: `go install github.com/tomnomnom/waybackurls@latest`

## Basic URL Enumeration

### waybackurls example.com

```bash
waybackurls example.com
```

Fetches archived URLs for the target domain from public web archives.

### echo "example.com" | waybackurls

```bash
echo "example.com" | waybackurls
```

Fetches archived URLs by piping the domain from stdin.


## Multiple Domain Enumeration

### cat domains.txt | waybackurls

```bash
cat domains.txt | waybackurls
```

Fetches archived URLs for a list of domains provided in a file.


## Subdomain Handling

### waybackurls -no-subs example.com

```bash
waybackurls -no-subs example.com
```

Fetches archived URLs for the main domain only, excluding subdomains.


## Dates and Versions

### waybackurls -dates example.com

```bash
waybackurls -dates example.com
```

Retrieves the archived URLs along with the timestamp of the capture.


## Output Management

### waybackurls example.com > archive_urls.txt

```bash
waybackurls example.com > archive_urls.txt
```

Saves the discovered archived URLs to a text file for later analysis.


## Deduplication

### waybackurls example.com | sort -u

```bash
waybackurls example.com | sort -u
```

Fetches URLs and removes duplicate entries using sort.


## Parameter Discovery

### waybackurls example.com | grep "?"

```bash
waybackurls example.com | grep "?"
```

Filters the output to show only URLs that contain query parameters.

### waybackurls example.com | grep "="

```bash
waybackurls example.com | grep "="
```

Filters for URLs that likely contain values assigned to parameters.


## File Extension Discovery

### waybackurls example.com | grep "\.js"

```bash
waybackurls example.com | grep "\.js"
```

Extracts only JavaScript files from the archived URL list.

### waybackurls example.com | grep "\.json"

```bash
waybackurls example.com | grep "\.json"
```

Extracts JSON files which may contain configuration or API data.

### waybackurls example.com | grep "\.php"

```bash
waybackurls example.com | grep "\.php"
```

Identifies archived PHP endpoints for potential vulnerability testing.

### waybackurls example.com | grep -E "\.xml|\.conf|\.config|\.yml|\.yaml"

```bash
waybackurls example.com | grep -E "\.xml|\.conf|\.config|\.yml|\.yaml"
```

Filters for configuration files that might disclose sensitive information.


## Filtering Pipelines

### waybackurls example.com | grep -ivE "\.(jpg|jpeg|gif|css|png|svg|woff|woff2|ico|pdf)"

```bash
waybackurls example.com | grep -ivE "\.(jpg|jpeg|gif|css|png|svg|woff|woff2|ico|pdf)"
```

Removes static assets like images and fonts to focus on application logic.


## Sensitive Data Discovery

### waybackurls example.com | grep -i "admin"

```bash
waybackurls example.com | grep -i "admin"
```

Searches the archived URLs for paths containing the word admin.

### waybackurls example.com | grep -i "api"

```bash
waybackurls example.com | grep -i "api"
```

Identifies potential API endpoints within the archived history.

### waybackurls example.com | grep -i "login"

```bash
waybackurls example.com | grep -i "login"
```

Finds historical login pages which may still be accessible.

### waybackurls example.com | grep -i "dashboard"

```bash
waybackurls example.com | grep -i "dashboard"
```

Looks for dashboard interfaces that might expose internal functionality.

### waybackurls example.com | grep "\.git"

```bash
waybackurls example.com | grep "\.git"
```

Checks for accidentally exposed git repositories in the archive history.

### waybackurls example.com | grep "\.env"

```bash
waybackurls example.com | grep "\.env"
```

Searches for environment files which often contain keys and secrets.


## Advanced Filtering

### waybackurls -dates example.com | sort -n | cut -d " " -f 2

```bash
waybackurls -dates example.com | sort -n | cut -d " " -f 2
```

Sorts archived URLs chronologically by date and extracts just the URL.

### waybackurls example.com | sed 's/:80//g;s/:443//g' | sort -u

```bash
waybackurls example.com | sed 's/:80//g;s/:443//g' | sort -u
```

Normalizes URLs by removing standard ports and deduplicating.


## Tool Integration

### waybackurls example.com | uro

```bash
waybackurls example.com | uro
```

Pipes URLs to 'uro' for advanced cleaning and deduplication of parameters.

### waybackurls example.com | unfurl domains

```bash
waybackurls example.com | unfurl domains
```

Extracts unique domains and subdomains found in the archived URL list.

### waybackurls example.com | unfurl paths

```bash
waybackurls example.com | unfurl paths
```

Extracts unique URL paths to understand the application structure.

### waybackurls example.com | httpx -title -status-code

```bash
waybackurls example.com | httpx -title -status-code
```

Checks which archived URLs are still alive and grabs their title and status.

### waybackurls example.com | httpx -mc 200

```bash
waybackurls example.com | httpx -mc 200
```

Filters the list to return only URLs that currently respond with a 200 OK.


## Vulnerability Hunting

### waybackurls example.com | gf xss

```bash
waybackurls example.com | gf xss
```

Uses 'gf' to filter URLs that match common XSS parameter patterns.

### waybackurls example.com | gf sqli

```bash
waybackurls example.com | gf sqli
```

Uses 'gf' to filter URLs that match common SQL injection patterns.

### waybackurls example.com | gf ssrf

```bash
waybackurls example.com | gf ssrf
```

Uses 'gf' to filter URLs that match common SSRF parameter patterns.

### waybackurls example.com | gf lfi

```bash
waybackurls example.com | gf lfi
```

Uses 'gf' to filter URLs that match common Local File Inclusion patterns.

### waybackurls example.com | gf redirect

```bash
waybackurls example.com | gf redirect
```

Uses 'gf' to filter URLs that match open redirect patterns.


## Advanced Pipeline

### waybackurls example.com | qsreplace -a | grep "="

```bash
waybackurls example.com | qsreplace -a | grep "="
```

Removes duplicate parameter combinations to create a unique fuzzing list.

### waybackurls example.com | qsreplace "FUZZ" | nuclei -t vulnerabilities/generic/ -dast

```bash
waybackurls example.com | qsreplace "FUZZ" | nuclei -t vulnerabilities/generic/ -dast
```

Replaces parameters with a placeholder and pipes to Nuclei for scanning.


## Red Team Recon

### waybackurls example.com | grep -E "\.xls|\.xlsx|\.doc|\.docx|\.pdf"

```bash
waybackurls example.com | grep -E "\.xls|\.xlsx|\.doc|\.docx|\.pdf"
```

Hunts for document files that might contain metadata or sensitive business info.

### waybackurls example.com | grep "aws" | grep "s3"

```bash
waybackurls example.com | grep "aws" | grep "s3"
```

Specifically targets URLs that reference AWS S3 buckets.


## Blue Team Mapping

### cat subdomains.txt | waybackurls | sort -u > full_history.txt

```bash
cat subdomains.txt | waybackurls | sort -u > full_history.txt
```

Aggregates historical URLs for an entire list of organization subdomains.


## Advanced Pipeline

### waybackurls example.com | grep -E "\.js$" | httpx -mc 200 -content-type "javascript"

```bash
waybackurls example.com | grep -E "\.js$" | httpx -mc 200 -content-type "javascript"
```

Finds live JavaScript files from history and verifies their content type.

### waybackurls example.com | anew previous_scan.txt

```bash
waybackurls example.com | anew previous_scan.txt
```

Appends only new URLs found in history to an existing dataset using 'anew'.


## Specific Tech Discovery

### waybackurls example.com | grep "wp-content"

```bash
waybackurls example.com | grep "wp-content"
```

Filters for WordPress-specific paths to identify WordPress installations.

### waybackurls example.com | grep "/api/v"

```bash
waybackurls example.com | grep "/api/v"
```

Looks for versioned API endpoints (e.g., /api/v1) in the archive.

### waybackurls example.com | grep ".jsp"

```bash
waybackurls example.com | grep ".jsp"
```

Identifies Java Server Pages which may indicate legacy Java applications.

### waybackurls example.com | grep ".aspx"

```bash
waybackurls example.com | grep ".aspx"
```

Identifies ASP.NET pages which may indicate a Microsoft stack.


## Interactive Pipeline

### waybackurls example.com | grep "debug"

```bash
waybackurls example.com | grep "debug"
```

Searches for URLs containing 'debug' which are high-value targets.


## Automation

### echo example.com | waybackurls | grep -vE "png|jpg|css|ico" | qsreplace -a

```bash
echo example.com | waybackurls | grep -vE "png|jpg|css|ico" | qsreplace -a
```

A complete one-liner to fetch, clean, and deduplicate parameters for testing.

## Related tools

- [gau](https://terminal.rokibulroni.com/tool/web/gau)
- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
