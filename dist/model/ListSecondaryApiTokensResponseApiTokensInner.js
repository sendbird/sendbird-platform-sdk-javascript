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
 * The ListSecondaryApiTokensResponseApiTokensInner model module.
 * @module model/ListSecondaryApiTokensResponseApiTokensInner
 * @version 0.0.14
 */var ListSecondaryApiTokensResponseApiTokensInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSecondaryApiTokensResponseApiTokensInner</code>.
   * @alias module:model/ListSecondaryApiTokensResponseApiTokensInner
   */
  function ListSecondaryApiTokensResponseApiTokensInner() {
    _classCallCheck(this, ListSecondaryApiTokensResponseApiTokensInner);
    ListSecondaryApiTokensResponseApiTokensInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListSecondaryApiTokensResponseApiTokensInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListSecondaryApiTokensResponseApiTokensInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSecondaryApiTokensResponseApiTokensInner} obj Optional instance to populate.
     * @return {module:model/ListSecondaryApiTokensResponseApiTokensInner} The populated <code>ListSecondaryApiTokensResponseApiTokensInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSecondaryApiTokensResponseApiTokensInner();
        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListSecondaryApiTokensResponseApiTokensInner;
}(); /**
      * @member {String} token
      */
ListSecondaryApiTokensResponseApiTokensInner.prototype['token'] = undefined;

/**
 * @member {Number} created_at
 */
ListSecondaryApiTokensResponseApiTokensInner.prototype['created_at'] = undefined;
var _default = ListSecondaryApiTokensResponseApiTokensInner;
exports["default"] = _default;