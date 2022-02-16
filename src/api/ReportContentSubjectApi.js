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
import ListReportsOnChannelByUrlResponse from '../model/ListReportsOnChannelByUrlResponse';
import ListReportsOnMessageByIdResponse from '../model/ListReportsOnMessageByIdResponse';
import ListReportsOnUserByIdResponse from '../model/ListReportsOnUserByIdResponse';
import ListReportsResponse from '../model/ListReportsResponse';
import ReportChannelByUrlData from '../model/ReportChannelByUrlData';
import ReportChannelByUrlResponse from '../model/ReportChannelByUrlResponse';
import ReportMessageByIdData from '../model/ReportMessageByIdData';
import ReportMessageByIdResponse from '../model/ReportMessageByIdResponse';
import ReportUserByIdData from '../model/ReportUserByIdData';
import ReportUserByIdResponse from '../model/ReportUserByIdResponse';

/**
* ReportContentSubject service.
* @module api/ReportContentSubjectApi
* @version 1.0.0
*/
export default class ReportContentSubjectApi {

    /**
    * Constructs a new ReportContentSubjectApi. 
    * @alias module:api/ReportContentSubjectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List reports
     * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {Number} opts.startTs 
     * @param {Number} opts.endTs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsResponse} and HTTP response
     */
    listReportsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listReports");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'start_ts': opts['startTs'],
        'end_ts': opts['endTs']
      };
      let headerParams = {
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListReportsResponse;
      return this.apiClient.callApi(
        '/v3/report', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List reports
     * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {Number} opts.startTs 
     * @param {Number} opts.endTs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsResponse}
     */
    listReports(apiToken, opts) {
      return this.listReportsWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List reports on a channel
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsOnChannelByUrlResponse} and HTTP response
     */
    listReportsOnChannelByUrlWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listReportsOnChannelByUrl");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listReportsOnChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listReportsOnChannelByUrl");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
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
      let returnType = ListReportsOnChannelByUrlResponse;
      return this.apiClient.callApi(
        '/v3/report/{channel_type}/{channel_url}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List reports on a channel
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsOnChannelByUrlResponse}
     */
    listReportsOnChannelByUrl(apiToken, channelType, channelUrl, opts) {
      return this.listReportsOnChannelByUrlWithHttpInfo(apiToken, channelType, channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List reports on a message
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsOnMessageByIdResponse} and HTTP response
     */
    listReportsOnMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listReportsOnMessageById");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listReportsOnMessageById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listReportsOnMessageById");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling listReportsOnMessageById");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
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
      let returnType = ListReportsOnMessageByIdResponse;
      return this.apiClient.callApi(
        '/v3/report/{channel_type}/{channel_url}/messages/{message_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List reports on a message
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsOnMessageByIdResponse}
     */
    listReportsOnMessageById(apiToken, channelType, channelUrl, messageId, opts) {
      return this.listReportsOnMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List reports on a user
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * @param {String} apiToken 
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsOnUserByIdResponse} and HTTP response
     */
    listReportsOnUserByIdWithHttpInfo(apiToken, offendingUserId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listReportsOnUserById");
      }
      // verify the required parameter 'offendingUserId' is set
      if (offendingUserId === undefined || offendingUserId === null) {
        throw new Error("Missing the required parameter 'offendingUserId' when calling listReportsOnUserById");
      }

      let pathParams = {
        'offending_user_id': offendingUserId
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
      let returnType = ListReportsOnUserByIdResponse;
      return this.apiClient.callApi(
        '/v3/report/users/{offending_user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List reports on a user
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * @param {String} apiToken 
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsOnUserByIdResponse}
     */
    listReportsOnUserById(apiToken, offendingUserId, opts) {
      return this.listReportsOnUserByIdWithHttpInfo(apiToken, offendingUserId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Report a channel
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/ReportChannelByUrlData} opts.reportChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportChannelByUrlResponse} and HTTP response
     */
    reportChannelByUrlWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      let postBody = opts['reportChannelByUrlData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling reportChannelByUrl");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling reportChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling reportChannelByUrl");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
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
      let returnType = ReportChannelByUrlResponse;
      return this.apiClient.callApi(
        '/v3/report/{channel_type}/{channel_url}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Report a channel
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/ReportChannelByUrlData} opts.reportChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportChannelByUrlResponse}
     */
    reportChannelByUrl(apiToken, channelType, channelUrl, opts) {
      return this.reportChannelByUrlWithHttpInfo(apiToken, channelType, channelUrl, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Report a message
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ReportMessageByIdData} opts.reportMessageByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportMessageByIdResponse} and HTTP response
     */
    reportMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      let postBody = opts['reportMessageByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling reportMessageById");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling reportMessageById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling reportMessageById");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling reportMessageById");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
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
      let returnType = ReportMessageByIdResponse;
      return this.apiClient.callApi(
        '/v3/report/{channel_type}/{channel_url}/messages/{message_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Report a message
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ReportMessageByIdData} opts.reportMessageByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportMessageByIdResponse}
     */
    reportMessageById(apiToken, channelType, channelUrl, messageId, opts) {
      return this.reportMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Report a user
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ReportUserByIdData} opts.reportUserByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportUserByIdResponse} and HTTP response
     */
    reportUserByIdWithHttpInfo(apiToken, offendingUserId, opts) {
      opts = opts || {};
      let postBody = opts['reportUserByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling reportUserById");
      }
      // verify the required parameter 'offendingUserId' is set
      if (offendingUserId === undefined || offendingUserId === null) {
        throw new Error("Missing the required parameter 'offendingUserId' when calling reportUserById");
      }

      let pathParams = {
        'offending_user_id': offendingUserId
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
      let returnType = ReportUserByIdResponse;
      return this.apiClient.callApi(
        '/v3/report/users/{offending_user_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Report a user
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * @param {String} apiToken 
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ReportUserByIdData} opts.reportUserByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportUserByIdResponse}
     */
    reportUserById(apiToken, offendingUserId, opts) {
      return this.reportUserByIdWithHttpInfo(apiToken, offendingUserId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * View a moderated message
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */
    viewModeratedMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewModeratedMessageById");
      }
      // verify the required parameter 'channelType' is set
      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewModeratedMessageById");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewModeratedMessageById");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling viewModeratedMessageById");
      }

      let pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
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
      let returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/v3/report/{channel_type}/{channel_url}/profanity_messages/{message_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a moderated message
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */
    viewModeratedMessageById(apiToken, channelType, channelUrl, messageId) {
      return this.viewModeratedMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
