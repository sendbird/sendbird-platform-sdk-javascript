"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20047OgTag = _interopRequireDefault(require("./InlineResponse20047OgTag"));

var _InlineResponse20047SortedMetaarray = _interopRequireDefault(require("./InlineResponse20047SortedMetaarray"));

var _InlineResponse20047User = _interopRequireDefault(require("./InlineResponse20047User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20047Messages model module.
 * @module model/InlineResponse20047Messages
 * @version 1.0.0
 */
var InlineResponse20047Messages = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20047Messages</code>.
   * @alias module:model/InlineResponse20047Messages
   */
  function InlineResponse20047Messages() {
    _classCallCheck(this, InlineResponse20047Messages);

    InlineResponse20047Messages.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20047Messages, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20047Messages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20047Messages} obj Optional instance to populate.
     * @return {module:model/InlineResponse20047Messages} The populated <code>InlineResponse20047Messages</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20047Messages();

        if (data.hasOwnProperty('message_id')) {
          obj['message_id'] = _ApiClient["default"].convertToType(data['message_id'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }

        if (data.hasOwnProperty('channel_url')) {
          obj['channel_url'] = _ApiClient["default"].convertToType(data['channel_url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _InlineResponse20047User["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('mention_type')) {
          obj['mention_type'] = _ApiClient["default"].convertToType(data['mention_type'], 'String');
        }

        if (data.hasOwnProperty('mentioned_users')) {
          obj['mentioned_users'] = _ApiClient["default"].convertToType(data['mentioned_users'], [_InlineResponse20047User["default"]]);
        }

        if (data.hasOwnProperty('is_removed')) {
          obj['is_removed'] = _ApiClient["default"].convertToType(data['is_removed'], 'Boolean');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('translations')) {
          obj['translations'] = _ApiClient["default"].convertToType(data['translations'], Object);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('sorted_metaarray')) {
          obj['sorted_metaarray'] = _ApiClient["default"].convertToType(data['sorted_metaarray'], [_InlineResponse20047SortedMetaarray["default"]]);
        }

        if (data.hasOwnProperty('og_tag')) {
          obj['og_tag'] = _InlineResponse20047OgTag["default"].constructFromObject(data['og_tag']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'Number');
        }

        if (data.hasOwnProperty('file')) {
          obj['file'] = _ApiClient["default"].convertToType(data['file'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20047Messages;
}();
/**
 * @member {Number} message_id
 */


InlineResponse20047Messages.prototype['message_id'] = undefined;
/**
 * @member {String} type
 */

InlineResponse20047Messages.prototype['type'] = undefined;
/**
 * @member {String} custom_type
 */

InlineResponse20047Messages.prototype['custom_type'] = undefined;
/**
 * @member {String} channel_url
 */

InlineResponse20047Messages.prototype['channel_url'] = undefined;
/**
 * @member {module:model/InlineResponse20047User} user
 */

InlineResponse20047Messages.prototype['user'] = undefined;
/**
 * @member {String} mention_type
 */

InlineResponse20047Messages.prototype['mention_type'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20047User>} mentioned_users
 */

InlineResponse20047Messages.prototype['mentioned_users'] = undefined;
/**
 * @member {Boolean} is_removed
 */

InlineResponse20047Messages.prototype['is_removed'] = undefined;
/**
 * @member {String} message
 */

InlineResponse20047Messages.prototype['message'] = undefined;
/**
 * @member {Object} translations
 */

InlineResponse20047Messages.prototype['translations'] = undefined;
/**
 * @member {String} data
 */

InlineResponse20047Messages.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20047SortedMetaarray>} sorted_metaarray
 */

InlineResponse20047Messages.prototype['sorted_metaarray'] = undefined;
/**
 * @member {module:model/InlineResponse20047OgTag} og_tag
 */

InlineResponse20047Messages.prototype['og_tag'] = undefined;
/**
 * @member {Number} created_at
 */

InlineResponse20047Messages.prototype['created_at'] = undefined;
/**
 * @member {Number} updated_at
 */

InlineResponse20047Messages.prototype['updated_at'] = undefined;
/**
 * @member {Object} file
 */

InlineResponse20047Messages.prototype['file'] = undefined;
var _default = InlineResponse20047Messages;
exports["default"] = _default;