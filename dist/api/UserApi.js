"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddRegistrationOrDeviceTokenData = _interopRequireDefault(require("../model/AddRegistrationOrDeviceTokenData"));
var _AddRegistrationOrDeviceTokenResponse = _interopRequireDefault(require("../model/AddRegistrationOrDeviceTokenResponse"));
var _ChoosePushNotificationContentTemplateResponse = _interopRequireDefault(require("../model/ChoosePushNotificationContentTemplateResponse"));
var _CreateUserData = _interopRequireDefault(require("../model/CreateUserData"));
var _CreateUserTokenData = _interopRequireDefault(require("../model/CreateUserTokenData"));
var _CreateUserTokenResponse = _interopRequireDefault(require("../model/CreateUserTokenResponse"));
var _LeaveMyGroupChannelsData = _interopRequireDefault(require("../model/LeaveMyGroupChannelsData"));
var _ListMyGroupChannelsResponse = _interopRequireDefault(require("../model/ListMyGroupChannelsResponse"));
var _ListRegistrationOrDeviceTokensResponse = _interopRequireDefault(require("../model/ListRegistrationOrDeviceTokensResponse"));
var _ListUsersResponse = _interopRequireDefault(require("../model/ListUsersResponse"));
var _MarkAllMessagesAsReadData = _interopRequireDefault(require("../model/MarkAllMessagesAsReadData"));
var _RegisterAsOperatorToChannelsWithCustomChannelTypesData = _interopRequireDefault(require("../model/RegisterAsOperatorToChannelsWithCustomChannelTypesData"));
var _RemoveRegistrationOrDeviceTokenByTokenResponse = _interopRequireDefault(require("../model/RemoveRegistrationOrDeviceTokenByTokenResponse"));
var _RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse = _interopRequireDefault(require("../model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse"));
var _RemoveRegistrationOrDeviceTokenResponse = _interopRequireDefault(require("../model/RemoveRegistrationOrDeviceTokenResponse"));
var _ResetPushPreferencesResponse = _interopRequireDefault(require("../model/ResetPushPreferencesResponse"));
var _SendBirdUser = _interopRequireDefault(require("../model/SendBirdUser"));
var _UpdateChannelInvitationPreferenceData = _interopRequireDefault(require("../model/UpdateChannelInvitationPreferenceData"));
var _UpdateChannelInvitationPreferenceResponse = _interopRequireDefault(require("../model/UpdateChannelInvitationPreferenceResponse"));
var _UpdateCountPreferenceOfChannelByUrlData = _interopRequireDefault(require("../model/UpdateCountPreferenceOfChannelByUrlData"));
var _UpdateCountPreferenceOfChannelByUrlResponse = _interopRequireDefault(require("../model/UpdateCountPreferenceOfChannelByUrlResponse"));
var _UpdatePushPreferencesData = _interopRequireDefault(require("../model/UpdatePushPreferencesData"));
var _UpdatePushPreferencesForChannelByUrlData = _interopRequireDefault(require("../model/UpdatePushPreferencesForChannelByUrlData"));
var _UpdatePushPreferencesForChannelByUrlResponse = _interopRequireDefault(require("../model/UpdatePushPreferencesForChannelByUrlResponse"));
var _UpdatePushPreferencesResponse = _interopRequireDefault(require("../model/UpdatePushPreferencesResponse"));
var _UpdateUserByIdData = _interopRequireDefault(require("../model/UpdateUserByIdData"));
var _ViewChannelInvitationPreferenceResponse = _interopRequireDefault(require("../model/ViewChannelInvitationPreferenceResponse"));
var _ViewCountPreferenceOfChannelByUrlResponse = _interopRequireDefault(require("../model/ViewCountPreferenceOfChannelByUrlResponse"));
var _ViewNumberOfChannelsByJoinStatusResponse = _interopRequireDefault(require("../model/ViewNumberOfChannelsByJoinStatusResponse"));
var _ViewNumberOfChannelsWithUnreadMessagesResponse = _interopRequireDefault(require("../model/ViewNumberOfChannelsWithUnreadMessagesResponse"));
var _ViewNumberOfUnreadItemsResponse = _interopRequireDefault(require("../model/ViewNumberOfUnreadItemsResponse"));
var _ViewNumberOfUnreadMessagesResponse = _interopRequireDefault(require("../model/ViewNumberOfUnreadMessagesResponse"));
var _ViewPushPreferencesForChannelByUrlResponse = _interopRequireDefault(require("../model/ViewPushPreferencesForChannelByUrlResponse"));
var _ViewPushPreferencesResponse = _interopRequireDefault(require("../model/ViewPushPreferencesResponse"));
var _ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner = _interopRequireDefault(require("../model/ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* User service.
* @module api/UserApi
* @version 0.0.14
*/var UserApi = /*#__PURE__*/function () {
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
   * Add a registration or device token
   * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
   * @param {String} apiToken 
   * @param {String} userId 
   * @param {String} tokenType 
   * @param {Object} opts Optional parameters
   * @param {module:model/AddRegistrationOrDeviceTokenData} opts.addRegistrationOrDeviceTokenData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddRegistrationOrDeviceTokenResponse} and HTTP response
   */
  _createClass(UserApi, [{
    key: "addRegistrationOrDeviceTokenWithHttpInfo",
    value: function addRegistrationOrDeviceTokenWithHttpInfo(apiToken, userId, tokenType, opts) {
      opts = opts || {};
      var postBody = opts['addRegistrationOrDeviceTokenData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addRegistrationOrDeviceToken");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addRegistrationOrDeviceToken");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling addRegistrationOrDeviceToken");
      }
      var pathParams = {
        'user_id': userId,
        'token_type': tokenType
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddRegistrationOrDeviceTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Add a registration or device token
     * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} tokenType 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddRegistrationOrDeviceTokenData} opts.addRegistrationOrDeviceTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddRegistrationOrDeviceTokenResponse}
     */
  }, {
    key: "addRegistrationOrDeviceToken",
    value: function addRegistrationOrDeviceToken(apiToken, userId, tokenType, opts) {
      return this.addRegistrationOrDeviceTokenWithHttpInfo(apiToken, userId, tokenType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Choose a push notification content template
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChoosePushNotificationContentTemplateResponse} and HTTP response
     */
  }, {
    key: "choosePushNotificationContentTemplateWithHttpInfo",
    value: function choosePushNotificationContentTemplateWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling choosePushNotificationContentTemplate");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling choosePushNotificationContentTemplate");
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
      var returnType = _ChoosePushNotificationContentTemplateResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/template', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Choose a push notification content template
     * ## Choose a push notification content template  Chooses a push notification content template of a user's own. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-choose-a-push-notification-content-template ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChoosePushNotificationContentTemplateResponse}
     */
  }, {
    key: "choosePushNotificationContentTemplate",
    value: function choosePushNotificationContentTemplate(apiToken, userId, opts) {
      return this.choosePushNotificationContentTemplateWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a user
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserData} opts.createUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdUser} and HTTP response
     */
  }, {
    key: "createUserWithHttpInfo",
    value: function createUserWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['createUserData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createUser");
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
      var returnType = _SendBirdUser["default"];
      return this.apiClient.callApi('/v3/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a user
     * ## Create a user  Creates a new user in the application. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserData} opts.createUserData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdUser}
     */
  }, {
    key: "createUser",
    value: function createUser(apiToken, opts) {
      return this.createUserWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create user token
     * ## Create user token
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserTokenData} opts.createUserTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateUserTokenResponse} and HTTP response
     */
  }, {
    key: "createUserTokenWithHttpInfo",
    value: function createUserTokenWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['createUserTokenData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createUserToken");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createUserToken");
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
      var returnType = _CreateUserTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create user token
     * ## Create user token
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserTokenData} opts.createUserTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateUserTokenResponse}
     */
  }, {
    key: "createUserToken",
    value: function createUserToken(apiToken, userId, opts) {
      return this.createUserTokenWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a user
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "deleteUserByIdWithHttpInfo",
    value: function deleteUserByIdWithHttpInfo(apiToken, userId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteUserById");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUserById");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/users/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a user
     * ## Delete a user  Deletes a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-delete-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "deleteUserById",
    value: function deleteUserById(apiToken, userId) {
      return this.deleteUserByIdWithHttpInfo(apiToken, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Leave my group channels
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LeaveMyGroupChannelsData} opts.leaveMyGroupChannelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "leaveMyGroupChannelsWithHttpInfo",
    value: function leaveMyGroupChannelsWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['leaveMyGroupChannelsData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling leaveMyGroupChannels");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling leaveMyGroupChannels");
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
      return this.apiClient.callApi('/v3/users/{user_id}/my_group_channels/leave', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Leave my group channels
     * ## Leave my group channels  Makes a user leave all joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-leave-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to leave all joined group channels.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/LeaveMyGroupChannelsData} opts.leaveMyGroupChannelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "leaveMyGroupChannels",
    value: function leaveMyGroupChannels(apiToken, userId, opts) {
      return this.leaveMyGroupChannelsWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List my group channels
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMyGroupChannelsResponse} and HTTP response
     */
  }, {
    key: "listMyGroupChannelsWithHttpInfo",
    value: function listMyGroupChannelsWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listMyGroupChannels");
      }
      // verify the required parameter 'userId' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListMyGroupChannelsResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/my_group_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List my group channels
     * ## List my group channels  Retrieves all group channels that the user has joined. You can create a request based on various query parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-my-group-channels ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the target user.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMyGroupChannelsResponse}
     */
  }, {
    key: "listMyGroupChannels",
    value: function listMyGroupChannels(apiToken, userId, opts) {
      return this.listMyGroupChannelsWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List registration or device tokens
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} tokenType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListRegistrationOrDeviceTokensResponse} and HTTP response
     */
  }, {
    key: "listRegistrationOrDeviceTokensWithHttpInfo",
    value: function listRegistrationOrDeviceTokensWithHttpInfo(apiToken, userId, tokenType) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listRegistrationOrDeviceTokens");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listRegistrationOrDeviceTokens");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling listRegistrationOrDeviceTokens");
      }
      var pathParams = {
        'user_id': userId,
        'token_type': tokenType
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListRegistrationOrDeviceTokensResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List registration or device tokens
     * ## List registration or device tokens  Retrieves a list of a specific user's FCM registration tokens, HMS device tokens, or APNs device tokens. You can specify either `gcm`, `huawei`, or `apns` in the `token_type` parameter, depending on which push notification service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-registration-or-device-tokens ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} tokenType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListRegistrationOrDeviceTokensResponse}
     */
  }, {
    key: "listRegistrationOrDeviceTokens",
    value: function listRegistrationOrDeviceTokens(apiToken, userId, tokenType) {
      return this.listRegistrationOrDeviceTokensWithHttpInfo(apiToken, userId, tokenType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List users
     * ## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.activeMode 
     * @param {Boolean} opts.showBot 
     * @param {String} opts.userIds 
     * @param {String} opts.nickname 
     * @param {String} opts.nicknameStartswith 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUsersResponse} and HTTP response
     */
  }, {
    key: "listUsersWithHttpInfo",
    value: function listUsersWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listUsers");
      }
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListUsersResponse["default"];
      return this.apiClient.callApi('/v3/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List users
     * ## List users  Retrieves a list of users in your application. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-list-users ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.activeMode 
     * @param {Boolean} opts.showBot 
     * @param {String} opts.userIds 
     * @param {String} opts.nickname 
     * @param {String} opts.nicknameStartswith 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUsersResponse}
     */
  }, {
    key: "listUsers",
    value: function listUsers(apiToken, opts) {
      return this.listUsersWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Mark all messages as read
     * ## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/MarkAllMessagesAsReadData} opts.markAllMessagesAsReadData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "markAllMessagesAsReadWithHttpInfo",
    value: function markAllMessagesAsReadWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['markAllMessagesAsReadData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling markAllMessagesAsRead");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling markAllMessagesAsRead");
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
      return this.apiClient.callApi('/v3/users/{user_id}/mark_as_read_all', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Mark all messages as read
     * ## Mark all messages as read  Marks all of a user's unread messages as read in the joined group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-mark-all-messages-as-read ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/MarkAllMessagesAsReadData} opts.markAllMessagesAsReadData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "markAllMessagesAsRead",
    value: function markAllMessagesAsRead(apiToken, userId, opts) {
      return this.markAllMessagesAsReadWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Register as an operator to channels with custom channel types
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterAsOperatorToChannelsWithCustomChannelTypesData} opts.registerAsOperatorToChannelsWithCustomChannelTypesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "registerAsOperatorToChannelsWithCustomChannelTypesWithHttpInfo",
    value: function registerAsOperatorToChannelsWithCustomChannelTypesWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['registerAsOperatorToChannelsWithCustomChannelTypesData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling registerAsOperatorToChannelsWithCustomChannelTypes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling registerAsOperatorToChannelsWithCustomChannelTypes");
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
      return this.apiClient.callApi('/v3/users/{user_id}/operating_channel_custom_types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Register as an operator to channels with custom channel types
     * ## Register as an operator to channels with custom channel types  Registers a user as an operator to channels with particular custom channel types.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-register-as-an-operator-to-channels-with-custom-channel-types ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterAsOperatorToChannelsWithCustomChannelTypesData} opts.registerAsOperatorToChannelsWithCustomChannelTypesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "registerAsOperatorToChannelsWithCustomChannelTypes",
    value: function registerAsOperatorToChannelsWithCustomChannelTypes(apiToken, userId, opts) {
      return this.registerAsOperatorToChannelsWithCustomChannelTypesWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a registration or device token - When unregistering all device tokens
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveRegistrationOrDeviceTokenResponse} and HTTP response
     */
  }, {
    key: "removeRegistrationOrDeviceTokenWithHttpInfo",
    value: function removeRegistrationOrDeviceTokenWithHttpInfo(apiToken, userId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling removeRegistrationOrDeviceToken");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeRegistrationOrDeviceToken");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoveRegistrationOrDeviceTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a registration or device token - When unregistering all device tokens
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveRegistrationOrDeviceTokenResponse}
     */
  }, {
    key: "removeRegistrationOrDeviceToken",
    value: function removeRegistrationOrDeviceToken(apiToken, userId) {
      return this.removeRegistrationOrDeviceTokenWithHttpInfo(apiToken, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a registration or device token - When unregistering a specific token
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} tokenType 
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveRegistrationOrDeviceTokenByTokenResponse} and HTTP response
     */
  }, {
    key: "removeRegistrationOrDeviceTokenByTokenWithHttpInfo",
    value: function removeRegistrationOrDeviceTokenByTokenWithHttpInfo(apiToken, userId, tokenType, token) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling removeRegistrationOrDeviceTokenByToken");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeRegistrationOrDeviceTokenByToken");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling removeRegistrationOrDeviceTokenByToken");
      }
      // verify the required parameter 'token' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoveRegistrationOrDeviceTokenByTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}/{token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a registration or device token - When unregistering a specific token
     * ## Remove a registration or device token  Removes a specific user's one or more FCM registration tokens, HMS device tokens, or APNs device tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} tokenType 
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveRegistrationOrDeviceTokenByTokenResponse}
     */
  }, {
    key: "removeRegistrationOrDeviceTokenByToken",
    value: function removeRegistrationOrDeviceTokenByToken(apiToken, userId, tokenType, token) {
      return this.removeRegistrationOrDeviceTokenByTokenWithHttpInfo(apiToken, userId, tokenType, token).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a registration or device token from an owner
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * @param {String} apiToken 
     * @param {String} tokenType 
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse} and HTTP response
     */
  }, {
    key: "removeRegistrationOrDeviceTokenFromOwnerByTokenWithHttpInfo",
    value: function removeRegistrationOrDeviceTokenFromOwnerByTokenWithHttpInfo(apiToken, tokenType, token) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling removeRegistrationOrDeviceTokenFromOwnerByToken");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling removeRegistrationOrDeviceTokenFromOwnerByToken");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling removeRegistrationOrDeviceTokenFromOwnerByToken");
      }
      var pathParams = {
        'token_type': tokenType,
        'token': token
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse["default"];
      return this.apiClient.callApi('/v3/push/device_tokens/{token_type}/{token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a registration or device token from an owner
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who owns it. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-remove-a-registration-or-device-token-from-an-owner ----------------------------
     * @param {String} apiToken 
     * @param {String} tokenType 
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveRegistrationOrDeviceTokenFromOwnerByTokenResponse}
     */
  }, {
    key: "removeRegistrationOrDeviceTokenFromOwnerByToken",
    value: function removeRegistrationOrDeviceTokenFromOwnerByToken(apiToken, tokenType, token) {
      return this.removeRegistrationOrDeviceTokenFromOwnerByTokenWithHttpInfo(apiToken, tokenType, token).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Reset push preferences
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResetPushPreferencesResponse} and HTTP response
     */
  }, {
    key: "resetPushPreferencesWithHttpInfo",
    value: function resetPushPreferencesWithHttpInfo(apiToken, userId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling resetPushPreferences");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling resetPushPreferences");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResetPushPreferencesResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Reset push preferences
     * ## Reset push preferences  Resets a user's push preferences. After performing this action,   `do_not_disturb` and `snooze_enabled` are set to false.  The values of the parameters associated with the time frame are all set to 0.  `timezone` is reset to `UTC`.  `push_sound` is reset to `default`.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-reset-push-preferences ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResetPushPreferencesResponse}
     */
  }, {
    key: "resetPushPreferences",
    value: function resetPushPreferences(apiToken, userId) {
      return this.resetPushPreferencesWithHttpInfo(apiToken, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update channel invitation preference
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateChannelInvitationPreferenceData} opts.updateChannelInvitationPreferenceData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateChannelInvitationPreferenceResponse} and HTTP response
     */
  }, {
    key: "updateChannelInvitationPreferenceWithHttpInfo",
    value: function updateChannelInvitationPreferenceWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['updateChannelInvitationPreferenceData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateChannelInvitationPreference");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateChannelInvitationPreference");
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
      var returnType = _UpdateChannelInvitationPreferenceResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/channel_invitation_preference', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update channel invitation preference
     * ## Update channel invitation preference  Updates the channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [update default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference) action, you can update the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateChannelInvitationPreferenceData} opts.updateChannelInvitationPreferenceData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateChannelInvitationPreferenceResponse}
     */
  }, {
    key: "updateChannelInvitationPreference",
    value: function updateChannelInvitationPreference(apiToken, userId, opts) {
      return this.updateChannelInvitationPreferenceWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update count preference of a channel
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCountPreferenceOfChannelByUrlData} opts.updateCountPreferenceOfChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateCountPreferenceOfChannelByUrlResponse} and HTTP response
     */
  }, {
    key: "updateCountPreferenceOfChannelByUrlWithHttpInfo",
    value: function updateCountPreferenceOfChannelByUrlWithHttpInfo(apiToken, userId, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['updateCountPreferenceOfChannelByUrlData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateCountPreferenceOfChannelByUrl");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateCountPreferenceOfChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateCountPreferenceOfChannelByUrl");
      }
      var pathParams = {
        'user_id': userId,
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
      var returnType = _UpdateCountPreferenceOfChannelByUrlResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/count_preference/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update count preference of a channel
     * ## Update count preference of a channel  Updates count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-count-preference-of-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCountPreferenceOfChannelByUrlData} opts.updateCountPreferenceOfChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateCountPreferenceOfChannelByUrlResponse}
     */
  }, {
    key: "updateCountPreferenceOfChannelByUrl",
    value: function updateCountPreferenceOfChannelByUrl(apiToken, userId, channelUrl, opts) {
      return this.updateCountPreferenceOfChannelByUrlWithHttpInfo(apiToken, userId, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update push preferences
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePushPreferencesData} opts.updatePushPreferencesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatePushPreferencesResponse} and HTTP response
     */
  }, {
    key: "updatePushPreferencesWithHttpInfo",
    value: function updatePushPreferencesWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['updatePushPreferencesData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updatePushPreferences");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePushPreferences");
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
      var returnType = _UpdatePushPreferencesResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update push preferences
     * ## Update push preferences  Updates a user's push preferences. Through this action, you can set `do_not_disturb` for a user, and update the time frame in which the setting applies.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePushPreferencesData} opts.updatePushPreferencesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatePushPreferencesResponse}
     */
  }, {
    key: "updatePushPreferences",
    value: function updatePushPreferences(apiToken, userId, opts) {
      return this.updatePushPreferencesWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update push preferences for a channel
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePushPreferencesForChannelByUrlData} opts.updatePushPreferencesForChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatePushPreferencesForChannelByUrlResponse} and HTTP response
     */
  }, {
    key: "updatePushPreferencesForChannelByUrlWithHttpInfo",
    value: function updatePushPreferencesForChannelByUrlWithHttpInfo(apiToken, userId, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['updatePushPreferencesForChannelByUrlData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updatePushPreferencesForChannelByUrl");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePushPreferencesForChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updatePushPreferencesForChannelByUrl");
      }
      var pathParams = {
        'user_id': userId,
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
      var returnType = _UpdatePushPreferencesForChannelByUrlResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update push preferences for a channel
     * ## Update push preferences for a channel  Updates push preferences for a user's specific group channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-push-preferences-for-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePushPreferencesForChannelByUrlData} opts.updatePushPreferencesForChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatePushPreferencesForChannelByUrlResponse}
     */
  }, {
    key: "updatePushPreferencesForChannelByUrl",
    value: function updatePushPreferencesForChannelByUrl(apiToken, userId, channelUrl, opts) {
      return this.updatePushPreferencesForChannelByUrlWithHttpInfo(apiToken, userId, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a user
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateUserByIdData} opts.updateUserByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdUser} and HTTP response
     */
  }, {
    key: "updateUserByIdWithHttpInfo",
    value: function updateUserByIdWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = opts['updateUserByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateUserById");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUserById");
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
      var returnType = _SendBirdUser["default"];
      return this.apiClient.callApi('/v3/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a user
     * ## Update a user  Updates information on a user. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user. If the `leave_all_when_deactivated` is true (which it is by default), a user leaves all joined group channels when deactivated.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateUserByIdData} opts.updateUserByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdUser}
     */
  }, {
    key: "updateUserById",
    value: function updateUserById(apiToken, userId, opts) {
      return this.updateUserByIdWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View channel invitation preference
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewChannelInvitationPreferenceResponse} and HTTP response
     */
  }, {
    key: "viewChannelInvitationPreferenceWithHttpInfo",
    value: function viewChannelInvitationPreferenceWithHttpInfo(apiToken, userId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewChannelInvitationPreference");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewChannelInvitationPreference");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewChannelInvitationPreferenceResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/channel_invitation_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View channel invitation preference
     * ## View channel invitation preference  Retrieves channel invitation preference for a user's [private](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#-3-private-vs-public) group channels.  > __Note__: Using the [view default channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference) action, you can retrieve the value of channel invitation preference which is globally applied to all users within the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewChannelInvitationPreferenceResponse}
     */
  }, {
    key: "viewChannelInvitationPreference",
    value: function viewChannelInvitationPreference(apiToken, userId) {
      return this.viewChannelInvitationPreferenceWithHttpInfo(apiToken, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View count preference of a channel
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewCountPreferenceOfChannelByUrlResponse} and HTTP response
     */
  }, {
    key: "viewCountPreferenceOfChannelByUrlWithHttpInfo",
    value: function viewCountPreferenceOfChannelByUrlWithHttpInfo(apiToken, userId, channelUrl) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewCountPreferenceOfChannelByUrl");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewCountPreferenceOfChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewCountPreferenceOfChannelByUrl");
      }
      var pathParams = {
        'user_id': userId,
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
      var returnType = _ViewCountPreferenceOfChannelByUrlResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/count_preference/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View count preference of a channel
     * ## View count preference of a channel  Retrieves count preference of a specific group channel of a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-count-preference-of-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewCountPreferenceOfChannelByUrlResponse}
     */
  }, {
    key: "viewCountPreferenceOfChannelByUrl",
    value: function viewCountPreferenceOfChannelByUrl(apiToken, userId, channelUrl) {
      return this.viewCountPreferenceOfChannelByUrlWithHttpInfo(apiToken, userId, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of channels by join status
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.state 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfChannelsByJoinStatusResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfChannelsByJoinStatusWithHttpInfo",
    value: function viewNumberOfChannelsByJoinStatusWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfChannelsByJoinStatus");
      }
      // verify the required parameter 'userId' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfChannelsByJoinStatusResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/group_channel_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of channels by join status
     * ## View number of channels by join status  Retrieves the number of a user's group channels by their join status.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-by-join-status ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.state 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfChannelsByJoinStatusResponse}
     */
  }, {
    key: "viewNumberOfChannelsByJoinStatus",
    value: function viewNumberOfChannelsByJoinStatus(apiToken, userId, opts) {
      return this.viewNumberOfChannelsByJoinStatusWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of channels with unread messages
     * ## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.customTypes 
     * @param {String} opts.superMode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfChannelsWithUnreadMessagesResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfChannelsWithUnreadMessagesWithHttpInfo",
    value: function viewNumberOfChannelsWithUnreadMessagesWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfChannelsWithUnreadMessages");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewNumberOfChannelsWithUnreadMessages");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'custom_types': this.apiClient.buildCollectionParam(opts['customTypes'], 'multi'),
        'super_mode': opts['superMode']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfChannelsWithUnreadMessagesResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/unread_channel_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of channels with unread messages
     * ## View number of channels with unread messages  Retrieves the total number of a user's group channels with unread messages.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-channels-with-unread-messages ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.customTypes 
     * @param {String} opts.superMode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfChannelsWithUnreadMessagesResponse}
     */
  }, {
    key: "viewNumberOfChannelsWithUnreadMessages",
    value: function viewNumberOfChannelsWithUnreadMessages(apiToken, userId, opts) {
      return this.viewNumberOfChannelsWithUnreadMessagesWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of unread items
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customType 
     * @param {String} opts.itemKeys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfUnreadItemsResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfUnreadItemsWithHttpInfo",
    value: function viewNumberOfUnreadItemsWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfUnreadItems");
      }
      // verify the required parameter 'userId' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfUnreadItemsResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/unread_item_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of unread items
     * ## View number of unread items  Retrieves a set of total numbers of a user's unread messages, unread mentioned messages, or received invitations in either super or non-super group channels. This action is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-items ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customType 
     * @param {String} opts.itemKeys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfUnreadItemsResponse}
     */
  }, {
    key: "viewNumberOfUnreadItems",
    value: function viewNumberOfUnreadItems(apiToken, userId, opts) {
      return this.viewNumberOfUnreadItemsWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of unread messages
     * ## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customTypes 
     * @param {String} opts.superMode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfUnreadMessagesResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfUnreadMessagesWithHttpInfo",
    value: function viewNumberOfUnreadMessagesWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfUnreadMessages");
      }
      // verify the required parameter 'userId' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfUnreadMessagesResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/unread_message_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of unread messages
     * ## View number of unread messages  Retrieves the total number of a user's currently unread messages in the group channels. The unread counts feature is only available for the group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-number-of-unread-messages ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve the number.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customTypes 
     * @param {String} opts.superMode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfUnreadMessagesResponse}
     */
  }, {
    key: "viewNumberOfUnreadMessages",
    value: function viewNumberOfUnreadMessages(apiToken, userId, opts) {
      return this.viewNumberOfUnreadMessagesWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View push preferences
     * ## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushPreferencesResponse} and HTTP response
     */
  }, {
    key: "viewPushPreferencesWithHttpInfo",
    value: function viewPushPreferencesWithHttpInfo(apiToken, userId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewPushPreferences");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewPushPreferences");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewPushPreferencesResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View push preferences
     * ## View push preferences  Retrieves a user's push preferences about whether the user has set `do_not_disturb` to pause notifications for a certain period of time, and the time frame in which the user has applied the setting.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushPreferencesResponse}
     */
  }, {
    key: "viewPushPreferences",
    value: function viewPushPreferences(apiToken, userId) {
      return this.viewPushPreferencesWithHttpInfo(apiToken, userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View push preferences for a channel
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushPreferencesForChannelByUrlResponse} and HTTP response
     */
  }, {
    key: "viewPushPreferencesForChannelByUrlWithHttpInfo",
    value: function viewPushPreferencesForChannelByUrlWithHttpInfo(apiToken, userId, channelUrl) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewPushPreferencesForChannelByUrl");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewPushPreferencesForChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewPushPreferencesForChannelByUrl");
      }
      var pathParams = {
        'user_id': userId,
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
      var returnType = _ViewPushPreferencesForChannelByUrlResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View push preferences for a channel
     * ## View push preferences for a channel  Retrieves whether a user has turned on notification messages for a specific channel. The push notifications feature is only available for group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-push-preferences-for-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushPreferencesForChannelByUrlResponse}
     */
  }, {
    key: "viewPushPreferencesForChannelByUrl",
    value: function viewPushPreferencesForChannelByUrl(apiToken, userId, channelUrl) {
      return this.viewPushPreferencesForChannelByUrlWithHttpInfo(apiToken, userId, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a user
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeUnreadCount 
     * @param {String} opts.customTypes 
     * @param {String} opts.superMode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdUser} and HTTP response
     */
  }, {
    key: "viewUserByIdWithHttpInfo",
    value: function viewUserByIdWithHttpInfo(apiToken, userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewUserById");
      }
      // verify the required parameter 'userId' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendBirdUser["default"];
      return this.apiClient.callApi('/v3/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a user
     * ## View a user  Retrieves information on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-a-user ----------------------------   `user_id`      Type: string      Description: Specifies the unique ID of the user to retrieve.
     * @param {String} apiToken 
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeUnreadCount 
     * @param {String} opts.customTypes 
     * @param {String} opts.superMode 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdUser}
     */
  }, {
    key: "viewUserById",
    value: function viewUserById(apiToken, userId, opts) {
      return this.viewUserByIdWithHttpInfo(apiToken, userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View who owns a registration or device token
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} tokenType 
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner>} and HTTP response
     */
  }, {
    key: "viewWhoOwnsRegistrationOrDeviceTokenByTokenWithHttpInfo",
    value: function viewWhoOwnsRegistrationOrDeviceTokenByTokenWithHttpInfo(apiToken, tokenType, token) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewWhoOwnsRegistrationOrDeviceTokenByToken");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling viewWhoOwnsRegistrationOrDeviceTokenByToken");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling viewWhoOwnsRegistrationOrDeviceTokenByToken");
      }
      var pathParams = {
        'token_type': tokenType,
        'token': token
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner["default"]];
      return this.apiClient.callApi('/v3/push/device_tokens/{token_type}/{token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View who owns a registration or device token
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * @param {String} apiToken 
     * @param {String} tokenType 
     * @param {String} token 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ViewWhoOwnsRegistrationOrDeviceTokenByTokenResponseInner>}
     */
  }, {
    key: "viewWhoOwnsRegistrationOrDeviceTokenByToken",
    value: function viewWhoOwnsRegistrationOrDeviceTokenByToken(apiToken, tokenType, token) {
      return this.viewWhoOwnsRegistrationOrDeviceTokenByTokenWithHttpInfo(apiToken, tokenType, token).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return UserApi;
}();
exports["default"] = UserApi;