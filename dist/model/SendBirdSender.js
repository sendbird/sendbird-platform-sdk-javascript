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
 * The SendBirdSender model module.
 * @module model/SendBirdSender
 * @version 0.0.16
 */
var SendBirdSender = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdSender</code>.
   * @alias module:model/SendBirdSender
   */
  function SendBirdSender() {
    _classCallCheck(this, SendBirdSender);
    SendBirdSender.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdSender, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdSender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdSender} obj Optional instance to populate.
     * @return {module:model/SendBirdSender} The populated <code>SendBirdSender</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdSender();
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
        if (data.hasOwnProperty('is_blocked_by_me')) {
          obj['is_blocked_by_me'] = _ApiClient["default"].convertToType(data['is_blocked_by_me'], 'Boolean');
        }
        if (data.hasOwnProperty('last_seen_at')) {
          obj['last_seen_at'] = _ApiClient["default"].convertToType(data['last_seen_at'], 'Number');
        }
        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
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
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SendBirdSender;
}();
/**
 * @member {String} connection_status
 */
SendBirdSender.prototype['connection_status'] = undefined;

/**
 * @member {String} friend_discovery_key
 */
SendBirdSender.prototype['friend_discovery_key'] = undefined;

/**
 * @member {String} friend_name
 */
SendBirdSender.prototype['friend_name'] = undefined;

/**
 * @member {Boolean} is_active
 */
SendBirdSender.prototype['is_active'] = undefined;

/**
 * @member {Boolean} is_blocked_by_me
 */
SendBirdSender.prototype['is_blocked_by_me'] = undefined;

/**
 * @member {Number} last_seen_at
 */
SendBirdSender.prototype['last_seen_at'] = undefined;

/**
 * @member {Object} metadata
 */
SendBirdSender.prototype['metadata'] = undefined;

/**
 * @member {String} nickname
 */
SendBirdSender.prototype['nickname'] = undefined;

/**
 * @member {String} plain_profile_url
 */
SendBirdSender.prototype['plain_profile_url'] = undefined;

/**
 * @member {Array.<String>} preferred_languages
 */
SendBirdSender.prototype['preferred_languages'] = undefined;

/**
 * @member {String} profile_url
 */
SendBirdSender.prototype['profile_url'] = undefined;

/**
 * @member {Boolean} require_auth
 */
SendBirdSender.prototype['require_auth'] = undefined;

/**
 * @member {String} user_id
 */
SendBirdSender.prototype['user_id'] = undefined;
var _default = SendBirdSender;
exports["default"] = _default;