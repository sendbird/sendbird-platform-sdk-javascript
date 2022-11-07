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
 * The AddEmojisData model module.
 * @module model/AddEmojisData
 * @version 0.0.16
 */
var AddEmojisData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddEmojisData</code>.
   * @alias module:model/AddEmojisData
   * @param emojiCategoryId {Number} Specifies the unique ID of the emoji category that a list of new emojis belong to.
   * @param emojis {Array.<Object>} Specifies a list of one or more new emojis to register.
   */
  function AddEmojisData(emojiCategoryId, emojis) {
    _classCallCheck(this, AddEmojisData);
    AddEmojisData.initialize(this, emojiCategoryId, emojis);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddEmojisData, null, [{
    key: "initialize",
    value: function initialize(obj, emojiCategoryId, emojis) {
      obj['emoji_category_id'] = emojiCategoryId;
      obj['emojis'] = emojis;
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
          obj['emojis'] = _ApiClient["default"].convertToType(data['emojis'], [Object]);
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
 * @member {Array.<Object>} emojis
 */
AddEmojisData.prototype['emojis'] = undefined;
var _default = AddEmojisData;
exports["default"] = _default;