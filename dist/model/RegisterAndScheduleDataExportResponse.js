"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListDataExportsByMessageChannelOrUserResponseFile = _interopRequireDefault(require("./ListDataExportsByMessageChannelOrUserResponseFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RegisterAndScheduleDataExportResponse model module.
 * @module model/RegisterAndScheduleDataExportResponse
 * @version 1.0.0
 */
var RegisterAndScheduleDataExportResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegisterAndScheduleDataExportResponse</code>.
   * @alias module:model/RegisterAndScheduleDataExportResponse
   */
  function RegisterAndScheduleDataExportResponse() {
    _classCallCheck(this, RegisterAndScheduleDataExportResponse);

    RegisterAndScheduleDataExportResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterAndScheduleDataExportResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisterAndScheduleDataExportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterAndScheduleDataExportResponse} obj Optional instance to populate.
     * @return {module:model/RegisterAndScheduleDataExportResponse} The populated <code>RegisterAndScheduleDataExportResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterAndScheduleDataExportResponse();

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
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

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('start_ts')) {
          obj['start_ts'] = _ApiClient["default"].convertToType(data['start_ts'], 'Number');
        }

        if (data.hasOwnProperty('end_ts')) {
          obj['end_ts'] = _ApiClient["default"].convertToType(data['end_ts'], 'Number');
        }

        if (data.hasOwnProperty('channel_urls')) {
          obj['channel_urls'] = _ApiClient["default"].convertToType(data['channel_urls'], ['String']);
        }

        if (data.hasOwnProperty('sender_ids')) {
          obj['sender_ids'] = _ApiClient["default"].convertToType(data['sender_ids'], ['String']);
        }

        if (data.hasOwnProperty('file')) {
          obj['file'] = _ListDataExportsByMessageChannelOrUserResponseFile["default"].constructFromObject(data['file']);
        }

        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return RegisterAndScheduleDataExportResponse;
}();
/**
 * @member {String} request_id
 */


RegisterAndScheduleDataExportResponse.prototype['request_id'] = undefined;
/**
 * @member {String} status
 */

RegisterAndScheduleDataExportResponse.prototype['status'] = undefined;
/**
 * @member {String} format
 */

RegisterAndScheduleDataExportResponse.prototype['format'] = undefined;
/**
 * @member {String} csv_delimiter
 */

RegisterAndScheduleDataExportResponse.prototype['csv_delimiter'] = undefined;
/**
 * @member {String} timezone
 */

RegisterAndScheduleDataExportResponse.prototype['timezone'] = undefined;
/**
 * @member {Number} created_at
 */

RegisterAndScheduleDataExportResponse.prototype['created_at'] = undefined;
/**
 * @member {Number} start_ts
 */

RegisterAndScheduleDataExportResponse.prototype['start_ts'] = undefined;
/**
 * @member {Number} end_ts
 */

RegisterAndScheduleDataExportResponse.prototype['end_ts'] = undefined;
/**
 * @member {Array.<String>} channel_urls
 */

RegisterAndScheduleDataExportResponse.prototype['channel_urls'] = undefined;
/**
 * @member {Array.<String>} sender_ids
 */

RegisterAndScheduleDataExportResponse.prototype['sender_ids'] = undefined;
/**
 * @member {module:model/ListDataExportsByMessageChannelOrUserResponseFile} file
 */

RegisterAndScheduleDataExportResponse.prototype['file'] = undefined;
/**
 * @member {Array.<Number>} user_ids
 */

RegisterAndScheduleDataExportResponse.prototype['user_ids'] = undefined;
var _default = RegisterAndScheduleDataExportResponse;
exports["default"] = _default;