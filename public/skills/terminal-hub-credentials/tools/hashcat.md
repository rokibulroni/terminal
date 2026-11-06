# Hashcat

> The world’s fastest GPU password cracker: hundreds of hash types with dictionary, rule, mask and hybrid attack modes.

- Category: Credentials
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/credentials/hashcat
- Homepage: https://hashcat.net/hashcat/
- Documentation: https://hashcat.net/wiki/
- Tags: password cracking, GPU, hashes

## Install

- apt: `sudo apt install hashcat`
- brew: `brew install hashcat`
- windows: `winget install hashcat.hashcat`

## Basic Syntax & Help

### hashcat --help

```bash
hashcat --help
```

Displays the main help menu listing all valid parameters and modes.

### hashcat --version

```bash
hashcat --version
```

Prints the currently installed version of Hashcat to the console.


## Benchmarking

### hashcat -b

```bash
hashcat -b
```

Runs a benchmark against the default kernel set to test system performance.

### hashcat -b -m 1000

```bash
hashcat -b -m 1000
```

Runs a benchmark specifically for NTLM hashing speed measurement.

### hashcat -b -m 0 --force

```bash
hashcat -b -m 0 --force
```

Forces a benchmark of MD5 hashes even if warnings are present.


## Hash Mode Identification

### hashcat --example-hashes

```bash
hashcat --example-hashes
```

Displays a table of example hashes for every supported hash mode.


## Basic Dictionary Attack

### hashcat -m 0 -a 0 hashes.txt wordlist.txt

```bash
hashcat -m 0 -a 0 hashes.txt wordlist.txt
```

Performs a standard dictionary attack against MD5 hashes using a single wordlist.

### hashcat -m 1000 -a 0 ntlm.txt wordlist.txt

```bash
hashcat -m 1000 -a 0 ntlm.txt wordlist.txt
```

Performs a standard dictionary attack against NTLM hashes typically found in Windows environments.

### hashcat -m 1800 -a 0 shadow.txt rockyou.txt

```bash
hashcat -m 1800 -a 0 shadow.txt rockyou.txt
```

Attacks sha512crypt hashes often found in Linux /etc/shadow files.

### hashcat -m 0 hashes.txt list1.txt list2.txt

```bash
hashcat -m 0 hashes.txt list1.txt list2.txt
```

Attacks MD5 hashes using multiple wordlists loaded sequentially.


## Rule Based Attack

### hashcat -m 0 -a 0 -r rules/best64.rule hashes.txt wordlist.txt

```bash
hashcat -m 0 -a 0 -r rules/best64.rule hashes.txt wordlist.txt
```

Applies the popular 'best64' mutation rules to the wordlist candidates.

### hashcat -m 0 -r rules/dive.rule hashes.txt wordlist.txt

```bash
hashcat -m 0 -r rules/dive.rule hashes.txt wordlist.txt
```

Uses the extensive 'dive' rule set for deeper mutation coverage.

### hashcat -m 0 -j k$ hashes.txt wordlist.txt

```bash
hashcat -m 0 -j k$ hashes.txt wordlist.txt
```

Applies a single dynamic rule to append a dollar sign to every word.

### hashcat -m 0 -r rule1.rule -r rule2.rule hashes.txt wordlist.txt

```bash
hashcat -m 0 -r rule1.rule -r rule2.rule hashes.txt wordlist.txt
```

Stacks multiple rule files to apply complex mutations in sequence.

### hashcat -m 0 -g 10000 hashes.txt wordlist.txt

```bash
hashcat -m 0 -g 10000 hashes.txt wordlist.txt
```

Generates 10,000 random rules to apply to the dictionary.


## Mask Attack

### hashcat -m 0 -a 3 hashes.txt ?a?a?a?a

```bash
hashcat -m 0 -a 3 hashes.txt ?a?a?a?a
```

Brute forces MD5 hashes trying all combinations of 4 printable characters.

### hashcat -m 0 -a 3 hashes.txt ?d?d?d?d?d?d

```bash
hashcat -m 0 -a 3 hashes.txt ?d?d?d?d?d?d
```

Brute forces MD5 hashes looking specifically for 6-digit PIN codes.

### hashcat -m 0 -a 3 hashes.txt ?u?l?l?l?d?d?d?d

```bash
hashcat -m 0 -a 3 hashes.txt ?u?l?l?l?d?d?d?d
```

Uses a structured mask for an Uppercase, 3 Lowercase, and 4 Digits pattern.

### hashcat -m 0 -a 3 -i hashes.txt ?a?a?a?a?a

```bash
hashcat -m 0 -a 3 -i hashes.txt ?a?a?a?a?a
```

Enables increment mode to try lengths 1 through 5 sequentially.

### hashcat -m 0 -a 3 -i --increment-min=4 --increment-max=8 hashes.txt ?a?a?a?a?a?a?a?a

```bash
hashcat -m 0 -a 3 -i --increment-min=4 --increment-max=8 hashes.txt ?a?a?a?a?a?a?a?a
```

Brute forces all printable characters restricting length between 4 and 8.


## Custom Charsets

### hashcat -m 0 -a 3 -1 ?l?d hashes.txt ?1?1?1?1

```bash
hashcat -m 0 -a 3 -1 ?l?d hashes.txt ?1?1?1?1
```

Defines custom charset 1 as lowercase and digits, then uses it for a 4-char mask.

### hashcat -m 0 -a 3 -1 ?l?u -2 ?d?s hashes.txt ?1?1?1?2?2?2

```bash
hashcat -m 0 -a 3 -1 ?l?u -2 ?d?s hashes.txt ?1?1?1?2?2?2
```

Uses two separate custom charsets to define a specific password complexity pattern.

### hashcat -m 0 -a 3 --custom-charset1=?l?d hashes.txt ?1?1?1?1?1

```bash
hashcat -m 0 -a 3 --custom-charset1=?l?d hashes.txt ?1?1?1?1?1
```

Explicitly defines a custom charset using the long-form flag.


## Hybrid Attack

### hashcat -m 0 -a 6 hashes.txt wordlist.txt ?d?d?d?d

```bash
hashcat -m 0 -a 6 hashes.txt wordlist.txt ?d?d?d?d
```

Appends a 4-digit mask to the end of every word in the wordlist.

### hashcat -m 0 -a 7 hashes.txt ?d?d?d?d wordlist.txt

```bash
hashcat -m 0 -a 7 hashes.txt ?d?d?d?d wordlist.txt
```

Prepends a 4-digit mask to the beginning of every word in the wordlist.

### hashcat -m 0 -a 6 -j S wordlist.txt ?d?d

```bash
hashcat -m 0 -a 6 -j S wordlist.txt ?d?d
```

Uses a rule to capitalize words before appending a 2-digit mask.


## Combinator Attack

### hashcat -m 0 -a 1 hashes.txt left.txt right.txt

```bash
hashcat -m 0 -a 1 hashes.txt left.txt right.txt
```

Combines words from two lists to form candidates like 'word1word2'.

### hashcat -m 0 -a 1 -j $- -k $! hashes.txt first.txt second.txt

```bash
hashcat -m 0 -a 1 -j $- -k $! hashes.txt first.txt second.txt
```

Injects a hyphen between the words and an exclamation mark at the end.


## Session Management

### hashcat -m 0 hashes.txt list.txt --session=project1

```bash
hashcat -m 0 hashes.txt list.txt --session=project1
```

Starts a cracking session with a specific name for easier resumption.

### hashcat --session=project1 --restore

```bash
hashcat --session=project1 --restore
```

Resumes a previously interrupted session named 'project1' from the restore point.


## Performance Tuning

### hashcat -m 0 -w 3 hashes.txt list.txt

```bash
hashcat -m 0 -w 3 hashes.txt list.txt
```

Sets the workload profile to 'High' to prioritize cracking speed over desktop responsiveness.

### hashcat -m 0 -w 4 hashes.txt list.txt

```bash
hashcat -m 0 -w 4 hashes.txt list.txt
```

Sets workload profile to 'Nightmare' for maximum GPU utilization on dedicated rigs.

### hashcat -m 0 -O hashes.txt list.txt

```bash
hashcat -m 0 -O hashes.txt list.txt
```

Enables optimized kernels which limits password length but increases speed.

### hashcat -m 0 -S hashes.txt list.txt

```bash
hashcat -m 0 -S hashes.txt list.txt
```

Enables the slow candidate generator for specific low-performance scenarios.


## Device Control

### hashcat -I

```bash
hashcat -I
```

Displays detailed information about installed OpenCL/CUDA devices and drivers.

### hashcat -d 1 -m 0 hashes.txt list.txt

```bash
hashcat -d 1 -m 0 hashes.txt list.txt
```

Forces Hashcat to use only the device with ID 1.

### hashcat -D 2 -m 0 hashes.txt list.txt

```bash
hashcat -D 2 -m 0 hashes.txt list.txt
```

Forces the backend type to use GPU devices only.

### hashcat -m 0 --gpu-temp-abort=90 hashes.txt list.txt

```bash
hashcat -m 0 --gpu-temp-abort=90 hashes.txt list.txt
```

Automatically aborts the attack if the GPU temperature reaches 90 degrees Celsius.

### hashcat -m 0 --gpu-temp-retain=80 hashes.txt list.txt

```bash
hashcat -m 0 --gpu-temp-retain=80 hashes.txt list.txt
```

Adjusts fan speeds dynamically to try and maintain a temperature of 80 degrees.


## Status & Monitoring

### hashcat -m 0 --status hashes.txt list.txt

```bash
hashcat -m 0 --status hashes.txt list.txt
```

Enables the automatic status screen update during the attack.

### hashcat -m 0 --status-timer=30 hashes.txt list.txt

```bash
hashcat -m 0 --status-timer=30 hashes.txt list.txt
```

Sets the interval for the status screen update to every 30 seconds.


## Output Management

### hashcat -m 0 -o cracked.txt hashes.txt list.txt

```bash
hashcat -m 0 -o cracked.txt hashes.txt list.txt
```

Writes recovered passwords to a specific output file.

### hashcat -m 0 --outfile-format=2 -o cracked.txt hashes.txt list.txt

```bash
hashcat -m 0 --outfile-format=2 -o cracked.txt hashes.txt list.txt
```

Writes output in format 'plain_password' only, omitting the hash.

### hashcat -m 0 --outfile-format=3 -o cracked.txt hashes.txt list.txt

```bash
hashcat -m 0 --outfile-format=3 -o cracked.txt hashes.txt list.txt
```

Writes output in format 'hash:plain_password' including hex data.


## Potfile Management

### hashcat -m 0 --show hashes.txt

```bash
hashcat -m 0 --show hashes.txt
```

Reads the potfile to display only the hashes that have already been cracked.

### hashcat -m 0 --left hashes.txt

```bash
hashcat -m 0 --left hashes.txt
```

Reads the potfile to display only the hashes that have NOT yet been cracked.

### hashcat -m 0 --potfile-disable hashes.txt list.txt

```bash
hashcat -m 0 --potfile-disable hashes.txt list.txt
```

Prevents Hashcat from writing recovered credentials to the potfile.


## Hash Parsing

### hashcat -m 0 --username hashes.txt list.txt

```bash
hashcat -m 0 --username hashes.txt list.txt
```

Ignores the username field in 'user:hash' formatted input files.

### hashcat -m 0 --separator=, hashes.csv list.txt

```bash
hashcat -m 0 --separator=, hashes.csv list.txt
```

Specifies a comma as the separator for input files.

### hashcat -m 0 --remove hashes.txt list.txt

```bash
hashcat -m 0 --remove hashes.txt list.txt
```

Removes hashes from the input file immediately as they are cracked.


## Advanced Hash Types

### hashcat -m 2500 capture.hccapx list.txt

```bash
hashcat -m 2500 capture.hccapx list.txt
```

Attacks WPA/WPA2 wireless keys using the legacy hccapx format.

### hashcat -m 22000 capture.hc22000 list.txt

```bash
hashcat -m 22000 capture.hc22000 list.txt
```

Attacks WPA-PBKDF2-PMKID+EAPOL (modern WiFi) using the hc22000 format.

### hashcat -m 5600 ntlmv2.txt list.txt

```bash
hashcat -m 5600 ntlmv2.txt list.txt
```

Attacks NetNTLMv2 hashes captured via Responder or similar tools.

### hashcat -m 13100 krb5tgs.txt list.txt

```bash
hashcat -m 13100 krb5tgs.txt list.txt
```

Attacks Kerberos 5 TGS-REP etype 23 hashes (Roasting).

### hashcat -m 18200 asrep.txt list.txt

```bash
hashcat -m 18200 asrep.txt list.txt
```

Attacks Kerberos 5 AS-REP etype 23 hashes.

### hashcat -m 3200 bcrypt.txt list.txt

```bash
hashcat -m 3200 bcrypt.txt list.txt
```

Attacks Blowfish/bcrypt hashes ($2a$, $2y$, etc.).

### hashcat -m 15700 eth_wallet.txt list.txt

```bash
hashcat -m 15700 eth_wallet.txt list.txt
```

Attacks Ethereum wallet SCRYPT based password protection.

### hashcat -m 11300 btc_wallet.txt list.txt

```bash
hashcat -m 11300 btc_wallet.txt list.txt
```

Attacks Bitcoin/Litecoin wallet.dat files.

### hashcat -m 12500 pdf.txt list.txt

```bash
hashcat -m 12500 pdf.txt list.txt
```

Attacks PDF 1.7 Level 3 password protection.

### hashcat -m 13600 winzip.txt list.txt

```bash
hashcat -m 13600 winzip.txt list.txt
```

Attacks WinZip AES-256 encrypted archive headers.

### hashcat -m 6211 truecrypt.txt list.txt

```bash
hashcat -m 6211 truecrypt.txt list.txt
```

Attacks TrueCrypt volumes using RIPEMD160 + AES boot mode.

### hashcat -m 13400 keepass.txt list.txt

```bash
hashcat -m 13400 keepass.txt list.txt
```

Attacks KeePass 1 and KeePass 2 password manager database files.

### hashcat -m 16800 pmkid.txt list.txt

```bash
hashcat -m 16800 pmkid.txt list.txt
```

Attacks WPA-PMKID (PMKID-only) captures without full handshakes.


## Special Features

### hashcat -m 0 --hex-salt hashes.txt list.txt

```bash
hashcat -m 0 --hex-salt hashes.txt list.txt
```

Assumes the salt within the hash file is given in hexadecimal format.

### hashcat -m 0 --hex-charset -1 414243 hashes.txt ?1?1?1

```bash
hashcat -m 0 --hex-charset -1 414243 hashes.txt ?1?1?1
```

Allows defining the custom charset using hexadecimal bytes.

### hashcat -m 0 --keep-guessing hashes.txt list.txt

```bash
hashcat -m 0 --keep-guessing hashes.txt list.txt
```

Continues attacking a hash even after a collision is found (useful for collisions/salts).

### hashcat -m 0 --loopback hashes.txt --potfile-path=my.pot

```bash
hashcat -m 0 --loopback hashes.txt --potfile-path=my.pot
```

Uses the passwords found in the potfile as the wordlist for a new attack.

### hashcat -m 0 --markov-classic hashes.txt

```bash
hashcat -m 0 --markov-classic hashes.txt
```

Enables the classic Markov-chain based candidate generator.

### hashcat -m 0 --markov-disable hashes.txt ?a?a?a?a

```bash
hashcat -m 0 --markov-disable hashes.txt ?a?a?a?a
```

Disables the internal Markov statistics usually applied to masks.


## Advanced Automation

### hashcat -m 0 --self-test-disable hashes.txt list.txt

```bash
hashcat -m 0 --self-test-disable hashes.txt list.txt
```

Disables the startup self-test (risky, but useful for unstable/embedded devices).

### hashcat --stdout -r rules/best64.rule wordlist.txt

```bash
hashcat --stdout -r rules/best64.rule wordlist.txt
```

Prints the candidates generated by rules and wordlist to stdout without cracking.

### hashcat --stdout -a 3 ?d?d?d?d

```bash
hashcat --stdout -a 3 ?d?d?d?d
```

Generates a keyspace of candidates to stdout for piping into other tools.

### hashcat -m 0 -a 3 --skip=100000 --limit=50000 hashes.txt ?a?a?a?a

```bash
hashcat -m 0 -a 3 --skip=100000 --limit=50000 hashes.txt ?a?a?a?a
```

Skips the first 100k candidates and runs only the next 50k (distributed cracking).


## Distribution

### hashcat -m 0 -s 1000 -l 2000 hashes.txt list.txt

```bash
hashcat -m 0 -s 1000 -l 2000 hashes.txt list.txt
```

Shorthand flags for skip and limit to control workload chunks.


## Audit & Compliance

### hashcat -m 0 -a 3 --increment --increment-min=1 --increment-max=7 hashes.txt ?a?a?a?a?a?a?a

```bash
hashcat -m 0 -a 3 --increment --increment-min=1 --increment-max=7 hashes.txt ?a?a?a?a?a?a?a
```

Audits for passwords strictly shorter than 8 characters.

### hashcat -m 0 -a 3 hashes.txt ?d?d?d?d?d?d?d?d?d?d

```bash
hashcat -m 0 -a 3 hashes.txt ?d?d?d?d?d?d?d?d?d?d
```

Audits for 10-digit number usage (phone numbers/IDs).

### hashcat -m 0 -a 0 wordlist.txt hashes.txt --show

```bash
hashcat -m 0 -a 0 wordlist.txt hashes.txt --show
```

Validates which current dictionary words match the hash list.


## Log Management

### hashcat -m 0 --logfile=audit_session.log hashes.txt list.txt

```bash
hashcat -m 0 --logfile=audit_session.log hashes.txt list.txt
```

Redirects all session output to a specific log file for reporting.

### hashcat -m 0 --logfile-disable hashes.txt list.txt

```bash
hashcat -m 0 --logfile-disable hashes.txt list.txt
```

Disables logging entirely for stealth or read-only filesystem operations.


## Rule Generation

### hashcat -m 0 --generate-rules=5000 hashes.txt list.txt

```bash
hashcat -m 0 --generate-rules=5000 hashes.txt list.txt
```

Automatically generates 5000 random rules to find new patterns.

### hashcat -m 0 --generate-rules-func-min=2 --generate-rules-func-max=5 hashes.txt list.txt

```bash
hashcat -m 0 --generate-rules-func-min=2 --generate-rules-func-max=5 hashes.txt list.txt
```

Constrains generated rules to have between 2 and 5 functions per rule.


## Output Formatting

### hashcat -m 0 --outfile-check-timer=60 hashes.txt list.txt

```bash
hashcat -m 0 --outfile-check-timer=60 hashes.txt list.txt
```

Checks the outfile every 60 seconds to see if it was modified externally.


## Input Handling

### hashcat -m 0 --encoding-from=utf16le --encoding-to=utf8 hashes.txt list.txt

```bash
hashcat -m 0 --encoding-from=utf16le --encoding-to=utf8 hashes.txt list.txt
```

Converts input wordlist from UTF-16LE to UTF-8 internal representation.


## Algorithm Specific

### hashcat -m 2500 --nonce-error-corrections=10 capture.hccapx list.txt

```bash
hashcat -m 2500 --nonce-error-corrections=10 capture.hccapx list.txt
```

Increases WPA nonce error correction range for noisy captures.

### hashcat -m 500 -O hashes.txt list.txt

```bash
hashcat -m 500 -O hashes.txt list.txt
```

Attacks md5crypt (Unix) using optimized kernels.

### hashcat -m 7400 sha256crypt.txt list.txt

```bash
hashcat -m 7400 sha256crypt.txt list.txt
```

Attacks sha256crypt hashes (Round 5).

### hashcat -m 100 hashes.txt list.txt

```bash
hashcat -m 100 hashes.txt list.txt
```

Attacks standard SHA1 hashes.

### hashcat -m 1400 hashes.txt list.txt

```bash
hashcat -m 1400 hashes.txt list.txt
```

Attacks standard SHA256 hashes.

### hashcat -m 1700 hashes.txt list.txt

```bash
hashcat -m 1700 hashes.txt list.txt
```

Attacks standard SHA512 hashes.


## Workload Profiles

### hashcat -w 1 -m 0 hashes.txt list.txt

```bash
hashcat -w 1 -m 0 hashes.txt list.txt
```

Sets workload to 'Low' to keep the computer usable during cracking.


## Hybrid Custom

### hashcat -a 6 -m 0 hashes.txt list.txt -1 ?d?s ?1?1

```bash
hashcat -a 6 -m 0 hashes.txt list.txt -1 ?d?s ?1?1
```

Hybrid attack appending 2 characters that are either digits or symbols.


## Mask Incremental

### hashcat -a 3 --increment-min 1 --increment-max 4 hashes.txt ?d?d?d?d

```bash
hashcat -a 3 --increment-min 1 --increment-max 4 hashes.txt ?d?d?d?d
```

Brute forces numeric PINs from length 1 up to 4.


## Enterprise Audit

### hashcat -m 5500 netntlmv1.txt list.txt

```bash
hashcat -m 5500 netntlmv1.txt list.txt
```

Attacks legacy NetNTLMv1 hashes.

### hashcat -m 2100 mscash2.txt list.txt

```bash
hashcat -m 2100 mscash2.txt list.txt
```

Attacks Domain Cached Credentials 2 (DCC2/MSCash2).


## Keyspace Info

### hashcat -a 3 --keyspace ?l?l?l?l

```bash
hashcat -a 3 --keyspace ?l?l?l?l
```

Calculates and displays the total number of combinations for a given mask.


## Wordlist Management

### hashcat --stdout -r rules/best64.rule list.txt > mutated_list.txt

```bash
hashcat --stdout -r rules/best64.rule list.txt > mutated_list.txt
```

Creates a pre-computed wordlist by applying rules and saving the output.


## Clean Up

### hashcat --session=project1 --cleanup-rules

```bash
hashcat --session=project1 --cleanup-rules
```

Removes temporary rule files generated during a session.


## Hardware Info

### hashcat --cpu-affinity=1,2 -m 0 hashes.txt list.txt

```bash
hashcat --cpu-affinity=1,2 -m 0 hashes.txt list.txt
```

Locks Hashcat processes to specific CPU cores.


## Advanced Config

### hashcat --backend-ignore-cuda -m 0 hashes.txt list.txt

```bash
hashcat --backend-ignore-cuda -m 0 hashes.txt list.txt
```

Forces Hashcat to ignore CUDA devices and use OpenCL only.

### hashcat --spin-damp=50 -m 0 hashes.txt list.txt

```bash
hashcat --spin-damp=50 -m 0 hashes.txt list.txt
```

Adjusts the CPU spin dampening workaround for specific driver loads.

## Related tools

- [John the Ripper](https://terminal.rokibulroni.com/tool/credentials/john)
- [Crunch](https://terminal.rokibulroni.com/tool/credentials/crunch)
- [CeWL](https://terminal.rokibulroni.com/tool/credentials/cewl)
