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
 * The AddReactionToAMessageData model module.
 * @module model/AddReactionToAMessageData
 * @version 0.0.16
 */
var AddReactionToAMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddReactionToAMessageData</code>.
   * @alias module:model/AddReactionToAMessageData
   * @param channelType {String} Specifies the type of the channel. Currently, a value of group_channels is only available for the parameter.
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param messageId {Number} Specifies the unique ID of the message to add a reaction to.
   * @param userId {String} Specifies the ID of the user who reacts to the message.
   * @param reaction {String} Specifies the unique key of the reaction to be added to the message. The length is limited to 192 charaters.
   */
  function AddReactionToAMessageData(channelType, channelUrl, messageId, userId, reaction) {
    _classCallCheck(this, AddReactionToAMessageData);
    AddReactionToAMessageData.initialize(this, channelType, channelUrl, messageId, userId, reaction);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddReactionToAMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, messageId, userId, reaction) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['message_id'] = messageId;
      obj['user_id'] = userId;
      obj['reaction'] = reaction;
    }

    /**
     * Constructs a <code>AddReactionToAMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddReactionToAMessageData} obj Optional instance to populate.
     * @return {module:model/AddReactionToAMessageData} The populated <code>AddReactionToAMessageData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddReactionToAMessageData();
        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('message_id')) {
          obj['message_id'] = _ApiClient["default"].convertToType(data['message_id'], 'Number');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('reaction')) {
          obj['reaction'] = _ApiClient["default"].convertToType(data['reaction'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddReactionToAMessageData;
}();
/**
 * Specifies the type of the channel. Currently, a value of group_channels is only available for the parameter.
 * @member {String} channel_type
 */
AddReactionToAMessageData.prototype['channel_type'] = undefined;

/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */
AddReactionToAMessageData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the message to add a reaction to.
 * @member {Number} message_id
 */
AddReactionToAMessageData.prototype['message_id'] = undefined;

/**
 * Specifies the ID of the user who reacts to the message.
 * @member {String} user_id
 */
AddReactionToAMessageData.prototype['user_id'] = undefined;

/**
 * Specifies the unique key of the reaction to be added to the message. The length is limited to 192 charaters.
 * @member {String} reaction
 */
AddReactionToAMessageData.prototype['reaction'] = undefined;
var _default = AddReactionToAMessageData;
exports["default"] = _default;