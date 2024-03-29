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
 * The GcMarkAllMessagesAsDeliveredResponse model module.
 * @module model/GcMarkAllMessagesAsDeliveredResponse
 * @version 0.0.16
 */
var GcMarkAllMessagesAsDeliveredResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcMarkAllMessagesAsDeliveredResponse</code>.
   * @alias module:model/GcMarkAllMessagesAsDeliveredResponse
   */
  function GcMarkAllMessagesAsDeliveredResponse() {
    _classCallCheck(this, GcMarkAllMessagesAsDeliveredResponse);
    GcMarkAllMessagesAsDeliveredResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GcMarkAllMessagesAsDeliveredResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GcMarkAllMessagesAsDeliveredResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcMarkAllMessagesAsDeliveredResponse} obj Optional instance to populate.
     * @return {module:model/GcMarkAllMessagesAsDeliveredResponse} The populated <code>GcMarkAllMessagesAsDeliveredResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcMarkAllMessagesAsDeliveredResponse();
        if (data.hasOwnProperty('ts')) {
          obj['ts'] = _ApiClient["default"].convertToType(data['ts'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GcMarkAllMessagesAsDeliveredResponse;
}();
/**
 * @member {Number} ts
 */
GcMarkAllMessagesAsDeliveredResponse.prototype['ts'] = undefined;
var _default = GcMarkAllMessagesAsDeliveredResponse;
exports["default"] = _default;