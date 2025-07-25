"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddARegistrationOrDeviceTokenRequest = _interopRequireDefault(require("../model/AddARegistrationOrDeviceTokenRequest"));
var _AddARegistrationOrDeviceTokenResponse = _interopRequireDefault(require("../model/AddARegistrationOrDeviceTokenResponse"));
var _ChooseAPushNotificationContentTemplateRequest = _interopRequireDefault(require("../model/ChooseAPushNotificationContentTemplateRequest"));
var _ChooseAPushNotificationContentTemplateResponse = _interopRequireDefault(require("../model/ChooseAPushNotificationContentTemplateResponse"));
var _CreateAUserRequest = _interopRequireDefault(require("../model/CreateAUserRequest"));
var _CreateUserTokenRequest = _interopRequireDefault(require("../model/CreateUserTokenRequest"));
var _CreateUserTokenResponse = _interopRequireDefault(require("../model/CreateUserTokenResponse"));
var _GetChannelInvitationPreferenceResponse = _interopRequireDefault(require("../model/GetChannelInvitationPreferenceResponse"));
var _LeaveMyGroupChannelsRequest = _interopRequireDefault(require("../model/LeaveMyGroupChannelsRequest"));
var _ListMyGroupChannelsResponse = _interopRequireDefault(require("../model/ListMyGroupChannelsResponse"));
var _ListRegistrationOrDeviceTokensResponse = _interopRequireDefault(require("../model/ListRegistrationOrDeviceTokensResponse"));
var _ListUsersResponse = _interopRequireDefault(require("../model/ListUsersResponse"));
var _MarkAllMessagesAsReadRequest = _interopRequireDefault(require("../model/MarkAllMessagesAsReadRequest"));
var _MarkChannelMessagesAsReadRequest = _interopRequireDefault(require("../model/MarkChannelMessagesAsReadRequest"));
var _RemoveARegistrationOrDeviceTokenResponse = _interopRequireDefault(require("../model/RemoveARegistrationOrDeviceTokenResponse"));
var _RemoveAllRegistrationOrDeviceTokenResponse = _interopRequireDefault(require("../model/RemoveAllRegistrationOrDeviceTokenResponse"));
var _SendbirdUser = _interopRequireDefault(require("../model/SendbirdUser"));
var _UpdateAUserRequest = _interopRequireDefault(require("../model/UpdateAUserRequest"));
var _UpdateChannelInvitationPreferenceRequest = _interopRequireDefault(require("../model/UpdateChannelInvitationPreferenceRequest"));
var _UpdateChannelInvitationPreferenceResponse = _interopRequireDefault(require("../model/UpdateChannelInvitationPreferenceResponse"));
var _UpdateCountPreferenceOfAChannelRequest = _interopRequireDefault(require("../model/UpdateCountPreferenceOfAChannelRequest"));
var _UpdateCountPreferenceOfChannelByUrlResponse = _interopRequireDefault(require("../model/UpdateCountPreferenceOfChannelByUrlResponse"));
var _UpdatePushPreferencesForAChannelRequest = _interopRequireDefault(require("../model/UpdatePushPreferencesForAChannelRequest"));
var _UpdatePushPreferencesForAChannelResponse = _interopRequireDefault(require("../model/UpdatePushPreferencesForAChannelResponse"));
var _UpdatePushPreferencesRequest = _interopRequireDefault(require("../model/UpdatePushPreferencesRequest"));
var _UpdatePushPreferencesResponse = _interopRequireDefault(require("../model/UpdatePushPreferencesResponse"));
var _ViewCountPreferenceOfAChannelResponse = _interopRequireDefault(require("../model/ViewCountPreferenceOfAChannelResponse"));
var _ViewNumberOfChannelsWithUnreadMessagesResponse = _interopRequireDefault(require("../model/ViewNumberOfChannelsWithUnreadMessagesResponse"));
var _ViewNumberOfUnreadMessagesResponse = _interopRequireDefault(require("../model/ViewNumberOfUnreadMessagesResponse"));
var _ViewPushPreferencesForAChannelResponse = _interopRequireDefault(require("../model/ViewPushPreferencesForAChannelResponse"));
var _ViewPushPreferencesResponse = _interopRequireDefault(require("../model/ViewPushPreferencesResponse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* User service.
* @module api/UserApi
* @version 2.0.0
*/
var UserApi = exports["default"] = /*#__PURE__*/function () {
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
   * @param {String} userId (Required) 
   * @param {module:model/String} tokenType (Required) 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/AddARegistrationOrDeviceTokenRequest} opts.addARegistrationOrDeviceTokenRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddARegistrationOrDeviceTokenResponse} and HTTP response
   */
  return _createClass(UserApi, [{
    key: "addARegistrationOrDeviceTokenWithHttpInfo",
    value: function addARegistrationOrDeviceTokenWithHttpInfo(userId, tokenType, opts) {
      opts = opts || {};
      var postBody = opts['addARegistrationOrDeviceTokenRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling addARegistrationOrDeviceToken");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling addARegistrationOrDeviceToken");
      }
      var pathParams = {
        'user_id': userId,
        'token_type': tokenType
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddARegistrationOrDeviceTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Add a registration or device token
     * ## Add a registration or device token  > __Note__: A user can have up to 20 FCM registration tokens, 20 HMS device tokens, and 20 APNs device tokens each. The oldest token will be deleted before a new token is added for a user who already has 20 registration or device tokens. Only the 20 newest tokens will be maintained for users who already have more than 20 of each token type.  To send notification requests to push notification services on behalf of your server, adds a specific user's FCM registration token, HMS device token, or APNs device token to Sendbird server. Depending on which push service you are using, you can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`.  A FCM registration token and an APNs device token allow identification of each client app instance on each device, and are generated and registered by Android and iOS apps through the corresponding SDKs. Use this method if you need to register a token via your own server.  > __Note__: For more information on the registration token and device token, visit the Google's [FCM](https://firebase.google.com/docs/auth/admin/verify-id-tokens) page, Huawei's [Push kit](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/service-introduction-0000001050040060) and Apple's [APNs](https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html) page.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-add-a-registration-or-device-token ----------------------------
     * @param {String} userId (Required) 
     * @param {module:model/String} tokenType (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddARegistrationOrDeviceTokenRequest} opts.addARegistrationOrDeviceTokenRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddARegistrationOrDeviceTokenResponse}
     */
  }, {
    key: "addARegistrationOrDeviceToken",
    value: function addARegistrationOrDeviceToken(userId, tokenType, opts) {
      return this.addARegistrationOrDeviceTokenWithHttpInfo(userId, tokenType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Choose a push notification content template
     * ## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user's device. Sendbird provides two types: `default` and `alternative`. Go to **Settings** > **Chat** > **Push notifications** > **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the `push_message_template` property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user's choice.  > **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ChooseAPushNotificationContentTemplateRequest} opts.chooseAPushNotificationContentTemplateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChooseAPushNotificationContentTemplateResponse} and HTTP response
     */
  }, {
    key: "chooseAPushNotificationContentTemplateWithHttpInfo",
    value: function chooseAPushNotificationContentTemplateWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['chooseAPushNotificationContentTemplateRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling chooseAPushNotificationContentTemplate");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ChooseAPushNotificationContentTemplateResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/template', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Choose a push notification content template
     * ## Choose a push notification content template  Users can choose a template to determine how push notifications appear to them. Push notification content templates are pre-formatted forms that can be customized to display your own push notification messages on a user's device. Sendbird provides two types: `default` and `alternative`. Go to **Settings** > **Chat** > **Push notifications** > **Push notification content templates** on [Sendbird Dashboard](https://dashboard.sendbird.com/auth/signin) to customize the templates.  If the `push_message_template` property is specified when [sending a message](https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message), the content template customized for the message takes precedence over the user's choice.  > **Note**: Push notifications are only available for group channels.      https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/choose-a-push-notification-content-template#1-choose-a-push-notification-content-template
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ChooseAPushNotificationContentTemplateRequest} opts.chooseAPushNotificationContentTemplateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChooseAPushNotificationContentTemplateResponse}
     */
  }, {
    key: "chooseAPushNotificationContentTemplate",
    value: function chooseAPushNotificationContentTemplate(userId, opts) {
      return this.chooseAPushNotificationContentTemplateWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a user
     * ## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateAUserRequest} opts.createAUserRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendbirdUser} and HTTP response
     */
  }, {
    key: "createAUserWithHttpInfo",
    value: function createAUserWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createAUserRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendbirdUser["default"];
      return this.apiClient.callApi('/v3/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a user
     * ## Create a user  You should create a user in your Sendbird application to initiate conversations in channels. A user is identified by its unique user ID, and additionally have a changeable nickname, profile image, and so on. Users are at the core of all conversations. Sendbird applications are made up of users who chat in either Open Channels or Group Channels. Using this API, it is possible to have fine grained control over your users and what those users can do. To learn more about users, see [User overview](https://sendbird.com/docs/chat/platform-api/v3/user/user-overview#2-resource-representation).  https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#1-create-a-user
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateAUserRequest} opts.createAUserRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendbirdUser}
     */
  }, {
    key: "createAUser",
    value: function createAUser(opts) {
      return this.createAUserWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create user token
     * ## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server's performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  > **Note**: The endpoint `/users/{user_id}` is deprecated. Use `/users/{user_id}/token` for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateUserTokenRequest} opts.createUserTokenRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateUserTokenResponse} and HTTP response
     */
  }, {
    key: "createUserTokenWithHttpInfo",
    value: function createUserTokenWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['createUserTokenRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createUserToken");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Create user token  This action issues a session token for user authentication. Session tokens provide an efficient stateless authentication method by not storing the tokens in the Sendbird database, and thus improving the server's performance. See [access token vs. session token](https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user#2-access-token-vs-session-token) to learn more about authenticating users.  > **Note**: The endpoint `/users/{user_id}` is deprecated. Use `/users/{user_id}/token` for greater efficiency.      https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token#1-issue-a-session-token
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateUserTokenRequest} opts.createUserTokenRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateUserTokenResponse}
     */
  }, {
    key: "createUserToken",
    value: function createUserToken(userId, opts) {
      return this.createUserTokenWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a user
     * ## Delete a user  You can delete a user from your Sendbird application using this API.  > **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "deleteAUserWithHttpInfo",
    value: function deleteAUserWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteAUser");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Delete a user  You can delete a user from your Sendbird application using this API.  > **Note**: This API deletes user data and metadata, except for their messages. If you wish to delete user data including their messages, use the [GDPR request](https://sendbird.com/docs/chat/platform-api/v3/privacy/privacy-overview).      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/delete-a-user#1-delete-a-user)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "deleteAUser",
    value: function deleteAUser(userId, opts) {
      return this.deleteAUserWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get channel invitation preference
     * ## Get channel invitation preference  This action retrieves a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetChannelInvitationPreferenceResponse} and HTTP response
     */
  }, {
    key: "getChannelInvitationPreferenceWithHttpInfo",
    value: function getChannelInvitationPreferenceWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getChannelInvitationPreference");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetChannelInvitationPreferenceResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/channel_invitation_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get channel invitation preference
     * ## Get channel invitation preference  This action retrieves a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Users are subject to both user-specific and application-wide invitation preferences. Of the two, the invitation preference set for a specific user takes precedence over [the default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/get-default-invitation-preference).  [https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/get-channel-invitation-preference#1-get-channel-invitation-preference)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetChannelInvitationPreferenceResponse}
     */
  }, {
    key: "getChannelInvitationPreference",
    value: function getChannelInvitationPreference(userId, opts) {
      return this.getChannelInvitationPreferenceWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Leave my group channels
     * ## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can't be called for a deactivated user, ensure that the [<code>leave_all_when_deactivated</code>](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of `true` to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  `user_id`   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/LeaveMyGroupChannelsRequest} opts.leaveMyGroupChannelsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "leaveMyGroupChannelsWithHttpInfo",
    value: function leaveMyGroupChannelsWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['leaveMyGroupChannelsRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling leaveMyGroupChannels");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Leave my group channels  This action allows a user to leave all group channels or channels with a specific custom type. This API is useful if you want to let a user leave a set of channels at once. To let a user leave only one of their group channels, use the [leave a channel API](https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/leave-a-channel) instead.  Since this API can't be called for a deactivated user, ensure that the [<code>leave_all_when_deactivated</code>](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#2-request-body) property of the user is set to its default value of `true` to let the user leave all joined group channels upon deactivation.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/leave-group-channels#1-leave-group-channels  `user_id`   Type: string   Description: Specifies the unique ID of the user to leave all joined group channels.
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/LeaveMyGroupChannelsRequest} opts.leaveMyGroupChannelsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "leaveMyGroupChannels",
    value: function leaveMyGroupChannels(userId, opts) {
      return this.leaveMyGroupChannelsWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List my group channels
     * ## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you're looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * @param {String} userId (Required) 
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @param {Number} opts.limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param {module:model/String} opts.distinctMode 
     * @param {module:model/String} opts.publicMode 
     * @param {module:model/String} opts.superMode 
     * @param {Number} opts.createdAfter Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @param {Number} opts.createdBefore Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @param {Boolean} opts.showEmpty 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {Boolean} opts.showMetadata 
     * @param {Boolean} opts.showFrozen 
     * @param {module:model/String} opts.order 
     * @param {String} opts.metadataOrderKey Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @param {String} opts.customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param {String} opts.customTypeStartswith Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @param {String} opts.channelUrls Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param {String} opts.name Specifies one or more group channel names.
     * @param {String} opts.nameContains Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param {String} opts.nameStartswith Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param {String} opts.membersExactlyIn Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param {String} opts.membersIncludeIn Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param {String} opts.queryType Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @param {String} opts.membersNickname Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @param {String} opts.membersNicknameContains Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @param {String} opts.membersNicknameStartswith Searches for group channels with members whose nicknames begin with the specified value. This parameter isn't case-sensitive. URL encoding the value is recommended.
     * @param {String} opts.searchQuery Searches for group channels where the specified query string matches the channel name or the nickname of the member. This parameter isn't case-sensitive and should be specified in conjunction with the search_fields parameter below. URL encoding the value is recommended.
     * @param {String} opts.searchFields Specifies a comma-separated string of one or more search fields to apply to the query, which restricts the results within the specified fields (OR search condition). Acceptable values are channel_name and member_nickname. This is effective only when the search_query parameter above is specified. (Default: channel_name, member_nickname together)
     * @param {String} opts.metadataKey Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @param {String} opts.metadataValues Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param {String} opts.metadataValueStartswith Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param {String} opts.metacounterKey Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @param {String} opts.metacounterValues Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueGt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueGte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueLt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueLte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {Boolean} opts.includeSortedMetaarrayInLastMessage Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     * @param {module:model/String} opts.hiddenMode Restricts the search scope to group channels that match a specific hidden_status and operating behavior
     * @param {module:model/String} opts.unreadFilter Restricts the search scope to only retrieve group channels with one or more unread messages. This filter doesn't support Supergroup channels. Acceptable values are all and unread_message. (Default: all)
     * @param {module:model/String} opts.memberStateFilter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMyGroupChannelsResponse} and HTTP response
     */
  }, {
    key: "listMyGroupChannelsWithHttpInfo",
    value: function listMyGroupChannelsWithHttpInfo(userId, apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listMyGroupChannels");
      }
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listMyGroupChannels");
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
        'members_nickname_startswith': opts['membersNicknameStartswith'],
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
        'include_sorted_metaarray_in_last_message': opts['includeSortedMetaarrayInLastMessage'],
        'hidden_mode': opts['hiddenMode'],
        'unread_filter': opts['unreadFilter'],
        'member_state_filter': opts['memberStateFilter']
      };
      var headerParams = {
        'api-token': apiToken
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
     * ## List my group channels  This action retrieves a list of [group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) that a specific user has joined. You can use various query parameters to determine the search scope and select what kind of information you want to receive about the queried channels.  If you're looking to retrieve a list of group channels in a specific application, visit the [list group channels](https://sendbird.com/docs/chat/platform-api/v3/channel/listing-channels-in-an-application/list-group-channels) page under the Channel section.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-joined-group-channels/list-group-channels-by-user#1-list-group-channels-by-user  `user_id`   Type: string   Description: Specifies the unique ID of the target user.
     * @param {String} userId (Required) 
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token Specifies a page token that indicates the starting index of a chunk of results. If not specified, the index is set as 0.
     * @param {Number} opts.limit Specifies the number of results to return per page. Acceptable values are 1 to 100, inclusive. (Default: 10)
     * @param {module:model/String} opts.distinctMode 
     * @param {module:model/String} opts.publicMode 
     * @param {module:model/String} opts.superMode 
     * @param {Number} opts.createdAfter Restricts the search scope to only retrieve group channels which have been created after the specified time, in Unix milliseconds format.
     * @param {Number} opts.createdBefore Restricts the search scope to only retrieve group channels which have been created before the specified time, in Unix milliseconds format.
     * @param {Boolean} opts.showEmpty 
     * @param {Boolean} opts.showMember 
     * @param {Boolean} opts.showDeliveryReceipt 
     * @param {Boolean} opts.showReadReceipt 
     * @param {Boolean} opts.showMetadata 
     * @param {Boolean} opts.showFrozen 
     * @param {module:model/String} opts.order 
     * @param {String} opts.metadataOrderKey Specifies the key of an item in metadata. When a value of the order parameter is set to metadata_value_alphabetical, the results are alphabetically sorted by the value of the item specified by the key.
     * @param {String} opts.customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param {String} opts.customTypeStartswith Searches for group channels with the custom type which starts with the specified value. URL encoding the value is recommended.
     * @param {String} opts.channelUrls Specifies a comma-separated string of one or more group channel URLs to restrict the search scope. URL encoding each channel URL is recommended.
     * @param {String} opts.name Specifies one or more group channel names.
     * @param {String} opts.nameContains Searches for group channels whose names contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param {String} opts.nameStartswith Searches for group channels whose names start with the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.
     * @param {String} opts.membersExactlyIn Searches for group channels with all the specified users as members. The parameter value should consist of user IDs separated by commas.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param {String} opts.membersIncludeIn Searches for group channels that include one or more users as members among the specified users. The value should consist of user IDs separated by commas or %2C. You can specify up to 60 user IDs.  Only user IDs that match those of existing users are used for channel search. URL encoding each ID is recommended.
     * @param {String} opts.queryType Specifies a logical condition applied to the members_include_in parameter. Acceptable values are either AND or OR. For example, if you specify three members, A, B, and C, in members_include_in, the value of AND returns all channels that include every one of {A. B, C} as members. The value of OR returns channels that include {A}, plus those that include {B}, plus those that include {C}. (Default: AND)
     * @param {String} opts.membersNickname Searches for group channels with members whose nicknames match the specified value. URL encoding the value is recommended.
     * @param {String} opts.membersNicknameContains Searches for group channels with members whose nicknames contain the specified value. Note that this parameter is case-insensitive. URL encoding the value is recommended.  * We recommend using at least three characters for the parameter value for better search efficiency when you design and implement related features. If you would like to allow one or two characters for searching, use members_nickname instead to prevent performance issues.
     * @param {String} opts.membersNicknameStartswith Searches for group channels with members whose nicknames begin with the specified value. This parameter isn't case-sensitive. URL encoding the value is recommended.
     * @param {String} opts.searchQuery Searches for group channels where the specified query string matches the channel name or the nickname of the member. This parameter isn't case-sensitive and should be specified in conjunction with the search_fields parameter below. URL encoding the value is recommended.
     * @param {String} opts.searchFields Specifies a comma-separated string of one or more search fields to apply to the query, which restricts the results within the specified fields (OR search condition). Acceptable values are channel_name and member_nickname. This is effective only when the search_query parameter above is specified. (Default: channel_name, member_nickname together)
     * @param {String} opts.metadataKey Searches for group channels with metadata containing an item with the specified value as its key. To use this parameter, either the metadata_values parameter or the metadata_value_startswith parameter should be specified.
     * @param {String} opts.metadataValues Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple values separated by commas. URL encoding each value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param {String} opts.metadataValueStartswith Searches for group channels with metadata containing an item with the key specified by the metadata_key parameter, and the values of that item that start with the specified value of this parameter. URL encoding the value is recommended. To use this parameter, the metadata_key parameter should be specified.
     * @param {String} opts.metacounterKey Searches for group channels with metacounter containing an item with the specified value as its key. To use this parameter, either the metacounter_values parameter or one of the metacounter_value_gt, metacounter_value_gte, metacounter_value_lt, and metacounter_value_lte parameters should be specified.
     * @param {String} opts.metacounterValues Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is equal to one or more values specified by this parameter. The string should be specified with multiple values separated by commas. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueGt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueGte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is greater than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueLt Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {String} opts.metacounterValueLte Searches for group channels with metacounter containing an item with the key specified by the metadata_key parameter, where the value of that item is lower than or equal to the value specified by this parameter. To use this parameter, the metacounter_key parameter should be specified.
     * @param {Boolean} opts.includeSortedMetaarrayInLastMessage Determines whether to include the sorted_metaarray as one of the last_message’s properties in the response.
     * @param {module:model/String} opts.hiddenMode Restricts the search scope to group channels that match a specific hidden_status and operating behavior
     * @param {module:model/String} opts.unreadFilter Restricts the search scope to only retrieve group channels with one or more unread messages. This filter doesn't support Supergroup channels. Acceptable values are all and unread_message. (Default: all)
     * @param {module:model/String} opts.memberStateFilter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMyGroupChannelsResponse}
     */
  }, {
    key: "listMyGroupChannels",
    value: function listMyGroupChannels(userId, apiToken, opts) {
      return this.listMyGroupChannelsWithHttpInfo(userId, apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List registration or device tokens
     * ## List registration or device tokens  Retrieves a list of a user's registration or device tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens
     * @param {String} userId (Required) 
     * @param {module:model/String} tokenType (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListRegistrationOrDeviceTokensResponse} and HTTP response
     */
  }, {
    key: "listRegistrationOrDeviceTokensWithHttpInfo",
    value: function listRegistrationOrDeviceTokensWithHttpInfo(userId, tokenType, opts) {
      opts = opts || {};
      var postBody = null;
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
        'api-token': opts['apiToken']
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
     * ## List registration or device tokens  Retrieves a list of a user's registration or device tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/list-registration-or-device-tokens#1-list-registration-or-device-tokens
     * @param {String} userId (Required) 
     * @param {module:model/String} tokenType (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListRegistrationOrDeviceTokensResponse}
     */
  }, {
    key: "listRegistrationOrDeviceTokens",
    value: function listRegistrationOrDeviceTokens(userId, tokenType, opts) {
      return this.listRegistrationOrDeviceTokensWithHttpInfo(userId, tokenType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List users
     * ## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.activeMode Specifies the activation status of the users in the list. Acceptable values are `activated`, `deactivated`, and `all`. (Default: `activated`)
     * @param {Boolean} opts.showBot Determines whether to include bots in the list. (Default: true)
     * @param {String} opts.userIds Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids=urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret.
     * @param {String} opts.nickname 
     * @param {String} opts.nicknameStartswith 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, `?metadatavalues_in=urlencoded_value_1, urlencoded_value_2`). This parameter should be specified in conjunction with the `metadatakey` above.
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUsersResponse} and HTTP response
     */
  }, {
    key: "listUsersWithHttpInfo",
    value: function listUsersWithHttpInfo(opts) {
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
        'api-token': opts['apiToken']
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
     * ## List users  You can retrieve a list of users in your Sendbird application using this API. You can generate a customized list using various parameter combinations.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/list-users#1-list-users
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:model/String} opts.activeMode Specifies the activation status of the users in the list. Acceptable values are `activated`, `deactivated`, and `all`. (Default: `activated`)
     * @param {Boolean} opts.showBot Determines whether to include bots in the list. (Default: true)
     * @param {String} opts.userIds Specifies the user IDs. The value should be a comma-separated string that consists of multiple urlencoded user IDs. An example of a urlencoded string is ?user_ids=urlencoded_id_1,urlencoded_id_2. * The maximum number of user IDs in this parameter is 250. If you exceed the maximum number, your request may receive an HTTP 414 error indicating that the request URL is longer than what Sendbird server can interpret.
     * @param {String} opts.nickname 
     * @param {String} opts.nicknameStartswith 
     * @param {String} opts.metadatakey 
     * @param {String} opts.metadatavaluesIn Searches for blocked users with metadata containing an item with the key specified by the metadatakey parameter above, and the value of that item matches one or more values specified by this parameter. The string should be specified with multiple urlencoded metadata values separated by commas (for example, `?metadatavalues_in=urlencoded_value_1, urlencoded_value_2`). This parameter should be specified in conjunction with the `metadatakey` above.
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUsersResponse}
     */
  }, {
    key: "listUsers",
    value: function listUsers(opts) {
      return this.listUsersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Mark all messages as read
     * ## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/MarkAllMessagesAsReadRequest} opts.markAllMessagesAsReadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "markAllMessagesAsReadWithHttpInfo",
    value: function markAllMessagesAsReadWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['markAllMessagesAsReadRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling markAllMessagesAsRead");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Mark all messages as read  This action marks all of a user's unread messages as read in certain group channels. If channels aren't specified, the user's unread messages in all group channels are marked as read.  https://sendbird.com/docs/chat/platform-api/v3/user/marking-messages-as-read/mark-all-of-a-users-messages-as-read#1-mark-all-of-a-user-s-messages-as-read
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/MarkAllMessagesAsReadRequest} opts.markAllMessagesAsReadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "markAllMessagesAsRead",
    value: function markAllMessagesAsRead(userId, opts) {
      return this.markAllMessagesAsReadWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a registration or device token - When unregistering a specific token
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * @param {String} userId (Required) 
     * @param {module:model/String} tokenType (Required) 
     * @param {String} token (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveARegistrationOrDeviceTokenResponse} and HTTP response
     */
  }, {
    key: "removeARegistrationOrDeviceTokenWithHttpInfo",
    value: function removeARegistrationOrDeviceTokenWithHttpInfo(userId, tokenType, token, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeARegistrationOrDeviceToken");
      }
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling removeARegistrationOrDeviceToken");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling removeARegistrationOrDeviceToken");
      }
      var pathParams = {
        'user_id': userId,
        'token_type': tokenType,
        'token': token
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoveARegistrationOrDeviceTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push/{token_type}/{token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a registration or device token - When unregistering a specific token
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * @param {String} userId (Required) 
     * @param {module:model/String} tokenType (Required) 
     * @param {String} token (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveARegistrationOrDeviceTokenResponse}
     */
  }, {
    key: "removeARegistrationOrDeviceToken",
    value: function removeARegistrationOrDeviceToken(userId, tokenType, token, opts) {
      return this.removeARegistrationOrDeviceTokenWithHttpInfo(userId, tokenType, token, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a registration or device token from an owner
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner
     * @param {String} tokenType (Required) 
     * @param {String} token (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MarkChannelMessagesAsReadRequest>} and HTTP response
     */
  }, {
    key: "removeARegistrationOrDeviceTokenFromAnOwnerWithHttpInfo",
    value: function removeARegistrationOrDeviceTokenFromAnOwnerWithHttpInfo(tokenType, token, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling removeARegistrationOrDeviceTokenFromAnOwner");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling removeARegistrationOrDeviceTokenFromAnOwner");
      }
      var pathParams = {
        'token_type': tokenType,
        'token': token
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MarkChannelMessagesAsReadRequest["default"]];
      return this.apiClient.callApi('/v3/push/device_tokens/{token_type}/{token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a registration or device token from an owner
     * ## Remove a registration or device token from an owner  Removes a registration or device token from a user who is the owner of the token. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token-from-an-owner#1-remove-a-registration-or-device-token-from-an-owner
     * @param {String} tokenType (Required) 
     * @param {String} token (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MarkChannelMessagesAsReadRequest>}
     */
  }, {
    key: "removeARegistrationOrDeviceTokenFromAnOwner",
    value: function removeARegistrationOrDeviceTokenFromAnOwner(tokenType, token, opts) {
      return this.removeARegistrationOrDeviceTokenFromAnOwnerWithHttpInfo(tokenType, token, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a registration or device token - When unregistering all device tokens
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveAllRegistrationOrDeviceTokenResponse} and HTTP response
     */
  }, {
    key: "removeAllRegistrationOrDeviceTokenWithHttpInfo",
    value: function removeAllRegistrationOrDeviceTokenWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling removeAllRegistrationOrDeviceToken");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoveAllRegistrationOrDeviceTokenResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a registration or device token - When unregistering all device tokens
     * ## Remove a registration or device token  Removes a user's specific registration or device token or all tokens. You can pass `gcm`, `huawei`, or `apns` for FCM registration token, HMS device token, or APNs device token, respectively, in the `token_type` parameter for the push notification service you are using.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-device-tokens/remove-a-registration-or-device-token#1-remove-a-registration-or-device-token
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveAllRegistrationOrDeviceTokenResponse}
     */
  }, {
    key: "removeAllRegistrationOrDeviceToken",
    value: function removeAllRegistrationOrDeviceToken(userId, opts) {
      return this.removeAllRegistrationOrDeviceTokenWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Reset push preferences
     * ## Reset push preferences  You can reset a user's notifications preferences. The values are reset to the default as the following.  - The values for the `do_not_disturb` and `snooze_enabled` properties are set to `false`.      - The values of the parameters associated with the time frame are all set to `0`.      - The value for the `timezone` property is set to `UTC`.      - The value for the `push_sound` property is set to `default`.       > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "resetPushPreferencesWithHttpInfo",
    value: function resetPushPreferencesWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling resetPushPreferences");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Reset push preferences
     * ## Reset push preferences  You can reset a user's notifications preferences. The values are reset to the default as the following.  - The values for the `do_not_disturb` and `snooze_enabled` properties are set to `false`.      - The values of the parameters associated with the time frame are all set to `0`.      - The value for the `timezone` property is set to `UTC`.      - The value for the `push_sound` property is set to `default`.       > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/reset-push-notification-preferences#1-reset-push-notification-preferences)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "resetPushPreferences",
    value: function resetPushPreferences(userId, opts) {
      return this.resetPushPreferencesWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a user
     * ## Update a user  You can update information about a user using this API. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the `leave_all_when_deactivated` is set to `true`, a user leaves all joined group channels and becomes deactivated.  > **Note**: Issuing session tokens through the `/users/{user_id}` endpoint is now deprecated and it&apos;s replaced with [&lt;code&gt;/users/{user_id}/token&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAUserRequest} opts.updateAUserRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendbirdUser} and HTTP response
     */
  }, {
    key: "updateAUserWithHttpInfo",
    value: function updateAUserWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['updateAUserRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateAUser");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendbirdUser["default"];
      return this.apiClient.callApi('/v3/users/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a user
     * ## Update a user  You can update information about a user using this API. In addition to changing a user's nickname or profile image, you can issue a new access token for the user. The new access token replaces the previous one as the necessary token for authentication.  You can also deactivate or reactivate a user using this API request. If the `leave_all_when_deactivated` is set to `true`, a user leaves all joined group channels and becomes deactivated.  > **Note**: Issuing session tokens through the `/users/{user_id}` endpoint is now deprecated and it&apos;s replaced with [&lt;code&gt;/users/{user_id}/token&lt;/code&gt;](https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token) endpoint for greater efficiency. For those who are currently using the old endpoint, you can start issuing tokens using the new endpoint.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user](https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user#1-update-a-user)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAUserRequest} opts.updateAUserRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendbirdUser}
     */
  }, {
    key: "updateAUser",
    value: function updateAUser(userId, opts) {
      return this.updateAUserWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update channel invitation preference
     * ## Update channel invitation preference  This action updates a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application's default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won't override existing users' individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateChannelInvitationPreferenceRequest} opts.updateChannelInvitationPreferenceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateChannelInvitationPreferenceResponse} and HTTP response
     */
  }, {
    key: "updateChannelInvitationPreferenceWithHttpInfo",
    value: function updateChannelInvitationPreferenceWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['updateChannelInvitationPreferenceRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateChannelInvitationPreference");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Update channel invitation preference  This action updates a user's [group channel](https://sendbird.com/docs/chat/platform-api/v3/channel/channel-overview#2-channel-types-3-group-channel) invitation preference. Updating the [application's default channel invitation preference](https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/update-default-invitation-preference) won't override existing users' individual channel invitation preferences. The changed preference only affects the users created after the update.  https://sendbird.com/docs/chat/platform-api/v3/channel/managing-a-channel/update-channel-invitation-preference#1-update-channel-invitation-preference
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateChannelInvitationPreferenceRequest} opts.updateChannelInvitationPreferenceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateChannelInvitationPreferenceResponse}
     */
  }, {
    key: "updateChannelInvitationPreference",
    value: function updateChannelInvitationPreference(userId, opts) {
      return this.updateChannelInvitationPreferenceWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update count preference of a channel
     * ## Update count preference of a channel  This action updates a user's count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateCountPreferenceOfAChannelRequest} opts.updateCountPreferenceOfAChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateCountPreferenceOfChannelByUrlResponse} and HTTP response
     */
  }, {
    key: "updateCountPreferenceOfAChannelWithHttpInfo",
    value: function updateCountPreferenceOfAChannelWithHttpInfo(userId, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['updateCountPreferenceOfAChannelRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateCountPreferenceOfAChannel");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateCountPreferenceOfAChannel");
      }
      var pathParams = {
        'user_id': userId,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Update count preference of a channel  This action updates a user's count preference of a specific group channel. The count preference allows a user to either update the number of unread messages or the number of unread mentioned messages, or both in a specific group channel.  If you want to retrieve the total number count of a specific group channel, go to the [get count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel) page.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel#1-update-count-preference-of-a-channel
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateCountPreferenceOfAChannelRequest} opts.updateCountPreferenceOfAChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateCountPreferenceOfChannelByUrlResponse}
     */
  }, {
    key: "updateCountPreferenceOfAChannel",
    value: function updateCountPreferenceOfAChannel(userId, channelUrl, opts) {
      return this.updateCountPreferenceOfAChannelWithHttpInfo(userId, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update push preferences
     * ## Update push preferences  You can update a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushPreferencesRequest} opts.updatePushPreferencesRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatePushPreferencesResponse} and HTTP response
     */
  }, {
    key: "updatePushPreferencesWithHttpInfo",
    value: function updatePushPreferencesWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['updatePushPreferencesRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePushPreferences");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## Update push preferences  You can update a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences#1-update-push-notification-preferences)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushPreferencesRequest} opts.updatePushPreferencesRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatePushPreferencesResponse}
     */
  }, {
    key: "updatePushPreferences",
    value: function updatePushPreferences(userId, opts) {
      return this.updatePushPreferencesWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update push preferences for a channel
     * ## Update push preferences for a channel  You can update a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushPreferencesForAChannelRequest} opts.updatePushPreferencesForAChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatePushPreferencesForAChannelResponse} and HTTP response
     */
  }, {
    key: "updatePushPreferencesForAChannelWithHttpInfo",
    value: function updatePushPreferencesForAChannelWithHttpInfo(userId, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['updatePushPreferencesForAChannelRequest'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePushPreferencesForAChannel");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updatePushPreferencesForAChannel");
      }
      var pathParams = {
        'user_id': userId,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdatePushPreferencesForAChannelResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update push preferences for a channel
     * ## Update push preferences for a channel  You can update a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/update-push-notification-preferences-for-a-channel#1-update-push-notification-preferences-for-a-channel)
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushPreferencesForAChannelRequest} opts.updatePushPreferencesForAChannelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatePushPreferencesForAChannelResponse}
     */
  }, {
    key: "updatePushPreferencesForAChannel",
    value: function updatePushPreferencesForAChannel(userId, channelUrl, opts) {
      return this.updatePushPreferencesForAChannelWithHttpInfo(userId, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a user
     * ## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  `user_id`   Type: string   Description: Specifies the unique ID of the user to retrieve.
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeUnreadCount 
     * @param {String} opts.customTypes 
     * @param {module:model/String} opts.superMode Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are `all`, `super`, and `nonsuper`. This parameter should be specified in conjunction with `include_unread_count` above. (Default: `all`)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendbirdUser} and HTTP response
     */
  }, {
    key: "viewAUserWithHttpInfo",
    value: function viewAUserWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewAUser");
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
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendbirdUser["default"];
      return this.apiClient.callApi('/v3/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a user
     * ## View a user  You can retrieve information about a user using this API.  https://sendbird.com/docs/chat/platform-api/v3/user/listing-users/get-a-user#1-get-a-user  `user_id`   Type: string   Description: Specifies the unique ID of the user to retrieve.
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeUnreadCount 
     * @param {String} opts.customTypes 
     * @param {module:model/String} opts.superMode Restricts the search scope to retrieve only Supergroup or non-Supergroup channels. Acceptable values are `all`, `super`, and `nonsuper`. This parameter should be specified in conjunction with `include_unread_count` above. (Default: `all`)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendbirdUser}
     */
  }, {
    key: "viewAUser",
    value: function viewAUser(userId, opts) {
      return this.viewAUserWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View count preference of a channel
     * ## View count preference of a channel  This action retrieves a user's count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewCountPreferenceOfAChannelResponse} and HTTP response
     */
  }, {
    key: "viewCountPreferenceOfAChannelWithHttpInfo",
    value: function viewCountPreferenceOfAChannelWithHttpInfo(userId, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewCountPreferenceOfAChannel");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewCountPreferenceOfAChannel");
      }
      var pathParams = {
        'user_id': userId,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewCountPreferenceOfAChannelResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/count_preference/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View count preference of a channel
     * ## View count preference of a channel  This action retrieves a user's count preference of a specific group channel. The count preference allows a user to either retrieve the number of unread messages or unread mentioned messages, or both in a specific group channel.  If you want to update the total number count of a specific group channel, visit the [update count preference of a channel](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/update-count-preference-of-a-channel).  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-count-preference-of-a-channel#1-get-count-preference-of-a-channel
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewCountPreferenceOfAChannelResponse}
     */
  }, {
    key: "viewCountPreferenceOfAChannel",
    value: function viewCountPreferenceOfAChannel(userId, channelUrl, opts) {
      return this.viewCountPreferenceOfAChannelWithHttpInfo(userId, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of channels with unread messages
     * ## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customTypes 
     * @param {module:model/String} opts.superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfChannelsWithUnreadMessagesResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfChannelsWithUnreadMessagesWithHttpInfo",
    value: function viewNumberOfChannelsWithUnreadMessagesWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
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
        'api-token': opts['apiToken']
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
     * ## View number of channels with unread messages  This action retrieves the total number of group channels in which a user has unread messages. You can use various query parameters to determine the search scope of group channels.  https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-channels-with-unread-messages#1-get-number-of-channels-with-unread-messages
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customTypes 
     * @param {module:model/String} opts.superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are all, super, and nonsuper. (Default: all)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfChannelsWithUnreadMessagesResponse}
     */
  }, {
    key: "viewNumberOfChannelsWithUnreadMessages",
    value: function viewNumberOfChannelsWithUnreadMessages(userId, opts) {
      return this.viewNumberOfChannelsWithUnreadMessagesWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of unread messages
     * ## View number of unread messages  This action retrieves a user's total number of unread messages in group channels.  > **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  `user_id`   Type: string   Description: Specifies the unique ID of a user.
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param {String} opts.superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are `all`, `super`, and `nonsuper`. (Default: `all`)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfUnreadMessagesResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfUnreadMessagesWithHttpInfo",
    value: function viewNumberOfUnreadMessagesWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
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
        'api-token': opts['apiToken']
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
     * ## View number of unread messages  This action retrieves a user's total number of unread messages in group channels.  > **Note**: The unread count feature is only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages](https://sendbird.com/docs/chat/platform-api/v3/user/managing-unread-count/get-number-of-unread-messages#1-get-number-of-unread-messages)  `user_id`   Type: string   Description: Specifies the unique ID of a user.
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.customTypes Specifies a comma-separated string of one or more custom types to filter group channels. URL encoding each type is recommended. If not specified, all channels are returned, regardless of their custom type.
     * @param {String} opts.superMode Restricts the search scope to either Supergroup channels or non-Supergroup channels or both. Acceptable values are `all`, `super`, and `nonsuper`. (Default: `all`)
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfUnreadMessagesResponse}
     */
  }, {
    key: "viewNumberOfUnreadMessages",
    value: function viewNumberOfUnreadMessages(userId, opts) {
      return this.viewNumberOfUnreadMessagesWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View push preferences
     * ## View push preferences  You can retrieves a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushPreferencesResponse} and HTTP response
     */
  }, {
    key: "viewPushPreferencesWithHttpInfo",
    value: function viewPushPreferencesWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewPushPreferences");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
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
     * ## View push preferences  You can retrieves a user's notifications preferences. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences#1-get-push-notification-preferences)
     * @param {String} userId (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushPreferencesResponse}
     */
  }, {
    key: "viewPushPreferences",
    value: function viewPushPreferences(userId, opts) {
      return this.viewPushPreferencesWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View push preferences for a channel
     * ## View push preferences for a channel  You can retrieve a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushPreferencesForAChannelResponse} and HTTP response
     */
  }, {
    key: "viewPushPreferencesForAChannelWithHttpInfo",
    value: function viewPushPreferencesForAChannelWithHttpInfo(userId, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling viewPushPreferencesForAChannel");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewPushPreferencesForAChannel");
      }
      var pathParams = {
        'user_id': userId,
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewPushPreferencesForAChannelResponse["default"];
      return this.apiClient.callApi('/v3/users/{user_id}/push_preference/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View push preferences for a channel
     * ## View push preferences for a channel  You can retrieve a user's notifications preferences for a specific channel. A push notification is a message that is immediately delivered to a user's device when the device is either idle or running the client app in the background. These notifications preferences can be configured.  > **Note**: Push notifications are only available for group channels.      [https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel](https://sendbird.com/docs/chat/platform-api/v3/user/configuring-notification-preferences/get-push-notification-preferences-for-a-channel#1-get-push-notification-preferences-for-a-channel)
     * @param {String} userId (Required) 
     * @param {String} channelUrl (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushPreferencesForAChannelResponse}
     */
  }, {
    key: "viewPushPreferencesForAChannel",
    value: function viewPushPreferencesForAChannel(userId, channelUrl, opts) {
      return this.viewPushPreferencesForAChannelWithHttpInfo(userId, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View who owns a registration or device token
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * @param {String} tokenType (Required) 
     * @param {String} token (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MarkChannelMessagesAsReadRequest>} and HTTP response
     */
  }, {
    key: "viewWhoOwnsARegistrationOrDeviceTokenWithHttpInfo",
    value: function viewWhoOwnsARegistrationOrDeviceTokenWithHttpInfo(tokenType, token, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'tokenType' is set
      if (tokenType === undefined || tokenType === null) {
        throw new Error("Missing the required parameter 'tokenType' when calling viewWhoOwnsARegistrationOrDeviceToken");
      }
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling viewWhoOwnsARegistrationOrDeviceToken");
      }
      var pathParams = {
        'token_type': tokenType,
        'token': token
      };
      var queryParams = {};
      var headerParams = {
        'api-token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MarkChannelMessagesAsReadRequest["default"]];
      return this.apiClient.callApi('/v3/push/device_tokens/{token_type}/{token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View who owns a registration or device token
     * ## View who owns a registration or device token  Retrieves a user who owns a FCM registration token, HMS device token, or APNs device token. You can pass one of two values in `token_type`: `gcm`, `huawei`, or `apns`, depending on which push service you are using.  https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-who-owns-a-registration-or-device-token ----------------------------
     * @param {String} tokenType (Required) 
     * @param {String} token (Required) 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MarkChannelMessagesAsReadRequest>}
     */
  }, {
    key: "viewWhoOwnsARegistrationOrDeviceToken",
    value: function viewWhoOwnsARegistrationOrDeviceToken(tokenType, token, opts) {
      return this.viewWhoOwnsARegistrationOrDeviceTokenWithHttpInfo(tokenType, token, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();