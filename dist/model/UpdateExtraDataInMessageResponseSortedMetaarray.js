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
 * The UpdateExtraDataInMessageResponseSortedMetaarray model module.
 * @module model/UpdateExtraDataInMessageResponseSortedMetaarray
 * @version 1.0.3
 */
var UpdateExtraDataInMessageResponseSortedMetaarray = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateExtraDataInMessageResponseSortedMetaarray</code>.
   * @alias module:model/UpdateExtraDataInMessageResponseSortedMetaarray
   */
  function UpdateExtraDataInMessageResponseSortedMetaarray() {
    _classCallCheck(this, UpdateExtraDataInMessageResponseSortedMetaarray);

    UpdateExtraDataInMessageResponseSortedMetaarray.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateExtraDataInMessageResponseSortedMetaarray, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateExtraDataInMessageResponseSortedMetaarray</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtraDataInMessageResponseSortedMetaarray} obj Optional instance to populate.
     * @return {module:model/UpdateExtraDataInMessageResponseSortedMetaarray} The populated <code>UpdateExtraDataInMessageResponseSortedMetaarray</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateExtraDataInMessageResponseSortedMetaarray();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], ['String']);
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateExtraDataInMessageResponseSortedMetaarray;
}();
/**
 * @member {Array.<String>} value
 */


UpdateExtraDataInMessageResponseSortedMetaarray.prototype['value'] = undefined;
/**
 * @member {String} key
 */

UpdateExtraDataInMessageResponseSortedMetaarray.prototype['key'] = undefined;
var _default = UpdateExtraDataInMessageResponseSortedMetaarray;
exports["default"] = _default;