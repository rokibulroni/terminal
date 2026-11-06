# Docker

> The Docker CLI: build, run and inspect containers and images, and audit their configuration, mounts, capabilities and networks.

- Category: Cloud
- Commands: 140
- Page: https://terminal.rokibulroni.com/tool/cloud/docker
- Homepage: https://www.docker.com
- Documentation: https://docs.docker.com/reference/cli/docker/
- Tags: containers, images

## Install

- apt: `sudo apt install docker.io`
- brew: `brew install --cask docker`
- windows: `winget install Docker.DockerDesktop`

## Basic Setup and Verification

### docker --version

```bash
docker --version
```

Outputs the installed Docker CLI version to verify installation

### docker version

```bash
docker version
```

Displays detailed version information for both Docker Client and Server

### docker info

```bash
docker info
```

Shows system-wide information including kernel version, storage driver, and container counts

### docker help

```bash
docker help
```

Lists all available commands and global options for the Docker CLI

### docker login

```bash
docker login
```

Example:

```bash
docker login registry.example.com
```

Authenticates the Docker client against a container registry


## Image Management

### docker search

```bash
docker search
```

Example:

```bash
docker search nginx --limit 5
```

Searches Docker Hub for public images with an optional limit

### docker pull

```bash
docker pull
```

Example:

```bash
docker pull alpine:latest
```

Downloads a specific image tag from a registry to the local cache

### docker images

```bash
docker images
```

Lists all top-level images currently stored locally

### docker image ls -a

```bash
docker image ls -a
```

Lists all local images including intermediate image layers

### docker tag

```bash
docker tag
```

Example:

```bash
docker tag nginx:latest myrepo/nginx:v1
```

Creates a new tag for an existing local image

### docker push

```bash
docker push
```

Example:

```bash
docker push myrepo/nginx:v1
```

Uploads a locally tagged image to a remote registry

### docker rmi

```bash
docker rmi
```

Example:

```bash
docker rmi alpine:latest
```

Removes one or more images from the local storage

### docker rmi -f

```bash
docker rmi -f
```

Example:

```bash
docker rmi -f alpine:latest
```

Forces the removal of an image even if containers are using it

### docker image prune

```bash
docker image prune
```

Example:

```bash
docker image prune -a
```

Removes all unused images, not just dangling ones

### docker history

```bash
docker history
```

Example:

```bash
docker history nginx:latest
```

Shows the history of layers and commands used to build an image

### docker save

```bash
docker save
```

Example:

```bash
docker save -o myimage.tar nginx:latest
```

Exports an image to a tar archive for offline transfer

### docker load

```bash
docker load
```

Example:

```bash
docker load -i myimage.tar
```

Loads an image from a tar archive into the local docker engine


## Container Lifecycle

### docker create

```bash
docker create
```

Example:

```bash
docker create --name webserver nginx
```

Creates a new container layer but does not start it

### docker start

```bash
docker start
```

Example:

```bash
docker start webserver
```

Starts one or more stopped containers

### docker run -it

```bash
docker run -it
```

Example:

```bash
docker run -it ubuntu /bin/bash
```

Creates and starts a container in interactive mode with a TTY

### docker run -d

```bash
docker run -d
```

Example:

```bash
docker run -d nginx
```

Runs a container in detached mode in the background

### docker run --rm

```bash
docker run --rm
```

Example:

```bash
docker run --rm alpine echo 'hello'
```

Runs a container that automatically removes itself upon exit

### docker ps

```bash
docker ps
```

Lists currently running containers

### docker ps -a

```bash
docker ps -a
```

Lists all containers including stopped ones

### docker stop

```bash
docker stop
```

Example:

```bash
docker stop webserver
```

Gracefully stops a running container by sending SIGTERM

### docker kill

```bash
docker kill
```

Example:

```bash
docker kill webserver
```

Forcibly stops a container by sending SIGKILL

### docker restart

```bash
docker restart
```

Example:

```bash
docker restart webserver
```

Stops and then immediately starts a container

### docker pause

```bash
docker pause
```

Example:

```bash
docker pause webserver
```

Pauses all processes within one or more containers

### docker unpause

```bash
docker unpause
```

Example:

```bash
docker unpause webserver
```

Resumes all processes within one or more paused containers

### docker rm

```bash
docker rm
```

Example:

```bash
docker rm webserver
```

Removes a stopped container from the system

### docker rm -f

```bash
docker rm -f
```

Example:

```bash
docker rm -f webserver
```

Forcibly removes a running container


## Container Interaction

### docker exec

```bash
docker exec
```

Example:

```bash
docker exec -it webserver /bin/bash
```

Runs a new command inside a running container interactively

### docker attach

```bash
docker attach
```

Example:

```bash
docker attach webserver
```

Attaches local standard input, output, and error to a running container

### docker logs

```bash
docker logs
```

Example:

```bash
docker logs webserver
```

Fetches the logs of a container

### docker logs -f

```bash
docker logs -f
```

Example:

```bash
docker logs -f webserver
```

Streams the logs of a container in real-time

### docker cp container to host

```bash
docker cp container to host
```

Example:

```bash
docker cp webserver:/etc/nginx/nginx.conf ./
```

Copies a file from a container to the host filesystem

### docker cp host to container

```bash
docker cp host to container
```

Example:

```bash
docker cp ./index.html webserver:/usr/share/nginx/html/
```

Copies a file from the host filesystem into a container


## Container Inspection

### docker inspect

```bash
docker inspect
```

Example:

```bash
docker inspect webserver
```

Returns low-level information on a container or object in JSON format

### docker stats

```bash
docker stats
```

Displays a live stream of container resource usage statistics

### docker top

```bash
docker top
```

Example:

```bash
docker top webserver
```

Display the running processes of a container

### docker diff

```bash
docker diff
```

Example:

```bash
docker diff webserver
```

Inspects changes to files or directories on a container's filesystem

### docker port

```bash
docker port
```

Example:

```bash
docker port webserver
```

Lists port mappings for the container


## Networking

### docker network ls

```bash
docker network ls
```

Lists all networks created by Docker

### docker network create

```bash
docker network create
```

Example:

```bash
docker network create --driver bridge my-net
```

Creates a new bridge network for containers to communicate

### docker network inspect

```bash
docker network inspect
```

Example:

```bash
docker network inspect my-net
```

Displays detailed information about a network

### docker network connect

```bash
docker network connect
```

Example:

```bash
docker network connect my-net webserver
```

Connects a running container to a network

### docker network disconnect

```bash
docker network disconnect
```

Example:

```bash
docker network disconnect my-net webserver
```

Disconnects a container from a network

### docker network rm

```bash
docker network rm
```

Example:

```bash
docker network rm my-net
```

Removes one or more networks

### docker run -p

```bash
docker run -p
```

Example:

```bash
docker run -d -p 8080:80 nginx
```

Maps host port 8080 to container port 80

### docker run --network host

```bash
docker run --network host
```

Example:

```bash
docker run --network host nginx
```

Runs container using the host's networking stack directly

### docker run --dns

```bash
docker run --dns
```

Example:

```bash
docker run --dns 8.8.8.8 nginx
```

Sets custom DNS servers for the container


## Storage and Volumes

### docker volume ls

```bash
docker volume ls
```

Lists all Docker volumes

### docker volume create

```bash
docker volume create
```

Example:

```bash
docker volume create my-data
```

Creates a new named volume for persistent storage

### docker volume inspect

```bash
docker volume inspect
```

Example:

```bash
docker volume inspect my-data
```

Displays detailed information about a volume

### docker run -v volume

```bash
docker run -v volume
```

Example:

```bash
docker run -v my-data:/data nginx
```

Mounts a named volume to a path inside the container

### docker run -v bind

```bash
docker run -v bind
```

Example:

```bash
docker run -v /host/path:/container/path nginx
```

Binds a host directory to a path inside the container

### docker volume rm

```bash
docker volume rm
```

Example:

```bash
docker volume rm my-data
```

Removes a Docker volume

### docker volume prune

```bash
docker volume prune
```

Removes all unused local volumes


## Building Images

### docker build

```bash
docker build
```

Example:

```bash
docker build -t myapp:v1 .
```

Builds an image from a Dockerfile in the current directory

### docker build file

```bash
docker build file
```

Example:

```bash
docker build -f Dockerfile.dev .
```

Builds an image using a specific Dockerfile filename

### docker build no-cache

```bash
docker build no-cache
```

Example:

```bash
docker build --no-cache -t myapp .
```

Builds an image without using the build cache

### docker build args

```bash
docker build args
```

Example:

```bash
docker build --build-arg VERSION=1.0 .
```

Passes build-time variables to the Dockerfile

### docker build target

```bash
docker build target
```

Example:

```bash
docker build --target production .
```

Builds only up to a specific stage in a multi-stage Dockerfile


## System Maintenance

### docker system df

```bash
docker system df
```

Show docker disk usage

### docker system prune

```bash
docker system prune
```

Example:

```bash
docker system prune -f
```

Remove unused data including stopped containers and dangling images

### docker container prune

```bash
docker container prune
```

Removes all stopped containers


## Security and Isolation

### docker run --user

```bash
docker run --user
```

Example:

```bash
docker run --user 1000:1000 alpine whoami
```

Runs the container as a specific non-root user ID and group ID

### docker run --read-only

```bash
docker run --read-only
```

Example:

```bash
docker run --read-only alpine
```

Mounts the container's root filesystem as read-only

### docker run --cap-drop

```bash
docker run --cap-drop
```

Example:

```bash
docker run --cap-drop ALL alpine
```

Drops all Linux capabilities from the container for hardening

### docker run --cap-add

```bash
docker run --cap-add
```

Example:

```bash
docker run --cap-add NET_ADMIN alpine
```

Adds specific Linux capabilities to the container

### docker run --privileged

```bash
docker run --privileged
```

Example:

```bash
docker run --privileged ubuntu
```

Runs container with full host root capabilities (Use with extreme caution)

### docker run --security-opt

```bash
docker run --security-opt
```

Example:

```bash
docker run --security-opt no-new-privileges alpine
```

Prevents the container processes from gaining new privileges


## Resource Limits

### docker run --memory

```bash
docker run --memory
```

Example:

```bash
docker run --memory 512m nginx
```

Limits the memory usage of the container

### docker run --cpus

```bash
docker run --cpus
```

Example:

```bash
docker run --cpus 0.5 nginx
```

Limits the container to use 50% of a CPU core

### docker run --pids-limit

```bash
docker run --pids-limit
```

Example:

```bash
docker run --pids-limit 100 alpine
```

Limits the number of processes a container can start


## Advanced Networking

### docker network create overlay

```bash
docker network create overlay
```

Example:

```bash
docker network create -d overlay swarm-net
```

Creates a multi-host overlay network (requires Swarm mode)

### docker run --mac-address

```bash
docker run --mac-address
```

Example:

```bash
docker run --mac-address 92:d0:c6:0a:29:33 alpine
```

Sets a static MAC address for the container network interface

### docker run --add-host

```bash
docker run --add-host
```

Example:

```bash
docker run --add-host db-local:10.0.0.5 alpine
```

Adds a custom entry to the container's /etc/hosts file


## Logging and Debugging

### docker logs --tail

```bash
docker logs --tail
```

Example:

```bash
docker logs --tail 10 webserver
```

Shows only the last 10 lines of container logs

### docker logs --timestamps

```bash
docker logs --timestamps
```

Example:

```bash
docker logs --timestamps webserver
```

Adds timestamps to the log output

### docker events

```bash
docker events
```

Streams real-time events from the Docker daemon

### docker events filter

```bash
docker events filter
```

Example:

```bash
docker events --filter 'event=die'
```

Filters system events to show only container termination events


## Advanced Storage

### docker volume create options

```bash
docker volume create options
```

Example:

```bash
docker volume create --driver local --opt type=tmpfs --opt device=tmpfs foo
```

Creates a volume with specific driver options

### docker run --mount

```bash
docker run --mount
```

Example:

```bash
docker run --mount type=bind,source=/data,target=/data nginx
```

Uses the explicit mount syntax for clearer bind mounting

### docker run --tmpfs

```bash
docker run --tmpfs
```

Example:

```bash
docker run --tmpfs /run alpine
```

Mounts a temporary filesystem in memory that is removed when container stops


## Docker Contexts

### docker context ls

```bash
docker context ls
```

Lists available Docker contexts for managing multiple endpoints

### docker context create

```bash
docker context create
```

Example:

```bash
docker context create remote --docker host=ssh://user@remote-host
```

Creates a context to manage a remote Docker daemon via SSH

### docker context use

```bash
docker context use
```

Example:

```bash
docker context use remote
```

Switches the Docker CLI to operate against a specific context


## Docker Compose Integration

### docker compose up

```bash
docker compose up
```

Example:

```bash
docker compose up -d
```

Builds and starts containers defined in docker-compose.yml

### docker compose down

```bash
docker compose down
```

Stops and removes containers and networks defined in docker-compose.yml

### docker compose logs

```bash
docker compose logs
```

Example:

```bash
docker compose logs -f
```

Views output from containers defined in the compose file


## Advanced Management

### docker export

```bash
docker export
```

Example:

```bash
docker export webserver > fs.tar
```

Exports a container's filesystem as a tar archive (without history)

### docker import

```bash
docker import
```

Example:

```bash
docker import fs.tar myimage:imported
```

Imports the contents from a tarball to create a filesystem image

### docker commit

```bash
docker commit
```

Example:

```bash
docker commit webserver myimage:snapshot
```

Creates a new image from a container's changes (Not recommended for production)

### docker wait

```bash
docker wait
```

Example:

```bash
docker wait webserver
```

Blocks until a container stops, then prints its exit code


## Registry & Trust

### docker logout

```bash
docker logout
```

Logs out from a Docker registry

### docker trust inspect

```bash
docker trust inspect
```

Example:

```bash
docker trust inspect nginx:latest
```

Returns trust and signing data for an image

### docker manifest inspect

```bash
docker manifest inspect
```

Example:

```bash
docker manifest inspect nginx:latest
```

Inspects the image manifest to see supported architectures and layers


## Blue Team & Forensics

### docker inspect format

```bash
docker inspect format
```

Example:

```bash
docker inspect --format='{{.NetworkSettings.IPAddress}}' webserver
```

Extracts specific data like IP address using Go templates

### docker inspect mounts

```bash
docker inspect mounts
```

Example:

```bash
docker inspect --format='{{json .Mounts}}' webserver
```

Extracts detailed mounting information for security audit

### docker diff check

```bash
docker diff check
```

Example:

```bash
docker diff suspicious_container
```

Checks for unauthorized file modifications inside a compromised container

### docker history no-trunc

```bash
docker history no-trunc
```

Example:

```bash
docker history --no-trunc nginx:latest
```

Views full command history to find secrets or bad commands in image build


## DevSecOps Workflows

### docker scan

```bash
docker scan
```

Example:

```bash
docker scan myimage:latest
```

Scans the image for vulnerabilities (requires Docker Scan plugin)

### docker sbom

```bash
docker sbom
```

Example:

```bash
docker sbom myimage:latest
```

Generates a Software Bill of Materials for the image (requires plugin)


## Container Hardening

### docker run --ulimit

```bash
docker run --ulimit
```

Example:

```bash
docker run --ulimit nofile=1024:1024 alpine
```

Sets specific ulimits like open file descriptors for the container

### docker run --device

```bash
docker run --device
```

Example:

```bash
docker run --device=/dev/snd:/dev/snd alpine
```

Adds a specific host device to the container

### docker run --cgroup-parent

```bash
docker run --cgroup-parent
```

Example:

```bash
docker run --cgroup-parent=/my-cgroup alpine
```

Specifies the parent cgroup for the container to inherit limits


## Swarm (Basic)

### docker swarm init

```bash
docker swarm init
```

Initializes a swarm on the current node

### docker service create

```bash
docker service create
```

Example:

```bash
docker service create --replicas 3 nginx
```

Creates a replicated service in a Docker Swarm

### docker service ls

```bash
docker service ls
```

Lists services running in the swarm


## Advanced Runtime

### docker run --runtime

```bash
docker run --runtime
```

Example:

```bash
docker run --runtime=runc alpine
```

Specifies a custom OCI runtime for the container

### docker run --init

```bash
docker run --init
```

Example:

```bash
docker run --init alpine
```

Runs an init process inside the container to forward signals and reap zombies

### docker run --entrypoint

```bash
docker run --entrypoint
```

Example:

```bash
docker run --entrypoint /bin/sh nginx
```

Overwrites the default ENTRYPOINT of the image

### docker run --workdir

```bash
docker run --workdir
```

Example:

```bash
docker run -w /app alpine pwd
```

Sets the working directory inside the container

### docker run --env

```bash
docker run --env
```

Example:

```bash
docker run -e MYVAR=production alpine env
```

Sets environment variables inside the container

### docker run --env-file

```bash
docker run --env-file
```

Example:

```bash
docker run --env-file ./env.list alpine env
```

Reads environment variables from a file

### docker run --health-cmd

```bash
docker run --health-cmd
```

Example:

```bash
docker run --health-cmd='curl -f http://localhost/' nginx
```

Defines a command to run to check container health

### docker run --health-interval

```bash
docker run --health-interval
```

Example:

```bash
docker run --health-interval=30s nginx
```

Sets the time between health checks

### docker run --cidfile

```bash
docker run --cidfile
```

Example:

```bash
docker run --cidfile ./container.id nginx
```

Writes the container ID to a file upon startup


## Advanced Automation

### docker kill signal

```bash
docker kill signal
```

Example:

```bash
docker kill -s SIGHUP webserver
```

Sends a specific custom signal to the container process

### docker system dial-stdio

```bash
docker system dial-stdio
```

Proxies the standard input/output to the API connection (Advanced internal use)


## Incident Response

### docker container inspect state

```bash
docker container inspect state
```

Example:

```bash
docker inspect --format='{{.State.ExitCode}}' webserver
```

Quickly retrieves the exit code of a crashed container

### docker cp forensics

```bash
docker cp forensics
```

Example:

```bash
docker cp webserver:/var/log/app.log ./evidence/
```

Extracts application logs for forensic analysis without entering the container


## System Cleanup

### docker builder prune

```bash
docker builder prune
```

Cleans up the build cache to free up disk space

### docker system prune volumes

```bash
docker system prune volumes
```

Example:

```bash
docker system prune --volumes
```

Deep cleans the system including unused volumes


## Docker Compose

### docker compose up -d

```bash
docker compose up -d
```

Starts all services defined in a docker-compose.yml in detached background mode.

### docker compose down -v

```bash
docker compose down -v
```

Stops all compose services and forcefully removes the named volumes attached to them, performing a complete clean state wipe.

### docker compose ps

```bash
docker compose ps
```

Lists the current status, ports, and health of containers strictly managed by the local docker-compose configuration.

### docker compose logs -f <service>

```bash
docker compose logs -f <service>
```

Example:

```bash
docker compose logs -f web
```

Tails and follows the logs explicitly for one isolated microservice defined inside the compose stack.


## Docker Swarm

### docker swarm init

```bash
docker swarm init
```

Example:

```bash
docker swarm init --advertise-addr <ip>
```

Initializes the machine as a Docker Swarm Master Manager node, generating the join tokens required for worker nodes.

### docker swarm join-token worker

```bash
docker swarm join-token worker
```

Reveals the strict command and cryptographic token required for a remote machine to securely join this specific swarm.

### docker node ls

```bash
docker node ls
```

Lists all active nodes participating in the swarm matrix, their reachability status, and whether they are managers or workers.

### docker service create

```bash
docker service create
```

Example:

```bash
docker service create --replicas 3 --name web_server nginx
```

Deploys a horizontally scaled service directly into the swarm, automatically load balancing requests across 3 isolated replicas.

### docker service logs <serviceName>

```bash
docker service logs <serviceName>
```

Example:

```bash
docker service logs web_server
```

Aggregates and tails the logs from all scattered swarm replicas belonging to this service into a single unified output stream.


## Buildx (Advanced BuildKit)

### docker buildx create --use

```bash
docker buildx create --use
```

Spins up and activates a new sophisticated BuildKit environment unlocking multi-architecture compiling capabilities.

### docker buildx build --platform

```bash
docker buildx build --platform
```

Example:

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t app:latest --push .
```

Cross-compiles the current Dockerfile for multiple disparate architectures (Apple Silicon / Intel) simultaneously and pushes the manifest to the registry.


## Advanced Networking

### docker network create -d overlay

```bash
docker network create -d overlay
```

Example:

```bash
docker network create -d overlay multi_host_net
```

Generates a distributed overlay network allowing swarm containers deployed on completely different physical servers to communicate securely natively.


## Advanced Data Volumes

### docker volume prune -a

```bash
docker volume prune -a
```

Example:

```bash
docker volume prune -a --force
```

Dangerously destroys every single data volume on the system that is not currently actively mounted by a running container.


## Security & Namespaces

### docker top <container_id>

```bash
docker top <container_id>
```

Example:

```bash
docker top 1234abcd
```

Maps internal container PIDs directly to their corresponding Host Operating System PIDs bridging the namespace isolated visibility.

### docker cp <container_id>:<path> <local_path>

```bash
docker cp <container_id>:<path> <local_path>
```

Example:

```bash
docker cp 12ab:/var/log/nginx/access.log ./
```

Forcefully circumvents mounting architectures to directly extract or inject raw files out of a running container's sandbox.

## Related tools

- [Docker Bench for Security](https://terminal.rokibulroni.com/tool/cloud/docker-bench-security)
- [Trivy](https://terminal.rokibulroni.com/tool/containers/trivy)
- [kubectl](https://terminal.rokibulroni.com/tool/cloud/kubectl)
