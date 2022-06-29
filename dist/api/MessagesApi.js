"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddExtraDataToMessageData = _interopRequireDefault(require("../model/AddExtraDataToMessageData"));

var _AddExtraDataToMessageResponse = _interopRequireDefault(require("../model/AddExtraDataToMessageResponse"));

var _AddReactionToAMessageData = _interopRequireDefault(require("../model/AddReactionToAMessageData"));

var _AddReactionToAMessageResponse = _interopRequireDefault(require("../model/AddReactionToAMessageResponse"));

var _GcMarkAllMessagesAsDeliveredData = _interopRequireDefault(require("../model/GcMarkAllMessagesAsDeliveredData"));

var _GcMarkAllMessagesAsDeliveredResponse = _interopRequireDefault(require("../model/GcMarkAllMessagesAsDeliveredResponse"));

var _GcMarkAllMessagesAsReadData = _interopRequireDefault(require("../model/GcMarkAllMessagesAsReadData"));

var _GcViewNumberOfEachMembersUnreadMessagesResponse = _interopRequireDefault(require("../model/GcViewNumberOfEachMembersUnreadMessagesResponse"));

var _ListMessagesResponse = _interopRequireDefault(require("../model/ListMessagesResponse"));

var _ListReactionsOfMessageResponse = _interopRequireDefault(require("../model/ListReactionsOfMessageResponse"));

var _RemoveReactionFromAMessageResponse = _interopRequireDefault(require("../model/RemoveReactionFromAMessageResponse"));

var _SendBirdMessageResponse = _interopRequireDefault(require("../model/SendBirdMessageResponse"));

var _SendMessageData = _interopRequireDefault(require("../model/SendMessageData"));

var _UpdateExtraDataInMessageData = _interopRequireDefault(require("../model/UpdateExtraDataInMessageData"));

var _UpdateExtraDataInMessageResponse = _interopRequireDefault(require("../model/UpdateExtraDataInMessageResponse"));

var _UpdateMessageByIdData = _interopRequireDefault(require("../model/UpdateMessageByIdData"));

var _ViewTotalNumberOfMessagesInChannelResponse = _interopRequireDefault(require("../model/ViewTotalNumberOfMessagesInChannelResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Messages service.
* @module api/MessagesApi
* @version 1.0.1
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
   * Add extra data to a message
   * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
   * @param {String} apiToken 
   * @param {String} channelType 
   * @param {String} channelUrl 
   * @param {String} messageId 
   * @param {Object} opts Optional parameters
   * @param {module:model/AddExtraDataToMessageData} opts.addExtraDataToMessageData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddExtraDataToMessageResponse} and HTTP response
   */


  _createClass(MessagesApi, [{
    key: "addExtraDataToMessageWithHttpInfo",
    value: function addExtraDataToMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = opts['addExtraDataToMessageData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addExtraDataToMessage");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddExtraDataToMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add extra data to a message
     * ## Add extra data to a message  Adds one or more key-values items which store additional information for a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-extra-data-to-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddExtraDataToMessageData} opts.addExtraDataToMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddExtraDataToMessageResponse}
     */

  }, {
    key: "addExtraDataToMessage",
    value: function addExtraDataToMessage(apiToken, channelType, channelUrl, messageId, opts) {
      return this.addExtraDataToMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add a reaction to a message
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddReactionToAMessageData} opts.addReactionToAMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddReactionToAMessageResponse} and HTTP response
     */

  }, {
    key: "addReactionToAMessageWithHttpInfo",
    value: function addReactionToAMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = opts['addReactionToAMessageData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addReactionToAMessage");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddReactionToAMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add a reaction to a message
     * ## Add a reaction to a message  Adds a specific reaction to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-add-a-reaction-to-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddReactionToAMessageData} opts.addReactionToAMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddReactionToAMessageResponse}
     */

  }, {
    key: "addReactionToAMessage",
    value: function addReactionToAMessage(apiToken, channelType, channelUrl, messageId, opts) {
      return this.addReactionToAMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a message
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteMessageByIdWithHttpInfo",
    value: function deleteMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteMessageById");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a message
     * ## Delete a message  Deletes a message from a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-delete-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteMessageById",
    value: function deleteMessageById(apiToken, channelType, channelUrl, messageId) {
      return this.deleteMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mark all messages as delivered
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcMarkAllMessagesAsDeliveredData} opts.gcMarkAllMessagesAsDeliveredData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcMarkAllMessagesAsDeliveredResponse} and HTTP response
     */

  }, {
    key: "gcMarkAllMessagesAsDeliveredWithHttpInfo",
    value: function gcMarkAllMessagesAsDeliveredWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcMarkAllMessagesAsDeliveredData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcMarkAllMessagesAsDelivered");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcMarkAllMessagesAsDelivered");
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
      var returnType = _GcMarkAllMessagesAsDeliveredResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/messages/mark_as_delivered', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Mark all messages as delivered
     * ## Mark all messages as delivered  Marks all messages in a group channel as delivered for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-delivered ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcMarkAllMessagesAsDeliveredData} opts.gcMarkAllMessagesAsDeliveredData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcMarkAllMessagesAsDeliveredResponse}
     */

  }, {
    key: "gcMarkAllMessagesAsDelivered",
    value: function gcMarkAllMessagesAsDelivered(apiToken, channelUrl, opts) {
      return this.gcMarkAllMessagesAsDeliveredWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mark all messages as read
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcMarkAllMessagesAsReadData} opts.gcMarkAllMessagesAsReadData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "gcMarkAllMessagesAsReadWithHttpInfo",
    value: function gcMarkAllMessagesAsReadWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['gcMarkAllMessagesAsReadData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcMarkAllMessagesAsRead");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling gcMarkAllMessagesAsRead");
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
      var returnType = Object;
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/messages/mark_as_read', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Mark all messages as read
     * ## Mark all messages as read  Marks all messages in a group channel as read for a given user. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-mark-all-messages-as-read ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/GcMarkAllMessagesAsReadData} opts.gcMarkAllMessagesAsReadData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "gcMarkAllMessagesAsRead",
    value: function gcMarkAllMessagesAsRead(apiToken, channelUrl, opts) {
      return this.gcMarkAllMessagesAsReadWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View number of each member's unread messages
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.userIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GcViewNumberOfEachMembersUnreadMessagesResponse} and HTTP response
     */

  }, {
    key: "gcViewNumberOfEachMembersUnreadMessagesWithHttpInfo",
    value: function gcViewNumberOfEachMembersUnreadMessagesWithHttpInfo(apiToken, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling gcViewNumberOfEachMembersUnreadMessages");
      } // verify the required parameter 'channelUrl' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GcViewNumberOfEachMembersUnreadMessagesResponse["default"];
      return this.apiClient.callApi('/v3/group_channels/{channel_url}/messages/unread_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View number of each member's unread messages
     * ## View number of each member's unread messages  Retrieves the total number of each member's unread messages in a group channel. This action is only applicable for users in a group channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-number-of-each-member-s-unread-messages ----------------------------
     * @param {String} apiToken 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {String} opts.userIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GcViewNumberOfEachMembersUnreadMessagesResponse}
     */

  }, {
    key: "gcViewNumberOfEachMembersUnreadMessages",
    value: function gcViewNumberOfEachMembersUnreadMessages(apiToken, channelUrl, opts) {
      return this.gcViewNumberOfEachMembersUnreadMessagesWithHttpInfo(apiToken, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List messages
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.messageTs 
     * @param {Number} opts.messageId 
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListMessagesResponse} and HTTP response
     */

  }, {
    key: "listMessagesWithHttpInfo",
    value: function listMessagesWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listMessages");
      } // verify the required parameter 'channelType' is set


      if (channelType === undefined || channelType === null) {
        throw new Error("Missing the required parameter 'channelType' when calling listMessages");
      } // verify the required parameter 'channelUrl' is set


      if (channelUrl === undefined || channelUrl === null) {
        throw new Error("Missing the required parameter 'channelUrl' when calling listMessages");
      }

      var pathParams = {
        'channel_type': channelType,
        'channel_url': channelUrl
      };
      var queryParams = {
        'message_ts': opts['messageTs'],
        'message_id': opts['messageId'],
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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListMessagesResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List messages
     * ## List messages  Retrieves a list of past messages of a channel.  > This message retrieval is one of Sendbird's [premium features](https://sendbird.com/docs/chat/v3/platform-api/guides/application#-3-sendbird-s-premium-features). Contact our [sales team](https://get.sendbird.com/talk-to-sales.html) for further assistance.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-messages ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the channel to retrieve a list of past messages.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.messageTs 
     * @param {Number} opts.messageId 
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessagesResponse}
     */

  }, {
    key: "listMessages",
    value: function listMessages(apiToken, channelType, channelUrl, opts) {
      return this.listMessagesWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List reactions of a message
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.listUsers 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListReactionsOfMessageResponse} and HTTP response
     */

  }, {
    key: "listReactionsOfMessageWithHttpInfo",
    value: function listReactionsOfMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listReactionsOfMessage");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListReactionsOfMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List reactions of a message
     * ## List reactions of a message  Retrieves a list of reactions made to a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-list-reactions-of-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to add a reaction to.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.listUsers 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListReactionsOfMessageResponse}
     */

  }, {
    key: "listReactionsOfMessage",
    value: function listReactionsOfMessage(apiToken, channelType, channelUrl, messageId, opts) {
      return this.listReactionsOfMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Remove extra data from a message
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "removeExtraDataFromMessageWithHttpInfo",
    value: function removeExtraDataFromMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling removeExtraDataFromMessage");
      } // verify the required parameter 'channelType' is set


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
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi')
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Remove extra data from a message
     * ## Remove extra data from a message  Removes specific items from a message by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-extra-data-from-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.keys 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "removeExtraDataFromMessage",
    value: function removeExtraDataFromMessage(apiToken, channelType, channelUrl, messageId, opts) {
      return this.removeExtraDataFromMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Remove a reaction from a message
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId 
     * @param {String} opts.reaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RemoveReactionFromAMessageResponse} and HTTP response
     */

  }, {
    key: "removeReactionFromAMessageWithHttpInfo",
    value: function removeReactionFromAMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling removeReactionFromAMessage");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoveReactionFromAMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/reactions', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Remove a reaction from a message
     * ## Remove a reaction from a message  Removes a specific reaction from a message.  > __Note__: Currently, this action is only available in group channels.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-remove-a-reaction-from-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId 
     * @param {String} opts.reaction 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RemoveReactionFromAMessageResponse}
     */

  }, {
    key: "removeReactionFromAMessage",
    value: function removeReactionFromAMessage(apiToken, channelType, channelUrl, messageId, opts) {
      return this.removeReactionFromAMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send a message
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/SendMessageData} opts.sendMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdMessageResponse} and HTTP response
     */

  }, {
    key: "sendMessageWithHttpInfo",
    value: function sendMessageWithHttpInfo(apiToken, channelType, channelUrl, opts) {
      opts = opts || {};
      var postBody = opts['sendMessageData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling sendMessage");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Send a message
     * ## Send a message  Sends a message to a channel. You can send a text message, a file message, and an admin message.  >__Note__: With Sendbird Chat SDKs and the platform API, any type of files in messages can be uploaded to Sendbird server.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-send-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {Object} opts Optional parameters
     * @param {module:model/SendMessageData} opts.sendMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdMessageResponse}
     */

  }, {
    key: "sendMessage",
    value: function sendMessage(apiToken, channelType, channelUrl, opts) {
      return this.sendMessageWithHttpInfo(apiToken, channelType, channelUrl, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Translate a message into other languages
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdMessageResponse} and HTTP response
     */

  }, {
    key: "translateMessageIntoOtherLanguagesWithHttpInfo",
    value: function translateMessageIntoOtherLanguagesWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling translateMessageIntoOtherLanguages");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/translation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Translate a message into other languages
     * ## Translate a message into other languages  Translates a message into specific languages. Only text messages of which type is MESG can be translated into other languages.  > __Note__: Message translation is powered by [Google Cloud Translation API recognition engine](https://cloud.google.com/translate/). Find language codes supported by the engine in the [Miscellaneous](https://sendbird.com/docs/chat/v3/platform-api/guides/Miscellaneous) page or visit the [Language Support](https://cloud.google.com/translate/docs/languages) for Google Cloud Translation.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-translate-a-message-into-other-languages ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdMessageResponse}
     */

  }, {
    key: "translateMessageIntoOtherLanguages",
    value: function translateMessageIntoOtherLanguages(apiToken, channelType, channelUrl, messageId, opts) {
      return this.translateMessageIntoOtherLanguagesWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update extra data in a message
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateExtraDataInMessageData} opts.updateExtraDataInMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateExtraDataInMessageResponse} and HTTP response
     */

  }, {
    key: "updateExtraDataInMessageWithHttpInfo",
    value: function updateExtraDataInMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = opts['updateExtraDataInMessageData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateExtraDataInMessage");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateExtraDataInMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}/sorted_metaarray', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update extra data in a message
     * ## Update extra data in a message  Updates the values of specific items by their keys.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-extra-data-in-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateExtraDataInMessageData} opts.updateExtraDataInMessageData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateExtraDataInMessageResponse}
     */

  }, {
    key: "updateExtraDataInMessage",
    value: function updateExtraDataInMessage(apiToken, channelType, channelUrl, messageId, opts) {
      return this.updateExtraDataInMessageWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a message
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMessageByIdData} opts.updateMessageByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdMessageResponse} and HTTP response
     */

  }, {
    key: "updateMessageByIdWithHttpInfo",
    value: function updateMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = opts['updateMessageByIdData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateMessageById");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a message
     * ## Update a message  Updates information on a message in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-update-a-message ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMessageByIdData} opts.updateMessageByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdMessageResponse}
     */

  }, {
    key: "updateMessageById",
    value: function updateMessageById(apiToken, channelType, channelUrl, messageId, opts) {
      return this.updateMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View a message
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withSortedMetaArray 
     * @param {Boolean} opts.withMetaArray 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdMessageResponse} and HTTP response
     */

  }, {
    key: "viewMessageByIdWithHttpInfo",
    value: function viewMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewMessageById");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendBirdMessageResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/{message_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View a message
     * ## View a message  Retrieves information on a message.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-a-message ----------------------------   `channel_type`      Type: string      Description: Specifies the type of the channel. Either open_channels or group_channels.  `channel_url`      Type: string      Description: Specifies the URL of the target channel.  `message_id`      Type: long      Description: Specifies the unique ID of the message to retrieve.
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @param {String} messageId 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withSortedMetaArray 
     * @param {Boolean} opts.withMetaArray 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdMessageResponse}
     */

  }, {
    key: "viewMessageById",
    value: function viewMessageById(apiToken, channelType, channelUrl, messageId, opts) {
      return this.viewMessageByIdWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * View total number of messages in a channel
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ViewTotalNumberOfMessagesInChannelResponse} and HTTP response
     */

  }, {
    key: "viewTotalNumberOfMessagesInChannelWithHttpInfo",
    value: function viewTotalNumberOfMessagesInChannelWithHttpInfo(apiToken, channelType, channelUrl) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling viewTotalNumberOfMessagesInChannel");
      } // verify the required parameter 'channelType' is set


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
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ViewTotalNumberOfMessagesInChannelResponse["default"];
      return this.apiClient.callApi('/v3/{channel_type}/{channel_url}/messages/total_count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * View total number of messages in a channel
     * ## View total number of messages in a channel  Retrieves the total number of messages in a channel.  https://sendbird.com/docs/chat/v3/platform-api/guides/messages#2-view-total-number-of-messages-in-a-channel ----------------------------
     * @param {String} apiToken 
     * @param {String} channelType 
     * @param {String} channelUrl 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ViewTotalNumberOfMessagesInChannelResponse}
     */

  }, {
    key: "viewTotalNumberOfMessagesInChannel",
    value: function viewTotalNumberOfMessagesInChannel(apiToken, channelType, channelUrl) {
      return this.viewTotalNumberOfMessagesInChannelWithHttpInfo(apiToken, channelType, channelUrl).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MessagesApi;
}();

exports["default"] = MessagesApi;