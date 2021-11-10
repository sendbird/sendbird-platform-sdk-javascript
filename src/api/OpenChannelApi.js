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
import OcBanUserData from '../model/OcBanUserData';
import OcCreateChannelData from '../model/OcCreateChannelData';
import OcFreezeChannelData from '../model/OcFreezeChannelData';
import OcMuteUserData from '../model/OcMuteUserData';
import OcRegisterOperatorsData from '../model/OcRegisterOperatorsData';
import OcUpdateBanByIdData from '../model/OcUpdateBanByIdData';
import OcUpdateChannelByUrlData from '../model/OcUpdateChannelByUrlData';

/**
* OpenChannel service.
* @module api/OpenChannelApi
* @version 1.0.0
*/
export default class OpenChannelApi {

    /**
    * Constructs a new OpenChannelApi. 
    * @alias module:api/OpenChannelApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ocBanUser operation.
     * @callback module:api/OpenChannelApi~ocBanUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ban a user
     * ## Ban a user  Bans a user from an open channel. A banned user is immediately expelled from a channel and allowed to participate in the channel again after a set time period.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-ban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcBanUserData} opts.ocBanUserData 
     * @param {module:api/OpenChannelApi~ocBanUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocBanUser(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = opts['ocBanUserData'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocBanUser");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/ban', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocCancelTheRegistrationOfOperators operation.
     * @callback module:api/OpenChannelApi~ocCancelTheRegistrationOfOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the registration of operators
     * ## Cancel the registration of operators  Cancels the registration of operators from an open channel but leave them as participants.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-cancel-the-registration-of-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to cancel the registration of operators.
     * @param {String} channelUrl 
     * @param {Array} operatorIds 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.deleteAll 
     * @param {module:api/OpenChannelApi~ocCancelTheRegistrationOfOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocCancelTheRegistrationOfOperators(channelUrl, operatorIds, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocCancelTheRegistrationOfOperators");
      }
      // verify the required parameter 'operatorIds' is set
      if (operatorIds === undefined || operatorIds === null) {
        throw new Error("Missing the required parameter 'operatorIds' when calling ocCancelTheRegistrationOfOperators");
      }

      let pathParams = {
        'channel_url': channelUrl
      };
      let queryParams = {
        'operator_ids': operatorIds,
        'delete_all': opts['deleteAll']
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/operators', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocCreateChannel operation.
     * @callback module:api/OpenChannelApi~ocCreateChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a channel
     * ## Create a channel  Creates an open channel.  >__Note__: Classic open channels created before the deprecation date of March 2021 will maintain their original form and functions. However, new applications created after December 15, 2020, will be able to create dynamic partitioning open channels only.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcCreateChannelData} opts.ocCreateChannelData 
     * @param {module:api/OpenChannelApi~ocCreateChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocCreateChannel(opts, callback) {
      opts = opts || {};
      let postBody = opts['ocCreateChannelData'];

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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocDeleteChannelByUrl operation.
     * @callback module:api/OpenChannelApi~ocDeleteChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a channel
     * ## Delete a channel  Deletes an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-delete-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocDeleteChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocDeleteChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocDeleteChannelByUrl");
      }

      let pathParams = {
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
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocFreezeChannel operation.
     * @callback module:api/OpenChannelApi~ocFreezeChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Freeze a channel
     * ## Freeze a channel  Freezes or unfreezes an open channel.  > __Note__: Only users designated as channel operators are allowed to talk when a channel is frozen.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-freeze-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcFreezeChannelData} opts.ocFreezeChannelData 
     * @param {module:api/OpenChannelApi~ocFreezeChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocFreezeChannel(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = opts['ocFreezeChannelData'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocFreezeChannel");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/freeze', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocListBannedUsers operation.
     * @callback module:api/OpenChannelApi~ocListBannedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List banned users
     * ## List banned users  Retrieves a list of banned users from a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-banned-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel where to retrieve a list of banned users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListBannedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocListBannedUsers(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListBannedUsers");
      }

      let pathParams = {
        'channel_url': channelUrl
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/ban', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocListChannels operation.
     * @callback module:api/OpenChannelApi~ocListChannelsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List channels
     * ## List channels  Retrieves a list of open channels. You can query the list using various parameters.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-channels ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.customTypes 
     * @param {String} opts.nameContains 
     * @param {String} opts.urlContains 
     * @param {Boolean} opts.showFrozen 
     * @param {Boolean} opts.showMetadata 
     * @param {String} opts.customType 
     * @param {module:api/OpenChannelApi~ocListChannelsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocListChannels(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'custom_types': opts['customTypes'],
        'name_contains': opts['nameContains'],
        'url_contains': opts['urlContains'],
        'show_frozen': opts['showFrozen'],
        'show_metadata': opts['showMetadata'],
        'custom_type': opts['customType']
      };
      let headerParams = {
        'Api-Token': opts['apiToken']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocListMutedUsers operation.
     * @callback module:api/OpenChannelApi~ocListMutedUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List muted users
     * ## List muted users  Retrieves a list of muted users in the channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-muted-users ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of muted users.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListMutedUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocListMutedUsers(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListMutedUsers");
      }

      let pathParams = {
        'channel_url': channelUrl
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/mute', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocListOperators operation.
     * @callback module:api/OpenChannelApi~ocListOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List operators
     * ## List operators  Retrieves a list of operators of an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-operators ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of operators.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocListOperators(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListOperators");
      }

      let pathParams = {
        'channel_url': channelUrl
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/operators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocListParticipants operation.
     * @callback module:api/OpenChannelApi~ocListParticipantsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List participants
     * ## List participants  Retrieves a list of the participants of an open channel. A participant refers to a user who has entered the open channel and is currently online.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-list-participants ----------------------------   `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of participants in.
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {module:api/OpenChannelApi~ocListParticipantsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocListParticipants(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocListParticipants");
      }

      let pathParams = {
        'channel_url': channelUrl
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/participants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocMuteUser operation.
     * @callback module:api/OpenChannelApi~ocMuteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mute a user
     * ## Mute a user  Mutes a user in the channel. A muted user remains in the channel and is allowed to view the messages, but can't send any messages until unmuted.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-mute-a-user
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcMuteUserData} opts.ocMuteUserData 
     * @param {module:api/OpenChannelApi~ocMuteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocMuteUser(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = opts['ocMuteUserData'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocMuteUser");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/mute', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocRegisterOperators operation.
     * @callback module:api/OpenChannelApi~ocRegisterOperatorsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register operators
     * ## Register operators  Registers one or more operators to an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-register-operators ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcRegisterOperatorsData} opts.ocRegisterOperatorsData 
     * @param {module:api/OpenChannelApi~ocRegisterOperatorsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocRegisterOperators(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = opts['ocRegisterOperatorsData'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocRegisterOperators");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/operators', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocUnbanUserById operation.
     * @callback module:api/OpenChannelApi~ocUnbanUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unban a user
     * ## Unban a user  Unbans a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unban-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocUnbanUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocUnbanUserById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUnbanUserById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocUnbanUserById");
      }

      let pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocUnmuteUserById operation.
     * @callback module:api/OpenChannelApi~ocUnmuteUserByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unmute a user
     * ## Unmute a user  Unmutes a user from an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-unmute-a-user ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocUnmuteUserByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocUnmuteUserById(channelUrl, mutedUserId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUnmuteUserById");
      }
      // verify the required parameter 'mutedUserId' is set
      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling ocUnmuteUserById");
      }

      let pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocUpdateBanById operation.
     * @callback module:api/OpenChannelApi~ocUpdateBanByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a ban
     * ## Update a ban  Updates details of a ban imposed on a user. You can change the length of a ban with this action, and also provide an updated description.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateBanByIdData} opts.ocUpdateBanByIdData 
     * @param {module:api/OpenChannelApi~ocUpdateBanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocUpdateBanById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      let postBody = opts['ocUpdateBanByIdData'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUpdateBanById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocUpdateBanById");
      }

      let pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocUpdateChannelByUrl operation.
     * @callback module:api/OpenChannelApi~ocUpdateChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a channel
     * ## Update a channel  Updates information on an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-update-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/OcUpdateChannelByUrlData} opts.ocUpdateChannelByUrlData 
     * @param {module:api/OpenChannelApi~ocUpdateChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocUpdateChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = opts['ocUpdateChannelByUrlData'];
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocUpdateChannelByUrl");
      }

      let pathParams = {
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocViewBanById operation.
     * @callback module:api/OpenChannelApi~ocViewBanByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a ban
     * ## View a ban  Retrieves details of a ban imposed on a user.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-ban ----------------------------
     * @param {String} channelUrl 
     * @param {String} bannedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocViewBanByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocViewBanById(channelUrl, bannedUserId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewBanById");
      }
      // verify the required parameter 'bannedUserId' is set
      if (bannedUserId === undefined || bannedUserId === null) {
        throw new Error("Missing the required parameter 'bannedUserId' when calling ocViewBanById");
      }

      let pathParams = {
        'channel_url': channelUrl,
        'banned_user_id': bannedUserId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/ban/{banned_user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocViewChannelByUrl operation.
     * @callback module:api/OpenChannelApi~ocViewChannelByUrlCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a channel
     * ## View a channel  Retrieves information on a specific open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-channel ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocViewChannelByUrlCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocViewChannelByUrl(channelUrl, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewChannelByUrl");
      }

      let pathParams = {
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
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ocViewMuteById operation.
     * @callback module:api/OpenChannelApi~ocViewMuteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a mute
     * ## View a mute  Checks if a user is muted in an open channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-view-a-mute ----------------------------
     * @param {String} channelUrl 
     * @param {String} mutedUserId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/OpenChannelApi~ocViewMuteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    ocViewMuteById(channelUrl, mutedUserId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'channelUrl' is set
      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling ocViewMuteById");
      }
      // verify the required parameter 'mutedUserId' is set
      if (mutedUserId === undefined || mutedUserId === null) {
        throw new Error("Missing the required parameter 'mutedUserId' when calling ocViewMuteById");
      }

      let pathParams = {
        'channel_url': channelUrl,
        'muted_user_id': mutedUserId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/open_channels/{channel_url}/mute/{muted_user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
