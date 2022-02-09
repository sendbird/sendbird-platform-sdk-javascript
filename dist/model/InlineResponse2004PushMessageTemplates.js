"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004Template = _interopRequireDefault(require("./InlineResponse2004Template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2004PushMessageTemplates model module.
 * @module model/InlineResponse2004PushMessageTemplates
 * @version 1.0.0
 */
var InlineResponse2004PushMessageTemplates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004PushMessageTemplates</code>.
   * @alias module:model/InlineResponse2004PushMessageTemplates
   */
  function InlineResponse2004PushMessageTemplates() {
    _classCallCheck(this, InlineResponse2004PushMessageTemplates);

    InlineResponse2004PushMessageTemplates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004PushMessageTemplates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2004PushMessageTemplates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004PushMessageTemplates} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004PushMessageTemplates} The populated <code>InlineResponse2004PushMessageTemplates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004PushMessageTemplates();

        if (data.hasOwnProperty('template_name')) {
          obj['template_name'] = _ApiClient["default"].convertToType(data['template_name'], 'String');
        }

        if (data.hasOwnProperty('template')) {
          obj['template'] = _InlineResponse2004Template["default"].constructFromObject(data['template']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004PushMessageTemplates;
}();
/**
 * @member {String} template_name
 */


InlineResponse2004PushMessageTemplates.prototype['template_name'] = undefined;
/**
 * @member {module:model/InlineResponse2004Template} template
 */

InlineResponse2004PushMessageTemplates.prototype['template'] = undefined;
var _default = InlineResponse2004PushMessageTemplates;
exports["default"] = _default;