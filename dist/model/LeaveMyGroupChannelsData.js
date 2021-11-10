"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LeaveMyGroupChannelsData model module.
 * @module model/LeaveMyGroupChannelsData
 * @version 1.0.0
 */
var LeaveMyGroupChannelsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LeaveMyGroupChannelsData</code>.
   * @alias module:model/LeaveMyGroupChannelsData
   * @param userId {String} Specifies the unique ID of the user to leave all joined group channels.
   * @param customType {String} Specifies the custom channel type to make the user leave joined group channels with the corresponding type.
   */
  function LeaveMyGroupChannelsData(userId, customType) {
    _classCallCheck(this, LeaveMyGroupChannelsData);

    LeaveMyGroupChannelsData.initialize(this, userId, customType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LeaveMyGroupChannelsData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, customType) {
      obj['user_id'] = userId;
      obj['custom_type'] = customType;
    }
    /**
     * Constructs a <code>LeaveMyGroupChannelsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeaveMyGroupChannelsData} obj Optional instance to populate.
     * @return {module:model/LeaveMyGroupChannelsData} The populated <code>LeaveMyGroupChannelsData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LeaveMyGroupChannelsData();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LeaveMyGroupChannelsData;
}();
/**
 * Specifies the unique ID of the user to leave all joined group channels.
 * @member {String} user_id
 */


LeaveMyGroupChannelsData.prototype['user_id'] = undefined;
/**
 * Specifies the custom channel type to make the user leave joined group channels with the corresponding type.
 * @member {String} custom_type
 */

LeaveMyGroupChannelsData.prototype['custom_type'] = undefined;
var _default = LeaveMyGroupChannelsData;
exports["default"] = _default;