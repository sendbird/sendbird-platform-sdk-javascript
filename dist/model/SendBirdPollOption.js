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
 * The SendBirdPollOption model module.
 * @module model/SendBirdPollOption
 * @version 0.0.13
 */
var SendBirdPollOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdPollOption</code>.
   * @alias module:model/SendBirdPollOption
   */
  function SendBirdPollOption() {
    _classCallCheck(this, SendBirdPollOption);

    SendBirdPollOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdPollOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdPollOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPollOption} obj Optional instance to populate.
     * @return {module:model/SendBirdPollOption} The populated <code>SendBirdPollOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdPollOption();

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('created_by')) {
          obj['created_by'] = _ApiClient["default"].convertToType(data['created_by'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('partial_voters')) {
          obj['partial_voters'] = _ApiClient["default"].convertToType(data['partial_voters'], [_SendBirdUser["default"]]);
        }

        if (data.hasOwnProperty('poll_id')) {
          obj['poll_id'] = _ApiClient["default"].convertToType(data['poll_id'], 'Number');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }

        if (data.hasOwnProperty('vote_count')) {
          obj['vote_count'] = _ApiClient["default"].convertToType(data['vote_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdPollOption;
}();
/**
 * @member {Number} created_at
 */


SendBirdPollOption.prototype['created_at'] = undefined;
/**
 * @member {String} created_by
 */

SendBirdPollOption.prototype['created_by'] = undefined;
/**
 * @member {Number} id
 */

SendBirdPollOption.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/SendBirdUser>} partial_voters
 */

SendBirdPollOption.prototype['partial_voters'] = undefined;
/**
 * @member {Number} poll_id
 */

SendBirdPollOption.prototype['poll_id'] = undefined;
/**
 * @member {String} text
 */

SendBirdPollOption.prototype['text'] = undefined;
/**
 * @member {Number} updated_at
 */

SendBirdPollOption.prototype['updated_at'] = undefined;
/**
 * @member {Number} vote_count
 */

SendBirdPollOption.prototype['vote_count'] = undefined;
var _default = SendBirdPollOption;
exports["default"] = _default;