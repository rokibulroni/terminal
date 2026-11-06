# BloodHound.py

> A Python ingestor for BloodHound that collects Active Directory objects, ACLs and sessions from Linux, revealing attack paths to high-value targets.

- Category: Active Directory
- Commands: 8
- Page: https://terminal.rokibulroni.com/tool/active-directory/bloodhound-python
- Homepage: https://github.com/dirkjanm/BloodHound.py
- Documentation: https://github.com/dirkjanm/BloodHound.py
- Tags: Active Directory, BloodHound, enumeration, attack paths

## Install

- pipx: `pipx install bloodhound`

## Collection

### bloodhound-python -u <user> -p <pass> -d <domain> -ns <dc-ip> -c Default

```bash
bloodhound-python -u <user> -p <pass> -d <domain> -ns <dc-ip> -c Default
```

Example:

```bash
bloodhound-python -u svc -p pass -d corp.local -ns 10.10.10.1 -c Default
```

Collects AD objects and relationships over LDAP and saves JSON for BloodHound.

### bloodhound-python -u <user> -p <pass> -d <domain> -ns <dc-ip> -c All

```bash
bloodhound-python -u <user> -p <pass> -d <domain> -ns <dc-ip> -c All
```

Example:

```bash
bloodhound-python -u svc -p pass -d corp.local -ns 10.10.10.1 -c All
```

Runs every collection method, including session and local-admin enumeration.

### bloodhound-python -u <user> --hashes <lm>:<nt> -d <domain> -ns <dc-ip> -c All

```bash
bloodhound-python -u <user> --hashes <lm>:<nt> -d <domain> -ns <dc-ip> -c All
```

Example:

```bash
bloodhound-python -u svc --hashes :31d6cfe0d16ae931b73c59d7e0c089c0 -d corp.local -ns 10.10.10.1 -c All
```

Collects using pass-the-hash instead of a password.

### bloodhound-python -u <user> -p <pass> -d <domain> -ns <dc-ip> -c All --zip

```bash
bloodhound-python -u <user> -p <pass> -d <domain> -ns <dc-ip> -c All --zip
```

Example:

```bash
bloodhound-python -u svc -p pass -d corp.local -ns 10.10.10.1 -c All --zip
```

Bundles the JSON output into a single zip for import.

### bloodhound-python -u <user> -p <pass> -d <domain> -dc <fqdn> -ns <ip> -c All

```bash
bloodhound-python -u <user> -p <pass> -d <domain> -dc <fqdn> -ns <ip> -c All
```

Example:

```bash
bloodhound-python -u svc -p pass -d corp.local -dc dc01.corp.local -ns 10.10.10.1 -c All
```

Targets a named domain controller when DNS is awkward.


## Using the data

### sudo neo4j console

```bash
sudo neo4j console
```

Starts the Neo4j database that the BloodHound GUI reads.

### bloodhound

```bash
bloodhound
```

Launches the BloodHound GUI; drag the collected zip onto it to import.

### MATCH p=shortestPath((u {owned:true})-[*1..]->(g:Group {name:"DOMAIN ADMINS@CORP.LOCAL"})) RETURN p

```bash
MATCH p=shortestPath((u {owned:true})-[*1..]->(g:Group {name:"DOMAIN ADMINS@CORP.LOCAL"})) RETURN p
```

A Cypher query in the GUI: the shortest path from an owned node to Domain Admins.

## Related tools

- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [Impacket](https://terminal.rokibulroni.com/tool/active-directory/impacket)
- [ldapsearch](https://terminal.rokibulroni.com/tool/enumeration/ldapsearch)
- [Certipy](https://terminal.rokibulroni.com/tool/active-directory/certipy)
