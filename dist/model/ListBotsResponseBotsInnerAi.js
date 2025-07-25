"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  [https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api](https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api)  Contact Support:   Name: Sendbird   Email: [support@sendbird.com](https://mailto:support@sendbird.com)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The ListBotsResponseBotsInnerAi model module.
 * @module model/ListBotsResponseBotsInnerAi
 * @version 2.0.0
 */
var ListBotsResponseBotsInnerAi = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBotsResponseBotsInnerAi</code>.
   * @alias module:model/ListBotsResponseBotsInnerAi
   */
  function ListBotsResponseBotsInnerAi() {
    _classCallCheck(this, ListBotsResponseBotsInnerAi);
    ListBotsResponseBotsInnerAi.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  return _createClass(ListBotsResponseBotsInnerAi, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListBotsResponseBotsInnerAi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBotsResponseBotsInnerAi} obj Optional instance to populate.
     * @return {module:model/ListBotsResponseBotsInnerAi} The populated <code>ListBotsResponseBotsInnerAi</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBotsResponseBotsInnerAi();
        if (data.hasOwnProperty('backend')) {
          obj['backend'] = _ApiClient["default"].convertToType(data['backend'], 'String');
        }
        if (data.hasOwnProperty('feedback')) {
          obj['feedback'] = _ApiClient["default"].convertToType(data['feedback'], 'Boolean');
        }
        if (data.hasOwnProperty('frequency_penalty')) {
          obj['frequency_penalty'] = _ApiClient["default"].convertToType(data['frequency_penalty'], 'Number');
        }
        if (data.hasOwnProperty('instruction_mode')) {
          obj['instruction_mode'] = _ApiClient["default"].convertToType(data['instruction_mode'], Object);
        }
        if (data.hasOwnProperty('max_tokens')) {
          obj['max_tokens'] = _ApiClient["default"].convertToType(data['max_tokens'], 'Number');
        }
        if (data.hasOwnProperty('model')) {
          obj['model'] = _ApiClient["default"].convertToType(data['model'], 'String');
        }
        if (data.hasOwnProperty('presence_penalty')) {
          obj['presence_penalty'] = _ApiClient["default"].convertToType(data['presence_penalty'], 'Number');
        }
        if (data.hasOwnProperty('stream')) {
          obj['stream'] = _ApiClient["default"].convertToType(data['stream'], 'Boolean');
        }
        if (data.hasOwnProperty('system_message')) {
          obj['system_message'] = _ApiClient["default"].convertToType(data['system_message'], 'String');
        }
        if (data.hasOwnProperty('system_message_for_context_prefix')) {
          obj['system_message_for_context_prefix'] = _ApiClient["default"].convertToType(data['system_message_for_context_prefix'], 'String');
        }
        if (data.hasOwnProperty('temperature')) {
          obj['temperature'] = _ApiClient["default"].convertToType(data['temperature'], 'Number');
        }
        if (data.hasOwnProperty('top_p')) {
          obj['top_p'] = _ApiClient["default"].convertToType(data['top_p'], 'Number');
        }
      }
      return obj;
    }
  }]);
}();
/**
 * @member {String} backend
 */
ListBotsResponseBotsInnerAi.prototype['backend'] = undefined;

/**
 * @member {Boolean} feedback
 */
ListBotsResponseBotsInnerAi.prototype['feedback'] = undefined;

/**
 * @member {Number} frequency_penalty
 */
ListBotsResponseBotsInnerAi.prototype['frequency_penalty'] = undefined;

/**
 * @member {Object} instruction_mode
 */
ListBotsResponseBotsInnerAi.prototype['instruction_mode'] = undefined;

/**
 * @member {Number} max_tokens
 */
ListBotsResponseBotsInnerAi.prototype['max_tokens'] = undefined;

/**
 * @member {String} model
 */
ListBotsResponseBotsInnerAi.prototype['model'] = undefined;

/**
 * @member {Number} presence_penalty
 */
ListBotsResponseBotsInnerAi.prototype['presence_penalty'] = undefined;

/**
 * @member {Boolean} stream
 */
ListBotsResponseBotsInnerAi.prototype['stream'] = undefined;

/**
 * @member {String} system_message
 */
ListBotsResponseBotsInnerAi.prototype['system_message'] = undefined;

/**
 * @member {String} system_message_for_context_prefix
 */
ListBotsResponseBotsInnerAi.prototype['system_message_for_context_prefix'] = undefined;

/**
 * @member {Number} temperature
 */
ListBotsResponseBotsInnerAi.prototype['temperature'] = undefined;

/**
 * @member {Number} top_p
 */
ListBotsResponseBotsInnerAi.prototype['top_p'] = undefined;
var _default = exports["default"] = ListBotsResponseBotsInnerAi;