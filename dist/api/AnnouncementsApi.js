"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetDetailedOpenRateOfAnnouncementByIdResponse = _interopRequireDefault(require("../model/GetDetailedOpenRateOfAnnouncementByIdResponse"));

var _GetDetailedOpenRateOfAnnouncementGroupResponse = _interopRequireDefault(require("../model/GetDetailedOpenRateOfAnnouncementGroupResponse"));

var _GetDetailedOpenStatusOfAnnouncementByIdResponse = _interopRequireDefault(require("../model/GetDetailedOpenStatusOfAnnouncementByIdResponse"));

var _GetStatisticsDailyResponse = _interopRequireDefault(require("../model/GetStatisticsDailyResponse"));

var _GetStatisticsMonthlyResponse = _interopRequireDefault(require("../model/GetStatisticsMonthlyResponse"));

var _GetStatisticsResponse = _interopRequireDefault(require("../model/GetStatisticsResponse"));

var _ListAnnouncementGroupsResponse = _interopRequireDefault(require("../model/ListAnnouncementGroupsResponse"));

var _ListAnnouncementsResponse = _interopRequireDefault(require("../model/ListAnnouncementsResponse"));

var _ScheduleAnnouncementData = _interopRequireDefault(require("../model/ScheduleAnnouncementData"));

var _ScheduleAnnouncementResponse = _interopRequireDefault(require("../model/ScheduleAnnouncementResponse"));

var _UpdateAnnouncementByIdData = _interopRequireDefault(require("../model/UpdateAnnouncementByIdData"));

var _UpdateAnnouncementByIdResponse = _interopRequireDefault(require("../model/UpdateAnnouncementByIdResponse"));

var _ViewAnnouncementByIdResponse = _interopRequireDefault(require("../model/ViewAnnouncementByIdResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
   * Get detailed open rate of an announcement
   * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
   * @param {String} uniqueId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse} and HTTP response
   */


  _createClass(AnnouncementsApi, [{
    key: "getDetailedOpenRateOfAnnouncementByIdWithHttpInfo",
    value: function getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(uniqueId, opts) {
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
      var returnType = _GetDetailedOpenRateOfAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcement_open_rate/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get detailed open rate of an announcement
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse}
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementById",
    value: function getDetailedOpenRateOfAnnouncementById(uniqueId, opts) {
      return this.getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(uniqueId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} announcementGroup 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementGroupResponse} and HTTP response
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementGroupWithHttpInfo",
    value: function getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(announcementGroup, opts) {
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
      var returnType = _GetDetailedOpenRateOfAnnouncementGroupResponse["default"];
      return this.apiClient.callApi('/v3/announcement_open_rate_by_group/{announcement_group}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} announcementGroup 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenRateOfAnnouncementGroupResponse}
     */

  }, {
    key: "getDetailedOpenRateOfAnnouncementGroup",
    value: function getDetailedOpenRateOfAnnouncementGroup(announcementGroup, opts) {
      return this.getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(announcementGroup, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get detailed open status of an announcement
     * ## Get detailed open status of an announcement  Retrieves the detailed open status information of a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-status-of-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Number} opts.limit 
     * @param {String} opts.next 
     * @param {Array.<String>} opts.uniqueIds 
     * @param {Array.<String>} opts.channelUrls 
     * @param {Boolean} opts.hasOpened 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse} and HTTP response
     */

  }, {
    key: "getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo",
    value: function getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo(uniqueId, opts) {
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
        'unique_ids': this.apiClient.buildCollectionParam(opts['uniqueIds'], 'multi'),
        'channel_urls': this.apiClient.buildCollectionParam(opts['channelUrls'], 'multi'),
        'has_opened': opts['hasOpened']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
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
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Number} opts.limit 
     * @param {String} opts.next 
     * @param {Array.<String>} opts.uniqueIds 
     * @param {Array.<String>} opts.channelUrls 
     * @param {Boolean} opts.hasOpened 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse}
     */

  }, {
    key: "getDetailedOpenStatusOfAnnouncementById",
    value: function getDetailedOpenStatusOfAnnouncementById(uniqueId, opts) {
      return this.getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo(uniqueId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsResponse} and HTTP response
     */

  }, {
    key: "getStatisticsWithHttpInfo",
    value: function getStatisticsWithHttpInfo(opts) {
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
      var returnType = _GetStatisticsResponse["default"];
      return this.apiClient.callApi('/v3/announcement_stats/weekly', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsResponse}
     */

  }, {
    key: "getStatistics",
    value: function getStatistics(opts) {
      return this.getStatisticsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsDailyResponse} and HTTP response
     */

  }, {
    key: "getStatisticsDailyWithHttpInfo",
    value: function getStatisticsDailyWithHttpInfo(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
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
      var returnType = _GetStatisticsDailyResponse["default"];
      return this.apiClient.callApi('/v3/announcement_stats/daily', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsDailyResponse}
     */

  }, {
    key: "getStatisticsDaily",
    value: function getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      return this.getStatisticsDailyWithHttpInfo(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsMonthlyResponse} and HTTP response
     */

  }, {
    key: "getStatisticsMonthlyWithHttpInfo",
    value: function getStatisticsMonthlyWithHttpInfo(opts) {
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
      var returnType = _GetStatisticsMonthlyResponse["default"];
      return this.apiClient.callApi('/v3/announcement_stats/monthly', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsMonthlyResponse}
     */

  }, {
    key: "getStatisticsMonthly",
    value: function getStatisticsMonthly(opts) {
      return this.getStatisticsMonthlyWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAnnouncementGroupsResponse} and HTTP response
     */

  }, {
    key: "listAnnouncementGroupsWithHttpInfo",
    value: function listAnnouncementGroupsWithHttpInfo(opts) {
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
      var returnType = _ListAnnouncementGroupsResponse["default"];
      return this.apiClient.callApi('/v3/announcement_group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAnnouncementGroupsResponse}
     */

  }, {
    key: "listAnnouncementGroups",
    value: function listAnnouncementGroups(opts) {
      return this.listAnnouncementGroupsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAnnouncementsResponse} and HTTP response
     */

  }, {
    key: "listAnnouncementsWithHttpInfo",
    value: function listAnnouncementsWithHttpInfo(opts) {
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
      var returnType = _ListAnnouncementsResponse["default"];
      return this.apiClient.callApi('/v3/announcements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAnnouncementsResponse}
     */

  }, {
    key: "listAnnouncements",
    value: function listAnnouncements(opts) {
      return this.listAnnouncementsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScheduleAnnouncementResponse} and HTTP response
     */

  }, {
    key: "scheduleAnnouncementWithHttpInfo",
    value: function scheduleAnnouncementWithHttpInfo(opts) {
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
      var returnType = _ScheduleAnnouncementResponse["default"];
      return this.apiClient.callApi('/v3/announcements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScheduleAnnouncementResponse}
     */

  }, {
    key: "scheduleAnnouncement",
    value: function scheduleAnnouncement(opts) {
      return this.scheduleAnnouncementWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateAnnouncementByIdResponse} and HTTP response
     */

  }, {
    key: "updateAnnouncementByIdWithHttpInfo",
    value: function updateAnnouncementByIdWithHttpInfo(uniqueId, opts) {
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
      var returnType = _UpdateAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateAnnouncementByIdResponse}
     */

  }, {
    key: "updateAnnouncementById",
    value: function updateAnnouncementById(uniqueId, opts) {
      return this.updateAnnouncementByIdWithHttpInfo(uniqueId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewAnnouncementByIdResponse} and HTTP response
     */

  }, {
    key: "viewAnnouncementByIdWithHttpInfo",
    value: function viewAnnouncementByIdWithHttpInfo(uniqueId, opts) {
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
      var returnType = _ViewAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewAnnouncementByIdResponse}
     */

  }, {
    key: "viewAnnouncementById",
    value: function viewAnnouncementById(uniqueId, opts) {
      return this.viewAnnouncementByIdWithHttpInfo(uniqueId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AnnouncementsApi;
}();

exports["default"] = AnnouncementsApi;