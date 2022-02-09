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
 * The RevokeSecondaryApiTokenByTokenResponse model module.
 * @module model/RevokeSecondaryApiTokenByTokenResponse
 * @version 1.0.0
 */
var RevokeSecondaryApiTokenByTokenResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RevokeSecondaryApiTokenByTokenResponse</code>.
   * @alias module:model/RevokeSecondaryApiTokenByTokenResponse
   */
  function RevokeSecondaryApiTokenByTokenResponse() {
    _classCallCheck(this, RevokeSecondaryApiTokenByTokenResponse);

    RevokeSecondaryApiTokenByTokenResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevokeSecondaryApiTokenByTokenResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RevokeSecondaryApiTokenByTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeSecondaryApiTokenByTokenResponse} obj Optional instance to populate.
     * @return {module:model/RevokeSecondaryApiTokenByTokenResponse} The populated <code>RevokeSecondaryApiTokenByTokenResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevokeSecondaryApiTokenByTokenResponse();

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

  return RevokeSecondaryApiTokenByTokenResponse;
}();
/**
 * @member {String} token
 */


RevokeSecondaryApiTokenByTokenResponse.prototype['token'] = undefined;
/**
 * @member {Number} created_at
 */

RevokeSecondaryApiTokenByTokenResponse.prototype['created_at'] = undefined;
var _default = RevokeSecondaryApiTokenByTokenResponse;
exports["default"] = _default;