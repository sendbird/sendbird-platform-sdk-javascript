"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListPushNotificationContentTemplatesResponseTemplate = _interopRequireDefault(require("./ListPushNotificationContentTemplatesResponseTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ViewPushNotificationContentTemplateResponsePushMessageTemplates model module.
 * @module model/ViewPushNotificationContentTemplateResponsePushMessageTemplates
 * @version 1.0.0
 */
var ViewPushNotificationContentTemplateResponsePushMessageTemplates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewPushNotificationContentTemplateResponsePushMessageTemplates</code>.
   * @alias module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplates
   */
  function ViewPushNotificationContentTemplateResponsePushMessageTemplates() {
    _classCallCheck(this, ViewPushNotificationContentTemplateResponsePushMessageTemplates);

    ViewPushNotificationContentTemplateResponsePushMessageTemplates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewPushNotificationContentTemplateResponsePushMessageTemplates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewPushNotificationContentTemplateResponsePushMessageTemplates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplates} obj Optional instance to populate.
     * @return {module:model/ViewPushNotificationContentTemplateResponsePushMessageTemplates} The populated <code>ViewPushNotificationContentTemplateResponsePushMessageTemplates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewPushNotificationContentTemplateResponsePushMessageTemplates();

        if (data.hasOwnProperty('template_name')) {
          obj['template_name'] = _ApiClient["default"].convertToType(data['template_name'], 'String');
        }

        if (data.hasOwnProperty('template')) {
          obj['template'] = _ListPushNotificationContentTemplatesResponseTemplate["default"].constructFromObject(data['template']);
        }

        if (data.hasOwnProperty('push_message_preview')) {
          obj['push_message_preview'] = _ListPushNotificationContentTemplatesResponseTemplate["default"].constructFromObject(data['push_message_preview']);
        }
      }

      return obj;
    }
  }]);

  return ViewPushNotificationContentTemplateResponsePushMessageTemplates;
}();
/**
 * @member {String} template_name
 */


ViewPushNotificationContentTemplateResponsePushMessageTemplates.prototype['template_name'] = undefined;
/**
 * @member {module:model/ListPushNotificationContentTemplatesResponseTemplate} template
 */

ViewPushNotificationContentTemplateResponsePushMessageTemplates.prototype['template'] = undefined;
/**
 * @member {module:model/ListPushNotificationContentTemplatesResponseTemplate} push_message_preview
 */

ViewPushNotificationContentTemplateResponsePushMessageTemplates.prototype['push_message_preview'] = undefined;
var _default = ViewPushNotificationContentTemplateResponsePushMessageTemplates;
exports["default"] = _default;