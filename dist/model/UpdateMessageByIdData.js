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
 * The UpdateMessageByIdData model module.
 * @module model/UpdateMessageByIdData
 * @version 1.0.0
 */
var UpdateMessageByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateMessageByIdData</code>.
   * @alias module:model/UpdateMessageByIdData
   * @param channelType {String} Specifies the type of the channel. Either open_channels or group_channels.
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param messageId {Number} Specifies the unique ID of the message to update.
   * @param messageType {String} Specifies the type of the message as ADMM.
   * @param message {String} Specifies the content of the message.
   * @param customType {String} Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
   * @param data {String} Specifies additional message information such as custom font size, font type or `JSON` formatted string.
   * @param mentionType {String} Specifies the mentioning method which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users)
   * @param mentionedUserIds {Array.<Number>} Specifies an array of one or more IDs of the users who will get a notification for the message.
   */
  function UpdateMessageByIdData(channelType, channelUrl, messageId, messageType, message, customType, data, mentionType, mentionedUserIds) {
    _classCallCheck(this, UpdateMessageByIdData);

    UpdateMessageByIdData.initialize(this, channelType, channelUrl, messageId, messageType, message, customType, data, mentionType, mentionedUserIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateMessageByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, messageId, messageType, message, customType, data, mentionType, mentionedUserIds) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['message_id'] = messageId;
      obj['message_type'] = messageType;
      obj['message'] = message;
      obj['custom_type'] = customType;
      obj['data'] = data;
      obj['mention_type'] = mentionType;
      obj['mentioned_user_ids'] = mentionedUserIds;
    }
    /**
     * Constructs a <code>UpdateMessageByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMessageByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateMessageByIdData} The populated <code>UpdateMessageByIdData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateMessageByIdData();

        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('message_id')) {
          obj['message_id'] = _ApiClient["default"].convertToType(data['message_id'], 'Number');
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

        if (data.hasOwnProperty('mention_type')) {
          obj['mention_type'] = _ApiClient["default"].convertToType(data['mention_type'], 'String');
        }

        if (data.hasOwnProperty('mentioned_user_ids')) {
          obj['mentioned_user_ids'] = _ApiClient["default"].convertToType(data['mentioned_user_ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return UpdateMessageByIdData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */


UpdateMessageByIdData.prototype['channel_type'] = undefined;
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */

UpdateMessageByIdData.prototype['channel_url'] = undefined;
/**
 * Specifies the unique ID of the message to update.
 * @member {Number} message_id
 */

UpdateMessageByIdData.prototype['message_id'] = undefined;
/**
 * Specifies the type of the message as ADMM.
 * @member {String} message_type
 */

UpdateMessageByIdData.prototype['message_type'] = undefined;
/**
 * Specifies the content of the message.
 * @member {String} message
 */

UpdateMessageByIdData.prototype['message'] = undefined;
/**
 * Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */

UpdateMessageByIdData.prototype['custom_type'] = undefined;
/**
 * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
 * @member {String} data
 */

UpdateMessageByIdData.prototype['data'] = undefined;
/**
 * Specifies the mentioning method which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users)
 * @member {String} mention_type
 */

UpdateMessageByIdData.prototype['mention_type'] = undefined;
/**
 * Specifies an array of one or more IDs of the users who will get a notification for the message.
 * @member {Array.<Number>} mentioned_user_ids
 */

UpdateMessageByIdData.prototype['mentioned_user_ids'] = undefined;
var _default = UpdateMessageByIdData;
exports["default"] = _default;