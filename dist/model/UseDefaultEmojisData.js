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
 * The UseDefaultEmojisData model module.
 * @module model/UseDefaultEmojisData
 * @version 0.0.13
 */
var UseDefaultEmojisData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UseDefaultEmojisData</code>.
   * @alias module:model/UseDefaultEmojisData
   * @param useDefaultEmoji {Boolean} Determines whether to use the 7 default emojis initially provided.
   */
  function UseDefaultEmojisData(useDefaultEmoji) {
    _classCallCheck(this, UseDefaultEmojisData);

    UseDefaultEmojisData.initialize(this, useDefaultEmoji);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UseDefaultEmojisData, null, [{
    key: "initialize",
    value: function initialize(obj, useDefaultEmoji) {
      obj['use_default_emoji'] = useDefaultEmoji;
    }
    /**
     * Constructs a <code>UseDefaultEmojisData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UseDefaultEmojisData} obj Optional instance to populate.
     * @return {module:model/UseDefaultEmojisData} The populated <code>UseDefaultEmojisData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UseDefaultEmojisData();

        if (data.hasOwnProperty('use_default_emoji')) {
          obj['use_default_emoji'] = _ApiClient["default"].convertToType(data['use_default_emoji'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UseDefaultEmojisData;
}();
/**
 * Determines whether to use the 7 default emojis initially provided.
 * @member {Boolean} use_default_emoji
 */


UseDefaultEmojisData.prototype['use_default_emoji'] = undefined;
var _default = UseDefaultEmojisData;
exports["default"] = _default;