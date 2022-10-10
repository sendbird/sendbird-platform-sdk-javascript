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
 * The OcDeleteChannelByUrl200Response model module.
 * @module model/OcDeleteChannelByUrl200Response
 * @version 0.0.14
 */var OcDeleteChannelByUrl200Response = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcDeleteChannelByUrl200Response</code>.
   * @alias module:model/OcDeleteChannelByUrl200Response
   */
  function OcDeleteChannelByUrl200Response() {
    _classCallCheck(this, OcDeleteChannelByUrl200Response);
    OcDeleteChannelByUrl200Response.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OcDeleteChannelByUrl200Response, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OcDeleteChannelByUrl200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcDeleteChannelByUrl200Response} obj Optional instance to populate.
     * @return {module:model/OcDeleteChannelByUrl200Response} The populated <code>OcDeleteChannelByUrl200Response</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcDeleteChannelByUrl200Response();
        if (data.hasOwnProperty('anyOf')) {
          obj['anyOf'] = _ApiClient["default"].convertToType(data['anyOf'], 'String');
        }
      }
      return obj;
    }
  }]);
  return OcDeleteChannelByUrl200Response;
}(); /**
      * @member {String} anyOf
      */
OcDeleteChannelByUrl200Response.prototype['anyOf'] = undefined;
var _default = OcDeleteChannelByUrl200Response;
exports["default"] = _default;