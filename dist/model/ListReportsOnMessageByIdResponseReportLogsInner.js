"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdChannelResponse = _interopRequireDefault(require("./SendBirdChannelResponse"));
var _SendBirdMessageResponse = _interopRequireDefault(require("./SendBirdMessageResponse"));
var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListReportsOnMessageByIdResponseReportLogsInner model module.
 * @module model/ListReportsOnMessageByIdResponseReportLogsInner
 * @version 0.0.14
 */var ListReportsOnMessageByIdResponseReportLogsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListReportsOnMessageByIdResponseReportLogsInner</code>.
   * @alias module:model/ListReportsOnMessageByIdResponseReportLogsInner
   */
  function ListReportsOnMessageByIdResponseReportLogsInner() {
    _classCallCheck(this, ListReportsOnMessageByIdResponseReportLogsInner);
    ListReportsOnMessageByIdResponseReportLogsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListReportsOnMessageByIdResponseReportLogsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListReportsOnMessageByIdResponseReportLogsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListReportsOnMessageByIdResponseReportLogsInner} obj Optional instance to populate.
     * @return {module:model/ListReportsOnMessageByIdResponseReportLogsInner} The populated <code>ListReportsOnMessageByIdResponseReportLogsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListReportsOnMessageByIdResponseReportLogsInner();
        if (data.hasOwnProperty('report_type')) {
          obj['report_type'] = _ApiClient["default"].convertToType(data['report_type'], 'String');
        }
        if (data.hasOwnProperty('report_category')) {
          obj['report_category'] = _ApiClient["default"].convertToType(data['report_category'], 'String');
        }
        if (data.hasOwnProperty('reporting_user')) {
          obj['reporting_user'] = _SendBirdUser["default"].constructFromObject(data['reporting_user']);
        }
        if (data.hasOwnProperty('offending_user')) {
          obj['offending_user'] = _SendBirdUser["default"].constructFromObject(data['offending_user']);
        }
        if (data.hasOwnProperty('reported_message')) {
          obj['reported_message'] = _SendBirdMessageResponse["default"].constructFromObject(data['reported_message']);
        }
        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _SendBirdChannelResponse["default"].constructFromObject(data['channel']);
        }
        if (data.hasOwnProperty('report_description')) {
          obj['report_description'] = _ApiClient["default"].convertToType(data['report_description'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListReportsOnMessageByIdResponseReportLogsInner;
}(); /**
      * @member {String} report_type
      */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['report_type'] = undefined;

/**
 * @member {String} report_category
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['report_category'] = undefined;

/**
 * @member {module:model/SendBirdUser} reporting_user
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['reporting_user'] = undefined;

/**
 * @member {module:model/SendBirdUser} offending_user
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['offending_user'] = undefined;

/**
 * @member {module:model/SendBirdMessageResponse} reported_message
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['reported_message'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse} channel
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['channel'] = undefined;

/**
 * @member {String} report_description
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['report_description'] = undefined;

/**
 * @member {Number} created_at
 */
ListReportsOnMessageByIdResponseReportLogsInner.prototype['created_at'] = undefined;
var _default = ListReportsOnMessageByIdResponseReportLogsInner;
exports["default"] = _default;