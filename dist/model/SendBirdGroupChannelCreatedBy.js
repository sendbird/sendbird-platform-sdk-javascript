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
 * The SendBirdGroupChannelCreatedBy model module.
 * @module model/SendBirdGroupChannelCreatedBy
 * @version 0.0.13
 */
var SendBirdGroupChannelCreatedBy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannelCreatedBy</code>.
   * @alias module:model/SendBirdGroupChannelCreatedBy
   */
  function SendBirdGroupChannelCreatedBy() {
    _classCallCheck(this, SendBirdGroupChannelCreatedBy);

    SendBirdGroupChannelCreatedBy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdGroupChannelCreatedBy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdGroupChannelCreatedBy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelCreatedBy} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelCreatedBy} The populated <code>SendBirdGroupChannelCreatedBy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannelCreatedBy();

        if (data.hasOwnProperty('require_auth_for_profile_image')) {
          obj['require_auth_for_profile_image'] = _ApiClient["default"].convertToType(data['require_auth_for_profile_image'], 'Boolean');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('profile_url')) {
          obj['profile_url'] = _ApiClient["default"].convertToType(data['profile_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendBirdGroupChannelCreatedBy;
}();
/**
 * @member {Boolean} require_auth_for_profile_image
 */


SendBirdGroupChannelCreatedBy.prototype['require_auth_for_profile_image'] = undefined;
/**
 * @member {String} nickname
 */

SendBirdGroupChannelCreatedBy.prototype['nickname'] = undefined;
/**
 * @member {String} user_id
 */

SendBirdGroupChannelCreatedBy.prototype['user_id'] = undefined;
/**
 * @member {String} profile_url
 */

SendBirdGroupChannelCreatedBy.prototype['profile_url'] = undefined;
var _default = SendBirdGroupChannelCreatedBy;
exports["default"] = _default;