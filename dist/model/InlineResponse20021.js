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
 * The InlineResponse20021 model module.
 * @module model/InlineResponse20021
 * @version 1.0.0
 */
var InlineResponse20021 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20021</code>.
   * @alias module:model/InlineResponse20021
   */
  function InlineResponse20021() {
    _classCallCheck(this, InlineResponse20021);

    InlineResponse20021.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20021, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20021</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20021} obj Optional instance to populate.
     * @return {module:model/InlineResponse20021} The populated <code>InlineResponse20021</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20021();

        if (data.hasOwnProperty('count_preference')) {
          obj['count_preference'] = _ApiClient["default"].convertToType(data['count_preference'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20021;
}();
/**
 * @member {String} count_preference
 */


InlineResponse20021.prototype['count_preference'] = undefined;
var _default = InlineResponse20021;
exports["default"] = _default;