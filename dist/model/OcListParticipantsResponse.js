"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OcListParticipantsResponse model module.
 * @module model/OcListParticipantsResponse
 * @version 0.0.14
 */var OcListParticipantsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcListParticipantsResponse</code>.
   * @alias module:model/OcListParticipantsResponse
   */
  function OcListParticipantsResponse() {
    _classCallCheck(this, OcListParticipantsResponse);
    OcListParticipantsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(OcListParticipantsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>OcListParticipantsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcListParticipantsResponse} obj Optional instance to populate.
     * @return {module:model/OcListParticipantsResponse} The populated <code>OcListParticipantsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcListParticipantsResponse();
        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_SendBirdUser["default"]]);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return OcListParticipantsResponse;
}(); /**
      * @member {Array.<module:model/SendBirdUser>} participants
      */
OcListParticipantsResponse.prototype['participants'] = undefined;

/**
 * @member {String} next
 */
OcListParticipantsResponse.prototype['next'] = undefined;
var _default = OcListParticipantsResponse;
exports["default"] = _default;