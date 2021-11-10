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
 * The AddFcmPushConfigurationData model module.
 * @module model/AddFcmPushConfigurationData
 * @version 1.0.0
 */
var AddFcmPushConfigurationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddFcmPushConfigurationData</code>.
   * @alias module:model/AddFcmPushConfigurationData
   * @param apiKey {String} Specifies the FCM server key to register.
   * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
   */
  function AddFcmPushConfigurationData(apiKey, pushSound) {
    _classCallCheck(this, AddFcmPushConfigurationData);

    AddFcmPushConfigurationData.initialize(this, apiKey, pushSound);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddFcmPushConfigurationData, null, [{
    key: "initialize",
    value: function initialize(obj, apiKey, pushSound) {
      obj['api_key'] = apiKey;
      obj['push_sound'] = pushSound;
    }
    /**
     * Constructs a <code>AddFcmPushConfigurationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFcmPushConfigurationData} obj Optional instance to populate.
     * @return {module:model/AddFcmPushConfigurationData} The populated <code>AddFcmPushConfigurationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddFcmPushConfigurationData();

        if (data.hasOwnProperty('api_key')) {
          obj['api_key'] = _ApiClient["default"].convertToType(data['api_key'], 'String');
        }

        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddFcmPushConfigurationData;
}();
/**
 * Specifies the FCM server key to register.
 * @member {String} api_key
 */


AddFcmPushConfigurationData.prototype['api_key'] = undefined;
/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
 * @member {String} push_sound
 */

AddFcmPushConfigurationData.prototype['push_sound'] = undefined;
var _default = AddFcmPushConfigurationData;
exports["default"] = _default;