"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdEmoji = _interopRequireDefault(require("./SendBirdEmoji"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdEmojiCategory model module.
 * @module model/SendBirdEmojiCategory
 * @version 1.0.0
 */
var SendBirdEmojiCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdEmojiCategory</code>.
   * @alias module:model/SendBirdEmojiCategory
   */
  function SendBirdEmojiCategory() {
    _classCallCheck(this, SendBirdEmojiCategory);

    SendBirdEmojiCategory.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdEmojiCategory, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdEmojiCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdEmojiCategory} obj Optional instance to populate.
     * @return {module:model/SendBirdEmojiCategory} The populated <code>SendBirdEmojiCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdEmojiCategory();

        if (data.hasOwnProperty('emojis')) {
          obj['emojis'] = _ApiClient["default"].convertToType(data['emojis'], [_SendBirdEmoji["default"]]);
        }

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

  return SendBirdEmojiCategory;
}();
/**
 * @member {Array.<module:model/SendBirdEmoji>} emojis
 */


SendBirdEmojiCategory.prototype['emojis'] = undefined;
/**
 * @member {Number} id
 */

SendBirdEmojiCategory.prototype['id'] = undefined;
/**
 * @member {String} name
 */

SendBirdEmojiCategory.prototype['name'] = undefined;
/**
 * @member {String} url
 */

SendBirdEmojiCategory.prototype['url'] = undefined;
var _default = SendBirdEmojiCategory;
exports["default"] = _default;