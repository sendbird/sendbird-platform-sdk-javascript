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
 * The ListAnnouncementGroupsResponse model module.
 * @module model/ListAnnouncementGroupsResponse
 * @version 0.0.14
 */var ListAnnouncementGroupsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAnnouncementGroupsResponse</code>.
   * @alias module:model/ListAnnouncementGroupsResponse
   */
  function ListAnnouncementGroupsResponse() {
    _classCallCheck(this, ListAnnouncementGroupsResponse);
    ListAnnouncementGroupsResponse.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListAnnouncementGroupsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>ListAnnouncementGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAnnouncementGroupsResponse} obj Optional instance to populate.
     * @return {module:model/ListAnnouncementGroupsResponse} The populated <code>ListAnnouncementGroupsResponse</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAnnouncementGroupsResponse();
        if (data.hasOwnProperty('announcement_groups')) {
          obj['announcement_groups'] = _ApiClient["default"].convertToType(data['announcement_groups'], ['String']);
        }
        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListAnnouncementGroupsResponse;
}(); /**
      * @member {Array.<String>} announcement_groups
      */
ListAnnouncementGroupsResponse.prototype['announcement_groups'] = undefined;

/**
 * @member {String} next
 */
ListAnnouncementGroupsResponse.prototype['next'] = undefined;
var _default = ListAnnouncementGroupsResponse;
exports["default"] = _default;