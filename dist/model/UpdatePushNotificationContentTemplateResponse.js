"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner = _interopRequireDefault(require("./ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The UpdatePushNotificationContentTemplateResponse model module.
 * @module model/UpdatePushNotificationContentTemplateResponse
 * @version 0.0.16
 */
var UpdatePushNotificationContentTemplateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePushNotificationContentTemplateResponse</code>.
   * @alias module:model/UpdatePushNotificationContentTemplateResponse
   */
  function UpdatePushNotificationContentTemplateResponse() {
    _classCallCheck(this, UpdatePushNotificationContentTemplateResponse);
    UpdatePushNotificationContentTemplateResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdatePushNotificationContentTemplateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>UpdatePushNotificationContentTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePushNotificationContentTemplateResponse} obj Optional instance to populate.
     * @return {module:model/UpdatePushNotificationContentTemplateResponse} The populated <code>UpdatePushNotificationContentTemplateResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePushNotificationContentTemplateResponse();
        if (data.hasOwnProperty('push_message_templates')) {
          obj['push_message_templates'] = _ApiClient["default"].convertToType(data['push_message_templates'], [_ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return UpdatePushNotificationContentTemplateResponse;
}();
/**
 * @member {Array.<module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplatesInner>} push_message_templates
 */
UpdatePushNotificationContentTemplateResponse.prototype['push_message_templates'] = undefined;
var _default = UpdatePushNotificationContentTemplateResponse;
exports["default"] = _default;