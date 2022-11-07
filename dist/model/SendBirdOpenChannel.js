"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SendBirdOpenChannel model module.
 * @module model/SendBirdOpenChannel
 * @version 0.0.16
 */
var SendBirdOpenChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdOpenChannel</code>.
   * @alias module:model/SendBirdOpenChannel
   */
  function SendBirdOpenChannel() {
    _classCallCheck(this, SendBirdOpenChannel);
    SendBirdOpenChannel.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdOpenChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdOpenChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdOpenChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdOpenChannel} The populated <code>SendBirdOpenChannel</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdOpenChannel();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }
        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _SendBirdUser["default"].constructFromObject(data['creator']);
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
        if (data.hasOwnProperty('is_dynamic_partitioned')) {
          obj['is_dynamic_partitioned'] = _ApiClient["default"].convertToType(data['is_dynamic_partitioned'], 'Boolean');
        }
        if (data.hasOwnProperty('is_ephemeral')) {
          obj['is_ephemeral'] = _ApiClient["default"].convertToType(data['is_ephemeral'], 'Boolean');
        }
        if (data.hasOwnProperty('is_frozen')) {
          obj['is_frozen'] = _ApiClient["default"].convertToType(data['is_frozen'], 'Boolean');
        }
        if (data.hasOwnProperty('max_length_message')) {
          obj['max_length_message'] = _ApiClient["default"].convertToType(data['max_length_message'], 'Number');
        }
        if (data.hasOwnProperty('operators')) {
          obj['operators'] = _ApiClient["default"].convertToType(data['operators'], [_SendBirdUser["default"]]);
        }
        if (data.hasOwnProperty('participant_count')) {
          obj['participant_count'] = _ApiClient["default"].convertToType(data['participant_count'], 'Number');
        }
        if (data.hasOwnProperty('freeze')) {
          obj['freeze'] = _ApiClient["default"].convertToType(data['freeze'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return SendBirdOpenChannel;
}();
/**
 * @member {String} name
 */
SendBirdOpenChannel.prototype['name'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdOpenChannel.prototype['custom_type'] = undefined;

/**
 * @member {String} channel_url
 */
SendBirdOpenChannel.prototype['channel_url'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdOpenChannel.prototype['created_at'] = undefined;

/**
 * @member {String} cover_url
 */
SendBirdOpenChannel.prototype['cover_url'] = undefined;

/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdOpenChannel.prototype['creator'] = undefined;

/**
 * @member {String} data
 */
SendBirdOpenChannel.prototype['data'] = undefined;

/**
 * @member {Boolean} is_dynamic_partitioned
 */
SendBirdOpenChannel.prototype['is_dynamic_partitioned'] = undefined;

/**
 * @member {Boolean} is_ephemeral
 */
SendBirdOpenChannel.prototype['is_ephemeral'] = undefined;

/**
 * @member {Boolean} is_frozen
 */
SendBirdOpenChannel.prototype['is_frozen'] = undefined;

/**
 * @member {Number} max_length_message
 */
SendBirdOpenChannel.prototype['max_length_message'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */
SendBirdOpenChannel.prototype['operators'] = undefined;

/**
 * @member {Number} participant_count
 */
SendBirdOpenChannel.prototype['participant_count'] = undefined;

/**
 * @member {Boolean} freeze
 */
SendBirdOpenChannel.prototype['freeze'] = undefined;
var _default = SendBirdOpenChannel;
exports["default"] = _default;