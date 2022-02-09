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
 * The UpdateEmojiUrlByKeyData model module.
 * @module model/UpdateEmojiUrlByKeyData
 * @version 1.0.0
 */
var UpdateEmojiUrlByKeyData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateEmojiUrlByKeyData</code>.
   * @alias module:model/UpdateEmojiUrlByKeyData
   * @param emojiKey {String} Specifies the key of the emoji to update.
   * @param url {String} Specifies the new image URL of the emoji.
   */
  function UpdateEmojiUrlByKeyData(emojiKey, url) {
    _classCallCheck(this, UpdateEmojiUrlByKeyData);

    UpdateEmojiUrlByKeyData.initialize(this, emojiKey, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateEmojiUrlByKeyData, null, [{
    key: "initialize",
    value: function initialize(obj, emojiKey, url) {
      obj['emoji_key'] = emojiKey;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>UpdateEmojiUrlByKeyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEmojiUrlByKeyData} obj Optional instance to populate.
     * @return {module:model/UpdateEmojiUrlByKeyData} The populated <code>UpdateEmojiUrlByKeyData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateEmojiUrlByKeyData();

        if (data.hasOwnProperty('emoji_key')) {
          obj['emoji_key'] = _ApiClient["default"].convertToType(data['emoji_key'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateEmojiUrlByKeyData;
}();
/**
 * Specifies the key of the emoji to update.
 * @member {String} emoji_key
 */


UpdateEmojiUrlByKeyData.prototype['emoji_key'] = undefined;
/**
 * Specifies the new image URL of the emoji.
 * @member {String} url
 */

UpdateEmojiUrlByKeyData.prototype['url'] = undefined;
var _default = UpdateEmojiUrlByKeyData;
exports["default"] = _default;