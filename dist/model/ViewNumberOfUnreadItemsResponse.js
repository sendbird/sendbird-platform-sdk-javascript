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
 * The ViewNumberOfUnreadItemsResponse model module.
 * @module model/ViewNumberOfUnreadItemsResponse
 * @version 1.0.7
 */
var ViewNumberOfUnreadItemsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfUnreadItemsResponse</code>.
   * @alias module:model/ViewNumberOfUnreadItemsResponse
   */
  function ViewNumberOfUnreadItemsResponse() {
    _classCallCheck(this, ViewNumberOfUnreadItemsResponse);

    ViewNumberOfUnreadItemsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewNumberOfUnreadItemsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewNumberOfUnreadItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfUnreadItemsResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfUnreadItemsResponse} The populated <code>ViewNumberOfUnreadItemsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfUnreadItemsResponse();

        if (data.hasOwnProperty('non_super_group_channel_unread_message_count')) {
          obj['non_super_group_channel_unread_message_count'] = _ApiClient["default"].convertToType(data['non_super_group_channel_unread_message_count'], 'Number');
        }

        if (data.hasOwnProperty('super_group_channel_unread_message_count')) {
          obj['super_group_channel_unread_message_count'] = _ApiClient["default"].convertToType(data['super_group_channel_unread_message_count'], 'Number');
        }

        if (data.hasOwnProperty('group_channel_unread_message_count')) {
          obj['group_channel_unread_message_count'] = _ApiClient["default"].convertToType(data['group_channel_unread_message_count'], 'Number');
        }

        if (data.hasOwnProperty('super_group_channel_invitation_count')) {
          obj['super_group_channel_invitation_count'] = _ApiClient["default"].convertToType(data['super_group_channel_invitation_count'], 'Number');
        }

        if (data.hasOwnProperty('group_channel_invitation_count')) {
          obj['group_channel_invitation_count'] = _ApiClient["default"].convertToType(data['group_channel_invitation_count'], 'Number');
        }

        if (data.hasOwnProperty('super_group_channel_unread_mention_count')) {
          obj['super_group_channel_unread_mention_count'] = _ApiClient["default"].convertToType(data['super_group_channel_unread_mention_count'], 'Number');
        }

        if (data.hasOwnProperty('group_channel_unread_mention_count')) {
          obj['group_channel_unread_mention_count'] = _ApiClient["default"].convertToType(data['group_channel_unread_mention_count'], 'Number');
        }

        if (data.hasOwnProperty('non_super_group_channel_unread_mention_count')) {
          obj['non_super_group_channel_unread_mention_count'] = _ApiClient["default"].convertToType(data['non_super_group_channel_unread_mention_count'], 'Number');
        }

        if (data.hasOwnProperty('non_super_group_channel_invitation_count')) {
          obj['non_super_group_channel_invitation_count'] = _ApiClient["default"].convertToType(data['non_super_group_channel_invitation_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ViewNumberOfUnreadItemsResponse;
}();
/**
 * @member {Number} non_super_group_channel_unread_message_count
 */


ViewNumberOfUnreadItemsResponse.prototype['non_super_group_channel_unread_message_count'] = undefined;
/**
 * @member {Number} super_group_channel_unread_message_count
 */

ViewNumberOfUnreadItemsResponse.prototype['super_group_channel_unread_message_count'] = undefined;
/**
 * @member {Number} group_channel_unread_message_count
 */

ViewNumberOfUnreadItemsResponse.prototype['group_channel_unread_message_count'] = undefined;
/**
 * @member {Number} super_group_channel_invitation_count
 */

ViewNumberOfUnreadItemsResponse.prototype['super_group_channel_invitation_count'] = undefined;
/**
 * @member {Number} group_channel_invitation_count
 */

ViewNumberOfUnreadItemsResponse.prototype['group_channel_invitation_count'] = undefined;
/**
 * @member {Number} super_group_channel_unread_mention_count
 */

ViewNumberOfUnreadItemsResponse.prototype['super_group_channel_unread_mention_count'] = undefined;
/**
 * @member {Number} group_channel_unread_mention_count
 */

ViewNumberOfUnreadItemsResponse.prototype['group_channel_unread_mention_count'] = undefined;
/**
 * @member {Number} non_super_group_channel_unread_mention_count
 */

ViewNumberOfUnreadItemsResponse.prototype['non_super_group_channel_unread_mention_count'] = undefined;
/**
 * @member {Number} non_super_group_channel_invitation_count
 */

ViewNumberOfUnreadItemsResponse.prototype['non_super_group_channel_invitation_count'] = undefined;
var _default = ViewNumberOfUnreadItemsResponse;
exports["default"] = _default;