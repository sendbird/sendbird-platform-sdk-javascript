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
 * The OcCreateChannelData model module.
 * @module model/OcCreateChannelData
 * @version 0.0.14
 */
class OcCreateChannelData {
    /**
     * Constructs a new <code>OcCreateChannelData</code>.
     * @alias module:model/OcCreateChannelData
     */
    constructor() { 
        
        OcCreateChannelData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OcCreateChannelData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OcCreateChannelData} obj Optional instance to populate.
     * @return {module:model/OcCreateChannelData} The populated <code>OcCreateChannelData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OcCreateChannelData();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
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
            if (data.hasOwnProperty('is_ephemeral')) {
                obj['is_ephemeral'] = ApiClient.convertToType(data['is_ephemeral'], 'Boolean');
            }
            if (data.hasOwnProperty('[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)')) {
                obj['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'] = ApiClient.convertToType(data['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'], 'Boolean');
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
 * Specifies the channel topic, or the name of the channel. The length is limited to 191 characters. (Default: open channel)
 * @member {String} name
 */
OcCreateChannelData.prototype['name'] = undefined;

/**
 * Specifies the URL of the channel. Only numbers, characters, and underscores are allowed. The length is 4 to 100 characters, inclusive. If not specified, a URL is automatically generated.
 * @member {String} channel_url
 */
OcCreateChannelData.prototype['channel_url'] = undefined;

/**
 * Specifies the URL of the cover image. The length is limited to 2,048 characters.
 * @member {String} cover_url
 */
OcCreateChannelData.prototype['cover_url'] = undefined;

/**
 * Uploads a file for the channel cover image.
 * @member {File} cover_file
 */
OcCreateChannelData.prototype['cover_file'] = undefined;

/**
 * Specifies the custom channel type which is used for channel grouping. The length is limited to 128 characters.<br /><br /> Custom types are also used within Sendbird's [Advanced analytics](/docs/chat/v3/platform-api/guides/advanced-analytics) to segment metrics, which enables the sub-classification of data views.
 * @member {String} custom_type
 */
OcCreateChannelData.prototype['custom_type'] = undefined;

/**
 * Specifies additional channel information such as a long description of the channel or `JSON` formatted string.
 * @member {String} data
 */
OcCreateChannelData.prototype['data'] = undefined;

/**
 * Determines whether to preserve the messages in the channel for the purpose of retrieving chat history or not. It set to true, the messages in the channel are not saved in the Sendbird database and the chat history can't be retrieved. (Default: false)
 * @member {Boolean} is_ephemeral
 */
OcCreateChannelData.prototype['is_ephemeral'] = undefined;

/**
 * Determines whether the channel is an open channel with dynamic partitioning or not. If the value of this property is true, the open channel can create several subchannels in order to accommodate a massive number of usres. (Default: false)<br/><br/>  For the new Sendbird applications created after December 15, 2020, this property will be automatically set to true.
 * @member {Boolean} [is_dynamic_partitioned](#2-how-dynamic-partitioning-works)
 */
OcCreateChannelData.prototype['[is_dynamic_partitioned](#2-how-dynamic-partitioning-works)'] = undefined;

/**
 * Specifies an array of one or more user IDs to register as operators of the channel. The maximum allowed number of operators per channel is 100. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.<br/><br/>  Operators cannot view messages that have been [moderated by](/docs/chat/v3/platform-api/guides/filter-and-moderation) the domain filter or profanity filter. Only the sender will be notified that the message has been blocked.
 * @member {Array.<String>} operator_ids
 */
OcCreateChannelData.prototype['operator_ids'] = undefined;

/**
 * (Deprecated) Specifies the string IDs of the users registered as channel operators. Operators can delete any messages in the channel, and can also receive all messages that have been throttled.
 * @member {Array.<String>} operators
 */
OcCreateChannelData.prototype['operators'] = undefined;






export default OcCreateChannelData;

