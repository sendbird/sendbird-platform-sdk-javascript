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
 * The GcJoinChannelData model module.
 * @module model/GcJoinChannelData
 * @version 1.0.7
 */
var GcJoinChannelData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcJoinChannelData</code>.
   * @alias module:model/GcJoinChannelData
   * @param channelUrl {String} Specifies the URL of the channel to join.
   * @param userId {String} Specifies the unique ID of the user to join the public group channel.
   * @param accessCode {String} This property should be specified if the public group channel to join requires an access code to users, which means that the is_access_code_required property of the channel resource is true.
   */
  function GcJoinChannelData(channelUrl, userId, accessCode) {
    _classCallCheck(this, GcJoinChannelData);

    GcJoinChannelData.initialize(this, channelUrl, userId, accessCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcJoinChannelData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userId, accessCode) {
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
      obj['access_code'] = accessCode;
    }
    /**
     * Constructs a <code>GcJoinChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcJoinChannelData} obj Optional instance to populate.
     * @return {module:model/GcJoinChannelData} The populated <code>GcJoinChannelData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcJoinChannelData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('access_code')) {
          obj['access_code'] = _ApiClient["default"].convertToType(data['access_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GcJoinChannelData;
}();
/**
 * Specifies the URL of the channel to join.
 * @member {String} channel_url
 */


GcJoinChannelData.prototype['channel_url'] = undefined;
/**
 * Specifies the unique ID of the user to join the public group channel.
 * @member {String} user_id
 */

GcJoinChannelData.prototype['user_id'] = undefined;
/**
 * This property should be specified if the public group channel to join requires an access code to users, which means that the is_access_code_required property of the channel resource is true.
 * @member {String} access_code
 */

GcJoinChannelData.prototype['access_code'] = undefined;
var _default = GcJoinChannelData;
exports["default"] = _default;