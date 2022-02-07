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
import InlineResponse20039 from '../model/InlineResponse20039';
import InlineResponse20039Announcements from '../model/InlineResponse20039Announcements';
import InlineResponse20040 from '../model/InlineResponse20040';
import InlineResponse20041 from '../model/InlineResponse20041';
import InlineResponse20042 from '../model/InlineResponse20042';
import InlineResponse20043 from '../model/InlineResponse20043';
import InlineResponse20044 from '../model/InlineResponse20044';
import InlineResponse20045 from '../model/InlineResponse20045';
import InlineResponse20046 from '../model/InlineResponse20046';
import ScheduleAnnouncementData from '../model/ScheduleAnnouncementData';
import UpdateAnnouncementByIdData from '../model/UpdateAnnouncementByIdData';

/**
* Announcements service.
* @module api/AnnouncementsApi
* @version 1.0.0
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
     * Callback function to receive the result of the getDetailedOpenRateOfAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20042} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed open rate of an announcement
     * ## Get detailed open rate of an announcement  Retrieves the detailed open rate information of an announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement ----------------------------   `unique_id`      Type: string      Description: Specifies the unique ID of the announcement to get its open rate.
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20042}
     */
    getDetailedOpenRateOfAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      let postBody = null;
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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20042;
      return this.apiClient.callApi(
        '/v3/announcement_open_rate/{unique_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDetailedOpenRateOfAnnouncementGroup operation.
     * @callback module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20046} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get detailed open rate of an announcement group
     * ## Get detailed open rate of an announcement group  Retrieves the detailed open rate information of an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-detailed-open-rate-of-an-announcement-group ----------------------------
     * @param {String} announcementGroup 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getDetailedOpenRateOfAnnouncementGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20046}
     */
    getDetailedOpenRateOfAnnouncementGroup(announcementGroup, opts, callback) {
      opts = opts || {};
      let postBody = null;
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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20046;
      return this.apiClient.callApi(
        '/v3/announcement_open_rate_by_group/{announcement_group}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDetailedOpenStatusOfAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~getDetailedOpenStatusOfAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20043} data The data returned by the service call.
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
     * @param {Array.<String>} opts.uniqueIds 
     * @param {Array.<String>} opts.channelUrls 
     * @param {Boolean} opts.hasOpened 
     * @param {module:api/AnnouncementsApi~getDetailedOpenStatusOfAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20043}
     */
    getDetailedOpenStatusOfAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      let postBody = null;
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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20043;
      return this.apiClient.callApi(
        '/v3/announcement_open_status/{unique_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatistics operation.
     * @callback module:api/AnnouncementsApi~getStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20044} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20044}
     */
    getStatistics(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20044;
      return this.apiClient.callApi(
        '/v3/announcement_stats/weekly', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatisticsDaily operation.
     * @callback module:api/AnnouncementsApi~getStatisticsDailyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20044} data The data returned by the service call.
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
     * data is of type: {@link module:model/InlineResponse20044}
     */
    getStatisticsDaily(startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts, callback) {
      opts = opts || {};
      let postBody = null;
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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20044;
      return this.apiClient.callApi(
        '/v3/announcement_stats/daily', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatisticsMonthly operation.
     * @callback module:api/AnnouncementsApi~getStatisticsMonthlyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20044} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~getStatisticsMonthlyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20044}
     */
    getStatisticsMonthly(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20044;
      return this.apiClient.callApi(
        '/v3/announcement_stats/monthly', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAnnouncementGroups operation.
     * @callback module:api/AnnouncementsApi~listAnnouncementGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
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
     * data is of type: {@link module:model/InlineResponse20045}
     */
    listAnnouncementGroups(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token'],
        'limit': opts['limit']
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20045;
      return this.apiClient.callApi(
        '/v3/announcement_group', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAnnouncements operation.
     * @callback module:api/AnnouncementsApi~listAnnouncementsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20039} data The data returned by the service call.
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
     * data is of type: {@link module:model/InlineResponse20039}
     */
    listAnnouncements(opts, callback) {
      opts = opts || {};
      let postBody = null;

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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20039;
      return this.apiClient.callApi(
        '/v3/announcements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scheduleAnnouncement operation.
     * @callback module:api/AnnouncementsApi~scheduleAnnouncementCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20040} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @param {module:api/AnnouncementsApi~scheduleAnnouncementCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20040}
     */
    scheduleAnnouncement(opts, callback) {
      opts = opts || {};
      let postBody = opts['scheduleAnnouncementData'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20040;
      return this.apiClient.callApi(
        '/v3/announcements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~updateAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20041} data The data returned by the service call.
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
     * data is of type: {@link module:model/InlineResponse20041}
     */
    updateAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateAnnouncementByIdData'];
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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse20041;
      return this.apiClient.callApi(
        '/v3/announcements/{unique_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the viewAnnouncementById operation.
     * @callback module:api/AnnouncementsApi~viewAnnouncementByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20039Announcements} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View an announcement
     * ## View an announcement  Retrieves information on a specific announcement.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-view-an-announcement ----------------------------
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/AnnouncementsApi~viewAnnouncementByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20039Announcements}
     */
    viewAnnouncementById(uniqueId, opts, callback) {
      opts = opts || {};
      let postBody = null;
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
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse20039Announcements;
      return this.apiClient.callApi(
        '/v3/announcements/{unique_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
