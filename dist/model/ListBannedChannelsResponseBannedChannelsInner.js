"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _SendBirdChannelResponse = _interopRequireDefault(require("./SendBirdChannelResponse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListBannedChannelsResponseBannedChannelsInner model module.
 * @module model/ListBannedChannelsResponseBannedChannelsInner
 * @version 0.0.14
 */var ListBannedChannelsResponseBannedChannelsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBannedChannelsResponseBannedChannelsInner</code>.
   * @alias module:model/ListBannedChannelsResponseBannedChannelsInner
   */
  function ListBannedChannelsResponseBannedChannelsInner() {
    _classCallCheck(this, ListBannedChannelsResponseBannedChannelsInner);
    ListBannedChannelsResponseBannedChannelsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListBannedChannelsResponseBannedChannelsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListBannedChannelsResponseBannedChannelsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBannedChannelsResponseBannedChannelsInner} obj Optional instance to populate.
     * @return {module:model/ListBannedChannelsResponseBannedChannelsInner} The populated <code>ListBannedChannelsResponseBannedChannelsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBannedChannelsResponseBannedChannelsInner();
        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _SendBirdChannelResponse["default"].constructFromObject(data['channel']);
        }
        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListBannedChannelsResponseBannedChannelsInner;
}(); /**
      * @member {Number} start_at
      */
ListBannedChannelsResponseBannedChannelsInner.prototype['start_at'] = undefined;

/**
 * @member {String} description
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['description'] = undefined;

/**
 * @member {module:model/SendBirdChannelResponse} channel
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['channel'] = undefined;

/**
 * @member {Number} end_at
 */
ListBannedChannelsResponseBannedChannelsInner.prototype['end_at'] = undefined;
var _default = ListBannedChannelsResponseBannedChannelsInner;
exports["default"] = _default;