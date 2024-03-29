"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Function = _interopRequireDefault(require("./Function"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The SBObject model module.
 * @module model/SBObject
 * @version 0.0.16
 */
var SBObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SBObject</code>.
   * @alias module:model/SBObject
   */
  function SBObject() {
    _classCallCheck(this, SBObject);
    SBObject.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(SBObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>SBObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SBObject} obj Optional instance to populate.
     * @return {module:model/SBObject} The populated <code>SBObject</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SBObject();
        if (data.hasOwnProperty('constructor')) {
          obj['constructor'] = _Function["default"].constructFromObject(data['constructor']);
        }
      }
      return obj;
    }
  }]);
  return SBObject;
}();
/**
 * @member {module:model/Function} constructor
 */
SBObject.prototype['constructor'] = undefined;
var _default = SBObject;
exports["default"] = _default;