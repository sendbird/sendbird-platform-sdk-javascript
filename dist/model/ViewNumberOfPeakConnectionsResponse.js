"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ViewNumberOfPeakConnectionsResponsePeakConnectionsInner = _interopRequireDefault(require("./ViewNumberOfPeakConnectionsResponsePeakConnectionsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ViewNumberOfPeakConnectionsResponse model module.
 * @module model/ViewNumberOfPeakConnectionsResponse
 * @version 0.0.14
 */var ViewNumberOfPeakConnectionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfPeakConnectionsResponse</code>.
   * @alias module:model/ViewNumberOfPeakConnectionsResponse
   */
  function ViewNumberOfPeakConnectionsResponse() {
    _classCallCheck(this, ViewNumberOfPeakConnectionsResponse);
    ViewNumberOfPeakConnectionsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ViewNumberOfPeakConnectionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ViewNumberOfPeakConnectionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfPeakConnectionsResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfPeakConnectionsResponse} The populated <code>ViewNumberOfPeakConnectionsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfPeakConnectionsResponse();
        if (data.hasOwnProperty('peak_connections')) {
          obj['peak_connections'] = _ApiClient["default"].convertToType(data['peak_connections'], [_ViewNumberOfPeakConnectionsResponsePeakConnectionsInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ViewNumberOfPeakConnectionsResponse;
}(); /**
      * @member {Array.<module:model/ViewNumberOfPeakConnectionsResponsePeakConnectionsInner>} peak_connections
      */
ViewNumberOfPeakConnectionsResponse.prototype['peak_connections'] = undefined;
var _default = ViewNumberOfPeakConnectionsResponse;
exports["default"] = _default;