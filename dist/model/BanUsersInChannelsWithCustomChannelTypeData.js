"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BanUsersInChannelsWithCustomChannelTypeDataBannedListInner = _interopRequireDefault(require("./BanUsersInChannelsWithCustomChannelTypeDataBannedListInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BanUsersInChannelsWithCustomChannelTypeData model module.
 * @module model/BanUsersInChannelsWithCustomChannelTypeData
 * @version 1.0.7
 */
var BanUsersInChannelsWithCustomChannelTypeData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BanUsersInChannelsWithCustomChannelTypeData</code>.
   * @alias module:model/BanUsersInChannelsWithCustomChannelTypeData
   * @param bannedList {Array.<module:model/BanUsersInChannelsWithCustomChannelTypeDataBannedListInner>} 
   */
  function BanUsersInChannelsWithCustomChannelTypeData(bannedList) {
    _classCallCheck(this, BanUsersInChannelsWithCustomChannelTypeData);

    BanUsersInChannelsWithCustomChannelTypeData.initialize(this, bannedList);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BanUsersInChannelsWithCustomChannelTypeData, null, [{
    key: "initialize",
    value: function initialize(obj, bannedList) {
      obj['banned_list'] = bannedList;
    }
    /**
     * Constructs a <code>BanUsersInChannelsWithCustomChannelTypeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BanUsersInChannelsWithCustomChannelTypeData} obj Optional instance to populate.
     * @return {module:model/BanUsersInChannelsWithCustomChannelTypeData} The populated <code>BanUsersInChannelsWithCustomChannelTypeData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BanUsersInChannelsWithCustomChannelTypeData();

        if (data.hasOwnProperty('banned_list')) {
          obj['banned_list'] = _ApiClient["default"].convertToType(data['banned_list'], [_BanUsersInChannelsWithCustomChannelTypeDataBannedListInner["default"]]);
        }

        if (data.hasOwnProperty('on_demand_upsert')) {
          obj['on_demand_upsert'] = _ApiClient["default"].convertToType(data['on_demand_upsert'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BanUsersInChannelsWithCustomChannelTypeData;
}();
/**
 * @member {Array.<module:model/BanUsersInChannelsWithCustomChannelTypeDataBannedListInner>} banned_list
 */


BanUsersInChannelsWithCustomChannelTypeData.prototype['banned_list'] = undefined;
/**
 * @member {Boolean} on_demand_upsert
 */

BanUsersInChannelsWithCustomChannelTypeData.prototype['on_demand_upsert'] = undefined;
var _default = BanUsersInChannelsWithCustomChannelTypeData;
exports["default"] = _default;