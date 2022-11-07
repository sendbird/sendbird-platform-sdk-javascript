"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate = _interopRequireDefault(require("./ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner model module.
 * @module model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner
 * @version 0.0.16
 */
var ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner</code>.
   * @alias module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner
   */
  function ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner() {
    _classCallCheck(this, ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner);
    ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner} obj Optional instance to populate.
     * @return {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner} The populated <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner();
        if (data.hasOwnProperty('template_name')) {
          obj['template_name'] = _ApiClient["default"].convertToType(data['template_name'], 'String');
        }
        if (data.hasOwnProperty('template')) {
          obj['template'] = _ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate["default"].constructFromObject(data['template']);
        }
      }
      return obj;
    }
  }]);
  return ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner;
}();
/**
 * @member {String} template_name
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.prototype['template_name'] = undefined;

/**
 * @member {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} template
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner.prototype['template'] = undefined;
var _default = ListPushNotificationContentTemplatesResponsePushMessageTemplatesInner;
exports["default"] = _default;