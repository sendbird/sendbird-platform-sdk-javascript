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
 * The Function model module.
 * @module model/Function
 * @version 0.0.16
 */
var Function = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Function</code>.
   * @alias module:model/Function
   */
  function Function() {
    _classCallCheck(this, Function);
    Function.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Function, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>Function</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Function} obj Optional instance to populate.
     * @return {module:model/Function} The populated <code>Function</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Function();
        if (data.hasOwnProperty('arguments')) {
          obj['arguments'] = _ApiClient["default"].convertToType(data['arguments'], Object);
        }
        if (data.hasOwnProperty('caller')) {
          obj['caller'] = Function.constructFromObject(data['caller']);
        }
        if (data.hasOwnProperty('length')) {
          obj['length'] = _ApiClient["default"].convertToType(data['length'], 'Number');
        }
        if (data.hasOwnProperty('prototype')) {
          obj['prototype'] = _ApiClient["default"].convertToType(data['prototype'], Object);
        }
      }
      return obj;
    }
  }]);
  return Function;
}();
/**
 * @member {Object} arguments
 */
Function.prototype['arguments'] = undefined;

/**
 * @member {module:model/Function} caller
 */
Function.prototype['caller'] = undefined;

/**
 * @member {Number} length
 */
Function.prototype['length'] = undefined;

/**
 * @member {Object} prototype
 */
Function.prototype['prototype'] = undefined;
var _default = Function;
exports["default"] = _default;