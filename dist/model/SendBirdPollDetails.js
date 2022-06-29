"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdPollOption = _interopRequireDefault(require("./SendBirdPollOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdPollDetails model module.
 * @module model/SendBirdPollDetails
 * @version 1.0.3
 */
var SendBirdPollDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdPollDetails</code>.
   * @alias module:model/SendBirdPollDetails
   */
  function SendBirdPollDetails() {
    _classCallCheck(this, SendBirdPollDetails);

    SendBirdPollDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdPollDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdPollDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPollDetails} obj Optional instance to populate.
     * @return {module:model/SendBirdPollDetails} The populated <code>SendBirdPollDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdPollDetails();

        if (data.hasOwnProperty('allow_multiple_votes')) {
          obj['allow_multiple_votes'] = _ApiClient["default"].convertToType(data['allow_multiple_votes'], 'Boolean');
        }

        if (data.hasOwnProperty('allow_user_suggestion')) {
          obj['allow_user_suggestion'] = _ApiClient["default"].convertToType(data['allow_user_suggestion'], 'Boolean');
        }

        if (data.hasOwnProperty('close_at')) {
          obj['close_at'] = _ApiClient["default"].convertToType(data['close_at'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _ApiClient["default"].convertToType(data['created_by'], 'String');
        }

        if (data.hasOwnProperty('is_anonymous')) {
          obj['is_anonymous'] = _ApiClient["default"].convertToType(data['is_anonymous'], 'Boolean');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_SendBirdPollOption["default"]]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }

        if (data.hasOwnProperty('voter_count')) {
          obj['voter_count'] = _ApiClient["default"].convertToType(data['voter_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdPollDetails;
}();
/**
 * @member {Boolean} allow_multiple_votes
 */


SendBirdPollDetails.prototype['allow_multiple_votes'] = undefined;
/**
 * @member {Boolean} allow_user_suggestion
 */

SendBirdPollDetails.prototype['allow_user_suggestion'] = undefined;
/**
 * @member {Number} close_at
 */

SendBirdPollDetails.prototype['close_at'] = undefined;
/**
 * @member {Number} created_at
 */

SendBirdPollDetails.prototype['created_at'] = undefined;
/**
 * @member {String} created_by
 */

SendBirdPollDetails.prototype['created_by'] = undefined;
/**
 * @member {Boolean} is_anonymous
 */

SendBirdPollDetails.prototype['is_anonymous'] = undefined;
/**
 * @member {Array.<module:model/SendBirdPollOption>} options
 */

SendBirdPollDetails.prototype['options'] = undefined;
/**
 * @member {module:model/SendBirdPollDetails.StatusEnum} status
 */

SendBirdPollDetails.prototype['status'] = undefined;
/**
 * @member {Number} updated_at
 */

SendBirdPollDetails.prototype['updated_at'] = undefined;
/**
 * @member {Number} voter_count
 */

SendBirdPollDetails.prototype['voter_count'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

SendBirdPollDetails['StatusEnum'] = {
  /**
   * value: "closed"
   * @const
   */
  "closed": "closed",

  /**
   * value: "open"
   * @const
   */
  "open": "open",

  /**
   * value: "removed"
   * @const
   */
  "removed": "removed"
};
var _default = SendBirdPollDetails;
exports["default"] = _default;