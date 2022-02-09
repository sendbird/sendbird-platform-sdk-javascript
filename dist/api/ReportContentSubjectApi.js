"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListReportsOnChannelByUrlResponse = _interopRequireDefault(require("../model/ListReportsOnChannelByUrlResponse"));

var _ListReportsOnMessageByIdResponse = _interopRequireDefault(require("../model/ListReportsOnMessageByIdResponse"));

var _ListReportsOnUserByIdResponse = _interopRequireDefault(require("../model/ListReportsOnUserByIdResponse"));

var _ListReportsResponse = _interopRequireDefault(require("../model/ListReportsResponse"));

var _ReportChannelByUrlData = _interopRequireDefault(require("../model/ReportChannelByUrlData"));

var _ReportChannelByUrlResponse = _interopRequireDefault(require("../model/ReportChannelByUrlResponse"));

var _ReportMessageByIdData = _interopRequireDefault(require("../model/ReportMessageByIdData"));

var _ReportMessageByIdResponse = _interopRequireDefault(require("../model/ReportMessageByIdResponse"));

var _ReportUserByIdData = _interopRequireDefault(require("../model/ReportUserByIdData"));

var _ReportUserByIdResponse = _interopRequireDefault(require("../model/ReportUserByIdResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
   * List reports
   * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {String} opts.token 
   * @param {Number} opts.limit 
   * @param {Number} opts.startTs 
   * @param {Number} opts.endTs 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsResponse} and HTTP response
   */


  _createClass(ReportContentSubjectApi, [{
    key: "listReportsWithHttpInfo",
    value: function listReportsWithHttpInfo(opts) {
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
      var returnType = _ListReportsResponse["default"];
      return this.apiClient.callApi('/v3/report', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List reports
     * ## List reports  Retrieves a list of reports within an application regardless of object types.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {Number} opts.startTs 
     * @param {Number} opts.endTs 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsResponse}
     */

  }, {
    key: "listReports",
    value: function listReports(opts) {
      return this.listReportsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List reports on a channel
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsOnChannelByUrlResponse} and HTTP response
     */

  }, {
    key: "listReportsOnChannelByUrlWithHttpInfo",
    value: function listReportsOnChannelByUrlWithHttpInfo(channelType, channelUrl, opts) {
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
      var returnType = _ListReportsOnChannelByUrlResponse["default"];
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List reports on a channel
     * ## List reports on a channel  Retrieves a list of reports on a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-channel ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel which is reported for offensive messages or inappropriate activities.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsOnChannelByUrlResponse}
     */

  }, {
    key: "listReportsOnChannelByUrl",
    value: function listReportsOnChannelByUrl(channelType, channelUrl, opts) {
      return this.listReportsOnChannelByUrlWithHttpInfo(channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsOnMessageByIdResponse} and HTTP response
     */

  }, {
    key: "listReportsOnMessageByIdWithHttpInfo",
    value: function listReportsOnMessageByIdWithHttpInfo(channelType, channelUrl, messageId, opts) {
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
      var returnType = _ListReportsOnMessageByIdResponse["default"];
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}/messages/{message_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsOnMessageByIdResponse}
     */

  }, {
    key: "listReportsOnMessageById",
    value: function listReportsOnMessageById(channelType, channelUrl, messageId, opts) {
      return this.listReportsOnMessageByIdWithHttpInfo(channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List reports on a user
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReportsOnUserByIdResponse} and HTTP response
     */

  }, {
    key: "listReportsOnUserByIdWithHttpInfo",
    value: function listReportsOnUserByIdWithHttpInfo(offendingUserId, opts) {
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
      var returnType = _ListReportsOnUserByIdResponse["default"];
      return this.apiClient.callApi('/v3/report/users/{offending_user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List reports on a user
     * ## List reports on a user  Retrieves a list of reports on a user who sends an offensive message.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-list-reports-on-a-user ----------------------------   `offending_user_id`      Type: string      Description: Specifies the unique ID of the user who has sent the message to report.
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReportsOnUserByIdResponse}
     */

  }, {
    key: "listReportsOnUserById",
    value: function listReportsOnUserById(offendingUserId, opts) {
      return this.listReportsOnUserByIdWithHttpInfo(offendingUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Report a channel
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportChannelByUrlData} opts.reportChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportChannelByUrlResponse} and HTTP response
     */

  }, {
    key: "reportChannelByUrlWithHttpInfo",
    value: function reportChannelByUrlWithHttpInfo(channelType, channelUrl, opts) {
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
      var returnType = _ReportChannelByUrlResponse["default"];
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Report a channel
     * ## Report a channel  Reports a channel that has offensive messages or abusive activities.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-channel ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportChannelByUrlData} opts.reportChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportChannelByUrlResponse}
     */

  }, {
    key: "reportChannelByUrl",
    value: function reportChannelByUrl(channelType, channelUrl, opts) {
      return this.reportChannelByUrlWithHttpInfo(channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Report a message
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportMessageByIdData} opts.reportMessageByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportMessageByIdResponse} and HTTP response
     */

  }, {
    key: "reportMessageByIdWithHttpInfo",
    value: function reportMessageByIdWithHttpInfo(channelType, channelUrl, messageId, opts) {
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
      var returnType = _ReportMessageByIdResponse["default"];
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}/messages/{message_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Report a message
     * ## Report a message  Reports a message which contains suspicious, harassing, or inappropriate content.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportMessageByIdData} opts.reportMessageByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportMessageByIdResponse}
     */

  }, {
    key: "reportMessageById",
    value: function reportMessageById(channelType, channelUrl, messageId, opts) {
      return this.reportMessageByIdWithHttpInfo(channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Report a user
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportUserByIdData} opts.reportUserByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReportUserByIdResponse} and HTTP response
     */

  }, {
    key: "reportUserByIdWithHttpInfo",
    value: function reportUserByIdWithHttpInfo(offendingUserId, opts) {
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
      var returnType = _ReportUserByIdResponse["default"];
      return this.apiClient.callApi('/v3/report/users/{offending_user_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Report a user
     * ## Report a user  Reports a user who sends an offensive message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-report-a-user ----------------------------
     * @param {String} offendingUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ReportUserByIdData} opts.reportUserByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReportUserByIdResponse}
     */

  }, {
    key: "reportUserById",
    value: function reportUserById(offendingUserId, opts) {
      return this.reportUserByIdWithHttpInfo(offendingUserId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a moderated message
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: String}>} and HTTP response
     */

  }, {
    key: "viewModeratedMessageByIdWithHttpInfo",
    value: function viewModeratedMessageByIdWithHttpInfo(channelType, channelUrl, messageId, opts) {
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
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/v3/report/{channel_type}/{channel_url}/profanity_messages/{message_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a moderated message
     * ## View a moderated message  Retrieves information on a message that has been moderated by the [profanity filter](https://sendbird.com/docs/chat/v3/platform-api/guides/filter-and-moderation#2-profanity-filter).  https://sendbird.com/docs/chat/v3/platform-api/guides/report-content-and-subject#2-view-a-moderated-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: String}>}
     */

  }, {
    key: "viewModeratedMessageById",
    value: function viewModeratedMessageById(channelType, channelUrl, messageId, opts) {
      return this.viewModeratedMessageByIdWithHttpInfo(channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ReportContentSubjectApi;
}();

exports["default"] = ReportContentSubjectApi;