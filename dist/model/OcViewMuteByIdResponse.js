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
 * The OcViewMuteByIdResponse model module.
 * @module model/OcViewMuteByIdResponse
 * @version 0.0.14
 */var OcViewMuteByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcViewMuteByIdResponse</code>.
   * @alias module:model/OcViewMuteByIdResponse
   */
  function OcViewMuteByIdResponse() {
    _classCallCheck(this, OcViewMuteByIdResponse);
    OcViewMuteByIdResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OcViewMuteByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OcViewMuteByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcViewMuteByIdResponse} obj Optional instance to populate.
     * @return {module:model/OcViewMuteByIdResponse} The populated <code>OcViewMuteByIdResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcViewMuteByIdResponse();
        if (data.hasOwnProperty('is_muted')) {
          obj['is_muted'] = _ApiClient["default"].convertToType(data['is_muted'], 'Boolean');
        }
        if (data.hasOwnProperty('remaining_duration')) {
          obj['remaining_duration'] = _ApiClient["default"].convertToType(data['remaining_duration'], 'Number');
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
  return OcViewMuteByIdResponse;
}(); /**
      * @member {Boolean} is_muted
      */
OcViewMuteByIdResponse.prototype['is_muted'] = undefined;

/**
 * @member {Number} remaining_duration
 */
OcViewMuteByIdResponse.prototype['remaining_duration'] = undefined;

/**
 * @member {Number} start_at
 */
OcViewMuteByIdResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
OcViewMuteByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
OcViewMuteByIdResponse.prototype['description'] = undefined;
var _default = OcViewMuteByIdResponse;
exports["default"] = _default;