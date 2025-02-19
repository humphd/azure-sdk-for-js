// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { createHttpHeaders, PipelineRequestOptions } from "@azure/core-rest-pipeline";
import { AccessToken, GetTokenOptions } from "@azure/core-auth";
import { MSI, MSIConfiguration } from "./models";
import { credentialLogger } from "../../util/logging";
import { mapScopesToResource, msiGenericGetToken } from "./utils";

const msiName = "ManagedIdentityCredential - CloudShellMSI";
const logger = credentialLogger(msiName);

// Cloud Shell MSI doesn't have a special expiresIn parser.
const expiresInParser = undefined;

function prepareRequestOptions(
  scopes: string | string[],
  clientId?: string
): PipelineRequestOptions {
  const resource = mapScopesToResource(scopes);
  if (!resource) {
    throw new Error(`${msiName}: Multiple scopes are not supported.`);
  }

  const body: any = {
    resource
  };

  if (clientId) {
    body.client_id = clientId;
  }

  // This error should not bubble up, since we verify that this environment variable is defined in the isAvailable() method defined below.
  if (!process.env.MSI_ENDPOINT) {
    throw new Error(`${msiName}: Missing environment variable: MSI_ENDPOINT`);
  }
  const params = new URLSearchParams(body);
  return {
    url: process.env.MSI_ENDPOINT,
    method: "POST",
    body: params.toString(),
    headers: createHttpHeaders({
      Accept: "application/json",
      Metadata: "true",
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };
}

export const cloudShellMsi: MSI = {
  async isAvailable(scopes): Promise<boolean> {
    const resource = mapScopesToResource(scopes);
    if (!resource) {
      logger.info(`${msiName}: Unavailable. Multiple scopes are not supported.`);
      return false;
    }
    const result = Boolean(process.env.MSI_ENDPOINT);
    if (!result) {
      logger.info(`${msiName}: Unavailable. The environment variable MSI_ENDPOINT is needed.`);
    }
    return result;
  },
  async getToken(
    configuration: MSIConfiguration,
    getTokenOptions: GetTokenOptions = {}
  ): Promise<AccessToken | null> {
    const { identityClient, scopes, clientId } = configuration;

    logger.info(
      `${msiName}: Using the endpoint coming form the environment variable MSI_ENDPOINT = ${process.env.MSI_ENDPOINT}.`
    );

    return msiGenericGetToken(
      identityClient,
      prepareRequestOptions(scopes, clientId),
      expiresInParser,
      getTokenOptions
    );
  }
};
