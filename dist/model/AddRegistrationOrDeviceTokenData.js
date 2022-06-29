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
 * The AddRegistrationOrDeviceTokenData model module.
 * @module model/AddRegistrationOrDeviceTokenData
 * @version 1.0.3
 */
var AddRegistrationOrDeviceTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddRegistrationOrDeviceTokenData</code>.
   * @alias module:model/AddRegistrationOrDeviceTokenData
   * @param gcmRegToken {String} Specifies a registration token for Firebase Cloud Messaging (formerly [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)).
   * @param huaweiDeviceToken {String} Specifies a device token for Huawei Mobile Services.
   * @param apnsDeviceToken {String} Specifies a device token for Apple Push Notification Service.
   */
  function AddRegistrationOrDeviceTokenData(gcmRegToken, huaweiDeviceToken, apnsDeviceToken) {
    _classCallCheck(this, AddRegistrationOrDeviceTokenData);

    AddRegistrationOrDeviceTokenData.initialize(this, gcmRegToken, huaweiDeviceToken, apnsDeviceToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddRegistrationOrDeviceTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, gcmRegToken, huaweiDeviceToken, apnsDeviceToken) {
      obj['gcm_reg_token'] = gcmRegToken;
      obj['huawei_device_token'] = huaweiDeviceToken;
      obj['apns_device_token'] = apnsDeviceToken;
    }
    /**
     * Constructs a <code>AddRegistrationOrDeviceTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddRegistrationOrDeviceTokenData} obj Optional instance to populate.
     * @return {module:model/AddRegistrationOrDeviceTokenData} The populated <code>AddRegistrationOrDeviceTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddRegistrationOrDeviceTokenData();

        if (data.hasOwnProperty('gcm_reg_token')) {
          obj['gcm_reg_token'] = _ApiClient["default"].convertToType(data['gcm_reg_token'], 'String');
        }

        if (data.hasOwnProperty('huawei_device_token')) {
          obj['huawei_device_token'] = _ApiClient["default"].convertToType(data['huawei_device_token'], 'String');
        }

        if (data.hasOwnProperty('apns_device_token')) {
          obj['apns_device_token'] = _ApiClient["default"].convertToType(data['apns_device_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddRegistrationOrDeviceTokenData;
}();
/**
 * Specifies a registration token for Firebase Cloud Messaging (formerly [Google Cloud Messaging](https://developers.google.com/cloud-messaging/)).
 * @member {String} gcm_reg_token
 */


AddRegistrationOrDeviceTokenData.prototype['gcm_reg_token'] = undefined;
/**
 * Specifies a device token for Huawei Mobile Services.
 * @member {String} huawei_device_token
 */

AddRegistrationOrDeviceTokenData.prototype['huawei_device_token'] = undefined;
/**
 * Specifies a device token for Apple Push Notification Service.
 * @member {String} apns_device_token
 */

AddRegistrationOrDeviceTokenData.prototype['apns_device_token'] = undefined;
var _default = AddRegistrationOrDeviceTokenData;
exports["default"] = _default;