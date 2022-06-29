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
import SendBirdGroupChannel from './SendBirdGroupChannel';

/**
 * The JoinChannelsResponse model module.
 * @module model/JoinChannelsResponse
 * @version 1.0.3
 */
class JoinChannelsResponse {
    /**
     * Constructs a new <code>JoinChannelsResponse</code>.
     * @alias module:model/JoinChannelsResponse
     */
    constructor() { 
        
        JoinChannelsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JoinChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JoinChannelsResponse} obj Optional instance to populate.
     * @return {module:model/JoinChannelsResponse} The populated <code>JoinChannelsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JoinChannelsResponse();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [SendBirdGroupChannel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdGroupChannel>} channels
 */
JoinChannelsResponse.prototype['channels'] = undefined;






export default JoinChannelsResponse;

