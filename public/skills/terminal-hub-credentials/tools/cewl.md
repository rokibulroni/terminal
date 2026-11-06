# CeWL

> Spiders a website and builds a custom wordlist from the words it finds — great for targeted password guesses.

- Category: Credentials
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/credentials/cewl
- Homepage: https://github.com/digininja/CeWL
- Documentation: https://github.com/digininja/CeWL#usage
- Tags: wordlists, spidering, OSINT

## Install

- apt: `sudo apt install cewl`
- docker: `docker run -it --rm ghcr.io/digininja/cewl <url>`

## Basic Wordlist Generation

### cewl http://example.com

```bash
cewl http://example.com
```

Standard crawl of a URL to generate a wordlist printed to stdout.

### cewl http://example.com -w wordlist.txt

```bash
cewl http://example.com -w wordlist.txt
```

Crawls the target and saves the generated wordlist to a specific file.

### cewl http://example.com -v

```bash
cewl http://example.com -v
```

Runs the crawl in verbose mode to see processing details in real-time.


## Depth Control

### cewl -d 0 http://example.com

```bash
cewl -d 0 http://example.com
```

Spiders only the specified page without following any links.

### cewl -d 2 http://example.com

```bash
cewl -d 2 http://example.com
```

Crawls the target URL to a depth of 2 links deep.

### cewl -d 5 http://example.com

```bash
cewl -d 5 http://example.com
```

Deep crawl up to 5 levels suitable for large corporate sites.


## Word Length Filtering

### cewl -m 5 http://example.com

```bash
cewl -m 5 http://example.com
```

Extracts only words that are at least 5 characters long.

### cewl -m 8 http://example.com

```bash
cewl -m 8 http://example.com
```

Extracts words with a minimum length of 8 chars for stronger password policies.

### cewl -m 12 http://example.com

```bash
cewl -m 12 http://example.com
```

Targets passphrases by filtering for words 12 characters or longer.


## Case Handling

### cewl --lowercase http://example.com

```bash
cewl --lowercase http://example.com
```

Normalizes all discovered words to lowercase format.

### cewl --lowercase -w lower.txt http://example.com

```bash
cewl --lowercase -w lower.txt http://example.com
```

Saves a lowercase-only wordlist to a file for case-insensitive attacks.


## Character Handling

### cewl --with-numbers http://example.com

```bash
cewl --with-numbers http://example.com
```

Includes words containing numbers which are usually ignored by default.

### cewl --convert-umlauts http://example.com

```bash
cewl --convert-umlauts http://example.com
```

Converts German umlauts to standard ASCII characters.


## Word Counting

### cewl -c http://example.com

```bash
cewl -c http://example.com
```

Displays the frequency count of each word found on the site.

### cewl -c -w counts.txt http://example.com

```bash
cewl -c -w counts.txt http://example.com
```

Writes the word frequency counts to a file for analysis.


## Offsite Crawling

### cewl -o http://example.com

```bash
cewl -o http://example.com
```

Allows the spider to visit external sites linked from the target.

### cewl -o -d 2 http://example.com

```bash
cewl -o -d 2 http://example.com
```

Crawls external links up to a depth of 2 for broader reconnaissance.


## Authentication

### cewl --auth_type Basic --auth_user admin --auth_pass secret http://example.com/protected

```bash
cewl --auth_type Basic --auth_user admin --auth_pass secret http://example.com/protected
```

Crawls a page protected by HTTP Basic Authentication.

### cewl --auth_type Digest --auth_user admin --auth_pass secret http://example.com/protected

```bash
cewl --auth_type Digest --auth_user admin --auth_pass secret http://example.com/protected
```

Crawls a page protected by HTTP Digest Authentication.


## Proxy Configuration

### cewl --proxy_host 127.0.0.1 --proxy_port 8080 http://example.com

```bash
cewl --proxy_host 127.0.0.1 --proxy_port 8080 http://example.com
```

Routes traffic through a local proxy like Burp Suite or ZAP.


## User Agent Customization

### cewl --ua "Googlebot/2.1" http://example.com

```bash
cewl --ua "Googlebot/2.1" http://example.com
```

Spoofs the User-Agent string to mimic a Google crawler.

### cewl --ua "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)" http://example.com

```bash
cewl --ua "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)" http://example.com
```

Spoofs a mobile device user agent to capture mobile-specific content.


## Email Harvesting

### cewl -e http://example.com

```bash
cewl -e http://example.com
```

Extracts email addresses found within the page content.

### cewl -e --email_file emails.txt http://example.com

```bash
cewl -e --email_file emails.txt http://example.com
```

Extracts emails and saves them to a separate dedicated file.

### cewl -e -n http://example.com

```bash
cewl -e -n http://example.com
```

Collects emails but suppresses the generation of the wordlist.


## Meta Data Extraction

### cewl -a http://example.com

```bash
cewl -a http://example.com
```

Extracts metadata from discovered files during the crawl.

### cewl -a --meta_file metadata.txt http://example.com

```bash
cewl -a --meta_file metadata.txt http://example.com
```

Writes extracted metadata information to a specific file.


## Debug Mode

### cewl --debug http://example.com

```bash
cewl --debug http://example.com
```

Runs in debug mode providing extensive internal execution details.


## Advanced Filtering

### cewl --no-words http://example.com

```bash
cewl --no-words http://example.com
```

Performs the crawl without outputting any words useful for dry runs.


## N-Grams Generation

### cewl -g 2 http://example.com

```bash
cewl -g 2 http://example.com
```

Generates 2-word phrases (bigrams) instead of single words.

### cewl -g 3 http://example.com

```bash
cewl -g 3 http://example.com
```

Generates 3-word phrases (trigrams) for phrase-based dictionary attacks.


## Red Team Recon Workflow

### cewl -d 3 -m 5 --lowercase -w target_recon.txt http://example.com

```bash
cewl -d 3 -m 5 --lowercase -w target_recon.txt http://example.com
```

Standard red team setup for a deep, case-insensitive wordlist.

### cewl -d 2 -o -w external_scope.txt http://example.com

```bash
cewl -d 2 -o -w external_scope.txt http://example.com
```

Gathers words from the target and immediate external links for wider context.

### cewl -d 2 -e --email_file targets.txt -n http://example.com

```bash
cewl -d 2 -e --email_file targets.txt -n http://example.com
```

Targeted phishing list generation focusing solely on emails.


## Blue Team Validation

### cewl -m 10 -w compliance_check.txt http://example.com

```bash
cewl -m 10 -w compliance_check.txt http://example.com
```

Generates a list of long words to test against maximum password length policies.

### cewl -d 5 --with-numbers -w policy_audit.txt http://example.com

```bash
cewl -d 5 --with-numbers -w policy_audit.txt http://example.com
```

Audits site content for alphanumeric patterns that might appear in passwords.

### cewl -a --meta_file potential_leaks.txt http://example.com

```bash
cewl -a --meta_file potential_leaks.txt http://example.com
```

Scans for metadata that might reveal internal software versions or user names.


## Complex Workflow

### cewl -d 2 -m 5 --with-numbers --lowercase -w complex.txt http://example.com

```bash
cewl -d 2 -m 5 --with-numbers --lowercase -w complex.txt http://example.com
```

Combines numbers, lowercase normalization, and depth for a robust hybrid list.

### cewl -u "Baiduspider" -d 3 -v http://example.com

```bash
cewl -u "Baiduspider" -d 3 -v http://example.com
```

Deep crawl masquerading as Baidu spider with verbose logging.

### cewl --auth_type Basic --auth_user test --auth_pass test -w internal.txt http://192.168.1.10

```bash
cewl --auth_type Basic --auth_user test --auth_pass test -w internal.txt http://192.168.1.10
```

Internal network scan of a basic auth protected device.


## Output Hygiene

### cewl http://example.com > raw_output.txt

```bash
cewl http://example.com > raw_output.txt
```

Redirects stdout to a file using shell redirection instead of the -w flag.

### cewl -d 1 -m 6 http://example.com | sort -u

```bash
cewl -d 1 -m 6 http://example.com | sort -u
```

Pipes output to sort for immediate deduplication.


## Targeting Specific Assets

### cewl -d 3 --keep http://example.com

```bash
cewl -d 3 --keep http://example.com
```

Retains the downloaded files locally for further manual analysis.


## Advanced Proxy Usage

### cewl --proxy_host 10.10.10.5 --proxy_port 3128 -v http://example.com

```bash
cewl --proxy_host 10.10.10.5 --proxy_port 3128 -v http://example.com
```

Uses an upstream corporate proxy with verbose output to debug connection issues.


## Custom Header Simulation

### cewl --ua "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)" http://example.com

```bash
cewl --ua "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)" http://example.com
```

Simulates a legacy browser to potentially trigger different server responses.


## Aggressive Crawl

### cewl -d 7 -m 4 http://example.com

```bash
cewl -d 7 -m 4 http://example.com
```

Very deep crawl accepting short words, high noise potential.


## Precise Crawl

### cewl -d 1 -m 8 --lowercase --no-words --email_file targets.txt http://example.com

```bash
cewl -d 1 -m 8 --lowercase --no-words --email_file targets.txt http://example.com
```

Shallow scan strictly for emails with no wordlist generation.


## Meta Analysis Direct

### cewl -a -d 3 http://example.com

```bash
cewl -a -d 3 http://example.com
```

Deep meta data extraction printed directly to console.


## Phrase Attack Prep

### cewl -g 4 -w passphrases.txt http://example.com

```bash
cewl -g 4 -w passphrases.txt http://example.com
```

Creates a list of 4-word sentences for passphrase attacks.


## Incident Response

### cewl -d 2 -m 4 --with-numbers -w incident_context.txt http://defaced-site.com

```bash
cewl -d 2 -m 4 --with-numbers -w incident_context.txt http://defaced-site.com
```

Quickly profiles a compromised site to identify injected keywords.


## High Precision Wordlist

### cewl -d 2 -m 6 -c -w frequencies.txt http://example.com

```bash
cewl -d 2 -m 6 -c -w frequencies.txt http://example.com
```

Generates a frequency map of 6+ letter words to identify key topics.


## Bypassing WAF Detection

### cewl --ua "Bingbot/2.0" -d 2 http://example.com

```bash
cewl --ua "Bingbot/2.0" -d 2 http://example.com
```

Attempts to bypass WAF bot detection by mimicking Bing.


## Mixed Auth & Proxy

### cewl --proxy_host 127.0.0.1 --proxy_port 8080 --auth_type Basic --auth_user admin --auth_pass admin http://example.com

```bash
cewl --proxy_host 127.0.0.1 --proxy_port 8080 --auth_type Basic --auth_user admin --auth_pass admin http://example.com
```

Routes authenticated traffic through a proxy for inspection.


## German Language Targeting

### cewl --convert-umlauts -d 2 -w german_words.txt http://example.de

```bash
cewl --convert-umlauts -d 2 -w german_words.txt http://example.de
```

Specialized crawl for German sites ensuring character correctness.


## Full Site Map Crawl

### cewl -d 10 -m 5 -w full_site.txt http://example.com

```bash
cewl -d 10 -m 5 -w full_site.txt http://example.com
```

Extremely deep crawl attempting to map the entire site vocabulary.


## Developer Comment Hunting

### cewl -d 2 -a --meta_file comments.txt http://dev.example.com

```bash
cewl -d 2 -a --meta_file comments.txt http://dev.example.com
```

Targets development subdomains extracting metadata and potential leaks.


## Single Page Profiling

### cewl -d 0 -c -v http://example.com/login

```bash
cewl -d 0 -c -v http://example.com/login
```

Analyzes a single login page in verbose mode for keyword frequency.


## Pipeline Integration

### cewl http://example.com | grep 'admin'

```bash
cewl http://example.com | grep 'admin'
```

Pipes output to grep to filter for specific high-value keywords immediately.


## Strict Min Length

### cewl -m 15 -w strong_passwords.txt http://example.com

```bash
cewl -m 15 -w strong_passwords.txt http://example.com
```

Generates a list containing only very long words for high-security targets.


## Ultimate Recon Combo

### cewl -d 3 -m 5 --lowercase --with-numbers -a --meta_file meta.txt -e --email_file emails.txt -w words.txt http://example

```bash
cewl -d 3 -m 5 --lowercase --with-numbers -a --meta_file meta.txt -e --email_file emails.txt -w words.txt http://example.com
```

All-in-one command gathering words, emails, and metadata simultaneously.

## Related tools

- [Crunch](https://terminal.rokibulroni.com/tool/credentials/crunch)
- [RSMangler](https://terminal.rokibulroni.com/tool/credentials/rsmangler)
- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
