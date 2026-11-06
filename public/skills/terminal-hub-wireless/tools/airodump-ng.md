# airodump-ng

> Captures raw 802.11 frames and lists nearby access points and clients — the first step for handshake capture.

- Category: Wireless
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/wireless/airodump-ng
- Homepage: https://www.aircrack-ng.org
- Documentation: https://www.aircrack-ng.org/doku.php?id=airodump-ng
- Tags: Wi-Fi, capture, handshakes

## Install

- apt: `sudo apt install aircrack-ng`

## Basic Wireless Monitoring

### airodump-ng --help

```bash
airodump-ng --help
```

Displays the help menu listing all available options and syntax usage

### airodump-ng wlan0mon

```bash
airodump-ng wlan0mon
```

Starts monitoring all available channels on the 2.4GHz band using the specified interface


## Interface and Channel Control

### airodump-ng -c 1 wlan0mon

```bash
airodump-ng -c 1 wlan0mon
```

Restricts monitoring strictly to channel 1 to prevent channel hopping

### airodump-ng -c 6 wlan0mon

```bash
airodump-ng -c 6 wlan0mon
```

Restricts monitoring strictly to channel 6

### airodump-ng -c 11 wlan0mon

```bash
airodump-ng -c 11 wlan0mon
```

Restricts monitoring strictly to channel 11

### airodump-ng -c 1,6,11 wlan0mon

```bash
airodump-ng -c 1,6,11 wlan0mon
```

Hops only between channels 1, 6, and 11 to monitor non-overlapping frequencies

### airodump-ng --channel 36-165 wlan0mon

```bash
airodump-ng --channel 36-165 wlan0mon
```

Monitors a specific range of channels typically associated with the 5GHz band

### airodump-ng --band a wlan0mon

```bash
airodump-ng --band a wlan0mon
```

Forces the card to hop on 5GHz band channels only

### airodump-ng --band bg wlan0mon

```bash
airodump-ng --band bg wlan0mon
```

Forces the card to hop on 2.4GHz band channels only

### airodump-ng --band abg wlan0mon

```bash
airodump-ng --band abg wlan0mon
```

Enables channel hopping across both 2.4GHz and 5GHz bands if the card supports it


## Access Point Filtering

### airodump-ng --bssid AA:BB:CC:DD:EE:FF wlan0mon

```bash
airodump-ng --bssid AA:BB:CC:DD:EE:FF wlan0mon
```

Example:

```bash
airodump-ng --bssid 00:11:22:33:44:55 wlan0mon
```

Filters the display and capture to show only traffic associated with a specific Access Point MAC address

### airodump-ng --essid 'Target_Network' wlan0mon

```bash
airodump-ng --essid 'Target_Network' wlan0mon
```

Example:

```bash
airodump-ng --essid 'Corporate_WiFi' wlan0mon
```

Filters the view to show only Access Points broadcasting a specific network name

### airodump-ng --essid-regex 'Corp.*' wlan0mon

```bash
airodump-ng --essid-regex 'Corp.*' wlan0mon
```

Example:

```bash
airodump-ng --essid-regex 'Guest.*' wlan0mon
```

Uses a regular expression to filter and display networks matching a naming pattern


## Encryption Filtering

### airodump-ng --encrypt OPN wlan0mon

```bash
airodump-ng --encrypt OPN wlan0mon
```

Filters output to show only Open (unencrypted) networks, useful for finding rogue guest networks

### airodump-ng --encrypt WEP wlan0mon

```bash
airodump-ng --encrypt WEP wlan0mon
```

Filters output to show only networks using legacy WEP encryption

### airodump-ng --encrypt WPA wlan0mon

```bash
airodump-ng --encrypt WPA wlan0mon
```

Filters output to show only networks using WPA or WPA2 encryption


## Output and Logging

### airodump-ng -w capture_file wlan0mon

```bash
airodump-ng -w capture_file wlan0mon
```

Example:

```bash
airodump-ng -w lab_scan wlan0mon
```

Saves the captured packet data to files with the prefix 'lab_scan' in multiple formats

### airodump-ng --output-format csv -w report wlan0mon

```bash
airodump-ng --output-format csv -w report wlan0mon
```

Example:

```bash
airodump-ng --output-format csv -w daily_report wlan0mon
```

Saves the capture data only in CSV format, useful for parsing and reporting scripts

### airodump-ng --output-format pcap -w traffic wlan0mon

```bash
airodump-ng --output-format pcap -w traffic wlan0mon
```

Example:

```bash
airodump-ng --output-format pcap -w raw_traffic wlan0mon
```

Saves the capture data only in PCAP format for analysis in Wireshark

### airodump-ng --output-format kismet -w log wlan0mon

```bash
airodump-ng --output-format kismet -w log wlan0mon
```

Example:

```bash
airodump-ng --output-format kismet -w kismet_log wlan0mon
```

Saves the capture data in Kismet-compatible XML format

### airodump-ng --output-format pcap,csv,kismet -w full wlan0mon

```bash
airodump-ng --output-format pcap,csv,kismet -w full wlan0mon
```

Example:

```bash
airodump-ng --output-format pcap,csv,kismet -w full_audit wlan0mon
```

Explicitly requests PCAP, CSV, and Kismet output formats simultaneously

### airodump-ng --write-interval 5 -w live wlan0mon

```bash
airodump-ng --write-interval 5 -w live wlan0mon
```

Example:

```bash
airodump-ng --write-interval 10 -w live_data wlan0mon
```

Updates the output file on disk every 10 seconds instead of the default interval


## Red Team Reconnaissance

### airodump-ng -c 1 --bssid AA:BB:CC:DD:EE:FF -w handshake wlan0mon

```bash
airodump-ng -c 1 --bssid AA:BB:CC:DD:EE:FF -w handshake wlan0mon
```

Example:

```bash
airodump-ng -c 6 --bssid 00:11:22:33:44:55 -w wpa_handshake wlan0mon
```

Targeted capture on a specific channel and BSSID to acquire WPA/WPA2 4-way handshakes

### airodump-ng --netmask 255.255.255.0 wlan0mon

```bash
airodump-ng --netmask 255.255.255.0 wlan0mon
```

Filters APs by masking the BSSID, useful for identifying equipment from the same batch

### airodump-ng --ivs -w wep_attack wlan0mon

```bash
airodump-ng --ivs -w wep_attack wlan0mon
```

Example:

```bash
airodump-ng --ivs -w wep_crack wlan0mon
```

Saves only IVs (Initialization Vectors) instead of full packets to save space during WEP attacks

### airodump-ng --gpsd -w map_walk wlan0mon

```bash
airodump-ng --gpsd -w map_walk wlan0mon
```

Example:

```bash
airodump-ng --gpsd -w war_walking wlan0mon
```

Uses gpsd to tag captured networks with GPS coordinates for war walking maps

### airodump-ng --showack wlan0mon

```bash
airodump-ng --showack wlan0mon
```

Displays ACK statistics to help identify the presence of hidden stations or client distance


## Blue Team Defensive Validation

### airodump-ng --wps wlan0mon

```bash
airodump-ng --wps wlan0mon
```

Displays WPS (Wi-Fi Protected Setup) information to identify APs vulnerable to Pixie Dust or brute force

### airodump-ng --manufacturer wlan0mon

```bash
airodump-ng --manufacturer wlan0mon
```

Resolves and displays the manufacturer name from the OUI of the MAC address

### airodump-ng --uptime wlan0mon

```bash
airodump-ng --uptime wlan0mon
```

Displays the uptime of Access Points based on the timestamp in beacon frames

### airodump-ng --beacons wlan0mon

```bash
airodump-ng --beacons wlan0mon
```

Records all beacons to the capture file, useful for detailed analysis of AP configuration broadcasting

### airodump-ng --detect-anomaly wlan0mon

```bash
airodump-ng --detect-anomaly wlan0mon
```

Attempt to detect anomalies in the network traffic (feature dependent on specific airodump versions)


## Display and Visualization Control

### airodump-ng --berlin 120 wlan0mon

```bash
airodump-ng --berlin 120 wlan0mon
```

Keeps APs and clients on the screen for 120 seconds after signal loss before removing them

### airodump-ng --update 1 wlan0mon

```bash
airodump-ng --update 1 wlan0mon
```

Sets the screen display update delay to 1 second for faster real-time monitoring

### airodump-ng --background 1 wlan0mon

```bash
airodump-ng --background 1 wlan0mon
```

Starts airodump-ng in a mode suitable for running in the background


## Advanced Troubleshooting

### airodump-ng --ignore-negative-one wlan0mon

```bash
airodump-ng --ignore-negative-one wlan0mon
```

Prevents the 'fixed channel -1' error message caused by driver mismatches

### airodump-ng --skip-columns 1 wlan0mon

```bash
airodump-ng --skip-columns 1 wlan0mon
```

Skips displaying specific columns to save screen space or declutter the interface


## Red Team Workflow

### airodump-ng -c 1,6,11 --encrypt WPA -w wpa_hunt wlan0mon

```bash
airodump-ng -c 1,6,11 --encrypt WPA -w wpa_hunt wlan0mon
```

Hops on common channels, filters for WPA networks, and records data to find attackable targets


## Purple Team Validation

### airodump-ng -c 36 --bssid AA:BB:CC:DD:EE:FF --wps -w audit wlan0mon

```bash
airodump-ng -c 36 --bssid AA:BB:CC:DD:EE:FF --wps -w audit wlan0mon
```

Example:

```bash
airodump-ng -c 36 --bssid 00:11:22:33:44:55 --wps -w internal_audit wlan0mon
```

Focused audit on a corporate 5GHz AP to verify WPS status and capture traffic for intrusion analysis


## Client Hunting

### airodump-ng --bssid AA:BB:CC:DD:EE:FF --showack wlan0mon

```bash
airodump-ng --bssid AA:BB:CC:DD:EE:FF --showack wlan0mon
```

Monitors a specific AP and watches for ACK packets to detect active clients even if silent


## Hidden Network Discovery

### airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF wlan0mon

```bash
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF wlan0mon
```

Example:

```bash
airodump-ng -c 6 --bssid 00:11:22:33:44:55 wlan0mon
```

Monitors a hidden AP (BSSID known) to wait for a client association that reveals the ESSID


## Combined Filter Workflow

### airodump-ng --encrypt OPN --band a wlan0mon

```bash
airodump-ng --encrypt OPN --band a wlan0mon
```

Scans the 5GHz band specifically for open/unsecured networks


## Specific Frequency Targeting

### airodump-ng --ht20 wlan0mon

```bash
airodump-ng --ht20 wlan0mon
```

Sets the channel width to 20MHz (High Throughput) for specific capture requirements

### airodump-ng --ht40- wlan0mon

```bash
airodump-ng --ht40- wlan0mon
```

Sets the channel width to 40MHz with the secondary channel below the primary

### airodump-ng --ht40+ wlan0mon

```bash
airodump-ng --ht40+ wlan0mon
```

Sets the channel width to 40MHz with the secondary channel above the primary


## Capture File Management

### airodump-ng -w capture --file-prefix my_scan wlan0mon

```bash
airodump-ng -w capture --file-prefix my_scan wlan0mon
```

Example:

```bash
airodump-ng -w capture --file-prefix site_a wlan0mon
```

Manually sets the prefix for the generated capture files to organize data by site


## Real-time Monitoring

### airodump-ng --clear wlan0mon

```bash
airodump-ng --clear wlan0mon
```

Clears the screen reset behavior (depends on terminal type) for cleaner updates


## Incident Response Simulation

### airodump-ng -c 1 --bssid <ROGUE_MAC> -w evidence wlan0mon

```bash
airodump-ng -c 1 --bssid <ROGUE_MAC> -w evidence wlan0mon
```

Example:

```bash
airodump-ng -c 1 --bssid 00:11:22:33:44:55 -w rogue_evidence wlan0mon
```

Isolates a suspected rogue AP to capture all traffic for forensic evidence gathering


## Advanced Filtering

### airodump-ng --essid-regex '^(Guest|Free)' wlan0mon

```bash
airodump-ng --essid-regex '^(Guest|Free)' wlan0mon
```

Uses regex to capture any network starting with 'Guest' or 'Free' to audit public facing Wi-Fi


## Long Term Monitoring

### airodump-ng --write-interval 300 -w hourly_log wlan0mon

```bash
airodump-ng --write-interval 300 -w hourly_log wlan0mon
```

Writes to disk only every 5 minutes to reduce I/O load during long-duration surveillance


## Hardware Specific

### airodump-ng --cswitch 0 wlan0mon

```bash
airodump-ng --cswitch 0 wlan0mon
```

Manually sets the channel switching method (0=FIFO, 1=Round Robin) for advanced card control


## Help and Debug

### airodump-ng --help

```bash
airodump-ng --help
```

Displays the full help menu to verify supported flags for the installed version


## Post-Processing Prep

### airodump-ng --output-format netxml -w kismet_import wlan0mon

```bash
airodump-ng --output-format netxml -w kismet_import wlan0mon
```

Generates a netxml file specifically for importing data into other tools like Kismet or databases


## Visualization

### airodump-ng --realtime-bitmap wlan0mon

```bash
airodump-ng --realtime-bitmap wlan0mon
```

Shows a bitmap of received frames, useful for visualizing interference or high traffic bursts


## Full Spectrum Audit

### airodump-ng --band abg --manufacturer --wps --uptime -w site_audit wlan0mon

```bash
airodump-ng --band abg --manufacturer --wps --uptime -w site_audit wlan0mon
```

Comprehensive command enabling all major informational columns and scanning all bands for a full site survey


## Stealth Monitoring

### airodump-ng --encrypt WPA --bssid <MAC> --channel <CH> --output-format pcap -w stealth wlan0mon

```bash
airodump-ng --encrypt WPA --bssid <MAC> --channel <CH> --output-format pcap -w stealth wlan0mon
```

Example:

```bash
airodump-ng --encrypt WPA --bssid 00:11:22:33:44:55 --channel 6 --output-format pcap -w stealth wlan0mon
```

Minimally invasive capture on a fixed target, writing only pcap to reduce disk noise


## Client Tracking

### airodump-ng -d AA:BB:CC:DD:EE:FF wlan0mon

```bash
airodump-ng -d AA:BB:CC:DD:EE:FF wlan0mon
```

Example:

```bash
airodump-ng -d 00:11:22:33:44:55 wlan0mon
```

Filter by BSSID using the -d short flag alias for rapid syntax entry


## IV Collection

### airodump-ng --ivs --write-interval 1 -w fast_crack wlan0mon

```bash
airodump-ng --ivs --write-interval 1 -w fast_crack wlan0mon
```

Optimized WEP cracking setup: collecting only IVs and writing to disk every second for real-time cracking


## Targeted BSSID List

### airodump-ng --bssid AA:BB:CC:DD:EE:FF wlan0mon

```bash
airodump-ng --bssid AA:BB:CC:DD:EE:FF wlan0mon
```

Used in conjunction with aireplay-ng, this confirms the target is visible before launching deauth attacks


## Complete Reset

### airodump-ng --channel 1-13 --band bg --clear wlan0mon

```bash
airodump-ng --channel 1-13 --band bg --clear wlan0mon
```

Resets the view to a standard 2.4GHz sweep across all valid channels with a clear screen

## Related tools

- [airmon-ng](https://terminal.rokibulroni.com/tool/wireless/airmon-ng)
- [aireplay-ng](https://terminal.rokibulroni.com/tool/wireless/aireplay-ng)
- [Aircrack-ng](https://terminal.rokibulroni.com/tool/wireless/aircrack-ng)
