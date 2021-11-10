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
 * The JoinChannelsData model module.
 * @module model/JoinChannelsData
 * @version 1.0.0
 */
class JoinChannelsData {
    /**
     * Constructs a new <code>JoinChannelsData</code>.
     * @alias module:model/JoinChannelsData
     * @param botUserid {String} Specifies the ID of the bot to join the channels.
     * @param channelUrls {Array.<String>} Specifies an array of one or more URLs of the channels to join.
     */
    constructor(botUserid, channelUrls) { 
        
        JoinChannelsData.initialize(this, botUserid, channelUrls);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, botUserid, channelUrls) { 
        obj['bot_userid'] = botUserid;
        obj['channel_urls'] = channelUrls;
    }

    /**
     * Constructs a <code>JoinChannelsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JoinChannelsData} obj Optional instance to populate.
     * @return {module:model/JoinChannelsData} The populated <code>JoinChannelsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JoinChannelsData();

            if (data.hasOwnProperty('bot_userid')) {
                obj['bot_userid'] = ApiClient.convertToType(data['bot_userid'], 'String');
            }
            if (data.hasOwnProperty('channel_urls')) {
                obj['channel_urls'] = ApiClient.convertToType(data['channel_urls'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the ID of the bot to join the channels.
 * @member {String} bot_userid
 */
JoinChannelsData.prototype['bot_userid'] = undefined;

/**
 * Specifies an array of one or more URLs of the channels to join.
 * @member {Array.<String>} channel_urls
 */
JoinChannelsData.prototype['channel_urls'] = undefined;






export default JoinChannelsData;

