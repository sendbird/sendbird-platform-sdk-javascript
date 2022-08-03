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
 * The GetStatisticsDailyResponseStatisticsInner model module.
 * @module model/GetStatisticsDailyResponseStatisticsInner
 * @version 1.0.7
 */
var GetStatisticsDailyResponseStatisticsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetStatisticsDailyResponseStatisticsInner</code>.
   * @alias module:model/GetStatisticsDailyResponseStatisticsInner
   */
  function GetStatisticsDailyResponseStatisticsInner() {
    _classCallCheck(this, GetStatisticsDailyResponseStatisticsInner);

    GetStatisticsDailyResponseStatisticsInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetStatisticsDailyResponseStatisticsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetStatisticsDailyResponseStatisticsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStatisticsDailyResponseStatisticsInner} obj Optional instance to populate.
     * @return {module:model/GetStatisticsDailyResponseStatisticsInner} The populated <code>GetStatisticsDailyResponseStatisticsInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetStatisticsDailyResponseStatisticsInner();

        if (data.hasOwnProperty('date_range')) {
          obj['date_range'] = _ApiClient["default"].convertToType(data['date_range'], 'String');
        }

        if (data.hasOwnProperty('canceled_announcement_count')) {
          obj['canceled_announcement_count'] = _ApiClient["default"].convertToType(data['canceled_announcement_count'], 'Number');
        }

        if (data.hasOwnProperty('stopped_announcement_count')) {
          obj['stopped_announcement_count'] = _ApiClient["default"].convertToType(data['stopped_announcement_count'], 'Number');
        }

        if (data.hasOwnProperty('completed_announcement_count')) {
          obj['completed_announcement_count'] = _ApiClient["default"].convertToType(data['completed_announcement_count'], 'Number');
        }

        if (data.hasOwnProperty('total_announcement_count')) {
          obj['total_announcement_count'] = _ApiClient["default"].convertToType(data['total_announcement_count'], 'Number');
        }

        if (data.hasOwnProperty('target_channel_count')) {
          obj['target_channel_count'] = _ApiClient["default"].convertToType(data['target_channel_count'], 'Number');
        }

        if (data.hasOwnProperty('target_user_count')) {
          obj['target_user_count'] = _ApiClient["default"].convertToType(data['target_user_count'], 'Number');
        }

        if (data.hasOwnProperty('sent_channel_count')) {
          obj['sent_channel_count'] = _ApiClient["default"].convertToType(data['sent_channel_count'], 'Number');
        }

        if (data.hasOwnProperty('sent_user_count')) {
          obj['sent_user_count'] = _ApiClient["default"].convertToType(data['sent_user_count'], 'Number');
        }

        if (data.hasOwnProperty('open_rate')) {
          obj['open_rate'] = _ApiClient["default"].convertToType(data['open_rate'], 'Number');
        }

        if (data.hasOwnProperty('open_count')) {
          obj['open_count'] = _ApiClient["default"].convertToType(data['open_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetStatisticsDailyResponseStatisticsInner;
}();
/**
 * @member {String} date_range
 */


GetStatisticsDailyResponseStatisticsInner.prototype['date_range'] = undefined;
/**
 * @member {Number} canceled_announcement_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['canceled_announcement_count'] = undefined;
/**
 * @member {Number} stopped_announcement_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['stopped_announcement_count'] = undefined;
/**
 * @member {Number} completed_announcement_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['completed_announcement_count'] = undefined;
/**
 * @member {Number} total_announcement_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['total_announcement_count'] = undefined;
/**
 * @member {Number} target_channel_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['target_channel_count'] = undefined;
/**
 * @member {Number} target_user_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['target_user_count'] = undefined;
/**
 * @member {Number} sent_channel_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['sent_channel_count'] = undefined;
/**
 * @member {Number} sent_user_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['sent_user_count'] = undefined;
/**
 * @member {Number} open_rate
 */

GetStatisticsDailyResponseStatisticsInner.prototype['open_rate'] = undefined;
/**
 * @member {Number} open_count
 */

GetStatisticsDailyResponseStatisticsInner.prototype['open_count'] = undefined;
var _default = GetStatisticsDailyResponseStatisticsInner;
exports["default"] = _default;