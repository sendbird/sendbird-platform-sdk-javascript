"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GcAcceptInvitationData = _interopRequireDefault(require("../model/GcAcceptInvitationData"));

var _GcCheckIfMemberByIdResponse = _interopRequireDefault(require("../model/GcCheckIfMemberByIdResponse"));

var _GcCreateChannelData = _interopRequireDefault(require("../model/GcCreateChannelData"));

var _GcDeclineInvitationData = _interopRequireDefault(require("../model/GcDeclineInvitationData"));

var _GcHideOrArchiveChannelData = _interopRequireDefault(require("../model/GcHideOrArchiveChannelData"));

var _GcInviteAsMembersData = _interopRequireDefault(require("../model/GcInviteAsMembersData"));

var _GcJoinChannelData = _interopRequireDefault(require("../model/GcJoinChannelData"));

var _GcLeaveChannelData = _interopRequireDefault(require("../model/GcLeaveChannelData"));

var _GcListChannelsResponse = _interopRequireDefault(require("../model/GcListChannelsResponse"));

var _GcListMembersResponse = _interopRequireDefault(require("../model/GcListMembersResponse"));

var _GcListOperatorsResponse = _interopRequireDefault(require("../model/GcListOperatorsResponse"));

var _GcRegisterOperatorsData = _interopRequireDefault(require("../model/GcRegisterOperatorsData"));

var _GcRegisterOperatorsResponse = _interopRequireDefault(require("../model/GcRegisterOperatorsResponse"));

var _GcResetChatHistoryData = _interopRequireDefault(require("../model/GcResetChatHistoryData"));

var _GcResetChatHistoryResponse = _interopRequireDefault(require("../model/GcResetChatHistoryResponse"));

var _GcUpdateChannelByUrlData = _interopRequireDefault(require("../model/GcUpdateChannelByUrlData"));

var _OcDeleteChannelByUrl200Response = _interopRequireDefault(require("../model/OcDeleteChannelByUrl200Response"));

var _SendBirdGroupChannel = _interopRequireDefault(require("../model/SendBirdGroupChannel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* GroupChannel service.
* @module api/GroupChannelApi
* @version 0.0.13
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
   * Accept an invitation
   * ## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------
   * @param {String} apiToken 
   * @param {String} channelUrl 
   * @param {Object} opts Optional parameters
   * @param {module:model/GcAcceptInvitationData} opts.gcAcceptInvitationData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
   */


  _createClass(GroupChannelApi, [{
    key: "gcAcceptInvitationWithHttpInfo",
    value: function gcAcceptInvitationWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcAcceptInvitationData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcAcceptInvitation");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcAcceptInvitation");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/accept', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Accept an invitation
     * ## Accept an invitation  Accepts an invitation from a [private](#4-private-vs-public) group channel for a user to join. Since a user is allowed to join up to 2,000 group channels, the invitation to a user who already belongs to a maximum number of group channels will be canceled automatically.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-accept-an-invitation ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcAcceptInvitationData} opts.gcAcceptInvitationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */

  }, {
    key: "gcAcceptInvitation",
    value: function gcAcceptInvitation(apiToken, channelUrl, opts) {
      return this.gcAcceptInvitationWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Array.<String>} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleteAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */

  }, {
    key: "gcCancelTheRegistrationOfOperatorsWithHttpInfo",
    value: function gcCancelTheRegistrationOfOperatorsWithHttpInfo(apiToken, channelUrl, operatorIds, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcCancelTheRegistrationOfOperators");
      } // verify the required parameter 'channelUrl' is set


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
        'operator_ids': this.apiClient.buildCollectionParam(operatorIds, 'multi'),
        'delete_all': opts['deleteAll']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/operators', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from a group channel but leave them as members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Array.<String>} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleteAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */

  }, {
    key: "gcCancelTheRegistrationOfOperators",
    value: function gcCancelTheRegistrationOfOperators(apiToken, channelUrl, operatorIds, opts) {
      return this.gcCancelTheRegistrationOfOperatorsWithHttpInfo(apiToken, channelUrl, operatorIds, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Check if member
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcCheckIfMemberByIdResponse} and HTTP response
     */

  }, {
    key: "gcCheckIfMemberByIdWithHttpInfo",
    value: function gcCheckIfMemberByIdWithHttpInfo(apiToken, channelUrl, userId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcCheckIfMemberById");
      } // verify the required parameter 'channelUrl' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcCheckIfMemberByIdResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/members/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Check if member
     * ## Check if member  Checks whether the user is a member of the group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-check-if-member ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcCheckIfMemberByIdResponse}
     */

  }, {
    key: "gcCheckIfMemberById",
    value: function gcCheckIfMemberById(apiToken, channelUrl, userId) {
      return this.gcCheckIfMemberByIdWithHttpInfo(apiToken, channelUrl, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a channel
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcCreateChannelData} opts.gcCreateChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
     */

  }, {
    key: "gcCreateChannelWithHttpInfo",
    value: function gcCreateChannelWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['gcCreateChannelData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcCreateChannel");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdGroupChannel["default"];
      return this.apiClient.callApi('/v3/group_channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a channel
     * ## Create a channel  Creates a new group channel.  > If you are creating a 1-on-1 direct messaging channel for a user, it is recommended that you turn on the `distinct` property. If the property is turned off, a user can create a new channel even if they have had the previous chat between them, and therefore can't see previously sent messages or data in the new channel. On the other hand, if the `distinct` property is turned on, every 1-on-1 conversation between the same two users occurs within the same channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcCreateChannelData} opts.gcCreateChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */

  }, {
    key: "gcCreateChannel",
    value: function gcCreateChannel(apiToken, opts) {
      return this.gcCreateChannelWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Decline an invitation
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcDeclineInvitationData} opts.gcDeclineInvitationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */

  }, {
    key: "gcDeclineInvitationWithHttpInfo",
    value: function gcDeclineInvitationWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcDeclineInvitationData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcDeclineInvitation");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcDeclineInvitation");
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
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/decline', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Decline an invitation
     * ## Decline an invitation  Declines an invitation for a user to not join a [private](#4-private-vs-public) group channel.  > __Note__: This action is effective only when the `auto_accept` property of an application is set to false. You can change the value of the property using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, or [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-decline-an-invitation ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcDeclineInvitationData} opts.gcDeclineInvitationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */

  }, {
    key: "gcDeclineInvitation",
    value: function gcDeclineInvitation(apiToken, channelUrl, opts) {
      return this.gcDeclineInvitationWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a channel
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */

  }, {
    key: "gcDeleteChannelByUrlWithHttpInfo",
    value: function gcDeleteChannelByUrlWithHttpInfo(apiToken, channelUrl) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcDeleteChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcDeleteChannelByUrl");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a channel
     * ## Delete a channel  Deletes a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-delete-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */

  }, {
    key: "gcDeleteChannelByUrl",
    value: function gcDeleteChannelByUrl(apiToken, channelUrl) {
      return this.gcDeleteChannelByUrlWithHttpInfo(apiToken, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Hide or archive a channel
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcHideOrArchiveChannelData} opts.gcHideOrArchiveChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */

  }, {
    key: "gcHideOrArchiveChannelWithHttpInfo",
    value: function gcHideOrArchiveChannelWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcHideOrArchiveChannelData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcHideOrArchiveChannel");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcHideOrArchiveChannel");
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
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/hide', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Hide or archive a channel
     * ## Hide or archive a channel  Hides or archives a channel from the channel list of either a specific user or entire channel members. Normally, a hidden channel comes back and shows up in the channel list when a member in the channel sends a new message. This automatically-triggered behavior is intended for users who want to temporarily remove a channel from their list because [leaving the channel](#2-leave-the-channel) would delete all the past messages and stored data.  You can also leave out a channel from the list and archive the channel. The channel doesn't appear even when receiving a new message from other member.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-hide-or-archive-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcHideOrArchiveChannelData} opts.gcHideOrArchiveChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */

  }, {
    key: "gcHideOrArchiveChannel",
    value: function gcHideOrArchiveChannel(apiToken, channelUrl, opts) {
      return this.gcHideOrArchiveChannelWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Invite as members
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcInviteAsMembersData} opts.gcInviteAsMembersData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
     */

  }, {
    key: "gcInviteAsMembersWithHttpInfo",
    value: function gcInviteAsMembersWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcInviteAsMembersData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcInviteAsMembers");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcInviteAsMembers");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/invite', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Invite as members
     * ## Invite as members  Invites one or more users as members into the group channel.  > __Note__: By default, users in your application automatically join a [private](#4-private-vs-public) group channel promptly from an invitation without having to accept it. If you want to give them the option to decide whether to accept or decline an invitation, you should set the value of channel invitation preference to false through the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action. Or using the [update a user's channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can also allow the option individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcInviteAsMembersData} opts.gcInviteAsMembersData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */

  }, {
    key: "gcInviteAsMembers",
    value: function gcInviteAsMembers(apiToken, channelUrl, opts) {
      return this.gcInviteAsMembersWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Join a channel
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcJoinChannelData} opts.gcJoinChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "gcJoinChannelWithHttpInfo",
    value: function gcJoinChannelWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcJoinChannelData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcJoinChannel");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcJoinChannel");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/join', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Join a channel
     * ## Join a channel  Allows a user to join a [public](#4-private-vs-public) group channel. Since a user is allowed to join up to 2,000 group channels, a user who already belongs to a maximum number of group channels can't join a new channel.  > __Note__: This action is only permitted for public group channels where the `is_public` property is true.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-join-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcJoinChannelData} opts.gcJoinChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "gcJoinChannel",
    value: function gcJoinChannel(apiToken, channelUrl, opts) {
      return this.gcJoinChannelWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Leave a channel
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcLeaveChannelData} opts.gcLeaveChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */

  }, {
    key: "gcLeaveChannelWithHttpInfo",
    value: function gcLeaveChannelWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcLeaveChannelData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcLeaveChannel");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcLeaveChannel");
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
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/leave', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Leave a channel
     * ## Leave a channel  Makes one or more members leave a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-leave-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcLeaveChannelData} opts.gcLeaveChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */

  }, {
    key: "gcLeaveChannel",
    value: function gcLeaveChannel(apiToken, channelUrl, opts) {
      return this.gcLeaveChannelWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List channels
     * ## List channels  Retrieves a list of group channels in the application.  > __Note__: If you want to get a list of a specific user's group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcListChannelsResponse} and HTTP response
     */

  }, {
    key: "gcListChannelsWithHttpInfo",
    value: function gcListChannelsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcListChannels");
      }

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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcListChannelsResponse["default"];
      return this.apiClient.callApi('/v3/group_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List channels
     * ## List channels  Retrieves a list of group channels in the application.  > __Note__: If you want to get a list of a specific user's group channels, use the [list my group channels](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-channels ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcListChannelsResponse}
     */

  }, {
    key: "gcListChannels",
    value: function gcListChannels(apiToken, opts) {
      return this.gcListChannelsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List members
     * ## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {String} opts.order 
     * @param {String} opts.operatorFilter 
     * @param {String} opts.memberStateFilter 
     * @param {String} opts.mutedMemberFilter 
     * @param {String} opts.nicknameStartswith 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcListMembersResponse} and HTTP response
     */

  }, {
    key: "gcListMembersWithHttpInfo",
    value: function gcListMembersWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcListMembers");
      } // verify the required parameter 'channelUrl' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcListMembersResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List members
     * ## List members  Retrieves a list of members of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-members ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of members of.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {String} opts.order 
     * @param {String} opts.operatorFilter 
     * @param {String} opts.memberStateFilter 
     * @param {String} opts.mutedMemberFilter 
     * @param {String} opts.nicknameStartswith 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcListMembersResponse}
     */

  }, {
    key: "gcListMembers",
    value: function gcListMembers(apiToken, channelUrl, opts) {
      return this.gcListMembersWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List operators
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcListOperatorsResponse} and HTTP response
     */

  }, {
    key: "gcListOperatorsWithHttpInfo",
    value: function gcListOperatorsWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcListOperators");
      } // verify the required parameter 'channelUrl' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcListOperatorsResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/operators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List operators
     * ## List operators  Retrieves a list of operators of a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcListOperatorsResponse}
     */

  }, {
    key: "gcListOperators",
    value: function gcListOperators(apiToken, channelUrl, opts) {
      return this.gcListOperatorsWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Register operators
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcRegisterOperatorsData} opts.gcRegisterOperatorsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcRegisterOperatorsResponse} and HTTP response
     */

  }, {
    key: "gcRegisterOperatorsWithHttpInfo",
    value: function gcRegisterOperatorsWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcRegisterOperatorsData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcRegisterOperators");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcRegisterOperators");
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
      var returnType = _GcRegisterOperatorsResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/operators', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Register operators
     * ## Register operators  Registers one or more operators to a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-register-operators ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcRegisterOperatorsData} opts.gcRegisterOperatorsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcRegisterOperatorsResponse}
     */

  }, {
    key: "gcRegisterOperators",
    value: function gcRegisterOperators(apiToken, channelUrl, opts) {
      return this.gcRegisterOperatorsWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Reset chat history
     * ## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcResetChatHistoryData} opts.gcResetChatHistoryData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcResetChatHistoryResponse} and HTTP response
     */

  }, {
    key: "gcResetChatHistoryWithHttpInfo",
    value: function gcResetChatHistoryWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcResetChatHistoryData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcResetChatHistory");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcResetChatHistory");
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
      var returnType = _GcResetChatHistoryResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/reset_user_history', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Reset chat history
     * ## Reset chat history  Resets the properties related to a user's chat history in a group channel, then clears the existing messages in the channel on the user's side only. A user can no longer see the messages in a group channel once this action is called, but those messages are not deleted from the database of the Sendbird system. All other members in the channel can retrieve and see the messages.  This action simply clears the messages for the user by updating the `last_message` and `read_receipt` properties of the [channel](#2-types-of-a-channel-3-resource-representation) resource in addition to other internally managed data such as the number of the user's unread message.  Using the `reset_all` property, you can also reset the properties related to all users' chat history in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-reset-chat-history ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcResetChatHistoryData} opts.gcResetChatHistoryData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcResetChatHistoryResponse}
     */

  }, {
    key: "gcResetChatHistory",
    value: function gcResetChatHistory(apiToken, channelUrl, opts) {
      return this.gcResetChatHistoryWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unhide or unarchive a channel
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.shouldUnhideAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */

  }, {
    key: "gcUnhideOrUnarchiveChannelWithHttpInfo",
    value: function gcUnhideOrUnarchiveChannelWithHttpInfo(apiToken, channelUrl, userId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcUnhideOrUnarchiveChannel");
      } // verify the required parameter 'channelUrl' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/hide', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unhide or unarchive a channel
     * ## Unhide or unarchive a channel  Makes a hidden or archived channel reappear in the channel list of either a specific user or entire channel members.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-unhide-or-unarchive-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to unhide or unarchive.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.shouldUnhideAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */

  }, {
    key: "gcUnhideOrUnarchiveChannel",
    value: function gcUnhideOrUnarchiveChannel(apiToken, channelUrl, userId, opts) {
      return this.gcUnhideOrUnarchiveChannelWithHttpInfo(apiToken, channelUrl, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a channel
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcUpdateChannelByUrlData} opts.gcUpdateChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
     */

  }, {
    key: "gcUpdateChannelByUrlWithHttpInfo",
    value: function gcUpdateChannelByUrlWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcUpdateChannelByUrlData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcUpdateChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcUpdateChannelByUrl");
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a channel
     * ## Update a channel  Updates information on a group channel.  > __Note__: You can't change the members of the channel here. To do so, see [invite as members](#2-invite-as-members) action below.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-update-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcUpdateChannelByUrlData} opts.gcUpdateChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */

  }, {
    key: "gcUpdateChannelByUrl",
    value: function gcUpdateChannelByUrl(apiToken, channelUrl, opts) {
      return this.gcUpdateChannelByUrlWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a channel
     * ## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.readReceipt 
     * @param {Boolean} opts.member 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdGroupChannel} and HTTP response
     */

  }, {
    key: "gcViewChannelByUrlWithHttpInfo",
    value: function gcViewChannelByUrlWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcViewChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendBirdGroupChannel["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a channel
     * ## View a channel  Retrieves information on a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-view-a-channel ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.readReceipt 
     * @param {Boolean} opts.member 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdGroupChannel}
     */

  }, {
    key: "gcViewChannelByUrl",
    value: function gcViewChannelByUrl(apiToken, channelUrl, opts) {
      return this.gcViewChannelByUrlWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GroupChannelApi;
}();

exports["default"] = GroupChannelApi;