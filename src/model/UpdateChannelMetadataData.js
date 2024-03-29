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
 * The UpdateChannelMetadataData model module.
 * @module model/UpdateChannelMetadataData
 * @version 0.0.16
 */
class UpdateChannelMetadataData {
    /**
     * Constructs a new <code>UpdateChannelMetadataData</code>.
     * @alias module:model/UpdateChannelMetadataData
     * @param metadata {Object} Specifies a `JSON` object which has key-value items to update. A key can't contain a comma (,) and its length is limited to 128 characters. A value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
     * @param upsert {Boolean} 
     */
    constructor(metadata, upsert) { 
        
        UpdateChannelMetadataData.initialize(this, metadata, upsert);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, metadata, upsert) { 
        obj['metadata'] = metadata;
        obj['upsert'] = upsert;
    }

    /**
     * Constructs a <code>UpdateChannelMetadataData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateChannelMetadataData} obj Optional instance to populate.
     * @return {module:model/UpdateChannelMetadataData} The populated <code>UpdateChannelMetadataData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateChannelMetadataData();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('upsert')) {
                obj['upsert'] = ApiClient.convertToType(data['upsert'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Specifies a `JSON` object which has key-value items to update. A key can't contain a comma (,) and its length is limited to 128 characters. A value must be a string and its length is limited to 190 characters. This property can have up to 5 items.
 * @member {Object} metadata
 */
UpdateChannelMetadataData.prototype['metadata'] = undefined;

/**
 * @member {Boolean} upsert
 */
UpdateChannelMetadataData.prototype['upsert'] = undefined;






export default UpdateChannelMetadataData;

