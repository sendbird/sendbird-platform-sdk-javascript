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
 * The ViewCountPreferenceOfChannelByUrlResponse model module.
 * @module model/ViewCountPreferenceOfChannelByUrlResponse
 * @version 1.0.1
 */
class ViewCountPreferenceOfChannelByUrlResponse {
    /**
     * Constructs a new <code>ViewCountPreferenceOfChannelByUrlResponse</code>.
     * @alias module:model/ViewCountPreferenceOfChannelByUrlResponse
     */
    constructor() { 
        
        ViewCountPreferenceOfChannelByUrlResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ViewCountPreferenceOfChannelByUrlResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ViewCountPreferenceOfChannelByUrlResponse} obj Optional instance to populate.
     * @return {module:model/ViewCountPreferenceOfChannelByUrlResponse} The populated <code>ViewCountPreferenceOfChannelByUrlResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ViewCountPreferenceOfChannelByUrlResponse();

            if (data.hasOwnProperty('count_preference')) {
                obj['count_preference'] = ApiClient.convertToType(data['count_preference'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} count_preference
 */
ViewCountPreferenceOfChannelByUrlResponse.prototype['count_preference'] = undefined;






export default ViewCountPreferenceOfChannelByUrlResponse;

