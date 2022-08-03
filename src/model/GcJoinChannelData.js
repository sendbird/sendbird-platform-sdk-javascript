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
 * The GcJoinChannelData model module.
 * @module model/GcJoinChannelData
 * @version 1.0.7
 */
class GcJoinChannelData {
    /**
     * Constructs a new <code>GcJoinChannelData</code>.
     * @alias module:model/GcJoinChannelData
     * @param channelUrl {String} Specifies the URL of the channel to join.
     * @param userId {String} Specifies the unique ID of the user to join the public group channel.
     * @param accessCode {String} This property should be specified if the public group channel to join requires an access code to users, which means that the is_access_code_required property of the channel resource is true.
     */
    constructor(channelUrl, userId, accessCode) { 
        
        GcJoinChannelData.initialize(this, channelUrl, userId, accessCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userId, accessCode) { 
        obj['channel_url'] = channelUrl;
        obj['user_id'] = userId;
        obj['access_code'] = accessCode;
    }

    /**
     * Constructs a <code>GcJoinChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcJoinChannelData} obj Optional instance to populate.
     * @return {module:model/GcJoinChannelData} The populated <code>GcJoinChannelData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcJoinChannelData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('access_code')) {
                obj['access_code'] = ApiClient.convertToType(data['access_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the channel to join.
 * @member {String} channel_url
 */
GcJoinChannelData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the user to join the public group channel.
 * @member {String} user_id
 */
GcJoinChannelData.prototype['user_id'] = undefined;

/**
 * This property should be specified if the public group channel to join requires an access code to users, which means that the is_access_code_required property of the channel resource is true.
 * @member {String} access_code
 */
GcJoinChannelData.prototype['access_code'] = undefined;






export default GcJoinChannelData;

