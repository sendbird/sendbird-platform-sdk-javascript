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
 * The ScheduleAnnouncementResponseCreateChannelOptions model module.
 * @module model/ScheduleAnnouncementResponseCreateChannelOptions
 * @version 1.0.0
 */
var ScheduleAnnouncementResponseCreateChannelOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScheduleAnnouncementResponseCreateChannelOptions</code>.
   * @alias module:model/ScheduleAnnouncementResponseCreateChannelOptions
   */
  function ScheduleAnnouncementResponseCreateChannelOptions() {
    _classCallCheck(this, ScheduleAnnouncementResponseCreateChannelOptions);

    ScheduleAnnouncementResponseCreateChannelOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduleAnnouncementResponseCreateChannelOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduleAnnouncementResponseCreateChannelOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleAnnouncementResponseCreateChannelOptions} obj Optional instance to populate.
     * @return {module:model/ScheduleAnnouncementResponseCreateChannelOptions} The populated <code>ScheduleAnnouncementResponseCreateChannelOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduleAnnouncementResponseCreateChannelOptions();

        if (data.hasOwnProperty('distinct')) {
          obj['distinct'] = _ApiClient["default"].convertToType(data['distinct'], 'Boolean');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('cover_url')) {
          obj['cover_url'] = _ApiClient["default"].convertToType(data['cover_url'], 'String');
        }

        if (data.hasOwnProperty('custom_type')) {
          obj['custom_type'] = _ApiClient["default"].convertToType(data['custom_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduleAnnouncementResponseCreateChannelOptions;
}();
/**
 * @member {Boolean} distinct
 */


ScheduleAnnouncementResponseCreateChannelOptions.prototype['distinct'] = undefined;
/**
 * @member {String} data
 */

ScheduleAnnouncementResponseCreateChannelOptions.prototype['data'] = undefined;
/**
 * @member {String} name
 */

ScheduleAnnouncementResponseCreateChannelOptions.prototype['name'] = undefined;
/**
 * @member {String} cover_url
 */

ScheduleAnnouncementResponseCreateChannelOptions.prototype['cover_url'] = undefined;
/**
 * @member {String} custom_type
 */

ScheduleAnnouncementResponseCreateChannelOptions.prototype['custom_type'] = undefined;
var _default = ScheduleAnnouncementResponseCreateChannelOptions;
exports["default"] = _default;