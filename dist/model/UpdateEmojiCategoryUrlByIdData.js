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
 * The UpdateEmojiCategoryUrlByIdData model module.
 * @module model/UpdateEmojiCategoryUrlByIdData
 * @version 0.0.14
 */var UpdateEmojiCategoryUrlByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateEmojiCategoryUrlByIdData</code>.
   * @alias module:model/UpdateEmojiCategoryUrlByIdData
   * @param emojiCategoryId {Number} Specifies the unique ID of the emoji category to update.
   * @param url {String} Specifies the new URL of the emoji category.
   */
  function UpdateEmojiCategoryUrlByIdData(emojiCategoryId, url) {
    _classCallCheck(this, UpdateEmojiCategoryUrlByIdData);
    UpdateEmojiCategoryUrlByIdData.initialize(this, emojiCategoryId, url);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdateEmojiCategoryUrlByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, emojiCategoryId, url) {
      obj['emoji_category_id'] = emojiCategoryId;
      obj['url'] = url;
    }

    /**
     * Constructs a <code>UpdateEmojiCategoryUrlByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEmojiCategoryUrlByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateEmojiCategoryUrlByIdData} The populated <code>UpdateEmojiCategoryUrlByIdData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateEmojiCategoryUrlByIdData();
        if (data.hasOwnProperty('emoji_category_id')) {
          obj['emoji_category_id'] = _ApiClient["default"].convertToType(data['emoji_category_id'], 'Number');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }
      return obj;
    }
  }]);
  return UpdateEmojiCategoryUrlByIdData;
}(); /**
      * Specifies the unique ID of the emoji category to update.
      * @member {Number} emoji_category_id
      */
UpdateEmojiCategoryUrlByIdData.prototype['emoji_category_id'] = undefined;

/**
 * Specifies the new URL of the emoji category.
 * @member {String} url
 */
UpdateEmojiCategoryUrlByIdData.prototype['url'] = undefined;
var _default = UpdateEmojiCategoryUrlByIdData;
exports["default"] = _default;