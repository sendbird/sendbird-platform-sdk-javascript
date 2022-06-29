"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdBaseChannel model module.
 * @module model/SendBirdBaseChannel
 * @version 1.0.3
 */
var SendBirdBaseChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdBaseChannel</code>.
   * @alias module:model/SendBirdBaseChannel
   */
  function SendBirdBaseChannel() {
    _classCallCheck(this, SendBirdBaseChannel);

    SendBirdBaseChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdBaseChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdBaseChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdBaseChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdBaseChannel} The populated <code>SendBirdBaseChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdBaseChannel();

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _SendBirdUser["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('is_ephemeral')) {
          obj['is_ephemeral'] = _ApiClient["default"].convertToType(data['is_ephemeral'], 'Boolean');
        }

        if (data.hasOwnProperty('is_frozen')) {
          obj['is_frozen'] = _ApiClient["default"].convertToType(data['is_frozen'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendBirdBaseChannel;
}();
/**
 * @member {String} cover_url
 */


SendBirdBaseChannel.prototype['cover_url'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdBaseChannel.prototype['created_at'] = undefined;
/**
 * @member {module:model/SendBirdUser} creator
 */

SendBirdBaseChannel.prototype['creator'] = undefined;
/**
 * @member {String} custom_type
 */

SendBirdBaseChannel.prototype['custom_type'] = undefined;
/**
 * @member {String} data
 */

SendBirdBaseChannel.prototype['data'] = undefined;
/**
 * @member {Boolean} is_ephemeral
 */

SendBirdBaseChannel.prototype['is_ephemeral'] = undefined;
/**
 * @member {Boolean} is_frozen
 */

SendBirdBaseChannel.prototype['is_frozen'] = undefined;
/**
 * @member {String} name
 */

SendBirdBaseChannel.prototype['name'] = undefined;
/**
 * @member {String} url
 */

SendBirdBaseChannel.prototype['url'] = undefined;
var _default = SendBirdBaseChannel;
exports["default"] = _default;