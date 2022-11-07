"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListMessagesResponseMessagesInnerOgTagOgImage = _interopRequireDefault(require("./ListMessagesResponseMessagesInnerOgTagOgImage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMessagesResponseMessagesInnerOgTag model module.
 * @module model/ListMessagesResponseMessagesInnerOgTag
 * @version 0.0.16
 */
var ListMessagesResponseMessagesInnerOgTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseMessagesInnerOgTag</code>.
   * @alias module:model/ListMessagesResponseMessagesInnerOgTag
   */
  function ListMessagesResponseMessagesInnerOgTag() {
    _classCallCheck(this, ListMessagesResponseMessagesInnerOgTag);
    ListMessagesResponseMessagesInnerOgTag.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListMessagesResponseMessagesInnerOgTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListMessagesResponseMessagesInnerOgTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessagesInnerOgTag} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessagesInnerOgTag} The populated <code>ListMessagesResponseMessagesInnerOgTag</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseMessagesInnerOgTag();
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
          obj['og:image'] = _ListMessagesResponseMessagesInnerOgTagOgImage["default"].constructFromObject(data['og:image']);
        }
      }
      return obj;
    }
  }]);
  return ListMessagesResponseMessagesInnerOgTag;
}();
/**
 * @member {String} og:url
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:url'] = undefined;

/**
 * @member {String} og:title
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:title'] = undefined;

/**
 * @member {String} og:description
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:description'] = undefined;

/**
 * @member {module:model/ListMessagesResponseMessagesInnerOgTagOgImage} og:image
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:image'] = undefined;
var _default = ListMessagesResponseMessagesInnerOgTag;
exports["default"] = _default;