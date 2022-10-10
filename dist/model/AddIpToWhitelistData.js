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
 * The AddIpToWhitelistData model module.
 * @module model/AddIpToWhitelistData
 * @version 0.0.13
 */
var AddIpToWhitelistData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddIpToWhitelistData</code>.
   * @alias module:model/AddIpToWhitelistData
   * @param ipWhitelistAddresses {Array.<String>} Specifies an array of one or more IP ranges and addresses to add to a whitelist.
   */
  function AddIpToWhitelistData(ipWhitelistAddresses) {
    _classCallCheck(this, AddIpToWhitelistData);

    AddIpToWhitelistData.initialize(this, ipWhitelistAddresses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddIpToWhitelistData, null, [{
    key: "initialize",
    value: function initialize(obj, ipWhitelistAddresses) {
      obj['ip_whitelist_addresses'] = ipWhitelistAddresses;
    }
    /**
     * Constructs a <code>AddIpToWhitelistData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddIpToWhitelistData} obj Optional instance to populate.
     * @return {module:model/AddIpToWhitelistData} The populated <code>AddIpToWhitelistData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddIpToWhitelistData();

        if (data.hasOwnProperty('ip_whitelist_addresses')) {
          obj['ip_whitelist_addresses'] = _ApiClient["default"].convertToType(data['ip_whitelist_addresses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return AddIpToWhitelistData;
}();
/**
 * Specifies an array of one or more IP ranges and addresses to add to a whitelist.
 * @member {Array.<String>} ip_whitelist_addresses
 */


AddIpToWhitelistData.prototype['ip_whitelist_addresses'] = undefined;
var _default = AddIpToWhitelistData;
exports["default"] = _default;