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
 * The InlineResponse20061 model module.
 * @module model/InlineResponse20061
 * @version 1.0.0
 */
var InlineResponse20061 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20061</code>.
   * @alias module:model/InlineResponse20061
   */
  function InlineResponse20061() {
    _classCallCheck(this, InlineResponse20061);

    InlineResponse20061.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20061, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20061</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061} The populated <code>InlineResponse20061</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20061();

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('include_ts')) {
          obj['include_ts'] = _ApiClient["default"].convertToType(data['include_ts'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20061;
}();
/**
 * @member {Object.<String, String>} metadata
 */


InlineResponse20061.prototype['metadata'] = undefined;
/**
 * @member {Number} include_ts
 */

InlineResponse20061.prototype['include_ts'] = undefined;
var _default = InlineResponse20061;
exports["default"] = _default;