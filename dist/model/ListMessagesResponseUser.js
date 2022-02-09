"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListMessagesResponseUserMetadata = _interopRequireDefault(require("./ListMessagesResponseUserMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListMessagesResponseUser model module.
 * @module model/ListMessagesResponseUser
 * @version 1.0.0
 */
var ListMessagesResponseUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseUser</code>.
   * @alias module:model/ListMessagesResponseUser
   */
  function ListMessagesResponseUser() {
    _classCallCheck(this, ListMessagesResponseUser);

    ListMessagesResponseUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListMessagesResponseUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListMessagesResponseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseUser} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseUser} The populated <code>ListMessagesResponseUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseUser();

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
          obj['metadata'] = _ListMessagesResponseUserMetadata["default"].constructFromObject(data['metadata']);
        }
      }

      return obj;
    }
  }]);

  return ListMessagesResponseUser;
}();
/**
 * @member {String} user_id
 */


ListMessagesResponseUser.prototype['user_id'] = undefined;
/**
 * @member {String} nickname
 */

ListMessagesResponseUser.prototype['nickname'] = undefined;
/**
 * @member {String} profile_url
 */

ListMessagesResponseUser.prototype['profile_url'] = undefined;
/**
 * @member {module:model/ListMessagesResponseUserMetadata} metadata
 */

ListMessagesResponseUser.prototype['metadata'] = undefined;
var _default = ListMessagesResponseUser;
exports["default"] = _default;