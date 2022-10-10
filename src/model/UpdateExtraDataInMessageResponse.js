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
import UpdateExtraDataInMessageResponseSortedMetaarrayInner from './UpdateExtraDataInMessageResponseSortedMetaarrayInner';

/**
 * The UpdateExtraDataInMessageResponse model module.
 * @module model/UpdateExtraDataInMessageResponse
 * @version 0.0.14
 */
class UpdateExtraDataInMessageResponse {
    /**
     * Constructs a new <code>UpdateExtraDataInMessageResponse</code>.
     * @alias module:model/UpdateExtraDataInMessageResponse
     */
    constructor() { 
        
        UpdateExtraDataInMessageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateExtraDataInMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExtraDataInMessageResponse} obj Optional instance to populate.
     * @return {module:model/UpdateExtraDataInMessageResponse} The populated <code>UpdateExtraDataInMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExtraDataInMessageResponse();

            if (data.hasOwnProperty('sorted_metaarray')) {
                obj['sorted_metaarray'] = ApiClient.convertToType(data['sorted_metaarray'], [UpdateExtraDataInMessageResponseSortedMetaarrayInner]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UpdateExtraDataInMessageResponseSortedMetaarrayInner>} sorted_metaarray
 */
UpdateExtraDataInMessageResponse.prototype['sorted_metaarray'] = undefined;






export default UpdateExtraDataInMessageResponse;

