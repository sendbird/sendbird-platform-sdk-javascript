"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AdvancedAnalytics service.
* @module api/AdvancedAnalyticsApi
* @version 1.0.0
*/
var AdvancedAnalyticsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AdvancedAnalyticsApi. 
  * @alias module:api/AdvancedAnalyticsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AdvancedAnalyticsApi(apiClient) {
    _classCallCheck(this, AdvancedAnalyticsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the retrieveAdvancedAnalyticsMetrics operation.
   * @callback module:api/AdvancedAnalyticsApi~retrieveAdvancedAnalyticsMetricsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve Advanced analytics metrics
   * ## Retrieve Advanced analytics metrics  Retrieves Advanced analytics metrics based on the specified parameters. You can retrieve either daily or monthly metrics using the time_dimension parameter.  >__Note__: Daily metrics are calculated and updated every three hours, starting at 1 a.m. in UTC. Meanwhile, monthly metrics are calculated after the last day of the month.  https://sendbird.com/docs/chat/v3/platform-api/guides/advanced-analytics#2-retrieve-advanced-analytics-metrics ----------------------------
   * @param {Object} opts Optional parameters
   * @param {String} opts.apiToken 
   * @param {module:api/AdvancedAnalyticsApi~retrieveAdvancedAnalyticsMetricsCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(AdvancedAnalyticsApi, [{
    key: "retrieveAdvancedAnalyticsMetrics",
    value: function retrieveAdvancedAnalyticsMetrics(opts, callback) {
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
      return this.apiClient.callApi('/v3/statistics/metric', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AdvancedAnalyticsApi;
}();

exports["default"] = AdvancedAnalyticsApi;