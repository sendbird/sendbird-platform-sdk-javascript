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
 * The ScheduleAnnouncementResponseMessage model module.
 * @module model/ScheduleAnnouncementResponseMessage
 * @version 0.0.16
 */
var ScheduleAnnouncementResponseMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScheduleAnnouncementResponseMessage</code>.
   * @alias module:model/ScheduleAnnouncementResponseMessage
   */
  function ScheduleAnnouncementResponseMessage() {
    _classCallCheck(this, ScheduleAnnouncementResponseMessage);
    ScheduleAnnouncementResponseMessage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ScheduleAnnouncementResponseMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ScheduleAnnouncementResponseMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleAnnouncementResponseMessage} obj Optional instance to populate.
     * @return {module:model/ScheduleAnnouncementResponseMessage} The populated <code>ScheduleAnnouncementResponseMessage</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduleAnnouncementResponseMessage();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ScheduleAnnouncementResponseMessage;
}();
/**
 * @member {String} type
 */
ScheduleAnnouncementResponseMessage.prototype['type'] = undefined;

/**
 * @member {String} custom_type
 */
ScheduleAnnouncementResponseMessage.prototype['custom_type'] = undefined;

/**
 * @member {String} user_id
 */
ScheduleAnnouncementResponseMessage.prototype['user_id'] = undefined;

/**
 * @member {String} content
 */
ScheduleAnnouncementResponseMessage.prototype['content'] = undefined;

/**
 * @member {String} data
 */
ScheduleAnnouncementResponseMessage.prototype['data'] = undefined;
var _default = ScheduleAnnouncementResponseMessage;
exports["default"] = _default;