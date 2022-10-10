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
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdOpenChannel model module.
 * @module model/SendBirdOpenChannel
 * @version 0.0.13
 */
class SendBirdOpenChannel {
    /**
     * Constructs a new <code>SendBirdOpenChannel</code>.
     * @alias module:model/SendBirdOpenChannel
     */
    constructor() { 
        
        SendBirdOpenChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdOpenChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdOpenChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdOpenChannel} The populated <code>SendBirdOpenChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdOpenChannel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('custom_type')) {
                obj['custom_type'] = ApiClient.convertToType(data['custom_type'], 'String');
            }
            if (data.hasOwnProperty('channel_url')) {
                obj['channel_url'] = ApiClient.convertToType(data['channel_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('cover_url')) {
                obj['cover_url'] = ApiClient.convertToType(data['cover_url'], 'String');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = SendBirdUser.constructFromObject(data['creator']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('is_dynamic_partitioned')) {
                obj['is_dynamic_partitioned'] = ApiClient.convertToType(data['is_dynamic_partitioned'], 'Boolean');
            }
            if (data.hasOwnProperty('is_ephemeral')) {
                obj['is_ephemeral'] = ApiClient.convertToType(data['is_ephemeral'], 'Boolean');
            }
            if (data.hasOwnProperty('is_frozen')) {
                obj['is_frozen'] = ApiClient.convertToType(data['is_frozen'], 'Boolean');
            }
            if (data.hasOwnProperty('max_length_message')) {
                obj['max_length_message'] = ApiClient.convertToType(data['max_length_message'], 'Number');
            }
            if (data.hasOwnProperty('operators')) {
                obj['operators'] = ApiClient.convertToType(data['operators'], [SendBirdUser]);
            }
            if (data.hasOwnProperty('participant_count')) {
                obj['participant_count'] = ApiClient.convertToType(data['participant_count'], 'Number');
            }
            if (data.hasOwnProperty('freeze')) {
                obj['freeze'] = ApiClient.convertToType(data['freeze'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SendBirdOpenChannel.prototype['name'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdOpenChannel.prototype['custom_type'] = undefined;

/**
 * @member {String} channel_url
 */
SendBirdOpenChannel.prototype['channel_url'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdOpenChannel.prototype['created_at'] = undefined;

/**
 * @member {String} cover_url
 */
SendBirdOpenChannel.prototype['cover_url'] = undefined;

/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdOpenChannel.prototype['creator'] = undefined;

/**
 * @member {String} data
 */
SendBirdOpenChannel.prototype['data'] = undefined;

/**
 * @member {Boolean} is_dynamic_partitioned
 */
SendBirdOpenChannel.prototype['is_dynamic_partitioned'] = undefined;

/**
 * @member {Boolean} is_ephemeral
 */
SendBirdOpenChannel.prototype['is_ephemeral'] = undefined;

/**
 * @member {Boolean} is_frozen
 */
SendBirdOpenChannel.prototype['is_frozen'] = undefined;

/**
 * @member {Number} max_length_message
 */
SendBirdOpenChannel.prototype['max_length_message'] = undefined;

/**
 * @member {Array.<module:model/SendBirdUser>} operators
 */
SendBirdOpenChannel.prototype['operators'] = undefined;

/**
 * @member {Number} participant_count
 */
SendBirdOpenChannel.prototype['participant_count'] = undefined;

/**
 * @member {Boolean} freeze
 */
SendBirdOpenChannel.prototype['freeze'] = undefined;






export default SendBirdOpenChannel;

