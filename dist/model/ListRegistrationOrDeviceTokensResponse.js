"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListRegistrationOrDeviceTokensResponse model module.
 * @module model/ListRegistrationOrDeviceTokensResponse
 * @version 0.0.14
 */var ListRegistrationOrDeviceTokensResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListRegistrationOrDeviceTokensResponse</code>.
   * @alias module:model/ListRegistrationOrDeviceTokensResponse
   */
  function ListRegistrationOrDeviceTokensResponse() {
    _classCallCheck(this, ListRegistrationOrDeviceTokensResponse);
    ListRegistrationOrDeviceTokensResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListRegistrationOrDeviceTokensResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListRegistrationOrDeviceTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListRegistrationOrDeviceTokensResponse} obj Optional instance to populate.
     * @return {module:model/ListRegistrationOrDeviceTokensResponse} The populated <code>ListRegistrationOrDeviceTokensResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListRegistrationOrDeviceTokensResponse();
        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], ['String']);
        }
        if (data.hasOwnProperty('tokens')) {
          obj['tokens'] = _ApiClient["default"].convertToType(data['tokens'], ['String']);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdUser["default"].constructFromObject(data['user']);
        }
      }
      return obj;
    }
  }]);
  return ListRegistrationOrDeviceTokensResponse;
}(); /**
      * @member {Array.<String>} token
      */
ListRegistrationOrDeviceTokensResponse.prototype['token'] = undefined;

/**
 * @member {Array.<String>} tokens
 */
ListRegistrationOrDeviceTokensResponse.prototype['tokens'] = undefined;

/**
 * @member {String} type
 */
ListRegistrationOrDeviceTokensResponse.prototype['type'] = undefined;

/**
 * @member {module:model/SendBirdUser} user
 */
ListRegistrationOrDeviceTokensResponse.prototype['user'] = undefined;
var _default = ListRegistrationOrDeviceTokensResponse;
exports["default"] = _default;