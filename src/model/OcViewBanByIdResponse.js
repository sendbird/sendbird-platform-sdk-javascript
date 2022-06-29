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
 * The OcViewBanByIdResponse model module.
 * @module model/OcViewBanByIdResponse
 * @version 1.0.3
 */
class OcViewBanByIdResponse {
    /**
     * Constructs a new <code>OcViewBanByIdResponse</code>.
     * @alias module:model/OcViewBanByIdResponse
     */
    constructor() { 
        
        OcViewBanByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OcViewBanByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcViewBanByIdResponse} obj Optional instance to populate.
     * @return {module:model/OcViewBanByIdResponse} The populated <code>OcViewBanByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcViewBanByIdResponse();

            if (data.hasOwnProperty('user')) {
                obj['user'] = SendBirdUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Number');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdUser} user
 */
OcViewBanByIdResponse.prototype['user'] = undefined;

/**
 * @member {String} description
 */
OcViewBanByIdResponse.prototype['description'] = undefined;

/**
 * @member {Number} end_at
 */
OcViewBanByIdResponse.prototype['end_at'] = undefined;

/**
 * @member {Number} start_at
 */
OcViewBanByIdResponse.prototype['start_at'] = undefined;






export default OcViewBanByIdResponse;

