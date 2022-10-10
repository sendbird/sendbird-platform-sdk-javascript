"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdPollDetails = _interopRequireDefault(require("./SendBirdPollDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SendBirdPoll model module.
 * @module model/SendBirdPoll
 * @version 0.0.13
 */
var SendBirdPoll = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdPoll</code>.
   * @alias module:model/SendBirdPoll
   */
  function SendBirdPoll() {
    _classCallCheck(this, SendBirdPoll);

    SendBirdPoll.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdPoll, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdPoll</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPoll} obj Optional instance to populate.
     * @return {module:model/SendBirdPoll} The populated <code>SendBirdPoll</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdPoll();

        if (data.hasOwnProperty('details')) {
          obj['details'] = _SendBirdPollDetails["default"].constructFromObject(data['details']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SendBirdPoll;
}();
/**
 * @member {module:model/SendBirdPollDetails} details
 */


SendBirdPoll.prototype['details'] = undefined;
/**
 * @member {Number} id
 */

SendBirdPoll.prototype['id'] = undefined;
/**
 * @member {String} title
 */

SendBirdPoll.prototype['title'] = undefined;
var _default = SendBirdPoll;
exports["default"] = _default;