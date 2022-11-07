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
 * The UpdatePushPreferencesForChannelByUrlResponse model module.
 * @module model/UpdatePushPreferencesForChannelByUrlResponse
 * @version 0.0.16
 */
var UpdatePushPreferencesForChannelByUrlResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePushPreferencesForChannelByUrlResponse</code>.
   * @alias module:model/UpdatePushPreferencesForChannelByUrlResponse
   */
  function UpdatePushPreferencesForChannelByUrlResponse() {
    _classCallCheck(this, UpdatePushPreferencesForChannelByUrlResponse);
    UpdatePushPreferencesForChannelByUrlResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdatePushPreferencesForChannelByUrlResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UpdatePushPreferencesForChannelByUrlResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushPreferencesForChannelByUrlResponse} obj Optional instance to populate.
     * @return {module:model/UpdatePushPreferencesForChannelByUrlResponse} The populated <code>UpdatePushPreferencesForChannelByUrlResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePushPreferencesForChannelByUrlResponse();
        if (data.hasOwnProperty('push_trigger_option')) {
          obj['push_trigger_option'] = _ApiClient["default"].convertToType(data['push_trigger_option'], 'String');
        }
        if (data.hasOwnProperty('do_not_disturb')) {
          obj['do_not_disturb'] = _ApiClient["default"].convertToType(data['do_not_disturb'], 'Boolean');
        }
        if (data.hasOwnProperty('start_hour')) {
          obj['start_hour'] = _ApiClient["default"].convertToType(data['start_hour'], 'Number');
        }
        if (data.hasOwnProperty('start_min')) {
          obj['start_min'] = _ApiClient["default"].convertToType(data['start_min'], 'Number');
        }
        if (data.hasOwnProperty('end_hour')) {
          obj['end_hour'] = _ApiClient["default"].convertToType(data['end_hour'], 'Number');
        }
        if (data.hasOwnProperty('end_min')) {
          obj['end_min'] = _ApiClient["default"].convertToType(data['end_min'], 'Number');
        }
        if (data.hasOwnProperty('snooze_enabled')) {
          obj['snooze_enabled'] = _ApiClient["default"].convertToType(data['snooze_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('snooze_start_ts')) {
          obj['snooze_start_ts'] = _ApiClient["default"].convertToType(data['snooze_start_ts'], 'Number');
        }
        if (data.hasOwnProperty('snooze_end_ts')) {
          obj['snooze_end_ts'] = _ApiClient["default"].convertToType(data['snooze_end_ts'], 'Number');
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
        if (data.hasOwnProperty('enable')) {
          obj['enable'] = _ApiClient["default"].convertToType(data['enable'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return UpdatePushPreferencesForChannelByUrlResponse;
}();
/**
 * @member {String} push_trigger_option
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['push_trigger_option'] = undefined;

/**
 * @member {Boolean} do_not_disturb
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['do_not_disturb'] = undefined;

/**
 * @member {Number} start_hour
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['start_hour'] = undefined;

/**
 * @member {Number} start_min
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['start_min'] = undefined;

/**
 * @member {Number} end_hour
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['end_hour'] = undefined;

/**
 * @member {Number} end_min
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['end_min'] = undefined;

/**
 * @member {Boolean} snooze_enabled
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['snooze_enabled'] = undefined;

/**
 * @member {Number} snooze_start_ts
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['snooze_start_ts'] = undefined;

/**
 * @member {Number} snooze_end_ts
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['snooze_end_ts'] = undefined;

/**
 * @member {String} timezone
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['timezone'] = undefined;

/**
 * @member {String} push_sound
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['push_sound'] = undefined;

/**
 * @member {Boolean} enable
 */
UpdatePushPreferencesForChannelByUrlResponse.prototype['enable'] = undefined;
var _default = UpdatePushPreferencesForChannelByUrlResponse;
exports["default"] = _default;