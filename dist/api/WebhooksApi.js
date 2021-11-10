"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChooseWhichEventsToSubscribeToData = _interopRequireDefault(require("../model/ChooseWhichEventsToSubscribeToData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
var WebhooksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhooksApi. 
  * @alias module:api/WebhooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhooksApi(apiClient) {
    _classCallCheck(this, WebhooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the chooseWhichEventsToSubscribeTo operation.
   * @callback module:api/WebhooksApi~chooseWhichEventsToSubscribeToCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Choose which events to subscribe to
   * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/ChooseWhichEventsToSubscribeToData} opts.chooseWhichEventsToSubscribeToData 
   * @param {module:api/WebhooksApi~chooseWhichEventsToSubscribeToCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(WebhooksApi, [{
    key: "chooseWhichEventsToSubscribeTo",
    value: function chooseWhichEventsToSubscribeTo(opts, callback) {
      opts = opts || {};
      var postBody = opts['chooseWhichEventsToSubscribeToData'];
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
      return this.apiClient.callApi('/v3/applications/settings/webhook', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the retrieveListOfSubscribedEvents operation.
     * @callback module:api/WebhooksApi~retrieveListOfSubscribedEventsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of subscribed events
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.displayAllWebhookCategories 
     * @param {module:api/WebhooksApi~retrieveListOfSubscribedEventsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "retrieveListOfSubscribedEvents",
    value: function retrieveListOfSubscribedEvents(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'display_all_webhook_categories': opts['displayAllWebhookCategories']
      };
      var headerParams = {
        'Api-Token': opts['apiToken']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v3/applications/settings/webhook', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;