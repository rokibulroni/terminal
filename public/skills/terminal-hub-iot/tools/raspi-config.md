# raspi-config

> The Raspberry Pi configuration tool, interactive or scriptable: enable interfaces, set locale, expand storage and tune boot options.

- Category: IoT & Hardware
- Commands: 15
- Page: https://terminal.rokibulroni.com/tool/iot/raspi-config
- Homepage: https://www.raspberrypi.com/documentation/computers/configuration.html
- Documentation: https://www.raspberrypi.com/documentation/computers/configuration.html
- Tags: Raspberry Pi, configuration

## Install

- apt: `sudo apt install raspi-config`

## Interactive

### sudo raspi-config

```bash
sudo raspi-config
```

Opens the menu-driven configuration tool for interfaces, localisation, display, performance and updates.


## Non-interactive

### sudo raspi-config nonint do_ssh 0

```bash
sudo raspi-config nonint do_ssh 0
```

Enables SSH. In nonint mode 0 means enable and 1 means disable.

### sudo raspi-config nonint do_i2c 0

```bash
sudo raspi-config nonint do_i2c 0
```

Enables the I²C interface.

### sudo raspi-config nonint do_spi 0

```bash
sudo raspi-config nonint do_spi 0
```

Enables SPI.

### sudo raspi-config nonint do_serial_hw 0

```bash
sudo raspi-config nonint do_serial_hw 0
```

Enables the hardware serial port.

### sudo raspi-config nonint do_serial_cons 1

```bash
sudo raspi-config nonint do_serial_cons 1
```

Disables the login console on serial so the UART is free for devices.

### sudo raspi-config nonint do_hostname <name>

```bash
sudo raspi-config nonint do_hostname <name>
```

Example:

```bash
sudo raspi-config nonint do_hostname sensor-01
```

Sets the hostname.

### sudo raspi-config nonint do_wifi_country <cc>

```bash
sudo raspi-config nonint do_wifi_country <cc>
```

Example:

```bash
sudo raspi-config nonint do_wifi_country GB
```

Sets the Wi-Fi regulatory country; Wi-Fi stays blocked until this is set.

### sudo raspi-config nonint do_change_timezone <tz>

```bash
sudo raspi-config nonint do_change_timezone <tz>
```

Example:

```bash
sudo raspi-config nonint do_change_timezone Europe/London
```

Sets the timezone.

### sudo raspi-config nonint do_boot_behaviour B1

```bash
sudo raspi-config nonint do_boot_behaviour B1
```

Boots to a console without auto-login. B2 is console with auto-login, B3 desktop, B4 desktop with auto-login.

### sudo raspi-config nonint do_expand_rootfs

```bash
sudo raspi-config nonint do_expand_rootfs
```

Expands the root file system to fill the SD card on the next boot.


## Querying

### sudo raspi-config nonint get_ssh

```bash
sudo raspi-config nonint get_ssh
```

Prints 0 if SSH is enabled and 1 if not.

### sudo raspi-config nonint get_i2c

```bash
sudo raspi-config nonint get_i2c
```

Reports whether I²C is enabled.

### sudo raspi-config nonint get_hostname

```bash
sudo raspi-config nonint get_hostname
```

Prints the configured hostname.

### cat /boot/firmware/config.txt

```bash
cat /boot/firmware/config.txt
```

The firmware configuration file most raspi-config options write to (/boot/config.txt on older releases).

## Related tools

- [vcgencmd](https://terminal.rokibulroni.com/tool/iot/vcgencmd)
- [GPIO tools](https://terminal.rokibulroni.com/tool/iot/gpio)
- [i2c-tools](https://terminal.rokibulroni.com/tool/iot/i2c-tools)
