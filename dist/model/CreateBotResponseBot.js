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
 * The CreateBotResponseBot model module.
 * @module model/CreateBotResponseBot
 * @version 0.0.13
 */
var CreateBotResponseBot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateBotResponseBot</code>.
   * @alias module:model/CreateBotResponseBot
   */
  function CreateBotResponseBot() {
    _classCallCheck(this, CreateBotResponseBot);

    CreateBotResponseBot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateBotResponseBot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateBotResponseBot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBotResponseBot} obj Optional instance to populate.
     * @return {module:model/CreateBotResponseBot} The populated <code>CreateBotResponseBot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateBotResponseBot();

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

  return CreateBotResponseBot;
}();
/**
 * @member {String} bot_token
 */


CreateBotResponseBot.prototype['bot_token'] = undefined;
/**
 * @member {String} bot_profile_url
 */

CreateBotResponseBot.prototype['bot_profile_url'] = undefined;
/**
 * @member {String} bot_userid
 */

CreateBotResponseBot.prototype['bot_userid'] = undefined;
/**
 * @member {String} bot_nickname
 */

CreateBotResponseBot.prototype['bot_nickname'] = undefined;
/**
 * @member {String} bot_type
 */

CreateBotResponseBot.prototype['bot_type'] = undefined;
/**
 * @member {Object} bot_metadata
 */

CreateBotResponseBot.prototype['bot_metadata'] = undefined;
var _default = CreateBotResponseBot;
exports["default"] = _default;