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
 * The UpdateExtraDataInMessageResponseSortedMetaarrayInner model module.
 * @module model/UpdateExtraDataInMessageResponseSortedMetaarrayInner
 * @version 1.0.7
 */
var UpdateExtraDataInMessageResponseSortedMetaarrayInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateExtraDataInMessageResponseSortedMetaarrayInner</code>.
   * @alias module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner
   */
  function UpdateExtraDataInMessageResponseSortedMetaarrayInner() {
    _classCallCheck(this, UpdateExtraDataInMessageResponseSortedMetaarrayInner);

    UpdateExtraDataInMessageResponseSortedMetaarrayInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateExtraDataInMessageResponseSortedMetaarrayInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateExtraDataInMessageResponseSortedMetaarrayInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner} obj Optional instance to populate.
     * @return {module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner} The populated <code>UpdateExtraDataInMessageResponseSortedMetaarrayInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateExtraDataInMessageResponseSortedMetaarrayInner();

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

  return UpdateExtraDataInMessageResponseSortedMetaarrayInner;
}();
/**
 * @member {Array.<String>} value
 */


UpdateExtraDataInMessageResponseSortedMetaarrayInner.prototype['value'] = undefined;
/**
 * @member {String} key
 */

UpdateExtraDataInMessageResponseSortedMetaarrayInner.prototype['key'] = undefined;
var _default = UpdateExtraDataInMessageResponseSortedMetaarrayInner;
exports["default"] = _default;