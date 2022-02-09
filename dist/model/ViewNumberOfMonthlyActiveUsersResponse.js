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
 * The ViewNumberOfMonthlyActiveUsersResponse model module.
 * @module model/ViewNumberOfMonthlyActiveUsersResponse
 * @version 1.0.0
 */
var ViewNumberOfMonthlyActiveUsersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfMonthlyActiveUsersResponse</code>.
   * @alias module:model/ViewNumberOfMonthlyActiveUsersResponse
   */
  function ViewNumberOfMonthlyActiveUsersResponse() {
    _classCallCheck(this, ViewNumberOfMonthlyActiveUsersResponse);

    ViewNumberOfMonthlyActiveUsersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewNumberOfMonthlyActiveUsersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewNumberOfMonthlyActiveUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfMonthlyActiveUsersResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfMonthlyActiveUsersResponse} The populated <code>ViewNumberOfMonthlyActiveUsersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfMonthlyActiveUsersResponse();

        if (data.hasOwnProperty('mau')) {
          obj['mau'] = _ApiClient["default"].convertToType(data['mau'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ViewNumberOfMonthlyActiveUsersResponse;
}();
/**
 * @member {Number} mau
 */


ViewNumberOfMonthlyActiveUsersResponse.prototype['mau'] = undefined;
var _default = ViewNumberOfMonthlyActiveUsersResponse;
exports["default"] = _default;