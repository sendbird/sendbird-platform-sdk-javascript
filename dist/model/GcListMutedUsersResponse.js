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
 * The GcListMutedUsersResponse model module.
 * @module model/GcListMutedUsersResponse
 * @version 0.0.13
 */
var GcListMutedUsersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcListMutedUsersResponse</code>.
   * @alias module:model/GcListMutedUsersResponse
   */
  function GcListMutedUsersResponse() {
    _classCallCheck(this, GcListMutedUsersResponse);

    GcListMutedUsersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcListMutedUsersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GcListMutedUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcListMutedUsersResponse} obj Optional instance to populate.
     * @return {module:model/GcListMutedUsersResponse} The populated <code>GcListMutedUsersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcListMutedUsersResponse();

        if (data.hasOwnProperty('muted_list')) {
          obj['muted_list'] = _ApiClient["default"].convertToType(data['muted_list'], [_SendBirdUser["default"]]);
        }

        if (data.hasOwnProperty('total_mute_count')) {
          obj['total_mute_count'] = _ApiClient["default"].convertToType(data['total_mute_count'], 'Number');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GcListMutedUsersResponse;
}();
/**
 * @member {Array.<module:model/SendBirdUser>} muted_list
 */


GcListMutedUsersResponse.prototype['muted_list'] = undefined;
/**
 * @member {Number} total_mute_count
 */

GcListMutedUsersResponse.prototype['total_mute_count'] = undefined;
/**
 * @member {String} next
 */

GcListMutedUsersResponse.prototype['next'] = undefined;
var _default = GcListMutedUsersResponse;
exports["default"] = _default;