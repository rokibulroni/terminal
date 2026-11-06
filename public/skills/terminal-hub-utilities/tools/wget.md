# Wget

> A non-interactive downloader for HTTP, HTTPS and FTP that can resume, retry and mirror entire websites recursively.

- Category: Utilities
- Commands: 125
- Page: https://terminal.rokibulroni.com/tool/utilities/wget
- Homepage: https://www.gnu.org/software/wget/
- Documentation: https://www.gnu.org/software/wget/manual/wget.html
- Tags: downloads, mirroring, HTTP

## Install

- apt: `sudo apt install wget`
- brew: `brew install wget`

## Basic Usage

### wget https://example.com/file.txt

```bash
wget https://example.com/file.txt
```

Downloads a single file from a URL and saves it to the current directory.

### wget -O output.txt https://example.com/file.php?id=1

```bash
wget -O output.txt https://example.com/file.php?id=1
```

Example:

```bash
wget -O custom_name.txt https://example.com/dynamic_file
```

Downloads a file and saves it with a specific custom filename.

### wget -P /tmp/downloads https://example.com/image.jpg

```bash
wget -P /tmp/downloads https://example.com/image.jpg
```

Example:

```bash
wget -P /var/www/html https://example.com/asset.png
```

Downloads a file and saves it to a specific directory path.

### wget -i urls.txt

```bash
wget -i urls.txt
```

Example:

```bash
wget -i list_of_targets.txt
```

Downloads multiple files sequentially from a list of URLs contained in a text file.

### wget --no-clobber https://example.com/file.zip

```bash
wget --no-clobber https://example.com/file.zip
```

Example:

```bash
wget -nc https://example.com/dataset.zip
```

Skips the download if the file already exists locally.

### wget -c https://example.com/large.iso

```bash
wget -c https://example.com/large.iso
```

Example:

```bash
wget --continue https://example.com/backup.tar.gz
```

Resumes a partially downloaded file from where it left off.

### wget -B https://example.com/ -i relative_urls.txt

```bash
wget -B https://example.com/ -i relative_urls.txt
```

Example:

```bash
wget --base=https://site.com/ -i paths.txt
```

Resolves relative URLs in an input file against a specified base URL.


## Download Resilience

### wget --tries=10 https://example.com/unstable.file

```bash
wget --tries=10 https://example.com/unstable.file
```

Example:

```bash
wget -t 5 https://example.com/api/data
```

Sets the maximum number of retries for a failed download attempt.

### wget --tries=inf https://example.com/critical.service

```bash
wget --tries=inf https://example.com/critical.service
```

Example:

```bash
wget -t 0 https://example.com/stream
```

Retries the download infinitely until successful.

### wget --timeout=60 https://example.com/slow.resource

```bash
wget --timeout=60 https://example.com/slow.resource
```

Example:

```bash
wget -T 30 https://example.com/large_query
```

Sets the network read timeout in seconds to prevent hanging connections.

### wget --connect-timeout=10 https://example.com

```bash
wget --connect-timeout=10 https://example.com
```

Example:

```bash
wget --connect-timeout=5 https://192.168.1.50
```

Sets the timeout specifically for the initial connection establishment.

### wget --waitretry=5 https://example.com/file

```bash
wget --waitretry=5 https://example.com/file
```

Example:

```bash
wget --waitretry=10 https://example.com/api
```

Waits for a specified number of seconds between retry attempts.


## Logging and Output

### wget -o download.log https://example.com/file.txt

```bash
wget -o download.log https://example.com/file.txt
```

Example:

```bash
wget -o session.log https://example.com/data
```

Redirects all operational messages and errors to a log file instead of stdout.

### wget -a download.log https://example.com/file2.txt

```bash
wget -a download.log https://example.com/file2.txt
```

Example:

```bash
wget -a history.log https://example.com/update
```

Appends operational messages to an existing log file.

### wget -q https://example.com/silent_script.sh

```bash
wget -q https://example.com/silent_script.sh
```

Example:

```bash
wget --quiet https://example.com/installer
```

Runs in quiet mode with absolutely no output to the terminal.

### wget -nv https://example.com/report.pdf

```bash
wget -nv https://example.com/report.pdf
```

Example:

```bash
wget --no-verbose https://example.com/daily_brief
```

Runs in non-verbose mode, printing only basic status lines and errors.

### wget -b https://example.com/huge_dataset.csv

```bash
wget -b https://example.com/huge_dataset.csv
```

Example:

```bash
wget --background https://example.com/backup.sql
```

Goes to background immediately after startup and writes output to wget-log.

### wget --progress=bar:force https://example.com/file

```bash
wget --progress=bar:force https://example.com/file
```

Example:

```bash
wget --progress=dot https://example.com/file
```

Forces a specific type of progress bar display even if stderr is not a terminal.


## Bandwidth and Networking

### wget --limit-rate=200k https://example.com/movie.mp4

```bash
wget --limit-rate=200k https://example.com/movie.mp4
```

Example:

```bash
wget --limit-rate=500k https://example.com/iso
```

Limits the download speed to 200 kilobytes per second to save bandwidth.

### wget -w 10 https://example.com/file

```bash
wget -w 10 https://example.com/file
```

Example:

```bash
wget --wait=20 https://example.com/scrape
```

Waits the specified number of seconds between multiple file retrievals.

### wget --random-wait -w 10 -i list.txt

```bash
wget --random-wait -w 10 -i list.txt
```

Example:

```bash
wget --random-wait --wait=5 -i urls.txt
```

Waits a random interval between 0.5 and 1.5 times the specified wait value to simulate human behavior.

### wget --bind-address=192.168.1.5 https://example.com

```bash
wget --bind-address=192.168.1.5 https://example.com
```

Example:

```bash
wget --bind-address=10.0.0.2 https://internal.lab
```

Binds the client socket to a specific local IP address on a multi-interface system.

### wget -4 https://example.com

```bash
wget -4 https://example.com
```

Example:

```bash
wget --inet4-only https://example.com
```

Forces the connection to use IPv4 addresses only.

### wget -6 https://example.com

```bash
wget -6 https://example.com
```

Example:

```bash
wget --inet6-only https://example.com
```

Forces the connection to use IPv6 addresses only.

### wget --no-dns-cache https://example.com

```bash
wget --no-dns-cache https://example.com
```

Example:

```bash
wget --no-dns-cache https://dynamic-dns.com
```

Disables DNS caching to force a new lookup for every request.


## HTTP Headers and User Agent

### wget --user-agent="Mozilla/5.0" https://example.com

```bash
wget --user-agent="Mozilla/5.0" https://example.com
```

Example:

```bash
wget -U "Googlebot/2.1" https://example.com
```

Spoofs the User-Agent header to identify as a specific browser or bot.

### wget --header="Accept: application/json" https://example.com/api

```bash
wget --header="Accept: application/json" https://example.com/api
```

Example:

```bash
wget --header="X-Admin: true" https://example.com/admin
```

Adds a custom HTTP header to the request.

### wget --referer="https://google.com" https://example.com/hidden

```bash
wget --referer="https://google.com" https://example.com/hidden
```

Example:

```bash
wget --referer="http://trusted.com" https://target.com
```

Sets the HTTP Referer header to simulate clicking a link from another site.


## Authentication

### wget --user=admin --password=secret https://example.com/protected

```bash
wget --user=admin --password=secret https://example.com/protected
```

Example:

```bash
wget --user=deploy --password=pass https://staging.com
```

Uses basic HTTP authentication with provided username and password.

### wget --ask-password --user=admin https://example.com/protected

```bash
wget --ask-password --user=admin https://example.com/protected
```

Example:

```bash
wget --ask-password --user=root https://secure.lab
```

Prompts the user to enter the password interactively to avoid recording it in history.

### wget --auth-no-challenge --user=admin --password=pass https://example.com

```bash
wget --auth-no-challenge --user=admin --password=pass https://example.com
```

Example:

```bash
wget --auth-no-challenge --user=user --password=pass https://api.com
```

Sends authentication credentials immediately without waiting for a server challenge.

### wget --header="Authorization: Bearer <token>" https://api.example.com/v1/data

```bash
wget --header="Authorization: Bearer <token>" https://api.example.com/v1/data
```

Example:

```bash
wget --header="Authorization: Bearer xyz123" https://api.lab/user
```

Authenticates using a Bearer token in the Authorization header.


## Session Management

### wget --save-cookies cookies.txt --keep-session-cookies https://example.com/login

```bash
wget --save-cookies cookies.txt --keep-session-cookies https://example.com/login
```

Example:

```bash
wget --save-cookies session.txt https://example.com/auth
```

Saves the cookies received from the server, including session cookies, to a file.

### wget --load-cookies cookies.txt https://example.com/dashboard

```bash
wget --load-cookies cookies.txt https://example.com/dashboard
```

Example:

```bash
wget --load-cookies session.txt https://example.com/profile
```

Loads cookies from a file to maintain a session across multiple requests.


## Proxy Configuration

### wget -e use_proxy=yes -e http_proxy=127.0.0.1:8080 https://example.com

```bash
wget -e use_proxy=yes -e http_proxy=127.0.0.1:8080 https://example.com
```

Example:

```bash
wget -e http_proxy=10.10.10.5:3128 https://external.com
```

Configures a specific HTTP proxy for the connection using command line execution.

### wget --proxy-user=user --proxy-password=pass https://example.com

```bash
wget --proxy-user=user --proxy-password=pass https://example.com
```

Example:

```bash
wget --proxy-user=corp --proxy-password=secret https://internet.com
```

Provides credentials for authenticating with the proxy server itself.

### wget --no-proxy https://internal.example.com

```bash
wget --no-proxy https://internal.example.com
```

Example:

```bash
wget --no-proxy https://localhost
```

Explicitly bypasses proxy settings for specific requests.


## SSL and Security

### wget --no-check-certificate https://self-signed.local

```bash
wget --no-check-certificate https://self-signed.local
```

Example:

```bash
wget --no-check-certificate https://192.168.1.1
```

Skips SSL certificate validation, useful for self-signed certificates in labs.

### wget --secure-protocol=TLSv1_2 https://example.com

```bash
wget --secure-protocol=TLSv1_2 https://example.com
```

Example:

```bash
wget --secure-protocol=TLSv1_3 https://secure.com
```

Forces the connection to use a specific version of the TLS protocol.

### wget --certificate=client.pem --private-key=key.pem https://mtls.example.com

```bash
wget --certificate=client.pem --private-key=key.pem https://mtls.example.com
```

Example:

```bash
wget --certificate=cert.crt --private-key=key.key https://secure-api.com
```

Uses a client-side certificate and private key for mutual TLS (mTLS) authentication.

### wget --ca-certificate=rootCA.pem https://internal.lab

```bash
wget --ca-certificate=rootCA.pem https://internal.lab
```

Example:

```bash
wget --ca-certificate=company-ca.crt https://intranet.com
```

Verifies the server's certificate against a specific custom CA file.


## Recursive Operations

### wget -r https://example.com/directory/

```bash
wget -r https://example.com/directory/
```

Example:

```bash
wget --recursive https://example.com/files/
```

Recursively downloads files and subdirectories from the specified URL.

### wget -r -l 2 https://example.com

```bash
wget -r -l 2 https://example.com
```

Example:

```bash
wget --level=3 -r https://example.com
```

Recursively downloads with a maximum depth limit.

### wget -m https://example.com

```bash
wget -m https://example.com
```

Example:

```bash
wget --mirror https://example.com
```

Mirrors a website (enables recursion, time-stamping, and infinite depth).

### wget -r -k https://example.com

```bash
wget -r -k https://example.com
```

Example:

```bash
wget -r --convert-links https://example.com
```

Recursively downloads and converts links to point to local files for offline viewing.

### wget -p https://example.com/page.html

```bash
wget -p https://example.com/page.html
```

Example:

```bash
wget --page-requisites https://example.com/article
```

Downloads all files necessary to display the HTML page (images, CSS, JS).

### wget -mpk https://example.com

```bash
wget -mpk https://example.com
```

Example:

```bash
wget --mirror --page-requisites --convert-links https://example.com
```

Combines mirror, page requisites, and link conversion for a complete offline backup.


## Directory Control

### wget -r -nd https://example.com/files/

```bash
wget -r -nd https://example.com/files/
```

Example:

```bash
wget -r --no-directories https://example.com/assets/
```

Recursively downloads files but saves them all to the current directory, flattening the structure.

### wget -r --no-parent https://example.com/pub/data/

```bash
wget -r --no-parent https://example.com/pub/data/
```

Example:

```bash
wget -r -np https://example.com/files/user/
```

Recursively downloads but prevents ascending to parent directories.

### wget -r --no-host-directories https://example.com

```bash
wget -r --no-host-directories https://example.com
```

Example:

```bash
wget -r -nH https://example.com
```

Recursively downloads but skips creating a directory named after the hostname.


## Filtering and Parsing

### wget -r -A pdf,docx https://example.com/documents/

```bash
wget -r -A pdf,docx https://example.com/documents/
```

Example:

```bash
wget -r --accept=jpg,png https://example.com/gallery/
```

Recursively downloads only files matching the specified extensions.

### wget -r -R index.html,robots.txt https://example.com

```bash
wget -r -R index.html,robots.txt https://example.com
```

Example:

```bash
wget -r --reject=tmp,bak https://example.com/backup
```

Recursively downloads while explicitly excluding specified filenames or extensions.

### wget -r --accept-regex "/2023/.*\.pdf" https://example.com/archive/

```bash
wget -r --accept-regex "/2023/.*\.pdf" https://example.com/archive/
```

Example:

```bash
wget -r --accept-regex "user-[0-9]+" https://example.com/users
```

Uses a regular expression to filter which URLs should be downloaded during recursion.

### wget --ignore-case -A JPEG,jpg https://example.com/photos

```bash
wget --ignore-case -A JPEG,jpg https://example.com/photos
```

Example:

```bash
wget --ignore-case -A PDF https://example.com/docs
```

Matches file extensions case-insensitively during filtering.


## Advanced Interactions

### wget --post-data="id=5&action=delete" https://example.com/api.php

```bash
wget --post-data="id=5&action=delete" https://example.com/api.php
```

Example:

```bash
wget --post-data="user=admin" https://example.com/login
```

Sends data to the server using the HTTP POST method.

### wget --post-file=payload.json --header="Content-Type: application/json" https://example.com/api

```bash
wget --post-file=payload.json --header="Content-Type: application/json" https://example.com/api
```

Example:

```bash
wget --post-file=soap.xml https://example.com/service
```

Uploads the contents of a file via HTTP POST with appropriate headers.

### wget --method=PUT --body-file=update.json https://example.com/resource/1

```bash
wget --method=PUT --body-file=update.json https://example.com/resource/1
```

Example:

```bash
wget --method=DELETE https://example.com/resource/1
```

Uses a specific HTTP verb (like PUT or DELETE) to interact with RESTful APIs.

### wget --content-disposition https://example.com/download?id=123

```bash
wget --content-disposition https://example.com/download?id=123
```

Example:

```bash
wget --content-disposition https://example.com/get/file
```

Honors the Content-Disposition header sent by the server to name the saved file.

### wget --spider https://example.com/file

```bash
wget --spider https://example.com/file
```

Example:

```bash
wget --spider -r https://example.com
```

Checks if the file exists without downloading it (HEAD request).

### wget -O - https://example.com/script.sh | bash

```bash
wget -O - https://example.com/script.sh | bash
```

Example:

```bash
wget -O - https://example.com/key.pub | apt-key add -
```

Downloads a file to standard output for immediate piping into another command.


## FTP Support

### wget ftp://user:password@ftp.example.com/file.txt

```bash
wget ftp://user:password@ftp.example.com/file.txt
```

Example:

```bash
wget ftp://anonymous:test@ftp.example.com/pub/file
```

Downloads a file using the FTP protocol with authentication.

### wget --glob=on ftp://ftp.example.com/pub/*.txt

```bash
wget --glob=on ftp://ftp.example.com/pub/*.txt
```

Example:

```bash
wget --glob=on ftp://server/logs/log_*.txt
```

Uses wildcard globbing to download multiple files via FTP.

### wget --no-passive-ftp ftp://ftp.example.com/file

```bash
wget --no-passive-ftp ftp://ftp.example.com/file
```

Example:

```bash
wget --no-passive-ftp ftp://internal/file
```

Forces active FTP mode instead of passive mode.


## Red Team and Recon

### wget --spider -r -nd --no-parent https://example.com 2>&1 | grep 'Broken link'

```bash
wget --spider -r -nd --no-parent https://example.com 2>&1 | grep 'Broken link'
```

Example:

```bash
wget --spider -r https://target.com 2>&1 | grep '404'
```

Crawls a site without downloading to identify broken links and potential hijackable assets.

### wget -r -l 5 --spider --force-html -i input.html

```bash
wget -r -l 5 --spider --force-html -i input.html
```

Example:

```bash
wget --spider --force-html -i list.html
```

Forces wget to treat an input file as HTML to parse and follow links within it.

### wget --user-agent=" " https://example.com

```bash
wget --user-agent=" " https://example.com
```

Example:

```bash
wget -U "" https://example.com
```

Sends an empty User-Agent string to test server behavior for unknown clients.

### wget --header="X-Forwarded-For: 127.0.0.1" https://example.com

```bash
wget --header="X-Forwarded-For: 127.0.0.1" https://example.com
```

Example:

```bash
wget --header="Client-IP: 127.0.0.1" https://example.com
```

Injects headers attempting to bypass IP-based access controls.

### wget --execute robots=off -r https://example.com/admin

```bash
wget --execute robots=off -r https://example.com/admin
```

Example:

```bash
wget -e robots=off -m https://target.com
```

Ignores the robots.txt file to crawl paths specifically disallowed by the administrator.

### wget -r -A config,conf,cfg,ini,env,sh,bak,sql https://example.com

```bash
wget -r -A config,conf,cfg,ini,env,sh,bak,sql https://example.com
```

Example:

```bash
wget -r -A bak,old,swp https://example.com
```

Recursively scans for sensitive configuration and backup files left on the server.


## Blue Team and Forensics

### wget --warc-file=evidence --warc-cdx -m https://malicious-site.com

```bash
wget --warc-file=evidence --warc-cdx -m https://malicious-site.com
```

Example:

```bash
wget --warc-file=case_101 -m https://example.com
```

Mirrors a site and saves the request/response data into a WARC archive for forensic evidence.

### wget --server-response --spider https://example.com

```bash
wget --server-response --spider https://example.com
```

Example:

```bash
wget -S --spider https://example.com
```

Prints the full HTTP headers sent by the server to analyze security headers.

### wget --timestamping https://example.com/daily_log.txt

```bash
wget --timestamping https://example.com/daily_log.txt
```

Example:

```bash
wget -N https://example.com/database.db
```

Downloads the file only if the server version is newer than the local version.

### wget --preserve-permissions https://example.com/script.sh

```bash
wget --preserve-permissions https://example.com/script.sh
```

Example:

```bash
wget --no-use-server-timestamps https://example.com/file
```

Preserves the file permissions of the downloaded file as they are on the remote server.

### wget --max-redirect=0 https://example.com/redirect

```bash
wget --max-redirect=0 https://example.com/redirect
```

Example:

```bash
wget --max-redirect=0 https://phishing.link
```

Prevents wget from following redirects to analyze the initial redirect destination.


## Performance Tuning

### wget --no-cache https://example.com/live_data

```bash
wget --no-cache https://example.com/live_data
```

Example:

```bash
wget --header="Pragma: no-cache" https://example.com
```

Ensures the server sends a fresh version of the data rather than a cached copy.

### wget --local-encoding=UTF-8 --remote-encoding=ISO-8859-1 https://example.com

```bash
wget --local-encoding=UTF-8 --remote-encoding=ISO-8859-1 https://example.com
```

Example:

```bash
wget --remote-encoding=Windows-1252 https://legacy.com
```

Handles encoding differences between the local system and the remote server.

### wget --unlink https://example.com/file

```bash
wget --unlink https://example.com/file
```

Example:

```bash
wget --unlink -r https://example.com
```

Unlinks (deletes) the file before writing the new download, preventing symlink attacks.

### wget --backups=1 https://example.com/config.xml

```bash
wget --backups=1 https://example.com/config.xml
```

Example:

```bash
wget --backups=3 https://example.com/settings.json
```

Rotates existing files by adding a .1 suffix instead of overwriting them.


## Advanced Workflow

### wget --load-cookies=cookies.txt --post-data "download=true" -O - https://example.com/export | gzip > dump.gz

```bash
wget --load-cookies=cookies.txt --post-data "download=true" -O - https://example.com/export | gzip > dump.gz
```

Example:

```bash
wget --load-cookies=auth.txt -O - https://site.com/stream | tar -xvf -
```

Authenticates, requests a POST export, streams to stdout, and compresses immediately.

### wget -r -l 1 --no-parent -A.txt -H -D example.com,cdn.example.com https://example.com

```bash
wget -r -l 1 --no-parent -A.txt -H -D example.com,cdn.example.com https://example.com
```

Example:

```bash
wget -r -H -D site.com,img.site.com https://site.com
```

Recursively downloads with host spanning enabled but restricted to specific domains.

### wget --regex-type=posix --accept-regex '.*\.(jpg|png)' https://example.com

```bash
wget --regex-type=posix --accept-regex '.*\.(jpg|png)' https://example.com
```

Example:

```bash
wget --regex-type=pcre --reject-regex 'logout' https://example.com
```

Specifies the regular expression type (POSIX or PCRE) for advanced filtering.

### wget --no-if-modified-since https://example.com/data

```bash
wget --no-if-modified-since https://example.com/data
```

Example:

```bash
wget --no-if-modified-since -N https://example.com
```

Forces a download even if the server claims the file has not been modified.

### wget --crl-file=crl.pem https://secure.example.com

```bash
wget --crl-file=crl.pem https://secure.example.com
```

Example:

```bash
wget --crl-file=revoked.crl https://internal.lab
```

Checks the server certificate against a Certificate Revocation List (CRL).

### wget --random-wait --limit-rate=100k --user-agent="Mozilla/5.0" -e robots=off -m https://example.com

```bash
wget --random-wait --limit-rate=100k --user-agent="Mozilla/5.0" -e robots=off -m https://example.com
```

Example:

```bash
wget --random-wait -w 3 -e robots=off -r https://target.com
```

A 'stealthy' mirror workflow attempting to evade detection by acting like a slow human browser.

### wget -O /dev/null https://example.com/speedtest.bin

```bash
wget -O /dev/null https://example.com/speedtest.bin
```

Example:

```bash
wget -O /dev/null https://example.com/10GB.zip
```

Downloads a file and discards it immediately to test network throughput.

### wget --force-directories -i list.txt

```bash
wget --force-directories -i list.txt
```

Example:

```bash
wget -x -i urls.txt
```

Forces the creation of a hierarchy of directories even if one would not normally be created.

### wget --protocol-directories -r https://example.com

```bash
wget --protocol-directories -r https://example.com
```

Example:

```bash
wget --protocol-directories -r https://cdn.com
```

Uses the protocol name as a directory component when saving files locally.

### wget --cut-dirs=2 -r https://example.com/dir1/dir2/data/

```bash
wget --cut-dirs=2 -r https://example.com/dir1/dir2/data/
```

Example:

```bash
wget --cut-dirs=1 -r https://example.com/pub/files/
```

Ignores the specified number of parent directory components when saving files.

### wget --adjust-extension -r https://example.com/cgi-bin/script

```bash
wget --adjust-extension -r https://example.com/cgi-bin/script
```

Example:

```bash
wget -E -r https://example.com/dynamic
```

Appends the proper extension (like .html) to files downloaded with unknown content types.

### wget --restrict-file-names=windows https://example.com/aux.txt

```bash
wget --restrict-file-names=windows https://example.com/aux.txt
```

Example:

```bash
wget --restrict-file-names=unix https://example.com/file
```

Escapes characters in filenames to ensure compatibility with specific operating systems.


## Debugging

### wget -d https://example.com

```bash
wget -d https://example.com
```

Example:

```bash
wget --debug https://example.com
```

Prints extensive debug output to the terminal (requires wget compiled with debug support).


## Authentication

### wget --http-user=user --http-password=pass https://example.com

```bash
wget --http-user=user --http-password=pass https://example.com
```

Example:

```bash
wget --http-user=admin --http-password=123 https://router.local
```

Explicitly sets HTTP authentication separate from FTP authentication options.

### wget --ftp-user=user --ftp-password=pass ftp://example.com

```bash
wget --ftp-user=user --ftp-password=pass ftp://example.com
```

Example:

```bash
wget --ftp-user=anon --ftp-password=anon ftp://public.ftp
```

Explicitly sets FTP authentication separate from HTTP authentication options.


## Filtering

### wget -r --exclude-domains facebook.com,twitter.com https://example.com

```bash
wget -r --exclude-domains facebook.com,twitter.com https://example.com
```

Example:

```bash
wget -r --exclude-domains google.com https://blog.com
```

Follows links but explicitly avoids downloading content from specific excluded domains.

### wget -r --follow-tags=a,img,link https://example.com

```bash
wget -r --follow-tags=a,img,link https://example.com
```

Example:

```bash
wget -r --follow-tags=script https://example.com
```

Only parses and follows links found within specific HTML tags.

### wget -r --ignore-tags=area,form https://example.com

```bash
wget -r --ignore-tags=area,form https://example.com
```

Example:

```bash
wget -r --ignore-tags=script https://example.com
```

Parses the document but ignores links found within specific HTML tags.

### wget --span-hosts -r https://example.com

```bash
wget --span-hosts -r https://example.com
```

Example:

```bash
wget -H -r https://example.com
```

Allows recursion to jump to foreign hosts (use with caution and filters).


## Output Control

### wget --no-http-keep-alive https://example.com

```bash
wget --no-http-keep-alive https://example.com
```

Example:

```bash
wget --no-http-keep-alive -i urls.txt
```

Disables HTTP Keep-Alive, forcing a new TCP connection for every file.


## SSL and Security

### wget --secure-protocol=PFS https://example.com

```bash
wget --secure-protocol=PFS https://example.com
```

Example:

```bash
wget --secure-protocol=auto https://example.com
```

Enforces Perfect Forward Secrecy or allows automatic protocol negotiation.

### wget --https-only -r https://example.com

```bash
wget --https-only -r https://example.com
```

Example:

```bash
wget --https-only -m https://site.com
```

When recurring, only follows links that use the HTTPS protocol.


## Advanced Workflow

### wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://example.com/wiki/

```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://example.com/wiki/
```

Example:

```bash
wget -mkEpnp https://example.com/docs/
```

The ultimate 'make a local copy of this documentation section' command.

### wget --header="Cookie: session=123" https://example.com/admin

```bash
wget --header="Cookie: session=123" https://example.com/admin
```

Example:

```bash
wget --header="Cookie: id=abc" https://example.com
```

Manually sets the Cookie header without loading from a file.


## Network Tuning

### wget --retry-connrefused -t 5 https://example.com

```bash
wget --retry-connrefused -t 5 https://example.com
```

Example:

```bash
wget --retry-connrefused https://flaky-server.com
```

Considers 'Connection Refused' as a transient error and retries.


## Output Control

### wget -O- https://example.com/logs.txt | grep error

```bash
wget -O- https://example.com/logs.txt | grep error
```

Example:

```bash
wget -O- https://example.com/data | awk '{print $1}'
```

Uses standard output strictly for piping data into text processing tools.


## Meta

### wget --version

```bash
wget --version
```

Example:

```bash
wget -V
```

Displays the version of wget and the compilation options.

### wget --help

```bash
wget --help
```

Example:

```bash
wget -h
```

Displays the help message with a summary of available options.


## Recursive Operations

### wget -r --level=inf https://example.com

```bash
wget -r --level=inf https://example.com
```

Example:

```bash
wget -r -l 0 https://example.com
```

Recurses with infinite depth (use with extreme caution).


## Red Team and Recon

### wget --spider --no-check-certificate https://192.168.1.1/admin

```bash
wget --spider --no-check-certificate https://192.168.1.1/admin
```

Example:

```bash
wget --spider --no-check-certificate https://10.0.0.1/config
```

Probes an internal IP endpoint for existence ignoring SSL errors.


## Performance Tuning

### wget --inet4-only --bind-address=127.0.0.1 https://localhost/test

```bash
wget --inet4-only --bind-address=127.0.0.1 https://localhost/test
```

Example:

```bash
wget -4 --bind-address=10.0.0.5 https://example.com
```

Combinatory command forcing IPv4 and a specific interface binding.


## Logging

### wget --no-verbose --show-progress https://example.com/file

```bash
wget --no-verbose --show-progress https://example.com/file
```

Example:

```bash
wget -nv --show-progress https://example.com/iso
```

Keeps the log quiet but still displays the progress bar on the terminal.


## Output Control

### wget --ask-password --output-file=/dev/stderr https://example.com/secret

```bash
wget --ask-password --output-file=/dev/stderr https://example.com/secret
```

Example:

```bash
wget -o /dev/stderr https://example.com
```

Forces log output to standard error specifically.


## Recursive Operations

### wget -r --accept-regex 'index\.(html|php)' https://example.com

```bash
wget -r --accept-regex 'index\.(html|php)' https://example.com
```

Example:

```bash
wget -r --accept-regex 'view\?id=' https://example.com
```

Recursively downloads only index files or specific dynamic pages via regex.


## Advanced Workflow

### wget --start-pos=1000 https://example.com/file.txt

```bash
wget --start-pos=1000 https://example.com/file.txt
```

Example:

```bash
wget --start-pos=500k https://example.com/video.mp4
```

Starts the download from a specific byte offset.

### wget --no-cookies --header "Cookie: auth=token" https://example.com

```bash
wget --no-cookies --header "Cookie: auth=token" https://example.com
```

Example:

```bash
wget --no-cookies https://example.com
```

Prevents wget from using its internal cookie jar, relying manual headers.


## Red Team and Recon

### wget --method=OPTIONS -S https://example.com

```bash
wget --method=OPTIONS -S https://example.com
```

Example:

```bash
wget --method=OPTIONS -S https://api.target.com
```

Sends an HTTP OPTIONS request to discover allowed methods on the server.

### wget --method=TRACE -S https://example.com

```bash
wget --method=TRACE -S https://example.com
```

Example:

```bash
wget --method=TRACE https://example.com
```

Sends a TRACE request to debug upstream proxies or test for Cross-Site Tracing (XST).


## Blue Team and Forensics

### wget --content-on-error https://example.com/error_page

```bash
wget --content-on-error https://example.com/error_page
```

Example:

```bash
wget --content-on-error https://example.com/api/404
```

Saves the body of the response even if the server returns a 4xx or 5xx error code.


## Advanced Workflow

### wget --body-data="param=value" --method=POST https://example.com/api

```bash
wget --body-data="param=value" --method=POST https://example.com/api
```

Example:

```bash
wget --body-data="json={}" --method=POST https://example.com
```

Alternative way to send data strings with specific methods.

### wget --compression=auto https://example.com/data

```bash
wget --compression=auto https://example.com/data
```

Example:

```bash
wget --compression=gzip https://example.com/data
```

Asks the server to compress the response (gzip) to save bandwidth.


## Directory Control

### wget -r --no-host-directories --cut-dirs=1 https://example.com/user/files/

```bash
wget -r --no-host-directories --cut-dirs=1 https://example.com/user/files/
```

Example:

```bash
wget -r -nH --cut-dirs=2 https://example.com/a/b/c/
```

Combines host skipping and directory cutting for a clean local folder structure.


## Proxy Configuration

### wget --no-proxy --header="Host: internal.test" https://127.0.0.1

```bash
wget --no-proxy --header="Host: internal.test" https://127.0.0.1
```

Example:

```bash
wget --no-proxy https://10.0.0.1
```

Directly accesses a localhost service with a spoofed Host header, bypassing proxies.


## Recursive Operations

### wget -r --delete-after https://example.com

```bash
wget -r --delete-after https://example.com
```

Example:

```bash
wget -r --delete-after https://cache-warmer.com
```

Downloads files recursively to warm up a cache or test throughput, then deletes them.

### wget -r -k -p -E https://example.com

```bash
wget -r -k -p -E https://example.com
```

Example:

```bash
wget --recursive --convert-links --page-requisites --adjust-extension https://example.com
```

The most robust set of flags for ensuring a mirrored HTML page renders correctly offline.


## Security Testing

### wget --ciphers=DEFAULT:!AES https://example.com

```bash
wget --ciphers=DEFAULT:!AES https://example.com
```

Example:

```bash
wget --ciphers=ECDHE-RSA-AES256-GCM-SHA384 https://example.com
```

Specifies the GnuTLS cipher priority string to test server SSL/TLS configurations.


## Cleanup

### wget --no-hsts https://example.com

```bash
wget --no-hsts https://example.com
```

Example:

```bash
wget --no-hsts https://secure.com
```

Prevents wget from creating or updating the HSTS (HTTP Strict Transport Security) database file.

## Related tools

- [curl](https://terminal.rokibulroni.com/tool/utilities/curl)
- [HTTPie](https://terminal.rokibulroni.com/tool/utilities/httpie)
