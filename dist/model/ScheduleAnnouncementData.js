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
 * The ScheduleAnnouncementData model module.
 * @module model/ScheduleAnnouncementData
 * @version 1.0.7
 */
var ScheduleAnnouncementData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScheduleAnnouncementData</code>.
   * @alias module:model/ScheduleAnnouncementData
   * @param message {String} The [message](/docs/chat/v3/platform-api/guides/messages#-3-resource-representation) of a new announcement.
   * @param messageType {String} Specifies the type of the message, which can be either MESG for a text message and ADMM for an admin message.
   * @param messageUserId {String} Specifies the unique ID of the sender when the message.type is MESG. When the message.type value is ADMM, this property is not effective.
   * @param messageContent {String} Specifies the content of the message.
   * @param targetAt {String} Specifies the target channels to send the announcement to. Acceptable values are the following: <br/> - sender_all_channels (Default): sends the announcement to all of the sender's group channels.<br />- target_channels: sends the announcement to all target group channels. When the `message.type` of the announcement is ADMM, this is the only valid option. <br /> - target_users_included_channels: sends the announcement to group channels consisting of the sender, target users, and other members. <br/> - target_users_only_channels: sends the announcement to group channels consisting of the sender and target users only.
   * @param targetList {Array.<String>} Specifies an array of one or more target user IDs or target channel URLs to send the announcement to when the target_at is  target_channels, target_users_only_channels, or target_users_included_channels.<br /><br />  When the target_at value is sender_all_channels, this property is not effective.
   * @param targetChannelType {String} Determines which type of group channel to send the announcement to, based on the target_at and target_list. This property is effective only when the target_at is either target_users_only_channels or target_users_included_channels and the target_list is specified. Acceptable values are limited to the following:<br/>- all: send the announcement to all channels that have all target users and the sender in them, regardless of channel type.<br/>- distinct (default): sends this announcement to the distinct channels. Distinct channels continue to use the same existing channels whenever someone attempts to create a new channel with the same members.<br/>- non-distinct: sends this announcement to the non-distinct channels. Non-distinct channels always create a new channel even if there is an existing channel with the same members.<br/><br/> The distinct and non-distinct channels are a subtype of group channels, determined by the [is_distinct](/docs/chat/v3/platform-api/guides/group-channel#2-types-of-a-channel-3-resource-representation) property.
   */
  function ScheduleAnnouncementData(message, messageType, messageUserId, messageContent, targetAt, targetList, targetChannelType) {
    _classCallCheck(this, ScheduleAnnouncementData);

    ScheduleAnnouncementData.initialize(this, message, messageType, messageUserId, messageContent, targetAt, targetList, targetChannelType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduleAnnouncementData, null, [{
    key: "initialize",
    value: function initialize(obj, message, messageType, messageUserId, messageContent, targetAt, targetList, targetChannelType) {
      obj['message'] = message;
      obj['message.type'] = messageType;
      obj['message.user_id'] = messageUserId;
      obj['message.content'] = messageContent;
      obj['target_at'] = targetAt;
      obj['target_list'] = targetList;
      obj['target_channel_type'] = targetChannelType;
    }
    /**
     * Constructs a <code>ScheduleAnnouncementData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleAnnouncementData} obj Optional instance to populate.
     * @return {module:model/ScheduleAnnouncementData} The populated <code>ScheduleAnnouncementData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduleAnnouncementData();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('message.type')) {
          obj['message.type'] = _ApiClient["default"].convertToType(data['message.type'], 'String');
        }

        if (data.hasOwnProperty('message.user_id')) {
          obj['message.user_id'] = _ApiClient["default"].convertToType(data['message.user_id'], 'String');
        }

        if (data.hasOwnProperty('message.content')) {
          obj['message.content'] = _ApiClient["default"].convertToType(data['message.content'], 'String');
        }

        if (data.hasOwnProperty('target_at')) {
          obj['target_at'] = _ApiClient["default"].convertToType(data['target_at'], 'String');
        }

        if (data.hasOwnProperty('target_list')) {
          obj['target_list'] = _ApiClient["default"].convertToType(data['target_list'], ['String']);
        }

        if (data.hasOwnProperty('target_channel_type')) {
          obj['target_channel_type'] = _ApiClient["default"].convertToType(data['target_channel_type'], 'String');
        }

        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }

        if (data.hasOwnProperty('message.custom_type')) {
          obj['message.custom_type'] = _ApiClient["default"].convertToType(data['message.custom_type'], 'String');
        }

        if (data.hasOwnProperty('message.data')) {
          obj['message.data'] = _ApiClient["default"].convertToType(data['message.data'], 'String');
        }

        if (data.hasOwnProperty('create_channel')) {
          obj['create_channel'] = _ApiClient["default"].convertToType(data['create_channel'], 'Boolean');
        }

        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }

        if (data.hasOwnProperty('create_channel_options')) {
          obj['create_channel_options'] = _ApiClient["default"].convertToType(data['create_channel_options'], 'String');
        }

        if (data.hasOwnProperty('create_channel_options.name')) {
          obj['create_channel_options.name'] = _ApiClient["default"].convertToType(data['create_channel_options.name'], 'String');
        }

        if (data.hasOwnProperty('create_channel_options.cover_url')) {
          obj['create_channel_options.cover_url'] = _ApiClient["default"].convertToType(data['create_channel_options.cover_url'], 'String');
        }

        if (data.hasOwnProperty('create_channel_options.custom_type')) {
          obj['create_channel_options.custom_type'] = _ApiClient["default"].convertToType(data['create_channel_options.custom_type'], 'String');
        }

        if (data.hasOwnProperty('create_channel_options.data')) {
          obj['create_channel_options.data'] = _ApiClient["default"].convertToType(data['create_channel_options.data'], 'String');
        }

        if (data.hasOwnProperty('create_channel_options.distinct')) {
          obj['create_channel_options.distinct'] = _ApiClient["default"].convertToType(data['create_channel_options.distinct'], 'String');
        }

        if (data.hasOwnProperty('scheduled_at')) {
          obj['scheduled_at'] = _ApiClient["default"].convertToType(data['scheduled_at'], 'Number');
        }

        if (data.hasOwnProperty('cease_at')) {
          obj['cease_at'] = _ApiClient["default"].convertToType(data['cease_at'], 'String');
        }

        if (data.hasOwnProperty('resume_at')) {
          obj['resume_at'] = _ApiClient["default"].convertToType(data['resume_at'], 'String');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('enable_push')) {
          obj['enable_push'] = _ApiClient["default"].convertToType(data['enable_push'], 'Boolean');
        }

        if (data.hasOwnProperty('assign_sender_as_channel_inviter')) {
          obj['assign_sender_as_channel_inviter'] = _ApiClient["default"].convertToType(data['assign_sender_as_channel_inviter'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ScheduleAnnouncementData;
}();
/**
 * The [message](/docs/chat/v3/platform-api/guides/messages#-3-resource-representation) of a new announcement.
 * @member {String} message
 */


ScheduleAnnouncementData.prototype['message'] = undefined;
/**
 * Specifies the type of the message, which can be either MESG for a text message and ADMM for an admin message.
 * @member {String} message.type
 */

ScheduleAnnouncementData.prototype['message.type'] = undefined;
/**
 * Specifies the unique ID of the sender when the message.type is MESG. When the message.type value is ADMM, this property is not effective.
 * @member {String} message.user_id
 */

ScheduleAnnouncementData.prototype['message.user_id'] = undefined;
/**
 * Specifies the content of the message.
 * @member {String} message.content
 */

ScheduleAnnouncementData.prototype['message.content'] = undefined;
/**
 * Specifies the target channels to send the announcement to. Acceptable values are the following: <br/> - sender_all_channels (Default): sends the announcement to all of the sender's group channels.<br />- target_channels: sends the announcement to all target group channels. When the `message.type` of the announcement is ADMM, this is the only valid option. <br /> - target_users_included_channels: sends the announcement to group channels consisting of the sender, target users, and other members. <br/> - target_users_only_channels: sends the announcement to group channels consisting of the sender and target users only.
 * @member {String} target_at
 */

ScheduleAnnouncementData.prototype['target_at'] = undefined;
/**
 * Specifies an array of one or more target user IDs or target channel URLs to send the announcement to when the target_at is  target_channels, target_users_only_channels, or target_users_included_channels.<br /><br />  When the target_at value is sender_all_channels, this property is not effective.
 * @member {Array.<String>} target_list
 */

ScheduleAnnouncementData.prototype['target_list'] = undefined;
/**
 * Determines which type of group channel to send the announcement to, based on the target_at and target_list. This property is effective only when the target_at is either target_users_only_channels or target_users_included_channels and the target_list is specified. Acceptable values are limited to the following:<br/>- all: send the announcement to all channels that have all target users and the sender in them, regardless of channel type.<br/>- distinct (default): sends this announcement to the distinct channels. Distinct channels continue to use the same existing channels whenever someone attempts to create a new channel with the same members.<br/>- non-distinct: sends this announcement to the non-distinct channels. Non-distinct channels always create a new channel even if there is an existing channel with the same members.<br/><br/> The distinct and non-distinct channels are a subtype of group channels, determined by the [is_distinct](/docs/chat/v3/platform-api/guides/group-channel#2-types-of-a-channel-3-resource-representation) property.
 * @member {String} target_channel_type
 */

ScheduleAnnouncementData.prototype['target_channel_type'] = undefined;
/**
 * Specifies the unique ID of the new announcement. The unique_id will be automatically created unless specified.
 * @member {String} unique_id
 */

ScheduleAnnouncementData.prototype['unique_id'] = undefined;
/**
 * Specifies the custom message type of the message of the new announcement.
 * @member {String} message.custom_type
 */

ScheduleAnnouncementData.prototype['message.custom_type'] = undefined;
/**
 * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
 * @member {String} message.data
 */

ScheduleAnnouncementData.prototype['message.data'] = undefined;
/**
 * Determines whether to create a new channel if there is no existing channel that matches with the target options including target_at and target_list. By specifying the create_channel_options, you can configure the properties of newly created channels. (Default: false)
 * @member {Boolean} create_channel
 */

ScheduleAnnouncementData.prototype['create_channel'] = undefined;
/**
 * Specifies the announcement group that the new announcement belongs to.<br/> <br/> This property is effective only when the target_at is either target_users_only_channels or target_users_included_channels.
 * @member {String} announcement_group
 */

ScheduleAnnouncementData.prototype['announcement_group'] = undefined;
/**
 * A newly created channel configuration.
 * @member {String} create_channel_options
 */

ScheduleAnnouncementData.prototype['create_channel_options'] = undefined;
/**
 * Specifies the name of channels to be created. (Default: Group Channel)
 * @member {String} create_channel_options.name
 */

ScheduleAnnouncementData.prototype['create_channel_options.name'] = undefined;
/**
 * Specifies the URL of the cover image for the new channels.
 * @member {String} create_channel_options.cover_url
 */

ScheduleAnnouncementData.prototype['create_channel_options.cover_url'] = undefined;
/**
 * Specifies the custom channel type of the new channels.
 * @member {String} create_channel_options.custom_type
 */

ScheduleAnnouncementData.prototype['create_channel_options.custom_type'] = undefined;
/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} create_channel_options.data
 */

ScheduleAnnouncementData.prototype['create_channel_options.data'] = undefined;
/**
 * Determines whether to create a [distinct](/docs/chat/v3/platform-api/guides/channel-types#2-group-channel) channel. (Default: true)
 * @member {String} create_channel_options.distinct
 */

ScheduleAnnouncementData.prototype['create_channel_options.distinct'] = undefined;
/**
 * Specifies the time to start the announcement, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. If not specified, the default is the timestamp of when the request was delivered to Sendbird server. (Default: current timestamp)
 * @member {Number} scheduled_at
 */

ScheduleAnnouncementData.prototype['scheduled_at'] = undefined;
/**
 * Specifies the time to temporarily put the announcement on hold in UTC. The string is represented in HHMM format. This should be specified in conjunction with the resume_at property.<br/><br/> If both the cease_at and resume_at are not specified, Sendbird server starts to send the announcement at the time of the scheduled_at above.
 * @member {String} cease_at
 */

ScheduleAnnouncementData.prototype['cease_at'] = undefined;
/**
 * Specifies the time to automatically resume the on-hold announcement in UTC. The string is represented in HHMM format. This should be specified in conjunction with the cease_at property above.<br/><br/> If both the cease_at and resume_at are not specified, Sendbird server starts to send the announcement at the time of the scheduled_at above.
 * @member {String} resume_at
 */

ScheduleAnnouncementData.prototype['resume_at'] = undefined;
/**
 * Specifies the time to permanently end the announcement, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous##2-timestamps) format. If this property is specified, the announcement ends even when the announcement is not sent to all its targets. <br/><br/> For the announcement to run safely, the end_at time should be set at least 10 minutes later than the scheduled_at time.
 * @member {Number} end_at
 */

ScheduleAnnouncementData.prototype['end_at'] = undefined;
/**
 * Determines whether to turn on push notification for the announcement. If set to true, push notifications will be sent for the announcement. (Default: true)
 * @member {Boolean} enable_push
 */

ScheduleAnnouncementData.prototype['enable_push'] = undefined;
/**
 * Determines whether to assign an announcement sender as an inviter of the newly created channels. (Default: false)
 * @member {Boolean} assign_sender_as_channel_inviter
 */

ScheduleAnnouncementData.prototype['assign_sender_as_channel_inviter'] = undefined;
var _default = ScheduleAnnouncementData;
exports["default"] = _default;