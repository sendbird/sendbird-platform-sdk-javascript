"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateBotData = _interopRequireDefault(require("../model/CreateBotData"));

var _JoinChannelsData = _interopRequireDefault(require("../model/JoinChannelsData"));

var _SendBotSMessageData = _interopRequireDefault(require("../model/SendBotSMessageData"));

var _UpdateBotByIdData = _interopRequireDefault(require("../model/UpdateBotByIdData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* BotInterface service.
* @module api/BotInterfaceApi
* @version 1.0.0
*/
var BotInterfaceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BotInterfaceApi. 
  * @alias module:api/BotInterfaceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BotInterfaceApi(apiClient) {
    _classCallCheck(this, BotInterfaceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createBot operation.
   * @callback module:api/BotInterfaceApi~createBotCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a bot
   * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/CreateBotData} opts.createBotData 
   * @param {module:api/BotInterfaceApi~createBotCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(BotInterfaceApi, [{
    key: "createBot",
    value: function createBot(opts, callback) {
      opts = opts || {};
      var postBody = opts['createBotData'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/bots', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteBotById operation.
     * @callback module:api/BotInterfaceApi~deleteBotByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a bot
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/BotInterfaceApi~deleteBotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteBotById",
    value: function deleteBotById(botUserid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'botUserid' is set

      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling deleteBotById");
      }

      var pathParams = {
        'bot_userid': botUserid
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
      return this.apiClient.callApi('/v3/bots/{bot_userid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the joinChannels operation.
     * @callback module:api/BotInterfaceApi~joinChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join channels
     * ## Join channels  Makes a bot join one or more channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-join-channels ----------------------------
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/JoinChannelsData} opts.joinChannelsData 
     * @param {module:api/BotInterfaceApi~joinChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "joinChannels",
    value: function joinChannels(botUserid, opts, callback) {
      opts = opts || {};
      var postBody = opts['joinChannelsData']; // verify the required parameter 'botUserid' is set

      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling joinChannels");
      }

      var pathParams = {
        'bot_userid': botUserid
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
      return this.apiClient.callApi('/v3/bots/{bot_userid}/channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the leaveChannels operation.
     * @callback module:api/BotInterfaceApi~leaveChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave channels - When leaving all channels
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.channelUrl 
     * @param {module:api/BotInterfaceApi~leaveChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "leaveChannels",
    value: function leaveChannels(botUserid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'botUserid' is set

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
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/bots/{bot_userid}/channels', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the leaveChannelsByUrl operation.
     * @callback module:api/BotInterfaceApi~leaveChannelsByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave channels - When leaving a channel by its channel URL
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} botUserid 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/BotInterfaceApi~leaveChannelsByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "leaveChannelsByUrl",
    value: function leaveChannelsByUrl(botUserid, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'botUserid' is set

      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling leaveChannelsByUrl");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling leaveChannelsByUrl");
      }

      var pathParams = {
        'bot_userid': botUserid,
        'channel_url': channelUrl
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
      return this.apiClient.callApi('/v3/bots/{bot_userid}/channels/{channel_url}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listBots operation.
     * @callback module:api/BotInterfaceApi~listBotsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List bots
     * ## List bots  Retrieves a list of all bots within an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/BotInterfaceApi~listBotsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listBots",
    value: function listBots(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      return this.apiClient.callApi('/v3/bots', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sendBotsMessage operation.
     * @callback module:api/BotInterfaceApi~sendBotsMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a bot's message
     * ## Send a bot's message  Sends a bot's message to a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-send-a-bot-s-message ----------------------------   `bot_userid`      Type: string      Description: Specifies the ID of the bot to send a message.
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/SendBotSMessageData} opts.sendBotSMessageData 
     * @param {module:api/BotInterfaceApi~sendBotsMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sendBotsMessage",
    value: function sendBotsMessage(botUserid, opts, callback) {
      opts = opts || {};
      var postBody = opts['sendBotSMessageData']; // verify the required parameter 'botUserid' is set

      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling sendBotsMessage");
      }

      var pathParams = {
        'bot_userid': botUserid
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
      return this.apiClient.callApi('/v3/bots/{bot_userid}/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateBotById operation.
     * @callback module:api/BotInterfaceApi~updateBotByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a bot
     * ## Update a bot  Updates information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-update-a-bot ----------------------------
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateBotByIdData} opts.updateBotByIdData 
     * @param {module:api/BotInterfaceApi~updateBotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateBotById",
    value: function updateBotById(botUserid, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateBotByIdData']; // verify the required parameter 'botUserid' is set

      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling updateBotById");
      }

      var pathParams = {
        'bot_userid': botUserid
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
      return this.apiClient.callApi('/v3/bots/{bot_userid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewBotById operation.
     * @callback module:api/BotInterfaceApi~viewBotByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a bot
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/BotInterfaceApi~viewBotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewBotById",
    value: function viewBotById(botUserid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'botUserid' is set

      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling viewBotById");
      }

      var pathParams = {
        'bot_userid': botUserid
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
      return this.apiClient.callApi('/v3/bots/{bot_userid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BotInterfaceApi;
}();

exports["default"] = BotInterfaceApi;