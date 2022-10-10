"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner = _interopRequireDefault(require("./ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllEmojisAndEmojiCategoriesResponse model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponse
 * @version 0.0.13
 */
var ListAllEmojisAndEmojiCategoriesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponse</code>.
   * @alias module:model/ListAllEmojisAndEmojiCategoriesResponse
   */
  function ListAllEmojisAndEmojiCategoriesResponse() {
    _classCallCheck(this, ListAllEmojisAndEmojiCategoriesResponse);

    ListAllEmojisAndEmojiCategoriesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllEmojisAndEmojiCategoriesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponse} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponse} The populated <code>ListAllEmojisAndEmojiCategoriesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllEmojisAndEmojiCategoriesResponse();

        if (data.hasOwnProperty('emoji_hash')) {
          obj['emoji_hash'] = _ApiClient["default"].convertToType(data['emoji_hash'], 'String');
        }

        if (data.hasOwnProperty('emoji_categories')) {
          obj['emoji_categories'] = _ApiClient["default"].convertToType(data['emoji_categories'], [_ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListAllEmojisAndEmojiCategoriesResponse;
}();
/**
 * @member {String} emoji_hash
 */


ListAllEmojisAndEmojiCategoriesResponse.prototype['emoji_hash'] = undefined;
/**
 * @member {Array.<module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner>} emoji_categories
 */

ListAllEmojisAndEmojiCategoriesResponse.prototype['emoji_categories'] = undefined;
var _default = ListAllEmojisAndEmojiCategoriesResponse;
exports["default"] = _default;