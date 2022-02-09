"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20063File = _interopRequireDefault(require("./InlineResponse20063File"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20068Requests model module.
 * @module model/InlineResponse20068Requests
 * @version 1.0.0
 */
var InlineResponse20068Requests = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20068Requests</code>.
   * @alias module:model/InlineResponse20068Requests
   */
  function InlineResponse20068Requests() {
    _classCallCheck(this, InlineResponse20068Requests);

    InlineResponse20068Requests.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20068Requests, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20068Requests</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20068Requests} obj Optional instance to populate.
     * @return {module:model/InlineResponse20068Requests} The populated <code>InlineResponse20068Requests</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20068Requests();

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _InlineResponse20063File["default"].constructFromObject(data['files']);
        }

        if (data.hasOwnProperty('user_ids')) {
          obj['user_ids'] = _ApiClient["default"].convertToType(data['user_ids'], ['String']);
        }

        if (data.hasOwnProperty('channel_delete_option')) {
          obj['channel_delete_option'] = _ApiClient["default"].convertToType(data['channel_delete_option'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20068Requests;
}();
/**
 * @member {String} request_id
 */


InlineResponse20068Requests.prototype['request_id'] = undefined;
/**
 * @member {String} action
 */

InlineResponse20068Requests.prototype['action'] = undefined;
/**
 * @member {String} status
 */

InlineResponse20068Requests.prototype['status'] = undefined;
/**
 * @member {String} user_id
 */

InlineResponse20068Requests.prototype['user_id'] = undefined;
/**
 * @member {module:model/InlineResponse20063File} files
 */

InlineResponse20068Requests.prototype['files'] = undefined;
/**
 * @member {Array.<String>} user_ids
 */

InlineResponse20068Requests.prototype['user_ids'] = undefined;
/**
 * @member {String} channel_delete_option
 */

InlineResponse20068Requests.prototype['channel_delete_option'] = undefined;
/**
 * @member {Number} created_at
 */

InlineResponse20068Requests.prototype['created_at'] = undefined;
var _default = InlineResponse20068Requests;
exports["default"] = _default;