"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListMessagesResponseOgTagOgImage = _interopRequireDefault(require("./ListMessagesResponseOgTagOgImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListMessagesResponseOgTag model module.
 * @module model/ListMessagesResponseOgTag
 * @version 1.0.0
 */
var ListMessagesResponseOgTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseOgTag</code>.
   * @alias module:model/ListMessagesResponseOgTag
   */
  function ListMessagesResponseOgTag() {
    _classCallCheck(this, ListMessagesResponseOgTag);

    ListMessagesResponseOgTag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListMessagesResponseOgTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListMessagesResponseOgTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseOgTag} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseOgTag} The populated <code>ListMessagesResponseOgTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseOgTag();

        if (data.hasOwnProperty('og:url')) {
          obj['og:url'] = _ApiClient["default"].convertToType(data['og:url'], 'String');
        }

        if (data.hasOwnProperty('og:title')) {
          obj['og:title'] = _ApiClient["default"].convertToType(data['og:title'], 'String');
        }

        if (data.hasOwnProperty('og:description')) {
          obj['og:description'] = _ApiClient["default"].convertToType(data['og:description'], 'String');
        }

        if (data.hasOwnProperty('og:image')) {
          obj['og:image'] = _ListMessagesResponseOgTagOgImage["default"].constructFromObject(data['og:image']);
        }
      }

      return obj;
    }
  }]);

  return ListMessagesResponseOgTag;
}();
/**
 * @member {String} og:url
 */


ListMessagesResponseOgTag.prototype['og:url'] = undefined;
/**
 * @member {String} og:title
 */

ListMessagesResponseOgTag.prototype['og:title'] = undefined;
/**
 * @member {String} og:description
 */

ListMessagesResponseOgTag.prototype['og:description'] = undefined;
/**
 * @member {module:model/ListMessagesResponseOgTagOgImage} og:image
 */

ListMessagesResponseOgTag.prototype['og:image'] = undefined;
var _default = ListMessagesResponseOgTag;
exports["default"] = _default;