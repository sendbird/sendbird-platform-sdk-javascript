"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdAdditionalProperties = _interopRequireDefault(require("../model/SendBirdAdditionalProperties"));

var _ViewUserMetadataResponse = _interopRequireDefault(require("../model/ViewUserMetadataResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Metadata service.
* @module api/MetadataApi
* @version 1.0.3
*/
var MetadataApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MetadataApi. 
  * @alias module:api/MetadataApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MetadataApi(apiClient) {
    _classCallCheck(this, MetadataApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(MetadataApi, [{
    key: "viewChannelMetacounterWithHttpInfo",
    value: function viewChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetacounter");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetacounter");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetacounter");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {
        'key': opts['key'],
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': _SendBirdAdditionalProperties["default"]
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "viewChannelMetacounter",
    value: function viewChannelMetacounter(apiToken, channelType, channelUrl, opts) {
      return this.viewChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
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

  }, {
    key: "viewChannelMetacounterByKeyWithHttpInfo",
    value: function viewChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetacounterByKey");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetacounterByKey");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetacounterByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling viewChannelMetacounterByKey");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'key': key
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': _SendBirdAdditionalProperties["default"]
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "viewChannelMetacounterByKey",
    value: function viewChannelMetacounterByKey(apiToken, channelType, channelUrl, key) {
      return this.viewChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key).then(function (response_and_data) {
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

  }, {
    key: "viewChannelMetadataWithHttpInfo",
    value: function viewChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetadata");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetadata");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetadata");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {
        'key': opts['key'],
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "viewChannelMetadata",
    value: function viewChannelMetadata(apiToken, channelType, channelUrl, opts) {
      return this.viewChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
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

  }, {
    key: "viewChannelMetadataByKeyWithHttpInfo",
    value: function viewChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelMetadataByKey");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewChannelMetadataByKey");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewChannelMetadataByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling viewChannelMetadataByKey");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'key': key
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "viewChannelMetadataByKey",
    value: function viewChannelMetadataByKey(apiToken, channelType, channelUrl, key) {
      return this.viewChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key).then(function (response_and_data) {
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

  }, {
    key: "viewUserMetadataWithHttpInfo",
    value: function viewUserMetadataWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewUserMetadata");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'key': opts['key'],
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewUserMetadataResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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

  }, {
    key: "viewUserMetadata",
    value: function viewUserMetadata(apiToken, userId, opts) {
      return this.viewUserMetadataWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
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

  }, {
    key: "viewUserMetadataByKeyWithHttpInfo",
    value: function viewUserMetadataByKeyWithHttpInfo(apiToken, userId, key) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewUserMetadataByKey");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewUserMetadataByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling viewUserMetadataByKey");
      }

      var pathParams = {
        'user_id': userId,
        'key': key
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/users/{user_id}/metadata/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "viewUserMetadataByKey",
    value: function viewUserMetadataByKey(apiToken, userId, key) {
      return this.viewUserMetadataByKeyWithHttpInfo(apiToken, userId, key).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MetadataApi;
}();

exports["default"] = MetadataApi;