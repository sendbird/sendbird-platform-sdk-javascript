"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListPushConfigurationsResponsePushConfigurations = _interopRequireDefault(require("./ListPushConfigurationsResponsePushConfigurations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ViewPushConfigurationByIdResponse model module.
 * @module model/ViewPushConfigurationByIdResponse
 * @version 1.0.3
 */
var ViewPushConfigurationByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewPushConfigurationByIdResponse</code>.
   * @alias module:model/ViewPushConfigurationByIdResponse
   */
  function ViewPushConfigurationByIdResponse() {
    _classCallCheck(this, ViewPushConfigurationByIdResponse);

    ViewPushConfigurationByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewPushConfigurationByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewPushConfigurationByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewPushConfigurationByIdResponse} obj Optional instance to populate.
     * @return {module:model/ViewPushConfigurationByIdResponse} The populated <code>ViewPushConfigurationByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewPushConfigurationByIdResponse();

        if (data.hasOwnProperty('push_configurations')) {
          obj['push_configurations'] = _ApiClient["default"].convertToType(data['push_configurations'], [_ListPushConfigurationsResponsePushConfigurations["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ViewPushConfigurationByIdResponse;
}();
/**
 * @member {Array.<module:model/ListPushConfigurationsResponsePushConfigurations>} push_configurations
 */


ViewPushConfigurationByIdResponse.prototype['push_configurations'] = undefined;
var _default = ViewPushConfigurationByIdResponse;
exports["default"] = _default;