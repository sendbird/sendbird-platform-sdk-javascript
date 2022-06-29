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
 * The RemoveRegistrationOrDeviceTokenResponse model module.
 * @module model/RemoveRegistrationOrDeviceTokenResponse
 * @version 1.0.3
 */
var RemoveRegistrationOrDeviceTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoveRegistrationOrDeviceTokenResponse</code>.
   * @alias module:model/RemoveRegistrationOrDeviceTokenResponse
   */
  function RemoveRegistrationOrDeviceTokenResponse() {
    _classCallCheck(this, RemoveRegistrationOrDeviceTokenResponse);

    RemoveRegistrationOrDeviceTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoveRegistrationOrDeviceTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoveRegistrationOrDeviceTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveRegistrationOrDeviceTokenResponse} obj Optional instance to populate.
     * @return {module:model/RemoveRegistrationOrDeviceTokenResponse} The populated <code>RemoveRegistrationOrDeviceTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoveRegistrationOrDeviceTokenResponse();

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

  return RemoveRegistrationOrDeviceTokenResponse;
}();
/**
 * @member {Array.<String>} token
 */


RemoveRegistrationOrDeviceTokenResponse.prototype['token'] = undefined;
/**
 * @member {module:model/SendBirdUser} user
 */

RemoveRegistrationOrDeviceTokenResponse.prototype['user'] = undefined;
var _default = RemoveRegistrationOrDeviceTokenResponse;
exports["default"] = _default;