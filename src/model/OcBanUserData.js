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
 * The OcBanUserData model module.
 * @module model/OcBanUserData
 * @version 0.0.14
 */
class OcBanUserData {
    /**
     * Constructs a new <code>OcBanUserData</code>.
     * @alias module:model/OcBanUserData
     * @param channelUrl {String} Specifies the URL of the channel where to ban the specified user.
     * @param userId {String} Specifies the ID of the user to ban.
     * @param agentId {String} Specifies the ID of the operator (agent) who bans the user.
     * @param seconds {Number} Specifies the ban duration. If set to -1, the user will be banned permanently (10 years, technically). (Default: -1)
     * @param description {String} Specifies a reason for the banning. The length is limited to 250 characters.
     */
    constructor(channelUrl, userId, agentId, seconds, description) { 
        
        OcBanUserData.initialize(this, channelUrl, userId, agentId, seconds, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userId, agentId, seconds, description) { 
        obj['channel_url'] = channelUrl;
        obj['user_id'] = userId;
        obj['agent_id'] = agentId;
        obj['seconds'] = seconds;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>OcBanUserData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcBanUserData} obj Optional instance to populate.
     * @return {module:model/OcBanUserData} The populated <code>OcBanUserData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcBanUserData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('agent_id')) {
                obj['agent_id'] = ApiClient.convertToType(data['agent_id'], 'String');
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
 * Specifies the URL of the channel where to ban the specified user.
 * @member {String} channel_url
 */
OcBanUserData.prototype['channel_url'] = undefined;

/**
 * Specifies the ID of the user to ban.
 * @member {String} user_id
 */
OcBanUserData.prototype['user_id'] = undefined;

/**
 * Specifies the ID of the operator (agent) who bans the user.
 * @member {String} agent_id
 */
OcBanUserData.prototype['agent_id'] = undefined;

/**
 * Specifies the ban duration. If set to -1, the user will be banned permanently (10 years, technically). (Default: -1)
 * @member {Number} seconds
 */
OcBanUserData.prototype['seconds'] = undefined;

/**
 * Specifies a reason for the banning. The length is limited to 250 characters.
 * @member {String} description
 */
OcBanUserData.prototype['description'] = undefined;






export default OcBanUserData;

