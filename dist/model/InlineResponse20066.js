"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20066Webhook = _interopRequireDefault(require("./InlineResponse20066Webhook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20066 model module.
 * @module model/InlineResponse20066
 * @version 1.0.0
 */
var InlineResponse20066 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20066</code>.
   * @alias module:model/InlineResponse20066
   */
  function InlineResponse20066() {
    _classCallCheck(this, InlineResponse20066);

    InlineResponse20066.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20066, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20066</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20066} obj Optional instance to populate.
     * @return {module:model/InlineResponse20066} The populated <code>InlineResponse20066</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20066();

        if (data.hasOwnProperty('webhook')) {
          obj['webhook'] = _InlineResponse20066Webhook["default"].constructFromObject(data['webhook']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20066;
}();
/**
 * @member {module:model/InlineResponse20066Webhook} webhook
 */


InlineResponse20066.prototype['webhook'] = undefined;
var _default = InlineResponse20066;
exports["default"] = _default;