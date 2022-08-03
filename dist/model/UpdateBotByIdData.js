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
 * The UpdateBotByIdData model module.
 * @module model/UpdateBotByIdData
 * @version 1.0.7
 */
var UpdateBotByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateBotByIdData</code>.
   * @alias module:model/UpdateBotByIdData
   * @param botUserid {String} Specifies the ID of the bot to update.
   * @param botNickname {String} Specifies the bot's nickname. The length is limited to 80 characters.
   * @param botProfileUrl {String} Specifies the URL of the bot's profile image. The size is limited to 2,048 characters.
   * @param botCallbackUrl {String} Specifies the server URL where bot is located to receive all events, requests, and data forwarded from an application. For security reasons, it is highly recommended that you use an SSL server. The length is limited to 1,024 characters.
   * @param isPrivacyMode {Boolean} In the channels of where the bot is a member, determines whether to only forward the messages with the specific conditions to the bot or forword all messages to the bot, for privacy concerns. If set to true, only messages that start with a '/' or mention the bot_userid are forwarded to the bot. If set to false, all messages are forwarded.
   * @param enableMarkAsRead {Boolean} Determines whether to mark the bot's message as read upon sending it. (Default: true)
   * @param showMember {Boolean} Determines whether to include information about the members of each channel in a callback response. (Default: false)
   * @param channelInvitationPreference {Number} Determines whether the bot automatically joins the channel when invited or joins the channel after manually accepting an invitation using the API. If set to 0, it automatically joins the channel. If set to 1, the latter takes place. (Default: 0)
   */
  function UpdateBotByIdData(botUserid, botNickname, botProfileUrl, botCallbackUrl, isPrivacyMode, enableMarkAsRead, showMember, channelInvitationPreference) {
    _classCallCheck(this, UpdateBotByIdData);

    UpdateBotByIdData.initialize(this, botUserid, botNickname, botProfileUrl, botCallbackUrl, isPrivacyMode, enableMarkAsRead, showMember, channelInvitationPreference);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateBotByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, botUserid, botNickname, botProfileUrl, botCallbackUrl, isPrivacyMode, enableMarkAsRead, showMember, channelInvitationPreference) {
      obj['bot_userid'] = botUserid;
      obj['bot_nickname'] = botNickname;
      obj['bot_profile_url'] = botProfileUrl;
      obj['bot_callback_url'] = botCallbackUrl;
      obj['is_privacy_mode'] = isPrivacyMode;
      obj['enable_mark_as_read'] = enableMarkAsRead;
      obj['show_member'] = showMember;
      obj['channel_invitation_preference'] = channelInvitationPreference;
    }
    /**
     * Constructs a <code>UpdateBotByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateBotByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateBotByIdData} The populated <code>UpdateBotByIdData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateBotByIdData();

        if (data.hasOwnProperty('bot_userid')) {
          obj['bot_userid'] = _ApiClient["default"].convertToType(data['bot_userid'], 'String');
        }

        if (data.hasOwnProperty('bot_nickname')) {
          obj['bot_nickname'] = _ApiClient["default"].convertToType(data['bot_nickname'], 'String');
        }

        if (data.hasOwnProperty('bot_profile_url')) {
          obj['bot_profile_url'] = _ApiClient["default"].convertToType(data['bot_profile_url'], 'String');
        }

        if (data.hasOwnProperty('bot_callback_url')) {
          obj['bot_callback_url'] = _ApiClient["default"].convertToType(data['bot_callback_url'], 'String');
        }

        if (data.hasOwnProperty('is_privacy_mode')) {
          obj['is_privacy_mode'] = _ApiClient["default"].convertToType(data['is_privacy_mode'], 'Boolean');
        }

        if (data.hasOwnProperty('enable_mark_as_read')) {
          obj['enable_mark_as_read'] = _ApiClient["default"].convertToType(data['enable_mark_as_read'], 'Boolean');
        }

        if (data.hasOwnProperty('show_member')) {
          obj['show_member'] = _ApiClient["default"].convertToType(data['show_member'], 'Boolean');
        }

        if (data.hasOwnProperty('channel_invitation_preference')) {
          obj['channel_invitation_preference'] = _ApiClient["default"].convertToType(data['channel_invitation_preference'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UpdateBotByIdData;
}();
/**
 * Specifies the ID of the bot to update.
 * @member {String} bot_userid
 */


UpdateBotByIdData.prototype['bot_userid'] = undefined;
/**
 * Specifies the bot's nickname. The length is limited to 80 characters.
 * @member {String} bot_nickname
 */

UpdateBotByIdData.prototype['bot_nickname'] = undefined;
/**
 * Specifies the URL of the bot's profile image. The size is limited to 2,048 characters.
 * @member {String} bot_profile_url
 */

UpdateBotByIdData.prototype['bot_profile_url'] = undefined;
/**
 * Specifies the server URL where bot is located to receive all events, requests, and data forwarded from an application. For security reasons, it is highly recommended that you use an SSL server. The length is limited to 1,024 characters.
 * @member {String} bot_callback_url
 */

UpdateBotByIdData.prototype['bot_callback_url'] = undefined;
/**
 * In the channels of where the bot is a member, determines whether to only forward the messages with the specific conditions to the bot or forword all messages to the bot, for privacy concerns. If set to true, only messages that start with a '/' or mention the bot_userid are forwarded to the bot. If set to false, all messages are forwarded.
 * @member {Boolean} is_privacy_mode
 */

UpdateBotByIdData.prototype['is_privacy_mode'] = undefined;
/**
 * Determines whether to mark the bot's message as read upon sending it. (Default: true)
 * @member {Boolean} enable_mark_as_read
 */

UpdateBotByIdData.prototype['enable_mark_as_read'] = undefined;
/**
 * Determines whether to include information about the members of each channel in a callback response. (Default: false)
 * @member {Boolean} show_member
 */

UpdateBotByIdData.prototype['show_member'] = undefined;
/**
 * Determines whether the bot automatically joins the channel when invited or joins the channel after manually accepting an invitation using the API. If set to 0, it automatically joins the channel. If set to 1, the latter takes place. (Default: 0)
 * @member {Number} channel_invitation_preference
 */

UpdateBotByIdData.prototype['channel_invitation_preference'] = undefined;
var _default = UpdateBotByIdData;
exports["default"] = _default;