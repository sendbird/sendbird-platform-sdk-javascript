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
 * The OcListBannedUsersResponseBannedListInner model module.
 * @module model/OcListBannedUsersResponseBannedListInner
 * @version 0.0.13
 */
var OcListBannedUsersResponseBannedListInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OcListBannedUsersResponseBannedListInner</code>.
   * @alias module:model/OcListBannedUsersResponseBannedListInner
   */
  function OcListBannedUsersResponseBannedListInner() {
    _classCallCheck(this, OcListBannedUsersResponseBannedListInner);

    OcListBannedUsersResponseBannedListInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OcListBannedUsersResponseBannedListInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OcListBannedUsersResponseBannedListInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcListBannedUsersResponseBannedListInner} obj Optional instance to populate.
     * @return {module:model/OcListBannedUsersResponseBannedListInner} The populated <code>OcListBannedUsersResponseBannedListInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OcListBannedUsersResponseBannedListInner();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdUser["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OcListBannedUsersResponseBannedListInner;
}();
/**
 * @member {module:model/SendBirdUser} user
 */


OcListBannedUsersResponseBannedListInner.prototype['user'] = undefined;
/**
 * @member {Number} start_at
 */

OcListBannedUsersResponseBannedListInner.prototype['start_at'] = undefined;
/**
 * @member {Number} end_at
 */

OcListBannedUsersResponseBannedListInner.prototype['end_at'] = undefined;
/**
 * @member {String} description
 */

OcListBannedUsersResponseBannedListInner.prototype['description'] = undefined;
var _default = OcListBannedUsersResponseBannedListInner;
exports["default"] = _default;