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
 * The ListMessagesResponseUserMetadata model module.
 * @module model/ListMessagesResponseUserMetadata
 * @version 1.0.0
 */
class ListMessagesResponseUserMetadata {
    /**
     * Constructs a new <code>ListMessagesResponseUserMetadata</code>.
     * @alias module:model/ListMessagesResponseUserMetadata
     */
    constructor() { 
        
        ListMessagesResponseUserMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMessagesResponseUserMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMessagesResponseUserMetadata} obj Optional instance to populate.
     * @return {module:model/ListMessagesResponseUserMetadata} The populated <code>ListMessagesResponseUserMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMessagesResponseUserMetadata();

            if (data.hasOwnProperty('anyOf')) {
                obj['anyOf'] = ApiClient.convertToType(data['anyOf'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} anyOf
 */
ListMessagesResponseUserMetadata.prototype['anyOf'] = undefined;






export default ListMessagesResponseUserMetadata;

