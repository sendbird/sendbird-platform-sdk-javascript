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
 * The GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner model module.
 * @module model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner
 * @version 0.0.13
 */
var GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner</code>.
   * @alias module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner
   */
  function GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner() {
    _classCallCheck(this, GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner);

    GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner} obj Optional instance to populate.
     * @return {module:model/GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner} The populated <code>GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('has_opened')) {
          obj['has_opened'] = _ApiClient["default"].convertToType(data['has_opened'], 'Boolean');
        }

        if (data.hasOwnProperty('sent_at')) {
          obj['sent_at'] = _ApiClient["default"].convertToType(data['sent_at'], 'Number');
        }

        if (data.hasOwnProperty('open_at')) {
          obj['open_at'] = _ApiClient["default"].convertToType(data['open_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner;
}();
/**
 * @member {String} user_id
 */


GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['user_id'] = undefined;
/**
 * @member {String} channel_url
 */

GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['channel_url'] = undefined;
/**
 * @member {Boolean} has_opened
 */

GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['has_opened'] = undefined;
/**
 * @member {Number} sent_at
 */

GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['sent_at'] = undefined;
/**
 * @member {Number} open_at
 */

GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner.prototype['open_at'] = undefined;
var _default = GetDetailedOpenStatusOfAnnouncementByIdResponseOpenStatusInner;
exports["default"] = _default;