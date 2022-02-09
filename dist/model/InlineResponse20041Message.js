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
 * The InlineResponse20041Message model module.
 * @module model/InlineResponse20041Message
 * @version 1.0.0
 */
var InlineResponse20041Message = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20041Message</code>.
   * @alias module:model/InlineResponse20041Message
   */
  function InlineResponse20041Message() {
    _classCallCheck(this, InlineResponse20041Message);

    InlineResponse20041Message.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20041Message, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20041Message</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041Message} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041Message} The populated <code>InlineResponse20041Message</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20041Message();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('enable_push')) {
          obj['enable_push'] = _ApiClient["default"].convertToType(data['enable_push'], 'Boolean');
        }

        if (data.hasOwnProperty('target_at')) {
          obj['target_at'] = _ApiClient["default"].convertToType(data['target_at'], 'String');
        }

        if (data.hasOwnProperty('target_user_count')) {
          obj['target_user_count'] = _ApiClient["default"].convertToType(data['target_user_count'], 'Number');
        }

        if (data.hasOwnProperty('target_channel_count')) {
          obj['target_channel_count'] = _ApiClient["default"].convertToType(data['target_channel_count'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('scheduled_at')) {
          obj['scheduled_at'] = _ApiClient["default"].convertToType(data['scheduled_at'], 'Number');
        }

        if (data.hasOwnProperty('completed_at')) {
          obj['completed_at'] = _ApiClient["default"].convertToType(data['completed_at'], 'Number');
        }

        if (data.hasOwnProperty('sent_user_count')) {
          obj['sent_user_count'] = _ApiClient["default"].convertToType(data['sent_user_count'], 'Number');
        }

        if (data.hasOwnProperty('open_count')) {
          obj['open_count'] = _ApiClient["default"].convertToType(data['open_count'], 'Number');
        }

        if (data.hasOwnProperty('open_rate')) {
          obj['open_rate'] = _ApiClient["default"].convertToType(data['open_rate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20041Message;
}();
/**
 * @member {String} type
 */


InlineResponse20041Message.prototype['type'] = undefined;
/**
 * @member {String} custom_type
 */

InlineResponse20041Message.prototype['custom_type'] = undefined;
/**
 * @member {String} user_id
 */

InlineResponse20041Message.prototype['user_id'] = undefined;
/**
 * @member {String} content
 */

InlineResponse20041Message.prototype['content'] = undefined;
/**
 * @member {String} data
 */

InlineResponse20041Message.prototype['data'] = undefined;
/**
 * @member {Boolean} enable_push
 */

InlineResponse20041Message.prototype['enable_push'] = undefined;
/**
 * @member {String} target_at
 */

InlineResponse20041Message.prototype['target_at'] = undefined;
/**
 * @member {Number} target_user_count
 */

InlineResponse20041Message.prototype['target_user_count'] = undefined;
/**
 * @member {Number} target_channel_count
 */

InlineResponse20041Message.prototype['target_channel_count'] = undefined;
/**
 * @member {String} status
 */

InlineResponse20041Message.prototype['status'] = undefined;
/**
 * @member {Number} scheduled_at
 */

InlineResponse20041Message.prototype['scheduled_at'] = undefined;
/**
 * @member {Number} completed_at
 */

InlineResponse20041Message.prototype['completed_at'] = undefined;
/**
 * @member {Number} sent_user_count
 */

InlineResponse20041Message.prototype['sent_user_count'] = undefined;
/**
 * @member {Number} open_count
 */

InlineResponse20041Message.prototype['open_count'] = undefined;
/**
 * @member {Number} open_rate
 */

InlineResponse20041Message.prototype['open_rate'] = undefined;
var _default = InlineResponse20041Message;
exports["default"] = _default;