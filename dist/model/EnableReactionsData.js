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
 * The EnableReactionsData model module.
 * @module model/EnableReactionsData
 * @version 1.0.7
 */
var EnableReactionsData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EnableReactionsData</code>.
   * @alias module:model/EnableReactionsData
   * @param enabled {Boolean} Determines whether to turn on the message reaction feature. (Default: false)
   */
  function EnableReactionsData(enabled) {
    _classCallCheck(this, EnableReactionsData);

    EnableReactionsData.initialize(this, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableReactionsData, null, [{
    key: "initialize",
    value: function initialize(obj, enabled) {
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>EnableReactionsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableReactionsData} obj Optional instance to populate.
     * @return {module:model/EnableReactionsData} The populated <code>EnableReactionsData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableReactionsData();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EnableReactionsData;
}();
/**
 * Determines whether to turn on the message reaction feature. (Default: false)
 * @member {Boolean} enabled
 */


EnableReactionsData.prototype['enabled'] = undefined;
var _default = EnableReactionsData;
exports["default"] = _default;