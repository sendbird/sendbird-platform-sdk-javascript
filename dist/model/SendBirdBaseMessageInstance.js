"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SBObject = _interopRequireDefault(require("./SBObject"));

var _SendBirdAppleCriticalAlertOptions = _interopRequireDefault(require("./SendBirdAppleCriticalAlertOptions"));

var _SendBirdMessageMetaArray = _interopRequireDefault(require("./SendBirdMessageMetaArray"));

var _SendBirdMessageResponse = _interopRequireDefault(require("./SendBirdMessageResponse"));

var _SendBirdOGMetaData = _interopRequireDefault(require("./SendBirdOGMetaData"));

var _SendBirdReaction = _interopRequireDefault(require("./SendBirdReaction"));

var _SendBirdThreadInfo = _interopRequireDefault(require("./SendBirdThreadInfo"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdBaseMessageInstance model module.
 * @module model/SendBirdBaseMessageInstance
 * @version 0.0.13
 */
var SendBirdBaseMessageInstance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdBaseMessageInstance</code>.
   * Message
   * @alias module:model/SendBirdBaseMessageInstance
   */
  function SendBirdBaseMessageInstance() {
    _classCallCheck(this, SendBirdBaseMessageInstance);

    SendBirdBaseMessageInstance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdBaseMessageInstance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdBaseMessageInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdBaseMessageInstance} obj Optional instance to populate.
     * @return {module:model/SendBirdBaseMessageInstance} The populated <code>SendBirdBaseMessageInstance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdBaseMessageInstance();

        if (data.hasOwnProperty('apple_critical_alert_options')) {
          obj['apple_critical_alert_options'] = _SendBirdAppleCriticalAlertOptions["default"].constructFromObject(data['apple_critical_alert_options']);
        }

        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
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

        if (data.hasOwnProperty('mentioned_users')) {
          obj['mentioned_users'] = _ApiClient["default"].convertToType(data['mentioned_users'], [_SendBirdUser["default"]]);
        }

        if (data.hasOwnProperty('message_id')) {
          obj['message_id'] = _ApiClient["default"].convertToType(data['message_id'], 'Number');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _ApiClient["default"].convertToType(data['message_type'], 'String');
        }

        if (data.hasOwnProperty('meta_array')) {
          obj['meta_array'] = _SBObject["default"].constructFromObject(data['meta_array']);
        }

        if (data.hasOwnProperty('meta_arrays')) {
          obj['meta_arrays'] = _ApiClient["default"].convertToType(data['meta_arrays'], [_SendBirdMessageMetaArray["default"]]);
        }

        if (data.hasOwnProperty('og_meta_data')) {
          obj['og_meta_data'] = _SendBirdOGMetaData["default"].constructFromObject(data['og_meta_data']);
        }

        if (data.hasOwnProperty('parent_message')) {
          obj['parent_message'] = _SendBirdMessageResponse["default"].constructFromObject(data['parent_message']);
        }

        if (data.hasOwnProperty('parent_message_id')) {
          obj['parent_message_id'] = _ApiClient["default"].convertToType(data['parent_message_id'], 'Number');
        }

        if (data.hasOwnProperty('parent_message_text')) {
          obj['parent_message_text'] = _ApiClient["default"].convertToType(data['parent_message_text'], 'String');
        }

        if (data.hasOwnProperty('reactions')) {
          obj['reactions'] = _ApiClient["default"].convertToType(data['reactions'], [_SendBirdReaction["default"]]);
        }

        if (data.hasOwnProperty('sending_status')) {
          obj['sending_status'] = _ApiClient["default"].convertToType(data['sending_status'], 'String');
        }

        if (data.hasOwnProperty('silent')) {
          obj['silent'] = _ApiClient["default"].convertToType(data['silent'], 'Boolean');
        }

        if (data.hasOwnProperty('thread_info')) {
          obj['thread_info'] = _SendBirdThreadInfo["default"].constructFromObject(data['thread_info']);
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdBaseMessageInstance;
}();
/**
 * @member {module:model/SendBirdAppleCriticalAlertOptions} apple_critical_alert_options
 */


SendBirdBaseMessageInstance.prototype['apple_critical_alert_options'] = undefined;
/**
 * @member {String} channel_type
 */

SendBirdBaseMessageInstance.prototype['channel_type'] = undefined;
/**
 * @member {String} channel_url
 */

SendBirdBaseMessageInstance.prototype['channel_url'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdBaseMessageInstance.prototype['created_at'] = undefined;
/**
 * @member {String} custom_type
 */

SendBirdBaseMessageInstance.prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */

SendBirdBaseMessageInstance.prototype['data'] = undefined;
/**
 * @member {Boolean} is_reply_to_channel
 */

SendBirdBaseMessageInstance.prototype['is_reply_to_channel'] = undefined;
/**
 * @member {String} mention_type
 */

SendBirdBaseMessageInstance.prototype['mention_type'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} mentioned_users
 */

SendBirdBaseMessageInstance.prototype['mentioned_users'] = undefined;
/**
 * @member {Number} message_id
 */

SendBirdBaseMessageInstance.prototype['message_id'] = undefined;
/**
 * @member {module:model/SendBirdBaseMessageInstance.MessageTypeEnum} message_type
 */

SendBirdBaseMessageInstance.prototype['message_type'] = undefined;
/**
 * @member {module:model/SBObject} meta_array
 */

SendBirdBaseMessageInstance.prototype['meta_array'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMessageMetaArray>} meta_arrays
 */

SendBirdBaseMessageInstance.prototype['meta_arrays'] = undefined;
/**
 * @member {module:model/SendBirdOGMetaData} og_meta_data
 */

SendBirdBaseMessageInstance.prototype['og_meta_data'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponse} parent_message
 */

SendBirdBaseMessageInstance.prototype['parent_message'] = undefined;
/**
 * @member {Number} parent_message_id
 */

SendBirdBaseMessageInstance.prototype['parent_message_id'] = undefined;
/**
 * @member {String} parent_message_text
 */

SendBirdBaseMessageInstance.prototype['parent_message_text'] = undefined;
/**
 * @member {Array.<module:model/SendBirdReaction>} reactions
 */

SendBirdBaseMessageInstance.prototype['reactions'] = undefined;
/**
 * @member {module:model/SendBirdBaseMessageInstance.SendingStatusEnum} sending_status
 */

SendBirdBaseMessageInstance.prototype['sending_status'] = undefined;
/**
 * @member {Boolean} silent
 */

SendBirdBaseMessageInstance.prototype['silent'] = undefined;
/**
 * @member {module:model/SendBirdThreadInfo} thread_info
 */

SendBirdBaseMessageInstance.prototype['thread_info'] = undefined;
/**
 * @member {Number} updated_at
 */

SendBirdBaseMessageInstance.prototype['updated_at'] = undefined;
/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdBaseMessageInstance['MessageTypeEnum'] = {
  /**
   * value: "admin"
   * @const
   */
  "admin": "admin",

  /**
   * value: "base"
   * @const
   */
  "base": "base",

  /**
   * value: "file"
   * @const
   */
  "file": "file",

  /**
   * value: "user"
   * @const
   */
  "user": "user"
};
/**
 * Allowed values for the <code>sending_status</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdBaseMessageInstance['SendingStatusEnum'] = {
  /**
   * value: "canceled"
   * @const
   */
  "canceled": "canceled",

  /**
   * value: "failed"
   * @const
   */
  "failed": "failed",

  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",

  /**
   * value: "succeeded"
   * @const
   */
  "succeeded": "succeeded"
};
var _default = SendBirdBaseMessageInstance;
exports["default"] = _default;