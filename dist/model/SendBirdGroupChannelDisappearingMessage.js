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
 * The SendBirdGroupChannelDisappearingMessage model module.
 * @module model/SendBirdGroupChannelDisappearingMessage
 * @version 0.0.16
 */
var SendBirdGroupChannelDisappearingMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannelDisappearingMessage</code>.
   * @alias module:model/SendBirdGroupChannelDisappearingMessage
   */
  function SendBirdGroupChannelDisappearingMessage() {
    _classCallCheck(this, SendBirdGroupChannelDisappearingMessage);
    SendBirdGroupChannelDisappearingMessage.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdGroupChannelDisappearingMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdGroupChannelDisappearingMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelDisappearingMessage} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelDisappearingMessage} The populated <code>SendBirdGroupChannelDisappearingMessage</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannelDisappearingMessage();
        if (data.hasOwnProperty('message_survival_seconds')) {
          obj['message_survival_seconds'] = _ApiClient["default"].convertToType(data['message_survival_seconds'], 'Number');
        }
        if (data.hasOwnProperty('is_triggered_by_message_read')) {
          obj['is_triggered_by_message_read'] = _ApiClient["default"].convertToType(data['is_triggered_by_message_read'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return SendBirdGroupChannelDisappearingMessage;
}();
/**
 * @member {Number} message_survival_seconds
 */
SendBirdGroupChannelDisappearingMessage.prototype['message_survival_seconds'] = undefined;

/**
 * @member {Boolean} is_triggered_by_message_read
 */
SendBirdGroupChannelDisappearingMessage.prototype['is_triggered_by_message_read'] = undefined;
var _default = SendBirdGroupChannelDisappearingMessage;
exports["default"] = _default;