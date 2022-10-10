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
 * The ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile model module.
 * @module model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile
 * @version 0.0.14
 */var ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile</code>.
   * @alias module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile
   */
  function ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile() {
    _classCallCheck(this, ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile);
    ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile} obj Optional instance to populate.
     * @return {module:model/ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile} The populated <code>ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile();
        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile;
}(); /**
      * @member {String} url
      */
ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile.prototype['url'] = undefined;

/**
 * @member {Number} expires_at
 */
ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile.prototype['expires_at'] = undefined;
var _default = ListDataExportsByMessageChannelOrUserResponseExportedDataInnerFile;
exports["default"] = _default;