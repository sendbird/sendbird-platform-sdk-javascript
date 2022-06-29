"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllEmojisAndEmojiCategoriesResponseEmojis = _interopRequireDefault(require("./ListAllEmojisAndEmojiCategoriesResponseEmojis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllEmojisAndEmojiCategoriesResponseEmojiCategories model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategories
 * @version 1.0.3
 */
var ListAllEmojisAndEmojiCategoriesResponseEmojiCategories = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategories</code>.
   * @alias module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategories
   */
  function ListAllEmojisAndEmojiCategoriesResponseEmojiCategories() {
    _classCallCheck(this, ListAllEmojisAndEmojiCategoriesResponseEmojiCategories);

    ListAllEmojisAndEmojiCategoriesResponseEmojiCategories.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllEmojisAndEmojiCategoriesResponseEmojiCategories, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategories} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategories} The populated <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategories</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllEmojisAndEmojiCategoriesResponseEmojiCategories();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('emojis')) {
          obj['emojis'] = _ApiClient["default"].convertToType(data['emojis'], [_ListAllEmojisAndEmojiCategoriesResponseEmojis["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListAllEmojisAndEmojiCategoriesResponseEmojiCategories;
}();
/**
 * @member {Number} id
 */


ListAllEmojisAndEmojiCategoriesResponseEmojiCategories.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ListAllEmojisAndEmojiCategoriesResponseEmojiCategories.prototype['name'] = undefined;
/**
 * @member {String} url
 */

ListAllEmojisAndEmojiCategoriesResponseEmojiCategories.prototype['url'] = undefined;
/**
 * @member {Array.<module:model/ListAllEmojisAndEmojiCategoriesResponseEmojis>} emojis
 */

ListAllEmojisAndEmojiCategoriesResponseEmojiCategories.prototype['emojis'] = undefined;
var _default = ListAllEmojisAndEmojiCategoriesResponseEmojiCategories;
exports["default"] = _default;