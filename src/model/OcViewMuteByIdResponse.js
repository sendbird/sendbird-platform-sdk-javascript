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
 * The OcViewMuteByIdResponse model module.
 * @module model/OcViewMuteByIdResponse
 * @version 1.0.3
 */
class OcViewMuteByIdResponse {
    /**
     * Constructs a new <code>OcViewMuteByIdResponse</code>.
     * @alias module:model/OcViewMuteByIdResponse
     */
    constructor() { 
        
        OcViewMuteByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OcViewMuteByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcViewMuteByIdResponse} obj Optional instance to populate.
     * @return {module:model/OcViewMuteByIdResponse} The populated <code>OcViewMuteByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcViewMuteByIdResponse();

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
OcViewMuteByIdResponse.prototype['is_muted'] = undefined;

/**
 * @member {Number} remaining_duration
 */
OcViewMuteByIdResponse.prototype['remaining_duration'] = undefined;

/**
 * @member {Number} start_at
 */
OcViewMuteByIdResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
OcViewMuteByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
OcViewMuteByIdResponse.prototype['description'] = undefined;






export default OcViewMuteByIdResponse;

