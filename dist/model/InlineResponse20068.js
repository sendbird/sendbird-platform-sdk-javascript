"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20068Requests = _interopRequireDefault(require("./InlineResponse20068Requests"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20068 model module.
 * @module model/InlineResponse20068
 * @version 1.0.0
 */
var InlineResponse20068 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20068</code>.
   * @alias module:model/InlineResponse20068
   */
  function InlineResponse20068() {
    _classCallCheck(this, InlineResponse20068);

    InlineResponse20068.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20068, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20068</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20068} obj Optional instance to populate.
     * @return {module:model/InlineResponse20068} The populated <code>InlineResponse20068</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20068();

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], [_InlineResponse20068Requests["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20068;
}();
/**
 * @member {Array.<module:model/InlineResponse20068Requests>} requests
 */


InlineResponse20068.prototype['requests'] = undefined;
/**
 * @member {String} next
 */

InlineResponse20068.prototype['next'] = undefined;
var _default = InlineResponse20068;
exports["default"] = _default;