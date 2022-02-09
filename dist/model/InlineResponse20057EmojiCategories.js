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
 * The InlineResponse20057EmojiCategories model module.
 * @module model/InlineResponse20057EmojiCategories
 * @version 1.0.0
 */
var InlineResponse20057EmojiCategories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20057EmojiCategories</code>.
   * @alias module:model/InlineResponse20057EmojiCategories
   */
  function InlineResponse20057EmojiCategories() {
    _classCallCheck(this, InlineResponse20057EmojiCategories);

    InlineResponse20057EmojiCategories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20057EmojiCategories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20057EmojiCategories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20057EmojiCategories} obj Optional instance to populate.
     * @return {module:model/InlineResponse20057EmojiCategories} The populated <code>InlineResponse20057EmojiCategories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20057EmojiCategories();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20057EmojiCategories;
}();
/**
 * @member {Number} id
 */


InlineResponse20057EmojiCategories.prototype['id'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20057EmojiCategories.prototype['name'] = undefined;
/**
 * @member {String} url
 */

InlineResponse20057EmojiCategories.prototype['url'] = undefined;
var _default = InlineResponse20057EmojiCategories;
exports["default"] = _default;