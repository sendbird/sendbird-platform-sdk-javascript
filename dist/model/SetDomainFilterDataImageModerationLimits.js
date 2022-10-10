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
 * The SetDomainFilterDataImageModerationLimits model module.
 * @module model/SetDomainFilterDataImageModerationLimits
 * @version 0.0.14
 */var SetDomainFilterDataImageModerationLimits = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetDomainFilterDataImageModerationLimits</code>.
   * @alias module:model/SetDomainFilterDataImageModerationLimits
   */
  function SetDomainFilterDataImageModerationLimits() {
    _classCallCheck(this, SetDomainFilterDataImageModerationLimits);
    SetDomainFilterDataImageModerationLimits.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SetDomainFilterDataImageModerationLimits, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SetDomainFilterDataImageModerationLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDomainFilterDataImageModerationLimits} obj Optional instance to populate.
     * @return {module:model/SetDomainFilterDataImageModerationLimits} The populated <code>SetDomainFilterDataImageModerationLimits</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetDomainFilterDataImageModerationLimits();
        if (data.hasOwnProperty('adult')) {
          obj['adult'] = _ApiClient["default"].convertToType(data['adult'], 'Number');
        }
        if (data.hasOwnProperty('spoof')) {
          obj['spoof'] = _ApiClient["default"].convertToType(data['spoof'], 'Number');
        }
        if (data.hasOwnProperty('medical')) {
          obj['medical'] = _ApiClient["default"].convertToType(data['medical'], 'Number');
        }
        if (data.hasOwnProperty('violence')) {
          obj['violence'] = _ApiClient["default"].convertToType(data['violence'], 'Number');
        }
        if (data.hasOwnProperty('racy')) {
          obj['racy'] = _ApiClient["default"].convertToType(data['racy'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SetDomainFilterDataImageModerationLimits;
}(); /**
      * @member {Number} adult
      */
SetDomainFilterDataImageModerationLimits.prototype['adult'] = undefined;

/**
 * @member {Number} spoof
 */
SetDomainFilterDataImageModerationLimits.prototype['spoof'] = undefined;

/**
 * @member {Number} medical
 */
SetDomainFilterDataImageModerationLimits.prototype['medical'] = undefined;

/**
 * @member {Number} violence
 */
SetDomainFilterDataImageModerationLimits.prototype['violence'] = undefined;

/**
 * @member {Number} racy
 */
SetDomainFilterDataImageModerationLimits.prototype['racy'] = undefined;
var _default = SetDomainFilterDataImageModerationLimits;
exports["default"] = _default;