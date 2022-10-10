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
 * The UpdateAnnouncementByIdData model module.
 * @module model/UpdateAnnouncementByIdData
 * @version 0.0.14
 */var UpdateAnnouncementByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateAnnouncementByIdData</code>.
   * @alias module:model/UpdateAnnouncementByIdData
   * @param uniqueId {String} Specifies the unique ID of the announcement to update.
   */
  function UpdateAnnouncementByIdData(uniqueId) {
    _classCallCheck(this, UpdateAnnouncementByIdData);
    UpdateAnnouncementByIdData.initialize(this, uniqueId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdateAnnouncementByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, uniqueId) {
      obj['unique_id'] = uniqueId;
    }

    /**
     * Constructs a <code>UpdateAnnouncementByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAnnouncementByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateAnnouncementByIdData} The populated <code>UpdateAnnouncementByIdData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateAnnouncementByIdData();
        if (data.hasOwnProperty('unique_id')) {
          obj['unique_id'] = _ApiClient["default"].convertToType(data['unique_id'], 'String');
        }
        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }
        if (data.hasOwnProperty('announcement_group')) {
          obj['announcement_group'] = _ApiClient["default"].convertToType(data['announcement_group'], 'String');
        }
        if (data.hasOwnProperty('create_channel')) {
          obj['create_channel'] = _ApiClient["default"].convertToType(data['create_channel'], 'Boolean');
        }
        if (data.hasOwnProperty('create_channel_options.name')) {
          obj['create_channel_options.name'] = _ApiClient["default"].convertToType(data['create_channel_options.name'], 'String');
        }
        if (data.hasOwnProperty('create_channel_options.cover_url')) {
          obj['create_channel_options.cover_url'] = _ApiClient["default"].convertToType(data['create_channel_options.cover_url'], 'String');
        }
        if (data.hasOwnProperty('create_channel_options.custom_type')) {
          obj['create_channel_options.custom_type'] = _ApiClient["default"].convertToType(data['create_channel_options.custom_type'], 'String');
        }
        if (data.hasOwnProperty('create_channel_options.data')) {
          obj['create_channel_options.data'] = _ApiClient["default"].convertToType(data['create_channel_options.data'], 'String');
        }
        if (data.hasOwnProperty('create_channel_options.distinct')) {
          obj['create_channel_options.distinct'] = _ApiClient["default"].convertToType(data['create_channel_options.distinct'], 'String');
        }
        if (data.hasOwnProperty('message.user_id')) {
          obj['message.user_id'] = _ApiClient["default"].convertToType(data['message.user_id'], 'String');
        }
        if (data.hasOwnProperty('message.content')) {
          obj['message.content'] = _ApiClient["default"].convertToType(data['message.content'], 'String');
        }
        if (data.hasOwnProperty('message.data')) {
          obj['message.data'] = _ApiClient["default"].convertToType(data['message.data'], 'String');
        }
        if (data.hasOwnProperty('enable_push')) {
          obj['enable_push'] = _ApiClient["default"].convertToType(data['enable_push'], 'Boolean');
        }
        if (data.hasOwnProperty('scheduled_at')) {
          obj['scheduled_at'] = _ApiClient["default"].convertToType(data['scheduled_at'], 'Number');
        }
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
        if (data.hasOwnProperty('cease_at')) {
          obj['cease_at'] = _ApiClient["default"].convertToType(data['cease_at'], 'String');
        }
        if (data.hasOwnProperty('resume_at')) {
          obj['resume_at'] = _ApiClient["default"].convertToType(data['resume_at'], 'String');
        }
      }
      return obj;
    }
  }]);
  return UpdateAnnouncementByIdData;
}(); /**
      * Specifies the unique ID of the announcement to update.
      * @member {String} unique_id
      */
UpdateAnnouncementByIdData.prototype['unique_id'] = undefined;

/**
 * Specifies an action to take on the announcement. If this property is updated, other specified properties in the request are not effective. Acceptable values are limited to remove, pause, resume, and cancel. The [Announcement actions](#2-update-an-announcement-3-how-to-change-announcement-status) table explains each action in detail.
 * @member {String} action
 */
UpdateAnnouncementByIdData.prototype['action'] = undefined;

/**
 * Specifies the name of an announcement group to retrieve. If not specified, all announcements are returned, regardless of their group.
 * @member {String} announcement_group
 */
UpdateAnnouncementByIdData.prototype['announcement_group'] = undefined;

/**
 * Determines whether to create a new channel if there is no existing channel that matches with the target options including target_at and target_list.
 * @member {Boolean} create_channel
 */
UpdateAnnouncementByIdData.prototype['create_channel'] = undefined;

/**
 * Specifies the name of the channel. (Default: Group Channel)
 * @member {String} create_channel_options.name
 */
UpdateAnnouncementByIdData.prototype['create_channel_options.name'] = undefined;

/**
 * Specifies the URL of the cover image.
 * @member {String} create_channel_options.cover_url
 */
UpdateAnnouncementByIdData.prototype['create_channel_options.cover_url'] = undefined;

/**
 * Specifies the custom channel type.
 * @member {String} create_channel_options.custom_type
 */
UpdateAnnouncementByIdData.prototype['create_channel_options.custom_type'] = undefined;

/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} create_channel_options.data
 */
UpdateAnnouncementByIdData.prototype['create_channel_options.data'] = undefined;

/**
 * Determines whether to create a [distinct](/docs/chat/v3/platform-api/guides/channel-types#2-group-channel) channel. (Default: true)
 * @member {String} create_channel_options.distinct
 */
UpdateAnnouncementByIdData.prototype['create_channel_options.distinct'] = undefined;

/**
 * Specifies the unique ID of the announcement sender.
 * @member {String} message.user_id
 */
UpdateAnnouncementByIdData.prototype['message.user_id'] = undefined;

/**
 * Specifies the content of the message.
 * @member {String} message.content
 */
UpdateAnnouncementByIdData.prototype['message.content'] = undefined;

/**
 * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
 * @member {String} message.data
 */
UpdateAnnouncementByIdData.prototype['message.data'] = undefined;

/**
 * Determines whether to turn on push notification for the announcement. If set to true, push notifications will be sent for announcements.
 * @member {Boolean} enable_push
 */
UpdateAnnouncementByIdData.prototype['enable_push'] = undefined;

/**
 * Specifies the time to start the announcement, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. (Default: current timestamp)
 * @member {Number} scheduled_at
 */
UpdateAnnouncementByIdData.prototype['scheduled_at'] = undefined;

/**
 * Specifies the time to permanently end the announcement, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format, even if the announcement is not sent to all its targets.
 * @member {Number} end_at
 */
UpdateAnnouncementByIdData.prototype['end_at'] = undefined;

/**
 * Specifies the time to temporarily put the announcement on hold in UTC. The string is represented in HHMM format. This property should be specified in conjunction with the resume_at below.
 * @member {String} cease_at
 */
UpdateAnnouncementByIdData.prototype['cease_at'] = undefined;

/**
 * Specifies the time to automatically resume the on-hold announcement in UTC. The string is represented in HHMM format. This property should be specified in conjunction with the cease_at above.
 * @member {String} resume_at
 */
UpdateAnnouncementByIdData.prototype['resume_at'] = undefined;
var _default = UpdateAnnouncementByIdData;
exports["default"] = _default;