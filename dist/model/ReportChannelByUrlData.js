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
 * The ReportChannelByUrlData model module.
 * @module model/ReportChannelByUrlData
 * @version 0.0.16
 */
var ReportChannelByUrlData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReportChannelByUrlData</code>.
   * @alias module:model/ReportChannelByUrlData
   * @param reportCategory {String} Specifies the category which indicates the reason for reporting. Acceptable values are suspicious, harassing, inappropriate, and spam.
   */
  function ReportChannelByUrlData(reportCategory) {
    _classCallCheck(this, ReportChannelByUrlData);
    ReportChannelByUrlData.initialize(this, reportCategory);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ReportChannelByUrlData, null, [{
    key: "initialize",
    value: function initialize(obj, reportCategory) {
      obj['report_category'] = reportCategory;
    }

    /**
     * Constructs a <code>ReportChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReportChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/ReportChannelByUrlData} The populated <code>ReportChannelByUrlData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReportChannelByUrlData();
        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('report_category')) {
          obj['report_category'] = _ApiClient["default"].convertToType(data['report_category'], 'String');
        }
        if (data.hasOwnProperty('reporting_user_id')) {
          obj['reporting_user_id'] = _ApiClient["default"].convertToType(data['reporting_user_id'], 'String');
        }
        if (data.hasOwnProperty('report_description')) {
          obj['report_description'] = _ApiClient["default"].convertToType(data['report_description'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ReportChannelByUrlData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */
ReportChannelByUrlData.prototype['channel_type'] = undefined;

/**
 * Specifies the URL of the channel to report for offensive messages or inappropriate activities.
 * @member {String} channel_url
 */
ReportChannelByUrlData.prototype['channel_url'] = undefined;

/**
 * Specifies the category which indicates the reason for reporting. Acceptable values are suspicious, harassing, inappropriate, and spam.
 * @member {String} report_category
 */
ReportChannelByUrlData.prototype['report_category'] = undefined;

/**
 * Specifies the unique ID of the user who reports the channel.
 * @member {String} reporting_user_id
 */
ReportChannelByUrlData.prototype['reporting_user_id'] = undefined;

/**
 * Specifies additional information to be included in the report.
 * @member {String} report_description
 */
ReportChannelByUrlData.prototype['report_description'] = undefined;
var _default = ReportChannelByUrlData;
exports["default"] = _default;