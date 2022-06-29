"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListGdprRequestsResponse = _interopRequireDefault(require("../model/ListGdprRequestsResponse"));

var _RegisterGdprRequestData = _interopRequireDefault(require("../model/RegisterGdprRequestData"));

var _RegisterGdprRequestResponse = _interopRequireDefault(require("../model/RegisterGdprRequestResponse"));

var _ViewGdprRequestByIdResponse = _interopRequireDefault(require("../model/ViewGdprRequestByIdResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* DataPrivacy service.
* @module api/DataPrivacyApi
* @version 1.0.1
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
   * Cancel the registration of a GDPR request
   * ## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------
   * @param {String} apiToken 
   * @param {String} requestId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(DataPrivacyApi, [{
    key: "cancelTheRegistrationOfGdprRequestByIdWithHttpInfo",
    value: function cancelTheRegistrationOfGdprRequestByIdWithHttpInfo(apiToken, requestId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling cancelTheRegistrationOfGdprRequestById");
      } // verify the required parameter 'requestId' is set


      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling cancelTheRegistrationOfGdprRequestById");
      }

      var pathParams = {
        'request_id': requestId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/privacy/gdpr/{request_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Cancel the registration of a GDPR request
     * ## Cancel the registration of a GDPR request  Cancels the registration of a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-cancel-the-registration-of-a-gdpr-request ----------------------------
     * @param {String} apiToken 
     * @param {String} requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "cancelTheRegistrationOfGdprRequestById",
    value: function cancelTheRegistrationOfGdprRequestById(apiToken, requestId) {
      return this.cancelTheRegistrationOfGdprRequestByIdWithHttpInfo(apiToken, requestId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List GDPR requests
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListGdprRequestsResponse} and HTTP response
     */

  }, {
    key: "listGdprRequestsWithHttpInfo",
    value: function listGdprRequestsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listGdprRequests");
      }

      var pathParams = {};
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
      var returnType = _ListGdprRequestsResponse["default"];
      return this.apiClient.callApi('/v3/privacy/gdpr', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List GDPR requests
     * ## List GDPR requests  Retrieves a list of GDPR requests of all types.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-list-gdpr-requests ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListGdprRequestsResponse}
     */

  }, {
    key: "listGdprRequests",
    value: function listGdprRequests(apiToken, opts) {
      return this.listGdprRequestsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Register a GDPR request
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterGdprRequestData} opts.registerGdprRequestData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RegisterGdprRequestResponse} and HTTP response
     */

  }, {
    key: "registerGdprRequestWithHttpInfo",
    value: function registerGdprRequestWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['registerGdprRequestData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling registerGdprRequest");
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
      var returnType = _RegisterGdprRequestResponse["default"];
      return this.apiClient.callApi('/v3/privacy/gdpr', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Register a GDPR request
     * ## Register a GDPR request  Registers a specific type of GDPR request to meet the GDPR's requirements.  > __Note__: Currently, only delete and access of the user data are supported. The features for the [right to restriction of processing](https://gdpr-info.eu/art-18-gdpr/) and [right to object](https://gdpr-info.eu/art-21-gdpr/) will be available soon.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-register-a-gdpr-request
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterGdprRequestData} opts.registerGdprRequestData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RegisterGdprRequestResponse}
     */

  }, {
    key: "registerGdprRequest",
    value: function registerGdprRequest(apiToken, opts) {
      return this.registerGdprRequestWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a GDPR request
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * @param {String} apiToken 
     * @param {String} requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewGdprRequestByIdResponse} and HTTP response
     */

  }, {
    key: "viewGdprRequestByIdWithHttpInfo",
    value: function viewGdprRequestByIdWithHttpInfo(apiToken, requestId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewGdprRequestById");
      } // verify the required parameter 'requestId' is set


      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling viewGdprRequestById");
      }

      var pathParams = {
        'request_id': requestId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewGdprRequestByIdResponse["default"];
      return this.apiClient.callApi('/v3/privacy/gdpr/{request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a GDPR request
     * ## View a GDPR request  Retrieves a specific GDPR request.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-privacy#2-view-a-gdpr-request ----------------------------
     * @param {String} apiToken 
     * @param {String} requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewGdprRequestByIdResponse}
     */

  }, {
    key: "viewGdprRequestById",
    value: function viewGdprRequestById(apiToken, requestId) {
      return this.viewGdprRequestByIdWithHttpInfo(apiToken, requestId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DataPrivacyApi;
}();

exports["default"] = DataPrivacyApi;