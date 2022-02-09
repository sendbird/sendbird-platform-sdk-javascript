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
 * The InlineResponse20053 model module.
 * @module model/InlineResponse20053
 * @version 1.0.0
 */
var InlineResponse20053 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20053</code>.
   * @alias module:model/InlineResponse20053
   */
  function InlineResponse20053() {
    _classCallCheck(this, InlineResponse20053);

    InlineResponse20053.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20053, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20053</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20053} obj Optional instance to populate.
     * @return {module:model/InlineResponse20053} The populated <code>InlineResponse20053</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20053();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('reaction')) {
          obj['reaction'] = _ApiClient["default"].convertToType(data['reaction'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20053;
}();
/**
 * @member {String} user_id
 */


InlineResponse20053.prototype['user_id'] = undefined;
/**
 * @member {String} operation
 */

InlineResponse20053.prototype['operation'] = undefined;
/**
 * @member {Boolean} success
 */

InlineResponse20053.prototype['success'] = undefined;
/**
 * @member {String} reaction
 */

InlineResponse20053.prototype['reaction'] = undefined;
/**
 * @member {Number} updated_at
 */

InlineResponse20053.prototype['updated_at'] = undefined;
var _default = InlineResponse20053;
exports["default"] = _default;