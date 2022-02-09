"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdChannelResponse = _interopRequireDefault(require("./SendBirdChannelResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20022BannedChannels model module.
 * @module model/InlineResponse20022BannedChannels
 * @version 1.0.0
 */
var InlineResponse20022BannedChannels = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20022BannedChannels</code>.
   * @alias module:model/InlineResponse20022BannedChannels
   */
  function InlineResponse20022BannedChannels() {
    _classCallCheck(this, InlineResponse20022BannedChannels);

    InlineResponse20022BannedChannels.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20022BannedChannels, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20022BannedChannels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022BannedChannels} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022BannedChannels} The populated <code>InlineResponse20022BannedChannels</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20022BannedChannels();

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _SendBirdChannelResponse["default"].constructFromObject(data['channel']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20022BannedChannels;
}();
/**
 * @member {Number} start_at
 */


InlineResponse20022BannedChannels.prototype['start_at'] = undefined;
/**
 * @member {Number} end_at
 */

InlineResponse20022BannedChannels.prototype['end_at'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20022BannedChannels.prototype['description'] = undefined;
/**
 * @member {module:model/SendBirdChannelResponse} channel
 */

InlineResponse20022BannedChannels.prototype['channel'] = undefined;
var _default = InlineResponse20022BannedChannels;
exports["default"] = _default;