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
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdThreadInfo model module.
 * @module model/SendBirdThreadInfo
 * @version 1.0.0
 */
class SendBirdThreadInfo {
    /**
     * Constructs a new <code>SendBirdThreadInfo</code>.
     * @alias module:model/SendBirdThreadInfo
     */
    constructor() { 
        
        SendBirdThreadInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdThreadInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdThreadInfo} obj Optional instance to populate.
     * @return {module:model/SendBirdThreadInfo} The populated <code>SendBirdThreadInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdThreadInfo();

            if (data.hasOwnProperty('lastRepliedAt')) {
                obj['lastRepliedAt'] = ApiClient.convertToType(data['lastRepliedAt'], 'Number');
            }
            if (data.hasOwnProperty('mostRepliedUsers')) {
                obj['mostRepliedUsers'] = ApiClient.convertToType(data['mostRepliedUsers'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('replyCount')) {
                obj['replyCount'] = ApiClient.convertToType(data['replyCount'], 'Number');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lastRepliedAt
 */
SendBirdThreadInfo.prototype['lastRepliedAt'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} mostRepliedUsers
 */
SendBirdThreadInfo.prototype['mostRepliedUsers'] = undefined;

/**
 * @member {Number} replyCount
 */
SendBirdThreadInfo.prototype['replyCount'] = undefined;

/**
 * @member {Number} updatedAt
 */
SendBirdThreadInfo.prototype['updatedAt'] = undefined;






export default SendBirdThreadInfo;

