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
 * The DeleteApnsCertificateByIdResponse model module.
 * @module model/DeleteApnsCertificateByIdResponse
 * @version 0.0.13
 */
var DeleteApnsCertificateByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteApnsCertificateByIdResponse</code>.
   * @alias module:model/DeleteApnsCertificateByIdResponse
   */
  function DeleteApnsCertificateByIdResponse() {
    _classCallCheck(this, DeleteApnsCertificateByIdResponse);

    DeleteApnsCertificateByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteApnsCertificateByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteApnsCertificateByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteApnsCertificateByIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteApnsCertificateByIdResponse} The populated <code>DeleteApnsCertificateByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteApnsCertificateByIdResponse();

        if (data.hasOwnProperty('push_configurations')) {
          obj['push_configurations'] = _ApiClient["default"].convertToType(data['push_configurations'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DeleteApnsCertificateByIdResponse;
}();
/**
 * @member {Array.<String>} push_configurations
 */


DeleteApnsCertificateByIdResponse.prototype['push_configurations'] = undefined;
var _default = DeleteApnsCertificateByIdResponse;
exports["default"] = _default;