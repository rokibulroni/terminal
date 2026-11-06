# iwconfig

> The legacy wireless-extensions tool for viewing and setting interface parameters like mode, channel and power. Prefer iw on modern systems.

- Category: Wireless
- Commands: 72
- Page: https://terminal.rokibulroni.com/tool/wireless/iwconfig
- Documentation: https://linux.die.net/man/8/iwconfig
- Tags: Wi-Fi, configuration, legacy

## Install

- apt: `sudo apt install wireless-tools`

## Basic Syntax

### iwconfig --help

```bash
iwconfig --help
```

Displays the help message listing all available command line parameters and arguments

### iwconfig --version

```bash
iwconfig --version
```

Outputs the version of the wireless tools and the recommended kernel configuration


## Interface Status

### iwconfig

```bash
iwconfig
```

Lists all network interfaces and displays wireless extension information for those that support it

### iwconfig wlan0

```bash
iwconfig wlan0
```

Displays detailed wireless configuration and current status specifically for interface wlan0


## ESSID Configuration

### iwconfig wlan0 essid "LabNetwork"

```bash
iwconfig wlan0 essid "LabNetwork"
```

Configures the interface to connect to a network with the specific name LabNetwork

### iwconfig wlan0 essid off

```bash
iwconfig wlan0 essid off
```

Disables the ESSID configuration allowing the driver to attempt association with any available network

### iwconfig wlan0 essid any

```bash
iwconfig wlan0 essid any
```

Configures the interface to accept any ESSID which is useful for roaming or initial site surveys


## Mode Management

### iwconfig wlan0 mode managed

```bash
iwconfig wlan0 mode managed
```

Sets the interface to managed mode for standard client connection to an Access Point

### iwconfig wlan0 mode monitor

```bash
iwconfig wlan0 mode monitor
```

Sets the interface to monitor mode for passive packet capture and security assessment

### iwconfig wlan0 mode ad-hoc

```bash
iwconfig wlan0 mode ad-hoc
```

Configures the interface for peer-to-peer communication without a central Access Point

### iwconfig wlan0 mode master

```bash
iwconfig wlan0 mode master
```

Attempts to set the interface to Master mode to act as an Access Point (driver dependent)

### iwconfig wlan0 mode repeater

```bash
iwconfig wlan0 mode repeater
```

Sets the interface to repeater mode to forward packets between other wireless nodes

### iwconfig wlan0 mode secondary

```bash
iwconfig wlan0 mode secondary
```

Configures the interface as a secondary backup master/repeater if supported by hardware


## Frequency Management

### iwconfig wlan0 channel 6

```bash
iwconfig wlan0 channel 6
```

Forces the wireless interface to operate specifically on channel 6

### iwconfig wlan0 channel auto

```bash
iwconfig wlan0 channel auto
```

Allows the driver to automatically select the best available channel

### iwconfig wlan0 freq 2.412G

```bash
iwconfig wlan0 freq 2.412G
```

Sets the operating frequency explicitly to 2.412 GHz (Channel 1)

### iwconfig wlan0 freq 5.220G

```bash
iwconfig wlan0 freq 5.220G
```

Sets the operating frequency explicitly to 5.220 GHz for 5GHz band operation


## Access Point Targeting

### iwconfig wlan0 ap 00:11:22:33:44:55

```bash
iwconfig wlan0 ap 00:11:22:33:44:55
```

Forces the client to associate only with the Access Point matching the specified MAC address

### iwconfig wlan0 ap any

```bash
iwconfig wlan0 ap any
```

Removes specific AP locks and allows association with any AP responding to the ESSID

### iwconfig wlan0 ap off

```bash
iwconfig wlan0 ap off
```

Prevents the interface from associating with any Access Point


## Bitrate Configuration

### iwconfig wlan0 rate 54M

```bash
iwconfig wlan0 rate 54M
```

Sets the transmission bitrate to a fixed speed of 54 Megabits per second

### iwconfig wlan0 rate auto

```bash
iwconfig wlan0 rate auto
```

Enables automatic rate scaling to adjust speed based on signal quality

### iwconfig wlan0 rate 11M fixed

```bash
iwconfig wlan0 rate 11M fixed
```

Forces the card to use 11Mbps and prevents it from dropping to lower speeds

### iwconfig wlan0 rate 5.5M auto

```bash
iwconfig wlan0 rate 5.5M auto
```

Sets the maximum bitrate to 5.5Mbps but allows the driver to lower it if interference occurs


## Power Control

### iwconfig wlan0 txpower 30mW

```bash
iwconfig wlan0 txpower 30mW
```

Sets the transmission power output to exactly 30 milliwatts

### iwconfig wlan0 txpower 15

```bash
iwconfig wlan0 txpower 15
```

Sets the transmission power output to 15 dBm

### iwconfig wlan0 txpower auto

```bash
iwconfig wlan0 txpower auto
```

Allows the radio hardware to manage its own power output levels

### iwconfig wlan0 txpower off

```bash
iwconfig wlan0 txpower off
```

Disables the radio transmitter completely effectively turning on airplane mode for that interface


## Power Management

### iwconfig wlan0 power on

```bash
iwconfig wlan0 power on
```

Enables power management features allowing the card to sleep when idle to save battery

### iwconfig wlan0 power off

```bash
iwconfig wlan0 power off
```

Disables power management forcing the card to stay awake for maximum performance

### iwconfig wlan0 power timeout 500ms

```bash
iwconfig wlan0 power timeout 500ms
```

Sets the time the card waits before entering sleep mode to 500 milliseconds

### iwconfig wlan0 power period 2s

```bash
iwconfig wlan0 power period 2s
```

Sets the cycle period between wake-ups to 2 seconds


## Packet Handling

### iwconfig wlan0 rts 250

```bash
iwconfig wlan0 rts 250
```

Sets the RTS/CTS handshake threshold to 250 bytes to reduce collisions in hidden node scenarios

### iwconfig wlan0 rts off

```bash
iwconfig wlan0 rts off
```

Disables the RTS/CTS mechanism entirely

### iwconfig wlan0 frag 512

```bash
iwconfig wlan0 frag 512
```

Sets the fragmentation threshold to 512 bytes causing larger packets to be split

### iwconfig wlan0 frag off

```bash
iwconfig wlan0 frag off
```

Disables packet fragmentation ensuring packets are sent whole regardless of size


## Encryption Setup

### iwconfig wlan0 key off

```bash
iwconfig wlan0 key off
```

Disables all WEP encryption keys on the interface

### iwconfig wlan0 key 0123-4567-89

```bash
iwconfig wlan0 key 0123-4567-89
```

Sets the WEP encryption key using hex digits

### iwconfig wlan0 key s:password

```bash
iwconfig wlan0 key s:password
```

Sets the WEP encryption key using an ASCII string

### iwconfig wlan0 key open

```bash
iwconfig wlan0 key open
```

Sets the authentication mode to Open System

### iwconfig wlan0 key restricted

```bash
iwconfig wlan0 key restricted
```

Sets the authentication mode to Restricted (Shared Key) requiring a valid key to associate

### iwconfig wlan0 key [1] 0123456789

```bash
iwconfig wlan0 key [1] 0123456789
```

Sets the WEP key specifically for index slot 1


## Identity Configuration

### iwconfig wlan0 nick "MyNode"

```bash
iwconfig wlan0 nick "MyNode"
```

Sets the station nickname used in some legacy diagnostics and protocols


## Retry Configuration

### iwconfig wlan0 retry 7

```bash
iwconfig wlan0 retry 7
```

Sets the maximum number of retransmissions for a failed packet to 7

### iwconfig wlan0 retry short 4

```bash
iwconfig wlan0 retry short 4
```

Sets the retry limit specifically for packets smaller than the RTS threshold

### iwconfig wlan0 retry long 7

```bash
iwconfig wlan0 retry long 7
```

Sets the retry limit specifically for packets larger than the RTS threshold


## Sensitivity Tuning

### iwconfig wlan0 sens -80

```bash
iwconfig wlan0 sens -80
```

Sets the signal sensitivity threshold to -80 dBm so signals weaker than this are ignored

### iwconfig wlan0 sens 2

```bash
iwconfig wlan0 sens 2
```

Sets the sensitivity range to 2 which usually correlates to a percentage or hardware specific scale


## Modulation Control

### iwconfig wlan0 modu 11g

```bash
iwconfig wlan0 modu 11g
```

Forces the interface to use 802.11g modulation schemes

### iwconfig wlan0 modu auto

```bash
iwconfig wlan0 modu auto
```

Allows the hardware to automatically select the best modulation modulation scheme


## Commit Changes

### iwconfig wlan0 commit

```bash
iwconfig wlan0 commit
```

Forces the driver to apply pending configuration changes immediately


## Legacy NWID

### iwconfig wlan0 nwid 100

```bash
iwconfig wlan0 nwid 100
```

Sets the Network ID (Domain ID) for legacy pre-802.11 hardware grouping

### iwconfig wlan0 nwid off

```bash
iwconfig wlan0 nwid off
```

Disables NWID checking allowing reception of packets from any domain


## Red Team Workflow

### iwconfig wlan0 mode monitor channel 6

```bash
iwconfig wlan0 mode monitor channel 6
```

Quickly sets the interface to monitor mode on a specific channel for targeted sniffing

### iwconfig wlan0 txpower 30mW key off

```bash
iwconfig wlan0 txpower 30mW key off
```

Boosts transmission power and clears encryption keys to prepare for injection attacks

### iwconfig wlan0 essid "FakeAP" mode master

```bash
iwconfig wlan0 essid "FakeAP" mode master
```

Configures the interface to act as a rogue Access Point with a specific ESSID


## Blue Team Defense

### iwconfig wlan0 mode managed ap 00:11:22:33:44:55

```bash
iwconfig wlan0 mode managed ap 00:11:22:33:44:55
```

Locks the defensive sensor to a specific AP BSSID to prevent unauthorized roaming

### iwconfig wlan0 rate 1M fixed

```bash
iwconfig wlan0 rate 1M fixed
```

Forces a low fixed bitrate to maintain connectivity in high interference environments


## Purple Team Validation

### iwconfig wlan0 txpower 1mW

```bash
iwconfig wlan0 txpower 1mW
```

Lowers transmission power to the minimum to simulate a weak signal client at the edge of the cell

### iwconfig wlan0 rts 100 frag 256

```bash
iwconfig wlan0 rts 100 frag 256
```

Sets aggressive fragmentation thresholds to test how the AP handles fragmented packet reassembly


## Incident Response

### iwconfig wlan0 essid off key off mode managed

```bash
iwconfig wlan0 essid off key off mode managed
```

Rapidly neutralizes the interface configuration to disconnect from any potentially compromised network


## Automation Workflow

### iwconfig wlan0 channel 1 && iwconfig wlan0 channel 6

```bash
iwconfig wlan0 channel 1 && iwconfig wlan0 channel 6
```

Chains commands to hop channels sequentially for manual coverage testing


## Troubleshooting

### iwconfig wlan0 power off retry 10

```bash
iwconfig wlan0 power off retry 10
```

Disables power saving and increases retries to troubleshoot intermittent connection drops


## Diagnostics

### iwconfig wlan0 | grep "Link Quality"

```bash
iwconfig wlan0 | grep "Link Quality"
```

Extracts just the link quality and signal level statistics from the status output


## Advanced Config

### iwconfig wlan0 enc 0123456789 [2]

```bash
iwconfig wlan0 enc 0123456789 [2]
```

Sets a WEP key specifically in slot 2 using the enc alias for key

### iwconfig wlan0 sens -60 retry short 2

```bash
iwconfig wlan0 sens -60 retry short 2
```

Configures strict sensitivity and low retry counts for high-speed low-latency environment tuning


## Clean Up

### iwconfig wlan0 txpower auto rate auto

```bash
iwconfig wlan0 txpower auto rate auto
```

Resets power and rate settings to hardware defaults after testing


## Red Team Prep

### iwconfig wlan0 mode monitor frag off rts off

```bash
iwconfig wlan0 mode monitor frag off rts off
```

Prepares interface for raw packet injection by disabling packet modifying thresholds


## Ad-Hoc Setup

### iwconfig wlan0 mode ad-hoc essid "Mesh" channel 11

```bash
iwconfig wlan0 mode ad-hoc essid "Mesh" channel 11
```

One-line configuration to establish a specific Ad-Hoc mesh cell on channel 11


## Signal Testing

### watch -n 1 iwconfig wlan0

```bash
watch -n 1 iwconfig wlan0
```

Continuously updates the iwconfig status to monitor signal strength changes in real time


## Driver Reset

### iwconfig wlan0 essid ""

```bash
iwconfig wlan0 essid ""
```

Clears the ESSID string to blank which forces some drivers to reset their association state


## Encryption Security

### iwconfig wlan0 key off enc off

```bash
iwconfig wlan0 key off enc off
```

Explicitly disables encryption using both key and enc aliases to ensure open mode

## Related tools

- [iw](https://terminal.rokibulroni.com/tool/wireless/iw)
- [airmon-ng](https://terminal.rokibulroni.com/tool/wireless/airmon-ng)
