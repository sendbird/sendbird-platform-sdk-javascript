"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20041Message = _interopRequireDefault(require("./InlineResponse20041Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20041 model module.
 * @module model/InlineResponse20041
 * @version 1.0.0
 */
var InlineResponse20041 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20041</code>.
   * @alias module:model/InlineResponse20041
   */
  function InlineResponse20041() {
    _classCallCheck(this, InlineResponse20041);

    InlineResponse20041.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20041, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20041</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041} The populated <code>InlineResponse20041</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20041();

        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }

        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _InlineResponse20041Message["default"].constructFromObject(data['message']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20041;
}();
/**
 * @member {String} unique_id
 */


InlineResponse20041.prototype['unique_id'] = undefined;
/**
 * @member {String} announcement_group
 */

InlineResponse20041.prototype['announcement_group'] = undefined;
/**
 * @member {module:model/InlineResponse20041Message} message
 */

InlineResponse20041.prototype['message'] = undefined;
var _default = InlineResponse20041;
exports["default"] = _default;