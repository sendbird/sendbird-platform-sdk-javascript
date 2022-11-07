"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetDetailedOpenRateOfAnnouncementGroupResponse = _interopRequireDefault(require("../model/GetDetailedOpenRateOfAnnouncementGroupResponse"));
var _GetStatisticsDailyResponse = _interopRequireDefault(require("../model/GetStatisticsDailyResponse"));
var _GetStatisticsMonthlyResponse = _interopRequireDefault(require("../model/GetStatisticsMonthlyResponse"));
var _GetStatisticsResponse = _interopRequireDefault(require("../model/GetStatisticsResponse"));
var _ListAnnouncementGroupsResponse = _interopRequireDefault(require("../model/ListAnnouncementGroupsResponse"));
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
* Announcement service.
* @module api/AnnouncementApi
* @version 0.0.16
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
   * Get detailed open rate of an announcement group
   * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
   * @param {String} apiToken 
   * @param {String} announcementGroup 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementGroupResponse} and HTTP response
   */
  _createClass(AnnouncementApi, [{
    key: "getDetailedOpenRateOfAnnouncementGroupWithHttpInfo",
    value: function getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(apiToken, announcementGroup) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenRateOfAnnouncementGroup");
      }
      // verify the required parameter 'announcementGroup' is set
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
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsResponse} and HTTP response
     */
  }, {
    key: "getStatisticsWithHttpInfo",
    value: function getStatisticsWithHttpInfo(apiToken) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatistics");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
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
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsResponse}
     */
  }, {
    key: "getStatistics",
    value: function getStatistics(apiToken) {
      return this.getStatisticsWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get statistics - daily
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @param {String} startDate 
     * @param {String} endDate 
     * @param {String} startWeek 
     * @param {String} endWeek 
     * @param {String} startMonth 
     * @param {String} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsDailyResponse} and HTTP response
     */
  }, {
    key: "getStatisticsDailyWithHttpInfo",
    value: function getStatisticsDailyWithHttpInfo(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatisticsDaily");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getStatisticsDaily");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getStatisticsDaily");
      }
      // verify the required parameter 'startWeek' is set
      if (startWeek === undefined || startWeek === null) {
        throw new Error("Missing the required parameter 'startWeek' when calling getStatisticsDaily");
      }
      // verify the required parameter 'endWeek' is set
      if (endWeek === undefined || endWeek === null) {
        throw new Error("Missing the required parameter 'endWeek' when calling getStatisticsDaily");
      }
      // verify the required parameter 'startMonth' is set
      if (startMonth === undefined || startMonth === null) {
        throw new Error("Missing the required parameter 'startMonth' when calling getStatisticsDaily");
      }
      // verify the required parameter 'endMonth' is set
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
        'Api-Token': apiToken
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
     * @param {String} apiToken 
     * @param {String} startDate 
     * @param {String} endDate 
     * @param {String} startWeek 
     * @param {String} endWeek 
     * @param {String} startMonth 
     * @param {String} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsDailyResponse}
     */
  }, {
    key: "getStatisticsDaily",
    value: function getStatisticsDaily(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      return this.getStatisticsDailyWithHttpInfo(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsMonthlyResponse} and HTTP response
     */
  }, {
    key: "getStatisticsMonthlyWithHttpInfo",
    value: function getStatisticsMonthlyWithHttpInfo(apiToken) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatisticsMonthly");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
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
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsMonthlyResponse}
     */
  }, {
    key: "getStatisticsMonthly",
    value: function getStatisticsMonthly(apiToken) {
      return this.getStatisticsMonthlyWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAnnouncementGroupsResponse} and HTTP response
     */
  }, {
    key: "listAnnouncementGroupsWithHttpInfo",
    value: function listAnnouncementGroupsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listAnnouncementGroups");
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
      var returnType = _ListAnnouncementGroupsResponse["default"];
      return this.apiClient.callApi('/v3/announcement_group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAnnouncementGroupsResponse}
     */
  }, {
    key: "listAnnouncementGroups",
    value: function listAnnouncementGroups(apiToken, opts) {
      return this.listAnnouncementGroupsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScheduleAnnouncementResponse} and HTTP response
     */
  }, {
    key: "scheduleAnnouncementWithHttpInfo",
    value: function scheduleAnnouncementWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['scheduleAnnouncementData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling scheduleAnnouncement");
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
      var returnType = _ScheduleAnnouncementResponse["default"];
      return this.apiClient.callApi('/v3/announcements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScheduleAnnouncementResponse}
     */
  }, {
    key: "scheduleAnnouncement",
    value: function scheduleAnnouncement(apiToken, opts) {
      return this.scheduleAnnouncementWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateAnnouncementByIdResponse} and HTTP response
     */
  }, {
    key: "updateAnnouncementByIdWithHttpInfo",
    value: function updateAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts) {
      opts = opts || {};
      var postBody = opts['updateAnnouncementByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling updateAnnouncementById");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateAnnouncementByIdResponse}
     */
  }, {
    key: "updateAnnouncementById",
    value: function updateAnnouncementById(apiToken, uniqueId, opts) {
      return this.updateAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts).then(function (response_and_data) {
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
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
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