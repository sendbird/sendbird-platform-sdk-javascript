"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdMessageResponseMentionedUsersInner = _interopRequireDefault(require("./SendBirdMessageResponseMentionedUsersInner"));
var _SendBirdMessageResponseUser = _interopRequireDefault(require("./SendBirdMessageResponseUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SendBirdMessageResponse model module.
 * @module model/SendBirdMessageResponse
 * @version 0.0.14
 */var SendBirdMessageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdMessageResponse</code>.
   * @alias module:model/SendBirdMessageResponse
   */
  function SendBirdMessageResponse() {
    _classCallCheck(this, SendBirdMessageResponse);
    SendBirdMessageResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdMessageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMessageResponse} obj Optional instance to populate.
     * @return {module:model/SendBirdMessageResponse} The populated <code>SendBirdMessageResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdMessageResponse();
        if (data.hasOwnProperty('require_auth')) {
          obj['require_auth'] = _ApiClient["default"].convertToType(data['require_auth'], 'Boolean');
        }
        if (data.hasOwnProperty('message_survival_seconds')) {
          obj['message_survival_seconds'] = _ApiClient["default"].convertToType(data['message_survival_seconds'], 'Number');
        }
        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
        if (data.hasOwnProperty('mentioned_users')) {
          obj['mentioned_users'] = _ApiClient["default"].convertToType(data['mentioned_users'], [_SendBirdMessageResponseMentionedUsersInner["default"]]);
        }
        if (data.hasOwnProperty('translations')) {
          obj['translations'] = _ApiClient["default"].convertToType(data['translations'], Object);
        }
        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }
        if (data.hasOwnProperty('is_op_msg')) {
          obj['is_op_msg'] = _ApiClient["default"].convertToType(data['is_op_msg'], 'Boolean');
        }
        if (data.hasOwnProperty('is_removed')) {
          obj['is_removed'] = _ApiClient["default"].convertToType(data['is_removed'], 'Boolean');
        }
        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdMessageResponseUser["default"].constructFromObject(data['user']);
        }
        if (data.hasOwnProperty('file')) {
          obj['file'] = _ApiClient["default"].convertToType(data['file'], Object);
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
        if (data.hasOwnProperty('message_retention_hour')) {
          obj['message_retention_hour'] = _ApiClient["default"].convertToType(data['message_retention_hour'], 'Number');
        }
        if (data.hasOwnProperty('silent')) {
          obj['silent'] = _ApiClient["default"].convertToType(data['silent'], 'Boolean');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
        if (data.hasOwnProperty('channel_type')) {
          obj['channel_type'] = _ApiClient["default"].convertToType(data['channel_type'], 'String');
        }
        if (data.hasOwnProperty('req_id')) {
          obj['req_id'] = _ApiClient["default"].convertToType(data['req_id'], 'String');
        }
        if (data.hasOwnProperty('mention_type')) {
          obj['mention_type'] = _ApiClient["default"].convertToType(data['mention_type'], 'String');
        }
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('message_id')) {
          obj['message_id'] = _ApiClient["default"].convertToType(data['message_id'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], [Object]);
        }
        if (data.hasOwnProperty('thread_info')) {
          obj['thread_info'] = _ApiClient["default"].convertToType(data['thread_info'], Object);
        }
        if (data.hasOwnProperty('parent_message_id')) {
          obj['parent_message_id'] = _ApiClient["default"].convertToType(data['parent_message_id'], 'Number');
        }
        if (data.hasOwnProperty('parent_message_info')) {
          obj['parent_message_info'] = _ApiClient["default"].convertToType(data['parent_message_info'], Object);
        }
        if (data.hasOwnProperty('is_reply_to_channel')) {
          obj['is_reply_to_channel'] = _ApiClient["default"].convertToType(data['is_reply_to_channel'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return SendBirdMessageResponse;
}(); /**
      * @member {Boolean} require_auth
      */
SendBirdMessageResponse.prototype['require_auth'] = undefined;

/**
 * @member {Number} message_survival_seconds
 */
SendBirdMessageResponse.prototype['message_survival_seconds'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdMessageResponse.prototype['custom_type'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMessageResponseMentionedUsersInner>} mentioned_users
 */
SendBirdMessageResponse.prototype['mentioned_users'] = undefined;

/**
 * @member {Object} translations
 */
SendBirdMessageResponse.prototype['translations'] = undefined;

/**
 * @member {Number} updated_at
 */
SendBirdMessageResponse.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} is_op_msg
 */
SendBirdMessageResponse.prototype['is_op_msg'] = undefined;

/**
 * @member {Boolean} is_removed
 */
SendBirdMessageResponse.prototype['is_removed'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponseUser} user
 */
SendBirdMessageResponse.prototype['user'] = undefined;

/**
 * @member {Object} file
 */
SendBirdMessageResponse.prototype['file'] = undefined;

/**
 * @member {String} message
 */
SendBirdMessageResponse.prototype['message'] = undefined;

/**
 * @member {String} data
 */
SendBirdMessageResponse.prototype['data'] = undefined;

/**
 * @member {Number} message_retention_hour
 */
SendBirdMessageResponse.prototype['message_retention_hour'] = undefined;

/**
 * @member {Boolean} silent
 */
SendBirdMessageResponse.prototype['silent'] = undefined;

/**
 * @member {String} type
 */
SendBirdMessageResponse.prototype['type'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdMessageResponse.prototype['created_at'] = undefined;

/**
 * @member {String} channel_type
 */
SendBirdMessageResponse.prototype['channel_type'] = undefined;

/**
 * @member {String} req_id
 */
SendBirdMessageResponse.prototype['req_id'] = undefined;

/**
 * @member {String} mention_type
 */
SendBirdMessageResponse.prototype['mention_type'] = undefined;

/**
 * @member {String} channel_url
 */
SendBirdMessageResponse.prototype['channel_url'] = undefined;

/**
 * @member {Number} message_id
 */
SendBirdMessageResponse.prototype['message_id'] = undefined;

/**
 * @member {Number} size
 */
SendBirdMessageResponse.prototype['size'] = undefined;

/**
 * @member {Array.<Object>} sorted_metaarray
 */
SendBirdMessageResponse.prototype['sorted_metaarray'] = undefined;

/**
 * @member {Object} thread_info
 */
SendBirdMessageResponse.prototype['thread_info'] = undefined;

/**
 * @member {Number} parent_message_id
 */
SendBirdMessageResponse.prototype['parent_message_id'] = undefined;

/**
 * @member {Object} parent_message_info
 */
SendBirdMessageResponse.prototype['parent_message_info'] = undefined;

/**
 * @member {Boolean} is_reply_to_channel
 */
SendBirdMessageResponse.prototype['is_reply_to_channel'] = undefined;
var _default = SendBirdMessageResponse;
exports["default"] = _default;