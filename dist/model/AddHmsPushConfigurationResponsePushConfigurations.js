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
 * The AddHmsPushConfigurationResponsePushConfigurations model module.
 * @module model/AddHmsPushConfigurationResponsePushConfigurations
 * @version 1.0.3
 */
var AddHmsPushConfigurationResponsePushConfigurations = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddHmsPushConfigurationResponsePushConfigurations</code>.
   * @alias module:model/AddHmsPushConfigurationResponsePushConfigurations
   */
  function AddHmsPushConfigurationResponsePushConfigurations() {
    _classCallCheck(this, AddHmsPushConfigurationResponsePushConfigurations);

    AddHmsPushConfigurationResponsePushConfigurations.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddHmsPushConfigurationResponsePushConfigurations, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddHmsPushConfigurationResponsePushConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddHmsPushConfigurationResponsePushConfigurations} obj Optional instance to populate.
     * @return {module:model/AddHmsPushConfigurationResponsePushConfigurations} The populated <code>AddHmsPushConfigurationResponsePushConfigurations</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddHmsPushConfigurationResponsePushConfigurations();

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

  return AddHmsPushConfigurationResponsePushConfigurations;
}();
/**
 * @member {String} id
 */


AddHmsPushConfigurationResponsePushConfigurations.prototype['id'] = undefined;
/**
 * @member {String} push_type
 */

AddHmsPushConfigurationResponsePushConfigurations.prototype['push_type'] = undefined;
/**
 * @member {String} huawei_app_id
 */

AddHmsPushConfigurationResponsePushConfigurations.prototype['huawei_app_id'] = undefined;
/**
 * @member {String} huawei_app_secret
 */

AddHmsPushConfigurationResponsePushConfigurations.prototype['huawei_app_secret'] = undefined;
/**
 * @member {String} push_sound
 */

AddHmsPushConfigurationResponsePushConfigurations.prototype['push_sound'] = undefined;
var _default = AddHmsPushConfigurationResponsePushConfigurations;
exports["default"] = _default;