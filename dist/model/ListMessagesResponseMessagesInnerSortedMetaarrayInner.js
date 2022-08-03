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
 * The ListMessagesResponseMessagesInnerSortedMetaarrayInner model module.
 * @module model/ListMessagesResponseMessagesInnerSortedMetaarrayInner
 * @version 1.0.7
 */
var ListMessagesResponseMessagesInnerSortedMetaarrayInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListMessagesResponseMessagesInnerSortedMetaarrayInner</code>.
   * @alias module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner
   */
  function ListMessagesResponseMessagesInnerSortedMetaarrayInner() {
    _classCallCheck(this, ListMessagesResponseMessagesInnerSortedMetaarrayInner);

    ListMessagesResponseMessagesInnerSortedMetaarrayInner.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListMessagesResponseMessagesInnerSortedMetaarrayInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListMessagesResponseMessagesInnerSortedMetaarrayInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner} The populated <code>ListMessagesResponseMessagesInnerSortedMetaarrayInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListMessagesResponseMessagesInnerSortedMetaarrayInner();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ListMessagesResponseMessagesInnerSortedMetaarrayInner;
}();
/**
 * @member {String} key
 */


ListMessagesResponseMessagesInnerSortedMetaarrayInner.prototype['key'] = undefined;
/**
 * @member {Array.<String>} value
 */

ListMessagesResponseMessagesInnerSortedMetaarrayInner.prototype['value'] = undefined;
var _default = ListMessagesResponseMessagesInnerSortedMetaarrayInner;
exports["default"] = _default;