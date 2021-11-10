"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegisterAndScheduleDataExportData = _interopRequireDefault(require("../model/RegisterAndScheduleDataExportData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DataExport service.
* @module api/DataExportApi
* @version 1.0.0
*/
var DataExportApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DataExportApi. 
  * @alias module:api/DataExportApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DataExportApi(apiClient) {
    _classCallCheck(this, DataExportApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the listDataExportsByMessageChannelOrUser operation.
   * @callback module:api/DataExportApi~listDataExportsByMessageChannelOrUserCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List data exports by message, channel, or user
   * ## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.
   * @param {String} dataType 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {String} opts.token 
   * @param {Number} opts.limit 
   * @param {module:api/DataExportApi~listDataExportsByMessageChannelOrUserCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DataExportApi, [{
    key: "listDataExportsByMessageChannelOrUser",
    value: function listDataExportsByMessageChannelOrUser(dataType, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'dataType' is set

      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling listDataExportsByMessageChannelOrUser");
      }

      var pathParams = {
        'data_type': dataType
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
      return this.apiClient.callApi('/v3/export/{data_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the registerAndScheduleDataExport operation.
     * @callback module:api/DataExportApi~registerAndScheduleDataExportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register and schedule a data export
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * @param {String} dataType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/RegisterAndScheduleDataExportData} opts.registerAndScheduleDataExportData 
     * @param {module:api/DataExportApi~registerAndScheduleDataExportCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "registerAndScheduleDataExport",
    value: function registerAndScheduleDataExport(dataType, opts, callback) {
      opts = opts || {};
      var postBody = opts['registerAndScheduleDataExportData']; // verify the required parameter 'dataType' is set

      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling registerAndScheduleDataExport");
      }

      var pathParams = {
        'data_type': dataType
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
      return this.apiClient.callApi('/v3/export/{data_type}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewDataExportById operation.
     * @callback module:api/DataExportApi~viewDataExportByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a data export
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * @param {String} dataType 
     * @param {String} requestId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/DataExportApi~viewDataExportByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewDataExportById",
    value: function viewDataExportById(dataType, requestId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'dataType' is set

      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling viewDataExportById");
      } // verify the required parameter 'requestId' is set


      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling viewDataExportById");
      }

      var pathParams = {
        'data_type': dataType,
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
      return this.apiClient.callApi('/v3/export/{data_type}/{request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DataExportApi;
}();

exports["default"] = DataExportApi;