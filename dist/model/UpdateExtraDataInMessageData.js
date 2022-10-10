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
 * The UpdateExtraDataInMessageData model module.
 * @module model/UpdateExtraDataInMessageData
 * @version 0.0.13
 */
var UpdateExtraDataInMessageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateExtraDataInMessageData</code>.
   * @alias module:model/UpdateExtraDataInMessageData
   * @param channelType {String} Specifies the type of the channel. Either open_channels or group_channels.
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param messageId {Number} Specifies the unique ID of the message to update key-values items.
   * @param sortedMetaarray {String} Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they've been specified.
   * @param mode {String} Determines whether to add the specified values in the items or remove the specified values from the existing items. Acceptable values are limited to add and remove. If set to add, the specified values are added only when they are different from the existing values. If set to remove, the specified values are removed only when they have the corresponding ones in the existing values.
   * @param upsert {Boolean} Determines whether to add new items in addition to updating existing items. If true, new key-values items are added when there are no items with the keys. The existing items are updated with new values when there are already items with the keys. If false, only the items of which keys match the ones you specify are updated with new values. (Default: false)
   */
  function UpdateExtraDataInMessageData(channelType, channelUrl, messageId, sortedMetaarray, mode, upsert) {
    _classCallCheck(this, UpdateExtraDataInMessageData);

    UpdateExtraDataInMessageData.initialize(this, channelType, channelUrl, messageId, sortedMetaarray, mode, upsert);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateExtraDataInMessageData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, messageId, sortedMetaarray, mode, upsert) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['message_id'] = messageId;
      obj['sorted_metaarray'] = sortedMetaarray;
      obj['mode'] = mode;
      obj['upsert'] = upsert;
    }
    /**
     * Constructs a <code>UpdateExtraDataInMessageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtraDataInMessageData} obj Optional instance to populate.
     * @return {module:model/UpdateExtraDataInMessageData} The populated <code>UpdateExtraDataInMessageData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateExtraDataInMessageData();

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

        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }

        if (data.hasOwnProperty('upsert')) {
          obj['upsert'] = _ApiClient["default"].convertToType(data['upsert'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UpdateExtraDataInMessageData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */


UpdateExtraDataInMessageData.prototype['channel_type'] = undefined;
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */

UpdateExtraDataInMessageData.prototype['channel_url'] = undefined;
/**
 * Specifies the unique ID of the message to update key-values items.
 * @member {Number} message_id
 */

UpdateExtraDataInMessageData.prototype['message_id'] = undefined;
/**
 * Specifies a `JSON` object of one or more key-values items which store additional message information. Each item consists of a key and the values in an array. Items are saved and will be returned in the exact order they've been specified.
 * @member {String} sorted_metaarray
 */

UpdateExtraDataInMessageData.prototype['sorted_metaarray'] = undefined;
/**
 * Determines whether to add the specified values in the items or remove the specified values from the existing items. Acceptable values are limited to add and remove. If set to add, the specified values are added only when they are different from the existing values. If set to remove, the specified values are removed only when they have the corresponding ones in the existing values.
 * @member {String} mode
 */

UpdateExtraDataInMessageData.prototype['mode'] = undefined;
/**
 * Determines whether to add new items in addition to updating existing items. If true, new key-values items are added when there are no items with the keys. The existing items are updated with new values when there are already items with the keys. If false, only the items of which keys match the ones you specify are updated with new values. (Default: false)
 * @member {Boolean} upsert
 */

UpdateExtraDataInMessageData.prototype['upsert'] = undefined;
var _default = UpdateExtraDataInMessageData;
exports["default"] = _default;