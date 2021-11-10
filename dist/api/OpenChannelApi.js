"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OcBanUserData = _interopRequireDefault(require("../model/OcBanUserData"));

var _OcCreateChannelData = _interopRequireDefault(require("../model/OcCreateChannelData"));

var _OcFreezeChannelData = _interopRequireDefault(require("../model/OcFreezeChannelData"));

var _OcMuteUserData = _interopRequireDefault(require("../model/OcMuteUserData"));

var _OcRegisterOperatorsData = _interopRequireDefault(require("../model/OcRegisterOperatorsData"));

var _OcUpdateBanByIdData = _interopRequireDefault(require("../model/OcUpdateBanByIdData"));

var _OcUpdateChannelByUrlData = _interopRequireDefault(require("../model/OcUpdateChannelByUrlData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* OpenChannel service.
* @module api/OpenChannelApi
* @version 1.0.0
*/
var OpenChannelApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OpenChannelApi. 
  * @alias module:api/OpenChannelApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OpenChannelApi(apiClient) {
    _classCallCheck(this, OpenChannelApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the ocBanUser operation.
   * @callback module:api/OpenChannelApi~ocBanUserCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Ban a user
   * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
   * @param {String} channelUrl 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/OcBanUserData} opts.ocBanUserData 
   * @param {module:api/OpenChannelApi~ocBanUserCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(OpenChannelApi, [{
    key: "ocBanUser",
    value: function ocBanUser(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['ocBanUserData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocBanUser");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocCancelTheRegistrationOfOperators operation.
     * @callback module:api/OpenChannelApi~ocCancelTheRegistrationOfOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl 
     * @param {Array} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.deleteAll 
     * @param {module:api/OpenChannelApi~ocCancelTheRegistrationOfOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocCancelTheRegistrationOfOperators",
    value: function ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocCancelTheRegistrationOfOperators");
      } // verify the required parameter 'operatorIds' is set


      if (operatorIds === undefined || operatorIds === null) {
        throw new Error("Missing the required parameter 'operatorIds' when calling ocCancelTheRegistrationOfOperators");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'operator_ids': operatorIds,
        'delete_all': opts['deleteAll']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocCreateChannel operation.
     * @callback module:api/OpenChannelApi~ocCreateChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a channel
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcCreateChannelData} opts.ocCreateChannelData 
     * @param {module:api/OpenChannelApi~ocCreateChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocCreateChannel",
    value: function ocCreateChannel(opts, callback) {
      opts = opts || {};
      var postBody = opts['ocCreateChannelData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocDeleteChannelByUrl operation.
     * @callback module:api/OpenChannelApi~ocDeleteChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocDeleteChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocDeleteChannelByUrl",
    value: function ocDeleteChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocDeleteChannelByUrl");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocFreezeChannel operation.
     * @callback module:api/OpenChannelApi~ocFreezeChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcFreezeChannelData} opts.ocFreezeChannelData 
     * @param {module:api/OpenChannelApi~ocFreezeChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocFreezeChannel",
    value: function ocFreezeChannel(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['ocFreezeChannelData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocFreezeChannel");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/freeze', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocListBannedUsers operation.
     * @callback module:api/OpenChannelApi~ocListBannedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List banned users
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListBannedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocListBannedUsers",
    value: function ocListBannedUsers(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListBannedUsers");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocListChannels operation.
     * @callback module:api/OpenChannelApi~ocListChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List channels
     * ## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.customTypes 
     * @param {String} opts.nameContains 
     * @param {String} opts.urlContains 
     * @param {Boolean} opts.showFrozen 
     * @param {Boolean} opts.showMetadata 
     * @param {String} opts.customType 
     * @param {module:api/OpenChannelApi~ocListChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocListChannels",
    value: function ocListChannels(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'custom_types': opts['customTypes'],
        'name_contains': opts['nameContains'],
        'url_contains': opts['urlContains'],
        'show_frozen': opts['showFrozen'],
        'show_metadata': opts['showMetadata'],
        'custom_type': opts['customType']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocListMutedUsers operation.
     * @callback module:api/OpenChannelApi~ocListMutedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List muted users
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListMutedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocListMutedUsers",
    value: function ocListMutedUsers(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListMutedUsers");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocListOperators operation.
     * @callback module:api/OpenChannelApi~ocListOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List operators
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocListOperators",
    value: function ocListOperators(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListOperators");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocListParticipants operation.
     * @callback module:api/OpenChannelApi~ocListParticipantsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List participants
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListParticipantsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocListParticipants",
    value: function ocListParticipants(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListParticipants");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/participants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocMuteUser operation.
     * @callback module:api/OpenChannelApi~ocMuteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcMuteUserData} opts.ocMuteUserData 
     * @param {module:api/OpenChannelApi~ocMuteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocMuteUser",
    value: function ocMuteUser(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['ocMuteUserData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocMuteUser");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocRegisterOperators operation.
     * @callback module:api/OpenChannelApi~ocRegisterOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register operators
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcRegisterOperatorsData} opts.ocRegisterOperatorsData 
     * @param {module:api/OpenChannelApi~ocRegisterOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocRegisterOperators",
    value: function ocRegisterOperators(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['ocRegisterOperatorsData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocRegisterOperators");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocUnbanUserById operation.
     * @callback module:api/OpenChannelApi~ocUnbanUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocUnbanUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocUnbanUserById",
    value: function ocUnbanUserById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUnbanUserById");
      } // verify the required parameter 'bannedUserId' is set


      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocUnbanUserById");
      }

      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocUnmuteUserById operation.
     * @callback module:api/OpenChannelApi~ocUnmuteUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocUnmuteUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocUnmuteUserById",
    value: function ocUnmuteUserById(channelUrl, mutedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUnmuteUserById");
      } // verify the required parameter 'mutedUserId' is set


      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling ocUnmuteUserById");
      }

      var pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocUpdateBanById operation.
     * @callback module:api/OpenChannelApi~ocUpdateBanByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateBanByIdData} opts.ocUpdateBanByIdData 
     * @param {module:api/OpenChannelApi~ocUpdateBanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocUpdateBanById",
    value: function ocUpdateBanById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['ocUpdateBanByIdData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUpdateBanById");
      } // verify the required parameter 'bannedUserId' is set


      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocUpdateBanById");
      }

      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocUpdateChannelByUrl operation.
     * @callback module:api/OpenChannelApi~ocUpdateChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateChannelByUrlData} opts.ocUpdateChannelByUrlData 
     * @param {module:api/OpenChannelApi~ocUpdateChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocUpdateChannelByUrl",
    value: function ocUpdateChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['ocUpdateChannelByUrlData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUpdateChannelByUrl");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocViewBanById operation.
     * @callback module:api/OpenChannelApi~ocViewBanByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocViewBanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocViewBanById",
    value: function ocViewBanById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewBanById");
      } // verify the required parameter 'bannedUserId' is set


      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocViewBanById");
      }

      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocViewChannelByUrl operation.
     * @callback module:api/OpenChannelApi~ocViewChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocViewChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocViewChannelByUrl",
    value: function ocViewChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewChannelByUrl");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the ocViewMuteById operation.
     * @callback module:api/OpenChannelApi~ocViewMuteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocViewMuteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "ocViewMuteById",
    value: function ocViewMuteById(channelUrl, mutedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewMuteById");
      } // verify the required parameter 'mutedUserId' is set


      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling ocViewMuteById");
      }

      var pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
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
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OpenChannelApi;
}();

exports["default"] = OpenChannelApi;