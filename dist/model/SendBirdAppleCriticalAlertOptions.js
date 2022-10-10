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
 * The SendBirdAppleCriticalAlertOptions model module.
 * @module model/SendBirdAppleCriticalAlertOptions
 * @version 0.0.14
 */var SendBirdAppleCriticalAlertOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdAppleCriticalAlertOptions</code>.
   * @alias module:model/SendBirdAppleCriticalAlertOptions
   */
  function SendBirdAppleCriticalAlertOptions() {
    _classCallCheck(this, SendBirdAppleCriticalAlertOptions);
    SendBirdAppleCriticalAlertOptions.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdAppleCriticalAlertOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdAppleCriticalAlertOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdAppleCriticalAlertOptions} obj Optional instance to populate.
     * @return {module:model/SendBirdAppleCriticalAlertOptions} The populated <code>SendBirdAppleCriticalAlertOptions</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdAppleCriticalAlertOptions();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('volume')) {
          obj['volume'] = _ApiClient["default"].convertToType(data['volume'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return SendBirdAppleCriticalAlertOptions;
}(); /**
      * @member {String} name
      */
SendBirdAppleCriticalAlertOptions.prototype['name'] = undefined;

/**
 * @member {Number} volume
 */
SendBirdAppleCriticalAlertOptions.prototype['volume'] = undefined;
var _default = SendBirdAppleCriticalAlertOptions;
exports["default"] = _default;