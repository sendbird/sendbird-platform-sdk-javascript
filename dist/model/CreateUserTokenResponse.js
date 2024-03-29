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
 * The CreateUserTokenResponse model module.
 * @module model/CreateUserTokenResponse
 * @version 0.0.16
 */
var CreateUserTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserTokenResponse</code>.
   * @alias module:model/CreateUserTokenResponse
   */
  function CreateUserTokenResponse() {
    _classCallCheck(this, CreateUserTokenResponse);
    CreateUserTokenResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateUserTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateUserTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserTokenResponse} obj Optional instance to populate.
     * @return {module:model/CreateUserTokenResponse} The populated <code>CreateUserTokenResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUserTokenResponse();
        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return CreateUserTokenResponse;
}();
/**
 * @member {String} token
 */
CreateUserTokenResponse.prototype['token'] = undefined;

/**
 * @member {Number} expires_at
 */
CreateUserTokenResponse.prototype['expires_at'] = undefined;
var _default = CreateUserTokenResponse;
exports["default"] = _default;