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
 * The BanFromChannelsWithCustomChannelTypesData model module.
 * @module model/BanFromChannelsWithCustomChannelTypesData
 * @version 1.0.1
 */
class BanFromChannelsWithCustomChannelTypesData {
    /**
     * Constructs a new <code>BanFromChannelsWithCustomChannelTypesData</code>.
     * @alias module:model/BanFromChannelsWithCustomChannelTypesData
     * @param channelCustomTypes {Array.<String>} Specifies an array of one or more custom channel types, in order to ban the user from channels with the channel types. The user is permanently banned unless unbanned (10 years, technically).
     */
    constructor(channelCustomTypes) { 
        
        BanFromChannelsWithCustomChannelTypesData.initialize(this, channelCustomTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelCustomTypes) { 
        obj['channel_custom_types'] = channelCustomTypes;
    }

    /**
     * Constructs a <code>BanFromChannelsWithCustomChannelTypesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BanFromChannelsWithCustomChannelTypesData} obj Optional instance to populate.
     * @return {module:model/BanFromChannelsWithCustomChannelTypesData} The populated <code>BanFromChannelsWithCustomChannelTypesData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BanFromChannelsWithCustomChannelTypesData();

            if (data.hasOwnProperty('channel_custom_types')) {
                obj['channel_custom_types'] = ApiClient.convertToType(data['channel_custom_types'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies an array of one or more custom channel types, in order to ban the user from channels with the channel types. The user is permanently banned unless unbanned (10 years, technically).
 * @member {Array.<String>} channel_custom_types
 */
BanFromChannelsWithCustomChannelTypesData.prototype['channel_custom_types'] = undefined;






export default BanFromChannelsWithCustomChannelTypesData;

