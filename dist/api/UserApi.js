"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddRegistrationOrDeviceTokenData = _interopRequireDefault(require("../model/AddRegistrationOrDeviceTokenData"));

var _BanFromChannelsWithCustomChannelTypesData = _interopRequireDefault(require("../model/BanFromChannelsWithCustomChannelTypesData"));

var _BlockUserData = _interopRequireDefault(require("../model/BlockUserData"));

var _CreateUserData = _interopRequireDefault(require("../model/CreateUserData"));

var _LeaveMyGroupChannelsData = _interopRequireDefault(require("../model/LeaveMyGroupChannelsData"));

var _MarkAllMessagesAsReadData = _interopRequireDefault(require("../model/MarkAllMessagesAsReadData"));

var _MuteInChannelsWithCustomChannelTypesData = _interopRequireDefault(require("../model/MuteInChannelsWithCustomChannelTypesData"));

var _RegisterAsOperatorToChannelsWithCustomChannelTypesData = _interopRequireDefault(require("../model/RegisterAsOperatorToChannelsWithCustomChannelTypesData"));

var _UpdateChannelInvitationPreferenceData = _interopRequireDefault(require("../model/UpdateChannelInvitationPreferenceData"));

var _UpdateCountPreferenceOfChannelByUrlData = _interopRequireDefault(require("../model/UpdateCountPreferenceOfChannelByUrlData"));

var _UpdatePushPreferencesData = _interopRequireDefault(require("../model/UpdatePushPreferencesData"));

var _UpdatePushPreferencesForChannelByUrlData = _interopRequireDefault(require("../model/UpdatePushPreferencesForChannelByUrlData"));

var _UpdateUserByIdData = _interopRequireDefault(require("../model/UpdateUserByIdData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* User service.
* @module api/UserApi
* @version 1.0.0
*/
var UserApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addRegistrationOrDeviceToken operation.
   * @callback module:api/UserApi~addRegistrationOrDeviceTokenCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a registration or device token
   * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
   * @param {String} userId 
   * @param {String} tokenType 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/AddRegistrationOrDeviceTokenData} opts.addRegistrationOrDeviceTokenData 
   * @param {module:api/UserApi~addRegistrationOrDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(UserApi, [{
    key: "addRegistrationOrDeviceToken",
    value: function addRegistrationOrDeviceToken(userId, tokenType, opts, callback) {
      opts = opts || {};
      var postBody = opts['addRegistrationOrDeviceTokenData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addRegistrationOrDeviceToken");
      } // verify the required parameter 'tokenType' is set


      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling addRegistrationOrDeviceToken");
      }

      var pathParams = {
        'user_id': userId,
        'token_type': tokenType
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
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the banFromChannelsWithCustomChannelTypes operation.
     * @callback module:api/UserApi~banFromChannelsWithCustomChannelTypesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ban from channels with custom channel types
     * ## Ban from channels with custom channel types  Bans a user from channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-ban-from-channels-with-custom-channel-types ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/BanFromChannelsWithCustomChannelTypesData} opts.banFromChannelsWithCustomChannelTypesData 
     * @param {module:api/UserApi~banFromChannelsWithCustomChannelTypesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "banFromChannelsWithCustomChannelTypes",
    value: function banFromChannelsWithCustomChannelTypes(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['banFromChannelsWithCustomChannelTypesData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling banFromChannelsWithCustomChannelTypes");
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
      return this.apiClient.callApi('/v3/users/{user_id}/banned_channel_custom_types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the blockUser operation.
     * @callback module:api/UserApi~blockUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Block a user
     * ## Block a user  Allows a user to block another user. A user doesn't receive messages from someone they have blocked anymore. Also, blocking someone doesn't alert them that they have been blocked. Blocked users still can send messages as normal in the channel: however, they can't receive any messages from the users who have blocked them.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-block-a-user ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/BlockUserData} opts.blockUserData 
     * @param {module:api/UserApi~blockUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "blockUser",
    value: function blockUser(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['blockUserData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling blockUser");
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
      return this.apiClient.callApi('/v3/users/{user_id}/block', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the choosePushNotificationContentTemplate operation.
     * @callback module:api/UserApi~choosePushNotificationContentTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Choose a push notification content template
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Object} opts.body 
     * @param {module:api/UserApi~choosePushNotificationContentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "choosePushNotificationContentTemplate",
    value: function choosePushNotificationContentTemplate(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling choosePushNotificationContentTemplate");
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
      return this.apiClient.callApi('/v3/users/{user_id}/push/template', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/UserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateUserData} opts.createUserData 
     * @param {module:api/UserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "createUser",
    value: function createUser(opts, callback) {
      opts = opts || {};
      var postBody = opts['createUserData'];
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
      return this.apiClient.callApi('/v3/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserById operation.
     * @callback module:api/UserApi~deleteUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~deleteUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUserById",
    value: function deleteUserById(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserById");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the leaveMyGroupChannels operation.
     * @callback module:api/UserApi~leaveMyGroupChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave my group channels
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/LeaveMyGroupChannelsData} opts.leaveMyGroupChannelsData 
     * @param {module:api/UserApi~leaveMyGroupChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "leaveMyGroupChannels",
    value: function leaveMyGroupChannels(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['leaveMyGroupChannelsData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling leaveMyGroupChannels");
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
      return this.apiClient.callApi('/v3/users/{user_id}/my_group_channels/leave', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listBannedChannels operation.
     * @callback module:api/UserApi~listBannedChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List banned channels
     * ## List banned channels  Retrieves a list of open and group channels with additional information where a user is banned.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-banned-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/UserApi~listBannedChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listBannedChannels",
    value: function listBannedChannels(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listBlockedUsers operation.
     * @callback module:api/UserApi~listBlockedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List blocked users
     * ## List blocked users  Retrieves a list of other users that a user has blocked.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-blocked-users ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.userIds 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn 
     * @param {module:api/UserApi~listBlockedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listBlockedUsers",
    value: function listBlockedUsers(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/block', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listMutedChannels operation.
     * @callback module:api/UserApi~listMutedChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List muted channels
     * ## List muted channels  Retrieves a list of open and group channels with additional information where a user is muted.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-muted-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/UserApi~listMutedChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listMutedChannels",
    value: function listMutedChannels(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listMyGroupChannels operation.
     * @callback module:api/UserApi~listMyGroupChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List my group channels
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.distinctMode 
     * @param {String} opts.publicMode 
     * @param {String} opts.superMode 
     * @param {String} opts.hiddenMode 
     * @param {String} opts.memberStateFilter 
     * @param {String} opts.unreadFilter 
     * @param {Number} opts.createdAfter 
     * @param {Number} opts.createdBefore 
     * @param {Boolean} opts.showEmpty 
     * @param {Boolean} opts.showFrozen 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
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
     * @param {String} opts.searchQuery 
     * @param {String} opts.searchFields 
     * @param {String} opts.metadataKey 
     * @param {String} opts.metadataValues 
     * @param {String} opts.metadataValueStartswith 
     * @param {String} opts.metacounterKey 
     * @param {String} opts.metacounterValues 
     * @param {String} opts.metacounterValueGt 
     * @param {String} opts.metacounterValueGte 
     * @param {String} opts.metacounterValueLt 
     * @param {String} opts.metacounterValueLte 
     * @param {String} opts.customType 
     * @param {module:api/UserApi~listMyGroupChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listMyGroupChannels",
    value: function listMyGroupChannels(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listMyGroupChannels");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'distinct_mode': opts['distinctMode'],
        'public_mode': opts['publicMode'],
        'super_mode': opts['superMode'],
        'hidden_mode': opts['hiddenMode'],
        'member_state_filter': opts['memberStateFilter'],
        'unread_filter': opts['unreadFilter'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'show_empty': opts['showEmpty'],
        'show_frozen': opts['showFrozen'],
        'show_member': opts['showMember'],
        'show_delivery_receipt': opts['showDeliveryReceipt'],
        'show_read_receipt': opts['showReadReceipt'],
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
        'search_query': opts['searchQuery'],
        'search_fields': opts['searchFields'],
        'metadata_key': opts['metadataKey'],
        'metadata_values': opts['metadataValues'],
        'metadata_value_startswith': opts['metadataValueStartswith'],
        'metacounter_key': opts['metacounterKey'],
        'metacounter_values': opts['metacounterValues'],
        'metacounter_value_gt': opts['metacounterValueGt'],
        'metacounter_value_gte': opts['metacounterValueGte'],
        'metacounter_value_lt': opts['metacounterValueLt'],
        'metacounter_value_lte': opts['metacounterValueLte'],
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
      return this.apiClient.callApi('/v3/users/{user_id}/my_group_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listRegistrationOrDeviceTokens operation.
     * @callback module:api/UserApi~listRegistrationOrDeviceTokensCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List registration or device tokens
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * @param {String} userId 
     * @param {String} tokenType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~listRegistrationOrDeviceTokensCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listRegistrationOrDeviceTokens",
    value: function listRegistrationOrDeviceTokens(userId, tokenType, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listRegistrationOrDeviceTokens");
      } // verify the required parameter 'tokenType' is set


      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling listRegistrationOrDeviceTokens");
      }

      var pathParams = {
        'user_id': userId,
        'token_type': tokenType
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
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listUsers operation.
     * @callback module:api/UserApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users
     * ## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.activeMode 
     * @param {Boolean} opts.showBot 
     * @param {String} opts.userIds 
     * @param {String} opts.nickname 
     * @param {String} opts.nicknameStartswith 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn 
     * @param {module:api/UserApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listUsers",
    value: function listUsers(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'active_mode': opts['activeMode'],
        'show_bot': opts['showBot'],
        'user_ids': opts['userIds'],
        'nickname': opts['nickname'],
        'nickname_startswith': opts['nicknameStartswith'],
        'metadatakey': opts['metadatakey'],
        'metadatavalues_in': opts['metadatavaluesIn']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the markAllMessagesAsRead operation.
     * @callback module:api/UserApi~markAllMessagesAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark all messages as read
     * ## Mark all messages as read  Marks all of a user’s unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/MarkAllMessagesAsReadData} opts.markAllMessagesAsReadData 
     * @param {module:api/UserApi~markAllMessagesAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "markAllMessagesAsRead",
    value: function markAllMessagesAsRead(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['markAllMessagesAsReadData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling markAllMessagesAsRead");
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
      return this.apiClient.callApi('/v3/users/{user_id}/mark_as_read_all', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the muteInChannelsWithCustomChannelTypes operation.
     * @callback module:api/UserApi~muteInChannelsWithCustomChannelTypesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mute in channels with custom channel types
     * ## Mute in channels with custom channel types  Mutes a user in channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mute-in-channels-with-custom-channel-types ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/MuteInChannelsWithCustomChannelTypesData} opts.muteInChannelsWithCustomChannelTypesData 
     * @param {module:api/UserApi~muteInChannelsWithCustomChannelTypesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "muteInChannelsWithCustomChannelTypes",
    value: function muteInChannelsWithCustomChannelTypes(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['muteInChannelsWithCustomChannelTypesData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling muteInChannelsWithCustomChannelTypes");
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
      return this.apiClient.callApi('/v3/users/{user_id}/muted_channel_custom_types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerAsOperatorToChannelsWithCustomChannelTypes operation.
     * @callback module:api/UserApi~registerAsOperatorToChannelsWithCustomChannelTypesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register as an operator to channels with custom channel types
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/RegisterAsOperatorToChannelsWithCustomChannelTypesData} opts.registerAsOperatorToChannelsWithCustomChannelTypesData 
     * @param {module:api/UserApi~registerAsOperatorToChannelsWithCustomChannelTypesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "registerAsOperatorToChannelsWithCustomChannelTypes",
    value: function registerAsOperatorToChannelsWithCustomChannelTypes(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['registerAsOperatorToChannelsWithCustomChannelTypesData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling registerAsOperatorToChannelsWithCustomChannelTypes");
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
      return this.apiClient.callApi('/v3/users/{user_id}/operating_channel_custom_types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the removeRegistrationOrDeviceToken operation.
     * @callback module:api/UserApi~removeRegistrationOrDeviceTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a registration or device token - When unregistering all device tokens
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~removeRegistrationOrDeviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeRegistrationOrDeviceToken",
    value: function removeRegistrationOrDeviceToken(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeRegistrationOrDeviceToken");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/push', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the removeRegistrationOrDeviceTokenByToken operation.
     * @callback module:api/UserApi~removeRegistrationOrDeviceTokenByTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a registration or device token - When unregistering a specific token
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * @param {String} userId 
     * @param {String} tokenType 
     * @param {String} token 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~removeRegistrationOrDeviceTokenByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeRegistrationOrDeviceTokenByToken",
    value: function removeRegistrationOrDeviceTokenByToken(userId, tokenType, token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeRegistrationOrDeviceTokenByToken");
      } // verify the required parameter 'tokenType' is set


      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling removeRegistrationOrDeviceTokenByToken");
      } // verify the required parameter 'token' is set


      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling removeRegistrationOrDeviceTokenByToken");
      }

      var pathParams = {
        'user_id': userId,
        'token_type': tokenType,
        'token': token
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
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}/{token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the removeRegistrationOrDeviceTokenFromOwnerByToken operation.
     * @callback module:api/UserApi~removeRegistrationOrDeviceTokenFromOwnerByTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a registration or device token from an owner
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * @param {String} tokenType 
     * @param {String} token 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~removeRegistrationOrDeviceTokenFromOwnerByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeRegistrationOrDeviceTokenFromOwnerByToken",
    value: function removeRegistrationOrDeviceTokenFromOwnerByToken(tokenType, token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'tokenType' is set

      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling removeRegistrationOrDeviceTokenFromOwnerByToken");
      } // verify the required parameter 'token' is set


      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling removeRegistrationOrDeviceTokenFromOwnerByToken");
      }

      var pathParams = {
        'token_type': tokenType,
        'token': token
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
      return this.apiClient.callApi('/v3/push/device_tokens/{token_type}/{token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resetPushPreferences operation.
     * @callback module:api/UserApi~resetPushPreferencesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset push preferences
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~resetPushPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "resetPushPreferences",
    value: function resetPushPreferences(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling resetPushPreferences");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the unblockUserById operation.
     * @callback module:api/UserApi~unblockUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unblock a user
     * ## Unblock a user  Unblocks the user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-unblock-a-user ----------------------------
     * @param {String} userId 
     * @param {String} targetId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~unblockUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "unblockUserById",
    value: function unblockUserById(userId, targetId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling unblockUserById");
      } // verify the required parameter 'targetId' is set


      if (targetId === undefined || targetId === null) {
        throw new Error("Missing the required parameter 'targetId' when calling unblockUserById");
      }

      var pathParams = {
        'user_id': userId,
        'target_id': targetId
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
      return this.apiClient.callApi('/v3/users/{user_id}/block/{target_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateChannelInvitationPreference operation.
     * @callback module:api/UserApi~updateChannelInvitationPreferenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update channel invitation preference
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateChannelInvitationPreferenceData} opts.updateChannelInvitationPreferenceData 
     * @param {module:api/UserApi~updateChannelInvitationPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateChannelInvitationPreference",
    value: function updateChannelInvitationPreference(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateChannelInvitationPreferenceData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateChannelInvitationPreference");
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
      return this.apiClient.callApi('/v3/users/{user_id}/channel_invitation_preference', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateCountPreferenceOfChannelByUrl operation.
     * @callback module:api/UserApi~updateCountPreferenceOfChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update count preference of a channel
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateCountPreferenceOfChannelByUrlData} opts.updateCountPreferenceOfChannelByUrlData 
     * @param {module:api/UserApi~updateCountPreferenceOfChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateCountPreferenceOfChannelByUrl",
    value: function updateCountPreferenceOfChannelByUrl(userId, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateCountPreferenceOfChannelByUrlData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateCountPreferenceOfChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateCountPreferenceOfChannelByUrl");
      }

      var pathParams = {
        'user_id': userId,
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
      return this.apiClient.callApi('/v3/users/{user_id}/count_preference/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePushPreferences operation.
     * @callback module:api/UserApi~updatePushPreferencesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update push preferences
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushPreferencesData} opts.updatePushPreferencesData 
     * @param {module:api/UserApi~updatePushPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePushPreferences",
    value: function updatePushPreferences(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updatePushPreferencesData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePushPreferences");
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
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePushPreferencesForChannelByUrl operation.
     * @callback module:api/UserApi~updatePushPreferencesForChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update push preferences for a channel
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushPreferencesForChannelByUrlData} opts.updatePushPreferencesForChannelByUrlData 
     * @param {module:api/UserApi~updatePushPreferencesForChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePushPreferencesForChannelByUrl",
    value: function updatePushPreferencesForChannelByUrl(userId, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['updatePushPreferencesForChannelByUrlData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePushPreferencesForChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updatePushPreferencesForChannelByUrl");
      }

      var pathParams = {
        'user_id': userId,
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
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUserById operation.
     * @callback module:api/UserApi~updateUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateUserByIdData} opts.updateUserByIdData 
     * @param {module:api/UserApi~updateUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateUserById",
    value: function updateUserById(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateUserByIdData']; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserById");
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
      return this.apiClient.callApi('/v3/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewChannelInvitationPreference operation.
     * @callback module:api/UserApi~viewChannelInvitationPreferenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View channel invitation preference
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~viewChannelInvitationPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewChannelInvitationPreference",
    value: function viewChannelInvitationPreference(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewChannelInvitationPreference");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/channel_invitation_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewCountPreferenceOfChannelByUrl operation.
     * @callback module:api/UserApi~viewCountPreferenceOfChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View count preference of a channel
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~viewCountPreferenceOfChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewCountPreferenceOfChannelByUrl",
    value: function viewCountPreferenceOfChannelByUrl(userId, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewCountPreferenceOfChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewCountPreferenceOfChannelByUrl");
      }

      var pathParams = {
        'user_id': userId,
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
      return this.apiClient.callApi('/v3/users/{user_id}/count_preference/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfChannelsByJoinStatus operation.
     * @callback module:api/UserApi~viewNumberOfChannelsByJoinStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of channels by join status
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.state 
     * @param {module:api/UserApi~viewNumberOfChannelsByJoinStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfChannelsByJoinStatus",
    value: function viewNumberOfChannelsByJoinStatus(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewNumberOfChannelsByJoinStatus");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'state': opts['state']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/group_channel_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfChannelsWithUnreadMessages operation.
     * @callback module:api/UserApi~viewNumberOfChannelsWithUnreadMessagesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of channels with unread messages
     * ## View number of channels with unread messages  Retrieves the total number of a user’s group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Array} opts.customTypes 
     * @param {String} opts.superMode 
     * @param {module:api/UserApi~viewNumberOfChannelsWithUnreadMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfChannelsWithUnreadMessages",
    value: function viewNumberOfChannelsWithUnreadMessages(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewNumberOfChannelsWithUnreadMessages");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'custom_types': opts['customTypes'],
        'super_mode': opts['superMode']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/unread_channel_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfUnreadItems operation.
     * @callback module:api/UserApi~viewNumberOfUnreadItemsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of unread items
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.customType 
     * @param {String} opts.itemKeys 
     * @param {module:api/UserApi~viewNumberOfUnreadItemsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfUnreadItems",
    value: function viewNumberOfUnreadItems(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewNumberOfUnreadItems");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'custom_type': opts['customType'],
        'item_keys': opts['itemKeys']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/unread_item_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfUnreadMessages operation.
     * @callback module:api/UserApi~viewNumberOfUnreadMessagesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of unread messages
     * ## View number of unread messages  Retrieves the total number of a user’s currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.customTypes 
     * @param {String} opts.superMode 
     * @param {module:api/UserApi~viewNumberOfUnreadMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfUnreadMessages",
    value: function viewNumberOfUnreadMessages(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewNumberOfUnreadMessages");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'custom_types': opts['customTypes'],
        'super_mode': opts['superMode']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/unread_message_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewPushPreferences operation.
     * @callback module:api/UserApi~viewPushPreferencesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View push preferences
     * ## View push preferences  Retrieves a user’s push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~viewPushPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewPushPreferences",
    value: function viewPushPreferences(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewPushPreferences");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewPushPreferencesForChannelByUrl operation.
     * @callback module:api/UserApi~viewPushPreferencesForChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View push preferences for a channel
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~viewPushPreferencesForChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewPushPreferencesForChannelByUrl",
    value: function viewPushPreferencesForChannelByUrl(userId, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewPushPreferencesForChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewPushPreferencesForChannelByUrl");
      }

      var pathParams = {
        'user_id': userId,
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
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewUserById operation.
     * @callback module:api/UserApi~viewUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a user
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.includeUnreadCount 
     * @param {String} opts.customTypes 
     * @param {String} opts.superMode 
     * @param {module:api/UserApi~viewUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewUserById",
    value: function viewUserById(userId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewUserById");
      }

      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'include_unread_count': opts['includeUnreadCount'],
        'custom_types': opts['customTypes'],
        'super_mode': opts['superMode']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewWhoOwnsRegistrationOrDeviceTokenByToken operation.
     * @callback module:api/UserApi~viewWhoOwnsRegistrationOrDeviceTokenByTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View who owns a registration or device token
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * @param {String} tokenType 
     * @param {String} token 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/UserApi~viewWhoOwnsRegistrationOrDeviceTokenByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewWhoOwnsRegistrationOrDeviceTokenByToken",
    value: function viewWhoOwnsRegistrationOrDeviceTokenByToken(tokenType, token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'tokenType' is set

      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling viewWhoOwnsRegistrationOrDeviceTokenByToken");
      } // verify the required parameter 'token' is set


      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling viewWhoOwnsRegistrationOrDeviceTokenByToken");
      }

      var pathParams = {
        'token_type': tokenType,
        'token': token
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
      return this.apiClient.callApi('/v3/push/device_tokens/{token_type}/{token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;