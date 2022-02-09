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
 * The File model module.
 * @module model/File
 * @version 1.0.0
 */
var File = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>File</code>.
   * @alias module:model/File
   */
  function File() {
    _classCallCheck(this, File);

    File.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(File, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>File</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/File} obj Optional instance to populate.
     * @return {module:model/File} The populated <code>File</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new File();

        if (data.hasOwnProperty('last_modified')) {
          obj['last_modified'] = _ApiClient["default"].convertToType(data['last_modified'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('webkit_relative_path')) {
          obj['webkit_relative_path'] = _ApiClient["default"].convertToType(data['webkit_relative_path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return File;
}();
/**
 * @member {Number} last_modified
 */


File.prototype['last_modified'] = undefined;
/**
 * @member {String} name
 */

File.prototype['name'] = undefined;
/**
 * @member {Number} size
 */

File.prototype['size'] = undefined;
/**
 * @member {String} type
 */

File.prototype['type'] = undefined;
/**
 * @member {String} webkit_relative_path
 */

File.prototype['webkit_relative_path'] = undefined;
var _default = File;
exports["default"] = _default;