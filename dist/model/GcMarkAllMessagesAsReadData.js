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
 * The GcMarkAllMessagesAsReadData model module.
 * @module model/GcMarkAllMessagesAsReadData
 * @version 1.0.7
 */
var GcMarkAllMessagesAsReadData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcMarkAllMessagesAsReadData</code>.
   * @alias module:model/GcMarkAllMessagesAsReadData
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param userId {String} Specifies the ID of the user to mark all messages as read.
   * @param timestamp {Number} Specifies the timestamp to be the reference point of marking as read. If specified, the messages received before the specified time are marked as read.
   */
  function GcMarkAllMessagesAsReadData(channelUrl, userId, timestamp) {
    _classCallCheck(this, GcMarkAllMessagesAsReadData);

    GcMarkAllMessagesAsReadData.initialize(this, channelUrl, userId, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcMarkAllMessagesAsReadData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userId, timestamp) {
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>GcMarkAllMessagesAsReadData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcMarkAllMessagesAsReadData} obj Optional instance to populate.
     * @return {module:model/GcMarkAllMessagesAsReadData} The populated <code>GcMarkAllMessagesAsReadData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcMarkAllMessagesAsReadData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GcMarkAllMessagesAsReadData;
}();
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */


GcMarkAllMessagesAsReadData.prototype['channel_url'] = undefined;
/**
 * Specifies the ID of the user to mark all messages as read.
 * @member {String} user_id
 */

GcMarkAllMessagesAsReadData.prototype['user_id'] = undefined;
/**
 * Specifies the timestamp to be the reference point of marking as read. If specified, the messages received before the specified time are marked as read.
 * @member {Number} timestamp
 */

GcMarkAllMessagesAsReadData.prototype['timestamp'] = undefined;
var _default = GcMarkAllMessagesAsReadData;
exports["default"] = _default;