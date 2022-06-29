"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("./InlineResponse2001"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OcBanUserResponse model module.
 * @module model/OcBanUserResponse
 * @version 1.0.3
 */
var OcBanUserResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcBanUserResponse</code>.
   * @alias module:model/OcBanUserResponse
   */
  function OcBanUserResponse() {
    _classCallCheck(this, OcBanUserResponse);

    OcBanUserResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OcBanUserResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OcBanUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcBanUserResponse} obj Optional instance to populate.
     * @return {module:model/OcBanUserResponse} The populated <code>OcBanUserResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcBanUserResponse();

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdUser["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('next_url')) {
          obj['next_url'] = _ApiClient["default"].convertToType(data['next_url'], 'String');
        }

        if (data.hasOwnProperty('require_auth_for_profile_image')) {
          obj['require_auth_for_profile_image'] = _ApiClient["default"].convertToType(data['require_auth_for_profile_image'], 'Boolean');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('profile_url')) {
          obj['profile_url'] = _ApiClient["default"].convertToType(data['profile_url'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _InlineResponse["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);

  return OcBanUserResponse;
}();
/**
 * @member {Number} start_at
 */


OcBanUserResponse.prototype['start_at'] = undefined;
/**
 * @member {Number} end_at
 */

OcBanUserResponse.prototype['end_at'] = undefined;
/**
 * @member {String} description
 */

OcBanUserResponse.prototype['description'] = undefined;
/**
 * @member {String} user_id
 */

OcBanUserResponse.prototype['user_id'] = undefined;
/**
 * @member {module:model/SendBirdUser} user
 */

OcBanUserResponse.prototype['user'] = undefined;
/**
 * @member {String} next_url
 */

OcBanUserResponse.prototype['next_url'] = undefined;
/**
 * @member {Boolean} require_auth_for_profile_image
 */

OcBanUserResponse.prototype['require_auth_for_profile_image'] = undefined;
/**
 * @member {String} nickname
 */

OcBanUserResponse.prototype['nickname'] = undefined;
/**
 * @member {String} profile_url
 */

OcBanUserResponse.prototype['profile_url'] = undefined;
/**
 * @member {module:model/InlineResponse2001} metadata
 */

OcBanUserResponse.prototype['metadata'] = undefined;
var _default = OcBanUserResponse;
exports["default"] = _default;