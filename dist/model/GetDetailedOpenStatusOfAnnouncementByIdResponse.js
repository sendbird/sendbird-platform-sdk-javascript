"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner = _interopRequireDefault(require("./GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetDetailedOpenStatusOfAnnouncementByIdResponse model module.
 * @module model/GetDetailedOpenStatusOfAnnouncementByIdResponse
 * @version 1.0.7
 */
var GetDetailedOpenStatusOfAnnouncementByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetDetailedOpenStatusOfAnnouncementByIdResponse</code>.
   * @alias module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse
   */
  function GetDetailedOpenStatusOfAnnouncementByIdResponse() {
    _classCallCheck(this, GetDetailedOpenStatusOfAnnouncementByIdResponse);

    GetDetailedOpenStatusOfAnnouncementByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetDetailedOpenStatusOfAnnouncementByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetDetailedOpenStatusOfAnnouncementByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse} obj Optional instance to populate.
     * @return {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponse} The populated <code>GetDetailedOpenStatusOfAnnouncementByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetDetailedOpenStatusOfAnnouncementByIdResponse();

        if (data.hasOwnProperty('open_status')) {
          obj['open_status'] = _ApiClient["default"].convertToType(data['open_status'], [_GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetDetailedOpenStatusOfAnnouncementByIdResponse;
}();
/**
 * @member {Array.<module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner>} open_status
 */


GetDetailedOpenStatusOfAnnouncementByIdResponse.prototype['open_status'] = undefined;
/**
 * @member {String} next
 */

GetDetailedOpenStatusOfAnnouncementByIdResponse.prototype['next'] = undefined;
var _default = GetDetailedOpenStatusOfAnnouncementByIdResponse;
exports["default"] = _default;