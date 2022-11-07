"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile = _interopRequireDefault(require("./ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListDataExportsByMessageChannelOrUserResponseExportedDataInner model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponseExportedDataInner
 * @version 0.0.16
 */
var ListDataExportsByMessageChannelOrUserResponseExportedDataInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInner</code>.
   * @alias module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInner
   */
  function ListDataExportsByMessageChannelOrUserResponseExportedDataInner() {
    _classCallCheck(this, ListDataExportsByMessageChannelOrUserResponseExportedDataInner);
    ListDataExportsByMessageChannelOrUserResponseExportedDataInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListDataExportsByMessageChannelOrUserResponseExportedDataInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInner} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInner} The populated <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDataExportsByMessageChannelOrUserResponseExportedDataInner();
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
          obj['file'] = _ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile["default"].constructFromObject(data['file']);
        }
        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return ListDataExportsByMessageChannelOrUserResponseExportedDataInner;
}();
/**
 * @member {String} request_id
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['request_id'] = undefined;

/**
 * @member {String} status
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['status'] = undefined;

/**
 * @member {String} format
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['format'] = undefined;

/**
 * @member {String} csv_delimiter
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['csv_delimiter'] = undefined;

/**
 * @member {String} timezone
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['timezone'] = undefined;

/**
 * @member {Number} created_at
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['created_at'] = undefined;

/**
 * @member {Number} start_ts
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['start_ts'] = undefined;

/**
 * @member {Number} end_ts
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['end_ts'] = undefined;

/**
 * @member {Array.<String>} channel_urls
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['channel_urls'] = undefined;

/**
 * @member {Array.<String>} sender_ids
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['sender_ids'] = undefined;

/**
 * @member {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile} file
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['file'] = undefined;

/**
 * @member {Array.<String>} user_ids
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInner.prototype['user_ids'] = undefined;
var _default = ListDataExportsByMessageChannelOrUserResponseExportedDataInner;
exports["default"] = _default;