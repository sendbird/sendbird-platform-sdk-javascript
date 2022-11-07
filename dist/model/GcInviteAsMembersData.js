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
 * The GcInviteAsMembersData model module.
 * @module model/GcInviteAsMembersData
 * @version 0.0.16
 */
var GcInviteAsMembersData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcInviteAsMembersData</code>.
   * @alias module:model/GcInviteAsMembersData
   * @param channelUrl {String} Specifies the URL of the channel to invite into.
   * @param userIds {Array.<String>} Specifies an array of one or more user IDs to invite into the channel. The maximum number of users to be invited at once is 100. The users can be used instead of this property.
   * @param users {Array.<String>} Specifies a list of one or more `JSON` objects which contain the user_id property to invite into the channel. The maximum number of users to be invited at once is 100. The user_ids can be used instead of this property.
   * @param invitationStatus {Object} Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
   * @param hiddenStatus {Object} Specifies one or more key-value pair items which set the channel's hidden status for each user. The key should be a user_id and the value should be their hidden status. Acceptable values are limited to the following:<br />- unhidden (default): the channel is included in when retrieving a list of group channels.<br />- hidden_allow_auto_unhide: the channel automatically gets unhidden when receiving a new message.<br />- hidden_prevent_auto_unhide: the channel keeps hidden though receiving a new message.
   */
  function GcInviteAsMembersData(channelUrl, userIds, users, invitationStatus, hiddenStatus) {
    _classCallCheck(this, GcInviteAsMembersData);
    GcInviteAsMembersData.initialize(this, channelUrl, userIds, users, invitationStatus, hiddenStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GcInviteAsMembersData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userIds, users, invitationStatus, hiddenStatus) {
      obj['channel_url'] = channelUrl;
      obj['user_ids'] = userIds;
      obj['users'] = users;
      obj['invitation_status'] = invitationStatus;
      obj['hidden_status'] = hiddenStatus;
    }

    /**
     * Constructs a <code>GcInviteAsMembersData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcInviteAsMembersData} obj Optional instance to populate.
     * @return {module:model/GcInviteAsMembersData} The populated <code>GcInviteAsMembersData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcInviteAsMembersData();
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }
        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['String']);
        }
        if (data.hasOwnProperty('invitation_status')) {
          obj['invitation_status'] = _ApiClient["default"].convertToType(data['invitation_status'], Object);
        }
        if (data.hasOwnProperty('hidden_status')) {
          obj['hidden_status'] = _ApiClient["default"].convertToType(data['hidden_status'], Object);
        }
      }
      return obj;
    }
  }]);
  return GcInviteAsMembersData;
}();
/**
 * Specifies the URL of the channel to invite into.
 * @member {String} channel_url
 */
GcInviteAsMembersData.prototype['channel_url'] = undefined;

/**
 * Specifies an array of one or more user IDs to invite into the channel. The maximum number of users to be invited at once is 100. The users can be used instead of this property.
 * @member {Array.<String>} user_ids
 */
GcInviteAsMembersData.prototype['user_ids'] = undefined;

/**
 * Specifies a list of one or more `JSON` objects which contain the user_id property to invite into the channel. The maximum number of users to be invited at once is 100. The user_ids can be used instead of this property.
 * @member {Array.<String>} users
 */
GcInviteAsMembersData.prototype['users'] = undefined;

/**
 * Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
 * @member {Object} invitation_status
 */
GcInviteAsMembersData.prototype['invitation_status'] = undefined;

/**
 * Specifies one or more key-value pair items which set the channel's hidden status for each user. The key should be a user_id and the value should be their hidden status. Acceptable values are limited to the following:<br />- unhidden (default): the channel is included in when retrieving a list of group channels.<br />- hidden_allow_auto_unhide: the channel automatically gets unhidden when receiving a new message.<br />- hidden_prevent_auto_unhide: the channel keeps hidden though receiving a new message.
 * @member {Object} hidden_status
 */
GcInviteAsMembersData.prototype['hidden_status'] = undefined;
var _default = GcInviteAsMembersData;
exports["default"] = _default;