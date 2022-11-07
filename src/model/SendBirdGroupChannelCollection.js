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
import SendBirdGroupChannel from './SendBirdGroupChannel';

/**
 * The SendBirdGroupChannelCollection model module.
 * @module model/SendBirdGroupChannelCollection
 * @version 0.0.16
 */
class SendBirdGroupChannelCollection {
    /**
     * Constructs a new <code>SendBirdGroupChannelCollection</code>.
     * @alias module:model/SendBirdGroupChannelCollection
     */
    constructor() { 
        
        SendBirdGroupChannelCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdGroupChannelCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelCollection} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelCollection} The populated <code>SendBirdGroupChannelCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdGroupChannelCollection();

            if (data.hasOwnProperty('channel_list')) {
                obj['channel_list'] = ApiClient.convertToType(data['channel_list'], [SendBirdGroupChannel]);
            }
            if (data.hasOwnProperty('has_more')) {
                obj['has_more'] = ApiClient.convertToType(data['has_more'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/SendBirdGroupChannel>} channel_list
 */
SendBirdGroupChannelCollection.prototype['channel_list'] = undefined;

/**
 * @member {Boolean} has_more
 */
SendBirdGroupChannelCollection.prototype['has_more'] = undefined;






export default SendBirdGroupChannelCollection;

