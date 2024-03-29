"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListMessagesResponseMessagesInner = _interopRequireDefault(require("./ListMessagesResponseMessagesInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMessagesResponse model module.
 * @module model/ListMessagesResponse
 * @version 0.0.16
 */
var ListMessagesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponse</code>.
   * @alias module:model/ListMessagesResponse
   */
  function ListMessagesResponse() {
    _classCallCheck(this, ListMessagesResponse);
    ListMessagesResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListMessagesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListMessagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponse} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponse} The populated <code>ListMessagesResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponse();
        if (data.hasOwnProperty('messages')) {
          obj['messages'] = _ApiClient["default"].convertToType(data['messages'], [_ListMessagesResponseMessagesInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ListMessagesResponse;
}();
/**
 * @member {Array.<module:model/ListMessagesResponseMessagesInner>} messages
 */
ListMessagesResponse.prototype['messages'] = undefined;
var _default = ListMessagesResponse;
exports["default"] = _default;