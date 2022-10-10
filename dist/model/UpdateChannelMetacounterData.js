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
 * The UpdateChannelMetacounterData model module.
 * @module model/UpdateChannelMetacounterData
 * @version 0.0.14
 */var UpdateChannelMetacounterData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateChannelMetacounterData</code>.
   * @alias module:model/UpdateChannelMetacounterData
   * @param metacounter {String} Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be an integer. This property can have up to 5 items.
   */
  function UpdateChannelMetacounterData(metacounter) {
    _classCallCheck(this, UpdateChannelMetacounterData);
    UpdateChannelMetacounterData.initialize(this, metacounter);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdateChannelMetacounterData, null, [{
    key: "initialize",
    value: function initialize(obj, metacounter) {
      obj['metacounter'] = metacounter;
    }

    /**
     * Constructs a <code>UpdateChannelMetacounterData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateChannelMetacounterData} obj Optional instance to populate.
     * @return {module:model/UpdateChannelMetacounterData} The populated <code>UpdateChannelMetacounterData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateChannelMetacounterData();
        if (data.hasOwnProperty('metacounter')) {
          obj['metacounter'] = _ApiClient["default"].convertToType(data['metacounter'], 'String');
        }
        if (data.hasOwnProperty('mode')) {
          obj['mode'] = _ApiClient["default"].convertToType(data['mode'], 'String');
        }
        if (data.hasOwnProperty('upsert')) {
          obj['upsert'] = _ApiClient["default"].convertToType(data['upsert'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return UpdateChannelMetacounterData;
}(); /**
      * Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be an integer. This property can have up to 5 items.
      * @member {String} metacounter
      */
UpdateChannelMetacounterData.prototype['metacounter'] = undefined;

/**
 * Specifies how to calculate the item value of the metacounter. Acceptable values are increase, decrease, and set. If set to increase, increments the item value of the metacounter by the value specified in the metacounter property, while decrease decrements. set sets the item value to the specified value exactly. (Default: set)
 * @member {String} mode
 */
UpdateChannelMetacounterData.prototype['mode'] = undefined;

/**
 * @member {Boolean} upsert
 */
UpdateChannelMetacounterData.prototype['upsert'] = undefined;
var _default = UpdateChannelMetacounterData;
exports["default"] = _default;