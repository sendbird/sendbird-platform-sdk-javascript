"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdGroupChannel = _interopRequireDefault(require("./SendBirdGroupChannel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdGroupChannelCollection model module.
 * @module model/SendBirdGroupChannelCollection
 * @version 1.0.7
 */
var SendBirdGroupChannelCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannelCollection</code>.
   * @alias module:model/SendBirdGroupChannelCollection
   */
  function SendBirdGroupChannelCollection() {
    _classCallCheck(this, SendBirdGroupChannelCollection);

    SendBirdGroupChannelCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdGroupChannelCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdGroupChannelCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelCollection} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelCollection} The populated <code>SendBirdGroupChannelCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannelCollection();

        if (data.hasOwnProperty('channel_list')) {
          obj['channel_list'] = _ApiClient["default"].convertToType(data['channel_list'], [_SendBirdGroupChannel["default"]]);
        }

        if (data.hasOwnProperty('has_more')) {
          obj['has_more'] = _ApiClient["default"].convertToType(data['has_more'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SendBirdGroupChannelCollection;
}();
/**
 * @member {Array.<module:model/SendBirdGroupChannel>} channel_list
 */


SendBirdGroupChannelCollection.prototype['channel_list'] = undefined;
/**
 * @member {Boolean} has_more
 */

SendBirdGroupChannelCollection.prototype['has_more'] = undefined;
var _default = SendBirdGroupChannelCollection;
exports["default"] = _default;