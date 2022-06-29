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
 * The GcCheckIfMemberByIdResponse model module.
 * @module model/GcCheckIfMemberByIdResponse
 * @version 1.0.3
 */
var GcCheckIfMemberByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcCheckIfMemberByIdResponse</code>.
   * @alias module:model/GcCheckIfMemberByIdResponse
   */
  function GcCheckIfMemberByIdResponse() {
    _classCallCheck(this, GcCheckIfMemberByIdResponse);

    GcCheckIfMemberByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcCheckIfMemberByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GcCheckIfMemberByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcCheckIfMemberByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcCheckIfMemberByIdResponse} The populated <code>GcCheckIfMemberByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcCheckIfMemberByIdResponse();

        if (data.hasOwnProperty('is_member')) {
          obj['is_member'] = _ApiClient["default"].convertToType(data['is_member'], 'Boolean');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GcCheckIfMemberByIdResponse;
}();
/**
 * @member {Boolean} is_member
 */


GcCheckIfMemberByIdResponse.prototype['is_member'] = undefined;
/**
 * @member {String} state
 */

GcCheckIfMemberByIdResponse.prototype['state'] = undefined;
var _default = GcCheckIfMemberByIdResponse;
exports["default"] = _default;