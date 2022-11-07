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
 * The ViewPushPreferencesResponse model module.
 * @module model/ViewPushPreferencesResponse
 * @version 0.0.16
 */
var ViewPushPreferencesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewPushPreferencesResponse</code>.
   * @alias module:model/ViewPushPreferencesResponse
   */
  function ViewPushPreferencesResponse() {
    _classCallCheck(this, ViewPushPreferencesResponse);
    ViewPushPreferencesResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ViewPushPreferencesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ViewPushPreferencesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewPushPreferencesResponse} obj Optional instance to populate.
     * @return {module:model/ViewPushPreferencesResponse} The populated <code>ViewPushPreferencesResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewPushPreferencesResponse();
        if (data.hasOwnProperty('snooze_start_ts')) {
          obj['snooze_start_ts'] = _ApiClient["default"].convertToType(data['snooze_start_ts'], 'String');
        }
        if (data.hasOwnProperty('start_hour')) {
          obj['start_hour'] = _ApiClient["default"].convertToType(data['start_hour'], 'Number');
        }
        if (data.hasOwnProperty('snooze_enabled')) {
          obj['snooze_enabled'] = _ApiClient["default"].convertToType(data['snooze_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('end_min')) {
          obj['end_min'] = _ApiClient["default"].convertToType(data['end_min'], 'Number');
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('block_push_from_bots')) {
          obj['block_push_from_bots'] = _ApiClient["default"].convertToType(data['block_push_from_bots'], 'Boolean');
        }
        if (data.hasOwnProperty('push_blocked_bot_ids')) {
          obj['push_blocked_bot_ids'] = _ApiClient["default"].convertToType(data['push_blocked_bot_ids'], ['String']);
        }
        if (data.hasOwnProperty('start_min')) {
          obj['start_min'] = _ApiClient["default"].convertToType(data['start_min'], 'Number');
        }
        if (data.hasOwnProperty('snooze_end_ts')) {
          obj['snooze_end_ts'] = _ApiClient["default"].convertToType(data['snooze_end_ts'], 'String');
        }
        if (data.hasOwnProperty('do_not_disturb')) {
          obj['do_not_disturb'] = _ApiClient["default"].convertToType(data['do_not_disturb'], 'Boolean');
        }
        if (data.hasOwnProperty('end_hour')) {
          obj['end_hour'] = _ApiClient["default"].convertToType(data['end_hour'], 'Number');
        }
        if (data.hasOwnProperty('enable_push_for_replies')) {
          obj['enable_push_for_replies'] = _ApiClient["default"].convertToType(data['enable_push_for_replies'], 'Boolean');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
        if (data.hasOwnProperty('push_trigger_option')) {
          obj['push_trigger_option'] = _ApiClient["default"].convertToType(data['push_trigger_option'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ViewPushPreferencesResponse;
}();
/**
 * @member {String} snooze_start_ts
 */
ViewPushPreferencesResponse.prototype['snooze_start_ts'] = undefined;

/**
 * @member {Number} start_hour
 */
ViewPushPreferencesResponse.prototype['start_hour'] = undefined;

/**
 * @member {Boolean} snooze_enabled
 */
ViewPushPreferencesResponse.prototype['snooze_enabled'] = undefined;

/**
 * @member {Number} end_min
 */
ViewPushPreferencesResponse.prototype['end_min'] = undefined;

/**
 * @member {String} timezone
 */
ViewPushPreferencesResponse.prototype['timezone'] = undefined;

/**
 * @member {Boolean} block_push_from_bots
 */
ViewPushPreferencesResponse.prototype['block_push_from_bots'] = undefined;

/**
 * @member {Array.<String>} push_blocked_bot_ids
 */
ViewPushPreferencesResponse.prototype['push_blocked_bot_ids'] = undefined;

/**
 * @member {Number} start_min
 */
ViewPushPreferencesResponse.prototype['start_min'] = undefined;

/**
 * @member {String} snooze_end_ts
 */
ViewPushPreferencesResponse.prototype['snooze_end_ts'] = undefined;

/**
 * @member {Boolean} do_not_disturb
 */
ViewPushPreferencesResponse.prototype['do_not_disturb'] = undefined;

/**
 * @member {Number} end_hour
 */
ViewPushPreferencesResponse.prototype['end_hour'] = undefined;

/**
 * @member {Boolean} enable_push_for_replies
 */
ViewPushPreferencesResponse.prototype['enable_push_for_replies'] = undefined;

/**
 * @member {String} push_sound
 */
ViewPushPreferencesResponse.prototype['push_sound'] = undefined;

/**
 * @member {String} push_trigger_option
 */
ViewPushPreferencesResponse.prototype['push_trigger_option'] = undefined;
var _default = ViewPushPreferencesResponse;
exports["default"] = _default;