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
 * The InlineResponse20046 model module.
 * @module model/InlineResponse20046
 * @version 1.0.0
 */
var InlineResponse20046 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20046</code>.
   * @alias module:model/InlineResponse20046
   */
  function InlineResponse20046() {
    _classCallCheck(this, InlineResponse20046);

    InlineResponse20046.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20046, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20046</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046} The populated <code>InlineResponse20046</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20046();

        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }

        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }

        if (data.hasOwnProperty('open_counts')) {
          obj['open_counts'] = _ApiClient["default"].convertToType(data['open_counts'], ['Number']);
        }

        if (data.hasOwnProperty('open_rates')) {
          obj['open_rates'] = _ApiClient["default"].convertToType(data['open_rates'], ['Number']);
        }

        if (data.hasOwnProperty('cumulative_open_counts')) {
          obj['cumulative_open_counts'] = _ApiClient["default"].convertToType(data['cumulative_open_counts'], ['Number']);
        }

        if (data.hasOwnProperty('cumulative_open_rates')) {
          obj['cumulative_open_rates'] = _ApiClient["default"].convertToType(data['cumulative_open_rates'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20046;
}();
/**
 * @member {String} unique_id
 */


InlineResponse20046.prototype['unique_id'] = undefined;
/**
 * @member {String} announcement_group
 */

InlineResponse20046.prototype['announcement_group'] = undefined;
/**
 * @member {Array.<Number>} open_counts
 */

InlineResponse20046.prototype['open_counts'] = undefined;
/**
 * @member {Array.<Number>} open_rates
 */

InlineResponse20046.prototype['open_rates'] = undefined;
/**
 * @member {Array.<Number>} cumulative_open_counts
 */

InlineResponse20046.prototype['cumulative_open_counts'] = undefined;
/**
 * @member {Array.<Number>} cumulative_open_rates
 */

InlineResponse20046.prototype['cumulative_open_rates'] = undefined;
var _default = InlineResponse20046;
exports["default"] = _default;