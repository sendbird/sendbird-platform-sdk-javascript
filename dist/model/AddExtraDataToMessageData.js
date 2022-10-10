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
 * The AddExtraDataToMessageData model module.
 * @module model/AddExtraDataToMessageData
 * @version 0.0.13
 */
var AddExtraDataToMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddExtraDataToMessageData</code>.
   * @alias module:model/AddExtraDataToMessageData
   * @param channelType {String} Specifies the type of the channel. Either open_channels or group_channels.
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param messageId {Number} Specifies the unique ID of the message to add key-values items for additional information.
   * @param sortedMetaarray {String} Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they've been specified.
   */
  function AddExtraDataToMessageData(channelType, channelUrl, messageId, sortedMetaarray) {
    _classCallCheck(this, AddExtraDataToMessageData);

    AddExtraDataToMessageData.initialize(this, channelType, channelUrl, messageId, sortedMetaarray);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddExtraDataToMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, messageId, sortedMetaarray) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['message_id'] = messageId;
      obj['sorted_metaarray'] = sortedMetaarray;
    }
    /**
     * Constructs a <code>AddExtraDataToMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddExtraDataToMessageData} obj Optional instance to populate.
     * @return {module:model/AddExtraDataToMessageData} The populated <code>AddExtraDataToMessageData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddExtraDataToMessageData();

        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('message_id')) {
          obj['message_id'] = _ApiClient["default"].convertToType(data['message_id'], 'Number');
        }

        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddExtraDataToMessageData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */


AddExtraDataToMessageData.prototype['channel_type'] = undefined;
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */

AddExtraDataToMessageData.prototype['channel_url'] = undefined;
/**
 * Specifies the unique ID of the message to add key-values items for additional information.
 * @member {Number} message_id
 */

AddExtraDataToMessageData.prototype['message_id'] = undefined;
/**
 * Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they've been specified.
 * @member {String} sorted_metaarray
 */

AddExtraDataToMessageData.prototype['sorted_metaarray'] = undefined;
var _default = AddExtraDataToMessageData;
exports["default"] = _default;