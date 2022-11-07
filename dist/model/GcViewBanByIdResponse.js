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
 * The GcViewBanByIdResponse model module.
 * @module model/GcViewBanByIdResponse
 * @version 0.0.16
 */
var GcViewBanByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcViewBanByIdResponse</code>.
   * @alias module:model/GcViewBanByIdResponse
   */
  function GcViewBanByIdResponse() {
    _classCallCheck(this, GcViewBanByIdResponse);
    GcViewBanByIdResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GcViewBanByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GcViewBanByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcViewBanByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcViewBanByIdResponse} The populated <code>GcViewBanByIdResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcViewBanByIdResponse();
        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdUser["default"].constructFromObject(data['user']);
        }
        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GcViewBanByIdResponse;
}();
/**
 * @member {module:model/SendBirdUser} user
 */
GcViewBanByIdResponse.prototype['user'] = undefined;

/**
 * @member {Number} start_at
 */
GcViewBanByIdResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
GcViewBanByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
GcViewBanByIdResponse.prototype['description'] = undefined;
var _default = GcViewBanByIdResponse;
exports["default"] = _default;