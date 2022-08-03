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
 * The SetDomainFilterDataDomainFilter model module.
 * @module model/SetDomainFilterDataDomainFilter
 * @version 1.0.7
 */
var SetDomainFilterDataDomainFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SetDomainFilterDataDomainFilter</code>.
   * @alias module:model/SetDomainFilterDataDomainFilter
   */
  function SetDomainFilterDataDomainFilter() {
    _classCallCheck(this, SetDomainFilterDataDomainFilter);

    SetDomainFilterDataDomainFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SetDomainFilterDataDomainFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SetDomainFilterDataDomainFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetDomainFilterDataDomainFilter} obj Optional instance to populate.
     * @return {module:model/SetDomainFilterDataDomainFilter} The populated <code>SetDomainFilterDataDomainFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SetDomainFilterDataDomainFilter();

        if (data.hasOwnProperty('domains')) {
          obj['domains'] = _ApiClient["default"].convertToType(data['domains'], ['String']);
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

  return SetDomainFilterDataDomainFilter;
}();
/**
 * @member {Array.<String>} domains
 */


SetDomainFilterDataDomainFilter.prototype['domains'] = undefined;
/**
 * @member {Number} type
 */

SetDomainFilterDataDomainFilter.prototype['type'] = undefined;
/**
 * @member {Boolean} should_check_global
 */

SetDomainFilterDataDomainFilter.prototype['should_check_global'] = undefined;
var _default = SetDomainFilterDataDomainFilter;
exports["default"] = _default;