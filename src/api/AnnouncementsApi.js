/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GetDetailedOpenRateOfAnnouncementByIdResponse from '../model/GetDetailedOpenRateOfAnnouncementByIdResponse';
import GetDetailedOpenRateOfAnnouncementGroupResponse from '../model/GetDetailedOpenRateOfAnnouncementGroupResponse';
import GetDetailedOpenStatusOfAnnouncementByIdResponse from '../model/GetDetailedOpenStatusOfAnnouncementByIdResponse';
import GetStatisticsDailyResponse from '../model/GetStatisticsDailyResponse';
import GetStatisticsMonthlyResponse from '../model/GetStatisticsMonthlyResponse';
import GetStatisticsResponse from '../model/GetStatisticsResponse';
import ListAnnouncementGroupsResponse from '../model/ListAnnouncementGroupsResponse';
import ListAnnouncementsResponse from '../model/ListAnnouncementsResponse';
import ScheduleAnnouncementData from '../model/ScheduleAnnouncementData';
import ScheduleAnnouncementResponse from '../model/ScheduleAnnouncementResponse';
import UpdateAnnouncementByIdData from '../model/UpdateAnnouncementByIdData';
import UpdateAnnouncementByIdResponse from '../model/UpdateAnnouncementByIdResponse';
import ViewAnnouncementByIdResponse from '../model/ViewAnnouncementByIdResponse';

/**
* Announcements service.
* @module api/AnnouncementsApi
* @version 1.0.1
*/
export default class AnnouncementsApi {

    /**
    * Constructs a new AnnouncementsApi. 
    * @alias module:api/AnnouncementsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get detailed open rate of an announcement
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse} and HTTP response
     */
    getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenRateOfAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling getDetailedOpenRateOfAnnouncementById");
      }

      let pathParams = {
        'unique_id': uniqueId
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetDetailedOpenRateOfAnnouncementByIdResponse;
      return this.apiClient.callApi(
        '/v3/announcement_open_rate/{unique_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get detailed open rate of an announcement
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenRateOfAnnouncementByIdResponse}
     */
    getDetailedOpenRateOfAnnouncementById(apiToken, uniqueId) {
      return this.getDetailedOpenRateOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId)
        .then(function(response_and_data) {
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
    getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(apiToken, announcementGroup) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenRateOfAnnouncementGroup");
      }
      // verify the required parameter 'announcementGroup' is set
      if (announcementGroup === undefined || announcementGroup === null) {
        throw new Error("Missing the required parameter 'announcementGroup' when calling getDetailedOpenRateOfAnnouncementGroup");
      }

      let pathParams = {
        'announcement_group': announcementGroup
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetDetailedOpenRateOfAnnouncementGroupResponse;
      return this.apiClient.callApi(
        '/v3/announcement_open_rate_by_group/{announcement_group}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} apiToken 
     * @param {String} announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDetailedOpenRateOfAnnouncementGroupResponse}
     */
    getDetailedOpenRateOfAnnouncementGroup(apiToken, announcementGroup) {
      return this.getDetailedOpenRateOfAnnouncementGroupWithHttpInfo(apiToken, announcementGroup)
        .then(function(response_and_data) {
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
    getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getDetailedOpenStatusOfAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling getDetailedOpenStatusOfAnnouncementById");
      }

      let pathParams = {
        'unique_id': uniqueId
      };
      let queryParams = {
        'limit': opts['limit'],
        'next': opts['next'],
        'unique_ids': this.apiClient.buildCollectionParam(opts['uniqueIds'], 'multi'),
        'channel_urls': this.apiClient.buildCollectionParam(opts['channelUrls'], 'multi'),
        'has_opened': opts['hasOpened']
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetDetailedOpenStatusOfAnnouncementByIdResponse;
      return this.apiClient.callApi(
        '/v3/announcement_open_status/{unique_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getDetailedOpenStatusOfAnnouncementById(apiToken, uniqueId, opts) {
      return this.getDetailedOpenStatusOfAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsResponse} and HTTP response
     */
    getStatisticsWithHttpInfo(apiToken) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatistics");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStatisticsResponse;
      return this.apiClient.callApi(
        '/v3/announcement_stats/weekly', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsResponse}
     */
    getStatistics(apiToken) {
      return this.getStatisticsWithHttpInfo(apiToken)
        .then(function(response_and_data) {
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
    getStatisticsDailyWithHttpInfo(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      opts = opts || {};
      let postBody = null;
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

      let pathParams = {
      };
      let queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'start_week': startWeek,
        'end_week': endWeek,
        'start_month': startMonth,
        'end_month': endMonth,
        'announcement_group': opts['announcementGroup']
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStatisticsDailyResponse;
      return this.apiClient.callApi(
        '/v3/announcement_stats/daily', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getStatisticsDaily(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      return this.getStatisticsDailyWithHttpInfo(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsMonthlyResponse} and HTTP response
     */
    getStatisticsMonthlyWithHttpInfo(apiToken) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatisticsMonthly");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStatisticsMonthlyResponse;
      return this.apiClient.callApi(
        '/v3/announcement_stats/monthly', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsMonthlyResponse}
     */
    getStatisticsMonthly(apiToken) {
      return this.getStatisticsMonthlyWithHttpInfo(apiToken)
        .then(function(response_and_data) {
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
    listAnnouncementGroupsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listAnnouncementGroups");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAnnouncementGroupsResponse;
      return this.apiClient.callApi(
        '/v3/announcement_group', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    listAnnouncementGroups(apiToken, opts) {
      return this.listAnnouncementGroupsWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List announcements
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.status 
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAnnouncementsResponse} and HTTP response
     */
    listAnnouncementsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listAnnouncements");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'order': opts['order'],
        'status': opts['status'],
        'announcement_group': opts['announcementGroup']
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAnnouncementsResponse;
      return this.apiClient.callApi(
        '/v3/announcements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List announcements
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.status 
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAnnouncementsResponse}
     */
    listAnnouncements(apiToken, opts) {
      return this.listAnnouncementsWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
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
    scheduleAnnouncementWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = opts['scheduleAnnouncementData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling scheduleAnnouncement");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScheduleAnnouncementResponse;
      return this.apiClient.callApi(
        '/v3/announcements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScheduleAnnouncementResponse}
     */
    scheduleAnnouncement(apiToken, opts) {
      return this.scheduleAnnouncementWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
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
    updateAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts) {
      opts = opts || {};
      let postBody = opts['updateAnnouncementByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling updateAnnouncementById");
      }

      let pathParams = {
        'unique_id': uniqueId
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateAnnouncementByIdResponse;
      return this.apiClient.callApi(
        '/v3/announcements/{unique_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    updateAnnouncementById(apiToken, uniqueId, opts) {
      return this.updateAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts)
        .then(function(response_and_data) {
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
    viewAnnouncementByIdWithHttpInfo(apiToken, uniqueId) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewAnnouncementById");
      }
      // verify the required parameter 'uniqueId' is set
      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling viewAnnouncementById");
      }

      let pathParams = {
        'unique_id': uniqueId
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ViewAnnouncementByIdResponse;
      return this.apiClient.callApi(
        '/v3/announcements/{unique_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewAnnouncementByIdResponse}
     */
    viewAnnouncementById(apiToken, uniqueId) {
      return this.viewAnnouncementByIdWithHttpInfo(apiToken, uniqueId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
