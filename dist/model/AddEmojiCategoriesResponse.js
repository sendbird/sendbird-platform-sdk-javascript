"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddEmojiCategoriesResponseEmojiCategoriesInner = _interopRequireDefault(require("./AddEmojiCategoriesResponseEmojiCategoriesInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddEmojiCategoriesResponse model module.
 * @module model/AddEmojiCategoriesResponse
 * @version 0.0.13
 */
var AddEmojiCategoriesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddEmojiCategoriesResponse</code>.
   * @alias module:model/AddEmojiCategoriesResponse
   */
  function AddEmojiCategoriesResponse() {
    _classCallCheck(this, AddEmojiCategoriesResponse);

    AddEmojiCategoriesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddEmojiCategoriesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddEmojiCategoriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojiCategoriesResponse} obj Optional instance to populate.
     * @return {module:model/AddEmojiCategoriesResponse} The populated <code>AddEmojiCategoriesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddEmojiCategoriesResponse();

        if (data.hasOwnProperty('emoji_categories')) {
          obj['emoji_categories'] = _ApiClient["default"].convertToType(data['emoji_categories'], [_AddEmojiCategoriesResponseEmojiCategoriesInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AddEmojiCategoriesResponse;
}();
/**
 * @member {Array.<module:model/AddEmojiCategoriesResponseEmojiCategoriesInner>} emoji_categories
 */


AddEmojiCategoriesResponse.prototype['emoji_categories'] = undefined;
var _default = AddEmojiCategoriesResponse;
exports["default"] = _default;