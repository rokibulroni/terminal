# hostapd

> A user-space daemon that turns a wireless card into an access point — used for test networks and rogue-AP assessments.

- Category: Wireless
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/wireless/hostapd
- Homepage: https://w1.fi/hostapd/
- Documentation: https://w1.fi/cgit/hostap/plain/hostapd/hostapd.conf
- Tags: Wi-Fi, access point

## Install

- apt: `sudo apt install hostapd`

## Basic Access Point Startup

### hostapd -h

```bash
hostapd -h
```

Displays the help message with all available command-line options and syntax

### hostapd -v

```bash
hostapd -v
```

Prints the current version of hostapd to verify installation and build details

### hostapd hostapd.conf

```bash
hostapd hostapd.conf
```

Example:

```bash
hostapd /etc/hostapd/hostapd.conf
```

Starts the access point in the foreground using a specific configuration file

### hostapd -B hostapd.conf

```bash
hostapd -B hostapd.conf
```

Example:

```bash
hostapd -B /etc/hostapd/hostapd.conf
```

Starts hostapd in daemon mode (background) to run as a service

### hostapd -P /run/hostapd.pid -B hostapd.conf

```bash
hostapd -P /run/hostapd.pid -B hostapd.conf
```

Example:

```bash
hostapd -P /var/run/hostapd.pid -B hostapd.conf
```

Runs in background and writes the process ID to a specific file for service management


## Logging and Debugging

### hostapd -d hostapd.conf

```bash
hostapd -d hostapd.conf
```

Starts hostapd with verbose debugging enabled to show basic status and event messages

### hostapd -dd hostapd.conf

```bash
hostapd -dd hostapd.conf
```

Enables excessive debugging to view detailed state machine transitions and frame details

### hostapd -t -d hostapd.conf

```bash
hostapd -t -d hostapd.conf
```

Prepends timestamps to all debug output for timeline analysis of connection events

### hostapd -f /var/log/hostapd.log hostapd.conf

```bash
hostapd -f /var/log/hostapd.log hostapd.conf
```

Redirects all log output to a specified file instead of standard output

### hostapd -K -dd hostapd.conf

```bash
hostapd -K -dd hostapd.conf
```

Includes cryptographic key data in debug output (Warning: Unsafe for production, used for deep inspection)


## Configuration File Handling

### hostapd -g /var/run/hostapd/global hostapd.conf

```bash
hostapd -g /var/run/hostapd/global hostapd.conf
```

Enables the global control interface for external management tools like hostapd_cli


## Open Network Workflow

### printf 'interface=wlan0\ndriver=nl80211\nssid=OpenLab\nhw_mode=g\nchannel=6\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\ndriver=nl80211\nssid=OpenLab\nhw_mode=g\nchannel=6\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate minimal open config and run
```

Creates and runs a basic Open (unencrypted) 2.4GHz access point on channel 6


## Interface Management

### printf 'interface=wlan0\nbridge=br0\nssid=BridgedAP\nhw_mode=g\nchannel=1\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nbridge=br0\nssid=BridgedAP\nhw_mode=g\nchannel=1\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate bridged config and run
```

Configures the AP to bridge traffic to a wired interface (br0) for network integration


## SSID and Visibility

### printf 'interface=wlan0\nssid=HiddenLab\nignore_broadcast_ssid=1\nhw_mode=g\nchannel=11\n' > hostapd.conf && hostapd hos

```bash
printf 'interface=wlan0\nssid=HiddenLab\nignore_broadcast_ssid=1\nhw_mode=g\nchannel=11\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate hidden SSID config and run
```

Creates an access point with a hidden SSID by disabling beacon SSID broadcasting


## WPA2-PSK Configuration

### printf 'interface=wlan0\nssid=WPA2-Test\nhw_mode=g\nchannel=6\nwpa=2\nwpa_passphrase=Password123\nwpa_key_mgmt=WPA-PSK\n

```bash
printf 'interface=wlan0\nssid=WPA2-Test\nhw_mode=g\nchannel=6\nwpa=2\nwpa_passphrase=Password123\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=CCMP\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WPA2-PSK config and run
```

Sets up a standard WPA2 Personal network using CCMP (AES) encryption


## WPA Mixed Mode Configuration

### printf 'interface=wlan0\nssid=LegacyMix\nwpa=3\nwpa_passphrase=LegacyPass\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP CCMP\

```bash
printf 'interface=wlan0\nssid=LegacyMix\nwpa=3\nwpa_passphrase=LegacyPass\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP CCMP\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WPA1/WPA2 Mixed config and run
```

Enables mixed WPA1/WPA2 mode allowing both TKIP and CCMP ciphers (Legacy support)


## Access Control (MAC Filtering)

### printf 'interface=wlan0\nssid=MacFilterAP\nmacaddr_acl=1\naccept_mac_file=hostapd.accept\n' > hostapd.conf && echo '00:1

```bash
printf 'interface=wlan0\nssid=MacFilterAP\nmacaddr_acl=1\naccept_mac_file=hostapd.accept\n' > hostapd.conf && echo '00:11:22:33:44:55' > hostapd.accept && hostapd hostapd.conf
```

Example:

```bash
Generate MAC Allow List config and run
```

Configures an Allow List (Whitelist) where only specified MAC addresses can associate

### printf 'interface=wlan0\nssid=DenyListAP\nmacaddr_acl=0\ndeny_mac_file=hostapd.deny\n' > hostapd.conf && echo 'aa:bb:cc:

```bash
printf 'interface=wlan0\nssid=DenyListAP\nmacaddr_acl=0\ndeny_mac_file=hostapd.deny\n' > hostapd.conf && echo 'aa:bb:cc:dd:ee:ff' > hostapd.deny && hostapd hostapd.conf
```

Example:

```bash
Generate MAC Deny List config and run
```

Configures a Deny List (Blacklist) to explicitly block specific devices from connecting


## Performance Tuning (802.11n)

### printf 'interface=wlan0\nssid=N-Mode-AP\nhw_mode=g\nchannel=6\nieee80211n=1\nht_capab=[HT40+]\n' > hostapd.conf && hosta

```bash
printf 'interface=wlan0\nssid=N-Mode-AP\nhw_mode=g\nchannel=6\nieee80211n=1\nht_capab=[HT40+]\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate 802.11n HT40 config and run
```

Enables 802.11n High Throughput mode with 40MHz channel width


## Performance Tuning (802.11ac)

### printf 'interface=wlan0\nssid=AC-Mode-AP\nhw_mode=a\nchannel=36\nieee80211n=1\nieee80211ac=1\nvht_oper_chwidth=1\nvht_op

```bash
printf 'interface=wlan0\nssid=AC-Mode-AP\nhw_mode=a\nchannel=36\nieee80211n=1\nieee80211ac=1\nvht_oper_chwidth=1\nvht_oper_centr_freq_seg0_idx=42\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate 802.11ac VHT80 config and run
```

Enables 802.11ac Very High Throughput mode on 5GHz with 80MHz channel width


## Performance Tuning (802.11ax)

### printf 'interface=wlan0\nssid=AX-WiFi6\nhw_mode=a\nchannel=36\nieee80211n=1\nieee80211ac=1\nieee80211ax=1\nhe_su_beamfor

```bash
printf 'interface=wlan0\nssid=AX-WiFi6\nhw_mode=a\nchannel=36\nieee80211n=1\nieee80211ac=1\nieee80211ax=1\nhe_su_beamformer=1\nhe_su_beamformee=1\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate 802.11ax HE config and run
```

Enables 802.11ax (Wi-Fi 6) High Efficiency features including beamforming support


## Country and Regulatory

### printf 'interface=wlan0\nssid=RegDomainTest\ncountry_code=US\nieee80211d=1\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=RegDomainTest\ncountry_code=US\nieee80211d=1\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Country Code config and run
```

Advertises the US country code (802.11d) to clients to enforce regulatory domain constraints


## WPA3-SAE Configuration

### printf 'interface=wlan0\nssid=WPA3-SAE\nhw_mode=g\nchannel=6\nwpa=2\nwpa_passphrase=SecurePass123\nwpa_key_mgmt=SAE\niee

```bash
printf 'interface=wlan0\nssid=WPA3-SAE\nhw_mode=g\nchannel=6\nwpa=2\nwpa_passphrase=SecurePass123\nwpa_key_mgmt=SAE\nieee80211w=2\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WPA3-SAE Only config and run
```

Configures a pure WPA3 network using SAE authentication and mandatory Management Frame Protection (MFP)


## WPA3 Transition Mode

### printf 'interface=wlan0\nssid=WPA3-Transition\nhw_mode=g\nchannel=6\nwpa=2\nwpa_passphrase=TransitionPass\nwpa_key_mgmt=

```bash
printf 'interface=wlan0\nssid=WPA3-Transition\nhw_mode=g\nchannel=6\nwpa=2\nwpa_passphrase=TransitionPass\nwpa_key_mgmt=WPA-PSK SAE\nieee80211w=1\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WPA3/WPA2 Transition config and run
```

Allows both WPA3-SAE and WPA2-PSK clients to connect with optional MFP


## OWE (Enhanced Open)

### printf 'interface=wlan0\nssid=OWE-Net\nhw_mode=g\nchannel=6\nwpa=2\nwpa_key_mgmt=OWE\nieee80211w=2\n' > hostapd.conf && 

```bash
printf 'interface=wlan0\nssid=OWE-Net\nhw_mode=g\nchannel=6\nwpa=2\nwpa_key_mgmt=OWE\nieee80211w=2\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate OWE config and run
```

Sets up Opportunistic Wireless Encryption (Enhanced Open) for encrypted unauthenticated connections


## WPA2-Enterprise (EAP-TLS/PEAP)

### printf 'interface=wlan0\nssid=Enterprise-AP\nwpa=2\nwpa_key_mgmt=WPA-EAP\nieee8021x=1\nauth_server_addr=127.0.0.1\nauth_

```bash
printf 'interface=wlan0\nssid=Enterprise-AP\nwpa=2\nwpa_key_mgmt=WPA-EAP\nieee8021x=1\nauth_server_addr=127.0.0.1\nauth_server_port=1812\nauth_server_shared_secret=radiusSecret\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WPA2-Enterprise config and run
```

Configures WPA2-Enterprise requiring an external RADIUS server for 802.1X authentication


## Integrated EAP Server

### printf 'interface=wlan0\nssid=LocalEAP\nieee8021x=1\neap_server=1\neap_user_file=hostapd.eap_user\nca_cert=ca.pem\nserve

```bash
printf 'interface=wlan0\nssid=LocalEAP\nieee8021x=1\neap_server=1\neap_user_file=hostapd.eap_user\nca_cert=ca.pem\nserver_cert=server.pem\nprivate_key=server.key\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Internal EAP Server config and run
```

Uses hostapd's built-in EAP server to handle 802.1X authentication without an external RADIUS


## RADIUS Accounting

### printf 'interface=wlan0\nssid=AcctAP\nwpa=2\nwpa_key_mgmt=WPA-EAP\nieee8021x=1\nacct_server_addr=127.0.0.1\nacct_server_

```bash
printf 'interface=wlan0\nssid=AcctAP\nwpa=2\nwpa_key_mgmt=WPA-EAP\nieee8021x=1\nacct_server_addr=127.0.0.1\nacct_server_port=1813\nacct_server_shared_secret=radiusSecret\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate RADIUS Accounting config and run
```

Enables RADIUS accounting to report session duration and data usage to an accounting server


## Client Isolation

### printf 'interface=wlan0\nssid=IsolatedGuests\nap_isolate=1\nhw_mode=g\nchannel=6\n' > hostapd.conf && hostapd hostapd.co

```bash
printf 'interface=wlan0\nssid=IsolatedGuests\nap_isolate=1\nhw_mode=g\nchannel=6\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate AP Isolation config and run
```

Prevents associated wireless clients from communicating directly with each other (Client Isolation)


## WPS Configuration

### printf 'interface=wlan0\nssid=WPS-Enabled\nwps_state=2\neap_server=1\nconfig_methods=label display push_button keypad\n'

```bash
printf 'interface=wlan0\nssid=WPS-Enabled\nwps_state=2\neap_server=1\nconfig_methods=label display push_button keypad\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WPS config and run
```

Enables Wi-Fi Protected Setup (WPS) with Push Button and PIN methods (insecure but useful for testing)


## Multiple BSSID (Virtual APs)

### printf 'interface=wlan0\nssid=PrimaryNet\nbss=wlan0_1\nssid=GuestNet\nwpa=2\nwpa_passphrase=GuestPass\n' > hostapd.conf 

```bash
printf 'interface=wlan0\nssid=PrimaryNet\nbss=wlan0_1\nssid=GuestNet\nwpa=2\nwpa_passphrase=GuestPass\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Multi-BSSID config and run
```

Creates multiple virtual access points (SSIDs) on a single physical wireless interface


## Beacon Interval Tuning

### printf 'interface=wlan0\nssid=FastBeacon\nbeacon_int=15\nhw_mode=g\nchannel=6\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=FastBeacon\nbeacon_int=15\nhw_mode=g\nchannel=6\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Custom Beacon Interval config and run
```

Reduces the beacon interval to 15 TU (approx 15ms) for aggressive network advertising


## Red Team Simulation (Karma/Mana)

### hostapd_cli -i wlan0 karma_enable

```bash
hostapd_cli -i wlan0 karma_enable
```

Enables Karma mode (if using a patched hostapd-mana) to respond to all probe requests


## Red Team Simulation (Rogue AP)

### printf 'interface=wlan0\nssid=CorporateWifi\nwpa=2\nwpa_passphrase=password123\nlogger_stdout=-1\nlogger_stdout_level=0\

```bash
printf 'interface=wlan0\nssid=CorporateWifi\nwpa=2\nwpa_passphrase=password123\nlogger_stdout=-1\nlogger_stdout_level=0\n' > rogue.conf && hostapd -K rogue.conf
```

Example:

```bash
Generate Rogue AP config and run
```

Sets up a Rogue AP mimicking a corporate network and logging full details including keys for interception


## Blue Team Defense (Management Frame Protection)

### printf 'interface=wlan0\nssid=MFP-Strict\nwpa=2\nieee80211w=2\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=MFP-Strict\nwpa=2\nieee80211w=2\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Strict MFP config and run
```

Enforces Management Frame Protection (PMF) to block deauthentication attacks


## Purple Team Validation (VLAN Tagging)

### printf 'interface=wlan0\nssid=VLAN-AP\ndynamic_vlan=1\nvlan_file=hostapd.vlan\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=VLAN-AP\ndynamic_vlan=1\nvlan_file=hostapd.vlan\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Dynamic VLAN config and run
```

Configures dynamic VLAN assignment based on RADIUS attributes or station MAC addresses


## Runtime Control

### hostapd_cli -p /var/run/hostapd ping

```bash
hostapd_cli -p /var/run/hostapd ping
```

Example:

```bash
hostapd_cli ping
```

Pings the running hostapd daemon to verify the control interface is responsive

### hostapd_cli all_sta

```bash
hostapd_cli all_sta
```

Lists all currently associated stations (clients) along with their statistics

### hostapd_cli deauthenticate 00:11:22:33:44:55

```bash
hostapd_cli deauthenticate 00:11:22:33:44:55
```

Example:

```bash
hostapd_cli deauthenticate <MAC>
```

Forces a specific client to disconnect from the access point immediately

### hostapd_cli disassociate 00:11:22:33:44:55

```bash
hostapd_cli disassociate 00:11:22:33:44:55
```

Example:

```bash
hostapd_cli disassociate <MAC>
```

Disassociates a client, effectively kicking them off but allowing immediate reconnection attempts

### hostapd_cli set deny_mac_file hostapd.new_deny

```bash
hostapd_cli set deny_mac_file hostapd.new_deny
```

Example:

```bash
hostapd_cli set deny_mac_file /tmp/new_deny
```

Dynamically updates the path to the MAC deny list file without restarting the AP

### hostapd_cli reload

```bash
hostapd_cli reload
```

Reloads the configuration file to apply changes like updated MAC lists

### hostapd_cli wps_pbc

```bash
hostapd_cli wps_pbc
```

Activates WPS Push Button Configuration mode for the next two minutes

### hostapd_cli wps_pin any 12345670

```bash
hostapd_cli wps_pin any 12345670
```

Registers a specific WPS PIN to allow a client to connect using that PIN

### hostapd_cli get_config

```bash
hostapd_cli get_config
```

Retrieves and displays the current runtime configuration details of the AP

### hostapd_cli log_level DEBUG

```bash
hostapd_cli log_level DEBUG
```

Dynamically changes the logging verbosity to DEBUG while the AP is running


## Advanced Troubleshooting

### hostapd -t -K -f /tmp/hostapd_debug.log hostapd.conf

```bash
hostapd -t -K -f /tmp/hostapd_debug.log hostapd.conf
```

Example:

```bash
hostapd -t -K -f /tmp/debug.log hostapd.conf
```

Runs hostapd logging keys and timestamps to a file for offline packet decryption analysis

### hostapd_cli sta 00:11:22:33:44:55

```bash
hostapd_cli sta 00:11:22:33:44:55
```

Example:

```bash
hostapd_cli sta <MAC>
```

Shows detailed statistics for a single connected client including signal strength and packet counts


## Hotspot 2.0 (Passpoint)

### printf 'interface=wlan0\nssid=PasspointAP\ninterworking=1\naccess_network_type=0\ninternet=1\n' > hostapd.conf && hostap

```bash
printf 'interface=wlan0\nssid=PasspointAP\ninterworking=1\naccess_network_type=0\ninternet=1\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Basic Passpoint config and run
```

Enables Interworking bits to advertise Hotspot 2.0 capabilities to compatible clients


## Channel Switch Announcement

### hostapd_cli chan_switch 5 5180

```bash
hostapd_cli chan_switch 5 5180
```

Example:

```bash
hostapd_cli chan_switch <cs_count> <freq>
```

Initiates a Channel Switch Announcement (CSA) moving the AP to a new frequency after 5 beacons


## Airtime Fairness

### printf 'interface=wlan0\nssid=FairAP\nwsmm_ac_vo_aifs=2\nwsmm_ac_vi_aifs=2\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=FairAP\nwsmm_ac_vo_aifs=2\nwsmm_ac_vi_aifs=2\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate WMM AIFS config and run
```

Tunes WMM parameters (AIFS) to prioritize Voice/Video traffic or enforce airtime fairness


## Incident Response Simulation

### printf 'interface=wlan0\nssid=ForensicHoneypot\nwpa=2\nwpa_passphrase=honeyhoney\nlogger_syslog=1\nlogger_syslog_level=0

```bash
printf 'interface=wlan0\nssid=ForensicHoneypot\nwpa=2\nwpa_passphrase=honeyhoney\nlogger_syslog=1\nlogger_syslog_level=0\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Honeypot config and run
```

Deploys a honeypot AP that logs all events to syslog for SIEM ingestion and incident simulation


## Dynamic Frequency Selection (DFS)

### printf 'interface=wlan0\nssid=DFS-Test\nhw_mode=a\nchannel=52\nieee80211h=1\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=DFS-Test\nhw_mode=a\nchannel=52\nieee80211h=1\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate DFS Channel config and run
```

Configures the AP on a DFS channel (52) requiring radar detection (802.11h) enabled


## Fast BSS Transition (802.11r)

### printf 'interface=wlan0\nssid=RoamingAP\nwpa=2\nwpa_passphrase=roamingpass\nieee80211r=1\nmobility_domain=a1b2\n' > host

```bash
printf 'interface=wlan0\nssid=RoamingAP\nwpa=2\nwpa_passphrase=roamingpass\nieee80211r=1\nmobility_domain=a1b2\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate FT 802.11r config and run
```

Enables Fast Transition (FT) to allow clients to roam quickly between APs in the same mobility domain


## Protection Mechanisms

### printf 'interface=wlan0\nssid=ProtMode\nhw_mode=g\nchannel=6\nrts_threshold=2347\nfragm_threshold=2346\n' > hostapd.conf

```bash
printf 'interface=wlan0\nssid=ProtMode\nhw_mode=g\nchannel=6\nrts_threshold=2347\nfragm_threshold=2346\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate RTS/Frag config and run
```

Adjusts RTS and Fragmentation thresholds to manage collisions in noisy environments


## Client Load Balancing

### printf 'interface=wlan0\nssid=LoadBalanceAP\nmax_num_sta=10\n' > hostapd.conf && hostapd hostapd.conf

```bash
printf 'interface=wlan0\nssid=LoadBalanceAP\nmax_num_sta=10\n' > hostapd.conf && hostapd hostapd.conf
```

Example:

```bash
Generate Max Clients config and run
```

Limits the maximum number of associated stations to 10 to force load balancing to other APs


## Automation Workflow

### hostapd -B hostapd.conf && sleep 5 && hostapd_cli ping && echo 'AP Started'

```bash
hostapd -B hostapd.conf && sleep 5 && hostapd_cli ping && echo 'AP Started'
```

Example:

```bash
hostapd -B conf && check status
```

Automation sequence to start hostapd, wait for initialization, and verify responsiveness


## Cleanup

### killall hostapd

```bash
killall hostapd
```

Stops all running hostapd instances immediately

### rm -f /var/run/hostapd/*

```bash
rm -f /var/run/hostapd/*
```

Cleans up stale control interface sockets to prevent binding errors on restart

### ip link set wlan0 down && ip addr flush dev wlan0

```bash
ip link set wlan0 down && ip addr flush dev wlan0
```

Example:

```bash
ip link set wlan0 down
```

Resets the wireless interface state to default after stopping the access point

## Related tools

- [iw](https://terminal.rokibulroni.com/tool/wireless/iw)
- [airmon-ng](https://terminal.rokibulroni.com/tool/wireless/airmon-ng)
