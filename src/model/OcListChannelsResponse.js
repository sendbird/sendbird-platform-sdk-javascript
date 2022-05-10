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
import SendBirdOpenChannel from './SendBirdOpenChannel';

/**
 * The OcListChannelsResponse model module.
 * @module model/OcListChannelsResponse
 * @version 1.0.1
 */
class OcListChannelsResponse {
    /**
     * Constructs a new <code>OcListChannelsResponse</code>.
     * @alias module:model/OcListChannelsResponse
     */
    constructor() { 
        
        OcListChannelsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OcListChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcListChannelsResponse} obj Optional instance to populate.
     * @return {module:model/OcListChannelsResponse} The populated <code>OcListChannelsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcListChannelsResponse();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [SendBirdOpenChannel]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('ts')) {
                obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdOpenChannel>} channels
 */
OcListChannelsResponse.prototype['channels'] = undefined;

/**
 * @member {String} next
 */
OcListChannelsResponse.prototype['next'] = undefined;

/**
 * @member {Number} ts
 */
OcListChannelsResponse.prototype['ts'] = undefined;






export default OcListChannelsResponse;

