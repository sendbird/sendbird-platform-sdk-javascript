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
 * The GcUpdateChannelByUrlData model module.
 * @module model/GcUpdateChannelByUrlData
 * @version 0.0.16
 */
var GcUpdateChannelByUrlData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcUpdateChannelByUrlData</code>.
   * @alias module:model/GcUpdateChannelByUrlData
   * @param channelUrl {String} Specifies the URL of the channel to update.
   * @param name {String} Specifies the name of the channel, or the channel topic. The length is limited to 191 characters.
   * @param coverUrl {String} Specifies the unique URL of the cover image. The length is limited to 2,048 characters.
   * @param coverFile {File} Uploads the cover image file for the channel.
   * @param customType {String} Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
   * @param data {String} Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
   * @param isDistinct {Boolean} Determines whether to reuse an existing channel or create a new channel. If set to true, returns a channel with the current channel members users or creates a new channel if no match is found. Sendbird server can also use the custom channel type in the custom_type property if specified along with the users to return the corresponding channel. If set to false, Sendbird server always creates a new channel with a combination of the users as well as the channel custom type if specified. (Default: false)<br /><br /> Under this property, Sendbird server does not distinguish channels based on other properties such as channel URL or channel name.
   * @param isPublic {Boolean} Determines whether to allow a user to join the channel without an invitation. (Default: false)
   * @param accessCode {String} This property can be used only when the channel operator wants to set an access code for a public group channel. If specified, the is_access_code_required property of the channel resource is then set to true, and the channel begins to require the specified access code to a user who attempts to join.
   * @param operatorIds {Array.<String>} Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
   */
  function GcUpdateChannelByUrlData(channelUrl, name, coverUrl, coverFile, customType, data, isDistinct, isPublic, accessCode, operatorIds) {
    _classCallCheck(this, GcUpdateChannelByUrlData);
    GcUpdateChannelByUrlData.initialize(this, channelUrl, name, coverUrl, coverFile, customType, data, isDistinct, isPublic, accessCode, operatorIds);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GcUpdateChannelByUrlData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, name, coverUrl, coverFile, customType, data, isDistinct, isPublic, accessCode, operatorIds) {
      obj['channel_url'] = channelUrl;
      obj['name'] = name;
      obj['cover_url'] = coverUrl;
      obj['cover_file'] = coverFile;
      obj['custom_type'] = customType;
      obj['data'] = data;
      obj['is_distinct'] = isDistinct;
      obj['is_public'] = isPublic;
      obj['access_code'] = accessCode;
      obj['operator_ids'] = operatorIds;
    }

    /**
     * Constructs a <code>GcUpdateChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcUpdateChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/GcUpdateChannelByUrlData} The populated <code>GcUpdateChannelByUrlData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcUpdateChannelByUrlData();
        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }
        if (data.hasOwnProperty('cover_file')) {
          obj['cover_file'] = _ApiClient["default"].convertToType(data['cover_file'], File);
        }
        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
        if (data.hasOwnProperty('is_distinct')) {
          obj['is_distinct'] = _ApiClient["default"].convertToType(data['is_distinct'], 'Boolean');
        }
        if (data.hasOwnProperty('is_public')) {
          obj['is_public'] = _ApiClient["default"].convertToType(data['is_public'], 'Boolean');
        }
        if (data.hasOwnProperty('access_code')) {
          obj['access_code'] = _ApiClient["default"].convertToType(data['access_code'], 'String');
        }
        if (data.hasOwnProperty('operator_ids')) {
          obj['operator_ids'] = _ApiClient["default"].convertToType(data['operator_ids'], ['String']);
        }
      }
      return obj;
    }
  }]);
  return GcUpdateChannelByUrlData;
}();
/**
 * Specifies the URL of the channel to update.
 * @member {String} channel_url
 */
GcUpdateChannelByUrlData.prototype['channel_url'] = undefined;

/**
 * Specifies the name of the channel, or the channel topic. The length is limited to 191 characters.
 * @member {String} name
 */
GcUpdateChannelByUrlData.prototype['name'] = undefined;

/**
 * Specifies the unique URL of the cover image. The length is limited to 2,048 characters.
 * @member {String} cover_url
 */
GcUpdateChannelByUrlData.prototype['cover_url'] = undefined;

/**
 * Uploads the cover image file for the channel.
 * @member {File} cover_file
 */
GcUpdateChannelByUrlData.prototype['cover_file'] = undefined;

/**
 * Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */
GcUpdateChannelByUrlData.prototype['custom_type'] = undefined;

/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} data
 */
GcUpdateChannelByUrlData.prototype['data'] = undefined;

/**
 * Determines whether to reuse an existing channel or create a new channel. If set to true, returns a channel with the current channel members users or creates a new channel if no match is found. Sendbird server can also use the custom channel type in the custom_type property if specified along with the users to return the corresponding channel. If set to false, Sendbird server always creates a new channel with a combination of the users as well as the channel custom type if specified. (Default: false)<br /><br /> Under this property, Sendbird server does not distinguish channels based on other properties such as channel URL or channel name.
 * @member {Boolean} is_distinct
 */
GcUpdateChannelByUrlData.prototype['is_distinct'] = undefined;

/**
 * Determines whether to allow a user to join the channel without an invitation. (Default: false)
 * @member {Boolean} is_public
 */
GcUpdateChannelByUrlData.prototype['is_public'] = undefined;

/**
 * This property can be used only when the channel operator wants to set an access code for a public group channel. If specified, the is_access_code_required property of the channel resource is then set to true, and the channel begins to require the specified access code to a user who attempts to join.
 * @member {String} access_code
 */
GcUpdateChannelByUrlData.prototype['access_code'] = undefined;

/**
 * Specifies an array of one or more IDs of users to register as operators of the channel. If the operators are not members of the channel yet, they need an [invitation](#2-invite-as-members) to [join](#2-join-a-channel) a privte group channel while they don't need any to join a [public](#-3-private-vs-public) group channel. The maximum allowed number of operators per channel is 100.
 * @member {Array.<String>} operator_ids
 */
GcUpdateChannelByUrlData.prototype['operator_ids'] = undefined;
var _default = GcUpdateChannelByUrlData;
exports["default"] = _default;