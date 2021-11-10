"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateChannelMetacounterData = _interopRequireDefault(require("../model/CreateChannelMetacounterData"));

var _CreateChannelMetadataData = _interopRequireDefault(require("../model/CreateChannelMetadataData"));

var _CreateUserMetadataData = _interopRequireDefault(require("../model/CreateUserMetadataData"));

var _UpdateChannelMetacounterData = _interopRequireDefault(require("../model/UpdateChannelMetacounterData"));

var _UpdateChannelMetadataData = _interopRequireDefault(require("../model/UpdateChannelMetadataData"));

var _UpdateUserMetadataData = _interopRequireDefault(require("../model/UpdateUserMetadataData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserChannelMetadata service.
* @module api/UserChannelMetadataApi
* @version 1.0.0
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
   * Callback function to receive the result of the createChannelMetacounter operation.
   * @callback module:api/UserChannelMetadataApi~createChannelMetacounterCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a channel metacounter
   * ## Create a channel metacounter  Creates a channel metacounter's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metacounter ----------------------------
   * @param {String} channelType 
   * @param {String} channelUrl 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/CreateChannelMetacounterData} opts.createChannelMetacounterData 
   * @param {module:api/UserChannelMetadataApi~createChannelMetacounterCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(UserChannelMetadataApi, [{
    key: "createChannelMetacounter",
    value: function createChannelMetacounter(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['createChannelMetacounterData']; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createChannelMetadata operation.
     * @callback module:api/UserChannelMetadataApi~createChannelMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a channel metadata
     * ## Create a channel metadata  Creates a channel metadata's items to store in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-channel-metadata ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateChannelMetadataData} opts.createChannelMetadataData 
     * @param {module:api/UserChannelMetadataApi~createChannelMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createChannelMetadata",
    value: function createChannelMetadata(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['createChannelMetadataData']; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createUserMetadata operation.
     * @callback module:api/UserChannelMetadataApi~createUserMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user metadata
     * ## Create a user metadata  Creates a user metadata's items to store in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-create-a-user-metadata ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateUserMetadataData} opts.createUserMetadataData 
     * @param {module:api/UserChannelMetadataApi~createUserMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createUserMetadata",
    value: function createUserMetadata(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['createUserMetadataData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteChannelMetacounter operation.
     * @callback module:api/UserChannelMetadataApi~deleteChannelMetacounterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel metacounter - When deleting all items of a channel metacounter
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~deleteChannelMetacounterCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteChannelMetacounter",
    value: function deleteChannelMetacounter(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteChannelMetacounterByKey operation.
     * @callback module:api/UserChannelMetadataApi~deleteChannelMetacounterByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel metacounter - When deleting a specific item of a channel metacounter by its key
     * ## Delete a channel metacounter  Deletes a channel metacounter's item that is stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metacounter to delete.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~deleteChannelMetacounterByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteChannelMetacounterByKey",
    value: function deleteChannelMetacounterByKey(channelType, channelUrl, key, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter/{key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteChannelMetadata operation.
     * @callback module:api/UserChannelMetadataApi~deleteChannelMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel metadata - When deleting all items of a channel metadata
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.key 
     * @param {module:api/UserChannelMetadataApi~deleteChannelMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteChannelMetadata",
    value: function deleteChannelMetadata(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteChannelMetadataByKey operation.
     * @callback module:api/UserChannelMetadataApi~deleteChannelMetadataByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel metadata - When deleting a specific item of a channel metadata by its key
     * ## Delete a channel metadata  Deletes a channel metadata's one or all items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which has the metadata to delete.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~deleteChannelMetadataByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteChannelMetadataByKey",
    value: function deleteChannelMetadataByKey(channelType, channelUrl, key, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata/{key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserMetadata operation.
     * @callback module:api/UserChannelMetadataApi~deleteUserMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user metadata - When deleting all items of a user metadata
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.key 
     * @param {module:api/UserChannelMetadataApi~deleteUserMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUserMetadata",
    value: function deleteUserMetadata(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserMetadataByKey operation.
     * @callback module:api/UserChannelMetadataApi~deleteUserMetadataByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user metadata - When deleting a specific item of a user metadata by its key
     * ## Delete a user metadata  Deletes a user metadata's one or all items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-delete-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user who has the metadata to delete.
     * @param {String} userId 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~deleteUserMetadataByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUserMetadataByKey",
    value: function deleteUserMetadataByKey(userId, key, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata/{key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateChannelMetacounter operation.
     * @callback module:api/UserChannelMetadataApi~updateChannelMetacounterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel metacounter - When updating existing items of a channel metacounter by their keys or adding new items to the metacounter
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateChannelMetacounterData} opts.updateChannelMetacounterData 
     * @param {module:api/UserChannelMetadataApi~updateChannelMetacounterCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateChannelMetacounter",
    value: function updateChannelMetacounter(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateChannelMetacounterData']; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateChannelMetacounterByKey operation.
     * @callback module:api/UserChannelMetadataApi~updateChannelMetacounterByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel metacounter - When updating a specific item of a channel metacounter by its key
     * ## Update a channel metacounter  Updates existing items of a channel metacounter by their keys, or adds new items to the metacounter.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Object} opts.body 
     * @param {module:api/UserChannelMetadataApi~updateChannelMetacounterByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateChannelMetacounterByKey",
    value: function updateChannelMetacounterByKey(channelType, channelUrl, key, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateChannelMetadata operation.
     * @callback module:api/UserChannelMetadataApi~updateChannelMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel metadata - When updating existing items of a channel metadata by their keys or adding new items to the metadata
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateChannelMetadataData} opts.updateChannelMetadataData 
     * @param {module:api/UserChannelMetadataApi~updateChannelMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateChannelMetadata",
    value: function updateChannelMetadata(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateChannelMetadataData']; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateChannelMetadataByKey operation.
     * @callback module:api/UserChannelMetadataApi~updateChannelMetadataByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel metadata - When updating a specific item of a channel metadata by its key
     * ## Update a channel metadata  Updates existing items of a channel metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Object} opts.body 
     * @param {module:api/UserChannelMetadataApi~updateChannelMetadataByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateChannelMetadataByKey",
    value: function updateChannelMetadataByKey(channelType, channelUrl, key, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUserMetadata operation.
     * @callback module:api/UserChannelMetadataApi~updateUserMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user metadata - When updating existing items of a user metadata by their keys or adding new items to the metadata
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateUserMetadataData} opts.updateUserMetadataData 
     * @param {module:api/UserChannelMetadataApi~updateUserMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateUserMetadata",
    value: function updateUserMetadata(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateUserMetadataData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUserMetadataByKey operation.
     * @callback module:api/UserChannelMetadataApi~updateUserMetadataByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user metadata - When updating a specific item of a user metadata by its key
     * ## Update a user metadata  Updates existing items of a user metadata by their keys, or adds new items to the metadata.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-update-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to update the metadata in.
     * @param {String} userId 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Object} opts.body 
     * @param {module:api/UserChannelMetadataApi~updateUserMetadataByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateUserMetadataByKey",
    value: function updateUserMetadataByKey(userId, key, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewChannelMetacounter operation.
     * @callback module:api/UserChannelMetadataApi~viewChannelMetacounterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel metacounter - When retrieving all items of a channel metacounter
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.key 
     * @param {Array} opts.keys 
     * @param {module:api/UserChannelMetadataApi~viewChannelMetacounterCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewChannelMetacounter",
    value: function viewChannelMetacounter(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'keys': opts['keys']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewChannelMetacounterByKey operation.
     * @callback module:api/UserChannelMetadataApi~viewChannelMetacounterByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel metacounter - When retrieving a specific item of a channel metacounter by its key
     * ## View a channel metacounter  Retrieves channel metacounter's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metacounter ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~viewChannelMetacounterByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewChannelMetacounterByKey",
    value: function viewChannelMetacounterByKey(channelType, channelUrl, key, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metacounter/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewChannelMetadata operation.
     * @callback module:api/UserChannelMetadataApi~viewChannelMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel metadata - When retrieving all items of a channel metadata
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.key 
     * @param {Array} opts.keys 
     * @param {module:api/UserChannelMetadataApi~viewChannelMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewChannelMetadata",
    value: function viewChannelMetadata(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'keys': opts['keys']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewChannelMetadataByKey operation.
     * @callback module:api/UserChannelMetadataApi~viewChannelMetadataByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel metadata - When retrieving a specific item of a channel metadata by its key
     * ## View a channel metadata  Retrieves a channel metadata's one or more items that are stored in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~viewChannelMetadataByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewChannelMetadataByKey",
    value: function viewChannelMetadataByKey(channelType, channelUrl, key, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/metadata/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewUserMetadata operation.
     * @callback module:api/UserChannelMetadataApi~viewUserMetadataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a user metadata - When retrieving all items of a user metadata
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.key 
     * @param {Array} opts.keys 
     * @param {module:api/UserChannelMetadataApi~viewUserMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewUserMetadata",
    value: function viewUserMetadata(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewUserMetadata");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'key': opts['key'],
        'keys': opts['keys']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewUserMetadataByKey operation.
     * @callback module:api/UserChannelMetadataApi~viewUserMetadataByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a user metadata - When retrieving a specific item of a user metadata by its key
     * ## View a user metadata  Retrieves a user metadata's one or more items that are stored in a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-user-metadata ----------------------------   `user_id`      Type: string      Description: Specifies the ID of the user to retrieve the metadata in.
     * @param {String} userId 
     * @param {String} key 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserChannelMetadataApi~viewUserMetadataByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewUserMetadataByKey",
    value: function viewUserMetadataByKey(userId, key, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/metadata/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserChannelMetadataApi;
}();

exports["default"] = UserChannelMetadataApi;