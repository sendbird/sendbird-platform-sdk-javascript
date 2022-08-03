"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListReportsResponseReportLogsInner = _interopRequireDefault(require("./ListReportsResponseReportLogsInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListReportsResponse model module.
 * @module model/ListReportsResponse
 * @version 1.0.7
 */
var ListReportsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListReportsResponse</code>.
   * @alias module:model/ListReportsResponse
   */
  function ListReportsResponse() {
    _classCallCheck(this, ListReportsResponse);

    ListReportsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListReportsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsResponse} obj Optional instance to populate.
     * @return {module:model/ListReportsResponse} The populated <code>ListReportsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListReportsResponse();

        if (data.hasOwnProperty('report_logs')) {
          obj['report_logs'] = _ApiClient["default"].convertToType(data['report_logs'], [_ListReportsResponseReportLogsInner["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListReportsResponse;
}();
/**
 * @member {Array.<module:model/ListReportsResponseReportLogsInner>} report_logs
 */


ListReportsResponse.prototype['report_logs'] = undefined;
/**
 * @member {String} next
 */

ListReportsResponse.prototype['next'] = undefined;
var _default = ListReportsResponse;
exports["default"] = _default;