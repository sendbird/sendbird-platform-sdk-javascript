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
 * The InlineResponse20067Webhook model module.
 * @module model/InlineResponse20067Webhook
 * @version 1.0.0
 */
var InlineResponse20067Webhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20067Webhook</code>.
   * @alias module:model/InlineResponse20067Webhook
   */
  function InlineResponse20067Webhook() {
    _classCallCheck(this, InlineResponse20067Webhook);

    InlineResponse20067Webhook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20067Webhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20067Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20067Webhook} obj Optional instance to populate.
     * @return {module:model/InlineResponse20067Webhook} The populated <code>InlineResponse20067Webhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20067Webhook();

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
      }

      return obj;
    }
  }]);

  return InlineResponse20067Webhook;
}();
/**
 * @member {Boolean} enabled
 */


InlineResponse20067Webhook.prototype['enabled'] = undefined;
/**
 * @member {String} url
 */

InlineResponse20067Webhook.prototype['url'] = undefined;
/**
 * @member {Boolean} include_members
 */

InlineResponse20067Webhook.prototype['include_members'] = undefined;
/**
 * @member {Array.<String>} enabled_events
 */

InlineResponse20067Webhook.prototype['enabled_events'] = undefined;
var _default = InlineResponse20067Webhook;
exports["default"] = _default;