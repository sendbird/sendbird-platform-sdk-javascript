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
 * The GcInviteAsMembersData model module.
 * @module model/GcInviteAsMembersData
 * @version 0.0.13
 */
class GcInviteAsMembersData {
    /**
     * Constructs a new <code>GcInviteAsMembersData</code>.
     * @alias module:model/GcInviteAsMembersData
     * @param channelUrl {String} Specifies the URL of the channel to invite into.
     * @param userIds {Array.<String>} Specifies an array of one or more user IDs to invite into the channel. The maximum number of users to be invited at once is 100. The users can be used instead of this property.
     * @param users {Array.<String>} Specifies a list of one or more `JSON` objects which contain the user_id property to invite into the channel. The maximum number of users to be invited at once is 100. The user_ids can be used instead of this property.
     * @param invitationStatus {Object} Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
     * @param hiddenStatus {Object} Specifies one or more key-value pair items which set the channel's hidden status for each user. The key should be a user_id and the value should be their hidden status. Acceptable values are limited to the following:<br />- unhidden (default): the channel is included in when retrieving a list of group channels.<br />- hidden_allow_auto_unhide: the channel automatically gets unhidden when receiving a new message.<br />- hidden_prevent_auto_unhide: the channel keeps hidden though receiving a new message.
     */
    constructor(channelUrl, userIds, users, invitationStatus, hiddenStatus) { 
        
        GcInviteAsMembersData.initialize(this, channelUrl, userIds, users, invitationStatus, hiddenStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userIds, users, invitationStatus, hiddenStatus) { 
        obj['channel_url'] = channelUrl;
        obj['user_ids'] = userIds;
        obj['users'] = users;
        obj['invitation_status'] = invitationStatus;
        obj['hidden_status'] = hiddenStatus;
    }

    /**
     * Constructs a <code>GcInviteAsMembersData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcInviteAsMembersData} obj Optional instance to populate.
     * @return {module:model/GcInviteAsMembersData} The populated <code>GcInviteAsMembersData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcInviteAsMembersData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_ids')) {
                obj['user_ids'] = ApiClient.convertToType(data['user_ids'], ['String']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], ['String']);
            }
            if (data.hasOwnProperty('invitation_status')) {
                obj['invitation_status'] = ApiClient.convertToType(data['invitation_status'], Object);
            }
            if (data.hasOwnProperty('hidden_status')) {
                obj['hidden_status'] = ApiClient.convertToType(data['hidden_status'], Object);
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the channel to invite into.
 * @member {String} channel_url
 */
GcInviteAsMembersData.prototype['channel_url'] = undefined;

/**
 * Specifies an array of one or more user IDs to invite into the channel. The maximum number of users to be invited at once is 100. The users can be used instead of this property.
 * @member {Array.<String>} user_ids
 */
GcInviteAsMembersData.prototype['user_ids'] = undefined;

/**
 * Specifies a list of one or more `JSON` objects which contain the user_id property to invite into the channel. The maximum number of users to be invited at once is 100. The user_ids can be used instead of this property.
 * @member {Array.<String>} users
 */
GcInviteAsMembersData.prototype['users'] = undefined;

/**
 * Specifies one or more key-value pair items which set the invitation status of each user invited to the channel. The key should be a user_id and the value should be their joining status. Acceptable values are joined, invited_by_friend, and invited_by_non_friend. (Default: joined)
 * @member {Object} invitation_status
 */
GcInviteAsMembersData.prototype['invitation_status'] = undefined;

/**
 * Specifies one or more key-value pair items which set the channel's hidden status for each user. The key should be a user_id and the value should be their hidden status. Acceptable values are limited to the following:<br />- unhidden (default): the channel is included in when retrieving a list of group channels.<br />- hidden_allow_auto_unhide: the channel automatically gets unhidden when receiving a new message.<br />- hidden_prevent_auto_unhide: the channel keeps hidden though receiving a new message.
 * @member {Object} hidden_status
 */
GcInviteAsMembersData.prototype['hidden_status'] = undefined;






export default GcInviteAsMembersData;

