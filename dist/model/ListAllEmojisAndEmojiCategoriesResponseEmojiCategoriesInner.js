"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner = _interopRequireDefault(require("./ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner model module.
 * @module model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner
 * @version 0.0.13
 */
var ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner</code>.
   * @alias module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner
   */
  function ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner() {
    _classCallCheck(this, ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner);

    ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner} obj Optional instance to populate.
     * @return {module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner} The populated <code>ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner();

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
          obj['emojis'] = _ApiClient["default"].convertToType(data['emojis'], [_ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner;
}();
/**
 * @member {Number} id
 */


ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['id'] = undefined;
/**
 * @member {String} name
 */

ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['name'] = undefined;
/**
 * @member {String} url
 */

ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['url'] = undefined;
/**
 * @member {Array.<module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>} emojis
 */

ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner.prototype['emojis'] = undefined;
var _default = ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInner;
exports["default"] = _default;