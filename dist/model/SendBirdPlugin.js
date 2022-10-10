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
 * The SendBirdPlugin model module.
 * @module model/SendBirdPlugin
 * @version 0.0.14
 */var SendBirdPlugin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdPlugin</code>.
   * @alias module:model/SendBirdPlugin
   */
  function SendBirdPlugin() {
    _classCallCheck(this, SendBirdPlugin);
    SendBirdPlugin.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SendBirdPlugin, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SendBirdPlugin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPlugin} obj Optional instance to populate.
     * @return {module:model/SendBirdPlugin} The populated <code>SendBirdPlugin</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdPlugin();
        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], Object);
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('vendor')) {
          obj['vendor'] = _ApiClient["default"].convertToType(data['vendor'], 'String');
        }
      }
      return obj;
    }
  }]);
  return SendBirdPlugin;
}(); /**
      * @member {Object} detail
      */
SendBirdPlugin.prototype['detail'] = undefined;

/**
 * @member {String} type
 */
SendBirdPlugin.prototype['type'] = undefined;

/**
 * @member {String} vendor
 */
SendBirdPlugin.prototype['vendor'] = undefined;
var _default = SendBirdPlugin;
exports["default"] = _default;