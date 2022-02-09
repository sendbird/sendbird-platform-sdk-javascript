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
 * The InlineResponse20015PushMessageTemplates model module.
 * @module model/InlineResponse20015PushMessageTemplates
 * @version 1.0.0
 */
var InlineResponse20015PushMessageTemplates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20015PushMessageTemplates</code>.
   * @alias module:model/InlineResponse20015PushMessageTemplates
   */
  function InlineResponse20015PushMessageTemplates() {
    _classCallCheck(this, InlineResponse20015PushMessageTemplates);

    InlineResponse20015PushMessageTemplates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20015PushMessageTemplates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20015PushMessageTemplates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20015PushMessageTemplates} obj Optional instance to populate.
     * @return {module:model/InlineResponse20015PushMessageTemplates} The populated <code>InlineResponse20015PushMessageTemplates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20015PushMessageTemplates();

        if (data.hasOwnProperty('template_name')) {
          obj['template_name'] = _ApiClient["default"].convertToType(data['template_name'], 'String');
        }

        if (data.hasOwnProperty('template')) {
          obj['template'] = _InlineResponse2004Template["default"].constructFromObject(data['template']);
        }

        if (data.hasOwnProperty('push_message_preview')) {
          obj['push_message_preview'] = _InlineResponse2004Template["default"].constructFromObject(data['push_message_preview']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20015PushMessageTemplates;
}();
/**
 * @member {String} template_name
 */


InlineResponse20015PushMessageTemplates.prototype['template_name'] = undefined;
/**
 * @member {module:model/InlineResponse2004Template} template
 */

InlineResponse20015PushMessageTemplates.prototype['template'] = undefined;
/**
 * @member {module:model/InlineResponse2004Template} push_message_preview
 */

InlineResponse20015PushMessageTemplates.prototype['push_message_preview'] = undefined;
var _default = InlineResponse20015PushMessageTemplates;
exports["default"] = _default;