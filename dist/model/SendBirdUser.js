"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SBObject = _interopRequireDefault(require("./SBObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdUser model module.
 * @module model/SendBirdUser
 * @version 1.0.3
 */
var SendBirdUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdUser</code>.
   * User
   * @alias module:model/SendBirdUser
   */
  function SendBirdUser() {
    _classCallCheck(this, SendBirdUser);

    SendBirdUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdUser} obj Optional instance to populate.
     * @return {module:model/SendBirdUser} The populated <code>SendBirdUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdUser();

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
          obj['session_tokens'] = _ApiClient["default"].convertToType(data['session_tokens'], ['String']);
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
          obj['metadata'] = _SBObject["default"].constructFromObject(data['metadata']);
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

  return SendBirdUser;
}();
/**
 * @member {Boolean} require_auth_for_profile_image
 */


SendBirdUser.prototype['require_auth_for_profile_image'] = undefined;
/**
 * @member {Boolean} is_online
 */

SendBirdUser.prototype['is_online'] = undefined;
/**
 * @member {String} user_id
 */

SendBirdUser.prototype['user_id'] = undefined;
/**
 * @member {String} access_token
 */

SendBirdUser.prototype['access_token'] = undefined;
/**
 * @member {Boolean} has_ever_logged_in
 */

SendBirdUser.prototype['has_ever_logged_in'] = undefined;
/**
 * @member {Boolean} is_active
 */

SendBirdUser.prototype['is_active'] = undefined;
/**
 * @member {Number} last_seen_at
 */

SendBirdUser.prototype['last_seen_at'] = undefined;
/**
 * @member {String} nickname
 */

SendBirdUser.prototype['nickname'] = undefined;
/**
 * @member {Array.<String>} discovery_keys
 */

SendBirdUser.prototype['discovery_keys'] = undefined;
/**
 * @member {Array.<String>} session_tokens
 */

SendBirdUser.prototype['session_tokens'] = undefined;
/**
 * @member {Array.<String>} preferred_languages
 */

SendBirdUser.prototype['preferred_languages'] = undefined;
/**
 * @member {String} profile_url
 */

SendBirdUser.prototype['profile_url'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdUser.prototype['created_at'] = undefined;
/**
 * @member {String} phone_number
 */

SendBirdUser.prototype['phone_number'] = undefined;
/**
 * @member {String} local
 */

SendBirdUser.prototype['local'] = undefined;
/**
 * @member {String} locale
 */

SendBirdUser.prototype['locale'] = undefined;
/**
 * @member {Boolean} is_hide_me_from_friends
 */

SendBirdUser.prototype['is_hide_me_from_friends'] = undefined;
/**
 * @member {Boolean} is_shadow_blocked
 */

SendBirdUser.prototype['is_shadow_blocked'] = undefined;
/**
 * @member {Boolean} is_created
 */

SendBirdUser.prototype['is_created'] = undefined;
/**
 * @member {module:model/SBObject} metadata
 */

SendBirdUser.prototype['metadata'] = undefined;
/**
 * @member {String} description
 */

SendBirdUser.prototype['description'] = undefined;
/**
 * @member {Number} end_at
 */

SendBirdUser.prototype['end_at'] = undefined;
/**
 * @member {Number} start_at
 */

SendBirdUser.prototype['start_at'] = undefined;
var _default = SendBirdUser;
exports["default"] = _default;