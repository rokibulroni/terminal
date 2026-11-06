# libcamera apps

> Capture stills and video from Raspberry Pi camera modules with rpicam-still, rpicam-vid and friends (formerly libcamera-*).

- Category: IoT & Hardware
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/iot/libcamera
- Homepage: https://libcamera.org
- Documentation: https://www.raspberrypi.com/documentation/computers/camera_software.html
- Tags: camera, Raspberry Pi

## Install

- apt: `sudo apt install rpicam-apps`

## Detecting

### rpicam-hello --list-cameras

```bash
rpicam-hello --list-cameras
```

Lists connected cameras with their sensor modes and resolutions.

### rpicam-hello -t 0

```bash
rpicam-hello -t 0
```

Shows a live preview until you stop it. On older releases the command is libcamera-hello.


## Stills

### rpicam-still -o <file>

```bash
rpicam-still -o <file>
```

Example:

```bash
rpicam-still -o photo.jpg
```

Takes a JPEG after a short preview for auto-exposure.

### rpicam-still -n -t 1 -o <file>

```bash
rpicam-still -n -t 1 -o <file>
```

Example:

```bash
rpicam-still -n -t 1 -o quick.jpg
```

No preview and minimal delay — useful in scripts.

### rpicam-still --width <w> --height <h> -o <file>

```bash
rpicam-still --width <w> --height <h> -o <file>
```

Example:

```bash
rpicam-still --width 1920 --height 1080 -o hd.jpg
```

Sets the resolution.

### rpicam-still -r -o <file>

```bash
rpicam-still -r -o <file>
```

Example:

```bash
rpicam-still -r -o raw.jpg
```

Also saves a DNG raw file.

### rpicam-still --timelapse <ms> -t <ms> -o <pattern>

```bash
rpicam-still --timelapse <ms> -t <ms> -o <pattern>
```

Example:

```bash
rpicam-still --timelapse 60000 -t 3600000 -o tl_%04d.jpg
```

One frame a minute for an hour.

### rpicam-still --shutter <us> --gain <g> -o <file>

```bash
rpicam-still --shutter <us> --gain <g> -o <file>
```

Example:

```bash
rpicam-still --shutter 2000000 --gain 1 -o night.jpg
```

Manual exposure: a 2-second shutter at base gain.

### rpicam-still --hflip --vflip -o <file>

```bash
rpicam-still --hflip --vflip -o <file>
```

Flips the image when the camera is mounted upside down.


## Video

### rpicam-vid -t <ms> -o <file>

```bash
rpicam-vid -t <ms> -o <file>
```

Example:

```bash
rpicam-vid -t 10000 -o clip.h264
```

Records raw H.264 for the given milliseconds.

### rpicam-vid -t <ms> --codec libav -o <file>.mp4

```bash
rpicam-vid -t <ms> --codec libav -o <file>.mp4
```

Example:

```bash
rpicam-vid -t 10000 --codec libav -o clip.mp4
```

Records straight to MP4.

### rpicam-vid -t 0 --inline --listen -o tcp://0.0.0.0:<port>

```bash
rpicam-vid -t 0 --inline --listen -o tcp://0.0.0.0:<port>
```

Example:

```bash
rpicam-vid -t 0 --inline --listen -o tcp://0.0.0.0:8888
```

Streams video over TCP; open tcp://<pi>:8888 in VLC or ffplay.

### rpicam-vid --framerate <fps> --width <w> --height <h> -o <file>

```bash
rpicam-vid --framerate <fps> --width <w> --height <h> -o <file>
```

Example:

```bash
rpicam-vid --framerate 60 --width 1280 --height 720 -t 5000 -o fast.h264
```

Sets resolution and frame rate.

## Related tools

- [raspi-config](https://terminal.rokibulroni.com/tool/iot/raspi-config)
- [vcgencmd](https://terminal.rokibulroni.com/tool/iot/vcgencmd)
