"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateBotResponseBot = _interopRequireDefault(require("./CreateBotResponseBot"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListBotsResponseBotsInner model module.
 * @module model/ListBotsResponseBotsInner
 * @version 0.0.16
 */
var ListBotsResponseBotsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBotsResponseBotsInner</code>.
   * @alias module:model/ListBotsResponseBotsInner
   */
  function ListBotsResponseBotsInner() {
    _classCallCheck(this, ListBotsResponseBotsInner);
    ListBotsResponseBotsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListBotsResponseBotsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListBotsResponseBotsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBotsResponseBotsInner} obj Optional instance to populate.
     * @return {module:model/ListBotsResponseBotsInner} The populated <code>ListBotsResponseBotsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBotsResponseBotsInner();
        if (data.hasOwnProperty('bot')) {
          obj['bot'] = _CreateBotResponseBot["default"].constructFromObject(data['bot']);
        }
        if (data.hasOwnProperty('bot_callback_url')) {
          obj['bot_callback_url'] = _ApiClient["default"].convertToType(data['bot_callback_url'], 'String');
        }
        if (data.hasOwnProperty('enable_mark_as_read')) {
          obj['enable_mark_as_read'] = _ApiClient["default"].convertToType(data['enable_mark_as_read'], 'Boolean');
        }
        if (data.hasOwnProperty('is_privacy_mode')) {
          obj['is_privacy_mode'] = _ApiClient["default"].convertToType(data['is_privacy_mode'], 'Boolean');
        }
        if (data.hasOwnProperty('show_member')) {
          obj['show_member'] = _ApiClient["default"].convertToType(data['show_member'], 'Boolean');
        }
        if (data.hasOwnProperty('channel_invitation_preference')) {
          obj['channel_invitation_preference'] = _ApiClient["default"].convertToType(data['channel_invitation_preference'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListBotsResponseBotsInner;
}();
/**
 * @member {module:model/CreateBotResponseBot} bot
 */
ListBotsResponseBotsInner.prototype['bot'] = undefined;

/**
 * @member {String} bot_callback_url
 */
ListBotsResponseBotsInner.prototype['bot_callback_url'] = undefined;

/**
 * @member {Boolean} enable_mark_as_read
 */
ListBotsResponseBotsInner.prototype['enable_mark_as_read'] = undefined;

/**
 * @member {Boolean} is_privacy_mode
 */
ListBotsResponseBotsInner.prototype['is_privacy_mode'] = undefined;

/**
 * @member {Boolean} show_member
 */
ListBotsResponseBotsInner.prototype['show_member'] = undefined;

/**
 * @member {Number} channel_invitation_preference
 */
ListBotsResponseBotsInner.prototype['channel_invitation_preference'] = undefined;
var _default = ListBotsResponseBotsInner;
exports["default"] = _default;