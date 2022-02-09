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
 * The ListMessagesResponseOgTagOgImage model module.
 * @module model/ListMessagesResponseOgTagOgImage
 * @version 1.0.0
 */
var ListMessagesResponseOgTagOgImage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseOgTagOgImage</code>.
   * @alias module:model/ListMessagesResponseOgTagOgImage
   */
  function ListMessagesResponseOgTagOgImage() {
    _classCallCheck(this, ListMessagesResponseOgTagOgImage);

    ListMessagesResponseOgTagOgImage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListMessagesResponseOgTagOgImage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListMessagesResponseOgTagOgImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseOgTagOgImage} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseOgTagOgImage} The populated <code>ListMessagesResponseOgTagOgImage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseOgTagOgImage();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('secure_url')) {
          obj['secure_url'] = _ApiClient["default"].convertToType(data['secure_url'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListMessagesResponseOgTagOgImage;
}();
/**
 * @member {String} url
 */


ListMessagesResponseOgTagOgImage.prototype['url'] = undefined;
/**
 * @member {String} secure_url
 */

ListMessagesResponseOgTagOgImage.prototype['secure_url'] = undefined;
/**
 * @member {Number} width
 */

ListMessagesResponseOgTagOgImage.prototype['width'] = undefined;
/**
 * @member {Number} height
 */

ListMessagesResponseOgTagOgImage.prototype['height'] = undefined;
var _default = ListMessagesResponseOgTagOgImage;
exports["default"] = _default;