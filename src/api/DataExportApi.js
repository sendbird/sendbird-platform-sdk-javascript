/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ListDataExportsByMessageChannelOrUserResponse from '../model/ListDataExportsByMessageChannelOrUserResponse';
import RegisterAndScheduleDataExportData from '../model/RegisterAndScheduleDataExportData';
import RegisterAndScheduleDataExportResponse from '../model/RegisterAndScheduleDataExportResponse';
import ViewDataExportByIdResponse from '../model/ViewDataExportByIdResponse';

/**
* DataExport service.
* @module api/DataExportApi
* @version 0.0.16
*/
export default class DataExportApi {

    /**
    * Constructs a new DataExportApi. 
    * @alias module:api/DataExportApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    listDataExportsByMessageChannelOrUserWithHttpInfo(apiToken, dataType, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listDataExportsByMessageChannelOrUser");
      }
      // verify the required parameter 'dataType' is set
      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling listDataExportsByMessageChannelOrUser");
      }

      let pathParams = {
        'data_type': dataType
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
      let returnType = ListDataExportsByMessageChannelOrUserResponse;
      return this.apiClient.callApi(
        '/v3/export/{data_type}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    listDataExportsByMessageChannelOrUser(apiToken, dataType, opts) {
      return this.listDataExportsByMessageChannelOrUserWithHttpInfo(apiToken, dataType, opts)
        .then(function(response_and_data) {
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
    registerAndScheduleDataExportWithHttpInfo(apiToken, dataType, opts) {
      opts = opts || {};
      let postBody = opts['registerAndScheduleDataExportData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling registerAndScheduleDataExport");
      }
      // verify the required parameter 'dataType' is set
      if (dataType === undefined || dataType === null) {
        throw new Error("Missing the required parameter 'dataType' when calling registerAndScheduleDataExport");
      }

      let pathParams = {
        'data_type': dataType
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
      let returnType = RegisterAndScheduleDataExportResponse;
      return this.apiClient.callApi(
        '/v3/export/{data_type}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    registerAndScheduleDataExport(apiToken, dataType, opts) {
      return this.registerAndScheduleDataExportWithHttpInfo(apiToken, dataType, opts)
        .then(function(response_and_data) {
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
    viewDataExportByIdWithHttpInfo(apiToken, dataType, requestId) {
      let postBody = null;
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

      let pathParams = {
        'data_type': dataType,
        'request_id': requestId
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
      let returnType = ViewDataExportByIdResponse;
      return this.apiClient.callApi(
        '/v3/export/{data_type}/{request_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a data export
     * ## View a data export  Retrieves information on a message, channel or user data export.  https://sendbird.com/docs/chat/v3/platform-api/guides/data-export#2-view-a-data-export ----------------------------   `data_type`      Type: string      Description: Specifies the type of a targeted data export. Acceptable values are messages, channels,  users, and failed_webhooks.  `request_id`      Type: string      Description: Specifies the unique ID of a data export to retrieve.
     * @param {String} apiToken 
     * @param {String} dataType 
     * @param {String} requestId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewDataExportByIdResponse}
     */
    viewDataExportById(apiToken, dataType, requestId) {
      return this.viewDataExportByIdWithHttpInfo(apiToken, dataType, requestId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
