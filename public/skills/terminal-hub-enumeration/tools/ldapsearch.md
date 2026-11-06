# ldapsearch

> The OpenLDAP query client. Dumps users, groups, computers and attributes from LDAP and Active Directory with precise filters.

- Category: Enumeration
- Commands: 70
- Page: https://terminal.rokibulroni.com/tool/enumeration/ldapsearch
- Homepage: https://www.openldap.org
- Documentation: https://www.openldap.org/software/man.cgi?query=ldapsearch
- Tags: LDAP, Active Directory

## Install

- apt: `sudo apt install ldap-utils`
- brew: `brew install openldap`

## Basic Connection

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local"
```

Performs a basic anonymous query against the target IP using simple authentication.

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=*)"

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=*)"
```

Connects to a hostname and retrieves all objects in the base DN.


## Authentication

### ldapsearch -x -D "cn=admin,dc=example,dc=local" -W -H ldap://192.168.1.10 -b "dc=example,dc=local"

```bash
ldapsearch -x -D "cn=admin,dc=example,dc=local" -W -H ldap://192.168.1.10 -b "dc=example,dc=local"
```

Authenticates with a specific Bind DN and prompts the user for the password interactively.

### ldapsearch -x -D "cn=admin,dc=example,dc=local" -w "P@ssw0rd123" -H ldap://192.168.1.10 -b "dc=example,dc=local"

```bash
ldapsearch -x -D "cn=admin,dc=example,dc=local" -w "P@ssw0rd123" -H ldap://192.168.1.10 -b "dc=example,dc=local"
```

Authenticates providing the password inline (less secure, useful for scripts).

### ldapsearch -x -D "EXAMPLE\Administrator" -W -H ldap://192.168.1.10 -b "dc=example,dc=local"

```bash
ldapsearch -x -D "EXAMPLE\Administrator" -W -H ldap://192.168.1.10 -b "dc=example,dc=local"
```

Uses the Active Directory down-level logon name format for binding.

### ldapsearch -x -D "admin@example.local" -W -H ldap://192.168.1.10 -b "dc=example,dc=local"

```bash
ldapsearch -x -D "admin@example.local" -W -H ldap://192.168.1.10 -b "dc=example,dc=local"
```

Uses the User Principal Name (UPN) format for binding to Active Directory.

### ldapsearch -x -D "cn=admin,dc=example,dc=local" -y passfile.txt -H ldap://192.168.1.10

```bash
ldapsearch -x -D "cn=admin,dc=example,dc=local" -y passfile.txt -H ldap://192.168.1.10
```

Reads the bind password from a specified file to avoid exposing it in the command history.


## Security & Encryption

### ldapsearch -x -H ldaps://dc.example.local:636 -b "dc=example,dc=local"

```bash
ldapsearch -x -H ldaps://dc.example.local:636 -b "dc=example,dc=local"
```

Connects over SSL (LDAPS) on the standard secure port 636.

### ldapsearch -x -Z -H ldap://dc.example.local -b "dc=example,dc=local"

```bash
ldapsearch -x -Z -H ldap://dc.example.local -b "dc=example,dc=local"
```

Initiates a StartTLS operation to upgrade a cleartext connection to an encrypted one.

### ldapsearch -x -ZZ -H ldap://dc.example.local -b "dc=example,dc=local"

```bash
ldapsearch -x -ZZ -H ldap://dc.example.local -b "dc=example,dc=local"
```

Enforces StartTLS and fails the connection if the TLS upgrade is not successful.


## Scope Control

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -s base

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -s base
```

Searches only the base object itself, useful for checking RootDSE or specific object attributes.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -s one

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -s one
```

Searches one level deep (immediate children) excluding the base object itself.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -s sub

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -s sub
```

Performs a subtree search, searching the base object and the entire hierarchy below it (default).


## Attribute Selection

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(objectClass=person)" cn mail

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(objectClass=person)" cn mail
```

Retrieves only the Common Name and Email attributes for person objects.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(objectClass=*)" * +

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(objectClass=*)" * +
```

Retrieves all user attributes (*) and all operational attributes (+) like modifyTimestamp.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -u "(objectClass=person)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -u "(objectClass=person)"
```

Displays the User Friendly Name (UFN) of the Distinguished Name in the output.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -A "(objectClass=person)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -A "(objectClass=person)"
```

Retrieves attribute names only without their values, useful for schema discovery.


## Output Formatting

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -LL

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -LL
```

Outputs in LDIF format without comments, suitable for processing by other tools.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -LLL

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -LLL
```

Outputs in raw LDIF format without comments or version information.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -L

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -L
```

Outputs in LDIF format v1 (standard default).


## Referrals & Aliases

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -C

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -C
```

Automatically chases referrals to other LDAP servers.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -M

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -M
```

Sends the ManageDsaIT control, instructing the server to return referral objects as entries rather than chasing them.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -a always

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -a always
```

Always dereference aliases during both searching and finding.


## Performance & Limits

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -z 10

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -z 10
```

Limits the number of entries returned to a maximum of 10.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -l 5

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -l 5
```

Sets a time limit of 5 seconds for the search to complete.


## Advanced Controls

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -E pr=1000/noprompt

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -E pr=1000/noprompt
```

Uses the Paged Results control to retrieve datasets larger than the server's size limit (e.g., AD's 1000 limit).

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -E sss=-cn

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -E sss=-cn
```

Requests Server Side Sorting of results by Common Name in descending order.


## SASL Authentication

### ldapsearch -H ldap://dc.example.local -Y GSSAPI -b "dc=example,dc=local"

```bash
ldapsearch -H ldap://dc.example.local -Y GSSAPI -b "dc=example,dc=local"
```

Authenticates using Kerberos (GSSAPI) via the current user's Ticket Granting Ticket.

### ldapsearch -H ldap://dc.example.local -Y DIGEST-MD5 -U admin -b "dc=example,dc=local"

```bash
ldapsearch -H ldap://dc.example.local -Y DIGEST-MD5 -U admin -b "dc=example,dc=local"
```

Authenticates using the DIGEST-MD5 SASL mechanism for the user 'admin'.

### ldapsearch -H ldapi:/// -Y EXTERNAL -b "cn=config"

```bash
ldapsearch -H ldapi:/// -Y EXTERNAL -b "cn=config"
```

Uses Unix socket (IPC) authentication, often used for root access to local OpenLDAP configuration.

### ldapsearch -H ldap://dc.example.local -Y GSSAPI -O max -b "dc=example,dc=local"

```bash
ldapsearch -H ldap://dc.example.local -Y GSSAPI -O max -b "dc=example,dc=local"
```

Uses GSSAPI with maximum security properties (encryption and integrity protection).


## Basic Filtering

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(cn=John Doe)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(cn=John Doe)"
```

Filters for objects where the Common Name is exactly 'John Doe'.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(cn=J*)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(cn=J*)"
```

Filters for objects where the Common Name starts with 'J' (wildcard).

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(description=*)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(description=*)"
```

Filters for objects where the 'description' attribute is present (not null).

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(gidNumber>=1000)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(gidNumber>=1000)"
```

Filters for objects where the gidNumber is greater than or equal to 1000.


## Complex Filtering

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(&(objectClass=user)(cn=admin))"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(&(objectClass=user)(cn=admin))"
```

Uses the AND operator to find objects that are both a user AND have the common name 'admin'.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(|(cn=admin)(cn=root))"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(|(cn=admin)(cn=root))"
```

Uses the OR operator to find objects that are named 'admin' OR 'root'.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(&(objectClass=user)(!(userAccountControl:1.2.840.113556.

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(&(objectClass=user)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))"
```

Uses the NOT operator and bitwise logic to find active users (excluding disabled accounts).


## Active Directory Recon

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=user)" sAMAccountName

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=user)" sAMAccountName
```

Enumerates all user login names (sAMAccountName) in an Active Directory domain.

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=group)" cn member

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=group)" cn member
```

Enumerates all groups and lists their member DNs.

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectCategory=Computer)" name operatingSystem

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectCategory=Computer)" name operatingSystem
```

Enumerates all computer objects and their operating system versions.

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(servicePrincipalName=*)" servicePrincipalName

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(servicePrincipalName=*)" servicePrincipalName
```

Performs 'Kerberoasting' recon by identifying accounts with Service Principal Names (SPNs).

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(adminCount=1)" cn

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(adminCount=1)" cn
```

Identifies high-value targets by searching for objects protected by AdminSDHolder (adminCount=1).

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(userAccountControl:1.2.840.113556.1.4.803:=524288)" 

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(userAccountControl:1.2.840.113556.1.4.803:=524288)" cn
```

Identifies accounts configured with 'Trusted for Delegation' (risky configuration).

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(userAccountControl:1.2.840.113556.1.4.803:=4194304)"

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(userAccountControl:1.2.840.113556.1.4.803:=4194304)" cn
```

Identifies accounts with 'Do not require Kerberos preauthentication' enabled (AS-REP Roasting targets).

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(pwdLastSet=0)" cn

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(pwdLastSet=0)" cn
```

Finds accounts that must change their password at next logon.

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(userAccountControl:1.2.840.113556.1.4.803:=65536)" c

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(userAccountControl:1.2.840.113556.1.4.803:=65536)" cn
```

Finds accounts where the password is set to never expire.

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(description=*password*)" description

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(description=*password*)" description
```

Searches for the string 'password' inside description fields, a common place for leaked credentials.


## Server Information

### ldapsearch -x -H ldap://192.168.1.10 -s base -b "" +

```bash
ldapsearch -x -H ldap://192.168.1.10 -s base -b "" +
```

Queries the RootDSE (empty base DN) for operational attributes to discover server capabilities and contexts.

### ldapsearch -x -H ldap://192.168.1.10 -s base -b "cn=Subschema" attributeTypes

```bash
ldapsearch -x -H ldap://192.168.1.10 -s base -b "cn=Subschema" attributeTypes
```

Queries the LDAP schema to list all defined attribute types.

### ldapsearch -x -H ldap://192.168.1.10 -s base -b "" namingContexts

```bash
ldapsearch -x -H ldap://192.168.1.10 -s base -b "" namingContexts
```

Retrieves the naming contexts to identify valid base DNs for future searches.


## Advanced Output

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -t

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -t
```

Writes non-printable values (like binary photos or certificates) to temporary files.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -T /tmp/ldap

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -T /tmp/ldap
```

Writes binary values to temporary files in a specified directory.


## Debug & Verbose

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -v

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -v
```

Runs in verbose mode, showing diagnostics to standard error.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -d 1

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -d 1
```

Runs with debug level 1 (trace) to view detailed connection handling information.

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -n

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -n
```

Performs a dry run, showing what would be done without actually connecting to the server.


## File Input

### ldapsearch -x -H ldap://192.168.1.10 -f filters.txt -b "dc=example,dc=local"

```bash
ldapsearch -x -H ldap://192.168.1.10 -f filters.txt -b "dc=example,dc=local"
```

Reads a series of filters from a file and performs a search for each one.


## Network

### ldapsearch -x -H ldap://[fe80::1] -b "dc=example,dc=local"

```bash
ldapsearch -x -H ldap://[fe80::1] -b "dc=example,dc=local"
```

Connects to an LDAP server using an IPv6 address literal.


## Operational Recon

### ldapsearch -x -H ldap://dc.example.local -b "CN=Policies,CN=System,DC=example,DC=local" -s sub "(objectClass=*)"

```bash
ldapsearch -x -H ldap://dc.example.local -b "CN=Policies,CN=System,DC=example,DC=local" -s sub "(objectClass=*)"
```

Retrieves Group Policy Objects (GPO) information from the System container.

### ldapsearch -x -H ldap://dc.example.local -b "DC=ForestDnsZones,DC=example,DC=local" "(objectClass=*)"

```bash
ldapsearch -x -H ldap://dc.example.local -b "DC=ForestDnsZones,DC=example,DC=local" "(objectClass=*)"
```

Enumerates DNS records stored within the Active Directory Forest DNS Zones.


## LAPS Recon

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(ms-Mcs-AdmPwd=*)" ms-Mcs-AdmPwd

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(ms-Mcs-AdmPwd=*)" ms-Mcs-AdmPwd
```

Attempts to retrieve cleartext Local Administrator Password Solution (LAPS) passwords.


## Exchange Recon

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=msExchExchangeServer)"

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(objectClass=msExchExchangeServer)"
```

Identifies Microsoft Exchange servers within the environment.


## Blue Team Audit

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(&(objectClass=user)(!(pwdLastSet=*)))"

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(&(objectClass=user)(!(pwdLastSet=*)))"
```

Finds users who have never set a password (potential stale or uninitialized accounts).

### ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(&(objectCategory=person)(objectClass=user)(primaryGr

```bash
ldapsearch -x -H ldap://dc.example.local -b "dc=example,dc=local" "(&(objectCategory=person)(objectClass=user)(primaryGroupID=512))"
```

Finds users whose Primary Group ID is 512 (Domain Admins), verifying high-privilege membership.


## Advanced Filtering

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(cn~=john)"

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(cn~=john)"
```

Uses the 'approximate' (sounds like) operator to find values that sound like 'john'.


## Schema Recon

### ldapsearch -x -H ldap://192.168.1.10 -b "cn=schema" -s base objectClasses

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "cn=schema" -s base objectClasses
```

Dumps the full list of Object Classes defined in the schema.


## LDIF Import Format

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -L > backup.ldif

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -L > backup.ldif
```

Redirects standard output to a file to create a backup in LDIF format.


## Advanced

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -E !pr=1000/noprompt

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -E !pr=1000/noprompt
```

Uses the 'Critical' (!) flag with paging, forcing the server to return an error if it doesn't support paging.


## Attribute Filtering

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(objectClass=*)" 1.1

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" "(objectClass=*)" 1.1
```

Requests the special attribute '1.1', which tells the server to return entries with NO attributes (DNs only).


## Time Limit

### ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -l 0

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "dc=example,dc=local" -l 0
```

Sets the time limit to 0 (unlimited), instructing the client to wait indefinitely for the server response.

## Related tools

- [CrackMapExec (enumeration)](https://terminal.rokibulroni.com/tool/enumeration/crackmapexec-enum)
- [BloodHound.py](https://terminal.rokibulroni.com/tool/active-directory/bloodhound-python)
- [rpcclient](https://terminal.rokibulroni.com/tool/enumeration/rpcclient)
