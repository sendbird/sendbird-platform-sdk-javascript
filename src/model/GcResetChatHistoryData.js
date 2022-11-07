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
 * The GcResetChatHistoryData model module.
 * @module model/GcResetChatHistoryData
 * @version 0.0.16
 */
class GcResetChatHistoryData {
    /**
     * Constructs a new <code>GcResetChatHistoryData</code>.
     * @alias module:model/GcResetChatHistoryData
     * @param channelUrl {String} Specifies the URL of the target channel to reset chat history.
     * @param userId {String} Specifies the unique ID of the user whose chat history to reset in the channel. If this user_id property is specified, the reset_all property is not required.
     * @param resetAll {Boolean} Determines whether to reset all users' chat history in the channel. If this reset_all property is specified, the user_id property is not required.
     */
    constructor(channelUrl, userId, resetAll) { 
        
        GcResetChatHistoryData.initialize(this, channelUrl, userId, resetAll);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userId, resetAll) { 
        obj['channel_url'] = channelUrl;
        obj['user_id'] = userId;
        obj['reset_all'] = resetAll;
    }

    /**
     * Constructs a <code>GcResetChatHistoryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcResetChatHistoryData} obj Optional instance to populate.
     * @return {module:model/GcResetChatHistoryData} The populated <code>GcResetChatHistoryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcResetChatHistoryData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('reset_all')) {
                obj['reset_all'] = ApiClient.convertToType(data['reset_all'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the target channel to reset chat history.
 * @member {String} channel_url
 */
GcResetChatHistoryData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the user whose chat history to reset in the channel. If this user_id property is specified, the reset_all property is not required.
 * @member {String} user_id
 */
GcResetChatHistoryData.prototype['user_id'] = undefined;

/**
 * Determines whether to reset all users' chat history in the channel. If this reset_all property is specified, the user_id property is not required.
 * @member {Boolean} reset_all
 */
GcResetChatHistoryData.prototype['reset_all'] = undefined;






export default GcResetChatHistoryData;

