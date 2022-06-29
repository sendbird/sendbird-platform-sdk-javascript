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
 * The CreateChannelMetadataData model module.
 * @module model/CreateChannelMetadataData
 * @version 1.0.3
 */
var CreateChannelMetadataData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateChannelMetadataData</code>.
   * @alias module:model/CreateChannelMetadataData
   * @param channelType {String} Specifies the type of the channel. Either open_channels or group_channels.
   * @param channelUrl {String} Specifies the URL of the channel to store the metadata in.
   * @param metadata {String} Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
   */
  function CreateChannelMetadataData(channelType, channelUrl, metadata) {
    _classCallCheck(this, CreateChannelMetadataData);

    CreateChannelMetadataData.initialize(this, channelType, channelUrl, metadata);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateChannelMetadataData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, metadata) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['metadata'] = metadata;
    }
    /**
     * Constructs a <code>CreateChannelMetadataData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateChannelMetadataData} obj Optional instance to populate.
     * @return {module:model/CreateChannelMetadataData} The populated <code>CreateChannelMetadataData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateChannelMetadataData();

        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }

        if (data.hasOwnProperty('include_ts')) {
          obj['include_ts'] = _ApiClient["default"].convertToType(data['include_ts'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CreateChannelMetadataData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */


CreateChannelMetadataData.prototype['channel_type'] = undefined;
/**
 * Specifies the URL of the channel to store the metadata in.
 * @member {String} channel_url
 */

CreateChannelMetadataData.prototype['channel_url'] = undefined;
/**
 * Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {String} metadata
 */

CreateChannelMetadataData.prototype['metadata'] = undefined;
/**
 * Determines whether to include the timestamp of when a metadata has been created in the response. (Default: false)
 * @member {Boolean} include_ts
 */

CreateChannelMetadataData.prototype['include_ts'] = undefined;
var _default = CreateChannelMetadataData;
exports["default"] = _default;