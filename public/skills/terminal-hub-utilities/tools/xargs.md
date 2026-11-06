# xargs

> Builds and runs command lines from standard input — the glue for batch operations and parallel jobs in pipelines.

- Category: Utilities
- Commands: 105
- Page: https://terminal.rokibulroni.com/tool/utilities/xargs
- Homepage: https://www.gnu.org/software/findutils/
- Documentation: https://man7.org/linux/man-pages/man1/xargs.1.html
- Tags: pipelines, batch, parallel

## Install

- apt: `sudo apt install findutils`

## Basic Syntax

### echo 'file1 file2' | xargs

```bash
echo 'file1 file2' | xargs
```

Demonstrates default behavior which echoes input arguments to stdout.

### seq 5 | xargs echo

```bash
seq 5 | xargs echo
```

Takes a list of numbers from stdin and prints them as a single line of arguments.

### cat files.txt | xargs cat

```bash
cat files.txt | xargs cat
```

Reads filenames from a text file and passes them to cat to display content.


## Argument Limiting

### seq 10 | xargs -n 1 echo

```bash
seq 10 | xargs -n 1 echo
```

Limits execution to one argument per command line invocation.

### seq 10 | xargs -n 2 echo

```bash
seq 10 | xargs -n 2 echo
```

Groups input into pairs of two arguments per command execution.


## Delimiter Control

### echo '1,2,3,4' | xargs -d , echo

```bash
echo '1,2,3,4' | xargs -d , echo
```

Uses a comma as a custom delimiter instead of default whitespace.

### echo 'user1:user2:user3' | xargs -d : -n 1 echo

```bash
echo 'user1:user2:user3' | xargs -d : -n 1 echo
```

Splits input by colon delimiter and processes each item individually.


## Input Management

### xargs -a inputs.txt echo

```bash
xargs -a inputs.txt echo
```

Reads arguments directly from a file instead of standard input.


## Execution Safety

### find . -name '*.tmp' | xargs -p rm

```bash
find . -name '*.tmp' | xargs -p rm
```

Prompts the user for confirmation before executing each command.

### find . -name '*.log' | xargs -t rm

```bash
find . -name '*.log' | xargs -t rm
```

Prints the full command line to stderr before executing it (verbose mode).

### find . -name '*.nonexistent' | xargs -r rm

```bash
find . -name '*.nonexistent' | xargs -r rm
```

Prevents the command from running if standard input is empty.


## Argument Replacement

### find . -name '*.txt' | xargs -I {} mv {} {}.bak

```bash
find . -name '*.txt' | xargs -I {} mv {} {}.bak
```

Uses {} as a placeholder to insert the argument into specific positions in the command.

### seq 5 | xargs -I % echo 'Processing ID: %'

```bash
seq 5 | xargs -I % echo 'Processing ID: %'
```

Uses a custom placeholder symbol (%) to format output strings.


## Line Based Processing

### ls -1 | xargs -L 1 echo 'File:'

```bash
ls -1 | xargs -L 1 echo 'File:'
```

Forces xargs to treat each line of input as a distinct argument unit.


## Null Termination

### find . -name '*.png' -print0 | xargs -0 rm

```bash
find . -name '*.png' -print0 | xargs -0 rm
```

Handles filenames with spaces or newlines correctly using null character delimiters.

### grep -rZ 'error' . | xargs -0 rm

```bash
grep -rZ 'error' . | xargs -0 rm
```

Processes null-terminated output from grep for safe file handling.


## Command Size Limits

### seq 1000 | xargs -s 2048 echo

```bash
seq 1000 | xargs -s 2048 echo
```

Limits the maximum size of the command line to 2048 characters.

### find . -type f | xargs --show-limits

```bash
find . -type f | xargs --show-limits
```

Displays the operating system limits on command-line length and buffers.


## Process Control

### seq 100 | xargs -E 50 echo

```bash
seq 100 | xargs -E 50 echo
```

Stops processing input immediately when the string '50' is encountered.


## Parallel Execution

### seq 10 | xargs -n 1 -P 2 sleep 1

```bash
seq 10 | xargs -n 1 -P 2 sleep 1
```

Runs commands in parallel using up to 2 concurrent processes.

### find . -name '*.jpg' -print0 | xargs -0 -n 1 -P 4 convert -resize 50%

```bash
find . -name '*.jpg' -print0 | xargs -0 -n 1 -P 4 convert -resize 50%
```

Batch processes image resizing using 4 parallel threads for performance.

### cat urls.txt | xargs -n 1 -P 10 curl -O

```bash
cat urls.txt | xargs -n 1 -P 10 curl -O
```

Downloads files from a list of URLs using 10 concurrent connections.

### seq 100 | xargs -P 0 -n 1 echo

```bash
seq 100 | xargs -P 0 -n 1 echo
```

Spawns as many processes as possible (unlimited) to handle the input.


## File Operations

### find /var/log -name '*.log' | xargs tar -cvf logs.tar

```bash
find /var/log -name '*.log' | xargs tar -cvf logs.tar
```

Archives a list of found log files into a single tarball.

### cat files.txt | xargs -I {} cp {} /backup/{}

```bash
cat files.txt | xargs -I {} cp {} /backup/{}
```

Copies files listed in a text file to a backup directory individually.

### ls *.conf | xargs -I {} cp {} {}.backup

```bash
ls *.conf | xargs -I {} cp {} {}.backup
```

Creates a backup copy of every configuration file in the current directory.


## Directory Operations

### cat folders.txt | xargs mkdir -p

```bash
cat folders.txt | xargs mkdir -p
```

Creates a directory structure based on a list of names.


## System Administration

### find /home -name 'id_rsa' | xargs chmod 600

```bash
find /home -name 'id_rsa' | xargs chmod 600
```

Fixes permissions on SSH private keys found in home directories.

### cat users.txt | xargs -n 1 useradd

```bash
cat users.txt | xargs -n 1 useradd
```

Bulk creates users from a text file list.

### cat groups.txt | xargs -I {} groupadd {}

```bash
cat groups.txt | xargs -I {} groupadd {}
```

Bulk adds system groups from a file using replacement logic.


## Data Processing

### find . -type f -name '*.csv' | xargs cat | wc -l

```bash
find . -type f -name '*.csv' | xargs cat | wc -l
```

Counts the total lines across all CSV files in a directory tree.

### ls | xargs -n 1 -I {} sh -c 'echo -n {}; echo -n " "; wc -c < {}'

```bash
ls | xargs -n 1 -I {} sh -c 'echo -n {}; echo -n " "; wc -c < {}'
```

Uses a subshell to print the filename and its byte count on the same line.


## Complex Commands

### find . -name '*.sh' | xargs -I {} sh -c 'chmod +x {}; echo Executable: {}'

```bash
find . -name '*.sh' | xargs -I {} sh -c 'chmod +x {}; echo Executable: {}'
```

Executes multiple commands per argument by invoking a shell explicitly.


## Integration

### docker ps -q | xargs -r docker stop

```bash
docker ps -q | xargs -r docker stop
```

Stops all running Docker containers, doing nothing if none are running.

### docker images -q | xargs -r docker rmi

```bash
docker images -q | xargs -r docker rmi
```

Removes all Docker images found on the system.

### git ls-files | xargs wc -l

```bash
git ls-files | xargs wc -l
```

Counts lines of code for all files tracked by git.


## Network Automation

### cat hosts.txt | xargs -n 1 -I {} ping -c 1 {}

```bash
cat hosts.txt | xargs -n 1 -I {} ping -c 1 {}
```

Pings a list of hosts once each to check reachability.

### cat domains.txt | xargs -n 1 host

```bash
cat domains.txt | xargs -n 1 host
```

Performs DNS lookups for a batch list of domains.


## SOC Automation

### find /var/www/html -type f | xargs sha256sum > baseline_hashes.txt

```bash
find /var/www/html -type f | xargs sha256sum > baseline_hashes.txt
```

Generates SHA256 hashes for all web files to create an integrity baseline.

### grep -l 'malware_signature' /var/log/* | xargs -I {} cp {} /quarantine/

```bash
grep -l 'malware_signature' /var/log/* | xargs -I {} cp {} /quarantine/
```

Identifies log files containing a signature and copies them to a quarantine folder.

### cat suspicious_ips.txt | xargs -I {} grep {} /var/log/auth.log

```bash
cat suspicious_ips.txt | xargs -I {} grep {} /var/log/auth.log
```

Searches authentication logs for activity related to a list of suspect IPs.


## Blue Team Validation

### find /etc -type f -perm -o+w | xargs ls -ld

```bash
find /etc -type f -perm -o+w | xargs ls -ld
```

Lists details of any files in /etc that are world-writable for audit purposes.

### cat users.txt | xargs -I {} chage -l {}

```bash
cat users.txt | xargs -I {} chage -l {}
```

Checks password expiry information for a specific list of users.


## Incident Response

### pgrep -u malicious_user | xargs -r kill -9

```bash
pgrep -u malicious_user | xargs -r kill -9
```

Force kills all processes owned by a specific malicious user account.

### lsof -t -i :8080 | xargs -r kill

```bash
lsof -t -i :8080 | xargs -r kill
```

Terminates any process currently listening on port 8080.


## Advanced Workflow

### find . -name '*.txt' -print0 | xargs -0 -I {} sh -c 'cat {} >> combined.log; echo "---EOF---" >> combined.log'

```bash
find . -name '*.txt' -print0 | xargs -0 -I {} sh -c 'cat {} >> combined.log; echo "---EOF---" >> combined.log'
```

Concatenates files safely while injecting a custom separator between content.

### find . -name '*.gz' | xargs -n 1 -P 4 gunzip

```bash
find . -name '*.gz' | xargs -n 1 -P 4 gunzip
```

Decompresses all gzip files in the directory using 4 parallel workers.

### cat list.txt | xargs -d '\n' -n 1 echo

```bash
cat list.txt | xargs -d '\n' -n 1 echo
```

Explicitly sets newline as delimiter to handle items containing spaces correctly without null termination.


## Cleanup

### find . -type d -empty -print0 | xargs -0 rmdir

```bash
find . -type d -empty -print0 | xargs -0 rmdir
```

Recursively removes empty directories safely using null delimiters.

### find /tmp -mtime +7 -print0 | xargs -0 rm -f

```bash
find /tmp -mtime +7 -print0 | xargs -0 rm -f
```

Deletes files in tmp that are older than 7 days using safe handling.


## AWS/Cloud (Simulated)

### cat buckets.txt | xargs -I {} echo 'aws s3 ls s3://{}'

```bash
cat buckets.txt | xargs -I {} echo 'aws s3 ls s3://{}'
```

Constructs AWS CLI commands to list contents of multiple S3 buckets.


## Kubernetes (Simulated)

### kubectl get pods -o name | xargs -n 1 kubectl delete

```bash
kubectl get pods -o name | xargs -n 1 kubectl delete
```

Deletes all pods in the current namespace by passing names to delete command.


## Advanced Limits

### seq 1000 | xargs -n 50 -x echo

```bash
seq 1000 | xargs -n 50 -x echo
```

Forces exit if the constructed command line exceeds the system size limit.


## Nested Xargs

### ls | xargs -n 1 -I {} sh -c 'echo {} | xargs echo nested:'

```bash
ls | xargs -n 1 -I {} sh -c 'echo {} | xargs echo nested:'
```

Demonstrates invoking xargs inside a command executed by xargs.


## Debugging

### find . -name '*.txt' | xargs -t -n 1 touch

```bash
find . -name '*.txt' | xargs -t -n 1 touch
```

updates timestamps on files while printing the exact command being run for verification.


## Process Info

### seq 10 | xargs -P 2 -n 1 --process-slot-var=SLOT sh -c 'echo Running on slot $SLOT'

```bash
seq 10 | xargs -P 2 -n 1 --process-slot-var=SLOT sh -c 'echo Running on slot $SLOT'
```

Exposes the parallel process slot ID as an environment variable to the child process.


## Input Preprocessing

### cat raw_data.txt | tr ' ' '\n' | xargs -n 1 echo

```bash
cat raw_data.txt | tr ' ' '\n' | xargs -n 1 echo
```

Preprocesses space-separated data into newlines before passing to xargs.


## Batch Renaming

### ls *.jpg | xargs -n 1 -I {} bash -c 'mv "$1" "${1%.jpg}.png"' _ {}

```bash
ls *.jpg | xargs -n 1 -I {} bash -c 'mv "$1" "${1%.jpg}.png"' _ {}
```

Uses bash parameter expansion inside xargs to rename file extensions.


## Permissions Auditing

### find / -perm -4000 -print0 2>/dev/null | xargs -0 ls -ld

```bash
find / -perm -4000 -print0 2>/dev/null | xargs -0 ls -ld
```

Locates and details all SUID executables on the system safely.


## Artifact Collection

### cat artifact_list.txt | xargs -I {} tar -rvf collection.tar {}

```bash
cat artifact_list.txt | xargs -I {} tar -rvf collection.tar {}
```

Appends specific files listed in a text file to an existing tar archive.


## Remote Execution

### cat servers.txt | xargs -n 1 -I {} ssh {} 'uptime'

```bash
cat servers.txt | xargs -n 1 -I {} ssh {} 'uptime'
```

Runs the uptime command sequentially on a list of remote servers.


## Remote Execution Parallel

### cat servers.txt | xargs -P 5 -n 1 -I {} ssh {} 'uname -a'

```bash
cat servers.txt | xargs -P 5 -n 1 -I {} ssh {} 'uname -a'
```

Runs commands on multiple remote servers in parallel to save time.


## Database Maintenance

### cat tables.txt | xargs -I {} echo 'OPTIMIZE TABLE {};' | mysql -u root my_db

```bash
cat tables.txt | xargs -I {} echo 'OPTIMIZE TABLE {};' | mysql -u root my_db
```

Constructs SQL queries for a list of tables and pipes them to the MySQL client.


## Dependency Management

### cat packages.txt | xargs apt-get install -y

```bash
cat packages.txt | xargs apt-get install -y
```

Installs a list of software packages from a file in a single transaction.


## Code Quality

### find src/ -name '*.js' | xargs eslint

```bash
find src/ -name '*.js' | xargs eslint
```

Runs a linter against all JavaScript files found in the source directory.


## String Manipulation

### echo '  padded  ' | xargs

```bash
echo '  padded  ' | xargs
```

Trims leading and trailing whitespace from the input string.


## Interactive Filtering

### ls | xargs -p -n 1 echo deleting

```bash
ls | xargs -p -n 1 echo deleting
```

Simulates a delete operation where the user must approve every single file.


## Disk Usage

### find . -maxdepth 1 -type d | xargs -I {} du -sh {}

```bash
find . -maxdepth 1 -type d | xargs -I {} du -sh {}
```

Calculates the disk usage summary for every subdirectory in the current path.


## Archive Extraction

### ls *.tar.gz | xargs -n 1 tar -xzvf

```bash
ls *.tar.gz | xargs -n 1 tar -xzvf
```

Extracts multiple tar.gz archives sequentially.


## Process Signals

### pgrep java | xargs -r kill -SIGTERM

```bash
pgrep java | xargs -r kill -SIGTERM
```

Sends a graceful termination signal to all Java processes.


## File Content Search

### find . -name '*.py' -print0 | xargs -0 grep -n 'TODO'

```bash
find . -name '*.py' -print0 | xargs -0 grep -n 'TODO'
```

Searches for TODO comments inside all Python files and prints line numbers.


## Batch Comparison

### ls *.bak | xargs -I {} sh -c 'diff {} ${0%.bak}' {}

```bash
ls *.bak | xargs -I {} sh -c 'diff {} ${0%.bak}' {}
```

Compares .bak files against their original counterparts using diff.


## URL Testing

### cat endpoints.txt | xargs -n 1 -I {} curl -s -o /dev/null -w '%{http_code} %{url_effective}\n' {}

```bash
cat endpoints.txt | xargs -n 1 -I {} curl -s -o /dev/null -w '%{http_code} %{url_effective}\n' {}
```

Checks the HTTP status code for a list of endpoints.


## User Cleanup

### cat terminated_staff.txt | xargs -I {} sh -c 'userdel {}; rm -rf /home/{}'

```bash
cat terminated_staff.txt | xargs -I {} sh -c 'userdel {}; rm -rf /home/{}'
```

Removes user accounts and their home directories based on a list.


## Bulk Copy

### find . -name '*.conf' -print0 | xargs -0 -I {} cp --parents {} /backup/conf/

```bash
find . -name '*.conf' -print0 | xargs -0 -I {} cp --parents {} /backup/conf/
```

Copies files preserving their directory structure to a backup location.


## Metadata Stripping

### find . -name '*.jpg' | xargs -n 1 mogrify -strip

```bash
find . -name '*.jpg' | xargs -n 1 mogrify -strip
```

Removes EXIF metadata from all JPG images in batch.


## Module Management

### cat modules.txt | xargs -n 1 modprobe

```bash
cat modules.txt | xargs -n 1 modprobe
```

Loads a list of kernel modules.


## System Updates

### apt list --upgradable 2>/dev/null | cut -d/ -f1 | xargs apt-get install -y

```bash
apt list --upgradable 2>/dev/null | cut -d/ -f1 | xargs apt-get install -y
```

Extracts upgradable package names and pipes them to the install command.


## Empty File Cleanup

### find . -type f -size 0 -print0 | xargs -0 rm

```bash
find . -type f -size 0 -print0 | xargs -0 rm
```

Removes all files with zero bytes size safely.


## Log Rotation Simulation

### find /var/log -name '*.log' | xargs -I {} mv {} {}.old

```bash
find /var/log -name '*.log' | xargs -I {} mv {} {}.old
```

Renames all active log files to an archived extension.


## Certificate Auditing

### find /etc/ssl -name '*.pem' | xargs -I {} openssl x509 -in {} -noout -enddate

```bash
find /etc/ssl -name '*.pem' | xargs -I {} openssl x509 -in {} -noout -enddate
```

Checks the expiration date of all SSL certificates found in the directory.


## Threat Hunting

### find /tmp -user root -print0 | xargs -0 ls -la

```bash
find /tmp -user root -print0 | xargs -0 ls -la
```

Inspects files owned by root in temporary directories which may indicate compromise.


## Immutable Files

### find . -name 'important.txt' | xargs chattr +i

```bash
find . -name 'important.txt' | xargs chattr +i
```

Sets the immutable flag on specific files to prevent deletion or modification.


## Container Cleanup

### docker ps -a -f status=exited -q | xargs -r docker rm

```bash
docker ps -a -f status=exited -q | xargs -r docker rm
```

Removes only Docker containers that have exited.


## Orphaned Images

### docker images -f dangling=true -q | xargs -r docker rmi

```bash
docker images -f dangling=true -q | xargs -r docker rmi
```

Deletes dangling Docker images that are not tagged.


## Text Transformation

### cat words.txt | xargs -n 1 | sort | uniq

```bash
cat words.txt | xargs -n 1 | sort | uniq
```

Normalizes a text file into a sorted list of unique words.


## Variable Construction

### ls | xargs | sed 's/ /,/g'

```bash
ls | xargs | sed 's/ /,/g'
```

Converts a list of files into a comma-separated string suitable for arrays.


## Mass Creation

### seq 1 100 | xargs -I {} touch file_{}.txt

```bash
seq 1 100 | xargs -I {} touch file_{}.txt
```

Rapidly creates 100 dummy files with sequential naming.


## Wait Handling

### seq 5 | xargs -n 1 -I {} sh -c 'sleep 1; echo waited {}'

```bash
seq 5 | xargs -n 1 -I {} sh -c 'sleep 1; echo waited {}'
```

Introduces a delay between the execution of each command.


## Recursive Ownership

### find /var/www -type d -print0 | xargs -0 chown www-data:www-data

```bash
find /var/www -type d -print0 | xargs -0 chown www-data:www-data
```

Changes ownership of all directories in a tree safely.


## System Auditing

### find /bin -type f -ctime -1 | xargs ls -l

```bash
find /bin -type f -ctime -1 | xargs ls -l
```

Identifies system binaries that have been changed in the last 24 hours.


## Config Validation

### find /etc/nginx -name '*.conf' | xargs -n 1 nginx -t -c

```bash
find /etc/nginx -name '*.conf' | xargs -n 1 nginx -t -c
```

Validates the syntax of individual Nginx configuration files.


## Checksum Validation

### cat checksums.sha256 | xargs -n 2 sh -c 'echo "$1  $2" | sha256sum -c -'

```bash
cat checksums.sha256 | xargs -n 2 sh -c 'echo "$1  $2" | sha256sum -c -'
```

Verifies file integrity using a list of checksums and filenames.


## Broken Links

### find . -type l -xtype l -print0 | xargs -0 rm

```bash
find . -type l -xtype l -print0 | xargs -0 rm
```

Finds and removes broken symbolic links.


## Log Search Parallel

### find /var/log -type f | xargs -P 4 grep 'ERROR'

```bash
find /var/log -type f | xargs -P 4 grep 'ERROR'
```

Greps through logs in parallel to speed up error finding.


## IP Blocking (Simulated)

### cat blacklisted_ips.txt | xargs -I {} iptables -A INPUT -s {} -j DROP

```bash
cat blacklisted_ips.txt | xargs -I {} iptables -A INPUT -s {} -j DROP
```

Adds firewall rules to drop traffic from a list of IP addresses.


## Key Rotation

### cat keys.txt | xargs -I {} aws kms schedule-key-deletion --key-id {}

```bash
cat keys.txt | xargs -I {} aws kms schedule-key-deletion --key-id {}
```

Schedules a list of AWS KMS keys for deletion.


## JSON Parsing

### cat data.json | jq -r '.[] .id' | xargs echo IDs:

```bash
cat data.json | jq -r '.[] .id' | xargs echo IDs:
```

Extracts IDs from a JSON file and formats them into a single line.


## Kubernetes Logs

### kubectl get pods -l app=web -o name | xargs -n 1 -P 3 kubectl logs

```bash
kubectl get pods -l app=web -o name | xargs -n 1 -P 3 kubectl logs
```

Fetches logs from multiple pods matching a label in parallel.


## Advanced Arg File

### xargs -a params.txt -L 1 command

```bash
xargs -a params.txt -L 1 command
```

Reads arguments from a file line-by-line without using pipes.


## Shell Injection Defense

### ls | xargs -I {} bash -c 'echo "$1"' -- {}

```bash
ls | xargs -I {} bash -c 'echo "$1"' -- {}
```

Passes arguments to a subshell securely using positional parameters.


## High Volume Deletion

### find . -name 'temp*' -print0 | xargs -0 -n 1000 rm

```bash
find . -name 'temp*' -print0 | xargs -0 -n 1000 rm
```

Deletes huge numbers of files in batches of 1000 to avoid argument list too long errors.


## Dynamic Parallelism

### seq 100 | xargs -P $(nproc) -n 1 echo

```bash
seq 100 | xargs -P $(nproc) -n 1 echo
```

Dynamically sets the number of parallel processes based on available CPU cores.


## File Locking

### find . -name '*.db' | xargs -I {} flock {} echo 'Locked {}'

```bash
find . -name '*.db' | xargs -I {} flock {} echo 'Locked {}'
```

Uses flock to ensure exclusive access to files before processing.


## Final Cleanup

### find . -maxdepth 1 -name 'xargs_test*' -print0 | xargs -0 -p rm

```bash
find . -maxdepth 1 -name 'xargs_test*' -print0 | xargs -0 -p rm
```

Safely prompts to clean up any test files created during this workflow session.

## Related tools

- [find](https://terminal.rokibulroni.com/tool/linux/find)
- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
- [awk](https://terminal.rokibulroni.com/tool/linux/awk)
