"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReportChannelByUrlData = _interopRequireDefault(require("../model/ReportChannelByUrlData"));

var _ReportMessageByIdData = _interopRequireDefault(require("../model/ReportMessageByIdData"));

var _ReportUserByIdData = _interopRequireDefault(require("../model/ReportUserByIdData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ReportContentSubject service.
* @module api/ReportContentSubjectApi
* @version 1.0.0
*/
var ReportContentSubjectApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReportContentSubjectApi. 
  * @alias module:api/ReportContentSubjectApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ReportContentSubjectApi(apiClient) {
    _classCallCheck(this, ReportContentSubjectApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the listReports operation.
   * @callback module:api/ReportContentSubjectApi~listReportsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List reports
   * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {String} opts.token 
   * @param {Number} opts.limit 
   * @param {Number} opts.startTs 
   * @param {Number} opts.endTs 
   * @param {module:api/ReportContentSubjectApi~listReportsCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ReportContentSubjectApi, [{
    key: "listReports",
    value: function listReports(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'start_ts': opts['startTs'],
        'end_ts': opts['endTs']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/report', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listReportsOnChannelByUrl operation.
     * @callback module:api/ReportContentSubjectApi~listReportsOnChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reports on a channel
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/ReportContentSubjectApi~listReportsOnChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listReportsOnChannelByUrl",
    value: function listReportsOnChannelByUrl(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listReportsOnChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listReportsOnChannelByUrl");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
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
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listReportsOnMessageById operation.
     * @callback module:api/ReportContentSubjectApi~listReportsOnMessageByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reports on a message
     * ## List reports on a message  Retrieves a list of reports on a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel where the reported message is in.  `message_id`      Type: string      Description: Specifies the unique ID of the reported message.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/ReportContentSubjectApi~listReportsOnMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listReportsOnMessageById",
    value: function listReportsOnMessageById(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listReportsOnMessageById");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listReportsOnMessageById");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling listReportsOnMessageById");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
      };
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
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}/messages/{message_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listReportsOnUserById operation.
     * @callback module:api/ReportContentSubjectApi~listReportsOnUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reports on a user
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/ReportContentSubjectApi~listReportsOnUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listReportsOnUserById",
    value: function listReportsOnUserById(offendingUserId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'offendingUserId' is set

      if (offendingUserId === undefined || offendingUserId === null) {
        throw new Error("Missing the required parameter 'offendingUserId' when calling listReportsOnUserById");
      }

      var pathParams = {
        'offending_user_id': offendingUserId
      };
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
      return this.apiClient.callApi('/v3/report/users/{offending_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportChannelByUrl operation.
     * @callback module:api/ReportContentSubjectApi~reportChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Report a channel
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportChannelByUrlData} opts.reportChannelByUrlData 
     * @param {module:api/ReportContentSubjectApi~reportChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportChannelByUrl",
    value: function reportChannelByUrl(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['reportChannelByUrlData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling reportChannelByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling reportChannelByUrl");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
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
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportMessageById operation.
     * @callback module:api/ReportContentSubjectApi~reportMessageByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Report a message
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportMessageByIdData} opts.reportMessageByIdData 
     * @param {module:api/ReportContentSubjectApi~reportMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportMessageById",
    value: function reportMessageById(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = opts['reportMessageByIdData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling reportMessageById");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling reportMessageById");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling reportMessageById");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
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
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}/messages/{message_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportUserById operation.
     * @callback module:api/ReportContentSubjectApi~reportUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Report a user
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportUserByIdData} opts.reportUserByIdData 
     * @param {module:api/ReportContentSubjectApi~reportUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportUserById",
    value: function reportUserById(offendingUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['reportUserByIdData']; // verify the required parameter 'offendingUserId' is set

      if (offendingUserId === undefined || offendingUserId === null) {
        throw new Error("Missing the required parameter 'offendingUserId' when calling reportUserById");
      }

      var pathParams = {
        'offending_user_id': offendingUserId
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
      return this.apiClient.callApi('/v3/report/users/{offending_user_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewModeratedMessageById operation.
     * @callback module:api/ReportContentSubjectApi~viewModeratedMessageByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a moderated message
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/ReportContentSubjectApi~viewModeratedMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewModeratedMessageById",
    value: function viewModeratedMessageById(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewModeratedMessageById");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewModeratedMessageById");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling viewModeratedMessageById");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
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
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}/profanity_messages/{message_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ReportContentSubjectApi;
}();

exports["default"] = ReportContentSubjectApi;