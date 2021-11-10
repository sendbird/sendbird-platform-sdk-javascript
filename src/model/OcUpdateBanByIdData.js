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
 * The OcUpdateBanByIdData model module.
 * @module model/OcUpdateBanByIdData
 * @version 1.0.0
 */
class OcUpdateBanByIdData {
    /**
     * Constructs a new <code>OcUpdateBanByIdData</code>.
     * @alias module:model/OcUpdateBanByIdData
     * @param channelUrl {String} Specifies the URL of the target channel.
     * @param bannedUserId {String} Specifies the ID of the banned user to update.
     * @param seconds {Number} Specifies a new ban duration to update. If set to -1, the user will be banned permanently (10 years, technically).
     * @param description {String} Specifies a new reason for the banning to update. The length is limited to 250 characters.
     */
    constructor(channelUrl, bannedUserId, seconds, description) { 
        
        OcUpdateBanByIdData.initialize(this, channelUrl, bannedUserId, seconds, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, bannedUserId, seconds, description) { 
        obj['channel_url'] = channelUrl;
        obj['banned_user_id'] = bannedUserId;
        obj['seconds'] = seconds;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>OcUpdateBanByIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcUpdateBanByIdData} obj Optional instance to populate.
     * @return {module:model/OcUpdateBanByIdData} The populated <code>OcUpdateBanByIdData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcUpdateBanByIdData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('banned_user_id')) {
                obj['banned_user_id'] = ApiClient.convertToType(data['banned_user_id'], 'String');
            }
            if (data.hasOwnProperty('seconds')) {
                obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the target channel.
 * @member {String} channel_url
 */
OcUpdateBanByIdData.prototype['channel_url'] = undefined;

/**
 * Specifies the ID of the banned user to update.
 * @member {String} banned_user_id
 */
OcUpdateBanByIdData.prototype['banned_user_id'] = undefined;

/**
 * Specifies a new ban duration to update. If set to -1, the user will be banned permanently (10 years, technically).
 * @member {Number} seconds
 */
OcUpdateBanByIdData.prototype['seconds'] = undefined;

/**
 * Specifies a new reason for the banning to update. The length is limited to 250 characters.
 * @member {String} description
 */
OcUpdateBanByIdData.prototype['description'] = undefined;






export default OcUpdateBanByIdData;

