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
 * The InlineResponse20040CreateChannelOptions model module.
 * @module model/InlineResponse20040CreateChannelOptions
 * @version 1.0.0
 */
var InlineResponse20040CreateChannelOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20040CreateChannelOptions</code>.
   * @alias module:model/InlineResponse20040CreateChannelOptions
   */
  function InlineResponse20040CreateChannelOptions() {
    _classCallCheck(this, InlineResponse20040CreateChannelOptions);

    InlineResponse20040CreateChannelOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20040CreateChannelOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20040CreateChannelOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20040CreateChannelOptions} obj Optional instance to populate.
     * @return {module:model/InlineResponse20040CreateChannelOptions} The populated <code>InlineResponse20040CreateChannelOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20040CreateChannelOptions();

        if (data.hasOwnProperty('distinct')) {
          obj['distinct'] = _ApiClient["default"].convertToType(data['distinct'], 'Boolean');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20040CreateChannelOptions;
}();
/**
 * @member {Boolean} distinct
 */


InlineResponse20040CreateChannelOptions.prototype['distinct'] = undefined;
/**
 * @member {String} data
 */

InlineResponse20040CreateChannelOptions.prototype['data'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20040CreateChannelOptions.prototype['name'] = undefined;
/**
 * @member {String} cover_url
 */

InlineResponse20040CreateChannelOptions.prototype['cover_url'] = undefined;
/**
 * @member {String} custom_type
 */

InlineResponse20040CreateChannelOptions.prototype['custom_type'] = undefined;
var _default = InlineResponse20040CreateChannelOptions;
exports["default"] = _default;