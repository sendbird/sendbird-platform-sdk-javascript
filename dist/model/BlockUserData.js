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
 * The BlockUserData model module.
 * @module model/BlockUserData
 * @version 0.0.16
 */
var BlockUserData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockUserData</code>.
   * @alias module:model/BlockUserData
   * @param userId {String} Specifies the unique ID of the user to block.
   * @param targetId {String} Specifies the ID of the user to be blocked.
   * @param userIds {Array.<String>} Specifies an array of the IDs of the users to be blocked at a time. (for bulk mode)
   * @param users {Array.<String>} Specifies an array of the IDs of the users to be blocked at a time. The user_ids above and this property can be used interchangeably. (for bulk mode)
   */
  function BlockUserData(userId, targetId, userIds, users) {
    _classCallCheck(this, BlockUserData);
    BlockUserData.initialize(this, userId, targetId, userIds, users);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(BlockUserData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, targetId, userIds, users) {
      obj['user_id'] = userId;
      obj['target_id'] = targetId;
      obj['user_ids'] = userIds;
      obj['users'] = users;
    }

    /**
     * Constructs a <code>BlockUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockUserData} obj Optional instance to populate.
     * @return {module:model/BlockUserData} The populated <code>BlockUserData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockUserData();
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('target_id')) {
          obj['target_id'] = _ApiClient["default"].convertToType(data['target_id'], 'String');
        }
        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }
        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return BlockUserData;
}();
/**
 * Specifies the unique ID of the user to block.
 * @member {String} user_id
 */
BlockUserData.prototype['user_id'] = undefined;

/**
 * Specifies the ID of the user to be blocked.
 * @member {String} target_id
 */
BlockUserData.prototype['target_id'] = undefined;

/**
 * Specifies an array of the IDs of the users to be blocked at a time. (for bulk mode)
 * @member {Array.<String>} user_ids
 */
BlockUserData.prototype['user_ids'] = undefined;

/**
 * Specifies an array of the IDs of the users to be blocked at a time. The user_ids above and this property can be used interchangeably. (for bulk mode)
 * @member {Array.<String>} users
 */
BlockUserData.prototype['users'] = undefined;
var _default = BlockUserData;
exports["default"] = _default;