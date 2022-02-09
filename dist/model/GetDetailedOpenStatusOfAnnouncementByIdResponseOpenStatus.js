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
 * The GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus model module.
 * @module model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus
 * @version 1.0.0
 */
var GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus</code>.
   * @alias module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus
   */
  function GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus() {
    _classCallCheck(this, GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus);

    GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus} obj Optional instance to populate.
     * @return {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus} The populated <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('has_opened')) {
          obj['has_opened'] = _ApiClient["default"].convertToType(data['has_opened'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus;
}();
/**
 * @member {String} user_id
 */


GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus.prototype['user_id'] = undefined;
/**
 * @member {String} channel_url
 */

GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus.prototype['channel_url'] = undefined;
/**
 * @member {Boolean} has_opened
 */

GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus.prototype['has_opened'] = undefined;
var _default = GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatus;
exports["default"] = _default;