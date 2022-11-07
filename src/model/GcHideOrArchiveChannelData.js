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
 * The GcHideOrArchiveChannelData model module.
 * @module model/GcHideOrArchiveChannelData
 * @version 0.0.16
 */
class GcHideOrArchiveChannelData {
    /**
     * Constructs a new <code>GcHideOrArchiveChannelData</code>.
     * @alias module:model/GcHideOrArchiveChannelData
     * @param channelUrl {String} Specifies the URL of the channel to hide or archive.
     * @param userId {String} Specifies the unique ID of the user whose channel will be hidden or archived from the list. This property is required when should_hide_all is set to false, which is the default value. However, when should_hide_all is set to true, this property isn't effective.
     * @param allowAutoUnhide {Boolean} Determines the state and operating behavior of the channel in a channel list. If set to true, the channel is hidden from a user's channel list but it will reappear when there is a new message. If set to false, the channel is hidden from a user's channel list and it will remain hidden unless the value of the property changes to true through [unarchiving](#2-unhide-or-unarchive-a-channel). (Default: true)<br /><br /> When a user who has hidden the channel sends a message in that channel through the [Platform API](/docs/chat/v3/platform-api/guides/messages#2-send-a-message), the `allow_auto_unhide` property is changed to true, making the channel reappear in the channel list.
     * @param shouldHideAll {Boolean} Determines whether to make the specified channel disappear from the channel list of all channel members. When this is set to true, the user_id property isn't effective and doesn't need to be specified in the request. (Default: false)
     * @param hidePreviousMessages {Boolean} When the channel gets appeared back in either the list of the user in the user_id property or the lists of all channel members (should_hide_all = true), determines whether to conceal the messages sent and received before hiding or archiving the channel. (Default: false)<br /><br /> This property is effective only when the value of the [global application settings resource](/docs/chat/v3/platform-api/guides/global-application-settings#-3-resource-representation)'s display_past_message property is false.
     */
    constructor(channelUrl, userId, allowAutoUnhide, shouldHideAll, hidePreviousMessages) { 
        
        GcHideOrArchiveChannelData.initialize(this, channelUrl, userId, allowAutoUnhide, shouldHideAll, hidePreviousMessages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, userId, allowAutoUnhide, shouldHideAll, hidePreviousMessages) { 
        obj['channel_url'] = channelUrl;
        obj['user_id'] = userId;
        obj['allow_auto_unhide'] = allowAutoUnhide;
        obj['should_hide_all'] = shouldHideAll;
        obj['hide_previous_messages'] = hidePreviousMessages;
    }

    /**
     * Constructs a <code>GcHideOrArchiveChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcHideOrArchiveChannelData} obj Optional instance to populate.
     * @return {module:model/GcHideOrArchiveChannelData} The populated <code>GcHideOrArchiveChannelData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcHideOrArchiveChannelData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('allow_auto_unhide')) {
                obj['allow_auto_unhide'] = ApiClient.convertToType(data['allow_auto_unhide'], 'Boolean');
            }
            if (data.hasOwnProperty('should_hide_all')) {
                obj['should_hide_all'] = ApiClient.convertToType(data['should_hide_all'], 'Boolean');
            }
            if (data.hasOwnProperty('hide_previous_messages')) {
                obj['hide_previous_messages'] = ApiClient.convertToType(data['hide_previous_messages'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the channel to hide or archive.
 * @member {String} channel_url
 */
GcHideOrArchiveChannelData.prototype['channel_url'] = undefined;

/**
 * Specifies the unique ID of the user whose channel will be hidden or archived from the list. This property is required when should_hide_all is set to false, which is the default value. However, when should_hide_all is set to true, this property isn't effective.
 * @member {String} user_id
 */
GcHideOrArchiveChannelData.prototype['user_id'] = undefined;

/**
 * Determines the state and operating behavior of the channel in a channel list. If set to true, the channel is hidden from a user's channel list but it will reappear when there is a new message. If set to false, the channel is hidden from a user's channel list and it will remain hidden unless the value of the property changes to true through [unarchiving](#2-unhide-or-unarchive-a-channel). (Default: true)<br /><br /> When a user who has hidden the channel sends a message in that channel through the [Platform API](/docs/chat/v3/platform-api/guides/messages#2-send-a-message), the `allow_auto_unhide` property is changed to true, making the channel reappear in the channel list.
 * @member {Boolean} allow_auto_unhide
 */
GcHideOrArchiveChannelData.prototype['allow_auto_unhide'] = undefined;

/**
 * Determines whether to make the specified channel disappear from the channel list of all channel members. When this is set to true, the user_id property isn't effective and doesn't need to be specified in the request. (Default: false)
 * @member {Boolean} should_hide_all
 */
GcHideOrArchiveChannelData.prototype['should_hide_all'] = undefined;

/**
 * When the channel gets appeared back in either the list of the user in the user_id property or the lists of all channel members (should_hide_all = true), determines whether to conceal the messages sent and received before hiding or archiving the channel. (Default: false)<br /><br /> This property is effective only when the value of the [global application settings resource](/docs/chat/v3/platform-api/guides/global-application-settings#-3-resource-representation)'s display_past_message property is false.
 * @member {Boolean} hide_previous_messages
 */
GcHideOrArchiveChannelData.prototype['hide_previous_messages'] = undefined;






export default GcHideOrArchiveChannelData;

