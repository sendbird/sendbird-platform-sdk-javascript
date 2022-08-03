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
import CreateBotResponse from '../model/CreateBotResponse';
import JoinChannelsData from '../model/JoinChannelsData';
import JoinChannelsResponse from '../model/JoinChannelsResponse';
import ListBotsResponse from '../model/ListBotsResponse';
import SendBirdMessageResponse from '../model/SendBirdMessageResponse';
import SendBotSMessageData from '../model/SendBotSMessageData';
import UpdateBotByIdData from '../model/UpdateBotByIdData';
import UpdateBotByIdResponse from '../model/UpdateBotByIdResponse';
import ViewBotByIdResponse from '../model/ViewBotByIdResponse';

/**
* Bot service.
* @module api/BotApi
* @version 1.0.7
*/
export default class BotApi {

    /**
    * Constructs a new BotApi. 
    * @alias module:api/BotApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a bot
     * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateBotData} opts.createBotData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateBotResponse} and HTTP response
     */
    createBotWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = opts['createBotData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling createBot");
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
      let returnType = CreateBotResponse;
      return this.apiClient.callApi(
        '/v3/bots', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a bot
     * ## Create a bot  Creates a new bot within the application. Creating a bot is similar to creating a normal user, except that a callback URL is specified in order for the bot to receive events.  > __Note__: The bot must [join](#2-join-channels) a group channel first to interact with users. In group channels, you can invite a bot through the [invite as members](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-invite-as-members) action instead.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-create-a-bot
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateBotData} opts.createBotData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateBotResponse}
     */
    createBot(apiToken, opts) {
      return this.createBotWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
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
    deleteBotByIdWithHttpInfo(apiToken, botUserid) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteBotById");
      }
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
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a bot
     * ## Delete a bot  Deletes a bot from an application.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-delete-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteBotById(apiToken, botUserid) {
      return this.deleteBotByIdWithHttpInfo(apiToken, botUserid)
        .then(function(response_and_data) {
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
    joinChannelsWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      let postBody = opts['joinChannelsData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling joinChannels");
      }
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
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = JoinChannelsResponse;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}/channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    joinChannels(apiToken, botUserid, opts) {
      return this.joinChannelsWithHttpInfo(apiToken, botUserid, opts)
        .then(function(response_and_data) {
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
    leaveChannelsWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling leaveChannels");
      }
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
        'Api-Token': apiToken
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
        authNames, contentTypes, accepts, returnType, null
      );
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
    leaveChannels(apiToken, botUserid, opts) {
      return this.leaveChannelsWithHttpInfo(apiToken, botUserid, opts)
        .then(function(response_and_data) {
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
    leaveChannelsByUrlWithHttpInfo(apiToken, botUserid, channelUrl) {
      let postBody = null;
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

      let pathParams = {
        'bot_userid': botUserid,
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}/channels/{channel_url}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Leave channels - When leaving a channel by its channel URL
     * ## Leave channels  Makes a bot leave one or more group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-leave-channels ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    leaveChannelsByUrl(apiToken, botUserid, channelUrl) {
      return this.leaveChannelsByUrlWithHttpInfo(apiToken, botUserid, channelUrl)
        .then(function(response_and_data) {
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
    listBotsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listBots");
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
      let returnType = ListBotsResponse;
      return this.apiClient.callApi(
        '/v3/bots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    listBots(apiToken, opts) {
      return this.listBotsWithHttpInfo(apiToken, opts)
        .then(function(response_and_data) {
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
    sendBotsMessageWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      let postBody = opts['sendBotSMessageData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling sendBotsMessage");
      }
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
        'Api-Token': apiToken
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
        authNames, contentTypes, accepts, returnType, null
      );
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
    sendBotsMessage(apiToken, botUserid, opts) {
      return this.sendBotsMessageWithHttpInfo(apiToken, botUserid, opts)
        .then(function(response_and_data) {
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
    updateBotByIdWithHttpInfo(apiToken, botUserid, opts) {
      opts = opts || {};
      let postBody = opts['updateBotByIdData'];
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateBotById");
      }
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
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateBotByIdResponse;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    updateBotById(apiToken, botUserid, opts) {
      return this.updateBotByIdWithHttpInfo(apiToken, botUserid, opts)
        .then(function(response_and_data) {
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
    viewBotByIdWithHttpInfo(apiToken, botUserid) {
      let postBody = null;
      // verify the required parameter 'apiToken' is set
      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewBotById");
      }
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
        'Api-Token': apiToken
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ViewBotByIdResponse;
      return this.apiClient.callApi(
        '/v3/bots/{bot_userid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * View a bot
     * ## View a bot  Retrieves information on a bot.  https://sendbird.com/docs/chat/v3/platform-api/guides/bot-interface#2-view-a-bot ----------------------------
     * @param {String} apiToken 
     * @param {String} botUserid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewBotByIdResponse}
     */
    viewBotById(apiToken, botUserid) {
      return this.viewBotByIdWithHttpInfo(apiToken, botUserid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
