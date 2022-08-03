"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddEmojiCategoriesResponse = _interopRequireDefault(require("../model/AddEmojiCategoriesResponse"));

var _AddEmojisData = _interopRequireDefault(require("../model/AddEmojisData"));

var _AddEmojisResponse = _interopRequireDefault(require("../model/AddEmojisResponse"));

var _AddExtraDataToMessageData = _interopRequireDefault(require("../model/AddExtraDataToMessageData"));

var _AddExtraDataToMessageResponse = _interopRequireDefault(require("../model/AddExtraDataToMessageResponse"));

var _AddReactionToAMessageData = _interopRequireDefault(require("../model/AddReactionToAMessageData"));

var _AddReactionToAMessageResponse = _interopRequireDefault(require("../model/AddReactionToAMessageResponse"));

var _EnableReactionsData = _interopRequireDefault(require("../model/EnableReactionsData"));

var _EnableReactionsResponse = _interopRequireDefault(require("../model/EnableReactionsResponse"));

var _GcMarkAllMessagesAsDeliveredData = _interopRequireDefault(require("../model/GcMarkAllMessagesAsDeliveredData"));

var _GcMarkAllMessagesAsDeliveredResponse = _interopRequireDefault(require("../model/GcMarkAllMessagesAsDeliveredResponse"));

var _GcMarkAllMessagesAsReadData = _interopRequireDefault(require("../model/GcMarkAllMessagesAsReadData"));

var _GcViewNumberOfEachMembersUnreadMessagesResponse = _interopRequireDefault(require("../model/GcViewNumberOfEachMembersUnreadMessagesResponse"));

var _GetStatisticsDailyResponse = _interopRequireDefault(require("../model/GetStatisticsDailyResponse"));

var _GetStatisticsMonthlyResponse = _interopRequireDefault(require("../model/GetStatisticsMonthlyResponse"));

var _GetStatisticsResponse = _interopRequireDefault(require("../model/GetStatisticsResponse"));

var _ListAllEmojisAndEmojiCategoriesResponse = _interopRequireDefault(require("../model/ListAllEmojisAndEmojiCategoriesResponse"));

var _ListAnnouncementGroupsResponse = _interopRequireDefault(require("../model/ListAnnouncementGroupsResponse"));

var _ListAnnouncementsResponse = _interopRequireDefault(require("../model/ListAnnouncementsResponse"));

var _ListEmojisResponse = _interopRequireDefault(require("../model/ListEmojisResponse"));

var _ListMessagesResponse = _interopRequireDefault(require("../model/ListMessagesResponse"));

var _ListReactionsOfMessageResponse = _interopRequireDefault(require("../model/ListReactionsOfMessageResponse"));

var _RemoveReactionFromAMessageResponse = _interopRequireDefault(require("../model/RemoveReactionFromAMessageResponse"));

var _ScheduleAnnouncementData = _interopRequireDefault(require("../model/ScheduleAnnouncementData"));

var _ScheduleAnnouncementResponse = _interopRequireDefault(require("../model/ScheduleAnnouncementResponse"));

var _SendBirdEmoji = _interopRequireDefault(require("../model/SendBirdEmoji"));

var _SendBirdEmojiCategory = _interopRequireDefault(require("../model/SendBirdEmojiCategory"));

var _SendBirdMessageResponse = _interopRequireDefault(require("../model/SendBirdMessageResponse"));

var _SendMessageData = _interopRequireDefault(require("../model/SendMessageData"));

var _TranslateMessageIntoOtherLanguagesData = _interopRequireDefault(require("../model/TranslateMessageIntoOtherLanguagesData"));

var _UpdateAnnouncementByIdData = _interopRequireDefault(require("../model/UpdateAnnouncementByIdData"));

var _UpdateAnnouncementByIdResponse = _interopRequireDefault(require("../model/UpdateAnnouncementByIdResponse"));

var _UpdateEmojiCategoryUrlByIdData = _interopRequireDefault(require("../model/UpdateEmojiCategoryUrlByIdData"));

var _UpdateEmojiUrlByKeyData = _interopRequireDefault(require("../model/UpdateEmojiUrlByKeyData"));

var _UpdateExtraDataInMessageData = _interopRequireDefault(require("../model/UpdateExtraDataInMessageData"));

var _UpdateExtraDataInMessageResponse = _interopRequireDefault(require("../model/UpdateExtraDataInMessageResponse"));

var _UpdateMessageByIdData = _interopRequireDefault(require("../model/UpdateMessageByIdData"));

var _UseDefaultEmojisData = _interopRequireDefault(require("../model/UseDefaultEmojisData"));

var _UseDefaultEmojisResponse = _interopRequireDefault(require("../model/UseDefaultEmojisResponse"));

var _ViewTotalNumberOfMessagesInChannelResponse = _interopRequireDefault(require("../model/ViewTotalNumberOfMessagesInChannelResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Message service.
* @module api/MessageApi
* @version 1.0.7
*/
var MessageApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MessageApi. 
  * @alias module:api/MessageApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MessageApi(apiClient) {
    _classCallCheck(this, MessageApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Add emoji categories
   * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
   * @param {String} apiToken 
   * @param {Object} opts Optional parameters
   * @param {Object.<String, Object>} opts.body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddEmojiCategoriesResponse} and HTTP response
   */


  _createClass(MessageApi, [{
    key: "addEmojiCategoriesWithHttpInfo",
    value: function addEmojiCategoriesWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addEmojiCategories");
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
      var returnType = _AddEmojiCategoriesResponse["default"];
      return this.apiClient.callApi('/v3/emoji_categories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add emoji categories
     * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddEmojiCategoriesResponse}
     */

  }, {
    key: "addEmojiCategories",
    value: function addEmojiCategories(apiToken, opts) {
      return this.addEmojiCategoriesWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add emojis
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddEmojisData} opts.addEmojisData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddEmojisResponse} and HTTP response
     */

  }, {
    key: "addEmojisWithHttpInfo",
    value: function addEmojisWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['addEmojisData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling addEmojis");
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
      var returnType = _AddEmojisResponse["default"];
      return this.apiClient.callApi('/v3/emojis', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add emojis
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddEmojisData} opts.addEmojisData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddEmojisResponse}
     */

  }, {
    key: "addEmojis",
    value: function addEmojis(apiToken, opts) {
      return this.addEmojisWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
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

  }, {
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
     * Delete an emoji
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteEmojiByKeyWithHttpInfo",
    value: function deleteEmojiByKeyWithHttpInfo(apiToken, emojiKey) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteEmojiByKey");
      } // verify the required parameter 'emojiKey' is set


      if (emojiKey === undefined || emojiKey === null) {
        throw new Error("Missing the required parameter 'emojiKey' when calling deleteEmojiByKey");
      }

      var pathParams = {
        'emoji_key': emojiKey
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/emojis/{emoji_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an emoji
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteEmojiByKey",
    value: function deleteEmojiByKey(apiToken, emojiKey) {
      return this.deleteEmojiByKeyWithHttpInfo(apiToken, emojiKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an emoji category
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiCategoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteEmojiCategoryByIdWithHttpInfo",
    value: function deleteEmojiCategoryByIdWithHttpInfo(apiToken, emojiCategoryId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling deleteEmojiCategoryById");
      } // verify the required parameter 'emojiCategoryId' is set


      if (emojiCategoryId === undefined || emojiCategoryId === null) {
        throw new Error("Missing the required parameter 'emojiCategoryId' when calling deleteEmojiCategoryById");
      }

      var pathParams = {
        'emoji_category_id': emojiCategoryId
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
      return this.apiClient.callApi('/v3/emoji_categories/{emoji_category_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an emoji category
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiCategoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteEmojiCategoryById",
    value: function deleteEmojiCategoryById(apiToken, emojiCategoryId) {
      return this.deleteEmojiCategoryByIdWithHttpInfo(apiToken, emojiCategoryId).then(function (response_and_data) {
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
     * Enable reactions
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnableReactionsData} opts.enableReactionsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EnableReactionsResponse} and HTTP response
     */

  }, {
    key: "enableReactionsWithHttpInfo",
    value: function enableReactionsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['enableReactionsData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling enableReactions");
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
      var returnType = _EnableReactionsResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/reactions', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Enable reactions
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/EnableReactionsData} opts.enableReactionsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EnableReactionsResponse}
     */

  }, {
    key: "enableReactions",
    value: function enableReactions(apiToken, opts) {
      return this.enableReactionsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
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
     * Get an emoji
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdEmoji} and HTTP response
     */

  }, {
    key: "getEmojiByKeyWithHttpInfo",
    value: function getEmojiByKeyWithHttpInfo(apiToken, emojiKey) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getEmojiByKey");
      } // verify the required parameter 'emojiKey' is set


      if (emojiKey === undefined || emojiKey === null) {
        throw new Error("Missing the required parameter 'emojiKey' when calling getEmojiByKey");
      }

      var pathParams = {
        'emoji_key': emojiKey
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendBirdEmoji["default"];
      return this.apiClient.callApi('/v3/emojis/{emoji_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an emoji
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdEmoji}
     */

  }, {
    key: "getEmojiByKey",
    value: function getEmojiByKey(apiToken, emojiKey) {
      return this.getEmojiByKeyWithHttpInfo(apiToken, emojiKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an emoji category
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * @param {String} apiToken 
     * @param {String} emojiCategoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdEmojiCategory} and HTTP response
     */

  }, {
    key: "getEmojiCategoryByIdWithHttpInfo",
    value: function getEmojiCategoryByIdWithHttpInfo(apiToken, emojiCategoryId) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getEmojiCategoryById");
      } // verify the required parameter 'emojiCategoryId' is set


      if (emojiCategoryId === undefined || emojiCategoryId === null) {
        throw new Error("Missing the required parameter 'emojiCategoryId' when calling getEmojiCategoryById");
      }

      var pathParams = {
        'emoji_category_id': emojiCategoryId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SendBirdEmojiCategory["default"];
      return this.apiClient.callApi('/v3/emoji_categories/{emoji_category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an emoji category
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * @param {String} apiToken 
     * @param {String} emojiCategoryId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdEmojiCategory}
     */

  }, {
    key: "getEmojiCategoryById",
    value: function getEmojiCategoryById(apiToken, emojiCategoryId) {
      return this.getEmojiCategoryByIdWithHttpInfo(apiToken, emojiCategoryId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsResponse} and HTTP response
     */

  }, {
    key: "getStatisticsWithHttpInfo",
    value: function getStatisticsWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatistics");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStatisticsResponse["default"];
      return this.apiClient.callApi('/v3/announcement_stats/weekly', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get statistics - weekly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsResponse}
     */

  }, {
    key: "getStatistics",
    value: function getStatistics(apiToken) {
      return this.getStatisticsWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get statistics - daily
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @param {String} startDate 
     * @param {String} endDate 
     * @param {String} startWeek 
     * @param {String} endWeek 
     * @param {String} startMonth 
     * @param {String} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsDailyResponse} and HTTP response
     */

  }, {
    key: "getStatisticsDailyWithHttpInfo",
    value: function getStatisticsDailyWithHttpInfo(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatisticsDaily");
      } // verify the required parameter 'startDate' is set


      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getStatisticsDaily");
      } // verify the required parameter 'endDate' is set


      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getStatisticsDaily");
      } // verify the required parameter 'startWeek' is set


      if (startWeek === undefined || startWeek === null) {
        throw new Error("Missing the required parameter 'startWeek' when calling getStatisticsDaily");
      } // verify the required parameter 'endWeek' is set


      if (endWeek === undefined || endWeek === null) {
        throw new Error("Missing the required parameter 'endWeek' when calling getStatisticsDaily");
      } // verify the required parameter 'startMonth' is set


      if (startMonth === undefined || startMonth === null) {
        throw new Error("Missing the required parameter 'startMonth' when calling getStatisticsDaily");
      } // verify the required parameter 'endMonth' is set


      if (endMonth === undefined || endMonth === null) {
        throw new Error("Missing the required parameter 'endMonth' when calling getStatisticsDaily");
      }

      var pathParams = {};
      var queryParams = {
        'start_date': startDate,
        'end_date': endDate,
        'start_week': startWeek,
        'end_week': endWeek,
        'start_month': startMonth,
        'end_month': endMonth,
        'announcement_group': opts['announcementGroup']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStatisticsDailyResponse["default"];
      return this.apiClient.callApi('/v3/announcement_stats/daily', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get statistics - daily
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @param {String} startDate 
     * @param {String} endDate 
     * @param {String} startWeek 
     * @param {String} endWeek 
     * @param {String} startMonth 
     * @param {String} endMonth 
     * @param {Object} opts Optional parameters
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsDailyResponse}
     */

  }, {
    key: "getStatisticsDaily",
    value: function getStatisticsDaily(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts) {
      return this.getStatisticsDailyWithHttpInfo(apiToken, startDate, endDate, startWeek, endWeek, startMonth, endMonth, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticsMonthlyResponse} and HTTP response
     */

  }, {
    key: "getStatisticsMonthlyWithHttpInfo",
    value: function getStatisticsMonthlyWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling getStatisticsMonthly");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetStatisticsMonthlyResponse["default"];
      return this.apiClient.callApi('/v3/announcement_stats/monthly', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get statistics - monthly
     * ## Get statistics  Retrieves the daily, weekly or monthly statistics of an announcement or an announcement group.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-get-statistics ----------------------------
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticsMonthlyResponse}
     */

  }, {
    key: "getStatisticsMonthly",
    value: function getStatisticsMonthly(apiToken) {
      return this.getStatisticsMonthlyWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all emojis and emoji categories
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAllEmojisAndEmojiCategoriesResponse} and HTTP response
     */

  }, {
    key: "listAllEmojisAndEmojiCategoriesWithHttpInfo",
    value: function listAllEmojisAndEmojiCategoriesWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listAllEmojisAndEmojiCategories");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAllEmojisAndEmojiCategoriesResponse["default"];
      return this.apiClient.callApi('/v3/emoji_categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all emojis and emoji categories
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAllEmojisAndEmojiCategoriesResponse}
     */

  }, {
    key: "listAllEmojisAndEmojiCategories",
    value: function listAllEmojisAndEmojiCategories(apiToken) {
      return this.listAllEmojisAndEmojiCategoriesWithHttpInfo(apiToken).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAnnouncementGroupsResponse} and HTTP response
     */

  }, {
    key: "listAnnouncementGroupsWithHttpInfo",
    value: function listAnnouncementGroupsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listAnnouncementGroups");
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
      var returnType = _ListAnnouncementGroupsResponse["default"];
      return this.apiClient.callApi('/v3/announcement_group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List announcement groups
     * ## List announcement groups  Retrieves a list of announcement groups.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcement-groups ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAnnouncementGroupsResponse}
     */

  }, {
    key: "listAnnouncementGroups",
    value: function listAnnouncementGroups(apiToken, opts) {
      return this.listAnnouncementGroupsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List announcements
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.status 
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAnnouncementsResponse} and HTTP response
     */

  }, {
    key: "listAnnouncementsWithHttpInfo",
    value: function listAnnouncementsWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listAnnouncements");
      }

      var pathParams = {};
      var queryParams = {
        'token': opts['token'],
        'limit': opts['limit'],
        'order': opts['order'],
        'status': opts['status'],
        'announcement_group': opts['announcementGroup']
      };
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAnnouncementsResponse["default"];
      return this.apiClient.callApi('/v3/announcements', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List announcements
     * ## List announcements  Retrieves a list of announcements.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-list-announcements ----------------------------
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.status 
     * @param {String} opts.announcementGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAnnouncementsResponse}
     */

  }, {
    key: "listAnnouncements",
    value: function listAnnouncements(apiToken, opts) {
      return this.listAnnouncementsWithHttpInfo(apiToken, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List emojis
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListEmojisResponse} and HTTP response
     */

  }, {
    key: "listEmojisWithHttpInfo",
    value: function listEmojisWithHttpInfo(apiToken) {
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling listEmojis");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListEmojisResponse["default"];
      return this.apiClient.callApi('/v3/emojis', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List emojis
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * @param {String} apiToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListEmojisResponse}
     */

  }, {
    key: "listEmojis",
    value: function listEmojis(apiToken) {
      return this.listEmojisWithHttpInfo(apiToken).then(function (response_and_data) {
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
     * Migrate messages
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------
     * @param {String} apiToken 
     * @param {String} targetChannelUrl 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "migrateMessagesByUrlWithHttpInfo",
    value: function migrateMessagesByUrlWithHttpInfo(apiToken, targetChannelUrl, opts) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling migrateMessagesByUrl");
      } // verify the required parameter 'targetChannelUrl' is set


      if (targetChannelUrl === undefined || targetChannelUrl === null) {
        throw new Error("Missing the required parameter 'targetChannelUrl' when calling migrateMessagesByUrl");
      }

      var pathParams = {
        'target_channel_url': targetChannelUrl
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/migration/{target_channel_url}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Migrate messages
     * ## Migrate messages  Using our migration API, you can migrate the messages from another system into a Sendbird system's [channel](https://sendbird.com/docs/chat/v3/platform-api/guides/channel-types) which consists of users, messages, and other chat-related data.  > To turn on this feature, [contact our support team](https://dashboard.sendbird.com/settings/contact_us).  There are three things to do in advance before the migration. Follow the instructions below:  1. Register the users of your current chat solution to your Sendbird application. You can migrate the users into the Sendbird system using the [user creation API](https://sendbird.com/docs/chat/v3/platform-api/guides/user#2-create-a-user). 2. Create either an [open](https://sendbird.com/docs/chat/v3/platform-api/guides/open-channel#2-create-a-channel) or a [group](https://sendbird.com/docs/chat/v3/platform-api/guides/group-channel#2-create-a-channel) channel to migrate the messages of your chat solution. The Sendbird system doesn't create a channel for your migration automatically. 3. The maximum number of migrated messages per call is 100. To avoid the failure during your migration, you must adjust the number of messages to process at once via the API.  https://sendbird.com/docs/chat/v3/platform-api/guides/migration#2-migrate-messages ----------------------------
     * @param {String} apiToken 
     * @param {String} targetChannelUrl 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, Object>} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "migrateMessagesByUrl",
    value: function migrateMessagesByUrl(apiToken, targetChannelUrl, opts) {
      return this.migrateMessagesByUrlWithHttpInfo(apiToken, targetChannelUrl, opts).then(function (response_and_data) {
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
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ScheduleAnnouncementResponse} and HTTP response
     */

  }, {
    key: "scheduleAnnouncementWithHttpInfo",
    value: function scheduleAnnouncementWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['scheduleAnnouncementData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling scheduleAnnouncement");
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
      var returnType = _ScheduleAnnouncementResponse["default"];
      return this.apiClient.callApi('/v3/announcements', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Schedule an announcement
     * ## Schedule an announcement  Schedules a new announcement. You can also schedule an announcement in the [Sendbird Dashboard](https://dashboard.sendbird.com).  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-schedule-an-announcement
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/ScheduleAnnouncementData} opts.scheduleAnnouncementData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ScheduleAnnouncementResponse}
     */

  }, {
    key: "scheduleAnnouncement",
    value: function scheduleAnnouncement(apiToken, opts) {
      return this.scheduleAnnouncementWithHttpInfo(apiToken, opts).then(function (response_and_data) {
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
     * @param {module:model/TranslateMessageIntoOtherLanguagesData} opts.translateMessageIntoOtherLanguagesData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdMessageResponse} and HTTP response
     */

  }, {
    key: "translateMessageIntoOtherLanguagesWithHttpInfo",
    value: function translateMessageIntoOtherLanguagesWithHttpInfo(apiToken, channelType, channelUrl, messageId, opts) {
      opts = opts || {};
      var postBody = opts['translateMessageIntoOtherLanguagesData']; // verify the required parameter 'apiToken' is set

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
     * @param {module:model/TranslateMessageIntoOtherLanguagesData} opts.translateMessageIntoOtherLanguagesData 
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
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateAnnouncementByIdResponse} and HTTP response
     */

  }, {
    key: "updateAnnouncementByIdWithHttpInfo",
    value: function updateAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts) {
      opts = opts || {};
      var postBody = opts['updateAnnouncementByIdData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateAnnouncementById");
      } // verify the required parameter 'uniqueId' is set


      if (uniqueId === undefined || uniqueId === null) {
        throw new Error("Missing the required parameter 'uniqueId' when calling updateAnnouncementById");
      }

      var pathParams = {
        'unique_id': uniqueId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateAnnouncementByIdResponse["default"];
      return this.apiClient.callApi('/v3/announcements/{unique_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an announcement
     * ## Update an announcement  Updates information of a specific announcement before it starts or changes the status of a specific announcement after it starts. For the 2 different applications, refer to the request body below.  >__Note__: Updating information of an announcement is possible only when the announcement status is scheduled, indicating it hasn't started yet.  https://sendbird.com/docs/chat/v3/platform-api/guides/announcements#2-update-an-announcement ----------------------------
     * @param {String} apiToken 
     * @param {String} uniqueId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateAnnouncementByIdData} opts.updateAnnouncementByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateAnnouncementByIdResponse}
     */

  }, {
    key: "updateAnnouncementById",
    value: function updateAnnouncementById(apiToken, uniqueId, opts) {
      return this.updateAnnouncementByIdWithHttpInfo(apiToken, uniqueId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an emoji category URL
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiCategoryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEmojiCategoryUrlByIdData} opts.updateEmojiCategoryUrlByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdEmojiCategory} and HTTP response
     */

  }, {
    key: "updateEmojiCategoryUrlByIdWithHttpInfo",
    value: function updateEmojiCategoryUrlByIdWithHttpInfo(apiToken, emojiCategoryId, opts) {
      opts = opts || {};
      var postBody = opts['updateEmojiCategoryUrlByIdData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateEmojiCategoryUrlById");
      } // verify the required parameter 'emojiCategoryId' is set


      if (emojiCategoryId === undefined || emojiCategoryId === null) {
        throw new Error("Missing the required parameter 'emojiCategoryId' when calling updateEmojiCategoryUrlById");
      }

      var pathParams = {
        'emoji_category_id': emojiCategoryId
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdEmojiCategory["default"];
      return this.apiClient.callApi('/v3/emoji_categories/{emoji_category_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an emoji category URL
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiCategoryId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEmojiCategoryUrlByIdData} opts.updateEmojiCategoryUrlByIdData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdEmojiCategory}
     */

  }, {
    key: "updateEmojiCategoryUrlById",
    value: function updateEmojiCategoryUrlById(apiToken, emojiCategoryId, opts) {
      return this.updateEmojiCategoryUrlByIdWithHttpInfo(apiToken, emojiCategoryId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update an emoji URL
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEmojiUrlByKeyData} opts.updateEmojiUrlByKeyData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SendBirdEmoji} and HTTP response
     */

  }, {
    key: "updateEmojiUrlByKeyWithHttpInfo",
    value: function updateEmojiUrlByKeyWithHttpInfo(apiToken, emojiKey, opts) {
      opts = opts || {};
      var postBody = opts['updateEmojiUrlByKeyData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling updateEmojiUrlByKey");
      } // verify the required parameter 'emojiKey' is set


      if (emojiKey === undefined || emojiKey === null) {
        throw new Error("Missing the required parameter 'emojiKey' when calling updateEmojiUrlByKey");
      }

      var pathParams = {
        'emoji_key': emojiKey
      };
      var queryParams = {};
      var headerParams = {
        'Api-Token': apiToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SendBirdEmoji["default"];
      return this.apiClient.callApi('/v3/emojis/{emoji_key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update an emoji URL
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * @param {String} apiToken 
     * @param {String} emojiKey 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEmojiUrlByKeyData} opts.updateEmojiUrlByKeyData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SendBirdEmoji}
     */

  }, {
    key: "updateEmojiUrlByKey",
    value: function updateEmojiUrlByKey(apiToken, emojiKey, opts) {
      return this.updateEmojiUrlByKeyWithHttpInfo(apiToken, emojiKey, opts).then(function (response_and_data) {
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
     * Use default emojis
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/UseDefaultEmojisData} opts.useDefaultEmojisData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UseDefaultEmojisResponse} and HTTP response
     */

  }, {
    key: "useDefaultEmojisWithHttpInfo",
    value: function useDefaultEmojisWithHttpInfo(apiToken, opts) {
      opts = opts || {};
      var postBody = opts['useDefaultEmojisData']; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling useDefaultEmojis");
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
      var returnType = _UseDefaultEmojisResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/use_default_emoji', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Use default emojis
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * @param {String} apiToken 
     * @param {Object} opts Optional parameters
     * @param {module:model/UseDefaultEmojisData} opts.useDefaultEmojisData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UseDefaultEmojisResponse}
     */

  }, {
    key: "useDefaultEmojis",
    value: function useDefaultEmojis(apiToken, opts) {
      return this.useDefaultEmojisWithHttpInfo(apiToken, opts).then(function (response_and_data) {
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

  return MessageApi;
}();

exports["default"] = MessageApi;