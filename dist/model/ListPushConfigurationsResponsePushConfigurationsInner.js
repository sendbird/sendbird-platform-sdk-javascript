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
 * The ListPushConfigurationsResponsePushConfigurationsInner model module.
 * @module model/ListPushConfigurationsResponsePushConfigurationsInner
 * @version 0.0.14
 */var ListPushConfigurationsResponsePushConfigurationsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListPushConfigurationsResponsePushConfigurationsInner</code>.
   * @alias module:model/ListPushConfigurationsResponsePushConfigurationsInner
   */
  function ListPushConfigurationsResponsePushConfigurationsInner() {
    _classCallCheck(this, ListPushConfigurationsResponsePushConfigurationsInner);
    ListPushConfigurationsResponsePushConfigurationsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListPushConfigurationsResponsePushConfigurationsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListPushConfigurationsResponsePushConfigurationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPushConfigurationsResponsePushConfigurationsInner} obj Optional instance to populate.
     * @return {module:model/ListPushConfigurationsResponsePushConfigurationsInner} The populated <code>ListPushConfigurationsResponsePushConfigurationsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListPushConfigurationsResponsePushConfigurationsInner();
        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
        if (data.hasOwnProperty('push_type')) {
          obj['push_type'] = _ApiClient["default"].convertToType(data['push_type'], 'String');
        }
        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
        if (data.hasOwnProperty('api_key')) {
          obj['api_key'] = _ApiClient["default"].convertToType(data['api_key'], 'String');
        }
        if (data.hasOwnProperty('sender_id')) {
          obj['sender_id'] = _ApiClient["default"].convertToType(data['sender_id'], 'String');
        }
        if (data.hasOwnProperty('push_sound')) {
          obj['push_sound'] = _ApiClient["default"].convertToType(data['push_sound'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListPushConfigurationsResponsePushConfigurationsInner;
}(); /**
      * @member {String} id
      */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['push_type'] = undefined;

/**
 * @member {Number} created_at
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['created_at'] = undefined;

/**
 * @member {String} api_key
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['api_key'] = undefined;

/**
 * @member {String} sender_id
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['sender_id'] = undefined;

/**
 * @member {String} push_sound
 */
ListPushConfigurationsResponsePushConfigurationsInner.prototype['push_sound'] = undefined;
var _default = ListPushConfigurationsResponsePushConfigurationsInner;
exports["default"] = _default;