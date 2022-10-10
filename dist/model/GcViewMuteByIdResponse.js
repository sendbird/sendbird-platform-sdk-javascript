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
 * The GcViewMuteByIdResponse model module.
 * @module model/GcViewMuteByIdResponse
 * @version 0.0.13
 */
var GcViewMuteByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcViewMuteByIdResponse</code>.
   * @alias module:model/GcViewMuteByIdResponse
   */
  function GcViewMuteByIdResponse() {
    _classCallCheck(this, GcViewMuteByIdResponse);

    GcViewMuteByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcViewMuteByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GcViewMuteByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcViewMuteByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcViewMuteByIdResponse} The populated <code>GcViewMuteByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcViewMuteByIdResponse();

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

  return GcViewMuteByIdResponse;
}();
/**
 * @member {Boolean} is_muted
 */


GcViewMuteByIdResponse.prototype['is_muted'] = undefined;
/**
 * @member {Number} remaining_duration
 */

GcViewMuteByIdResponse.prototype['remaining_duration'] = undefined;
/**
 * @member {Number} start_at
 */

GcViewMuteByIdResponse.prototype['start_at'] = undefined;
/**
 * @member {Number} end_at
 */

GcViewMuteByIdResponse.prototype['end_at'] = undefined;
/**
 * @member {String} description
 */

GcViewMuteByIdResponse.prototype['description'] = undefined;
var _default = GcViewMuteByIdResponse;
exports["default"] = _default;