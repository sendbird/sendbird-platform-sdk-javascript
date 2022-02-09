"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20071ReportLogs = _interopRequireDefault(require("./InlineResponse20071ReportLogs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20071 model module.
 * @module model/InlineResponse20071
 * @version 1.0.0
 */
var InlineResponse20071 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20071</code>.
   * @alias module:model/InlineResponse20071
   */
  function InlineResponse20071() {
    _classCallCheck(this, InlineResponse20071);

    InlineResponse20071.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20071, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20071</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20071} obj Optional instance to populate.
     * @return {module:model/InlineResponse20071} The populated <code>InlineResponse20071</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20071();

        if (data.hasOwnProperty('report_logs')) {
          obj['report_logs'] = _ApiClient["default"].convertToType(data['report_logs'], [_InlineResponse20071ReportLogs["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20071;
}();
/**
 * @member {Array.<module:model/InlineResponse20071ReportLogs>} report_logs
 */


InlineResponse20071.prototype['report_logs'] = undefined;
/**
 * @member {String} next
 */

InlineResponse20071.prototype['next'] = undefined;
var _default = InlineResponse20071;
exports["default"] = _default;