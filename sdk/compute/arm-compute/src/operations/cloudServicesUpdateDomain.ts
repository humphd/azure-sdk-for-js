/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CloudServicesUpdateDomain } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  UpdateDomain,
  CloudServicesUpdateDomainListUpdateDomainsNextOptionalParams,
  CloudServicesUpdateDomainListUpdateDomainsOptionalParams,
  CloudServicesUpdateDomainWalkUpdateDomainOptionalParams,
  CloudServicesUpdateDomainGetUpdateDomainOptionalParams,
  CloudServicesUpdateDomainGetUpdateDomainResponse,
  CloudServicesUpdateDomainListUpdateDomainsResponse,
  CloudServicesUpdateDomainListUpdateDomainsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CloudServicesUpdateDomain operations. */
export class CloudServicesUpdateDomainImpl
  implements CloudServicesUpdateDomain {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class CloudServicesUpdateDomain class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of all update domains in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  public listUpdateDomains(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateDomainListUpdateDomainsOptionalParams
  ): PagedAsyncIterableIterator<UpdateDomain> {
    const iter = this.listUpdateDomainsPagingAll(
      resourceGroupName,
      cloudServiceName,
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
        return this.listUpdateDomainsPagingPage(
          resourceGroupName,
          cloudServiceName,
          options
        );
      }
    };
  }

  private async *listUpdateDomainsPagingPage(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateDomainListUpdateDomainsOptionalParams
  ): AsyncIterableIterator<UpdateDomain[]> {
    let result = await this._listUpdateDomains(
      resourceGroupName,
      cloudServiceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listUpdateDomainsNext(
        resourceGroupName,
        cloudServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listUpdateDomainsPagingAll(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateDomainListUpdateDomainsOptionalParams
  ): AsyncIterableIterator<UpdateDomain> {
    for await (const page of this.listUpdateDomainsPagingPage(
      resourceGroupName,
      cloudServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Updates the role instances in the specified update domain.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains are
   *                     identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of
   *                     1, and so on.
   * @param options The options parameters.
   */
  async beginWalkUpdateDomain(
    resourceGroupName: string,
    cloudServiceName: string,
    updateDomain: number,
    options?: CloudServicesUpdateDomainWalkUpdateDomainOptionalParams
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
      { resourceGroupName, cloudServiceName, updateDomain, options },
      walkUpdateDomainOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Updates the role instances in the specified update domain.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains are
   *                     identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of
   *                     1, and so on.
   * @param options The options parameters.
   */
  async beginWalkUpdateDomainAndWait(
    resourceGroupName: string,
    cloudServiceName: string,
    updateDomain: number,
    options?: CloudServicesUpdateDomainWalkUpdateDomainOptionalParams
  ): Promise<void> {
    const poller = await this.beginWalkUpdateDomain(
      resourceGroupName,
      cloudServiceName,
      updateDomain,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified update domain of a cloud service. Use nextLink property in the response to get
   * the next page of update domains. Do this till nextLink is null to fetch all the update domains.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param updateDomain Specifies an integer value that identifies the update domain. Update domains are
   *                     identified with a zero-based index: the first update domain has an ID of 0, the second has an ID of
   *                     1, and so on.
   * @param options The options parameters.
   */
  getUpdateDomain(
    resourceGroupName: string,
    cloudServiceName: string,
    updateDomain: number,
    options?: CloudServicesUpdateDomainGetUpdateDomainOptionalParams
  ): Promise<CloudServicesUpdateDomainGetUpdateDomainResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, updateDomain, options },
      getUpdateDomainOperationSpec
    );
  }

  /**
   * Gets a list of all update domains in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The options parameters.
   */
  private _listUpdateDomains(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServicesUpdateDomainListUpdateDomainsOptionalParams
  ): Promise<CloudServicesUpdateDomainListUpdateDomainsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, options },
      listUpdateDomainsOperationSpec
    );
  }

  /**
   * ListUpdateDomainsNext
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param nextLink The nextLink from the previous successful call to the ListUpdateDomains method.
   * @param options The options parameters.
   */
  private _listUpdateDomainsNext(
    resourceGroupName: string,
    cloudServiceName: string,
    nextLink: string,
    options?: CloudServicesUpdateDomainListUpdateDomainsNextOptionalParams
  ): Promise<CloudServicesUpdateDomainListUpdateDomainsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, nextLink, options },
      listUpdateDomainsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const walkUpdateDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/updateDomains/{updateDomain}",
  httpMethod: "PUT",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName,
    Parameters.updateDomain
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUpdateDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/updateDomains/{updateDomain}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateDomain
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName,
    Parameters.updateDomain
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUpdateDomainsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/updateDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateDomainListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUpdateDomainsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateDomainListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
