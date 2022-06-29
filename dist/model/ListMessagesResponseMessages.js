"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListMessagesResponseOgTag = _interopRequireDefault(require("./ListMessagesResponseOgTag"));

var _ListMessagesResponseSortedMetaarray = _interopRequireDefault(require("./ListMessagesResponseSortedMetaarray"));

var _SendBirdMessageResponseMentionedUsers = _interopRequireDefault(require("./SendBirdMessageResponseMentionedUsers"));

var _SendBirdMessageResponseUser = _interopRequireDefault(require("./SendBirdMessageResponseUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListMessagesResponseMessages model module.
 * @module model/ListMessagesResponseMessages
 * @version 1.0.3
 */
var ListMessagesResponseMessages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseMessages</code>.
   * @alias module:model/ListMessagesResponseMessages
   */
  function ListMessagesResponseMessages() {
    _classCallCheck(this, ListMessagesResponseMessages);

    ListMessagesResponseMessages.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListMessagesResponseMessages, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListMessagesResponseMessages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessages} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessages} The populated <code>ListMessagesResponseMessages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseMessages();

        if (data.hasOwnProperty('message_survival_seconds')) {
          obj['message_survival_seconds'] = _ApiClient["default"].convertToType(data['message_survival_seconds'], 'Number');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('mentioned_users')) {
          obj['mentioned_users'] = _ApiClient["default"].convertToType(data['mentioned_users'], [_SendBirdMessageResponseMentionedUsers["default"]]);
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

        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], [_ListMessagesResponseSortedMetaarray["default"]]);
        }

        if (data.hasOwnProperty('og_tag')) {
          obj['og_tag'] = _ListMessagesResponseOgTag["default"].constructFromObject(data['og_tag']);
        }
      }

      return obj;
    }
  }]);

  return ListMessagesResponseMessages;
}();
/**
 * @member {Number} message_survival_seconds
 */


ListMessagesResponseMessages.prototype['message_survival_seconds'] = undefined;
/**
 * @member {String} custom_type
 */

ListMessagesResponseMessages.prototype['custom_type'] = undefined;
/**
 * @member {Array.<module:model/SendBirdMessageResponseMentionedUsers>} mentioned_users
 */

ListMessagesResponseMessages.prototype['mentioned_users'] = undefined;
/**
 * @member {Object} translations
 */

ListMessagesResponseMessages.prototype['translations'] = undefined;
/**
 * @member {Number} updated_at
 */

ListMessagesResponseMessages.prototype['updated_at'] = undefined;
/**
 * @member {Boolean} is_op_msg
 */

ListMessagesResponseMessages.prototype['is_op_msg'] = undefined;
/**
 * @member {Boolean} is_removed
 */

ListMessagesResponseMessages.prototype['is_removed'] = undefined;
/**
 * @member {module:model/SendBirdMessageResponseUser} user
 */

ListMessagesResponseMessages.prototype['user'] = undefined;
/**
 * @member {Object} file
 */

ListMessagesResponseMessages.prototype['file'] = undefined;
/**
 * @member {String} message
 */

ListMessagesResponseMessages.prototype['message'] = undefined;
/**
 * @member {String} data
 */

ListMessagesResponseMessages.prototype['data'] = undefined;
/**
 * @member {Number} message_retention_hour
 */

ListMessagesResponseMessages.prototype['message_retention_hour'] = undefined;
/**
 * @member {Boolean} silent
 */

ListMessagesResponseMessages.prototype['silent'] = undefined;
/**
 * @member {String} type
 */

ListMessagesResponseMessages.prototype['type'] = undefined;
/**
 * @member {Number} created_at
 */

ListMessagesResponseMessages.prototype['created_at'] = undefined;
/**
 * @member {String} channel_type
 */

ListMessagesResponseMessages.prototype['channel_type'] = undefined;
/**
 * @member {String} req_id
 */

ListMessagesResponseMessages.prototype['req_id'] = undefined;
/**
 * @member {String} mention_type
 */

ListMessagesResponseMessages.prototype['mention_type'] = undefined;
/**
 * @member {String} channel_url
 */

ListMessagesResponseMessages.prototype['channel_url'] = undefined;
/**
 * @member {Number} message_id
 */

ListMessagesResponseMessages.prototype['message_id'] = undefined;
/**
 * @member {Array.<module:model/ListMessagesResponseSortedMetaarray>} sorted_metaarray
 */

ListMessagesResponseMessages.prototype['sorted_metaarray'] = undefined;
/**
 * @member {module:model/ListMessagesResponseOgTag} og_tag
 */

ListMessagesResponseMessages.prototype['og_tag'] = undefined;
var _default = ListMessagesResponseMessages;
exports["default"] = _default;