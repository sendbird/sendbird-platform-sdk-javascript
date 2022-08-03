"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RemoveRegistrationOrDeviceTokenByTokenResponse model module.
 * @module model/RemoveRegistrationOrDeviceTokenByTokenResponse
 * @version 1.0.7
 */
var RemoveRegistrationOrDeviceTokenByTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoveRegistrationOrDeviceTokenByTokenResponse</code>.
   * @alias module:model/RemoveRegistrationOrDeviceTokenByTokenResponse
   */
  function RemoveRegistrationOrDeviceTokenByTokenResponse() {
    _classCallCheck(this, RemoveRegistrationOrDeviceTokenByTokenResponse);

    RemoveRegistrationOrDeviceTokenByTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoveRegistrationOrDeviceTokenByTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoveRegistrationOrDeviceTokenByTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveRegistrationOrDeviceTokenByTokenResponse} obj Optional instance to populate.
     * @return {module:model/RemoveRegistrationOrDeviceTokenByTokenResponse} The populated <code>RemoveRegistrationOrDeviceTokenByTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoveRegistrationOrDeviceTokenByTokenResponse();

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], ['String']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return RemoveRegistrationOrDeviceTokenByTokenResponse;
}();
/**
 * @member {Array.<String>} token
 */


RemoveRegistrationOrDeviceTokenByTokenResponse.prototype['token'] = undefined;
/**
 * @member {module:model/SendBirdUser} user
 */

RemoveRegistrationOrDeviceTokenByTokenResponse.prototype['user'] = undefined;
var _default = RemoveRegistrationOrDeviceTokenByTokenResponse;
exports["default"] = _default;