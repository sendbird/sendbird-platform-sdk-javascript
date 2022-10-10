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
 * The SendMessageData model module.
 * @module model/SendMessageData
 * @version 0.0.13
 */
var SendMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendMessageData</code>.
   * @alias module:model/SendMessageData
   * @param userId {String} Specifies the user ID of the sender.
   * @param messageType {String} Specifies the type of the message as MESG, FILE or ADMM
   * @param message {String} Specifies the content of the message.
   */
  function SendMessageData(userId, messageType, message) {
    _classCallCheck(this, SendMessageData);

    SendMessageData.initialize(this, userId, messageType, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, messageType, message) {
      obj['user_id'] = userId;
      obj['message_type'] = messageType;
      obj['message'] = message;
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

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

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
          obj['mentioned_user_ids'] = _ApiClient["default"].convertToType(data['mentioned_user_ids'], ['String']);
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

        if (data.hasOwnProperty('apns_bundle_id')) {
          obj['apns_bundle_id'] = _ApiClient["default"].convertToType(data['apns_bundle_id'], 'String');
        }

        if (data.hasOwnProperty('sound')) {
          obj['sound'] = _ApiClient["default"].convertToType(data['sound'], 'String');
        }

        if (data.hasOwnProperty('volume')) {
          obj['volume'] = _ApiClient["default"].convertToType(data['volume'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendMessageData;
}();
/**
 * Specifies the user ID of the sender.
 * @member {String} user_id
 */


SendMessageData.prototype['user_id'] = undefined;
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
 * Specifies the type of the message as MESG, FILE or ADMM
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
 * Determines whether to send a push notification for the message to the members of the channel (applicable to group channels only). Unlike text and file messages, a push notification for an admin message is not sent by default. (Default: true)
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
 * @member {Array.<String>} mentioned_user_ids
 */

SendMessageData.prototype['mentioned_user_ids'] = undefined;
/**
 * Determines whether to send a message without updating some of the channel properties. If a message is sent in a channel, with this property set to true, the channel's last_message is updated only for the sender while its unread_message_count remains unchanged for all channel members. Also, the message doesn't send a push notification to message receivers. If the message is sent to a hidden channel, the channel still remains hidden. (Default: false)</br></br>  Once the value of this property is set, it can't be reverted.
 * @member {Boolean} is_silent
 */

SendMessageData.prototype['is_silent'] = undefined;
/**
 * Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they've been specified.
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
 * Specifies the bundle ID of the client app in order to send a push notification to iOS devices. You can find this in Settings > Chat > Notifications > Push notification services
 * @member {String} apns_bundle_id
 */

SendMessageData.prototype['apns_bundle_id'] = undefined;
/**
 * Specifies the name of the file that sounds for critical alerts.
 * @member {String} sound
 */

SendMessageData.prototype['sound'] = undefined;
/**
 * Specifies the volume of the critical alert sound. The volume ranges from 0.0 to 1.0, which indicates silent and full volume, respectively. (Default 1.0)
 * @member {Number} volume
 */

SendMessageData.prototype['volume'] = undefined;
var _default = SendMessageData;
exports["default"] = _default;