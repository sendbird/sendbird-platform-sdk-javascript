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
 * The ViewNumberOfUnreadMessagesResponse model module.
 * @module model/ViewNumberOfUnreadMessagesResponse
 * @version 0.0.16
 */
var ViewNumberOfUnreadMessagesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfUnreadMessagesResponse</code>.
   * @alias module:model/ViewNumberOfUnreadMessagesResponse
   */
  function ViewNumberOfUnreadMessagesResponse() {
    _classCallCheck(this, ViewNumberOfUnreadMessagesResponse);
    ViewNumberOfUnreadMessagesResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ViewNumberOfUnreadMessagesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ViewNumberOfUnreadMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfUnreadMessagesResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfUnreadMessagesResponse} The populated <code>ViewNumberOfUnreadMessagesResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfUnreadMessagesResponse();
        if (data.hasOwnProperty('unread_count')) {
          obj['unread_count'] = _ApiClient["default"].convertToType(data['unread_count'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ViewNumberOfUnreadMessagesResponse;
}();
/**
 * @member {Number} unread_count
 */
ViewNumberOfUnreadMessagesResponse.prototype['unread_count'] = undefined;
var _default = ViewNumberOfUnreadMessagesResponse;
exports["default"] = _default;