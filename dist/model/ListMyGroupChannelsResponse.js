"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdGroupChannel = _interopRequireDefault(require("./SendBirdGroupChannel"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListMyGroupChannelsResponse model module.
 * @module model/ListMyGroupChannelsResponse
 * @version 0.0.16
 */
var ListMyGroupChannelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMyGroupChannelsResponse</code>.
   * @alias module:model/ListMyGroupChannelsResponse
   */
  function ListMyGroupChannelsResponse() {
    _classCallCheck(this, ListMyGroupChannelsResponse);
    ListMyGroupChannelsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListMyGroupChannelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListMyGroupChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMyGroupChannelsResponse} obj Optional instance to populate.
     * @return {module:model/ListMyGroupChannelsResponse} The populated <code>ListMyGroupChannelsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMyGroupChannelsResponse();
        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], [_SendBirdGroupChannel["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
        if (data.hasOwnProperty('ts')) {
          obj['ts'] = _ApiClient["default"].convertToType(data['ts'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListMyGroupChannelsResponse;
}();
/**
 * @member {Array.<module:model/SendBirdGroupChannel>} channels
 */
ListMyGroupChannelsResponse.prototype['channels'] = undefined;

/**
 * @member {String} next
 */
ListMyGroupChannelsResponse.prototype['next'] = undefined;

/**
 * @member {Number} ts
 */
ListMyGroupChannelsResponse.prototype['ts'] = undefined;
var _default = ListMyGroupChannelsResponse;
exports["default"] = _default;