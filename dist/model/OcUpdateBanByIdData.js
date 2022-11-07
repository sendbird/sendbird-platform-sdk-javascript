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
 * The OcUpdateBanByIdData model module.
 * @module model/OcUpdateBanByIdData
 * @version 0.0.16
 */
var OcUpdateBanByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcUpdateBanByIdData</code>.
   * @alias module:model/OcUpdateBanByIdData
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param bannedUserId {String} Specifies the ID of the banned user to update.
   * @param seconds {Number} Specifies a new ban duration to update. If set to -1, the user will be banned permanently (10 years, technically).
   * @param description {String} Specifies a new reason for the banning to update. The length is limited to 250 characters.
   */
  function OcUpdateBanByIdData(channelUrl, bannedUserId, seconds, description) {
    _classCallCheck(this, OcUpdateBanByIdData);
    OcUpdateBanByIdData.initialize(this, channelUrl, bannedUserId, seconds, description);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OcUpdateBanByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, bannedUserId, seconds, description) {
      obj['channel_url'] = channelUrl;
      obj['banned_user_id'] = bannedUserId;
      obj['seconds'] = seconds;
      obj['description'] = description;
    }

    /**
     * Constructs a <code>OcUpdateBanByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcUpdateBanByIdData} obj Optional instance to populate.
     * @return {module:model/OcUpdateBanByIdData} The populated <code>OcUpdateBanByIdData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcUpdateBanByIdData();
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('banned_user_id')) {
          obj['banned_user_id'] = _ApiClient["default"].convertToType(data['banned_user_id'], 'String');
        }
        if (data.hasOwnProperty('seconds')) {
          obj['seconds'] = _ApiClient["default"].convertToType(data['seconds'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }
  }]);
  return OcUpdateBanByIdData;
}();
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */
OcUpdateBanByIdData.prototype['channel_url'] = undefined;

/**
 * Specifies the ID of the banned user to update.
 * @member {String} banned_user_id
 */
OcUpdateBanByIdData.prototype['banned_user_id'] = undefined;

/**
 * Specifies a new ban duration to update. If set to -1, the user will be banned permanently (10 years, technically).
 * @member {Number} seconds
 */
OcUpdateBanByIdData.prototype['seconds'] = undefined;

/**
 * Specifies a new reason for the banning to update. The length is limited to 250 characters.
 * @member {String} description
 */
OcUpdateBanByIdData.prototype['description'] = undefined;
var _default = OcUpdateBanByIdData;
exports["default"] = _default;