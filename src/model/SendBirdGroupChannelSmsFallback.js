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
 * The SendBirdGroupChannelSmsFallback model module.
 * @module model/SendBirdGroupChannelSmsFallback
 * @version 1.0.0
 */
class SendBirdGroupChannelSmsFallback {
    /**
     * Constructs a new <code>SendBirdGroupChannelSmsFallback</code>.
     * @alias module:model/SendBirdGroupChannelSmsFallback
     */
    constructor() { 
        
        SendBirdGroupChannelSmsFallback.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdGroupChannelSmsFallback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelSmsFallback} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelSmsFallback} The populated <code>SendBirdGroupChannelSmsFallback</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdGroupChannelSmsFallback();

            if (data.hasOwnProperty('wait_seconds')) {
                obj['wait_seconds'] = ApiClient.convertToType(data['wait_seconds'], 'Number');
            }
            if (data.hasOwnProperty('exclude_user_ids')) {
                obj['exclude_user_ids'] = ApiClient.convertToType(data['exclude_user_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} wait_seconds
 */
SendBirdGroupChannelSmsFallback.prototype['wait_seconds'] = undefined;

/**
 * @member {Array.<String>} exclude_user_ids
 */
SendBirdGroupChannelSmsFallback.prototype['exclude_user_ids'] = undefined;






export default SendBirdGroupChannelSmsFallback;

