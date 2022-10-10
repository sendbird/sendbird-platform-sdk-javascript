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
 * The GcViewMuteByIdResponse model module.
 * @module model/GcViewMuteByIdResponse
 * @version 0.0.13
 */
class GcViewMuteByIdResponse {
    /**
     * Constructs a new <code>GcViewMuteByIdResponse</code>.
     * @alias module:model/GcViewMuteByIdResponse
     */
    constructor() { 
        
        GcViewMuteByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcViewMuteByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcViewMuteByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcViewMuteByIdResponse} The populated <code>GcViewMuteByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcViewMuteByIdResponse();

            if (data.hasOwnProperty('is_muted')) {
                obj['is_muted'] = ApiClient.convertToType(data['is_muted'], 'Boolean');
            }
            if (data.hasOwnProperty('remaining_duration')) {
                obj['remaining_duration'] = ApiClient.convertToType(data['remaining_duration'], 'Number');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Number');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_muted
 */
GcViewMuteByIdResponse.prototype['is_muted'] = undefined;

/**
 * @member {Number} remaining_duration
 */
GcViewMuteByIdResponse.prototype['remaining_duration'] = undefined;

/**
 * @member {Number} start_at
 */
GcViewMuteByIdResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
GcViewMuteByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
GcViewMuteByIdResponse.prototype['description'] = undefined;






export default GcViewMuteByIdResponse;

