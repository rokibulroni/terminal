# Azure CLI

> Microsoft’s cross-platform CLI for Azure: manage subscriptions, Entra ID, VMs, storage and networking, and review security posture.

- Category: Cloud
- Commands: 160
- Page: https://terminal.rokibulroni.com/tool/cloud/az-cli
- Homepage: https://learn.microsoft.com/cli/azure/
- Documentation: https://learn.microsoft.com/cli/azure/reference-index
- Tags: Azure, cloud, Entra ID

## Install

- brew: `brew install azure-cli`
- windows: `winget install Microsoft.AzureCLI`
- other: `curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash`

## Basic Syntax and Help

### az --help

```bash
az --help
```

Displays the global help menu and available command groups.

### az version

```bash
az version
```

Shows the installed Azure CLI version and dependent libraries.

### az upgrade

```bash
az upgrade
```

Example:

```bash
az upgrade --yes
```

Updates the Azure CLI to the latest available version automatically.


## Configuration

### az configure

```bash
az configure
```

Interactively manages default settings such as output format and logging.


## Extensions

### az extension add

```bash
az extension add
```

Example:

```bash
az extension add --name bastion
```

Installs a specific Azure CLI extension to add functionality.


## Authentication

### az login

```bash
az login
```

Initiates the interactive login process via the default web browser.

### az login --use-device-code

```bash
az login --use-device-code
```

Logs in using a device code, suitable for terminals without browsers.

### az login --service-principal

```bash
az login --service-principal
```

Example:

```bash
az login --service-principal -u <app-id> -p <password> --tenant <tenant-id>
```

Authenticates using a service principal for automation workflows.


## Subscription Management

### az account list

```bash
az account list
```

Example:

```bash
az account list --output table
```

Lists all subscriptions available to the logged-in account.

### az account set

```bash
az account set
```

Example:

```bash
az account set --subscription <subscription-id>
```

Sets the active subscription for subsequent commands.

### az account show

```bash
az account show
```

Displays details of the currently active subscription.


## Resource Group Management

### az group create

```bash
az group create
```

Example:

```bash
az group create --name MyResourceGroup --location eastus
```

Creates a new resource group in a specific region.

### az group list

```bash
az group list
```

Example:

```bash
az group list --output table
```

Lists all resource groups in the current subscription.

### az group show

```bash
az group show
```

Example:

```bash
az group show --name MyResourceGroup
```

Gets the metadata and properties of a specific resource group.

### az resource list

```bash
az resource list
```

Example:

```bash
az resource list --resource-group MyResourceGroup
```

Lists all resources contained within a specific resource group.

### az group lock create

```bash
az group lock create
```

Example:

```bash
az group lock create --lock-type CanNotDelete --name LockGroup --resource-group MyResourceGroup
```

Applies a management lock to prevent accidental deletion of the group.


## Compute Operations

### az vm list-skus

```bash
az vm list-skus
```

Example:

```bash
az vm list-skus --location eastus --output table
```

Lists available virtual machine sizes and SKUs in a region.

### az vm create

```bash
az vm create
```

Example:

```bash
az vm create --resource-group MyRG --name MyVM --image Ubuntu2204 --admin-username azureuser --generate-ssh-keys
```

Creates a Linux virtual machine with SSH key authentication.

### az vm list

```bash
az vm list
```

Example:

```bash
az vm list --show-details --output table
```

Lists all VMs with their power state and IP details.

### az vm show

```bash
az vm show
```

Example:

```bash
az vm show --resource-group MyRG --name MyVM
```

Retrieves detailed configuration information for a specific VM.

### az vm open-port

```bash
az vm open-port
```

Example:

```bash
az vm open-port --resource-group MyRG --name MyVM --port 80
```

Opens a network port on the VM's associated network security group.

### az vm stop

```bash
az vm stop
```

Example:

```bash
az vm stop --resource-group MyRG --name MyVM
```

Power off a virtual machine (deallocates compute resources).

### az vm start

```bash
az vm start
```

Example:

```bash
az vm start --resource-group MyRG --name MyVM
```

Starts a stopped virtual machine.

### az vm run-command invoke

```bash
az vm run-command invoke
```

Example:

```bash
az vm run-command invoke --command-id RunShellScript --name MyVM --resource-group MyRG --scripts "uname -a"
```

Executes a shell script inside the VM using the VM Agent.

### az disk list

```bash
az disk list
```

Example:

```bash
az disk list --resource-group MyRG
```

Lists managed disks associated with a resource group.

### az snapshot create

```bash
az snapshot create
```

Example:

```bash
az snapshot create --name MySnapshot --resource-group MyRG --source MyDisk
```

Creates a point-in-time snapshot of a managed disk.


## Network Management

### az network vnet create

```bash
az network vnet create
```

Example:

```bash
az network vnet create --resource-group MyRG --name MyVNet --address-prefix 10.0.0.0/16
```

Creates a virtual network with a specified address space.

### az network vnet subnet create

```bash
az network vnet subnet create
```

Example:

```bash
az network vnet subnet create --resource-group MyRG --vnet-name MyVNet --name MySubnet --address-prefixes 10.0.1.0/24
```

Adds a subnet to an existing virtual network.

### az network public-ip create

```bash
az network public-ip create
```

Example:

```bash
az network public-ip create --resource-group MyRG --name MyPublicIP --sku Standard
```

Creates a public IP address resource.

### az network nsg create

```bash
az network nsg create
```

Example:

```bash
az network nsg create --resource-group MyRG --name MyNSG
```

Creates a Network Security Group for traffic filtering.

### az network nsg rule create

```bash
az network nsg rule create
```

Example:

```bash
az network nsg rule create --resource-group MyRG --nsg-name MyNSG --name AllowSSH --priority 1000 --destination-port-ranges 22 --access Allow --protocol Tcp
```

Adds an inbound security rule to an NSG.

### az network nsg rule list

```bash
az network nsg rule list
```

Example:

```bash
az network nsg rule list --resource-group MyRG --nsg-name MyNSG
```

Lists all rules defined in a Network Security Group.

### az network nic create

```bash
az network nic create
```

Example:

```bash
az network nic create --resource-group MyRG --name MyNIC --vnet-name MyVNet --subnet MySubnet --network-security-group MyNSG
```

Creates a network interface card and attaches it to a subnet and NSG.


## Storage Management

### az storage account create

```bash
az storage account create
```

Example:

```bash
az storage account create --name mystorageacct --resource-group MyRG --location eastus --sku Standard_LRS
```

Creates a general-purpose storage account.

### az storage account keys list

```bash
az storage account keys list
```

Example:

```bash
az storage account keys list --resource-group MyRG --account-name mystorageacct
```

Lists the access keys for a storage account (Handle with care).

### az storage container create

```bash
az storage container create
```

Example:

```bash
az storage container create --name mycontainer --account-name mystorageacct
```

Creates a blob container within a storage account.

### az storage blob upload

```bash
az storage blob upload
```

Example:

```bash
az storage blob upload --container-name mycontainer --file /path/to/file --name myblob --account-name mystorageacct
```

Uploads a local file to a storage container as a blob.

### az storage blob list

```bash
az storage blob list
```

Example:

```bash
az storage blob list --container-name mycontainer --account-name mystorageacct --output table
```

Lists all blobs contained in a specific container.


## Identity and Access

### az ad user list

```bash
az ad user list
```

Example:

```bash
az ad user list --output table
```

Lists all users in the Azure Active Directory tenant.

### az ad user show

```bash
az ad user show
```

Example:

```bash
az ad user show --id user@example.com
```

Gets specific details about an Azure AD user.

### az ad group create

```bash
az ad group create
```

Example:

```bash
az ad group create --display-name MyGroup --mail-nickname MyGroup
```

Creates a new security group in Azure AD.

### az ad group member add

```bash
az ad group member add
```

Example:

```bash
az ad group member add --group MyGroup --member-id <object-id>
```

Adds a user or service principal to a group.

### az ad sp create-for-rbac

```bash
az ad sp create-for-rbac
```

Example:

```bash
az ad sp create-for-rbac --name MyServicePrincipal
```

Creates a service principal and assigns it a role.


## Role-Based Access Control

### az role definition list

```bash
az role definition list
```

Example:

```bash
az role definition list --name "Contributor"
```

Lists details of a specific role definition.

### az role assignment create

```bash
az role assignment create
```

Example:

```bash
az role assignment create --assignee <user-email> --role Reader --scope /subscriptions/<sub-id>
```

Assigns a role to a user or principal at a specific scope.

### az role assignment list

```bash
az role assignment list
```

Example:

```bash
az role assignment list --assignee <user-email> --all
```

Lists all roles assigned to a specific user.


## Key Vault

### az keyvault create

```bash
az keyvault create
```

Example:

```bash
az keyvault create --name MyKeyVault --resource-group MyRG --location eastus
```

Creates an Azure Key Vault for managing secrets and keys.

### az keyvault secret set

```bash
az keyvault secret set
```

Example:

```bash
az keyvault secret set --vault-name MyKeyVault --name MySecret --value "Sup3rS3cur3"
```

Stores a secret value in the Key Vault.

### az keyvault secret show

```bash
az keyvault secret show
```

Example:

```bash
az keyvault secret show --vault-name MyKeyVault --name MySecret
```

Retrieves the value of a secret from the Key Vault.


## App Service

### az webapp list

```bash
az webapp list
```

Example:

```bash
az webapp list --resource-group MyRG
```

Lists all web applications in a resource group.

### az appservice plan create

```bash
az appservice plan create
```

Example:

```bash
az appservice plan create --name MyPlan --resource-group MyRG --sku B1
```

Creates an App Service plan to host web apps.

### az webapp create

```bash
az webapp create
```

Example:

```bash
az webapp create --resource-group MyRG --plan MyPlan --name MyUniqueAppName --runtime "NODE|18-lts"
```

Creates a web application running a specific runtime.


## Containers (AKS)

### az aks create

```bash
az aks create
```

Example:

```bash
az aks create --resource-group MyRG --name MyCluster --node-count 1 --generate-ssh-keys
```

Creates a managed Kubernetes cluster.

### az aks get-credentials

```bash
az aks get-credentials
```

Example:

```bash
az aks get-credentials --resource-group MyRG --name MyCluster
```

Configures the local kubectl to connect to the AKS cluster.


## Container Registry

### az acr create

```bash
az acr create
```

Example:

```bash
az acr create --resource-group MyRG --name MyRegistry --sku Basic
```

Creates an Azure Container Registry.

### az acr login

```bash
az acr login
```

Example:

```bash
az acr login --name MyRegistry
```

Logs in to the container registry via the Docker CLI.


## Databases (SQL)

### az sql server create

```bash
az sql server create
```

Example:

```bash
az sql server create --name myserver --resource-group MyRG --location eastus --admin-user myadmin --admin-password <password>
```

Creates a logical SQL server.

### az sql db create

```bash
az sql db create
```

Example:

```bash
az sql db create --resource-group MyRG --server myserver --name mydb --service-objective S0
```

Creates a SQL database within a logical server.

### az sql server firewall-rule create

```bash
az sql server firewall-rule create
```

Example:

```bash
az sql server firewall-rule create --resource-group MyRG --server myserver --name AllowMyIP --start-ip-address <ip> --end-ip-address <ip>
```

Allows access to the SQL server from a specific IP address.


## Monitoring

### az monitor activity-log list

```bash
az monitor activity-log list
```

Example:

```bash
az monitor activity-log list --offset 1h
```

Lists activity log events for the subscription from the last hour.

### az monitor metrics list

```bash
az monitor metrics list
```

Example:

```bash
az monitor metrics list --resource <resource-id> --metric "Percentage CPU"
```

Retrieves metric definitions and values for a resource.

### az monitor diagnostic-settings create

```bash
az monitor diagnostic-settings create
```

Example:

```bash
az monitor diagnostic-settings create --name MyDiag --resource <resource-id> --logs '[{"category": "Write", "enabled": true}]' --workspace <workspace-id>
```

Configures streaming of logs to a Log Analytics workspace.


## Output Formatting

### az group list --output json

```bash
az group list --output json
```

Outputs command results in JSON format.

### az group list --output table

```bash
az group list --output table
```

Outputs command results in a human-readable ASCII table.

### az group list --output tsv

```bash
az group list --output tsv
```

Outputs results in Tab-Separated Values, useful for scripting variables.


## JMESPath Querying

### az vm list --query

```bash
az vm list --query
```

Example:

```bash
az vm list --query "[].{Name:name, OS:storageProfile.osDisk.osType}"
```

Filters and projects specific fields from the output using JMESPath.

### az vm list --query (Filter)

```bash
az vm list --query (Filter)
```

Example:

```bash
az vm list --query "[?location=='eastus']"
```

Filters the list to show only resources in a specific location.


## Resource Tagging

### az tag update

```bash
az tag update
```

Example:

```bash
az tag update --resource-id <id> --operation Merge --tags Dept=IT
```

Updates tags on a resource without replacing existing tags.

### az resource list --tag

```bash
az resource list --tag
```

Example:

```bash
az resource list --tag Dept=IT
```

Lists all resources that have a specific tag key and value.


## Policy and Compliance

### az policy definition list

```bash
az policy definition list
```

Example:

```bash
az policy definition list --query "[?policyType=='BuiltIn']"
```

Lists built-in Azure policy definitions.

### az policy assignment create

```bash
az policy assignment create
```

Example:

```bash
az policy assignment create --name 'audit-vm-managed-disks' --policy <policy-id> --scope <scope-id>
```

Assigns a policy to a scope to enforce compliance.


## Blue Team Validation (Network)

### az network nsg rule list (Audit)

```bash
az network nsg rule list (Audit)
```

Example:

```bash
az network nsg rule list --query "[?access=='Allow' && direction=='Inbound' && destinationPortRange=='*']"
```

Audits NSGs to find rules that allow all inbound traffic.

### az network public-ip list

```bash
az network public-ip list
```

Example:

```bash
az network public-ip list --query "[].{Name:name, IP:ipAddress, Associated:ipConfiguration.id}"
```

Lists all public IP addresses and shows what they are attached to.

### az network watcher test-ip-flow

```bash
az network watcher test-ip-flow
```

Example:

```bash
az network watcher test-ip-flow --vm <vm> --direction Inbound --protocol TCP --local-port 80 --remote-ip <ip>
```

Verifies if traffic is allowed or denied to a VM based on effective security rules.


## Blue Team Validation (Identity)

### az role assignment list (Privileged)

```bash
az role assignment list (Privileged)
```

Example:

```bash
az role assignment list --role "Owner" --include-inherited
```

Audits all users who have the Owner role on the subscription.

### az ad user list (Guest)

```bash
az ad user list (Guest)
```

Example:

```bash
az ad user list --filter "userType eq 'Guest'"
```

Identifies all guest users existing in the Azure Active Directory.


## Blue Team Validation (Storage)

### az storage account list (Public Access)

```bash
az storage account list (Public Access)
```

Example:

```bash
az storage account list --query "[?allowBlobPublicAccess==`true`].{Name:name}"
```

Finds storage accounts that allow public access to blobs.


## Blue Team Validation (KeyVault)

### az keyvault list (Deleted)

```bash
az keyvault list (Deleted)
```

Example:

```bash
az keyvault list-deleted
```

Lists soft-deleted Key Vaults to detect potential data loss or recovery needs.


## Security Posture

### az security alert list

```bash
az security alert list
```

Example:

```bash
az security alert list --status Active
```

Lists active security alerts from Microsoft Defender for Cloud.

### az security score list

```bash
az security score list
```

Retrieves the current Secure Score for the subscription.

### az security jit-policy list

```bash
az security jit-policy list
```

Lists Just-In-Time access policies configured for VMs.


## Incident Response (Logs)

### az monitor activity-log list (Filter)

```bash
az monitor activity-log list (Filter)
```

Example:

```bash
az monitor activity-log list --caller <suspect-email> --start-time <iso-timestamp>
```

Investigates all actions performed by a specific user since a given time.


## Incident Response (Compute)

### az vm run-command invoke (Forensics)

```bash
az vm run-command invoke (Forensics)
```

Example:

```bash
az vm run-command invoke --command-id RunShellScript --name <vm> --resource-group <rg> --scripts "netstat -anp"
```

Remotely executes netstat on a compromised VM to identify active connections.

### az snapshot create (Forensics)

```bash
az snapshot create (Forensics)
```

Example:

```bash
az snapshot create --name ForensicSnap --resource-group <rg> --source <compromised-disk-id>
```

Creates a forensic copy of a disk for offline analysis.


## Incident Response (Network)

### az network watcher packet-capture create

```bash
az network watcher packet-capture create
```

Example:

```bash
az network watcher packet-capture create --vm <vm> --resource-group <rg> --name Capture1
```

Starts a packet capture on a VM to analyze network traffic patterns.


## Automation

### az deployment group create

```bash
az deployment group create
```

Example:

```bash
az deployment group create --resource-group MyRG --template-file main.bicep
```

Deploys infrastructure as code using an ARM template or Bicep file.

### az deployment group validate

```bash
az deployment group validate
```

Example:

```bash
az deployment group validate --resource-group MyRG --template-file main.bicep
```

Validates a template syntax and configuration without deploying it.

### az deployment operation list

```bash
az deployment operation list
```

Example:

```bash
az deployment operation list --name <deployment-name> --resource-group MyRG
```

Lists the individual operations within a deployment for debugging.


## Managed Identity

### az identity create

```bash
az identity create
```

Example:

```bash
az identity create --resource-group MyRG --name MyUserAssignedID
```

Creates a User-Assigned Managed Identity.

### az vm identity assign

```bash
az vm identity assign
```

Example:

```bash
az vm identity assign --resource-group MyRG --name MyVM --identities <identity-id>
```

Assigns a managed identity to a virtual machine.


## Advanced Networking

### az network lb create

```bash
az network lb create
```

Example:

```bash
az network lb create --resource-group MyRG --name MyLB --sku Standard
```

Creates a standard Layer 4 Load Balancer.

### az network lb probe create

```bash
az network lb probe create
```

Example:

```bash
az network lb probe create --lb-name MyLB --resource-group MyRG --name HealthProbe --protocol Tcp --port 80
```

Creates a health probe to monitor backend instances.

### az network lb rule create

```bash
az network lb rule create
```

Example:

```bash
az network lb rule create --lb-name MyLB --resource-group MyRG --name Rule1 --protocol Tcp --frontend-port 80 --backend-port 80 --probe-name HealthProbe
```

Creates a load balancing rule forwarding traffic from frontend to backend.

### az network application-gateway create

```bash
az network application-gateway create
```

Example:

```bash
az network application-gateway create --resource-group MyRG --name MyAppGW --sku Standard_v2
```

Creates a Layer 7 Application Gateway for web traffic management.


## Advanced Storage

### az storage share create

```bash
az storage share create
```

Example:

```bash
az storage share create --name myshare --account-name mystorageacct
```

Creates an Azure File Share.

### az storage message put

```bash
az storage message put
```

Example:

```bash
az storage message put --queue-name myqueue --content "Hello World" --account-name mystorageacct
```

Adds a message to an Azure Storage Queue.


## Advanced Compute

### az vm image list

```bash
az vm image list
```

Example:

```bash
az vm image list --offer Ubuntu --all --output table
```

Lists all available VM images for a specific offer.

### az vm availability-set create

```bash
az vm availability-set create
```

Example:

```bash
az vm availability-set create --resource-group MyRG --name MyAvSet
```

Creates an availability set to ensure high availability of VMs.


## Cost Management

### az consumption usage list

```bash
az consumption usage list
```

Example:

```bash
az consumption usage list --start-date 2023-01-01 --end-date 2023-01-31
```

Lists usage details for billing analysis.

### az consumption budget create

```bash
az consumption budget create
```

Example:

```bash
az consumption budget create --amount 100 --budget-name MyBudget --category cost --start-date 2023-01-01 --time-grain Monthly
```

Creates a budget to monitor spending.


## DevSecOps

### az pipelines list

```bash
az pipelines list
```

Example:

```bash
az pipelines list --organization https://dev.azure.com/myorg --project myproject
```

Lists Azure DevOps pipelines (requires azure-devops extension).

### az repos list

```bash
az repos list
```

Example:

```bash
az repos list --organization https://dev.azure.com/myorg --project myproject
```

Lists Git repositories in Azure DevOps.


## Function Apps

### az functionapp create

```bash
az functionapp create
```

Example:

```bash
az functionapp create --resource-group MyRG --consumption-plan-location eastus --runtime python --runtime-version 3.9 --functions-version 4 --name MyFuncApp --storage-account mystorageacct
```

Creates a serverless Function App.

### az functionapp deployment source config-zip

```bash
az functionapp deployment source config-zip
```

Example:

```bash
az functionapp deployment source config-zip --resource-group MyRG --name MyFuncApp --src app.zip
```

Deploys code to a Function App from a zip file.


## Data & Analytics

### az cosmosdb create

```bash
az cosmosdb create
```

Example:

```bash
az cosmosdb create --name mycosmos --resource-group MyRG
```

Creates a Cosmos DB account.

### az eventhubs namespace create

```bash
az eventhubs namespace create
```

Example:

```bash
az eventhubs namespace create --resource-group MyRG --name MyEventHubNS
```

Creates an Event Hubs namespace for data ingestion.


## Security Auditing (Disk)

### az disk list (Encryption)

```bash
az disk list (Encryption)
```

Example:

```bash
az disk list --query "[?encryptionSettingsCollection.enabled!=`true`].{Name:name, Encrypted:encryptionSettingsCollection.enabled}"
```

Audits managed disks to find those without encryption enabled.


## Security Auditing (SQL)

### az sql server audit-policy show

```bash
az sql server audit-policy show
```

Example:

```bash
az sql server audit-policy show --resource-group MyRG --server myserver
```

Checks the auditing policy of a SQL server.


## Advanced Security

### az keyvault certificate create

```bash
az keyvault certificate create
```

Example:

```bash
az keyvault certificate create --vault-name MyKeyVault --name MyCert --policy "$(az keyvault certificate get-default-policy)"
```

Creates a self-signed certificate inside Key Vault.

### az keyvault key create

```bash
az keyvault key create
```

Example:

```bash
az keyvault key create --vault-name MyKeyVault --name MyKey --kty RSA
```

Creates a cryptographic key in Key Vault.

### az network firewall create

```bash
az network firewall create
```

Example:

```bash
az network firewall create --name MyFirewall --resource-group MyRG --location eastus
```

Creates an Azure Firewall resource.

### az network firewall network-rule create

```bash
az network firewall network-rule create
```

Example:

```bash
az network firewall network-rule create --firewall-name MyFirewall --collection-name MyRuleCollection --name AllowDNS --protocols UDP --source-addresses * --destination-addresses * --destination-ports 53 --action Allow --priority 100 --resource-group MyRG
```

Adds a network rule to the Azure Firewall.


## Hybrid Management

### az arcappliance list

```bash
az arcappliance list
```

Example:

```bash
az arcappliance list --resource-group MyRG
```

Lists Azure Arc appliances for hybrid cloud management.


## IoT

### az iot hub create

```bash
az iot hub create
```

Example:

```bash
az iot hub create --resource-group MyRG --name MyIoTHub --sku S1
```

Creates an IoT Hub for device management.

### az iot hub device-identity list

```bash
az iot hub device-identity list
```

Example:

```bash
az iot hub device-identity list --hub-name MyIoTHub
```

Lists devices registered to an IoT Hub.


## Logic Apps

### az logic workflow create

```bash
az logic workflow create
```

Example:

```bash
az logic workflow create --resource-group MyRG --location eastus --name MyWorkflow --definition definition.json
```

Creates a Logic App workflow from a JSON definition.


## Container Instances

### az container create

```bash
az container create
```

Example:

```bash
az container create --resource-group MyRG --name MyContainer --image nginx --dns-name-label mynginx --ports 80
```

Creates a single container instance (ACI) accessible via a public IP.

### az container logs

```bash
az container logs
```

Example:

```bash
az container logs --resource-group MyRG --name MyContainer
```

Retrieves logs from a container instance.


## Global Traffic

### az network traffic-manager profile create

```bash
az network traffic-manager profile create
```

Example:

```bash
az network traffic-manager profile create --resource-group MyRG --name MyTMProfile --routing-method Priority --unique-dns-name myapp-tm
```

Creates a Traffic Manager profile for global DNS load balancing.

### az network front-door create

```bash
az network front-door create
```

Example:

```bash
az network front-door create --resource-group MyRG --name MyFrontDoor --backend-address www.example.com
```

Creates an Azure Front Door for global web traffic acceleration.


## Operational Hygiene

### az resource list (Orphans)

```bash
az resource list (Orphans)
```

Example:

```bash
az resource list --query "[?managedBy==null]"
```

Lists resources that are not managed by another resource (potential orphans).

### az monitor log-analytics workspace list

```bash
az monitor log-analytics workspace list
```

Lists Log Analytics workspaces used for log aggregation.

### az monitor autoscale setting list

```bash
az monitor autoscale setting list
```

Example:

```bash
az monitor autoscale setting list --resource-group MyRG
```

Lists autoscale settings configured for resources.


## Advanced Identity

### az ad sp credential list

```bash
az ad sp credential list
```

Example:

```bash
az ad sp credential list --id <app-id>
```

Lists the credentials (passwords/certs) associated with a service principal.

### az ad app list

```bash
az ad app list
```

Example:

```bash
az ad app list --display-name MyApp
```

Lists App Registrations in Azure AD.


## Diagnostics

### az network watcher troubleshooting start

```bash
az network watcher troubleshooting start
```

Example:

```bash
az network watcher troubleshooting start --resource-group MyRG --resource <vpn-gateway-id> --storage-account <storage-id> --storage-path <url>
```

Starts a troubleshooting session on a VPN Gateway or Connection.

### az webapp log tail

```bash
az webapp log tail
```

Example:

```bash
az webapp log tail --resource-group MyRG --name MyWebApp
```

Streams live logs from a Web App to the console.


## Batch Processing

### az batch account create

```bash
az batch account create
```

Example:

```bash
az batch account create --resource-group MyRG --name mybatch --location eastus
```

Creates an Azure Batch account for large-scale parallel computing.


## Cognitive Services

### az cognitiveservices account create

```bash
az cognitiveservices account create
```

Example:

```bash
az cognitiveservices account create --name MyCognitive --resource-group MyRG --kind Face --sku S0 --location eastus
```

Creates a Cognitive Services account.


## SignalR

### az signalr create

```bash
az signalr create
```

Example:

```bash
az signalr create --name MySignalR --resource-group MyRG --sku Standard_S1
```

Creates a SignalR Service for real-time web functionality.


## Redis Cache

### az redis create

```bash
az redis create
```

Example:

```bash
az redis create --name MyRedis --resource-group MyRG --location eastus --sku Basic --vm-size c0
```

Creates a Redis Cache instance.


## Private Networking

### az network private-endpoint create

```bash
az network private-endpoint create
```

Example:

```bash
az network private-endpoint create --name MyPE --resource-group MyRG --vnet-name MyVNet --subnet MySubnet --private-connection-resource-id <id> --group-id blob --connection-name MyConnection
```

Creates a private endpoint to securely connect to PaaS services.

### az network private-dns zone create

```bash
az network private-dns zone create
```

Example:

```bash
az network private-dns zone create --resource-group MyRG --name privatelink.blob.core.windows.net
```

Creates a private DNS zone for resolving private endpoint IPs.

### az network private-dns link vnet create

```bash
az network private-dns link vnet create
```

Example:

```bash
az network private-dns link vnet create --resource-group MyRG --zone-name privatelink.blob.core.windows.net --name MyLink --virtual-network MyVNet --registration-enabled false
```

Links a private DNS zone to a virtual network.


## CDN

### az cdn profile create

```bash
az cdn profile create
```

Example:

```bash
az cdn profile create --resource-group MyRG --name MyCDNProfile --sku Standard_Akamai
```

Creates a Content Delivery Network profile.


## Service Bus

### az servicebus namespace create

```bash
az servicebus namespace create
```

Example:

```bash
az servicebus namespace create --resource-group MyRG --name MySBNamespace --sku Standard
```

Creates a Service Bus namespace for enterprise messaging.

### az servicebus queue create

```bash
az servicebus queue create
```

Example:

```bash
az servicebus queue create --resource-group MyRG --namespace-name MySBNamespace --name MyQueue
```

Creates a queue within a Service Bus namespace.


## Kusto (Data Explorer)

### az kusto cluster create

```bash
az kusto cluster create
```

Example:

```bash
az kusto cluster create --resource-group MyRG --name MyKustoCluster --sku name=Standard_D13_v2 tier=Standard
```

Creates an Azure Data Explorer cluster.


## Bot Service

### az bot create

```bash
az bot create
```

Example:

```bash
az bot create --resource-group MyRG --name MyBot --kind WebApp --appid <appid> --password <password>
```

Creates a Bot Service registration.


## Blueprint

### az blueprint create

```bash
az blueprint create
```

Example:

```bash
az blueprint create --name MyBlueprint --target-scope subscription
```

Creates a blueprint definition for governance.


## Synapse Analytics

### az synapse workspace create

```bash
az synapse workspace create
```

Example:

```bash
az synapse workspace create --name MySynapse --resource-group MyRG --storage-account mystorageacct --file-system myfilesystem --sql-admin-login-user adminuser
```

Creates a Synapse Analytics workspace.


## Advanced Security (Defender)

### az security pricing list

```bash
az security pricing list
```

Lists the pricing tiers for Microsoft Defender for Cloud bundles.


## Recovery Services

### az backup vault create

```bash
az backup vault create
```

Example:

```bash
az backup vault create --resource-group MyRG --name MyRecoveryVault --location eastus
```

Creates a Recovery Services vault for backups.

### az backup protection enable-for-vm

```bash
az backup protection enable-for-vm
```

Example:

```bash
az backup protection enable-for-vm --resource-group MyRG --vault-name MyRecoveryVault --vm <vm-id> --policy-name DefaultPolicy
```

Enables backup for a virtual machine.


## Blue Team (Subscriptions)

### az account management-group list

```bash
az account management-group list
```

Lists management groups to understand the organization hierarchy.


## Cleanup

### az resource delete

```bash
az resource delete
```

Example:

```bash
az resource delete --ids <resource-id>
```

Deletes a specific resource by its ID.

### az group delete

```bash
az group delete
```

Example:

```bash
az group delete --name MyResourceGroup --yes --no-wait
```

Deletes a resource group and all contained resources asynchronously.

### az ad app delete

```bash
az ad app delete
```

Example:

```bash
az ad app delete --id <app-id>
```

Deletes an application registration from Azure AD.

### az keyvault delete

```bash
az keyvault delete
```

Example:

```bash
az keyvault delete --name MyKeyVault
```

Deletes a Key Vault (moves to soft-deleted state).

### az keyvault purge

```bash
az keyvault purge
```

Example:

```bash
az keyvault purge --name MyKeyVault
```

Permanently purges a soft-deleted Key Vault.


## Azure Functions (Serverless)

### az functionapp create

```bash
az functionapp create
```

Example:

```bash
az functionapp create --resource-group myRG --consumption-plan-location westus --runtime node
```

Boots dynamic isolated serverless algorithmic workers bridging AppService endpoints natively.

### az functionapp keys list

```bash
az functionapp keys list
```

Example:

```bash
az functionapp keys list --name myFunc --resource-group myRG
```

Exfiltrates the mandatory authorization connection strings fundamentally required to execute an HTTP-bound function.


## Cosmos DB

### az cosmosdb database create

```bash
az cosmosdb database create
```

Example:

```bash
az cosmosdb database create --account-name myCosmos --name coreDB --resource-group myRG
```

Instantiates globally replicated logic cores strictly optimized for massive globally asynchronous operations.

### az cosmosdb keys list

```bash
az cosmosdb keys list
```

Example:

```bash
az cosmosdb keys list --name myCosmos --resource-group myRG
```

Decrypts and reveals the raw Read/Write master cryptographic passcodes governing universal database interconnectivity.


## Container Registry (ACR)

### az acr login

```bash
az acr login
```

Example:

```bash
az acr login --name myAcrRegistry
```

Injects native Azure AAD authentication logic directly into your local Docker daemon enabling immediate secure push/pull workflows.

### az acr repository delete

```bash
az acr repository delete
```

Example:

```bash
az acr repository delete --name myAcr --image myApp:v1
```

Surgically excises compromised or bloated legacy Docker blobs natively restoring Azure bandwidth limits.


## Key Vault (Security)

### az keyvault secret set

```bash
az keyvault secret set
```

Example:

```bash
az keyvault secret set --vault-name myKeys --name 'db-password' --value 'SuperSecret123!'
```

Ingests raw unencrypted values encrypting them irreversibly within Azure's HSM arrays locking them onto specific app configurations.

### az keyvault secret show

```bash
az keyvault secret show
```

Example:

```bash
az keyvault secret show --vault-name myKeys --name 'db-password' --query value
```

Decrypts explicitly requested secured strings into plaintext, dropping outputs strictly to the local CLI.


## Logic Apps

### az logic workflow show

```bash
az logic workflow show
```

Example:

```bash
az logic workflow show --resource-group rg --name myWorkflow
```

Extrapolates full automation configuration trees evaluating structural pipeline integrations.


## Cost Management

### az consumption usage list

```bash
az consumption usage list
```

Example:

```bash
az consumption usage list --start-date 2023-01-01 --end-date 2023-01-31
```

Forces Microsoft billing API extractions bypassing graphical dashboards delivering raw transactional utilization metrics.

## Related tools

- [AWS CLI](https://terminal.rokibulroni.com/tool/cloud/awscli)
- [Google Cloud CLI](https://terminal.rokibulroni.com/tool/cloud/gcloud)
