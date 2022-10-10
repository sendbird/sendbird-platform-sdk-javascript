"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdRestrictionInfo = _interopRequireDefault(require("./SendBirdRestrictionInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdMember model module.
 * @module model/SendBirdMember
 * @version 0.0.13
 */
var SendBirdMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdMember</code>.
   * @alias module:model/SendBirdMember
   */
  function SendBirdMember() {
    _classCallCheck(this, SendBirdMember);

    SendBirdMember.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdMember, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMember} obj Optional instance to populate.
     * @return {module:model/SendBirdMember} The populated <code>SendBirdMember</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdMember();

        if (data.hasOwnProperty('connection_status')) {
          obj['connection_status'] = _ApiClient["default"].convertToType(data['connection_status'], 'String');
        }

        if (data.hasOwnProperty('friend_discovery_key')) {
          obj['friend_discovery_key'] = _ApiClient["default"].convertToType(data['friend_discovery_key'], 'String');
        }

        if (data.hasOwnProperty('friend_name')) {
          obj['friend_name'] = _ApiClient["default"].convertToType(data['friend_name'], 'String');
        }

        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }

        if (data.hasOwnProperty('is_muted')) {
          obj['is_muted'] = _ApiClient["default"].convertToType(data['is_muted'], 'Boolean');
        }

        if (data.hasOwnProperty('last_seen_at')) {
          obj['last_seen_at'] = _ApiClient["default"].convertToType(data['last_seen_at'], 'Number');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('plain_profile_url')) {
          obj['plain_profile_url'] = _ApiClient["default"].convertToType(data['plain_profile_url'], 'String');
        }

        if (data.hasOwnProperty('preferred_languages')) {
          obj['preferred_languages'] = _ApiClient["default"].convertToType(data['preferred_languages'], ['String']);
        }

        if (data.hasOwnProperty('profile_url')) {
          obj['profile_url'] = _ApiClient["default"].convertToType(data['profile_url'], 'String');
        }

        if (data.hasOwnProperty('require_auth')) {
          obj['require_auth'] = _ApiClient["default"].convertToType(data['require_auth'], 'Boolean');
        }

        if (data.hasOwnProperty('require_auth_for_profile_image')) {
          obj['require_auth_for_profile_image'] = _ApiClient["default"].convertToType(data['require_auth_for_profile_image'], 'Boolean');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }

        if (data.hasOwnProperty('is_online')) {
          obj['is_online'] = _ApiClient["default"].convertToType(data['is_online'], 'Boolean');
        }

        if (data.hasOwnProperty('muted_end_at')) {
          obj['muted_end_at'] = _ApiClient["default"].convertToType(data['muted_end_at'], 'Number');
        }

        if (data.hasOwnProperty('muted_description')) {
          obj['muted_description'] = _ApiClient["default"].convertToType(data['muted_description'], 'String');
        }

        if (data.hasOwnProperty('restriction_info')) {
          obj['restriction_info'] = _SendBirdRestrictionInfo["default"].constructFromObject(data['restriction_info']);
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendBirdMember;
}();
/**
 * @member {String} connection_status
 */


SendBirdMember.prototype['connection_status'] = undefined;
/**
 * @member {String} friend_discovery_key
 */

SendBirdMember.prototype['friend_discovery_key'] = undefined;
/**
 * @member {String} friend_name
 */

SendBirdMember.prototype['friend_name'] = undefined;
/**
 * @member {Boolean} is_active
 */

SendBirdMember.prototype['is_active'] = undefined;
/**
 * @member {Boolean} is_muted
 */

SendBirdMember.prototype['is_muted'] = undefined;
/**
 * @member {Number} last_seen_at
 */

SendBirdMember.prototype['last_seen_at'] = undefined;
/**
 * @member {String} nickname
 */

SendBirdMember.prototype['nickname'] = undefined;
/**
 * @member {String} plain_profile_url
 */

SendBirdMember.prototype['plain_profile_url'] = undefined;
/**
 * @member {Array.<String>} preferred_languages
 */

SendBirdMember.prototype['preferred_languages'] = undefined;
/**
 * @member {String} profile_url
 */

SendBirdMember.prototype['profile_url'] = undefined;
/**
 * @member {Boolean} require_auth
 */

SendBirdMember.prototype['require_auth'] = undefined;
/**
 * @member {Boolean} require_auth_for_profile_image
 */

SendBirdMember.prototype['require_auth_for_profile_image'] = undefined;
/**
 * @member {Object} metadata
 */

SendBirdMember.prototype['metadata'] = undefined;
/**
 * @member {Boolean} is_online
 */

SendBirdMember.prototype['is_online'] = undefined;
/**
 * @member {Number} muted_end_at
 */

SendBirdMember.prototype['muted_end_at'] = undefined;
/**
 * @member {String} muted_description
 */

SendBirdMember.prototype['muted_description'] = undefined;
/**
 * @member {module:model/SendBirdRestrictionInfo} restriction_info
 */

SendBirdMember.prototype['restriction_info'] = undefined;
/**
 * @member {module:model/SendBirdMember.RoleEnum} role
 */

SendBirdMember.prototype['role'] = undefined;
/**
 * @member {module:model/SendBirdMember.StateEnum} state
 */

SendBirdMember.prototype['state'] = undefined;
/**
 * @member {String} user_id
 */

SendBirdMember.prototype['user_id'] = undefined;
/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdMember['RoleEnum'] = {
  /**
   * value: ""
   * @const
   */
  "empty": "",

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
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdMember['StateEnum'] = {
  /**
   * value: ""
   * @const
   */
  "empty": "",

  /**
   * value: "invited"
   * @const
   */
  "invited": "invited",

  /**
   * value: "joined"
   * @const
   */
  "joined": "joined"
};
var _default = SendBirdMember;
exports["default"] = _default;