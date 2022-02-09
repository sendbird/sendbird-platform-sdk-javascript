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
 * The GcListChannelsResponse model module.
 * @module model/GcListChannelsResponse
 * @version 1.0.0
 */
class GcListChannelsResponse {
    /**
     * Constructs a new <code>GcListChannelsResponse</code>.
     * @alias module:model/GcListChannelsResponse
     */
    constructor() { 
        
        GcListChannelsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcListChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcListChannelsResponse} obj Optional instance to populate.
     * @return {module:model/GcListChannelsResponse} The populated <code>GcListChannelsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcListChannelsResponse();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [SendBirdGroupChannel]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdGroupChannel>} channels
 */
GcListChannelsResponse.prototype['channels'] = undefined;

/**
 * @member {String} next
 */
GcListChannelsResponse.prototype['next'] = undefined;






export default GcListChannelsResponse;

