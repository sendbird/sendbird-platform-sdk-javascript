"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChooseWhichEventsToSubscribeToData = _interopRequireDefault(require("../model/ChooseWhichEventsToSubscribeToData"));

var _ChooseWhichEventsToSubscribeToResponse = _interopRequireDefault(require("../model/ChooseWhichEventsToSubscribeToResponse"));

var _RetrieveListOfSubscribedEventsResponse = _interopRequireDefault(require("../model/RetrieveListOfSubscribedEventsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
   * Choose which events to subscribe to
   * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:model/ChooseWhichEventsToSubscribeToData} opts.chooseWhichEventsToSubscribeToData 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChooseWhichEventsToSubscribeToResponse} and HTTP response
   */


  _createClass(WebhooksApi, [{
    key: "chooseWhichEventsToSubscribeToWithHttpInfo",
    value: function chooseWhichEventsToSubscribeToWithHttpInfo(opts) {
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
      var returnType = _ChooseWhichEventsToSubscribeToResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/webhook', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Choose which events to subscribe to
     * ## Choose which events to subscribe to  Chooses which events for your webhook server to receive payloads for. By subscribing to specific events based on your own needs, you can control the number of HTTP requests to your webhook server.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-choose-which-events-to-subscribe-to
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {module:model/ChooseWhichEventsToSubscribeToData} opts.chooseWhichEventsToSubscribeToData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChooseWhichEventsToSubscribeToResponse}
     */

  }, {
    key: "chooseWhichEventsToSubscribeTo",
    value: function chooseWhichEventsToSubscribeTo(opts) {
      return this.chooseWhichEventsToSubscribeToWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Retrieve a list of subscribed events
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.displayAllWebhookCategories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveListOfSubscribedEventsResponse} and HTTP response
     */

  }, {
    key: "retrieveListOfSubscribedEventsWithHttpInfo",
    value: function retrieveListOfSubscribedEventsWithHttpInfo(opts) {
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
      var returnType = _RetrieveListOfSubscribedEventsResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings/webhook', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Retrieve a list of subscribed events
     * ## Retrieve a list of subscribed events  Retrieves a list of events for your webhook server to receive payloads for.  https://sendbird.com/docs/chat/v3/platform-api/guides/webhooks#2-retrieve-a-list-of-subscribed-events ----------------------------
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiToken 
     * @param {Boolean} opts.displayAllWebhookCategories 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveListOfSubscribedEventsResponse}
     */

  }, {
    key: "retrieveListOfSubscribedEvents",
    value: function retrieveListOfSubscribedEvents(opts) {
      return this.retrieveListOfSubscribedEventsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;