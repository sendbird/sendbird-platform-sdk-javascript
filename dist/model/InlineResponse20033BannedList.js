"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SendBirdUser = _interopRequireDefault(require("./SendBirdUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20033BannedList model module.
 * @module model/InlineResponse20033BannedList
 * @version 1.0.0
 */
var InlineResponse20033BannedList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20033BannedList</code>.
   * @alias module:model/InlineResponse20033BannedList
   */
  function InlineResponse20033BannedList() {
    _classCallCheck(this, InlineResponse20033BannedList);

    InlineResponse20033BannedList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20033BannedList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20033BannedList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033BannedList} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033BannedList} The populated <code>InlineResponse20033BannedList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20033BannedList();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _SendBirdUser["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Number');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20033BannedList;
}();
/**
 * @member {module:model/SendBirdUser} user
 */


InlineResponse20033BannedList.prototype['user'] = undefined;
/**
 * @member {Number} start_at
 */

InlineResponse20033BannedList.prototype['start_at'] = undefined;
/**
 * @member {Number} end_at
 */

InlineResponse20033BannedList.prototype['end_at'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20033BannedList.prototype['description'] = undefined;
var _default = InlineResponse20033BannedList;
exports["default"] = _default;