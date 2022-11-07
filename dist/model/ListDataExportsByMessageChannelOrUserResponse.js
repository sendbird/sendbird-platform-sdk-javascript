"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListDataExportsByMessageChannelOrUserResponseExportedDataInner = _interopRequireDefault(require("./ListDataExportsByMessageChannelOrUserResponseExportedDataInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListDataExportsByMessageChannelOrUserResponse model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponse
 * @version 0.0.16
 */
var ListDataExportsByMessageChannelOrUserResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponse</code>.
   * @alias module:model/ListDataExportsByMessageChannelOrUserResponse
   */
  function ListDataExportsByMessageChannelOrUserResponse() {
    _classCallCheck(this, ListDataExportsByMessageChannelOrUserResponse);
    ListDataExportsByMessageChannelOrUserResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListDataExportsByMessageChannelOrUserResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponse} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponse} The populated <code>ListDataExportsByMessageChannelOrUserResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDataExportsByMessageChannelOrUserResponse();
        if (data.hasOwnProperty('exported_data')) {
          obj['exported_data'] = _ApiClient["default"].convertToType(data['exported_data'], [_ListDataExportsByMessageChannelOrUserResponseExportedDataInner["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListDataExportsByMessageChannelOrUserResponse;
}();
/**
 * @member {Array.<module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInner>} exported_data
 */
ListDataExportsByMessageChannelOrUserResponse.prototype['exported_data'] = undefined;

/**
 * @member {String} next
 */
ListDataExportsByMessageChannelOrUserResponse.prototype['next'] = undefined;
var _default = ListDataExportsByMessageChannelOrUserResponse;
exports["default"] = _default;