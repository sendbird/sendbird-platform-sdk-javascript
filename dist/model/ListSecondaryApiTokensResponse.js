"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListSecondaryApiTokensResponseApiTokensInner = _interopRequireDefault(require("./ListSecondaryApiTokensResponseApiTokensInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListSecondaryApiTokensResponse model module.
 * @module model/ListSecondaryApiTokensResponse
 * @version 1.0.7
 */
var ListSecondaryApiTokensResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSecondaryApiTokensResponse</code>.
   * @alias module:model/ListSecondaryApiTokensResponse
   */
  function ListSecondaryApiTokensResponse() {
    _classCallCheck(this, ListSecondaryApiTokensResponse);

    ListSecondaryApiTokensResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSecondaryApiTokensResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListSecondaryApiTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSecondaryApiTokensResponse} obj Optional instance to populate.
     * @return {module:model/ListSecondaryApiTokensResponse} The populated <code>ListSecondaryApiTokensResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSecondaryApiTokensResponse();

        if (data.hasOwnProperty('api_tokens')) {
          obj['api_tokens'] = _ApiClient["default"].convertToType(data['api_tokens'], [_ListSecondaryApiTokensResponseApiTokensInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListSecondaryApiTokensResponse;
}();
/**
 * @member {Array.<module:model/ListSecondaryApiTokensResponseApiTokensInner>} api_tokens
 */


ListSecondaryApiTokensResponse.prototype['api_tokens'] = undefined;
var _default = ListSecondaryApiTokensResponse;
exports["default"] = _default;