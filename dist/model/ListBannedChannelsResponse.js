"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListBannedChannelsResponseBannedChannelsInner = _interopRequireDefault(require("./ListBannedChannelsResponseBannedChannelsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListBannedChannelsResponse model module.
 * @module model/ListBannedChannelsResponse
 * @version 0.0.14
 */var ListBannedChannelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBannedChannelsResponse</code>.
   * @alias module:model/ListBannedChannelsResponse
   */
  function ListBannedChannelsResponse() {
    _classCallCheck(this, ListBannedChannelsResponse);
    ListBannedChannelsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListBannedChannelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListBannedChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBannedChannelsResponse} obj Optional instance to populate.
     * @return {module:model/ListBannedChannelsResponse} The populated <code>ListBannedChannelsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBannedChannelsResponse();
        if (data.hasOwnProperty('banned_channels')) {
          obj['banned_channels'] = _ApiClient["default"].convertToType(data['banned_channels'], [_ListBannedChannelsResponseBannedChannelsInner["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListBannedChannelsResponse;
}(); /**
      * @member {Array.<module:model/ListBannedChannelsResponseBannedChannelsInner>} banned_channels
      */
ListBannedChannelsResponse.prototype['banned_channels'] = undefined;

/**
 * @member {String} next
 */
ListBannedChannelsResponse.prototype['next'] = undefined;
var _default = ListBannedChannelsResponse;
exports["default"] = _default;