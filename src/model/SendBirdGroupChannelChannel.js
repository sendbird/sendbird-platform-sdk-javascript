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
 * The SendBirdGroupChannelChannel model module.
 * @module model/SendBirdGroupChannelChannel
 * @version 0.0.16
 */
class SendBirdGroupChannelChannel {
    /**
     * Constructs a new <code>SendBirdGroupChannelChannel</code>.
     * @alias module:model/SendBirdGroupChannelChannel
     */
    constructor() { 
        
        SendBirdGroupChannelChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdGroupChannelChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdGroupChannelChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdGroupChannelChannel} The populated <code>SendBirdGroupChannelChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdGroupChannelChannel();

            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('cover_url')) {
                obj['cover_url'] = ApiClient.convertToType(data['cover_url'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('max_length_message')) {
                obj['max_length_message'] = ApiClient.convertToType(data['max_length_message'], 'Number');
            }
            if (data.hasOwnProperty('member_count')) {
                obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} channel_url
 */
SendBirdGroupChannelChannel.prototype['channel_url'] = undefined;

/**
 * @member {String} name
 */
SendBirdGroupChannelChannel.prototype['name'] = undefined;

/**
 * @member {String} cover_url
 */
SendBirdGroupChannelChannel.prototype['cover_url'] = undefined;

/**
 * @member {String} data
 */
SendBirdGroupChannelChannel.prototype['data'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdGroupChannelChannel.prototype['created_at'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdGroupChannelChannel.prototype['custom_type'] = undefined;

/**
 * @member {Number} max_length_message
 */
SendBirdGroupChannelChannel.prototype['max_length_message'] = undefined;

/**
 * @member {Number} member_count
 */
SendBirdGroupChannelChannel.prototype['member_count'] = undefined;






export default SendBirdGroupChannelChannel;

