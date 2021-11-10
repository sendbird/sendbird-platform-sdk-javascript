"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AddEmojisData model module.
 * @module model/AddEmojisData
 * @version 1.0.0
 */
var AddEmojisData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddEmojisData</code>.
   * @alias module:model/AddEmojisData
   * @param emojiCategoryId {Number} Specifies the unique ID of the emoji category that a list of new emojis belong to.
   * @param emojis {Array.<String>} Specifies a list of one or more new emojis to register.
   * @param emojiKey {String} Specifies the string key of each new emoji.
   * @param emojiUrl {String} Specifies the image URL of each new emoji.
   */
  function AddEmojisData(emojiCategoryId, emojis, emojiKey, emojiUrl) {
    _classCallCheck(this, AddEmojisData);

    AddEmojisData.initialize(this, emojiCategoryId, emojis, emojiKey, emojiUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddEmojisData, null, [{
    key: "initialize",
    value: function initialize(obj, emojiCategoryId, emojis, emojiKey, emojiUrl) {
      obj['emoji_category_id'] = emojiCategoryId;
      obj['emojis'] = emojis;
      obj['(emoji).key'] = emojiKey;
      obj['(emoji).url'] = emojiUrl;
    }
    /**
     * Constructs a <code>AddEmojisData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojisData} obj Optional instance to populate.
     * @return {module:model/AddEmojisData} The populated <code>AddEmojisData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddEmojisData();

        if (data.hasOwnProperty('emoji_category_id')) {
          obj['emoji_category_id'] = _ApiClient["default"].convertToType(data['emoji_category_id'], 'Number');
        }

        if (data.hasOwnProperty('emojis')) {
          obj['emojis'] = _ApiClient["default"].convertToType(data['emojis'], ['String']);
        }

        if (data.hasOwnProperty('(emoji).key')) {
          obj['(emoji).key'] = _ApiClient["default"].convertToType(data['(emoji).key'], 'String');
        }

        if (data.hasOwnProperty('(emoji).url')) {
          obj['(emoji).url'] = _ApiClient["default"].convertToType(data['(emoji).url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddEmojisData;
}();
/**
 * Specifies the unique ID of the emoji category that a list of new emojis belong to.
 * @member {Number} emoji_category_id
 */


AddEmojisData.prototype['emoji_category_id'] = undefined;
/**
 * Specifies a list of one or more new emojis to register.
 * @member {Array.<String>} emojis
 */

AddEmojisData.prototype['emojis'] = undefined;
/**
 * Specifies the string key of each new emoji.
 * @member {String} (emoji).key
 */

AddEmojisData.prototype['(emoji).key'] = undefined;
/**
 * Specifies the image URL of each new emoji.
 * @member {String} (emoji).url
 */

AddEmojisData.prototype['(emoji).url'] = undefined;
var _default = AddEmojisData;
exports["default"] = _default;