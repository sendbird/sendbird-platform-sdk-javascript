"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _RetrieveListOfSubscribedEventsResponseWebhook = _interopRequireDefault(require("./RetrieveListOfSubscribedEventsResponseWebhook"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The RetrieveListOfSubscribedEventsResponse model module.
 * @module model/RetrieveListOfSubscribedEventsResponse
 * @version 0.0.16
 */
var RetrieveListOfSubscribedEventsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RetrieveListOfSubscribedEventsResponse</code>.
   * @alias module:model/RetrieveListOfSubscribedEventsResponse
   */
  function RetrieveListOfSubscribedEventsResponse() {
    _classCallCheck(this, RetrieveListOfSubscribedEventsResponse);
    RetrieveListOfSubscribedEventsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RetrieveListOfSubscribedEventsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>RetrieveListOfSubscribedEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RetrieveListOfSubscribedEventsResponse} obj Optional instance to populate.
     * @return {module:model/RetrieveListOfSubscribedEventsResponse} The populated <code>RetrieveListOfSubscribedEventsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RetrieveListOfSubscribedEventsResponse();
        if (data.hasOwnProperty('webhook')) {
          obj['webhook'] = _RetrieveListOfSubscribedEventsResponseWebhook["default"].constructFromObject(data['webhook']);
        }
      }
      return obj;
    }
  }]);
  return RetrieveListOfSubscribedEventsResponse;
}();
/**
 * @member {module:model/RetrieveListOfSubscribedEventsResponseWebhook} webhook
 */
RetrieveListOfSubscribedEventsResponse.prototype['webhook'] = undefined;
var _default = RetrieveListOfSubscribedEventsResponse;
exports["default"] = _default;