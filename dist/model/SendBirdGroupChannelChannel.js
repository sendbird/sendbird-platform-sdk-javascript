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
 * The SendBirdGroupChannelChannel model module.
 * @module model/SendBirdGroupChannelChannel
 * @version 0.0.13
 */
var SendBirdGroupChannelChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannelChannel</code>.
   * @alias module:model/SendBirdGroupChannelChannel
   */
  function SendBirdGroupChannelChannel() {
    _classCallCheck(this, SendBirdGroupChannelChannel);

    SendBirdGroupChannelChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdGroupChannelChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdGroupChannelChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelChannel} The populated <code>SendBirdGroupChannelChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannelChannel();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('max_length_message')) {
          obj['max_length_message'] = _ApiClient["default"].convertToType(data['max_length_message'], 'Number');
        }

        if (data.hasOwnProperty('member_count')) {
          obj['member_count'] = _ApiClient["default"].convertToType(data['member_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdGroupChannelChannel;
}();
/**
 * @member {String} channel_url
 */


SendBirdGroupChannelChannel.prototype['channel_url'] = undefined;
/**
 * @member {String} name
 */

SendBirdGroupChannelChannel.prototype['name'] = undefined;
/**
 * @member {String} cover_url
 */

SendBirdGroupChannelChannel.prototype['cover_url'] = undefined;
/**
 * @member {String} data
 */

SendBirdGroupChannelChannel.prototype['data'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdGroupChannelChannel.prototype['created_at'] = undefined;
/**
 * @member {String} custom_type
 */

SendBirdGroupChannelChannel.prototype['custom_type'] = undefined;
/**
 * @member {Number} max_length_message
 */

SendBirdGroupChannelChannel.prototype['max_length_message'] = undefined;
/**
 * @member {Number} member_count
 */

SendBirdGroupChannelChannel.prototype['member_count'] = undefined;
var _default = SendBirdGroupChannelChannel;
exports["default"] = _default;