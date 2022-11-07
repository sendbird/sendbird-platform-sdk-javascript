"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SendBirdGroupChannelInviter model module.
 * @module model/SendBirdGroupChannelInviter
 * @version 0.0.16
 */
var SendBirdGroupChannelInviter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannelInviter</code>.
   * @alias module:model/SendBirdGroupChannelInviter
   * @implements module:model/SendBirdUser
   */
  function SendBirdGroupChannelInviter() {
    _classCallCheck(this, SendBirdGroupChannelInviter);
    _SendBirdUser["default"].initialize(this);
    SendBirdGroupChannelInviter.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdGroupChannelInviter, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdGroupChannelInviter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelInviter} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelInviter} The populated <code>SendBirdGroupChannelInviter</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannelInviter();
        _SendBirdUser["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('require_auth_for_profile_image')) {
          obj['require_auth_for_profile_image'] = _ApiClient["default"].convertToType(data['require_auth_for_profile_image'], 'Boolean');
        }
        if (data.hasOwnProperty('is_online')) {
          obj['is_online'] = _ApiClient["default"].convertToType(data['is_online'], 'Boolean');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }
        if (data.hasOwnProperty('has_ever_logged_in')) {
          obj['has_ever_logged_in'] = _ApiClient["default"].convertToType(data['has_ever_logged_in'], 'Boolean');
        }
        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }
        if (data.hasOwnProperty('last_seen_at')) {
          obj['last_seen_at'] = _ApiClient["default"].convertToType(data['last_seen_at'], 'Number');
        }
        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }
        if (data.hasOwnProperty('discovery_keys')) {
          obj['discovery_keys'] = _ApiClient["default"].convertToType(data['discovery_keys'], ['String']);
        }
        if (data.hasOwnProperty('session_tokens')) {
          obj['session_tokens'] = _ApiClient["default"].convertToType(data['session_tokens'], [Object]);
        }
        if (data.hasOwnProperty('preferred_languages')) {
          obj['preferred_languages'] = _ApiClient["default"].convertToType(data['preferred_languages'], ['String']);
        }
        if (data.hasOwnProperty('profile_url')) {
          obj['profile_url'] = _ApiClient["default"].convertToType(data['profile_url'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
        if (data.hasOwnProperty('phone_number')) {
          obj['phone_number'] = _ApiClient["default"].convertToType(data['phone_number'], 'String');
        }
        if (data.hasOwnProperty('local')) {
          obj['local'] = _ApiClient["default"].convertToType(data['local'], 'String');
        }
        if (data.hasOwnProperty('locale')) {
          obj['locale'] = _ApiClient["default"].convertToType(data['locale'], 'String');
        }
        if (data.hasOwnProperty('is_hide_me_from_friends')) {
          obj['is_hide_me_from_friends'] = _ApiClient["default"].convertToType(data['is_hide_me_from_friends'], 'Boolean');
        }
        if (data.hasOwnProperty('is_shadow_blocked')) {
          obj['is_shadow_blocked'] = _ApiClient["default"].convertToType(data['is_shadow_blocked'], 'Boolean');
        }
        if (data.hasOwnProperty('is_created')) {
          obj['is_created'] = _ApiClient["default"].convertToType(data['is_created'], 'Boolean');
        }
        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SendBirdGroupChannelInviter;
}();
/**
 * @member {Boolean} require_auth_for_profile_image
 */
SendBirdGroupChannelInviter.prototype['require_auth_for_profile_image'] = undefined;

/**
 * @member {Boolean} is_online
 */
SendBirdGroupChannelInviter.prototype['is_online'] = undefined;

/**
 * @member {String} user_id
 */
SendBirdGroupChannelInviter.prototype['user_id'] = undefined;

/**
 * @member {String} access_token
 */
SendBirdGroupChannelInviter.prototype['access_token'] = undefined;

/**
 * @member {Boolean} has_ever_logged_in
 */
SendBirdGroupChannelInviter.prototype['has_ever_logged_in'] = undefined;

/**
 * @member {Boolean} is_active
 */
SendBirdGroupChannelInviter.prototype['is_active'] = undefined;

/**
 * @member {Number} last_seen_at
 */
SendBirdGroupChannelInviter.prototype['last_seen_at'] = undefined;

/**
 * @member {String} nickname
 */
SendBirdGroupChannelInviter.prototype['nickname'] = undefined;

/**
 * @member {Array.<String>} discovery_keys
 */
SendBirdGroupChannelInviter.prototype['discovery_keys'] = undefined;

/**
 * @member {Array.<Object>} session_tokens
 */
SendBirdGroupChannelInviter.prototype['session_tokens'] = undefined;

/**
 * @member {Array.<String>} preferred_languages
 */
SendBirdGroupChannelInviter.prototype['preferred_languages'] = undefined;

/**
 * @member {String} profile_url
 */
SendBirdGroupChannelInviter.prototype['profile_url'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdGroupChannelInviter.prototype['created_at'] = undefined;

/**
 * @member {String} phone_number
 */
SendBirdGroupChannelInviter.prototype['phone_number'] = undefined;

/**
 * @member {String} local
 */
SendBirdGroupChannelInviter.prototype['local'] = undefined;

/**
 * @member {String} locale
 */
SendBirdGroupChannelInviter.prototype['locale'] = undefined;

/**
 * @member {Boolean} is_hide_me_from_friends
 */
SendBirdGroupChannelInviter.prototype['is_hide_me_from_friends'] = undefined;

/**
 * @member {Boolean} is_shadow_blocked
 */
SendBirdGroupChannelInviter.prototype['is_shadow_blocked'] = undefined;

/**
 * @member {Boolean} is_created
 */
SendBirdGroupChannelInviter.prototype['is_created'] = undefined;

/**
 * @member {Object} metadata
 */
SendBirdGroupChannelInviter.prototype['metadata'] = undefined;

/**
 * @member {String} description
 */
SendBirdGroupChannelInviter.prototype['description'] = undefined;

/**
 * @member {Number} end_at
 */
SendBirdGroupChannelInviter.prototype['end_at'] = undefined;

/**
 * @member {Number} start_at
 */
SendBirdGroupChannelInviter.prototype['start_at'] = undefined;

// Implement SendBirdUser interface:
/**
 * @member {Boolean} require_auth_for_profile_image
 */
_SendBirdUser["default"].prototype['require_auth_for_profile_image'] = undefined;
/**
 * @member {Boolean} is_online
 */
_SendBirdUser["default"].prototype['is_online'] = undefined;
/**
 * @member {String} user_id
 */
_SendBirdUser["default"].prototype['user_id'] = undefined;
/**
 * @member {String} access_token
 */
_SendBirdUser["default"].prototype['access_token'] = undefined;
/**
 * @member {Boolean} has_ever_logged_in
 */
_SendBirdUser["default"].prototype['has_ever_logged_in'] = undefined;
/**
 * @member {Boolean} is_active
 */
_SendBirdUser["default"].prototype['is_active'] = undefined;
/**
 * @member {Number} last_seen_at
 */
_SendBirdUser["default"].prototype['last_seen_at'] = undefined;
/**
 * @member {String} nickname
 */
_SendBirdUser["default"].prototype['nickname'] = undefined;
/**
 * @member {Array.<String>} discovery_keys
 */
_SendBirdUser["default"].prototype['discovery_keys'] = undefined;
/**
 * @member {Array.<Object>} session_tokens
 */
_SendBirdUser["default"].prototype['session_tokens'] = undefined;
/**
 * @member {Array.<String>} preferred_languages
 */
_SendBirdUser["default"].prototype['preferred_languages'] = undefined;
/**
 * @member {String} profile_url
 */
_SendBirdUser["default"].prototype['profile_url'] = undefined;
/**
 * @member {Number} created_at
 */
_SendBirdUser["default"].prototype['created_at'] = undefined;
/**
 * @member {String} phone_number
 */
_SendBirdUser["default"].prototype['phone_number'] = undefined;
/**
 * @member {String} local
 */
_SendBirdUser["default"].prototype['local'] = undefined;
/**
 * @member {String} locale
 */
_SendBirdUser["default"].prototype['locale'] = undefined;
/**
 * @member {Boolean} is_hide_me_from_friends
 */
_SendBirdUser["default"].prototype['is_hide_me_from_friends'] = undefined;
/**
 * @member {Boolean} is_shadow_blocked
 */
_SendBirdUser["default"].prototype['is_shadow_blocked'] = undefined;
/**
 * @member {Boolean} is_created
 */
_SendBirdUser["default"].prototype['is_created'] = undefined;
/**
 * @member {Object} metadata
 */
_SendBirdUser["default"].prototype['metadata'] = undefined;
/**
 * @member {String} description
 */
_SendBirdUser["default"].prototype['description'] = undefined;
/**
 * @member {Number} end_at
 */
_SendBirdUser["default"].prototype['end_at'] = undefined;
/**
 * @member {Number} start_at
 */
_SendBirdUser["default"].prototype['start_at'] = undefined;
var _default = SendBirdGroupChannelInviter;
exports["default"] = _default;