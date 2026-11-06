# iw

> The modern nl80211 tool for configuring Linux wireless devices: scan, set channels, switch modes and inspect capabilities.

- Category: Wireless
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/wireless/iw
- Homepage: https://wireless.docs.kernel.org/en/latest/en/users/documentation/iw.html
- Documentation: https://wireless.docs.kernel.org/en/latest/en/users/documentation/iw.html
- Tags: Wi-Fi, configuration, Linux

## Install

- apt: `sudo apt install iw`

## Basic Syntax & Help

### iw help

```bash
iw help
```

Displays the summary of all available iw commands and usage syntax

### iw --version

```bash
iw --version
```

Prints the installed version of the iw tool


## Wireless Device Enumeration

### iw list

```bash
iw list
```

Lists all physical wireless devices and details their hardware capabilities

### iw dev

```bash
iw dev
```

Lists all logical wireless interfaces currently recognized by the kernel

### iw phy

```bash
iw phy
```

Lists all physical wireless hardware (WPHY) present on the system


## Interface Information

### iw dev <devname> info

```bash
iw dev <devname> info
```

Example:

```bash
iw dev wlan0 info
```

Shows detailed configuration information for a specific wireless interface

### iw dev <devname> link

```bash
iw dev <devname> link
```

Example:

```bash
iw dev wlan0 link
```

Displays current link status including connected SSID, frequency, and signal strength


## Scanning & Discovery

### iw dev <devname> scan

```bash
iw dev <devname> scan
```

Example:

```bash
iw dev wlan0 scan
```

Initiates a standard active scan for available wireless networks

### iw dev <devname> scan passive

```bash
iw dev <devname> scan passive
```

Example:

```bash
iw dev wlan0 scan passive
```

Performs a passive scan without sending probe requests to remain stealthy

### iw dev <devname> scan -u

```bash
iw dev <devname> scan -u
```

Example:

```bash
iw dev wlan0 scan -u
```

Scans for networks and prints results with human-readable formatting

### iw dev <devname> scan freq <freq>

```bash
iw dev <devname> scan freq <freq>
```

Example:

```bash
iw dev wlan0 scan freq 2412
```

Scans only a specific frequency to save time and reduce noise

### iw dev <devname> scan ssid <ssid>

```bash
iw dev <devname> scan ssid <ssid>
```

Example:

```bash
iw dev wlan0 scan ssid "LabWifi"
```

Initiates an active directed scan specifically for a target SSID

### iw dev <devname> scan dump

```bash
iw dev <devname> scan dump
```

Example:

```bash
iw dev wlan0 scan dump
```

Displays the results of the most recent scan buffer without scanning again

### iw dev <devname> scan trigger

```bash
iw dev <devname> scan trigger
```

Example:

```bash
iw dev wlan0 scan trigger
```

Triggers a background scan without immediately waiting for or printing results


## Interface Mode Management

### iw dev <devname> set type managed

```bash
iw dev <devname> set type managed
```

Example:

```bash
iw dev wlan0 set type managed
```

Sets the interface to managed mode for standard client station operations

### iw dev <devname> set type monitor

```bash
iw dev <devname> set type monitor
```

Example:

```bash
iw dev wlan0 set type monitor
```

Sets the interface to monitor mode for packet sniffing and traffic analysis

### iw dev <devname> set type ibss

```bash
iw dev <devname> set type ibss
```

Example:

```bash
iw dev wlan0 set type ibss
```

Sets the interface to Ad-Hoc (IBSS) mode for peer-to-peer networking

### iw dev <devname> set type ap

```bash
iw dev <devname> set type ap
```

Example:

```bash
iw dev wlan0 set type ap
```

Sets the interface to Access Point mode to broadcast a network

### iw dev <devname> set type wds

```bash
iw dev <devname> set type wds
```

Example:

```bash
iw dev wlan0 set type wds
```

Sets the interface to Wireless Distribution System mode for bridging


## Virtual Interface Management

### iw phy <phyname> interface add <name> type <type>

```bash
iw phy <phyname> interface add <name> type <type>
```

Example:

```bash
iw phy phy0 interface add mon0 type monitor
```

Creates a new virtual interface on the specified physical hardware

### iw dev <devname> del

```bash
iw dev <devname> del
```

Example:

```bash
iw dev mon0 del
```

Deletes a specific virtual wireless interface from the system

### iw dev <devname> set name <newname>

```bash
iw dev <devname> set name <newname>
```

Example:

```bash
iw dev wlan0 set name wifi0
```

Renames a wireless interface to a new custom identifier


## Frequency & Channel Control

### iw dev <devname> set freq <freq>

```bash
iw dev <devname> set freq <freq>
```

Example:

```bash
iw dev wlan0 set freq 2412
```

Forces the interface to listen or transmit on a specific frequency in MHz

### iw dev <devname> set channel <channel>

```bash
iw dev <devname> set channel <channel>
```

Example:

```bash
iw dev wlan0 set channel 6
```

Sets the interface to a specific channel number on the 2.4GHz band

### iw dev <devname> set freq <freq> <width_type>

```bash
iw dev <devname> set freq <freq> <width_type>
```

Example:

```bash
iw dev wlan0 set freq 5180 80MHz
```

Sets frequency with a specific channel width for high throughput testing

### iw dev <devname> set freq <freq> HT20

```bash
iw dev <devname> set freq <freq> HT20
```

Example:

```bash
iw dev wlan0 set freq 2412 HT20
```

Sets the frequency enforcing a standard 20MHz High Throughput width

### iw dev <devname> set freq <freq> HT40+

```bash
iw dev <devname> set freq <freq> HT40+
```

Example:

```bash
iw dev wlan0 set freq 2437 HT40+
```

Sets the frequency enforcing 40MHz width with the secondary channel above

### iw dev <devname> set freq <freq> HT40-

```bash
iw dev <devname> set freq <freq> HT40-
```

Example:

```bash
iw dev wlan0 set freq 2437 HT40-
```

Sets the frequency enforcing 40MHz width with the secondary channel below


## TX Power Configuration

### iw dev <devname> set txpower fixed <mBm>

```bash
iw dev <devname> set txpower fixed <mBm>
```

Example:

```bash
iw dev wlan0 set txpower fixed 2000
```

Sets a fixed transmit power in millibels (2000 mBm = 20 dBm)

### iw dev <devname> set txpower auto

```bash
iw dev <devname> set txpower auto
```

Example:

```bash
iw dev wlan0 set txpower auto
```

Allows the hardware to automatically manage transmit power levels

### iw dev <devname> set txpower limit <mBm>

```bash
iw dev <devname> set txpower limit <mBm>
```

Example:

```bash
iw dev wlan0 set txpower limit 1000
```

Sets a maximum upper limit for transmit power output


## Regulatory Management

### iw reg get

```bash
iw reg get
```

Displays the current regulatory domain and frequency constraints

### iw reg set <ISO>

```bash
iw reg set <ISO>
```

Example:

```bash
iw reg set US
```

Sets the regulatory domain to a specific country code like US or JP


## Connection Management

### iw dev <devname> connect <SSID>

```bash
iw dev <devname> connect <SSID>
```

Example:

```bash
iw dev wlan0 connect "GuestNet"
```

Attempts to connect to an open wireless network with the specified SSID

### iw dev <devname> connect <SSID> <freq>

```bash
iw dev <devname> connect <SSID> <freq>
```

Example:

```bash
iw dev wlan0 connect "GuestNet" 2412
```

Connects to a specific SSID on a forced frequency channel

### iw dev <devname> connect <SSID> key 0:<key>

```bash
iw dev <devname> connect <SSID> key 0:<key>
```

Example:

```bash
iw dev wlan0 connect "WEPNET" key 0:ABCDE
```

Connects to a legacy WEP network using a specific key index

### iw dev <devname> disconnect

```bash
iw dev <devname> disconnect
```

Example:

```bash
iw dev wlan0 disconnect
```

Disconnects the interface from the current Access Point

### iw dev <devname> auth <SSID>

```bash
iw dev <devname> auth <SSID>
```

Example:

```bash
iw dev wlan0 auth "SecureNet"
```

Initiates authentication sequence without full association


## Station & Peer Inspection

### iw dev <devname> station dump

```bash
iw dev <devname> station dump
```

Example:

```bash
iw dev wlan0 station dump
```

Dumps statistics for all currently connected stations or peers

### iw dev <devname> station get <mac>

```bash
iw dev <devname> station get <mac>
```

Example:

```bash
iw dev wlan0 station get 00:11:22:33:44:55
```

Retrieves detailed signal and throughput stats for a specific station MAC

### iw dev <devname> station del <mac>

```bash
iw dev <devname> station del <mac>
```

Example:

```bash
iw dev wlan0 station del 00:11:22:33:44:55
```

Forcibly removes a station from the driver's internal table


## Power Save Configuration

### iw dev <devname> get power_save

```bash
iw dev <devname> get power_save
```

Example:

```bash
iw dev wlan0 get power_save
```

Checks the current power save mode status of the interface

### iw dev <devname> set power_save on

```bash
iw dev <devname> set power_save on
```

Example:

```bash
iw dev wlan0 set power_save on
```

Enables power saving mode to conserve energy during inactivity

### iw dev <devname> set power_save off

```bash
iw dev <devname> set power_save off
```

Example:

```bash
iw dev wlan0 set power_save off
```

Disables power saving to ensure maximum performance and consistent Rx/Tx


## Bitrate Configuration

### iw dev <devname> set bitrates legacy-2.4 <rates>

```bash
iw dev <devname> set bitrates legacy-2.4 <rates>
```

Example:

```bash
iw dev wlan0 set bitrates legacy-2.4 1 2 5.5 11
```

Forces the interface to use specific legacy 802.11b bitrates

### iw dev <devname> set bitrates ht-mcs-2.4 <indexes>

```bash
iw dev <devname> set bitrates ht-mcs-2.4 <indexes>
```

Example:

```bash
iw dev wlan0 set bitrates ht-mcs-2.4 0 1 2 3
```

Restricts the interface to use specific HT MCS indexes on 2.4GHz


## Advanced Monitor Config

### iw dev <devname> set monitor none

```bash
iw dev <devname> set monitor none
```

Example:

```bash
iw dev wlan0 set monitor none
```

Disables all specific monitor mode flags for a raw capture state

### iw dev <devname> set monitor fcsfail

```bash
iw dev <devname> set monitor fcsfail
```

Example:

```bash
iw dev wlan0 set monitor fcsfail
```

Configures monitor mode to pass packets with bad checksums (FCS errors)

### iw dev <devname> set monitor control

```bash
iw dev <devname> set monitor control
```

Example:

```bash
iw dev wlan0 set monitor control
```

Configures monitor mode to capture 802.11 control frames like RTS/CTS

### iw dev <devname> set monitor otherbss

```bash
iw dev <devname> set monitor otherbss
```

Example:

```bash
iw dev wlan0 set monitor otherbss
```

Configures monitor mode to capture traffic from other BSSIDs

### iw dev <devname> set monitor cook

```bash
iw dev <devname> set monitor cook
```

Example:

```bash
iw dev wlan0 set monitor cook
```

Enables cooked monitor mode where the hardware handles some processing


## Event Monitoring

### iw event

```bash
iw event
```

Monitors and displays wireless kernel events in real-time

### iw event -t

```bash
iw event -t
```

Monitors wireless events and prepends a timestamp to each line

### iw event -f

```bash
iw event -f
```

Monitors wireless events and prints full details for each event


## Mesh Networking

### iw dev <devname> mesh join <meshid>

```bash
iw dev <devname> mesh join <meshid>
```

Example:

```bash
iw dev wlan0 mesh join "CityMesh"
```

Joins an 802.11s mesh network with the specified ID

### iw dev <devname> mesh leave

```bash
iw dev <devname> mesh leave
```

Example:

```bash
iw dev wlan0 mesh leave
```

Leaves the currently joined mesh network

### iw dev <devname> mpath dump

```bash
iw dev <devname> mpath dump
```

Example:

```bash
iw dev wlan0 mpath dump
```

Dumps the current mesh path routing table


## Ad-Hoc Networking

### iw dev <devname> ibss join <ssid> <freq>

```bash
iw dev <devname> ibss join <ssid> <freq>
```

Example:

```bash
iw dev wlan0 ibss join "AdHocNet" 2412
```

Joins or creates an IBSS Ad-Hoc network on a specific frequency

### iw dev <devname> ibss leave

```bash
iw dev <devname> ibss leave
```

Example:

```bash
iw dev wlan0 ibss leave
```

Leaves the current IBSS Ad-Hoc network


## 4-Address Mode

### iw dev <devname> set 4addr on

```bash
iw dev <devname> set 4addr on
```

Example:

```bash
iw dev wlan0 set 4addr on
```

Enables 4-address mode usually required for WDS bridging or virtualization

### iw dev <devname> set 4addr off

```bash
iw dev <devname> set 4addr off
```

Example:

```bash
iw dev wlan0 set 4addr off
```

Disables 4-address mode returning to standard 3-address addressing


## PHY Configuration

### iw phy <phyname> set distance <dist>

```bash
iw phy <phyname> set distance <dist>
```

Example:

```bash
iw phy phy0 set distance 1000
```

Sets the coverage class distance in meters to adjust ACK timeouts

### iw phy <phyname> set netns <pid>

```bash
iw phy <phyname> set netns <pid>
```

Example:

```bash
iw phy phy0 set netns 1234
```

Moves the entire physical wireless card into a different network namespace

### iw phy <phyname> set rts <threshold>

```bash
iw phy <phyname> set rts <threshold>
```

Example:

```bash
iw phy phy0 set rts 500
```

Sets the RTS threshold to control collision avoidance for packet sizes

### iw phy <phyname> set frag <threshold>

```bash
iw phy <phyname> set frag <threshold>
```

Example:

```bash
iw phy phy0 set frag 256
```

Sets the fragmentation threshold to split large packets


## Advanced Vendor Commands

### iw dev <devname> vendor recvbin <oui> <subcmd>

```bash
iw dev <devname> vendor recvbin <oui> <subcmd>
```

Example:

```bash
iw dev wlan0 vendor recvbin 0x001374 0x01
```

Sends a vendor-specific command and receives binary output data


## Red Team Workflow

### iw dev <devname> set noack_map <map>

```bash
iw dev <devname> set noack_map <map>
```

Example:

```bash
iw dev wlan0 set noack_map 0x0001
```

Sets the NoACK map to disable acknowledgments for specific traffic classes

### iw phy <phyname> interface add mon0 type monitor flags none

```bash
iw phy <phyname> interface add mon0 type monitor flags none
```

Example:

```bash
iw phy phy0 interface add mon0 type monitor flags none
```

Creates a clean monitor interface with no filtering flags for full capture

### iw dev <devname> scan passive dump

```bash
iw dev <devname> scan passive dump
```

Example:

```bash
iw dev mon0 scan passive dump
```

Dumps scan results collected passively to avoid revealing presence

### iw dev <devname> set channel <chan> <width>

```bash
iw dev <devname> set channel <chan> <width>
```

Example:

```bash
iw dev mon0 set channel 1 20MHz
```

Locks monitor interface to channel 1 with 20MHz width for targeted sniffing

### iw dev <devname> scan trigger freq <freq>

```bash
iw dev <devname> scan trigger freq <freq>
```

Example:

```bash
iw dev wlan0 scan trigger freq 2412
```

Triggers a probe request flood on a single frequency by scanning repeatedly


## Blue Team Workflow

### iw dev <devname> station dump

```bash
iw dev <devname> station dump
```

Example:

```bash
iw dev wlan0 station dump
```

Periodically dumps station info to detect rogue devices or unauthorized connections

### iw dev <devname> link

```bash
iw dev <devname> link
```

Example:

```bash
iw dev wlan0 link
```

Verifies that the defensive sensor is connected to the correct secure SSID

### iw list

```bash
iw list
```

Audits supported ciphers and interface combinations to ensure hardware compliance

### iw reg get

```bash
iw reg get
```

Checks if the regulatory domain has been tampered with or misconfigured


## Purple Team Workflow

### iw phy <phyname> wowlan show

```bash
iw phy <phyname> wowlan show
```

Example:

```bash
iw phy phy0 wowlan show
```

Inspects Wake-on-WLAN capabilities to test power management attacks

### iw dev <devname> get mesh_param

```bash
iw dev <devname> get mesh_param
```

Example:

```bash
iw dev wlan0 get mesh_param
```

Audits mesh parameters to validate routing security settings

### iw dev <devname> survey dump

```bash
iw dev <devname> survey dump
```

Example:

```bash
iw dev wlan0 survey dump
```

Dumps channel survey data to analyze noise floor and channel interference

### iw dev <devname> set type managed

```bash
iw dev <devname> set type managed
```

Example:

```bash
iw dev mon0 set type managed
```

Reverts monitor interface to managed to test defense recovery time


## Automation & Cleanup

### iw dev <devname> del

```bash
iw dev <devname> del
```

Example:

```bash
iw dev mon0 del
```

Removes temporary monitor interfaces created during the testing session

### iw dev <devname> set txpower auto

```bash
iw dev <devname> set txpower auto
```

Example:

```bash
iw dev wlan0 set txpower auto
```

Resets transmit power to default hardware control after testing

### iw reg set 00

```bash
iw reg set 00
```

Resets regulatory domain to the world regulatory domain


## Advanced PHY Info

### iw phy <phyname> channels

```bash
iw phy <phyname> channels
```

Example:

```bash
iw phy phy0 channels
```

Shows detailed frequency and channel mapping for the hardware

### iw phy <phyname> info

```bash
iw phy <phyname> info
```

Example:

```bash
iw phy phy0 info
```

Displays exhaustive capabilities including VHT/HE support and antenna chains


## Access Point Config

### iw dev <devname> set channel <chan> <width> <center1> <center2>

```bash
iw dev <devname> set channel <chan> <width> <center1> <center2>
```

Example:

```bash
iw dev wlan0 set channel 36 80MHz 42
```

Sets complex channel width with center frequencies for VHT AP setup


## Debugging

### iw dev <devname> dump

```bash
iw dev <devname> dump
```

Example:

```bash
iw dev wlan0 dump
```

Dumps internal interface state for debugging driver issues


## Packet Injection Prep

### iw dev <devname> set type monitor flags fcsfail

```bash
iw dev <devname> set type monitor flags fcsfail
```

Example:

```bash
iw dev wlan0 set type monitor flags fcsfail
```

Sets monitor mode and allows bad FCS frames to improve injection analysis


## Off-Channel Operation

### iw dev <devname> roc <freq> <time>

```bash
iw dev <devname> roc <freq> <time>
```

Example:

```bash
iw dev wlan0 roc 2412 500
```

Remains on channel (ROC) for a specific duration in milliseconds


## Antenna Configuration

### iw phy <phyname> set antenna <bitmap> <bitmap>

```bash
iw phy <phyname> set antenna <bitmap> <bitmap>
```

Example:

```bash
iw phy phy0 set antenna 0x1 0x1
```

Configures active TX and RX antennas using bitmaps


## Coexistence

### iw phy <phyname> set sar_specs <specs>

```bash
iw phy <phyname> set sar_specs <specs>
```

Example:

```bash
iw phy phy0 set sar_specs 1
```

Configures Specific Absorption Rate (SAR) limitations


## Power Management

### iw dev <devname> set power_save_scheme <scheme>

```bash
iw dev <devname> set power_save_scheme <scheme>
```

Example:

```bash
iw dev wlan0 set power_save_scheme 1
```

Sets the specific power save scheme (1=min, 2=max)


## Link Measurement

### iw dev <devname> measurement request <meas_type>

```bash
iw dev <devname> measurement request <meas_type>
```

Example:

```bash
iw dev wlan0 measurement request beacon
```

Requests 802.11k radio measurement reports from peers


## FT Roaming

### iw dev <devname> ft_auth <bssid> <over_ds>

```bash
iw dev <devname> ft_auth <bssid> <over_ds>
```

Example:

```bash
iw dev wlan0 ft_auth 00:11:22:33:44:55 1
```

Triggers Fast Transition (802.11r) authentication


## VLAN Config

### iw dev <devname> set vlan <vlanid>

```bash
iw dev <devname> set vlan <vlanid>
```

Example:

```bash
iw dev wlan0 set vlan 10
```

Assigns a VLAN ID to the wireless interface packets


## Scanning Config

### iw dev <devname> scan abort

```bash
iw dev <devname> scan abort
```

Example:

```bash
iw dev wlan0 scan abort
```

Aborts an ongoing scan operation immediately


## Peer Management

### iw dev <devname> peer dump

```bash
iw dev <devname> peer dump
```

Example:

```bash
iw dev wlan0 peer dump
```

Dumps information about mesh peers


## Wiphy Params

### iw phy <phyname> set retry <short> <long>

```bash
iw phy <phyname> set retry <short> <long>
```

Example:

```bash
iw phy phy0 set retry 7 4
```

Sets the hardware retry limit for short and long packets

### iw phy <phyname> set temp_threshold <val>

```bash
iw phy <phyname> set temp_threshold <val>
```

Example:

```bash
iw phy phy0 set temp_threshold 80
```

Sets the temperature threshold for the wireless card


## Device Cleanup

### iw phy <phyname> interface add <name> type managed

```bash
iw phy <phyname> interface add <name> type managed
```

Example:

```bash
iw phy phy0 interface add wlan0 type managed
```

Restores a standard managed interface after deleting a monitor interface


## End of Workflow

### iw dev <devname> disconnect

```bash
iw dev <devname> disconnect
```

Example:

```bash
iw dev wlan0 disconnect
```

Final disconnect command to ensure clean state at end of lab

## Related tools

- [iwconfig](https://terminal.rokibulroni.com/tool/wireless/iwconfig)
- [airmon-ng](https://terminal.rokibulroni.com/tool/wireless/airmon-ng)
- [ip](https://terminal.rokibulroni.com/tool/linux/ip)
