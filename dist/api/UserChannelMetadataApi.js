"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateChannelMetacounterData = _interopRequireDefault(require("../model/CreateChannelMetacounterData"));

var _CreateChannelMetadataData = _interopRequireDefault(require("../model/CreateChannelMetadataData"));

var _CreateChannelMetadataResponse = _interopRequireDefault(require("../model/CreateChannelMetadataResponse"));

var _CreateUserMetadataData = _interopRequireDefault(require("../model/CreateUserMetadataData"));

var _CreateUserMetadataResponse = _interopRequireDefault(require("../model/CreateUserMetadataResponse"));

var _SendBirdAdditionalProperties = _interopRequireDefault(require("../model/SendBirdAdditionalProperties"));

var _UpdateChannelMetacounterData = _interopRequireDefault(require("../model/UpdateChannelMetacounterData"));

var _UpdateChannelMetadataData = _interopRequireDefault(require("../model/UpdateChannelMetadataData"));

var _UpdateUserMetadataData = _interopRequireDefault(require("../model/UpdateUserMetadataData"));

var _UpdateUserMetadataResponse = _interopRequireDefault(require("../model/UpdateUserMetadataResponse"));

var _ViewUserMetadataResponse = _interopRequireDefault(require("../model/ViewUserMetadataResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* UserChannelMetadata service.
* @module api/UserChannelMetadataApi
* @version 1.0.1
*/
var UserChannelMetadataApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserChannelMetadataApi. 
  * @alias module:api/UserChannelMetadataApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserChannelMetadataApi(apiClient) {
    _classCallCheck(this, UserChannelMetadataApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a channel metacounter
   * ## Create a channel metacounter  Creates a channel metacounter's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metacounter ----------------------------
   * @param {String} apiToken 
   * @param {String} channelType 
   * @param {String} channelUrl 
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateChannelMetacounterData} opts.createChannelMetacounterData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>} and HTTP response
   */


  _createClass(UserChannelMetadataApi, [{
    key: "createChannelMetacounterWithHttpInfo",
    value: function createChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['createChannelMetacounterData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createChannelMetacounter");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling createChannelMetacounter");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling createChannelMetacounter");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': _SendBirdAdditionalProperties["default"]
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a channel metacounter
     * ## Create a channel metacounter  Creates a channel metacounter's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metacounter ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChannelMetacounterData} opts.createChannelMetacounterData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>}
     */

  }, {
    key: "createChannelMetacounter",
    value: function createChannelMetacounter(apiToken, channelType, channelUrl, opts) {
      return this.createChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a channel metadata
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChannelMetadataData} opts.createChannelMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateChannelMetadataResponse} and HTTP response
     */

  }, {
    key: "createChannelMetadataWithHttpInfo",
    value: function createChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['createChannelMetadataData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createChannelMetadata");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling createChannelMetadata");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling createChannelMetadata");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateChannelMetadataResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a channel metadata
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChannelMetadataData} opts.createChannelMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateChannelMetadataResponse}
     */

  }, {
    key: "createChannelMetadata",
    value: function createChannelMetadata(apiToken, channelType, channelUrl, opts) {
      return this.createChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a user metadata
     * ## Create a user metadata  Creates a user metadata's items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserMetadataData} opts.createUserMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateUserMetadataResponse} and HTTP response
     */

  }, {
    key: "createUserMetadataWithHttpInfo",
    value: function createUserMetadataWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['createUserMetadataData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createUserMetadata");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateUserMetadataResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a user metadata
     * ## Create a user metadata  Creates a user metadata's items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserMetadataData} opts.createUserMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateUserMetadataResponse}
     */

  }, {
    key: "createUserMetadata",
    value: function createUserMetadata(apiToken, userId, opts) {
      return this.createUserMetadataWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a channel metacounter - When deleting all items of a channel metacounter
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteChannelMetacounterWithHttpInfo",
    value: function deleteChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteChannelMetacounter");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling deleteChannelMetacounter");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling deleteChannelMetacounter");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a channel metacounter - When deleting all items of a channel metacounter
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteChannelMetacounter",
    value: function deleteChannelMetacounter(apiToken, channelType, channelUrl) {
      return this.deleteChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteChannelMetacounterByKeyWithHttpInfo",
    value: function deleteChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteChannelMetacounterByKey");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling deleteChannelMetacounterByKey");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling deleteChannelMetacounterByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteChannelMetacounterByKey");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter/{key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteChannelMetacounterByKey",
    value: function deleteChannelMetacounterByKey(apiToken, channelType, channelUrl, key) {
      return this.deleteChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a channel metadata - When deleting all items of a channel metadata
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteChannelMetadataWithHttpInfo",
    value: function deleteChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteChannelMetadata");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling deleteChannelMetadata");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling deleteChannelMetadata");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {
        'key': opts['key']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a channel metadata - When deleting all items of a channel metadata
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteChannelMetadata",
    value: function deleteChannelMetadata(apiToken, channelType, channelUrl, opts) {
      return this.deleteChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a channel metadata - When deleting a specific item of a channel metadata by its key
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteChannelMetadataByKeyWithHttpInfo",
    value: function deleteChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteChannelMetadataByKey");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling deleteChannelMetadataByKey");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling deleteChannelMetadataByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteChannelMetadataByKey");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata/{key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a channel metadata - When deleting a specific item of a channel metadata by its key
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteChannelMetadataByKey",
    value: function deleteChannelMetadataByKey(apiToken, channelType, channelUrl, key) {
      return this.deleteChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a user metadata - When deleting all items of a user metadata
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteUserMetadataWithHttpInfo",
    value: function deleteUserMetadataWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteUserMetadata");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'key': opts['key']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a user metadata - When deleting all items of a user metadata
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteUserMetadata",
    value: function deleteUserMetadata(apiToken, userId, opts) {
      return this.deleteUserMetadataWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a user metadata - When deleting a specific item of a user metadata by its key
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteUserMetadataByKeyWithHttpInfo",
    value: function deleteUserMetadataByKeyWithHttpInfo(apiToken, userId, key) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteUserMetadataByKey");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserMetadataByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteUserMetadataByKey");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata/{key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a user metadata - When deleting a specific item of a user metadata by its key
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteUserMetadataByKey",
    value: function deleteUserMetadataByKey(apiToken, userId, key) {
      return this.deleteUserMetadataByKeyWithHttpInfo(apiToken, userId, key).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateChannelMetacounterData} opts.updateChannelMetacounterData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>} and HTTP response
     */

  }, {
    key: "updateChannelMetacounterWithHttpInfo",
    value: function updateChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['updateChannelMetacounterData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateChannelMetacounter");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling updateChannelMetacounter");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateChannelMetacounter");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': _SendBirdAdditionalProperties["default"]
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateChannelMetacounterData} opts.updateChannelMetacounterData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: SendBirdAdditionalProperties}>}
     */

  }, {
    key: "updateChannelMetacounter",
    value: function updateChannelMetacounter(apiToken, channelType, channelUrl, opts) {
      return this.updateChannelMetacounterWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a channel metacounter - When updating a specific item of a channel metacounter by its key
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */

  }, {
    key: "updateChannelMetacounterByKeyWithHttpInfo",
    value: function updateChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateChannelMetacounterByKey");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling updateChannelMetacounterByKey");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateChannelMetacounterByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling updateChannelMetacounterByKey");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a channel metacounter - When updating a specific item of a channel metacounter by its key
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "updateChannelMetacounterByKey",
    value: function updateChannelMetacounterByKey(apiToken, channelType, channelUrl, key, opts) {
      return this.updateChannelMetacounterByKeyWithHttpInfo(apiToken, channelType, channelUrl, key, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateChannelMetadataData} opts.updateChannelMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */

  }, {
    key: "updateChannelMetadataWithHttpInfo",
    value: function updateChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['updateChannelMetadataData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateChannelMetadata");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling updateChannelMetadata");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateChannelMetadata");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateChannelMetadataData} opts.updateChannelMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "updateChannelMetadata",
    value: function updateChannelMetadata(apiToken, channelType, channelUrl, opts) {
      return this.updateChannelMetadataWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a channel metadata - When updating a specific item of a channel metadata by its key
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */

  }, {
    key: "updateChannelMetadataByKeyWithHttpInfo",
    value: function updateChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateChannelMetadataByKey");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling updateChannelMetadataByKey");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateChannelMetadataByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling updateChannelMetadataByKey");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a channel metadata - When updating a specific item of a channel metadata by its key
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "updateChannelMetadataByKey",
    value: function updateChannelMetadataByKey(apiToken, channelType, channelUrl, key, opts) {
      return this.updateChannelMetadataByKeyWithHttpInfo(apiToken, channelType, channelUrl, key, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateUserMetadataData} opts.updateUserMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateUserMetadataResponse} and HTTP response
     */

  }, {
    key: "updateUserMetadataWithHttpInfo",
    value: function updateUserMetadataWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['updateUserMetadataData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateUserMetadata");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateUserMetadataResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateUserMetadataData} opts.updateUserMetadataData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateUserMetadataResponse}
     */

  }, {
    key: "updateUserMetadata",
    value: function updateUserMetadata(apiToken, userId, opts) {
      return this.updateUserMetadataWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a user metadata - When updating a specific item of a user metadata by its key
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */

  }, {
    key: "updateUserMetadataByKeyWithHttpInfo",
    value: function updateUserMetadataByKeyWithHttpInfo(apiToken, userId, key, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateUserMetadataByKey");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserMetadataByKey");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling updateUserMetadataByKey");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/users/{user_id}/metadata/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a user metadata - When updating a specific item of a user metadata by its key
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "updateUserMetadataByKey",
    value: function updateUserMetadataByKey(apiToken, userId, key, opts) {
      return this.updateUserMetadataByKeyWithHttpInfo(apiToken, userId, key, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
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

  }, {
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

  return UserChannelMetadataApi;
}();

exports["default"] = UserChannelMetadataApi;