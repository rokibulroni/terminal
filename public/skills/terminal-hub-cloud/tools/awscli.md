# AWS CLI

> Amazon’s official command line for AWS: manage IAM, S3, EC2, Lambda and every other service, and audit an account’s configuration.

- Category: Cloud
- Commands: 92
- Page: https://terminal.rokibulroni.com/tool/cloud/awscli
- Homepage: https://aws.amazon.com/cli/
- Documentation: https://docs.aws.amazon.com/cli/latest/reference/
- Tags: AWS, cloud, IAM

## Install

- brew: `brew install awscli`
- pipx: `pipx install awscli`
- windows: `winget install Amazon.AWSCLI`
- other: `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o awscliv2.zip && unzip awscliv2.zip && sudo ./aws/install`

## Basic Syntax & Version

### aws --version

```bash
aws --version
```

Outputs the installed AWS CLI version, Python runtime, and host operating system details for environment verification.
Use this command to ensure your local installation meets the minimum requirements for specific service features or scripts.


## Configuration

### aws configure

```bash
aws configure
```

Initiates an interactive setup to define your Access Key ID, Secret Access Key, default region, and preferred output format.
Run this as a first-time setup step to establish the local credentials and configuration files required for authenticated API calls.

### aws configure list

```bash
aws configure list
```

Displays a structured summary of current configuration data and identifies the source, such as environment variables or config files.
Utilize this for troubleshooting to determine which specific profile or credential source is currently being prioritized by the CLI.

### aws configure list-profiles

```bash
aws configure list-profiles
```

Enumerates all named profiles configured within your local credentials file to provide a clear view of available identity contexts.
Apply this to quickly verify the aliases of different AWS accounts or roles you have saved for use with the --profile flag.


## Identity (STS)

### aws sts get-caller-identity

```bash
aws sts get-caller-identity
```

Retrieves details about the active IAM identity, including the Account ID, User/Role ARN, and unique identifier.
Perform this check as a security best practice to confirm you are operating under the correct identity before executing cloud operations.

### aws sts decode-authorization-message

```bash
aws sts decode-authorization-message
```

Example:

```bash
aws sts decode-authorization-message --encoded-message <token>
```

Translates the encrypted error message from a denied API request into a readable format to reveal the specific policy violation.
Execute this command to identify which IAM policy, permission boundary, or SCP is preventing a specific action from succeeding.


## IAM (Users)

### aws iam list-users

```bash
aws iam list-users
```

Example:

```bash
aws iam list-users --output table
```

Lists all IAM users within the current AWS account and organizes the data into a readable table for administrative review.
Use this to audit existing user identities and track metadata such as account creation dates and unique user paths.

### aws iam get-user

```bash
aws iam get-user
```

Example:

```bash
aws iam get-user --user-name Alice
```

Retrieves comprehensive details for a specific IAM user, including their ARN, creation date, and current tags.
Employ this command to verify the specific configuration of an identity or to fetch the exact ARN needed for resource-based policies.


## IAM (Roles)

### aws iam list-roles

```bash
aws iam list-roles
```

Example:

```bash
aws iam list-roles --query 'Roles[].RoleName'
```

Enumerates all IAM roles in the account and applies a JMESPath filter to isolate and display only the role names.
Use this for high-level auditing of existing service and user roles to ensure naming conventions and role sprawl are managed.


## IAM (Policies)

### aws iam list-attached-user-policies

```bash
aws iam list-attached-user-policies
```

Example:

```bash
aws iam list-attached-user-policies --user-name Alice
```

Identifies all managed IAM policies directly attached to a specified user to verify their current permission set.
Apply this to perform security gap analysis and ensure that users are not granted excessive permissions through direct attachments.


## IAM (Security)

### aws iam get-account-password-policy

```bash
aws iam get-account-password-policy
```

Retrieves the global password complexity and rotation requirements defined for the entire AWS account.
Utilize this command to verify that your account's security posture aligns with industry compliance standards and internal audit policies.

### aws iam generate-credential-report

```bash
aws iam generate-credential-report
```

Initiates the generation of a comprehensive account-wide report detailing the status of every user's credentials and MFA settings.
Run this periodically to perform security audits, identifying inactive users or credentials that require rotation or deletion.


## S3 (Storage)

### aws s3 ls

```bash
aws s3 ls
```

Lists all S3 buckets available in the current account or the contents of a specific bucket if a path is provided.
Use this for quick navigation and verification of storage resources before initiating file transfers or management tasks.

### aws s3 mb

```bash
aws s3 mb
```

Example:

```bash
aws s3 mb s3://my-new-bucket-name
```

Creates a new S3 bucket in the default or specified region to provide a storage container for cloud data.
Ensure bucket names are globally unique to avoid naming conflicts during the creation of new storage resources.


## S3 (Operations)

### aws s3 cp

```bash
aws s3 cp
```

Example:

```bash
aws s3 cp file.txt s3://my-bucket/file.txt
```

Copies local files to S3, from S3 to local, or between two S3 buckets while maintaining data integrity.
Utilize this command for manual uploads or downloads of critical assets and configuration files to and from the cloud.

### aws s3 sync

```bash
aws s3 sync
```

Example:

```bash
aws s3 sync ./local-folder s3://my-bucket/remote-folder --delete
```

Synchronizes a local directory with an S3 prefix by only transferring new or modified files to optimize bandwidth.
Incorporate the --delete flag to mirror environments exactly, removing files from the destination that no longer exist in the source.


## S3 (Management)

### aws s3api list-buckets

```bash
aws s3api list-buckets
```

Example:

```bash
aws s3api list-buckets --query "Buckets[].Name"
```

Accesses the low-level S3 control plane to list buckets and enables advanced filtering via the --query parameter.
Use the s3api variant when you require raw JSON output for programmatic integration or complex filtering of bucket metadata.


## S3 (Security)

### aws s3api get-bucket-encryption

```bash
aws s3api get-bucket-encryption
```

Example:

```bash
aws s3api get-bucket-encryption --bucket my-bucket
```

Retrieves the server-side encryption (SSE) configuration for a bucket to verify that data-at-rest is properly protected.
Employ this during security audits to ensure all storage buckets comply with encryption mandates using either AES-256 or AWS KMS.

### aws s3api get-public-access-block

```bash
aws s3api get-public-access-block
```

Example:

```bash
aws s3api get-public-access-block --bucket my-bucket
```

Checks the status of the Public Access Block settings to ensure a bucket is protected against accidental public exposure.
Apply this check as a fundamental security control to prevent sensitive data leaks caused by misconfigured bucket ACLs or policies.


## EC2 (Compute)

### aws ec2 describe-regions

```bash
aws ec2 describe-regions
```

Example:

```bash
aws ec2 describe-regions --all-regions
```

Lists all available AWS regions along with their respective endpoints to determine where resources can be deployed.
Use the --all-regions flag to see both enabled and disabled regions for comprehensive account availability mapping.

### aws ec2 describe-instances

```bash
aws ec2 describe-instances
```

Example:

```bash
aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"
```

Retrieves detailed metadata for EC2 instances, with the ability to filter based on state, instance type, or tags.
Use this to generate an inventory of active compute resources and to check the status of instances during deployment cycles.


## EC2 (JMESPath Query)

### aws ec2 describe-instances --query

```bash
aws ec2 describe-instances --query
```

Example:

```bash
aws ec2 describe-instances --query "Reservations[*].Instances[*].{PublicIP:PublicIpAddress,Name:Tags[?Key=='Name']|[0].Value,Status:State.Name}"
```

Performs complex server-side filtering to extract specific fields like Public IP and Name tags into a custom JSON or table output.
Leverage this advanced query capability to create concise reports for DevOps teams without parsing large amounts of unnecessary metadata.


## EC2 (Management)

### aws ec2 start-instances

```bash
aws ec2 start-instances
```

Example:

```bash
aws ec2 start-instances --instance-ids i-1234567890abcdef0
```

Initiates the boot sequence for one or more stopped, EBS-backed EC2 instances to bring them into a running state.
Utilize this command to resume workloads or re-enable development environments that were stopped to save on compute costs.

### aws ec2 stop-instances

```bash
aws ec2 stop-instances
```

Example:

```bash
aws ec2 stop-instances --instance-ids i-1234567890abcdef0
```

Sends a shutdown signal to specified EBS-backed instances, moving them to a 'stopped' state while preserving the disk state.
Apply this command as a cost-saving measure for non-production instances or during scheduled maintenance windows.


## VPC (Networking)

### aws ec2 describe-vpcs

```bash
aws ec2 describe-vpcs
```

Returns a list of Virtual Private Clouds within the region, providing CIDR blocks, tenancy info, and VPC state.
Use this to map out the network architecture of your account and verify the availability of specific VPC environments.

### aws ec2 describe-subnets

```bash
aws ec2 describe-subnets
```

Example:

```bash
aws ec2 describe-subnets --filters "Name=vpc-id,Values=vpc-12345678"
```

Lists the subnets associated with a specific VPC, including Availability Zone mappings and available IP counts.
Employ this command to ensure resources are being deployed into the correct network tier and to audit available subnet capacity.


## VPC (Security Groups)

### aws ec2 describe-security-groups

```bash
aws ec2 describe-security-groups
```

Example:

```bash
aws ec2 describe-security-groups --filters Name=group-name,Values=default
```

Retrieves the ingress and egress rules for security groups to audit virtual firewall configurations.
Use this to inspect which traffic patterns are permitted for your resources and to identify unused or misconfigured security groups.


## VPC (Security Audit)

### aws ec2 describe-security-group-rules

```bash
aws ec2 describe-security-group-rules
```

Example:

```bash
aws ec2 describe-security-group-rules --filters Name=security-group-rule-id,Values=sgr-12345
```

Provides a granular view of specific security group rules, including port ranges and CIDR descriptions.
Leverage this command to perform precise security audits and identify overly permissive rules that may violate compliance standards.


## RDS (Database)

### aws rds describe-db-instances

```bash
aws rds describe-db-instances
```

Returns detailed information about all provisioned RDS instances, including database engine, status, and endpoint details.
Utilize this to monitor database health and retrieve the connection strings required for application configuration.

### aws rds describe-db-snapshots

```bash
aws rds describe-db-snapshots
```

Example:

```bash
aws rds describe-db-snapshots --db-instance-identifier my-db-instance
```

Lists both automated and manual snapshots for a specific RDS database to verify backup availability.
Use this command to identify recovery points for restoration and to audit your database backup and retention policy.


## DynamoDB (Database)

### aws dynamodb list-tables

```bash
aws dynamodb list-tables
```

Returns a simple list of all DynamoDB table names created within the current region.
Employ this for high-level inventory management and to confirm the existence of NoSQL tables before performing data operations.


## DynamoDB (Data)

### aws dynamodb scan

```bash
aws dynamodb scan
```

Example:

```bash
aws dynamodb scan --table-name Users --max-items 10
```

Iterates through all items in a DynamoDB table and returns the results up to the specified limit.
Exercise caution with this command on large tables to avoid consuming excessive Read Capacity Units (RCUs).


## Lambda (Serverless)

### aws lambda list-functions

```bash
aws lambda list-functions
```

Provides an inventory of all deployed Lambda functions, including runtime environments and memory configurations.
Use this to audit serverless workloads and track the various microservices deployed across your account.

### aws lambda get-function

```bash
aws lambda get-function
```

Example:

```bash
aws lambda get-function --function-name my-function
```

Retrieves the configuration metadata and a temporary download link for the function's deployment package.
Utilize this to inspect the current code version or to retrieve a package for local debugging and reverse engineering.


## Lambda (Execution)

### aws lambda invoke

```bash
aws lambda invoke
```

Example:

```bash
aws lambda invoke --function-name my-function response.json
```

Triggers the execution of a Lambda function and captures the output payload in a specified local file.
Use this for testing serverless logic or for manual triggering of backend processes during development and troubleshooting.


## ECS (Containers)

### aws ecs list-clusters

```bash
aws ecs list-clusters
```

Lists all Amazon ECS clusters configured in the current region to provide an overview of container orchestration environments.
Apply this to identify active compute clusters before managing tasks, services, or container instances.

### aws ecs list-tasks

```bash
aws ecs list-tasks
```

Example:

```bash
aws ecs list-tasks --cluster default
```

Enumerates the task IDs running within a specific ECS cluster to monitor active container deployments.
Employ this command to track the lifecycle of containers and to identify specific task ARNs for further inspection or termination.


## EKS (Kubernetes)

### aws eks list-clusters

```bash
aws eks list-clusters
```

Lists all Amazon EKS (Kubernetes) managed clusters available in the specified region.
Use this to confirm cluster availability and retrieve the names needed for updating local kubernetes configurations.

### aws eks update-kubeconfig

```bash
aws eks update-kubeconfig
```

Example:

```bash
aws eks update-kubeconfig --name my-cluster
```

Automatically updates your local ~/.kube/config file with the necessary credentials to interact with an EKS cluster via kubectl.
Run this after creating or joining a new cluster to enable standard Kubernetes CLI management tools.


## CloudWatch (Monitoring)

### aws cloudwatch list-metrics

```bash
aws cloudwatch list-metrics
```

Example:

```bash
aws cloudwatch list-metrics --namespace AWS/EC2
```

Lists the available metrics for a specific namespace, such as CPU, disk, or network metrics for EC2.
Utilize this to identify the exact metric names and dimensions required for creating custom CloudWatch alarms.


## CloudWatch (Logs)

### aws logs describe-log-groups

```bash
aws logs describe-log-groups
```

Provides a list of all log groups in CloudWatch, showing retention policies and stored data sizes.
Use this for administrative oversight of application and system logging to ensure proper data retention and cost management.

### aws logs filter-log-events

```bash
aws logs filter-log-events
```

Example:

```bash
aws logs filter-log-events --log-group-name my-logs --filter-pattern "ERROR"
```

Searches through log events using specific patterns to quickly isolate errors or specific transaction IDs.
Apply this command during incident response to perform rapid log analysis without manually downloading large log files.


## CloudTrail (Auditing)

### aws cloudtrail describe-trails

```bash
aws cloudtrail describe-trails
```

Retrieves the configuration settings for CloudTrail instances to verify that API logging is active in the region.
Use this to ensure that your governance and auditing trails are correctly logging to the intended S3 buckets.

### aws cloudtrail get-event-selectors

```bash
aws cloudtrail get-event-selectors
```

Example:

```bash
aws cloudtrail get-event-selectors --trail-name my-trail
```

Displays the specific data and management events that a trail is configured to capture for audit purposes.
Check these settings to verify that critical data operations, such as S3 object access or Lambda executions, are being logged.


## CloudTrail (Investigation)

### aws cloudtrail lookup-events

```bash
aws cloudtrail lookup-events
```

Example:

```bash
aws cloudtrail lookup-events --lookup-attributes AttributeKey=Username,AttributeValue=Alice
```

Searches the last 90 days of API activity for specific attributes like Username, Event Name, or Resource ID.
Employ this during security investigations to trace the actions of a specific user or to see who modified a particular resource.


## Secrets Manager

### aws secretsmanager list-secrets

```bash
aws secretsmanager list-secrets
```

Lists the metadata of all secrets managed in the account, including rotation status and last accessed dates.
Use this to audit your secret storage and ensure that sensitive credentials are not being hardcoded in applications.


## Systems Manager (SSM)

### aws ssm describe-parameters

```bash
aws ssm describe-parameters
```

Returns a list of all parameters stored in the SSM Parameter Store, including their types and last modified dates.
Utilize this to manage application configuration settings and to audit the usage of SecureString parameters.

### aws ssm start-session

```bash
aws ssm start-session
```

Example:

```bash
aws ssm start-session --target i-0123456789abcdef0
```

Establishes a secure, encrypted shell connection to an EC2 instance via the SSM agent, bypassing the need for SSH keys.
Leverage this for secure instance management to eliminate the need for opening port 22 in your security groups.


## KMS (Encryption)

### aws kms list-keys

```bash
aws kms list-keys
```

Lists the unique identifiers for all Customer Master Keys (CMKs) available in the account and region.
Use this to verify your encryption keys and to retrieve IDs for managing key policies or performing cryptographic operations.

### aws kms list-aliases

```bash
aws kms list-aliases
```

Displays the friendly names (aliases) mapped to KMS keys, making it easier to identify keys by purpose.
Apply this to map human-readable names to cryptic Key IDs for better management of encryption resources.


## Resource Groups (Tagging)

### aws resourcegroupstaggingapi get-resources

```bash
aws resourcegroupstaggingapi get-resources
```

Example:

```bash
aws resourcegroupstaggingapi get-resources --tag-filters Key=Environment,Values=Production
```

Queries the account for all resources that match specific tag criteria across multiple AWS services.
Use this for cross-service inventory management and to ensure all resources comply with organizational tagging policies.


## Security (GuardDuty)

### aws guardduty list-detectors

```bash
aws guardduty list-detectors
```

Lists the unique detector IDs for GuardDuty instances to verify that threat detection is enabled in the region.
Use this ID as a prerequisite for querying findings or managing threat intelligence sets.

### aws guardduty list-findings

```bash
aws guardduty list-findings
```

Example:

```bash
aws guardduty list-findings --detector-id <id> --finding-criteria '{"Criterion":{"severity":{"Gte":7}}}'
```

Retrieves security finding IDs from GuardDuty, filtered by severity or finding type to prioritize response.
Focus on high-severity findings (7.0 - 8.9) to rapidly identify and remediate potential security breaches or compromises.


## Security (Inspector)

### aws inspector2 list-findings

```bash
aws inspector2 list-findings
```

Lists vulnerability findings across EC2, Lambda, and ECR resources based on continuous scanning.
Utilize this to identify software vulnerabilities and network reachability issues that require patching or configuration changes.


## Security (Security Hub)

### aws securityhub get-findings

```bash
aws securityhub get-findings
```

Example:

```bash
aws securityhub get-findings --filters '{"RecordState":[{"Value":"ACTIVE","Comparison":"EQUALS"}]}'
```

Aggregates and retrieves active security alerts and compliance checks from multiple AWS security services.
Use this as a centralized dashboard for managing your overall security posture and remediating non-compliant resources.


## Blue Team (Audit)

### aws ec2 describe-security-groups --filters Name=ip-permission.cidr,Values=0.0.0.0/0

```bash
aws ec2 describe-security-groups --filters Name=ip-permission.cidr,Values=0.0.0.0/0
```

Identifies all security groups containing rules that allow inbound traffic from any IP address on the internet.
Run this frequently as a critical security audit to close unintended exposure points and maintain a hardened perimeter.

### aws iam list-mfa-devices

```bash
aws iam list-mfa-devices
```

Example:

```bash
aws iam list-mfa-devices --user-name Alice
```

Checks if a specific user has at least one active Multi-Factor Authentication (MFA) device configured.
Use this to enforce MFA compliance and identify high-privilege users who are lacking an essential layer of security.


## WAF (Web Application Firewall)

### aws wafv2 list-web-acls

```bash
aws wafv2 list-web-acls
```

Example:

```bash
aws wafv2 list-web-acls --scope REGIONAL
```

Lists all Web Access Control Lists (Web ACLs) used to protect regional resources like ALBs or API Gateways.
Apply this to manage your web application firewalls and verify that your public endpoints are protected by appropriate rule sets.


## Route53 (DNS)

### aws route53 list-hosted-zones

```bash
aws route53 list-hosted-zones
```

Enumerates all public and private DNS hosted zones associated with your AWS account.
Use this to manage your domain portfolio and verify the availability of DNS management zones for your applications.

### aws route53 list-resource-record-sets

```bash
aws route53 list-resource-record-sets
```

Example:

```bash
aws route53 list-resource-record-sets --hosted-zone-id Z123456789
```

Lists the specific DNS records (A, CNAME, TXT, etc.) contained within a designated hosted zone.
Utilize this to audit your DNS infrastructure and verify that domain routing is correctly configured for your services.


## Incident Response (Snapshot)

### aws ec2 create-snapshot

```bash
aws ec2 create-snapshot
```

Example:

```bash
aws ec2 create-snapshot --volume-id vol-12345678 --description "Forensic Snapshot"
```

Captures a point-in-time backup of an EBS volume to preserve data for forensic investigation or recovery.
Execute this immediately during an incident to ensure you have a static copy of a potentially compromised system's filesystem.


## Incident Response (Isolation)

### aws ec2 modify-instance-attribute

```bash
aws ec2 modify-instance-attribute
```

Example:

```bash
aws ec2 modify-instance-attribute --instance-id i-12345 --groups sg-isolation-id
```

Replaces the existing security groups of an instance with a restricted 'isolation' group to cut off network access.
Apply this during an active compromise to stop data exfiltration or lateral movement while keeping the instance running for analysis.


## Incident Response (Logs)

### aws ec2 create-flow-logs

```bash
aws ec2 create-flow-logs
```

Example:

```bash
aws ec2 create-flow-logs --resource-type VPC --resource-ids vpc-12345 --traffic-type ALL --log-destination-type cloud-watch-logs --log-group-name FlowLogs
```

Enables the capture of IP traffic data for network interfaces within a VPC for monitoring and troubleshooting.
Use flow logs to analyze traffic patterns, identify malicious connections, and audit network compliance across your infrastructure.


## Advanced Filtering (JMESPath)

### aws ec2 describe-volumes --query

```bash
aws ec2 describe-volumes --query
```

Example:

```bash
aws ec2 describe-volumes --query "Volumes[?State!='in-use']"
```

Filters and lists all EBS volumes that are not currently attached to an instance, identifying potential waste.
Run this regularly to find and delete orphaned volumes, helping to reduce unnecessary storage costs in your AWS bill.

### aws iam list-users --query

```bash
aws iam list-users --query
```

Example:

```bash
aws iam list-users --query "Users[?PasswordLastUsed!=null].{Name:UserName,LastUsed:PasswordLastUsed}"
```

Generates a filtered list of users who have actively used their passwords, showing their names and last login dates.
Use this to identify stale IAM users who have not logged in recently and may be candidates for credential deactivation.


## Cost Management

### aws ce get-cost-and-usage

```bash
aws ce get-cost-and-usage
```

Example:

```bash
aws ce get-cost-and-usage --time-period Start=2023-01-01,End=2023-02-01 --granularity MONTHLY --metrics "BlendedCost"
```

Retrieves detailed cost and usage metrics from the AWS Cost Explorer API for a defined time window.
Employ this command to programmatically monitor spending trends and generate monthly financial reports for your cloud resources.


## Organization

### aws organizations list-accounts

```bash
aws organizations list-accounts
```

Provides a list of all AWS accounts that are members of your current AWS Organization.
Use this from the management account to map your multi-account structure and track Account IDs across the enterprise.


## Auto Scaling

### aws autoscaling describe-auto-scaling-groups

```bash
aws autoscaling describe-auto-scaling-groups
```

Describes the configurations of your Auto Scaling groups, including capacity limits and health check settings.
Utilize this to monitor the scaling state of your applications and ensure that your high-availability targets are met.

### aws autoscaling set-desired-capacity

```bash
aws autoscaling set-desired-capacity
```

Example:

```bash
aws autoscaling set-desired-capacity --auto-scaling-group-name my-asg --desired-capacity 2
```

Manually adjusts the desired number of instances in an Auto Scaling group to scale the environment up or down.
Apply this for manual capacity adjustments during expected traffic spikes or to reduce costs during low-demand periods.


## Elastic Load Balancing

### aws elbv2 describe-load-balancers

```bash
aws elbv2 describe-load-balancers
```

Returns information about Application, Network, and Gateway Load Balancers in your environment.
Use this to retrieve the DNS names of your load balancers and to verify their operational state.

### aws elbv2 describe-target-health

```bash
aws elbv2 describe-target-health
```

Example:

```bash
aws elbv2 describe-target-health --target-group-arn arn:aws:elasticloadbalancing:...
```

Reports the health status of backend targets (such as EC2 instances) registered to a specific load balancer target group.
Use this for troubleshooting application availability issues by identifying which instances are failing health checks.


## CloudFormation (IaC)

### aws cloudformation list-stacks

```bash
aws cloudformation list-stacks
```

Example:

```bash
aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE
```

Lists CloudFormation stacks based on their current status to provide an overview of deployed infrastructure.
Employ this to track the state of your Infrastructure as Code deployments and identify stacks that require cleanup or updates.

### aws cloudformation describe-stack-resources

```bash
aws cloudformation describe-stack-resources
```

Example:

```bash
aws cloudformation describe-stack-resources --stack-name my-stack
```

Lists every AWS resource created and managed by a specific CloudFormation stack for detailed inventory mapping.
Utilize this to trace which physical resources (e.g., specific EC2 IDs or S3 buckets) belong to a logical stack.


## Cleanup

### aws s3 rb

```bash
aws s3 rb
```

Example:

```bash
aws s3 rb s3://my-bucket --force
```

Deletes an S3 bucket and uses the --force flag to remove all contained objects simultaneously.
Exercise extreme caution as this operation is permanent and cannot be undone; always verify bucket names before execution.

### aws ec2 terminate-instances

```bash
aws ec2 terminate-instances
```

Example:

```bash
aws ec2 terminate-instances --instance-ids i-1234567890abcdef0
```

Permanently shuts down and deletes specified EC2 instances, releasing all associated hardware resources.
Use this only when you no longer require the instance, as termination usually results in the deletion of the root EBS volume.

### aws cloudformation delete-stack

```bash
aws cloudformation delete-stack
```

Example:

```bash
aws cloudformation delete-stack --stack-name my-stack
```

Initiates the removal of a CloudFormation stack along with all the resources it previously provisioned.
Apply this for efficient environment decommissioning to ensure no orphaned resources continue to incur costs.


## Dry Run (Testing)

### aws ec2 run-instances --dry-run

```bash
aws ec2 run-instances --dry-run
```

Example:

```bash
aws ec2 run-instances --dry-run --image-id ami-12345 --instance-type t2.micro
```

Validates that you have the required permissions and that the parameters are correct without actually launching an instance.
Incorporate this into scripts and automation to prevent failed deployments and verify IAM authorization before runtime.


## Advanced Workflow (MFA)

### aws sts get-session-token

```bash
aws sts get-session-token
```

Example:

```bash
aws sts get-session-token --serial-number arn-of-mfa --token-code 123456
```

Generates temporary security credentials that include an MFA-authenticated session for an IAM user.
Use these credentials to perform actions that are protected by policies requiring Multi-Factor Authentication.


## Advanced Workflow (Assume Role)

### aws sts assume-role

```bash
aws sts assume-role
```

Example:

```bash
aws sts assume-role --role-arn arn:aws:iam::123456789012:role/RoleName --role-session-name MySession
```

Requests temporary security credentials for an IAM role to perform cross-account or cross-service operations.
Utilize this to adopt a different permission set without sharing long-term access keys, enhancing overall security.


## Backup (EBS)

### aws ec2 create-image

```bash
aws ec2 create-image
```

Example:

```bash
aws ec2 create-image --instance-id i-12345 --name "My Server Backup" --no-reboot
```

Creates a machine image (AMI) from an existing instance, capturing both the root and data volumes for disaster recovery.
Use the --no-reboot flag if you need to create the image while the instance is running, though this may affect filesystem consistency.


## Advanced Route53 & DNS

### aws route53 list-resource-record-sets

```bash
aws route53 list-resource-record-sets
```

Example:

```bash
aws route53 list-resource-record-sets --hosted-zone-id Z12345
```

Extracts the absolute raw DNS routing matrices enabling deep auditing of CNAME, A, and TXT configurations.


## API Gateway & Edge

### aws apigateway get-rest-apis

```bash
aws apigateway get-rest-apis
```

Inventories all serverless REST architectures currently mapped and proxying inbound HTTP requests to Lambda endpoints.

### aws apigateway create-deployment

```bash
aws apigateway create-deployment
```

Example:

```bash
aws apigateway create-deployment --rest-api-id abc123 --stage-name prod
```

Compiles and physically pushes staged API routing changes into the live, publicly reachable requested stage.


## CloudFront CDN

### aws cloudfront create-invalidation

```bash
aws cloudfront create-invalidation
```

Example:

```bash
aws cloudfront create-invalidation --distribution-id E123 --paths "/*"
```

Forces Edge locations worldwide to instantly dump their localized cached versions and re-pull fresh assets from the backend origin.

### aws cloudfront get-distribution-config

```bash
aws cloudfront get-distribution-config
```

Example:

```bash
aws cloudfront get-distribution-config --id E123
```

Pulls the complex raw JSON ETag configurations managing WAF attachments, SSL certificates, and origin routing constraints.


## SQS Messaging

### aws sqs receive-message

```bash
aws sqs receive-message
```

Example:

```bash
aws sqs receive-message --queue-url https://sqs.reg.amazonaws.com/... --max-number-of-messages 10
```

Reaches into an operational SQS Queue pulling raw asynchronous message payloads for debugging broken consumer services.

### aws sqs purge-queue

```bash
aws sqs purge-queue
```

Example:

```bash
aws sqs purge-queue --queue-url https://sqs....
```

Immediately burns down and obliterates all pending unread messages idling inside an SQS queue structure.


## SNS Notifications

### aws sns publish

```bash
aws sns publish
```

Example:

```bash
aws sns publish --topic-arn arn:aws:sns:... --message "Server down"
```

Infects an SNS topic with a raw broadcast message, instantly triggering all associated fan-out targets (Email, SMS, Lambda hooks).


## Step Functions

### aws stepfunctions start-execution

```bash
aws stepfunctions start-execution
```

Example:

```bash
aws stepfunctions start-execution --state-machine-arn arn:... --input "{\"key\": \"value\"}"
```

Triggers complex automated multi-lambda state machine architectures providing seed JSON structures to begin algorithmic executions.


## Elasticache (Redis)

### aws elasticache describe-cache-clusters

```bash
aws elasticache describe-cache-clusters
```

Example:

```bash
aws elasticache describe-cache-clusters --show-cache-node-info
```

Uncovers the internal DNS endpoints, instance classes, and replication structures of extremely high-speed memory cache architectures.


## Athena (Data Lake)

### aws athena start-query-execution

```bash
aws athena start-query-execution
```

Example:

```bash
aws athena start-query-execution --query-string "SELECT * from cloudtrail_logs limit 10"
```

Executes raw distributed Serverless SQL queries directly against flat cold-storage S3 JSON/CSV data files.


## SSM Incident Manager

### aws ssm-incidents start-incident

```bash
aws ssm-incidents start-incident
```

Example:

```bash
aws ssm-incidents start-incident --response-plan-arn arn:aws:ssm-incidents...
```

Invokes maximum-level AWS runbook automation triggering global organizational alerts natively bypassing standard pagers.

## Related tools

- [Azure CLI](https://terminal.rokibulroni.com/tool/cloud/az-cli)
- [Google Cloud CLI](https://terminal.rokibulroni.com/tool/cloud/gcloud)
- [kubectl](https://terminal.rokibulroni.com/tool/cloud/kubectl)
