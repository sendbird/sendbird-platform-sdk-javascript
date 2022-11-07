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
 * The GcFreezeChannelData model module.
 * @module model/GcFreezeChannelData
 * @version 0.0.16
 */
var GcFreezeChannelData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcFreezeChannelData</code>.
   * @alias module:model/GcFreezeChannelData
   * @param channelUrl {String} Specifies the URL of the channel to freeze.
   * @param freeze {Boolean} Determines whether to freeze the channel. (Default: false)
   */
  function GcFreezeChannelData(channelUrl, freeze) {
    _classCallCheck(this, GcFreezeChannelData);
    GcFreezeChannelData.initialize(this, channelUrl, freeze);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GcFreezeChannelData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, freeze) {
      obj['channel_url'] = channelUrl;
      obj['freeze'] = freeze;
    }

    /**
     * Constructs a <code>GcFreezeChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcFreezeChannelData} obj Optional instance to populate.
     * @return {module:model/GcFreezeChannelData} The populated <code>GcFreezeChannelData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcFreezeChannelData();
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('freeze')) {
          obj['freeze'] = _ApiClient["default"].convertToType(data['freeze'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return GcFreezeChannelData;
}();
/**
 * Specifies the URL of the channel to freeze.
 * @member {String} channel_url
 */
GcFreezeChannelData.prototype['channel_url'] = undefined;

/**
 * Determines whether to freeze the channel. (Default: false)
 * @member {Boolean} freeze
 */
GcFreezeChannelData.prototype['freeze'] = undefined;
var _default = GcFreezeChannelData;
exports["default"] = _default;