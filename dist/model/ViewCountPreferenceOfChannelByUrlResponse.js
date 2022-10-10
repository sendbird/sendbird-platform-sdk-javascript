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
 * The ViewCountPreferenceOfChannelByUrlResponse model module.
 * @module model/ViewCountPreferenceOfChannelByUrlResponse
 * @version 0.0.13
 */
var ViewCountPreferenceOfChannelByUrlResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewCountPreferenceOfChannelByUrlResponse</code>.
   * @alias module:model/ViewCountPreferenceOfChannelByUrlResponse
   */
  function ViewCountPreferenceOfChannelByUrlResponse() {
    _classCallCheck(this, ViewCountPreferenceOfChannelByUrlResponse);

    ViewCountPreferenceOfChannelByUrlResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewCountPreferenceOfChannelByUrlResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewCountPreferenceOfChannelByUrlResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewCountPreferenceOfChannelByUrlResponse} obj Optional instance to populate.
     * @return {module:model/ViewCountPreferenceOfChannelByUrlResponse} The populated <code>ViewCountPreferenceOfChannelByUrlResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewCountPreferenceOfChannelByUrlResponse();

        if (data.hasOwnProperty('count_preference')) {
          obj['count_preference'] = _ApiClient["default"].convertToType(data['count_preference'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ViewCountPreferenceOfChannelByUrlResponse;
}();
/**
 * @member {String} count_preference
 */


ViewCountPreferenceOfChannelByUrlResponse.prototype['count_preference'] = undefined;
var _default = ViewCountPreferenceOfChannelByUrlResponse;
exports["default"] = _default;