"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20047Messages = _interopRequireDefault(require("./InlineResponse20047Messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20047 model module.
 * @module model/InlineResponse20047
 * @version 1.0.0
 */
var InlineResponse20047 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20047</code>.
   * @alias module:model/InlineResponse20047
   */
  function InlineResponse20047() {
    _classCallCheck(this, InlineResponse20047);

    InlineResponse20047.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20047, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20047</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047} The populated <code>InlineResponse20047</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20047();

        if (data.hasOwnProperty('messages')) {
          obj['messages'] = _ApiClient["default"].convertToType(data['messages'], [_InlineResponse20047Messages["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20047;
}();
/**
 * @member {Array.<module:model/InlineResponse20047Messages>} messages
 */


InlineResponse20047.prototype['messages'] = undefined;
var _default = InlineResponse20047;
exports["default"] = _default;