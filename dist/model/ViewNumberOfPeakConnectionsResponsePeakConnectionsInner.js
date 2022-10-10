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
 * The ViewNumberOfPeakConnectionsResponsePeakConnectionsInner model module.
 * @module model/ViewNumberOfPeakConnectionsResponsePeakConnectionsInner
 * @version 0.0.14
 */var ViewNumberOfPeakConnectionsResponsePeakConnectionsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfPeakConnectionsResponsePeakConnectionsInner</code>.
   * @alias module:model/ViewNumberOfPeakConnectionsResponsePeakConnectionsInner
   */
  function ViewNumberOfPeakConnectionsResponsePeakConnectionsInner() {
    _classCallCheck(this, ViewNumberOfPeakConnectionsResponsePeakConnectionsInner);
    ViewNumberOfPeakConnectionsResponsePeakConnectionsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ViewNumberOfPeakConnectionsResponsePeakConnectionsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ViewNumberOfPeakConnectionsResponsePeakConnectionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfPeakConnectionsResponsePeakConnectionsInner} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfPeakConnectionsResponsePeakConnectionsInner} The populated <code>ViewNumberOfPeakConnectionsResponsePeakConnectionsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfPeakConnectionsResponsePeakConnectionsInner();
        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }
        if (data.hasOwnProperty('peak_connections')) {
          obj['peak_connections'] = _ApiClient["default"].convertToType(data['peak_connections'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ViewNumberOfPeakConnectionsResponsePeakConnectionsInner;
}(); /**
      * @member {String} date
      */
ViewNumberOfPeakConnectionsResponsePeakConnectionsInner.prototype['date'] = undefined;

/**
 * @member {Number} peak_connections
 */
ViewNumberOfPeakConnectionsResponsePeakConnectionsInner.prototype['peak_connections'] = undefined;
var _default = ViewNumberOfPeakConnectionsResponsePeakConnectionsInner;
exports["default"] = _default;