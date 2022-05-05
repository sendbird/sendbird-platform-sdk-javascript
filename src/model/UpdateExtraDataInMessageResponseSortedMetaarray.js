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
 * The UpdateExtraDataInMessageResponseSortedMetaarray model module.
 * @module model/UpdateExtraDataInMessageResponseSortedMetaarray
 * @version 1.0.0
 */
class UpdateExtraDataInMessageResponseSortedMetaarray {
    /**
     * Constructs a new <code>UpdateExtraDataInMessageResponseSortedMetaarray</code>.
     * @alias module:model/UpdateExtraDataInMessageResponseSortedMetaarray
     */
    constructor() { 
        
        UpdateExtraDataInMessageResponseSortedMetaarray.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateExtraDataInMessageResponseSortedMetaarray</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtraDataInMessageResponseSortedMetaarray} obj Optional instance to populate.
     * @return {module:model/UpdateExtraDataInMessageResponseSortedMetaarray} The populated <code>UpdateExtraDataInMessageResponseSortedMetaarray</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExtraDataInMessageResponseSortedMetaarray();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], ['String']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} value
 */
UpdateExtraDataInMessageResponseSortedMetaarray.prototype['value'] = undefined;

/**
 * @member {String} key
 */
UpdateExtraDataInMessageResponseSortedMetaarray.prototype['key'] = undefined;






export default UpdateExtraDataInMessageResponseSortedMetaarray;
