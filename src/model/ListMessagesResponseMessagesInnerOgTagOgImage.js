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

/**
 * The ListMessagesResponseMessagesInnerOgTagOgImage model module.
 * @module model/ListMessagesResponseMessagesInnerOgTagOgImage
 * @version 0.0.13
 */
class ListMessagesResponseMessagesInnerOgTagOgImage {
    /**
     * Constructs a new <code>ListMessagesResponseMessagesInnerOgTagOgImage</code>.
     * @alias module:model/ListMessagesResponseMessagesInnerOgTagOgImage
     */
    constructor() { 
        
        ListMessagesResponseMessagesInnerOgTagOgImage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMessagesResponseMessagesInnerOgTagOgImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseMessagesInnerOgTagOgImage} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseMessagesInnerOgTagOgImage} The populated <code>ListMessagesResponseMessagesInnerOgTagOgImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagesResponseMessagesInnerOgTagOgImage();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('secure_url')) {
                obj['secure_url'] = ApiClient.convertToType(data['secure_url'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
ListMessagesResponseMessagesInnerOgTagOgImage.prototype['url'] = undefined;

/**
 * @member {String} secure_url
 */
ListMessagesResponseMessagesInnerOgTagOgImage.prototype['secure_url'] = undefined;

/**
 * @member {Number} width
 */
ListMessagesResponseMessagesInnerOgTagOgImage.prototype['width'] = undefined;

/**
 * @member {Number} height
 */
ListMessagesResponseMessagesInnerOgTagOgImage.prototype['height'] = undefined;






export default ListMessagesResponseMessagesInnerOgTagOgImage;

