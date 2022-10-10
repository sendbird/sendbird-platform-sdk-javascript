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
 * The RetrieveListOfSubscribedEventsResponseWebhook model module.
 * @module model/RetrieveListOfSubscribedEventsResponseWebhook
 * @version 0.0.14
 */var RetrieveListOfSubscribedEventsResponseWebhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RetrieveListOfSubscribedEventsResponseWebhook</code>.
   * @alias module:model/RetrieveListOfSubscribedEventsResponseWebhook
   */
  function RetrieveListOfSubscribedEventsResponseWebhook() {
    _classCallCheck(this, RetrieveListOfSubscribedEventsResponseWebhook);
    RetrieveListOfSubscribedEventsResponseWebhook.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RetrieveListOfSubscribedEventsResponseWebhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RetrieveListOfSubscribedEventsResponseWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveListOfSubscribedEventsResponseWebhook} obj Optional instance to populate.
     * @return {module:model/RetrieveListOfSubscribedEventsResponseWebhook} The populated <code>RetrieveListOfSubscribedEventsResponseWebhook</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RetrieveListOfSubscribedEventsResponseWebhook();
        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('include_members')) {
          obj['include_members'] = _ApiClient["default"].convertToType(data['include_members'], 'Boolean');
        }
        if (data.hasOwnProperty('enabled_events')) {
          obj['enabled_events'] = _ApiClient["default"].convertToType(data['enabled_events'], ['String']);
        }
        if (data.hasOwnProperty('all_webhook_categories')) {
          obj['all_webhook_categories'] = _ApiClient["default"].convertToType(data['all_webhook_categories'], ['String']);
        }
        if (data.hasOwnProperty('include_unread_count')) {
          obj['include_unread_count'] = _ApiClient["default"].convertToType(data['include_unread_count'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return RetrieveListOfSubscribedEventsResponseWebhook;
}(); /**
      * @member {Boolean} enabled
      */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['enabled'] = undefined;

/**
 * @member {String} url
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['url'] = undefined;

/**
 * @member {Boolean} include_members
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['include_members'] = undefined;

/**
 * @member {Array.<String>} enabled_events
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['enabled_events'] = undefined;

/**
 * @member {Array.<String>} all_webhook_categories
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['all_webhook_categories'] = undefined;

/**
 * @member {Boolean} include_unread_count
 */
RetrieveListOfSubscribedEventsResponseWebhook.prototype['include_unread_count'] = undefined;
var _default = RetrieveListOfSubscribedEventsResponseWebhook;
exports["default"] = _default;