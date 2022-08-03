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
 * The GcDeclineInvitationData model module.
 * @module model/GcDeclineInvitationData
 * @version 1.0.7
 */
var GcDeclineInvitationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GcDeclineInvitationData</code>.
   * @alias module:model/GcDeclineInvitationData
   * @param channelUrl {String} Specifies the URL of the private group channel to decline an invitation from.
   * @param userId {String} Specifies the unique ID of the user to decline an invitation.
   */
  function GcDeclineInvitationData(channelUrl, userId) {
    _classCallCheck(this, GcDeclineInvitationData);

    GcDeclineInvitationData.initialize(this, channelUrl, userId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GcDeclineInvitationData, null, [{
    key: "initialize",
    value: function initialize(obj, channelUrl, userId) {
      obj['channel_url'] = channelUrl;
      obj['user_id'] = userId;
    }
    /**
     * Constructs a <code>GcDeclineInvitationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcDeclineInvitationData} obj Optional instance to populate.
     * @return {module:model/GcDeclineInvitationData} The populated <code>GcDeclineInvitationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GcDeclineInvitationData();

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GcDeclineInvitationData;
}();
/**
 * Specifies the URL of the private group channel to decline an invitation from.
 * @member {String} channel_url
 */


GcDeclineInvitationData.prototype['channel_url'] = undefined;
/**
 * Specifies the unique ID of the user to decline an invitation.
 * @member {String} user_id
 */

GcDeclineInvitationData.prototype['user_id'] = undefined;
var _default = GcDeclineInvitationData;
exports["default"] = _default;