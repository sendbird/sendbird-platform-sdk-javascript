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
 * The MuteUsersInChannelsWithCustomChannelTypeData model module.
 * @module model/MuteUsersInChannelsWithCustomChannelTypeData
 * @version 0.0.14
 */var MuteUsersInChannelsWithCustomChannelTypeData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MuteUsersInChannelsWithCustomChannelTypeData</code>.
   * @alias module:model/MuteUsersInChannelsWithCustomChannelTypeData
   * @param userIds {Array.<String>} 
   */
  function MuteUsersInChannelsWithCustomChannelTypeData(userIds) {
    _classCallCheck(this, MuteUsersInChannelsWithCustomChannelTypeData);
    MuteUsersInChannelsWithCustomChannelTypeData.initialize(this, userIds);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(MuteUsersInChannelsWithCustomChannelTypeData, null, [{
    key: "initialize",
    value: function initialize(obj, userIds) {
      obj['user_ids'] = userIds;
    }

    /**
     * Constructs a <code>MuteUsersInChannelsWithCustomChannelTypeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MuteUsersInChannelsWithCustomChannelTypeData} obj Optional instance to populate.
     * @return {module:model/MuteUsersInChannelsWithCustomChannelTypeData} The populated <code>MuteUsersInChannelsWithCustomChannelTypeData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MuteUsersInChannelsWithCustomChannelTypeData();
        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }
        if (data.hasOwnProperty('seconds')) {
          obj['seconds'] = _ApiClient["default"].convertToType(data['seconds'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('on_demand_upsert')) {
          obj['on_demand_upsert'] = _ApiClient["default"].convertToType(data['on_demand_upsert'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return MuteUsersInChannelsWithCustomChannelTypeData;
}(); /**
      * @member {Array.<String>} user_ids
      */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['user_ids'] = undefined;

/**
 * @member {Number} seconds
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['seconds'] = undefined;

/**
 * @member {String} description
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['description'] = undefined;

/**
 * @member {Boolean} on_demand_upsert
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['on_demand_upsert'] = undefined;
var _default = MuteUsersInChannelsWithCustomChannelTypeData;
exports["default"] = _default;