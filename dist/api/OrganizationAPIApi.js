"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* OrganizationAPI service.
* @module api/OrganizationAPIApi
* @version 1.0.0
*/
var OrganizationAPIApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrganizationAPIApi. 
  * @alias module:api/OrganizationAPIApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrganizationAPIApi(apiClient) {
    _classCallCheck(this, OrganizationAPIApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createApplication operation.
   * @callback module:api/OrganizationAPIApi~createApplicationCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an application
   * ## Create an application  Creates a new application under your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-create-an-application
   * @param {Object} opts Optional parameters
   * @param {String} opts.SENDBIRDORGANIZATIONAPITOKEN 
   * @param {Object} opts.body 
   * @param {module:api/OrganizationAPIApi~createApplicationCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(OrganizationAPIApi, [{
    key: "createApplication",
    value: function createApplication(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'SENDBIRDORGANIZATIONAPITOKEN': opts['SENDBIRDORGANIZATIONAPITOKEN']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/applications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteApplicationById operation.
     * @callback module:api/OrganizationAPIApi~deleteApplicationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application
     * ## Delete an application  Deletes the specified application.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-delete-an-application ----------------------------
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.SENDBIRDORGANIZATIONAPITOKEN 
     * @param {module:api/OrganizationAPIApi~deleteApplicationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteApplicationById",
    value: function deleteApplicationById(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteApplicationById");
      }

      var pathParams = {
        'app_id': appId
      };
      var queryParams = {};
      var headerParams = {
        'SENDBIRDORGANIZATIONAPITOKEN': opts['SENDBIRDORGANIZATIONAPITOKEN']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/applications/{app_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listApplications operation.
     * @callback module:api/OrganizationAPIApi~listApplicationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List applications
     * ## List applications  Retrieves a list of applications of your organization.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-list-applications ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.SENDBIRDORGANIZATIONAPITOKEN 
     * @param {module:api/OrganizationAPIApi~listApplicationsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listApplications",
    value: function listApplications(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'SENDBIRDORGANIZATIONAPITOKEN': opts['SENDBIRDORGANIZATIONAPITOKEN']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/applications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewApplicationById operation.
     * @callback module:api/OrganizationAPIApi~viewApplicationByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View an application
     * ## View an application  Retrieves information about an application with a specified application ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/organization-api#2-view-an-application ----------------------------
     * @param {String} appId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.SENDBIRDORGANIZATIONAPITOKEN 
     * @param {module:api/OrganizationAPIApi~viewApplicationByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewApplicationById",
    value: function viewApplicationById(appId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'appId' is set

      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling viewApplicationById");
      }

      var pathParams = {
        'app_id': appId
      };
      var queryParams = {};
      var headerParams = {
        'SENDBIRDORGANIZATIONAPITOKEN': opts['SENDBIRDORGANIZATIONAPITOKEN']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v2/applications/{app_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OrganizationAPIApi;
}();

exports["default"] = OrganizationAPIApi;