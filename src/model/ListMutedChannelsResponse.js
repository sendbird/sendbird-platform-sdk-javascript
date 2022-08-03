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
import SendBirdChannelResponse from './SendBirdChannelResponse';

/**
 * The ListMutedChannelsResponse model module.
 * @module model/ListMutedChannelsResponse
 * @version 1.0.7
 */
class ListMutedChannelsResponse {
    /**
     * Constructs a new <code>ListMutedChannelsResponse</code>.
     * @alias module:model/ListMutedChannelsResponse
     */
    constructor() { 
        
        ListMutedChannelsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListMutedChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListMutedChannelsResponse} obj Optional instance to populate.
     * @return {module:model/ListMutedChannelsResponse} The populated <code>ListMutedChannelsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListMutedChannelsResponse();

            if (data.hasOwnProperty('muted_channels')) {
                obj['muted_channels'] = ApiClient.convertToType(data['muted_channels'], [SendBirdChannelResponse]);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdChannelResponse>} muted_channels
 */
ListMutedChannelsResponse.prototype['muted_channels'] = undefined;

/**
 * @member {String} next
 */
ListMutedChannelsResponse.prototype['next'] = undefined;






export default ListMutedChannelsResponse;

