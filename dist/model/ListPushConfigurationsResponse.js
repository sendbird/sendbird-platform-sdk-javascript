"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListPushConfigurationsResponsePushConfigurationsInner = _interopRequireDefault(require("./ListPushConfigurationsResponsePushConfigurationsInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListPushConfigurationsResponse model module.
 * @module model/ListPushConfigurationsResponse
 * @version 1.0.7
 */
var ListPushConfigurationsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPushConfigurationsResponse</code>.
   * @alias module:model/ListPushConfigurationsResponse
   */
  function ListPushConfigurationsResponse() {
    _classCallCheck(this, ListPushConfigurationsResponse);

    ListPushConfigurationsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListPushConfigurationsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListPushConfigurationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushConfigurationsResponse} obj Optional instance to populate.
     * @return {module:model/ListPushConfigurationsResponse} The populated <code>ListPushConfigurationsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPushConfigurationsResponse();

        if (data.hasOwnProperty('push_configurations')) {
          obj['push_configurations'] = _ApiClient["default"].convertToType(data['push_configurations'], [_ListPushConfigurationsResponsePushConfigurationsInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListPushConfigurationsResponse;
}();
/**
 * @member {Array.<module:model/ListPushConfigurationsResponsePushConfigurationsInner>} push_configurations
 */


ListPushConfigurationsResponse.prototype['push_configurations'] = undefined;
var _default = ListPushConfigurationsResponse;
exports["default"] = _default;