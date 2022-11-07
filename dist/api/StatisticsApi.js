"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetDetailedOpenRateOfAnnouncementByIdResponse = _interopRequireDefault(require("../model/GetDetailedOpenRateOfAnnouncementByIdResponse"));
var _GetDetailedOpenStatusOfAnnouncementByIdResponse = _interopRequireDefault(require("../model/GetDetailedOpenStatusOfAnnouncementByIdResponse"));
var _RetrieveAdvancedAnalyticsMetricsResponse = _interopRequireDefault(require("../model/RetrieveAdvancedAnalyticsMetricsResponse"));
var _ViewNumberOfConcurrentConnectionsResponse = _interopRequireDefault(require("../model/ViewNumberOfConcurrentConnectionsResponse"));
var _ViewNumberOfDailyActiveUsersResponse = _interopRequireDefault(require("../model/ViewNumberOfDailyActiveUsersResponse"));
var _ViewNumberOfMonthlyActiveUsersResponse = _interopRequireDefault(require("../model/ViewNumberOfMonthlyActiveUsersResponse"));
var _ViewNumberOfPeakConnectionsResponse = _interopRequireDefault(require("../model/ViewNumberOfPeakConnectionsResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Statistics service.
* @module api/StatisticsApi
* @version 0.0.16
*/
var StatisticsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new StatisticsApi. 
  * @alias module:api/StatisticsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function StatisticsApi(apiClient) {
    _classCallCheck(this, StatisticsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Get detailed open rate of an announcement
   * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
   * @param {String} apiToken 
   * @param {String} uniqueId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse} and HTTP response
   */
  _createClass(StatisticsApi, [{
    key: "getDetailedOpenRateOfAnnouncementByIdWithHttpInfo",
    value: function getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenRateOfAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
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
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenStatusOfAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
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
     * Retrieve Advanced analytics metrics
     * ## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveAdvancedAnalyticsMetricsResponse} and HTTP response
     */
  }, {
    key: "retrieveAdvancedAnalyticsMetricsWithHttpInfo",
    value: function retrieveAdvancedAnalyticsMetricsWithHttpInfo(apiToken) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling retrieveAdvancedAnalyticsMetrics");
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
      var returnType = _RetrieveAdvancedAnalyticsMetricsResponse["default"];
      return this.apiClient.callApi('/v3/statistics/metric', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Advanced analytics metrics
     * ## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveAdvancedAnalyticsMetricsResponse}
     */
  }, {
    key: "retrieveAdvancedAnalyticsMetrics",
    value: function retrieveAdvancedAnalyticsMetrics(apiToken) {
      return this.retrieveAdvancedAnalyticsMetricsWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of concurrent connections
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfConcurrentConnectionsResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfConcurrentConnectionsWithHttpInfo",
    value: function viewNumberOfConcurrentConnectionsWithHttpInfo(apiToken) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfConcurrentConnections");
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
      var returnType = _ViewNumberOfConcurrentConnectionsResponse["default"];
      return this.apiClient.callApi('/v3/applications/ccu', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of concurrent connections
     * ## View number of concurrent connections  Retrieves the number of devices and opened browser tabs which are currently connected to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-concurrent-connections
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfConcurrentConnectionsResponse}
     */
  }, {
    key: "viewNumberOfConcurrentConnections",
    value: function viewNumberOfConcurrentConnections(apiToken) {
      return this.viewNumberOfConcurrentConnectionsWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of daily active users
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfDailyActiveUsersResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfDailyActiveUsersWithHttpInfo",
    value: function viewNumberOfDailyActiveUsersWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfDailyActiveUsers");
      }
      var pathParams = {};
      var queryParams = {
        'date': opts['date']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfDailyActiveUsersResponse["default"];
      return this.apiClient.callApi('/v3/applications/dau', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of daily active users
     * ## View number of daily active users  Retrieves the number of daily active users of the application (DAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-daily-active-users ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfDailyActiveUsersResponse}
     */
  }, {
    key: "viewNumberOfDailyActiveUsers",
    value: function viewNumberOfDailyActiveUsers(apiToken, opts) {
      return this.viewNumberOfDailyActiveUsersWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of monthly active users
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfMonthlyActiveUsersResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfMonthlyActiveUsersWithHttpInfo",
    value: function viewNumberOfMonthlyActiveUsersWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfMonthlyActiveUsers");
      }
      var pathParams = {};
      var queryParams = {
        'date': opts['date']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfMonthlyActiveUsersResponse["default"];
      return this.apiClient.callApi('/v3/applications/mau', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of monthly active users
     * ## View number of monthly active users  Retrieves the number of monthly active users of the application (MAU).  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-monthly-active-users ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.date 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfMonthlyActiveUsersResponse}
     */
  }, {
    key: "viewNumberOfMonthlyActiveUsers",
    value: function viewNumberOfMonthlyActiveUsers(apiToken, opts) {
      return this.viewNumberOfMonthlyActiveUsersWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View number of peak connections
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * @param {String} apiToken 
     * @param {String} timeDimension 
     * @param {Number} startYear 
     * @param {Number} startMonth 
     * @param {Number} endYear 
     * @param {Number} endMonth 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDay 
     * @param {Number} opts.endDay 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewNumberOfPeakConnectionsResponse} and HTTP response
     */
  }, {
    key: "viewNumberOfPeakConnectionsWithHttpInfo",
    value: function viewNumberOfPeakConnectionsWithHttpInfo(apiToken, timeDimension, startYear, startMonth, endYear, endMonth, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewNumberOfPeakConnections");
      }
      // verify the required parameter 'timeDimension' is set
      if (timeDimension === undefined || timeDimension === null) {
        throw new Error("Missing the required parameter 'timeDimension' when calling viewNumberOfPeakConnections");
      }
      // verify the required parameter 'startYear' is set
      if (startYear === undefined || startYear === null) {
        throw new Error("Missing the required parameter 'startYear' when calling viewNumberOfPeakConnections");
      }
      // verify the required parameter 'startMonth' is set
      if (startMonth === undefined || startMonth === null) {
        throw new Error("Missing the required parameter 'startMonth' when calling viewNumberOfPeakConnections");
      }
      // verify the required parameter 'endYear' is set
      if (endYear === undefined || endYear === null) {
        throw new Error("Missing the required parameter 'endYear' when calling viewNumberOfPeakConnections");
      }
      // verify the required parameter 'endMonth' is set
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewNumberOfPeakConnectionsResponse["default"];
      return this.apiClient.callApi('/v3/applications/peak_connections', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View number of peak connections
     * ## View number of peak connections  Retrieves the number of concurrently connected devices to Sendbird server during the requested time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/application#2-view-number-of-peak-connections ----------------------------
     * @param {String} apiToken 
     * @param {String} timeDimension 
     * @param {Number} startYear 
     * @param {Number} startMonth 
     * @param {Number} endYear 
     * @param {Number} endMonth 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startDay 
     * @param {Number} opts.endDay 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewNumberOfPeakConnectionsResponse}
     */
  }, {
    key: "viewNumberOfPeakConnections",
    value: function viewNumberOfPeakConnections(apiToken, timeDimension, startYear, startMonth, endYear, endMonth, opts) {
      return this.viewNumberOfPeakConnectionsWithHttpInfo(apiToken, timeDimension, startYear, startMonth, endYear, endMonth, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return StatisticsApi;
}();
exports["default"] = StatisticsApi;