"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddApnsPushConfigurationData = _interopRequireDefault(require("../model/AddApnsPushConfigurationData"));

var _AddApnsPushConfigurationResponse = _interopRequireDefault(require("../model/AddApnsPushConfigurationResponse"));

var _AddFcmPushConfigurationData = _interopRequireDefault(require("../model/AddFcmPushConfigurationData"));

var _AddFcmPushConfigurationResponse = _interopRequireDefault(require("../model/AddFcmPushConfigurationResponse"));

var _AddHmsPushConfigurationData = _interopRequireDefault(require("../model/AddHmsPushConfigurationData"));

var _AddHmsPushConfigurationResponse = _interopRequireDefault(require("../model/AddHmsPushConfigurationResponse"));

var _AddIpToWhitelistData = _interopRequireDefault(require("../model/AddIpToWhitelistData"));

var _AddIpToWhitelistResponse = _interopRequireDefault(require("../model/AddIpToWhitelistResponse"));

var _BanUsersInChannelsWithCustomChannelTypeData = _interopRequireDefault(require("../model/BanUsersInChannelsWithCustomChannelTypeData"));

var _CustomTypeListBannedUsersResponse = _interopRequireDefault(require("../model/CustomTypeListBannedUsersResponse"));

var _DeleteAllowedIpsFromWhitelistResponse = _interopRequireDefault(require("../model/DeleteAllowedIpsFromWhitelistResponse"));

var _DeleteApnsCertificateByIdResponse = _interopRequireDefault(require("../model/DeleteApnsCertificateByIdResponse"));

var _GenerateSecondaryApiTokenData = _interopRequireDefault(require("../model/GenerateSecondaryApiTokenData"));

var _GenerateSecondaryApiTokenResponse = _interopRequireDefault(require("../model/GenerateSecondaryApiTokenResponse"));

var _ListMutedUsersInChannelsWithCustomChannelType200Response = _interopRequireDefault(require("../model/ListMutedUsersInChannelsWithCustomChannelType200Response"));

var _ListPushConfigurationsResponse = _interopRequireDefault(require("../model/ListPushConfigurationsResponse"));

var _ListPushNotificationContentTemplatesResponse = _interopRequireDefault(require("../model/ListPushNotificationContentTemplatesResponse"));

var _ListSecondaryApiTokensResponse = _interopRequireDefault(require("../model/ListSecondaryApiTokensResponse"));

var _MuteUsersInChannelsWithCustomChannelTypeData = _interopRequireDefault(require("../model/MuteUsersInChannelsWithCustomChannelTypeData"));

var _RemovePushConfigurationByIdResponse = _interopRequireDefault(require("../model/RemovePushConfigurationByIdResponse"));

var _RetrieveIpWhitelistResponse = _interopRequireDefault(require("../model/RetrieveIpWhitelistResponse"));

var _RevokeSecondaryApiTokenByTokenResponse = _interopRequireDefault(require("../model/RevokeSecondaryApiTokenByTokenResponse"));

var _SendBirdChannelResponse = _interopRequireDefault(require("../model/SendBirdChannelResponse"));

var _SetDomainFilterData = _interopRequireDefault(require("../model/SetDomainFilterData"));

var _UpdateApnsPushConfigurationByIdData = _interopRequireDefault(require("../model/UpdateApnsPushConfigurationByIdData"));

var _UpdateApnsPushConfigurationByIdResponse = _interopRequireDefault(require("../model/UpdateApnsPushConfigurationByIdResponse"));

var _UpdateDefaultChannelInvitationPreferenceData = _interopRequireDefault(require("../model/UpdateDefaultChannelInvitationPreferenceData"));

var _UpdateDefaultChannelInvitationPreferenceResponse = _interopRequireDefault(require("../model/UpdateDefaultChannelInvitationPreferenceResponse"));

var _UpdateFcmPushConfigurationByIdData = _interopRequireDefault(require("../model/UpdateFcmPushConfigurationByIdData"));

var _UpdateFcmPushConfigurationByIdResponse = _interopRequireDefault(require("../model/UpdateFcmPushConfigurationByIdResponse"));

var _UpdateHmsPushConfigurationByIdData = _interopRequireDefault(require("../model/UpdateHmsPushConfigurationByIdData"));

var _UpdateHmsPushConfigurationByIdResponse = _interopRequireDefault(require("../model/UpdateHmsPushConfigurationByIdResponse"));

var _UpdatePushNotificationContentTemplateData = _interopRequireDefault(require("../model/UpdatePushNotificationContentTemplateData"));

var _UpdatePushNotificationContentTemplateResponse = _interopRequireDefault(require("../model/UpdatePushNotificationContentTemplateResponse"));

var _ViewDefaultChannelInvitationPreferenceResponse = _interopRequireDefault(require("../model/ViewDefaultChannelInvitationPreferenceResponse"));

var _ViewPushConfigurationByIdResponse = _interopRequireDefault(require("../model/ViewPushConfigurationByIdResponse"));

var _ViewPushNotificationContentTemplateResponse = _interopRequireDefault(require("../model/ViewPushNotificationContentTemplateResponse"));

var _ViewSecondaryApiTokenByTokenResponse = _interopRequireDefault(require("../model/ViewSecondaryApiTokenByTokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Application service.
* @module api/ApplicationApi
* @version 1.0.7
*/
var ApplicationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicationApi. 
  * @alias module:api/ApplicationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicationApi(apiClient) {
    _classCallCheck(this, ApplicationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Add an APNs push configuration
   * ## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration
   * @param {String} apiToken 
   * @param {Object} opts Optional parameters
   * @param {module:model/AddApnsPushConfigurationData} opts.addApnsPushConfigurationData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddApnsPushConfigurationResponse} and HTTP response
   */


  _createClass(ApplicationApi, [{
    key: "addApnsPushConfigurationWithHttpInfo",
    value: function addApnsPushConfigurationWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['addApnsPushConfigurationData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addApnsPushConfiguration");
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
      var returnType = _AddApnsPushConfigurationResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/apns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add an APNs push configuration
     * ## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddApnsPushConfigurationData} opts.addApnsPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddApnsPushConfigurationResponse}
     */

  }, {
    key: "addApnsPushConfiguration",
    value: function addApnsPushConfiguration(apiToken, opts) {
      return this.addApnsPushConfigurationWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add a FCM push configuration
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddFcmPushConfigurationData} opts.addFcmPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddFcmPushConfigurationResponse} and HTTP response
     */

  }, {
    key: "addFcmPushConfigurationWithHttpInfo",
    value: function addFcmPushConfigurationWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['addFcmPushConfigurationData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addFcmPushConfiguration");
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
      var returnType = _AddFcmPushConfigurationResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/fcm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add a FCM push configuration
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddFcmPushConfigurationData} opts.addFcmPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddFcmPushConfigurationResponse}
     */

  }, {
    key: "addFcmPushConfiguration",
    value: function addFcmPushConfiguration(apiToken, opts) {
      return this.addFcmPushConfigurationWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add an HMS push configuration
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddHmsPushConfigurationData} opts.addHmsPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddHmsPushConfigurationResponse} and HTTP response
     */

  }, {
    key: "addHmsPushConfigurationWithHttpInfo",
    value: function addHmsPushConfigurationWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['addHmsPushConfigurationData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addHmsPushConfiguration");
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
      var returnType = _AddHmsPushConfigurationResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/hms', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add an HMS push configuration
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddHmsPushConfigurationData} opts.addHmsPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddHmsPushConfigurationResponse}
     */

  }, {
    key: "addHmsPushConfiguration",
    value: function addHmsPushConfiguration(apiToken, opts) {
      return this.addHmsPushConfigurationWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add an IP to a whitelist
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddIpToWhitelistData} opts.addIpToWhitelistData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddIpToWhitelistResponse} and HTTP response
     */

  }, {
    key: "addIpToWhitelistWithHttpInfo",
    value: function addIpToWhitelistWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['addIpToWhitelistData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addIpToWhitelist");
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
      var returnType = _AddIpToWhitelistResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/ip_whitelist', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add an IP to a whitelist
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddIpToWhitelistData} opts.addIpToWhitelistData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddIpToWhitelistResponse}
     */

  }, {
    key: "addIpToWhitelist",
    value: function addIpToWhitelist(apiToken, opts) {
      return this.addIpToWhitelistWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Ban users in channels with a custom channel type
     * ## Ban specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {module:model/BanUsersInChannelsWithCustomChannelTypeData} opts.banUsersInChannelsWithCustomChannelTypeData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "banUsersInChannelsWithCustomChannelTypeWithHttpInfo",
    value: function banUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts) {
      opts = opts || {};
      var postBody = opts['banUsersInChannelsWithCustomChannelTypeData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling banUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling banUsersInChannelsWithCustomChannelType");
      }

      var pathParams = {
        'custom_type': customType
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
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/ban', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Ban users in channels with a custom channel type
     * ## Ban specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {module:model/BanUsersInChannelsWithCustomChannelTypeData} opts.banUsersInChannelsWithCustomChannelTypeData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "banUsersInChannelsWithCustomChannelType",
    value: function banUsersInChannelsWithCustomChannelType(apiToken, customType, opts) {
      return this.banUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete allowed IPs from a whitelist
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * @param {String} apiToken 
     * @param {Array.<String>} ipWhitelistAddresses 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAllowedIpsFromWhitelistResponse} and HTTP response
     */

  }, {
    key: "deleteAllowedIpsFromWhitelistWithHttpInfo",
    value: function deleteAllowedIpsFromWhitelistWithHttpInfo(apiToken, ipWhitelistAddresses) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteAllowedIpsFromWhitelist");
      } // verify the required parameter 'ipWhitelistAddresses' is set


      if (ipWhitelistAddresses === undefined || ipWhitelistAddresses === null) {
        throw new Error("Missing the required parameter 'ipWhitelistAddresses' when calling deleteAllowedIpsFromWhitelist");
      }

      var pathParams = {};
      var queryParams = {
        'ip_whitelist_addresses': this.apiClient.buildCollectionParam(ipWhitelistAddresses, 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteAllowedIpsFromWhitelistResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/ip_whitelist', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete allowed IPs from a whitelist
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * @param {String} apiToken 
     * @param {Array.<String>} ipWhitelistAddresses 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAllowedIpsFromWhitelistResponse}
     */

  }, {
    key: "deleteAllowedIpsFromWhitelist",
    value: function deleteAllowedIpsFromWhitelist(apiToken, ipWhitelistAddresses) {
      return this.deleteAllowedIpsFromWhitelistWithHttpInfo(apiToken, ipWhitelistAddresses).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an APNs certificate
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteApnsCertificateByIdResponse} and HTTP response
     */

  }, {
    key: "deleteApnsCertificateByIdWithHttpInfo",
    value: function deleteApnsCertificateByIdWithHttpInfo(apiToken, providerId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteApnsCertificateById");
      } // verify the required parameter 'providerId' is set


      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling deleteApnsCertificateById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeleteApnsCertificateByIdResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/apns/cert/{provider_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an APNs certificate
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteApnsCertificateByIdResponse}
     */

  }, {
    key: "deleteApnsCertificateById",
    value: function deleteApnsCertificateById(apiToken, providerId) {
      return this.deleteApnsCertificateByIdWithHttpInfo(apiToken, providerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate a secondary API token
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateSecondaryApiTokenData} opts.generateSecondaryApiTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenerateSecondaryApiTokenResponse} and HTTP response
     */

  }, {
    key: "generateSecondaryApiTokenWithHttpInfo",
    value: function generateSecondaryApiTokenWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['generateSecondaryApiTokenData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling generateSecondaryApiToken");
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
      var returnType = _GenerateSecondaryApiTokenResponse["default"];
      return this.apiClient.callApi('/v3/applications/api_tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate a secondary API token
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateSecondaryApiTokenData} opts.generateSecondaryApiTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenerateSecondaryApiTokenResponse}
     */

  }, {
    key: "generateSecondaryApiToken",
    value: function generateSecondaryApiToken(apiToken, opts) {
      return this.generateSecondaryApiTokenWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List banned users in channels with a custom channel type
     * ## Retrieves a list of users banned from channels with the specified custom channel type.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomTypeListBannedUsersResponse} and HTTP response
     */

  }, {
    key: "listBannedUsersInChannelsWithCustomChannelTypeWithHttpInfo",
    value: function listBannedUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listBannedUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling listBannedUsersInChannelsWithCustomChannelType");
      }

      var pathParams = {
        'custom_type': customType
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
      var returnType = _CustomTypeListBannedUsersResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/ban', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List banned users in channels with a custom channel type
     * ## Retrieves a list of users banned from channels with the specified custom channel type.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomTypeListBannedUsersResponse}
     */

  }, {
    key: "listBannedUsersInChannelsWithCustomChannelType",
    value: function listBannedUsersInChannelsWithCustomChannelType(apiToken, customType, opts) {
      return this.listBannedUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List muted users in channels with a custom channel type
     * ## Retrieves a list of the muted users in channels with a custom channel type.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMutedUsersInChannelsWithCustomChannelType200Response} and HTTP response
     */

  }, {
    key: "listMutedUsersInChannelsWithCustomChannelTypeWithHttpInfo",
    value: function listMutedUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listMutedUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling listMutedUsersInChannelsWithCustomChannelType");
      }

      var pathParams = {
        'custom_type': customType
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
      var returnType = _ListMutedUsersInChannelsWithCustomChannelType200Response["default"];
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List muted users in channels with a custom channel type
     * ## Retrieves a list of the muted users in channels with a custom channel type.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMutedUsersInChannelsWithCustomChannelType200Response}
     */

  }, {
    key: "listMutedUsersInChannelsWithCustomChannelType",
    value: function listMutedUsersInChannelsWithCustomChannelType(apiToken, customType, opts) {
      return this.listMutedUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List push configurations
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * @param {String} apiToken 
     * @param {String} pushType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPushConfigurationsResponse} and HTTP response
     */

  }, {
    key: "listPushConfigurationsWithHttpInfo",
    value: function listPushConfigurationsWithHttpInfo(apiToken, pushType) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listPushConfigurations");
      } // verify the required parameter 'pushType' is set


      if (pushType === undefined || pushType === null) {
        throw new Error("Missing the required parameter 'pushType' when calling listPushConfigurations");
      }

      var pathParams = {
        'push_type': pushType
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListPushConfigurationsResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/{push_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List push configurations
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * @param {String} apiToken 
     * @param {String} pushType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPushConfigurationsResponse}
     */

  }, {
    key: "listPushConfigurations",
    value: function listPushConfigurations(apiToken, pushType) {
      return this.listPushConfigurationsWithHttpInfo(apiToken, pushType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List push notification content templates
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPushNotificationContentTemplatesResponse} and HTTP response
     */

  }, {
    key: "listPushNotificationContentTemplatesWithHttpInfo",
    value: function listPushNotificationContentTemplatesWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listPushNotificationContentTemplates");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListPushNotificationContentTemplatesResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/message_templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List push notification content templates
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPushNotificationContentTemplatesResponse}
     */

  }, {
    key: "listPushNotificationContentTemplates",
    value: function listPushNotificationContentTemplates(apiToken) {
      return this.listPushNotificationContentTemplatesWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List secondary API tokens
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSecondaryApiTokensResponse} and HTTP response
     */

  }, {
    key: "listSecondaryApiTokensWithHttpInfo",
    value: function listSecondaryApiTokensWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listSecondaryApiTokens");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSecondaryApiTokensResponse["default"];
      return this.apiClient.callApi('/v3/applications/api_tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List secondary API tokens
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSecondaryApiTokensResponse}
     */

  }, {
    key: "listSecondaryApiTokens",
    value: function listSecondaryApiTokens(apiToken) {
      return this.listSecondaryApiTokensWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mute users in channels with a custom channel type
     * ## Mutes specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {module:model/MuteUsersInChannelsWithCustomChannelTypeData} opts.muteUsersInChannelsWithCustomChannelTypeData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "muteUsersInChannelsWithCustomChannelTypeWithHttpInfo",
    value: function muteUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts) {
      opts = opts || {};
      var postBody = opts['muteUsersInChannelsWithCustomChannelTypeData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling muteUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling muteUsersInChannelsWithCustomChannelType");
      }

      var pathParams = {
        'custom_type': customType
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
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/mute', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Mute users in channels with a custom channel type
     * ## Mutes specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {module:model/MuteUsersInChannelsWithCustomChannelTypeData} opts.muteUsersInChannelsWithCustomChannelTypeData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "muteUsersInChannelsWithCustomChannelType",
    value: function muteUsersInChannelsWithCustomChannelType(apiToken, customType, opts) {
      return this.muteUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Remove a push configuration
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} pushType 
     * @param {String} providerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemovePushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "removePushConfigurationByIdWithHttpInfo",
    value: function removePushConfigurationByIdWithHttpInfo(apiToken, pushType, providerId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling removePushConfigurationById");
      } // verify the required parameter 'pushType' is set


      if (pushType === undefined || pushType === null) {
        throw new Error("Missing the required parameter 'pushType' when calling removePushConfigurationById");
      } // verify the required parameter 'providerId' is set


      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling removePushConfigurationById");
      }

      var pathParams = {
        'push_type': pushType,
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemovePushConfigurationByIdResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/{push_type}/{provider_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Remove a push configuration
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} pushType 
     * @param {String} providerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemovePushConfigurationByIdResponse}
     */

  }, {
    key: "removePushConfigurationById",
    value: function removePushConfigurationById(apiToken, pushType, providerId) {
      return this.removePushConfigurationByIdWithHttpInfo(apiToken, pushType, providerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve an IP whitelist
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveIpWhitelistResponse} and HTTP response
     */

  }, {
    key: "retrieveIpWhitelistWithHttpInfo",
    value: function retrieveIpWhitelistWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling retrieveIpWhitelist");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RetrieveIpWhitelistResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/ip_whitelist', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve an IP whitelist
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveIpWhitelistResponse}
     */

  }, {
    key: "retrieveIpWhitelist",
    value: function retrieveIpWhitelist(apiToken) {
      return this.retrieveIpWhitelistWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Revoke a secondary API token
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * @param {String} apiToken 
     * @param {String} apiToken2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevokeSecondaryApiTokenByTokenResponse} and HTTP response
     */

  }, {
    key: "revokeSecondaryApiTokenByTokenWithHttpInfo",
    value: function revokeSecondaryApiTokenByTokenWithHttpInfo(apiToken, apiToken2) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling revokeSecondaryApiTokenByToken");
      } // verify the required parameter 'apiToken2' is set


      if (apiToken2 === undefined || apiToken2 === null) {
        throw new Error("Missing the required parameter 'apiToken2' when calling revokeSecondaryApiTokenByToken");
      }

      var pathParams = {
        'api_token': apiToken2
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RevokeSecondaryApiTokenByTokenResponse["default"];
      return this.apiClient.callApi('/v3/applications/api_tokens/{api_token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Revoke a secondary API token
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * @param {String} apiToken 
     * @param {String} apiToken2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevokeSecondaryApiTokenByTokenResponse}
     */

  }, {
    key: "revokeSecondaryApiTokenByToken",
    value: function revokeSecondaryApiTokenByToken(apiToken, apiToken2) {
      return this.revokeSecondaryApiTokenByTokenWithHttpInfo(apiToken, apiToken2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Message moderation
     * ## 
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {module:model/SetDomainFilterData} opts.setDomainFilterData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdChannelResponse} and HTTP response
     */

  }, {
    key: "setDomainFilterWithHttpInfo",
    value: function setDomainFilterWithHttpInfo(apiToken, customType, opts) {
      opts = opts || {};
      var postBody = opts['setDomainFilterData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling setDomainFilter");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling setDomainFilter");
      }

      var pathParams = {
        'custom_type': customType
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdChannelResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings_global/{custom_type}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Message moderation
     * ## 
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {module:model/SetDomainFilterData} opts.setDomainFilterData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdChannelResponse}
     */

  }, {
    key: "setDomainFilter",
    value: function setDomainFilter(apiToken, customType, opts) {
      return this.setDomainFilterWithHttpInfo(apiToken, customType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unban users in channels with a custom channel type
     * ## Unban specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Array.<String>} userIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "unbanUsersInChannelsWithCustomChannelTypeWithHttpInfo",
    value: function unbanUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, userIds) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling unbanUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling unbanUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'userIds' is set


      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling unbanUsersInChannelsWithCustomChannelType");
      }

      var pathParams = {
        'custom_type': customType
      };
      var queryParams = {
        'user_ids': this.apiClient.buildCollectionParam(userIds, 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/ban', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unban users in channels with a custom channel type
     * ## Unban specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Array.<String>} userIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "unbanUsersInChannelsWithCustomChannelType",
    value: function unbanUsersInChannelsWithCustomChannelType(apiToken, customType, userIds) {
      return this.unbanUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, userIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Unmute users in channels with a custom channel type
     * ## Unmute specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Array.<String>} userIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "unmuteUsersInChannelsWithCustomChannelTypeWithHttpInfo",
    value: function unmuteUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, userIds) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling unmuteUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling unmuteUsersInChannelsWithCustomChannelType");
      } // verify the required parameter 'userIds' is set


      if (userIds === undefined || userIds === null) {
        throw new Error("Missing the required parameter 'userIds' when calling unmuteUsersInChannelsWithCustomChannelType");
      }

      var pathParams = {
        'custom_type': customType
      };
      var queryParams = {
        'user_ids': this.apiClient.buildCollectionParam(userIds, 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/mute', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Unmute users in channels with a custom channel type
     * ## Unmute specified users in channels with a custom channel type at once.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Array.<String>} userIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "unmuteUsersInChannelsWithCustomChannelType",
    value: function unmuteUsersInChannelsWithCustomChannelType(apiToken, customType, userIds) {
      return this.unmuteUsersInChannelsWithCustomChannelTypeWithHttpInfo(apiToken, customType, userIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an APNs push configuration
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateApnsPushConfigurationByIdData} opts.updateApnsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateApnsPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "updateApnsPushConfigurationByIdWithHttpInfo",
    value: function updateApnsPushConfigurationByIdWithHttpInfo(apiToken, providerId, opts) {
      opts = opts || {};
      var postBody = opts['updateApnsPushConfigurationByIdData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateApnsPushConfigurationById");
      } // verify the required parameter 'providerId' is set


      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateApnsPushConfigurationById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateApnsPushConfigurationByIdResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/apns/{provider_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an APNs push configuration
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateApnsPushConfigurationByIdData} opts.updateApnsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateApnsPushConfigurationByIdResponse}
     */

  }, {
    key: "updateApnsPushConfigurationById",
    value: function updateApnsPushConfigurationById(apiToken, providerId, opts) {
      return this.updateApnsPushConfigurationByIdWithHttpInfo(apiToken, providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update default channel invitation preference
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateDefaultChannelInvitationPreferenceData} opts.updateDefaultChannelInvitationPreferenceData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateDefaultChannelInvitationPreferenceResponse} and HTTP response
     */

  }, {
    key: "updateDefaultChannelInvitationPreferenceWithHttpInfo",
    value: function updateDefaultChannelInvitationPreferenceWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['updateDefaultChannelInvitationPreferenceData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateDefaultChannelInvitationPreference");
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
      var returnType = _UpdateDefaultChannelInvitationPreferenceResponse["default"];
      return this.apiClient.callApi('/v3/applications/default_channel_invitation_preference', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update default channel invitation preference
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateDefaultChannelInvitationPreferenceData} opts.updateDefaultChannelInvitationPreferenceData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateDefaultChannelInvitationPreferenceResponse}
     */

  }, {
    key: "updateDefaultChannelInvitationPreference",
    value: function updateDefaultChannelInvitationPreference(apiToken, opts) {
      return this.updateDefaultChannelInvitationPreferenceWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a FCM push configuration
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateFcmPushConfigurationByIdData} opts.updateFcmPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateFcmPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "updateFcmPushConfigurationByIdWithHttpInfo",
    value: function updateFcmPushConfigurationByIdWithHttpInfo(apiToken, providerId, opts) {
      opts = opts || {};
      var postBody = opts['updateFcmPushConfigurationByIdData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateFcmPushConfigurationById");
      } // verify the required parameter 'providerId' is set


      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateFcmPushConfigurationById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateFcmPushConfigurationByIdResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/fcm/{provider_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a FCM push configuration
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateFcmPushConfigurationByIdData} opts.updateFcmPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateFcmPushConfigurationByIdResponse}
     */

  }, {
    key: "updateFcmPushConfigurationById",
    value: function updateFcmPushConfigurationById(apiToken, providerId, opts) {
      return this.updateFcmPushConfigurationByIdWithHttpInfo(apiToken, providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an HMS push configuration
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateHmsPushConfigurationByIdData} opts.updateHmsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateHmsPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "updateHmsPushConfigurationByIdWithHttpInfo",
    value: function updateHmsPushConfigurationByIdWithHttpInfo(apiToken, providerId, opts) {
      opts = opts || {};
      var postBody = opts['updateHmsPushConfigurationByIdData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateHmsPushConfigurationById");
      } // verify the required parameter 'providerId' is set


      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateHmsPushConfigurationById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateHmsPushConfigurationByIdResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/hms/{provider_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an HMS push configuration
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateHmsPushConfigurationByIdData} opts.updateHmsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateHmsPushConfigurationByIdResponse}
     */

  }, {
    key: "updateHmsPushConfigurationById",
    value: function updateHmsPushConfigurationById(apiToken, providerId, opts) {
      return this.updateHmsPushConfigurationByIdWithHttpInfo(apiToken, providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a push notification content template
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * @param {String} apiToken 
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePushNotificationContentTemplateData} opts.updatePushNotificationContentTemplateData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatePushNotificationContentTemplateResponse} and HTTP response
     */

  }, {
    key: "updatePushNotificationContentTemplateWithHttpInfo",
    value: function updatePushNotificationContentTemplateWithHttpInfo(apiToken, templateName, opts) {
      opts = opts || {};
      var postBody = opts['updatePushNotificationContentTemplateData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updatePushNotificationContentTemplate");
      } // verify the required parameter 'templateName' is set


      if (templateName === undefined || templateName === null) {
        throw new Error("Missing the required parameter 'templateName' when calling updatePushNotificationContentTemplate");
      }

      var pathParams = {
        'template_name': templateName
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdatePushNotificationContentTemplateResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/message_templates/{template_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a push notification content template
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * @param {String} apiToken 
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdatePushNotificationContentTemplateData} opts.updatePushNotificationContentTemplateData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatePushNotificationContentTemplateResponse}
     */

  }, {
    key: "updatePushNotificationContentTemplate",
    value: function updatePushNotificationContentTemplate(apiToken, templateName, opts) {
      return this.updatePushNotificationContentTemplateWithHttpInfo(apiToken, templateName, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View default channel invitation preference
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewDefaultChannelInvitationPreferenceResponse} and HTTP response
     */

  }, {
    key: "viewDefaultChannelInvitationPreferenceWithHttpInfo",
    value: function viewDefaultChannelInvitationPreferenceWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewDefaultChannelInvitationPreference");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewDefaultChannelInvitationPreferenceResponse["default"];
      return this.apiClient.callApi('/v3/applications/default_channel_invitation_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View default channel invitation preference
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewDefaultChannelInvitationPreferenceResponse}
     */

  }, {
    key: "viewDefaultChannelInvitationPreference",
    value: function viewDefaultChannelInvitationPreference(apiToken) {
      return this.viewDefaultChannelInvitationPreferenceWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a push configuration
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} pushType 
     * @param {String} providerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "viewPushConfigurationByIdWithHttpInfo",
    value: function viewPushConfigurationByIdWithHttpInfo(apiToken, pushType, providerId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewPushConfigurationById");
      } // verify the required parameter 'pushType' is set


      if (pushType === undefined || pushType === null) {
        throw new Error("Missing the required parameter 'pushType' when calling viewPushConfigurationById");
      } // verify the required parameter 'providerId' is set


      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling viewPushConfigurationById");
      }

      var pathParams = {
        'push_type': pushType,
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewPushConfigurationByIdResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/{push_type}/{provider_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a push configuration
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * @param {String} apiToken 
     * @param {String} pushType 
     * @param {String} providerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushConfigurationByIdResponse}
     */

  }, {
    key: "viewPushConfigurationById",
    value: function viewPushConfigurationById(apiToken, pushType, providerId) {
      return this.viewPushConfigurationByIdWithHttpInfo(apiToken, pushType, providerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a push notification content template
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * @param {String} apiToken 
     * @param {String} templateName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushNotificationContentTemplateResponse} and HTTP response
     */

  }, {
    key: "viewPushNotificationContentTemplateWithHttpInfo",
    value: function viewPushNotificationContentTemplateWithHttpInfo(apiToken, templateName) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewPushNotificationContentTemplate");
      } // verify the required parameter 'templateName' is set


      if (templateName === undefined || templateName === null) {
        throw new Error("Missing the required parameter 'templateName' when calling viewPushNotificationContentTemplate");
      }

      var pathParams = {
        'template_name': templateName
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewPushNotificationContentTemplateResponse["default"];
      return this.apiClient.callApi('/v3/applications/push/message_templates/{template_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a push notification content template
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * @param {String} apiToken 
     * @param {String} templateName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushNotificationContentTemplateResponse}
     */

  }, {
    key: "viewPushNotificationContentTemplate",
    value: function viewPushNotificationContentTemplate(apiToken, templateName) {
      return this.viewPushNotificationContentTemplateWithHttpInfo(apiToken, templateName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a secondary API token
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * @param {String} apiToken 
     * @param {String} apiToken2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewSecondaryApiTokenByTokenResponse} and HTTP response
     */

  }, {
    key: "viewSecondaryApiTokenByTokenWithHttpInfo",
    value: function viewSecondaryApiTokenByTokenWithHttpInfo(apiToken, apiToken2) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewSecondaryApiTokenByToken");
      } // verify the required parameter 'apiToken2' is set


      if (apiToken2 === undefined || apiToken2 === null) {
        throw new Error("Missing the required parameter 'apiToken2' when calling viewSecondaryApiTokenByToken");
      }

      var pathParams = {
        'api_token': apiToken2
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewSecondaryApiTokenByTokenResponse["default"];
      return this.apiClient.callApi('/v3/applications/api_tokens/{api_token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a secondary API token
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * @param {String} apiToken 
     * @param {String} apiToken2 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewSecondaryApiTokenByTokenResponse}
     */

  }, {
    key: "viewSecondaryApiTokenByToken",
    value: function viewSecondaryApiTokenByToken(apiToken, apiToken2) {
      return this.viewSecondaryApiTokenByTokenWithHttpInfo(apiToken, apiToken2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ApplicationApi;
}();

exports["default"] = ApplicationApi;