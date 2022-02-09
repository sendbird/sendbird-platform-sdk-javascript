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
 * The SendBirdThumbnailObject model module.
 * @module model/SendBirdThumbnailObject
 * @version 1.0.0
 */
var SendBirdThumbnailObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdThumbnailObject</code>.
   * @alias module:model/SendBirdThumbnailObject
   */
  function SendBirdThumbnailObject() {
    _classCallCheck(this, SendBirdThumbnailObject);

    SendBirdThumbnailObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdThumbnailObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdThumbnailObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdThumbnailObject} obj Optional instance to populate.
     * @return {module:model/SendBirdThumbnailObject} The populated <code>SendBirdThumbnailObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdThumbnailObject();

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('plain_url')) {
          obj['plain_url'] = _ApiClient["default"].convertToType(data['plain_url'], 'String');
        }

        if (data.hasOwnProperty('real_height')) {
          obj['real_height'] = _ApiClient["default"].convertToType(data['real_height'], 'Number');
        }

        if (data.hasOwnProperty('real_width')) {
          obj['real_width'] = _ApiClient["default"].convertToType(data['real_width'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdThumbnailObject;
}();
/**
 * @member {Number} height
 */


SendBirdThumbnailObject.prototype['height'] = undefined;
/**
 * @member {String} plain_url
 */

SendBirdThumbnailObject.prototype['plain_url'] = undefined;
/**
 * @member {Number} real_height
 */

SendBirdThumbnailObject.prototype['real_height'] = undefined;
/**
 * @member {Number} real_width
 */

SendBirdThumbnailObject.prototype['real_width'] = undefined;
/**
 * @member {String} url
 */

SendBirdThumbnailObject.prototype['url'] = undefined;
/**
 * @member {Number} width
 */

SendBirdThumbnailObject.prototype['width'] = undefined;
var _default = SendBirdThumbnailObject;
exports["default"] = _default;