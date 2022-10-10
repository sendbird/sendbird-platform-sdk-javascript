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
 * The CreateUserMetadataResponse model module.
 * @module model/CreateUserMetadataResponse
 * @version 0.0.14
 */var CreateUserMetadataResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserMetadataResponse</code>.
   * @alias module:model/CreateUserMetadataResponse
   */
  function CreateUserMetadataResponse() {
    _classCallCheck(this, CreateUserMetadataResponse);
    CreateUserMetadataResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateUserMetadataResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateUserMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserMetadataResponse} obj Optional instance to populate.
     * @return {module:model/CreateUserMetadataResponse} The populated <code>CreateUserMetadataResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUserMetadataResponse();
        if (data.hasOwnProperty('anyOf')) {
          obj['anyOf'] = _ApiClient["default"].convertToType(data['anyOf'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateUserMetadataResponse;
}(); /**
      * @member {String} anyOf
      */
CreateUserMetadataResponse.prototype['anyOf'] = undefined;
var _default = CreateUserMetadataResponse;
exports["default"] = _default;