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
 * The BanUsersInChannelsWithCustomChannelTypeDataBannedListInner model module.
 * @module model/BanUsersInChannelsWithCustomChannelTypeDataBannedListInner
 * @version 0.0.14
 */var BanUsersInChannelsWithCustomChannelTypeDataBannedListInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BanUsersInChannelsWithCustomChannelTypeDataBannedListInner</code>.
   * @alias module:model/BanUsersInChannelsWithCustomChannelTypeDataBannedListInner
   * @param userId {String} 
   */
  function BanUsersInChannelsWithCustomChannelTypeDataBannedListInner(userId) {
    _classCallCheck(this, BanUsersInChannelsWithCustomChannelTypeDataBannedListInner);
    BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.initialize(this, userId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(BanUsersInChannelsWithCustomChannelTypeDataBannedListInner, null, [{
    key: "initialize",
    value: function initialize(obj, userId) {
      obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>BanUsersInChannelsWithCustomChannelTypeDataBannedListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BanUsersInChannelsWithCustomChannelTypeDataBannedListInner} obj Optional instance to populate.
     * @return {module:model/BanUsersInChannelsWithCustomChannelTypeDataBannedListInner} The populated <code>BanUsersInChannelsWithCustomChannelTypeDataBannedListInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BanUsersInChannelsWithCustomChannelTypeDataBannedListInner();
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('seconds')) {
          obj['seconds'] = _ApiClient["default"].convertToType(data['seconds'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }
  }]);
  return BanUsersInChannelsWithCustomChannelTypeDataBannedListInner;
}(); /**
      * @member {String} user_id
      */
BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.prototype['user_id'] = undefined;

/**
 * @member {Number} seconds
 */
BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.prototype['seconds'] = undefined;

/**
 * @member {String} description
 */
BanUsersInChannelsWithCustomChannelTypeDataBannedListInner.prototype['description'] = undefined;
var _default = BanUsersInChannelsWithCustomChannelTypeDataBannedListInner;
exports["default"] = _default;