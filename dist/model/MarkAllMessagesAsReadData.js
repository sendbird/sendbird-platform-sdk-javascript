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
 * The MarkAllMessagesAsReadData model module.
 * @module model/MarkAllMessagesAsReadData
 * @version 0.0.13
 */
var MarkAllMessagesAsReadData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MarkAllMessagesAsReadData</code>.
   * @alias module:model/MarkAllMessagesAsReadData
   * @param channelUrls {Array.<String>} Specifies an array of one or more group channel URLs to mark all of the unread messages in as read. If not specified, all of the unread messages in the joined group channels are marked as read.
   */
  function MarkAllMessagesAsReadData(channelUrls) {
    _classCallCheck(this, MarkAllMessagesAsReadData);

    MarkAllMessagesAsReadData.initialize(this, channelUrls);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MarkAllMessagesAsReadData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrls) {
      obj['channel_urls'] = channelUrls;
    }
    /**
     * Constructs a <code>MarkAllMessagesAsReadData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarkAllMessagesAsReadData} obj Optional instance to populate.
     * @return {module:model/MarkAllMessagesAsReadData} The populated <code>MarkAllMessagesAsReadData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MarkAllMessagesAsReadData();

        if (data.hasOwnProperty('channel_urls')) {
          obj['channel_urls'] = _ApiClient["default"].convertToType(data['channel_urls'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return MarkAllMessagesAsReadData;
}();
/**
 * Specifies an array of one or more group channel URLs to mark all of the unread messages in as read. If not specified, all of the unread messages in the joined group channels are marked as read.
 * @member {Array.<String>} channel_urls
 */


MarkAllMessagesAsReadData.prototype['channel_urls'] = undefined;
var _default = MarkAllMessagesAsReadData;
exports["default"] = _default;