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
import SendBirdPollDetails from './SendBirdPollDetails';

/**
 * The SendBirdPoll model module.
 * @module model/SendBirdPoll
 * @version 1.0.3
 */
class SendBirdPoll {
    /**
     * Constructs a new <code>SendBirdPoll</code>.
     * @alias module:model/SendBirdPoll
     */
    constructor() { 
        
        SendBirdPoll.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdPoll</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPoll} obj Optional instance to populate.
     * @return {module:model/SendBirdPoll} The populated <code>SendBirdPoll</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdPoll();

            if (data.hasOwnProperty('details')) {
                obj['details'] = SendBirdPollDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SendBirdPollDetails} details
 */
SendBirdPoll.prototype['details'] = undefined;

/**
 * @member {Number} id
 */
SendBirdPoll.prototype['id'] = undefined;

/**
 * @member {String} title
 */
SendBirdPoll.prototype['title'] = undefined;






export default SendBirdPoll;

