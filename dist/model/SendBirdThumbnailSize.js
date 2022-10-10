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
 * The SendBirdThumbnailSize model module.
 * @module model/SendBirdThumbnailSize
 * @version 0.0.13
 */
var SendBirdThumbnailSize = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SendBirdThumbnailSize</code>.
   * @alias module:model/SendBirdThumbnailSize
   */
  function SendBirdThumbnailSize() {
    _classCallCheck(this, SendBirdThumbnailSize);

    SendBirdThumbnailSize.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SendBirdThumbnailSize, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SendBirdThumbnailSize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdThumbnailSize} obj Optional instance to populate.
     * @return {module:model/SendBirdThumbnailSize} The populated <code>SendBirdThumbnailSize</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SendBirdThumbnailSize();

        if (data.hasOwnProperty('max_height')) {
          obj['max_height'] = _ApiClient["default"].convertToType(data['max_height'], 'Number');
        }

        if (data.hasOwnProperty('max_width')) {
          obj['max_width'] = _ApiClient["default"].convertToType(data['max_width'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SendBirdThumbnailSize;
}();
/**
 * @member {Number} max_height
 */


SendBirdThumbnailSize.prototype['max_height'] = undefined;
/**
 * @member {Number} max_width
 */

SendBirdThumbnailSize.prototype['max_width'] = undefined;
var _default = SendBirdThumbnailSize;
exports["default"] = _default;