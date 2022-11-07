"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BanFromChannelsWithCustomChannelTypesData = _interopRequireDefault(require("../model/BanFromChannelsWithCustomChannelTypesData"));
var _BlockUserData = _interopRequireDefault(require("../model/BlockUserData"));
var _BlockUserResponse = _interopRequireDefault(require("../model/BlockUserResponse"));
var _GcBanUserData = _interopRequireDefault(require("../model/GcBanUserData"));
var _GcBanUserResponse = _interopRequireDefault(require("../model/GcBanUserResponse"));
var _GcFreezeChannelData = _interopRequireDefault(require("../model/GcFreezeChannelData"));
var _GcListBannedUsersResponse = _interopRequireDefault(require("../model/GcListBannedUsersResponse"));
var _GcListMutedUsersResponse = _interopRequireDefault(require("../model/GcListMutedUsersResponse"));
var _GcMuteUserData = _interopRequireDefault(require("../model/GcMuteUserData"));
var _GcUpdateBanByIdData = _interopRequireDefault(require("../model/GcUpdateBanByIdData"));
var _GcUpdateBanByIdResponse = _interopRequireDefault(require("../model/GcUpdateBanByIdResponse"));
var _GcViewBanByIdResponse = _interopRequireDefault(require("../model/GcViewBanByIdResponse"));
var _GcViewMuteByIdResponse = _interopRequireDefault(require("../model/GcViewMuteByIdResponse"));
var _ListBannedChannelsResponse = _interopRequireDefault(require("../model/ListBannedChannelsResponse"));
var _ListBlockedUsersResponse = _interopRequireDefault(require("../model/ListBlockedUsersResponse"));
var _ListMutedChannelsResponse = _interopRequireDefault(require("../model/ListMutedChannelsResponse"));
var _MuteInChannelsWithCustomChannelTypesData = _interopRequireDefault(require("../model/MuteInChannelsWithCustomChannelTypesData"));
var _OcBanUserData = _interopRequireDefault(require("../model/OcBanUserData"));
var _OcBanUserResponse = _interopRequireDefault(require("../model/OcBanUserResponse"));
var _OcDeleteChannelByUrl200Response = _interopRequireDefault(require("../model/OcDeleteChannelByUrl200Response"));
var _OcFreezeChannelData = _interopRequireDefault(require("../model/OcFreezeChannelData"));
var _OcListBannedUsersResponse = _interopRequireDefault(require("../model/OcListBannedUsersResponse"));
var _OcListMutedUsersResponse = _interopRequireDefault(require("../model/OcListMutedUsersResponse"));
var _OcMuteUserData = _interopRequireDefault(require("../model/OcMuteUserData"));
var _OcUpdateBanByIdData = _interopRequireDefault(require("../model/OcUpdateBanByIdData"));
var _OcUpdateBanByIdResponse = _interopRequireDefault(require("../model/OcUpdateBanByIdResponse"));
var _OcViewBanByIdResponse = _interopRequireDefault(require("../model/OcViewBanByIdResponse"));
var _OcViewMuteByIdResponse = _interopRequireDefault(require("../model/OcViewMuteByIdResponse"));
var _SendBirdGroupChannel = _interopRequireDefault(require("../model/SendBirdGroupChannel"));
var _SendBirdOpenChannel = _interopRequireDefault(require("../model/SendBirdOpenChannel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Moderation service.
* @module api/ModerationApi
* @version 0.0.16
*/
var ModerationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ModerationApi. 
  * @alias module:api/ModerationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ModerationApi(apiClient) {
    _classCallCheck(this, ModerationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Ban from channels with custom channel types
   * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
   * @param {String} apiToken 
   * @param {String} userId 
   * @param {Object} opts Optional parameters
   * @param {module:model/BanFromChannelsWithCustomChannelTypesData} opts.banFromChannelsWithCustomChannelTypesData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */
  _createClass(ModerationApi, [{
    key: "banFromChannelsWithCustomChannelTypesWithHttpInfo",
    value: function banFromChannelsWithCustomChannelTypesWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['banFromChannelsWithCustomChannelTypesData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling banFromChannelsWithCustomChannelTypes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling banFromChannelsWithCustomChannelTypes");
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
      var returnType = Object;
      return this.apiClient.callApi('/v3/users/{user_id}/banned_channel_custom_types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Ban from channels with custom channel types
     * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BanFromChannelsWithCustomChannelTypesData} opts.banFromChannelsWithCustomChannelTypesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "banFromChannelsWithCustomChannelTypes",
    value: function banFromChannelsWithCustomChannelTypes(apiToken, userId, opts) {
      return this.banFromChannelsWithCustomChannelTypesWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Block a user
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BlockUserData} opts.blockUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockUserResponse} and HTTP response
     */
  }, {
    key: "blockUserWithHttpInfo",
    value: function blockUserWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['blockUserData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling blockUser");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling blockUser");
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
      var returnType = _BlockUserResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/block', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Block a user
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/BlockUserData} opts.blockUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockUserResponse}
     */
  }, {
    key: "blockUser",
    value: function blockUser(apiToken, userId, opts) {
      return this.blockUserWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Ban a user
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcBanUserData} opts.gcBanUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcBanUserResponse} and HTTP response
     */
  }, {
    key: "gcBanUserWithHttpInfo",
    value: function gcBanUserWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcBanUserData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcBanUser");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcBanUser");
      }
      var pathParams = {
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
      var returnType = _GcBanUserResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Ban a user
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcBanUserData} opts.gcBanUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcBanUserResponse}
     */
  }, {
    key: "gcBanUser",
    value: function gcBanUser(apiToken, channelUrl, opts) {
      return this.gcBanUserWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcFreezeChannelData} opts.gcFreezeChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
     */
  }, {
    key: "gcFreezeChannelWithHttpInfo",
    value: function gcFreezeChannelWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcFreezeChannelData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcFreezeChannel");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcFreezeChannel");
      }
      var pathParams = {
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
      var returnType = _SendBirdGroupChannel["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/freeze', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcFreezeChannelData} opts.gcFreezeChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */
  }, {
    key: "gcFreezeChannel",
    value: function gcFreezeChannel(apiToken, channelUrl, opts) {
      return this.gcFreezeChannelWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List banned users
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcListBannedUsersResponse} and HTTP response
     */
  }, {
    key: "gcListBannedUsersWithHttpInfo",
    value: function gcListBannedUsersWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcListBannedUsers");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcListBannedUsers");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcListBannedUsersResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List banned users
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcListBannedUsersResponse}
     */
  }, {
    key: "gcListBannedUsers",
    value: function gcListBannedUsers(apiToken, channelUrl, opts) {
      return this.gcListBannedUsersWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List muted users
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcListMutedUsersResponse} and HTTP response
     */
  }, {
    key: "gcListMutedUsersWithHttpInfo",
    value: function gcListMutedUsersWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcListMutedUsers");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcListMutedUsers");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcListMutedUsersResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List muted users
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcListMutedUsersResponse}
     */
  }, {
    key: "gcListMutedUsers",
    value: function gcListMutedUsers(apiToken, channelUrl, opts) {
      return this.gcListMutedUsersWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcMuteUserData} opts.gcMuteUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
     */
  }, {
    key: "gcMuteUserWithHttpInfo",
    value: function gcMuteUserWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcMuteUserData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcMuteUser");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcMuteUser");
      }
      var pathParams = {
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
      var returnType = _SendBirdGroupChannel["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcMuteUserData} opts.gcMuteUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */
  }, {
    key: "gcMuteUser",
    value: function gcMuteUser(apiToken, channelUrl, opts) {
      return this.gcMuteUserWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */
  }, {
    key: "gcUnbanUserByIdWithHttpInfo",
    value: function gcUnbanUserByIdWithHttpInfo(apiToken, channelUrl, bannedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcUnbanUserById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUnbanUserById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling gcUnbanUserById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban/{banned_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */
  }, {
    key: "gcUnbanUserById",
    value: function gcUnbanUserById(apiToken, channelUrl, bannedUserId) {
      return this.gcUnbanUserByIdWithHttpInfo(apiToken, channelUrl, bannedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */
  }, {
    key: "gcUnmuteUserByIdWithHttpInfo",
    value: function gcUnmuteUserByIdWithHttpInfo(apiToken, channelUrl, mutedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcUnmuteUserById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUnmuteUserById");
      }
      // verify the required parameter 'mutedUserId' is set
      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling gcUnmuteUserById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute/{muted_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */
  }, {
    key: "gcUnmuteUserById",
    value: function gcUnmuteUserById(apiToken, channelUrl, mutedUserId) {
      return this.gcUnmuteUserByIdWithHttpInfo(apiToken, channelUrl, mutedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcUpdateBanByIdData} opts.gcUpdateBanByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcUpdateBanByIdResponse} and HTTP response
     */
  }, {
    key: "gcUpdateBanByIdWithHttpInfo",
    value: function gcUpdateBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId, opts) {
      opts = opts || {};
      var postBody = opts['gcUpdateBanByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcUpdateBanById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUpdateBanById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling gcUpdateBanById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GcUpdateBanByIdResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban/{banned_user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcUpdateBanByIdData} opts.gcUpdateBanByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcUpdateBanByIdResponse}
     */
  }, {
    key: "gcUpdateBanById",
    value: function gcUpdateBanById(apiToken, channelUrl, bannedUserId, opts) {
      return this.gcUpdateBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcViewBanByIdResponse} and HTTP response
     */
  }, {
    key: "gcViewBanByIdWithHttpInfo",
    value: function gcViewBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcViewBanById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcViewBanById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling gcViewBanById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcViewBanByIdResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban/{banned_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcViewBanByIdResponse}
     */
  }, {
    key: "gcViewBanById",
    value: function gcViewBanById(apiToken, channelUrl, bannedUserId) {
      return this.gcViewBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcViewMuteByIdResponse} and HTTP response
     */
  }, {
    key: "gcViewMuteByIdWithHttpInfo",
    value: function gcViewMuteByIdWithHttpInfo(apiToken, channelUrl, mutedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcViewMuteById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcViewMuteById");
      }
      // verify the required parameter 'mutedUserId' is set
      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling gcViewMuteById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcViewMuteByIdResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute/{muted_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcViewMuteByIdResponse}
     */
  }, {
    key: "gcViewMuteById",
    value: function gcViewMuteById(apiToken, channelUrl, mutedUserId) {
      return this.gcViewMuteByIdWithHttpInfo(apiToken, channelUrl, mutedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List banned channels
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListBannedChannelsResponse} and HTTP response
     */
  }, {
    key: "listBannedChannelsWithHttpInfo",
    value: function listBannedChannelsWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listBannedChannels");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listBannedChannels");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListBannedChannelsResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List banned channels
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBannedChannelsResponse}
     */
  }, {
    key: "listBannedChannels",
    value: function listBannedChannels(apiToken, userId, opts) {
      return this.listBannedChannelsWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List blocked users
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.userIds 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListBlockedUsersResponse} and HTTP response
     */
  }, {
    key: "listBlockedUsersWithHttpInfo",
    value: function listBlockedUsersWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listBlockedUsers");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listBlockedUsers");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'user_ids': opts['userIds'],
        'metadatakey': opts['metadatakey'],
        'metadatavalues_in': opts['metadatavaluesIn']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListBlockedUsersResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/block', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List blocked users
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.userIds 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBlockedUsersResponse}
     */
  }, {
    key: "listBlockedUsers",
    value: function listBlockedUsers(apiToken, userId, opts) {
      return this.listBlockedUsersWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List muted channels
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMutedChannelsResponse} and HTTP response
     */
  }, {
    key: "listMutedChannelsWithHttpInfo",
    value: function listMutedChannelsWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listMutedChannels");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listMutedChannels");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListMutedChannelsResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List muted channels
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMutedChannelsResponse}
     */
  }, {
    key: "listMutedChannels",
    value: function listMutedChannels(apiToken, userId, opts) {
      return this.listMutedChannelsWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Mute in channels with custom channel types
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/MuteInChannelsWithCustomChannelTypesData} opts.muteInChannelsWithCustomChannelTypesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "muteInChannelsWithCustomChannelTypesWithHttpInfo",
    value: function muteInChannelsWithCustomChannelTypesWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['muteInChannelsWithCustomChannelTypesData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling muteInChannelsWithCustomChannelTypes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling muteInChannelsWithCustomChannelTypes");
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
      var returnType = Object;
      return this.apiClient.callApi('/v3/users/{user_id}/muted_channel_custom_types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Mute in channels with custom channel types
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/MuteInChannelsWithCustomChannelTypesData} opts.muteInChannelsWithCustomChannelTypesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "muteInChannelsWithCustomChannelTypes",
    value: function muteInChannelsWithCustomChannelTypes(apiToken, userId, opts) {
      return this.muteInChannelsWithCustomChannelTypesWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Ban a user
     * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcBanUserData} opts.ocBanUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcBanUserResponse} and HTTP response
     */
  }, {
    key: "ocBanUserWithHttpInfo",
    value: function ocBanUserWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['ocBanUserData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocBanUser");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocBanUser");
      }
      var pathParams = {
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
      var returnType = _OcBanUserResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Ban a user
     * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcBanUserData} opts.ocBanUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcBanUserResponse}
     */
  }, {
    key: "ocBanUser",
    value: function ocBanUser(apiToken, channelUrl, opts) {
      return this.ocBanUserWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcFreezeChannelData} opts.ocFreezeChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */
  }, {
    key: "ocFreezeChannelWithHttpInfo",
    value: function ocFreezeChannelWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['ocFreezeChannelData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocFreezeChannel");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocFreezeChannel");
      }
      var pathParams = {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/freeze', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcFreezeChannelData} opts.ocFreezeChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */
  }, {
    key: "ocFreezeChannel",
    value: function ocFreezeChannel(apiToken, channelUrl, opts) {
      return this.ocFreezeChannelWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List banned users
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListBannedUsersResponse} and HTTP response
     */
  }, {
    key: "ocListBannedUsersWithHttpInfo",
    value: function ocListBannedUsersWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocListBannedUsers");
      }
      // verify the required parameter 'channelUrl' is set
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
        'Api-Token': apiToken
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
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListBannedUsersResponse}
     */
  }, {
    key: "ocListBannedUsers",
    value: function ocListBannedUsers(apiToken, channelUrl, opts) {
      return this.ocListBannedUsersWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List muted users
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListMutedUsersResponse} and HTTP response
     */
  }, {
    key: "ocListMutedUsersWithHttpInfo",
    value: function ocListMutedUsersWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocListMutedUsers");
      }
      // verify the required parameter 'channelUrl' is set
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
        'Api-Token': apiToken
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
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListMutedUsersResponse}
     */
  }, {
    key: "ocListMutedUsers",
    value: function ocListMutedUsers(apiToken, channelUrl, opts) {
      return this.ocListMutedUsersWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcMuteUserData} opts.ocMuteUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */
  }, {
    key: "ocMuteUserWithHttpInfo",
    value: function ocMuteUserWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['ocMuteUserData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocMuteUser");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocMuteUser");
      }
      var pathParams = {
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcMuteUserData} opts.ocMuteUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */
  }, {
    key: "ocMuteUser",
    value: function ocMuteUser(apiToken, channelUrl, opts) {
      return this.ocMuteUserWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */
  }, {
    key: "ocUnbanUserByIdWithHttpInfo",
    value: function ocUnbanUserByIdWithHttpInfo(apiToken, channelUrl, bannedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocUnbanUserById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUnbanUserById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocUnbanUserById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */
  }, {
    key: "ocUnbanUserById",
    value: function ocUnbanUserById(apiToken, channelUrl, bannedUserId) {
      return this.ocUnbanUserByIdWithHttpInfo(apiToken, channelUrl, bannedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */
  }, {
    key: "ocUnmuteUserByIdWithHttpInfo",
    value: function ocUnmuteUserByIdWithHttpInfo(apiToken, channelUrl, mutedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocUnmuteUserById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUnmuteUserById");
      }
      // verify the required parameter 'mutedUserId' is set
      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling ocUnmuteUserById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */
  }, {
    key: "ocUnmuteUserById",
    value: function ocUnmuteUserById(apiToken, channelUrl, mutedUserId) {
      return this.ocUnmuteUserByIdWithHttpInfo(apiToken, channelUrl, mutedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcUpdateBanByIdData} opts.ocUpdateBanByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcUpdateBanByIdResponse} and HTTP response
     */
  }, {
    key: "ocUpdateBanByIdWithHttpInfo",
    value: function ocUpdateBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId, opts) {
      opts = opts || {};
      var postBody = opts['ocUpdateBanByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocUpdateBanById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUpdateBanById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocUpdateBanById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OcUpdateBanByIdResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcUpdateBanByIdData} opts.ocUpdateBanByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcUpdateBanByIdResponse}
     */
  }, {
    key: "ocUpdateBanById",
    value: function ocUpdateBanById(apiToken, channelUrl, bannedUserId, opts) {
      return this.ocUpdateBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcViewBanByIdResponse} and HTTP response
     */
  }, {
    key: "ocViewBanByIdWithHttpInfo",
    value: function ocViewBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocViewBanById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewBanById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocViewBanById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcViewBanByIdResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcViewBanByIdResponse}
     */
  }, {
    key: "ocViewBanById",
    value: function ocViewBanById(apiToken, channelUrl, bannedUserId) {
      return this.ocViewBanByIdWithHttpInfo(apiToken, channelUrl, bannedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcViewMuteByIdResponse} and HTTP response
     */
  }, {
    key: "ocViewMuteByIdWithHttpInfo",
    value: function ocViewMuteByIdWithHttpInfo(apiToken, channelUrl, mutedUserId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocViewMuteById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewMuteById");
      }
      // verify the required parameter 'mutedUserId' is set
      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling ocViewMuteById");
      }
      var pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
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
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcViewMuteByIdResponse}
     */
  }, {
    key: "ocViewMuteById",
    value: function ocViewMuteById(apiToken, channelUrl, mutedUserId) {
      return this.ocViewMuteByIdWithHttpInfo(apiToken, channelUrl, mutedUserId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Unblock a user
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} targetId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "unblockUserByIdWithHttpInfo",
    value: function unblockUserByIdWithHttpInfo(apiToken, userId, targetId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling unblockUserById");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unblockUserById");
      }
      // verify the required parameter 'targetId' is set
      if (targetId === undefined || targetId === null) {
        throw new Error("Missing the required parameter 'targetId' when calling unblockUserById");
      }
      var pathParams = {
        'user_id': userId,
        'target_id': targetId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/users/{user_id}/block/{target_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Unblock a user
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} targetId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "unblockUserById",
    value: function unblockUserById(apiToken, userId, targetId) {
      return this.unblockUserByIdWithHttpInfo(apiToken, userId, targetId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return ModerationApi;
}();
exports["default"] = ModerationApi;