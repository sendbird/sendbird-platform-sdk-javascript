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
 * The InlineResponse20049Unread model module.
 * @module model/InlineResponse20049Unread
 * @version 1.0.0
 */
var InlineResponse20049Unread = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20049Unread</code>.
   * @alias module:model/InlineResponse20049Unread
   */
  function InlineResponse20049Unread() {
    _classCallCheck(this, InlineResponse20049Unread);

    InlineResponse20049Unread.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20049Unread, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20049Unread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20049Unread} obj Optional instance to populate.
     * @return {module:model/InlineResponse20049Unread} The populated <code>InlineResponse20049Unread</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20049Unread();

        if (data.hasOwnProperty('anyOf')) {
          obj['anyOf'] = _ApiClient["default"].convertToType(data['anyOf'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20049Unread;
}();
/**
 * @member {Number} anyOf
 */


InlineResponse20049Unread.prototype['anyOf'] = undefined;
var _default = InlineResponse20049Unread;
exports["default"] = _default;