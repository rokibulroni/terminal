# Katana

> A fast web crawler from ProjectDiscovery with standard and headless modes and JavaScript parsing, built to feed URLs into the rest of a testing pipeline.

- Category: Web
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/web/katana
- Homepage: https://github.com/projectdiscovery/katana
- Documentation: https://docs.projectdiscovery.io/tools/katana/overview
- Tags: crawling, web, recon, ProjectDiscovery

## Install

- brew: `brew install katana`
- go: `go install github.com/projectdiscovery/katana/cmd/katana@latest`
- docker: `docker run -it projectdiscovery/katana -u https://example.com`

## Crawling

### katana -u <url>

```bash
katana -u <url>
```

Example:

```bash
katana -u https://example.com
```

Crawls a site and prints the URLs it finds.

### katana -u <url> -d <depth>

```bash
katana -u <url> -d <depth>
```

Example:

```bash
katana -u https://example.com -d 5
```

Sets how deep the crawl goes.

### katana -list <file>

```bash
katana -list <file>
```

Example:

```bash
katana -list urls.txt
```

Crawls several starting URLs.

### katana -u <url> -jc

```bash
katana -u <url> -jc
```

Example:

```bash
katana -u https://example.com -jc
```

Also parses JavaScript files for endpoints.

### katana -u <url> -kf <filter>

```bash
katana -u <url> -kf <filter>
```

Example:

```bash
katana -u https://example.com -kf robotstxt,sitemapxml
```

Seeds the crawl from known files like robots.txt and sitemap.xml.


## Headless

### katana -u <url> -headless

```bash
katana -u <url> -headless
```

Example:

```bash
katana -u https://example.com -headless
```

Uses a headless browser to capture URLs built by JavaScript.

### katana -u <url> -headless -no-sandbox

```bash
katana -u <url> -headless -no-sandbox
```

Example:

```bash
katana -u https://example.com -headless -no-sandbox
```

Headless mode without the Chromium sandbox, needed in some containers.


## Filtering & output

### katana -u <url> -f <field>

```bash
katana -u <url> -f <field>
```

Example:

```bash
katana -u https://example.com -f qurl
```

Shows only URLs that carry query parameters — good fuzzing candidates.

### katana -u <url> -em <ext>

```bash
katana -u <url> -em <ext>
```

Example:

```bash
katana -u https://example.com -em js,php,json
```

Matches only certain extensions; -ef excludes them.

### katana -u <url> -o <file>

```bash
katana -u <url> -o <file>
```

Example:

```bash
katana -u https://example.com -o urls.txt
```

Writes results to a file.

### katana -u <url> -silent | httpx -silent -mc 200

```bash
katana -u <url> -silent | httpx -silent -mc 200
```

Example:

```bash
katana -u https://example.com -silent | httpx -silent -mc 200
```

Crawls, then keeps only live URLs returning 200.

## Related tools

- [httpx](https://terminal.rokibulroni.com/tool/web/httpx)
- [gau](https://terminal.rokibulroni.com/tool/web/gau)
- [waybackurls](https://terminal.rokibulroni.com/tool/web/waybackurls)
- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
