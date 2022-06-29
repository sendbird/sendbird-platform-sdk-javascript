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
 * The UpdateChannelMetadataData model module.
 * @module model/UpdateChannelMetadataData
 * @version 1.0.3
 */
var UpdateChannelMetadataData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateChannelMetadataData</code>.
   * @alias module:model/UpdateChannelMetadataData
   * @param metadata {String} Specifies a `JSON` object which has key-value items to update. A key can't contain a comma (,) and its length is limited to 128 characters. A value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
   * @param upsert {Boolean} 
   */
  function UpdateChannelMetadataData(metadata, upsert) {
    _classCallCheck(this, UpdateChannelMetadataData);

    UpdateChannelMetadataData.initialize(this, metadata, upsert);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateChannelMetadataData, null, [{
    key: "initialize",
    value: function initialize(obj, metadata, upsert) {
      obj['metadata'] = metadata;
      obj['upsert'] = upsert;
    }
    /**
     * Constructs a <code>UpdateChannelMetadataData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateChannelMetadataData} obj Optional instance to populate.
     * @return {module:model/UpdateChannelMetadataData} The populated <code>UpdateChannelMetadataData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateChannelMetadataData();

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], 'String');
        }

        if (data.hasOwnProperty('upsert')) {
          obj['upsert'] = _ApiClient["default"].convertToType(data['upsert'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return UpdateChannelMetadataData;
}();
/**
 * Specifies a `JSON` object which has key-value items to update. A key can't contain a comma (,) and its length is limited to 128 characters. A value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {String} metadata
 */


UpdateChannelMetadataData.prototype['metadata'] = undefined;
/**
 * @member {Boolean} upsert
 */

UpdateChannelMetadataData.prototype['upsert'] = undefined;
var _default = UpdateChannelMetadataData;
exports["default"] = _default;