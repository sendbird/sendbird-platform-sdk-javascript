"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdAppleCriticalAlertOptions = _interopRequireDefault(require("./SendBirdAppleCriticalAlertOptions"));
var _SendBirdMessageMetaArray = _interopRequireDefault(require("./SendBirdMessageMetaArray"));
var _SendBirdThumbnailSize = _interopRequireDefault(require("./SendBirdThumbnailSize"));
var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SendBirdFileMessageParams model module.
 * @module model/SendBirdFileMessageParams
 * @version 0.0.16
 */
var SendBirdFileMessageParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdFileMessageParams</code>.
   * @alias module:model/SendBirdFileMessageParams
   */
  function SendBirdFileMessageParams() {
    _classCallCheck(this, SendBirdFileMessageParams);
    SendBirdFileMessageParams.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdFileMessageParams, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdFileMessageParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdFileMessageParams} obj Optional instance to populate.
     * @return {module:model/SendBirdFileMessageParams} The populated <code>SendBirdFileMessageParams</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdFileMessageParams();
        if (data.hasOwnProperty('apple_critical_alert_options')) {
          obj['apple_critical_alert_options'] = _SendBirdAppleCriticalAlertOptions["default"].constructFromObject(data['apple_critical_alert_options']);
        }
        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
        if (data.hasOwnProperty('file')) {
          obj['file'] = 'Blob'.constructFromObject(data['file']);
        }
        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }
        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }
        if (data.hasOwnProperty('file_url')) {
          obj['file_url'] = _ApiClient["default"].convertToType(data['file_url'], 'String');
        }
        if (data.hasOwnProperty('is_reply_to_channel')) {
          obj['is_reply_to_channel'] = _ApiClient["default"].convertToType(data['is_reply_to_channel'], 'Boolean');
        }
        if (data.hasOwnProperty('mention_type')) {
          obj['mention_type'] = _ApiClient["default"].convertToType(data['mention_type'], 'String');
        }
        if (data.hasOwnProperty('mentioned_user_ids')) {
          obj['mentioned_user_ids'] = _ApiClient["default"].convertToType(data['mentioned_user_ids'], ['String']);
        }
        if (data.hasOwnProperty('mentioned_users')) {
          obj['mentioned_users'] = _ApiClient["default"].convertToType(data['mentioned_users'], [_SendBirdUser["default"]]);
        }
        if (data.hasOwnProperty('meta_array_keys')) {
          obj['meta_array_keys'] = _ApiClient["default"].convertToType(data['meta_array_keys'], ['String']);
        }
        if (data.hasOwnProperty('meta_arrays')) {
          obj['meta_arrays'] = _ApiClient["default"].convertToType(data['meta_arrays'], [_SendBirdMessageMetaArray["default"]]);
        }
        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }
        if (data.hasOwnProperty('parent_message_id')) {
          obj['parent_message_id'] = _ApiClient["default"].convertToType(data['parent_message_id'], 'Number');
        }
        if (data.hasOwnProperty('push_notification_delivery_option')) {
          obj['push_notification_delivery_option'] = _ApiClient["default"].convertToType(data['push_notification_delivery_option'], 'String');
        }
        if (data.hasOwnProperty('thumbnail_sizes')) {
          obj['thumbnail_sizes'] = _ApiClient["default"].convertToType(data['thumbnail_sizes'], [_SendBirdThumbnailSize["default"]]);
        }
      }
      return obj;
    }
  }]);
  return SendBirdFileMessageParams;
}();
/**
 * @member {module:model/SendBirdAppleCriticalAlertOptions} apple_critical_alert_options
 */
SendBirdFileMessageParams.prototype['apple_critical_alert_options'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdFileMessageParams.prototype['custom_type'] = undefined;

/**
 * @member {String} data
 */
SendBirdFileMessageParams.prototype['data'] = undefined;

/**
 * @member {Blob} file
 */
SendBirdFileMessageParams.prototype['file'] = undefined;

/**
 * @member {String} file_name
 */
SendBirdFileMessageParams.prototype['file_name'] = undefined;

/**
 * @member {Number} file_size
 */
SendBirdFileMessageParams.prototype['file_size'] = undefined;

/**
 * @member {String} file_url
 */
SendBirdFileMessageParams.prototype['file_url'] = undefined;

/**
 * @member {Boolean} is_reply_to_channel
 */
SendBirdFileMessageParams.prototype['is_reply_to_channel'] = undefined;

/**
 * @member {module:model/SendBirdFileMessageParams.MentionTypeEnum} mention_type
 */
SendBirdFileMessageParams.prototype['mention_type'] = undefined;

/**
 * @member {Array.<String>} mentioned_user_ids
 */
SendBirdFileMessageParams.prototype['mentioned_user_ids'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} mentioned_users
 */
SendBirdFileMessageParams.prototype['mentioned_users'] = undefined;

/**
 * @member {Array.<String>} meta_array_keys
 */
SendBirdFileMessageParams.prototype['meta_array_keys'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMessageMetaArray>} meta_arrays
 */
SendBirdFileMessageParams.prototype['meta_arrays'] = undefined;

/**
 * @member {String} mime_type
 */
SendBirdFileMessageParams.prototype['mime_type'] = undefined;

/**
 * @member {Number} parent_message_id
 */
SendBirdFileMessageParams.prototype['parent_message_id'] = undefined;

/**
 * @member {module:model/SendBirdFileMessageParams.PushNotificationDeliveryOptionEnum} push_notification_delivery_option
 */
SendBirdFileMessageParams.prototype['push_notification_delivery_option'] = undefined;

/**
 * @member {Array.<module:model/SendBirdThumbnailSize>} thumbnail_sizes
 */
SendBirdFileMessageParams.prototype['thumbnail_sizes'] = undefined;

/**
 * Allowed values for the <code>mention_type</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdFileMessageParams['MentionTypeEnum'] = {
  /**
   * value: "channel"
   * @const
   */
  "channel": "channel",
  /**
   * value: "users"
   * @const
   */
  "users": "users"
};

/**
 * Allowed values for the <code>push_notification_delivery_option</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdFileMessageParams['PushNotificationDeliveryOptionEnum'] = {
  /**
   * value: "default"
   * @const
   */
  "default": "default",
  /**
   * value: "suppress"
   * @const
   */
  "suppress": "suppress"
};
var _default = SendBirdFileMessageParams;
exports["default"] = _default;