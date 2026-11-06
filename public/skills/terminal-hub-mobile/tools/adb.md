# ADB

> Android Debug Bridge: install apps, open a shell, pull files, forward ports and read logs on Android devices and emulators.

- Category: Mobile
- Commands: 31
- Page: https://terminal.rokibulroni.com/tool/mobile/adb
- Homepage: https://developer.android.com/tools/adb
- Documentation: https://developer.android.com/tools/adb
- Tags: Android, debugging

## Install

- apt: `sudo apt install adb`
- brew: `brew install --cask android-platform-tools`
- windows: `winget install Google.PlatformTools`

## Devices

### adb devices -l

```bash
adb devices -l
```

Lists connected devices and emulators with model and transport ID. “unauthorized” means you must accept the prompt on the device.

### adb -s <serial> <command>

```bash
adb -s <serial> <command>
```

Example:

```bash
adb -s emulator-5554 shell
```

Targets one device when several are connected.

### adb tcpip 5555

```bash
adb tcpip 5555
```

Restarts adbd listening on TCP so you can disconnect the cable.

### adb connect <ip>:<port>

```bash
adb connect <ip>:<port>
```

Example:

```bash
adb connect 192.168.1.50:5555
```

Connects over the network.

### adb pair <ip>:<port>

```bash
adb pair <ip>:<port>
```

Example:

```bash
adb pair 192.168.1.50:37123
```

Pairs with Android 11+ wireless debugging using the code shown on the device.

### adb kill-server && adb start-server

```bash
adb kill-server && adb start-server
```

Restarts the local adb server when devices stop showing up.


## Shell

### adb shell

```bash
adb shell
```

Opens an interactive shell on the device.

### adb shell <command>

```bash
adb shell <command>
```

Example:

```bash
adb shell getprop ro.build.version.release
```

Runs a single command — here, printing the Android version.

### adb root

```bash
adb root
```

Restarts adbd as root. Works on emulators and userdebug builds, not on production phones.

### adb shell "su -c <command>"

```bash
adb shell "su -c <command>"
```

Example:

```bash
adb shell "su -c id"
```

Runs a command as root on a rooted device.

### adb shell getprop

```bash
adb shell getprop
```

Every system property: build fingerprint, security patch level, debuggable flag and more.


## Apps

### adb install <apk>

```bash
adb install <apk>
```

Example:

```bash
adb install app.apk
```

Installs an APK. -r reinstalls keeping data; -g grants all runtime permissions.

### adb install-multiple <apks>

```bash
adb install-multiple <apks>
```

Example:

```bash
adb install-multiple base.apk split_config.arm64_v8a.apk
```

Installs a split APK set.

### adb uninstall <package>

```bash
adb uninstall <package>
```

Example:

```bash
adb uninstall com.example.app
```

Removes an app. -k keeps its data.

### adb shell pm list packages -3

```bash
adb shell pm list packages -3
```

Third-party packages. Add -f to show the APK path.

### adb shell pm path <package>

```bash
adb shell pm path <package>
```

Example:

```bash
adb shell pm path com.example.app
```

Where the APK lives, so you can pull it.

### adb shell dumpsys package <package>

```bash
adb shell dumpsys package <package>
```

Example:

```bash
adb shell dumpsys package com.example.app
```

Permissions, activities, version and signing details.

### adb shell am start -n <package>/<activity>

```bash
adb shell am start -n <package>/<activity>
```

Example:

```bash
adb shell am start -n com.example.app/.MainActivity
```

Launches an activity, including non-exported ones when run as root.

### adb shell am force-stop <package>

```bash
adb shell am force-stop <package>
```

Example:

```bash
adb shell am force-stop com.example.app
```

Kills an app.

### adb shell run-as <package> ls files

```bash
adb shell run-as <package> ls files
```

Example:

```bash
adb shell run-as com.example.app ls shared_prefs
```

Accesses a debuggable app’s private data without root.


## Files and logs

### adb pull <remote> <local>

```bash
adb pull <remote> <local>
```

Example:

```bash
adb pull /sdcard/Download/ ./loot/
```

Copies from the device.

### adb push <local> <remote>

```bash
adb push <local> <remote>
```

Example:

```bash
adb push frida-server /data/local/tmp/
```

Copies to the device; /data/local/tmp is writable and executable.

### adb logcat

```bash
adb logcat
```

Streams the system log.

### adb logcat --pid=$(adb shell pidof -s <package>)

```bash
adb logcat --pid=$(adb shell pidof -s <package>)
```

Example:

```bash
adb logcat --pid=$(adb shell pidof -s com.example.app)
```

Logs from a single app — watch for leaked tokens and debug output.

### adb logcat -c

```bash
adb logcat -c
```

Clears the log buffer.

### adb bugreport <file>.zip

```bash
adb bugreport <file>.zip
```

Example:

```bash
adb bugreport report.zip
```

Collects a full diagnostic bundle.


## Network and screen

### adb forward tcp:<local> tcp:<remote>

```bash
adb forward tcp:<local> tcp:<remote>
```

Example:

```bash
adb forward tcp:27042 tcp:27042
```

Forwards a local port to the device — used by Frida and debuggers.

### adb reverse tcp:<remote> tcp:<local>

```bash
adb reverse tcp:<remote> tcp:<local>
```

Example:

```bash
adb reverse tcp:8080 tcp:8080
```

Lets the device reach a port on your computer, for example an intercepting proxy.

### adb shell settings put global http_proxy <ip>:<port>

```bash
adb shell settings put global http_proxy <ip>:<port>
```

Example:

```bash
adb shell settings put global http_proxy 192.168.1.10:8080
```

Sets a global HTTP proxy; reset with :0.

### adb exec-out screencap -p > <file>

```bash
adb exec-out screencap -p > <file>
```

Example:

```bash
adb exec-out screencap -p > screen.png
```

Takes a screenshot.

### adb shell screenrecord /sdcard/<file>

```bash
adb shell screenrecord /sdcard/<file>
```

Example:

```bash
adb shell screenrecord /sdcard/demo.mp4
```

Records the screen (up to three minutes).

## Related tools

- [Frida](https://terminal.rokibulroni.com/tool/mobile/frida)
- [objection](https://terminal.rokibulroni.com/tool/mobile/objection)
- [Apktool](https://terminal.rokibulroni.com/tool/mobile/apktool)
