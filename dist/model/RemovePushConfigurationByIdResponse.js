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
 * The RemovePushConfigurationByIdResponse model module.
 * @module model/RemovePushConfigurationByIdResponse
 * @version 0.0.16
 */
var RemovePushConfigurationByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemovePushConfigurationByIdResponse</code>.
   * @alias module:model/RemovePushConfigurationByIdResponse
   */
  function RemovePushConfigurationByIdResponse() {
    _classCallCheck(this, RemovePushConfigurationByIdResponse);
    RemovePushConfigurationByIdResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RemovePushConfigurationByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RemovePushConfigurationByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemovePushConfigurationByIdResponse} obj Optional instance to populate.
     * @return {module:model/RemovePushConfigurationByIdResponse} The populated <code>RemovePushConfigurationByIdResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemovePushConfigurationByIdResponse();
        if (data.hasOwnProperty('push_configurations')) {
          obj['push_configurations'] = _ApiClient["default"].convertToType(data['push_configurations'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return RemovePushConfigurationByIdResponse;
}();
/**
 * @member {Array.<String>} push_configurations
 */
RemovePushConfigurationByIdResponse.prototype['push_configurations'] = undefined;
var _default = RemovePushConfigurationByIdResponse;
exports["default"] = _default;