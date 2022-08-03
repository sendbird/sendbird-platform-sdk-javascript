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
 * The SendBirdGroupChannelSmsFallback model module.
 * @module model/SendBirdGroupChannelSmsFallback
 * @version 1.0.7
 */
var SendBirdGroupChannelSmsFallback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdGroupChannelSmsFallback</code>.
   * @alias module:model/SendBirdGroupChannelSmsFallback
   */
  function SendBirdGroupChannelSmsFallback() {
    _classCallCheck(this, SendBirdGroupChannelSmsFallback);

    SendBirdGroupChannelSmsFallback.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdGroupChannelSmsFallback, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdGroupChannelSmsFallback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelSmsFallback} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelSmsFallback} The populated <code>SendBirdGroupChannelSmsFallback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdGroupChannelSmsFallback();

        if (data.hasOwnProperty('wait_seconds')) {
          obj['wait_seconds'] = _ApiClient["default"].convertToType(data['wait_seconds'], 'Number');
        }

        if (data.hasOwnProperty('exclude_user_ids')) {
          obj['exclude_user_ids'] = _ApiClient["default"].convertToType(data['exclude_user_ids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return SendBirdGroupChannelSmsFallback;
}();
/**
 * @member {Number} wait_seconds
 */


SendBirdGroupChannelSmsFallback.prototype['wait_seconds'] = undefined;
/**
 * @member {Array.<String>} exclude_user_ids
 */

SendBirdGroupChannelSmsFallback.prototype['exclude_user_ids'] = undefined;
var _default = SendBirdGroupChannelSmsFallback;
exports["default"] = _default;