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
 * The UpdateMessageByIdData model module.
 * @module model/UpdateMessageByIdData
 * @version 0.0.16
 */
class UpdateMessageByIdData {
    /**
     * Constructs a new <code>UpdateMessageByIdData</code>.
     * @alias module:model/UpdateMessageByIdData
     * @param messageId {Number} Specifies the unique ID of the message to update.
     */
    constructor(messageId) { 
        
        UpdateMessageByIdData.initialize(this, messageId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, messageId) { 
        obj['message_id'] = messageId;
    }

    /**
     * Constructs a <code>UpdateMessageByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMessageByIdData} obj Optional instance to populate.
     * @return {module:model/UpdateMessageByIdData} The populated <code>UpdateMessageByIdData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateMessageByIdData();

            if (data.hasOwnProperty('channel_type')) {
                obj['channel_type'] = ApiClient.convertToType(data['channel_type'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('message_id')) {
                obj['message_id'] = ApiClient.convertToType(data['message_id'], 'Number');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('mention_type')) {
                obj['mention_type'] = ApiClient.convertToType(data['mention_type'], 'String');
            }
            if (data.hasOwnProperty('mentioned_user_ids')) {
                obj['mentioned_user_ids'] = ApiClient.convertToType(data['mentioned_user_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the type of the channel. Either open_channels or group_channels.
 * @member {String} channel_type
 */
UpdateMessageByIdData.prototype['channel_type'] = undefined;

/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */
UpdateMessageByIdData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the message to update.
 * @member {Number} message_id
 */
UpdateMessageByIdData.prototype['message_id'] = undefined;

/**
 * Specifies the type of the message as ADMM.
 * @member {String} message_type
 */
UpdateMessageByIdData.prototype['message_type'] = undefined;

/**
 * Specifies the content of the message.
 * @member {String} message
 */
UpdateMessageByIdData.prototype['message'] = undefined;

/**
 * Specifies a custom message type which is used for message grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */
UpdateMessageByIdData.prototype['custom_type'] = undefined;

/**
 * Specifies additional message information such as custom font size, font type or `JSON` formatted string.
 * @member {String} data
 */
UpdateMessageByIdData.prototype['data'] = undefined;

/**
 * Specifies the mentioning method which indicates the user scope who will get a notification for the message. Acceptable values are users and channel. If set to users, only the specified users with the mentioned_users property below will get notified. If set to channel, all users in the channel will get notified. (Default: users)
 * @member {String} mention_type
 */
UpdateMessageByIdData.prototype['mention_type'] = undefined;

/**
 * Specifies an array of one or more IDs of the users who will get a notification for the message.
 * @member {Array.<String>} mentioned_user_ids
 */
UpdateMessageByIdData.prototype['mentioned_user_ids'] = undefined;






export default UpdateMessageByIdData;

