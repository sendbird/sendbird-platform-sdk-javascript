"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddApnsPushConfigurationResponsePushConfigurationsInner = _interopRequireDefault(require("./AddApnsPushConfigurationResponsePushConfigurationsInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddApnsPushConfigurationResponse model module.
 * @module model/AddApnsPushConfigurationResponse
 * @version 0.0.13
 */
var AddApnsPushConfigurationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddApnsPushConfigurationResponse</code>.
   * @alias module:model/AddApnsPushConfigurationResponse
   */
  function AddApnsPushConfigurationResponse() {
    _classCallCheck(this, AddApnsPushConfigurationResponse);

    AddApnsPushConfigurationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddApnsPushConfigurationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddApnsPushConfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddApnsPushConfigurationResponse} obj Optional instance to populate.
     * @return {module:model/AddApnsPushConfigurationResponse} The populated <code>AddApnsPushConfigurationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddApnsPushConfigurationResponse();

        if (data.hasOwnProperty('push_configurations')) {
          obj['push_configurations'] = _ApiClient["default"].convertToType(data['push_configurations'], [_AddApnsPushConfigurationResponsePushConfigurationsInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AddApnsPushConfigurationResponse;
}();
/**
 * @member {Array.<module:model/AddApnsPushConfigurationResponsePushConfigurationsInner>} push_configurations
 */


AddApnsPushConfigurationResponse.prototype['push_configurations'] = undefined;
var _default = AddApnsPushConfigurationResponse;
exports["default"] = _default;