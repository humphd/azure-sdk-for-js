// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpOperationResponse } from "@azure/core-http";
import {
  AtomXmlSerializer,
  deserializeAtomXmlResponse,
  serializeToAtomXmlRequest
} from "../util/atomXmlHelper";
import * as Constants from "../util/constants";
import { getString, getStringOrUndefined } from "../util/utils";

/**
 * @internal
 * @ignore
 * Builds the rule object from the raw json object gotten after deserializing the
 * response from the service
 * @param rawRule
 */
export function buildRule(rawRule: any): RuleProperties {
  return {
    name: getString(rawRule["RuleName"], "ruleName"),
    filter: getTopicFilter(rawRule["Filter"]),
    action: getRuleAction(rawRule["Action"])
  };
}

/**
 * @internal
 * @ignore
 * Helper utility to retrieve `filter` value from given input,
 * or undefined if not passed in.
 * @param value
 */
function getTopicFilter(value: any): SqlRuleFilter | CorrelationRuleFilter {
  let result: SqlRuleFilter | CorrelationRuleFilter;

  if (value["SqlExpression"] != undefined) {
    result = {
      sqlExpression: value["SqlExpression"],
      sqlParameters: getKeyValuePairsOrUndefined(value["Parameters"], "SQLParameters")
    };
  } else {
    result = {
      correlationId: getStringOrUndefined(value["CorrelationId"]),
      subject: getStringOrUndefined(value["Label"]),
      to: getStringOrUndefined(value["To"]),
      replyTo: getStringOrUndefined(value["ReplyTo"]),
      replyToSessionId: getStringOrUndefined(value["ReplyToSessionId"]),
      sessionId: getStringOrUndefined(value["SessionId"]),
      messageId: getStringOrUndefined(value["MessageId"]),
      contentType: getStringOrUndefined(value["ContentType"]),
      applicationProperties: getKeyValuePairsOrUndefined(
        value["Properties"],
        "ApplicationProperties"
      )
    };
  }
  return result;
}

/**
 * @internal
 * @ignore
 * Helper utility to retrieve rule `action` value from given input.
 * @param value
 */
function getRuleAction(value: any): SqlRuleAction {
  return {
    sqlExpression: value["SqlExpression"],
    sqlParameters: getKeyValuePairsOrUndefined(value["Parameters"], "SQLParameters")
  };
}

/**
 * Represents the options to create a rule for a subscription.
 * @internal
 * @ignore
 */
export interface CreateRuleOptions {
  /**
   * Name of the rule
   */
  name: string;

  /**
   * Defines the filter expression that the rule evaluates. For `SqlRuleFilter` input,
   * the expression string is interpreted as a SQL92 expression which must
   * evaluate to True or False. Only one between a `CorrelationRuleFilter` or
   * a `SqlRuleFilter` can be defined.
   */
  filter?: SqlRuleFilter | CorrelationRuleFilter;

  /**
   * The SQL like expression that can be executed on the message should the
   * associated filter apply.
   */
  action?: SqlRuleAction;
}

/**
 * Represents all the attributes of a rule.
 */
export interface RuleProperties {
  /**
   * Name of the rule
   */
  readonly name: string;

  /**
   * Defines the filter expression that the rule evaluates. For `SqlRuleFilter` input,
   * the expression string is interpreted as a SQL92 expression which must
   * evaluate to True or False. Only one between a `CorrelationRuleFilter` or
   * a `SqlRuleFilter` can be defined.
   */
  filter: SqlRuleFilter | CorrelationRuleFilter;

  /**
   * The SQL like expression that can be executed on the message should the
   * associated filter apply.
   */
  action: SqlRuleAction;
}

/**
 * Represents a Rule on a Subscription that is used to filter the incoming message from the
 * Subscription.
 */
export interface RuleDescription {
  /**
   * Filter expression used to match messages. Supports 2 types:
   * - `string`: SQL-like condition expression that is evaluated against the messages'
   * user-defined properties and system properties. All system properties will be prefixed with
   * `sys.` in the condition expression.
   * - `CorrelationRuleFilter`: Properties of the filter will be used to match with the message properties.
   */
  filter?: string | CorrelationRuleFilter;
  /**
   * Action to perform if the message satisfies the filtering expression.
   */
  action?: string;
  /**
   * Represents the name of the rule.
   */
  name: string;
}

/**
 * Meant to be used to support interoperability with the duration type in languages such as Java, .NET and Python.
 * @export
 * @interface ISO8601Duration
 */
export interface ISO8601Duration {
  /**
   * `value` here is expected to be an ISO-8601 string representing the duration such as such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   *    (More on ISO-8601 duration format: https://en.wikipedia.org/wiki/ISO_8601#Durations)
   *
   * @type {string}
   */
  value: string;
  /**
   * `kind` being "iso8601" duration type
   *
   * @type {"iso8601"}
   */
  kind: "iso8601";
}

/**
 * Represents the correlation filter expression.
 * A CorrelationRuleFilter holds a set of conditions that are matched against user and system properties
 * of incoming messages from a Subscription.
 */
export interface CorrelationRuleFilter {
  /**
   * Value to be matched with the `correlationId` property of the incoming message.
   */
  correlationId?: string;
  /**
   * Value to be matched with the `messageId` property of the incoming message.
   */
  messageId?: string;
  /**
   * Value to be matched with the `to` property of the incoming message.
   */
  to?: string;
  /**
   * Value to be matched with the `replyTo` property of the incoming message.
   */
  replyTo?: string;
  /**
   * Value to be matched with the `subject` property of the incoming message.
   */
  subject?: string;
  /**
   * Value to be matched with the `sessionId` property of the incoming message.
   */
  sessionId?: string;
  /**
   * Value to be matched with the `replyToSessionId` property of the incoming message.
   */
  replyToSessionId?: string;
  /**
   * Value to be matched with the `contentType` property of the incoming message.
   */
  contentType?: string;
  /**
   * Value to be matched with the user properties of the incoming message.
   *
   * Value can be of types string, number, boolean, Date or {value: string, kind: "duration"}
   * Note: {value: string, kind: "duration"}
   *       Meant for interoperability(to support the duration type in languages such as Java, .NET and Python)
   *       `value` here is expected to be an ISO-8601 string representing the duration such as such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   *            (More on ISO-8601 duration format: https://en.wikipedia.org/wiki/ISO_8601#Durations)
   *       `kind` represents the "iso8601" duration type.
   */
  applicationProperties?: {
    [key: string]: string | number | boolean | Date | ISO8601Duration;
  };
}

/**
 * Represents all possible fields on SqlRuleAction
 */
export type SqlRuleAction = {
  /**
   * SQL expression to use in the rule action.
   */
  sqlExpression?: string;

  /**
   * SQL parameters to the SQL expression in the rule action.
   */
  sqlParameters?: { [key: string]: string | number | boolean };
};

/**
 * Represents all possible fields on SqlRuleFilter
 */
export interface SqlRuleFilter {
  /**
   * SQL expression to use in the rule filter.
   * Defaults to creating a true filter if none specified
   */
  sqlExpression: string;

  /**
   * SQL parameters to the SQL expression in the rule filter.
   */
  sqlParameters?: { [key: string]: string | number | boolean };
}

/**
 * @internal
 * @ignore
 *
 * @interface InternalRuleOptions
 */
export interface InternalRuleOptions {
  Name: string;
  Filter: any;
  Action: any;
}

/**
 * @internal
 * @ignore
 *
 * @param {CreateRuleOptions} rule
 */
export function buildInternalRuleResource(rule: CreateRuleOptions): InternalRuleOptions {
  const resource: InternalRuleOptions = {
    Filter: {},
    Action: {},
    Name: rule.name
  };

  if (rule.filter == undefined) {
    // Defaults to creating a true filter if none specified
    resource.Filter = {
      SqlExpression: "1=1"
    };
    resource.Filter[Constants.XML_METADATA_MARKER] = {
      "p4:type": "SqlFilter",
      "xmlns:p4": "http://www.w3.org/2001/XMLSchema-instance"
    };
  } else {
    if (rule.filter.hasOwnProperty("sqlExpression")) {
      const sqlFilter: SqlRuleFilter = rule.filter as SqlRuleFilter;
      resource.Filter = {
        SqlExpression: sqlFilter.sqlExpression,
        Parameters: buildInternalRawKeyValuePairs(sqlFilter.sqlParameters, "sqlParameters")
      };
      resource.Filter[Constants.XML_METADATA_MARKER] = {
        "p4:type": "SqlFilter",
        "xmlns:p4": "http://www.w3.org/2001/XMLSchema-instance"
      };
    } else {
      const correlationFilter: CorrelationRuleFilter = rule.filter as CorrelationRuleFilter;

      resource.Filter = {
        CorrelationId: correlationFilter.correlationId,
        Label: correlationFilter.subject,
        To: correlationFilter.to,
        ReplyTo: correlationFilter.replyTo,
        ReplyToSessionId: correlationFilter.replyToSessionId,
        ContentType: correlationFilter.contentType,
        SessionId: correlationFilter.sessionId,
        MessageId: correlationFilter.messageId,
        Properties: buildInternalRawKeyValuePairs(
          correlationFilter.applicationProperties,
          "applicationProperties"
        )
      };
      resource.Filter[Constants.XML_METADATA_MARKER] = {
        "p4:type": "CorrelationFilter",
        "xmlns:p4": "http://www.w3.org/2001/XMLSchema-instance"
      };
    }
  }

  if (rule.action == undefined || rule.action.sqlExpression == undefined) {
    // Defaults to creating an empty rule action instance if none specified
    resource.Action = {};
    resource.Action[Constants.XML_METADATA_MARKER] = {
      "p4:type": "EmptyRuleAction",
      "xmlns:p4": "http://www.w3.org/2001/XMLSchema-instance"
    };
  } else {
    resource.Action = {
      SqlExpression: rule.action.sqlExpression,
      Parameters: buildInternalRawKeyValuePairs(rule.action.sqlParameters, "sqlParameters")
    };
    resource.Action[Constants.XML_METADATA_MARKER] = {
      "p4:type": "SqlRuleAction",
      "xmlns:p4": "http://www.w3.org/2001/XMLSchema-instance"
    };
  }

  return resource;
}

/**
 * @internal
 * @ignore
 * RuleResourceSerializer for serializing / deserializing Rule entities
 */
export class RuleResourceSerializer implements AtomXmlSerializer {
  serialize(rule: RuleProperties): object {
    return serializeToAtomXmlRequest("RuleDescription", buildInternalRuleResource(rule));
  }

  async deserialize(response: HttpOperationResponse): Promise<HttpOperationResponse> {
    return deserializeAtomXmlResponse(["TopicName", "SubscriptionName", "RuleName"], response);
  }
}

/**
 * @internal
 * @ignore
 */
export function isSqlRuleAction(action: any): action is SqlRuleAction {
  return action != null && typeof action === "object" && "sqlExpression" in action;
}

/**
 * Service expects the XML request with the special type names serialized in the request,
 * the request would fail otherwise.
 *
 * @internal
 * @ignore
 */
enum TypeMapForRequestSerialization {
  duration = "duration",
  double = "double",
  string = "string",
  long = "long",
  date = "dateTime",
  boolean = "boolean"
}

/**
 * @internal
 * @ignore
 */
enum TypeMapForResponseDeserialization {
  duration = "duration",
  int = "int",
  double = "double",
  string = "string",
  boolean = "boolean",
  date = "dateTime"
}

/**
 * @internal
 * @ignore
 * Internal representation of key-value pair
 */
type RawKeyValuePair = {
  Key: string;
  Value: any;
};

/**
 * @internal
 * @ignore
 */
interface InternalRawKeyValuePairs {
  KeyValueOfstringanyType: RawKeyValuePair[];
}

/**
 * Key-value pairs are supposed to be wrapped with this tag in the XML request, they are ignored otherwise.
 *
 * @internal
 * @ignore
 */
const keyValuePairXMLTag = "KeyValueOfstringanyType";

/**
 * @internal
 * @ignore
 * Helper utility to retrieve the key-value pairs from the RawKeyValue object from given input,
 * or undefined if not passed in.
 * @param value
 */
function getKeyValuePairsOrUndefined(
  value: any,
  attribute: "ApplicationProperties" | "SQLParameters"
): { [key: string]: any } | undefined {
  if (!value) {
    return undefined;
  }
  const properties: any = {};
  let rawProperties;
  if (!Array.isArray(value[keyValuePairXMLTag]) && value[keyValuePairXMLTag]?.Key) {
    // When a single property is present,
    //    value["KeyValueOfstringanyType"] is { Key: <key>, Value: [Object] }
    // When multiple properties are present,
    //    value["KeyValueOfstringanyType"] is [ { Key: <key-1>, Value: [Object] }, { Key: <key-2>, Value: [Object] } ]
    // For consistency, wrapping `value["KeyValueOfstringanyType"]` as an array for the "single property" case.
    rawProperties = [value[keyValuePairXMLTag]];
  } else {
    rawProperties = value[keyValuePairXMLTag];
  }
  if (Array.isArray(rawProperties)) {
    for (const rawProperty of rawProperties) {
      const key = rawProperty.Key;
      const value = rawProperty.Value["_"];
      const encodedValueType = rawProperty.Value["$"]["i:type"].toString().substring(5);
      if (
        encodedValueType === TypeMapForResponseDeserialization.int ||
        encodedValueType === TypeMapForResponseDeserialization.double
      ) {
        properties[key] = Number(value);
      } else if (encodedValueType === TypeMapForResponseDeserialization.string) {
        properties[key] = value;
      } else if (encodedValueType === TypeMapForResponseDeserialization.boolean) {
        properties[key] = value === "true" ? true : false;
      } else if (encodedValueType === TypeMapForResponseDeserialization.date) {
        properties[key] = new Date(value);
      } else if (encodedValueType === TypeMapForResponseDeserialization.duration) {
        properties[key] = { value: value, kind: "duration" };
      } else {
        throw new TypeError(
          `Unable to parse the key-value pairs in the response - ${JSON.stringify(rawProperty)}`
        );
      }
    }
  } else {
    throw new TypeError(
      `${attribute} in the response is not an array, unable to parse the response - ${JSON.stringify(
        value
      )}`
    );
  }
  return properties;
}

/**
 * @internal
 * @ignore
 * Helper utility to extract array of user properties key-value instances from given input,
 * or undefined if not passed in.
 * @param value
 */
export function buildInternalRawKeyValuePairs(
  parameters: { [key: string]: any } | undefined,
  attribute: "applicationProperties" | "sqlParameters"
): InternalRawKeyValuePairs | undefined {
  if (parameters == undefined) {
    return undefined;
  }
  if (
    Array.isArray(parameters) ||
    typeof parameters === "string" ||
    typeof parameters !== "object" ||
    Object.entries(parameters).length < 1
  ) {
    throw new TypeError(
      `Unsupported value for the ${attribute} ${JSON.stringify(
        parameters
      )}, expected a JSON object with key-value pairs.`
    );
  }
  const rawParameters: RawKeyValuePair[] = [];
  for (let [key, value] of Object.entries(parameters)) {
    let type: string | number | boolean;
    if (typeof value === "number") {
      type = TypeMapForRequestSerialization.double;
    } else if (typeof value === "string") {
      type = TypeMapForRequestSerialization.string;
    } else if (typeof value === "boolean") {
      type = TypeMapForRequestSerialization.boolean;
    } else if (value instanceof Date && !isNaN(value.valueOf())) {
      type = TypeMapForRequestSerialization.date;
      value = value.toJSON();
    } else if (
      value &&
      value.val &&
      typeof value.val === "string" &&
      value.kind === TypeMapForRequestSerialization.duration
    ) {
      type = TypeMapForRequestSerialization.duration;
      // Not doing any validation with regex for the expected ISO-8601 duration here
      value = value.val;
    } else {
      throw new TypeError(
        `Unsupported type for the value in the ${attribute} for the key '${key}'`
      );
    }

    const rawParameter: RawKeyValuePair = {
      Key: key,
      Value: {
        [Constants.XML_METADATA_MARKER]: {
          "p4:type": "l28:" + type,
          "xmlns:l28": "http://www.w3.org/2001/XMLSchema"
        },
        [Constants.XML_VALUE_MARKER]: value
      }
    };
    rawParameters.push(rawParameter);
  }
  return {
    [keyValuePairXMLTag]: rawParameters
  };
}
