# drozer

> A security-testing framework for Android that interacts with app components — activities, providers, services — over IPC to find weaknesses.

- Category: Mobile
- Commands: 18
- Page: https://terminal.rokibulroni.com/tool/mobile/drozer
- Homepage: https://github.com/WithSecureLabs/drozer
- Documentation: https://github.com/WithSecureLabs/drozer#usage
- Tags: Android, IPC, app security

## Install

- pipx: `pipx install drozer`

## Connecting

### adb forward tcp:31415 tcp:31415

```bash
adb forward tcp:31415 tcp:31415
```

Forwards the drozer agent port from the device. Start the drozer Agent app and turn its server on first.

### drozer console connect

```bash
drozer console connect
```

Connects to the agent and opens the drozer console.

### drozer console connect --server <ip>

```bash
drozer console connect --server <ip>
```

Example:

```bash
drozer console connect --server 192.168.1.50
```

Connects to an agent over the network.


## Recon

### run app.package.list -f <filter>

```bash
run app.package.list -f <filter>
```

Example:

```bash
run app.package.list -f example
```

Finds installed packages by name.

### run app.package.info -a <package>

```bash
run app.package.info -a <package>
```

Example:

```bash
run app.package.info -a com.example.app
```

Version, data directory, UID and requested permissions.

### run app.package.attacksurface <package>

```bash
run app.package.attacksurface <package>
```

Example:

```bash
run app.package.attacksurface com.example.app
```

Counts exported activities, services, receivers and providers, and flags debuggable apps.

### run app.package.manifest <package>

```bash
run app.package.manifest <package>
```

Example:

```bash
run app.package.manifest com.example.app
```

Prints the manifest.


## Activities and services

### run app.activity.info -a <package>

```bash
run app.activity.info -a <package>
```

Example:

```bash
run app.activity.info -a com.example.app
```

Lists exported activities and the permissions protecting them.

### run app.activity.start --component <package> <activity>

```bash
run app.activity.start --component <package> <activity>
```

Example:

```bash
run app.activity.start --component com.example.app com.example.app.AdminActivity
```

Starts an exported activity directly — tests for authentication bypass.

### run app.service.info -a <package>

```bash
run app.service.info -a <package>
```

Example:

```bash
run app.service.info -a com.example.app
```

Exported services.

### run app.broadcast.info -a <package>

```bash
run app.broadcast.info -a <package>
```

Example:

```bash
run app.broadcast.info -a com.example.app
```

Exported broadcast receivers.

### run app.broadcast.send --action <action> --extra string <key> <value>

```bash
run app.broadcast.send --action <action> --extra string <key> <value>
```

Example:

```bash
run app.broadcast.send --action com.example.RESET --extra string user admin
```

Sends a crafted broadcast to a receiver.


## Content providers

### run app.provider.info -a <package>

```bash
run app.provider.info -a <package>
```

Example:

```bash
run app.provider.info -a com.example.app
```

Exported content providers and their permissions.

### run scanner.provider.finduris -a <package>

```bash
run scanner.provider.finduris -a <package>
```

Example:

```bash
run scanner.provider.finduris -a com.example.app
```

Guesses accessible content URIs.

### run app.provider.query <uri>

```bash
run app.provider.query <uri>
```

Example:

```bash
run app.provider.query content://com.example.app.provider/users
```

Queries a provider — may expose private data.

### run scanner.provider.injection -a <package>

```bash
run scanner.provider.injection -a <package>
```

Example:

```bash
run scanner.provider.injection -a com.example.app
```

Tests providers for SQL injection.

### run scanner.provider.traversal -a <package>

```bash
run scanner.provider.traversal -a <package>
```

Example:

```bash
run scanner.provider.traversal -a com.example.app
```

Tests file-backed providers for path traversal.

### run app.provider.read <uri>

```bash
run app.provider.read <uri>
```

Example:

```bash
run app.provider.read content://com.example.app.files/../../../../etc/hosts
```

Reads a file through a provider, for example to confirm traversal.

## Related tools

- [ADB](https://terminal.rokibulroni.com/tool/mobile/adb)
- [Frida](https://terminal.rokibulroni.com/tool/mobile/frida)
- [Apktool](https://terminal.rokibulroni.com/tool/mobile/apktool)
