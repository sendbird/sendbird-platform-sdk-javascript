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
 * The AddEmojisResponse model module.
 * @module model/AddEmojisResponse
 * @version 0.0.13
 */
var AddEmojisResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddEmojisResponse</code>.
   * @alias module:model/AddEmojisResponse
   */
  function AddEmojisResponse() {
    _classCallCheck(this, AddEmojisResponse);

    AddEmojisResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddEmojisResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddEmojisResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojisResponse} obj Optional instance to populate.
     * @return {module:model/AddEmojisResponse} The populated <code>AddEmojisResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddEmojisResponse();

        if (data.hasOwnProperty('emojis')) {
          obj['emojis'] = _ApiClient["default"].convertToType(data['emojis'], [_ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AddEmojisResponse;
}();
/**
 * @member {Array.<module:model/ListAllEmojisAndEmojiCategoriesResponseEmojiCategoriesInnerEmojisInner>} emojis
 */


AddEmojisResponse.prototype['emojis'] = undefined;
var _default = AddEmojisResponse;
exports["default"] = _default;