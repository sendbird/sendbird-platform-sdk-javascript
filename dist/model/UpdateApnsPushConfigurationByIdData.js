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
 * The UpdateApnsPushConfigurationByIdData model module.
 * @module model/UpdateApnsPushConfigurationByIdData
 * @version 0.0.14
 */var UpdateApnsPushConfigurationByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateApnsPushConfigurationByIdData</code>.
   * @alias module:model/UpdateApnsPushConfigurationByIdData
   * @param providerId {String} Specifies the provider ID of the push configuration to update.
   * @param apnsCert {File} In a form of the `multipart/form-data` content type, specifies a [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file of which type is either development or production. Sendbird server scans the content of the file, finds out the certificate type, and then registers the file as the corresponding type. If you upload a wrong file, you will receive an error. You should specify either this property or the apns_type below to inform the server of which certificate type to update.
   * @param apnsCertEnvType {String} Specifies the certificate type of the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file. Acceptable values are development and production. You should specify either this property or the apns_cert above to inform the server of which certificate type to update.
   * @param apnsCertPassword {String} Specifies the password of the cerfificate file which has been set during the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) export.
   * @param hasUnreadCountBadge {Boolean} Determines whether to badge your client app's icon with the number of a user's unread messages. (Default: true)
   * @param contentAvailable {Boolean} Determines for your client app whether to perform a silent background update on a user's device. For more information, see the Apple Developer Documentation's [Pushing Updates to Your App Silently](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_updates_to_your_app_silently). (Default: false)
   * @param mutableContent {Boolean} Determines for your client app whether or not to modify the payload of a push notification before it is displayed on a user's device. For more information, see the Apple Developer Documentation's [Modifying Content in Newly Delivered Notifications](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications). (Default: false)
   * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file can be in the app's main bundle or in the `Library/Sounds` folder of the app's data container.
   * @param apnsType {String} (Deprecated)  Specifies the certificate type of the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file. Acceptable values are development and production. You should specify either this property or the apns_cert above to inform the server of which certificate type to update.
   */
  function UpdateApnsPushConfigurationByIdData(providerId, apnsCert, apnsCertEnvType, apnsCertPassword, hasUnreadCountBadge, contentAvailable, mutableContent, pushSound, apnsType) {
    _classCallCheck(this, UpdateApnsPushConfigurationByIdData);
    UpdateApnsPushConfigurationByIdData.initialize(this, providerId, apnsCert, apnsCertEnvType, apnsCertPassword, hasUnreadCountBadge, contentAvailable, mutableContent, pushSound, apnsType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdateApnsPushConfigurationByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, providerId, apnsCert, apnsCertEnvType, apnsCertPassword, hasUnreadCountBadge, contentAvailable, mutableContent, pushSound, apnsType) {
      obj['provider_id'] = providerId;
      obj['apns_cert'] = apnsCert;
      obj['apns_cert_env_type'] = apnsCertEnvType;
      obj['apns_cert_password'] = apnsCertPassword;
      obj['has_unread_count_badge'] = hasUnreadCountBadge;
      obj['content_available'] = contentAvailable;
      obj['mutable_content'] = mutableContent;
      obj['push_sound'] = pushSound;
      obj['apns_type'] = apnsType;
    }

    /**
     * Constructs a <code>UpdateApnsPushConfigurationByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApnsPushConfigurationByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateApnsPushConfigurationByIdData} The populated <code>UpdateApnsPushConfigurationByIdData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateApnsPushConfigurationByIdData();
        if (data.hasOwnProperty('provider_id')) {
          obj['provider_id'] = _ApiClient["default"].convertToType(data['provider_id'], 'String');
        }
        if (data.hasOwnProperty('apns_cert')) {
          obj['apns_cert'] = _ApiClient["default"].convertToType(data['apns_cert'], File);
        }
        if (data.hasOwnProperty('apns_cert_env_type')) {
          obj['apns_cert_env_type'] = _ApiClient["default"].convertToType(data['apns_cert_env_type'], 'String');
        }
        if (data.hasOwnProperty('apns_cert_password')) {
          obj['apns_cert_password'] = _ApiClient["default"].convertToType(data['apns_cert_password'], 'String');
        }
        if (data.hasOwnProperty('has_unread_count_badge')) {
          obj['has_unread_count_badge'] = _ApiClient["default"].convertToType(data['has_unread_count_badge'], 'Boolean');
        }
        if (data.hasOwnProperty('content_available')) {
          obj['content_available'] = _ApiClient["default"].convertToType(data['content_available'], 'Boolean');
        }
        if (data.hasOwnProperty('mutable_content')) {
          obj['mutable_content'] = _ApiClient["default"].convertToType(data['mutable_content'], 'Boolean');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
        if (data.hasOwnProperty('apns_type')) {
          obj['apns_type'] = _ApiClient["default"].convertToType(data['apns_type'], 'String');
        }
      }
      return obj;
    }
  }]);
  return UpdateApnsPushConfigurationByIdData;
}(); /**
      * Specifies the provider ID of the push configuration to update.
      * @member {String} provider_id
      */
UpdateApnsPushConfigurationByIdData.prototype['provider_id'] = undefined;

/**
 * In a form of the `multipart/form-data` content type, specifies a [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file of which type is either development or production. Sendbird server scans the content of the file, finds out the certificate type, and then registers the file as the corresponding type. If you upload a wrong file, you will receive an error. You should specify either this property or the apns_type below to inform the server of which certificate type to update.
 * @member {File} apns_cert
 */
UpdateApnsPushConfigurationByIdData.prototype['apns_cert'] = undefined;

/**
 * Specifies the certificate type of the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file. Acceptable values are development and production. You should specify either this property or the apns_cert above to inform the server of which certificate type to update.
 * @member {String} apns_cert_env_type
 */
UpdateApnsPushConfigurationByIdData.prototype['apns_cert_env_type'] = undefined;

/**
 * Specifies the password of the cerfificate file which has been set during the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) export.
 * @member {String} apns_cert_password
 */
UpdateApnsPushConfigurationByIdData.prototype['apns_cert_password'] = undefined;

/**
 * Determines whether to badge your client app's icon with the number of a user's unread messages. (Default: true)
 * @member {Boolean} has_unread_count_badge
 */
UpdateApnsPushConfigurationByIdData.prototype['has_unread_count_badge'] = undefined;

/**
 * Determines for your client app whether to perform a silent background update on a user's device. For more information, see the Apple Developer Documentation's [Pushing Updates to Your App Silently](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_updates_to_your_app_silently). (Default: false)
 * @member {Boolean} content_available
 */
UpdateApnsPushConfigurationByIdData.prototype['content_available'] = undefined;

/**
 * Determines for your client app whether or not to modify the payload of a push notification before it is displayed on a user's device. For more information, see the Apple Developer Documentation's [Modifying Content in Newly Delivered Notifications](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications). (Default: false)
 * @member {Boolean} mutable_content
 */
UpdateApnsPushConfigurationByIdData.prototype['mutable_content'] = undefined;

/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file can be in the app's main bundle or in the `Library/Sounds` folder of the app's data container.
 * @member {String} push_sound
 */
UpdateApnsPushConfigurationByIdData.prototype['push_sound'] = undefined;

/**
 * (Deprecated)  Specifies the certificate type of the [.p12](/docs/chat/v3/ios/guides/push-notifications#2-step-3-export-a-p12-file-and-upload-to-sendbird-dashboard) file. Acceptable values are development and production. You should specify either this property or the apns_cert above to inform the server of which certificate type to update.
 * @member {String} apns_type
 */
UpdateApnsPushConfigurationByIdData.prototype['apns_type'] = undefined;
var _default = UpdateApnsPushConfigurationByIdData;
exports["default"] = _default;