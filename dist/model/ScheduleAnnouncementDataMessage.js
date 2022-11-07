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
 * The ScheduleAnnouncementDataMessage model module.
 * @module model/ScheduleAnnouncementDataMessage
 * @version 0.0.16
 */
var ScheduleAnnouncementDataMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScheduleAnnouncementDataMessage</code>.
   * The [message](/docs/chat/v3/platform-api/guides/messages#-3-resource-representation) of a new announcement.
   * @alias module:model/ScheduleAnnouncementDataMessage
   */
  function ScheduleAnnouncementDataMessage() {
    _classCallCheck(this, ScheduleAnnouncementDataMessage);
    ScheduleAnnouncementDataMessage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ScheduleAnnouncementDataMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ScheduleAnnouncementDataMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleAnnouncementDataMessage} obj Optional instance to populate.
     * @return {module:model/ScheduleAnnouncementDataMessage} The populated <code>ScheduleAnnouncementDataMessage</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduleAnnouncementDataMessage();
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ScheduleAnnouncementDataMessage;
}();
/**
 * @member {String} type
 */
ScheduleAnnouncementDataMessage.prototype['type'] = undefined;

/**
 * @member {String} user_id
 */
ScheduleAnnouncementDataMessage.prototype['user_id'] = undefined;

/**
 * @member {String} content
 */
ScheduleAnnouncementDataMessage.prototype['content'] = undefined;
var _default = ScheduleAnnouncementDataMessage;
exports["default"] = _default;