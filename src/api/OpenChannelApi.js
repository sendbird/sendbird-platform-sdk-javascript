/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateAnOpenChannelRequest from '../model/CreateAnOpenChannelRequest';
import ListOpenChannelsResponse from '../model/ListOpenChannelsResponse';
import ListOperatorsResponse from '../model/ListOperatorsResponse';
import RegisterOperatorsToAGroupChannelRequest from '../model/RegisterOperatorsToAGroupChannelRequest';
import SendbirdOpenChannel from '../model/SendbirdOpenChannel';
import UpdateAnOpenChannelRequest from '../model/UpdateAnOpenChannelRequest';

/**
* OpenChannel service.
* @module api/OpenChannelApi
* @version 2.0.0
*/
export default class OpenChannelApi {

    /**
    * Constructs a new OpenChannelApi. 
    * @alias module:api/OpenChannelApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an open channel
     * ## Create an open channel  You can create an [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel) that facilitates conversations for millions of users. Open channels allow a seamless chat experience possible for all participants by using [dynamic partitioning](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-how-dynamic-partitioning-works) which creates subchannels that each handle up to tens of thousands of participants.  Because users don't need invitations to join open channels, short-lived live events like concerts or live streams that don't require a sustained membership are good use cases for open channels.  [https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel)
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateAnOpenChannelRequest} opts.createAnOpenChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendbirdOpenChannel} and HTTP response
     */
    createAnOpenChannelWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createAnOpenChannelRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendbirdOpenChannel;
      return this.apiClient.callApi(
        '/v3/open_channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an open channel
     * ## Create an open channel  You can create an [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel) that facilitates conversations for millions of users. Open channels allow a seamless chat experience possible for all participants by using [dynamic partitioning](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#4-how-dynamic-partitioning-works) which creates subchannels that each handle up to tens of thousands of participants.  Because users don't need invitations to join open channels, short-lived live events like concerts or live streams that don't require a sustained membership are good use cases for open channels.  [https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel)
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateAnOpenChannelRequest} opts.createAnOpenChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendbirdOpenChannel}
     */
    createAnOpenChannel(opts) {
      return this.createAnOpenChannelWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an open channel
     * ## Delete an open channel  You can delete an open channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-an-open-channel#1-delete-an-open-channel
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAnOpenChannelWithHttpInfo(channelUrl, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling deleteAnOpenChannel");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an open channel
     * ## Delete an open channel  You can delete an open channel using this API. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/delete-an-open-channel#1-delete-an-open-channel
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAnOpenChannel(channelUrl, opts) {
      return this.deleteAnOpenChannelWithHttpInfo(channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an open channel
     * ## Get an open channel  This action retrieves information about a specific [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel).  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel)
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.includeOperators Determines whether to include a list of operators in the response. (Default: false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendbirdOpenChannel} and HTTP response
     */
    getAnOpenChannelWithHttpInfo(channelUrl, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling getAnOpenChannel");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
        'include_operators': opts['includeOperators']
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SendbirdOpenChannel;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an open channel
     * ## Get an open channel  This action retrieves information about a specific [open channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel).  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/get-an-open-channel#1-get-an-open-channel)
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.includeOperators Determines whether to include a list of operators in the response. (Default: false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendbirdOpenChannel}
     */
    getAnOpenChannel(channelUrl, opts) {
      return this.getAnOpenChannelWithHttpInfo(channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List operators of an open channel
     * ## List operators of an open channel  You can retrieve a list of operators of an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-an-open-channel#1-list-operators-of-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListOperatorsResponse} and HTTP response
     */
    listChannelOperatorsWithHttpInfo(channelUrl, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listChannelOperators");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListOperatorsResponse;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/operators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List operators of an open channel
     * ## List operators of an open channel  You can retrieve a list of operators of an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/list-operators-of-an-open-channel#1-list-operators-of-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOperatorsResponse}
     */
    listChannelOperators(channelUrl, opts) {
      return this.listChannelOperatorsWithHttpInfo(channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List open channels
     * ## List open channels  This action retrieves a list of [open channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels)
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {String} opts.channelUrls Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param {Number} opts.limit 
     * @param {String} opts.customTypes Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types=urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type.
     * @param {String} opts.nameContains 
     * @param {String} opts.urlContains 
     * @param {Boolean} opts.showFrozen Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true)
     * @param {Boolean} opts.showMetadata Determines whether to include channel metadata in the response. (Default: false)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListOpenChannelsResponse} and HTTP response
     */
    listOpenChannelsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token'],
        'channel_urls': opts['channelUrls'],
        'limit': opts['limit'],
        'custom_types': opts['customTypes'],
        'name_contains': opts['nameContains'],
        'url_contains': opts['urlContains'],
        'show_frozen': opts['showFrozen'],
        'show_metadata': opts['showMetadata']
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListOpenChannelsResponse;
      return this.apiClient.callApi(
        '/v3/open_channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List open channels
     * ## List open channels  This action retrieves a list of [open channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel). You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  [https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-open-channels#1-list-open-channels)
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {String} opts.channelUrls Specifies a comma-separated string of one or more open channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param {Number} opts.limit 
     * @param {String} opts.customTypes Specifies a comma-separated string of one or more custom types to filter open channels. Urlencoding each type is recommended (for example, ?custom_types=urlencoded_type_1,urlencoded_type_2). If not specified, all channels are returned, regardless of their custom type.
     * @param {String} opts.nameContains 
     * @param {String} opts.urlContains 
     * @param {Boolean} opts.showFrozen Determines whether to include frozen channels in the response. Frozen channels are channels where only channel operators are allowed to send messages. (Default: true)
     * @param {Boolean} opts.showMetadata Determines whether to include channel metadata in the response. (Default: false)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOpenChannelsResponse}
     */
    listOpenChannels(opts) {
      return this.listOpenChannelsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register operators to an open channel
     * ## Register operators to an open channel  You can register one or more operators to an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-an-open-channel#1-register-operators-to-an-open-channel
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/RegisterOperatorsToAGroupChannelRequest} opts.registerOperatorsToAGroupChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    registerOperatorsWithHttpInfo(channelUrl, opts) {
      opts = opts || {};
      let postBody = opts['registerOperatorsToAGroupChannelRequest'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling registerOperators");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/operators', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register operators to an open channel
     * ## Register operators to an open channel  You can register one or more operators to an open channel using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/register-operators-to-an-open-channel#1-register-operators-to-an-open-channel
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/RegisterOperatorsToAGroupChannelRequest} opts.registerOperatorsToAGroupChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    registerOperators(channelUrl, opts) {
      return this.registerOperatorsWithHttpInfo(channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unregister operators from an open channel
     * ## Unregister operators from an open channel  You can unregister operators in an open channel but keep them in the channel as participants using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-an-open-channel#1-unregister-operators-from-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl (Required) 
     * @param {String} operatorIds Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids=urlencoded_id_1,urlencoded_id_2.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleteAll Determines whether to unregister all operators and leave them as the participants of the channel. When this is set to true, the operator_ids property isn't effective and doesn't need to be specified in the request. (Default: false)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    unregisterOperatorsWithHttpInfo(channelUrl, operatorIds, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling unregisterOperators");
      }
      // verify the required parameter 'operatorIds' is set
      if (operatorIds === undefined || operatorIds === null) {
        throw new Error("Missing the required parameter 'operatorIds' when calling unregisterOperators");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
        'operator_ids': operatorIds,
        'delete_all': opts['deleteAll']
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/operators', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unregister operators from an open channel
     * ## Unregister operators from an open channel  You can unregister operators in an open channel but keep them in the channel as participants using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/assigning-a-user-role/unregister-operators-from-an-open-channel#1-unregister-operators-from-an-open-channel  `channel_url`   Type: string   Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl (Required) 
     * @param {String} operatorIds Specifies an array of one or more operator IDs to unregister from the channel. The operators in this array remain as participants of the channel after losing their operational roles. Urlencoding each operator ID is recommended. An example of a Urlencoded array would be ?operator_ids=urlencoded_id_1,urlencoded_id_2.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleteAll Determines whether to unregister all operators and leave them as the participants of the channel. When this is set to true, the operator_ids property isn't effective and doesn't need to be specified in the request. (Default: false)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    unregisterOperators(channelUrl, operatorIds, opts) {
      return this.unregisterOperatorsWithHttpInfo(channelUrl, operatorIds, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an open channel
     * ## Update an open channel  You can update information about an open channel using this API. You can add a cover image to a channel to better identify the channel or specify a custom channel type for grouping channels by custom type. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-an-open-channel#1-update-an-open-channel
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAnOpenChannelRequest} opts.updateAnOpenChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendbirdOpenChannel} and HTTP response
     */
    updateAnOpenChannelWithHttpInfo(channelUrl, opts) {
      opts = opts || {};
      let postBody = opts['updateAnOpenChannelRequest'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateAnOpenChannel");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
      };
      let headerParams = {
        'api-token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendbirdOpenChannel;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an open channel
     * ## Update an open channel  You can update information about an open channel using this API. You can add a cover image to a channel to better identify the channel or specify a custom channel type for grouping channels by custom type. See [this page](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-open-channel-vs-group-channel-vs-supergroup-channel) to learn more about channel types.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-an-open-channel#1-update-an-open-channel
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAnOpenChannelRequest} opts.updateAnOpenChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendbirdOpenChannel}
     */
    updateAnOpenChannel(channelUrl, opts) {
      return this.updateAnOpenChannelWithHttpInfo(channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
