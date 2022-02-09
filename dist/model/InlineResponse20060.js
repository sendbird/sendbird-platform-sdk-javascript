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
 * The InlineResponse20060 model module.
 * @module model/InlineResponse20060
 * @version 1.0.0
 */
var InlineResponse20060 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20060</code>.
   * @alias module:model/InlineResponse20060
   */
  function InlineResponse20060() {
    _classCallCheck(this, InlineResponse20060);

    InlineResponse20060.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20060, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20060</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20060} obj Optional instance to populate.
     * @return {module:model/InlineResponse20060} The populated <code>InlineResponse20060</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20060();

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('upsert')) {
          obj['upsert'] = _ApiClient["default"].convertToType(data['upsert'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20060;
}();
/**
 * @member {Object.<String, String>} metadata
 */


InlineResponse20060.prototype['metadata'] = undefined;
/**
 * @member {Boolean} upsert
 */

InlineResponse20060.prototype['upsert'] = undefined;
var _default = InlineResponse20060;
exports["default"] = _default;