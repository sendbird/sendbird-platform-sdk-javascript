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
 * The GcBanUserData model module.
 * @module model/GcBanUserData
 * @version 0.0.16
 */
var GcBanUserData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcBanUserData</code>.
   * @alias module:model/GcBanUserData
   * @param channelUrl {String} Specifies the URL of the channel where to ban a user.
   * @param userId {String} Specifies the unique ID of the user to ban.
   * @param agentId {String} Specifies the ID of the agent (operator) who bans the user.
   * @param seconds {Number} Specifies the ban duration. If set to -1, the user will be banned permanently (10 years, technically). (Default: -1)
   * @param description {String} Specifies a reason for the banning. The length is limited to 250 characters.
   */
  function GcBanUserData(channelUrl, userId, agentId, seconds, description) {
    _classCallCheck(this, GcBanUserData);
    GcBanUserData.initialize(this, channelUrl, userId, agentId, seconds, description);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GcBanUserData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userId, agentId, seconds, description) {
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
      obj['agent_id'] = agentId;
      obj['seconds'] = seconds;
      obj['description'] = description;
    }

    /**
     * Constructs a <code>GcBanUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcBanUserData} obj Optional instance to populate.
     * @return {module:model/GcBanUserData} The populated <code>GcBanUserData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcBanUserData();
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('agent_id')) {
          obj['agent_id'] = _ApiClient["default"].convertToType(data['agent_id'], 'String');
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
  return GcBanUserData;
}();
/**
 * Specifies the URL of the channel where to ban a user.
 * @member {String} channel_url
 */
GcBanUserData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the user to ban.
 * @member {String} user_id
 */
GcBanUserData.prototype['user_id'] = undefined;

/**
 * Specifies the ID of the agent (operator) who bans the user.
 * @member {String} agent_id
 */
GcBanUserData.prototype['agent_id'] = undefined;

/**
 * Specifies the ban duration. If set to -1, the user will be banned permanently (10 years, technically). (Default: -1)
 * @member {Number} seconds
 */
GcBanUserData.prototype['seconds'] = undefined;

/**
 * Specifies a reason for the banning. The length is limited to 250 characters.
 * @member {String} description
 */
GcBanUserData.prototype['description'] = undefined;
var _default = GcBanUserData;
exports["default"] = _default;