"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits = _interopRequireDefault(require("./V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The V3ApplicationsSettingsGlobalCustomTypeImageModeration model module.
 * @module model/V3ApplicationsSettingsGlobalCustomTypeImageModeration
 * @version 1.0.3
 */
var V3ApplicationsSettingsGlobalCustomTypeImageModeration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V3ApplicationsSettingsGlobalCustomTypeImageModeration</code>.
   * @alias module:model/V3ApplicationsSettingsGlobalCustomTypeImageModeration
   */
  function V3ApplicationsSettingsGlobalCustomTypeImageModeration() {
    _classCallCheck(this, V3ApplicationsSettingsGlobalCustomTypeImageModeration);

    V3ApplicationsSettingsGlobalCustomTypeImageModeration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(V3ApplicationsSettingsGlobalCustomTypeImageModeration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>V3ApplicationsSettingsGlobalCustomTypeImageModeration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3ApplicationsSettingsGlobalCustomTypeImageModeration} obj Optional instance to populate.
     * @return {module:model/V3ApplicationsSettingsGlobalCustomTypeImageModeration} The populated <code>V3ApplicationsSettingsGlobalCustomTypeImageModeration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V3ApplicationsSettingsGlobalCustomTypeImageModeration();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }

        if (data.hasOwnProperty('soft_block')) {
          obj['soft_block'] = _ApiClient["default"].convertToType(data['soft_block'], 'Boolean');
        }

        if (data.hasOwnProperty('limits')) {
          obj['limits'] = _V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits["default"].constructFromObject(data['limits']);
        }

        if (data.hasOwnProperty('check_urls')) {
          obj['check_urls'] = _ApiClient["default"].convertToType(data['check_urls'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return V3ApplicationsSettingsGlobalCustomTypeImageModeration;
}();
/**
 * @member {Number} type
 */


V3ApplicationsSettingsGlobalCustomTypeImageModeration.prototype['type'] = undefined;
/**
 * @member {Boolean} soft_block
 */

V3ApplicationsSettingsGlobalCustomTypeImageModeration.prototype['soft_block'] = undefined;
/**
 * @member {module:model/V3ApplicationsSettingsGlobalCustomTypeImageModerationLimits} limits
 */

V3ApplicationsSettingsGlobalCustomTypeImageModeration.prototype['limits'] = undefined;
/**
 * @member {Boolean} check_urls
 */

V3ApplicationsSettingsGlobalCustomTypeImageModeration.prototype['check_urls'] = undefined;
var _default = V3ApplicationsSettingsGlobalCustomTypeImageModeration;
exports["default"] = _default;