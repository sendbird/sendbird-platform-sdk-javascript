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

/**
 * The SendBirdGroupChannelDisappearingMessage model module.
 * @module model/SendBirdGroupChannelDisappearingMessage
 * @version 0.0.14
 */
class SendBirdGroupChannelDisappearingMessage {
    /**
     * Constructs a new <code>SendBirdGroupChannelDisappearingMessage</code>.
     * @alias module:model/SendBirdGroupChannelDisappearingMessage
     */
    constructor() { 
        
        SendBirdGroupChannelDisappearingMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdGroupChannelDisappearingMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelDisappearingMessage} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelDisappearingMessage} The populated <code>SendBirdGroupChannelDisappearingMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdGroupChannelDisappearingMessage();

            if (data.hasOwnProperty('message_survival_seconds')) {
                obj['message_survival_seconds'] = ApiClient.convertToType(data['message_survival_seconds'], 'Number');
            }
            if (data.hasOwnProperty('is_triggered_by_message_read')) {
                obj['is_triggered_by_message_read'] = ApiClient.convertToType(data['is_triggered_by_message_read'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} message_survival_seconds
 */
SendBirdGroupChannelDisappearingMessage.prototype['message_survival_seconds'] = undefined;

/**
 * @member {Boolean} is_triggered_by_message_read
 */
SendBirdGroupChannelDisappearingMessage.prototype['is_triggered_by_message_read'] = undefined;






export default SendBirdGroupChannelDisappearingMessage;

