"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddEmojiCategoriesResponse = _interopRequireDefault(require("../model/AddEmojiCategoriesResponse"));

var _AddEmojisData = _interopRequireDefault(require("../model/AddEmojisData"));

var _AddEmojisResponse = _interopRequireDefault(require("../model/AddEmojisResponse"));

var _EnableReactionsData = _interopRequireDefault(require("../model/EnableReactionsData"));

var _EnableReactionsResponse = _interopRequireDefault(require("../model/EnableReactionsResponse"));

var _ListAllEmojisAndEmojiCategoriesResponse = _interopRequireDefault(require("../model/ListAllEmojisAndEmojiCategoriesResponse"));

var _ListEmojisResponse = _interopRequireDefault(require("../model/ListEmojisResponse"));

var _SendBirdEmoji = _interopRequireDefault(require("../model/SendBirdEmoji"));

var _SendBirdEmojiCategory = _interopRequireDefault(require("../model/SendBirdEmojiCategory"));

var _UpdateEmojiCategoryUrlByIdData = _interopRequireDefault(require("../model/UpdateEmojiCategoryUrlByIdData"));

var _UpdateEmojiUrlByKeyData = _interopRequireDefault(require("../model/UpdateEmojiUrlByKeyData"));

var _UseDefaultEmojisData = _interopRequireDefault(require("../model/UseDefaultEmojisData"));

var _UseDefaultEmojisResponse = _interopRequireDefault(require("../model/UseDefaultEmojisResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Emojis service.
* @module api/EmojisApi
* @version 1.0.1
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
   * Add emoji categories
   * ## Add emoji categories  Adds a list of one or more new emoji categories to the application.  https://sendbird.com/docs/chat/v3/platform-api/guides/emojis#2-add-emoji-categories
   * @param {String} apiToken 
   * @param {Object} opts Optional parameters
   * @param {Object.<String, Object>} opts.body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddEmojiCategoriesResponse} and HTTP response
   */


  _createClass(EmojisApi, [{
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
  }]);

  return EmojisApi;
}();

exports["default"] = EmojisApi;