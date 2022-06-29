"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UpdateAnnouncementByIdResponseMessage = _interopRequireDefault(require("./UpdateAnnouncementByIdResponseMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UpdateAnnouncementByIdResponse model module.
 * @module model/UpdateAnnouncementByIdResponse
 * @version 1.0.3
 */
var UpdateAnnouncementByIdResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateAnnouncementByIdResponse</code>.
   * @alias module:model/UpdateAnnouncementByIdResponse
   */
  function UpdateAnnouncementByIdResponse() {
    _classCallCheck(this, UpdateAnnouncementByIdResponse);

    UpdateAnnouncementByIdResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateAnnouncementByIdResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateAnnouncementByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAnnouncementByIdResponse} obj Optional instance to populate.
     * @return {module:model/UpdateAnnouncementByIdResponse} The populated <code>UpdateAnnouncementByIdResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateAnnouncementByIdResponse();

        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }

        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _UpdateAnnouncementByIdResponseMessage["default"].constructFromObject(data['message']);
        }
      }

      return obj;
    }
  }]);

  return UpdateAnnouncementByIdResponse;
}();
/**
 * @member {String} unique_id
 */


UpdateAnnouncementByIdResponse.prototype['unique_id'] = undefined;
/**
 * @member {String} announcement_group
 */

UpdateAnnouncementByIdResponse.prototype['announcement_group'] = undefined;
/**
 * @member {module:model/UpdateAnnouncementByIdResponseMessage} message
 */

UpdateAnnouncementByIdResponse.prototype['message'] = undefined;
var _default = UpdateAnnouncementByIdResponse;
exports["default"] = _default;