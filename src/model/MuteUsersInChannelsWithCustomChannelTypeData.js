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
 * The MuteUsersInChannelsWithCustomChannelTypeData model module.
 * @module model/MuteUsersInChannelsWithCustomChannelTypeData
 * @version 0.0.14
 */
class MuteUsersInChannelsWithCustomChannelTypeData {
    /**
     * Constructs a new <code>MuteUsersInChannelsWithCustomChannelTypeData</code>.
     * @alias module:model/MuteUsersInChannelsWithCustomChannelTypeData
     * @param userIds {Array.<String>} 
     */
    constructor(userIds) { 
        
        MuteUsersInChannelsWithCustomChannelTypeData.initialize(this, userIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userIds) { 
        obj['user_ids'] = userIds;
    }

    /**
     * Constructs a <code>MuteUsersInChannelsWithCustomChannelTypeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MuteUsersInChannelsWithCustomChannelTypeData} obj Optional instance to populate.
     * @return {module:model/MuteUsersInChannelsWithCustomChannelTypeData} The populated <code>MuteUsersInChannelsWithCustomChannelTypeData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MuteUsersInChannelsWithCustomChannelTypeData();

            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['String']);
            }
            if (data.hasOwnProperty('seconds')) {
                obj['seconds'] = ApiClient.convertToType(data['seconds'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('on_demand_upsert')) {
                obj['on_demand_upsert'] = ApiClient.convertToType(data['on_demand_upsert'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} user_ids
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['user_ids'] = undefined;

/**
 * @member {Number} seconds
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['seconds'] = undefined;

/**
 * @member {String} description
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['description'] = undefined;

/**
 * @member {Boolean} on_demand_upsert
 */
MuteUsersInChannelsWithCustomChannelTypeData.prototype['on_demand_upsert'] = undefined;






export default MuteUsersInChannelsWithCustomChannelTypeData;

