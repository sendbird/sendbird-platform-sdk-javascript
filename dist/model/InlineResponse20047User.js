"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20047UserMetadata = _interopRequireDefault(require("./InlineResponse20047UserMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20047User model module.
 * @module model/InlineResponse20047User
 * @version 1.0.0
 */
var InlineResponse20047User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20047User</code>.
   * @alias module:model/InlineResponse20047User
   */
  function InlineResponse20047User() {
    _classCallCheck(this, InlineResponse20047User);

    InlineResponse20047User.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20047User, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20047User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047User} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047User} The populated <code>InlineResponse20047User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20047User();

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
          obj['metadata'] = _InlineResponse20047UserMetadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20047User;
}();
/**
 * @member {String} user_id
 */


InlineResponse20047User.prototype['user_id'] = undefined;
/**
 * @member {String} nickname
 */

InlineResponse20047User.prototype['nickname'] = undefined;
/**
 * @member {String} profile_url
 */

InlineResponse20047User.prototype['profile_url'] = undefined;
/**
 * @member {module:model/InlineResponse20047UserMetadata} metadata
 */

InlineResponse20047User.prototype['metadata'] = undefined;
var _default = InlineResponse20047User;
exports["default"] = _default;