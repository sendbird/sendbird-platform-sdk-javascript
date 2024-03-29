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
 * The CreateChannelMetadataResponse model module.
 * @module model/CreateChannelMetadataResponse
 * @version 0.0.16
 */
class CreateChannelMetadataResponse {
    /**
     * Constructs a new <code>CreateChannelMetadataResponse</code>.
     * @alias module:model/CreateChannelMetadataResponse
     */
    constructor() { 
        
        CreateChannelMetadataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateChannelMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateChannelMetadataResponse} obj Optional instance to populate.
     * @return {module:model/CreateChannelMetadataResponse} The populated <code>CreateChannelMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateChannelMetadataResponse();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('include_ts')) {
                obj['include_ts'] = ApiClient.convertToType(data['include_ts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} metadata
 */
CreateChannelMetadataResponse.prototype['metadata'] = undefined;

/**
 * @member {Number} include_ts
 */
CreateChannelMetadataResponse.prototype['include_ts'] = undefined;






export default CreateChannelMetadataResponse;

