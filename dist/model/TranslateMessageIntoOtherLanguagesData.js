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
 * The TranslateMessageIntoOtherLanguagesData model module.
 * @module model/TranslateMessageIntoOtherLanguagesData
 * @version 0.0.13
 */
var TranslateMessageIntoOtherLanguagesData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TranslateMessageIntoOtherLanguagesData</code>.
   * @alias module:model/TranslateMessageIntoOtherLanguagesData
   */
  function TranslateMessageIntoOtherLanguagesData() {
    _classCallCheck(this, TranslateMessageIntoOtherLanguagesData);

    TranslateMessageIntoOtherLanguagesData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TranslateMessageIntoOtherLanguagesData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TranslateMessageIntoOtherLanguagesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TranslateMessageIntoOtherLanguagesData} obj Optional instance to populate.
     * @return {module:model/TranslateMessageIntoOtherLanguagesData} The populated <code>TranslateMessageIntoOtherLanguagesData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TranslateMessageIntoOtherLanguagesData();

        if (data.hasOwnProperty('target_langs')) {
          obj['target_langs'] = _ApiClient["default"].convertToType(data['target_langs'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return TranslateMessageIntoOtherLanguagesData;
}();
/**
 * Specifies an array of one or more codes of [translation](/docs/chat/v3/platform-api/message/translations/translation-engine) to translate the message.
 * @member {Array.<String>} target_langs
 */


TranslateMessageIntoOtherLanguagesData.prototype['target_langs'] = undefined;
var _default = TranslateMessageIntoOtherLanguagesData;
exports["default"] = _default;