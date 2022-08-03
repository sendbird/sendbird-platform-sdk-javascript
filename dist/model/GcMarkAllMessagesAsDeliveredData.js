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
 * The GcMarkAllMessagesAsDeliveredData model module.
 * @module model/GcMarkAllMessagesAsDeliveredData
 * @version 1.0.7
 */
var GcMarkAllMessagesAsDeliveredData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcMarkAllMessagesAsDeliveredData</code>.
   * @alias module:model/GcMarkAllMessagesAsDeliveredData
   * @param applicationId {String} Specifies the unique ID of your application.
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param userId {String} Specifies the ID of the recipient to mark messages as delivered.
   */
  function GcMarkAllMessagesAsDeliveredData(applicationId, channelUrl, userId) {
    _classCallCheck(this, GcMarkAllMessagesAsDeliveredData);

    GcMarkAllMessagesAsDeliveredData.initialize(this, applicationId, channelUrl, userId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcMarkAllMessagesAsDeliveredData, null, [{
    key: "initialize",
    value: function initialize(obj, applicationId, channelUrl, userId) {
      obj['application_id'] = applicationId;
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
    }
    /**
     * Constructs a <code>GcMarkAllMessagesAsDeliveredData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcMarkAllMessagesAsDeliveredData} obj Optional instance to populate.
     * @return {module:model/GcMarkAllMessagesAsDeliveredData} The populated <code>GcMarkAllMessagesAsDeliveredData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcMarkAllMessagesAsDeliveredData();

        if (data.hasOwnProperty('application_id')) {
          obj['application_id'] = _ApiClient["default"].convertToType(data['application_id'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GcMarkAllMessagesAsDeliveredData;
}();
/**
 * Specifies the unique ID of your application.
 * @member {String} application_id
 */


GcMarkAllMessagesAsDeliveredData.prototype['application_id'] = undefined;
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */

GcMarkAllMessagesAsDeliveredData.prototype['channel_url'] = undefined;
/**
 * Specifies the ID of the recipient to mark messages as delivered.
 * @member {String} user_id
 */

GcMarkAllMessagesAsDeliveredData.prototype['user_id'] = undefined;
var _default = GcMarkAllMessagesAsDeliveredData;
exports["default"] = _default;