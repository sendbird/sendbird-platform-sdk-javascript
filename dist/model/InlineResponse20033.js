"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20033BannedList = _interopRequireDefault(require("./InlineResponse20033BannedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20033 model module.
 * @module model/InlineResponse20033
 * @version 1.0.0
 */
var InlineResponse20033 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20033</code>.
   * @alias module:model/InlineResponse20033
   */
  function InlineResponse20033() {
    _classCallCheck(this, InlineResponse20033);

    InlineResponse20033.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20033, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20033</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033} The populated <code>InlineResponse20033</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20033();

        if (data.hasOwnProperty('banned_list')) {
          obj['banned_list'] = _ApiClient["default"].convertToType(data['banned_list'], [_InlineResponse20033BannedList["default"]]);
        }

        if (data.hasOwnProperty('total_ban_count')) {
          obj['total_ban_count'] = _ApiClient["default"].convertToType(data['total_ban_count'], 'Number');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20033;
}();
/**
 * @member {Array.<module:model/InlineResponse20033BannedList>} banned_list
 */


InlineResponse20033.prototype['banned_list'] = undefined;
/**
 * @member {Number} total_ban_count
 */

InlineResponse20033.prototype['total_ban_count'] = undefined;
/**
 * @member {String} next
 */

InlineResponse20033.prototype['next'] = undefined;
var _default = InlineResponse20033;
exports["default"] = _default;