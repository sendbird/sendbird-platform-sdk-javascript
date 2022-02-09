"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20015PushMessageTemplates = _interopRequireDefault(require("./InlineResponse20015PushMessageTemplates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20015 model module.
 * @module model/InlineResponse20015
 * @version 1.0.0
 */
var InlineResponse20015 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20015</code>.
   * @alias module:model/InlineResponse20015
   */
  function InlineResponse20015() {
    _classCallCheck(this, InlineResponse20015);

    InlineResponse20015.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20015, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20015</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20015} obj Optional instance to populate.
     * @return {module:model/InlineResponse20015} The populated <code>InlineResponse20015</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20015();

        if (data.hasOwnProperty('push_message_templates')) {
          obj['push_message_templates'] = _ApiClient["default"].convertToType(data['push_message_templates'], [_InlineResponse20015PushMessageTemplates["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20015;
}();
/**
 * @member {Array.<module:model/InlineResponse20015PushMessageTemplates>} push_message_templates
 */


InlineResponse20015.prototype['push_message_templates'] = undefined;
var _default = InlineResponse20015;
exports["default"] = _default;