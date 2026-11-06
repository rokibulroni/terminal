# airmon-ng

> Puts wireless interfaces into monitor mode and stops processes that would interfere with packet capture.

- Category: Wireless
- Commands: 55
- Page: https://terminal.rokibulroni.com/tool/wireless/airmon-ng
- Homepage: https://www.aircrack-ng.org
- Documentation: https://www.aircrack-ng.org/doku.php?id=airmon-ng
- Tags: Wi-Fi, monitor mode

## Install

- apt: `sudo apt install aircrack-ng`

## Basic Syntax

### airmon-ng

```bash
airmon-ng
```

Lists all physically detected wireless interfaces and their current status without modifying them.

### airmon-ng --help

```bash
airmon-ng --help
```

Displays the help menu showing supported arguments and usage syntax.


## Interfering Process Management

### airmon-ng check

```bash
airmon-ng check
```

Identifies system processes like NetworkManager or wpa_supplicant that may interfere with monitor mode.

### airmon-ng check kill

```bash
airmon-ng check kill
```

Forcefully terminates all processes identified as conflicting with wireless monitor mode operations.


## Monitor Mode Enablement

### airmon-ng start <interface>

```bash
airmon-ng start <interface>
```

Example:

```bash
airmon-ng start wlan0
```

Enables monitor mode on the specified interface, typically creating a virtual interface named wlan0mon.

### airmon-ng start <interface> <channel>

```bash
airmon-ng start <interface> <channel>
```

Example:

```bash
airmon-ng start wlan0 1
```

Enables monitor mode on the specified interface and locks the radio to channel 1.

### airmon-ng start <interface> <channel>

```bash
airmon-ng start <interface> <channel>
```

Example:

```bash
airmon-ng start wlan0 6
```

Enables monitor mode on the specified interface and locks the radio to channel 6.

### airmon-ng start <interface> <channel>

```bash
airmon-ng start <interface> <channel>
```

Example:

```bash
airmon-ng start wlan0 11
```

Enables monitor mode on the specified interface and locks the radio to channel 11.


## Monitor Mode Disablement

### airmon-ng stop <mon_interface>

```bash
airmon-ng stop <mon_interface>
```

Example:

```bash
airmon-ng stop wlan0mon
```

Disables monitor mode on the virtual interface and attempts to restore the original managed mode interface.

### airmon-ng stop <phy_interface>

```bash
airmon-ng stop <phy_interface>
```

Example:

```bash
airmon-ng stop wlan0
```

Disables monitor mode by referencing the physical interface name if the virtual name is unknown.


## Output and Logging

### airmon-ng --verbose

```bash
airmon-ng --verbose
```

Runs airmon-ng with verbose output to display detailed information about interface detection and driver handling.

### airmon-ng --debug

```bash
airmon-ng --debug
```

Runs airmon-ng in debug mode to trace internal script execution and diagnose driver compatibility issues.


## Monitor Mode Enablement

### airmon-ng start <interface> <5ghz_channel>

```bash
airmon-ng start <interface> <5ghz_channel>
```

Example:

```bash
airmon-ng start wlan0 36
```

Enables monitor mode and locks the radio to 5GHz channel 36 for low-band 5GHz analysis.

### airmon-ng start <interface> <5ghz_channel>

```bash
airmon-ng start <interface> <5ghz_channel>
```

Example:

```bash
airmon-ng start wlan0 149
```

Enables monitor mode and locks the radio to 5GHz channel 149 for high-band 5GHz analysis.


## Advanced Troubleshooting

### airmon-ng --verbose start <interface>

```bash
airmon-ng --verbose start <interface>
```

Example:

```bash
airmon-ng --verbose start wlan0
```

Combines verbose logging with the start command to identify errors during the monitor mode transition.

### airmon-ng --verbose stop <interface>

```bash
airmon-ng --verbose stop <interface>
```

Example:

```bash
airmon-ng --verbose stop wlan0mon
```

Combines verbose logging with the stop command to diagnose issues when returning to managed mode.

### airmon-ng --debug check

```bash
airmon-ng --debug check
```

Debugs the process check routine to see exactly which PIDs are being identified as conflicting.


## Red Team Preparation

### airmon-ng check kill && airmon-ng start <interface>

```bash
airmon-ng check kill && airmon-ng start <interface>
```

Example:

```bash
airmon-ng check kill && airmon-ng start wlan0
```

Standard Red Team preparation workflow to kill interference and immediately start monitoring in one sequence.

### airmon-ng start <interface> && iwconfig

```bash
airmon-ng start <interface> && iwconfig
```

Example:

```bash
airmon-ng start wlan0 && iwconfig
```

Starts monitor mode and immediately verifies the interface mode and settings using iwconfig.

### airmon-ng check kill && airmon-ng start <interface> <channel>

```bash
airmon-ng check kill && airmon-ng start <interface> <channel>
```

Example:

```bash
airmon-ng check kill && airmon-ng start wlan0 6
```

Prepares the environment and starts monitoring specifically on channel 6 for targeted attacks.


## Blue Team Defensive Validation

### airmon-ng start <interface> <channel> && airodump-ng <mon_interface>

```bash
airmon-ng start <interface> <channel> && airodump-ng <mon_interface>
```

Example:

```bash
airmon-ng start wlan0 1 && airodump-ng wlan0mon
```

Starts monitor mode on channel 1 and immediately begins packet capture to validate visibility of threats.

### airmon-ng check > check_log.txt

```bash
airmon-ng check > check_log.txt
```

Logs the list of interfering processes to a file for auditing which services interfere with security tools.


## Purple Team Detection Testing

### airmon-ng start <interface> && echo 'Monitor Mode Active' || echo 'Failed'

```bash
airmon-ng start <interface> && echo 'Monitor Mode Active' || echo 'Failed'
```

Example:

```bash
airmon-ng start wlan0 && echo 'Monitor Mode Active' || echo 'Failed'
```

Automation friendly command to attempt monitor mode and output a clear success or failure status.


## Multiple Interface Management

### airmon-ng start <interface1> && airmon-ng start <interface2>

```bash
airmon-ng start <interface1> && airmon-ng start <interface2>
```

Example:

```bash
airmon-ng start wlan0 && airmon-ng start wlan1
```

Enables monitor mode on two separate physical cards for multi-channel or full-duplex attack simulation.

### airmon-ng start <interface1> 6 && airmon-ng start <interface2> 11

```bash
airmon-ng start <interface1> 6 && airmon-ng start <interface2> 11
```

Example:

```bash
airmon-ng start wlan0 6 && airmon-ng start wlan1 11
```

Configures two interfaces on non-overlapping channels to double capture bandwidth or jam/monitor simultaneously.


## Incident Response Simulation

### airmon-ng start <interface> && tcpdump -i <mon_interface>

```bash
airmon-ng start <interface> && tcpdump -i <mon_interface>
```

Example:

```bash
airmon-ng start wlan0 && tcpdump -i wlan0mon
```

Rapidly enables monitor mode and pipes traffic into tcpdump for immediate forensic packet analysis.


## Cleanup and Recovery

### airmon-ng stop <mon_interface> && service network-manager start

```bash
airmon-ng stop <mon_interface> && service network-manager start
```

Example:

```bash
airmon-ng stop wlan0mon && service network-manager start
```

Stops monitor mode and manually restarts the Network Manager service to restore internet connectivity.

### airmon-ng stop <mon_interface> && airmon-ng check

```bash
airmon-ng stop <mon_interface> && airmon-ng check
```

Example:

```bash
airmon-ng stop wlan0mon && airmon-ng check
```

Disables monitor mode and runs a check to confirm if interference processes are still absent.


## Driver Specific Handling

### airmon-ng check kill && modprobe -r <driver> && modprobe <driver>

```bash
airmon-ng check kill && modprobe -r <driver> && modprobe <driver>
```

Example:

```bash
airmon-ng check kill && modprobe -r ath9k && modprobe ath9k
```

Kills processes and reloads the specific wireless driver to reset the hardware state before starting.


## Automation and Pipeline

### airmon-ng | grep <chipset>

```bash
airmon-ng | grep <chipset>
```

Example:

```bash
airmon-ng | grep Atheros
```

Filters airmon-ng output to confirm the presence of a specific chipset family for script logic.

### airmon-ng | awk '{print $2}'

```bash
airmon-ng | awk '{print $2}'
```

Extracts just the interface names from the airmon-ng list for use in variables or loops.


## Specific Frequency Targeting

### airmon-ng start <interface> <DFS_channel>

```bash
airmon-ng start <interface> <DFS_channel>
```

Example:

```bash
airmon-ng start wlan0 52
```

Attempts to start monitor mode on a DFS (Dynamic Frequency Selection) channel for radar compliance testing.

### airmon-ng start <interface> <weather_channel>

```bash
airmon-ng start <interface> <weather_channel>
```

Example:

```bash
airmon-ng start wlan0 120
```

Targets specific weather radar frequencies to validate driver compliance or specialized listening capabilities.


## Legacy Compatibility

### airmon-ng start <interface> && iw <mon_interface> set channel <channel>

```bash
airmon-ng start <interface> && iw <mon_interface> set channel <channel>
```

Example:

```bash
airmon-ng start wlan0 && iw wlan0mon set channel 1
```

Starts monitor mode via airmon-ng but delegates channel switching to 'iw' for granular control.

### airmon-ng stop <mon_interface> && ifconfig <phy_interface> up

```bash
airmon-ng stop <mon_interface> && ifconfig <phy_interface> up
```

Example:

```bash
airmon-ng stop wlan0mon && ifconfig wlan0 up
```

Stops monitor mode and explicitly forces the physical interface up using legacy ifconfig tools.


## Verbose Diagnostics

### airmon-ng --verbose check kill

```bash
airmon-ng --verbose check kill
```

Executes the kill command with verbose output to see exactly which PIDs and process names are terminated.


## Scripted Deployment

### airmon-ng check kill; airmon-ng start wlan0; airmon-ng

```bash
airmon-ng check kill; airmon-ng start wlan0; airmon-ng
```

Full scripted sequence: kill processes, start monitor mode, and print status to verify success.


## High Frequency Monitoring

### airmon-ng start <interface> 165

```bash
airmon-ng start <interface> 165
```

Example:

```bash
airmon-ng start wlan0 165
```

Targets channel 165, often used for industrial scientific applications, to check for non-standard Wi-Fi traffic.


## Interface Renaming Verification

### airmon-ng start <interface> && ip link show

```bash
airmon-ng start <interface> && ip link show
```

Example:

```bash
airmon-ng start wlan0 && ip link show
```

Starts monitor mode and uses ip link to verify the new interface name (e.g., wlan0mon vs mon0).


## Safe Termination

### airmon-ng stop <mon_interface>; systemctl restart NetworkManager

```bash
airmon-ng stop <mon_interface>; systemctl restart NetworkManager
```

Example:

```bash
airmon-ng stop wlan0mon; systemctl restart NetworkManager
```

Modern systemd-based command to stop monitoring and restore full network stack functionality.


## Headless Operation

### airmon-ng start <interface> > /dev/null 2>&1

```bash
airmon-ng start <interface> > /dev/null 2>&1
```

Example:

```bash
airmon-ng start wlan0 > /dev/null 2>&1
```

Starts monitor mode silently, suppressing all output, suitable for background cron jobs or automated boxes.


## Interactive Verification

### airmon-ng check kill && read -p 'Press Enter to Start' && airmon-ng start <interface>

```bash
airmon-ng check kill && read -p 'Press Enter to Start' && airmon-ng start <interface>
```

Example:

```bash
airmon-ng check kill && read -p 'Press Enter to Start' && airmon-ng start wlan0
```

Pauses the workflow after killing processes to allow manual verification before enabling monitor mode.


## Conflict Resolution

### killall wpa_supplicant && airmon-ng start <interface>

```bash
killall wpa_supplicant && airmon-ng start <interface>
```

Example:

```bash
killall wpa_supplicant && airmon-ng start wlan0
```

Manually kills wpa_supplicant before starting airmon-ng if the internal check fails to remove it.


## Chipset ID Enumeration

### airmon-ng | grep -E 'Ralink|Realtek|Atheros|Intel'

```bash
airmon-ng | grep -E 'Ralink|Realtek|Atheros|Intel'
```

Rapidly filters airmon-ng output to identify major chipset manufacturers for driver selection.


## Reset State

### airmon-ng stop <mon_interface>; airmon-ng start <phy_interface>

```bash
airmon-ng stop <mon_interface>; airmon-ng start <phy_interface>
```

Example:

```bash
airmon-ng stop wlan0mon; airmon-ng start wlan0
```

Cycles monitor mode off and then immediately back on to clear buffer errors or stuck radio states.


## Specific Band Start

### airmon-ng start <interface> 14

```bash
airmon-ng start <interface> 14
```

Example:

```bash
airmon-ng start wlan0 14
```

Attempts to start on channel 14, which is valid only in specific regulatory domains (e.g., Japan).


## Virtual Interface Check

### airmon-ng | grep mon

```bash
airmon-ng | grep mon
```

Quickly checks if any monitor mode interfaces are currently active.


## Red Team Persistence

### airmon-ng start <interface> && while true; do :; done

```bash
airmon-ng start <interface> && while true; do :; done
```

Example:

```bash
airmon-ng start wlan0 && while true; do :; done
```

Starts monitor mode and keeps the shell session alive, preventing timeout in some remote shell environments.


## Driver Debugging

### airmon-ng --debug start <interface> > debug_log.txt 2>&1

```bash
airmon-ng --debug start <interface> > debug_log.txt 2>&1
```

Example:

```bash
airmon-ng --debug start wlan0 > debug_log.txt 2>&1
```

Captures full debug output to a file for later analysis when reporting driver bugs.


## Multi-Card Setup

### airmon-ng start wlan0 && airmon-ng start wlan1 && airmon-ng start wlan2

```bash
airmon-ng start wlan0 && airmon-ng start wlan1 && airmon-ng start wlan2
```

Enables monitor mode on a 3-card array for simultaneous monitoring of channels 1, 6, and 11.


## Force Channel Hop

### airmon-ng start <interface> && airodump-ng <mon_interface> --channel 1,6,11

```bash
airmon-ng start <interface> && airodump-ng <mon_interface> --channel 1,6,11
```

Example:

```bash
airmon-ng start wlan0 && airodump-ng wlan0mon --channel 1,6,11
```

Starts monitor mode and immediately delegates hopping between non-overlapping channels to airodump.


## Pre-flight Check

### rfkill unblock all && airmon-ng check kill

```bash
rfkill unblock all && airmon-ng check kill
```

Ensures no hardware or software blocks exist via rfkill before attempting to manage processes.


## Post-Op Verification

### airmon-ng stop <mon_interface> && ping -c 1 8.8.8.8

```bash
airmon-ng stop <mon_interface> && ping -c 1 8.8.8.8
```

Example:

```bash
airmon-ng stop wlan0mon && ping -c 1 8.8.8.8
```

Stops monitor mode and attempts a ping to verify that normal managed mode networking is restored.


## Advanced Channel Lock

### airmon-ng start <interface> <channel> && iwconfig <mon_interface> freq <frequency>

```bash
airmon-ng start <interface> <channel> && iwconfig <mon_interface> freq <frequency>
```

Example:

```bash
airmon-ng start wlan0 6 && iwconfig wlan0mon freq 2.437G
```

Starts on a channel and double-confirms the frequency lock using iwconfig for sensitive measurements.


## Full Reset Workflow

### airmon-ng stop <mon_interface>; rmmod <driver>; modprobe <driver>; airmon-ng start <phy_interface>

```bash
airmon-ng stop <mon_interface>; rmmod <driver>; modprobe <driver>; airmon-ng start <phy_interface>
```

Example:

```bash
airmon-ng stop wlan0mon; rmmod iwlwifi; modprobe iwlwifi; airmon-ng start wlan0
```

Complete nuclear reset: stops monitor, reloads kernel module, and restarts monitor mode to clear deep driver faults.

## Related tools

- [airodump-ng](https://terminal.rokibulroni.com/tool/wireless/airodump-ng)
- [iw](https://terminal.rokibulroni.com/tool/wireless/iw)
- [iwconfig](https://terminal.rokibulroni.com/tool/wireless/iwconfig)
