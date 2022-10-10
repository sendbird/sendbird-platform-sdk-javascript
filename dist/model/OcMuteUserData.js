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
 * The OcMuteUserData model module.
 * @module model/OcMuteUserData
 * @version 0.0.13
 */
var OcMuteUserData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcMuteUserData</code>.
   * @alias module:model/OcMuteUserData
   * @param userId {String} Specifies the ID of the target user to mute.
   * @param seconds {Number} Specifies the duration of mute status. If set to -1, the user will be muted permanently (10 years, technically). (Default: -1)
   * @param description {String} Specifies a reason for the muting.
   */
  function OcMuteUserData(userId, seconds, description) {
    _classCallCheck(this, OcMuteUserData);

    OcMuteUserData.initialize(this, userId, seconds, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OcMuteUserData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, seconds, description) {
      obj['user_id'] = userId;
      obj['seconds'] = seconds;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>OcMuteUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcMuteUserData} obj Optional instance to populate.
     * @return {module:model/OcMuteUserData} The populated <code>OcMuteUserData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcMuteUserData();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('seconds')) {
          obj['seconds'] = _ApiClient["default"].convertToType(data['seconds'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OcMuteUserData;
}();
/**
 * Specifies the ID of the target user to mute.
 * @member {String} user_id
 */


OcMuteUserData.prototype['user_id'] = undefined;
/**
 * Specifies the duration of mute status. If set to -1, the user will be muted permanently (10 years, technically). (Default: -1)
 * @member {Number} seconds
 */

OcMuteUserData.prototype['seconds'] = undefined;
/**
 * Specifies a reason for the muting.
 * @member {String} description
 */

OcMuteUserData.prototype['description'] = undefined;
var _default = OcMuteUserData;
exports["default"] = _default;