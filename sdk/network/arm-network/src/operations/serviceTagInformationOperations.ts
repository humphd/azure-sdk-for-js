/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServiceTagInformationOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import {
  ServiceTagInformation,
  ServiceTagInformationOperationsListNextOptionalParams,
  ServiceTagInformationOperationsListOptionalParams,
  ServiceTagInformationOperationsListResponse,
  ServiceTagInformationOperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServiceTagInformationOperations operations. */
export class ServiceTagInformationOperationsImpl
  implements ServiceTagInformationOperations {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class ServiceTagInformationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of service tag information resources with pagination.
   * @param location The location that will be used as a reference for cloud (not as a filter based on
   *                 location, you will get the list of service tags with prefix details across all regions but limited
   *                 to the cloud that your subscription belongs to).
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: ServiceTagInformationOperationsListOptionalParams
  ): PagedAsyncIterableIterator<ServiceTagInformation> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: ServiceTagInformationOperationsListOptionalParams
  ): AsyncIterableIterator<ServiceTagInformation[]> {
    let result = await this._list(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    options?: ServiceTagInformationOperationsListOptionalParams
  ): AsyncIterableIterator<ServiceTagInformation> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of service tag information resources with pagination.
   * @param location The location that will be used as a reference for cloud (not as a filter based on
   *                 location, you will get the list of service tags with prefix details across all regions but limited
   *                 to the cloud that your subscription belongs to).
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: ServiceTagInformationOperationsListOptionalParams
  ): Promise<ServiceTagInformationOperationsListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param location The location that will be used as a reference for cloud (not as a filter based on
   *                 location, you will get the list of service tags with prefix details across all regions but limited
   *                 to the cloud that your subscription belongs to).
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: ServiceTagInformationOperationsListNextOptionalParams
  ): Promise<ServiceTagInformationOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/serviceTagDetails",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceTagInformationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.noAddressPrefixes,
    Parameters.tagName
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceTagInformationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.noAddressPrefixes,
    Parameters.tagName
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
