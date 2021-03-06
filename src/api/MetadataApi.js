/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import SendBirdAdditionalProperties from '../model/SendBirdAdditionalProperties';
import ViewUserMetadataResponse from '../model/ViewUserMetadataResponse';

/**
* Metadata service.
* @module api/MetadataApi
* @version 1.0.3
*/
export default class MetadataApi {

    /**
    * Constructs a new MetadataApi. 
    * @alias module:api/MetadataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * View a channel metacounter - When retrieving all items of a channel metacounter
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>} and HTTP response
     */
    viewChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetacounter");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetacounter");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetacounter");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      let queryParams = {
        'key': opts['key'],
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': SendBirdAdditionalProperties};
      return this.apiClient.callApi(
        '/v3/{channel_type}/{channel_url}/metacounter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a channel metacounter - When retrieving all items of a channel metacounter
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>}
     */
    viewChannelMetacounter(apiToken, channelType, channelUrl, opts) {
      return this.viewChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>} and HTTP response
     */
    viewChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetacounterByKey");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetacounterByKey");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetacounterByKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling viewChannelMetacounterByKey");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': SendBirdAdditionalProperties};
      return this.apiClient.callApi(
        '/v3/{channel_type}/{channel_url}/metacounter/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>}
     */
    viewChannelMetacounterByKey(apiToken, channelType, channelUrl, key) {
      return this.viewChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a channel metadata - When retrieving all items of a channel metadata
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    viewChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetadata");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetadata");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetadata");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      let queryParams = {
        'key': opts['key'],
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/v3/{channel_type}/{channel_url}/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a channel metadata - When retrieving all items of a channel metadata
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    viewChannelMetadata(apiToken, channelType, channelUrl, opts) {
      return this.viewChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a channel metadata - When retrieving a specific item of a channel metadata by its key
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    viewChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetadataByKey");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetadataByKey");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetadataByKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling viewChannelMetadataByKey");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/v3/{channel_type}/{channel_url}/metadata/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a channel metadata - When retrieving a specific item of a channel metadata by its key
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    viewChannelMetadataByKey(apiToken, channelType, channelUrl, key) {
      return this.viewChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a user metadata - When retrieving all items of a user metadata
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewUserMetadataResponse} and HTTP response
     */
    viewUserMetadataWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewUserMetadata");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewUserMetadata");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'key': opts['key'],
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ViewUserMetadataResponse;
      return this.apiClient.callApi(
        '/v3/users/{user_id}/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a user metadata - When retrieving all items of a user metadata
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewUserMetadataResponse}
     */
    viewUserMetadata(apiToken, userId, opts) {
      return this.viewUserMetadataWithHttpInfo(apiToken, userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    viewUserMetadataByKeyWithHttpInfo(apiToken, userId, key) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewUserMetadataByKey");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewUserMetadataByKey");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling viewUserMetadataByKey");
      }

      let pathParams = {
        'user_id': userId,
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/v3/users/{user_id}/metadata/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    viewUserMetadataByKey(apiToken, userId, key) {
      return this.viewUserMetadataByKeyWithHttpInfo(apiToken, userId, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
