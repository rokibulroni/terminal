# Recon-ng

> A modular web-reconnaissance framework with a Metasploit-style console, a workspace database and marketplace modules.

- Category: OSINT
- Commands: 21
- Page: https://terminal.rokibulroni.com/tool/osint/recon-ng
- Homepage: https://github.com/lanmaster53/recon-ng
- Documentation: https://github.com/lanmaster53/recon-ng/wiki
- Tags: framework, reconnaissance

## Install

- apt: `sudo apt install recon-ng`

## Workspaces

### recon-ng

```bash
recon-ng
```

Starts the console.

### recon-ng -w <workspace>

```bash
recon-ng -w <workspace>
```

Example:

```bash
recon-ng -w acme
```

Starts in a named workspace; each workspace has its own database.

### workspaces create <name>

```bash
workspaces create <name>
```

Example:

```bash
workspaces create acme
```

Creates a workspace from inside the console.

### workspaces list

```bash
workspaces list
```

Lists workspaces.


## Modules

### marketplace refresh

```bash
marketplace refresh
```

Updates the module index from the marketplace.

### marketplace search <term>

```bash
marketplace search <term>
```

Example:

```bash
marketplace search domains-hosts
```

Finds modules by name or category.

### marketplace install <module>

```bash
marketplace install <module>
```

Example:

```bash
marketplace install recon/domains-hosts/certificate_transparency
```

Installs a module.

### marketplace install all

```bash
marketplace install all
```

Installs every module (some still need API keys).

### modules load <module>

```bash
modules load <module>
```

Example:

```bash
modules load recon/domains-hosts/hackertarget
```

Loads a module.

### info

```bash
info
```

Shows the loaded module’s description and options.

### options set SOURCE <value>

```bash
options set SOURCE <value>
```

Example:

```bash
options set SOURCE example.com
```

Sets the module input; by default modules read from the database.

### run

```bash
run
```

Runs the module and stores results in the workspace database.


## Data

### db insert domains

```bash
db insert domains
```

Adds a seed domain to the database interactively.

### show hosts

```bash
show hosts
```

Hosts collected so far. Other tables include contacts, credentials and ports.

### db query SELECT host, ip_address FROM hosts WHERE ip_address IS NOT NULL

```bash
db query SELECT host, ip_address FROM hosts WHERE ip_address IS NOT NULL
```

Runs SQL against the workspace.

### keys add <name> <value>

```bash
keys add <name> <value>
```

Example:

```bash
keys add shodan_api ABC123
```

Stores an API key for modules that need one.

### keys list

```bash
keys list
```

Shows configured keys.


## Reporting and automation

### modules load reporting/html

```bash
modules load reporting/html
```

Loads the HTML report module; set CREATOR and CUSTOMER, then run.

### modules load reporting/csv

```bash
modules load reporting/csv
```

Exports a table to CSV.

### recon-cli -w <workspace> -m <module> -o SOURCE=<value> -x

```bash
recon-cli -w <workspace> -m <module> -o SOURCE=<value> -x
```

Example:

```bash
recon-cli -w acme -m recon/domains-hosts/hackertarget -o SOURCE=example.com -x
```

Runs a module non-interactively for scripting.

### recon-ng -r <file>

```bash
recon-ng -r <file>
```

Example:

```bash
recon-ng -r commands.rc
```

Runs console commands from a resource file.

## Related tools

- [theHarvester](https://terminal.rokibulroni.com/tool/osint/theHarvester)
- [SpiderFoot](https://terminal.rokibulroni.com/tool/osint/spiderfoot)
- [OWASP Amass](https://terminal.rokibulroni.com/tool/osint/amass)
