"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListMessagesResponseMessagesInnerSortedMetaarrayInner = _interopRequireDefault(require("./ListMessagesResponseMessagesInnerSortedMetaarrayInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The AddExtraDataToMessageResponse model module.
 * @module model/AddExtraDataToMessageResponse
 * @version 0.0.16
 */
var AddExtraDataToMessageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddExtraDataToMessageResponse</code>.
   * @alias module:model/AddExtraDataToMessageResponse
   */
  function AddExtraDataToMessageResponse() {
    _classCallCheck(this, AddExtraDataToMessageResponse);
    AddExtraDataToMessageResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddExtraDataToMessageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>AddExtraDataToMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddExtraDataToMessageResponse} obj Optional instance to populate.
     * @return {module:model/AddExtraDataToMessageResponse} The populated <code>AddExtraDataToMessageResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddExtraDataToMessageResponse();
        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], [_ListMessagesResponseMessagesInnerSortedMetaarrayInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return AddExtraDataToMessageResponse;
}();
/**
 * @member {Array.<module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner>} sorted_metaarray
 */
AddExtraDataToMessageResponse.prototype['sorted_metaarray'] = undefined;
var _default = AddExtraDataToMessageResponse;
exports["default"] = _default;