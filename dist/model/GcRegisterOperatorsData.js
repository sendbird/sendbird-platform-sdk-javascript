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
 * The GcRegisterOperatorsData model module.
 * @module model/GcRegisterOperatorsData
 * @version 1.0.3
 */
var GcRegisterOperatorsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcRegisterOperatorsData</code>.
   * @alias module:model/GcRegisterOperatorsData
   * @param channelUrl {String} Specifies the URL of the channel to register operators to.
   * @param operatorIds {Array.<Number>} Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
   */
  function GcRegisterOperatorsData(channelUrl, operatorIds) {
    _classCallCheck(this, GcRegisterOperatorsData);

    GcRegisterOperatorsData.initialize(this, channelUrl, operatorIds);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcRegisterOperatorsData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, operatorIds) {
      obj['channel_url'] = channelUrl;
      obj['operator_ids'] = operatorIds;
    }
    /**
     * Constructs a <code>GcRegisterOperatorsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcRegisterOperatorsData} obj Optional instance to populate.
     * @return {module:model/GcRegisterOperatorsData} The populated <code>GcRegisterOperatorsData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcRegisterOperatorsData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('operator_ids')) {
          obj['operator_ids'] = _ApiClient["default"].convertToType(data['operator_ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return GcRegisterOperatorsData;
}();
/**
 * Specifies the URL of the channel to register operators to.
 * @member {String} channel_url
 */


GcRegisterOperatorsData.prototype['channel_url'] = undefined;
/**
 * Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
 * @member {Array.<Number>} operator_ids
 */

GcRegisterOperatorsData.prototype['operator_ids'] = undefined;
var _default = GcRegisterOperatorsData;
exports["default"] = _default;