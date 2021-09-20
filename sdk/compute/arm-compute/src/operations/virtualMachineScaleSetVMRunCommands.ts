/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineScaleSetVMRunCommands } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VirtualMachineRunCommand,
  VirtualMachineScaleSetVMRunCommandsListNextOptionalParams,
  VirtualMachineScaleSetVMRunCommandsListOptionalParams,
  VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse,
  VirtualMachineRunCommandUpdate,
  VirtualMachineScaleSetVMRunCommandsUpdateOptionalParams,
  VirtualMachineScaleSetVMRunCommandsUpdateResponse,
  VirtualMachineScaleSetVMRunCommandsDeleteOptionalParams,
  VirtualMachineScaleSetVMRunCommandsGetOptionalParams,
  VirtualMachineScaleSetVMRunCommandsGetResponse,
  VirtualMachineScaleSetVMRunCommandsListResponse,
  VirtualMachineScaleSetVMRunCommandsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineScaleSetVMRunCommands operations. */
export class VirtualMachineScaleSetVMRunCommandsImpl
  implements VirtualMachineScaleSetVMRunCommands {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualMachineScaleSetVMRunCommands class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * The operation to get all run commands of an instance in Virtual Machine Scaleset.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMRunCommandsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineRunCommand> {
    const iter = this.listPagingAll(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          vmScaleSetName,
          instanceId,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMRunCommandsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineRunCommand[]> {
    let result = await this._list(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMRunCommandsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineRunCommand> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The operation to create or update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse
      >,
      VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        runCommandName,
        runCommand,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to create or update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Create Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommand,
    options?: VirtualMachineScaleSetVMRunCommandsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      runCommandName,
      runCommand,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineScaleSetVMRunCommandsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetVMRunCommandsUpdateResponse>,
      VirtualMachineScaleSetVMRunCommandsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetVMRunCommandsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        runCommandName,
        runCommand,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to update the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param runCommand Parameters supplied to the Update Virtual Machine RunCommand operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    runCommand: VirtualMachineRunCommandUpdate,
    options?: VirtualMachineScaleSetVMRunCommandsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      runCommandName,
      runCommand,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    options?: VirtualMachineScaleSetVMRunCommandsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        runCommandName,
        options
      },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to delete the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    options?: VirtualMachineScaleSetVMRunCommandsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmScaleSetName,
      instanceId,
      runCommandName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the VMSS VM run command.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param runCommandName The name of the virtual machine run command.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    runCommandName: string,
    options?: VirtualMachineScaleSetVMRunCommandsGetOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vmScaleSetName,
        instanceId,
        runCommandName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * The operation to get all run commands of an instance in Virtual Machine Scaleset.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    options?: VirtualMachineScaleSetVMRunCommandsListOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, instanceId, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param instanceId The instance ID of the virtual machine.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vmScaleSetName: string,
    instanceId: string,
    nextLink: string,
    options?: VirtualMachineScaleSetVMRunCommandsListNextOptionalParams
  ): Promise<VirtualMachineScaleSetVMRunCommandsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, instanceId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    201: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    202: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    204: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.runCommand,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    201: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    202: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    204: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.runCommand1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands/{runCommandName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommand
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId,
    Parameters.runCommandName
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/virtualMachines/{instanceId}/runCommands",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommandsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineRunCommandsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.vmScaleSetName,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
