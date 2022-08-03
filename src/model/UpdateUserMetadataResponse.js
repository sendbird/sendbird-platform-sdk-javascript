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
 * The UpdateUserMetadataResponse model module.
 * @module model/UpdateUserMetadataResponse
 * @version 1.0.7
 */
class UpdateUserMetadataResponse {
    /**
     * Constructs a new <code>UpdateUserMetadataResponse</code>.
     * @alias module:model/UpdateUserMetadataResponse
     */
    constructor() { 
        
        UpdateUserMetadataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateUserMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserMetadataResponse} obj Optional instance to populate.
     * @return {module:model/UpdateUserMetadataResponse} The populated <code>UpdateUserMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUserMetadataResponse();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('upsert')) {
                obj['upsert'] = ApiClient.convertToType(data['upsert'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} metadata
 */
UpdateUserMetadataResponse.prototype['metadata'] = undefined;

/**
 * @member {Boolean} upsert
 */
UpdateUserMetadataResponse.prototype['upsert'] = undefined;






export default UpdateUserMetadataResponse;

