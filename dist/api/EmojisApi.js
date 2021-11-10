"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddEmojisData = _interopRequireDefault(require("../model/AddEmojisData"));

var _EnableReactionsData = _interopRequireDefault(require("../model/EnableReactionsData"));

var _UpdateEmojiCategoryUrlByIdData = _interopRequireDefault(require("../model/UpdateEmojiCategoryUrlByIdData"));

var _UpdateEmojiUrlByKeyData = _interopRequireDefault(require("../model/UpdateEmojiUrlByKeyData"));

var _UseDefaultEmojisData = _interopRequireDefault(require("../model/UseDefaultEmojisData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Emojis service.
* @module api/EmojisApi
* @version 1.0.0
*/
var EmojisApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmojisApi. 
  * @alias module:api/EmojisApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmojisApi(apiClient) {
    _classCallCheck(this, EmojisApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addEmojiCategories operation.
   * @callback module:api/EmojisApi~addEmojiCategoriesCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add emoji categories
   * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {Object} opts.body 
   * @param {module:api/EmojisApi~addEmojiCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(EmojisApi, [{
    key: "addEmojiCategories",
    value: function addEmojiCategories(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
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
      return this.apiClient.callApi('/v3/emoji_categories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addEmojis operation.
     * @callback module:api/EmojisApi~addEmojisCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add emojis
     * ## Add emojis  Adds a list of one or more new emojis to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emojis
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/AddEmojisData} opts.addEmojisData 
     * @param {module:api/EmojisApi~addEmojisCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "addEmojis",
    value: function addEmojis(opts, callback) {
      opts = opts || {};
      var postBody = opts['addEmojisData'];
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
      return this.apiClient.callApi('/v3/emojis', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEmojiByKey operation.
     * @callback module:api/EmojisApi~deleteEmojiByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an emoji
     * ## Delete an emoji  Deletes an emoji from the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji ----------------------------
     * @param {String} emojiKey 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/EmojisApi~deleteEmojiByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEmojiByKey",
    value: function deleteEmojiByKey(emojiKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'emojiKey' is set

      if (emojiKey === undefined || emojiKey === null) {
        throw new Error("Missing the required parameter 'emojiKey' when calling deleteEmojiByKey");
      }

      var pathParams = {
        'emoji_key': emojiKey
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
      return this.apiClient.callApi('/v3/emojis/{emoji_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEmojiCategoryById operation.
     * @callback module:api/EmojisApi~deleteEmojiCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an emoji category
     * ## Delete an emoji category  Deletes an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-delete-an-emoji-category ----------------------------
     * @param {String} emojiCategoryId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/EmojisApi~deleteEmojiCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEmojiCategoryById",
    value: function deleteEmojiCategoryById(emojiCategoryId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'emojiCategoryId' is set

      if (emojiCategoryId === undefined || emojiCategoryId === null) {
        throw new Error("Missing the required parameter 'emojiCategoryId' when calling deleteEmojiCategoryById");
      }

      var pathParams = {
        'emoji_category_id': emojiCategoryId
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
      return this.apiClient.callApi('/v3/emoji_categories/{emoji_category_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the enableReactions operation.
     * @callback module:api/EmojisApi~enableReactionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable reactions
     * ## Enable reactions  Turn on or off reactions in a Sendbird application.  > __Note__: This action also allows reactions in UIKit.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-enable-reactions
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/EnableReactionsData} opts.enableReactionsData 
     * @param {module:api/EmojisApi~enableReactionsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "enableReactions",
    value: function enableReactions(opts, callback) {
      opts = opts || {};
      var postBody = opts['enableReactionsData'];
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
      return this.apiClient.callApi('/v3/applications/settings/reactions', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEmojiByKey operation.
     * @callback module:api/EmojisApi~getEmojiByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an emoji
     * ## Get an emoji  Retrieves an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji ----------------------------
     * @param {String} emojiKey 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/EmojisApi~getEmojiByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getEmojiByKey",
    value: function getEmojiByKey(emojiKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'emojiKey' is set

      if (emojiKey === undefined || emojiKey === null) {
        throw new Error("Missing the required parameter 'emojiKey' when calling getEmojiByKey");
      }

      var pathParams = {
        'emoji_key': emojiKey
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
      return this.apiClient.callApi('/v3/emojis/{emoji_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEmojiCategoryById operation.
     * @callback module:api/EmojisApi~getEmojiCategoryByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an emoji category
     * ## Get an emoji category  Retrieves an emoji category with the specified ID, including its emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-get-an-emoji-category ----------------------------   `emoji_category_id`      Type: int      Description: Specifies the unique ID of the emoji category to retrieve.
     * @param {String} emojiCategoryId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/EmojisApi~getEmojiCategoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getEmojiCategoryById",
    value: function getEmojiCategoryById(emojiCategoryId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'emojiCategoryId' is set

      if (emojiCategoryId === undefined || emojiCategoryId === null) {
        throw new Error("Missing the required parameter 'emojiCategoryId' when calling getEmojiCategoryById");
      }

      var pathParams = {
        'emoji_category_id': emojiCategoryId
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
      return this.apiClient.callApi('/v3/emoji_categories/{emoji_category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listAllEmojisAndEmojiCategories operation.
     * @callback module:api/EmojisApi~listAllEmojisAndEmojiCategoriesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all emojis and emoji categories
     * ## List all emojis and emoji categories  Retrieves a list of all emoji categories registered to the application, including their emojis.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-all-emojis-and-emoji-categories
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/EmojisApi~listAllEmojisAndEmojiCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listAllEmojisAndEmojiCategories",
    value: function listAllEmojisAndEmojiCategories(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/emoji_categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the listEmojis operation.
     * @callback module:api/EmojisApi~listEmojisCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List emojis
     * ## List emojis  Retrieves a list of all emojis registered to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-list-emojis
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:api/EmojisApi~listEmojisCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "listEmojis",
    value: function listEmojis(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/emojis', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateEmojiCategoryUrlById operation.
     * @callback module:api/EmojisApi~updateEmojiCategoryUrlByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an emoji category URL
     * ## Update an emoji category URL  Updates the URL of an emoji category with the specified ID.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-category-url ----------------------------
     * @param {String} emojiCategoryId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateEmojiCategoryUrlByIdData} opts.updateEmojiCategoryUrlByIdData 
     * @param {module:api/EmojisApi~updateEmojiCategoryUrlByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateEmojiCategoryUrlById",
    value: function updateEmojiCategoryUrlById(emojiCategoryId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateEmojiCategoryUrlByIdData']; // verify the required parameter 'emojiCategoryId' is set

      if (emojiCategoryId === undefined || emojiCategoryId === null) {
        throw new Error("Missing the required parameter 'emojiCategoryId' when calling updateEmojiCategoryUrlById");
      }

      var pathParams = {
        'emoji_category_id': emojiCategoryId
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
      return this.apiClient.callApi('/v3/emoji_categories/{emoji_category_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateEmojiUrlByKey operation.
     * @callback module:api/EmojisApi~updateEmojiUrlByKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an emoji URL
     * ## Update an emoji URL  Updates the image URL of an emoji with the specified key.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-update-an-emoji-url ----------------------------
     * @param {String} emojiKey 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UpdateEmojiUrlByKeyData} opts.updateEmojiUrlByKeyData 
     * @param {module:api/EmojisApi~updateEmojiUrlByKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateEmojiUrlByKey",
    value: function updateEmojiUrlByKey(emojiKey, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateEmojiUrlByKeyData']; // verify the required parameter 'emojiKey' is set

      if (emojiKey === undefined || emojiKey === null) {
        throw new Error("Missing the required parameter 'emojiKey' when calling updateEmojiUrlByKey");
      }

      var pathParams = {
        'emoji_key': emojiKey
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
      return this.apiClient.callApi('/v3/emojis/{emoji_key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the useDefaultEmojis operation.
     * @callback module:api/EmojisApi~useDefaultEmojisCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Use default emojis
     * ## Use default emojis  Determines whether to use the 7 default emojis initially provided.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-use-default-emojis
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/UseDefaultEmojisData} opts.useDefaultEmojisData 
     * @param {module:api/EmojisApi~useDefaultEmojisCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "useDefaultEmojis",
    value: function useDefaultEmojis(opts, callback) {
      opts = opts || {};
      var postBody = opts['useDefaultEmojisData'];
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
      return this.apiClient.callApi('/v3/applications/settings/use_default_emoji', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmojisApi;
}();

exports["default"] = EmojisApi;