"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListReportsOnMessageByIdResponseReportLogsInner = _interopRequireDefault(require("./ListReportsOnMessageByIdResponseReportLogsInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListReportsOnUserByIdResponse model module.
 * @module model/ListReportsOnUserByIdResponse
 * @version 0.0.13
 */
var ListReportsOnUserByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListReportsOnUserByIdResponse</code>.
   * @alias module:model/ListReportsOnUserByIdResponse
   */
  function ListReportsOnUserByIdResponse() {
    _classCallCheck(this, ListReportsOnUserByIdResponse);

    ListReportsOnUserByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListReportsOnUserByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListReportsOnUserByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsOnUserByIdResponse} obj Optional instance to populate.
     * @return {module:model/ListReportsOnUserByIdResponse} The populated <code>ListReportsOnUserByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListReportsOnUserByIdResponse();

        if (data.hasOwnProperty('report_logs')) {
          obj['report_logs'] = _ApiClient["default"].convertToType(data['report_logs'], [_ListReportsOnMessageByIdResponseReportLogsInner["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListReportsOnUserByIdResponse;
}();
/**
 * @member {Array.<module:model/ListReportsOnMessageByIdResponseReportLogsInner>} report_logs
 */


ListReportsOnUserByIdResponse.prototype['report_logs'] = undefined;
/**
 * @member {String} next
 */

ListReportsOnUserByIdResponse.prototype['next'] = undefined;
var _default = ListReportsOnUserByIdResponse;
exports["default"] = _default;