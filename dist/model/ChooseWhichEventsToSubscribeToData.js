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
 * The ChooseWhichEventsToSubscribeToData model module.
 * @module model/ChooseWhichEventsToSubscribeToData
 * @version 1.0.7
 */
var ChooseWhichEventsToSubscribeToData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChooseWhichEventsToSubscribeToData</code>.
   * @alias module:model/ChooseWhichEventsToSubscribeToData
   * @param enabled {Boolean} Determines whether webhooks are turned on in your Sendbird application or not. (Default: false)
   * @param url {String} Specifies the URL of your webhook server to receive payloads for events.
   */
  function ChooseWhichEventsToSubscribeToData(enabled, url) {
    _classCallCheck(this, ChooseWhichEventsToSubscribeToData);

    ChooseWhichEventsToSubscribeToData.initialize(this, enabled, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChooseWhichEventsToSubscribeToData, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, url) {
      obj['enabled'] = enabled;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>ChooseWhichEventsToSubscribeToData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChooseWhichEventsToSubscribeToData} obj Optional instance to populate.
     * @return {module:model/ChooseWhichEventsToSubscribeToData} The populated <code>ChooseWhichEventsToSubscribeToData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChooseWhichEventsToSubscribeToData();

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

  return ChooseWhichEventsToSubscribeToData;
}();
/**
 * Determines whether webhooks are turned on in your Sendbird application or not. (Default: false)
 * @member {Boolean} enabled
 */


ChooseWhichEventsToSubscribeToData.prototype['enabled'] = undefined;
/**
 * Specifies the URL of your webhook server to receive payloads for events.
 * @member {String} url
 */

ChooseWhichEventsToSubscribeToData.prototype['url'] = undefined;
/**
 * Determines whether to include the information on the members of group channels in payloads. (Default: false)
 * @member {Boolean} include_members
 */

ChooseWhichEventsToSubscribeToData.prototype['include_members'] = undefined;
/**
 * Specifies an array of one or more [events](#2-webhook-events) for your webhook server to subscribe to. If set to an asterisk () only, the server will subscribe to all supported events. If set to an empty array, the server will unsubscribe from all (which indicates turning off webhooks).
 * @member {Array.<String>} enabled_events
 */

ChooseWhichEventsToSubscribeToData.prototype['enabled_events'] = undefined;
var _default = ChooseWhichEventsToSubscribeToData;
exports["default"] = _default;