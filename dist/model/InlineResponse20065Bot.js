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
 * The InlineResponse20065Bot model module.
 * @module model/InlineResponse20065Bot
 * @version 1.0.0
 */
var InlineResponse20065Bot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20065Bot</code>.
   * @alias module:model/InlineResponse20065Bot
   */
  function InlineResponse20065Bot() {
    _classCallCheck(this, InlineResponse20065Bot);

    InlineResponse20065Bot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20065Bot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20065Bot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20065Bot} obj Optional instance to populate.
     * @return {module:model/InlineResponse20065Bot} The populated <code>InlineResponse20065Bot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20065Bot();

        if (data.hasOwnProperty('bot_token')) {
          obj['bot_token'] = _ApiClient["default"].convertToType(data['bot_token'], 'String');
        }

        if (data.hasOwnProperty('bot_profile_url')) {
          obj['bot_profile_url'] = _ApiClient["default"].convertToType(data['bot_profile_url'], 'String');
        }

        if (data.hasOwnProperty('bot_userid')) {
          obj['bot_userid'] = _ApiClient["default"].convertToType(data['bot_userid'], 'String');
        }

        if (data.hasOwnProperty('bot_nickname')) {
          obj['bot_nickname'] = _ApiClient["default"].convertToType(data['bot_nickname'], 'String');
        }

        if (data.hasOwnProperty('bot_type')) {
          obj['bot_type'] = _ApiClient["default"].convertToType(data['bot_type'], 'String');
        }

        if (data.hasOwnProperty('bot_metadata')) {
          obj['bot_metadata'] = _ApiClient["default"].convertToType(data['bot_metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20065Bot;
}();
/**
 * @member {String} bot_token
 */


InlineResponse20065Bot.prototype['bot_token'] = undefined;
/**
 * @member {String} bot_profile_url
 */

InlineResponse20065Bot.prototype['bot_profile_url'] = undefined;
/**
 * @member {String} bot_userid
 */

InlineResponse20065Bot.prototype['bot_userid'] = undefined;
/**
 * @member {String} bot_nickname
 */

InlineResponse20065Bot.prototype['bot_nickname'] = undefined;
/**
 * @member {String} bot_type
 */

InlineResponse20065Bot.prototype['bot_type'] = undefined;
/**
 * @member {Object} bot_metadata
 */

InlineResponse20065Bot.prototype['bot_metadata'] = undefined;
var _default = InlineResponse20065Bot;
exports["default"] = _default;