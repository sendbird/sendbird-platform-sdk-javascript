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
 * The ListAllEmojisAndEmojiCategoriesResponseEmojis model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponseEmojis
 * @version 1.0.0
 */
var ListAllEmojisAndEmojiCategoriesResponseEmojis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponseEmojis</code>.
   * @alias module:model/ListAllEmojisAndEmojiCategoriesResponseEmojis
   */
  function ListAllEmojisAndEmojiCategoriesResponseEmojis() {
    _classCallCheck(this, ListAllEmojisAndEmojiCategoriesResponseEmojis);

    ListAllEmojisAndEmojiCategoriesResponseEmojis.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllEmojisAndEmojiCategoriesResponseEmojis, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponseEmojis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojis} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojis} The populated <code>ListAllEmojisAndEmojiCategoriesResponseEmojis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllEmojisAndEmojiCategoriesResponseEmojis();

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

  return ListAllEmojisAndEmojiCategoriesResponseEmojis;
}();
/**
 * @member {Number} id
 */


ListAllEmojisAndEmojiCategoriesResponseEmojis.prototype['id'] = undefined;
/**
 * @member {String} key
 */

ListAllEmojisAndEmojiCategoriesResponseEmojis.prototype['key'] = undefined;
/**
 * @member {String} url
 */

ListAllEmojisAndEmojiCategoriesResponseEmojis.prototype['url'] = undefined;
var _default = ListAllEmojisAndEmojiCategoriesResponseEmojis;
exports["default"] = _default;