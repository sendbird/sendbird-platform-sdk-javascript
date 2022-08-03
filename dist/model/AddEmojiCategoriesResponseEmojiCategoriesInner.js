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
 * The AddEmojiCategoriesResponseEmojiCategoriesInner model module.
 * @module model/AddEmojiCategoriesResponseEmojiCategoriesInner
 * @version 1.0.7
 */
var AddEmojiCategoriesResponseEmojiCategoriesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddEmojiCategoriesResponseEmojiCategoriesInner</code>.
   * @alias module:model/AddEmojiCategoriesResponseEmojiCategoriesInner
   */
  function AddEmojiCategoriesResponseEmojiCategoriesInner() {
    _classCallCheck(this, AddEmojiCategoriesResponseEmojiCategoriesInner);

    AddEmojiCategoriesResponseEmojiCategoriesInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddEmojiCategoriesResponseEmojiCategoriesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddEmojiCategoriesResponseEmojiCategoriesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddEmojiCategoriesResponseEmojiCategoriesInner} obj Optional instance to populate.
     * @return {module:model/AddEmojiCategoriesResponseEmojiCategoriesInner} The populated <code>AddEmojiCategoriesResponseEmojiCategoriesInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddEmojiCategoriesResponseEmojiCategoriesInner();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddEmojiCategoriesResponseEmojiCategoriesInner;
}();
/**
 * @member {Number} id
 */


AddEmojiCategoriesResponseEmojiCategoriesInner.prototype['id'] = undefined;
/**
 * @member {String} name
 */

AddEmojiCategoriesResponseEmojiCategoriesInner.prototype['name'] = undefined;
/**
 * @member {String} url
 */

AddEmojiCategoriesResponseEmojiCategoriesInner.prototype['url'] = undefined;
var _default = AddEmojiCategoriesResponseEmojiCategoriesInner;
exports["default"] = _default;