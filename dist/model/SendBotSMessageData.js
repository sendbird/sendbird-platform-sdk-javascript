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
 * The SendBotSMessageData model module.
 * @module model/SendBotSMessageData
 * @version 1.0.0
 */
var SendBotSMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBotSMessageData</code>.
   * @alias module:model/SendBotSMessageData
   * @param message {String} Specifies the content of the message sent by the bot.
   * @param channelUrl {String} Specifies the URL of the channel where the message is sent to.
   * @param customType {String} Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.
   * @param data {String} Specifies additional message information such as custom font size, font type or `JSON` formatted string.
   * @param sendPush {Boolean} Determines whether to send a push notification for the message to the members of the channel (Default: true)
   * @param mentioned {Array.<Number>} Specifies an array of one or more IDs of the users who get a notification for the message.
   * @param markAsRead {Boolean} Determines whether to mark the message as read for the bot. If set to false, the bot's unread_count and read_receipt remain unchanged after the message is sent. (Default: true)
   * @param dedupId {String} Specifies the unique ID for the message to prevent the same message data from getting sent to the channel.
   * @param createdAt {Number} Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format.
   */
  function SendBotSMessageData(message, channelUrl, customType, data, sendPush, mentioned, markAsRead, dedupId, createdAt) {
    _classCallCheck(this, SendBotSMessageData);

    SendBotSMessageData.initialize(this, message, channelUrl, customType, data, sendPush, mentioned, markAsRead, dedupId, createdAt);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBotSMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, message, channelUrl, customType, data, sendPush, mentioned, markAsRead, dedupId, createdAt) {
      obj['message'] = message;
      obj['channel_url'] = channelUrl;
      obj['custom_type'] = customType;
      obj['data'] = data;
      obj['send_push'] = sendPush;
      obj['mentioned'] = mentioned;
      obj['mark_as_read'] = markAsRead;
      obj['dedup_id'] = dedupId;
      obj['created_at'] = createdAt;
    }
    /**
     * Constructs a <code>SendBotSMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBotSMessageData} obj Optional instance to populate.
     * @return {module:model/SendBotSMessageData} The populated <code>SendBotSMessageData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBotSMessageData();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
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

        if (data.hasOwnProperty('mentioned')) {
          obj['mentioned'] = _ApiClient["default"].convertToType(data['mentioned'], ['Number']);
        }

        if (data.hasOwnProperty('mark_as_read')) {
          obj['mark_as_read'] = _ApiClient["default"].convertToType(data['mark_as_read'], 'Boolean');
        }

        if (data.hasOwnProperty('dedup_id')) {
          obj['dedup_id'] = _ApiClient["default"].convertToType(data['dedup_id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBotSMessageData;
}();
/**
 * Specifies the content of the message sent by the bot.
 * @member {String} message
 */


SendBotSMessageData.prototype['message'] = undefined;
/**
 * Specifies the URL of the channel where the message is sent to.
 * @member {String} channel_url
 */

SendBotSMessageData.prototype['channel_url'] = undefined;
/**
 * Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.
 * @member {String} custom_type
 */

SendBotSMessageData.prototype['custom_type'] = undefined;
/**
 * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
 * @member {String} data
 */

SendBotSMessageData.prototype['data'] = undefined;
/**
 * Determines whether to send a push notification for the message to the members of the channel (Default: true)
 * @member {Boolean} send_push
 */

SendBotSMessageData.prototype['send_push'] = undefined;
/**
 * Specifies an array of one or more IDs of the users who get a notification for the message.
 * @member {Array.<Number>} mentioned
 */

SendBotSMessageData.prototype['mentioned'] = undefined;
/**
 * Determines whether to mark the message as read for the bot. If set to false, the bot's unread_count and read_receipt remain unchanged after the message is sent. (Default: true)
 * @member {Boolean} mark_as_read
 */

SendBotSMessageData.prototype['mark_as_read'] = undefined;
/**
 * Specifies the unique ID for the message to prevent the same message data from getting sent to the channel.
 * @member {String} dedup_id
 */

SendBotSMessageData.prototype['dedup_id'] = undefined;
/**
 * Specifies the time that the message was sent, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format.
 * @member {Number} created_at
 */

SendBotSMessageData.prototype['created_at'] = undefined;
var _default = SendBotSMessageData;
exports["default"] = _default;