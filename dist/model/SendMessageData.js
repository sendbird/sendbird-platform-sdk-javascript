"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SendMessageData model module.
 * @module model/SendMessageData
 * @version 1.0.0
 */
var SendMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendMessageData</code>.
   * @alias module:model/SendMessageData
   * @param channelType {String} Specifies the type of the channel. Either open_channels or group_channels.
   * @param channelUrl {String} Specifies the URL of the channel to send a message to.
   * @param messageType {String} Specifies the type of the message as ADMM.
   * @param message {String} Specifies the content of the message.
   * @param customType {String} Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
   * @param data {String} Specifies additional message information such as custom font size, font type or `JSON` formatted string.
   * @param sendPush {Boolean} Determines whether to send a push notification for the message to the members of the channel (applicable to group channels only). Unlike text and file messages, a push notification for an admin message is not sent by default. (Default: false)
   * @param mentionType {String} Specifies the mentioning type which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users)
   * @param mentionedUserIds {Array.<Number>} Specifies an array of one or more IDs of the users who will get a notification for the message.
   * @param isSilent {Boolean} Determines whether to send a message without updating some of the channel properties. If a message is sent in a channel, with this property set to true, the channel's last_message is updated only for the sender while its unread_message_count remains unchanged for all channel members. Also, the message doesn't send a push notification to message receivers. If the message is sent to a hidden channel, the channel still remains hidden. (Default: false)</br></br>  Once the value of this property is set, it can't be reverted.
   * @param sortedMetaarray {String} Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they’ve been specified.
   * @param createdAt {Number} Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. This property can be used when migrating the messages of other system to Sendbird server. If specified, the server sets the message's creation time as the property value.
   * @param dedupId {String} Specifies the unique message ID created by other system. In general, this property is used to prevent the same message data from getting inserted when migrating the messages of the other system to Sendbird server. If specified, the server performs a duplicate check using the property value.
   * @param metaarray {String} (Deprecated) Specifies a `JSON` object of one or more key-values items which store additional message information. The item consists of a key and the values in an array.
   */
  function SendMessageData(channelType, channelUrl, messageType, message, customType, data, sendPush, mentionType, mentionedUserIds, isSilent, sortedMetaarray, createdAt, dedupId, metaarray) {
    _classCallCheck(this, SendMessageData);

    SendMessageData.initialize(this, channelType, channelUrl, messageType, message, customType, data, sendPush, mentionType, mentionedUserIds, isSilent, sortedMetaarray, createdAt, dedupId, metaarray);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, messageType, message, customType, data, sendPush, mentionType, mentionedUserIds, isSilent, sortedMetaarray, createdAt, dedupId, metaarray) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['message_type'] = messageType;
      obj['message'] = message;
      obj['custom_type'] = customType;
      obj['data'] = data;
      obj['send_push'] = sendPush;
      obj['mention_type'] = mentionType;
      obj['mentioned_user_ids'] = mentionedUserIds;
      obj['is_silent'] = isSilent;
      obj['sorted_metaarray'] = sortedMetaarray;
      obj['created_at'] = createdAt;
      obj['dedup_id'] = dedupId;
      obj['metaarray'] = metaarray;
    }
    /**
     * Constructs a <code>SendMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendMessageData} obj Optional instance to populate.
     * @return {module:model/SendMessageData} The populated <code>SendMessageData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendMessageData();

        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _ApiClient["default"].convertToType(data['message_type'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('send_push')) {
          obj['send_push'] = _ApiClient["default"].convertToType(data['send_push'], 'Boolean');
        }

        if (data.hasOwnProperty('mention_type')) {
          obj['mention_type'] = _ApiClient["default"].convertToType(data['mention_type'], 'String');
        }

        if (data.hasOwnProperty('mentioned_user_ids')) {
          obj['mentioned_user_ids'] = _ApiClient["default"].convertToType(data['mentioned_user_ids'], ['Number']);
        }

        if (data.hasOwnProperty('is_silent')) {
          obj['is_silent'] = _ApiClient["default"].convertToType(data['is_silent'], 'Boolean');
        }

        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('dedup_id')) {
          obj['dedup_id'] = _ApiClient["default"].convertToType(data['dedup_id'], 'String');
        }

        if (data.hasOwnProperty('metaarray')) {
          obj['metaarray'] = _ApiClient["default"].convertToType(data['metaarray'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendMessageData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */


SendMessageData.prototype['channel_type'] = undefined;
/**
 * Specifies the URL of the channel to send a message to.
 * @member {String} channel_url
 */

SendMessageData.prototype['channel_url'] = undefined;
/**
 * Specifies the type of the message as ADMM.
 * @member {String} message_type
 */

SendMessageData.prototype['message_type'] = undefined;
/**
 * Specifies the content of the message.
 * @member {String} message
 */

SendMessageData.prototype['message'] = undefined;
/**
 * Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */

SendMessageData.prototype['custom_type'] = undefined;
/**
 * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
 * @member {String} data
 */

SendMessageData.prototype['data'] = undefined;
/**
 * Determines whether to send a push notification for the message to the members of the channel (applicable to group channels only). Unlike text and file messages, a push notification for an admin message is not sent by default. (Default: false)
 * @member {Boolean} send_push
 */

SendMessageData.prototype['send_push'] = undefined;
/**
 * Specifies the mentioning type which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users)
 * @member {String} mention_type
 */

SendMessageData.prototype['mention_type'] = undefined;
/**
 * Specifies an array of one or more IDs of the users who will get a notification for the message.
 * @member {Array.<Number>} mentioned_user_ids
 */

SendMessageData.prototype['mentioned_user_ids'] = undefined;
/**
 * Determines whether to send a message without updating some of the channel properties. If a message is sent in a channel, with this property set to true, the channel's last_message is updated only for the sender while its unread_message_count remains unchanged for all channel members. Also, the message doesn't send a push notification to message receivers. If the message is sent to a hidden channel, the channel still remains hidden. (Default: false)</br></br>  Once the value of this property is set, it can't be reverted.
 * @member {Boolean} is_silent
 */

SendMessageData.prototype['is_silent'] = undefined;
/**
 * Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they’ve been specified.
 * @member {String} sorted_metaarray
 */

SendMessageData.prototype['sorted_metaarray'] = undefined;
/**
 * Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. This property can be used when migrating the messages of other system to Sendbird server. If specified, the server sets the message's creation time as the property value.
 * @member {Number} created_at
 */

SendMessageData.prototype['created_at'] = undefined;
/**
 * Specifies the unique message ID created by other system. In general, this property is used to prevent the same message data from getting inserted when migrating the messages of the other system to Sendbird server. If specified, the server performs a duplicate check using the property value.
 * @member {String} dedup_id
 */

SendMessageData.prototype['dedup_id'] = undefined;
/**
 * (Deprecated) Specifies a `JSON` object of one or more key-values items which store additional message information. The item consists of a key and the values in an array.
 * @member {String} metaarray
 */

SendMessageData.prototype['metaarray'] = undefined;
var _default = SendMessageData;
exports["default"] = _default;