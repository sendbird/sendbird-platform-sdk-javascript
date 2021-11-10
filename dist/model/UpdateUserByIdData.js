"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdateUserByIdData model module.
 * @module model/UpdateUserByIdData
 * @version 1.0.0
 */
var UpdateUserByIdData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateUserByIdData</code>.
   * @alias module:model/UpdateUserByIdData
   * @param userId {String} Specifies the unique ID of the user to update.
   * @param nickname {String} Specifies the user’s nickname. The length is limited to 80 characters.
   * @param profileUrl {String} Specifies the URL of the user’s profile image. The length is limited to 2,048 characters.<br /><br /> The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter's domain set.
   * @param profileFile {File} Uploads the file of the user's profile image. An acceptable image is limited to `JPG` (.jpg), `JPEG` (.jpeg), or `PNG` (.png) file of up to 25 MB.
   * @param issueAccessToken {Boolean} Determines whether to revoke the existing access token and create a new one for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, an access token is not required when the user logs in. (Default: false)
   * @param issueSessionToken {Boolean} Determines whether to add a new session token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, a session token is not required when the user logs in. (Default: false)
   * @param sessionTokenExpiresAt {Number} Specifies the time for the issued session token to expire in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The length should be 13. If not specified and the issue_session_token property above is true, the value of this property is set to the sum of the current timestamp and 604800000 by default, which indicates that the token will be valid for the next 7 days starting from the current timestamp.
   * @param isActive {Boolean} Determines whether to activate or deactivate the user within the application.
   * @param lastSeenAt {Number} Specifies the time when the user goes offline, to indicate when they were last online, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format.
   * @param discoveryKeys {Array.<String>} Specifies an array of unique keys of the user which is provided to Sendbird server for discovering friends. By using the keys, the server can identify and match the user with other users.
   * @param preferredLanguages {Array.<String>} Specifies an array of one or more [language codes](/docs/chat/v3/platform-api/guides/miscellaneous#2-language-codes-for-auto-translation) to translate notification messages to preferred languages. Up to 4 languages can be set for the user. If messages are sent in one of the preferred languages, notification messages won't be translated. If messages are sent in a language other than the preferred languages, notification messages will be translated into the first language in the array. In addition, the messages translated into other preferred languages will be provided in the `sendbird` property of a notification message payload.
   * @param leaveAllWhenDeactivated {Boolean} Determines whether the user leaves all joined group channels upon deactivation. Note that this value is true by default. Use in conjunction with the is_active property above.
   */
  function UpdateUserByIdData(userId, nickname, profileUrl, profileFile, issueAccessToken, issueSessionToken, sessionTokenExpiresAt, isActive, lastSeenAt, discoveryKeys, preferredLanguages, leaveAllWhenDeactivated) {
    _classCallCheck(this, UpdateUserByIdData);

    UpdateUserByIdData.initialize(this, userId, nickname, profileUrl, profileFile, issueAccessToken, issueSessionToken, sessionTokenExpiresAt, isActive, lastSeenAt, discoveryKeys, preferredLanguages, leaveAllWhenDeactivated);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateUserByIdData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, nickname, profileUrl, profileFile, issueAccessToken, issueSessionToken, sessionTokenExpiresAt, isActive, lastSeenAt, discoveryKeys, preferredLanguages, leaveAllWhenDeactivated) {
      obj['user_id'] = userId;
      obj['nickname'] = nickname;
      obj['profile_url'] = profileUrl;
      obj['profile_file'] = profileFile;
      obj['issue_access_token'] = issueAccessToken;
      obj['issue_session_token'] = issueSessionToken;
      obj['session_token_expires_at'] = sessionTokenExpiresAt;
      obj['is_active'] = isActive;
      obj['last_seen_at'] = lastSeenAt;
      obj['discovery_keys'] = discoveryKeys;
      obj['preferred_languages'] = preferredLanguages;
      obj['leave_all_when_deactivated'] = leaveAllWhenDeactivated;
    }
    /**
     * Constructs a <code>UpdateUserByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateUserByIdData} The populated <code>UpdateUserByIdData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateUserByIdData();

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

        if (data.hasOwnProperty('issue_session_token')) {
          obj['issue_session_token'] = _ApiClient["default"].convertToType(data['issue_session_token'], 'Boolean');
        }

        if (data.hasOwnProperty('session_token_expires_at')) {
          obj['session_token_expires_at'] = _ApiClient["default"].convertToType(data['session_token_expires_at'], 'Number');
        }

        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }

        if (data.hasOwnProperty('last_seen_at')) {
          obj['last_seen_at'] = _ApiClient["default"].convertToType(data['last_seen_at'], 'Number');
        }

        if (data.hasOwnProperty('discovery_keys')) {
          obj['discovery_keys'] = _ApiClient["default"].convertToType(data['discovery_keys'], ['String']);
        }

        if (data.hasOwnProperty('preferred_languages')) {
          obj['preferred_languages'] = _ApiClient["default"].convertToType(data['preferred_languages'], ['String']);
        }

        if (data.hasOwnProperty('leave_all_when_deactivated')) {
          obj['leave_all_when_deactivated'] = _ApiClient["default"].convertToType(data['leave_all_when_deactivated'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UpdateUserByIdData;
}();
/**
 * Specifies the unique ID of the user to update.
 * @member {String} user_id
 */


UpdateUserByIdData.prototype['user_id'] = undefined;
/**
 * Specifies the user’s nickname. The length is limited to 80 characters.
 * @member {String} nickname
 */

UpdateUserByIdData.prototype['nickname'] = undefined;
/**
 * Specifies the URL of the user’s profile image. The length is limited to 2,048 characters.<br /><br /> The [domain filter](/docs/chat/v3/platform-api/guides/filter-and-moderation#2-domain-filter) filters out the request if the value of this property matches the filter's domain set.
 * @member {String} profile_url
 */

UpdateUserByIdData.prototype['profile_url'] = undefined;
/**
 * Uploads the file of the user's profile image. An acceptable image is limited to `JPG` (.jpg), `JPEG` (.jpeg), or `PNG` (.png) file of up to 25 MB.
 * @member {File} profile_file
 */

UpdateUserByIdData.prototype['profile_file'] = undefined;
/**
 * Determines whether to revoke the existing access token and create a new one for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, an access token is not required when the user logs in. (Default: false)
 * @member {Boolean} issue_access_token
 */

UpdateUserByIdData.prototype['issue_access_token'] = undefined;
/**
 * Determines whether to add a new session token for the user. If true, an opaque string token is issued and provided upon creation, which should be passed whenever the user logs in. If false, a session token is not required when the user logs in. (Default: false)
 * @member {Boolean} issue_session_token
 */

UpdateUserByIdData.prototype['issue_session_token'] = undefined;
/**
 * Specifies the time for the issued session token to expire in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format. The length should be 13. If not specified and the issue_session_token property above is true, the value of this property is set to the sum of the current timestamp and 604800000 by default, which indicates that the token will be valid for the next 7 days starting from the current timestamp.
 * @member {Number} session_token_expires_at
 */

UpdateUserByIdData.prototype['session_token_expires_at'] = undefined;
/**
 * Determines whether to activate or deactivate the user within the application.
 * @member {Boolean} is_active
 */

UpdateUserByIdData.prototype['is_active'] = undefined;
/**
 * Specifies the time when the user goes offline, to indicate when they were last online, in [Unix milliseconds](/docs/chat/v3/platform-api/guides/miscellaneous#2-timestamps) format.
 * @member {Number} last_seen_at
 */

UpdateUserByIdData.prototype['last_seen_at'] = undefined;
/**
 * Specifies an array of unique keys of the user which is provided to Sendbird server for discovering friends. By using the keys, the server can identify and match the user with other users.
 * @member {Array.<String>} discovery_keys
 */

UpdateUserByIdData.prototype['discovery_keys'] = undefined;
/**
 * Specifies an array of one or more [language codes](/docs/chat/v3/platform-api/guides/miscellaneous#2-language-codes-for-auto-translation) to translate notification messages to preferred languages. Up to 4 languages can be set for the user. If messages are sent in one of the preferred languages, notification messages won't be translated. If messages are sent in a language other than the preferred languages, notification messages will be translated into the first language in the array. In addition, the messages translated into other preferred languages will be provided in the `sendbird` property of a notification message payload.
 * @member {Array.<String>} preferred_languages
 */

UpdateUserByIdData.prototype['preferred_languages'] = undefined;
/**
 * Determines whether the user leaves all joined group channels upon deactivation. Note that this value is true by default. Use in conjunction with the is_active property above.
 * @member {Boolean} leave_all_when_deactivated
 */

UpdateUserByIdData.prototype['leave_all_when_deactivated'] = undefined;
var _default = UpdateUserByIdData;
exports["default"] = _default;