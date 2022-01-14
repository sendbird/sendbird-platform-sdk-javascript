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
import SendBirdGroupChannelContextSource from './SendBirdGroupChannelContextSource';

/**
 * The SendBirdGroupChannelContext model module.
 * @module model/SendBirdGroupChannelContext
 * @version 1.0.0
 */
class SendBirdGroupChannelContext {
    /**
     * Constructs a new <code>SendBirdGroupChannelContext</code>.
     * @alias module:model/SendBirdGroupChannelContext
     */
    constructor() { 
        
        SendBirdGroupChannelContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdGroupChannelContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelContext} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelContext} The populated <code>SendBirdGroupChannelContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdGroupChannelContext();

            if (data.hasOwnProperty('isFromEvent')) {
                obj['isFromEvent'] = ApiClient.convertToType(data['isFromEvent'], 'Boolean');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = SendBirdGroupChannelContextSource.constructFromObject(data['source']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} isFromEvent
 */
SendBirdGroupChannelContext.prototype['isFromEvent'] = undefined;

/**
 * @member {module:model/SendBirdGroupChannelContextSource} source
 */
SendBirdGroupChannelContext.prototype['source'] = undefined;






export default SendBirdGroupChannelContext;

