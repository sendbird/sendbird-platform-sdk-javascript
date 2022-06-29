"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetStatisticsDailyResponseStatistics = _interopRequireDefault(require("./GetStatisticsDailyResponseStatistics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetStatisticsDailyResponse model module.
 * @module model/GetStatisticsDailyResponse
 * @version 1.0.3
 */
var GetStatisticsDailyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetStatisticsDailyResponse</code>.
   * @alias module:model/GetStatisticsDailyResponse
   */
  function GetStatisticsDailyResponse() {
    _classCallCheck(this, GetStatisticsDailyResponse);

    GetStatisticsDailyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetStatisticsDailyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetStatisticsDailyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStatisticsDailyResponse} obj Optional instance to populate.
     * @return {module:model/GetStatisticsDailyResponse} The populated <code>GetStatisticsDailyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetStatisticsDailyResponse();

        if (data.hasOwnProperty('statistics')) {
          obj['statistics'] = _ApiClient["default"].convertToType(data['statistics'], [_GetStatisticsDailyResponseStatistics["default"]]);
        }

        if (data.hasOwnProperty('week')) {
          obj['week'] = _ApiClient["default"].convertToType(data['week'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetStatisticsDailyResponse;
}();
/**
 * @member {Array.<module:model/GetStatisticsDailyResponseStatistics>} statistics
 */


GetStatisticsDailyResponse.prototype['statistics'] = undefined;
/**
 * @member {Number} week
 */

GetStatisticsDailyResponse.prototype['week'] = undefined;
var _default = GetStatisticsDailyResponse;
exports["default"] = _default;