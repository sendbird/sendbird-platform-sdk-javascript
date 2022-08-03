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
 * The ListMutedChannelsResponse model module.
 * @module model/ListMutedChannelsResponse
 * @version 1.0.7
 */
var ListMutedChannelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMutedChannelsResponse</code>.
   * @alias module:model/ListMutedChannelsResponse
   */
  function ListMutedChannelsResponse() {
    _classCallCheck(this, ListMutedChannelsResponse);

    ListMutedChannelsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListMutedChannelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListMutedChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMutedChannelsResponse} obj Optional instance to populate.
     * @return {module:model/ListMutedChannelsResponse} The populated <code>ListMutedChannelsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMutedChannelsResponse();

        if (data.hasOwnProperty('muted_channels')) {
          obj['muted_channels'] = _ApiClient["default"].convertToType(data['muted_channels'], [_SendBirdChannelResponse["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListMutedChannelsResponse;
}();
/**
 * @member {Array.<module:model/SendBirdChannelResponse>} muted_channels
 */


ListMutedChannelsResponse.prototype['muted_channels'] = undefined;
/**
 * @member {String} next
 */

ListMutedChannelsResponse.prototype['next'] = undefined;
var _default = ListMutedChannelsResponse;
exports["default"] = _default;