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
 * The GcCreateChannelData model module.
 * @module model/GcCreateChannelData
 * @version 1.0.0
 */
var GcCreateChannelData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcCreateChannelData</code>.
   * @alias module:model/GcCreateChannelData
   * @param userIds {Array.<Number>} Specifies an array of one or more IDs of users to invite to the channel. The maximum number of users to be invited at once is 100. The users below and this property can be used interchangeably.
   * @param users {Array.<Number>} Specifies an array of one or more IDs of users to invite to the channel. The maximum number of users to be invited at once is 100. The user_ids above and this property can be used interchangeably.
   * @param name {String} Specifies the name of the channel, or the channel topic. The length is limited to 191 characters. (Default: group channel)
   * @param channelUrl {String} Specifies the URL of the channel. Only numbers, characters, and underscores are allowed. The length is 4 to 100 characters, inclusive. If not specified, a URL is automatically generated.
   * @param coverUrl {String} Specifies the URL of the cover image for the channel. The length is limited to 2,048 characters.
   * @param coverFile {File} Uploads the cover image file for the channel.
   * @param customType {String} Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
   * @param data {String} Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
   * @param isDistinct {Boolean} Determines whether to reuse an existing channel or create a new channel. If set to true, returns a channel with the same users in the user_ids or users property or creates a new channel if no match is found. Sendbird server can also use the custom channel type in the custom_type property if specified along with the users to return the corresponding channel. If set to false, Sendbird server always creates a new channel with a combination of the users as well as the channel custom type if specified. (Default: false)<br /><br /> Under this property, Sendbird server does not distinguish channels based on other properties such as channel URL or channel name.
   * @param isPublic {Boolean} Determines whether to allow a user to join the channel without an invitation. (Default: false)
   * @param isSuper {Boolean} Determines whether to allow the channel to accommodate more than 2,000 members. (Default: false) <br/><br/> Supergroup channels are not supported with the is_distinct property and the property is false by default.
   * @param isEphemeral {Boolean} Determines whether to preserve the messages in the channel for the purpose of retrieving chat history. (Default: false)
   * @param accessCode {String} This parameter can only be used when the channel operator creates a public group channel. They can set an access code for the corresponding type of channel. The channel then requires the specified access code to a user who attempts to join. If specified, the is_access_code_required property of the channel resource is set to true.
   * @param inviterId {String} Specifies the ID of the user who has invited other users as members of the channel. The inviter is not automatically registered to the channel as a member, so you should specify the ID of the inviter in the user_ids property below if needed.
   * @param strict {Boolean} Determines whether to receive a `400111` error and cease channel creation when there is at least one non-existing user in the specified user_ids or users property above. If set to false, the channel will be created excluding the non-existing users without receiving the mentioned error. (Default: false)
   * @param invitationStatus {Array.<String>} Specifies an array of one or more information about the join status of each invited user to the channel. Each item of the array should be specified with a combination of the unique ID of a user in the user_ids or users property, a colon (:), and the user's join status (for example, user_id_1: join status). Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
   * @param hiddenStatus {Array.<String>} Specifies an array of one or more channel hidden statuses about whether to hide the channel from each invited user's list of group channels, and whether to automatically unhide the hidden channel when receiving a new message from other member of that channel. Each item of the array should be specified with a combination of the unique ID of a user in the user_ids or users property, a colon (:), and the channel hidden status (for example, user_id_1: channel hidden status). Acceptable values are limited to the following:<br />- unhidden (default): the channel is included in when retrieving a list of group channels.<br />- hidden_allow_auto_unhide: the channel automatically gets unhidden when receiving a new message.<br />- hidden_prevent_auto_unhide: the channel keeps hidden though receiving a new message.
   * @param operatorIds {Array.<Number>} Specifies an array of one or more IDs of users to register as operators of the channel. You should also include these IDs in the user_ids property to invite them to the channel as members. They can delete any messages in the channel, and also view all messages without any filtering or throttling. The maximum allowed number of operators per channel is 100.
   * @param blockSdkUserChannelJoin {Boolean} Determines whether to block users from joining the channel through the Chat SDK. This parameter can be used in order to restrict the ways for users to join the channel, and only using the [join a channel](#2-join-a-channel) action can add a user to the channel. (Default: false)
   */
  function GcCreateChannelData(userIds, users, name, channelUrl, coverUrl, coverFile, customType, data, isDistinct, isPublic, isSuper, isEphemeral, accessCode, inviterId, strict, invitationStatus, hiddenStatus, operatorIds, blockSdkUserChannelJoin) {
    _classCallCheck(this, GcCreateChannelData);

    GcCreateChannelData.initialize(this, userIds, users, name, channelUrl, coverUrl, coverFile, customType, data, isDistinct, isPublic, isSuper, isEphemeral, accessCode, inviterId, strict, invitationStatus, hiddenStatus, operatorIds, blockSdkUserChannelJoin);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcCreateChannelData, null, [{
    key: "initialize",
    value: function initialize(obj, userIds, users, name, channelUrl, coverUrl, coverFile, customType, data, isDistinct, isPublic, isSuper, isEphemeral, accessCode, inviterId, strict, invitationStatus, hiddenStatus, operatorIds, blockSdkUserChannelJoin) {
      obj['user_ids'] = userIds;
      obj['users'] = users;
      obj['name'] = name;
      obj['channel_url'] = channelUrl;
      obj['cover_url'] = coverUrl;
      obj['cover_file'] = coverFile;
      obj['custom_type'] = customType;
      obj['data'] = data;
      obj['is_distinct'] = isDistinct;
      obj['is_public'] = isPublic;
      obj['is_super'] = isSuper;
      obj['is_ephemeral'] = isEphemeral;
      obj['access_code'] = accessCode;
      obj['inviter_id'] = inviterId;
      obj['strict'] = strict;
      obj['invitation_status'] = invitationStatus;
      obj['hidden_status'] = hiddenStatus;
      obj['operator_ids'] = operatorIds;
      obj['block_sdk_user_channel_join'] = blockSdkUserChannelJoin;
    }
    /**
     * Constructs a <code>GcCreateChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcCreateChannelData} obj Optional instance to populate.
     * @return {module:model/GcCreateChannelData} The populated <code>GcCreateChannelData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcCreateChannelData();

        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['Number']);
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['Number']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('cover_file')) {
          obj['cover_file'] = _ApiClient["default"].convertToType(data['cover_file'], File);
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('is_distinct')) {
          obj['is_distinct'] = _ApiClient["default"].convertToType(data['is_distinct'], 'Boolean');
        }

        if (data.hasOwnProperty('is_public')) {
          obj['is_public'] = _ApiClient["default"].convertToType(data['is_public'], 'Boolean');
        }

        if (data.hasOwnProperty('is_super')) {
          obj['is_super'] = _ApiClient["default"].convertToType(data['is_super'], 'Boolean');
        }

        if (data.hasOwnProperty('is_ephemeral')) {
          obj['is_ephemeral'] = _ApiClient["default"].convertToType(data['is_ephemeral'], 'Boolean');
        }

        if (data.hasOwnProperty('access_code')) {
          obj['access_code'] = _ApiClient["default"].convertToType(data['access_code'], 'String');
        }

        if (data.hasOwnProperty('inviter_id')) {
          obj['inviter_id'] = _ApiClient["default"].convertToType(data['inviter_id'], 'String');
        }

        if (data.hasOwnProperty('strict')) {
          obj['strict'] = _ApiClient["default"].convertToType(data['strict'], 'Boolean');
        }

        if (data.hasOwnProperty('invitation_status')) {
          obj['invitation_status'] = _ApiClient["default"].convertToType(data['invitation_status'], ['String']);
        }

        if (data.hasOwnProperty('hidden_status')) {
          obj['hidden_status'] = _ApiClient["default"].convertToType(data['hidden_status'], ['String']);
        }

        if (data.hasOwnProperty('operator_ids')) {
          obj['operator_ids'] = _ApiClient["default"].convertToType(data['operator_ids'], ['Number']);
        }

        if (data.hasOwnProperty('block_sdk_user_channel_join')) {
          obj['block_sdk_user_channel_join'] = _ApiClient["default"].convertToType(data['block_sdk_user_channel_join'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GcCreateChannelData;
}();
/**
 * Specifies an array of one or more IDs of users to invite to the channel. The maximum number of users to be invited at once is 100. The users below and this property can be used interchangeably.
 * @member {Array.<Number>} user_ids
 */


GcCreateChannelData.prototype['user_ids'] = undefined;
/**
 * Specifies an array of one or more IDs of users to invite to the channel. The maximum number of users to be invited at once is 100. The user_ids above and this property can be used interchangeably.
 * @member {Array.<Number>} users
 */

GcCreateChannelData.prototype['users'] = undefined;
/**
 * Specifies the name of the channel, or the channel topic. The length is limited to 191 characters. (Default: group channel)
 * @member {String} name
 */

GcCreateChannelData.prototype['name'] = undefined;
/**
 * Specifies the URL of the channel. Only numbers, characters, and underscores are allowed. The length is 4 to 100 characters, inclusive. If not specified, a URL is automatically generated.
 * @member {String} channel_url
 */

GcCreateChannelData.prototype['channel_url'] = undefined;
/**
 * Specifies the URL of the cover image for the channel. The length is limited to 2,048 characters.
 * @member {String} cover_url
 */

GcCreateChannelData.prototype['cover_url'] = undefined;
/**
 * Uploads the cover image file for the channel.
 * @member {File} cover_file
 */

GcCreateChannelData.prototype['cover_file'] = undefined;
/**
 * Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */

GcCreateChannelData.prototype['custom_type'] = undefined;
/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} data
 */

GcCreateChannelData.prototype['data'] = undefined;
/**
 * Determines whether to reuse an existing channel or create a new channel. If set to true, returns a channel with the same users in the user_ids or users property or creates a new channel if no match is found. Sendbird server can also use the custom channel type in the custom_type property if specified along with the users to return the corresponding channel. If set to false, Sendbird server always creates a new channel with a combination of the users as well as the channel custom type if specified. (Default: false)<br /><br /> Under this property, Sendbird server does not distinguish channels based on other properties such as channel URL or channel name.
 * @member {Boolean} is_distinct
 */

GcCreateChannelData.prototype['is_distinct'] = undefined;
/**
 * Determines whether to allow a user to join the channel without an invitation. (Default: false)
 * @member {Boolean} is_public
 */

GcCreateChannelData.prototype['is_public'] = undefined;
/**
 * Determines whether to allow the channel to accommodate more than 2,000 members. (Default: false) <br/><br/> Supergroup channels are not supported with the is_distinct property and the property is false by default.
 * @member {Boolean} is_super
 */

GcCreateChannelData.prototype['is_super'] = undefined;
/**
 * Determines whether to preserve the messages in the channel for the purpose of retrieving chat history. (Default: false)
 * @member {Boolean} is_ephemeral
 */

GcCreateChannelData.prototype['is_ephemeral'] = undefined;
/**
 * This parameter can only be used when the channel operator creates a public group channel. They can set an access code for the corresponding type of channel. The channel then requires the specified access code to a user who attempts to join. If specified, the is_access_code_required property of the channel resource is set to true.
 * @member {String} access_code
 */

GcCreateChannelData.prototype['access_code'] = undefined;
/**
 * Specifies the ID of the user who has invited other users as members of the channel. The inviter is not automatically registered to the channel as a member, so you should specify the ID of the inviter in the user_ids property below if needed.
 * @member {String} inviter_id
 */

GcCreateChannelData.prototype['inviter_id'] = undefined;
/**
 * Determines whether to receive a `400111` error and cease channel creation when there is at least one non-existing user in the specified user_ids or users property above. If set to false, the channel will be created excluding the non-existing users without receiving the mentioned error. (Default: false)
 * @member {Boolean} strict
 */

GcCreateChannelData.prototype['strict'] = undefined;
/**
 * Specifies an array of one or more information about the join status of each invited user to the channel. Each item of the array should be specified with a combination of the unique ID of a user in the user_ids or users property, a colon (:), and the user's join status (for example, user_id_1: join status). Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
 * @member {Array.<String>} invitation_status
 */

GcCreateChannelData.prototype['invitation_status'] = undefined;
/**
 * Specifies an array of one or more channel hidden statuses about whether to hide the channel from each invited user's list of group channels, and whether to automatically unhide the hidden channel when receiving a new message from other member of that channel. Each item of the array should be specified with a combination of the unique ID of a user in the user_ids or users property, a colon (:), and the channel hidden status (for example, user_id_1: channel hidden status). Acceptable values are limited to the following:<br />- unhidden (default): the channel is included in when retrieving a list of group channels.<br />- hidden_allow_auto_unhide: the channel automatically gets unhidden when receiving a new message.<br />- hidden_prevent_auto_unhide: the channel keeps hidden though receiving a new message.
 * @member {Array.<String>} hidden_status
 */

GcCreateChannelData.prototype['hidden_status'] = undefined;
/**
 * Specifies an array of one or more IDs of users to register as operators of the channel. You should also include these IDs in the user_ids property to invite them to the channel as members. They can delete any messages in the channel, and also view all messages without any filtering or throttling. The maximum allowed number of operators per channel is 100.
 * @member {Array.<Number>} operator_ids
 */

GcCreateChannelData.prototype['operator_ids'] = undefined;
/**
 * Determines whether to block users from joining the channel through the Chat SDK. This parameter can be used in order to restrict the ways for users to join the channel, and only using the [join a channel](#2-join-a-channel) action can add a user to the channel. (Default: false)
 * @member {Boolean} block_sdk_user_channel_join
 */

GcCreateChannelData.prototype['block_sdk_user_channel_join'] = undefined;
var _default = GcCreateChannelData;
exports["default"] = _default;