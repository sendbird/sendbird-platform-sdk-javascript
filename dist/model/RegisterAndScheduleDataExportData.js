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
 * The RegisterAndScheduleDataExportData model module.
 * @module model/RegisterAndScheduleDataExportData
 * @version 0.0.16
 */
var RegisterAndScheduleDataExportData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegisterAndScheduleDataExportData</code>.
   * @alias module:model/RegisterAndScheduleDataExportData
   * @param startTs {Number} Specifies the starting timestamp of a period for target objects' creation date, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The creation time of messages, channels, and users will be in-between the start_ts and end_ts.
   * @param endTs {Number} Specifies the ending timestamp of a period for target objects' creation date, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The creation time of messages, channels, and users will be in-between the start_ts and end_ts.
   */
  function RegisterAndScheduleDataExportData(startTs, endTs) {
    _classCallCheck(this, RegisterAndScheduleDataExportData);
    RegisterAndScheduleDataExportData.initialize(this, startTs, endTs);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(RegisterAndScheduleDataExportData, null, [{
    key: "initialize",
    value: function initialize(obj, startTs, endTs) {
      obj['start_ts'] = startTs;
      obj['end_ts'] = endTs;
    }

    /**
     * Constructs a <code>RegisterAndScheduleDataExportData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterAndScheduleDataExportData} obj Optional instance to populate.
     * @return {module:model/RegisterAndScheduleDataExportData} The populated <code>RegisterAndScheduleDataExportData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterAndScheduleDataExportData();
        if (data.hasOwnProperty('start_ts')) {
          obj['start_ts'] = _ApiClient["default"].convertToType(data['start_ts'], 'Number');
        }
        if (data.hasOwnProperty('end_ts')) {
          obj['end_ts'] = _ApiClient["default"].convertToType(data['end_ts'], 'Number');
        }
        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }
        if (data.hasOwnProperty('csv_delimiter')) {
          obj['csv_delimiter'] = _ApiClient["default"].convertToType(data['csv_delimiter'], 'String');
        }
        if (data.hasOwnProperty('timezone')) {
          obj['timezone'] = _ApiClient["default"].convertToType(data['timezone'], 'String');
        }
        if (data.hasOwnProperty('sender_ids')) {
          obj['sender_ids'] = _ApiClient["default"].convertToType(data['sender_ids'], ['String']);
        }
        if (data.hasOwnProperty('exclude_sender_ids')) {
          obj['exclude_sender_ids'] = _ApiClient["default"].convertToType(data['exclude_sender_ids'], ['String']);
        }
        if (data.hasOwnProperty('channel_urls')) {
          obj['channel_urls'] = _ApiClient["default"].convertToType(data['channel_urls'], ['String']);
        }
        if (data.hasOwnProperty('exclude_channel_urls')) {
          obj['exclude_channel_urls'] = _ApiClient["default"].convertToType(data['exclude_channel_urls'], ['String']);
        }
        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }
        if (data.hasOwnProperty('show_read_receipt')) {
          obj['show_read_receipt'] = _ApiClient["default"].convertToType(data['show_read_receipt'], 'Boolean');
        }
        if (data.hasOwnProperty('show_channel_metadata')) {
          obj['show_channel_metadata'] = _ApiClient["default"].convertToType(data['show_channel_metadata'], 'Boolean');
        }
        if (data.hasOwnProperty('neighboring_message_limit')) {
          obj['neighboring_message_limit'] = _ApiClient["default"].convertToType(data['neighboring_message_limit'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return RegisterAndScheduleDataExportData;
}();
/**
 * Specifies the starting timestamp of a period for target objects' creation date, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The creation time of messages, channels, and users will be in-between the start_ts and end_ts.
 * @member {Number} start_ts
 */
RegisterAndScheduleDataExportData.prototype['start_ts'] = undefined;

/**
 * Specifies the ending timestamp of a period for target objects' creation date, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The creation time of messages, channels, and users will be in-between the start_ts and end_ts.
 * @member {Number} end_ts
 */
RegisterAndScheduleDataExportData.prototype['end_ts'] = undefined;

/**
 * Specifies the format of the file to export the messages to. Acceptable values are json and csv. (Default: json)
 * @member {String} format
 */
RegisterAndScheduleDataExportData.prototype['format'] = undefined;

/**
 * Sets a single character delimiter to separate the values in each row of the csv file which stores two-dimensional arrays of the exported message data. Either English alphabets or special characters can be used as a delimiter, including a horizontal tab (\\t), a line feed (\\n), a vertical bar (\\
 * @member {String} csv_delimiter
 */
RegisterAndScheduleDataExportData.prototype['csv_delimiter'] = undefined;

/**
 * Specifies the timezone to be applied to the timestamp of the exported messages. For example, US/Pacific, Asia/Seoul, Europe/London, etc. (Default: UTC)
 * @member {String} timezone
 */
RegisterAndScheduleDataExportData.prototype['timezone'] = undefined;

/**
 * Specifies an array of the IDs of the users which are used to filter the messages by its sender for the export. This property is effective only when the data_type parameter is set to messages, and can be specified up to 10 IDs in the request. (Default: all messages sent by any user)
 * @member {Array.<String>} sender_ids
 */
RegisterAndScheduleDataExportData.prototype['sender_ids'] = undefined;

/**
 * Specifies an array of the IDs of the users which are used to exclude their sent messages from the export. This property is effective only when the data_type parameter is set to messages, and can be specified up to 10 IDs. (Default: all messages sent by any user)
 * @member {Array.<String>} exclude_sender_ids
 */
RegisterAndScheduleDataExportData.prototype['exclude_sender_ids'] = undefined;

/**
 * Specifies an array of one or more URLs of channels to export the messages from. This property is effective only when the data_type parameter is set to messages or channels. (Default: all channels)
 * @member {Array.<String>} channel_urls
 */
RegisterAndScheduleDataExportData.prototype['channel_urls'] = undefined;

/**
 * Specifies an array of one or more URLs of channels to exclude when exporting the messages. This property is effective only when the data_type parameter is set to messages or channels. (Default: include all channels)
 * @member {Array.<String>} exclude_channel_urls
 */
RegisterAndScheduleDataExportData.prototype['exclude_channel_urls'] = undefined;

/**
 * Specifies an array of the IDs of the users to export their information. This property is effective only when the data_type parameter is set to users. (Default: all users)
 * @member {Array.<String>} user_ids
 */
RegisterAndScheduleDataExportData.prototype['user_ids'] = undefined;

/**
 * Determines whether to include information about the read receipts of each channel in the exported data. The read receipt indicates the timestamps of when each user has last read the messages in the channel, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps). (Default: true)
 * @member {Boolean} show_read_receipt
 */
RegisterAndScheduleDataExportData.prototype['show_read_receipt'] = undefined;

/**
 * Determines whether to include [channel metadata](/docs/chat/v3/platform-api/guides/user-and-channel-metadata#2-view-a-channel-metadata) in the result files.
 * @member {Boolean} show_channel_metadata
 */
RegisterAndScheduleDataExportData.prototype['show_channel_metadata'] = undefined;

/**
 * Specifies the maximum number of other users' messages to be exported, which took place after the specified message of a user filtered by the sender_ids property. Even if there may be more messages that took place, if the quantity exceeds the number of the neighboring_message_limit, they are omitted. Only the messages that took place right after the specified message will be counted and exported. This can be used to better analyze the context. Acceptable values are 1 to 10, inclusive. (Default: 0)
 * @member {Number} neighboring_message_limit
 */
RegisterAndScheduleDataExportData.prototype['neighboring_message_limit'] = undefined;
var _default = RegisterAndScheduleDataExportData;
exports["default"] = _default;