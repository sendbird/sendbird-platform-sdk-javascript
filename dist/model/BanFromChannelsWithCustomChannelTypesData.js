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
 * The BanFromChannelsWithCustomChannelTypesData model module.
 * @module model/BanFromChannelsWithCustomChannelTypesData
 * @version 0.0.13
 */
var BanFromChannelsWithCustomChannelTypesData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BanFromChannelsWithCustomChannelTypesData</code>.
   * @alias module:model/BanFromChannelsWithCustomChannelTypesData
   * @param channelCustomTypes {Array.<String>} Specifies an array of one or more custom channel types, in order to ban the user from channels with the channel types. The user is permanently banned unless unbanned (10 years, technically).
   */
  function BanFromChannelsWithCustomChannelTypesData(channelCustomTypes) {
    _classCallCheck(this, BanFromChannelsWithCustomChannelTypesData);

    BanFromChannelsWithCustomChannelTypesData.initialize(this, channelCustomTypes);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BanFromChannelsWithCustomChannelTypesData, null, [{
    key: "initialize",
    value: function initialize(obj, channelCustomTypes) {
      obj['channel_custom_types'] = channelCustomTypes;
    }
    /**
     * Constructs a <code>BanFromChannelsWithCustomChannelTypesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BanFromChannelsWithCustomChannelTypesData} obj Optional instance to populate.
     * @return {module:model/BanFromChannelsWithCustomChannelTypesData} The populated <code>BanFromChannelsWithCustomChannelTypesData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BanFromChannelsWithCustomChannelTypesData();

        if (data.hasOwnProperty('channel_custom_types')) {
          obj['channel_custom_types'] = _ApiClient["default"].convertToType(data['channel_custom_types'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return BanFromChannelsWithCustomChannelTypesData;
}();
/**
 * Specifies an array of one or more custom channel types, in order to ban the user from channels with the channel types. The user is permanently banned unless unbanned (10 years, technically).
 * @member {Array.<String>} channel_custom_types
 */


BanFromChannelsWithCustomChannelTypesData.prototype['channel_custom_types'] = undefined;
var _default = BanFromChannelsWithCustomChannelTypesData;
exports["default"] = _default;