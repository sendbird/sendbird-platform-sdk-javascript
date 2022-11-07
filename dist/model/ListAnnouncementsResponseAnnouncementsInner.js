"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ScheduleAnnouncementResponseCreateChannelOptions = _interopRequireDefault(require("./ScheduleAnnouncementResponseCreateChannelOptions"));
var _ScheduleAnnouncementResponseMessage = _interopRequireDefault(require("./ScheduleAnnouncementResponseMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListAnnouncementsResponseAnnouncementsInner model module.
 * @module model/ListAnnouncementsResponseAnnouncementsInner
 * @version 0.0.16
 */
var ListAnnouncementsResponseAnnouncementsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAnnouncementsResponseAnnouncementsInner</code>.
   * @alias module:model/ListAnnouncementsResponseAnnouncementsInner
   */
  function ListAnnouncementsResponseAnnouncementsInner() {
    _classCallCheck(this, ListAnnouncementsResponseAnnouncementsInner);
    ListAnnouncementsResponseAnnouncementsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAnnouncementsResponseAnnouncementsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListAnnouncementsResponseAnnouncementsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAnnouncementsResponseAnnouncementsInner} obj Optional instance to populate.
     * @return {module:model/ListAnnouncementsResponseAnnouncementsInner} The populated <code>ListAnnouncementsResponseAnnouncementsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAnnouncementsResponseAnnouncementsInner();
        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }
        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }
        if (data.hasOwnProperty('message')) {
          obj['message'] = _ScheduleAnnouncementResponseMessage["default"].constructFromObject(data['message']);
        }
        if (data.hasOwnProperty('enable_push')) {
          obj['enable_push'] = _ApiClient["default"].convertToType(data['enable_push'], 'Boolean');
        }
        if (data.hasOwnProperty('target_at')) {
          obj['target_at'] = _ApiClient["default"].convertToType(data['target_at'], 'String');
        }
        if (data.hasOwnProperty('target_user_count')) {
          obj['target_user_count'] = _ApiClient["default"].convertToType(data['target_user_count'], 'Number');
        }
        if (data.hasOwnProperty('target_channel_count')) {
          obj['target_channel_count'] = _ApiClient["default"].convertToType(data['target_channel_count'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('scheduled_at')) {
          obj['scheduled_at'] = _ApiClient["default"].convertToType(data['scheduled_at'], 'Number');
        }
        if (data.hasOwnProperty('cease_at')) {
          obj['cease_at'] = _ApiClient["default"].convertToType(data['cease_at'], 'String');
        }
        if (data.hasOwnProperty('resume_at')) {
          obj['resume_at'] = _ApiClient["default"].convertToType(data['resume_at'], 'String');
        }
        if (data.hasOwnProperty('completed_at')) {
          obj['completed_at'] = _ApiClient["default"].convertToType(data['completed_at'], 'Number');
        }
        if (data.hasOwnProperty('sent_user_count')) {
          obj['sent_user_count'] = _ApiClient["default"].convertToType(data['sent_user_count'], 'Number');
        }
        if (data.hasOwnProperty('open_count')) {
          obj['open_count'] = _ApiClient["default"].convertToType(data['open_count'], 'Number');
        }
        if (data.hasOwnProperty('open_rate')) {
          obj['open_rate'] = _ApiClient["default"].convertToType(data['open_rate'], 'Number');
        }
        if (data.hasOwnProperty('create_channel')) {
          obj['create_channel'] = _ApiClient["default"].convertToType(data['create_channel'], 'Boolean');
        }
        if (data.hasOwnProperty('create_channel_options')) {
          obj['create_channel_options'] = _ScheduleAnnouncementResponseCreateChannelOptions["default"].constructFromObject(data['create_channel_options']);
        }
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
        if (data.hasOwnProperty('mark_as_read')) {
          obj['mark_as_read'] = _ApiClient["default"].convertToType(data['mark_as_read'], 'Boolean');
        }
        if (data.hasOwnProperty('sent_channel_count')) {
          obj['sent_channel_count'] = _ApiClient["default"].convertToType(data['sent_channel_count'], 'Number');
        }
        if (data.hasOwnProperty('target_channel_type')) {
          obj['target_channel_type'] = _ApiClient["default"].convertToType(data['target_channel_type'], 'String');
        }
        if (data.hasOwnProperty('target_custom_type')) {
          obj['target_custom_type'] = _ApiClient["default"].convertToType(data['target_custom_type'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListAnnouncementsResponseAnnouncementsInner;
}();
/**
 * @member {String} unique_id
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['unique_id'] = undefined;

/**
 * @member {String} announcement_group
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['announcement_group'] = undefined;

/**
 * @member {module:model/ScheduleAnnouncementResponseMessage} message
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['message'] = undefined;

/**
 * @member {Boolean} enable_push
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['enable_push'] = undefined;

/**
 * @member {String} target_at
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['target_at'] = undefined;

/**
 * @member {Number} target_user_count
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['target_user_count'] = undefined;

/**
 * @member {Number} target_channel_count
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['target_channel_count'] = undefined;

/**
 * @member {String} status
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['status'] = undefined;

/**
 * @member {Number} scheduled_at
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['scheduled_at'] = undefined;

/**
 * @member {String} cease_at
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['cease_at'] = undefined;

/**
 * @member {String} resume_at
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['resume_at'] = undefined;

/**
 * @member {Number} completed_at
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['completed_at'] = undefined;

/**
 * @member {Number} sent_user_count
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['sent_user_count'] = undefined;

/**
 * @member {Number} open_count
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['open_count'] = undefined;

/**
 * @member {Number} open_rate
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['open_rate'] = undefined;

/**
 * @member {Boolean} create_channel
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['create_channel'] = undefined;

/**
 * @member {module:model/ScheduleAnnouncementResponseCreateChannelOptions} create_channel_options
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['create_channel_options'] = undefined;

/**
 * @member {Number} end_at
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['end_at'] = undefined;

/**
 * @member {Boolean} mark_as_read
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['mark_as_read'] = undefined;

/**
 * @member {Number} sent_channel_count
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['sent_channel_count'] = undefined;

/**
 * @member {String} target_channel_type
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['target_channel_type'] = undefined;

/**
 * @member {String} target_custom_type
 */
ListAnnouncementsResponseAnnouncementsInner.prototype['target_custom_type'] = undefined;
var _default = ListAnnouncementsResponseAnnouncementsInner;
exports["default"] = _default;