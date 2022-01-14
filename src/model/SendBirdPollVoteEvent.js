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
import SendBirdPollUpdatedVoteCount from './SendBirdPollUpdatedVoteCount';

/**
 * The SendBirdPollVoteEvent model module.
 * @module model/SendBirdPollVoteEvent
 * @version 1.0.0
 */
class SendBirdPollVoteEvent {
    /**
     * Constructs a new <code>SendBirdPollVoteEvent</code>.
     * @alias module:model/SendBirdPollVoteEvent
     */
    constructor() { 
        
        SendBirdPollVoteEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdPollVoteEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdPollVoteEvent} obj Optional instance to populate.
     * @return {module:model/SendBirdPollVoteEvent} The populated <code>SendBirdPollVoteEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdPollVoteEvent();

            if (data.hasOwnProperty('pollId')) {
                obj['pollId'] = ApiClient.convertToType(data['pollId'], 'Number');
            }
            if (data.hasOwnProperty('ts')) {
                obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
            }
            if (data.hasOwnProperty('updatedVoteCounts')) {
                obj['updatedVoteCounts'] = ApiClient.convertToType(data['updatedVoteCounts'], [SendBirdPollUpdatedVoteCount]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} pollId
 */
SendBirdPollVoteEvent.prototype['pollId'] = undefined;

/**
 * @member {Number} ts
 */
SendBirdPollVoteEvent.prototype['ts'] = undefined;

/**
 * @member {Array.<module:model/SendBirdPollUpdatedVoteCount>} updatedVoteCounts
 */
SendBirdPollVoteEvent.prototype['updatedVoteCounts'] = undefined;






export default SendBirdPollVoteEvent;

