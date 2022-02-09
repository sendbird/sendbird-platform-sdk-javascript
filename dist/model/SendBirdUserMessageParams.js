"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdAppleCriticalAlertOptions = _interopRequireDefault(require("./SendBirdAppleCriticalAlertOptions"));

var _SendBirdMessageMetaArray = _interopRequireDefault(require("./SendBirdMessageMetaArray"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdUserMessageParams model module.
 * @module model/SendBirdUserMessageParams
 * @version 1.0.0
 */
var SendBirdUserMessageParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdUserMessageParams</code>.
   * @alias module:model/SendBirdUserMessageParams
   */
  function SendBirdUserMessageParams() {
    _classCallCheck(this, SendBirdUserMessageParams);

    SendBirdUserMessageParams.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdUserMessageParams, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdUserMessageParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdUserMessageParams} obj Optional instance to populate.
     * @return {module:model/SendBirdUserMessageParams} The populated <code>SendBirdUserMessageParams</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdUserMessageParams();

        if (data.hasOwnProperty('apple_critical_alert_options')) {
          obj['apple_critical_alert_options'] = _SendBirdAppleCriticalAlertOptions["default"].constructFromObject(data['apple_critical_alert_options']);
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
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

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('meta_array_keys')) {
          obj['meta_array_keys'] = _ApiClient["default"].convertToType(data['meta_array_keys'], ['String']);
        }

        if (data.hasOwnProperty('meta_arrays')) {
          obj['meta_arrays'] = _ApiClient["default"].convertToType(data['meta_arrays'], [_SendBirdMessageMetaArray["default"]]);
        }

        if (data.hasOwnProperty('parent_message_id')) {
          obj['parent_message_id'] = _ApiClient["default"].convertToType(data['parent_message_id'], 'Number');
        }

        if (data.hasOwnProperty('poll_id')) {
          obj['poll_id'] = _ApiClient["default"].convertToType(data['poll_id'], 'Number');
        }

        if (data.hasOwnProperty('push_notification_delivery_option')) {
          obj['push_notification_delivery_option'] = _ApiClient["default"].convertToType(data['push_notification_delivery_option'], 'String');
        }

        if (data.hasOwnProperty('target_languages')) {
          obj['target_languages'] = _ApiClient["default"].convertToType(data['target_languages'], ['String']);
        }

        if (data.hasOwnProperty('translation_target_languages')) {
          obj['translation_target_languages'] = _ApiClient["default"].convertToType(data['translation_target_languages'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return SendBirdUserMessageParams;
}();
/**
 * @member {module:model/SendBirdAppleCriticalAlertOptions} apple_critical_alert_options
 */


SendBirdUserMessageParams.prototype['apple_critical_alert_options'] = undefined;
/**
 * @member {String} custom_type
 */

SendBirdUserMessageParams.prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */

SendBirdUserMessageParams.prototype['data'] = undefined;
/**
 * @member {Boolean} is_reply_to_channel
 */

SendBirdUserMessageParams.prototype['is_reply_to_channel'] = undefined;
/**
 * @member {module:model/SendBirdUserMessageParams.MentionTypeEnum} mention_type
 */

SendBirdUserMessageParams.prototype['mention_type'] = undefined;
/**
 * @member {Array.<String>} mentioned_user_ids
 */

SendBirdUserMessageParams.prototype['mentioned_user_ids'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} mentioned_users
 */

SendBirdUserMessageParams.prototype['mentioned_users'] = undefined;
/**
 * @member {String} message
 */

SendBirdUserMessageParams.prototype['message'] = undefined;
/**
 * @member {Array.<String>} meta_array_keys
 */

SendBirdUserMessageParams.prototype['meta_array_keys'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMessageMetaArray>} meta_arrays
 */

SendBirdUserMessageParams.prototype['meta_arrays'] = undefined;
/**
 * @member {Number} parent_message_id
 */

SendBirdUserMessageParams.prototype['parent_message_id'] = undefined;
/**
 * @member {Number} poll_id
 */

SendBirdUserMessageParams.prototype['poll_id'] = undefined;
/**
 * @member {module:model/SendBirdUserMessageParams.PushNotificationDeliveryOptionEnum} push_notification_delivery_option
 */

SendBirdUserMessageParams.prototype['push_notification_delivery_option'] = undefined;
/**
 * @member {Array.<String>} target_languages
 */

SendBirdUserMessageParams.prototype['target_languages'] = undefined;
/**
 * @member {Array.<String>} translation_target_languages
 */

SendBirdUserMessageParams.prototype['translation_target_languages'] = undefined;
/**
 * Allowed values for the <code>mention_type</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdUserMessageParams['MentionTypeEnum'] = {
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

SendBirdUserMessageParams['PushNotificationDeliveryOptionEnum'] = {
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
var _default = SendBirdUserMessageParams;
exports["default"] = _default;