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
 * The JoinChannelsResponse model module.
 * @module model/JoinChannelsResponse
 * @version 0.0.13
 */
var JoinChannelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JoinChannelsResponse</code>.
   * @alias module:model/JoinChannelsResponse
   */
  function JoinChannelsResponse() {
    _classCallCheck(this, JoinChannelsResponse);

    JoinChannelsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JoinChannelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JoinChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JoinChannelsResponse} obj Optional instance to populate.
     * @return {module:model/JoinChannelsResponse} The populated <code>JoinChannelsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JoinChannelsResponse();

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], [_SendBirdGroupChannel["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JoinChannelsResponse;
}();
/**
 * @member {Array.<module:model/SendBirdGroupChannel>} channels
 */


JoinChannelsResponse.prototype['channels'] = undefined;
var _default = JoinChannelsResponse;
exports["default"] = _default;