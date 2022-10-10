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
 * The ViewSecondaryApiTokenByTokenResponse model module.
 * @module model/ViewSecondaryApiTokenByTokenResponse
 * @version 0.0.13
 */
var ViewSecondaryApiTokenByTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewSecondaryApiTokenByTokenResponse</code>.
   * @alias module:model/ViewSecondaryApiTokenByTokenResponse
   */
  function ViewSecondaryApiTokenByTokenResponse() {
    _classCallCheck(this, ViewSecondaryApiTokenByTokenResponse);

    ViewSecondaryApiTokenByTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewSecondaryApiTokenByTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewSecondaryApiTokenByTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewSecondaryApiTokenByTokenResponse} obj Optional instance to populate.
     * @return {module:model/ViewSecondaryApiTokenByTokenResponse} The populated <code>ViewSecondaryApiTokenByTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewSecondaryApiTokenByTokenResponse();

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ViewSecondaryApiTokenByTokenResponse;
}();
/**
 * @member {String} token
 */


ViewSecondaryApiTokenByTokenResponse.prototype['token'] = undefined;
/**
 * @member {Number} created_at
 */

ViewSecondaryApiTokenByTokenResponse.prototype['created_at'] = undefined;
var _default = ViewSecondaryApiTokenByTokenResponse;
exports["default"] = _default;