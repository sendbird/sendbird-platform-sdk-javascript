/**
 * Sendbird Platform SDK
 * Sendbird Platform API SDK  https://sendbird.com/docs/chat/v3/platform-api/getting-started/prepare-to-use-api
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@sendbird.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListMessagesResponseMessagesInnerOgTagOgImage from './ListMessagesResponseMessagesInnerOgTagOgImage';

/**
 * The ListMessagesResponseMessagesInnerOgTag model module.
 * @module model/ListMessagesResponseMessagesInnerOgTag
 * @version 0.0.14
 */
class ListMessagesResponseMessagesInnerOgTag {
    /**
     * Constructs a new <code>ListMessagesResponseMessagesInnerOgTag</code>.
     * @alias module:model/ListMessagesResponseMessagesInnerOgTag
     */
    constructor() { 
        
        ListMessagesResponseMessagesInnerOgTag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMessagesResponseMessagesInnerOgTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessagesInnerOgTag} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessagesInnerOgTag} The populated <code>ListMessagesResponseMessagesInnerOgTag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagesResponseMessagesInnerOgTag();

            if (data.hasOwnProperty('og:url')) {
                obj['og:url'] = ApiClient.convertToType(data['og:url'], 'String');
            }
            if (data.hasOwnProperty('og:title')) {
                obj['og:title'] = ApiClient.convertToType(data['og:title'], 'String');
            }
            if (data.hasOwnProperty('og:description')) {
                obj['og:description'] = ApiClient.convertToType(data['og:description'], 'String');
            }
            if (data.hasOwnProperty('og:image')) {
                obj['og:image'] = ListMessagesResponseMessagesInnerOgTagOgImage.constructFromObject(data['og:image']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} og:url
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:url'] = undefined;

/**
 * @member {String} og:title
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:title'] = undefined;

/**
 * @member {String} og:description
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:description'] = undefined;

/**
 * @member {module:model/ListMessagesResponseMessagesInnerOgTagOgImage} og:image
 */
ListMessagesResponseMessagesInnerOgTag.prototype['og:image'] = undefined;






export default ListMessagesResponseMessagesInnerOgTag;

