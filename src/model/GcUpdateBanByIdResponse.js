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
import SendBirdUser from './SendBirdUser';

/**
 * The GcUpdateBanByIdResponse model module.
 * @module model/GcUpdateBanByIdResponse
 * @version 1.0.1
 */
class GcUpdateBanByIdResponse {
    /**
     * Constructs a new <code>GcUpdateBanByIdResponse</code>.
     * @alias module:model/GcUpdateBanByIdResponse
     */
    constructor() { 
        
        GcUpdateBanByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcUpdateBanByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcUpdateBanByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcUpdateBanByIdResponse} The populated <code>GcUpdateBanByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcUpdateBanByIdResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = SendBirdUser.constructFromObject(data['user']);
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
 * @member {module:model/SendBirdUser} user
 */
GcUpdateBanByIdResponse.prototype['user'] = undefined;

/**
 * @member {Number} start_at
 */
GcUpdateBanByIdResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
GcUpdateBanByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
GcUpdateBanByIdResponse.prototype['description'] = undefined;






export default GcUpdateBanByIdResponse;

