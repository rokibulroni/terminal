# Apktool

> Decodes Android APKs to near-original resources and smali code, and rebuilds them after modification.

- Category: Mobile
- Commands: 16
- Page: https://terminal.rokibulroni.com/tool/mobile/apktool
- Homepage: https://apktool.org
- Documentation: https://apktool.org/docs/the-basics/intro
- Tags: Android, reverse engineering, APK

## Install

- apt: `sudo apt install apktool`
- brew: `brew install apktool`

## Decoding

### apktool d <apk>

```bash
apktool d <apk>
```

Example:

```bash
apktool d app.apk
```

Decodes resources and AndroidManifest.xml to readable XML and the code to smali, in a folder named after the APK.

### apktool d <apk> -o <dir>

```bash
apktool d <apk> -o <dir>
```

Example:

```bash
apktool d app.apk -o app_src
```

Chooses the output directory.

### apktool d -f <apk>

```bash
apktool d -f <apk>
```

Overwrites an existing output directory.

### apktool d -s <apk>

```bash
apktool d -s <apk>
```

Keeps classes.dex undecoded — faster when you only need resources and the manifest.

### apktool d -r <apk>

```bash
apktool d -r <apk>
```

Leaves resources undecoded, which avoids rebuild problems when you only edit smali.

### apktool d --only-main-classes <apk>

```bash
apktool d --only-main-classes <apk>
```

Skips extra dex files that are not part of the main app code.


## Reviewing

### grep -E "debuggable|allowBackup|exported|usesCleartextTraffic" <dir>/AndroidManifest.xml

```bash
grep -E "debuggable|allowBackup|exported|usesCleartextTraffic" <dir>/AndroidManifest.xml
```

Example:

```bash
grep -E "debuggable|allowBackup|exported|usesCleartextTraffic" app_src/AndroidManifest.xml
```

Quick manifest review for risky flags and exported components.

### grep -rniE "api[_-]?key|secret|password|token" <dir>/res

```bash
grep -rniE "api[_-]?key|secret|password|token" <dir>/res
```

Example:

```bash
grep -rniE "api[_-]?key|secret|password|token" app_src/res
```

Hunts for hard-coded secrets in resources.

### cat <dir>/res/xml/network_security_config.xml

```bash
cat <dir>/res/xml/network_security_config.xml
```

Example:

```bash
cat app_src/res/xml/network_security_config.xml
```

Shows certificate pinning and cleartext rules.


## Rebuilding

### apktool b <dir>

```bash
apktool b <dir>
```

Example:

```bash
apktool b app_src
```

Rebuilds the APK into <dir>/dist/.

### apktool b <dir> -o <apk>

```bash
apktool b <dir> -o <apk>
```

Example:

```bash
apktool b app_src -o patched.apk
```

Rebuilds to a chosen file name.

### zipalign -p -f 4 <in> <out>

```bash
zipalign -p -f 4 <in> <out>
```

Example:

```bash
zipalign -p -f 4 patched.apk aligned.apk
```

Aligns the APK, required before signing with apksigner.

### apksigner sign --ks <keystore> <apk>

```bash
apksigner sign --ks <keystore> <apk>
```

Example:

```bash
apksigner sign --ks test.keystore aligned.apk
```

Signs the rebuilt APK so it can be installed.

### keytool -genkey -v -keystore <file> -alias <alias> -keyalg RSA -keysize 2048 -validity 10000

```bash
keytool -genkey -v -keystore <file> -alias <alias> -keyalg RSA -keysize 2048 -validity 10000
```

Example:

```bash
keytool -genkey -v -keystore test.keystore -alias test -keyalg RSA -keysize 2048 -validity 10000
```

Creates a throwaway signing key.


## Frameworks

### apktool if <framework-res.apk>

```bash
apktool if <framework-res.apk>
```

Example:

```bash
apktool if framework-res.apk
```

Installs a vendor framework needed to decode some system apps.

### apktool empty-framework-dir --force

```bash
apktool empty-framework-dir --force
```

Clears cached frameworks when decoding fails with resource errors.

## Related tools

- [ADB](https://terminal.rokibulroni.com/tool/mobile/adb)
- [Frida](https://terminal.rokibulroni.com/tool/mobile/frida)
- [Ghidra](https://terminal.rokibulroni.com/tool/reversing/ghidra)
