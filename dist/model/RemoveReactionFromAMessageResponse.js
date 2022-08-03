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
 * The RemoveReactionFromAMessageResponse model module.
 * @module model/RemoveReactionFromAMessageResponse
 * @version 1.0.7
 */
var RemoveReactionFromAMessageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoveReactionFromAMessageResponse</code>.
   * @alias module:model/RemoveReactionFromAMessageResponse
   */
  function RemoveReactionFromAMessageResponse() {
    _classCallCheck(this, RemoveReactionFromAMessageResponse);

    RemoveReactionFromAMessageResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoveReactionFromAMessageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoveReactionFromAMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoveReactionFromAMessageResponse} obj Optional instance to populate.
     * @return {module:model/RemoveReactionFromAMessageResponse} The populated <code>RemoveReactionFromAMessageResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoveReactionFromAMessageResponse();

        if (data.hasOwnProperty('reaction')) {
          obj['reaction'] = _ApiClient["default"].convertToType(data['reaction'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'Number');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('msg_id')) {
          obj['msg_id'] = _ApiClient["default"].convertToType(data['msg_id'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }

        if (data.hasOwnProperty('operation')) {
          obj['operation'] = _ApiClient["default"].convertToType(data['operation'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoveReactionFromAMessageResponse;
}();
/**
 * @member {String} reaction
 */


RemoveReactionFromAMessageResponse.prototype['reaction'] = undefined;
/**
 * @member {Number} user_id
 */

RemoveReactionFromAMessageResponse.prototype['user_id'] = undefined;
/**
 * @member {Boolean} success
 */

RemoveReactionFromAMessageResponse.prototype['success'] = undefined;
/**
 * @member {Number} msg_id
 */

RemoveReactionFromAMessageResponse.prototype['msg_id'] = undefined;
/**
 * @member {Number} updated_at
 */

RemoveReactionFromAMessageResponse.prototype['updated_at'] = undefined;
/**
 * @member {String} operation
 */

RemoveReactionFromAMessageResponse.prototype['operation'] = undefined;
var _default = RemoveReactionFromAMessageResponse;
exports["default"] = _default;