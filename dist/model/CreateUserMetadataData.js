"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateUserMetadataData model module.
 * @module model/CreateUserMetadataData
 * @version 1.0.0
 */
var CreateUserMetadataData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateUserMetadataData</code>.
   * @alias module:model/CreateUserMetadataData
   * @param userId {String} Specifies the ID of the user to store the metadata in.
   * @param metadata {String} Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
   */
  function CreateUserMetadataData(userId, metadata) {
    _classCallCheck(this, CreateUserMetadataData);

    CreateUserMetadataData.initialize(this, userId, metadata);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateUserMetadataData, null, [{
    key: "initialize",
    value: function initialize(obj, userId, metadata) {
      obj['user_id'] = userId;
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

        if (data.hasOwnProperty('user_id')) {
          obj['user_id'] = _ApiClient["default"].convertToType(data['user_id'], 'String');
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateUserMetadataData;
}();
/**
 * Specifies the ID of the user to store the metadata in.
 * @member {String} user_id
 */


CreateUserMetadataData.prototype['user_id'] = undefined;
/**
 * Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {String} metadata
 */

CreateUserMetadataData.prototype['metadata'] = undefined;
var _default = CreateUserMetadataData;
exports["default"] = _default;