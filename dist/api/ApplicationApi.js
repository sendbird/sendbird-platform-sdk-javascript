"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddApnsPushConfigurationData = _interopRequireDefault(require("../model/AddApnsPushConfigurationData"));

var _AddFcmPushConfigurationData = _interopRequireDefault(require("../model/AddFcmPushConfigurationData"));

var _AddHmsPushConfigurationData = _interopRequireDefault(require("../model/AddHmsPushConfigurationData"));

var _AddIpToWhitelistData = _interopRequireDefault(require("../model/AddIpToWhitelistData"));

var _GenerateSecondaryApiTokenData = _interopRequireDefault(require("../model/GenerateSecondaryApiTokenData"));

var _UpdateApnsPushConfigurationByIdData = _interopRequireDefault(require("../model/UpdateApnsPushConfigurationByIdData"));

var _UpdateDefaultChannelInvitationPreferenceData = _interopRequireDefault(require("../model/UpdateDefaultChannelInvitationPreferenceData"));

var _UpdateFcmPushConfigurationByIdData = _interopRequireDefault(require("../model/UpdateFcmPushConfigurationByIdData"));

var _UpdateHmsPushConfigurationByIdData = _interopRequireDefault(require("../model/UpdateHmsPushConfigurationByIdData"));

var _UpdatePushNotificationContentTemplateData = _interopRequireDefault(require("../model/UpdatePushNotificationContentTemplateData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
   * Callback function to receive the result of the addApnsPushConfiguration operation.
   * @callback module:api/ApplicationApi~addApnsPushConfigurationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add an APNs push configuration
   * ## Add an APNs push configuration  Registers an APNs (Apple Push Notification service) push configuration for your client app. To send push notifications to iOS devices, your should first register the APNs push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: To upload a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-apns-push-configuration
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/AddApnsPushConfigurationData} opts.addApnsPushConfigurationData 
   * @param {module:api/ApplicationApi~addApnsPushConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ApplicationApi, [{
    key: "addApnsPushConfiguration",
    value: function addApnsPushConfiguration(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/apns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addFcmPushConfiguration operation.
     * @callback module:api/ApplicationApi~addFcmPushConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a FCM push configuration
     * ## Add a FCM push configuration  Registers a FCM (Firebase Cloud Messaging) push configuration for your client app. To send push notifications to Android devices, you should first register the FCM push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-a-fcm-push-configuration
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddFcmPushConfigurationData} opts.addFcmPushConfigurationData 
     * @param {module:api/ApplicationApi~addFcmPushConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "addFcmPushConfiguration",
    value: function addFcmPushConfiguration(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/fcm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addHmsPushConfiguration operation.
     * @callback module:api/ApplicationApi~addHmsPushConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an HMS push configuration
     * ## Add an HMS push configuration  Registers an HMS (Huawei Mobile Services) push configuration for your client app. To send push notifications to Android devices for HMS, you should first register the HMS push configuration. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-hms-push-configuration
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddHmsPushConfigurationData} opts.addHmsPushConfigurationData 
     * @param {module:api/ApplicationApi~addHmsPushConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "addHmsPushConfiguration",
    value: function addHmsPushConfiguration(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/hms', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addIpToWhitelist operation.
     * @callback module:api/ApplicationApi~addIpToWhitelistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an IP to a whitelist
     * ## Add an IP to a whitelist  Adds IP addresses and ranges to your Sendbird application settings. Both currently added and any previously added IPs are granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-add-an-ip-to-a-whitelist
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddIpToWhitelistData} opts.addIpToWhitelistData 
     * @param {module:api/ApplicationApi~addIpToWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "addIpToWhitelist",
    value: function addIpToWhitelist(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/settings/ip_whitelist', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteAllowedIpsFromWhitelist operation.
     * @callback module:api/ApplicationApi~deleteAllowedIpsFromWhitelistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete allowed IPs from a whitelist
     * ## Delete allowed IPs from a whitelist  Deletes allowed IPs from the whitelist by specifying their IP addresses or ranges. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-allowed-ips-from-a-whitelist
     * @param {Array} ipWhitelistAddresses 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~deleteAllowedIpsFromWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteAllowedIpsFromWhitelist",
    value: function deleteAllowedIpsFromWhitelist(ipWhitelistAddresses, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'ipWhitelistAddresses' is set

      if (ipWhitelistAddresses === undefined || ipWhitelistAddresses === null) {
        throw new Error("Missing the required parameter 'ipWhitelistAddresses' when calling deleteAllowedIpsFromWhitelist");
      }

      var pathParams = {};
      var queryParams = {
        'ip_whitelist_addresses': ipWhitelistAddresses
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/settings/ip_whitelist', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteApnsCertificateById operation.
     * @callback module:api/ApplicationApi~deleteApnsCertificateByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an APNs certificate
     * ## Delete an APNs certificate  Deletes a specific APNs certificate.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-delete-an-apns-certificate ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~deleteApnsCertificateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteApnsCertificateById",
    value: function deleteApnsCertificateById(providerId, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/apns/cert/{provider_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the generateSecondaryApiToken operation.
     * @callback module:api/ApplicationApi~generateSecondaryApiTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a secondary API token
     * ## Generate a secondary API token  Generates a new secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-generate-a-secondary-api-token
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GenerateSecondaryApiTokenData} opts.generateSecondaryApiTokenData 
     * @param {module:api/ApplicationApi~generateSecondaryApiTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "generateSecondaryApiToken",
    value: function generateSecondaryApiToken(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/api_tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPushConfigurations operation.
     * @callback module:api/ApplicationApi~listPushConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List push configurations
     * ## List push configurations  Retrieves a list of an application's registered push configurations.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-configurations ----------------------------
     * @param {String} pushType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~listPushConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listPushConfigurations",
    value: function listPushConfigurations(pushType, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/{push_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listPushNotificationContentTemplates operation.
     * @callback module:api/ApplicationApi~listPushNotificationContentTemplatesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List push notification content templates
     * ## List push notification content templates  Retrieves a list of push notification content templates of an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-push-notification-content-templates
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~listPushNotificationContentTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listPushNotificationContentTemplates",
    value: function listPushNotificationContentTemplates(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/message_templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listSecondaryApiTokens operation.
     * @callback module:api/ApplicationApi~listSecondaryApiTokensCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List secondary API tokens
     * ## List secondary API tokens  Retrieves a list of secondary API tokens.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-list-secondary-api-tokens
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~listSecondaryApiTokensCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listSecondaryApiTokens",
    value: function listSecondaryApiTokens(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/api_tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the removePushConfigurationById operation.
     * @callback module:api/ApplicationApi~removePushConfigurationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a push configuration
     * ## Remove a push configuration  Removes a specific push configuration from an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-remove-a-push-configuration ----------------------------
     * @param {String} pushType 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~removePushConfigurationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removePushConfigurationById",
    value: function removePushConfigurationById(pushType, providerId, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/{push_type}/{provider_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the retrieveIpWhitelist operation.
     * @callback module:api/ApplicationApi~retrieveIpWhitelistCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an IP whitelist
     * ## Retrieve an IP whitelist  Retrieves a list of all the IP ranges and addresses that have access to your Sendbird application. This list is called an IP whitelist and its addresses are granted API access when the IP whitelist API enables [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notations.  If you specify which IP addresses or ranges to include in the whitelist, any unlisted foreign IP addresses will be denied access. If you don’t specify any IP address or range to include in the whitelist, all IP addresses will be granted API access. You can configure the IP whitelist under Settings > Security > Allowed IPs in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-retrieve-an-ip-whitelist
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~retrieveIpWhitelistCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "retrieveIpWhitelist",
    value: function retrieveIpWhitelist(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/settings/ip_whitelist', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the revokeSecondaryApiTokenByToken operation.
     * @callback module:api/ApplicationApi~revokeSecondaryApiTokenByTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke a secondary API token
     * ## Revoke a secondary API token  Revokes a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-revoke-a-secondary-api-token
     * @param {String} apiToken2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~revokeSecondaryApiTokenByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "revokeSecondaryApiTokenByToken",
    value: function revokeSecondaryApiTokenByToken(apiToken2, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/api_tokens/{api_token}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateApnsPushConfigurationById operation.
     * @callback module:api/ApplicationApi~updateApnsPushConfigurationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an APNs push configuration
     * ## Update an APNs push configuration  Updates a specific APNs (Apple Push Notification service) push configuration for your client app. You can also register the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  > __Note__: If your HTTP request body contains a [.p12](https://sendbird.com/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) certificate file to upload to Sendbird server, you should send a [Multipart request](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api#2-headers-3-multipart-requests) .  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-apns-push-configuration ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateApnsPushConfigurationByIdData} opts.updateApnsPushConfigurationByIdData 
     * @param {module:api/ApplicationApi~updateApnsPushConfigurationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateApnsPushConfigurationById",
    value: function updateApnsPushConfigurationById(providerId, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/apns/{provider_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateDefaultChannelInvitationPreference operation.
     * @callback module:api/ApplicationApi~updateDefaultChannelInvitationPreferenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update default channel invitation preference
     * ## Update default channel invitation preference  Updates the default channel invitation preference of an application.  > __Note__: Using the [update channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-update-channel-invitation-preference) action, you can update the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-default-channel-invitation-preference
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateDefaultChannelInvitationPreferenceData} opts.updateDefaultChannelInvitationPreferenceData 
     * @param {module:api/ApplicationApi~updateDefaultChannelInvitationPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateDefaultChannelInvitationPreference",
    value: function updateDefaultChannelInvitationPreference(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/default_channel_invitation_preference', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateFcmPushConfigurationById operation.
     * @callback module:api/ApplicationApi~updateFcmPushConfigurationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a FCM push configuration
     * ## Update a FCM push configuration  Updates a specific FCM (Firebase Cloud Messaging) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-fcm-push-configuration ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateFcmPushConfigurationByIdData} opts.updateFcmPushConfigurationByIdData 
     * @param {module:api/ApplicationApi~updateFcmPushConfigurationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateFcmPushConfigurationById",
    value: function updateFcmPushConfigurationById(providerId, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/fcm/{provider_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateHmsPushConfigurationById operation.
     * @callback module:api/ApplicationApi~updateHmsPushConfigurationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an HMS push configuration
     * ## Update an HMS push configuration  Updates a specific HMS (Huawei Mobile Services) push configuration for your client app. You can also update the configurations in your [dashboard](https://dashboard.sendbird.com) under Settings > Application > Notifications.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-an-hms-push-configuration ----------------------------
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateHmsPushConfigurationByIdData} opts.updateHmsPushConfigurationByIdData 
     * @param {module:api/ApplicationApi~updateHmsPushConfigurationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateHmsPushConfigurationById",
    value: function updateHmsPushConfigurationById(providerId, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/hms/{provider_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePushNotificationContentTemplate operation.
     * @callback module:api/ApplicationApi~updatePushNotificationContentTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a push notification content template
     * ## Update a push notification content template  Updates a specific push notification content template of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-update-a-push-notification-content-template ----------------------------
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdatePushNotificationContentTemplateData} opts.updatePushNotificationContentTemplateData 
     * @param {module:api/ApplicationApi~updatePushNotificationContentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePushNotificationContentTemplate",
    value: function updatePushNotificationContentTemplate(templateName, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/message_templates/{template_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewDefaultChannelInvitationPreference operation.
     * @callback module:api/ApplicationApi~viewDefaultChannelInvitationPreferenceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View default channel invitation preference
     * ## View default channel invitation preference  Retrieves the default channel invitation preference of an application.  > __Note__: Using the [view channel invitation preference](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-view-channel-invitation-preference) action, you can retrieve the value of a specific user's channel invitation preference, which can be set individually by user.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-default-channel-invitation-preference
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~viewDefaultChannelInvitationPreferenceCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewDefaultChannelInvitationPreference",
    value: function viewDefaultChannelInvitationPreference(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/default_channel_invitation_preference', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfConcurrentConnections operation.
     * @callback module:api/ApplicationApi~viewNumberOfConcurrentConnectionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of concurrent connections
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~viewNumberOfConcurrentConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfConcurrentConnections",
    value: function viewNumberOfConcurrentConnections(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/ccu', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfDailyActiveUsers operation.
     * @callback module:api/ApplicationApi~viewNumberOfDailyActiveUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of daily active users
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.date 
     * @param {module:api/ApplicationApi~viewNumberOfDailyActiveUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfDailyActiveUsers",
    value: function viewNumberOfDailyActiveUsers(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/dau', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfMonthlyActiveUsers operation.
     * @callback module:api/ApplicationApi~viewNumberOfMonthlyActiveUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of monthly active users
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.date 
     * @param {module:api/ApplicationApi~viewNumberOfMonthlyActiveUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfMonthlyActiveUsers",
    value: function viewNumberOfMonthlyActiveUsers(opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/mau', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewNumberOfPeakConnections operation.
     * @callback module:api/ApplicationApi~viewNumberOfPeakConnectionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

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
     * @param {module:api/ApplicationApi~viewNumberOfPeakConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewNumberOfPeakConnections",
    value: function viewNumberOfPeakConnections(timeDimension, startYear, startMonth, endYear, endMonth, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/peak_connections', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewPushConfigurationById operation.
     * @callback module:api/ApplicationApi~viewPushConfigurationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a push configuration
     * ## View a push configuration  Retrieves a specific push configuration of an application. The type of a push configuration is either `fcm`, `huawei`, or `apns`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-configuration ----------------------------
     * @param {String} pushType 
     * @param {String} providerId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~viewPushConfigurationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewPushConfigurationById",
    value: function viewPushConfigurationById(pushType, providerId, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/{push_type}/{provider_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewPushNotificationContentTemplate operation.
     * @callback module:api/ApplicationApi~viewPushNotificationContentTemplateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a push notification content template
     * ## View a push notification content template  Retrieves information on a specific push notification content templates of an application. The name of a content template is either `default` or `alternative`.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-push-notification-content-template ----------------------------
     * @param {String} templateName 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~viewPushNotificationContentTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewPushNotificationContentTemplate",
    value: function viewPushNotificationContentTemplate(templateName, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/push/message_templates/{template_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewSecondaryApiTokenByToken operation.
     * @callback module:api/ApplicationApi~viewSecondaryApiTokenByTokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a secondary API token
     * ## View a secondary API token  Retrieves the information on a secondary API token.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-a-secondary-api-token
     * @param {String} apiToken2 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ApplicationApi~viewSecondaryApiTokenByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewSecondaryApiTokenByToken",
    value: function viewSecondaryApiTokenByToken(apiToken2, opts, callback) {
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
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/api_tokens/{api_token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ApplicationApi;
}();

exports["default"] = ApplicationApi;