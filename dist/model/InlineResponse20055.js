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
 * The InlineResponse20055 model module.
 * @module model/InlineResponse20055
 * @version 1.0.0
 */
var InlineResponse20055 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20055</code>.
   * @alias module:model/InlineResponse20055
   */
  function InlineResponse20055() {
    _classCallCheck(this, InlineResponse20055);

    InlineResponse20055.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20055, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20055</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20055} obj Optional instance to populate.
     * @return {module:model/InlineResponse20055} The populated <code>InlineResponse20055</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20055();

        if (data.hasOwnProperty('use_default_emoji')) {
          obj['use_default_emoji'] = _ApiClient["default"].convertToType(data['use_default_emoji'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20055;
}();
/**
 * @member {Boolean} use_default_emoji
 */


InlineResponse20055.prototype['use_default_emoji'] = undefined;
var _default = InlineResponse20055;
exports["default"] = _default;