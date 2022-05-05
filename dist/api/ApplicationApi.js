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

var _DeleteAllowedIpsFromWhitelistResponse = _interopRequireDefault(require("../model/DeleteAllowedIpsFromWhitelistResponse"));

var _DeleteApnsCertificateByIdResponse = _interopRequireDefault(require("../model/DeleteApnsCertificateByIdResponse"));

var _GenerateSecondaryApiTokenData = _interopRequireDefault(require("../model/GenerateSecondaryApiTokenData"));

var _GenerateSecondaryApiTokenResponse = _interopRequireDefault(require("../model/GenerateSecondaryApiTokenResponse"));

var _ListPushConfigurationsResponse = _interopRequireDefault(require("../model/ListPushConfigurationsResponse"));

var _ListPushNotificationContentTemplatesResponse = _interopRequireDefault(require("../model/ListPushNotificationContentTemplatesResponse"));

var _ListSecondaryApiTokensResponse = _interopRequireDefault(require("../model/ListSecondaryApiTokensResponse"));

var _RemovePushConfigurationByIdResponse = _interopRequireDefault(require("../model/RemovePushConfigurationByIdResponse"));

var _RetrieveIpWhitelistResponse = _interopRequireDefault(require("../model/RetrieveIpWhitelistResponse"));

var _RevokeSecondaryApiTokenByTokenResponse = _interopRequireDefault(require("../model/RevokeSecondaryApiTokenByTokenResponse"));

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

var _ViewNumberOfConcurrentConnectionsResponse = _interopRequireDefault(require("../model/ViewNumberOfConcurrentConnectionsResponse"));

var _ViewNumberOfDailyActiveUsersResponse = _interopRequireDefault(require("../model/ViewNumberOfDailyActiveUsersResponse"));

var _ViewNumberOfMonthlyActiveUsersResponse = _interopRequireDefault(require("../model/ViewNumberOfMonthlyActiveUsersResponse"));

var _ViewNumberOfPeakConnectionsResponse = _interopRequireDefault(require("../model/ViewNumberOfPeakConnectionsResponse"));

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
* @version 1.0.0
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
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/AddApnsPushConfigurationData} opts.addApnsPushConfigurationData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddApnsPushConfigurationResponse} and HTTP response
   */


  _createClass(ApplicationApi, [{
    key: "addApnsPushConfigurationWithHttpInfo",
    value: function addApnsPushConfigurationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addApnsPushConfigurationData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddApnsPushConfigurationData} opts.addApnsPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddApnsPushConfigurationResponse}
     */

  }, {
    key: "addApnsPushConfiguration",
    value: function addApnsPushConfiguration(opts) {
      return this.addApnsPushConfigurationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add a FCM push configuration
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddFcmPushConfigurationData} opts.addFcmPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddFcmPushConfigurationResponse} and HTTP response
     */

  }, {
    key: "addFcmPushConfigurationWithHttpInfo",
    value: function addFcmPushConfigurationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addFcmPushConfigurationData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddFcmPushConfigurationData} opts.addFcmPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddFcmPushConfigurationResponse}
     */

  }, {
    key: "addFcmPushConfiguration",
    value: function addFcmPushConfiguration(opts) {
      return this.addFcmPushConfigurationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add an HMS push configuration
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddHmsPushConfigurationData} opts.addHmsPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddHmsPushConfigurationResponse} and HTTP response
     */

  }, {
    key: "addHmsPushConfigurationWithHttpInfo",
    value: function addHmsPushConfigurationWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addHmsPushConfigurationData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddHmsPushConfigurationData} opts.addHmsPushConfigurationData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddHmsPushConfigurationResponse}
     */

  }, {
    key: "addHmsPushConfiguration",
    value: function addHmsPushConfiguration(opts) {
      return this.addHmsPushConfigurationWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add an IP to a whitelist
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddIpToWhitelistData} opts.addIpToWhitelistData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddIpToWhitelistResponse} and HTTP response
     */

  }, {
    key: "addIpToWhitelistWithHttpInfo",
    value: function addIpToWhitelistWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['addIpToWhitelistData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddIpToWhitelistData} opts.addIpToWhitelistData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddIpToWhitelistResponse}
     */

  }, {
    key: "addIpToWhitelist",
    value: function addIpToWhitelist(opts) {
      return this.addIpToWhitelistWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete allowed IPs from a whitelist
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * @param {Array.<String>} ipWhitelistAddresses 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAllowedIpsFromWhitelistResponse} and HTTP response
     */

  }, {
    key: "deleteAllowedIpsFromWhitelistWithHttpInfo",
    value: function deleteAllowedIpsFromWhitelistWithHttpInfo(ipWhitelistAddresses, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'ipWhitelistAddresses' is set

      if (ipWhitelistAddresses === undefined || ipWhitelistAddresses === null) {
        throw new Error("Missing the required parameter 'ipWhitelistAddresses' when calling deleteAllowedIpsFromWhitelist");
      }

      var pathParams = {};
      var queryParams = {
        'ip_whitelist_addresses': this.apiClient.buildCollectionParam(ipWhitelistAddresses, 'multi')
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Array.<String>} ipWhitelistAddresses 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAllowedIpsFromWhitelistResponse}
     */

  }, {
    key: "deleteAllowedIpsFromWhitelist",
    value: function deleteAllowedIpsFromWhitelist(ipWhitelistAddresses, opts) {
      return this.deleteAllowedIpsFromWhitelistWithHttpInfo(ipWhitelistAddresses, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an APNs certificate
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteApnsCertificateByIdResponse} and HTTP response
     */

  }, {
    key: "deleteApnsCertificateByIdWithHttpInfo",
    value: function deleteApnsCertificateByIdWithHttpInfo(providerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'providerId' is set

      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling deleteApnsCertificateById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteApnsCertificateByIdResponse}
     */

  }, {
    key: "deleteApnsCertificateById",
    value: function deleteApnsCertificateById(providerId, opts) {
      return this.deleteApnsCertificateByIdWithHttpInfo(providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate a secondary API token
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GenerateSecondaryApiTokenData} opts.generateSecondaryApiTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenerateSecondaryApiTokenResponse} and HTTP response
     */

  }, {
    key: "generateSecondaryApiTokenWithHttpInfo",
    value: function generateSecondaryApiTokenWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['generateSecondaryApiTokenData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GenerateSecondaryApiTokenData} opts.generateSecondaryApiTokenData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenerateSecondaryApiTokenResponse}
     */

  }, {
    key: "generateSecondaryApiToken",
    value: function generateSecondaryApiToken(opts) {
      return this.generateSecondaryApiTokenWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List push configurations
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * @param {String} pushType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPushConfigurationsResponse} and HTTP response
     */

  }, {
    key: "listPushConfigurationsWithHttpInfo",
    value: function listPushConfigurationsWithHttpInfo(pushType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pushType' is set

      if (pushType === undefined || pushType === null) {
        throw new Error("Missing the required parameter 'pushType' when calling listPushConfigurations");
      }

      var pathParams = {
        'push_type': pushType
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} pushType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPushConfigurationsResponse}
     */

  }, {
    key: "listPushConfigurations",
    value: function listPushConfigurations(pushType, opts) {
      return this.listPushConfigurationsWithHttpInfo(pushType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List push notification content templates
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPushNotificationContentTemplatesResponse} and HTTP response
     */

  }, {
    key: "listPushNotificationContentTemplatesWithHttpInfo",
    value: function listPushNotificationContentTemplatesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPushNotificationContentTemplatesResponse}
     */

  }, {
    key: "listPushNotificationContentTemplates",
    value: function listPushNotificationContentTemplates(opts) {
      return this.listPushNotificationContentTemplatesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List secondary API tokens
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSecondaryApiTokensResponse} and HTTP response
     */

  }, {
    key: "listSecondaryApiTokensWithHttpInfo",
    value: function listSecondaryApiTokensWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSecondaryApiTokensResponse}
     */

  }, {
    key: "listSecondaryApiTokens",
    value: function listSecondaryApiTokens(opts) {
      return this.listSecondaryApiTokensWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Remove a push configuration
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * @param {String} pushType 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemovePushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "removePushConfigurationByIdWithHttpInfo",
    value: function removePushConfigurationByIdWithHttpInfo(pushType, providerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pushType' is set

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
        'Api-Token': opts['apiToken']
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
     * @param {String} pushType 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemovePushConfigurationByIdResponse}
     */

  }, {
    key: "removePushConfigurationById",
    value: function removePushConfigurationById(pushType, providerId, opts) {
      return this.removePushConfigurationByIdWithHttpInfo(pushType, providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve an IP whitelist
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don't specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveIpWhitelistResponse} and HTTP response
     */

  }, {
    key: "retrieveIpWhitelistWithHttpInfo",
    value: function retrieveIpWhitelistWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveIpWhitelistResponse}
     */

  }, {
    key: "retrieveIpWhitelist",
    value: function retrieveIpWhitelist(opts) {
      return this.retrieveIpWhitelistWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Revoke a secondary API token
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * @param {String} apiToken2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RevokeSecondaryApiTokenByTokenResponse} and HTTP response
     */

  }, {
    key: "revokeSecondaryApiTokenByTokenWithHttpInfo",
    value: function revokeSecondaryApiTokenByTokenWithHttpInfo(apiToken2, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken2' is set

      if (apiToken2 === undefined || apiToken2 === null) {
        throw new Error("Missing the required parameter 'apiToken2' when calling revokeSecondaryApiTokenByToken");
      }

      var pathParams = {
        'api_token': apiToken2
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} apiToken2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RevokeSecondaryApiTokenByTokenResponse}
     */

  }, {
    key: "revokeSecondaryApiTokenByToken",
    value: function revokeSecondaryApiTokenByToken(apiToken2, opts) {
      return this.revokeSecondaryApiTokenByTokenWithHttpInfo(apiToken2, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an APNs push configuration
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateApnsPushConfigurationByIdData} opts.updateApnsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateApnsPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "updateApnsPushConfigurationByIdWithHttpInfo",
    value: function updateApnsPushConfigurationByIdWithHttpInfo(providerId, opts) {
      opts = opts || {};
      var postBody = opts['updateApnsPushConfigurationByIdData']; // verify the required parameter 'providerId' is set

      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateApnsPushConfigurationById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateApnsPushConfigurationByIdData} opts.updateApnsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateApnsPushConfigurationByIdResponse}
     */

  }, {
    key: "updateApnsPushConfigurationById",
    value: function updateApnsPushConfigurationById(providerId, opts) {
      return this.updateApnsPushConfigurationByIdWithHttpInfo(providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update default channel invitation preference
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateDefaultChannelInvitationPreferenceData} opts.updateDefaultChannelInvitationPreferenceData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateDefaultChannelInvitationPreferenceResponse} and HTTP response
     */

  }, {
    key: "updateDefaultChannelInvitationPreferenceWithHttpInfo",
    value: function updateDefaultChannelInvitationPreferenceWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['updateDefaultChannelInvitationPreferenceData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateDefaultChannelInvitationPreferenceData} opts.updateDefaultChannelInvitationPreferenceData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateDefaultChannelInvitationPreferenceResponse}
     */

  }, {
    key: "updateDefaultChannelInvitationPreference",
    value: function updateDefaultChannelInvitationPreference(opts) {
      return this.updateDefaultChannelInvitationPreferenceWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a FCM push configuration
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateFcmPushConfigurationByIdData} opts.updateFcmPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateFcmPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "updateFcmPushConfigurationByIdWithHttpInfo",
    value: function updateFcmPushConfigurationByIdWithHttpInfo(providerId, opts) {
      opts = opts || {};
      var postBody = opts['updateFcmPushConfigurationByIdData']; // verify the required parameter 'providerId' is set

      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateFcmPushConfigurationById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateFcmPushConfigurationByIdData} opts.updateFcmPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateFcmPushConfigurationByIdResponse}
     */

  }, {
    key: "updateFcmPushConfigurationById",
    value: function updateFcmPushConfigurationById(providerId, opts) {
      return this.updateFcmPushConfigurationByIdWithHttpInfo(providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an HMS push configuration
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateHmsPushConfigurationByIdData} opts.updateHmsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateHmsPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "updateHmsPushConfigurationByIdWithHttpInfo",
    value: function updateHmsPushConfigurationByIdWithHttpInfo(providerId, opts) {
      opts = opts || {};
      var postBody = opts['updateHmsPushConfigurationByIdData']; // verify the required parameter 'providerId' is set

      if (providerId === undefined || providerId === null) {
        throw new Error("Missing the required parameter 'providerId' when calling updateHmsPushConfigurationById");
      }

      var pathParams = {
        'provider_id': providerId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateHmsPushConfigurationByIdData} opts.updateHmsPushConfigurationByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateHmsPushConfigurationByIdResponse}
     */

  }, {
    key: "updateHmsPushConfigurationById",
    value: function updateHmsPushConfigurationById(providerId, opts) {
      return this.updateHmsPushConfigurationByIdWithHttpInfo(providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a push notification content template
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushNotificationContentTemplateData} opts.updatePushNotificationContentTemplateData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdatePushNotificationContentTemplateResponse} and HTTP response
     */

  }, {
    key: "updatePushNotificationContentTemplateWithHttpInfo",
    value: function updatePushNotificationContentTemplateWithHttpInfo(templateName, opts) {
      opts = opts || {};
      var postBody = opts['updatePushNotificationContentTemplateData']; // verify the required parameter 'templateName' is set

      if (templateName === undefined || templateName === null) {
        throw new Error("Missing the required parameter 'templateName' when calling updatePushNotificationContentTemplate");
      }

      var pathParams = {
        'template_name': templateName
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushNotificationContentTemplateData} opts.updatePushNotificationContentTemplateData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdatePushNotificationContentTemplateResponse}
     */

  }, {
    key: "updatePushNotificationContentTemplate",
    value: function updatePushNotificationContentTemplate(templateName, opts) {
      return this.updatePushNotificationContentTemplateWithHttpInfo(templateName, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View default channel invitation preference
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewDefaultChannelInvitationPreferenceResponse} and HTTP response
     */

  }, {
    key: "viewDefaultChannelInvitationPreferenceWithHttpInfo",
    value: function viewDefaultChannelInvitationPreferenceWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewDefaultChannelInvitationPreferenceResponse}
     */

  }, {
    key: "viewDefaultChannelInvitationPreference",
    value: function viewDefaultChannelInvitationPreference(opts) {
      return this.viewDefaultChannelInvitationPreferenceWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View number of concurrent connections
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfConcurrentConnectionsResponse} and HTTP response
     */

  }, {
    key: "viewNumberOfConcurrentConnectionsWithHttpInfo",
    value: function viewNumberOfConcurrentConnectionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfConcurrentConnectionsResponse["default"];
      return this.apiClient.callApi('/v3/applications/ccu', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View number of concurrent connections
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfConcurrentConnectionsResponse}
     */

  }, {
    key: "viewNumberOfConcurrentConnections",
    value: function viewNumberOfConcurrentConnections(opts) {
      return this.viewNumberOfConcurrentConnectionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View number of daily active users
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfDailyActiveUsersResponse} and HTTP response
     */

  }, {
    key: "viewNumberOfDailyActiveUsersWithHttpInfo",
    value: function viewNumberOfDailyActiveUsersWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'date': opts['date']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfDailyActiveUsersResponse["default"];
      return this.apiClient.callApi('/v3/applications/dau', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View number of daily active users
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfDailyActiveUsersResponse}
     */

  }, {
    key: "viewNumberOfDailyActiveUsers",
    value: function viewNumberOfDailyActiveUsers(opts) {
      return this.viewNumberOfDailyActiveUsersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View number of monthly active users
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfMonthlyActiveUsersResponse} and HTTP response
     */

  }, {
    key: "viewNumberOfMonthlyActiveUsersWithHttpInfo",
    value: function viewNumberOfMonthlyActiveUsersWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'date': opts['date']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfMonthlyActiveUsersResponse["default"];
      return this.apiClient.callApi('/v3/applications/mau', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View number of monthly active users
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfMonthlyActiveUsersResponse}
     */

  }, {
    key: "viewNumberOfMonthlyActiveUsers",
    value: function viewNumberOfMonthlyActiveUsers(opts) {
      return this.viewNumberOfMonthlyActiveUsersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View number of peak connections
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * @param {String} timeDimension 
     * @param {Number} startYear 
     * @param {Number} startMonth 
     * @param {Number} endYear 
     * @param {Number} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Number} opts.startDay 
     * @param {Number} opts.endDay 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfPeakConnectionsResponse} and HTTP response
     */

  }, {
    key: "viewNumberOfPeakConnectionsWithHttpInfo",
    value: function viewNumberOfPeakConnectionsWithHttpInfo(timeDimension, startYear, startMonth, endYear, endMonth, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'timeDimension' is set

      if (timeDimension === undefined || timeDimension === null) {
        throw new Error("Missing the required parameter 'timeDimension' when calling viewNumberOfPeakConnections");
      } // verify the required parameter 'startYear' is set


      if (startYear === undefined || startYear === null) {
        throw new Error("Missing the required parameter 'startYear' when calling viewNumberOfPeakConnections");
      } // verify the required parameter 'startMonth' is set


      if (startMonth === undefined || startMonth === null) {
        throw new Error("Missing the required parameter 'startMonth' when calling viewNumberOfPeakConnections");
      } // verify the required parameter 'endYear' is set


      if (endYear === undefined || endYear === null) {
        throw new Error("Missing the required parameter 'endYear' when calling viewNumberOfPeakConnections");
      } // verify the required parameter 'endMonth' is set


      if (endMonth === undefined || endMonth === null) {
        throw new Error("Missing the required parameter 'endMonth' when calling viewNumberOfPeakConnections");
      }

      var pathParams = {};
      var queryParams = {
        'time_dimension': timeDimension,
        'start_year': startYear,
        'start_month': startMonth,
        'end_year': endYear,
        'end_month': endMonth,
        'start_day': opts['startDay'],
        'end_day': opts['endDay']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfPeakConnectionsResponse["default"];
      return this.apiClient.callApi('/v3/applications/peak_connections', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View number of peak connections
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * @param {String} timeDimension 
     * @param {Number} startYear 
     * @param {Number} startMonth 
     * @param {Number} endYear 
     * @param {Number} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Number} opts.startDay 
     * @param {Number} opts.endDay 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfPeakConnectionsResponse}
     */

  }, {
    key: "viewNumberOfPeakConnections",
    value: function viewNumberOfPeakConnections(timeDimension, startYear, startMonth, endYear, endMonth, opts) {
      return this.viewNumberOfPeakConnectionsWithHttpInfo(timeDimension, startYear, startMonth, endYear, endMonth, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a push configuration
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * @param {String} pushType 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushConfigurationByIdResponse} and HTTP response
     */

  }, {
    key: "viewPushConfigurationByIdWithHttpInfo",
    value: function viewPushConfigurationByIdWithHttpInfo(pushType, providerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pushType' is set

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
        'Api-Token': opts['apiToken']
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
     * @param {String} pushType 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushConfigurationByIdResponse}
     */

  }, {
    key: "viewPushConfigurationById",
    value: function viewPushConfigurationById(pushType, providerId, opts) {
      return this.viewPushConfigurationByIdWithHttpInfo(pushType, providerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a push notification content template
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewPushNotificationContentTemplateResponse} and HTTP response
     */

  }, {
    key: "viewPushNotificationContentTemplateWithHttpInfo",
    value: function viewPushNotificationContentTemplateWithHttpInfo(templateName, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'templateName' is set

      if (templateName === undefined || templateName === null) {
        throw new Error("Missing the required parameter 'templateName' when calling viewPushNotificationContentTemplate");
      }

      var pathParams = {
        'template_name': templateName
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewPushNotificationContentTemplateResponse}
     */

  }, {
    key: "viewPushNotificationContentTemplate",
    value: function viewPushNotificationContentTemplate(templateName, opts) {
      return this.viewPushNotificationContentTemplateWithHttpInfo(templateName, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a secondary API token
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * @param {String} apiToken2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewSecondaryApiTokenByTokenResponse} and HTTP response
     */

  }, {
    key: "viewSecondaryApiTokenByTokenWithHttpInfo",
    value: function viewSecondaryApiTokenByTokenWithHttpInfo(apiToken2, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken2' is set

      if (apiToken2 === undefined || apiToken2 === null) {
        throw new Error("Missing the required parameter 'apiToken2' when calling viewSecondaryApiTokenByToken");
      }

      var pathParams = {
        'api_token': apiToken2
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} apiToken2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewSecondaryApiTokenByTokenResponse}
     */

  }, {
    key: "viewSecondaryApiTokenByToken",
    value: function viewSecondaryApiTokenByToken(apiToken2, opts) {
      return this.viewSecondaryApiTokenByTokenWithHttpInfo(apiToken2, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ApplicationApi;
}();

exports["default"] = ApplicationApi;