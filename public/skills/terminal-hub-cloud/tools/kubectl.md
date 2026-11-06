# kubectl

> The Kubernetes command line: inspect and manage clusters, workloads, RBAC and secrets — and check what an identity is allowed to do.

- Category: Cloud
- Commands: 125
- Page: https://terminal.rokibulroni.com/tool/cloud/kubectl
- Homepage: https://kubernetes.io/docs/reference/kubectl/
- Documentation: https://kubernetes.io/docs/reference/kubectl/quick-reference/
- Tags: Kubernetes, containers, RBAC

## Install

- apt: `sudo snap install kubectl --classic`
- brew: `brew install kubectl`
- windows: `winget install Kubernetes.kubectl`

## Basic Syntax & Help

### kubectl --help

```bash
kubectl --help
```

Displays the root level help menu for kubectl commands and global flags.

### kubectl options

```bash
kubectl options
```

Lists all global command-line options available for every kubectl command.


## Cluster Information

### kubectl version

```bash
kubectl version
```

Example:

```bash
kubectl version --output=json
```

Prints the client and server version information in JSON format.

### kubectl cluster-info

```bash
kubectl cluster-info
```

Example:

```bash
kubectl cluster-info dump
```

Displays addresses of the master and services, or dumps detailed cluster debugging info.

### kubectl api-resources

```bash
kubectl api-resources
```

Example:

```bash
kubectl api-resources --namespaced=true
```

Lists all supported API resources available on the server, filtered by namespaced scope.

### kubectl api-versions

```bash
kubectl api-versions
```

Lists the API versions that are supported by the current Kubernetes cluster.


## Context & Configuration

### kubectl config view

```bash
kubectl config view
```

Example:

```bash
kubectl config view --minify
```

Displays the current kubeconfig settings, optionally minimizing output to the current context.

### kubectl config get-contexts

```bash
kubectl config get-contexts
```

Lists all contexts defined in the kubeconfig file and highlights the active one.

### kubectl config use-context

```bash
kubectl config use-context
```

Example:

```bash
kubectl config use-context my-cluster-context
```

Switches the current active context to the specified context name.

### kubectl config set-context

```bash
kubectl config set-context
```

Example:

```bash
kubectl config set-context --current --namespace=dev
```

Modifies the current context to set a default namespace for future commands.

### kubectl config delete-context

```bash
kubectl config delete-context
```

Example:

```bash
kubectl config delete-context old-cluster
```

Removes the specified context entry from the kubeconfig file.


## Namespace Management

### kubectl get namespaces

```bash
kubectl get namespaces
```

Example:

```bash
kubectl get ns --show-labels
```

Lists all namespaces in the cluster along with their associated labels.

### kubectl create namespace

```bash
kubectl create namespace
```

Example:

```bash
kubectl create namespace production --dry-run=client -o yaml
```

Generates the YAML manifest for a new namespace without actually creating it.


## Resource Inspection (Basic)

### kubectl get all

```bash
kubectl get all
```

Example:

```bash
kubectl get all --all-namespaces
```

Lists most resources (pods, services, deployments) across every namespace in the cluster.

### kubectl get pods

```bash
kubectl get pods
```

Example:

```bash
kubectl get pods -o wide
```

Lists pods with extended information such as IP address and Node assignment.

### kubectl get services

```bash
kubectl get services
```

Example:

```bash
kubectl get svc --sort-by=.metadata.name
```

Lists services sorted alphabetically by their name.


## Resource Inspection (Detail)

### kubectl describe pod

```bash
kubectl describe pod
```

Example:

```bash
kubectl describe pod my-pod-name
```

Shows detailed configuration, status, events, and conditions for a specific pod.

### kubectl describe node

```bash
kubectl describe node
```

Example:

```bash
kubectl describe node worker-node-01
```

Displays detailed node status, allocated resources, and system information.


## Imperative Creation

### kubectl run

```bash
kubectl run
```

Example:

```bash
kubectl run nginx --image=nginx --restart=Never
```

Creates a single pod instance imperatively using the specified image.

### kubectl create deployment

```bash
kubectl create deployment
```

Example:

```bash
kubectl create deployment web --image=nginx --replicas=3
```

Creates a deployment with a specified replica count and image.

### kubectl expose

```bash
kubectl expose
```

Example:

```bash
kubectl expose deployment web --port=80 --target-port=8080 --type=LoadBalancer
```

Exposes a resource as a new Kubernetes Service.

### kubectl create job

```bash
kubectl create job
```

Example:

```bash
kubectl create job manual-job --image=busybox -- date
```

Creates a Job resource that runs a specific command to completion.

### kubectl create cronjob

```bash
kubectl create cronjob
```

Example:

```bash
kubectl create cronjob my-cron --image=busybox --schedule="*/1 * * * *" -- date
```

Creates a CronJob that runs on a specific schedule.


## Debugging & Interaction

### kubectl logs

```bash
kubectl logs
```

Example:

```bash
kubectl logs my-pod
```

Print the logs for a container in a pod or specified resource.

### kubectl logs (follow)

```bash
kubectl logs (follow)
```

Example:

```bash
kubectl logs -f my-pod
```

Streams the logs for a container in real-time, similar to tail -f.

### kubectl logs (multi-container)

```bash
kubectl logs (multi-container)
```

Example:

```bash
kubectl logs my-pod -c sidecar-container
```

Retrieves logs from a specific container within a multi-container pod.

### kubectl logs (previous)

```bash
kubectl logs (previous)
```

Example:

```bash
kubectl logs my-pod --previous
```

Retrieves logs from a previous instantiation of a container (e.g., after a crash).

### kubectl exec

```bash
kubectl exec
```

Example:

```bash
kubectl exec -it my-pod -- /bin/bash
```

Executes a command inside a container with an interactive TTY.

### kubectl cp

```bash
kubectl cp
```

Example:

```bash
kubectl cp /local/path my-pod:/container/path
```

Copies files and directories to and from containers.

### kubectl port-forward

```bash
kubectl port-forward
```

Example:

```bash
kubectl port-forward pod/my-pod 8080:80
```

Forwards one or more local ports to a pod.

### kubectl attach

```bash
kubectl attach
```

Example:

```bash
kubectl attach my-pod -c main-app -i -t
```

Attaches to a running process in a container to view output or interact.

### kubectl top pod

```bash
kubectl top pod
```

Example:

```bash
kubectl top pod --containers
```

Displays current CPU and memory usage for pods and their containers.

### kubectl top node

```bash
kubectl top node
```

Displays current CPU and memory usage for nodes.


## Declarative Management

### kubectl apply

```bash
kubectl apply
```

Example:

```bash
kubectl apply -f ./manifests/
```

Apply a configuration to a resource by filename or directory.

### kubectl apply (server-side)

```bash
kubectl apply (server-side)
```

Example:

```bash
kubectl apply -f deployment.yaml --server-side
```

Uses server-side apply to manage field ownership and merge conflicts.

### kubectl delete

```bash
kubectl delete
```

Example:

```bash
kubectl delete -f deployment.yaml
```

Delete resources defined in a configuration file.

### kubectl diff

```bash
kubectl diff
```

Example:

```bash
kubectl diff -f deployment.yaml
```

Displays differences between the current live cluster state and the local manifest.

### kubectl replace

```bash
kubectl replace
```

Example:

```bash
kubectl replace -f pod.yaml --force
```

Replaces a resource by filename, optionally forcing deletion and recreation.

### kubectl kustomize

```bash
kubectl kustomize
```

Example:

```bash
kubectl kustomize ./overlays/production
```

Builds a kustomization target and prints the resulting YAML to stdout.

### kubectl explain

```bash
kubectl explain
```

Example:

```bash
kubectl explain deployment.spec.strategy
```

Describes the fields and structure of a Kubernetes resource type.


## Scaling & Rollouts

### kubectl scale

```bash
kubectl scale
```

Example:

```bash
kubectl scale deployment/web --replicas=5
```

Updates the replica count of a deployment, replicaset, or statefulset.

### kubectl autoscale

```bash
kubectl autoscale
```

Example:

```bash
kubectl autoscale deployment/web --min=2 --max=10 --cpu-percent=80
```

Creates a HorizontalPodAutoscaler to automatically manage scale.

### kubectl rollout status

```bash
kubectl rollout status
```

Example:

```bash
kubectl rollout status daemonset/agent
```

Watches the status of a rollout until it is complete.

### kubectl rollout history

```bash
kubectl rollout history
```

Example:

```bash
kubectl rollout history deployment/web --revision=2
```

Views the revision history of a rollout.

### kubectl rollout undo

```bash
kubectl rollout undo
```

Example:

```bash
kubectl rollout undo deployment/web --to-revision=1
```

Rolls back a deployment to a previous revision.

### kubectl rollout restart

```bash
kubectl rollout restart
```

Example:

```bash
kubectl rollout restart deployment/web
```

Restarts a resource, triggering a new rollout without configuration changes.

### kubectl rollout pause

```bash
kubectl rollout pause
```

Example:

```bash
kubectl rollout pause deployment/web
```

Pauses a rollout to perform multiple changes before resuming.

### kubectl rollout resume

```bash
kubectl rollout resume
```

Example:

```bash
kubectl rollout resume deployment/web
```

Resumes a paused rollout.


## Config & Secrets

### kubectl create configmap

```bash
kubectl create configmap
```

Example:

```bash
kubectl create configmap app-config --from-file=config.properties
```

Creates a ConfigMap from a file, directory, or literal value.

### kubectl create secret generic

```bash
kubectl create secret generic
```

Example:

```bash
kubectl create secret generic db-pass --from-literal=password=safe
```

Creates a generic secret from literal values or files.

### kubectl create secret docker-registry

```bash
kubectl create secret docker-registry
```

Example:

```bash
kubectl create secret docker-registry regcred --docker-server=x --docker-username=user --docker-password=pass
```

Creates a secret for authenticating with a Docker registry.

### kubectl create secret tls

```bash
kubectl create secret tls
```

Example:

```bash
kubectl create secret tls tls-secret --cert=path/to/cert.crt --key=path/to/key.key
```

Creates a TLS secret from a certificate and key file.


## Modification & Patching

### kubectl label

```bash
kubectl label
```

Example:

```bash
kubectl label pods my-pod environment=production --overwrite
```

Updates the labels on a resource, optionally overwriting existing ones.

### kubectl annotate

```bash
kubectl annotate
```

Example:

```bash
kubectl annotate service my-service description="Load Balancer" --record
```

Updates the annotations on a resource.

### kubectl set image

```bash
kubectl set image
```

Example:

```bash
kubectl set image deployment/web nginx=nginx:1.19
```

Updates the image of a container in a pod template.

### kubectl set env

```bash
kubectl set env
```

Example:

```bash
kubectl set env deployment/registry STORAGE_DIR=/local
```

Updates environment variables on a pod template.

### kubectl set resources

```bash
kubectl set resources
```

Example:

```bash
kubectl set resources deployment nginx -c=nginx --limits=cpu=200m,memory=512Mi
```

Specifies compute resource requirements for a container.

### kubectl edit

```bash
kubectl edit
```

Example:

```bash
kubectl edit svc/my-service
```

Edit a resource on the server using the default text editor.

### kubectl patch (merge)

```bash
kubectl patch (merge)
```

Example:

```bash
kubectl patch node k8s-node-1 -p '{"spec":{"unschedulable":true}}'
```

Update field(s) of a resource using strategic merge patch.

### kubectl patch (json)

```bash
kubectl patch (json)
```

Example:

```bash
kubectl patch deployment web --type='json' -p='[{"op": "replace", "path": "/spec/replicas", "value": 3}]'
```

Update resource using RFC 6902 JSON patch.


## Node Maintenance

### kubectl cordon

```bash
kubectl cordon
```

Example:

```bash
kubectl cordon node-1
```

Mark node as unschedulable to prevent new pods from arriving.

### kubectl uncordon

```bash
kubectl uncordon
```

Example:

```bash
kubectl uncordon node-1
```

Mark node as schedulable, allowing new pods to start.

### kubectl drain

```bash
kubectl drain
```

Example:

```bash
kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data
```

Prepare node for maintenance by evicting all pods.

### kubectl taint

```bash
kubectl taint
```

Example:

```bash
kubectl taint nodes node1 key=value:NoSchedule
```

Update the taints on one or more nodes.


## Networking

### kubectl get endpoints

```bash
kubectl get endpoints
```

Example:

```bash
kubectl get endpoints my-service
```

Displays the endpoints (IP:Port) backing a service.

### kubectl get ingress

```bash
kubectl get ingress
```

Example:

```bash
kubectl get ingress --all-namespaces
```

Lists Ingress resources to view external access rules.


## Output Formatting

### kubectl get -o wide

```bash
kubectl get -o wide
```

Example:

```bash
kubectl get pods -o wide
```

Output in plain text with additional columns (e.g., Node, IP).

### kubectl get -o yaml

```bash
kubectl get -o yaml
```

Example:

```bash
kubectl get pod my-pod -o yaml
```

Output the full resource definition in YAML format.

### kubectl get -o json

```bash
kubectl get -o json
```

Example:

```bash
kubectl get pod my-pod -o json
```

Output the full resource definition in JSON format.

### kubectl get --show-labels

```bash
kubectl get --show-labels
```

Example:

```bash
kubectl get pods --show-labels
```

Include a column showing labels attached to resources.

### kubectl get --sort-by

```bash
kubectl get --sort-by
```

Example:

```bash
kubectl get pods --sort-by=.status.startTime
```

Sort list output by a specific JSONPath expression.

### kubectl get -o jsonpath (names)

```bash
kubectl get -o jsonpath (names)
```

Example:

```bash
kubectl get pods -o jsonpath='{.items[*].metadata.name}'
```

Extract and print specific fields using a JSONPath expression.

### kubectl get -o custom-columns

```bash
kubectl get -o custom-columns
```

Example:

```bash
kubectl get pods -o custom-columns=NAME:.metadata.name,IMAGE:.spec.containers[0].image
```

Define custom table columns based on field paths.

### kubectl get --no-headers

```bash
kubectl get --no-headers
```

Example:

```bash
kubectl get pods --no-headers
```

Suppress the header row in output, useful for scripts.


## Filtering

### kubectl get -l (label selector)

```bash
kubectl get -l (label selector)
```

Example:

```bash
kubectl get pods -l app=nginx,tier=frontend
```

Filter resources by label selector equality or set-based requirements.

### kubectl get --field-selector

```bash
kubectl get --field-selector
```

Example:

```bash
kubectl get pods --field-selector status.phase=Running
```

Filter resources based on the value of resource fields.


## Wait & Automation

### kubectl wait

```bash
kubectl wait
```

Example:

```bash
kubectl wait --for=condition=Ready pod/my-pod --timeout=60s
```

Wait for a specific condition on one or more resources.

### kubectl delete (wait)

```bash
kubectl delete (wait)
```

Example:

```bash
kubectl delete pod my-pod --wait=false
```

Delete resources without waiting for finalizer cleanup (returns immediately).


## RBAC & Security

### kubectl create serviceaccount

```bash
kubectl create serviceaccount
```

Example:

```bash
kubectl create serviceaccount my-sa
```

Creates a new ServiceAccount in the current namespace.

### kubectl create role

```bash
kubectl create role
```

Example:

```bash
kubectl create role pod-reader --verb=get,list --resource=pods
```

Creates a Role with specific permissions within a namespace.

### kubectl create rolebinding

```bash
kubectl create rolebinding
```

Example:

```bash
kubectl create rolebinding read-pods --role=pod-reader --user=jane
```

Binds a Role to a user or group in a specific namespace.

### kubectl create clusterrole

```bash
kubectl create clusterrole
```

Example:

```bash
kubectl create clusterrole node-reader --verb=get,list --resource=nodes
```

Creates a ClusterRole with permissions across the entire cluster.

### kubectl create clusterrolebinding

```bash
kubectl create clusterrolebinding
```

Example:

```bash
kubectl create clusterrolebinding read-nodes-global --clusterrole=node-reader --group=system:authenticated
```

Binds a ClusterRole to a user or group globally.

### kubectl auth can-i

```bash
kubectl auth can-i
```

Example:

```bash
kubectl auth can-i create pods
```

Checks if the current user has permission to perform an action.

### kubectl auth can-i (impersonate)

```bash
kubectl auth can-i (impersonate)
```

Example:

```bash
kubectl auth can-i list secrets --as=jane --as-group=devs
```

Checks permissions impersonating another user or group.

### kubectl auth reconcile

```bash
kubectl auth reconcile
```

Example:

```bash
kubectl auth reconcile -f rbac-policy.yaml
```

Patches RBAC roles and bindings to match the input file if safe.

### kubectl certificate approve

```bash
kubectl certificate approve
```

Example:

```bash
kubectl certificate approve my-csr
```

Approves a CertificateSigningRequest (CSR).

### kubectl certificate deny

```bash
kubectl certificate deny
```

Example:

```bash
kubectl certificate deny my-csr
```

Denies a CertificateSigningRequest (CSR).


## Events & Diagnostics

### kubectl get events

```bash
kubectl get events
```

Example:

```bash
kubectl get events --sort-by='.lastTimestamp'
```

Lists recent events in the namespace, sorted by time.

### kubectl get events (watch)

```bash
kubectl get events (watch)
```

Example:

```bash
kubectl get events --watch-only
```

Streams events as they happen without listing history.


## Advanced Debugging

### kubectl debug (node)

```bash
kubectl debug (node)
```

Example:

```bash
kubectl debug node/worker-1 -it --image=busybox
```

Creates a debugging pod on a node to troubleshoot host issues.

### kubectl debug (pod)

```bash
kubectl debug (pod)
```

Example:

```bash
kubectl debug -it pod/my-pod --image=busybox --target=app-container
```

Attaches a new container to a running pod for debugging purposes.

### kubectl alpha events

```bash
kubectl alpha events
```

Example:

```bash
kubectl alpha events --for=pod/nginx
```

Experimental command to view events filtered for a specific object.


## Raw API Access

### kubectl get --raw

```bash
kubectl get --raw
```

Example:

```bash
kubectl get --raw /metrics
```

Sends a raw GET request to the Kubernetes API server.

### kubectl proxy

```bash
kubectl proxy
```

Example:

```bash
kubectl proxy --port=8001
```

Creates a proxy server between localhost and the Kubernetes API server.


## Plugin Management

### kubectl plugin list

```bash
kubectl plugin list
```

Lists all available kubectl plugins installed in the path.


## Cluster Management

### kubectl delete node

```bash
kubectl delete node
```

Example:

```bash
kubectl delete node worker-1
```

Removes a node object from the cluster (does not terminate VM).


## Cleanup

### kubectl delete pods (force)

```bash
kubectl delete pods (force)
```

Example:

```bash
kubectl delete pod my-pod --grace-period=0 --force
```

Forcefully deletes a pod, bypassing graceful termination.

### kubectl delete evictions

```bash
kubectl delete evictions
```

Example:

```bash
kubectl delete pod --field-selector=status.phase=Failed -A
```

Deletes all failed pods across all namespaces (common cleanup task).


## Blue Team/Defense

### kubectl get pod (security context)

```bash
kubectl get pod (security context)
```

Example:

```bash
kubectl get pods -o jsonpath='{.items[*].spec.securityContext}'
```

Audits the security context of running pods to find misconfigurations.

### kubectl get psp

```bash
kubectl get psp
```

Lists PodSecurityPolicies (if enabled) to verify admission controls.

### kubectl get networkpolicies

```bash
kubectl get networkpolicies
```

Example:

```bash
kubectl get networkpolicies --all-namespaces
```

Audits network segmentation rules across the cluster.

### kubectl get clusterrolebindings (audit)

```bash
kubectl get clusterrolebindings (audit)
```

Example:

```bash
kubectl get clusterrolebindings -o custom-columns=NAME:.metadata.name,ROLE:.roleRef.name,SUBJECT:.subjects[*].name
```

Audits global permissions to identify privileged users.


## Incident Response

### kubectl get pods (by time)

```bash
kubectl get pods (by time)
```

Example:

```bash
kubectl get pods --sort-by=.metadata.creationTimestamp
```

Lists pods ordered by creation time to identify recently launched rogue containers.

### kubectl get secrets (audit)

```bash
kubectl get secrets (audit)
```

Example:

```bash
kubectl get secrets -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.type}{"\n"}{end}'
```

Lists secrets and their types to audit for exposed credentials.

### kubectl delete (cascade false)

```bash
kubectl delete (cascade false)
```

Example:

```bash
kubectl delete deployment nginx --cascade=orphan
```

Deletes the deployment controller but leaves the pods running for investigation.


## Advanced Workflow

### kubectl cp (snapshot)

```bash
kubectl cp (snapshot)
```

Example:

```bash
kubectl cp my-pod:/var/log/app.log ./evidence.log
```

Extracts logs or files from a compromised pod for forensic analysis.

### kubectl patch (finalizers)

```bash
kubectl patch (finalizers)
```

Example:

```bash
kubectl patch pvc my-pvc -p '{"metadata":{"finalizers":null}}'
```

Removes finalizers to force deletion of stuck resources.

### kubectl diff (server-side)

```bash
kubectl diff (server-side)
```

Example:

```bash
kubectl diff -f manifest.yaml --server-side
```

Previews changes using server-side apply logic.

### kubectl replace (force)

```bash
kubectl replace (force)
```

Example:

```bash
kubectl replace --force -f pod.yaml
```

Forces resource replacement by deleting and recreating it immediately.

### kubectl get (watch)

```bash
kubectl get (watch)
```

Example:

```bash
kubectl get pods -w
```

Watches for changes to the list of pods in real-time.

### kubectl completion bash

```bash
kubectl completion bash
```

Example:

```bash
source <(kubectl completion bash)
```

Generates and sources the bash auto-completion code for the current shell.

### kubectl completion zsh

```bash
kubectl completion zsh
```

Example:

```bash
source <(kubectl completion zsh)
```

Generates and sources the zsh auto-completion code.

### kubectl convert

```bash
kubectl convert
```

Example:

```bash
kubectl convert -f deployment.yaml --output-version apps/v1
```

Converts config files between different API versions (requires plugin).


## Metrics & Discovery

### kubectl get --raw (nodes)

```bash
kubectl get --raw (nodes)
```

Example:

```bash
kubectl get --raw /api/v1/nodes/node1/proxy/metrics
```

Fetches raw metrics directly from a specific node.


## Complex Filtering

### kubectl get (jsonpath conditional)

```bash
kubectl get (jsonpath conditional)
```

Example:

```bash
kubectl get nodes -o jsonpath='{.items[?(@.spec.unschedulable)].metadata.name}'
```

Lists only nodes that are currently cordon/unschedulable.

### kubectl get (custom columns images)

```bash
kubectl get (custom columns images)
```

Example:

```bash
kubectl get pods -A -o custom-columns='NS:.metadata.namespace,POD:.metadata.name,IMAGE:.spec.containers[*].image'
```

Audits all images running across the entire cluster.


## Service Mesh / Sidecar

### kubectl describe (sidecar)

```bash
kubectl describe (sidecar)
```

Example:

```bash
kubectl describe pod my-pod | grep -A 10 'istio-proxy'
```

Inspects sidecar container details often used in service meshes.


## API Discovery

### kubectl explain (recursive)

```bash
kubectl explain (recursive)
```

Example:

```bash
kubectl explain deployment.spec --recursive
```

Recursively prints all fields and sub-fields for a resource spec.


## Lifecycle Management

### kubectl drain (force)

```bash
kubectl drain (force)
```

Example:

```bash
kubectl drain node-1 --force --ignore-daemonsets
```

Forces a node drain even if there are pods not managed by a controller.


## Security Auditing

### kubectl auth can-i (list)

```bash
kubectl auth can-i (list)
```

Example:

```bash
kubectl auth can-i --list --as=system:serviceaccount:ns:sa
```

Lists all allowed actions for a specific service account.


## Resource Tuning

### kubectl set serviceaccount

```bash
kubectl set serviceaccount
```

Example:

```bash
kubectl set serviceaccount deployment/web my-sa
```

Updates the service account used by a workload resource.


## Connectivity Check

### kubectl run (curl)

```bash
kubectl run (curl)
```

Example:

```bash
kubectl run curl-test --image=curlimages/curl -it --rm -- sh
```

Launches a temporary curl pod to test internal cluster connectivity.

### kubectl run (dns)

```bash
kubectl run (dns)
```

Example:

```bash
kubectl run dns-test --image=busybox -it --rm -- nslookup kubernetes.default
```

Launches a temporary pod to verify internal DNS resolution.


## Final Cleanup

### kubectl delete all

```bash
kubectl delete all
```

Example:

```bash
kubectl delete all --all -n test-ns
```

Deletes all resources in a namespace (use with extreme caution).

## Related tools

- [kube-bench](https://terminal.rokibulroni.com/tool/cloud/kube-bench)
- [kube-hunter](https://terminal.rokibulroni.com/tool/cloud/kube-hunter)
- [Docker](https://terminal.rokibulroni.com/tool/cloud/docker)
