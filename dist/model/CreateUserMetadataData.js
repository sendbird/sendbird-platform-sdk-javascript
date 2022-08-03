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
 * The CreateUserMetadataData model module.
 * @module model/CreateUserMetadataData
 * @version 1.0.7
 */
var CreateUserMetadataData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserMetadataData</code>.
   * @alias module:model/CreateUserMetadataData
   * @param metadata {Object} Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
   */
  function CreateUserMetadataData(metadata) {
    _classCallCheck(this, CreateUserMetadataData);

    CreateUserMetadataData.initialize(this, metadata);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateUserMetadataData, null, [{
    key: "initialize",
    value: function initialize(obj, metadata) {
      obj['metadata'] = metadata;
    }
    /**
     * Constructs a <code>CreateUserMetadataData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserMetadataData} obj Optional instance to populate.
     * @return {module:model/CreateUserMetadataData} The populated <code>CreateUserMetadataData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateUserMetadataData();

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], Object);
        }
      }

      return obj;
    }
  }]);

  return CreateUserMetadataData;
}();
/**
 * Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {Object} metadata
 */


CreateUserMetadataData.prototype['metadata'] = undefined;
var _default = CreateUserMetadataData;
exports["default"] = _default;