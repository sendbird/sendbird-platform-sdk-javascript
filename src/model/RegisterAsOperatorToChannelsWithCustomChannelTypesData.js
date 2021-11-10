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
 * The RegisterAsOperatorToChannelsWithCustomChannelTypesData model module.
 * @module model/RegisterAsOperatorToChannelsWithCustomChannelTypesData
 * @version 1.0.0
 */
class RegisterAsOperatorToChannelsWithCustomChannelTypesData {
    /**
     * Constructs a new <code>RegisterAsOperatorToChannelsWithCustomChannelTypesData</code>.
     * @alias module:model/RegisterAsOperatorToChannelsWithCustomChannelTypesData
     * @param channelCustomTypes {Array.<String>} Specifies an array of one or more custom channel types, in order to register the user as an operator to channels with the channel types.
     */
    constructor(channelCustomTypes) { 
        
        RegisterAsOperatorToChannelsWithCustomChannelTypesData.initialize(this, channelCustomTypes);
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
     * Constructs a <code>RegisterAsOperatorToChannelsWithCustomChannelTypesData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterAsOperatorToChannelsWithCustomChannelTypesData} obj Optional instance to populate.
     * @return {module:model/RegisterAsOperatorToChannelsWithCustomChannelTypesData} The populated <code>RegisterAsOperatorToChannelsWithCustomChannelTypesData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterAsOperatorToChannelsWithCustomChannelTypesData();

            if (data.hasOwnProperty('channel_custom_types')) {
                obj['channel_custom_types'] = ApiClient.convertToType(data['channel_custom_types'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies an array of one or more custom channel types, in order to register the user as an operator to channels with the channel types.
 * @member {Array.<String>} channel_custom_types
 */
RegisterAsOperatorToChannelsWithCustomChannelTypesData.prototype['channel_custom_types'] = undefined;






export default RegisterAsOperatorToChannelsWithCustomChannelTypesData;

