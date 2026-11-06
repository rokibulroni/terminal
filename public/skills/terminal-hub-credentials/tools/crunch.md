# Crunch

> Generates wordlists from character sets and patterns — every combination of a given length, or a precise mask.

- Category: Credentials
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/credentials/crunch
- Homepage: https://sourceforge.net/projects/crunch-wordlist/
- Tags: wordlists, generation

## Install

- apt: `sudo apt install crunch`
- brew: `brew install crunch`

## Basic Wordlist Generation

### crunch 1 1

```bash
crunch 1 1
```

Generates a list of single characters using the default lowercase alphabet.

### crunch 4 4

```bash
crunch 4 4
```

Generates all possible 4-character strings using default lowercase letters.

### crunch 1 3

```bash
crunch 1 3
```

Generates words ranging from length 1 to length 3 using default settings.

### crunch 6 6 0123456789

```bash
crunch 6 6 0123456789
```

Generates all 6-digit numeric combinations.

### crunch 4 4 abcde

```bash
crunch 4 4 abcde
```

Generates 4-character combinations using only the letters a, b, c, d, and e.

### crunch 8 8 0123456789ABCDEF

```bash
crunch 8 8 0123456789ABCDEF
```

Generates 8-character hex strings using uppercase hex characters.


## Character Set Handling

### crunch 4 4 -f /usr/share/crunch/charset.lst numeric

```bash
crunch 4 4 -f /usr/share/crunch/charset.lst numeric
```

Uses the 'numeric' profile from the standard charset.lst file.

### crunch 6 6 -f /usr/share/crunch/charset.lst ualpha

```bash
crunch 6 6 -f /usr/share/crunch/charset.lst ualpha
```

Generates 6-character uppercase words using the charset file.

### crunch 5 5 -f /usr/share/crunch/charset.lst mixalpha

```bash
crunch 5 5 -f /usr/share/crunch/charset.lst mixalpha
```

Generates 5-character mixed-case alphabetic strings.

### crunch 8 8 -f /usr/share/crunch/charset.lst ualpha-numeric

```bash
crunch 8 8 -f /usr/share/crunch/charset.lst ualpha-numeric
```

Generates 8-character alphanumeric strings using uppercase letters and numbers.

### crunch 1 1 -f /usr/share/crunch/charset.lst symbols14

```bash
crunch 1 1 -f /usr/share/crunch/charset.lst symbols14
```

Generates single characters from the symbols14 charset profile.

### crunch 4 4 + + 123 +

```bash
crunch 4 4 + + 123 +
```

Uses placeholders (+) for default charsets while specifying a custom numeric set.


## Pattern Based Generation

### crunch 4 4 -t @@@@

```bash
crunch 4 4 -t @@@@
```

Explicitly uses the @ pattern to generate 4-character lowercase words.

### crunch 4 4 -t ,,,,

```bash
crunch 4 4 -t ,,,,
```

Uses the comma pattern to generate 4-character uppercase words.

### crunch 4 4 -t %%%%

```bash
crunch 4 4 -t %%%%
```

Uses the percent pattern to generate 4-digit numbers.

### crunch 4 4 -t ^^^^

```bash
crunch 4 4 -t ^^^^
```

Uses the caret pattern to generate 4-character symbol strings.

### crunch 6 6 -t pass%%

```bash
crunch 6 6 -t pass%%
```

Generates 6-character words starting with 'pass' followed by 2 numbers.

### crunch 8 8 -t Admin1@@

```bash
crunch 8 8 -t Admin1@@
```

Generates 8-character words starting with 'Admin1' followed by 2 lowercase letters.

### crunch 7 7 -t ,@^%@^%

```bash
crunch 7 7 -t ,@^%@^%
```

Generates a complex 7-char pattern mixing upper, lower, symbol, number, lower, symbol, number.

### crunch 10 10 -t 919%%%%%%%

```bash
crunch 10 10 -t 919%%%%%%%
```

Generates 10-digit phone numbers starting with the area code 919.


## Permutation Generation

### crunch 1 1 -p abc

```bash
crunch 1 1 -p abc
```

Generates all permutations of the characters 'a', 'b', and 'c'.

### crunch 1 1 -p dog cat bird

```bash
crunch 1 1 -p dog cat bird
```

Generates all permutations of the words 'dog', 'cat', and 'bird'.


## Output File Control

### crunch 4 4 -o wordlist.txt

```bash
crunch 4 4 -o wordlist.txt
```

Saves the generated 4-character wordlist to a file named wordlist.txt.

### crunch 4 4 -u

```bash
crunch 4 4 -u
```

Suppresses the printout of the estimated file size and line count.


## Start and End Blocks

### crunch 4 4 -s bbba

```bash
crunch 4 4 -s bbba
```

Starts generation at the string 'bbba' instead of 'aaaa'.

### crunch 4 4 -e aazz

```bash
crunch 4 4 -e aazz
```

Stops generation immediately after the string 'aazz' is created.

### crunch 4 4 -s aaaa -e aazz

```bash
crunch 4 4 -s aaaa -e aazz
```

Generates a subset of the 4-character space from 'aaaa' to 'aazz'.


## Handling Duplicates

### crunch 8 8 -d 2@

```bash
crunch 8 8 -d 2@
```

Limits the output to prevent more than 2 consecutive lowercase characters.

### crunch 6 6 -d 1%

```bash
crunch 6 6 -d 1%
```

Ensures no two consecutive numbers are identical in the output.

### crunch 5 5 -d 2@ -t @@@@@

```bash
crunch 5 5 -d 2@ -t @@@@@
```

Generates 5-letter words with a pattern but restricts consecutive identical letters to 2.


## File Splitting

### crunch 6 6 -o START -b 20mb

```bash
crunch 6 6 -o START -b 20mb
```

Splits output into multiple files, each maximum 20 megabytes.

### crunch 6 6 -o START -c 1000

```bash
crunch 6 6 -o START -c 1000
```

Splits output into multiple files, each containing exactly 1000 lines.

### crunch 10 10 -o part -b 2gb

```bash
crunch 10 10 -o part -b 2gb
```

Generates 10-char words split into 2GB chunks for handling massive lists.


## Compression

### crunch 4 4 -o list.txt.gz -z gzip

```bash
crunch 4 4 -o list.txt.gz -z gzip
```

Compresses the output on-the-fly using gzip.

### crunch 4 4 -o list.txt.bz2 -z bzip2

```bash
crunch 4 4 -o list.txt.bz2 -z bzip2
```

Compresses the output on-the-fly using bzip2 algorithm.

### crunch 4 4 -o list.txt.lzma -z lzma

```bash
crunch 4 4 -o list.txt.lzma -z lzma
```

Compresses the output using LZMA for high compression ratios.

### crunch 4 4 -o list.7z -z 7z

```bash
crunch 4 4 -o list.7z -z 7z
```

Compresses the output using the 7z archive format.


## Literal Handling

### crunch 5 5 -t @@@%% -l @@@@@

```bash
crunch 5 5 -t @@@%% -l @@@@@
```

Treats the @ symbols in the pattern as literal '@' characters, not wildcards.

### crunch 4 4 -t %%,^ -l aaaa

```bash
crunch 4 4 -t %%,^ -l aaaa
```

Forces the pattern characters to be treated as literals using a placeholder string.

### crunch 3 3 -t %%% -l @%^

```bash
crunch 3 3 -t %%% -l @%^
```

Allows generating strings containing actual pattern characters by escaping them.


## Advanced Patterns

### crunch 5 5 -t ddd@@ -p dog cat bird

```bash
crunch 5 5 -t ddd@@ -p dog cat bird
```

Treats 'ddd' as a permutation block and '@@' as standard wildcards.


## Inversion

### crunch 4 4 -i

```bash
crunch 4 4 -i
```

Inverts the output generation order (useful for non-standard iteration).


## Input from File

### crunch 4 4 -q inputs.txt

```bash
crunch 4 4 -q inputs.txt
```

Permutes input read line-by-line from the specified file 'inputs.txt'.


## Resume and Recovery

### crunch 4 4 -r

```bash
crunch 4 4 -r
```

Resumes a previous session based on existing parameters (often requires -s manually).


## Blue Team Policy Testing

### crunch 8 8 -f charset.lst mixalpha-numeric -d 2@

```bash
crunch 8 8 -f charset.lst mixalpha-numeric -d 2@
```

Generates complex passwords but enforces a policy against 3 repeated chars.

### crunch 12 12 -t P@ss%%%%%%%%

```bash
crunch 12 12 -t P@ss%%%%%%%%
```

Tests for weak variations of 'Pass' followed by 8 random numbers.

### crunch 8 8 -t ,@^%,@^%

```bash
crunch 8 8 -t ,@^%,@^%
```

Validates complexity requirements by generating alternating character types.


## Red Team Optimization

### crunch 1 5 -o wordlist.txt -b 500mb -z gzip

```bash
crunch 1 5 -o wordlist.txt -b 500mb -z gzip
```

Generates a massive range split into manageable, compressed 500MB chunks.

### crunch 4 4 -t @@@@ -o /dev/null

```bash
crunch 4 4 -t @@@@ -o /dev/null
```

Benchmarks generation speed by piping output to null.

### crunch 6 6 0123456789 -s 500000

```bash
crunch 6 6 0123456789 -s 500000
```

Optimizes distributed cracking by starting a node at the midpoint of the keyspace.


## Pipeline Integration

### crunch 2 2 | cat

```bash
crunch 2 2 | cat
```

Pipes generated output directly to stdout for another tool to consume.

### crunch 4 4 | aircrack-ng -w - capture.cap

```bash
crunch 4 4 | aircrack-ng -w - capture.cap
```

Pipes passwords directly into Aircrack-ng without saving to disk.

### crunch 8 8 | john --stdin

```bash
crunch 8 8 | john --stdin
```

Feeds generated candidates directly into John the Ripper.


## Complex Patterns

### crunch 10 10 -t 2023@@@@@@

```bash
crunch 10 10 -t 2023@@@@@@
```

Target specific year-based passwords with 6 random trailing characters.

### crunch 9 9 -t admin%%%%

```bash
crunch 9 9 -t admin%%%%
```

Generates 'admin' followed by 4 digits.

### crunch 8 8 -t @@@123@@

```bash
crunch 8 8 -t @@@123@@
```

Injects a static numeric sequence '123' into the middle of random letters.

### crunch 7 7 -t ^^^^^^^

```bash
crunch 7 7 -t ^^^^^^^
```

Generates a high-entropy list of 7-character symbol-only passwords.


## Custom Charset Combination

### crunch 4 4 abc 123 -t @@@%

```bash
crunch 4 4 abc 123 -t @@@%
```

Uses 'abc' for the @ placeholder and '123' for the % placeholder.

### crunch 5 5 abc ABC 123 !@# -t ,@%^,

```bash
crunch 5 5 abc ABC 123 !@# -t ,@%^,
```

Maps four custom character strings to the uppercase, lowercase, numeric, and symbol placeholders.


## Edge Case - Single Char

### crunch 1 1 -t %

```bash
crunch 1 1 -t %
```

Generates single digits 0-9 using the pattern flag.


## Edge Case - Space Handling

### crunch 3 3 "a b"

```bash
crunch 3 3 "a b"
```

Generates combinations including spaces by enclosing the charset in quotes.


## Advanced Resume

### crunch 5 5 -o list.txt -s ccccc

```bash
crunch 5 5 -o list.txt -s ccccc
```

Manually resumes a failed 5-char generation job starting from 'ccccc'.


## Memory Safety

### crunch 12 12 -t @@@@@@@@@@@@ -u | head -n 5

```bash
crunch 12 12 -t @@@@@@@@@@@@ -u | head -n 5
```

Safe preview of a massive generation job without filling disk or memory.


## Permutation with Output

### crunch 0 0 -p red blue green -o colors.txt

```bash
crunch 0 0 -p red blue green -o colors.txt
```

Saves permutations of color words to a file, ignoring min/max arguments.


## Policy Audit - Max Repeated

### crunch 6 6 -d 1@

```bash
crunch 6 6 -d 1@
```

Strict auditing: allows NO consecutive duplicate lowercase letters.


## Policy Audit - Structure

### crunch 8 8 -t ,@%^,@%^

```bash
crunch 8 8 -t ,@%^,@%^
```

Simulates a very strict corporate password policy (UpperLowerNumberSymbol).


## Charset File - Hex

### crunch 32 32 -f charset.lst hex-upper

```bash
crunch 32 32 -f charset.lst hex-upper
```

Generates 32-character uppercase hex keys (MD5 hash equivalent structure).


## Charset File - SQL Injection

### crunch 2 2 -f charset.lst sql

```bash
crunch 2 2 -f charset.lst sql
```

Generates short combinations using common SQL injection characters.


## Output Formatting

### crunch 4 4 -o START.txt

```bash
crunch 4 4 -o START.txt
```

Automatically names the output file using the first word generated (e.g., aaaa.txt).

### crunch 4 4 -o END.txt

```bash
crunch 4 4 -o END.txt
```

Automatically names the output file using the last word generated (e.g., zzzz.txt).

### crunch 4 4 -o START-END.txt

```bash
crunch 4 4 -o START-END.txt
```

Names the file with the range contained within (e.g., aaaa-zzzz.txt).


## Extreme Size Management

### crunch 8 8 -b 1gb -o wordlist

```bash
crunch 8 8 -b 1gb -o wordlist
```

Splits a large 8-char dictionary into manageable 1GB volumes.

### crunch 8 8 -c 1000000 -o wordlist

```bash
crunch 8 8 -c 1000000 -o wordlist
```

Splits a large dictionary into files containing exactly 1 million lines each.


## Complex Logic - Inverted Pattern

### crunch 6 6 -t @@@123 -i

```bash
crunch 6 6 -t @@@123 -i
```

Generates the list with inverted logic for specific iteration checks.


## Complex Logic - Literal Escape

### crunch 1 1 -t @ -l @

```bash
crunch 1 1 -t @ -l @
```

Generates a file containing the literal character '@'.

### crunch 1 1 -t % -l %

```bash
crunch 1 1 -t % -l %
```

Generates a file containing the literal character '%'.

### crunch 1 1 -t ^ -l ^

```bash
crunch 1 1 -t ^ -l ^
```

Generates a file containing the literal character '^'.


## Date Based Generation

### crunch 8 8 -t 199%%%%%

```bash
crunch 8 8 -t 199%%%%%
```

Generates dates or IDs starting with the year 199X.

### crunch 8 8 -t 200%%%%%

```bash
crunch 8 8 -t 200%%%%%
```

Generates dates or IDs starting with the year 200X.


## SSN Simulation

### crunch 11 11 -t %%%-%%-%%%%

```bash
crunch 11 11 -t %%%-%%-%%%%
```

Generates strings matching the US Social Security Number format (synthetic).


## MAC Address Simulation

### crunch 17 17 -t AA:BB:CC:%%:%%:%%

```bash
crunch 17 17 -t AA:BB:CC:%%:%%:%%
```

Generates MAC addresses for a specific OUI (AA:BB:CC).


## Credit Card Simulation

### crunch 16 16 -t 4%%%%%%%%%%%%%%%

```bash
crunch 16 16 -t 4%%%%%%%%%%%%%%%
```

Generates 16-digit numbers starting with 4 (Visa format validation).


## Custom Separators

### crunch 5 5 -t @-@-@

```bash
crunch 5 5 -t @-@-@
```

Generates 5-char patterns with hyphens hardcoded between letters.


## Whitespace Permutations

### crunch 3 3 -p " " . _

```bash
crunch 3 3 -p " " . _
```

Permutes whitespace, dot, and underscore for delimiter fuzzing.


## Unicode/Special Charsets

### crunch 2 2 £$€

```bash
crunch 2 2 £$€
```

Generates combinations of currency symbols.


## Advanced Piping - Hashcat

### crunch 6 6 | hashcat -m 0 hashes.txt

```bash
crunch 6 6 | hashcat -m 0 hashes.txt
```

Pipes candidates directly to Hashcat (legacy method, usually Hashcat manages this).


## Advanced Piping - Scripting

### crunch 4 4 | while read pass; do echo "Testing $pass"; done

```bash
crunch 4 4 | while read pass; do echo "Testing $pass"; done
```

Pipes output into a bash while loop for custom processing logic.


## Distributed Cracking - Part 1

### crunch 5 5 -e mmmmm -o chunk1.txt

```bash
crunch 5 5 -e mmmmm -o chunk1.txt
```

Generates the first half of a 5-letter keyspace.


## Distributed Cracking - Part 2

### crunch 5 5 -s nnnnn -o chunk2.txt

```bash
crunch 5 5 -s nnnnn -o chunk2.txt
```

Generates the second half of a 5-letter keyspace.


## Debug Mode

### crunch 4 4 -d 1@ -u

```bash
crunch 4 4 -d 1@ -u
```

Runs a duplicate-check generation while suppressing size warnings for quick verification.


## Custom Wildcard Mapping

### crunch 4 4 -f charset.lst lalpha -t @@@@

```bash
crunch 4 4 -f charset.lst lalpha -t @@@@
```

Maps the lalpha charset from file to the @ wildcard.


## Multi-Charset Masking

### crunch 4 4 0123 4567 89AB CDEF -t @,%^

```bash
crunch 4 4 0123 4567 89AB CDEF -t @,%^
```

Maps four specific custom strings to the four wildcard types separately.


## Zero Length Permutations

### crunch 0 0 -p admin root user

```bash
crunch 0 0 -p admin root user
```

Uses 0 0 to signify permutation mode without length constraints.


## Rapid Prototyping

### crunch 1 10 -f charset.lst lalpha -o /dev/null -z gzip

```bash
crunch 1 10 -f charset.lst lalpha -o /dev/null -z gzip
```

Tests compression speed without saving the file.


## Combinator Attack Prep

### crunch 4 4 -o left.txt

```bash
crunch 4 4 -o left.txt
```

Creates the left side for a combinator attack.

### crunch 4 4 0123456789 -o right.txt

```bash
crunch 4 4 0123456789 -o right.txt
```

Creates the right side (digits) for a combinator attack.


## Specific Protocol Fuzzing

### crunch 8 8 -t HTTP/%.%

```bash
crunch 8 8 -t HTTP/%.%
```

Generates strings looking like HTTP versions for fuzzing.


## Environment Variable Injection

### crunch 6 6 -t $USER%%

```bash
crunch 6 6 -t $USER%%
```

Generates strings containing the literal text '$USER' followed by digits.


## Massive Numeric Keypad

### crunch 6 6 0123456789 -o pins.txt

```bash
crunch 6 6 0123456789 -o pins.txt
```

Generates a complete 6-digit PIN code wordlist.


## The Ultimate Combined Command

### crunch 8 8 -f charset.lst mixalpha-numeric -t @@@@@%%% -b 10mb -o WORDLIST -z gzip

```bash
crunch 8 8 -f charset.lst mixalpha-numeric -t @@@@@%%% -b 10mb -o WORDLIST -z gzip
```

Combines charset files, patterns, splitting, dynamic naming, and compression in one command.

## Related tools

- [CeWL](https://terminal.rokibulroni.com/tool/credentials/cewl)
- [RSMangler](https://terminal.rokibulroni.com/tool/credentials/rsmangler)
- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
