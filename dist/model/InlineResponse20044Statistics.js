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
 * The InlineResponse20044Statistics model module.
 * @module model/InlineResponse20044Statistics
 * @version 1.0.0
 */
var InlineResponse20044Statistics = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20044Statistics</code>.
   * @alias module:model/InlineResponse20044Statistics
   */
  function InlineResponse20044Statistics() {
    _classCallCheck(this, InlineResponse20044Statistics);

    InlineResponse20044Statistics.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20044Statistics, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20044Statistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20044Statistics} obj Optional instance to populate.
     * @return {module:model/InlineResponse20044Statistics} The populated <code>InlineResponse20044Statistics</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20044Statistics();

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

  return InlineResponse20044Statistics;
}();
/**
 * @member {String} date_range
 */


InlineResponse20044Statistics.prototype['date_range'] = undefined;
/**
 * @member {Number} canceled_announcement_count
 */

InlineResponse20044Statistics.prototype['canceled_announcement_count'] = undefined;
/**
 * @member {Number} stopped_announcement_count
 */

InlineResponse20044Statistics.prototype['stopped_announcement_count'] = undefined;
/**
 * @member {Number} completed_announcement_count
 */

InlineResponse20044Statistics.prototype['completed_announcement_count'] = undefined;
/**
 * @member {Number} total_announcement_count
 */

InlineResponse20044Statistics.prototype['total_announcement_count'] = undefined;
/**
 * @member {Number} target_channel_count
 */

InlineResponse20044Statistics.prototype['target_channel_count'] = undefined;
/**
 * @member {Number} target_user_count
 */

InlineResponse20044Statistics.prototype['target_user_count'] = undefined;
/**
 * @member {Number} sent_channel_count
 */

InlineResponse20044Statistics.prototype['sent_channel_count'] = undefined;
/**
 * @member {Number} sent_user_count
 */

InlineResponse20044Statistics.prototype['sent_user_count'] = undefined;
/**
 * @member {Number} open_rate
 */

InlineResponse20044Statistics.prototype['open_rate'] = undefined;
/**
 * @member {Number} open_count
 */

InlineResponse20044Statistics.prototype['open_count'] = undefined;
var _default = InlineResponse20044Statistics;
exports["default"] = _default;