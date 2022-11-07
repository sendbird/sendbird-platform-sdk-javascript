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
 * The ViewTotalNumberOfMessagesInChannelResponse model module.
 * @module model/ViewTotalNumberOfMessagesInChannelResponse
 * @version 0.0.16
 */
var ViewTotalNumberOfMessagesInChannelResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewTotalNumberOfMessagesInChannelResponse</code>.
   * @alias module:model/ViewTotalNumberOfMessagesInChannelResponse
   */
  function ViewTotalNumberOfMessagesInChannelResponse() {
    _classCallCheck(this, ViewTotalNumberOfMessagesInChannelResponse);
    ViewTotalNumberOfMessagesInChannelResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ViewTotalNumberOfMessagesInChannelResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ViewTotalNumberOfMessagesInChannelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewTotalNumberOfMessagesInChannelResponse} obj Optional instance to populate.
     * @return {module:model/ViewTotalNumberOfMessagesInChannelResponse} The populated <code>ViewTotalNumberOfMessagesInChannelResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewTotalNumberOfMessagesInChannelResponse();
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ViewTotalNumberOfMessagesInChannelResponse;
}();
/**
 * @member {Number} total
 */
ViewTotalNumberOfMessagesInChannelResponse.prototype['total'] = undefined;
var _default = ViewTotalNumberOfMessagesInChannelResponse;
exports["default"] = _default;