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
 * The UpdatePushPreferencesForChannelByUrlData model module.
 * @module model/UpdatePushPreferencesForChannelByUrlData
 * @version 0.0.13
 */
var UpdatePushPreferencesForChannelByUrlData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePushPreferencesForChannelByUrlData</code>.
   * @alias module:model/UpdatePushPreferencesForChannelByUrlData
   * @param pushTriggerOption {String} Determines the type of push notification trigger to apply to the speficied channel. Acceptable values are limited to the following:<br />- default: the user's push notification trigger setting automatically applies to the channel. This is the default setting.<br />- all: when disconnected from Sendbird server, the user receives notifications for all new messages in the channel including messages the user has been mentioned in.<br />- mention_only: when disconnected from Sendbird server, the user only receives notifications for messages in the channel the user has been mentioned in.<br />- off: the user doesn't receive any notifications in the channel.
   * @param enable {Boolean} (Deprecated) Determines whether notification messages for the user are delivered to the group channel. (default: true)
   * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to the specified channel.
   */
  function UpdatePushPreferencesForChannelByUrlData(pushTriggerOption, enable, pushSound) {
    _classCallCheck(this, UpdatePushPreferencesForChannelByUrlData);

    UpdatePushPreferencesForChannelByUrlData.initialize(this, pushTriggerOption, enable, pushSound);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdatePushPreferencesForChannelByUrlData, null, [{
    key: "initialize",
    value: function initialize(obj, pushTriggerOption, enable, pushSound) {
      obj['push_trigger_option'] = pushTriggerOption;
      obj['enable'] = enable;
      obj['push_sound'] = pushSound;
    }
    /**
     * Constructs a <code>UpdatePushPreferencesForChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushPreferencesForChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/UpdatePushPreferencesForChannelByUrlData} The populated <code>UpdatePushPreferencesForChannelByUrlData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePushPreferencesForChannelByUrlData();

        if (data.hasOwnProperty('push_trigger_option')) {
          obj['push_trigger_option'] = _ApiClient["default"].convertToType(data['push_trigger_option'], 'String');
        }

        if (data.hasOwnProperty('enable')) {
          obj['enable'] = _ApiClient["default"].convertToType(data['enable'], 'Boolean');
        }

        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdatePushPreferencesForChannelByUrlData;
}();
/**
 * Determines the type of push notification trigger to apply to the speficied channel. Acceptable values are limited to the following:<br />- default: the user's push notification trigger setting automatically applies to the channel. This is the default setting.<br />- all: when disconnected from Sendbird server, the user receives notifications for all new messages in the channel including messages the user has been mentioned in.<br />- mention_only: when disconnected from Sendbird server, the user only receives notifications for messages in the channel the user has been mentioned in.<br />- off: the user doesn't receive any notifications in the channel.
 * @member {String} push_trigger_option
 */


UpdatePushPreferencesForChannelByUrlData.prototype['push_trigger_option'] = undefined;
/**
 * (Deprecated) Determines whether notification messages for the user are delivered to the group channel. (default: true)
 * @member {Boolean} enable
 */

UpdatePushPreferencesForChannelByUrlData.prototype['enable'] = undefined;
/**
 * Specifies the name of a sound file to be played when a push notification is delivered to the specified channel.
 * @member {String} push_sound
 */

UpdatePushPreferencesForChannelByUrlData.prototype['push_sound'] = undefined;
var _default = UpdatePushPreferencesForChannelByUrlData;
exports["default"] = _default;