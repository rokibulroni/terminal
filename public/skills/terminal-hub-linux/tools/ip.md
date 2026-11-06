# ip

> The iproute2 tool for addresses, links, routes, neighbours and network namespaces — the modern replacement for ifconfig and route.

- Category: Linux
- Commands: 17
- Page: https://terminal.rokibulroni.com/tool/linux/ip
- Homepage: https://wiki.linuxfoundation.org/networking/iproute2
- Documentation: https://man7.org/linux/man-pages/man8/ip.8.html
- Tags: networking, routing, interfaces

## Install

- apt: `sudo apt install iproute2`

## Addresses

### ip a

```bash
ip a
```

Every interface and its IPv4 and IPv6 addresses (short for ip address show).

### ip -br a

```bash
ip -br a
```

Brief one-line-per-interface summary.

### ip -4 a show <iface>

```bash
ip -4 a show <iface>
```

Example:

```bash
ip -4 a show eth0
```

IPv4 addresses on one interface.

### sudo ip addr add <cidr> dev <iface>

```bash
sudo ip addr add <cidr> dev <iface>
```

Example:

```bash
sudo ip addr add 10.10.14.5/24 dev eth0
```

Adds an address (not persistent across reboots).

### sudo ip addr del <cidr> dev <iface>

```bash
sudo ip addr del <cidr> dev <iface>
```

Example:

```bash
sudo ip addr del 10.10.14.5/24 dev eth0
```

Removes an address.


## Links

### ip -br link

```bash
ip -br link
```

Interfaces, their state and MAC addresses.

### sudo ip link set <iface> up

```bash
sudo ip link set <iface> up
```

Example:

```bash
sudo ip link set eth0 up
```

Brings an interface up; use down to disable it.

### sudo ip link set dev <iface> address <mac>

```bash
sudo ip link set dev <iface> address <mac>
```

Example:

```bash
sudo ip link set dev wlan0 address 02:11:22:33:44:55
```

Changes the MAC address (bring the interface down first).

### ip -s link show <iface>

```bash
ip -s link show <iface>
```

Example:

```bash
ip -s link show eth0
```

Packet, byte, error and drop counters.


## Routing

### ip r

```bash
ip r
```

The routing table; the default route shows your gateway.

### ip route get <ip>

```bash
ip route get <ip>
```

Example:

```bash
ip route get 8.8.8.8
```

Which interface, source address and gateway the kernel would use to reach an address.

### sudo ip route add <cidr> via <gateway>

```bash
sudo ip route add <cidr> via <gateway>
```

Example:

```bash
sudo ip route add 172.16.0.0/16 via 10.10.14.1
```

Adds a static route — common when pivoting into internal networks.

### sudo ip route del <cidr>

```bash
sudo ip route del <cidr>
```

Example:

```bash
sudo ip route del 172.16.0.0/16
```

Deletes a route.


## Neighbours and namespaces

### ip neigh

```bash
ip neigh
```

The ARP/NDP cache: nearby hosts this machine has talked to.

### sudo ip neigh flush all

```bash
sudo ip neigh flush all
```

Clears the neighbour cache.

### ip netns list

```bash
ip netns list
```

Network namespaces, used by containers and for isolated testing.

### sudo ip netns exec <ns> <cmd>

```bash
sudo ip netns exec <ns> <cmd>
```

Example:

```bash
sudo ip netns exec lab ip a
```

Runs a command inside a namespace.

## Related tools

- [ss](https://terminal.rokibulroni.com/tool/network/ss)
- [ping](https://terminal.rokibulroni.com/tool/linux/ping)
- [netstat](https://terminal.rokibulroni.com/tool/network/netstat)
