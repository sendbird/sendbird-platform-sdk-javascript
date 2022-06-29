"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetDetailedOpenRateOfAnnouncementByIdResponse = _interopRequireDefault(require("../model/GetDetailedOpenRateOfAnnouncementByIdResponse"));

var _GetDetailedOpenRateOfAnnouncementGroupResponse = _interopRequireDefault(require("../model/GetDetailedOpenRateOfAnnouncementGroupResponse"));

var _GetDetailedOpenStatusOfAnnouncementByIdResponse = _interopRequireDefault(require("../model/GetDetailedOpenStatusOfAnnouncementByIdResponse"));

var _ViewAnnouncementByIdResponse = _interopRequireDefault(require("../model/ViewAnnouncementByIdResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Announcement service.
* @module api/AnnouncementApi
* @version 1.0.3
*/
var AnnouncementApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AnnouncementApi. 
  * @alias module:api/AnnouncementApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AnnouncementApi(apiClient) {
    _classCallCheck(this, AnnouncementApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get detailed open rate of an announcement
   * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
   * @param {String} apiToken 
   * @param {String} uniqueId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse} and HTTP response
   */


  _createClass(AnnouncementApi, [{
    key: "getDetailedOpenRateOfAnnouncementByIdWithHttpInfo",
    value: function getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenRateOfAnnouncementById");
      } // verify the required parameter 'uniqueId' is set


      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling getDetailedOpenRateOfAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetDetailedOpenRateOfAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcement_open_rate/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get detailed open rate of an announcement
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse}
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementById",
    value: function getDetailedOpenRateOfAnnouncementById(apiToken, uniqueId) {
      return this.getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} apiToken 
     * @param {String} announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementGroupResponse} and HTTP response
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementGroupWithHttpInfo",
    value: function getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(apiToken, announcementGroup) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenRateOfAnnouncementGroup");
      } // verify the required parameter 'announcementGroup' is set


      if (announcementGroup === undefined || announcementGroup === null) {
        throw new Error("Missing the required parameter 'announcementGroup' when calling getDetailedOpenRateOfAnnouncementGroup");
      }

      var pathParams = {
        'announcement_group': announcementGroup
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetDetailedOpenRateOfAnnouncementGroupResponse["default"];
      return this.apiClient.callApi('/v3/announcement_open_rate_by_group/{announcement_group}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} apiToken 
     * @param {String} announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenRateOfAnnouncementGroupResponse}
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementGroup",
    value: function getDetailedOpenRateOfAnnouncementGroup(apiToken, announcementGroup) {
      return this.getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(apiToken, announcementGroup).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get detailed open status of an announcement
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {String} opts.next 
     * @param {Array.<String>} opts.uniqueIds 
     * @param {Array.<String>} opts.channelUrls 
     * @param {Boolean} opts.hasOpened 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse} and HTTP response
     */

  }, {
    key: "getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo",
    value: function getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenStatusOfAnnouncementById");
      } // verify the required parameter 'uniqueId' is set


      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling getDetailedOpenStatusOfAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
      };
      var queryParams = {
        'limit': opts['limit'],
        'next': opts['next'],
        'unique_ids': this.apiClient.buildCollectionParam(opts['uniqueIds'], 'multi'),
        'channel_urls': this.apiClient.buildCollectionParam(opts['channelUrls'], 'multi'),
        'has_opened': opts['hasOpened']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetDetailedOpenStatusOfAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcement_open_status/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get detailed open status of an announcement
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit 
     * @param {String} opts.next 
     * @param {Array.<String>} opts.uniqueIds 
     * @param {Array.<String>} opts.channelUrls 
     * @param {Boolean} opts.hasOpened 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse}
     */

  }, {
    key: "getDetailedOpenStatusOfAnnouncementById",
    value: function getDetailedOpenStatusOfAnnouncementById(apiToken, uniqueId, opts) {
      return this.getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewAnnouncementByIdResponse} and HTTP response
     */

  }, {
    key: "viewAnnouncementByIdWithHttpInfo",
    value: function viewAnnouncementByIdWithHttpInfo(apiToken, uniqueId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewAnnouncementById");
      } // verify the required parameter 'uniqueId' is set


      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling viewAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewAnnouncementByIdResponse}
     */

  }, {
    key: "viewAnnouncementById",
    value: function viewAnnouncementById(apiToken, uniqueId) {
      return this.viewAnnouncementByIdWithHttpInfo(apiToken, uniqueId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AnnouncementApi;
}();

exports["default"] = AnnouncementApi;