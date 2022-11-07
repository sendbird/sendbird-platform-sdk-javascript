"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListDataExportsByMessageChannelOrUserResponse = _interopRequireDefault(require("../model/ListDataExportsByMessageChannelOrUserResponse"));
var _RegisterAndScheduleDataExportData = _interopRequireDefault(require("../model/RegisterAndScheduleDataExportData"));
var _RegisterAndScheduleDataExportResponse = _interopRequireDefault(require("../model/RegisterAndScheduleDataExportResponse"));
var _ViewDataExportByIdResponse = _interopRequireDefault(require("../model/ViewDataExportByIdResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* DataExport service.
* @module api/DataExportApi
* @version 0.0.16
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
   * List data exports by message, channel, or user
   * ## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.
   * @param {String} apiToken 
   * @param {String} dataType 
   * @param {Object} opts Optional parameters
   * @param {String} opts.token 
   * @param {Number} opts.limit 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDataExportsByMessageChannelOrUserResponse} and HTTP response
   */
  _createClass(DataExportApi, [{
    key: "listDataExportsByMessageChannelOrUserWithHttpInfo",
    value: function listDataExportsByMessageChannelOrUserWithHttpInfo(apiToken, dataType, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listDataExportsByMessageChannelOrUser");
      }
      // verify the required parameter 'dataType' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListDataExportsByMessageChannelOrUserResponse["default"];
      return this.apiClient.callApi('/v3/export/{data_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List data exports by message, channel, or user
     * ## List data exports by message, channel, or user  Retrieves a list of message, channel or user data exports  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-list-data-exports-by-message,-channel,-or-user ----------------------------   `data_type`      Type: string      Description: Specifies the type of a data export to retrieve. Acceptable values are messages, channels, users, and failed_webhooks.
     * @param {String} apiToken 
     * @param {String} dataType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDataExportsByMessageChannelOrUserResponse}
     */
  }, {
    key: "listDataExportsByMessageChannelOrUser",
    value: function listDataExportsByMessageChannelOrUser(apiToken, dataType, opts) {
      return this.listDataExportsByMessageChannelOrUserWithHttpInfo(apiToken, dataType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Register and schedule a data export
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * @param {String} apiToken 
     * @param {String} dataType 
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterAndScheduleDataExportData} opts.registerAndScheduleDataExportData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RegisterAndScheduleDataExportResponse} and HTTP response
     */
  }, {
    key: "registerAndScheduleDataExportWithHttpInfo",
    value: function registerAndScheduleDataExportWithHttpInfo(apiToken, dataType, opts) {
      opts = opts || {};
      var postBody = opts['registerAndScheduleDataExportData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling registerAndScheduleDataExport");
      }
      // verify the required parameter 'dataType' is set
      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling registerAndScheduleDataExport");
      }
      var pathParams = {
        'data_type': dataType
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RegisterAndScheduleDataExportResponse["default"];
      return this.apiClient.callApi('/v3/export/{data_type}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Register and schedule a data export
     * ## Register and schedule a data export  Registers and schedules a message, channel, or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-register-and-schedule-a-data-export ----------------------------
     * @param {String} apiToken 
     * @param {String} dataType 
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterAndScheduleDataExportData} opts.registerAndScheduleDataExportData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RegisterAndScheduleDataExportResponse}
     */
  }, {
    key: "registerAndScheduleDataExport",
    value: function registerAndScheduleDataExport(apiToken, dataType, opts) {
      return this.registerAndScheduleDataExportWithHttpInfo(apiToken, dataType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a data export
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * @param {String} apiToken 
     * @param {String} dataType 
     * @param {String} requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewDataExportByIdResponse} and HTTP response
     */
  }, {
    key: "viewDataExportByIdWithHttpInfo",
    value: function viewDataExportByIdWithHttpInfo(apiToken, dataType, requestId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewDataExportById");
      }
      // verify the required parameter 'dataType' is set
      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling viewDataExportById");
      }
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling viewDataExportById");
      }
      var pathParams = {
        'data_type': dataType,
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
      var returnType = _ViewDataExportByIdResponse["default"];
      return this.apiClient.callApi('/v3/export/{data_type}/{request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a data export
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * @param {String} apiToken 
     * @param {String} dataType 
     * @param {String} requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewDataExportByIdResponse}
     */
  }, {
    key: "viewDataExportById",
    value: function viewDataExportById(apiToken, dataType, requestId) {
      return this.viewDataExportByIdWithHttpInfo(apiToken, dataType, requestId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return DataExportApi;
}();
exports["default"] = DataExportApi;