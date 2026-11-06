# objection

> A runtime mobile-exploration toolkit powered by Frida: bypass SSL pinning, explore the file system and dump keychains without a jailbreak.

- Category: Mobile
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/mobile/objection
- Homepage: https://github.com/sensepost/objection
- Documentation: https://github.com/sensepost/objection/wiki
- Tags: mobile, Frida, SSL pinning

## Install

- pipx: `pipx install objection`

## Starting

### objection -g <package> explore

```bash
objection -g <package> explore
```

Example:

```bash
objection -g com.example.app explore
```

Attaches to a running app through Frida and opens the objection REPL.

### objection -g <package> explore -s "<command>"

```bash
objection -g <package> explore -s "<command>"
```

Example:

```bash
objection -g com.example.app explore -s "android sslpinning disable"
```

Runs a startup command right after attaching.

### objection patchapk -s <apk>

```bash
objection patchapk -s <apk>
```

Example:

```bash
objection patchapk -s app.apk
```

Embeds the Frida gadget into an APK so it works on non-rooted devices.

### objection patchipa -s <ipa> -c <codesign-id>

```bash
objection patchipa -s <ipa> -c <codesign-id>
```

Example:

```bash
objection patchipa -s app.ipa -c "Apple Development: …"
```

Embeds the gadget into an iOS IPA and re-signs it.


## Bypasses

### android sslpinning disable

```bash
android sslpinning disable
```

Hooks common pinning implementations (OkHttp, TrustManager and others) so a proxy can intercept TLS.

### android root disable

```bash
android root disable
```

Defeats common root-detection checks.

### ios sslpinning disable

```bash
ios sslpinning disable
```

Bypasses pinning on iOS.

### ios jailbreak disable

```bash
ios jailbreak disable
```

Defeats common jailbreak checks.


## Exploring

### env

```bash
env
```

The app’s data, cache and files directories.

### ls

```bash
ls
```

Lists files in the current directory on the device; cd and file download work too.

### file download <remote> <local>

```bash
file download <remote> <local>
```

Example:

```bash
file download shared_prefs/prefs.xml prefs.xml
```

Downloads a file from the app sandbox.

### android hooking list activities

```bash
android hooking list activities
```

Lists activities.

### android intent launch_activity <activity>

```bash
android intent launch_activity <activity>
```

Example:

```bash
android intent launch_activity com.example.app.AdminActivity
```

Launches an activity directly, bypassing the normal flow.

### android hooking search classes <pattern>

```bash
android hooking search classes <pattern>
```

Example:

```bash
android hooking search classes crypto
```

Finds loaded classes by name.

### android hooking watch class_method <method> --dump-args --dump-return

```bash
android hooking watch class_method <method> --dump-args --dump-return
```

Example:

```bash
android hooking watch class_method com.example.Auth.check --dump-args --dump-return
```

Logs every call to a method with arguments and return value.

### android hooking set return_value <method> <bool>

```bash
android hooking set return_value <method> <bool>
```

Example:

```bash
android hooking set return_value com.example.License.isValid true
```

Forces a method’s return value.

### android keystore list

```bash
android keystore list
```

Lists entries in the Android keystore.

### ios keychain dump

```bash
ios keychain dump
```

Dumps keychain items accessible to the app.

### memory search "<string>" --string

```bash
memory search "<string>" --string
```

Example:

```bash
memory search "password" --string
```

Searches process memory for a string.

## Related tools

- [Frida](https://terminal.rokibulroni.com/tool/mobile/frida)
- [ADB](https://terminal.rokibulroni.com/tool/mobile/adb)
