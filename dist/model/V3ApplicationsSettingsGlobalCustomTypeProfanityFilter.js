"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters = _interopRequireDefault(require("./V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The V3ApplicationsSettingsGlobalCustomTypeProfanityFilter model module.
 * @module model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilter
 * @version 1.0.3
 */
var V3ApplicationsSettingsGlobalCustomTypeProfanityFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V3ApplicationsSettingsGlobalCustomTypeProfanityFilter</code>.
   * @alias module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilter
   */
  function V3ApplicationsSettingsGlobalCustomTypeProfanityFilter() {
    _classCallCheck(this, V3ApplicationsSettingsGlobalCustomTypeProfanityFilter);

    V3ApplicationsSettingsGlobalCustomTypeProfanityFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(V3ApplicationsSettingsGlobalCustomTypeProfanityFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>V3ApplicationsSettingsGlobalCustomTypeProfanityFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilter} obj Optional instance to populate.
     * @return {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilter} The populated <code>V3ApplicationsSettingsGlobalCustomTypeProfanityFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V3ApplicationsSettingsGlobalCustomTypeProfanityFilter();

        if (data.hasOwnProperty('keywords')) {
          obj['keywords'] = _ApiClient["default"].convertToType(data['keywords'], ['String']);
        }

        if (data.hasOwnProperty('regex_filters')) {
          obj['regex_filters'] = _ApiClient["default"].convertToType(data['regex_filters'], [_V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters["default"]]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }

        if (data.hasOwnProperty('should_check_global')) {
          obj['should_check_global'] = _ApiClient["default"].convertToType(data['should_check_global'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return V3ApplicationsSettingsGlobalCustomTypeProfanityFilter;
}();
/**
 * @member {Array.<String>} keywords
 */


V3ApplicationsSettingsGlobalCustomTypeProfanityFilter.prototype['keywords'] = undefined;
/**
 * @member {Array.<module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilterRegexFilters>} regex_filters
 */

V3ApplicationsSettingsGlobalCustomTypeProfanityFilter.prototype['regex_filters'] = undefined;
/**
 * @member {Number} type
 */

V3ApplicationsSettingsGlobalCustomTypeProfanityFilter.prototype['type'] = undefined;
/**
 * @member {Boolean} should_check_global
 */

V3ApplicationsSettingsGlobalCustomTypeProfanityFilter.prototype['should_check_global'] = undefined;
var _default = V3ApplicationsSettingsGlobalCustomTypeProfanityFilter;
exports["default"] = _default;