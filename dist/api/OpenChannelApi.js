"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OcBanUserData = _interopRequireDefault(require("../model/OcBanUserData"));

var _OcBanUserResponse = _interopRequireDefault(require("../model/OcBanUserResponse"));

var _OcCreateChannelData = _interopRequireDefault(require("../model/OcCreateChannelData"));

var _OcFreezeChannelData = _interopRequireDefault(require("../model/OcFreezeChannelData"));

var _OcListBannedUsersResponse = _interopRequireDefault(require("../model/OcListBannedUsersResponse"));

var _OcListChannelsResponse = _interopRequireDefault(require("../model/OcListChannelsResponse"));

var _OcListMutedUsersResponse = _interopRequireDefault(require("../model/OcListMutedUsersResponse"));

var _OcListOperatorsResponse = _interopRequireDefault(require("../model/OcListOperatorsResponse"));

var _OcListParticipantsResponse = _interopRequireDefault(require("../model/OcListParticipantsResponse"));

var _OcMuteUserData = _interopRequireDefault(require("../model/OcMuteUserData"));

var _OcRegisterOperatorsData = _interopRequireDefault(require("../model/OcRegisterOperatorsData"));

var _OcUpdateBanByIdData = _interopRequireDefault(require("../model/OcUpdateBanByIdData"));

var _OcUpdateChannelByUrlData = _interopRequireDefault(require("../model/OcUpdateChannelByUrlData"));

var _OcViewMuteByIdResponse = _interopRequireDefault(require("../model/OcViewMuteByIdResponse"));

var _SendBirdOpenChannel = _interopRequireDefault(require("../model/SendBirdOpenChannel"));

var _SendBirdUser = _interopRequireDefault(require("../model/SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
   * Ban a user
   * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
   * @param {String} channelUrl 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/OcBanUserData} opts.ocBanUserData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcBanUserResponse} and HTTP response
   */


  _createClass(OpenChannelApi, [{
    key: "ocBanUserWithHttpInfo",
    value: function ocBanUserWithHttpInfo(channelUrl, opts) {
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
      var returnType = _OcBanUserResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Ban a user
     * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcBanUserData} opts.ocBanUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcBanUserResponse}
     */

  }, {
    key: "ocBanUser",
    value: function ocBanUser(channelUrl, opts) {
      return this.ocBanUserWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl 
     * @param {Array.<String>} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.deleteAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "ocCancelTheRegistrationOfOperatorsWithHttpInfo",
    value: function ocCancelTheRegistrationOfOperatorsWithHttpInfo(channelUrl, operatorIds, opts) {
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
        'operator_ids': this.apiClient.buildCollectionParam(operatorIds, 'multi'),
        'delete_all': opts['deleteAll']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl 
     * @param {Array.<String>} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.deleteAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "ocCancelTheRegistrationOfOperators",
    value: function ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts) {
      return this.ocCancelTheRegistrationOfOperatorsWithHttpInfo(channelUrl, operatorIds, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a channel
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcCreateChannelData} opts.ocCreateChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */

  }, {
    key: "ocCreateChannelWithHttpInfo",
    value: function ocCreateChannelWithHttpInfo(opts) {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a channel
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcCreateChannelData} opts.ocCreateChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */

  }, {
    key: "ocCreateChannel",
    value: function ocCreateChannel(opts) {
      return this.ocCreateChannelWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a channel
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "ocDeleteChannelByUrlWithHttpInfo",
    value: function ocDeleteChannelByUrlWithHttpInfo(channelUrl, opts) {
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a channel
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "ocDeleteChannelByUrl",
    value: function ocDeleteChannelByUrl(channelUrl, opts) {
      return this.ocDeleteChannelByUrlWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcFreezeChannelData} opts.ocFreezeChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */

  }, {
    key: "ocFreezeChannelWithHttpInfo",
    value: function ocFreezeChannelWithHttpInfo(channelUrl, opts) {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/freeze', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcFreezeChannelData} opts.ocFreezeChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */

  }, {
    key: "ocFreezeChannel",
    value: function ocFreezeChannel(channelUrl, opts) {
      return this.ocFreezeChannelWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List banned users
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListBannedUsersResponse} and HTTP response
     */

  }, {
    key: "ocListBannedUsersWithHttpInfo",
    value: function ocListBannedUsersWithHttpInfo(channelUrl, opts) {
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
      var returnType = _OcListBannedUsersResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List banned users
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListBannedUsersResponse}
     */

  }, {
    key: "ocListBannedUsers",
    value: function ocListBannedUsers(channelUrl, opts) {
      return this.ocListBannedUsersWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListChannelsResponse} and HTTP response
     */

  }, {
    key: "ocListChannelsWithHttpInfo",
    value: function ocListChannelsWithHttpInfo(opts) {
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
      var returnType = _OcListChannelsResponse["default"];
      return this.apiClient.callApi('/v3/open_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListChannelsResponse}
     */

  }, {
    key: "ocListChannels",
    value: function ocListChannels(opts) {
      return this.ocListChannelsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List muted users
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListMutedUsersResponse} and HTTP response
     */

  }, {
    key: "ocListMutedUsersWithHttpInfo",
    value: function ocListMutedUsersWithHttpInfo(channelUrl, opts) {
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
      var returnType = _OcListMutedUsersResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List muted users
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListMutedUsersResponse}
     */

  }, {
    key: "ocListMutedUsers",
    value: function ocListMutedUsers(channelUrl, opts) {
      return this.ocListMutedUsersWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List operators
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListOperatorsResponse} and HTTP response
     */

  }, {
    key: "ocListOperatorsWithHttpInfo",
    value: function ocListOperatorsWithHttpInfo(channelUrl, opts) {
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
      var returnType = _OcListOperatorsResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List operators
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListOperatorsResponse}
     */

  }, {
    key: "ocListOperators",
    value: function ocListOperators(channelUrl, opts) {
      return this.ocListOperatorsWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List participants
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListParticipantsResponse} and HTTP response
     */

  }, {
    key: "ocListParticipantsWithHttpInfo",
    value: function ocListParticipantsWithHttpInfo(channelUrl, opts) {
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
      var returnType = _OcListParticipantsResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/participants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List participants
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListParticipantsResponse}
     */

  }, {
    key: "ocListParticipants",
    value: function ocListParticipants(channelUrl, opts) {
      return this.ocListParticipantsWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mute a user
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcMuteUserData} opts.ocMuteUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */

  }, {
    key: "ocMuteUserWithHttpInfo",
    value: function ocMuteUserWithHttpInfo(channelUrl, opts) {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Mute a user
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcMuteUserData} opts.ocMuteUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */

  }, {
    key: "ocMuteUser",
    value: function ocMuteUser(channelUrl, opts) {
      return this.ocMuteUserWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Register operators
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcRegisterOperatorsData} opts.ocRegisterOperatorsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "ocRegisterOperatorsWithHttpInfo",
    value: function ocRegisterOperatorsWithHttpInfo(channelUrl, opts) {
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Register operators
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcRegisterOperatorsData} opts.ocRegisterOperatorsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "ocRegisterOperators",
    value: function ocRegisterOperators(channelUrl, opts) {
      return this.ocRegisterOperatorsWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unban a user
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "ocUnbanUserByIdWithHttpInfo",
    value: function ocUnbanUserByIdWithHttpInfo(channelUrl, bannedUserId, opts) {
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unban a user
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "ocUnbanUserById",
    value: function ocUnbanUserById(channelUrl, bannedUserId, opts) {
      return this.ocUnbanUserByIdWithHttpInfo(channelUrl, bannedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "ocUnmuteUserByIdWithHttpInfo",
    value: function ocUnmuteUserByIdWithHttpInfo(channelUrl, mutedUserId, opts) {
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "ocUnmuteUserById",
    value: function ocUnmuteUserById(channelUrl, mutedUserId, opts) {
      return this.ocUnmuteUserByIdWithHttpInfo(channelUrl, mutedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateBanByIdData} opts.ocUpdateBanByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdUser} and HTTP response
     */

  }, {
    key: "ocUpdateBanByIdWithHttpInfo",
    value: function ocUpdateBanByIdWithHttpInfo(channelUrl, bannedUserId, opts) {
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
      var returnType = _SendBirdUser["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateBanByIdData} opts.ocUpdateBanByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdUser}
     */

  }, {
    key: "ocUpdateBanById",
    value: function ocUpdateBanById(channelUrl, bannedUserId, opts) {
      return this.ocUpdateBanByIdWithHttpInfo(channelUrl, bannedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a channel
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateChannelByUrlData} opts.ocUpdateChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */

  }, {
    key: "ocUpdateChannelByUrlWithHttpInfo",
    value: function ocUpdateChannelByUrlWithHttpInfo(channelUrl, opts) {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a channel
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateChannelByUrlData} opts.ocUpdateChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */

  }, {
    key: "ocUpdateChannelByUrl",
    value: function ocUpdateChannelByUrl(channelUrl, opts) {
      return this.ocUpdateChannelByUrlWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdUser} and HTTP response
     */

  }, {
    key: "ocViewBanByIdWithHttpInfo",
    value: function ocViewBanByIdWithHttpInfo(channelUrl, bannedUserId, opts) {
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
      var returnType = _SendBirdUser["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdUser}
     */

  }, {
    key: "ocViewBanById",
    value: function ocViewBanById(channelUrl, bannedUserId, opts) {
      return this.ocViewBanByIdWithHttpInfo(channelUrl, bannedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a channel
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */

  }, {
    key: "ocViewChannelByUrlWithHttpInfo",
    value: function ocViewChannelByUrlWithHttpInfo(channelUrl, opts) {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a channel
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */

  }, {
    key: "ocViewChannelByUrl",
    value: function ocViewChannelByUrl(channelUrl, opts) {
      return this.ocViewChannelByUrlWithHttpInfo(channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcViewMuteByIdResponse} and HTTP response
     */

  }, {
    key: "ocViewMuteByIdWithHttpInfo",
    value: function ocViewMuteByIdWithHttpInfo(channelUrl, mutedUserId, opts) {
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
      var returnType = _OcViewMuteByIdResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcViewMuteByIdResponse}
     */

  }, {
    key: "ocViewMuteById",
    value: function ocViewMuteById(channelUrl, mutedUserId, opts) {
      return this.ocViewMuteByIdWithHttpInfo(channelUrl, mutedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return OpenChannelApi;
}();

exports["default"] = OpenChannelApi;