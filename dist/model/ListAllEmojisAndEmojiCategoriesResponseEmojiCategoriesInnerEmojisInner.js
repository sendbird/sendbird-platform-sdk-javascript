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
 * The ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner
 * @version 0.0.16
 */
var ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner</code>.
   * @alias module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner
   */
  function ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner() {
    _classCallCheck(this, ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner);
    ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner} The populated <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner();
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
  return ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner;
}();
/**
 * @member {Number} id
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.prototype['id'] = undefined;

/**
 * @member {String} key
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.prototype['key'] = undefined;

/**
 * @member {String} url
 */
ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner.prototype['url'] = undefined;
var _default = ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner;
exports["default"] = _default;