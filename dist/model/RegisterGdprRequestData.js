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
 * The RegisterGdprRequestData model module.
 * @module model/RegisterGdprRequestData
 * @version 1.0.0
 */
var RegisterGdprRequestData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegisterGdprRequestData</code>.
   * @alias module:model/RegisterGdprRequestData
   * @param action {String} Determines the type of a GDPR request. Acceptable values are limited to access and delete. If set to access, Sendbird server generates a downloadable zip file containing the data of the specified user with the user_id property to comply with GDPR's [right to access](https://gdpr-info.eu/art-15-gdpr/) of the data subject. If set to delete, the specified users with the user_ids property will be permanently deleted from your Sendbird application to comply with GDPR's [right to erasure](https://gdpr-info.eu/art-17-gdpr/) of the data subject. (Default: delete)
   * @param userIds {Array.<Number>} Specifies an array of the IDs of the users to delete in order to meet the GDPR's requirements. The maximum number of users to be processed at once is 100. This should be specified when the value of the action property is delete.
   * @param channelDeleteOption {String} Determines the scope of group channels to delete in addition to deleting the specified users with the user_ids property. Acceptable values are limited to the following:<br />- do_not_delete (default): the users will be deleted but their joined group channels will remain.<br />- 1_on_1: only 1-on-1 group channels of the users will be deleted. (This option can be useful when eliminating spam users) <br />- all: all joined group channels of the users will be deleted.<br /><br /> This only works when the value of the action property is delete.
   * @param userId {String} Specifies the ID of the user to meet the GDPR's requirements.
   */
  function RegisterGdprRequestData(action, userIds, channelDeleteOption, userId) {
    _classCallCheck(this, RegisterGdprRequestData);

    RegisterGdprRequestData.initialize(this, action, userIds, channelDeleteOption, userId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterGdprRequestData, null, [{
    key: "initialize",
    value: function initialize(obj, action, userIds, channelDeleteOption, userId) {
      obj['action'] = action;
      obj['user_ids'] = userIds;
      obj['channel_delete_option'] = channelDeleteOption;
      obj['user_id'] = userId;
    }
    /**
     * Constructs a <code>RegisterGdprRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterGdprRequestData} obj Optional instance to populate.
     * @return {module:model/RegisterGdprRequestData} The populated <code>RegisterGdprRequestData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterGdprRequestData();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['Number']);
        }

        if (data.hasOwnProperty('channel_delete_option')) {
          obj['channel_delete_option'] = _ApiClient["default"].convertToType(data['channel_delete_option'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegisterGdprRequestData;
}();
/**
 * Determines the type of a GDPR request. Acceptable values are limited to access and delete. If set to access, Sendbird server generates a downloadable zip file containing the data of the specified user with the user_id property to comply with GDPR's [right to access](https://gdpr-info.eu/art-15-gdpr/) of the data subject. If set to delete, the specified users with the user_ids property will be permanently deleted from your Sendbird application to comply with GDPR's [right to erasure](https://gdpr-info.eu/art-17-gdpr/) of the data subject. (Default: delete)
 * @member {String} action
 */


RegisterGdprRequestData.prototype['action'] = undefined;
/**
 * Specifies an array of the IDs of the users to delete in order to meet the GDPR's requirements. The maximum number of users to be processed at once is 100. This should be specified when the value of the action property is delete.
 * @member {Array.<Number>} user_ids
 */

RegisterGdprRequestData.prototype['user_ids'] = undefined;
/**
 * Determines the scope of group channels to delete in addition to deleting the specified users with the user_ids property. Acceptable values are limited to the following:<br />- do_not_delete (default): the users will be deleted but their joined group channels will remain.<br />- 1_on_1: only 1-on-1 group channels of the users will be deleted. (This option can be useful when eliminating spam users) <br />- all: all joined group channels of the users will be deleted.<br /><br /> This only works when the value of the action property is delete.
 * @member {String} channel_delete_option
 */

RegisterGdprRequestData.prototype['channel_delete_option'] = undefined;
/**
 * Specifies the ID of the user to meet the GDPR's requirements.
 * @member {String} user_id
 */

RegisterGdprRequestData.prototype['user_id'] = undefined;
var _default = RegisterGdprRequestData;
exports["default"] = _default;