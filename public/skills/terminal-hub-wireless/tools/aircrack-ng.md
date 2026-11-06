# Aircrack-ng

> The core of the Aircrack-ng suite: cracks WEP keys and WPA/WPA2-PSK handshakes captured from Wi-Fi networks.

- Category: Wireless
- Commands: 80
- Page: https://terminal.rokibulroni.com/tool/wireless/aircrack-ng
- Homepage: https://www.aircrack-ng.org
- Documentation: https://www.aircrack-ng.org/doku.php?id=aircrack-ng
- Tags: Wi-Fi, WPA, cracking

## Install

- apt: `sudo apt install aircrack-ng`
- brew: `brew install aircrack-ng`

## Suite Setup & Management

### airmon-ng

```bash
airmon-ng
```

Displays the status of wireless interfaces and their current modes.

### airmon-ng check

```bash
airmon-ng check
```

Identifies processes that might interfere with the wireless card's operation.

### airmon-ng check kill

```bash
airmon-ng check kill
```

Terminates conflicting processes to ensure stability during capture and injection.

### airmon-ng start <interface>

```bash
airmon-ng start <interface>
```

Example:

```bash
airmon-ng start wlan0
```

Enables monitor mode on the specified wireless interface.

### airmon-ng start <interface> <channel>

```bash
airmon-ng start <interface> <channel>
```

Example:

```bash
airmon-ng start wlan0 6
```

Enables monitor mode strictly on a specific channel to prevent hopping.

### airmon-ng stop <interface>

```bash
airmon-ng stop <interface>
```

Example:

```bash
airmon-ng stop wlan0mon
```

Disables monitor mode and returns the interface to managed mode.


## Network Discovery

### airodump-ng <interface>

```bash
airodump-ng <interface>
```

Example:

```bash
airodump-ng wlan0mon
```

Starts a basic capture to scan for all nearby access points and clients.

### airodump-ng --encrypt WPA <interface>

```bash
airodump-ng --encrypt WPA <interface>
```

Example:

```bash
airodump-ng --encrypt WPA wlan0mon
```

Filters the visual display to show only WPA/WPA2 encrypted networks.

### airodump-ng --encrypt WEP <interface>

```bash
airodump-ng --encrypt WEP <interface>
```

Example:

```bash
airodump-ng --encrypt WEP wlan0mon
```

Filters the visual display to show only WEP encrypted networks.

### airodump-ng --netmask <mask_int> <interface>

```bash
airodump-ng --netmask <mask_int> <interface>
```

Example:

```bash
airodump-ng --netmask 255.255.255.0 wlan0mon
```

Filters access points based on a specific subnet mask.


## Capture File Handling

### airodump-ng -c <channel> --bssid <mac> -w <prefix> <interface>

```bash
airodump-ng -c <channel> --bssid <mac> -w <prefix> <interface>
```

Example:

```bash
airodump-ng -c 6 --bssid 00:11:22:33:44:55 -w capture wlan0mon
```

Targets a specific AP on a specific channel and writes the capture to a file.

### airodump-ng --output-format pcap,csv -w <prefix> <interface>

```bash
airodump-ng --output-format pcap,csv -w <prefix> <interface>
```

Example:

```bash
airodump-ng --output-format pcap,csv -w output wlan0mon
```

Saves the capture data specifically in PCAP and CSV formats only.


## Injection Testing

### aireplay-ng --test <interface>

```bash
aireplay-ng --test <interface>
```

Example:

```bash
aireplay-ng --test wlan0mon
```

Tests if the wireless card supports packet injection and assesses link quality.

### aireplay-ng --test -e <essid> -a <bssid> <interface>

```bash
aireplay-ng --test -e <essid> -a <bssid> <interface>
```

Example:

```bash
aireplay-ng --test -e MyWiFi -a 00:11:22:33:44:55 wlan0mon
```

Tests injection capabilities against a specific target access point.


## Red Team Attack Simulation

### aireplay-ng --deauth <count> -a <bssid> -c <client> <interface>

```bash
aireplay-ng --deauth <count> -a <bssid> -c <client> <interface>
```

Example:

```bash
aireplay-ng --deauth 10 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon
```

Sends deauthentication packets to disconnect a specific client to force a handshake.

### aireplay-ng --fakeauth 0 -a <bssid> -h <my_mac> <interface>

```bash
aireplay-ng --fakeauth 0 -a <bssid> -h <my_mac> <interface>
```

Example:

```bash
aireplay-ng --fakeauth 0 -a 00:11:22:33:44:55 -h 11:22:33:44:55:66 wlan0mon
```

Performs a fake authentication attack to associate with an AP for further injection.

### aireplay-ng --arpreplay -b <bssid> -h <my_mac> <interface>

```bash
aireplay-ng --arpreplay -b <bssid> -h <my_mac> <interface>
```

Example:

```bash
aireplay-ng --arpreplay -b 00:11:22:33:44:55 -h 11:22:33:44:55:66 wlan0mon
```

Listens for ARP packets and replays them to generate new IVs for WEP cracking.

### aireplay-ng --chopchop -b <bssid> -h <my_mac> <interface>

```bash
aireplay-ng --chopchop -b <bssid> -h <my_mac> <interface>
```

Example:

```bash
aireplay-ng --chopchop -b 00:11:22:33:44:55 -h 11:22:33:44:55:66 wlan0mon
```

Executes the KoreK chopchop attack to decrypt a WEP packet without the key.

### aireplay-ng --fragment -b <bssid> -h <my_mac> <interface>

```bash
aireplay-ng --fragment -b <bssid> -h <my_mac> <interface>
```

Example:

```bash
aireplay-ng --fragment -b 00:11:22:33:44:55 -h 11:22:33:44:55:66 wlan0mon
```

Attempts the fragmentation attack to obtain a keystream specifically for WEP.


## Basic Aircrack-ng Syntax

### aircrack-ng --help

```bash
aircrack-ng --help
```

Displays the manual page with all available flags and options.

### aircrack-ng -u

```bash
aircrack-ng -u
```

Displays CPU information and supported hardware instructions like SSE2.

### aircrack-ng <capture_file>

```bash
aircrack-ng <capture_file>
```

Example:

```bash
aircrack-ng capture-01.cap
```

Loads a capture file and attempts to auto-detect the encryption type and target.


## WEP Attack Workflows

### aircrack-ng -a 1 <capture_file>

```bash
aircrack-ng -a 1 <capture_file>
```

Example:

```bash
aircrack-ng -a 1 capture-01.cap
```

Forces the tool to operate in WEP cracking mode regardless of auto-detection.

### aircrack-ng -n 64 <capture_file>

```bash
aircrack-ng -n 64 <capture_file>
```

Example:

```bash
aircrack-ng -n 64 capture-01.cap
```

Restricts the cracking attempt to 64-bit WEP keys only.

### aircrack-ng -n 128 <capture_file>

```bash
aircrack-ng -n 128 <capture_file>
```

Example:

```bash
aircrack-ng -n 128 capture-01.cap
```

Restricts the cracking attempt to 128-bit WEP keys only.

### aircrack-ng -b <bssid> <capture_file>

```bash
aircrack-ng -b <bssid> <capture_file>
```

Example:

```bash
aircrack-ng -b 00:11:22:33:44:55 capture-01.cap
```

Filters the capture file to crack only the network matching the specified BSSID.

### aircrack-ng -f <factor> <capture_file>

```bash
aircrack-ng -f <factor> <capture_file>
```

Example:

```bash
aircrack-ng -f 4 capture-01.cap
```

Adjusts the brute-force fudge factor to try lower probability keys.

### aircrack-ng -k <int> <capture_file>

```bash
aircrack-ng -k <int> <capture_file>
```

Example:

```bash
aircrack-ng -k 1 capture-01.cap
```

Disables one of the 17 KoreK attacks to troubleshoot false positives.

### aircrack-ng -x <capture_file>

```bash
aircrack-ng -x <capture_file>
```

Example:

```bash
aircrack-ng -x capture-01.cap
```

Disables the last two keybytes bruteforce to speed up the process.

### aircrack-ng -y <capture_file>

```bash
aircrack-ng -y <capture_file>
```

Example:

```bash
aircrack-ng -y capture-01.cap
```

Enables the experimental single-threaded brute-force mode for WEP.

### aircrack-ng -K <capture_file>

```bash
aircrack-ng -K <capture_file>
```

Example:

```bash
aircrack-ng -K capture-01.cap
```

Invokes the KoreK attack mode specifically (usually default for WEP).

### aircrack-ng -z <capture_file>

```bash
aircrack-ng -z <capture_file>
```

Example:

```bash
aircrack-ng -z capture-01.cap
```

Invokes the PTW (Pyshkin-Tews-Weinmann) attack method which requires fewer IVs.


## WPA Cracking Basics

### aircrack-ng -a 2 -w <wordlist> <capture_file>

```bash
aircrack-ng -a 2 -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -a 2 -w rockyou.txt capture-01.cap
```

Initiates a WPA/WPA2 dictionary attack using a provided wordlist.

### aircrack-ng -e <essid> -w <wordlist> <capture_file>

```bash
aircrack-ng -e <essid> -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -e MyWiFi -w rockyou.txt capture-01.cap
```

Filters the capture file to target a specific network name (ESSID).

### aircrack-ng -b <bssid> -w <wordlist> <capture_file>

```bash
aircrack-ng -b <bssid> -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -b 00:11:22:33:44:55 -w rockyou.txt capture-01.cap
```

Filters the capture file to target a specific MAC address (BSSID).


## Performance Tuning

### aircrack-ng -S <capture_file>

```bash
aircrack-ng -S <capture_file>
```

Example:

```bash
aircrack-ng -S capture-01.cap
```

Shows the cracking speed in keys per second without actually cracking.

### aircrack-ng -p <cores> -w <wordlist> <capture_file>

```bash
aircrack-ng -p <cores> -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -p 4 -w rockyou.txt capture-01.cap
```

Explicitly sets the number of CPU threads/cores to use for the attack.


## Advanced Cracking

### aircrack-ng -E <file> -w <wordlist> <capture_file>

```bash
aircrack-ng -E <file> -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -E project_elcomsoft.ewsa -w rockyou.txt capture-01.cap
```

Creates an Elcomsoft Wireless Security Auditor (EWSA) project file.

### aircrack-ng -J <file> <capture_file>

```bash
aircrack-ng -J <file> <capture_file>
```

Example:

```bash
aircrack-ng -J clean_capture capture-01.cap
```

Extracts the handshake and saves it to a new, smaller .hccap file.

### aircrack-ng -j <file> <capture_file>

```bash
aircrack-ng -j <file> <capture_file>
```

Example:

```bash
aircrack-ng -j clean_capture capture-01.cap
```

Extracts the handshake and saves it to a new .hccapx file for Hashcat.


## Output and Logging

### aircrack-ng -l <file> -w <wordlist> <capture_file>

```bash
aircrack-ng -l <file> -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -l cracked_key.txt -w rockyou.txt capture-01.cap
```

Writes the successfully cracked key to a specified text file.

### aircrack-ng -q -w <wordlist> <capture_file>

```bash
aircrack-ng -q -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -q -w rockyou.txt capture-01.cap
```

Runs in quiet mode, suppressing status output until a key is found.


## Database Workflows

### airolib-ng <db_file> --import cowpatty <file>

```bash
airolib-ng <db_file> --import cowpatty <file>
```

Example:

```bash
airolib-ng hashes.db --import cowpatty rainbow_table
```

Imports a Cowpatty rainbow table into an Aircrack-ng database file.

### airolib-ng <db_file> --import passwd <file>

```bash
airolib-ng <db_file> --import passwd <file>
```

Example:

```bash
airolib-ng hashes.db --import passwd rockyou.txt
```

Imports a text wordlist into an Aircrack-ng database file for pre-computation.

### airolib-ng <db_file> --import essid <file>

```bash
airolib-ng <db_file> --import essid <file>
```

Example:

```bash
airolib-ng hashes.db --import essid essid_list.txt
```

Imports a list of ESSIDs into the database for PMK calculation.

### airolib-ng <db_file> --batch

```bash
airolib-ng <db_file> --batch
```

Example:

```bash
airolib-ng hashes.db --batch
```

Calculates the PMKs (Pairwise Master Keys) for the loaded ESSIDs and passwords.

### aircrack-ng -r <db_file> <capture_file>

```bash
aircrack-ng -r <db_file> <capture_file>
```

Example:

```bash
aircrack-ng -r hashes.db capture-01.cap
```

Uses a pre-computed airolib-ng database for faster WPA cracking.


## Blue Team Defensive Validation

### aircrack-ng --simd-list

```bash
aircrack-ng --simd-list
```

Lists the available SIMD architectures to verify optimization support on the host.

### airdecap-ng -l

```bash
airdecap-ng -l
```

Lists the supported encryption types for decryption validation.

### airdecap-ng -b <bssid> <capture_file>

```bash
airdecap-ng -b <bssid> <capture_file>
```

Example:

```bash
airdecap-ng -b 00:11:22:33:44:55 capture-01.cap
```

Attempts to decrypt the capture file using only the BSSID (validates unencrypted data).

### airdecap-ng -e <essid> -p <password> <capture_file>

```bash
airdecap-ng -e <essid> -p <password> <capture_file>
```

Example:

```bash
airdecap-ng -e MyWiFi -p SuperSecret capture-01.cap
```

Decrypts a WPA capture file using the known valid password to verify traffic visibility.

### airdecap-ng -w <hex_key> <capture_file>

```bash
airdecap-ng -w <hex_key> <capture_file>
```

Example:

```bash
airdecap-ng -w 1A2B3C4D5E capture-01.cap
```

Decrypts a WEP capture file using the known hexadecimal key.


## Purple Team Detection Testing

### aircrack-ng -C <mac> -w <wordlist> <capture_file>

```bash
aircrack-ng -C <mac> -w <wordlist> <capture_file>
```

Example:

```bash
aircrack-ng -C 00:11:22:33:44:55 -w rockyou.txt capture-01.cap
```

Merges two or more APs into a virtual one (useful for testing roaming handshakes).

### aireplay-ng --deauth 1 -a <bssid> <interface>

```bash
aireplay-ng --deauth 1 -a <bssid> <interface>
```

Example:

```bash
aireplay-ng --deauth 1 -a 00:11:22:33:44:55 wlan0mon
```

Sends a single deauth frame to test if the IDS/IPS logs the specific anomaly.

### aireplay-ng --fakeauth 6000 -o 1 -q 10 <interface>

```bash
aireplay-ng --fakeauth 6000 -o 1 -q 10 <interface>
```

Example:

```bash
aireplay-ng --fakeauth 6000 -o 1 -q 10 wlan0mon
```

Sends keep-alive packets to test how the infrastructure handles prolonged fake sessions.


## Forensic Analysis

### ivstools --convert <capture_file> <output_ivs>

```bash
ivstools --convert <capture_file> <output_ivs>
```

Example:

```bash
ivstools --convert capture-01.cap capture.ivs
```

Converts a standard capture file to the IVS format to reduce file size.

### ivstools --merge <ivs_file1> <ivs_file2> <output_ivs>

```bash
ivstools --merge <ivs_file1> <ivs_file2> <output_ivs>
```

Example:

```bash
ivstools --merge capture1.ivs capture2.ivs full_capture.ivs
```

Merges multiple IVS files into a single file for a consolidated cracking attempt.


## Advanced Workflow Integration

### airbase-ng -e <essid> -c <channel> <interface>

```bash
airbase-ng -e <essid> -c <channel> <interface>
```

Example:

```bash
airbase-ng -e 'Free WiFi' -c 6 wlan0mon
```

Creates a soft access point to lure clients for a rogue AP attack workflow.

### airbase-ng -P -C 30 <interface>

```bash
airbase-ng -P -C 30 <interface>
```

Example:

```bash
airbase-ng -P -C 30 wlan0mon
```

Configures the soft AP to respond to all probe requests (Karma attack behavior).

### wpaclean <out_file> <in_file>

```bash
wpaclean <out_file> <in_file>
```

Example:

```bash
wpaclean clean.cap dirty.cap
```

Cleans the capture file by removing beacons and management frames, keeping only the 4-way handshake.


## Automation & Pipelines

### aircrack-ng -w - <capture_file>

```bash
aircrack-ng -w - <capture_file>
```

Example:

```bash
john --stdout --wordlist=passwords.txt | aircrack-ng -w - capture-01.cap
```

Reads passwords from standard input (stdin), allowing piping from other tools like John the Ripper.

### airodump-ng --beacons --gpsd -w <prefix> <interface>

```bash
airodump-ng --beacons --gpsd -w <prefix> <interface>
```

Example:

```bash
airodump-ng --beacons --gpsd -w map_data wlan0mon
```

Records GPS coordinates for every packet (requires GPSD) for wardriving maps.

### aircrack-ng -s <capture_file>

```bash
aircrack-ng -s <capture_file>
```

Example:

```bash
aircrack-ng -s capture-01.cap
```

Shows the ASCII version of the key alongside the hex version.


## Incident Response Simulation

### airtun-ng -a <bssid> -t 1 <interface>

```bash
airtun-ng -a <bssid> -t 1 <interface>
```

Example:

```bash
airtun-ng -a 00:11:22:33:44:55 -t 1 wlan0mon
```

Creates a virtual tunnel interface to monitor encrypted traffic in real-time (requires key).

### packetforge-ng -0 -a <bssid> -h <source_mac> -k <ip> -l <ip> -w <file>

```bash
packetforge-ng -0 -a <bssid> -h <source_mac> -k <ip> -l <ip> -w <file>
```

Example:

```bash
packetforge-ng -0 -a 00:11:22:33:44:55 -h 11:22:33:44:55:66 -k 192.168.1.1 -l 192.168.1.100 -w arp_req
```

Forges an ARP request packet for injection validation during an incident investigation.


## Cracking Optimization

### aircrack-ng -D <capture_file>

```bash
aircrack-ng -D <capture_file>
```

Example:

```bash
aircrack-ng -D capture-01.cap
```

Disables the complex WEP masking (experimental optimization).

### aircrack-ng -M <int> <capture_file>

```bash
aircrack-ng -M <int> <capture_file>
```

Example:

```bash
aircrack-ng -M 2 capture-01.cap
```

Specifies the maximum number of IVs to use for the attack.

### aircrack-ng -t <mac> <capture_file>

```bash
aircrack-ng -t <mac> <capture_file>
```

Example:

```bash
aircrack-ng -t 00:11:22:33:44:55 capture-01.cap
```

Filters traffic by the destination MAC address for specific client targeting.

### aircrack-ng -m <mac> <capture_file>

```bash
aircrack-ng -m <mac> <capture_file>
```

Example:

```bash
aircrack-ng -m 00:11:22:33:44:55 capture-01.cap
```

Matches packets specifically by the BSSID mac address filter.


## Legacy WEP Specifics

### aircrack-ng -1 <capture_file>

```bash
aircrack-ng -1 <capture_file>
```

Example:

```bash
aircrack-ng -1 capture-01.cap
```

Runs the attack once and exits if the key is not found immediately.

### aircrack-ng -6 <capture_file>

```bash
aircrack-ng -6 <capture_file>
```

Example:

```bash
aircrack-ng -6 capture-01.cap
```

Enables the semi-passive attack mode (rarely used).


## Clean Up

### airmon-ng stop <interface>mon

```bash
airmon-ng stop <interface>mon
```

Example:

```bash
airmon-ng stop wlan0mon
```

Properly destroys the monitor mode interface created earlier.

### rm <prefix>-*.cap <prefix>-*.csv

```bash
rm <prefix>-*.cap <prefix>-*.csv
```

Example:

```bash
rm capture-01.cap capture-01.csv
```

Removes the raw capture files and logs to sanitize the workspace.


## Advanced Combined Workflow

### airodump-ng -c 1 --bssid <mac> -w capture wlan0mon & aireplay-ng --deauth 5 -a <mac> wlan0mon

```bash
airodump-ng -c 1 --bssid <mac> -w capture wlan0mon & aireplay-ng --deauth 5 -a <mac> wlan0mon
```

Example:

```bash
airodump-ng -c 1 --bssid 00:11:22:33:44:55 -w capture wlan0mon & aireplay-ng --deauth 5 -a 00:11:22:33:44:55 wlan0mon
```

Simultaneously starts a capture and sends deauth packets in a single command line.

### aircrack-ng -w wordlist.txt -l key.txt *.cap

```bash
aircrack-ng -w wordlist.txt -l key.txt *.cap
```

Attempts to crack using all capture files in the current directory and logs the key.

### aircrack-ng -K -b <bssid> *.ivs

```bash
aircrack-ng -K -b <bssid> *.ivs
```

Example:

```bash
aircrack-ng -K -b 00:11:22:33:44:55 *.ivs
```

Uses the KoreK method on all IVS files in the directory for a WEP attack.

### airbase-ng -a <bssid> --essid <essid> -W 1 wlan0mon

```bash
airbase-ng -a <bssid> --essid <essid> -W 1 wlan0mon
```

Example:

```bash
airbase-ng -a 00:11:22:33:44:55 --essid 'Office WiFi' -W 1 wlan0mon
```

Sets up a Rogue AP with WEP encryption enabled (-W 1) for a specific target.

### airbase-ng -a <bssid> --essid <essid> -Z 2 wlan0mon

```bash
airbase-ng -a <bssid> --essid <essid> -Z 2 wlan0mon
```

Example:

```bash
airbase-ng -a 00:11:22:33:44:55 --essid 'Office WiFi' -Z 2 wlan0mon
```

Sets up a Rogue AP with WPA2 encryption enabled (-Z 2).


## System Maintenance

### aircrack-ng --check

```bash
aircrack-ng --check
```

Checks if the aircrack-ng binary is patched or original (useful for distribution verification).


## Help and Documentation

### man aircrack-ng

```bash
man aircrack-ng
```

Opens the full system manual for the most detailed documentation available.

## Related tools

- [airodump-ng](https://terminal.rokibulroni.com/tool/wireless/airodump-ng)
- [aireplay-ng](https://terminal.rokibulroni.com/tool/wireless/aireplay-ng)
- [airmon-ng](https://terminal.rokibulroni.com/tool/wireless/airmon-ng)
- [Hashcat](https://terminal.rokibulroni.com/tool/credentials/hashcat)
