/**
 * Sendbird Platform SDK
 * Sendbird Platform API Javascript SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListMessagesResponseMessagesInnerSortedMetaarrayInner model module.
 * @module model/ListMessagesResponseMessagesInnerSortedMetaarrayInner
 * @version 1.0.7
 */
class ListMessagesResponseMessagesInnerSortedMetaarrayInner {
    /**
     * Constructs a new <code>ListMessagesResponseMessagesInnerSortedMetaarrayInner</code>.
     * @alias module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner
     */
    constructor() { 
        
        ListMessagesResponseMessagesInnerSortedMetaarrayInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMessagesResponseMessagesInnerSortedMetaarrayInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessagesInnerSortedMetaarrayInner} The populated <code>ListMessagesResponseMessagesInnerSortedMetaarrayInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagesResponseMessagesInnerSortedMetaarrayInner();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
ListMessagesResponseMessagesInnerSortedMetaarrayInner.prototype['key'] = undefined;

/**
 * @member {Array.<String>} value
 */
ListMessagesResponseMessagesInnerSortedMetaarrayInner.prototype['value'] = undefined;






export default ListMessagesResponseMessagesInnerSortedMetaarrayInner;
