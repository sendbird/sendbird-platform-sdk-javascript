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
 * The InlineResponse20043OpenStatus model module.
 * @module model/InlineResponse20043OpenStatus
 * @version 1.0.0
 */
var InlineResponse20043OpenStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20043OpenStatus</code>.
   * @alias module:model/InlineResponse20043OpenStatus
   */
  function InlineResponse20043OpenStatus() {
    _classCallCheck(this, InlineResponse20043OpenStatus);

    InlineResponse20043OpenStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20043OpenStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20043OpenStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20043OpenStatus} obj Optional instance to populate.
     * @return {module:model/InlineResponse20043OpenStatus} The populated <code>InlineResponse20043OpenStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20043OpenStatus();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('has_opened')) {
          obj['has_opened'] = _ApiClient["default"].convertToType(data['has_opened'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20043OpenStatus;
}();
/**
 * @member {String} user_id
 */


InlineResponse20043OpenStatus.prototype['user_id'] = undefined;
/**
 * @member {String} channel_url
 */

InlineResponse20043OpenStatus.prototype['channel_url'] = undefined;
/**
 * @member {Boolean} has_opened
 */

InlineResponse20043OpenStatus.prototype['has_opened'] = undefined;
var _default = InlineResponse20043OpenStatus;
exports["default"] = _default;