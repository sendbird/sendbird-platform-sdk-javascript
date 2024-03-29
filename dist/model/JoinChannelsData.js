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
 * The JoinChannelsData model module.
 * @module model/JoinChannelsData
 * @version 0.0.16
 */
var JoinChannelsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JoinChannelsData</code>.
   * @alias module:model/JoinChannelsData
   * @param botUserid {String} Specifies the ID of the bot to join the channels.
   * @param channelUrls {Array.<String>} Specifies an array of one or more URLs of the channels to join.
   */
  function JoinChannelsData(botUserid, channelUrls) {
    _classCallCheck(this, JoinChannelsData);
    JoinChannelsData.initialize(this, botUserid, channelUrls);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(JoinChannelsData, null, [{
    key: "initialize",
    value: function initialize(obj, botUserid, channelUrls) {
      obj['bot_userid'] = botUserid;
      obj['channel_urls'] = channelUrls;
    }

    /**
     * Constructs a <code>JoinChannelsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JoinChannelsData} obj Optional instance to populate.
     * @return {module:model/JoinChannelsData} The populated <code>JoinChannelsData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JoinChannelsData();
        if (data.hasOwnProperty('bot_userid')) {
          obj['bot_userid'] = _ApiClient["default"].convertToType(data['bot_userid'], 'String');
        }
        if (data.hasOwnProperty('channel_urls')) {
          obj['channel_urls'] = _ApiClient["default"].convertToType(data['channel_urls'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return JoinChannelsData;
}();
/**
 * Specifies the ID of the bot to join the channels.
 * @member {String} bot_userid
 */
JoinChannelsData.prototype['bot_userid'] = undefined;

/**
 * Specifies an array of one or more URLs of the channels to join.
 * @member {Array.<String>} channel_urls
 */
JoinChannelsData.prototype['channel_urls'] = undefined;
var _default = JoinChannelsData;
exports["default"] = _default;