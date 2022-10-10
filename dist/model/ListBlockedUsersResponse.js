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
 * The ListBlockedUsersResponse model module.
 * @module model/ListBlockedUsersResponse
 * @version 0.0.14
 */var ListBlockedUsersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBlockedUsersResponse</code>.
   * @alias module:model/ListBlockedUsersResponse
   */
  function ListBlockedUsersResponse() {
    _classCallCheck(this, ListBlockedUsersResponse);
    ListBlockedUsersResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListBlockedUsersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListBlockedUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBlockedUsersResponse} obj Optional instance to populate.
     * @return {module:model/ListBlockedUsersResponse} The populated <code>ListBlockedUsersResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBlockedUsersResponse();
        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_SendBirdUser["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListBlockedUsersResponse;
}(); /**
      * @member {Array.<module:model/SendBirdUser>} users
      */
ListBlockedUsersResponse.prototype['users'] = undefined;

/**
 * @member {String} next
 */
ListBlockedUsersResponse.prototype['next'] = undefined;
var _default = ListBlockedUsersResponse;
exports["default"] = _default;