# RSMangler

> Takes a wordlist and produces mangled variations — reversals, leetspeak, case changes, appended years — for password attacks.

- Category: Credentials
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/credentials/rsmangler
- Homepage: https://github.com/digininja/RSMangler
- Tags: wordlists, mangling

## Install

- apt: `sudo apt install rsmangler`

## Basic Wordlist Mangling

### rsmangler --file wordlist.txt

```bash
rsmangler --file wordlist.txt
```

Example:

```bash
rsmangler --file employees.txt
```

Generates mutated password candidates from a specific input file using default settings

### rsmangler -f wordlist.txt

```bash
rsmangler -f wordlist.txt
```

Example:

```bash
rsmangler -f names.txt
```

Uses the shorthand flag to specify the input wordlist file

### rsmangler --help

```bash
rsmangler --help
```

Displays the help menu listing all available options and syntax


## Output Handling

### rsmangler --file input.txt --output mangled.txt

```bash
rsmangler --file input.txt --output mangled.txt
```

Example:

```bash
rsmangler --file seeds.txt --output mutations.txt
```

Saves the generated wordlist to a specific output file instead of printing to stdout

### rsmangler -f input.txt -o output.txt

```bash
rsmangler -f input.txt -o output.txt
```

Example:

```bash
rsmangler -f target_info.txt -o potential_passwords.txt
```

Uses shorthand flags for both input and output file specification


## Standard Input/Output

### cat words.txt | rsmangler --file -

```bash
cat words.txt | rsmangler --file -
```

Example:

```bash
cat keywords.txt | rsmangler --file -
```

Pipes a wordlist directly into RSMangler using stdin


## Length Control

### rsmangler --file wordlist.txt --min 8

```bash
rsmangler --file wordlist.txt --min 8
```

Example:

```bash
rsmangler --file weak_passwords.txt --min 8
```

Filters output to exclude any generated passwords shorter than 8 characters

### rsmangler --file wordlist.txt --max 12

```bash
rsmangler --file wordlist.txt --max 12
```

Example:

```bash
rsmangler --file service_accounts.txt --max 12
```

Filters output to exclude any generated passwords longer than 12 characters

### rsmangler --file wordlist.txt --min 8 --max 14

```bash
rsmangler --file wordlist.txt --min 8 --max 14
```

Example:

```bash
rsmangler --file company_terms.txt --min 8 --max 14
```

Combines minimum and maximum length constraints for targeted password policy testing

### rsmangler -f input.txt -m 10 -x 20

```bash
rsmangler -f input.txt -m 10 -x 20
```

Uses shorthand flags to enforce a password length between 10 and 20 characters


## Mutation Control

### rsmangler --file wordlist.txt --no-leet

```bash
rsmangler --file wordlist.txt --no-leet
```

Example:

```bash
rsmangler --file common.txt --no-leet
```

Disables leetspeak substitutions to focus on plain text variations

### rsmangler --file wordlist.txt --no-doubles

```bash
rsmangler --file wordlist.txt --no-doubles
```

Example:

```bash
rsmangler --file names.txt --no-doubles
```

Prevents the generation of doubled words like adminadmin

### rsmangler --file wordlist.txt --no-reverse

```bash
rsmangler --file wordlist.txt --no-reverse
```

Example:

```bash
rsmangler --file dictionary.txt --no-reverse
```

Stops the tool from creating reversed versions of the input words

### rsmangler --file wordlist.txt --no-acronyms

```bash
rsmangler --file wordlist.txt --no-acronyms
```

Example:

```bash
rsmangler --file phrases.txt --no-acronyms
```

Disables the creation of acronyms from multi-word inputs

### rsmangler --file wordlist.txt --no-upper

```bash
rsmangler --file wordlist.txt --no-upper
```

Example:

```bash
rsmangler --file lowercase_only.txt --no-upper
```

Prevents the tool from uppercasing words during mutation

### rsmangler --file wordlist.txt --no-lower

```bash
rsmangler --file wordlist.txt --no-lower
```

Example:

```bash
rsmangler --file uppercase_only.txt --no-lower
```

Prevents the tool from lowercasing words during mutation

### rsmangler --file wordlist.txt --no-titles

```bash
rsmangler --file wordlist.txt --no-titles
```

Example:

```bash
rsmangler --file mixed.txt --no-titles
```

Disables title case generation for the input words

### rsmangler --file wordlist.txt --space

```bash
rsmangler --file wordlist.txt --space
```

Example:

```bash
rsmangler --file phrases.txt --space
```

Allows spaces to remain in the output for passphrase generation


## Advanced Combination

### rsmangler --file wordlist.txt --perms

```bash
rsmangler --file wordlist.txt --perms
```

Example:

```bash
rsmangler --file keywords.txt --perms
```

Enables exhaustive permutations of all words in the input list combined with each other


## Minimal Mutation Workflow

### rsmangler -f words.txt --no-leet --no-reverse --no-doubles

```bash
rsmangler -f words.txt --no-leet --no-reverse --no-doubles
```

Example:

```bash
rsmangler -f seeds.txt --no-leet --no-reverse --no-doubles
```

Generates a conservative list by disabling leet, reverse, and double mutations


## Strict Formatting

### rsmangler -f input.txt --no-upper --no-lower --no-titles

```bash
rsmangler -f input.txt --no-upper --no-lower --no-titles
```

Example:

```bash
rsmangler -f strict.txt --no-upper --no-lower --no-titles
```

Retains the original casing of the input words without case modification


## Pipeline Automation

### echo 'Company2023' | rsmangler --file -

```bash
echo 'Company2023' | rsmangler --file -
```

Example:

```bash
echo 'TargetCorp' | rsmangler --file -
```

Mangles a single target word passed directly via echo

### rsmangler -f base.txt | grep '2023'

```bash
rsmangler -f base.txt | grep '2023'
```

Example:

```bash
rsmangler -f seeds.txt | grep '!'
```

Filters the mangled output immediately for specific patterns using grep

### rsmangler -f words.txt | sort -u > unique_mangled.txt

```bash
rsmangler -f words.txt | sort -u > unique_mangled.txt
```

Example:

```bash
rsmangler -f names.txt | sort -u > clean_list.txt
```

Sorts and deduplicates the mangled output before saving to a file


## Red Team Workflow

### cewl https://example.com -w site_words.txt && rsmangler -f site_words.txt -o site_mangled.txt

```bash
cewl https://example.com -w site_words.txt && rsmangler -f site_words.txt -o site_mangled.txt
```

Example:

```bash
cewl https://target.com -w temp.txt && rsmangler -f temp.txt -o target_pass.txt
```

Combines CeWL crawling with RSMangler to attack specific web targets

### rsmangler -f user_details.txt --perms --min 10

```bash
rsmangler -f user_details.txt --perms --min 10
```

Example:

```bash
rsmangler -f profile.txt --perms --min 10
```

Creates complex permutations of user details for targeted brute-forcing


## Blue Team Validation

### rsmangler -f policy_terms.txt --min 12 --max 128 --space

```bash
rsmangler -f policy_terms.txt --min 12 --max 128 --space
```

Example:

```bash
rsmangler -f seed.txt --min 12 --max 128 --space
```

Generates passphrases compliant with modern long-password policies

### rsmangler -f common_roots.txt --no-leet | pw-inspector -m 8 -M 20

```bash
rsmangler -f common_roots.txt --no-leet | pw-inspector -m 8 -M 20
```

Example:

```bash
rsmangler -f seeds.txt --no-leet | pw-inspector -m 8 -M 20
```

Validates basic mutations against password inspector tools for complexity checks


## Performance Optimization

### rsmangler -f small_seed.txt --perms > massive_list.txt

```bash
rsmangler -f small_seed.txt --perms > massive_list.txt
```

Example:

```bash
rsmangler -f core.txt --perms > full_scope.txt
```

Generates a very large wordlist from a small seed using permutations (warning: resource intensive)


## Targeted Crack Workflow

### rsmangler -f names.txt --no-doubles --no-reverse --min 6 --max 15

```bash
rsmangler -f names.txt --no-doubles --no-reverse --min 6 --max 15
```

Example:

```bash
rsmangler -f staff.txt --no-doubles --no-reverse --min 6 --max 15
```

Optimizes the wordlist for standard corporate password policies (6-15 chars)


## Hybrid Attack Prep

### rsmangler -f base.txt -o mangled.txt && hashcat -a 0 hashes.txt mangled.txt

```bash
rsmangler -f base.txt -o mangled.txt && hashcat -a 0 hashes.txt mangled.txt
```

Example:

```bash
rsmangler -f dict.txt -o dict_mangled.txt && hashcat -a 0 hash.txt dict_mangled.txt
```

Pre-computes mangled words for a straight dictionary attack in Hashcat


## Complex Pattern Generation

### rsmangler -f seeds.txt --perms --no-acronyms --no-doubles

```bash
rsmangler -f seeds.txt --perms --no-acronyms --no-doubles
```

Example:

```bash
rsmangler -f input.txt --perms --no-acronyms --no-doubles
```

Focuses on combinator permutations while reducing noise from acronyms and doubles


## Date-Based Mangling

### echo '2024' > years.txt && cat keywords.txt years.txt | rsmangler --file - --perms

```bash
echo '2024' > years.txt && cat keywords.txt years.txt | rsmangler --file - --perms
```

Example:

```bash
cat company.txt years.txt | rsmangler --file - --perms
```

Forces combination of keywords with years by piping both into permutation mode


## Incident Response Simulation

### rsmangler -f leaked_terms.txt --min 1 --max 100 --perms

```bash
rsmangler -f leaked_terms.txt --min 1 --max 100 --perms
```

Example:

```bash
rsmangler -f breach.txt --min 1 --max 100 --perms
```

Generates a maximum coverage list based on terms found in a data breach


## Legacy System Testing

### rsmangler -f input.txt --max 8 --no-lower --no-leet

```bash
rsmangler -f input.txt --max 8 --no-lower --no-leet
```

Example:

```bash
rsmangler -f legacy.txt --max 8 --no-lower --no-leet
```

Simulates restrictions of legacy mainframes (max 8 chars, often uppercase)


## Case Insensitive Prep

### rsmangler -f input.txt --no-leet --no-reverse | tr '[:upper:]' '[:lower:]' | sort -u

```bash
rsmangler -f input.txt --no-leet --no-reverse | tr '[:upper:]' '[:lower:]' | sort -u
```

Example:

```bash
rsmangler -f words.txt --no-leet --no-reverse | tr '[:upper:]' '[:lower:]' | sort -u
```

Normalizes all mangled outputs to lowercase for case-insensitive protocols (like NTLM)


## Symbol Focus

### rsmangler -f input.txt --no-leet --no-numbers --no-doubles

```bash
rsmangler -f input.txt --no-leet --no-numbers --no-doubles
```

Example:

```bash
rsmangler -f roots.txt --no-leet --no-numbers --no-doubles
```

Generates list focused on case and simple mutations without numeric or leet clutter


## Space-to-Underscore

### rsmangler -f phrases.txt --space | sed 's/ /_/g'

```bash
rsmangler -f phrases.txt --space | sed 's/ /_/g'
```

Example:

```bash
rsmangler -f sentence.txt --space | sed 's/ /_/g'
```

Converts generated passphrases with spaces into snake_case format


## High Volume Output

### rsmangler -f many_words.txt --perms -o /tmp/large_wordlist.txt

```bash
rsmangler -f many_words.txt --perms -o /tmp/large_wordlist.txt
```

Example:

```bash
rsmangler -f dictionary.txt --perms -o /mnt/external/wordlist.txt
```

Writes extremely large permutation lists directly to disk to avoid memory overflow


## Custom Combination Script

### cat list1.txt list2.txt | rsmangler -f - --perms --min 10

```bash
cat list1.txt list2.txt | rsmangler -f - --perms --min 10
```

Example:

```bash
cat firstnames.txt lastnames.txt | rsmangler -f - --perms --min 10
```

Merges two wordlists via stdout and generates permutations meeting length requirements


## Wireless Auditing

### rsmangler -f wifi_seeds.txt --min 8 --max 63

```bash
rsmangler -f wifi_seeds.txt --min 8 --max 63
```

Example:

```bash
rsmangler -f ssid.txt --min 8 --max 63
```

Ensures generated candidates comply with WPA2 minimum and maximum key lengths


## Quick Debug

### rsmangler -f test.txt --perms --verbose

```bash
rsmangler -f test.txt --perms --verbose
```

Example:

```bash
rsmangler -f test.txt --perms -v
```

Runs generation with verbose output (if supported by version) to check logic


## Exclude Common Patterns

### rsmangler -f input.txt --no-leet --no-doubles --no-reverse --no-acronyms

```bash
rsmangler -f input.txt --no-leet --no-doubles --no-reverse --no-acronyms
```

Example:

```bash
rsmangler -f words.txt -l -d -r -a
```

Uses short flags to disable all complex mutations for a pure case/append list


## Full Spectrum Audit

### rsmangler -f critical_terms.txt --perms -m 1 -x 99

```bash
rsmangler -f critical_terms.txt --perms -m 1 -x 99
```

Example:

```bash
rsmangler -f target.txt --perms -m 1 -x 99
```

Attempts every possible supported permutation and mutation with virtually no length limit


## Cleanup

### rm mangled.txt

```bash
rm mangled.txt
```

Removes the generated wordlist files to maintain lab hygiene

## Related tools

- [CeWL](https://terminal.rokibulroni.com/tool/credentials/cewl)
- [Crunch](https://terminal.rokibulroni.com/tool/credentials/crunch)
- [John the Ripper](https://terminal.rokibulroni.com/tool/credentials/john)
