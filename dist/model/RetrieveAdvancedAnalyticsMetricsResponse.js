"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The RetrieveAdvancedAnalyticsMetricsResponse model module.
 * @module model/RetrieveAdvancedAnalyticsMetricsResponse
 * @version 0.0.16
 */
var RetrieveAdvancedAnalyticsMetricsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RetrieveAdvancedAnalyticsMetricsResponse</code>.
   * @alias module:model/RetrieveAdvancedAnalyticsMetricsResponse
   */
  function RetrieveAdvancedAnalyticsMetricsResponse() {
    _classCallCheck(this, RetrieveAdvancedAnalyticsMetricsResponse);
    RetrieveAdvancedAnalyticsMetricsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RetrieveAdvancedAnalyticsMetricsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RetrieveAdvancedAnalyticsMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveAdvancedAnalyticsMetricsResponse} obj Optional instance to populate.
     * @return {module:model/RetrieveAdvancedAnalyticsMetricsResponse} The populated <code>RetrieveAdvancedAnalyticsMetricsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RetrieveAdvancedAnalyticsMetricsResponse();
        if (data.hasOwnProperty('segments')) {
          obj['segments'] = _ApiClient["default"].convertToType(data['segments'], 'String');
        }
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }
        if (data.hasOwnProperty('custom_channel_type')) {
          obj['custom_channel_type'] = _ApiClient["default"].convertToType(data['custom_channel_type'], 'String');
        }
        if (data.hasOwnProperty('custom_message_type')) {
          obj['custom_message_type'] = _ApiClient["default"].convertToType(data['custom_message_type'], 'String');
        }
      }
      return obj;
    }
  }]);
  return RetrieveAdvancedAnalyticsMetricsResponse;
}();
/**
 * @member {String} segments
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['segments'] = undefined;

/**
 * @member {String} date
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['date'] = undefined;

/**
 * @member {Number} value
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['value'] = undefined;

/**
 * @member {String} channel_type
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['channel_type'] = undefined;

/**
 * @member {String} custom_channel_type
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['custom_channel_type'] = undefined;

/**
 * @member {String} custom_message_type
 */
RetrieveAdvancedAnalyticsMetricsResponse.prototype['custom_message_type'] = undefined;
var _default = RetrieveAdvancedAnalyticsMetricsResponse;
exports["default"] = _default;