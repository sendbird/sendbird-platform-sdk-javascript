"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20047OgTagOgImage = _interopRequireDefault(require("./InlineResponse20047OgTagOgImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20047OgTag model module.
 * @module model/InlineResponse20047OgTag
 * @version 1.0.0
 */
var InlineResponse20047OgTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20047OgTag</code>.
   * @alias module:model/InlineResponse20047OgTag
   */
  function InlineResponse20047OgTag() {
    _classCallCheck(this, InlineResponse20047OgTag);

    InlineResponse20047OgTag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20047OgTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20047OgTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047OgTag} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047OgTag} The populated <code>InlineResponse20047OgTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20047OgTag();

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
          obj['og:image'] = _InlineResponse20047OgTagOgImage["default"].constructFromObject(data['og:image']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20047OgTag;
}();
/**
 * @member {String} og:url
 */


InlineResponse20047OgTag.prototype['og:url'] = undefined;
/**
 * @member {String} og:title
 */

InlineResponse20047OgTag.prototype['og:title'] = undefined;
/**
 * @member {String} og:description
 */

InlineResponse20047OgTag.prototype['og:description'] = undefined;
/**
 * @member {module:model/InlineResponse20047OgTagOgImage} og:image
 */

InlineResponse20047OgTag.prototype['og:image'] = undefined;
var _default = InlineResponse20047OgTag;
exports["default"] = _default;