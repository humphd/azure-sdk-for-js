/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Paged list of account resources */
export interface AccountList {
  /** Total item count. */
  count?: number;
  /** The Url of next result page. */
  nextLink?: string;
  /** Collection of items of type results. */
  value: Account[];
}

/** Azure ARM Tracked Resource */
export interface TrackedResource {
  /**
   * Gets or sets the identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** Identity Info on the tracked resource */
  identity?: Identity;
  /** Gets or sets the location. */
  location?: string;
  /**
   * Gets or sets the name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: TrackedResourceSystemData;
  /** Tags on the azure resource. */
  tags?: { [propertyName: string]: string };
  /**
   * Gets or sets the type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The Managed Identity of the resource */
export interface Identity {
  /**
   * Service principal object Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * Tenant Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Identity Type */
  type?: Type;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /**
   * The timestamp of resource creation (UTC).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * The identity that created the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdBy?: string;
  /**
   * The type of identity that created the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdByType?: CreatedByType;
  /**
   * The timestamp of the last modification the resource (UTC).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastModifiedAt?: Date;
  /**
   * The identity that last modified the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastModifiedByType?: LastModifiedByType;
}

/** The account properties */
export interface AccountProperties {
  /**
   * Cloud connectors.
   * External cloud identifier used as part of scanning configuration.
   */
  cloudConnectors?: CloudConnectors;
  /**
   * Gets the time at which the entity was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * Gets the creator of the entity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdBy?: string;
  /**
   * Gets the creators of the entity's object id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdByObjectId?: string;
  /**
   * The URIs that are the public endpoints of the account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endpoints?: AccountPropertiesEndpoints;
  /**
   * Gets or sets the friendly name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly friendlyName?: string;
  /** Gets or sets the managed resource group name */
  managedResourceGroupName?: string;
  /**
   * Gets the resource identifiers of the managed resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly managedResources?: AccountPropertiesManagedResources;
  /**
   * Gets the private endpoint connections information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * Gets or sets the state of the provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets the public network access. */
  publicNetworkAccess?: PublicNetworkAccess;
}

export interface CloudConnectors {
  /**
   * AWS external identifier.
   * Configured in AWS to allow use of the role arn used for scanning
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly awsExternalId?: string;
}

/** The account endpoints */
export interface AccountEndpoints {
  /**
   * Gets the catalog endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly catalog?: string;
  /**
   * Gets the guardian endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly guardian?: string;
  /**
   * Gets the scan endpoint.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly scan?: string;
}

/** The managed resources in customer subscription. */
export interface ManagedResources {
  /**
   * Gets the managed event hub namespace resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly eventHubNamespace?: string;
  /**
   * Gets the managed resource group resource identifier. This resource group will host resource dependencies for the account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGroup?: string;
  /**
   * Gets the managed storage account resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly storageAccount?: string;
}

/** Proxy Azure Resource */
export interface ProxyResource {
  /**
   * Gets or sets the identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Gets or sets the name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Gets or sets the type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** A private endpoint class. */
export interface PrivateEndpoint {
  /** The private endpoint identifier. */
  id?: string;
}

/** The private link service connection state. */
export interface PrivateLinkServiceConnectionState {
  /** The required actions. */
  actionsRequired?: string;
  /** The description. */
  description?: string;
  /** The status. */
  status?: Status;
}

/** The Sku */
export interface AccountSku {
  /** Gets or sets the sku capacity. Possible values include: 4, 16 */
  capacity?: number;
  /** Gets or sets the sku name. */
  name?: Name;
}

/** Default error response model */
export interface ErrorResponseModel {
  /**
   * Gets or sets the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorResponseModelError;
}

/** Default error model */
export interface ErrorModel {
  /**
   * Gets or sets the code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Gets or sets the details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorModel[];
  /**
   * Gets or sets the messages.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Gets or sets the target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
}

/** The account update properties. */
export interface AccountUpdateParameters {
  /** The account properties. */
  properties?: AccountProperties;
  /** Tags on the azure resource. */
  tags?: { [propertyName: string]: string };
}

/** The Account access keys. */
export interface AccessKeys {
  /** Gets or sets the primary connection string. */
  atlasKafkaPrimaryEndpoint?: string;
  /** Gets or sets the secondary connection string. */
  atlasKafkaSecondaryEndpoint?: string;
}

/** Collection administrator update. */
export interface CollectionAdminUpdate {
  /** Gets or sets the object identifier of the admin. */
  objectId?: string;
}

/** Payload to get and set the default account in the given scope */
export interface DefaultAccountPayload {
  /** The name of the account that is set as the default. */
  accountName?: string;
  /** The resource group name of the account that is set as the default. */
  resourceGroupName?: string;
  /** The scope object ID. For example, sub ID or tenant ID. */
  scope?: string;
  /** The scope tenant in which the default account is set. */
  scopeTenantId?: string;
  /** The scope where the default account is set. */
  scopeType?: ScopeType;
  /** The subscription ID of the account that is set as the default. */
  subscriptionId?: string;
}

/** Paged list of operation resources */
export interface OperationList {
  /** Total item count. */
  count?: number;
  /** The Url of next result page. */
  nextLink?: string;
  /** Collection of items of type results. */
  value: Operation[];
}

/** Operation resource */
export interface Operation {
  /** Properties on the operation */
  display?: OperationDisplay;
  /** Whether operation is a data action */
  isDataAction?: boolean;
  /** Operation name for display purposes */
  name?: string;
  /** origin of the operation */
  origin?: string;
  /** meta service specification */
  serviceSpecification?: OperationMetaServiceSpecification;
}

/** The response model for get operation properties */
export interface OperationDisplay {
  /** Description of the operation for display purposes */
  description?: string;
  /** Name of the operation for display purposes */
  operation?: string;
  /** Name of the provider for display purposes */
  provider?: string;
  /** Name of the resource type for display purposes */
  resource?: string;
}

/** The operation meta service specification */
export interface OperationMetaServiceSpecification {
  /** log specifications for the operation */
  logSpecifications?: OperationMetaLogSpecification[];
  /** metric specifications for the operation */
  metricSpecifications?: OperationMetaMetricSpecification[];
}

/** log specifications for operation api */
export interface OperationMetaLogSpecification {
  /** blob duration of the log */
  blobDuration?: string;
  /** localized name of the log category */
  displayName?: string;
  /** name of the log category */
  name?: string;
}

/** metric specifications for the operation */
export interface OperationMetaMetricSpecification {
  /** aggregation type of metric */
  aggregationType?: string;
  /** properties for dimension */
  dimensions?: DimensionProperties[];
  /** description of the metric */
  displayDescription?: string;
  /** localized name of the metric */
  displayName?: string;
  /** enable regional mdm account */
  enableRegionalMdmAccount?: string;
  /** internal metric name */
  internalMetricName?: string;
  /** name of the metric */
  name?: string;
  /** dimension name use to replace resource id if specified */
  resourceIdDimensionNameOverride?: string;
  /**
   * Metric namespace.
   * Only set the namespace if different from the default value,
   * leaving it empty makes it use the value from the ARM manifest.
   */
  sourceMdmNamespace?: string;
  /** supported aggregation types */
  supportedAggregationTypes?: string[];
  /** supported time grain types */
  supportedTimeGrainTypes?: string[];
  /** units for the metric */
  unit?: string;
}

/** properties for dimension */
export interface DimensionProperties {
  /** localized display name of the dimension to customer */
  displayName?: string;
  /** dimension name */
  name?: string;
  /** flag indicating whether this dimension should be included to the customer in Azure Monitor logs (aka Shoebox) */
  toBeExportedForCustomer?: boolean;
}

/** Paged list of private endpoint connections */
export interface PrivateEndpointConnectionList {
  /** Total item count. */
  count?: number;
  /** The Url of next result page. */
  nextLink?: string;
  /** Collection of items of type results. */
  value: PrivateEndpointConnection[];
}

/** Paged list of private link resources */
export interface PrivateLinkResourceList {
  /** Total item count. */
  count?: number;
  /** The Url of next result page. */
  nextLink?: string;
  /** Collection of items of type results. */
  value: PrivateLinkResource[];
}

/** A privately linkable resource. */
export interface PrivateLinkResource {
  /**
   * The private link resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The private link resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The private link resource properties.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: PrivateLinkResourceProperties;
  /**
   * The private link resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** A privately linkable resource properties. */
export interface PrivateLinkResourceProperties {
  /**
   * The private link resource group identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * This translates to how many Private IPs should be created for each privately linkable resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /**
   * The required zone names for private link resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredZoneNames?: string[];
}

/** The request payload for CheckNameAvailability API */
export interface CheckNameAvailabilityRequest {
  /** Resource name to verify for availability */
  name?: string;
  /** Fully qualified resource type which includes provider namespace */
  type?: string;
}

/** The response payload for CheckNameAvailability API */
export interface CheckNameAvailabilityResult {
  /** Error message */
  message?: string;
  /** Indicates if name is valid and available. */
  nameAvailable?: boolean;
  /** The reason the name is not available. */
  reason?: Reason;
}

/** Account resource */
export type Account = TrackedResource & {
  /** Gets or sets the Sku. */
  sku?: AccountSku;
  /**
   * Cloud connectors.
   * External cloud identifier used as part of scanning configuration.
   */
  cloudConnectors?: CloudConnectors;
  /**
   * Gets the time at which the entity was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * Gets the creator of the entity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdBy?: string;
  /**
   * Gets the creators of the entity's object id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdByObjectId?: string;
  /**
   * The URIs that are the public endpoints of the account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly endpoints?: AccountPropertiesEndpoints;
  /**
   * Gets or sets the friendly name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly friendlyName?: string;
  /** Gets or sets the managed resource group name */
  managedResourceGroupName?: string;
  /**
   * Gets the resource identifiers of the managed resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly managedResources?: AccountPropertiesManagedResources;
  /**
   * Gets the private endpoint connections information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];
  /**
   * Gets or sets the state of the provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets the public network access. */
  publicNetworkAccess?: PublicNetworkAccess;
};

/** Metadata pertaining to creation and last modification of the resource. */
export type TrackedResourceSystemData = SystemData & {};

/** The URIs that are the public endpoints of the account. */
export type AccountPropertiesEndpoints = AccountEndpoints & {};

/** Gets the resource identifiers of the managed resources. */
export type AccountPropertiesManagedResources = ManagedResources & {};

/** A private endpoint connection class. */
export type PrivateEndpointConnection = ProxyResource & {
  /** The private endpoint information. */
  privateEndpoint?: PrivateEndpoint;
  /** The private link service connection state. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * The provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
};

/** Gets or sets the error. */
export type ErrorResponseModelError = ErrorModel & {};

/** Known values of {@link Type} that the service accepts. */
export enum KnownType {
  SystemAssigned = "SystemAssigned"
}

/**
 * Defines values for Type. \
 * {@link KnownType} can be used interchangeably with Type,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned**
 */
export type Type = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link LastModifiedByType} that the service accepts. */
export enum KnownLastModifiedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for LastModifiedByType. \
 * {@link KnownLastModifiedByType} can be used interchangeably with LastModifiedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type LastModifiedByType = string;

/** Known values of {@link Status} that the service accepts. */
export enum KnownStatus {
  Unknown = "Unknown",
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Disconnected = "Disconnected"
}

/**
 * Defines values for Status. \
 * {@link KnownStatus} can be used interchangeably with Status,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Pending** \
 * **Approved** \
 * **Rejected** \
 * **Disconnected**
 */
export type Status = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  Unknown = "Unknown",
  Creating = "Creating",
  Moving = "Moving",
  Deleting = "Deleting",
  SoftDeleting = "SoftDeleting",
  SoftDeleted = "SoftDeleted",
  Failed = "Failed",
  Succeeded = "Succeeded",
  Canceled = "Canceled"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Creating** \
 * **Moving** \
 * **Deleting** \
 * **SoftDeleting** \
 * **SoftDeleted** \
 * **Failed** \
 * **Succeeded** \
 * **Canceled**
 */
export type ProvisioningState = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  NotSpecified = "NotSpecified",
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link Name} that the service accepts. */
export enum KnownName {
  Standard = "Standard"
}

/**
 * Defines values for Name. \
 * {@link KnownName} can be used interchangeably with Name,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard**
 */
export type Name = string;

/** Known values of {@link ScopeType} that the service accepts. */
export enum KnownScopeType {
  Tenant = "Tenant",
  Subscription = "Subscription"
}

/**
 * Defines values for ScopeType. \
 * {@link KnownScopeType} can be used interchangeably with ScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tenant** \
 * **Subscription**
 */
export type ScopeType = string;

/** Known values of {@link Reason} that the service accepts. */
export enum KnownReason {
  Invalid = "Invalid",
  AlreadyExists = "AlreadyExists"
}

/**
 * Defines values for Reason. \
 * {@link KnownReason} can be used interchangeably with Reason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type Reason = string;

/** Optional parameters. */
export interface AccountsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The skip token. */
  skipToken?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export type AccountsListByResourceGroupResponse = AccountList;

/** Optional parameters. */
export interface AccountsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** The skip token. */
  skipToken?: string;
}

/** Contains response data for the listBySubscription operation. */
export type AccountsListBySubscriptionResponse = AccountList;

/** Optional parameters. */
export interface AccountsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AccountsGetResponse = Account;

/** Optional parameters. */
export interface AccountsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type AccountsCreateOrUpdateResponse = Account;

/** Optional parameters. */
export interface AccountsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface AccountsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type AccountsUpdateResponse = Account;

/** Optional parameters. */
export interface AccountsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type AccountsListKeysResponse = AccessKeys;

/** Optional parameters. */
export interface AccountsAddRootCollectionAdminOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AccountsCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNameAvailability operation. */
export type AccountsCheckNameAvailabilityResponse = CheckNameAvailabilityResult;

/** Optional parameters. */
export interface AccountsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** The skip token. */
  skipToken?: string;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type AccountsListByResourceGroupNextResponse = AccountList;

/** Optional parameters. */
export interface AccountsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {
  /** The skip token. */
  skipToken?: string;
}

/** Contains response data for the listBySubscriptionNext operation. */
export type AccountsListBySubscriptionNextResponse = AccountList;

/** Optional parameters. */
export interface DefaultAccountsGetOptionalParams
  extends coreClient.OperationOptions {
  /** The Id of the scope object, for example if the scope is "Subscription" then it is the ID of that subscription. */
  scope?: string;
}

/** Contains response data for the get operation. */
export type DefaultAccountsGetResponse = DefaultAccountPayload;

/** Optional parameters. */
export interface DefaultAccountsSetModelOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the set operation. */
export type DefaultAccountsSetModelResponse = DefaultAccountPayload;

/** Optional parameters. */
export interface DefaultAccountsRemoveOptionalParams
  extends coreClient.OperationOptions {
  /** The Id of the scope object, for example if the scope is "Subscription" then it is the ID of that subscription. */
  scope?: string;
}

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationList;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationList;

/** Optional parameters. */
export interface PrivateEndpointConnectionsListByAccountOptionalParams
  extends coreClient.OperationOptions {
  /** The skip token. */
  skipToken?: string;
}

/** Contains response data for the listByAccount operation. */
export type PrivateEndpointConnectionsListByAccountResponse = PrivateEndpointConnectionList;

/** Optional parameters. */
export interface PrivateEndpointConnectionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionsCreateOrUpdateResponse = PrivateEndpointConnection;

/** Optional parameters. */
export interface PrivateEndpointConnectionsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface PrivateEndpointConnectionsListByAccountNextOptionalParams
  extends coreClient.OperationOptions {
  /** The skip token. */
  skipToken?: string;
}

/** Contains response data for the listByAccountNext operation. */
export type PrivateEndpointConnectionsListByAccountNextResponse = PrivateEndpointConnectionList;

/** Optional parameters. */
export interface PrivateLinkResourcesListByAccountOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByAccount operation. */
export type PrivateLinkResourcesListByAccountResponse = PrivateLinkResourceList;

/** Optional parameters. */
export interface PrivateLinkResourcesGetByGroupIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getByGroupId operation. */
export type PrivateLinkResourcesGetByGroupIdResponse = PrivateLinkResource;

/** Optional parameters. */
export interface PrivateLinkResourcesListByAccountNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByAccountNext operation. */
export type PrivateLinkResourcesListByAccountNextResponse = PrivateLinkResourceList;

/** Optional parameters. */
export interface PurviewManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
