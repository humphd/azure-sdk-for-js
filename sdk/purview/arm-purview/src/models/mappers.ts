/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AccountList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountList",
    modelProperties: {
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Account"
            }
          }
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "TrackedResourceSystemData"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdAt: {
        serializedName: "createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      createdBy: {
        serializedName: "createdBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountProperties",
    modelProperties: {
      cloudConnectors: {
        serializedName: "cloudConnectors",
        type: {
          name: "Composite",
          className: "CloudConnectors"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      createdBy: {
        serializedName: "createdBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createdByObjectId: {
        serializedName: "createdByObjectId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      endpoints: {
        serializedName: "endpoints",
        type: {
          name: "Composite",
          className: "AccountPropertiesEndpoints"
        }
      },
      friendlyName: {
        serializedName: "friendlyName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managedResourceGroupName: {
        serializedName: "managedResourceGroupName",
        type: {
          name: "String"
        }
      },
      managedResources: {
        serializedName: "managedResources",
        type: {
          name: "Composite",
          className: "AccountPropertiesManagedResources"
        }
      },
      privateEndpointConnections: {
        serializedName: "privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        defaultValue: "Enabled",
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudConnectors: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudConnectors",
    modelProperties: {
      awsExternalId: {
        serializedName: "awsExternalId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountEndpoints: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountEndpoints",
    modelProperties: {
      catalog: {
        serializedName: "catalog",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      guardian: {
        serializedName: "guardian",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      scan: {
        serializedName: "scan",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedResources: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedResources",
    modelProperties: {
      eventHubNamespace: {
        serializedName: "eventHubNamespace",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceGroup: {
        serializedName: "resourceGroup",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      storageAccount: {
        serializedName: "storageAccount",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountSku",
    modelProperties: {
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponseModelError"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorModel"
            }
          }
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccountUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountUpdateParameters",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AccountProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const AccessKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccessKeys",
    modelProperties: {
      atlasKafkaPrimaryEndpoint: {
        serializedName: "atlasKafkaPrimaryEndpoint",
        type: {
          name: "String"
        }
      },
      atlasKafkaSecondaryEndpoint: {
        serializedName: "atlasKafkaSecondaryEndpoint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CollectionAdminUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CollectionAdminUpdate",
    modelProperties: {
      objectId: {
        serializedName: "objectId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DefaultAccountPayload: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DefaultAccountPayload",
    modelProperties: {
      accountName: {
        serializedName: "accountName",
        type: {
          name: "String"
        }
      },
      resourceGroupName: {
        serializedName: "resourceGroupName",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "scope",
        type: {
          name: "String"
        }
      },
      scopeTenantId: {
        serializedName: "scopeTenantId",
        type: {
          name: "String"
        }
      },
      scopeType: {
        serializedName: "scopeType",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "OperationMetaServiceSpecification"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationMetaServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationMetaServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetaLogSpecification"
            }
          }
        }
      },
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationMetaMetricSpecification"
            }
          }
        }
      }
    }
  }
};

export const OperationMetaLogSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationMetaLogSpecification",
    modelProperties: {
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationMetaMetricSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationMetaMetricSpecification",
    modelProperties: {
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DimensionProperties"
            }
          }
        }
      },
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      enableRegionalMdmAccount: {
        serializedName: "enableRegionalMdmAccount",
        type: {
          name: "String"
        }
      },
      internalMetricName: {
        serializedName: "internalMetricName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      resourceIdDimensionNameOverride: {
        serializedName: "resourceIdDimensionNameOverride",
        type: {
          name: "String"
        }
      },
      sourceMdmNamespace: {
        serializedName: "sourceMdmNamespace",
        type: {
          name: "String"
        }
      },
      supportedAggregationTypes: {
        serializedName: "supportedAggregationTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      supportedTimeGrainTypes: {
        serializedName: "supportedTimeGrainTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DimensionProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DimensionProperties",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      toBeExportedForCustomer: {
        serializedName: "toBeExportedForCustomer",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionList",
    modelProperties: {
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceList",
    modelProperties: {
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateLinkResourceProperties"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceProperties",
    modelProperties: {
      groupId: {
        serializedName: "groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "requiredZoneNames",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CheckNameAvailabilityRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Account: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Account",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AccountSku"
        }
      },
      cloudConnectors: {
        serializedName: "properties.cloudConnectors",
        type: {
          name: "Composite",
          className: "CloudConnectors"
        }
      },
      createdAt: {
        serializedName: "properties.createdAt",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      createdBy: {
        serializedName: "properties.createdBy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      createdByObjectId: {
        serializedName: "properties.createdByObjectId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      endpoints: {
        serializedName: "properties.endpoints",
        type: {
          name: "Composite",
          className: "AccountPropertiesEndpoints"
        }
      },
      friendlyName: {
        serializedName: "properties.friendlyName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managedResourceGroupName: {
        serializedName: "properties.managedResourceGroupName",
        type: {
          name: "String"
        }
      },
      managedResources: {
        serializedName: "properties.managedResources",
        type: {
          name: "Composite",
          className: "AccountPropertiesManagedResources"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        defaultValue: "Enabled",
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResourceSystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResourceSystemData",
    modelProperties: {
      ...SystemData.type.modelProperties
    }
  }
};

export const AccountPropertiesEndpoints: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountPropertiesEndpoints",
    modelProperties: {
      ...AccountEndpoints.type.modelProperties
    }
  }
};

export const AccountPropertiesManagedResources: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AccountPropertiesManagedResources",
    modelProperties: {
      ...ManagedResources.type.modelProperties
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseModelError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseModelError",
    modelProperties: {
      ...ErrorModel.type.modelProperties
    }
  }
};
