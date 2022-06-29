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
 * The ViewNumberOfChannelsByJoinStatusResponse model module.
 * @module model/ViewNumberOfChannelsByJoinStatusResponse
 * @version 1.0.3
 */
var ViewNumberOfChannelsByJoinStatusResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ViewNumberOfChannelsByJoinStatusResponse</code>.
   * @alias module:model/ViewNumberOfChannelsByJoinStatusResponse
   */
  function ViewNumberOfChannelsByJoinStatusResponse() {
    _classCallCheck(this, ViewNumberOfChannelsByJoinStatusResponse);

    ViewNumberOfChannelsByJoinStatusResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ViewNumberOfChannelsByJoinStatusResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ViewNumberOfChannelsByJoinStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewNumberOfChannelsByJoinStatusResponse} obj Optional instance to populate.
     * @return {module:model/ViewNumberOfChannelsByJoinStatusResponse} The populated <code>ViewNumberOfChannelsByJoinStatusResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ViewNumberOfChannelsByJoinStatusResponse();

        if (data.hasOwnProperty('group_channel_count')) {
          obj['group_channel_count'] = _ApiClient["default"].convertToType(data['group_channel_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ViewNumberOfChannelsByJoinStatusResponse;
}();
/**
 * @member {Number} group_channel_count
 */


ViewNumberOfChannelsByJoinStatusResponse.prototype['group_channel_count'] = undefined;
var _default = ViewNumberOfChannelsByJoinStatusResponse;
exports["default"] = _default;