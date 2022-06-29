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
 * The CreateChannelMetadataResponse model module.
 * @module model/CreateChannelMetadataResponse
 * @version 1.0.3
 */
var CreateChannelMetadataResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateChannelMetadataResponse</code>.
   * @alias module:model/CreateChannelMetadataResponse
   */
  function CreateChannelMetadataResponse() {
    _classCallCheck(this, CreateChannelMetadataResponse);

    CreateChannelMetadataResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateChannelMetadataResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateChannelMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateChannelMetadataResponse} obj Optional instance to populate.
     * @return {module:model/CreateChannelMetadataResponse} The populated <code>CreateChannelMetadataResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateChannelMetadataResponse();

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ApiClient["default"].convertToType(data['metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('include_ts')) {
          obj['include_ts'] = _ApiClient["default"].convertToType(data['include_ts'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateChannelMetadataResponse;
}();
/**
 * @member {Object.<String, String>} metadata
 */


CreateChannelMetadataResponse.prototype['metadata'] = undefined;
/**
 * @member {Number} include_ts
 */

CreateChannelMetadataResponse.prototype['include_ts'] = undefined;
var _default = CreateChannelMetadataResponse;
exports["default"] = _default;