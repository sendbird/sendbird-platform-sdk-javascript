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
 * The SendBirdMessageContext model module.
 * @module model/SendBirdMessageContext
 * @version 1.0.0
 */
class SendBirdMessageContext {
    /**
     * Constructs a new <code>SendBirdMessageContext</code>.
     * @alias module:model/SendBirdMessageContext
     */
    constructor() { 
        
        SendBirdMessageContext.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdMessageContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdMessageContext} obj Optional instance to populate.
     * @return {module:model/SendBirdMessageContext} The populated <code>SendBirdMessageContext</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdMessageContext();

            if (data.hasOwnProperty('isFromEvent')) {
                obj['isFromEvent'] = ApiClient.convertToType(data['isFromEvent'], 'Boolean');
            }
            if (data.hasOwnProperty('sendingStatus')) {
                obj['sendingStatus'] = ApiClient.convertToType(data['sendingStatus'], 'String');
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
SendBirdMessageContext.prototype['isFromEvent'] = undefined;

/**
 * @member {module:model/SendBirdMessageContext.SendingStatusEnum} sendingStatus
 */
SendBirdMessageContext.prototype['sendingStatus'] = undefined;

/**
 * @member {module:model/SendBirdGroupChannelContextSource} source
 */
SendBirdMessageContext.prototype['source'] = undefined;





/**
 * Allowed values for the <code>sendingStatus</code> property.
 * @enum {String}
 * @readonly
 */
SendBirdMessageContext['SendingStatusEnum'] = {

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "failed"
     * @const
     */
    "failed": "failed",

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",

    /**
     * value: "succeeded"
     * @const
     */
    "succeeded": "succeeded"
};



export default SendBirdMessageContext;

