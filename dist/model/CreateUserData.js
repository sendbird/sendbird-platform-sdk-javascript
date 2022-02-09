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
 * The CreateUserData model module.
 * @module model/CreateUserData
 * @version 1.0.0
 */
var CreateUserData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserData</code>.
   * @alias module:model/CreateUserData
   * @param userId {String} Specifies a user's unique ID, which is used to sign into the Sendbird service. The length is limited to 80 characters.<br /><br /> Do not use PII (Personally Identifiable Information) of your service, such as user email address, legal name or phone number.
   * @param nickname {String} Specifies a nickname for a new user. The length is limited to 80 characters.
   * @param profileUrl {String} Specifies the URL of the user's profile image. If left empty, no profile image is set for the user. The length is limited to 2,048 characters.<br /><br /> The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter's domain set.
   */
  function CreateUserData(userId, nickname, profileUrl) {
    _classCallCheck(this, CreateUserData);

    CreateUserData.initialize(this, userId, nickname, profileUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateUserData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, nickname, profileUrl) {
      obj['user_id'] = userId;
      obj['nickname'] = nickname;
      obj['profile_url'] = profileUrl;
    }
    /**
     * Constructs a <code>CreateUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserData} obj Optional instance to populate.
     * @return {module:model/CreateUserData} The populated <code>CreateUserData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUserData();

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('profile_url')) {
          obj['profile_url'] = _ApiClient["default"].convertToType(data['profile_url'], 'String');
        }

        if (data.hasOwnProperty('profile_file')) {
          obj['profile_file'] = _ApiClient["default"].convertToType(data['profile_file'], File);
        }

        if (data.hasOwnProperty('issue_access_token')) {
          obj['issue_access_token'] = _ApiClient["default"].convertToType(data['issue_access_token'], 'Boolean');
        }

        if (data.hasOwnProperty('discovery_keys')) {
          obj['discovery_keys'] = _ApiClient["default"].convertToType(data['discovery_keys'], ['String']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateUserData;
}();
/**
 * Specifies a user's unique ID, which is used to sign into the Sendbird service. The length is limited to 80 characters.<br /><br /> Do not use PII (Personally Identifiable Information) of your service, such as user email address, legal name or phone number.
 * @member {String} user_id
 */


CreateUserData.prototype['user_id'] = undefined;
/**
 * Specifies a nickname for a new user. The length is limited to 80 characters.
 * @member {String} nickname
 */

CreateUserData.prototype['nickname'] = undefined;
/**
 * Specifies the URL of the user's profile image. If left empty, no profile image is set for the user. The length is limited to 2,048 characters.<br /><br /> The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter's domain set.
 * @member {String} profile_url
 */

CreateUserData.prototype['profile_url'] = undefined;
/**
 * Uploads the file of the user's profile image. An acceptable image is limited to `JPG` (.jpg), `JPEG` (.jpeg), or `PNG` (.png) file of up to 25 MB.
 * @member {File} profile_file
 */

CreateUserData.prototype['profile_file'] = undefined;
/**
 * Determines whether to create an access token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, an access token is not required when the user logs in. (Default: false)
 * @member {Boolean} issue_access_token
 */

CreateUserData.prototype['issue_access_token'] = undefined;
/**
 * Specifies an array of unique keys of the user which is provided to Sendbird server for discovering friends. By using the keys, the server can identify and match the user with other users.
 * @member {Array.<String>} discovery_keys
 */

CreateUserData.prototype['discovery_keys'] = undefined;
/**
 * Specifies a `JSON` object to store key-value items for additional user information such as phone number, email or a long description of the user. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {String} metadata
 */

CreateUserData.prototype['metadata'] = undefined;
var _default = CreateUserData;
exports["default"] = _default;