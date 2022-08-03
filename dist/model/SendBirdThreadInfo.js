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
 * The SendBirdThreadInfo model module.
 * @module model/SendBirdThreadInfo
 * @version 1.0.7
 */
var SendBirdThreadInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdThreadInfo</code>.
   * @alias module:model/SendBirdThreadInfo
   */
  function SendBirdThreadInfo() {
    _classCallCheck(this, SendBirdThreadInfo);

    SendBirdThreadInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdThreadInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdThreadInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdThreadInfo} obj Optional instance to populate.
     * @return {module:model/SendBirdThreadInfo} The populated <code>SendBirdThreadInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdThreadInfo();

        if (data.hasOwnProperty('last_replied_at')) {
          obj['last_replied_at'] = _ApiClient["default"].convertToType(data['last_replied_at'], 'Number');
        }

        if (data.hasOwnProperty('most_replied_users')) {
          obj['most_replied_users'] = _ApiClient["default"].convertToType(data['most_replied_users'], [_SendBirdUser["default"]]);
        }

        if (data.hasOwnProperty('reply_count')) {
          obj['reply_count'] = _ApiClient["default"].convertToType(data['reply_count'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdThreadInfo;
}();
/**
 * @member {Number} last_replied_at
 */


SendBirdThreadInfo.prototype['last_replied_at'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} most_replied_users
 */

SendBirdThreadInfo.prototype['most_replied_users'] = undefined;
/**
 * @member {Number} reply_count
 */

SendBirdThreadInfo.prototype['reply_count'] = undefined;
/**
 * @member {Number} updated_at
 */

SendBirdThreadInfo.prototype['updated_at'] = undefined;
var _default = SendBirdThreadInfo;
exports["default"] = _default;