"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdGroupChannel = _interopRequireDefault(require("./SendBirdGroupChannel"));

var _SendBirdGroupChannelChannel = _interopRequireDefault(require("./SendBirdGroupChannelChannel"));

var _SendBirdGroupChannelCreatedBy = _interopRequireDefault(require("./SendBirdGroupChannelCreatedBy"));

var _SendBirdGroupChannelDisappearingMessage = _interopRequireDefault(require("./SendBirdGroupChannelDisappearingMessage"));

var _SendBirdGroupChannelSmsFallback = _interopRequireDefault(require("./SendBirdGroupChannelSmsFallback"));

var _SendBirdMember = _interopRequireDefault(require("./SendBirdMember"));

var _SendBirdMessageResponse = _interopRequireDefault(require("./SendBirdMessageResponse"));

var _SendBirdOpenChannel = _interopRequireDefault(require("./SendBirdOpenChannel"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdChannelResponse model module.
 * @module model/SendBirdChannelResponse
 * @version 1.0.7
 */
var SendBirdChannelResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdChannelResponse</code>.
   * @alias module:model/SendBirdChannelResponse
   * @implements module:model/SendBirdGroupChannel
   * @implements module:model/SendBirdOpenChannel
   */
  function SendBirdChannelResponse() {
    _classCallCheck(this, SendBirdChannelResponse);

    _SendBirdGroupChannel["default"].initialize(this);

    _SendBirdOpenChannel["default"].initialize(this);

    SendBirdChannelResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdChannelResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdChannelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdChannelResponse} obj Optional instance to populate.
     * @return {module:model/SendBirdChannelResponse} The populated <code>SendBirdChannelResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdChannelResponse();

        _SendBirdGroupChannel["default"].constructFromObject(data, obj);

        _SendBirdOpenChannel["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _SendBirdGroupChannelCreatedBy["default"].constructFromObject(data['created_by']);
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _SendBirdUser["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('disappearing_message')) {
          obj['disappearing_message'] = _SendBirdGroupChannelDisappearingMessage["default"].constructFromObject(data['disappearing_message']);
        }

        if (data.hasOwnProperty('freeze')) {
          obj['freeze'] = _ApiClient["default"].convertToType(data['freeze'], 'Boolean');
        }

        if (data.hasOwnProperty('ignore_profanity_filter')) {
          obj['ignore_profanity_filter'] = _ApiClient["default"].convertToType(data['ignore_profanity_filter'], 'Boolean');
        }

        if (data.hasOwnProperty('hidden_state')) {
          obj['hidden_state'] = _ApiClient["default"].convertToType(data['hidden_state'], 'String');
        }

        if (data.hasOwnProperty('invited_at')) {
          obj['invited_at'] = _ApiClient["default"].convertToType(data['invited_at'], 'Number');
        }

        if (data.hasOwnProperty('inviter')) {
          obj['inviter'] = _SendBirdUser["default"].constructFromObject(data['inviter']);
        }

        if (data.hasOwnProperty('is_access_code_required')) {
          obj['is_access_code_required'] = _ApiClient["default"].convertToType(data['is_access_code_required'], 'Boolean');
        }

        if (data.hasOwnProperty('is_broadcast')) {
          obj['is_broadcast'] = _ApiClient["default"].convertToType(data['is_broadcast'], 'Boolean');
        }

        if (data.hasOwnProperty('is_created')) {
          obj['is_created'] = _ApiClient["default"].convertToType(data['is_created'], 'Boolean');
        }

        if (data.hasOwnProperty('is_discoverable')) {
          obj['is_discoverable'] = _ApiClient["default"].convertToType(data['is_discoverable'], 'Boolean');
        }

        if (data.hasOwnProperty('is_distinct')) {
          obj['is_distinct'] = _ApiClient["default"].convertToType(data['is_distinct'], 'Boolean');
        }

        if (data.hasOwnProperty('is_ephemeral')) {
          obj['is_ephemeral'] = _ApiClient["default"].convertToType(data['is_ephemeral'], 'Boolean');
        }

        if (data.hasOwnProperty('is_frozen')) {
          obj['is_frozen'] = _ApiClient["default"].convertToType(data['is_frozen'], 'Boolean');
        }

        if (data.hasOwnProperty('is_hidden')) {
          obj['is_hidden'] = _ApiClient["default"].convertToType(data['is_hidden'], 'Boolean');
        }

        if (data.hasOwnProperty('is_public')) {
          obj['is_public'] = _ApiClient["default"].convertToType(data['is_public'], 'Boolean');
        }

        if (data.hasOwnProperty('is_push_enabled')) {
          obj['is_push_enabled'] = _ApiClient["default"].convertToType(data['is_push_enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('is_super')) {
          obj['is_super'] = _ApiClient["default"].convertToType(data['is_super'], 'Boolean');
        }

        if (data.hasOwnProperty('joined_at')) {
          obj['joined_at'] = _ApiClient["default"].convertToType(data['joined_at'], 'Number');
        }

        if (data.hasOwnProperty('joined_member_count')) {
          obj['joined_member_count'] = _ApiClient["default"].convertToType(data['joined_member_count'], 'Number');
        }

        if (data.hasOwnProperty('last_message')) {
          obj['last_message'] = _SendBirdMessageResponse["default"].constructFromObject(data['last_message']);
        }

        if (data.hasOwnProperty('max_length_message')) {
          obj['max_length_message'] = _ApiClient["default"].convertToType(data['max_length_message'], 'Number');
        }

        if (data.hasOwnProperty('member_count')) {
          obj['member_count'] = _ApiClient["default"].convertToType(data['member_count'], 'Number');
        }

        if (data.hasOwnProperty('members')) {
          obj['members'] = _ApiClient["default"].convertToType(data['members'], [_SendBirdMember["default"]]);
        }

        if (data.hasOwnProperty('message_offset_timestamp')) {
          obj['message_offset_timestamp'] = _ApiClient["default"].convertToType(data['message_offset_timestamp'], 'Number');
        }

        if (data.hasOwnProperty('message_survival_seconds')) {
          obj['message_survival_seconds'] = _ApiClient["default"].convertToType(data['message_survival_seconds'], 'Number');
        }

        if (data.hasOwnProperty('my_count_preference')) {
          obj['my_count_preference'] = _ApiClient["default"].convertToType(data['my_count_preference'], 'String');
        }

        if (data.hasOwnProperty('my_last_read')) {
          obj['my_last_read'] = _ApiClient["default"].convertToType(data['my_last_read'], 'Number');
        }

        if (data.hasOwnProperty('my_member_state')) {
          obj['my_member_state'] = _ApiClient["default"].convertToType(data['my_member_state'], 'String');
        }

        if (data.hasOwnProperty('my_muted_state')) {
          obj['my_muted_state'] = _ApiClient["default"].convertToType(data['my_muted_state'], 'String');
        }

        if (data.hasOwnProperty('my_push_trigger_option')) {
          obj['my_push_trigger_option'] = _ApiClient["default"].convertToType(data['my_push_trigger_option'], 'String');
        }

        if (data.hasOwnProperty('my_role')) {
          obj['my_role'] = _ApiClient["default"].convertToType(data['my_role'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('operators')) {
          obj['operators'] = _ApiClient["default"].convertToType(data['operators'], [_SendBirdUser["default"]]);
        }

        if (data.hasOwnProperty('sms_fallback')) {
          obj['sms_fallback'] = _SendBirdGroupChannelSmsFallback["default"].constructFromObject(data['sms_fallback']);
        }

        if (data.hasOwnProperty('unread_mention_count')) {
          obj['unread_mention_count'] = _ApiClient["default"].convertToType(data['unread_mention_count'], 'Number');
        }

        if (data.hasOwnProperty('unread_message_count')) {
          obj['unread_message_count'] = _ApiClient["default"].convertToType(data['unread_message_count'], 'Number');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _SendBirdGroupChannelChannel["default"].constructFromObject(data['channel']);
        }

        if (data.hasOwnProperty('is_dynamic_partitioned')) {
          obj['is_dynamic_partitioned'] = _ApiClient["default"].convertToType(data['is_dynamic_partitioned'], 'Boolean');
        }

        if (data.hasOwnProperty('participant_count')) {
          obj['participant_count'] = _ApiClient["default"].convertToType(data['participant_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdChannelResponse;
}();
/**
 * @member {String} channel_url
 */


SendBirdChannelResponse.prototype['channel_url'] = undefined;
/**
 * @member {String} cover_url
 */

SendBirdChannelResponse.prototype['cover_url'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdChannelResponse.prototype['created_at'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelCreatedBy} created_by
 */

SendBirdChannelResponse.prototype['created_by'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */

SendBirdChannelResponse.prototype['creator'] = undefined;
/**
 * @member {String} custom_type
 */

SendBirdChannelResponse.prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */

SendBirdChannelResponse.prototype['data'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelDisappearingMessage} disappearing_message
 */

SendBirdChannelResponse.prototype['disappearing_message'] = undefined;
/**
 * @member {Boolean} freeze
 */

SendBirdChannelResponse.prototype['freeze'] = undefined;
/**
 * @member {Boolean} ignore_profanity_filter
 */

SendBirdChannelResponse.prototype['ignore_profanity_filter'] = undefined;
/**
 * @member {module:model/SendBirdChannelResponse.HiddenStateEnum} hidden_state
 */

SendBirdChannelResponse.prototype['hidden_state'] = undefined;
/**
 * @member {Number} invited_at
 */

SendBirdChannelResponse.prototype['invited_at'] = undefined;
/**
 * @member {module:model/SendBirdUser} inviter
 */

SendBirdChannelResponse.prototype['inviter'] = undefined;
/**
 * @member {Boolean} is_access_code_required
 */

SendBirdChannelResponse.prototype['is_access_code_required'] = undefined;
/**
 * @member {Boolean} is_broadcast
 */

SendBirdChannelResponse.prototype['is_broadcast'] = undefined;
/**
 * @member {Boolean} is_created
 */

SendBirdChannelResponse.prototype['is_created'] = undefined;
/**
 * @member {Boolean} is_discoverable
 */

SendBirdChannelResponse.prototype['is_discoverable'] = undefined;
/**
 * @member {Boolean} is_distinct
 */

SendBirdChannelResponse.prototype['is_distinct'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */

SendBirdChannelResponse.prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */

SendBirdChannelResponse.prototype['is_frozen'] = undefined;
/**
 * @member {Boolean} is_hidden
 */

SendBirdChannelResponse.prototype['is_hidden'] = undefined;
/**
 * @member {Boolean} is_public
 */

SendBirdChannelResponse.prototype['is_public'] = undefined;
/**
 * @member {Boolean} is_push_enabled
 */

SendBirdChannelResponse.prototype['is_push_enabled'] = undefined;
/**
 * @member {Boolean} is_super
 */

SendBirdChannelResponse.prototype['is_super'] = undefined;
/**
 * @member {Number} joined_at
 */

SendBirdChannelResponse.prototype['joined_at'] = undefined;
/**
 * @member {Number} joined_member_count
 */

SendBirdChannelResponse.prototype['joined_member_count'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponse} last_message
 */

SendBirdChannelResponse.prototype['last_message'] = undefined;
/**
 * @member {Number} max_length_message
 */

SendBirdChannelResponse.prototype['max_length_message'] = undefined;
/**
 * @member {Number} member_count
 */

SendBirdChannelResponse.prototype['member_count'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMember>} members
 */

SendBirdChannelResponse.prototype['members'] = undefined;
/**
 * @member {Number} message_offset_timestamp
 */

SendBirdChannelResponse.prototype['message_offset_timestamp'] = undefined;
/**
 * @member {Number} message_survival_seconds
 */

SendBirdChannelResponse.prototype['message_survival_seconds'] = undefined;
/**
 * @member {String} my_count_preference
 */

SendBirdChannelResponse.prototype['my_count_preference'] = undefined;
/**
 * @member {Number} my_last_read
 */

SendBirdChannelResponse.prototype['my_last_read'] = undefined;
/**
 * @member {module:model/SendBirdChannelResponse.MyMemberStateEnum} my_member_state
 */

SendBirdChannelResponse.prototype['my_member_state'] = undefined;
/**
 * @member {module:model/SendBirdChannelResponse.MyMutedStateEnum} my_muted_state
 */

SendBirdChannelResponse.prototype['my_muted_state'] = undefined;
/**
 * @member {module:model/SendBirdChannelResponse.MyPushTriggerOptionEnum} my_push_trigger_option
 */

SendBirdChannelResponse.prototype['my_push_trigger_option'] = undefined;
/**
 * @member {module:model/SendBirdChannelResponse.MyRoleEnum} my_role
 */

SendBirdChannelResponse.prototype['my_role'] = undefined;
/**
 * @member {String} name
 */

SendBirdChannelResponse.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */

SendBirdChannelResponse.prototype['operators'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelSmsFallback} sms_fallback
 */

SendBirdChannelResponse.prototype['sms_fallback'] = undefined;
/**
 * @member {Number} unread_mention_count
 */

SendBirdChannelResponse.prototype['unread_mention_count'] = undefined;
/**
 * @member {Number} unread_message_count
 */

SendBirdChannelResponse.prototype['unread_message_count'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelChannel} channel
 */

SendBirdChannelResponse.prototype['channel'] = undefined;
/**
 * @member {Boolean} is_dynamic_partitioned
 */

SendBirdChannelResponse.prototype['is_dynamic_partitioned'] = undefined;
/**
 * @member {Number} participant_count
 */

SendBirdChannelResponse.prototype['participant_count'] = undefined; // Implement SendBirdGroupChannel interface:

/**
 * @member {String} channel_url
 */

_SendBirdGroupChannel["default"].prototype['channel_url'] = undefined;
/**
 * @member {String} cover_url
 */

_SendBirdGroupChannel["default"].prototype['cover_url'] = undefined;
/**
 * @member {Number} created_at
 */

_SendBirdGroupChannel["default"].prototype['created_at'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelCreatedBy} created_by
 */

_SendBirdGroupChannel["default"].prototype['created_by'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */

_SendBirdGroupChannel["default"].prototype['creator'] = undefined;
/**
 * @member {String} custom_type
 */

_SendBirdGroupChannel["default"].prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */

_SendBirdGroupChannel["default"].prototype['data'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelDisappearingMessage} disappearing_message
 */

_SendBirdGroupChannel["default"].prototype['disappearing_message'] = undefined;
/**
 * @member {Boolean} freeze
 */

_SendBirdGroupChannel["default"].prototype['freeze'] = undefined;
/**
 * @member {Boolean} ignore_profanity_filter
 */

_SendBirdGroupChannel["default"].prototype['ignore_profanity_filter'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.HiddenStateEnum} hidden_state
 */

_SendBirdGroupChannel["default"].prototype['hidden_state'] = undefined;
/**
 * @member {Number} invited_at
 */

_SendBirdGroupChannel["default"].prototype['invited_at'] = undefined;
/**
 * @member {module:model/SendBirdUser} inviter
 */

_SendBirdGroupChannel["default"].prototype['inviter'] = undefined;
/**
 * @member {Boolean} is_access_code_required
 */

_SendBirdGroupChannel["default"].prototype['is_access_code_required'] = undefined;
/**
 * @member {Boolean} is_broadcast
 */

_SendBirdGroupChannel["default"].prototype['is_broadcast'] = undefined;
/**
 * @member {Boolean} is_created
 */

_SendBirdGroupChannel["default"].prototype['is_created'] = undefined;
/**
 * @member {Boolean} is_discoverable
 */

_SendBirdGroupChannel["default"].prototype['is_discoverable'] = undefined;
/**
 * @member {Boolean} is_distinct
 */

_SendBirdGroupChannel["default"].prototype['is_distinct'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */

_SendBirdGroupChannel["default"].prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */

_SendBirdGroupChannel["default"].prototype['is_frozen'] = undefined;
/**
 * @member {Boolean} is_hidden
 */

_SendBirdGroupChannel["default"].prototype['is_hidden'] = undefined;
/**
 * @member {Boolean} is_public
 */

_SendBirdGroupChannel["default"].prototype['is_public'] = undefined;
/**
 * @member {Boolean} is_push_enabled
 */

_SendBirdGroupChannel["default"].prototype['is_push_enabled'] = undefined;
/**
 * @member {Boolean} is_super
 */

_SendBirdGroupChannel["default"].prototype['is_super'] = undefined;
/**
 * @member {Number} joined_at
 */

_SendBirdGroupChannel["default"].prototype['joined_at'] = undefined;
/**
 * @member {Number} joined_member_count
 */

_SendBirdGroupChannel["default"].prototype['joined_member_count'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponse} last_message
 */

_SendBirdGroupChannel["default"].prototype['last_message'] = undefined;
/**
 * @member {Number} max_length_message
 */

_SendBirdGroupChannel["default"].prototype['max_length_message'] = undefined;
/**
 * @member {Number} member_count
 */

_SendBirdGroupChannel["default"].prototype['member_count'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMember>} members
 */

_SendBirdGroupChannel["default"].prototype['members'] = undefined;
/**
 * @member {Number} message_offset_timestamp
 */

_SendBirdGroupChannel["default"].prototype['message_offset_timestamp'] = undefined;
/**
 * @member {Number} message_survival_seconds
 */

_SendBirdGroupChannel["default"].prototype['message_survival_seconds'] = undefined;
/**
 * @member {String} my_count_preference
 */

_SendBirdGroupChannel["default"].prototype['my_count_preference'] = undefined;
/**
 * @member {Number} my_last_read
 */

_SendBirdGroupChannel["default"].prototype['my_last_read'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMemberStateEnum} my_member_state
 */

_SendBirdGroupChannel["default"].prototype['my_member_state'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMutedStateEnum} my_muted_state
 */

_SendBirdGroupChannel["default"].prototype['my_muted_state'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyPushTriggerOptionEnum} my_push_trigger_option
 */

_SendBirdGroupChannel["default"].prototype['my_push_trigger_option'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyRoleEnum} my_role
 */

_SendBirdGroupChannel["default"].prototype['my_role'] = undefined;
/**
 * @member {String} name
 */

_SendBirdGroupChannel["default"].prototype['name'] = undefined;
/**
 * @member {Array.<String>} operators
 */

_SendBirdGroupChannel["default"].prototype['operators'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelSmsFallback} sms_fallback
 */

_SendBirdGroupChannel["default"].prototype['sms_fallback'] = undefined;
/**
 * @member {Number} unread_mention_count
 */

_SendBirdGroupChannel["default"].prototype['unread_mention_count'] = undefined;
/**
 * @member {Number} unread_message_count
 */

_SendBirdGroupChannel["default"].prototype['unread_message_count'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannelChannel} channel
 */

_SendBirdGroupChannel["default"].prototype['channel'] = undefined; // Implement SendBirdOpenChannel interface:

/**
 * @member {String} name
 */

_SendBirdOpenChannel["default"].prototype['name'] = undefined;
/**
 * @member {String} custom_type
 */

_SendBirdOpenChannel["default"].prototype['custom_type'] = undefined;
/**
 * @member {String} channel_url
 */

_SendBirdOpenChannel["default"].prototype['channel_url'] = undefined;
/**
 * @member {Number} created_at
 */

_SendBirdOpenChannel["default"].prototype['created_at'] = undefined;
/**
 * @member {String} cover_url
 */

_SendBirdOpenChannel["default"].prototype['cover_url'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */

_SendBirdOpenChannel["default"].prototype['creator'] = undefined;
/**
 * @member {String} data
 */

_SendBirdOpenChannel["default"].prototype['data'] = undefined;
/**
 * @member {Boolean} is_dynamic_partitioned
 */

_SendBirdOpenChannel["default"].prototype['is_dynamic_partitioned'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */

_SendBirdOpenChannel["default"].prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */

_SendBirdOpenChannel["default"].prototype['is_frozen'] = undefined;
/**
 * @member {Number} max_length_message
 */

_SendBirdOpenChannel["default"].prototype['max_length_message'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */

_SendBirdOpenChannel["default"].prototype['operators'] = undefined;
/**
 * @member {Number} participant_count
 */

_SendBirdOpenChannel["default"].prototype['participant_count'] = undefined;
/**
 * @member {Boolean} freeze
 */

_SendBirdOpenChannel["default"].prototype['freeze'] = undefined;
/**
 * Allowed values for the <code>hidden_state</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdChannelResponse['HiddenStateEnum'] = {
  /**
   * value: "hidden_allow_auto_unhide"
   * @const
   */
  "hidden_allow_auto_unhide": "hidden_allow_auto_unhide",

  /**
   * value: "hidden_prevent_auto_unhide"
   * @const
   */
  "hidden_prevent_auto_unhide": "hidden_prevent_auto_unhide",

  /**
   * value: "unhidden"
   * @const
   */
  "unhidden": "unhidden"
};
/**
 * Allowed values for the <code>my_member_state</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdChannelResponse['MyMemberStateEnum'] = {
  /**
   * value: "invited"
   * @const
   */
  "invited": "invited",

  /**
   * value: "joined"
   * @const
   */
  "joined": "joined",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
/**
 * Allowed values for the <code>my_muted_state</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdChannelResponse['MyMutedStateEnum'] = {
  /**
   * value: "muted"
   * @const
   */
  "muted": "muted",

  /**
   * value: "unmuted"
   * @const
   */
  "unmuted": "unmuted"
};
/**
 * Allowed values for the <code>my_push_trigger_option</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdChannelResponse['MyPushTriggerOptionEnum'] = {
  /**
   * value: "all"
   * @const
   */
  "all": "all",

  /**
   * value: "default"
   * @const
   */
  "default": "default",

  /**
   * value: "mention_only"
   * @const
   */
  "mention_only": "mention_only",

  /**
   * value: "false"
   * @const
   */
  "false": "false"
};
/**
 * Allowed values for the <code>my_role</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdChannelResponse['MyRoleEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "operator"
   * @const
   */
  "operator": "operator"
};
var _default = SendBirdChannelResponse;
exports["default"] = _default;