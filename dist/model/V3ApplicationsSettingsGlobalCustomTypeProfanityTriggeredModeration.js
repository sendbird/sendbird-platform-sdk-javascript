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
 * The V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration model module.
 * @module model/V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration
 * @version 1.0.3
 */
var V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration</code>.
   * @alias module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration
   */
  function V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration() {
    _classCallCheck(this, V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration);

    V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration} obj Optional instance to populate.
     * @return {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration} The populated <code>V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration();

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration;
}();
/**
 * @member {Number} count
 */


V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration.prototype['count'] = undefined;
/**
 * @member {Number} duration
 */

V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration.prototype['duration'] = undefined;
/**
 * @member {Number} action
 */

V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration.prototype['action'] = undefined;
var _default = V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration;
exports["default"] = _default;