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
 * The MarkAllMessagesAsReadData model module.
 * @module model/MarkAllMessagesAsReadData
 * @version 1.0.3
 */
class MarkAllMessagesAsReadData {
    /**
     * Constructs a new <code>MarkAllMessagesAsReadData</code>.
     * @alias module:model/MarkAllMessagesAsReadData
     * @param userId {String} Specifies the unique ID of the target user.
     * @param channelUrls {Array.<String>} Specifies an array of one or more group channel URLs to mark all of the unread messages in as read. If not specified, all of the unread messages in the joined group channels are marked as read.
     */
    constructor(userId, channelUrls) { 
        
        MarkAllMessagesAsReadData.initialize(this, userId, channelUrls);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, channelUrls) { 
        obj['user_id'] = userId;
        obj['channel_urls'] = channelUrls;
    }

    /**
     * Constructs a <code>MarkAllMessagesAsReadData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarkAllMessagesAsReadData} obj Optional instance to populate.
     * @return {module:model/MarkAllMessagesAsReadData} The populated <code>MarkAllMessagesAsReadData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarkAllMessagesAsReadData();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('channel_urls')) {
                obj['channel_urls'] = ApiClient.convertToType(data['channel_urls'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the unique ID of the target user.
 * @member {String} user_id
 */
MarkAllMessagesAsReadData.prototype['user_id'] = undefined;

/**
 * Specifies an array of one or more group channel URLs to mark all of the unread messages in as read. If not specified, all of the unread messages in the joined group channels are marked as read.
 * @member {Array.<String>} channel_urls
 */
MarkAllMessagesAsReadData.prototype['channel_urls'] = undefined;






export default MarkAllMessagesAsReadData;

