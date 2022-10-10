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
 * The UpdatePushPreferencesData model module.
 * @module model/UpdatePushPreferencesData
 * @version 0.0.14
 */var UpdatePushPreferencesData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePushPreferencesData</code>.
   * @alias module:model/UpdatePushPreferencesData
   * @param pushTriggerOption {String} Determines the type of push notification trigger to apply to the user's joined group channels. Valid values are the following:<br />- all (default): when disconnected from Sendbird server, the user receives notifications for all new messages including mentioned messages the user has been mentioned in.<br />- mention_only: when disconnected from Sendbird server, the user only receives notifications for messages the user has been mentioned in.<br />- off: the user doesn't receive any notifications.
   * @param doNotDisturb {Boolean} Determines whether to pause notification messages for the user during a specific time of day. (Default: false)
   * @param startHour {Number} Specifies the hour to start pausing the notifications for Do Not Disturb of the user.
   * @param startMin {Number} Specifies the minute of the hour to start pausing the notifications for Do Not Disturb of the user.
   * @param endHour {Number} Specifies the hour to stop pausing the notifications for Do Not Disturb of the user.
   * @param endMin {Number} Specifies the minute of the hour to stop pausing the notifications for Do Not Disturb of the user.
   * @param snoozeEnabled {Boolean} Determines whether to snooze notification messages for the user during a specific period of time. (Default: false)
   * @param snoozeStartTs {Number} Specifies the timestamp of when to start snoozing the notifications, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps).
   * @param snoozeEndTs {Number} Specifies the timestamp of when to end snoozing the notifications, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps).
   * @param blockPushFromBots {Boolean} Determines whether to block push notifications from [all bots](/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots) within the application. If the push_blocked_bot_ids is specified, notifications only from the bots in the property are blocked. (Default: false)
   * @param pushBlockedBotIds {Array.<Number>} Specifies an array of one or more IDs of bots whose push notifications are blocked. This property is effective only when the block_push_from_bots is set to true.
   * @param timezone {String} Specifies the timezone to be applied to push preferences with a value such as UTC, Asia/Seoul, Europe/London, etc.
   * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app.
   */
  function UpdatePushPreferencesData(pushTriggerOption, doNotDisturb, startHour, startMin, endHour, endMin, snoozeEnabled, snoozeStartTs, snoozeEndTs, blockPushFromBots, pushBlockedBotIds, timezone, pushSound) {
    _classCallCheck(this, UpdatePushPreferencesData);
    UpdatePushPreferencesData.initialize(this, pushTriggerOption, doNotDisturb, startHour, startMin, endHour, endMin, snoozeEnabled, snoozeStartTs, snoozeEndTs, blockPushFromBots, pushBlockedBotIds, timezone, pushSound);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdatePushPreferencesData, null, [{
    key: "initialize",
    value: function initialize(obj, pushTriggerOption, doNotDisturb, startHour, startMin, endHour, endMin, snoozeEnabled, snoozeStartTs, snoozeEndTs, blockPushFromBots, pushBlockedBotIds, timezone, pushSound) {
      obj['push_trigger_option'] = pushTriggerOption;
      obj['do_not_disturb'] = doNotDisturb;
      obj['start_hour'] = startHour;
      obj['start_min'] = startMin;
      obj['end_hour'] = endHour;
      obj['end_min'] = endMin;
      obj['snooze_enabled'] = snoozeEnabled;
      obj['snooze_start_ts'] = snoozeStartTs;
      obj['snooze_end_ts'] = snoozeEndTs;
      obj['block_push_from_bots'] = blockPushFromBots;
      obj['push_blocked_bot_ids'] = pushBlockedBotIds;
      obj['timezone'] = timezone;
      obj['push_sound'] = pushSound;
    }

    /**
     * Constructs a <code>UpdatePushPreferencesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushPreferencesData} obj Optional instance to populate.
     * @return {module:model/UpdatePushPreferencesData} The populated <code>UpdatePushPreferencesData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePushPreferencesData();
        if (data.hasOwnProperty('push_trigger_option')) {
          obj['push_trigger_option'] = _ApiClient["default"].convertToType(data['push_trigger_option'], 'String');
        }
        if (data.hasOwnProperty('do_not_disturb')) {
          obj['do_not_disturb'] = _ApiClient["default"].convertToType(data['do_not_disturb'], 'Boolean');
        }
        if (data.hasOwnProperty('start_hour')) {
          obj['start_hour'] = _ApiClient["default"].convertToType(data['start_hour'], 'Number');
        }
        if (data.hasOwnProperty('start_min')) {
          obj['start_min'] = _ApiClient["default"].convertToType(data['start_min'], 'Number');
        }
        if (data.hasOwnProperty('end_hour')) {
          obj['end_hour'] = _ApiClient["default"].convertToType(data['end_hour'], 'Number');
        }
        if (data.hasOwnProperty('end_min')) {
          obj['end_min'] = _ApiClient["default"].convertToType(data['end_min'], 'Number');
        }
        if (data.hasOwnProperty('snooze_enabled')) {
          obj['snooze_enabled'] = _ApiClient["default"].convertToType(data['snooze_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('snooze_start_ts')) {
          obj['snooze_start_ts'] = _ApiClient["default"].convertToType(data['snooze_start_ts'], 'Number');
        }
        if (data.hasOwnProperty('snooze_end_ts')) {
          obj['snooze_end_ts'] = _ApiClient["default"].convertToType(data['snooze_end_ts'], 'Number');
        }
        if (data.hasOwnProperty('block_push_from_bots')) {
          obj['block_push_from_bots'] = _ApiClient["default"].convertToType(data['block_push_from_bots'], 'Boolean');
        }
        if (data.hasOwnProperty('push_blocked_bot_ids')) {
          obj['push_blocked_bot_ids'] = _ApiClient["default"].convertToType(data['push_blocked_bot_ids'], ['Number']);
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }
      return obj;
    }
  }]);
  return UpdatePushPreferencesData;
}(); /**
      * Determines the type of push notification trigger to apply to the user's joined group channels. Valid values are the following:<br />- all (default): when disconnected from Sendbird server, the user receives notifications for all new messages including mentioned messages the user has been mentioned in.<br />- mention_only: when disconnected from Sendbird server, the user only receives notifications for messages the user has been mentioned in.<br />- off: the user doesn't receive any notifications.
      * @member {String} push_trigger_option
      */
UpdatePushPreferencesData.prototype['push_trigger_option'] = undefined;

/**
 * Determines whether to pause notification messages for the user during a specific time of day. (Default: false)
 * @member {Boolean} do_not_disturb
 */
UpdatePushPreferencesData.prototype['do_not_disturb'] = undefined;

/**
 * Specifies the hour to start pausing the notifications for Do Not Disturb of the user.
 * @member {Number} start_hour
 */
UpdatePushPreferencesData.prototype['start_hour'] = undefined;

/**
 * Specifies the minute of the hour to start pausing the notifications for Do Not Disturb of the user.
 * @member {Number} start_min
 */
UpdatePushPreferencesData.prototype['start_min'] = undefined;

/**
 * Specifies the hour to stop pausing the notifications for Do Not Disturb of the user.
 * @member {Number} end_hour
 */
UpdatePushPreferencesData.prototype['end_hour'] = undefined;

/**
 * Specifies the minute of the hour to stop pausing the notifications for Do Not Disturb of the user.
 * @member {Number} end_min
 */
UpdatePushPreferencesData.prototype['end_min'] = undefined;

/**
 * Determines whether to snooze notification messages for the user during a specific period of time. (Default: false)
 * @member {Boolean} snooze_enabled
 */
UpdatePushPreferencesData.prototype['snooze_enabled'] = undefined;

/**
 * Specifies the timestamp of when to start snoozing the notifications, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps).
 * @member {Number} snooze_start_ts
 */
UpdatePushPreferencesData.prototype['snooze_start_ts'] = undefined;

/**
 * Specifies the timestamp of when to end snoozing the notifications, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps).
 * @member {Number} snooze_end_ts
 */
UpdatePushPreferencesData.prototype['snooze_end_ts'] = undefined;

/**
 * Determines whether to block push notifications from [all bots](/docs/chat/v3/platform-api/guides/bot-interface#2-list-bots) within the application. If the push_blocked_bot_ids is specified, notifications only from the bots in the property are blocked. (Default: false)
 * @member {Boolean} block_push_from_bots
 */
UpdatePushPreferencesData.prototype['block_push_from_bots'] = undefined;

/**
 * Specifies an array of one or more IDs of bots whose push notifications are blocked. This property is effective only when the block_push_from_bots is set to true.
 * @member {Array.<Number>} push_blocked_bot_ids
 */
UpdatePushPreferencesData.prototype['push_blocked_bot_ids'] = undefined;

/**
 * Specifies the timezone to be applied to push preferences with a value such as UTC, Asia/Seoul, Europe/London, etc.
 * @member {String} timezone
 */
UpdatePushPreferencesData.prototype['timezone'] = undefined;

/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app.
 * @member {String} push_sound
 */
UpdatePushPreferencesData.prototype['push_sound'] = undefined;
var _default = UpdatePushPreferencesData;
exports["default"] = _default;