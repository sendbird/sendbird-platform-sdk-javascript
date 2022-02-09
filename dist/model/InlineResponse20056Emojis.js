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
 * The InlineResponse20056Emojis model module.
 * @module model/InlineResponse20056Emojis
 * @version 1.0.0
 */
var InlineResponse20056Emojis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20056Emojis</code>.
   * @alias module:model/InlineResponse20056Emojis
   */
  function InlineResponse20056Emojis() {
    _classCallCheck(this, InlineResponse20056Emojis);

    InlineResponse20056Emojis.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20056Emojis, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20056Emojis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20056Emojis} obj Optional instance to populate.
     * @return {module:model/InlineResponse20056Emojis} The populated <code>InlineResponse20056Emojis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20056Emojis();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20056Emojis;
}();
/**
 * @member {Number} id
 */


InlineResponse20056Emojis.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20056Emojis.prototype['key'] = undefined;
/**
 * @member {String} url
 */

InlineResponse20056Emojis.prototype['url'] = undefined;
var _default = InlineResponse20056Emojis;
exports["default"] = _default;