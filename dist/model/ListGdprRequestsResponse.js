"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListGdprRequestsResponseRequestsInner = _interopRequireDefault(require("./ListGdprRequestsResponseRequestsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListGdprRequestsResponse model module.
 * @module model/ListGdprRequestsResponse
 * @version 0.0.16
 */
var ListGdprRequestsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListGdprRequestsResponse</code>.
   * @alias module:model/ListGdprRequestsResponse
   */
  function ListGdprRequestsResponse() {
    _classCallCheck(this, ListGdprRequestsResponse);
    ListGdprRequestsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListGdprRequestsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListGdprRequestsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListGdprRequestsResponse} obj Optional instance to populate.
     * @return {module:model/ListGdprRequestsResponse} The populated <code>ListGdprRequestsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListGdprRequestsResponse();
        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], [_ListGdprRequestsResponseRequestsInner["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListGdprRequestsResponse;
}();
/**
 * @member {Array.<module:model/ListGdprRequestsResponseRequestsInner>} requests
 */
ListGdprRequestsResponse.prototype['requests'] = undefined;

/**
 * @member {String} next
 */
ListGdprRequestsResponse.prototype['next'] = undefined;
var _default = ListGdprRequestsResponse;
exports["default"] = _default;