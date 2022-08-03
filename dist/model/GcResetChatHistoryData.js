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
 * The GcResetChatHistoryData model module.
 * @module model/GcResetChatHistoryData
 * @version 1.0.7
 */
var GcResetChatHistoryData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcResetChatHistoryData</code>.
   * @alias module:model/GcResetChatHistoryData
   * @param channelUrl {String} Specifies the URL of the target channel to reset chat history.
   * @param userId {String} Specifies the unique ID of the user whose chat history to reset in the channel. If this user_id property is specified, the reset_all property is not required.
   * @param resetAll {Boolean} Determines whether to reset all users' chat history in the channel. If this reset_all property is specified, the user_id property is not required.
   */
  function GcResetChatHistoryData(channelUrl, userId, resetAll) {
    _classCallCheck(this, GcResetChatHistoryData);

    GcResetChatHistoryData.initialize(this, channelUrl, userId, resetAll);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcResetChatHistoryData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userId, resetAll) {
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
      obj['reset_all'] = resetAll;
    }
    /**
     * Constructs a <code>GcResetChatHistoryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcResetChatHistoryData} obj Optional instance to populate.
     * @return {module:model/GcResetChatHistoryData} The populated <code>GcResetChatHistoryData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcResetChatHistoryData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('reset_all')) {
          obj['reset_all'] = _ApiClient["default"].convertToType(data['reset_all'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GcResetChatHistoryData;
}();
/**
 * Specifies the URL of the target channel to reset chat history.
 * @member {String} channel_url
 */


GcResetChatHistoryData.prototype['channel_url'] = undefined;
/**
 * Specifies the unique ID of the user whose chat history to reset in the channel. If this user_id property is specified, the reset_all property is not required.
 * @member {String} user_id
 */

GcResetChatHistoryData.prototype['user_id'] = undefined;
/**
 * Determines whether to reset all users' chat history in the channel. If this reset_all property is specified, the user_id property is not required.
 * @member {Boolean} reset_all
 */

GcResetChatHistoryData.prototype['reset_all'] = undefined;
var _default = GcResetChatHistoryData;
exports["default"] = _default;