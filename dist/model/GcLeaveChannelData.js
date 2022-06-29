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
 * The GcLeaveChannelData model module.
 * @module model/GcLeaveChannelData
 * @version 1.0.3
 */
var GcLeaveChannelData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcLeaveChannelData</code>.
   * @alias module:model/GcLeaveChannelData
   * @param channelUrl {String} Specifies the URL of the channel to leave.
   * @param userIds {Array.<Number>} Specifies an array of one or more IDs of the users to leave the channel.
   * @param shouldLeaveAll {Boolean} Determines whether to make all members leave the channel. (Default: false)
   */
  function GcLeaveChannelData(channelUrl, userIds, shouldLeaveAll) {
    _classCallCheck(this, GcLeaveChannelData);

    GcLeaveChannelData.initialize(this, channelUrl, userIds, shouldLeaveAll);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcLeaveChannelData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userIds, shouldLeaveAll) {
      obj['channel_url'] = channelUrl;
      obj['user_ids'] = userIds;
      obj['should_leave_all'] = shouldLeaveAll;
    }
    /**
     * Constructs a <code>GcLeaveChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcLeaveChannelData} obj Optional instance to populate.
     * @return {module:model/GcLeaveChannelData} The populated <code>GcLeaveChannelData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcLeaveChannelData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['Number']);
        }

        if (data.hasOwnProperty('should_leave_all')) {
          obj['should_leave_all'] = _ApiClient["default"].convertToType(data['should_leave_all'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GcLeaveChannelData;
}();
/**
 * Specifies the URL of the channel to leave.
 * @member {String} channel_url
 */


GcLeaveChannelData.prototype['channel_url'] = undefined;
/**
 * Specifies an array of one or more IDs of the users to leave the channel.
 * @member {Array.<Number>} user_ids
 */

GcLeaveChannelData.prototype['user_ids'] = undefined;
/**
 * Determines whether to make all members leave the channel. (Default: false)
 * @member {Boolean} should_leave_all
 */

GcLeaveChannelData.prototype['should_leave_all'] = undefined;
var _default = GcLeaveChannelData;
exports["default"] = _default;