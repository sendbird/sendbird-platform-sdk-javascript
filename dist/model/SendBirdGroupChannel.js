"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdMember = _interopRequireDefault(require("./SendBirdMember"));

var _SendBirdMessageResponse = _interopRequireDefault(require("./SendBirdMessageResponse"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdGroupChannel model module.
 * @module model/SendBirdGroupChannel
 * @version 1.0.0
 */
var SendBirdGroupChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannel</code>.
   * @alias module:model/SendBirdGroupChannel
   */
  function SendBirdGroupChannel() {
    _classCallCheck(this, SendBirdGroupChannel);

    SendBirdGroupChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdGroupChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdGroupChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannel} The populated <code>SendBirdGroupChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannel();

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
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

        if (data.hasOwnProperty('unread_mention_count')) {
          obj['unread_mention_count'] = _ApiClient["default"].convertToType(data['unread_mention_count'], 'Number');
        }

        if (data.hasOwnProperty('unread_message_count')) {
          obj['unread_message_count'] = _ApiClient["default"].convertToType(data['unread_message_count'], 'Number');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendBirdGroupChannel;
}();
/**
 * @member {String} cover_url
 */


SendBirdGroupChannel.prototype['cover_url'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdGroupChannel.prototype['created_at'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */

SendBirdGroupChannel.prototype['creator'] = undefined;
/**
 * @member {String} custom_type
 */

SendBirdGroupChannel.prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */

SendBirdGroupChannel.prototype['data'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.HiddenStateEnum} hidden_state
 */

SendBirdGroupChannel.prototype['hidden_state'] = undefined;
/**
 * @member {Number} invited_at
 */

SendBirdGroupChannel.prototype['invited_at'] = undefined;
/**
 * @member {module:model/SendBirdUser} inviter
 */

SendBirdGroupChannel.prototype['inviter'] = undefined;
/**
 * @member {Boolean} is_access_code_required
 */

SendBirdGroupChannel.prototype['is_access_code_required'] = undefined;
/**
 * @member {Boolean} is_broadcast
 */

SendBirdGroupChannel.prototype['is_broadcast'] = undefined;
/**
 * @member {Boolean} is_discoverable
 */

SendBirdGroupChannel.prototype['is_discoverable'] = undefined;
/**
 * @member {Boolean} is_distinct
 */

SendBirdGroupChannel.prototype['is_distinct'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */

SendBirdGroupChannel.prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */

SendBirdGroupChannel.prototype['is_frozen'] = undefined;
/**
 * @member {Boolean} is_hidden
 */

SendBirdGroupChannel.prototype['is_hidden'] = undefined;
/**
 * @member {Boolean} is_public
 */

SendBirdGroupChannel.prototype['is_public'] = undefined;
/**
 * @member {Boolean} is_push_enabled
 */

SendBirdGroupChannel.prototype['is_push_enabled'] = undefined;
/**
 * @member {Boolean} is_super
 */

SendBirdGroupChannel.prototype['is_super'] = undefined;
/**
 * @member {Number} joined_at
 */

SendBirdGroupChannel.prototype['joined_at'] = undefined;
/**
 * @member {Number} joined_member_count
 */

SendBirdGroupChannel.prototype['joined_member_count'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponse} last_message
 */

SendBirdGroupChannel.prototype['last_message'] = undefined;
/**
 * @member {Number} member_count
 */

SendBirdGroupChannel.prototype['member_count'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMember>} members
 */

SendBirdGroupChannel.prototype['members'] = undefined;
/**
 * @member {Number} message_offset_timestamp
 */

SendBirdGroupChannel.prototype['message_offset_timestamp'] = undefined;
/**
 * @member {Number} message_survival_seconds
 */

SendBirdGroupChannel.prototype['message_survival_seconds'] = undefined;
/**
 * @member {String} my_count_preference
 */

SendBirdGroupChannel.prototype['my_count_preference'] = undefined;
/**
 * @member {Number} my_last_read
 */

SendBirdGroupChannel.prototype['my_last_read'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMemberStateEnum} my_member_state
 */

SendBirdGroupChannel.prototype['my_member_state'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyMutedStateEnum} my_muted_state
 */

SendBirdGroupChannel.prototype['my_muted_state'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyPushTriggerOptionEnum} my_push_trigger_option
 */

SendBirdGroupChannel.prototype['my_push_trigger_option'] = undefined;
/**
 * @member {module:model/SendBirdGroupChannel.MyRoleEnum} my_role
 */

SendBirdGroupChannel.prototype['my_role'] = undefined;
/**
 * @member {String} name
 */

SendBirdGroupChannel.prototype['name'] = undefined;
/**
 * @member {Number} unread_mention_count
 */

SendBirdGroupChannel.prototype['unread_mention_count'] = undefined;
/**
 * @member {Number} unread_message_count
 */

SendBirdGroupChannel.prototype['unread_message_count'] = undefined;
/**
 * @member {String} channel_url
 */

SendBirdGroupChannel.prototype['channel_url'] = undefined;
/**
 * Allowed values for the <code>hidden_state</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdGroupChannel['HiddenStateEnum'] = {
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

SendBirdGroupChannel['MyMemberStateEnum'] = {
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

SendBirdGroupChannel['MyMutedStateEnum'] = {
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

SendBirdGroupChannel['MyPushTriggerOptionEnum'] = {
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

SendBirdGroupChannel['MyRoleEnum'] = {
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
var _default = SendBirdGroupChannel;
exports["default"] = _default;