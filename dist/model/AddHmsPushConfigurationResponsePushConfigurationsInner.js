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
 * The AddHmsPushConfigurationResponsePushConfigurationsInner model module.
 * @module model/AddHmsPushConfigurationResponsePushConfigurationsInner
 * @version 0.0.14
 */var AddHmsPushConfigurationResponsePushConfigurationsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddHmsPushConfigurationResponsePushConfigurationsInner</code>.
   * @alias module:model/AddHmsPushConfigurationResponsePushConfigurationsInner
   */
  function AddHmsPushConfigurationResponsePushConfigurationsInner() {
    _classCallCheck(this, AddHmsPushConfigurationResponsePushConfigurationsInner);
    AddHmsPushConfigurationResponsePushConfigurationsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddHmsPushConfigurationResponsePushConfigurationsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AddHmsPushConfigurationResponsePushConfigurationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddHmsPushConfigurationResponsePushConfigurationsInner} obj Optional instance to populate.
     * @return {module:model/AddHmsPushConfigurationResponsePushConfigurationsInner} The populated <code>AddHmsPushConfigurationResponsePushConfigurationsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddHmsPushConfigurationResponsePushConfigurationsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('push_type')) {
          obj['push_type'] = _ApiClient["default"].convertToType(data['push_type'], 'String');
        }
        if (data.hasOwnProperty('huawei_app_id')) {
          obj['huawei_app_id'] = _ApiClient["default"].convertToType(data['huawei_app_id'], 'String');
        }
        if (data.hasOwnProperty('huawei_app_secret')) {
          obj['huawei_app_secret'] = _ApiClient["default"].convertToType(data['huawei_app_secret'], 'String');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddHmsPushConfigurationResponsePushConfigurationsInner;
}(); /**
      * @member {String} id
      */
AddHmsPushConfigurationResponsePushConfigurationsInner.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
AddHmsPushConfigurationResponsePushConfigurationsInner.prototype['push_type'] = undefined;

/**
 * @member {String} huawei_app_id
 */
AddHmsPushConfigurationResponsePushConfigurationsInner.prototype['huawei_app_id'] = undefined;

/**
 * @member {String} huawei_app_secret
 */
AddHmsPushConfigurationResponsePushConfigurationsInner.prototype['huawei_app_secret'] = undefined;

/**
 * @member {String} push_sound
 */
AddHmsPushConfigurationResponsePushConfigurationsInner.prototype['push_sound'] = undefined;
var _default = AddHmsPushConfigurationResponsePushConfigurationsInner;
exports["default"] = _default;