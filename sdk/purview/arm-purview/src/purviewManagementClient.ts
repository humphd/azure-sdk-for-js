/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import {
  AccountsImpl,
  DefaultAccountsImpl,
  OperationsImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl
} from "./operations";
import {
  Accounts,
  DefaultAccounts,
  Operations,
  PrivateEndpointConnections,
  PrivateLinkResources
} from "./operationsInterfaces";
import { PurviewManagementClientContext } from "./purviewManagementClientContext";
import { PurviewManagementClientOptionalParams } from "./models";

export class PurviewManagementClient extends PurviewManagementClientContext {
  /**
   * Initializes a new instance of the PurviewManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: PurviewManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.accounts = new AccountsImpl(this);
    this.defaultAccounts = new DefaultAccountsImpl(this);
    this.operations = new OperationsImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
  }

  accounts: Accounts;
  defaultAccounts: DefaultAccounts;
  operations: Operations;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
}
