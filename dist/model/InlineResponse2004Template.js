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
 * The InlineResponse2004Template model module.
 * @module model/InlineResponse2004Template
 * @version 1.0.0
 */
var InlineResponse2004Template = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004Template</code>.
   * @alias module:model/InlineResponse2004Template
   */
  function InlineResponse2004Template() {
    _classCallCheck(this, InlineResponse2004Template);

    InlineResponse2004Template.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004Template, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse2004Template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Template} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Template} The populated <code>InlineResponse2004Template</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004Template();

        if (data.hasOwnProperty('MESG')) {
          obj['MESG'] = _ApiClient["default"].convertToType(data['MESG'], 'String');
        }

        if (data.hasOwnProperty('FILE')) {
          obj['FILE'] = _ApiClient["default"].convertToType(data['FILE'], 'String');
        }

        if (data.hasOwnProperty('ADMM')) {
          obj['ADMM'] = _ApiClient["default"].convertToType(data['ADMM'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004Template;
}();
/**
 * @member {String} MESG
 */


InlineResponse2004Template.prototype['MESG'] = undefined;
/**
 * @member {String} FILE
 */

InlineResponse2004Template.prototype['FILE'] = undefined;
/**
 * @member {String} ADMM
 */

InlineResponse2004Template.prototype['ADMM'] = undefined;
var _default = InlineResponse2004Template;
exports["default"] = _default;