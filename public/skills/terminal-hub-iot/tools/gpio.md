# GPIO tools

> Reading and driving Raspberry Pi GPIO pins from the shell using pinctrl and the libgpiod utilities (gpiodetect, gpioget, gpioset).

- Category: IoT & Hardware
- Commands: 14
- Page: https://terminal.rokibulroni.com/tool/iot/gpio
- Homepage: https://www.raspberrypi.com/documentation/computers/os.html#gpio-and-the-40-pin-header
- Documentation: https://libgpiod.readthedocs.io
- Tags: GPIO, Raspberry Pi, hardware

## Install

- apt: `sudo apt install gpiod`

## Discovering

### pinout

```bash
pinout
```

Prints a diagram of the 40-pin header for the board you are on (from python3-gpiozero).

### gpiodetect

```bash
gpiodetect
```

Lists GPIO chips. On a Pi 5 the header is on gpiochip4 (or a chip labelled pinctrl-rp1); on earlier models gpiochip0.

### gpioinfo

```bash
gpioinfo
```

Every line on every chip with its name, direction and whether it is in use.

### gpiofind <name>

```bash
gpiofind <name>
```

Example:

```bash
gpiofind GPIO17
```

Finds the chip and offset for a named line (libgpiod 1.x).


## Reading and writing (libgpiod)

### gpioget <chip> <line>

```bash
gpioget <chip> <line>
```

Example:

```bash
gpioget gpiochip0 17
```

Reads the current value of a line (1.x syntax; in 2.x use gpioget -c gpiochip0 17).

### gpioset <chip> <line>=<value>

```bash
gpioset <chip> <line>=<value>
```

Example:

```bash
gpioset gpiochip0 17=1
```

Drives a line high. In libgpiod 2.x gpioset keeps running to hold the value until you stop it.

### gpiomon <chip> <line>

```bash
gpiomon <chip> <line>
```

Example:

```bash
gpiomon gpiochip0 27
```

Waits for and prints edge events, such as a button press.

### gpioget -B pull-up <chip> <line>

```bash
gpioget -B pull-up <chip> <line>
```

Example:

```bash
gpioget -B pull-up gpiochip0 22
```

Enables the internal pull-up resistor while reading.


## pinctrl (Raspberry Pi OS)

### pinctrl get

```bash
pinctrl get
```

State of every pin: function, direction, pull and level.

### pinctrl get <pin>

```bash
pinctrl get <pin>
```

Example:

```bash
pinctrl get 17
```

State of one pin.

### pinctrl set <pin> op dh

```bash
pinctrl set <pin> op dh
```

Example:

```bash
pinctrl set 17 op dh
```

Sets a pin as an output driving high; dl drives low.

### pinctrl set <pin> ip pu

```bash
pinctrl set <pin> ip pu
```

Example:

```bash
pinctrl set 22 ip pu
```

Sets a pin as an input with pull-up.

### pinctrl funcs <pin>

```bash
pinctrl funcs <pin>
```

Example:

```bash
pinctrl funcs 14
```

Lists the alternate functions a pin supports (UART, SPI, I²C…).


## Python

### python3 -c "from gpiozero import LED; from time import sleep; l=LED(17); l.on(); sleep(1); l.off()"

```bash
python3 -c "from gpiozero import LED; from time import sleep; l=LED(17); l.on(); sleep(1); l.off()"
```

Blinks an LED on GPIO17 once using gpiozero.

## Related tools

- [i2c-tools](https://terminal.rokibulroni.com/tool/iot/i2c-tools)
- [raspi-config](https://terminal.rokibulroni.com/tool/iot/raspi-config)
