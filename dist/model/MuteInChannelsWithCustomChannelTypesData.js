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
 * The MuteInChannelsWithCustomChannelTypesData model module.
 * @module model/MuteInChannelsWithCustomChannelTypesData
 * @version 0.0.13
 */
var MuteInChannelsWithCustomChannelTypesData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MuteInChannelsWithCustomChannelTypesData</code>.
   * @alias module:model/MuteInChannelsWithCustomChannelTypesData
   * @param channelCustomTypes {Array.<String>} Specifies an array of one or more custom channel types, in order to mute the user in channels with the channel types. The user is permanently muted unless unmuted (10 years, technically).
   */
  function MuteInChannelsWithCustomChannelTypesData(channelCustomTypes) {
    _classCallCheck(this, MuteInChannelsWithCustomChannelTypesData);

    MuteInChannelsWithCustomChannelTypesData.initialize(this, channelCustomTypes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MuteInChannelsWithCustomChannelTypesData, null, [{
    key: "initialize",
    value: function initialize(obj, channelCustomTypes) {
      obj['channel_custom_types'] = channelCustomTypes;
    }
    /**
     * Constructs a <code>MuteInChannelsWithCustomChannelTypesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MuteInChannelsWithCustomChannelTypesData} obj Optional instance to populate.
     * @return {module:model/MuteInChannelsWithCustomChannelTypesData} The populated <code>MuteInChannelsWithCustomChannelTypesData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MuteInChannelsWithCustomChannelTypesData();

        if (data.hasOwnProperty('channel_custom_types')) {
          obj['channel_custom_types'] = _ApiClient["default"].convertToType(data['channel_custom_types'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return MuteInChannelsWithCustomChannelTypesData;
}();
/**
 * Specifies an array of one or more custom channel types, in order to mute the user in channels with the channel types. The user is permanently muted unless unmuted (10 years, technically).
 * @member {Array.<String>} channel_custom_types
 */


MuteInChannelsWithCustomChannelTypesData.prototype['channel_custom_types'] = undefined;
var _default = MuteInChannelsWithCustomChannelTypesData;
exports["default"] = _default;