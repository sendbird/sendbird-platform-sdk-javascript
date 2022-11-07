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
 * The OcRegisterOperatorsData model module.
 * @module model/OcRegisterOperatorsData
 * @version 0.0.16
 */
var OcRegisterOperatorsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcRegisterOperatorsData</code>.
   * @alias module:model/OcRegisterOperatorsData
   * @param channelUrl {String} Specifies the URL of the channel to register operators to.
   * @param operatorIds {Array.<String>} Specifies an array of one or more IDs of users to register as operators of the channel. The maximum allowed number of operators per channel is 100.
   */
  function OcRegisterOperatorsData(channelUrl, operatorIds) {
    _classCallCheck(this, OcRegisterOperatorsData);
    OcRegisterOperatorsData.initialize(this, channelUrl, operatorIds);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OcRegisterOperatorsData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, operatorIds) {
      obj['channel_url'] = channelUrl;
      obj['operator_ids'] = operatorIds;
    }

    /**
     * Constructs a <code>OcRegisterOperatorsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcRegisterOperatorsData} obj Optional instance to populate.
     * @return {module:model/OcRegisterOperatorsData} The populated <code>OcRegisterOperatorsData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcRegisterOperatorsData();
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('operator_ids')) {
          obj['operator_ids'] = _ApiClient["default"].convertToType(data['operator_ids'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return OcRegisterOperatorsData;
}();
/**
 * Specifies the URL of the channel to register operators to.
 * @member {String} channel_url
 */
OcRegisterOperatorsData.prototype['channel_url'] = undefined;

/**
 * Specifies an array of one or more IDs of users to register as operators of the channel. The maximum allowed number of operators per channel is 100.
 * @member {Array.<String>} operator_ids
 */
OcRegisterOperatorsData.prototype['operator_ids'] = undefined;
var _default = OcRegisterOperatorsData;
exports["default"] = _default;