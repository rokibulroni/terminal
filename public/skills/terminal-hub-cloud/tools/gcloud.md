# Google Cloud CLI

> The gcloud CLI for Google Cloud: manage projects, IAM, Compute Engine, GKE and storage from the terminal.

- Category: Cloud
- Commands: 160
- Page: https://terminal.rokibulroni.com/tool/cloud/gcloud
- Homepage: https://cloud.google.com/sdk
- Documentation: https://cloud.google.com/sdk/gcloud/reference
- Tags: GCP, cloud, IAM

## Install

- brew: `brew install --cask google-cloud-sdk`
- other: `curl https://sdk.cloud.google.com | bash`

## Basic Setup

### gcloud version

```bash
gcloud version
```

Displays the installed Google Cloud SDK version and component information.

### gcloud components list

```bash
gcloud components list
```

Lists all available SDK components and their current installation status.

### gcloud components update

```bash
gcloud components update
```

Updates all installed SDK components to the latest available version.

### gcloud help

```bash
gcloud help
```

Example:

```bash
gcloud help compute instances create
```

Displays detailed help documentation for a specific command group or subcommand.


## Authentication

### gcloud auth login

```bash
gcloud auth login
```

Initiates the browser-based authentication flow to log in with a user account.

### gcloud auth list

```bash
gcloud auth list
```

Lists all credentialed accounts currently active in the gcloud environment.

### gcloud auth application-default login

```bash
gcloud auth application-default login
```

Acquires credentials for Application Default Credentials (ADC) used by client libraries.

### gcloud auth revoke

```bash
gcloud auth revoke
```

Example:

```bash
gcloud auth revoke user@example.com
```

Revokes credentials for a specific account, logging them out of the CLI.


## Configuration

### gcloud config list

```bash
gcloud config list
```

Displays the active configuration properties for the current environment.

### gcloud config set project

```bash
gcloud config set project
```

Example:

```bash
gcloud config set project my-project-id
```

Sets the default project ID for subsequent commands to target.

### gcloud config configurations create

```bash
gcloud config configurations create
```

Example:

```bash
gcloud config configurations create my-lab-config
```

Creates a new named configuration profile to isolate settings between environments.

### gcloud config configurations activate

```bash
gcloud config configurations activate
```

Example:

```bash
gcloud config configurations activate my-lab-config
```

Switches the active CLI context to a specific named configuration.


## Project Management

### gcloud projects list

```bash
gcloud projects list
```

Lists all Google Cloud projects visible to the currently authenticated user.

### gcloud projects describe

```bash
gcloud projects describe
```

Example:

```bash
gcloud projects describe my-project-id
```

Shows metadata and lifecycle state for a specific project.

### gcloud projects create

```bash
gcloud projects create
```

Example:

```bash
gcloud projects create my-new-project-id --name='My New Project'
```

Creates a new Google Cloud project with the specified ID and display name.


## Identity & Access (IAM)

### gcloud iam roles list

```bash
gcloud iam roles list
```

Lists the standard curated IAM roles available in the project.

### gcloud iam service-accounts list

```bash
gcloud iam service-accounts list
```

Lists all service accounts residing within the current project.

### gcloud iam service-accounts create

```bash
gcloud iam service-accounts create
```

Example:

```bash
gcloud iam service-accounts create my-sa --display-name='My Service Account'
```

Creates a new service account within the current project.

### gcloud projects get-iam-policy

```bash
gcloud projects get-iam-policy
```

Example:

```bash
gcloud projects get-iam-policy my-project-id
```

Retrieves the IAM policy (permissions bindings) attached to the specified project.

### gcloud projects add-iam-policy-binding

```bash
gcloud projects add-iam-policy-binding
```

Example:

```bash
gcloud projects add-iam-policy-binding my-project-id --member='user:alice@example.com' --role='roles/viewer'
```

Adds an IAM policy binding to grant a specific role to a user or principal.


## Compute Engine

### gcloud compute zones list

```bash
gcloud compute zones list
```

Lists all available Compute Engine zones and their status.

### gcloud compute instances list

```bash
gcloud compute instances list
```

Lists all virtual machine instances in the project across all zones.

### gcloud compute instances describe

```bash
gcloud compute instances describe
```

Example:

```bash
gcloud compute instances describe my-instance --zone=us-central1-a
```

Displays detailed configuration and status of a specific VM instance.

### gcloud compute instances create

```bash
gcloud compute instances create
```

Example:

```bash
gcloud compute instances create my-vm --zone=us-central1-a --machine-type=e2-micro
```

Creates and starts a new VM instance with specified parameters.

### gcloud compute instances start

```bash
gcloud compute instances start
```

Example:

```bash
gcloud compute instances start my-vm --zone=us-central1-a
```

Starts a currently stopped virtual machine instance.

### gcloud compute instances stop

```bash
gcloud compute instances stop
```

Example:

```bash
gcloud compute instances stop my-vm --zone=us-central1-a
```

Stops a running virtual machine instance.

### gcloud compute ssh

```bash
gcloud compute ssh
```

Example:

```bash
gcloud compute ssh my-vm --zone=us-central1-a
```

Establishes an SSH connection to the instance using automatically managed keys.


## Networking

### gcloud compute networks list

```bash
gcloud compute networks list
```

Lists all VPC networks defined in the project.

### gcloud compute networks subnets list

```bash
gcloud compute networks subnets list
```

Lists all subnets associated with VPC networks in the project.

### gcloud compute firewall-rules list

```bash
gcloud compute firewall-rules list
```

Lists all firewall rules configured for the project's networks.

### gcloud compute firewall-rules describe

```bash
gcloud compute firewall-rules describe
```

Example:

```bash
gcloud compute firewall-rules describe allow-ssh
```

Shows detailed configuration of a specific firewall rule.

### gcloud compute firewall-rules create

```bash
gcloud compute firewall-rules create
```

Example:

```bash
gcloud compute firewall-rules create allow-http --allow tcp:80 --network default
```

Creates a new firewall rule allowing incoming TCP traffic on port 80.


## Cloud Storage

### gcloud storage ls

```bash
gcloud storage ls
```

Lists all Cloud Storage buckets in the project.

### gcloud storage buckets create

```bash
gcloud storage buckets create
```

Example:

```bash
gcloud storage buckets create gs://my-unique-bucket-name
```

Creates a new Cloud Storage bucket.

### gcloud storage buckets describe

```bash
gcloud storage buckets describe
```

Example:

```bash
gcloud storage buckets describe gs://my-unique-bucket-name
```

Displays metadata and settings for a specific bucket.

### gcloud storage cp

```bash
gcloud storage cp
```

Example:

```bash
gcloud storage cp local-file.txt gs://my-bucket/remote-file.txt
```

Copies a file from the local filesystem to a Cloud Storage bucket.


## Kubernetes Engine (GKE)

### gcloud container clusters list

```bash
gcloud container clusters list
```

Lists all GKE clusters in the project.

### gcloud container clusters get-credentials

```bash
gcloud container clusters get-credentials
```

Example:

```bash
gcloud container clusters get-credentials my-cluster --zone=us-central1-a
```

Configures kubectl to authenticate with the specified GKE cluster.


## Cloud Run

### gcloud run services list

```bash
gcloud run services list
```

Lists all Cloud Run services deployed in the project.

### gcloud run services describe

```bash
gcloud run services describe
```

Example:

```bash
gcloud run services describe my-service --region=us-central1
```

Displays details about a specific Cloud Run service configuration.


## Cloud Functions

### gcloud functions list

```bash
gcloud functions list
```

Lists all Cloud Functions deployed in the project.


## Cloud SQL

### gcloud sql instances list

```bash
gcloud sql instances list
```

Lists all Cloud SQL database instances.


## Pub/Sub

### gcloud pubsub topics list

```bash
gcloud pubsub topics list
```

Lists all Pub/Sub topics in the project.

### gcloud pubsub subscriptions list

```bash
gcloud pubsub subscriptions list
```

Lists all Pub/Sub subscriptions in the project.


## Logging

### gcloud logging read

```bash
gcloud logging read
```

Example:

```bash
gcloud logging read 'severity>=ERROR' --limit=10
```

Reads the latest log entries matching a specific filter.

### gcloud logging logs list

```bash
gcloud logging logs list
```

Lists all log names present in the project.


## Output Formatting

### gcloud projects list --format=json

```bash
gcloud projects list --format=json
```

Outputs the list of projects in full JSON format.

### gcloud compute instances list --format='table(name, zone, status)'

```bash
gcloud compute instances list --format='table(name, zone, status)'
```

Displays instance data in a tabular format with specific columns.


## Output Filtering

### gcloud compute instances list --filter='status=RUNNING'

```bash
gcloud compute instances list --filter='status=RUNNING'
```

Lists only the compute instances that are currently running.

### gcloud compute instances list --filter='name:test-*'

```bash
gcloud compute instances list --filter='name:test-*'
```

Lists instances where the name starts with 'test-'.


## Advanced IAM

### gcloud iam service-accounts keys list

```bash
gcloud iam service-accounts keys list
```

Example:

```bash
gcloud iam service-accounts keys list --iam-account=sa@project.iam.gserviceaccount.com
```

Lists the keys associated with a specific service account.

### gcloud iam service-accounts keys create

```bash
gcloud iam service-accounts keys create
```

Example:

```bash
gcloud iam service-accounts keys create key.json --iam-account=sa@project.iam.gserviceaccount.com
```

Creates and downloads a new JSON key file for a service account.

### gcloud iam roles describe

```bash
gcloud iam roles describe
```

Example:

```bash
gcloud iam roles describe roles/editor
```

Shows the permissions included in a specific IAM role.

### gcloud iam roles create

```bash
gcloud iam roles create
```

Example:

```bash
gcloud iam roles create MyCustomRole --project=my-project --permissions=compute.instances.get,compute.instances.list
```

Creates a custom IAM role with a defined set of permissions.


## Advanced Compute

### gcloud compute instance-templates list

```bash
gcloud compute instance-templates list
```

Lists available instance templates used for creating instance groups.

### gcloud compute instance-groups managed list

```bash
gcloud compute instance-groups managed list
```

Lists managed instance groups (MIGs) for autoscaling configurations.


## Advanced Networking

### gcloud compute routers list

```bash
gcloud compute routers list
```

Lists Cloud Routers used for dynamic routing and NAT.

### gcloud compute addresses list

```bash
gcloud compute addresses list
```

Lists static external and internal IP addresses reserved in the project.

### gcloud compute ssl-certificates list

```bash
gcloud compute ssl-certificates list
```

Lists SSL certificates managed by Compute Engine for load balancers.


## Security & Audit

### gcloud services list

```bash
gcloud services list
```

Example:

```bash
gcloud services list --enabled
```

Lists all APIs and services that are currently enabled in the project.

### gcloud services enable

```bash
gcloud services enable
```

Example:

```bash
gcloud services enable cloudasset.googleapis.com
```

Enables a specific Google Cloud API for the project.

### gcloud asset search-all-resources

```bash
gcloud asset search-all-resources
```

Example:

```bash
gcloud asset search-all-resources --scope=projects/my-project --query='name:production'
```

Searches all resources in the project matching a specific query using Cloud Asset Inventory.

### gcloud asset search-all-iam-policies

```bash
gcloud asset search-all-iam-policies
```

Example:

```bash
gcloud asset search-all-iam-policies --scope=projects/my-project --query='policy:roles/owner'
```

Finds all IAM policies in the project that grant the Owner role.


## Secret Manager

### gcloud secrets list

```bash
gcloud secrets list
```

Lists all secrets stored in Secret Manager.

### gcloud secrets versions access

```bash
gcloud secrets versions access
```

Example:

```bash
gcloud secrets versions access latest --secret=my-secret
```

Accesses and prints the payload of the latest version of a secret.


## KMS (Key Management)

### gcloud kms keyrings list

```bash
gcloud kms keyrings list
```

Example:

```bash
gcloud kms keyrings list --location=global
```

Lists all Key Management Service key rings in a specific location.

### gcloud kms keys list

```bash
gcloud kms keys list
```

Example:

```bash
gcloud kms keys list --keyring=my-keyring --location=global
```

Lists cryptographic keys within a specified KMS key ring.


## Blue Team Defensive

### gcloud compute firewall-rules list --filter='sourceRanges:(0.0.0.0/0)'

```bash
gcloud compute firewall-rules list --filter='sourceRanges:(0.0.0.0/0)'
```

Identifies firewall rules that allow traffic from the entire internet.

### gcloud compute instances list --filter='networkInterfaces.accessConfigs.natIP:*'

```bash
gcloud compute instances list --filter='networkInterfaces.accessConfigs.natIP:*'
```

Lists all VM instances that have an external public IP address assigned.

### gcloud projects get-iam-policy my-project --flatten='bindings[].members' --filter='bindings.members:allUsers'

```bash
gcloud projects get-iam-policy my-project --flatten='bindings[].members' --filter='bindings.members:allUsers'
```

Checks if any project-level IAM policies grant access to 'allUsers' (public access).

### gcloud storage buckets list --format='value(name, public_access_prevention)'

```bash
gcloud storage buckets list --format='value(name, public_access_prevention)'
```

Lists buckets and checks their Public Access Prevention status.

### gcloud logging sinks list

```bash
gcloud logging sinks list
```

Lists log router sinks to verify where logs are being exported.


## Container Security

### gcloud container clusters list --filter='addonsConfig.kubernetesDashboard.disabled=false'

```bash
gcloud container clusters list --filter='addonsConfig.kubernetesDashboard.disabled=false'
```

Checks for GKE clusters that have the legacy Kubernetes Dashboard enabled.

### gcloud artifacts repositories list

```bash
gcloud artifacts repositories list
```

Lists Artifact Registry repositories to audit container image storage locations.


## Automation Workflow

### gcloud compute snapshots list

```bash
gcloud compute snapshots list
```

Example:

```bash
gcloud compute snapshots list --filter='creationTimestamp < -P30D'
```

Lists compute disk snapshots created more than 30 days ago.

### gcloud compute disks list

```bash
gcloud compute disks list
```

Example:

```bash
gcloud compute disks list --filter='users:*'
```

Lists only disks that are currently attached to a VM instance.

### gcloud compute disks list --filter='-users:*'

```bash
gcloud compute disks list --filter='-users:*'
```

Lists orphaned disks that are not attached to any VM instance.

### gcloud builds list

```bash
gcloud builds list
```

Example:

```bash
gcloud builds list --ongoing
```

Lists currently running Cloud Build operations.


## Advanced Formatting

### gcloud projects list --format='csv(projectId, projectNumber)'

```bash
gcloud projects list --format='csv(projectId, projectNumber)'
```

Example:

```bash
gcloud projects list --format='csv(projectId, projectNumber)' > projects.csv
```

Exports a list of project IDs and numbers to a CSV format.

### gcloud iam service-accounts list --format='value(email)'

```bash
gcloud iam service-accounts list --format='value(email)'
```

Extracts and lists only the email addresses of service accounts.


## Organization Policy

### gcloud resource-manager org-policies list

```bash
gcloud resource-manager org-policies list
```

Example:

```bash
gcloud resource-manager org-policies list --project=my-project
```

Lists organization policies currently applied to the project.

### gcloud resource-manager org-policies describe

```bash
gcloud resource-manager org-policies describe
```

Example:

```bash
gcloud resource-manager org-policies describe compute.disableSerialPortAccess --project=my-project
```

Describes the configuration of a specific organization policy constraint.


## Billing

### gcloud beta billing accounts list

```bash
gcloud beta billing accounts list
```

Lists all billing accounts accessible to the user.

### gcloud beta billing projects describe

```bash
gcloud beta billing projects describe
```

Example:

```bash
gcloud beta billing projects describe my-project
```

Checks which billing account is linked to a specific project.


## Incident Response

### gcloud logging read 'protoPayload.methodName="beta.compute.firewalls.insert"' --limit=5

```bash
gcloud logging read 'protoPayload.methodName="beta.compute.firewalls.insert"' --limit=5
```

Searches logs for recent firewall rule creation events.

### gcloud logging read 'resource.type="gce_instance" AND protoPayload.methodName="v1.compute.instances.delete"'

```bash
gcloud logging read 'resource.type="gce_instance" AND protoPayload.methodName="v1.compute.instances.delete"'
```

Searches logs for VM instance deletion events.

### gcloud compute instances add-metadata

```bash
gcloud compute instances add-metadata
```

Example:

```bash
gcloud compute instances add-metadata my-compromised-vm --metadata=forensics-status=investigating
```

Tags a compromised instance with metadata to signal an active investigation.

### gcloud compute instances stop --async

```bash
gcloud compute instances stop --async
```

Example:

```bash
gcloud compute instances stop my-compromised-vm --async
```

Immediately sends a stop signal to a VM without waiting for the operation to complete.

### gcloud compute firewall-rules update

```bash
gcloud compute firewall-rules update
```

Example:

```bash
gcloud compute firewall-rules update default-allow-ssh --disabled
```

Disables a specific firewall rule to immediately cut off access.


## Impersonation

### gcloud config set auth/impersonate_service_account

```bash
gcloud config set auth/impersonate_service_account
```

Example:

```bash
gcloud config set auth/impersonate_service_account sa@project.iam.gserviceaccount.com
```

Configures the CLI to impersonate a service account for all subsequent commands.

### gcloud config unset auth/impersonate_service_account

```bash
gcloud config unset auth/impersonate_service_account
```

Stops service account impersonation and reverts to the original user credentials.

### gcloud compute instances list --impersonate-service-account

```bash
gcloud compute instances list --impersonate-service-account
```

Example:

```bash
gcloud compute instances list --impersonate-service-account=sa@project.iam.gserviceaccount.com
```

Runs a single command impersonating a service account without changing global config.


## Cloud DNS

### gcloud dns managed-zones list

```bash
gcloud dns managed-zones list
```

Lists managed DNS zones in Cloud DNS.

### gcloud dns record-sets list

```bash
gcloud dns record-sets list
```

Example:

```bash
gcloud dns record-sets list --zone=my-zone
```

Lists DNS records within a specific managed zone.


## App Engine

### gcloud app services list

```bash
gcloud app services list
```

Lists App Engine services deployed in the standard or flexible environment.

### gcloud app versions list

```bash
gcloud app versions list
```

Lists the deployed versions of App Engine services.


## BigQuery

### gcloud alpha bq datasets list

```bash
gcloud alpha bq datasets list
```

Lists BigQuery datasets (note: usually done via 'bq' tool, but gcloud has alpha support).


## Deployment Manager

### gcloud deployment-manager deployments list

```bash
gcloud deployment-manager deployments list
```

Lists infrastructure deployments managed by Cloud Deployment Manager.


## Advanced Config

### gcloud config set compute/region

```bash
gcloud config set compute/region
```

Example:

```bash
gcloud config set compute/region us-central1
```

Sets the default compute region to avoid specifying the flag in every command.

### gcloud config set compute/zone

```bash
gcloud config set compute/zone
```

Example:

```bash
gcloud config set compute/zone us-central1-a
```

Sets the default compute zone to avoid specifying the flag in every command.

### gcloud config set core/disable_usage_reporting

```bash
gcloud config set core/disable_usage_reporting
```

Example:

```bash
gcloud config set core/disable_usage_reporting true
```

Disables the anonymous usage reporting sent to Google.


## VPC Peering

### gcloud compute networks peerings list

```bash
gcloud compute networks peerings list
```

Example:

```bash
gcloud compute networks peerings list --network=default
```

Lists VPC peerings connected to a specific network.


## Interconnect

### gcloud compute interconnects list

```bash
gcloud compute interconnects list
```

Lists dedicated physical interconnect connections.


## VPN

### gcloud compute vpn-gateways list

```bash
gcloud compute vpn-gateways list
```

Lists Cloud HA VPN gateways.

### gcloud compute vpn-tunnels list

```bash
gcloud compute vpn-tunnels list
```

Lists VPN tunnels connecting to peer gateways.


## Load Balancing

### gcloud compute backend-services list

```bash
gcloud compute backend-services list
```

Lists backend services which process traffic for load balancers.

### gcloud compute url-maps list

```bash
gcloud compute url-maps list
```

Lists URL maps used by HTTP(S) load balancers to route requests.

### gcloud compute target-http-proxies list

```bash
gcloud compute target-http-proxies list
```

Lists target HTTP proxies used by load balancers.


## Advanced IAM

### gcloud iam workload-identity-pools list

```bash
gcloud iam workload-identity-pools list
```

Example:

```bash
gcloud iam workload-identity-pools list --location=global
```

Lists Workload Identity Pools for federated authentication.

### gcloud iam workload-identity-pools providers list

```bash
gcloud iam workload-identity-pools providers list
```

Example:

```bash
gcloud iam workload-identity-pools providers list --workload-identity-pool=my-pool --location=global
```

Lists identity providers configured within a Workload Identity Pool.


## Filestore

### gcloud filestore instances list

```bash
gcloud filestore instances list
```

Lists fully managed NFS file servers (Filestore instances).


## Memorystore

### gcloud redis instances list

```bash
gcloud redis instances list
```

Example:

```bash
gcloud redis instances list --region=us-central1
```

Lists Memorystore for Redis instances.


## Cloud Spanner

### gcloud spanner instances list

```bash
gcloud spanner instances list
```

Lists Cloud Spanner instances.

### gcloud spanner databases list

```bash
gcloud spanner databases list
```

Example:

```bash
gcloud spanner databases list --instance=my-instance
```

Lists databases within a specific Spanner instance.


## Compliance

### gcloud compute project-info describe

```bash
gcloud compute project-info describe
```

Displays project-wide metadata including default network tiers and usage export buckets.

### gcloud compute shared-vpc get-host-project

```bash
gcloud compute shared-vpc get-host-project
```

Example:

```bash
gcloud compute shared-vpc get-host-project my-project
```

Checks if the current project is attached to a Shared VPC Host project.

### gcloud access-context-manager policies list

```bash
gcloud access-context-manager policies list
```

Example:

```bash
gcloud access-context-manager policies list --organization=123456789
```

Lists VPC Service Controls access policies for an organization.

### gcloud access-context-manager perimeters list

```bash
gcloud access-context-manager perimeters list
```

Example:

```bash
gcloud access-context-manager perimeters list --policy=123456789
```

Lists service perimeters defined in VPC Service Controls.


## Advanced Security

### gcloud compute os-login describe-profile

```bash
gcloud compute os-login describe-profile
```

Describes the OS Login profile for the current user, used for SSH access management.

### gcloud alpha scc assets list

```bash
gcloud alpha scc assets list
```

Example:

```bash
gcloud alpha scc assets list --organization=123456789
```

Lists assets monitored by Security Command Center (SCC).

### gcloud alpha scc findings list

```bash
gcloud alpha scc findings list
```

Example:

```bash
gcloud alpha scc findings list --organization=123456789 --filter='state="ACTIVE"'
```

Lists active security findings detected by Security Command Center.


## Cloud Scheduler

### gcloud scheduler jobs list

```bash
gcloud scheduler jobs list
```

Lists scheduled cron jobs.

### gcloud scheduler jobs run

```bash
gcloud scheduler jobs run
```

Example:

```bash
gcloud scheduler jobs run my-job
```

Forces a Cloud Scheduler job to run immediately.


## Cloud Tasks

### gcloud tasks queues list

```bash
gcloud tasks queues list
```

Lists queues used for asynchronous task execution.


## Dataproc

### gcloud dataproc clusters list

```bash
gcloud dataproc clusters list
```

Example:

```bash
gcloud dataproc clusters list --region=us-central1
```

Lists Hadoop/Spark clusters managed by Dataproc.


## Dataflow

### gcloud dataflow jobs list

```bash
gcloud dataflow jobs list
```

Lists Dataflow streaming and batch jobs.


## Operations Suite

### gcloud monitoring dashboards list

```bash
gcloud monitoring dashboards list
```

Lists custom monitoring dashboards created in Cloud Monitoring.

### gcloud monitoring policies list

```bash
gcloud monitoring policies list
```

Lists alerting policies defined in Cloud Monitoring.


## Identity Aware Proxy (IAP)

### gcloud compute start-iap-tunnel

```bash
gcloud compute start-iap-tunnel
```

Example:

```bash
gcloud compute start-iap-tunnel my-instance 22 --zone=us-central1-a
```

Starts an IAP tunnel to forward a local port to the instance's SSH port.


## Advanced Storage

### gcloud storage buckets update

```bash
gcloud storage buckets update
```

Example:

```bash
gcloud storage buckets update gs://my-bucket --uniform-bucket-level-access
```

Updates a bucket to enforce uniform bucket-level access (disabling object ACLs).

### gcloud storage objects update

```bash
gcloud storage objects update
```

Example:

```bash
gcloud storage objects update gs://my-bucket/file.txt --add-acl-grant=entity=AllUsers,role=READER
```

Modifies object ACLs (caution: creates public objects).

### gcloud storage hmac list

```bash
gcloud storage hmac list
```

Lists HMAC keys used for S3-interoperable storage access.


## Service Directory

### gcloud service-directory namespaces list

```bash
gcloud service-directory namespaces list
```

Lists namespaces in Service Directory.


## Recaptcha Enterprise

### gcloud recaptcha keys list

```bash
gcloud recaptcha keys list
```

Lists reCAPTCHA Enterprise keys.


## Health Checks

### gcloud compute health-checks list

```bash
gcloud compute health-checks list
```

Lists health checks used by load balancers and managed instance groups.


## Instance Groups

### gcloud compute instance-groups unmanaged list

```bash
gcloud compute instance-groups unmanaged list
```

Lists unmanaged instance groups (often used for legacy setups).


## Complex Filtering

### gcloud compute instances list --filter='tags.items:web-server AND machineType:e2-micro'

```bash
gcloud compute instances list --filter='tags.items:web-server AND machineType:e2-micro'
```

Filters instances that have the 'web-server' network tag AND are e2-micro.

### gcloud projects list --filter='createTime < 2023-01-01'

```bash
gcloud projects list --filter='createTime < 2023-01-01'
```

Filters projects created before a specific date.


## Cleanup

### gcloud compute instances delete

```bash
gcloud compute instances delete
```

Example:

```bash
gcloud compute instances delete my-vm --zone=us-central1-a --quiet
```

Deletes a VM instance without interactive confirmation.

### gcloud storage rm

```bash
gcloud storage rm
```

Example:

```bash
gcloud storage rm gs://my-bucket/file.txt
```

Deletes a specific object from a Cloud Storage bucket.

### gcloud storage rm -r

```bash
gcloud storage rm -r
```

Example:

```bash
gcloud storage rm -r gs://my-bucket
```

Recursively deletes a bucket and all objects contained within it.

### gcloud projects delete

```bash
gcloud projects delete
```

Example:

```bash
gcloud projects delete my-project-id
```

Shuts down a project and schedules it for deletion.

### gcloud compute firewall-rules delete

```bash
gcloud compute firewall-rules delete
```

Example:

```bash
gcloud compute firewall-rules delete allow-http
```

Deletes a specific firewall rule.

### gcloud container clusters delete

```bash
gcloud container clusters delete
```

Example:

```bash
gcloud container clusters delete my-cluster --zone=us-central1-a
```

Deletes a GKE cluster and its associated resources.

### gcloud iam service-accounts delete

```bash
gcloud iam service-accounts delete
```

Example:

```bash
gcloud iam service-accounts delete my-sa@my-project.iam.gserviceaccount.com
```

Deletes a service account identity.


## Endpoints

### gcloud endpoints services list

```bash
gcloud endpoints services list
```

Lists Cloud Endpoints services.


## Source Repositories

### gcloud source repos list

```bash
gcloud source repos list
```

Lists Cloud Source Repositories hosted in the project.


## Policy Troubleshooting

### gcloud policy-intelligence troubleshoot

```bash
gcloud policy-intelligence troubleshoot
```

Example:

```bash
gcloud policy-intelligence troubleshoot --principal-email=user@example.com --permission=compute.instances.start --resource=//compute.googleapis.com/projects/my-proj/zones/us-central1-a/instances/my-vm
```

Troubleshoots why a principal has or lacks a specific permission on a resource.


## Cloud Shell

### gcloud alpha cloud-shell ssh

```bash
gcloud alpha cloud-shell ssh
```

Connects to the interactive Cloud Shell environment via SSH.


## Feedback

### gcloud feedback

```bash
gcloud feedback
```

Submits feedback about the gcloud CLI to the Google team.


## Cloud Run (Serverless Conatiners)

### gcloud run deploy

```bash
gcloud run deploy
```

Example:

```bash
gcloud run deploy my-app --image gcr.io/my-proj/my-app --allow-unauthenticated
```

Instantly compiles a standard Docker container straight into a fully load-balanced, auto-scaling web application.

### gcloud run services list

```bash
gcloud run services list
```

Example:

```bash
gcloud run services list --platform managed
```

Maps all live auto-scaling container configurations, resolving direct HTTPs public invocation endpoints.


## Pub/Sub Messaging

### gcloud pubsub topics create

```bash
gcloud pubsub topics create
```

Example:

```bash
gcloud pubsub topics create my-notification-topic
```

Establishes a highly decoupled message ingestion point capable of receiving millions of asynchronous API payloads.

### gcloud pubsub subscriptions pull

```bash
gcloud pubsub subscriptions pull
```

Example:

```bash
gcloud pubsub subscriptions pull my-sub --auto-ack
```

Manually interrogates a subscription queue, extracting pending messages natively and systematically acknowledging them via CLI.


## Spanner (Global Database)

### gcloud spanner instances list

```bash
gcloud spanner instances list
```

Inventories globally distributed strictly-consistent NoSQL relational nodes detailing structural allocation.


## Cloud Functions

### gcloud functions deploy

```bash
gcloud functions deploy
```

Example:

```bash
gcloud functions deploy log_parser --runtime python39 --trigger-topic system_logs
```

Directly injects Python/Node code bridging it natively into GCP's ecosystem without requiring Dockerfile architectures.


## Cloud Build (CI/CD)

### gcloud builds submit

```bash
gcloud builds submit
```

Example:

```bash
gcloud builds submit --tag gcr.io/my-proj/hello-world .
```

Uploads the entire localized CWD to Google's build arrays, executing the Docker build remotely to circumvent local compute limitations.


## IAM Service Accounts

### gcloud iam service-accounts keys create

```bash
gcloud iam service-accounts keys create
```

Example:

```bash
gcloud iam service-accounts keys create ./key.json --iam-account sa@proj.gserviceaccount.com
```

Extracts absolute God-Mode local authentication architectures bypassing MFA to programmatically impersonate cloud environments.


## Source Repositories

### gcloud source repos clone

```bash
gcloud source repos clone
```

Example:

```bash
gcloud source repos clone my-secure-repo
```

Leverages internal encrypted GCP authentication schemas to clone inherently private VPC-locked Git repositories.


## Artifact Registry

### gcloud artifacts docker tags add

```bash
gcloud artifacts docker tags add
```

Example:

```bash
gcloud artifacts docker tags add us-east1-docker.pkg.dev/.../image:v1 .../image:latest
```

Manipulates strictly-defined OCI metadata remapping canonical latest pointers onto explicitly secured hash versions.

## Related tools

- [AWS CLI](https://terminal.rokibulroni.com/tool/cloud/awscli)
- [Azure CLI](https://terminal.rokibulroni.com/tool/cloud/az-cli)
- [kubectl](https://terminal.rokibulroni.com/tool/cloud/kubectl)
