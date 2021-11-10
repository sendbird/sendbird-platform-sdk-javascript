"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddExtraDataToMessageData = _interopRequireDefault(require("../model/AddExtraDataToMessageData"));

var _AddReactionToAMessageData = _interopRequireDefault(require("../model/AddReactionToAMessageData"));

var _GcMarkAllMessagesAsDeliveredData = _interopRequireDefault(require("../model/GcMarkAllMessagesAsDeliveredData"));

var _GcMarkAllMessagesAsReadData = _interopRequireDefault(require("../model/GcMarkAllMessagesAsReadData"));

var _SendMessageData = _interopRequireDefault(require("../model/SendMessageData"));

var _UpdateExtraDataInMessageData = _interopRequireDefault(require("../model/UpdateExtraDataInMessageData"));

var _UpdateMessageByIdData = _interopRequireDefault(require("../model/UpdateMessageByIdData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Messages service.
* @module api/MessagesApi
* @version 1.0.0
*/
var MessagesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MessagesApi. 
  * @alias module:api/MessagesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MessagesApi(apiClient) {
    _classCallCheck(this, MessagesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addExtraDataToMessage operation.
   * @callback module:api/MessagesApi~addExtraDataToMessageCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add extra data to a message
   * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
   * @param {String} channelType 
   * @param {String} channelUrl 
   * @param {String} messageId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/AddExtraDataToMessageData} opts.addExtraDataToMessageData 
   * @param {module:api/MessagesApi~addExtraDataToMessageCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(MessagesApi, [{
    key: "addExtraDataToMessage",
    value: function addExtraDataToMessage(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = opts['addExtraDataToMessageData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling addExtraDataToMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling addExtraDataToMessage");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling addExtraDataToMessage");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addReactionToAMessage operation.
     * @callback module:api/MessagesApi~addReactionToAMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a reaction to a message
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddReactionToAMessageData} opts.addReactionToAMessageData 
     * @param {module:api/MessagesApi~addReactionToAMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "addReactionToAMessage",
    value: function addReactionToAMessage(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = opts['addReactionToAMessageData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling addReactionToAMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling addReactionToAMessage");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling addReactionToAMessage");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteMessageById operation.
     * @callback module:api/MessagesApi~deleteMessageByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a message
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/MessagesApi~deleteMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteMessageById",
    value: function deleteMessageById(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling deleteMessageById");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling deleteMessageById");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling deleteMessageById");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcMarkAllMessagesAsDelivered operation.
     * @callback module:api/MessagesApi~gcMarkAllMessagesAsDeliveredCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark all messages as delivered
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcMarkAllMessagesAsDeliveredData} opts.gcMarkAllMessagesAsDeliveredData 
     * @param {module:api/MessagesApi~gcMarkAllMessagesAsDeliveredCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcMarkAllMessagesAsDelivered",
    value: function gcMarkAllMessagesAsDelivered(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcMarkAllMessagesAsDeliveredData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcMarkAllMessagesAsDelivered");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/messages/mark_as_delivered', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcMarkAllMessagesAsRead operation.
     * @callback module:api/MessagesApi~gcMarkAllMessagesAsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark all messages as read
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/GcMarkAllMessagesAsReadData} opts.gcMarkAllMessagesAsReadData 
     * @param {module:api/MessagesApi~gcMarkAllMessagesAsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcMarkAllMessagesAsRead",
    value: function gcMarkAllMessagesAsRead(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['gcMarkAllMessagesAsReadData']; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcMarkAllMessagesAsRead");
      }

      var pathParams = {
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
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/messages/mark_as_read', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gcViewNumberOfEachMembersUnreadMessages operation.
     * @callback module:api/MessagesApi~gcViewNumberOfEachMembersUnreadMessagesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View number of each member's unread messages
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.userIds 
     * @param {module:api/MessagesApi~gcViewNumberOfEachMembersUnreadMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "gcViewNumberOfEachMembersUnreadMessages",
    value: function gcViewNumberOfEachMembersUnreadMessages(channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelUrl' is set

      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcViewNumberOfEachMembersUnreadMessages");
      }

      var pathParams = {
        'channel_url': channelUrl
      };
      var queryParams = {
        'user_ids': opts['userIds']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/messages/unread_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listMessages operation.
     * @callback module:api/MessagesApi~listMessagesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List messages
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Number} messageTs 
     * @param {Number} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Number} opts.prevLimit 
     * @param {Number} opts.nextLimit 
     * @param {Boolean} opts.include 
     * @param {Boolean} opts.reverse 
     * @param {String} opts.senderId 
     * @param {String} opts.senderIds 
     * @param {String} opts.operatorFilter 
     * @param {String} opts.customTypes 
     * @param {String} opts.messageType 
     * @param {Boolean} opts.includingRemoved 
     * @param {Boolean} opts.includeReactions 
     * @param {Boolean} opts.withSortedMetaArray 
     * @param {Boolean} opts.showSubchannelMessagesOnly 
     * @param {String} opts.userId 
     * @param {String} opts.customType 
     * @param {Boolean} opts.withMetaArray 
     * @param {module:api/MessagesApi~listMessagesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listMessages",
    value: function listMessages(channelType, channelUrl, messageTs, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listMessages");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listMessages");
      } // verify the required parameter 'messageTs' is set


      if (messageTs === undefined || messageTs === null) {
        throw new Error("Missing the required parameter 'messageTs' when calling listMessages");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling listMessages");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {
        'message_ts': messageTs,
        'message_id': messageId,
        'prev_limit': opts['prevLimit'],
        'next_limit': opts['nextLimit'],
        'include': opts['include'],
        'reverse': opts['reverse'],
        'sender_id': opts['senderId'],
        'sender_ids': opts['senderIds'],
        'operator_filter': opts['operatorFilter'],
        'custom_types': opts['customTypes'],
        'message_type': opts['messageType'],
        'including_removed': opts['includingRemoved'],
        'include_reactions': opts['includeReactions'],
        'with_sorted_meta_array': opts['withSortedMetaArray'],
        'show_subchannel_messages_only': opts['showSubchannelMessagesOnly'],
        'user_id': opts['userId'],
        'custom_type': opts['customType'],
        'with_meta_array': opts['withMetaArray']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listReactionsOfMessage operation.
     * @callback module:api/MessagesApi~listReactionsOfMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List reactions of a message
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.listUsers 
     * @param {module:api/MessagesApi~listReactionsOfMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listReactionsOfMessage",
    value: function listReactionsOfMessage(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listReactionsOfMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listReactionsOfMessage");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling listReactionsOfMessage");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
      };
      var queryParams = {
        'list_users': opts['listUsers']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the removeExtraDataFromMessage operation.
     * @callback module:api/MessagesApi~removeExtraDataFromMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove extra data from a message
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Array} opts.keys 
     * @param {module:api/MessagesApi~removeExtraDataFromMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeExtraDataFromMessage",
    value: function removeExtraDataFromMessage(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling removeExtraDataFromMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling removeExtraDataFromMessage");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling removeExtraDataFromMessage");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
      };
      var queryParams = {
        'keys': opts['keys']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the removeReactionFromAMessage operation.
     * @callback module:api/MessagesApi~removeReactionFromAMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a reaction from a message
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {String} opts.userId 
     * @param {String} opts.reaction 
     * @param {module:api/MessagesApi~removeReactionFromAMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "removeReactionFromAMessage",
    value: function removeReactionFromAMessage(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling removeReactionFromAMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling removeReactionFromAMessage");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling removeReactionFromAMessage");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
      };
      var queryParams = {
        'user_id': opts['userId'],
        'reaction': opts['reaction']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sendMessage operation.
     * @callback module:api/MessagesApi~sendMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a message
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/SendMessageData} opts.sendMessageData 
     * @param {module:api/MessagesApi~sendMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sendMessage",
    value: function sendMessage(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = opts['sendMessageData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling sendMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling sendMessage");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the translateMessageIntoOtherLanguages operation.
     * @callback module:api/MessagesApi~translateMessageIntoOtherLanguagesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Translate a message into other languages
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Object} opts.body 
     * @param {module:api/MessagesApi~translateMessageIntoOtherLanguagesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "translateMessageIntoOtherLanguages",
    value: function translateMessageIntoOtherLanguages(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling translateMessageIntoOtherLanguages");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling translateMessageIntoOtherLanguages");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling translateMessageIntoOtherLanguages");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/translation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateExtraDataInMessage operation.
     * @callback module:api/MessagesApi~updateExtraDataInMessageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update extra data in a message
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateExtraDataInMessageData} opts.updateExtraDataInMessageData 
     * @param {module:api/MessagesApi~updateExtraDataInMessageCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateExtraDataInMessage",
    value: function updateExtraDataInMessage(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateExtraDataInMessageData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling updateExtraDataInMessage");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateExtraDataInMessage");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling updateExtraDataInMessage");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateMessageById operation.
     * @callback module:api/MessagesApi~updateMessageByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a message
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateMessageByIdData} opts.updateMessageByIdData 
     * @param {module:api/MessagesApi~updateMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateMessageById",
    value: function updateMessageById(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateMessageByIdData']; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling updateMessageById");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling updateMessageById");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling updateMessageById");
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
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewMessageById operation.
     * @callback module:api/MessagesApi~viewMessageByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View a message
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.withSortedMetaArray 
     * @param {Boolean} opts.withMetaArray 
     * @param {module:api/MessagesApi~viewMessageByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewMessageById",
    value: function viewMessageById(channelType, channelUrl, messageId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewMessageById");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewMessageById");
      } // verify the required parameter 'messageId' is set


      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling viewMessageById");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl,
        'message_id': messageId
      };
      var queryParams = {
        'with_sorted_meta_array': opts['withSortedMetaArray'],
        'with_meta_array': opts['withMetaArray']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the viewTotalNumberOfMessagesInChannel operation.
     * @callback module:api/MessagesApi~viewTotalNumberOfMessagesInChannelCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View total number of messages in a channel
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/MessagesApi~viewTotalNumberOfMessagesInChannelCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "viewTotalNumberOfMessagesInChannel",
    value: function viewTotalNumberOfMessagesInChannel(channelType, channelUrl, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelType' is set

      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling viewTotalNumberOfMessagesInChannel");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling viewTotalNumberOfMessagesInChannel");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/total_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MessagesApi;
}();

exports["default"] = MessagesApi;