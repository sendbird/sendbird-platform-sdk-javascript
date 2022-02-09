"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20039Message = _interopRequireDefault(require("./InlineResponse20039Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20039Announcements model module.
 * @module model/InlineResponse20039Announcements
 * @version 1.0.0
 */
var InlineResponse20039Announcements = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20039Announcements</code>.
   * @alias module:model/InlineResponse20039Announcements
   */
  function InlineResponse20039Announcements() {
    _classCallCheck(this, InlineResponse20039Announcements);

    InlineResponse20039Announcements.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20039Announcements, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20039Announcements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20039Announcements} obj Optional instance to populate.
     * @return {module:model/InlineResponse20039Announcements} The populated <code>InlineResponse20039Announcements</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20039Announcements();

        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }

        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _InlineResponse20039Message["default"].constructFromObject(data['message']);
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

        if (data.hasOwnProperty('cease_at')) {
          obj['cease_at'] = _ApiClient["default"].convertToType(data['cease_at'], 'String');
        }

        if (data.hasOwnProperty('resume_at')) {
          obj['resume_at'] = _ApiClient["default"].convertToType(data['resume_at'], 'String');
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

  return InlineResponse20039Announcements;
}();
/**
 * @member {String} unique_id
 */


InlineResponse20039Announcements.prototype['unique_id'] = undefined;
/**
 * @member {String} announcement_group
 */

InlineResponse20039Announcements.prototype['announcement_group'] = undefined;
/**
 * @member {module:model/InlineResponse20039Message} message
 */

InlineResponse20039Announcements.prototype['message'] = undefined;
/**
 * @member {Boolean} enable_push
 */

InlineResponse20039Announcements.prototype['enable_push'] = undefined;
/**
 * @member {String} target_at
 */

InlineResponse20039Announcements.prototype['target_at'] = undefined;
/**
 * @member {Number} target_user_count
 */

InlineResponse20039Announcements.prototype['target_user_count'] = undefined;
/**
 * @member {Number} target_channel_count
 */

InlineResponse20039Announcements.prototype['target_channel_count'] = undefined;
/**
 * @member {String} status
 */

InlineResponse20039Announcements.prototype['status'] = undefined;
/**
 * @member {Number} scheduled_at
 */

InlineResponse20039Announcements.prototype['scheduled_at'] = undefined;
/**
 * @member {String} cease_at
 */

InlineResponse20039Announcements.prototype['cease_at'] = undefined;
/**
 * @member {String} resume_at
 */

InlineResponse20039Announcements.prototype['resume_at'] = undefined;
/**
 * @member {Number} completed_at
 */

InlineResponse20039Announcements.prototype['completed_at'] = undefined;
/**
 * @member {Number} sent_user_count
 */

InlineResponse20039Announcements.prototype['sent_user_count'] = undefined;
/**
 * @member {Number} open_count
 */

InlineResponse20039Announcements.prototype['open_count'] = undefined;
/**
 * @member {Number} open_rate
 */

InlineResponse20039Announcements.prototype['open_rate'] = undefined;
var _default = InlineResponse20039Announcements;
exports["default"] = _default;