"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduleAnnouncementData = _interopRequireDefault(require("../model/ScheduleAnnouncementData"));

var _UpdateAnnouncementByIdData = _interopRequireDefault(require("../model/UpdateAnnouncementByIdData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Announcements service.
* @module api/AnnouncementsApi
* @version 1.0.0
*/
var AnnouncementsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AnnouncementsApi. 
  * @alias module:api/AnnouncementsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AnnouncementsApi(apiClient) {
    _classCallCheck(this, AnnouncementsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getDetailedOpenRateOfAnnouncementById operation.
   * @callback module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementByIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get detailed open rate of an announcement
   * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
   * @param {String} uniqueId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(AnnouncementsApi, [{
    key: "getDetailedOpenRateOfAnnouncementById",
    value: function getDetailedOpenRateOfAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'uniqueId' is set

      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling getDetailedOpenRateOfAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
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
      return this.apiClient.callApi('/v3/announcement_open_rate/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDetailedOpenRateOfAnnouncementGroup operation.
     * @callback module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} announcementGroup 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementGroup",
    value: function getDetailedOpenRateOfAnnouncementGroup(announcementGroup, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'announcementGroup' is set

      if (announcementGroup === undefined || announcementGroup === null) {
        throw new Error("Missing the required parameter 'announcementGroup' when calling getDetailedOpenRateOfAnnouncementGroup");
      }

      var pathParams = {
        'announcement_group': announcementGroup
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
      return this.apiClient.callApi('/v3/announcement_open_rate_by_group/{announcement_group}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDetailedOpenStatusOfAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~getDetailedOpenStatusOfAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed open status of an announcement
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Number} opts.limit 
     * @param {String} opts.next 
     * @param {Array} opts.uniqueIds 
     * @param {Array} opts.channelUrls 
     * @param {Boolean} opts.hasOpened 
     * @param {module:api/AnnouncementsApi~getDetailedOpenStatusOfAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getDetailedOpenStatusOfAnnouncementById",
    value: function getDetailedOpenStatusOfAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'uniqueId' is set

      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling getDetailedOpenStatusOfAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
      };
      var queryParams = {
        'limit': opts['limit'],
        'next': opts['next'],
        'unique_ids': opts['uniqueIds'],
        'channel_urls': opts['channelUrls'],
        'has_opened': opts['hasOpened']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/announcement_open_status/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStatistics operation.
     * @callback module:api/AnnouncementsApi~getStatisticsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getStatistics",
    value: function getStatistics(opts, callback) {
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
      return this.apiClient.callApi('/v3/announcement_stats/weekly', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStatisticsDaily operation.
     * @callback module:api/AnnouncementsApi~getStatisticsDailyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics - daily
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} startDate 
     * @param {String} endDate 
     * @param {String} startWeek 
     * @param {String} endWeek 
     * @param {String} startMonth 
     * @param {String} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.announcementGroup 
     * @param {module:api/AnnouncementsApi~getStatisticsDailyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getStatisticsDaily",
    value: function getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'startDate' is set

      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getStatisticsDaily");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getStatisticsDaily");
      } // verify the required parameter 'startWeek' is set


      if (startWeek === undefined || startWeek === null) {
        throw new Error("Missing the required parameter 'startWeek' when calling getStatisticsDaily");
      } // verify the required parameter 'endWeek' is set


      if (endWeek === undefined || endWeek === null) {
        throw new Error("Missing the required parameter 'endWeek' when calling getStatisticsDaily");
      } // verify the required parameter 'startMonth' is set


      if (startMonth === undefined || startMonth === null) {
        throw new Error("Missing the required parameter 'startMonth' when calling getStatisticsDaily");
      } // verify the required parameter 'endMonth' is set


      if (endMonth === undefined || endMonth === null) {
        throw new Error("Missing the required parameter 'endMonth' when calling getStatisticsDaily");
      }

      var pathParams = {};
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'start_week': startWeek,
        'end_week': endWeek,
        'start_month': startMonth,
        'end_month': endMonth,
        'announcement_group': opts['announcementGroup']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/announcement_stats/daily', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getStatisticsMonthly operation.
     * @callback module:api/AnnouncementsApi~getStatisticsMonthlyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getStatisticsMonthlyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getStatisticsMonthly",
    value: function getStatisticsMonthly(opts, callback) {
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
      return this.apiClient.callApi('/v3/announcement_stats/monthly', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listAnnouncementGroups operation.
     * @callback module:api/AnnouncementsApi~listAnnouncementGroupsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/AnnouncementsApi~listAnnouncementGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listAnnouncementGroups",
    value: function listAnnouncementGroups(opts, callback) {
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
      return this.apiClient.callApi('/v3/announcement_group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listAnnouncements operation.
     * @callback module:api/AnnouncementsApi~listAnnouncementsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List announcements
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.status 
     * @param {String} opts.announcementGroup 
     * @param {module:api/AnnouncementsApi~listAnnouncementsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listAnnouncements",
    value: function listAnnouncements(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'order': opts['order'],
        'status': opts['status'],
        'announcement_group': opts['announcementGroup']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/announcements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the scheduleAnnouncement operation.
     * @callback module:api/AnnouncementsApi~scheduleAnnouncementCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @param {module:api/AnnouncementsApi~scheduleAnnouncementCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "scheduleAnnouncement",
    value: function scheduleAnnouncement(opts, callback) {
      opts = opts || {};
      var postBody = opts['scheduleAnnouncementData'];
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
      return this.apiClient.callApi('/v3/announcements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~updateAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @param {module:api/AnnouncementsApi~updateAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateAnnouncementById",
    value: function updateAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateAnnouncementByIdData']; // verify the required parameter 'uniqueId' is set

      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling updateAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
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
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~viewAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~viewAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewAnnouncementById",
    value: function viewAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'uniqueId' is set

      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling viewAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
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
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AnnouncementsApi;
}();

exports["default"] = AnnouncementsApi;