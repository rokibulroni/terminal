# Frida

> A dynamic instrumentation toolkit: inject JavaScript into running processes on Android, iOS, Windows, macOS and Linux to trace and modify behaviour.

- Category: Mobile
- Commands: 18
- Page: https://terminal.rokibulroni.com/tool/mobile/frida
- Homepage: https://frida.re
- Documentation: https://frida.re/docs/home/
- Tags: instrumentation, hooking, mobile

## Install

- pipx: `pipx install frida-tools`

## Setup

### pip install frida-tools

```bash
pip install frida-tools
```

Installs the Frida CLI tools. The frida-server on the device must match this version exactly.

### frida --version

```bash
frida --version
```

Prints the client version, so you can download the matching frida-server.

### adb push frida-server /data/local/tmp/ && adb shell "chmod 755 /data/local/tmp/frida-server"

```bash
adb push frida-server /data/local/tmp/ && adb shell "chmod 755 /data/local/tmp/frida-server"
```

Copies frida-server to a rooted Android device and makes it executable.

### adb shell "su -c /data/local/tmp/frida-server &"

```bash
adb shell "su -c /data/local/tmp/frida-server &"
```

Starts frida-server as root in the background.


## Discovery

### frida-ls-devices

```bash
frida-ls-devices
```

Lists devices Frida can see.

### frida-ps -U

```bash
frida-ps -U
```

Processes on the USB-connected device.

### frida-ps -Uai

```bash
frida-ps -Uai
```

Installed apps with their identifiers and PIDs of running ones.


## Attaching and spawning

### frida -U -f <package>

```bash
frida -U -f <package>
```

Example:

```bash
frida -U -f com.example.app
```

Spawns the app with Frida attached and opens a JavaScript REPL. Spawning catches code that runs at startup.

### frida -U -n <name>

```bash
frida -U -n <name>
```

Example:

```bash
frida -U -n "Example"
```

Attaches to an already running process by name.

### frida -U -p <pid>

```bash
frida -U -p <pid>
```

Example:

```bash
frida -U -p 4321
```

Attaches by PID.

### frida -U -f <package> -l <script>

```bash
frida -U -f <package> -l <script>
```

Example:

```bash
frida -U -f com.example.app -l bypass.js
```

Loads a script into the process at startup.

### frida -U -f <package> --codeshare <handle>

```bash
frida -U -f <package> --codeshare <handle>
```

Example:

```bash
frida -U -f com.example.app --codeshare akabe1/frida-multiple-unpinning
```

Loads a community script from Frida CodeShare. Read it before running it.

### frida -H <ip>:<port> -n <name>

```bash
frida -H <ip>:<port> -n <name>
```

Example:

```bash
frida -H 192.168.1.50:27042 -n target
```

Connects to a remote frida-server over the network.


## Tracing

### frida-trace -U -f <package> -j "<class>!<method>"

```bash
frida-trace -U -f <package> -j "<class>!<method>"
```

Example:

```bash
frida-trace -U -f com.example.app -j "*Crypto*!*"
```

Auto-generates hooks for Java methods matching a pattern and logs calls.

### frida-trace -U -n <name> -i "<function>"

```bash
frida-trace -U -n <name> -i "<function>"
```

Example:

```bash
frida-trace -U -n target -i "open*"
```

Traces native functions such as open and openat.

### frida-trace -U -n <name> -m "-[<class> <selector>]"

```bash
frida-trace -U -n <name> -m "-[<class> <selector>]"
```

Example:

```bash
frida-trace -U -n Example -m "-[NSURLSession *]"
```

Traces Objective-C methods on iOS.


## Snippets

### Java.perform(() => { const C = Java.use('<class>'); C.<method>.implementation = function () { return true; }; });

```bash
Java.perform(() => { const C = Java.use('<class>'); C.<method>.implementation = function () { return true; }; });
```

Example:

```bash
Java.perform(() => { const C = Java.use('com.example.Security'); C.isRooted.implementation = function () { return false; }; });
```

REPL or script snippet: replaces a Java method’s return value — here, defeating a root check.

### Interceptor.attach(Module.getExportByName(null, '<fn>'), { onEnter(args) { console.log(args[0].readUtf8String()); } });

```bash
Interceptor.attach(Module.getExportByName(null, '<fn>'), { onEnter(args) { console.log(args[0].readUtf8String()); } });
```

Example:

```bash
Interceptor.attach(Module.getExportByName(null, 'open'), { onEnter(args) { console.log(args[0].readUtf8String()); } });
```

Hooks a native function and logs its first argument.

## Related tools

- [objection](https://terminal.rokibulroni.com/tool/mobile/objection)
- [ADB](https://terminal.rokibulroni.com/tool/mobile/adb)
- [drozer](https://terminal.rokibulroni.com/tool/mobile/drozer)
