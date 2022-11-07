"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateBotData = _interopRequireDefault(require("../model/CreateBotData"));
var _CreateBotResponse = _interopRequireDefault(require("../model/CreateBotResponse"));
var _JoinChannelsData = _interopRequireDefault(require("../model/JoinChannelsData"));
var _JoinChannelsResponse = _interopRequireDefault(require("../model/JoinChannelsResponse"));
var _ListBotsResponse = _interopRequireDefault(require("../model/ListBotsResponse"));
var _SendBirdMessageResponse = _interopRequireDefault(require("../model/SendBirdMessageResponse"));
var _SendBotSMessageData = _interopRequireDefault(require("../model/SendBotSMessageData"));
var _UpdateBotByIdData = _interopRequireDefault(require("../model/UpdateBotByIdData"));
var _UpdateBotByIdResponse = _interopRequireDefault(require("../model/UpdateBotByIdResponse"));
var _ViewBotByIdResponse = _interopRequireDefault(require("../model/ViewBotByIdResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
* Bot service.
* @module api/BotApi
* @version 0.0.16
*/
var BotApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BotApi. 
  * @alias module:api/BotApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BotApi(apiClient) {
    _classCallCheck(this, BotApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create a bot
   * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
   * @param {String} apiToken 
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateBotData} opts.createBotData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateBotResponse} and HTTP response
   */
  _createClass(BotApi, [{
    key: "createBotWithHttpInfo",
    value: function createBotWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['createBotData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createBot");
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
      var returnType = _CreateBotResponse["default"];
      return this.apiClient.callApi('/v3/bots', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a bot
     * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateBotData} opts.createBotData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateBotResponse}
     */
  }, {
    key: "createBot",
    value: function createBot(apiToken, opts) {
      return this.createBotWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a bot
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "deleteBotByIdWithHttpInfo",
    value: function deleteBotByIdWithHttpInfo(apiToken, botUserid) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteBotById");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling deleteBotById");
      }
      var pathParams = {
        'bot_userid': botUserid
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/bots/{bot_userid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a bot
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "deleteBotById",
    value: function deleteBotById(apiToken, botUserid) {
      return this.deleteBotByIdWithHttpInfo(apiToken, botUserid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Join channels
     * ## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JoinChannelsData} opts.joinChannelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JoinChannelsResponse} and HTTP response
     */
  }, {
    key: "joinChannelsWithHttpInfo",
    value: function joinChannelsWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      var postBody = opts['joinChannelsData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling joinChannels");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling joinChannels");
      }
      var pathParams = {
        'bot_userid': botUserid
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JoinChannelsResponse["default"];
      return this.apiClient.callApi('/v3/bots/{bot_userid}/channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Join channels
     * ## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JoinChannelsData} opts.joinChannelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JoinChannelsResponse}
     */
  }, {
    key: "joinChannels",
    value: function joinChannels(apiToken, botUserid, opts) {
      return this.joinChannelsWithHttpInfo(apiToken, botUserid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Leave channels - When leaving all channels
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "leaveChannelsWithHttpInfo",
    value: function leaveChannelsWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling leaveChannels");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling leaveChannels");
      }
      var pathParams = {
        'bot_userid': botUserid
      };
      var queryParams = {
        'channel_url': opts['channelUrl']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/bots/{bot_userid}/channels', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Leave channels - When leaving all channels
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "leaveChannels",
    value: function leaveChannels(apiToken, botUserid, opts) {
      return this.leaveChannelsWithHttpInfo(apiToken, botUserid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Leave channels - When leaving a channel by its channel URL
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  }, {
    key: "leaveChannelsByUrlWithHttpInfo",
    value: function leaveChannelsByUrlWithHttpInfo(apiToken, botUserid, channelUrl) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling leaveChannelsByUrl");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling leaveChannelsByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling leaveChannelsByUrl");
      }
      var pathParams = {
        'bot_userid': botUserid,
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
      var returnType = Object;
      return this.apiClient.callApi('/v3/bots/{bot_userid}/channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Leave channels - When leaving a channel by its channel URL
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  }, {
    key: "leaveChannelsByUrl",
    value: function leaveChannelsByUrl(apiToken, botUserid, channelUrl) {
      return this.leaveChannelsByUrlWithHttpInfo(apiToken, botUserid, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List bots
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListBotsResponse} and HTTP response
     */
  }, {
    key: "listBotsWithHttpInfo",
    value: function listBotsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listBots");
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
      var returnType = _ListBotsResponse["default"];
      return this.apiClient.callApi('/v3/bots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List bots
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListBotsResponse}
     */
  }, {
    key: "listBots",
    value: function listBots(apiToken, opts) {
      return this.listBotsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Send a bot's message
     * ## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {module:model/SendBotSMessageData} opts.sendBotSMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdMessageResponse} and HTTP response
     */
  }, {
    key: "sendBotsMessageWithHttpInfo",
    value: function sendBotsMessageWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      var postBody = opts['sendBotSMessageData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling sendBotsMessage");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling sendBotsMessage");
      }
      var pathParams = {
        'bot_userid': botUserid
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdMessageResponse["default"];
      return this.apiClient.callApi('/v3/bots/{bot_userid}/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Send a bot's message
     * ## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {module:model/SendBotSMessageData} opts.sendBotSMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdMessageResponse}
     */
  }, {
    key: "sendBotsMessage",
    value: function sendBotsMessage(apiToken, botUserid, opts) {
      return this.sendBotsMessageWithHttpInfo(apiToken, botUserid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a bot
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateBotByIdData} opts.updateBotByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateBotByIdResponse} and HTTP response
     */
  }, {
    key: "updateBotByIdWithHttpInfo",
    value: function updateBotByIdWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      var postBody = opts['updateBotByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateBotById");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling updateBotById");
      }
      var pathParams = {
        'bot_userid': botUserid
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateBotByIdResponse["default"];
      return this.apiClient.callApi('/v3/bots/{bot_userid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a bot
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateBotByIdData} opts.updateBotByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateBotByIdResponse}
     */
  }, {
    key: "updateBotById",
    value: function updateBotById(apiToken, botUserid, opts) {
      return this.updateBotByIdWithHttpInfo(apiToken, botUserid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * View a bot
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewBotByIdResponse} and HTTP response
     */
  }, {
    key: "viewBotByIdWithHttpInfo",
    value: function viewBotByIdWithHttpInfo(apiToken, botUserid) {
      var postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewBotById");
      }
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling viewBotById");
      }
      var pathParams = {
        'bot_userid': botUserid
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewBotByIdResponse["default"];
      return this.apiClient.callApi('/v3/bots/{bot_userid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * View a bot
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewBotByIdResponse}
     */
  }, {
    key: "viewBotById",
    value: function viewBotById(apiToken, botUserid) {
      return this.viewBotByIdWithHttpInfo(apiToken, botUserid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return BotApi;
}();
exports["default"] = BotApi;