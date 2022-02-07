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
import CreateBotData from '../model/CreateBotData';
import InlineResponse20065 from '../model/InlineResponse20065';
import InlineResponse20065Bots from '../model/InlineResponse20065Bots';
import JoinChannelsData from '../model/JoinChannelsData';
import SendBirdGroupChannelCollection from '../model/SendBirdGroupChannelCollection';
import SendBirdMessageResponse from '../model/SendBirdMessageResponse';
import SendBotSMessageData from '../model/SendBotSMessageData';
import UpdateBotByIdData from '../model/UpdateBotByIdData';

/**
* BotInterface service.
* @module api/BotInterfaceApi
* @version 1.0.0
*/
export default class BotInterfaceApi {

    /**
    * Constructs a new BotInterfaceApi. 
    * @alias module:api/BotInterfaceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createBot operation.
     * @callback module:api/BotInterfaceApi~createBotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065Bots} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a bot
     * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/CreateBotData} opts.createBotData 
     * @param {module:api/BotInterfaceApi~createBotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20065Bots}
     */
    createBot(opts, callback) {
      opts = opts || {};
      let postBody = opts['createBotData'];

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
      let returnType = InlineResponse20065Bots;
      return this.apiClient.callApi(
        '/v3/bots', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deleteBotById(botUserid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling deleteBotById");
      }

      let pathParams = {
        'bot_userid': botUserid
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the joinChannels operation.
     * @callback module:api/BotInterfaceApi~joinChannelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendBirdGroupChannelCollection} data The data returned by the service call.
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
     * data is of type: {@link module:model/SendBirdGroupChannelCollection}
     */
    joinChannels(botUserid, opts, callback) {
      opts = opts || {};
      let postBody = opts['joinChannelsData'];
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling joinChannels");
      }

      let pathParams = {
        'bot_userid': botUserid
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
      let returnType = SendBirdGroupChannelCollection;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}/channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    leaveChannels(botUserid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling leaveChannels");
      }

      let pathParams = {
        'bot_userid': botUserid
      };
      let queryParams = {
        'channel_url': opts['channelUrl']
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}/channels', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    leaveChannelsByUrl(botUserid, channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling leaveChannelsByUrl");
      }
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling leaveChannelsByUrl");
      }

      let pathParams = {
        'bot_userid': botUserid,
        'channel_url': channelUrl
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}/channels/{channel_url}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listBots operation.
     * @callback module:api/BotInterfaceApi~listBotsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065} data The data returned by the service call.
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
     * data is of type: {@link module:model/InlineResponse20065}
     */
    listBots(opts, callback) {
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
      let returnType = InlineResponse20065;
      return this.apiClient.callApi(
        '/v3/bots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendBotsMessage operation.
     * @callback module:api/BotInterfaceApi~sendBotsMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendBirdMessageResponse} data The data returned by the service call.
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
     * data is of type: {@link module:model/SendBirdMessageResponse}
     */
    sendBotsMessage(botUserid, opts, callback) {
      opts = opts || {};
      let postBody = opts['sendBotSMessageData'];
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling sendBotsMessage");
      }

      let pathParams = {
        'bot_userid': botUserid
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
      let returnType = SendBirdMessageResponse;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBotById operation.
     * @callback module:api/BotInterfaceApi~updateBotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065Bots} data The data returned by the service call.
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
     * data is of type: {@link module:model/InlineResponse20065Bots}
     */
    updateBotById(botUserid, opts, callback) {
      opts = opts || {};
      let postBody = opts['updateBotByIdData'];
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling updateBotById");
      }

      let pathParams = {
        'bot_userid': botUserid
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
      let returnType = InlineResponse20065Bots;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the viewBotById operation.
     * @callback module:api/BotInterfaceApi~viewBotByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20065Bots} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a bot
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * @param {String} botUserid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/BotInterfaceApi~viewBotByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20065Bots}
     */
    viewBotById(botUserid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'botUserid' is set
      if (botUserid === undefined || botUserid === null) {
        throw new Error("Missing the required parameter 'botUserid' when calling viewBotById");
      }

      let pathParams = {
        'bot_userid': botUserid
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
      let returnType = InlineResponse20065Bots;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
