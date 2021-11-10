"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegisterGdprRequestData = _interopRequireDefault(require("../model/RegisterGdprRequestData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DataPrivacy service.
* @module api/DataPrivacyApi
* @version 1.0.0
*/
var DataPrivacyApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DataPrivacyApi. 
  * @alias module:api/DataPrivacyApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DataPrivacyApi(apiClient) {
    _classCallCheck(this, DataPrivacyApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the cancelTheRegistrationOfGdprRequestById operation.
   * @callback module:api/DataPrivacyApi~cancelTheRegistrationOfGdprRequestByIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel the registration of a GDPR request
   * ## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------
   * @param {String} requestId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:api/DataPrivacyApi~cancelTheRegistrationOfGdprRequestByIdCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DataPrivacyApi, [{
    key: "cancelTheRegistrationOfGdprRequestById",
    value: function cancelTheRegistrationOfGdprRequestById(requestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'requestId' is set

      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling cancelTheRegistrationOfGdprRequestById");
      }

      var pathParams = {
        'request_id': requestId
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
      return this.apiClient.callApi('/v3/privacy/gdpr/{request_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listGdprRequests operation.
     * @callback module:api/DataPrivacyApi~listGdprRequestsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List GDPR requests
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/DataPrivacyApi~listGdprRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listGdprRequests",
    value: function listGdprRequests(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      return this.apiClient.callApi('/v3/privacy/gdpr', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerGdprRequest operation.
     * @callback module:api/DataPrivacyApi~registerGdprRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a GDPR request
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/RegisterGdprRequestData} opts.registerGdprRequestData 
     * @param {module:api/DataPrivacyApi~registerGdprRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "registerGdprRequest",
    value: function registerGdprRequest(opts, callback) {
      opts = opts || {};
      var postBody = opts['registerGdprRequestData'];
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
      return this.apiClient.callApi('/v3/privacy/gdpr', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewGdprRequestById operation.
     * @callback module:api/DataPrivacyApi~viewGdprRequestByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a GDPR request
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * @param {String} requestId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/DataPrivacyApi~viewGdprRequestByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewGdprRequestById",
    value: function viewGdprRequestById(requestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'requestId' is set

      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling viewGdprRequestById");
      }

      var pathParams = {
        'request_id': requestId
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
      return this.apiClient.callApi('/v3/privacy/gdpr/{request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DataPrivacyApi;
}();

exports["default"] = DataPrivacyApi;