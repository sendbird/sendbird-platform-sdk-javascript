"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAnnouncementsResponseAnnouncements = _interopRequireDefault(require("./ListAnnouncementsResponseAnnouncements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAnnouncementsResponse model module.
 * @module model/ListAnnouncementsResponse
 * @version 1.0.0
 */
var ListAnnouncementsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAnnouncementsResponse</code>.
   * @alias module:model/ListAnnouncementsResponse
   */
  function ListAnnouncementsResponse() {
    _classCallCheck(this, ListAnnouncementsResponse);

    ListAnnouncementsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAnnouncementsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ListAnnouncementsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAnnouncementsResponse} obj Optional instance to populate.
     * @return {module:model/ListAnnouncementsResponse} The populated <code>ListAnnouncementsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAnnouncementsResponse();

        if (data.hasOwnProperty('announcements')) {
          obj['announcements'] = _ApiClient["default"].convertToType(data['announcements'], [_ListAnnouncementsResponseAnnouncements["default"]]);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAnnouncementsResponse;
}();
/**
 * @member {Array.<module:model/ListAnnouncementsResponseAnnouncements>} announcements
 */


ListAnnouncementsResponse.prototype['announcements'] = undefined;
/**
 * @member {String} next
 */

ListAnnouncementsResponse.prototype['next'] = undefined;
var _default = ListAnnouncementsResponse;
exports["default"] = _default;