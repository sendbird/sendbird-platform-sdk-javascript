"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListMessagesResponseMessagesInnerOgTag = _interopRequireDefault(require("./ListMessagesResponseMessagesInnerOgTag"));
var _ListMessagesResponseMessagesInnerSortedMetaarrayInner = _interopRequireDefault(require("./ListMessagesResponseMessagesInnerSortedMetaarrayInner"));
var _SendBirdMessageResponseMentionedUsersInner = _interopRequireDefault(require("./SendBirdMessageResponseMentionedUsersInner"));
var _SendBirdMessageResponseUser = _interopRequireDefault(require("./SendBirdMessageResponseUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMessagesResponseMessagesInner model module.
 * @module model/ListMessagesResponseMessagesInner
 * @version 0.0.14
 */var ListMessagesResponseMessagesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseMessagesInner</code>.
   * @alias module:model/ListMessagesResponseMessagesInner
   */
  function ListMessagesResponseMessagesInner() {
    _classCallCheck(this, ListMessagesResponseMessagesInner);
    ListMessagesResponseMessagesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListMessagesResponseMessagesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListMessagesResponseMessagesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessagesInner} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessagesInner} The populated <code>ListMessagesResponseMessagesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseMessagesInner();
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
        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], [_ListMessagesResponseMessagesInnerSortedMetaarrayInner["default"]]);
        }
        if (data.hasOwnProperty('og_tag')) {
          obj['og_tag'] = _ListMessagesResponseMessagesInnerOgTag["default"].constructFromObject(data['og_tag']);
        }
      }
      return obj;
    }
  }]);
  return ListMessagesResponseMessagesInner;
}(); /**
      * @member {Number} message_survival_seconds
      */
ListMessagesResponseMessagesInner.prototype['message_survival_seconds'] = undefined;

/**
 * @member {String} custom_type
 */
ListMessagesResponseMessagesInner.prototype['custom_type'] = undefined;

/**
 * @member {Array.<module:model/SendBirdMessageResponseMentionedUsersInner>} mentioned_users
 */
ListMessagesResponseMessagesInner.prototype['mentioned_users'] = undefined;

/**
 * @member {Object} translations
 */
ListMessagesResponseMessagesInner.prototype['translations'] = undefined;

/**
 * @member {Number} updated_at
 */
ListMessagesResponseMessagesInner.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} is_op_msg
 */
ListMessagesResponseMessagesInner.prototype['is_op_msg'] = undefined;

/**
 * @member {Boolean} is_removed
 */
ListMessagesResponseMessagesInner.prototype['is_removed'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponseUser} user
 */
ListMessagesResponseMessagesInner.prototype['user'] = undefined;

/**
 * @member {Object} file
 */
ListMessagesResponseMessagesInner.prototype['file'] = undefined;

/**
 * @member {String} message
 */
ListMessagesResponseMessagesInner.prototype['message'] = undefined;

/**
 * @member {String} data
 */
ListMessagesResponseMessagesInner.prototype['data'] = undefined;

/**
 * @member {Number} message_retention_hour
 */
ListMessagesResponseMessagesInner.prototype['message_retention_hour'] = undefined;

/**
 * @member {Boolean} silent
 */
ListMessagesResponseMessagesInner.prototype['silent'] = undefined;

/**
 * @member {String} type
 */
ListMessagesResponseMessagesInner.prototype['type'] = undefined;

/**
 * @member {Number} created_at
 */
ListMessagesResponseMessagesInner.prototype['created_at'] = undefined;

/**
 * @member {String} channel_type
 */
ListMessagesResponseMessagesInner.prototype['channel_type'] = undefined;

/**
 * @member {String} req_id
 */
ListMessagesResponseMessagesInner.prototype['req_id'] = undefined;

/**
 * @member {String} mention_type
 */
ListMessagesResponseMessagesInner.prototype['mention_type'] = undefined;

/**
 * @member {String} channel_url
 */
ListMessagesResponseMessagesInner.prototype['channel_url'] = undefined;

/**
 * @member {Number} message_id
 */
ListMessagesResponseMessagesInner.prototype['message_id'] = undefined;

/**
 * @member {Array.<module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner>} sorted_metaarray
 */
ListMessagesResponseMessagesInner.prototype['sorted_metaarray'] = undefined;

/**
 * @member {module:model/ListMessagesResponseMessagesInnerOgTag} og_tag
 */
ListMessagesResponseMessagesInner.prototype['og_tag'] = undefined;
var _default = ListMessagesResponseMessagesInner;
exports["default"] = _default;