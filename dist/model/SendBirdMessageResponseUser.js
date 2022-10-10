"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OcDeleteChannelByUrl200Response = _interopRequireDefault(require("./OcDeleteChannelByUrl200Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdMessageResponseUser model module.
 * @module model/SendBirdMessageResponseUser
 * @version 0.0.13
 */
var SendBirdMessageResponseUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdMessageResponseUser</code>.
   * @alias module:model/SendBirdMessageResponseUser
   */
  function SendBirdMessageResponseUser() {
    _classCallCheck(this, SendBirdMessageResponseUser);

    SendBirdMessageResponseUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdMessageResponseUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdMessageResponseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMessageResponseUser} obj Optional instance to populate.
     * @return {module:model/SendBirdMessageResponseUser} The populated <code>SendBirdMessageResponseUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdMessageResponseUser();

        if (data.hasOwnProperty('require_auth_for_profile_image')) {
          obj['require_auth_for_profile_image'] = _ApiClient["default"].convertToType(data['require_auth_for_profile_image'], 'Boolean');
        }

        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('profile_url')) {
          obj['profile_url'] = _ApiClient["default"].convertToType(data['profile_url'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _OcDeleteChannelByUrl200Response["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);

  return SendBirdMessageResponseUser;
}();
/**
 * @member {Boolean} require_auth_for_profile_image
 */


SendBirdMessageResponseUser.prototype['require_auth_for_profile_image'] = undefined;
/**
 * @member {Boolean} is_active
 */

SendBirdMessageResponseUser.prototype['is_active'] = undefined;
/**
 * @member {String} role
 */

SendBirdMessageResponseUser.prototype['role'] = undefined;
/**
 * @member {String} user_id
 */

SendBirdMessageResponseUser.prototype['user_id'] = undefined;
/**
 * @member {String} nickname
 */

SendBirdMessageResponseUser.prototype['nickname'] = undefined;
/**
 * @member {String} profile_url
 */

SendBirdMessageResponseUser.prototype['profile_url'] = undefined;
/**
 * @member {module:model/OcDeleteChannelByUrl200Response} metadata
 */

SendBirdMessageResponseUser.prototype['metadata'] = undefined;
var _default = SendBirdMessageResponseUser;
exports["default"] = _default;