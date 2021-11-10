"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GcAcceptInvitationData = _interopRequireDefault(require("../model/GcAcceptInvitationData"));

var _GcBanUserData = _interopRequireDefault(require("../model/GcBanUserData"));

var _GcCreateChannelData = _interopRequireDefault(require("../model/GcCreateChannelData"));

var _GcDeclineInvitationData = _interopRequireDefault(require("../model/GcDeclineInvitationData"));

var _GcFreezeChannelData = _interopRequireDefault(require("../model/GcFreezeChannelData"));

var _GcHideOrArchiveChannelData = _interopRequireDefault(require("../model/GcHideOrArchiveChannelData"));

var _GcInviteAsMembersData = _interopRequireDefault(require("../model/GcInviteAsMembersData"));

var _GcJoinChannelData = _interopRequireDefault(require("../model/GcJoinChannelData"));

var _GcLeaveChannelData = _interopRequireDefault(require("../model/GcLeaveChannelData"));

var _GcMuteUserData = _interopRequireDefault(require("../model/GcMuteUserData"));

var _GcRegisterOperatorsData = _interopRequireDefault(require("../model/GcRegisterOperatorsData"));

var _GcResetChatHistoryData = _interopRequireDefault(require("../model/GcResetChatHistoryData"));

var _GcUpdateBanByIdData = _interopRequireDefault(require("../model/GcUpdateBanByIdData"));

var _GcUpdateChannelByUrlData = _interopRequireDefault(require("../model/GcUpdateChannelByUrlData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GroupChannel service.
* @module api/GroupChannelApi
* @version 1.0.0
*/
var GroupChannelApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GroupChannelApi. 
  * @alias module:api/GroupChannelApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GroupChannelApi(apiClient) {
    _classCallCheck(this, GroupChannelApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the gcAcceptInvitation operation.
   * @callback module:api/GroupChannelApi~gcAcceptInvitationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Accept an invitation
   * ## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------
   * @param {String} channelUrl 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/GcAcceptInvitationData} opts.gcAcceptInvitationData 
   * @param {module:api/GroupChannelApi~gcAcceptInvitationCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(GroupChannelApi, [{
    key: "gcAcceptInvitation",
    value: function gcAcceptInvitation(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcAcceptInvitationData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcAcceptInvitation");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/accept', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcBanUser operation.
     * @callback module:api/GroupChannelApi~gcBanUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ban a user
     * ## Ban a user  Bans a user from a group channel. A banned user is immediately expelled from a channel and allowed to join the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-ban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcBanUserData} opts.gcBanUserData 
     * @param {module:api/GroupChannelApi~gcBanUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcBanUser",
    value: function gcBanUser(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcBanUserData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcBanUser");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcCancelTheRegistrationOfOperators operation.
     * @callback module:api/GroupChannelApi~gcCancelTheRegistrationOfOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl 
     * @param {Array} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.deleteAll 
     * @param {module:api/GroupChannelApi~gcCancelTheRegistrationOfOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcCancelTheRegistrationOfOperators",
    value: function gcCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcCancelTheRegistrationOfOperators");
      } // verify the required parameter 'operatorIds' is set


      if (operatorIds === undefined || operatorIds === null) {
        throw new Error("Missing the required parameter 'operatorIds' when calling gcCancelTheRegistrationOfOperators");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/operators', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcCheckIfMemberById operation.
     * @callback module:api/GroupChannelApi~gcCheckIfMemberByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if member
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * @param {String} channelUrl 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/GroupChannelApi~gcCheckIfMemberByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcCheckIfMemberById",
    value: function gcCheckIfMemberById(channelUrl, userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcCheckIfMemberById");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling gcCheckIfMemberById");
      }

      var pathParams = {
        'channel_url': channelUrl,
        'user_id': userId
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/members/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcCreateChannel operation.
     * @callback module:api/GroupChannelApi~gcCreateChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a channel
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcCreateChannelData} opts.gcCreateChannelData 
     * @param {module:api/GroupChannelApi~gcCreateChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcCreateChannel",
    value: function gcCreateChannel(opts, callback) {
      opts = opts || {};
      var postBody = opts['gcCreateChannelData'];
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
      return this.apiClient.callApi('/v3/group_channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcDeclineInvitation operation.
     * @callback module:api/GroupChannelApi~gcDeclineInvitationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decline an invitation
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcDeclineInvitationData} opts.gcDeclineInvitationData 
     * @param {module:api/GroupChannelApi~gcDeclineInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcDeclineInvitation",
    value: function gcDeclineInvitation(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcDeclineInvitationData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcDeclineInvitation");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/decline', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcDeleteChannelByUrl operation.
     * @callback module:api/GroupChannelApi~gcDeleteChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/GroupChannelApi~gcDeleteChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcDeleteChannelByUrl",
    value: function gcDeleteChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcDeleteChannelByUrl");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcFreezeChannel operation.
     * @callback module:api/GroupChannelApi~gcFreezeChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes a group channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-freeze-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcFreezeChannelData} opts.gcFreezeChannelData 
     * @param {module:api/GroupChannelApi~gcFreezeChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcFreezeChannel",
    value: function gcFreezeChannel(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcFreezeChannelData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcFreezeChannel");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/freeze', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcHideOrArchiveChannel operation.
     * @callback module:api/GroupChannelApi~gcHideOrArchiveChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Hide or archive a channel
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcHideOrArchiveChannelData} opts.gcHideOrArchiveChannelData 
     * @param {module:api/GroupChannelApi~gcHideOrArchiveChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcHideOrArchiveChannel",
    value: function gcHideOrArchiveChannel(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcHideOrArchiveChannelData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcHideOrArchiveChannel");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/hide', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcInviteAsMembers operation.
     * @callback module:api/GroupChannelApi~gcInviteAsMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invite as members
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcInviteAsMembersData} opts.gcInviteAsMembersData 
     * @param {module:api/GroupChannelApi~gcInviteAsMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcInviteAsMembers",
    value: function gcInviteAsMembers(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcInviteAsMembersData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcInviteAsMembers");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/invite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcJoinChannel operation.
     * @callback module:api/GroupChannelApi~gcJoinChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join a channel
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can’t join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcJoinChannelData} opts.gcJoinChannelData 
     * @param {module:api/GroupChannelApi~gcJoinChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcJoinChannel",
    value: function gcJoinChannel(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcJoinChannelData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcJoinChannel");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/join', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcLeaveChannel operation.
     * @callback module:api/GroupChannelApi~gcLeaveChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave a channel
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcLeaveChannelData} opts.gcLeaveChannelData 
     * @param {module:api/GroupChannelApi~gcLeaveChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcLeaveChannel",
    value: function gcLeaveChannel(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcLeaveChannelData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcLeaveChannel");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/leave', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcListBannedUsers operation.
     * @callback module:api/GroupChannelApi~gcListBannedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List banned users
     * ## List banned users  Retrieves a list of the banned users from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/GroupChannelApi~gcListBannedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcListBannedUsers",
    value: function gcListBannedUsers(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcListChannels operation.
     * @callback module:api/GroupChannelApi~gcListChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List channels
     * ## List channels  Retrieves a list of group channels in the application.  > __Note__: If you want to get a list of a specific user's group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.distinctMode 
     * @param {String} opts.publicMode 
     * @param {String} opts.superMode 
     * @param {Number} opts.createdAfter 
     * @param {Number} opts.createdBefore 
     * @param {Boolean} opts.showEmpty 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {Boolean} opts.showMetadata 
     * @param {Boolean} opts.showFrozen 
     * @param {String} opts.order 
     * @param {String} opts.metadataOrderKey 
     * @param {String} opts.customTypes 
     * @param {String} opts.customTypeStartswith 
     * @param {String} opts.channelUrls 
     * @param {String} opts.name 
     * @param {String} opts.nameContains 
     * @param {String} opts.nameStartswith 
     * @param {String} opts.membersExactlyIn 
     * @param {String} opts.membersIncludeIn 
     * @param {String} opts.queryType 
     * @param {String} opts.membersNickname 
     * @param {String} opts.membersNicknameContains 
     * @param {String} opts.metadataKey 
     * @param {String} opts.metadataValues 
     * @param {String} opts.metadataValueStartswith 
     * @param {String} opts.metacounterKey 
     * @param {String} opts.metacounterValues 
     * @param {String} opts.metacounterValueGt 
     * @param {String} opts.metacounterValueGte 
     * @param {String} opts.metacounterValueLt 
     * @param {String} opts.metacounterValueLte 
     * @param {Boolean} opts.includeSortedMetaarrayInLastMessage 
     * @param {String} opts.customType 
     * @param {Boolean} opts.readReceipt 
     * @param {Boolean} opts.member 
     * @param {Boolean} opts.isDistinct 
     * @param {String} opts.membersIn 
     * @param {String} opts.userId 
     * @param {module:api/GroupChannelApi~gcListChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcListChannels",
    value: function gcListChannels(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'distinct_mode': opts['distinctMode'],
        'public_mode': opts['publicMode'],
        'super_mode': opts['superMode'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'show_empty': opts['showEmpty'],
        'show_member': opts['showMember'],
        'show_delivery_receipt': opts['showDeliveryReceipt'],
        'show_read_receipt': opts['showReadReceipt'],
        'show_metadata': opts['showMetadata'],
        'show_frozen': opts['showFrozen'],
        'order': opts['order'],
        'metadata_order_key': opts['metadataOrderKey'],
        'custom_types': opts['customTypes'],
        'custom_type_startswith': opts['customTypeStartswith'],
        'channel_urls': opts['channelUrls'],
        'name': opts['name'],
        'name_contains': opts['nameContains'],
        'name_startswith': opts['nameStartswith'],
        'members_exactly_in': opts['membersExactlyIn'],
        'members_include_in': opts['membersIncludeIn'],
        'query_type': opts['queryType'],
        'members_nickname': opts['membersNickname'],
        'members_nickname_contains': opts['membersNicknameContains'],
        'metadata_key': opts['metadataKey'],
        'metadata_values': opts['metadataValues'],
        'metadata_value_startswith': opts['metadataValueStartswith'],
        'metacounter_key': opts['metacounterKey'],
        'metacounter_values': opts['metacounterValues'],
        'metacounter_value_gt': opts['metacounterValueGt'],
        'metacounter_value_gte': opts['metacounterValueGte'],
        'metacounter_value_lt': opts['metacounterValueLt'],
        'metacounter_value_lte': opts['metacounterValueLte'],
        'include_sorted_metaarray_in_last_message': opts['includeSortedMetaarrayInLastMessage'],
        'custom_type': opts['customType'],
        'read_receipt': opts['readReceipt'],
        'member': opts['member'],
        'is_distinct': opts['isDistinct'],
        'members_in': opts['membersIn'],
        'user_id': opts['userId']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcListMembers operation.
     * @callback module:api/GroupChannelApi~gcListMembersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List members
     * ## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {String} opts.order 
     * @param {String} opts.operatorFilter 
     * @param {String} opts.memberStateFilter 
     * @param {String} opts.mutedMemberFilter 
     * @param {String} opts.nicknameStartswith 
     * @param {module:api/GroupChannelApi~gcListMembersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcListMembers",
    value: function gcListMembers(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcListMembers");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'show_delivery_receipt': opts['showDeliveryReceipt'],
        'show_read_receipt': opts['showReadReceipt'],
        'order': opts['order'],
        'operator_filter': opts['operatorFilter'],
        'member_state_filter': opts['memberStateFilter'],
        'muted_member_filter': opts['mutedMemberFilter'],
        'nickname_startswith': opts['nicknameStartswith']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcListMutedUsers operation.
     * @callback module:api/GroupChannelApi~gcListMutedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List muted users
     * ## List muted users  Retrieves a list of the muted users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/GroupChannelApi~gcListMutedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcListMutedUsers",
    value: function gcListMutedUsers(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcListOperators operation.
     * @callback module:api/GroupChannelApi~gcListOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List operators
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/GroupChannelApi~gcListOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcListOperators",
    value: function gcListOperators(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcListOperators");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/operators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcMuteUser operation.
     * @callback module:api/GroupChannelApi~gcMuteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in a group channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-mute-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcMuteUserData} opts.gcMuteUserData 
     * @param {module:api/GroupChannelApi~gcMuteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcMuteUser",
    value: function gcMuteUser(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcMuteUserData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcMuteUser");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcRegisterOperators operation.
     * @callback module:api/GroupChannelApi~gcRegisterOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register operators
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcRegisterOperatorsData} opts.gcRegisterOperatorsData 
     * @param {module:api/GroupChannelApi~gcRegisterOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcRegisterOperators",
    value: function gcRegisterOperators(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcRegisterOperatorsData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcRegisterOperators");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/operators', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcResetChatHistory operation.
     * @callback module:api/GroupChannelApi~gcResetChatHistoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset chat history
     * ## Reset chat history  Resets the properties related to a user’s chat history in a group channel, then clears the existing messages in the channel on the user’s side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user’s unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcResetChatHistoryData} opts.gcResetChatHistoryData 
     * @param {module:api/GroupChannelApi~gcResetChatHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcResetChatHistory",
    value: function gcResetChatHistory(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcResetChatHistoryData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcResetChatHistory");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/reset_user_history', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcUnbanUserById operation.
     * @callback module:api/GroupChannelApi~gcUnbanUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/GroupChannelApi~gcUnbanUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcUnbanUserById",
    value: function gcUnbanUserById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUnbanUserById");
      } // verify the required parameter 'bannedUserId' is set


      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling gcUnbanUserById");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban/{banned_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcUnhideOrUnarchiveChannel operation.
     * @callback module:api/GroupChannelApi~gcUnhideOrUnarchiveChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unhide or unarchive a channel
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * @param {String} channelUrl 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.shouldUnhideAll 
     * @param {module:api/GroupChannelApi~gcUnhideOrUnarchiveChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcUnhideOrUnarchiveChannel",
    value: function gcUnhideOrUnarchiveChannel(channelUrl, userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUnhideOrUnarchiveChannel");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling gcUnhideOrUnarchiveChannel");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'user_id': userId,
        'should_unhide_all': opts['shouldUnhideAll']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/hide', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcUnmuteUserById operation.
     * @callback module:api/GroupChannelApi~gcUnmuteUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user within a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unmute-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/GroupChannelApi~gcUnmuteUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcUnmuteUserById",
    value: function gcUnmuteUserById(channelUrl, mutedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUnmuteUserById");
      } // verify the required parameter 'mutedUserId' is set


      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling gcUnmuteUserById");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute/{muted_user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcUpdateBanById operation.
     * @callback module:api/GroupChannelApi~gcUpdateBanByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of the ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcUpdateBanByIdData} opts.gcUpdateBanByIdData 
     * @param {module:api/GroupChannelApi~gcUpdateBanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcUpdateBanById",
    value: function gcUpdateBanById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcUpdateBanByIdData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUpdateBanById");
      } // verify the required parameter 'bannedUserId' is set


      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling gcUpdateBanById");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban/{banned_user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcUpdateChannelByUrl operation.
     * @callback module:api/GroupChannelApi~gcUpdateChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcUpdateChannelByUrlData} opts.gcUpdateChannelByUrlData 
     * @param {module:api/GroupChannelApi~gcUpdateChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcUpdateChannelByUrl",
    value: function gcUpdateChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcUpdateChannelByUrlData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUpdateChannelByUrl");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcViewBanById operation.
     * @callback module:api/GroupChannelApi~gcViewBanByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/GroupChannelApi~gcViewBanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcViewBanById",
    value: function gcViewBanById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcViewBanById");
      } // verify the required parameter 'bannedUserId' is set


      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling gcViewBanById");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/ban/{banned_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcViewChannelByUrl operation.
     * @callback module:api/GroupChannelApi~gcViewChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel
     * ## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.readReceipt 
     * @param {Boolean} opts.member 
     * @param {module:api/GroupChannelApi~gcViewChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcViewChannelByUrl",
    value: function gcViewChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcViewChannelByUrl");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'show_delivery_receipt': opts['showDeliveryReceipt'],
        'show_read_receipt': opts['showReadReceipt'],
        'show_member': opts['showMember'],
        'read_receipt': opts['readReceipt'],
        'member': opts['member']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcViewMuteById operation.
     * @callback module:api/GroupChannelApi~gcViewMuteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-mute ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/GroupChannelApi~gcViewMuteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcViewMuteById",
    value: function gcViewMuteById(channelUrl, mutedUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcViewMuteById");
      } // verify the required parameter 'mutedUserId' is set


      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling gcViewMuteById");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/mute/{muted_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GroupChannelApi;
}();

exports["default"] = GroupChannelApi;