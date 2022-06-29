"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Applications service.
* @module api/ApplicationsApi
* @version 1.0.1
*/
var ApplicationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicationsApi. 
  * @alias module:api/ApplicationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicationsApi(apiClient) {
    _classCallCheck(this, ApplicationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List muted users in channels with a custom channel type
   * ## Retrieves a list of the muted users in channels with a custom channel type.
   * @param {String} apiToken 
   * @param {String} customType 
   * @param {Object} opts Optional parameters
   * @param {String} opts.token 
   * @param {Number} opts.limit 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
   */


  _createClass(ApplicationsApi, [{
    key: "v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGetWithHttpInfo",
    value: function v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGetWithHttpInfo(apiToken, customType, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGet");
      } // verify the required parameter 'customType' is set


      if (customType === undefined || customType === null) {
        throw new Error("Missing the required parameter 'customType' when calling v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGet");
      }

      var pathParams = {
        'custom_type': customType
      };
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v3/applications/settings_by_channel_custom_type/{custom_type}/mute', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List muted users in channels with a custom channel type
     * ## Retrieves a list of the muted users in channels with a custom channel type.
     * @param {String} apiToken 
     * @param {String} customType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.token 
     * @param {Number} opts.limit 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */

  }, {
    key: "v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGet",
    value: function v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGet(apiToken, customType, opts) {
      return this.v3ApplicationsSettingsByChannelCustomTypeCustomTypeMuteGetWithHttpInfo(apiToken, customType, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ApplicationsApi;
}();

exports["default"] = ApplicationsApi;