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
 * The OcCreateChannelData model module.
 * @module model/OcCreateChannelData
 * @version 1.0.0
 */
var OcCreateChannelData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcCreateChannelData</code>.
   * @alias module:model/OcCreateChannelData
   * @param name {String} Specifies the channel topic, or the name of the channel. The length is limited to 191 characters. (Default: open channel)
   * @param channelUrl {String} Specifies the URL of the channel. Only numbers, characters, and underscores are allowed. The length is 4 to 100 characters, inclusive. If not specified, a URL is automatically generated.
   * @param coverUrl {String} Specifies the URL of the cover image. The length is limited to 2,048 characters.
   * @param coverFile {File} Uploads a file for the channel cover image.
   * @param customType {String} Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
   * @param data {String} Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
   * @param isEphemeral {Boolean} Determines whether to preserve the messages in the channel for the purpose of retrieving chat history or not. It set to true, the messages in the channel are not saved in the Sendbird database and the chat history can't be retrieved. (Default: false)
   * @param isDynamicPartitioned2HowDynamicPartitioningWorks {Boolean} Determines whether the channel is an open channel with dynamic partitioning or not. If the value of this property is true, the open channel can create several subchannels in order to accommodate a massive number of usres. (Default: false)<br/><br/>  For the new Sendbird applications created after December 15, 2020, this property will be automatically set to true.
   * @param operatorIds {Array.<Number>} Specifies an array of one or more user IDs to register as operators of the channel. The maximum allowed number of operators per channel is 100. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.<br/><br/>  Operators cannot view messages that have been [moderated by](/docs/chat/v3/platform-api/guides/filter-and-moderation) the domain filter or profanity filter. Only the sender will be notified that the message has been blocked.
   * @param operators {Array.<String>} (Deprecated) Specifies the string IDs of the users registered as channel operators. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.
   */
  function OcCreateChannelData(name, channelUrl, coverUrl, coverFile, customType, data, isEphemeral, isDynamicPartitioned2HowDynamicPartitioningWorks, operatorIds, operators) {
    _classCallCheck(this, OcCreateChannelData);

    OcCreateChannelData.initialize(this, name, channelUrl, coverUrl, coverFile, customType, data, isEphemeral, isDynamicPartitioned2HowDynamicPartitioningWorks, operatorIds, operators);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OcCreateChannelData, null, [{
    key: "initialize",
    value: function initialize(obj, name, channelUrl, coverUrl, coverFile, customType, data, isEphemeral, isDynamicPartitioned2HowDynamicPartitioningWorks, operatorIds, operators) {
      obj['name'] = name;
      obj['channel_url'] = channelUrl;
      obj['cover_url'] = coverUrl;
      obj['cover_file'] = coverFile;
      obj['custom_type'] = customType;
      obj['data'] = data;
      obj['is_ephemeral'] = isEphemeral;
      obj['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'] = isDynamicPartitioned2HowDynamicPartitioningWorks;
      obj['operator_ids'] = operatorIds;
      obj['operators'] = operators;
    }
    /**
     * Constructs a <code>OcCreateChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcCreateChannelData} obj Optional instance to populate.
     * @return {module:model/OcCreateChannelData} The populated <code>OcCreateChannelData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcCreateChannelData();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('cover_file')) {
          obj['cover_file'] = _ApiClient["default"].convertToType(data['cover_file'], File);
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('is_ephemeral')) {
          obj['is_ephemeral'] = _ApiClient["default"].convertToType(data['is_ephemeral'], 'Boolean');
        }

        if (data.hasOwnProperty('[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)')) {
          obj['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'] = _ApiClient["default"].convertToType(data['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'], 'Boolean');
        }

        if (data.hasOwnProperty('operator_ids')) {
          obj['operator_ids'] = _ApiClient["default"].convertToType(data['operator_ids'], ['Number']);
        }

        if (data.hasOwnProperty('operators')) {
          obj['operators'] = _ApiClient["default"].convertToType(data['operators'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return OcCreateChannelData;
}();
/**
 * Specifies the channel topic, or the name of the channel. The length is limited to 191 characters. (Default: open channel)
 * @member {String} name
 */


OcCreateChannelData.prototype['name'] = undefined;
/**
 * Specifies the URL of the channel. Only numbers, characters, and underscores are allowed. The length is 4 to 100 characters, inclusive. If not specified, a URL is automatically generated.
 * @member {String} channel_url
 */

OcCreateChannelData.prototype['channel_url'] = undefined;
/**
 * Specifies the URL of the cover image. The length is limited to 2,048 characters.
 * @member {String} cover_url
 */

OcCreateChannelData.prototype['cover_url'] = undefined;
/**
 * Uploads a file for the channel cover image.
 * @member {File} cover_file
 */

OcCreateChannelData.prototype['cover_file'] = undefined;
/**
 * Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */

OcCreateChannelData.prototype['custom_type'] = undefined;
/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} data
 */

OcCreateChannelData.prototype['data'] = undefined;
/**
 * Determines whether to preserve the messages in the channel for the purpose of retrieving chat history or not. It set to true, the messages in the channel are not saved in the Sendbird database and the chat history can't be retrieved. (Default: false)
 * @member {Boolean} is_ephemeral
 */

OcCreateChannelData.prototype['is_ephemeral'] = undefined;
/**
 * Determines whether the channel is an open channel with dynamic partitioning or not. If the value of this property is true, the open channel can create several subchannels in order to accommodate a massive number of usres. (Default: false)<br/><br/>  For the new Sendbird applications created after December 15, 2020, this property will be automatically set to true.
 * @member {Boolean} [is_dynamic_partitioned](#2-how-dynamic-partitioning-works)
 */

OcCreateChannelData.prototype['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'] = undefined;
/**
 * Specifies an array of one or more user IDs to register as operators of the channel. The maximum allowed number of operators per channel is 100. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.<br/><br/>  Operators cannot view messages that have been [moderated by](/docs/chat/v3/platform-api/guides/filter-and-moderation) the domain filter or profanity filter. Only the sender will be notified that the message has been blocked.
 * @member {Array.<Number>} operator_ids
 */

OcCreateChannelData.prototype['operator_ids'] = undefined;
/**
 * (Deprecated) Specifies the string IDs of the users registered as channel operators. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.
 * @member {Array.<String>} operators
 */

OcCreateChannelData.prototype['operators'] = undefined;
var _default = OcCreateChannelData;
exports["default"] = _default;