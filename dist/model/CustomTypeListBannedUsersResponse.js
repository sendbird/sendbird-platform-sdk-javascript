"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OcListBannedUsersResponseBannedListInner = _interopRequireDefault(require("./OcListBannedUsersResponseBannedListInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomTypeListBannedUsersResponse model module.
 * @module model/CustomTypeListBannedUsersResponse
 * @version 0.0.13
 */
var CustomTypeListBannedUsersResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomTypeListBannedUsersResponse</code>.
   * @alias module:model/CustomTypeListBannedUsersResponse
   */
  function CustomTypeListBannedUsersResponse() {
    _classCallCheck(this, CustomTypeListBannedUsersResponse);

    CustomTypeListBannedUsersResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomTypeListBannedUsersResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomTypeListBannedUsersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomTypeListBannedUsersResponse} obj Optional instance to populate.
     * @return {module:model/CustomTypeListBannedUsersResponse} The populated <code>CustomTypeListBannedUsersResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomTypeListBannedUsersResponse();

        if (data.hasOwnProperty('banned_list')) {
          obj['banned_list'] = _ApiClient["default"].convertToType(data['banned_list'], [_OcListBannedUsersResponseBannedListInner["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomTypeListBannedUsersResponse;
}();
/**
 * @member {Array.<module:model/OcListBannedUsersResponseBannedListInner>} banned_list
 */


CustomTypeListBannedUsersResponse.prototype['banned_list'] = undefined;
/**
 * @member {String} next
 */

CustomTypeListBannedUsersResponse.prototype['next'] = undefined;
var _default = CustomTypeListBannedUsersResponse;
exports["default"] = _default;