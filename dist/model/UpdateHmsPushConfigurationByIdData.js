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
 * The UpdateHmsPushConfigurationByIdData model module.
 * @module model/UpdateHmsPushConfigurationByIdData
 * @version 0.0.13
 */
var UpdateHmsPushConfigurationByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateHmsPushConfigurationByIdData</code>.
   * @alias module:model/UpdateHmsPushConfigurationByIdData
   * @param providerId {String} Specifies the provider ID of the push configuration to update.
   * @param huaweiAppId {String} Specifies the unique ID of application for HMS to update.
   * @param huaweiAppSecret {String} Specifies the secret key of the application to update.
   * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
   */
  function UpdateHmsPushConfigurationByIdData(providerId, huaweiAppId, huaweiAppSecret, pushSound) {
    _classCallCheck(this, UpdateHmsPushConfigurationByIdData);

    UpdateHmsPushConfigurationByIdData.initialize(this, providerId, huaweiAppId, huaweiAppSecret, pushSound);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateHmsPushConfigurationByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, providerId, huaweiAppId, huaweiAppSecret, pushSound) {
      obj['provider_id'] = providerId;
      obj['huawei_app_id'] = huaweiAppId;
      obj['huawei_app_secret'] = huaweiAppSecret;
      obj['push_sound'] = pushSound;
    }
    /**
     * Constructs a <code>UpdateHmsPushConfigurationByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateHmsPushConfigurationByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateHmsPushConfigurationByIdData} The populated <code>UpdateHmsPushConfigurationByIdData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateHmsPushConfigurationByIdData();

        if (data.hasOwnProperty('provider_id')) {
          obj['provider_id'] = _ApiClient["default"].convertToType(data['provider_id'], 'String');
        }

        if (data.hasOwnProperty('huawei_app_id')) {
          obj['huawei_app_id'] = _ApiClient["default"].convertToType(data['huawei_app_id'], 'String');
        }

        if (data.hasOwnProperty('huawei_app_secret')) {
          obj['huawei_app_secret'] = _ApiClient["default"].convertToType(data['huawei_app_secret'], 'String');
        }

        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateHmsPushConfigurationByIdData;
}();
/**
 * Specifies the provider ID of the push configuration to update.
 * @member {String} provider_id
 */


UpdateHmsPushConfigurationByIdData.prototype['provider_id'] = undefined;
/**
 * Specifies the unique ID of application for HMS to update.
 * @member {String} huawei_app_id
 */

UpdateHmsPushConfigurationByIdData.prototype['huawei_app_id'] = undefined;
/**
 * Specifies the secret key of the application to update.
 * @member {String} huawei_app_secret
 */

UpdateHmsPushConfigurationByIdData.prototype['huawei_app_secret'] = undefined;
/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
 * @member {String} push_sound
 */

UpdateHmsPushConfigurationByIdData.prototype['push_sound'] = undefined;
var _default = UpdateHmsPushConfigurationByIdData;
exports["default"] = _default;