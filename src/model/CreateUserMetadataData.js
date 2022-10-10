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
 * The CreateUserMetadataData model module.
 * @module model/CreateUserMetadataData
 * @version 0.0.14
 */
class CreateUserMetadataData {
    /**
     * Constructs a new <code>CreateUserMetadataData</code>.
     * @alias module:model/CreateUserMetadataData
     * @param metadata {Object} Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
     */
    constructor(metadata) { 
        
        CreateUserMetadataData.initialize(this, metadata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, metadata) { 
        obj['metadata'] = metadata;
    }

    /**
     * Constructs a <code>CreateUserMetadataData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserMetadataData} obj Optional instance to populate.
     * @return {module:model/CreateUserMetadataData} The populated <code>CreateUserMetadataData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserMetadataData();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }


}

/**
 * Specifies a `JSON` object that stores key-value items. The key must not have a comma (,) and its length is limited to 128 characters. The value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {Object} metadata
 */
CreateUserMetadataData.prototype['metadata'] = undefined;






export default CreateUserMetadataData;

