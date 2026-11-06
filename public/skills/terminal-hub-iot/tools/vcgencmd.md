# vcgencmd

> Queries the Raspberry Pi’s VideoCore firmware: temperature, clock speeds, voltages, throttling state and memory split.

- Category: IoT & Hardware
- Commands: 16
- Page: https://terminal.rokibulroni.com/tool/iot/vcgencmd
- Homepage: https://www.raspberrypi.com/documentation/computers/os.html#vcgencmd
- Documentation: https://www.raspberrypi.com/documentation/computers/os.html#vcgencmd
- Tags: Raspberry Pi, hardware, monitoring

## Install

- apt: `sudo apt install libraspberrypi-bin`

## Health

### vcgencmd measure_temp

```bash
vcgencmd measure_temp
```

SoC temperature. The Pi starts throttling at about 80 °C.

### vcgencmd get_throttled

```bash
vcgencmd get_throttled
```

Throttling flags as a hex bitmask. 0x0 is healthy; bit 0 is under-voltage now, bit 2 throttled now, bit 16 under-voltage has occurred since boot.

### vcgencmd measure_volts core

```bash
vcgencmd measure_volts core
```

Core voltage. Also accepts sdram_c, sdram_i and sdram_p.

### watch -n 1 vcgencmd measure_temp

```bash
watch -n 1 vcgencmd measure_temp
```

Watches temperature once a second, for example during a stress test.

### vcgencmd pmic_read_adc

```bash
vcgencmd pmic_read_adc
```

Raw PMIC voltages and currents on the Raspberry Pi 5.


## Clocks

### vcgencmd measure_clock arm

```bash
vcgencmd measure_clock arm
```

Current ARM CPU frequency in Hz.

### vcgencmd measure_clock core

```bash
vcgencmd measure_clock core
```

GPU core frequency.

### for c in arm core h264 isp v3d uart emmc; do echo "$c: $(vcgencmd measure_clock $c)"; done

```bash
for c in arm core h264 isp v3d uart emmc; do echo "$c: $(vcgencmd measure_clock $c)"; done
```

Prints every major clock.

### vcgencmd get_config arm_freq

```bash
vcgencmd get_config arm_freq
```

Configured maximum ARM frequency from config.txt.


## Memory and firmware

### vcgencmd get_mem arm

```bash
vcgencmd get_mem arm
```

Memory available to the ARM CPU.

### vcgencmd get_mem gpu

```bash
vcgencmd get_mem gpu
```

Memory reserved for the GPU.

### vcgencmd version

```bash
vcgencmd version
```

Firmware build date and version.

### vcgencmd get_config int

```bash
vcgencmd get_config int
```

Every integer setting the firmware loaded from config.txt.

### vcgencmd codec_enabled H264

```bash
vcgencmd codec_enabled H264
```

Whether a hardware codec is enabled.

### vcgencmd display_power 0

```bash
vcgencmd display_power 0
```

Turns HDMI output off; 1 turns it back on.

### vcgencmd otp_dump

```bash
vcgencmd otp_dump
```

One-time-programmable memory, including the board serial and revision.

## Related tools

- [raspi-config](https://terminal.rokibulroni.com/tool/iot/raspi-config)
- [GPIO tools](https://terminal.rokibulroni.com/tool/iot/gpio)
