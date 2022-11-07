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
 * The ViewDefaultChannelInvitationPreferenceResponse model module.
 * @module model/ViewDefaultChannelInvitationPreferenceResponse
 * @version 0.0.16
 */
var ViewDefaultChannelInvitationPreferenceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewDefaultChannelInvitationPreferenceResponse</code>.
   * @alias module:model/ViewDefaultChannelInvitationPreferenceResponse
   */
  function ViewDefaultChannelInvitationPreferenceResponse() {
    _classCallCheck(this, ViewDefaultChannelInvitationPreferenceResponse);
    ViewDefaultChannelInvitationPreferenceResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ViewDefaultChannelInvitationPreferenceResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ViewDefaultChannelInvitationPreferenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewDefaultChannelInvitationPreferenceResponse} obj Optional instance to populate.
     * @return {module:model/ViewDefaultChannelInvitationPreferenceResponse} The populated <code>ViewDefaultChannelInvitationPreferenceResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewDefaultChannelInvitationPreferenceResponse();
        if (data.hasOwnProperty('auto_accept')) {
          obj['auto_accept'] = _ApiClient["default"].convertToType(data['auto_accept'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return ViewDefaultChannelInvitationPreferenceResponse;
}();
/**
 * @member {Boolean} auto_accept
 */
ViewDefaultChannelInvitationPreferenceResponse.prototype['auto_accept'] = undefined;
var _default = ViewDefaultChannelInvitationPreferenceResponse;
exports["default"] = _default;