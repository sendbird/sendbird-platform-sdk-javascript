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
 * The ChooseWhichEventsToSubscribeToResponseWebhook model module.
 * @module model/ChooseWhichEventsToSubscribeToResponseWebhook
 * @version 0.0.14
 */var ChooseWhichEventsToSubscribeToResponseWebhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChooseWhichEventsToSubscribeToResponseWebhook</code>.
   * @alias module:model/ChooseWhichEventsToSubscribeToResponseWebhook
   */
  function ChooseWhichEventsToSubscribeToResponseWebhook() {
    _classCallCheck(this, ChooseWhichEventsToSubscribeToResponseWebhook);
    ChooseWhichEventsToSubscribeToResponseWebhook.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ChooseWhichEventsToSubscribeToResponseWebhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ChooseWhichEventsToSubscribeToResponseWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChooseWhichEventsToSubscribeToResponseWebhook} obj Optional instance to populate.
     * @return {module:model/ChooseWhichEventsToSubscribeToResponseWebhook} The populated <code>ChooseWhichEventsToSubscribeToResponseWebhook</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChooseWhichEventsToSubscribeToResponseWebhook();
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
        if (data.hasOwnProperty('include_unread_count')) {
          obj['include_unread_count'] = _ApiClient["default"].convertToType(data['include_unread_count'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return ChooseWhichEventsToSubscribeToResponseWebhook;
}(); /**
      * @member {Boolean} enabled
      */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['enabled'] = undefined;

/**
 * @member {String} url
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['url'] = undefined;

/**
 * @member {Boolean} include_members
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['include_members'] = undefined;

/**
 * @member {Array.<String>} enabled_events
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['enabled_events'] = undefined;

/**
 * @member {Boolean} include_unread_count
 */
ChooseWhichEventsToSubscribeToResponseWebhook.prototype['include_unread_count'] = undefined;
var _default = ChooseWhichEventsToSubscribeToResponseWebhook;
exports["default"] = _default;