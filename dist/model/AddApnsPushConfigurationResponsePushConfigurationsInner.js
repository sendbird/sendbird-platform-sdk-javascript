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
 * The AddApnsPushConfigurationResponsePushConfigurationsInner model module.
 * @module model/AddApnsPushConfigurationResponsePushConfigurationsInner
 * @version 0.0.14
 */var AddApnsPushConfigurationResponsePushConfigurationsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddApnsPushConfigurationResponsePushConfigurationsInner</code>.
   * @alias module:model/AddApnsPushConfigurationResponsePushConfigurationsInner
   */
  function AddApnsPushConfigurationResponsePushConfigurationsInner() {
    _classCallCheck(this, AddApnsPushConfigurationResponsePushConfigurationsInner);
    AddApnsPushConfigurationResponsePushConfigurationsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddApnsPushConfigurationResponsePushConfigurationsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AddApnsPushConfigurationResponsePushConfigurationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddApnsPushConfigurationResponsePushConfigurationsInner} obj Optional instance to populate.
     * @return {module:model/AddApnsPushConfigurationResponsePushConfigurationsInner} The populated <code>AddApnsPushConfigurationResponsePushConfigurationsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddApnsPushConfigurationResponsePushConfigurationsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('push_type')) {
          obj['push_type'] = _ApiClient["default"].convertToType(data['push_type'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
        if (data.hasOwnProperty('apns_cer_env_type')) {
          obj['apns_cer_env_type'] = _ApiClient["default"].convertToType(data['apns_cer_env_type'], 'String');
        }
        if (data.hasOwnProperty('apns_expiration')) {
          obj['apns_expiration'] = _ApiClient["default"].convertToType(data['apns_expiration'], 'Number');
        }
        if (data.hasOwnProperty('apns_name')) {
          obj['apns_name'] = _ApiClient["default"].convertToType(data['apns_name'], 'String');
        }
        if (data.hasOwnProperty('has_unread_count_badge')) {
          obj['has_unread_count_badge'] = _ApiClient["default"].convertToType(data['has_unread_count_badge'], 'Number');
        }
        if (data.hasOwnProperty('content_available')) {
          obj['content_available'] = _ApiClient["default"].convertToType(data['content_available'], 'Boolean');
        }
        if (data.hasOwnProperty('mutable_content')) {
          obj['mutable_content'] = _ApiClient["default"].convertToType(data['mutable_content'], 'Boolean');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddApnsPushConfigurationResponsePushConfigurationsInner;
}(); /**
      * @member {String} id
      */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['push_type'] = undefined;

/**
 * @member {Number} created_at
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['created_at'] = undefined;

/**
 * @member {String} apns_cer_env_type
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['apns_cer_env_type'] = undefined;

/**
 * @member {Number} apns_expiration
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['apns_expiration'] = undefined;

/**
 * @member {String} apns_name
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['apns_name'] = undefined;

/**
 * @member {Number} has_unread_count_badge
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['has_unread_count_badge'] = undefined;

/**
 * @member {Boolean} content_available
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['content_available'] = undefined;

/**
 * @member {Boolean} mutable_content
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['mutable_content'] = undefined;

/**
 * @member {String} push_sound
 */
AddApnsPushConfigurationResponsePushConfigurationsInner.prototype['push_sound'] = undefined;
var _default = AddApnsPushConfigurationResponsePushConfigurationsInner;
exports["default"] = _default;