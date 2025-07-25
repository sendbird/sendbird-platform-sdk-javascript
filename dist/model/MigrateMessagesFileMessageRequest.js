"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _MigrateMessagesFileMessageRequestThumbnailsInner = _interopRequireDefault(require("./MigrateMessagesFileMessageRequestThumbnailsInner"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The MigrateMessagesFileMessageRequest model module.
 * @module model/MigrateMessagesFileMessageRequest
 * @version 2.0.0
 */
var MigrateMessagesFileMessageRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MigrateMessagesFileMessageRequest</code>.
   * @alias module:model/MigrateMessagesFileMessageRequest
   * @param userId {String} 
   * @param messageType {module:model/MigrateMessagesFileMessageRequest.MessageTypeEnum} 
   * @param url {String} 
   * @param timestamp {Number} 
   */
  function MigrateMessagesFileMessageRequest(userId, messageType, url, timestamp) {
    _classCallCheck(this, MigrateMessagesFileMessageRequest);
    MigrateMessagesFileMessageRequest.initialize(this, userId, messageType, url, timestamp);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(MigrateMessagesFileMessageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, userId, messageType, url, timestamp) {
      obj['user_id'] = userId;
      obj['message_type'] = messageType;
      obj['url'] = url;
      obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>MigrateMessagesFileMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrateMessagesFileMessageRequest} obj Optional instance to populate.
     * @return {module:model/MigrateMessagesFileMessageRequest} The populated <code>MigrateMessagesFileMessageRequest</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MigrateMessagesFileMessageRequest();
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _ApiClient["default"].convertToType(data['message_type'], 'String');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }
        if (data.hasOwnProperty('file_size')) {
          obj['file_size'] = _ApiClient["default"].convertToType(data['file_size'], 'Number');
        }
        if (data.hasOwnProperty('file_type')) {
          obj['file_type'] = _ApiClient["default"].convertToType(data['file_type'], 'String');
        }
        if (data.hasOwnProperty('thumbnails')) {
          obj['thumbnails'] = _ApiClient["default"].convertToType(data['thumbnails'], [_MigrateMessagesFileMessageRequestThumbnailsInner["default"]]);
        }
        if (data.hasOwnProperty('require_auth')) {
          obj['require_auth'] = _ApiClient["default"].convertToType(data['require_auth'], 'Boolean');
        }
        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
        if (data.hasOwnProperty('custom_field')) {
          obj['custom_field'] = _ApiClient["default"].convertToType(data['custom_field'], 'String');
        }
        if (data.hasOwnProperty('mentioned_user_ids')) {
          obj['mentioned_user_ids'] = _ApiClient["default"].convertToType(data['mentioned_user_ids'], ['String']);
        }
        if (data.hasOwnProperty('dedup_id')) {
          obj['dedup_id'] = _ApiClient["default"].convertToType(data['dedup_id'], 'String');
        }
        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], [Object]);
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} user_id
 */
MigrateMessagesFileMessageRequest.prototype['user_id'] = undefined;

/**
 * @member {module:model/MigrateMessagesFileMessageRequest.MessageTypeEnum} message_type
 */
MigrateMessagesFileMessageRequest.prototype['message_type'] = undefined;

/**
 * @member {String} url
 */
MigrateMessagesFileMessageRequest.prototype['url'] = undefined;

/**
 * @member {Number} timestamp
 */
MigrateMessagesFileMessageRequest.prototype['timestamp'] = undefined;

/**
 * @member {String} file_name
 */
MigrateMessagesFileMessageRequest.prototype['file_name'] = undefined;

/**
 * @member {Number} file_size
 */
MigrateMessagesFileMessageRequest.prototype['file_size'] = undefined;

/**
 * @member {String} file_type
 */
MigrateMessagesFileMessageRequest.prototype['file_type'] = undefined;

/**
 * @member {Array.<module:model/MigrateMessagesFileMessageRequestThumbnailsInner>} thumbnails
 */
MigrateMessagesFileMessageRequest.prototype['thumbnails'] = undefined;

/**
 * @member {Boolean} require_auth
 */
MigrateMessagesFileMessageRequest.prototype['require_auth'] = undefined;

/**
 * @member {String} custom_type
 */
MigrateMessagesFileMessageRequest.prototype['custom_type'] = undefined;

/**
 * @member {String} custom_field
 */
MigrateMessagesFileMessageRequest.prototype['custom_field'] = undefined;

/**
 * @member {Array.<String>} mentioned_user_ids
 */
MigrateMessagesFileMessageRequest.prototype['mentioned_user_ids'] = undefined;

/**
 * @member {String} dedup_id
 */
MigrateMessagesFileMessageRequest.prototype['dedup_id'] = undefined;

/**
 * @member {Array.<Object>} sorted_metaarray
 */
MigrateMessagesFileMessageRequest.prototype['sorted_metaarray'] = undefined;

/**
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */
MigrateMessagesFileMessageRequest['MessageTypeEnum'] = {
  /**
   * value: "FILE"
   * @const
   */
  "FILE": "FILE"
};
var _default = exports["default"] = MigrateMessagesFileMessageRequest;