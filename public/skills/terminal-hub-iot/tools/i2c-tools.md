# i2c-tools

> Utilities to detect, read and write devices on an I²C bus: i2cdetect, i2cget, i2cset and i2cdump.

- Category: IoT & Hardware
- Commands: 14
- Page: https://terminal.rokibulroni.com/tool/iot/i2c-tools
- Homepage: https://i2c.wiki.kernel.org/index.php/I2C_Tools
- Documentation: https://man7.org/linux/man-pages/man8/i2cdetect.8.html
- Tags: I2C, hardware, embedded

## Install

- apt: `sudo apt install i2c-tools`

## Discovering

### i2cdetect -l

```bash
i2cdetect -l
```

Lists the I²C buses on the system.

### i2cdetect -y 1

```bash
i2cdetect -y 1
```

Scans bus 1 and shows a grid of responding 7-bit addresses. -y skips the confirmation prompt.

### i2cdetect -y -r 1

```bash
i2cdetect -y -r 1
```

Scans with read-byte commands instead of quick-write — safer for some write-sensitive chips.

### i2cdetect -F 1

```bash
i2cdetect -F 1
```

Shows what the bus adapter supports.


## Reading

### i2cget -y <bus> <addr> <reg>

```bash
i2cget -y <bus> <addr> <reg>
```

Example:

```bash
i2cget -y 1 0x76 0xD0
```

Reads one register. 0xD0 on a BME280 at 0x76 returns its chip ID (0x60).

### i2cget -y <bus> <addr> <reg> w

```bash
i2cget -y <bus> <addr> <reg> w
```

Example:

```bash
i2cget -y 1 0x48 0x00 w
```

Reads a 16-bit word. Note the byte order may be swapped relative to the datasheet.

### i2cdump -y <bus> <addr>

```bash
i2cdump -y <bus> <addr>
```

Example:

```bash
i2cdump -y 1 0x50
```

Dumps all 256 registers — on an EEPROM at 0x50 this reads stored data.

### i2cdump -y -r <start>-<end> <bus> <addr>

```bash
i2cdump -y -r <start>-<end> <bus> <addr>
```

Example:

```bash
i2cdump -y -r 0x00-0x0F 1 0x68
```

Dumps only a range of registers.


## Writing

### i2cset -y <bus> <addr> <reg> <value>

```bash
i2cset -y <bus> <addr> <reg> <value>
```

Example:

```bash
i2cset -y 1 0x20 0x00 0x00
```

Writes a byte to a register — here, setting all pins of an MCP23017 as outputs.

### i2cset -y <bus> <addr> <reg> <value> w

```bash
i2cset -y <bus> <addr> <reg> <value> w
```

Example:

```bash
i2cset -y 1 0x40 0x00 0x1234 w
```

Writes a 16-bit word.

### i2ctransfer -y <bus> w<n>@<addr> <bytes> r<m>

```bash
i2ctransfer -y <bus> w<n>@<addr> <bytes> r<m>
```

Example:

```bash
i2ctransfer -y 1 w1@0x50 0x00 r16
```

Combined write-then-read in one transaction — here, setting an EEPROM pointer to 0 and reading 16 bytes.


## Setup

### sudo raspi-config nonint do_i2c 0

```bash
sudo raspi-config nonint do_i2c 0
```

Enables I²C on a Raspberry Pi.

### ls /dev/i2c-*

```bash
ls /dev/i2c-*
```

Confirms the bus device nodes exist.

### sudo usermod -aG i2c $USER

```bash
sudo usermod -aG i2c $USER
```

Lets your user access I²C without sudo (log out and back in).

## Related tools

- [GPIO tools](https://terminal.rokibulroni.com/tool/iot/gpio)
- [raspi-config](https://terminal.rokibulroni.com/tool/iot/raspi-config)
