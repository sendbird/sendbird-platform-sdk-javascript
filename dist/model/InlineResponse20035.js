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
 * The InlineResponse20035 model module.
 * @module model/InlineResponse20035
 * @version 1.0.0
 */
var InlineResponse20035 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20035</code>.
   * @alias module:model/InlineResponse20035
   */
  function InlineResponse20035() {
    _classCallCheck(this, InlineResponse20035);

    InlineResponse20035.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20035, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20035</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20035} obj Optional instance to populate.
     * @return {module:model/InlineResponse20035} The populated <code>InlineResponse20035</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20035();

        if (data.hasOwnProperty('is_muted')) {
          obj['is_muted'] = _ApiClient["default"].convertToType(data['is_muted'], 'Boolean');
        }

        if (data.hasOwnProperty('remaining_duration')) {
          obj['remaining_duration'] = _ApiClient["default"].convertToType(data['remaining_duration'], 'Number');
        }

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20035;
}();
/**
 * @member {Boolean} is_muted
 */


InlineResponse20035.prototype['is_muted'] = undefined;
/**
 * @member {Number} remaining_duration
 */

InlineResponse20035.prototype['remaining_duration'] = undefined;
/**
 * @member {Number} start_at
 */

InlineResponse20035.prototype['start_at'] = undefined;
/**
 * @member {Number} end_at
 */

InlineResponse20035.prototype['end_at'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20035.prototype['description'] = undefined;
var _default = InlineResponse20035;
exports["default"] = _default;