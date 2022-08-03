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
 * The AddFcmPushConfigurationResponsePushConfigurationsInner model module.
 * @module model/AddFcmPushConfigurationResponsePushConfigurationsInner
 * @version 1.0.7
 */
var AddFcmPushConfigurationResponsePushConfigurationsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddFcmPushConfigurationResponsePushConfigurationsInner</code>.
   * @alias module:model/AddFcmPushConfigurationResponsePushConfigurationsInner
   */
  function AddFcmPushConfigurationResponsePushConfigurationsInner() {
    _classCallCheck(this, AddFcmPushConfigurationResponsePushConfigurationsInner);

    AddFcmPushConfigurationResponsePushConfigurationsInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddFcmPushConfigurationResponsePushConfigurationsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddFcmPushConfigurationResponsePushConfigurationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFcmPushConfigurationResponsePushConfigurationsInner} obj Optional instance to populate.
     * @return {module:model/AddFcmPushConfigurationResponsePushConfigurationsInner} The populated <code>AddFcmPushConfigurationResponsePushConfigurationsInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddFcmPushConfigurationResponsePushConfigurationsInner();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('push_type')) {
          obj['push_type'] = _ApiClient["default"].convertToType(data['push_type'], 'String');
        }

        if (data.hasOwnProperty('api_key')) {
          obj['api_key'] = _ApiClient["default"].convertToType(data['api_key'], 'String');
        }

        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddFcmPushConfigurationResponsePushConfigurationsInner;
}();
/**
 * @member {String} id
 */


AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['id'] = undefined;
/**
 * @member {String} push_type
 */

AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['push_type'] = undefined;
/**
 * @member {String} api_key
 */

AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['api_key'] = undefined;
/**
 * @member {String} push_sound
 */

AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['push_sound'] = undefined;
var _default = AddFcmPushConfigurationResponsePushConfigurationsInner;
exports["default"] = _default;