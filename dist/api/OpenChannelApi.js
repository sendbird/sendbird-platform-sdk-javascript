"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _OcCreateChannelData = _interopRequireDefault(require("../model/OcCreateChannelData"));
var _OcDeleteChannelByUrl200Response = _interopRequireDefault(require("../model/OcDeleteChannelByUrl200Response"));
var _OcListChannelsResponse = _interopRequireDefault(require("../model/OcListChannelsResponse"));
var _OcListOperatorsResponse = _interopRequireDefault(require("../model/OcListOperatorsResponse"));
var _OcListParticipantsResponse = _interopRequireDefault(require("../model/OcListParticipantsResponse"));
var _OcRegisterOperatorsData = _interopRequireDefault(require("../model/OcRegisterOperatorsData"));
var _OcUpdateChannelByUrlData = _interopRequireDefault(require("../model/OcUpdateChannelByUrlData"));
var _SendBirdOpenChannel = _interopRequireDefault(require("../model/SendBirdOpenChannel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* OpenChannel service.
* @module api/OpenChannelApi
* @version 0.0.16
*/
var OpenChannelApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OpenChannelApi. 
  * @alias module:api/OpenChannelApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OpenChannelApi(apiClient) {
    _classCallCheck(this, OpenChannelApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Cancel the registration of operators
   * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
   * @param {String} apiToken 
   * @param {String} channelUrl 
   * @param {Array.<String>} operatorIds 
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.deleteAll 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  _createClass(OpenChannelApi, [{
    key: "ocCancelTheRegistrationOfOperatorsWithHttpInfo",
    value: function ocCancelTheRegistrationOfOperatorsWithHttpInfo(apiToken, channelUrl, operatorIds, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocCancelTheRegistrationOfOperators");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocCancelTheRegistrationOfOperators");
      }
      // verify the required parameter 'operatorIds' is set
      if (operatorIds === undefined || operatorIds === null) {
        throw new Error("Missing the required parameter 'operatorIds' when calling ocCancelTheRegistrationOfOperators");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'operator_ids': this.apiClient.buildCollectionParam(operatorIds, 'multi'),
        'delete_all': opts['deleteAll']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Array.<String>} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleteAll 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "ocCancelTheRegistrationOfOperators",
    value: function ocCancelTheRegistrationOfOperators(apiToken, channelUrl, operatorIds, opts) {
      return this.ocCancelTheRegistrationOfOperatorsWithHttpInfo(apiToken, channelUrl, operatorIds, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a channel
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcCreateChannelData} opts.ocCreateChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */
  }, {
    key: "ocCreateChannelWithHttpInfo",
    value: function ocCreateChannelWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['ocCreateChannelData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocCreateChannel");
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
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a channel
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcCreateChannelData} opts.ocCreateChannelData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */
  }, {
    key: "ocCreateChannel",
    value: function ocCreateChannel(apiToken, opts) {
      return this.ocCreateChannelWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a channel
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */
  }, {
    key: "ocDeleteChannelByUrlWithHttpInfo",
    value: function ocDeleteChannelByUrlWithHttpInfo(apiToken, channelUrl) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocDeleteChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocDeleteChannelByUrl");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a channel
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */
  }, {
    key: "ocDeleteChannelByUrl",
    value: function ocDeleteChannelByUrl(apiToken, channelUrl) {
      return this.ocDeleteChannelByUrlWithHttpInfo(apiToken, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List channels
     * ## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.customTypes 
     * @param {String} opts.nameContains 
     * @param {String} opts.urlContains 
     * @param {Boolean} opts.showFrozen 
     * @param {Boolean} opts.showMetadata 
     * @param {String} opts.customType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListChannelsResponse} and HTTP response
     */
  }, {
    key: "ocListChannelsWithHttpInfo",
    value: function ocListChannelsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocListChannels");
      }
      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'custom_types': opts['customTypes'],
        'name_contains': opts['nameContains'],
        'url_contains': opts['urlContains'],
        'show_frozen': opts['showFrozen'],
        'show_metadata': opts['showMetadata'],
        'custom_type': opts['customType']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OcListChannelsResponse["default"];
      return this.apiClient.callApi('/v3/open_channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List channels
     * ## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.customTypes 
     * @param {String} opts.nameContains 
     * @param {String} opts.urlContains 
     * @param {Boolean} opts.showFrozen 
     * @param {Boolean} opts.showMetadata 
     * @param {String} opts.customType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListChannelsResponse}
     */
  }, {
    key: "ocListChannels",
    value: function ocListChannels(apiToken, opts) {
      return this.ocListChannelsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List operators
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListOperatorsResponse} and HTTP response
     */
  }, {
    key: "ocListOperatorsWithHttpInfo",
    value: function ocListOperatorsWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocListOperators");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListOperators");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
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
      var returnType = _OcListOperatorsResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List operators
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListOperatorsResponse}
     */
  }, {
    key: "ocListOperators",
    value: function ocListOperators(apiToken, channelUrl, opts) {
      return this.ocListOperatorsWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List participants
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcListParticipantsResponse} and HTTP response
     */
  }, {
    key: "ocListParticipantsWithHttpInfo",
    value: function ocListParticipantsWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocListParticipants");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListParticipants");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
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
      var returnType = _OcListParticipantsResponse["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/participants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List participants
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcListParticipantsResponse}
     */
  }, {
    key: "ocListParticipants",
    value: function ocListParticipants(apiToken, channelUrl, opts) {
      return this.ocListParticipantsWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Register operators
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcRegisterOperatorsData} opts.ocRegisterOperatorsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OcDeleteChannelByUrl200Response} and HTTP response
     */
  }, {
    key: "ocRegisterOperatorsWithHttpInfo",
    value: function ocRegisterOperatorsWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['ocRegisterOperatorsData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocRegisterOperators");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocRegisterOperators");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OcDeleteChannelByUrl200Response["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}/operators', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Register operators
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcRegisterOperatorsData} opts.ocRegisterOperatorsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OcDeleteChannelByUrl200Response}
     */
  }, {
    key: "ocRegisterOperators",
    value: function ocRegisterOperators(apiToken, channelUrl, opts) {
      return this.ocRegisterOperatorsWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a channel
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcUpdateChannelByUrlData} opts.ocUpdateChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */
  }, {
    key: "ocUpdateChannelByUrlWithHttpInfo",
    value: function ocUpdateChannelByUrlWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['ocUpdateChannelByUrlData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocUpdateChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUpdateChannelByUrl");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a channel
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/OcUpdateChannelByUrlData} opts.ocUpdateChannelByUrlData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */
  }, {
    key: "ocUpdateChannelByUrl",
    value: function ocUpdateChannelByUrl(apiToken, channelUrl, opts) {
      return this.ocUpdateChannelByUrlWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a channel
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdOpenChannel} and HTTP response
     */
  }, {
    key: "ocViewChannelByUrlWithHttpInfo",
    value: function ocViewChannelByUrlWithHttpInfo(apiToken, channelUrl) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling ocViewChannelByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewChannelByUrl");
      }
      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendBirdOpenChannel["default"];
      return this.apiClient.callApi('/v3/open_channels/{channel_url}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a channel
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdOpenChannel}
     */
  }, {
    key: "ocViewChannelByUrl",
    value: function ocViewChannelByUrl(apiToken, channelUrl) {
      return this.ocViewChannelByUrlWithHttpInfo(apiToken, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return OpenChannelApi;
}();
exports["default"] = OpenChannelApi;