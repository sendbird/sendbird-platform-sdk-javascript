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
 * The CreateChannelMetacounterData model module.
 * @module model/CreateChannelMetacounterData
 * @version 1.0.7
 */
var CreateChannelMetacounterData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateChannelMetacounterData</code>.
   * @alias module:model/CreateChannelMetacounterData
   * @param channelType {String} Specifies the type of the channel. Either open_channels or group_channels.
   * @param channelUrl {String} Specifies the URL of the channel to store the metacounter in.
   * @param metacounter {String} Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be an integer. This property can have up to 5 items.
   */
  function CreateChannelMetacounterData(channelType, channelUrl, metacounter) {
    _classCallCheck(this, CreateChannelMetacounterData);

    CreateChannelMetacounterData.initialize(this, channelType, channelUrl, metacounter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateChannelMetacounterData, null, [{
    key: "initialize",
    value: function initialize(obj, channelType, channelUrl, metacounter) {
      obj['channel_type'] = channelType;
      obj['channel_url'] = channelUrl;
      obj['metacounter'] = metacounter;
    }
    /**
     * Constructs a <code>CreateChannelMetacounterData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateChannelMetacounterData} obj Optional instance to populate.
     * @return {module:model/CreateChannelMetacounterData} The populated <code>CreateChannelMetacounterData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateChannelMetacounterData();

        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('metacounter')) {
          obj['metacounter'] = _ApiClient["default"].convertToType(data['metacounter'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateChannelMetacounterData;
}();
/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */


CreateChannelMetacounterData.prototype['channel_type'] = undefined;
/**
 * Specifies the URL of the channel to store the metacounter in.
 * @member {String} channel_url
 */

CreateChannelMetacounterData.prototype['channel_url'] = undefined;
/**
 * Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be an integer. This property can have up to 5 items.
 * @member {String} metacounter
 */

CreateChannelMetacounterData.prototype['metacounter'] = undefined;
var _default = CreateChannelMetacounterData;
exports["default"] = _default;