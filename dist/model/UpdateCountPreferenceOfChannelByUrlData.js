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
 * The UpdateCountPreferenceOfChannelByUrlData model module.
 * @module model/UpdateCountPreferenceOfChannelByUrlData
 * @version 0.0.16
 */
var UpdateCountPreferenceOfChannelByUrlData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateCountPreferenceOfChannelByUrlData</code>.
   * @alias module:model/UpdateCountPreferenceOfChannelByUrlData
   * @param countPreference {String} Determines whether to only count the number of unread messages or the number of unread mentioned messages in the specified group channel. Only the one that is chosen to be preferenced will be counted and added to the total number count after the action. A value of off indicates that both read statuses will not be counted, while all indicates that both read statuses will be counted by the system. A value of unread_message_count_only indicates that only the user's unread messages will be counted in the channel while unread_mentioned_count_only indicates that only the user's unread mentioned messages will be counted. (Default: all)
   */
  function UpdateCountPreferenceOfChannelByUrlData(countPreference) {
    _classCallCheck(this, UpdateCountPreferenceOfChannelByUrlData);
    UpdateCountPreferenceOfChannelByUrlData.initialize(this, countPreference);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(UpdateCountPreferenceOfChannelByUrlData, null, [{
    key: "initialize",
    value: function initialize(obj, countPreference) {
      obj['count_preference'] = countPreference;
    }

    /**
     * Constructs a <code>UpdateCountPreferenceOfChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateCountPreferenceOfChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/UpdateCountPreferenceOfChannelByUrlData} The populated <code>UpdateCountPreferenceOfChannelByUrlData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateCountPreferenceOfChannelByUrlData();
        if (data.hasOwnProperty('count_preference')) {
          obj['count_preference'] = _ApiClient["default"].convertToType(data['count_preference'], 'String');
        }
      }
      return obj;
    }
  }]);
  return UpdateCountPreferenceOfChannelByUrlData;
}();
/**
 * Determines whether to only count the number of unread messages or the number of unread mentioned messages in the specified group channel. Only the one that is chosen to be preferenced will be counted and added to the total number count after the action. A value of off indicates that both read statuses will not be counted, while all indicates that both read statuses will be counted by the system. A value of unread_message_count_only indicates that only the user's unread messages will be counted in the channel while unread_mentioned_count_only indicates that only the user's unread mentioned messages will be counted. (Default: all)
 * @member {String} count_preference
 */
UpdateCountPreferenceOfChannelByUrlData.prototype['count_preference'] = undefined;
var _default = UpdateCountPreferenceOfChannelByUrlData;
exports["default"] = _default;