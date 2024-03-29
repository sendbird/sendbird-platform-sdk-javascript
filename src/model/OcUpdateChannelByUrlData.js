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
 * The OcUpdateChannelByUrlData model module.
 * @module model/OcUpdateChannelByUrlData
 * @version 0.0.16
 */
class OcUpdateChannelByUrlData {
    /**
     * Constructs a new <code>OcUpdateChannelByUrlData</code>.
     * @alias module:model/OcUpdateChannelByUrlData
     * @param channelUrl {String} Specifies the URL of the channel to update.
     * @param name {String} Specifies the channel topic, or the name of the channel. The length is limited to 191 characters.
     * @param coverUrl {String} Specifies the URL of the cover image. The length is limited to 2,048 characters.
     * @param coverFile {File} Uploads the file for the channel cover image.
     * @param customType {String} Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
     * @param data {String} Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
     * @param operatorIds {Array.<String>} Specifies an array of one or more user IDs to register as operators of the channel. The maximum allowed number of operators per channel is 100. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.<br/><br/>  Operators cannot view messages that have been [moderated by](/docs/chat/v3/platform-api/guides/filter-and-moderation) the domain filter or profanity filter. Only the sender will be notified that the message has been blocked.
     * @param operators {Array.<String>} (Deprecated) Specifies the string IDs of the users registered as channel operators. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.
     */
    constructor(channelUrl, name, coverUrl, coverFile, customType, data, operatorIds, operators) { 
        
        OcUpdateChannelByUrlData.initialize(this, channelUrl, name, coverUrl, coverFile, customType, data, operatorIds, operators);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channelUrl, name, coverUrl, coverFile, customType, data, operatorIds, operators) { 
        obj['channel_url'] = channelUrl;
        obj['name'] = name;
        obj['cover_url'] = coverUrl;
        obj['cover_file'] = coverFile;
        obj['custom_type'] = customType;
        obj['data'] = data;
        obj['operator_ids'] = operatorIds;
        obj['operators'] = operators;
    }

    /**
     * Constructs a <code>OcUpdateChannelByUrlData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcUpdateChannelByUrlData} obj Optional instance to populate.
     * @return {module:model/OcUpdateChannelByUrlData} The populated <code>OcUpdateChannelByUrlData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcUpdateChannelByUrlData();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cover_url')) {
                obj['cover_url'] = ApiClient.convertToType(data['cover_url'], 'String');
            }
            if (data.hasOwnProperty('cover_file')) {
                obj['cover_file'] = ApiClient.convertToType(data['cover_file'], File);
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('operator_ids')) {
                obj['operator_ids'] = ApiClient.convertToType(data['operator_ids'], ['String']);
            }
            if (data.hasOwnProperty('operators')) {
                obj['operators'] = ApiClient.convertToType(data['operators'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Specifies the URL of the channel to update.
 * @member {String} channel_url
 */
OcUpdateChannelByUrlData.prototype['channel_url'] = undefined;

/**
 * Specifies the channel topic, or the name of the channel. The length is limited to 191 characters.
 * @member {String} name
 */
OcUpdateChannelByUrlData.prototype['name'] = undefined;

/**
 * Specifies the URL of the cover image. The length is limited to 2,048 characters.
 * @member {String} cover_url
 */
OcUpdateChannelByUrlData.prototype['cover_url'] = undefined;

/**
 * Uploads the file for the channel cover image.
 * @member {File} cover_file
 */
OcUpdateChannelByUrlData.prototype['cover_file'] = undefined;

/**
 * Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */
OcUpdateChannelByUrlData.prototype['custom_type'] = undefined;

/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} data
 */
OcUpdateChannelByUrlData.prototype['data'] = undefined;

/**
 * Specifies an array of one or more user IDs to register as operators of the channel. The maximum allowed number of operators per channel is 100. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.<br/><br/>  Operators cannot view messages that have been [moderated by](/docs/chat/v3/platform-api/guides/filter-and-moderation) the domain filter or profanity filter. Only the sender will be notified that the message has been blocked.
 * @member {Array.<String>} operator_ids
 */
OcUpdateChannelByUrlData.prototype['operator_ids'] = undefined;

/**
 * (Deprecated) Specifies the string IDs of the users registered as channel operators. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.
 * @member {Array.<String>} operators
 */
OcUpdateChannelByUrlData.prototype['operators'] = undefined;






export default OcUpdateChannelByUrlData;

