"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _V3ApplicationsSettingsGlobalCustomTypeDomainFilter = _interopRequireDefault(require("./V3ApplicationsSettingsGlobalCustomTypeDomainFilter"));

var _V3ApplicationsSettingsGlobalCustomTypeImageModeration = _interopRequireDefault(require("./V3ApplicationsSettingsGlobalCustomTypeImageModeration"));

var _V3ApplicationsSettingsGlobalCustomTypeProfanityFilter = _interopRequireDefault(require("./V3ApplicationsSettingsGlobalCustomTypeProfanityFilter"));

var _V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration = _interopRequireDefault(require("./V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SetDomainFilterData model module.
 * @module model/SetDomainFilterData
 * @version 1.0.3
 */
var SetDomainFilterData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetDomainFilterData</code>.
   * @alias module:model/SetDomainFilterData
   */
  function SetDomainFilterData() {
    _classCallCheck(this, SetDomainFilterData);

    SetDomainFilterData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SetDomainFilterData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SetDomainFilterData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDomainFilterData} obj Optional instance to populate.
     * @return {module:model/SetDomainFilterData} The populated <code>SetDomainFilterData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetDomainFilterData();

        if (data.hasOwnProperty('domain_filter')) {
          obj['domain_filter'] = _V3ApplicationsSettingsGlobalCustomTypeDomainFilter["default"].constructFromObject(data['domain_filter']);
        }

        if (data.hasOwnProperty('profanity_filter')) {
          obj['profanity_filter'] = _V3ApplicationsSettingsGlobalCustomTypeProfanityFilter["default"].constructFromObject(data['profanity_filter']);
        }

        if (data.hasOwnProperty('profanity_triggered_moderation')) {
          obj['profanity_triggered_moderation'] = _V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration["default"].constructFromObject(data['profanity_triggered_moderation']);
        }

        if (data.hasOwnProperty('image_moderation')) {
          obj['image_moderation'] = _V3ApplicationsSettingsGlobalCustomTypeImageModeration["default"].constructFromObject(data['image_moderation']);
        }
      }

      return obj;
    }
  }]);

  return SetDomainFilterData;
}();
/**
 * @member {module:model/V3ApplicationsSettingsGlobalCustomTypeDomainFilter} domain_filter
 */


SetDomainFilterData.prototype['domain_filter'] = undefined;
/**
 * @member {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityFilter} profanity_filter
 */

SetDomainFilterData.prototype['profanity_filter'] = undefined;
/**
 * @member {module:model/V3ApplicationsSettingsGlobalCustomTypeProfanityTriggeredModeration} profanity_triggered_moderation
 */

SetDomainFilterData.prototype['profanity_triggered_moderation'] = undefined;
/**
 * @member {module:model/V3ApplicationsSettingsGlobalCustomTypeImageModeration} image_moderation
 */

SetDomainFilterData.prototype['image_moderation'] = undefined;
var _default = SetDomainFilterData;
exports["default"] = _default;