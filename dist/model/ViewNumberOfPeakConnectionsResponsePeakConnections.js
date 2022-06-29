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
 * The ViewNumberOfPeakConnectionsResponsePeakConnections model module.
 * @module model/ViewNumberOfPeakConnectionsResponsePeakConnections
 * @version 1.0.3
 */
var ViewNumberOfPeakConnectionsResponsePeakConnections = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfPeakConnectionsResponsePeakConnections</code>.
   * @alias module:model/ViewNumberOfPeakConnectionsResponsePeakConnections
   */
  function ViewNumberOfPeakConnectionsResponsePeakConnections() {
    _classCallCheck(this, ViewNumberOfPeakConnectionsResponsePeakConnections);

    ViewNumberOfPeakConnectionsResponsePeakConnections.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewNumberOfPeakConnectionsResponsePeakConnections, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewNumberOfPeakConnectionsResponsePeakConnections</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfPeakConnectionsResponsePeakConnections} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfPeakConnectionsResponsePeakConnections} The populated <code>ViewNumberOfPeakConnectionsResponsePeakConnections</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfPeakConnectionsResponsePeakConnections();

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

  return ViewNumberOfPeakConnectionsResponsePeakConnections;
}();
/**
 * @member {String} date
 */


ViewNumberOfPeakConnectionsResponsePeakConnections.prototype['date'] = undefined;
/**
 * @member {Number} peak_connections
 */

ViewNumberOfPeakConnectionsResponsePeakConnections.prototype['peak_connections'] = undefined;
var _default = ViewNumberOfPeakConnectionsResponsePeakConnections;
exports["default"] = _default;