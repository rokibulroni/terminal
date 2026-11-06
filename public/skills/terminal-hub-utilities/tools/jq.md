# jq

> A lightweight command-line JSON processor: filter, transform and pretty-print JSON from APIs, logs and tool output.

- Category: Utilities
- Commands: 120
- Page: https://terminal.rokibulroni.com/tool/utilities/jq
- Homepage: https://jqlang.org
- Documentation: https://jqlang.org/manual/
- Tags: JSON, parsing, data

## Install

- apt: `sudo apt install jq`
- brew: `brew install jq`
- windows: `winget install jqlang.jq`

## Basic Usage

### jq '.' file.json

```bash
jq '.' file.json
```

Example:

```bash
jq '.' access_log.json
```

Pretty prints the entire JSON content to standard output with syntax highlighting.

### jq -c '.' file.json

```bash
jq -c '.' file.json
```

Example:

```bash
jq -c '.' large_data.json
```

Compacts the JSON output into a single line per object to save space.


## Field Access

### jq '.key' file.json

```bash
jq '.key' file.json
```

Example:

```bash
jq '.status' response.json
```

Extracts the value of a specific key from the root object.

### jq '.foo.bar' file.json

```bash
jq '.foo.bar' file.json
```

Example:

```bash
jq '.user.profile.id' users.json
```

Accesses a nested key using dot notation.

### jq '."complex-key"' file.json

```bash
jq '."complex-key"' file.json
```

Example:

```bash
jq '."Content-Type"' headers.json
```

Accesses keys containing special characters or hyphens using quotes.

### jq '.foo?' file.json

```bash
jq '.foo?' file.json
```

Example:

```bash
jq '.error?' logs.json
```

Suppress errors if the field does not exist (null safety).


## Array Operations

### jq '.[0]' file.json

```bash
jq '.[0]' file.json
```

Example:

```bash
jq '.[0]' items.json
```

Extracts the first element of an array.

### jq '.[-1]' file.json

```bash
jq '.[-1]' file.json
```

Example:

```bash
jq '.[-1]' updates.json
```

Extracts the last element of an array.

### jq '.[1:4]' file.json

```bash
jq '.[1:4]' file.json
```

Example:

```bash
jq '.[1:4]' list.json
```

Slices an array, returning elements from index 1 up to (but not including) 4.

### jq '.[]' file.json

```bash
jq '.[]' file.json
```

Example:

```bash
jq '.users[]' users_list.json
```

Iterates over an array or object values, unpacking them into a stream.

### jq 'length' file.json

```bash
jq 'length' file.json
```

Example:

```bash
jq '.items | length' cart.json
```

Returns the length of a string, array, or object.


## Object Construction

### jq '{new_key: .old_key}' file.json

```bash
jq '{new_key: .old_key}' file.json
```

Example:

```bash
jq '{id: .user_id, name: .user_name}' users.json
```

Constructs a new object with renamed or selected fields.

### jq '[.a, .b]' file.json

```bash
jq '[.a, .b]' file.json
```

Example:

```bash
jq '[.lat, .long]' coordinates.json
```

Constructs a new array containing selected values.


## Input/Output Control

### jq -r '.key' file.json

```bash
jq -r '.key' file.json
```

Example:

```bash
jq -r '.token' auth.json
```

Outputs raw strings without quotes, useful for shell piping.


## Structure Analysis

### jq 'keys' file.json

```bash
jq 'keys' file.json
```

Example:

```bash
jq 'keys' config.json
```

Returns an array of keys in the object, sorted alphabetically.

### jq 'keys_unsorted' file.json

```bash
jq 'keys_unsorted' file.json
```

Example:

```bash
jq 'keys_unsorted' stream.json
```

Returns keys in the order they appear in the source JSON.


## Math & Logic

### jq '.price * 1.2' file.json

```bash
jq '.price * 1.2' file.json
```

Example:

```bash
jq '.amount * 100' invoice.json
```

Performs arithmetic operations on numeric fields.

### jq '.a + .b' file.json

```bash
jq '.a + .b' file.json
```

Example:

```bash
jq '.first + .last' names.json
```

Adds numbers or concatenates strings depending on type.


## Transformation

### jq 'map(.id)' file.json

```bash
jq 'map(.id)' file.json
```

Example:

```bash
jq 'map(.id)' objects.json
```

Transforms an array by applying a filter to every element.


## Filtering

### jq 'select(.id > 100)' file.json

```bash
jq 'select(.id > 100)' file.json
```

Example:

```bash
jq 'map(select(.age >= 18))' users.json
```

Filters output, keeping only elements where the condition is true.

### jq 'select(.status == "active")' file.json

```bash
jq 'select(.status == "active")' file.json
```

Example:

```bash
jq '.users[] | select(.role == "admin")' users.json
```

Filters stream for objects matching a specific string value.

### jq 'select(.error != null)' file.json

```bash
jq 'select(.error != null)' file.json
```

Example:

```bash
jq 'select(.retry_count != 0)' jobs.json
```

Selects objects where a specific field is not null.


## Logical Operators

### jq 'select(.a and .b)' file.json

```bash
jq 'select(.a and .b)' file.json
```

Example:

```bash
jq 'select(.active and .verified)' users.json
```

Uses boolean AND logic to require multiple conditions.

### jq 'select(.a or .b)' file.json

```bash
jq 'select(.a or .b)' file.json
```

Example:

```bash
jq 'select(.admin or .moderator)' staff.json
```

Uses boolean OR logic to allow alternative conditions.


## String Manipulation

### jq 'split(",")' file.json

```bash
jq 'split(",")' file.json
```

Example:

```bash
jq '.tags | split(",")' posts.json
```

Splits a string into an array based on a delimiter.

### jq 'join(", ")' file.json

```bash
jq 'join(", ")' file.json
```

Example:

```bash
jq '.permissions | join(" | ")' roles.json
```

Joins an array of strings into a single string with a separator.

### jq 'ascii_downcase' file.json

```bash
jq 'ascii_downcase' file.json
```

Example:

```bash
jq '.email | ascii_downcase' contacts.json
```

Converts string input to lowercase.

### jq 'contains("str")' file.json

```bash
jq 'contains("str")' file.json
```

Example:

```bash
jq 'select(.message | contains("Error"))' logs.json
```

Checks if a string contains a specific substring.


## Regular Expressions

### jq 'test("regex")' file.json

```bash
jq 'test("regex")' file.json
```

Example:

```bash
jq 'select(.ip | test("^192\.168"))' network.json
```

Tests if a string matches a regular expression pattern.

### jq 'match("regex")' file.json

```bash
jq 'match("regex")' file.json
```

Example:

```bash
jq '.version | match("^[0-9]+")' package.json
```

Returns detailed match object including captures and offsets.

### jq 'capture("regex")' file.json

```bash
jq 'capture("regex")' file.json
```

Example:

```bash
jq '.log | capture("(?<level>[A-Z]+): (?<msg>.+)")' syslog.json
```

Captures named groups from a regex into a JSON object.


## Sorting & Grouping

### jq 'sort' file.json

```bash
jq 'sort' file.json
```

Example:

```bash
jq '.tags | sort' metadata.json
```

Sorts an array of scalars or objects.

### jq 'sort_by(.key)' file.json

```bash
jq 'sort_by(.key)' file.json
```

Example:

```bash
jq 'sort_by(.timestamp)' events.json
```

Sorts an array of objects based on a specific field.

### jq 'group_by(.key)' file.json

```bash
jq 'group_by(.key)' file.json
```

Example:

```bash
jq 'group_by(.category)' products.json
```

Groups array elements into subarrays based on a field value.

### jq 'unique' file.json

```bash
jq 'unique' file.json
```

Example:

```bash
jq '.visited_urls | unique' history.json
```

Removes duplicates from an array and sorts it.

### jq 'unique_by(.key)' file.json

```bash
jq 'unique_by(.key)' file.json
```

Example:

```bash
jq 'unique_by(.id)' users.json
```

Removes objects with duplicate values for a specific key.


## Aggregation

### jq 'min' file.json

```bash
jq 'min' file.json
```

Example:

```bash
jq '[.items[].price] | min' catalog.json
```

Finds the minimum value in an array.

### jq 'max' file.json

```bash
jq 'max' file.json
```

Example:

```bash
jq '[.scores[]] | max' results.json
```

Finds the maximum value in an array.

### jq 'add' file.json

```bash
jq 'add' file.json
```

Example:

```bash
jq '[.invoices[].total] | add' finance.json
```

Sums the numbers in an array.


## Control Flow

### jq 'if .a then .b else .c end' file.json

```bash
jq 'if .a then .b else .c end' file.json
```

Example:

```bash
jq 'if .admin then "superuser" else "user" end' auth.json
```

Implements standard if-then-else conditional logic.

### jq '.a // .b' file.json

```bash
jq '.a // .b' file.json
```

Example:

```bash
jq '.display_name // .username // "Anonymous"' profile.json
```

Uses the Alternative Operator to provide default values if preceding values are null or false.


## Data Modification

### jq '.key = "value"' file.json

```bash
jq '.key = "value"' file.json
```

Example:

```bash
jq '.status = "processed"' task.json
```

Assigns a new static value to a field.

### jq '.count += 1' file.json

```bash
jq '.count += 1' file.json
```

Example:

```bash
jq '.login_attempts += 1' user.json
```

Increments a numeric value using update assignment.

### jq '.tags += ["new"]' file.json

```bash
jq '.tags += ["new"]' file.json
```

Example:

```bash
jq '.roles += ["auditor"]' user.json
```

Appends an element to an existing array.

### jq 'del(.key)' file.json

```bash
jq 'del(.key)' file.json
```

Example:

```bash
jq 'del(.password, .secret)' config.json
```

Deletes specified keys from an object.

### jq '(.values[]) |= . + 1' file.json

```bash
jq '(.values[]) |= . + 1' file.json
```

Example:

```bash
jq '(.prices[]) |= . * 1.1' menu.json
```

Updates every element in an array in place.


## Input Handling

### jq -s '.' file.json

```bash
jq -s '.' file.json
```

Example:

```bash
jq -s '.' part1.json part2.json
```

Slurps all input JSON objects into a single large array.

### jq -R '.' file.txt

```bash
jq -R '.' file.txt
```

Example:

```bash
jq -R '.' raw_logs.txt
```

Reads input as raw strings instead of JSON.

### jq -n '{a: 1}'

```bash
jq -n '{a: 1}'
```

Example:

```bash
jq -n '{timestamp: now}'
```

Uses null input, useful for generating JSON from scratch without an input file.

### jq --arg name val '.'

```bash
jq --arg name val '.'
```

Example:

```bash
jq -n --arg env "prod" '{environment: $env}'
```

Passes a value from the shell into a jq variable.


## Date & Time

### jq 'now' file.json

```bash
jq 'now' file.json
```

Example:

```bash
jq '{check_time: now}' status.json
```

Returns the current time as a Unix timestamp.

### jq 'todate' file.json

```bash
jq 'todate' file.json
```

Example:

```bash
jq '.timestamp | todate' log.json
```

Converts a Unix timestamp to an ISO 8601 string.

### jq 'fromdate' file.json

```bash
jq 'fromdate' file.json
```

Example:

```bash
jq '.iso_time | fromdate' data.json
```

Converts an ISO 8601 string to a Unix timestamp.

### jq 'strflocaltime("%Y-%m-%d")' file.json

```bash
jq 'strflocaltime("%Y-%m-%d")' file.json
```

Example:

```bash
jq 'now | strflocaltime("%H:%M:%S")' file.json
```

Formats a timestamp using standard strftime format strings.


## Advanced Traversal

### jq '..'

```bash
jq '..'
```

Example:

```bash
jq '.. | .id?' nested.json
```

Recursively descends into all values, visiting every node.

### jq 'paths'

```bash
jq 'paths'
```

Example:

```bash
jq 'paths' structure.json
```

Outputs the paths to all elements in the JSON document.


## Conversion

### jq 'to_entries' file.json

```bash
jq 'to_entries' file.json
```

Example:

```bash
jq 'to_entries' map.json
```

Converts an object into an array of {key, value} pairs.

### jq 'from_entries' file.json

```bash
jq 'from_entries' file.json
```

Example:

```bash
jq 'from_entries' kvs.json
```

Converts an array of {key, value} pairs back into an object.


## Formatting Output

### jq '@base64'

```bash
jq '@base64'
```

Example:

```bash
jq '.payload | @base64' secret.json
```

Encodes the input string to Base64.

### jq '@base64d'

```bash
jq '@base64d'
```

Example:

```bash
jq '.encoded | @base64d' data.json
```

Decodes a Base64 string.

### jq '@csv'

```bash
jq '@csv'
```

Example:

```bash
jq '.users[] | [.id, .name] | @csv' users.json
```

Formats an array as a CSV row.

### jq '@tsv'

```bash
jq '@tsv'
```

Example:

```bash
jq '.logs[] | [.time, .msg] | @tsv' logs.json
```

Formats an array as a Tab-Separated Value row.

### jq '@uri'

```bash
jq '@uri'
```

Example:

```bash
jq '.search_query | @uri' request.json
```

Percent-encodes a string for use in URLs.

### jq '@sh'

```bash
jq '@sh'
```

Example:

```bash
jq '.filename | @sh' config.json
```

Escapes a string for safe use in a shell command.


## Debugging

### jq 'debug' file.json

```bash
jq 'debug' file.json
```

Example:

```bash
jq 'map(debug) | .[]' list.json
```

Prints the current input to stderr for debugging purposes without affecting output.


## Advanced Logic

### jq 'any'

```bash
jq 'any'
```

Example:

```bash
jq '.results | any(.passed == false)' test.json
```

Returns true if any element in the stream matches the condition.

### jq 'all'

```bash
jq 'all'
```

Example:

```bash
jq '.servers | all(.status == "up")' cluster.json
```

Returns true only if all elements in the stream match the condition.


## Advanced Functions

### jq 'reduce .[] as $item (0; . + $item)'

```bash
jq 'reduce .[] as $item (0; . + $item)'
```

Example:

```bash
jq 'reduce .prices[] as $p (0; . + $p)' cart.json
```

Reduces an array to a single value (e.g., sum) using an accumulator.

### jq 'reduce inputs as $i (.; . + [$i])'

```bash
jq 'reduce inputs as $i (.; . + [$i])'
```

Example:

```bash
jq -n 'reduce inputs as $line (0; . + ($line|length))' file.txt
```

Processes a stream of inputs efficiently without loading everything into memory.

### jq 'recurse(.children[])'

```bash
jq 'recurse(.children[])'
```

Example:

```bash
jq 'recurse(.sub_departments[])' org_chart.json
```

Recursively visits a structure defined by a path.

### jq 'walk(if type == "object" then del(.null_keys) else . end)'

```bash
jq 'walk(if type == "object" then del(.null_keys) else . end)'
```

Example:

```bash
jq 'walk(if type == "string" then ascii_upcase else . end)' data.json
```

Applies a function to every node in the JSON tree recursively.


## Environment Interaction

### jq 'env'

```bash
jq 'env'
```

Example:

```bash
jq -n 'env.HOME'
```

Accesses system environment variables as a JSON object.


## Variables

### jq '. as $root | .items[] | select(.id == $root.target)'

```bash
jq '. as $root | .items[] | select(.id == $root.target)'
```

Example:

```bash
jq '.threshold as $t | .values[] | select(. > $t)' data.json
```

Defines a variable within jq to reference data from a different context.

### jq --argjson data '{"a":1}'

```bash
jq --argjson data '{"a":1}'
```

Example:

```bash
jq --argjson config '{"debug": true}' '$config.debug'
```

Passes a JSON string from the shell and parses it into a jq variable.

### jq --slurpfile dict dict.json

```bash
jq --slurpfile dict dict.json
```

Example:

```bash
jq --slurpfile blacklist bad_ips.json 'select(.ip as $ip | $blacklist | index($ip) | not)' access.json
```

Reads a secondary file into a variable array for lookups or joining.


## Type Checking

### jq 'type' file.json

```bash
jq 'type' file.json
```

Example:

```bash
jq 'map(type)' mixed_array.json
```

Returns the type of the value (object, array, string, number, null, boolean).

### jq 'select(type == "string")'

```bash
jq 'select(type == "string")'
```

Example:

```bash
jq '.[] | select(type == "number")' data.json
```

Filters input based on JSON data type.

### jq 'arrays, objects, scalars'

```bash
jq 'arrays, objects, scalars'
```

Example:

```bash
jq 'arrays' mixed_stream.json
```

Built-in filters to select only arrays, objects, or scalar values.


## String Formatting

### jq '"Name: \(.name), ID: \(.id)"'

```bash
jq '"Name: \(.name), ID: \(.id)"'
```

Example:

```bash
jq '"Value: \(.value * 100)%"' stats.json
```

Uses string interpolation to embed expressions inside strings.


## Module Loading

### jq 'import "module" as mod'

```bash
jq 'import "module" as mod'
```

Example:

```bash
jq -L. 'import "utils" as u; u::func' main.json
```

Imports a jq library file from the search path.


## Automation Workflow

### jq -e . file.json

```bash
jq -e . file.json
```

Example:

```bash
jq -e '.success' response.json
```

Sets the shell exit code based on the output (0 if result is not null/false, 1 otherwise).


## DevOps Automation

### aws ec2 describe-instances | jq '.Reservations[].Instances[].InstanceId'

```bash
aws ec2 describe-instances | jq '.Reservations[].Instances[].InstanceId'
```

Example:

```bash
cat instances.json | jq -r '.[].InstanceId'
```

Extracts specific resource IDs from complex Cloud API responses.


## Log Analysis

### jq -R 'split(" ") | {time:.[0], method:.[3], url:.[4]}'

```bash
jq -R 'split(" ") | {time:.[0], method:.[3], url:.[4]}'
```

Example:

```bash
cat access.log | jq -R 'split(" ") | {ip: .[0]}'
```

Parses raw text logs into JSON structure using manual splitting.

### jq -s 'group_by(.level) | map({level: .[0].level, count: length})'

```bash
jq -s 'group_by(.level) | map({level: .[0].level, count: length})'
```

Example:

```bash
jq -s 'group_by(.status) | map({status:.[0].status, count:length})' logs.json
```

Aggregates log entries to count occurrences of specific event levels.

### jq 'select(.timestamp > (now - 3600))'

```bash
jq 'select(.timestamp > (now - 3600))'
```

Example:

```bash
jq 'select(.time_sec > (now - 86400))' events.json
```

Filters logs to show only entries from the last hour (or specific duration).


## Security Automation

### jq 'select(.headers["User-Agent"] | contains("curl"))'

```bash
jq 'select(.headers["User-Agent"] | contains("curl"))'
```

Example:

```bash
jq 'select(.ua | contains("python-requests"))' access_log.json
```

Identifies automated bot traffic by analyzing User-Agent strings.

### jq 'select(.response_code >= 500)'

```bash
jq 'select(.response_code >= 500)'
```

Example:

```bash
jq 'select(.status >= 400)' http_log.json
```

Filters for server-side errors or client errors in web logs.

### jq '.Records[] | select(.eventName == "ConsoleLogin" and .errorMessage != null)'

```bash
jq '.Records[] | select(.eventName == "ConsoleLogin" and .errorMessage != null)'
```

Example:

```bash
jq '.records[] | select(.event == "DeleteBucket")' cloudtrail.json
```

Detects failed console login attempts in CloudTrail logs.

### jq -r '. | select(.resources[] | contains("sg-12345"))'

```bash
jq -r '. | select(.resources[] | contains("sg-12345"))'
```

Example:

```bash
jq 'select(.resource_id == "i-abcde")' config_history.json
```

Searches for events related to a specific compromised or target resource ID.


## Data Cleaning

### jq 'del(.. | .password?, .secret?, .token?)'

```bash
jq 'del(.. | .password?, .secret?, .token?)'
```

Example:

```bash
jq 'del(.. | .ssn?)' user_dump.json
```

Recursively scrubs sensitive fields like passwords or tokens from a dataset.

### jq 'map_values(if . == null then "N/A" else . end)'

```bash
jq 'map_values(if . == null then "N/A" else . end)'
```

Example:

```bash
jq 'map_values(if . == "" then null else . end)' data.json
```

Normalizes nulls or empty strings across an object.


## Flattening

### jq '[leaf_paths as $path | { "key": $path | join("."), "value": getpath($path) }] | from_entries'

```bash
jq '[leaf_paths as $path | { "key": $path | join("."), "value": getpath($path) }] | from_entries'
```

Example:

```bash
jq '...' nested_config.json
```

Flattens a deeply nested JSON object into a single-level dot-notation map.


## Docker/K8s

### docker inspect container | jq '.[0].NetworkSettings.IPAddress'

```bash
docker inspect container | jq '.[0].NetworkSettings.IPAddress'
```

Example:

```bash
kubectl get pod -o json | jq '.items[].metadata.name'
```

Extracts networking or metadata information from container runtime output.

### kubectl get secret -o json | jq '.data | map_values(@base64d)'

```bash
kubectl get secret -o json | jq '.data | map_values(@base64d)'
```

Example:

```bash
jq '.data | map_values(@base64d)' k8s_secret.json
```

Decodes Kubernetes secrets directly from the JSON output.


## Git Automation

### gh api repos/:owner/:repo/issues | jq 'map(select(.labels[].name == "bug"))'

```bash
gh api repos/:owner/:repo/issues | jq 'map(select(.labels[].name == "bug"))'
```

Example:

```bash
curl ... | jq 'map(select(.state == "open"))'
```

Filters GitHub API issues by label or state.


## Network Analysis

### jq -s 'map(.timestamp) | max - min' packets.json

```bash
jq -s 'map(.timestamp) | max - min' packets.json
```

Example:

```bash
jq -s 'map(.latency) | add / length' ping.json
```

Calculates the time duration or average latency from a capture file.


## Blue Team

### jq 'select(.event_id == 4624 and .logon_type == 10)' winlogs.json

```bash
jq 'select(.event_id == 4624 and .logon_type == 10)' winlogs.json
```

Example:

```bash
jq 'select(.id == 4625)' security.json
```

Filters Windows Event Logs for RDP logins (Type 10) or failures.

### jq 'group_by(.src_ip) | map({ip: .[0].src_ip, count: length}) | sort_by(.count) | reverse'

```bash
jq 'group_by(.src_ip) | map({ip: .[0].src_ip, count: length}) | sort_by(.count) | reverse'
```

Example:

```bash
jq 'group_by(.user) | map({user:.[0].user, count:length})' firewall.json
```

Generates a frequency analysis of source IPs to identify potential attackers.


## Advanced Transformation

### jq 'reduce inputs as $item (.; .[$item.id] = $item)'

```bash
jq 'reduce inputs as $item (.; .[$item.id] = $item)'
```

Example:

```bash
jq -n 'reduce inputs as $x ({}; .[$x.name] = $x.value)' data.txt
```

Transforms a stream of objects into a hash map indexed by ID.

### jq 'transpose | map(add)' matrix.json

```bash
jq 'transpose | map(add)' matrix.json
```

Example:

```bash
jq 'transpose' arrays.json
```

Transposes a matrix (array of arrays) or sums columns.


## IAM Analysis

### jq '.Statement[] | select(.Effect == "Allow" and .Action == "*")'

```bash
jq '.Statement[] | select(.Effect == "Allow" and .Action == "*")'
```

Example:

```bash
jq '.Statement[] | select(.Resource == "*")' policy.json
```

Audits IAM policies for overly permissive wildcard permissions.


## Streaming Large Files

### jq --stream 'select(.[0][1] == "id") | .[1]'

```bash
jq --stream 'select(.[0][1] == "id") | .[1]'
```

Example:

```bash
jq -cn --stream 'fromstream(1|truncate_stream(inputs))' huge.json
```

Parses massive files token-by-token to reduce memory usage.

### jq -cn --stream 'fromstream(inputs | select(.[0][0] == "users"))'

```bash
jq -cn --stream 'fromstream(inputs | select(.[0][0] == "users"))'
```

Example:

```bash
jq --stream 'select(length==2) | .[0] as $p | .[1] as $v | "\($p): \($v)"' large.json
```

Reconstructs only specific parts of a large JSON file from a stream.


## CSV to JSON

### jq -R -s 'split("\n") | .[1:] | map(split(",")) | map({id: .[0], val: .[1]})'

```bash
jq -R -s 'split("\n") | .[1:] | map(split(",")) | map({id: .[0], val: .[1]})'
```

Example:

```bash
jq -R -s '...' data.csv
```

Manually converts raw CSV text into JSON objects (header aware).


## Math Statistics

### jq 'map(.value) | add / length' file.json

```bash
jq 'map(.value) | add / length' file.json
```

Example:

```bash
jq '.scores | add / length' class.json
```

Calculates the arithmetic mean (average) of an array of numbers.

### jq 'map(.value) | sort | .[length/2]' file.json

```bash
jq 'map(.value) | sort | .[length/2]' file.json
```

Example:

```bash
jq '.prices | sort | .[length/2]' items.json
```

Calculates the median value of an array.


## Comparison

### jq -n --argfile a old.json --argfile b new.json '$a == $b'

```bash
jq -n --argfile a old.json --argfile b new.json '$a == $b'
```

Example:

```bash
jq -n --argfile a 1.json --argfile b 2.json '$a - $b'
```

Compares two JSON files for strict equality or diffs object keys.


## Diffing

### jq -n --argfile a old.json --argfile b new.json '($b - $a)'

```bash
jq -n --argfile a old.json --argfile b new.json '($b - $a)'
```

Example:

```bash
jq -n --argfile a v1.json --argfile b v2.json '($b - $a)'
```

Outputs the fields present in the second file that are missing or different in the first.


## GeoJSON

### jq '.features[] | select(.properties.population > 1000000)' geo.json

```bash
jq '.features[] | select(.properties.population > 1000000)' geo.json
```

Example:

```bash
jq '.features[].geometry.coordinates' cities.json
```

Filters GeoJSON feature collections based on property data.


## Encoding

### jq -R -r '@html' input.txt

```bash
jq -R -r '@html' input.txt
```

Example:

```bash
jq '.content | @html' post.json
```

Escapes HTML entities in a string.

### jq '@json' file.json

```bash
jq '@json' file.json
```

Example:

```bash
jq '.log_message | @json' payload.json
```

Serializes a string or object as a JSON string literal.


## Error Handling

### jq 'try .foo catch "fallback"'

```bash
jq 'try .foo catch "fallback"'
```

Example:

```bash
jq 'map(try .value catch 0)' mixed.json
```

Catches errors during evaluation and provides a default value.

### jq 'try (.a / .b) catch error("division by zero")'

```bash
jq 'try (.a / .b) catch error("division by zero")'
```

Example:

```bash
jq 'if .b == 0 then error("zero") else .a/.b end' math.json
```

Raises a custom error message to halt processing.


## Complex Selection

### jq '.users[] | select([.roles[] | contains("admin")] | any)'

```bash
jq '.users[] | select([.roles[] | contains("admin")] | any)'
```

Example:

```bash
jq '.items[] | select([.tags[] | startswith("pro")] | any)' data.json
```

Selects objects where at least one element in a nested array matches a condition.

### jq 'select(.key | IN("A", "B", "C"))'

```bash
jq 'select(.key | IN("A", "B", "C"))'
```

Example:

```bash
jq 'select(.status | IN("pending", "running"))' jobs.json
```

Filters based on a value membership in a specific list.


## Combinatorics

### jq 'combinations'

```bash
jq 'combinations'
```

Example:

```bash
jq '[[1,2], ["a","b"]] | combinations' file.json
```

Outputs the Cartesian product of the input arrays.


## Path Management

### jq 'setpath(["a","b"]; 1)'

```bash
jq 'setpath(["a","b"]; 1)'
```

Example:

```bash
jq 'setpath(["users", 0, "active"]; true)' state.json
```

Sets a value at a dynamic path specified by an array.

### jq 'getpath(["a","b"])'

```bash
jq 'getpath(["a","b"])'
```

Example:

```bash
jq 'getpath(["config", "network", "ip"])' config.json
```

Retrieves a value using an array as the path selector.


## Deep Equality

### jq 'unique_by(.)'

```bash
jq 'unique_by(.)'
```

Example:

```bash
jq '[.a, .b] | unique_by(.) | length == 1' compare.json
```

Checks if complex objects are identical by deduplicating them.


## Self-Quine

### jq '.' jq_reference_guide.json

```bash
jq '.' jq_reference_guide.json
```

Example:

```bash
jq '.' self.json
```

Reads and pretty-prints the file itself to validate its own structure.

## Related tools

- [curl](https://terminal.rokibulroni.com/tool/utilities/curl)
- [HTTPie](https://terminal.rokibulroni.com/tool/utilities/httpie)
- [awk](https://terminal.rokibulroni.com/tool/linux/awk)
