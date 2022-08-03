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
 * The SendBirdRestrictionInfo model module.
 * @module model/SendBirdRestrictionInfo
 * @version 1.0.7
 */
var SendBirdRestrictionInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdRestrictionInfo</code>.
   * @alias module:model/SendBirdRestrictionInfo
   */
  function SendBirdRestrictionInfo() {
    _classCallCheck(this, SendBirdRestrictionInfo);

    SendBirdRestrictionInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdRestrictionInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdRestrictionInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdRestrictionInfo} obj Optional instance to populate.
     * @return {module:model/SendBirdRestrictionInfo} The populated <code>SendBirdRestrictionInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdRestrictionInfo();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('restriction_type')) {
          obj['restriction_type'] = _ApiClient["default"].convertToType(data['restriction_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendBirdRestrictionInfo;
}();
/**
 * @member {String} description
 */


SendBirdRestrictionInfo.prototype['description'] = undefined;
/**
 * @member {Number} end_at
 */

SendBirdRestrictionInfo.prototype['end_at'] = undefined;
/**
 * @member {module:model/SendBirdRestrictionInfo.RestrictionTypeEnum} restriction_type
 */

SendBirdRestrictionInfo.prototype['restriction_type'] = undefined;
/**
 * Allowed values for the <code>restriction_type</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdRestrictionInfo['RestrictionTypeEnum'] = {
  /**
   * value: "banned"
   * @const
   */
  "banned": "banned",

  /**
   * value: "muted"
   * @const
   */
  "muted": "muted"
};
var _default = SendBirdRestrictionInfo;
exports["default"] = _default;