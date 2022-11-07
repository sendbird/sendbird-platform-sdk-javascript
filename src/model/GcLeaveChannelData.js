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
 * The GcLeaveChannelData model module.
 * @module model/GcLeaveChannelData
 * @version 0.0.16
 */
class GcLeaveChannelData {
    /**
     * Constructs a new <code>GcLeaveChannelData</code>.
     * @alias module:model/GcLeaveChannelData
     * @param channelUrl {String} Specifies the URL of the channel to leave.
     * @param userIds {Array.<String>} Specifies an array of one or more IDs of the users to leave the channel.
     * @param shouldLeaveAll {Boolean} Determines whether to make all members leave the channel. (Default: false)
     */
    constructor(channelUrl, userIds, shouldLeaveAll) { 
        
        GcLeaveChannelData.initialize(this, channelUrl, userIds, shouldLeaveAll);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userIds, shouldLeaveAll) { 
        obj['channel_url'] = channelUrl;
        obj['user_ids'] = userIds;
        obj['should_leave_all'] = shouldLeaveAll;
    }

    /**
     * Constructs a <code>GcLeaveChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcLeaveChannelData} obj Optional instance to populate.
     * @return {module:model/GcLeaveChannelData} The populated <code>GcLeaveChannelData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcLeaveChannelData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['String']);
            }
            if (data.hasOwnProperty('should_leave_all')) {
                obj['should_leave_all'] = ApiClient.convertToType(data['should_leave_all'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the channel to leave.
 * @member {String} channel_url
 */
GcLeaveChannelData.prototype['channel_url'] = undefined;

/**
 * Specifies an array of one or more IDs of the users to leave the channel.
 * @member {Array.<String>} user_ids
 */
GcLeaveChannelData.prototype['user_ids'] = undefined;

/**
 * Determines whether to make all members leave the channel. (Default: false)
 * @member {Boolean} should_leave_all
 */
GcLeaveChannelData.prototype['should_leave_all'] = undefined;






export default GcLeaveChannelData;

