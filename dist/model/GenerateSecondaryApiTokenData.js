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
 * The GenerateSecondaryApiTokenData model module.
 * @module model/GenerateSecondaryApiTokenData
 * @version 0.0.16
 */
var GenerateSecondaryApiTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateSecondaryApiTokenData</code>.
   * @alias module:model/GenerateSecondaryApiTokenData
   * @param HTTP_API_TOKEN {String} Specifies the master API token of the application.
   */
  function GenerateSecondaryApiTokenData(HTTP_API_TOKEN) {
    _classCallCheck(this, GenerateSecondaryApiTokenData);
    GenerateSecondaryApiTokenData.initialize(this, HTTP_API_TOKEN);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GenerateSecondaryApiTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, HTTP_API_TOKEN) {
      obj['HTTP_API_TOKEN'] = HTTP_API_TOKEN;
    }

    /**
     * Constructs a <code>GenerateSecondaryApiTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateSecondaryApiTokenData} obj Optional instance to populate.
     * @return {module:model/GenerateSecondaryApiTokenData} The populated <code>GenerateSecondaryApiTokenData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateSecondaryApiTokenData();
        if (data.hasOwnProperty('HTTP_API_TOKEN')) {
          obj['HTTP_API_TOKEN'] = _ApiClient["default"].convertToType(data['HTTP_API_TOKEN'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GenerateSecondaryApiTokenData;
}();
/**
 * Specifies the master API token of the application.
 * @member {String} HTTP_API_TOKEN
 */
GenerateSecondaryApiTokenData.prototype['HTTP_API_TOKEN'] = undefined;
var _default = GenerateSecondaryApiTokenData;
exports["default"] = _default;