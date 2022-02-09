"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004PushMessageTemplates = _interopRequireDefault(require("./InlineResponse2004PushMessageTemplates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 1.0.0
 */
var InlineResponse2004 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   */
  function InlineResponse2004() {
    _classCallCheck(this, InlineResponse2004);

    InlineResponse2004.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004();

        if (data.hasOwnProperty('push_message_templates')) {
          obj['push_message_templates'] = _ApiClient["default"].convertToType(data['push_message_templates'], [_InlineResponse2004PushMessageTemplates["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004;
}();
/**
 * @member {Array.<module:model/InlineResponse2004PushMessageTemplates>} push_message_templates
 */


InlineResponse2004.prototype['push_message_templates'] = undefined;
var _default = InlineResponse2004;
exports["default"] = _default;