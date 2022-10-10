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
 * The ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate model module.
 * @module model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate
 * @version 0.0.14
 */var ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate</code>.
   * @alias module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate
   */
  function ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate() {
    _classCallCheck(this, ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate);
    ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} obj Optional instance to populate.
     * @return {module:model/ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate} The populated <code>ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate();
        if (data.hasOwnProperty('MESG')) {
          obj['MESG'] = _ApiClient["default"].convertToType(data['MESG'], 'String');
        }
        if (data.hasOwnProperty('FILE')) {
          obj['FILE'] = _ApiClient["default"].convertToType(data['FILE'], 'String');
        }
        if (data.hasOwnProperty('ADMM')) {
          obj['ADMM'] = _ApiClient["default"].convertToType(data['ADMM'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate;
}(); /**
      * @member {String} MESG
      */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.prototype['MESG'] = undefined;

/**
 * @member {String} FILE
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.prototype['FILE'] = undefined;

/**
 * @member {String} ADMM
 */
ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate.prototype['ADMM'] = undefined;
var _default = ListPushNotificationContentTemplatesResponsePushMessageTemplatesInnerTemplate;
exports["default"] = _default;