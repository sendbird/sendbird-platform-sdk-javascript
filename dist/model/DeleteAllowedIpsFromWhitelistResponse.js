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
 * The DeleteAllowedIpsFromWhitelistResponse model module.
 * @module model/DeleteAllowedIpsFromWhitelistResponse
 * @version 0.0.13
 */
var DeleteAllowedIpsFromWhitelistResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAllowedIpsFromWhitelistResponse</code>.
   * @alias module:model/DeleteAllowedIpsFromWhitelistResponse
   */
  function DeleteAllowedIpsFromWhitelistResponse() {
    _classCallCheck(this, DeleteAllowedIpsFromWhitelistResponse);

    DeleteAllowedIpsFromWhitelistResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteAllowedIpsFromWhitelistResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteAllowedIpsFromWhitelistResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAllowedIpsFromWhitelistResponse} obj Optional instance to populate.
     * @return {module:model/DeleteAllowedIpsFromWhitelistResponse} The populated <code>DeleteAllowedIpsFromWhitelistResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteAllowedIpsFromWhitelistResponse();

        if (data.hasOwnProperty('ip_whitelist_addresses')) {
          obj['ip_whitelist_addresses'] = _ApiClient["default"].convertToType(data['ip_whitelist_addresses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DeleteAllowedIpsFromWhitelistResponse;
}();
/**
 * @member {Array.<String>} ip_whitelist_addresses
 */


DeleteAllowedIpsFromWhitelistResponse.prototype['ip_whitelist_addresses'] = undefined;
var _default = DeleteAllowedIpsFromWhitelistResponse;
exports["default"] = _default;