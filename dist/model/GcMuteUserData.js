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
 * The GcMuteUserData model module.
 * @module model/GcMuteUserData
 * @version 1.0.0
 */
var GcMuteUserData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcMuteUserData</code>.
   * @alias module:model/GcMuteUserData
   * @param channelUrl {String} Specifies the URL of the target channel.
   * @param userId {String} Specifies the ID of the target user to mute.
   * @param seconds {Number} Specifies the duration of mute status. If set to -1, the user will be muted permanently (10 years, technically). (Default: -1)
   * @param description {String} Specifies a reason for the muting.
   */
  function GcMuteUserData(channelUrl, userId, seconds, description) {
    _classCallCheck(this, GcMuteUserData);

    GcMuteUserData.initialize(this, channelUrl, userId, seconds, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcMuteUserData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userId, seconds, description) {
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
      obj['seconds'] = seconds;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>GcMuteUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcMuteUserData} obj Optional instance to populate.
     * @return {module:model/GcMuteUserData} The populated <code>GcMuteUserData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcMuteUserData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

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

  return GcMuteUserData;
}();
/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */


GcMuteUserData.prototype['channel_url'] = undefined;
/**
 * Specifies the ID of the target user to mute.
 * @member {String} user_id
 */

GcMuteUserData.prototype['user_id'] = undefined;
/**
 * Specifies the duration of mute status. If set to -1, the user will be muted permanently (10 years, technically). (Default: -1)
 * @member {Number} seconds
 */

GcMuteUserData.prototype['seconds'] = undefined;
/**
 * Specifies a reason for the muting.
 * @member {String} description
 */

GcMuteUserData.prototype['description'] = undefined;
var _default = GcMuteUserData;
exports["default"] = _default;