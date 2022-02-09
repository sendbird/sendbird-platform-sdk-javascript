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
 * The InlineResponse20069 model module.
 * @module model/InlineResponse20069
 * @version 1.0.0
 */
var InlineResponse20069 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20069</code>.
   * @alias module:model/InlineResponse20069
   */
  function InlineResponse20069() {
    _classCallCheck(this, InlineResponse20069);

    InlineResponse20069.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20069, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20069</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20069} obj Optional instance to populate.
     * @return {module:model/InlineResponse20069} The populated <code>InlineResponse20069</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20069();

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }

        if (data.hasOwnProperty('channel_delete_option')) {
          obj['channel_delete_option'] = _ApiClient["default"].convertToType(data['channel_delete_option'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20069;
}();
/**
 * @member {String} request_id
 */


InlineResponse20069.prototype['request_id'] = undefined;
/**
 * @member {String} action
 */

InlineResponse20069.prototype['action'] = undefined;
/**
 * @member {String} status
 */

InlineResponse20069.prototype['status'] = undefined;
/**
 * @member {String} user_id
 */

InlineResponse20069.prototype['user_id'] = undefined;
/**
 * @member {Array.<String>} user_ids
 */

InlineResponse20069.prototype['user_ids'] = undefined;
/**
 * @member {String} channel_delete_option
 */

InlineResponse20069.prototype['channel_delete_option'] = undefined;
/**
 * @member {Number} created_at
 */

InlineResponse20069.prototype['created_at'] = undefined;
var _default = InlineResponse20069;
exports["default"] = _default;