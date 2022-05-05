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
 * The GcViewBanByIdResponse model module.
 * @module model/GcViewBanByIdResponse
 * @version 1.0.0
 */
class GcViewBanByIdResponse {
    /**
     * Constructs a new <code>GcViewBanByIdResponse</code>.
     * @alias module:model/GcViewBanByIdResponse
     */
    constructor() { 
        
        GcViewBanByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcViewBanByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcViewBanByIdResponse} obj Optional instance to populate.
     * @return {module:model/GcViewBanByIdResponse} The populated <code>GcViewBanByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcViewBanByIdResponse();

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
GcViewBanByIdResponse.prototype['user'] = undefined;

/**
 * @member {Number} start_at
 */
GcViewBanByIdResponse.prototype['start_at'] = undefined;

/**
 * @member {Number} end_at
 */
GcViewBanByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {String} description
 */
GcViewBanByIdResponse.prototype['description'] = undefined;






export default GcViewBanByIdResponse;
