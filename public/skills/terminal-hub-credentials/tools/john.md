# John the Ripper

> A versatile password cracker (use the “jumbo” build) with automatic hash detection and *2john helpers for files, archives and keys.

- Category: Credentials
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/credentials/john
- Homepage: https://www.openwall.com/john/
- Documentation: https://www.openwall.com/john/doc/
- Tags: password cracking, hashes, CPU

## Install

- apt: `sudo apt install john`
- brew: `brew install john-jumbo`
- docker: `docker run -it --rm openwall/john`

## Basic Usage

### john hashes.txt

```bash
john hashes.txt
```

Runs John in default mode with automatic format detection and Single crack mode.

### john --show hashes.txt

```bash
john --show hashes.txt
```

Displays passwords that have already been cracked and stored in the pot file.


## Installation & Test

### john --test

```bash
john --test
```

Benchmarks the system performance for all supported algorithms to verify installation.


## Format Identification

### john --list=formats

```bash
john --list=formats
```

Lists all hash formats supported by the installed version of John the Ripper.


## Specific Format

### john --format=NAME hashes.txt

```bash
john --format=NAME hashes.txt
```

Example:

```bash
john --format=Raw-MD5 hashes.txt
```

Forces John to use a specific hash format avoiding auto-detection errors.


## Dictionary Attack

### john --wordlist=FILE hashes.txt

```bash
john --wordlist=FILE hashes.txt
```

Example:

```bash
john --wordlist=rockyou.txt hashes.txt
```

Performs a standard dictionary attack using the provided wordlist file.

### john --wordlist=FILE --format=NAME hashes.txt

```bash
john --wordlist=FILE --format=NAME hashes.txt
```

Example:

```bash
john --wordlist=rockyou.txt --format=sha512crypt hashes.txt
```

Combines a wordlist attack with a specific format specification for efficiency.


## Standard Input

### cat words.txt | john --stdin hashes.txt

```bash
cat words.txt | john --stdin hashes.txt
```

Example:

```bash
cat custom_words.txt | john --stdin hashes.txt
```

Reads candidate passwords from standard input instead of a file.


## Rule Based Attack

### john --wordlist=FILE --rules hashes.txt

```bash
john --wordlist=FILE --rules hashes.txt
```

Example:

```bash
john --wordlist=rockyou.txt --rules hashes.txt
```

Applies the default set of rules from john.conf to mutate words in the wordlist.

### john --rules:Jumbo --wordlist=FILE hashes.txt

```bash
john --rules:Jumbo --wordlist=FILE hashes.txt
```

Example:

```bash
john --rules:Jumbo --wordlist=rockyou.txt hashes.txt
```

Uses the extensive Jumbo rule set for deeper mutation and variation coverage.


## Single Crack Mode

### john --single hashes.txt

```bash
john --single hashes.txt
```

Uses login names and GECOS information to guess passwords based on user data.


## Incremental Mode

### john --incremental hashes.txt

```bash
john --incremental hashes.txt
```

Starts a powerful brute-force mode trying all possible character combinations.

### john --incremental:Alpha hashes.txt

```bash
john --incremental:Alpha hashes.txt
```

Restricts incremental brute-force to alphabetic characters only.

### john --incremental:Digits hashes.txt

```bash
john --incremental:Digits hashes.txt
```

Restricts incremental brute-force to numeric digits only.


## Mask Attack

### john --mask=MASK hashes.txt

```bash
john --mask=MASK hashes.txt
```

Example:

```bash
john --mask=?a?a?a?a?a?a hashes.txt
```

Attacks using a specific pattern where ?a represents all printable characters.

### john --mask=?u?l?l?l?d?d hashes.txt

```bash
john --mask=?u?l?l?l?d?d hashes.txt
```

Targets patterns like Upper-Lower-Lower-Lower-Digit-Digit (e.g., Pass12).


## Hybrid Attack

### john --wordlist=FILE --mask=MASK hashes.txt

```bash
john --wordlist=FILE --mask=MASK hashes.txt
```

Example:

```bash
john --wordlist=rockyou.txt --mask=?w?d?d hashes.txt
```

Appends a mask to each word in the wordlist (e.g., password12).


## User Targeting

### john --users=LIST hashes.txt

```bash
john --users=LIST hashes.txt
```

Example:

```bash
john --users=admin,root hashes.txt
```

Restricts the attack to only the specified usernames within the hash file.

### john --users=!LIST hashes.txt

```bash
john --users=!LIST hashes.txt
```

Example:

```bash
john --users=!guest,support hashes.txt
```

Excludes specific usernames from the attack scope.


## Shell Filtering

### john --shells=LIST hashes.txt

```bash
john --shells=LIST hashes.txt
```

Example:

```bash
john --shells=/bin/bash,/bin/sh hashes.txt
```

Targets accounts that use specific valid login shells.


## Session Management

### john --session=NAME hashes.txt

```bash
john --session=NAME hashes.txt
```

Example:

```bash
john --session=job1 hashes.txt
```

Assigns a specific name to the cracking session for easier management.

### john --restore=NAME

```bash
john --restore=NAME
```

Example:

```bash
john --restore=job1
```

Resumes a previously interrupted cracking session from the exact stopping point.


## Status Monitoring

### john --status=NAME

```bash
john --status=NAME
```

Example:

```bash
john --status=job1
```

Prints the current status and progress of a running or paused session.


## Pot File Management

### john --pot=FILE hashes.txt

```bash
john --pot=FILE hashes.txt
```

Example:

```bash
john --pot=secure.pot hashes.txt
```

Uses a custom pot file path instead of the default ~/.john/john.pot.


## Loopback Attack

### john --loopback hashes.txt

```bash
john --loopback hashes.txt
```

Uses previously cracked passwords in the pot file as a dictionary for new hashes.


## Configuration

### john --config=FILE hashes.txt

```bash
john --config=FILE hashes.txt
```

Example:

```bash
john --config=my_john.conf hashes.txt
```

Loads settings and rules from a custom configuration file.


## Performance Tuning

### john --fork=N hashes.txt

```bash
john --fork=N hashes.txt
```

Example:

```bash
john --fork=4 hashes.txt
```

Splits the workload across N CPU cores processes for parallel cracking.

### john --max-run-time=N hashes.txt

```bash
john --max-run-time=N hashes.txt
```

Example:

```bash
john --max-run-time=3600 hashes.txt
```

Gracefully stops the attack after N seconds (useful for time-boxed audits).


## Advanced Rules

### john --rules:Wordlist --wordlist=FILE hashes.txt

```bash
john --rules:Wordlist --wordlist=FILE hashes.txt
```

Example:

```bash
john --rules:Wordlist --wordlist=rockyou.txt hashes.txt
```

Uses the complex 'Wordlist' rule section defined in john.conf.


## External Mode

### john --external=MODE hashes.txt

```bash
john --external=MODE hashes.txt
```

Example:

```bash
john --external=Keyboard hashes.txt
```

Uses an external C-like function defined in the config (e.g., keyboard walk).

### john --external=Repeats hashes.txt

```bash
john --external=Repeats hashes.txt
```

Generates candidates with repeating patterns defined in external config functions.


## Markov Mode

### john --markov=MODE hashes.txt

```bash
john --markov=MODE hashes.txt
```

Example:

```bash
john --markov=200 hashes.txt
```

Uses Markov chains to generate candidates based on statistical character frequency.


## Custom Charset

### john --make-charset=FILE

```bash
john --make-charset=FILE
```

Example:

```bash
john --make-charset=custom.chr
```

Generates a custom charset file based on current pot file statistics.


## Custom Charset Usage

### john --incremental=MODE --min-length=N --max-length=N hashes.txt

```bash
john --incremental=MODE --min-length=N --max-length=N hashes.txt
```

Example:

```bash
john --incremental=Alpha --min-length=8 --max-length=8 hashes.txt
```

Forces incremental mode to focus strictly on a specific password length range.


## Candidate Generation

### john --stdout --wordlist=FILE --rules

```bash
john --stdout --wordlist=FILE --rules
```

Example:

```bash
john --stdout --wordlist=rockyou.txt --rules
```

Outputs generated password candidates to stdout without cracking (for piping).

### john --stdout --incremental

```bash
john --stdout --incremental
```

Example:

```bash
john --stdout --incremental:Alpha
```

Outputs brute-force candidates to stdout to pipe into other tools like Hashcat.


## Output Formatting

### john --show --format=NAME --users=LIST hashes.txt

```bash
john --show --format=NAME --users=LIST hashes.txt
```

Example:

```bash
john --show --format=Raw-MD5 --users=admin hashes.txt
```

Shows cracked credentials filtered by format and specific username.


## Hash Type Validation

### john --test --format=NAME

```bash
john --test --format=NAME
```

Example:

```bash
john --test --format=bcrypt
```

Benchmarks a specific algorithm to check speed and stability on the host.


## Prince Integration

### john --prince=FILE hashes.txt

```bash
john --prince=FILE hashes.txt
```

Example:

```bash
john --prince=words.txt hashes.txt
```

Uses the PRINCE algorithm (PRobability INfinite Chained Elements) for candidate generation.


## Memory Tuning

### john --save-memory=LEVEL hashes.txt

```bash
john --save-memory=LEVEL hashes.txt
```

Example:

```bash
john --save-memory=1 hashes.txt
```

Adjusts memory usage logic (1-3) for memory-constrained environments.


## Regex Mode

### john --regex=PATTERN hashes.txt

```bash
john --regex=PATTERN hashes.txt
```

Example:

```bash
john --regex='[a-z]{5}[0-9]{2}' hashes.txt
```

Generates candidates based on a specific regular expression pattern.


## Salt Management

### john --salts=N hashes.txt

```bash
john --salts=N hashes.txt
```

Example:

```bash
john --salts=10 hashes.txt
```

Processes only if the number of salts meets the specified threshold.


## Cost Management

### john --costs=MIN:MAX hashes.txt

```bash
john --costs=MIN:MAX hashes.txt
```

Example:

```bash
john --costs=10:12 hashes.txt
```

Filters hashes based on cost factors (e.g., bcrypt rounds) to skip slow hashes.


## Blue Team Audit

### john --show --left hashes.txt

```bash
john --show --left hashes.txt
```

Displays only the uncracked hashes remaining in the file.


## Red Team Analysis

### john --list=rules

```bash
john --list=rules
```

Lists all rule sections defined in the configuration for auditing attack logic.

### john --list=opencl-devices

```bash
john --list=opencl-devices
```

Enumerates available OpenCL devices (GPUs) for hardware acceleration.


## Automation

### john --progress-every=N hashes.txt

```bash
john --progress-every=N hashes.txt
```

Example:

```bash
john --progress-every=10 hashes.txt
```

Emits status lines every N seconds for automated log parsing.

### john --no-log hashes.txt

```bash
john --no-log hashes.txt
```

Disables logging to the .log file to reduce I/O or artifacts.


## Mask Hybrid

### john --mask=?d?d?w?d?d --wordlist=FILE hashes.txt

```bash
john --mask=?d?d?w?d?d --wordlist=FILE hashes.txt
```

Example:

```bash
john --mask=?d?d?w?d?d --wordlist=words.txt hashes.txt
```

Injects the dictionary word into the middle of the mask pattern.


## Advanced Dictionary

### john --wordlist=FILE --mem-file-size=N hashes.txt

```bash
john --wordlist=FILE --mem-file-size=N hashes.txt
```

Example:

```bash
john --wordlist=huge.txt --mem-file-size=10000000 hashes.txt
```

Controls buffer size for loading wordlists to optimize large file handling.


## Incident Response

### john --show --format=NAME hashes.txt > report.txt

```bash
john --show --format=NAME hashes.txt > report.txt
```

Example:

```bash
john --show --format=nt hashes.txt > cracked_ntlm.txt
```

Exports cracked NTLM hashes to a file for lateral movement analysis.


## Rule Debugging

### john --rules --wordlist=FILE --stdout | head

```bash
john --rules --wordlist=FILE --stdout | head
```

Example:

```bash
john --rules --wordlist=pass.txt --stdout | head -n 20
```

Previews the first 20 outputs of a rule set to verify mutation logic.


## Dynamic Compilation

### john --list=build-options

```bash
john --list=build-options
```

Checks how the binary was compiled (e.g., SIMD, OpenMP) for optimization.


## Custom Mask Config

### john --mask=MASK --min-length=N hashes.txt

```bash
john --mask=MASK --min-length=N hashes.txt
```

Example:

```bash
john --mask=?l?l?l?l?l?l?l?l --min-length=8 hashes.txt
```

Overrrides config defaults to force an exact mask length.


## Environment Safety

### john --restore-timer=N hashes.txt

```bash
john --restore-timer=N hashes.txt
```

Example:

```bash
john --restore-timer=60 hashes.txt
```

Sets the interval for writing the restore file to prevent data loss on crash.


## Format Filtering

### john --list=formats --format=dynamic

```bash
john --list=formats --format=dynamic
```

Lists only generic dynamic formats (useful for custom hash construction).


## Hardware Acceleration

### john --format=NAME --dev=N hashes.txt

```bash
john --format=NAME --dev=N hashes.txt
```

Example:

```bash
john --format=descrypt-opencl --dev=1 hashes.txt
```

Targets a specific OpenCL device ID for cracking.


## Dupe Suppression

### john --wordlist=FILE --dupe-suppression hashes.txt

```bash
john --wordlist=FILE --dupe-suppression hashes.txt
```

Example:

```bash
john --wordlist=messy.txt --dupe-suppression hashes.txt
```

Suppresses duplicate candidates generated from an unsorted wordlist.


## Pot Sync

### john --pot=new.pot --loopback=old.pot hashes.txt

```bash
john --pot=new.pot --loopback=old.pot hashes.txt
```

Example:

```bash
john --pot=session.pot --loopback=master.pot hashes.txt
```

Feeds cracks from a master pot file into a specific session pot file.


## Safe Termination

### q

```bash
q
```

Example:

```bash
Press 'q' during execution
```

Safely aborts the current session and saves the restore point state.

## Related tools

- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
- [Crunch](https://terminal.rokibulroni.com/tool/credentials/crunch)
