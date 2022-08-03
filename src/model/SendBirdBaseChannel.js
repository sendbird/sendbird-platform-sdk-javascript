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
import SendBirdUser from './SendBirdUser';

/**
 * The SendBirdBaseChannel model module.
 * @module model/SendBirdBaseChannel
 * @version 1.0.7
 */
class SendBirdBaseChannel {
    /**
     * Constructs a new <code>SendBirdBaseChannel</code>.
     * @alias module:model/SendBirdBaseChannel
     */
    constructor() { 
        
        SendBirdBaseChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdBaseChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdBaseChannel} obj Optional instance to populate.
     * @return {module:model/SendBirdBaseChannel} The populated <code>SendBirdBaseChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdBaseChannel();

            if (data.hasOwnProperty('cover_url')) {
                obj['cover_url'] = ApiClient.convertToType(data['cover_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('creator')) {
                obj['creator'] = SendBirdUser.constructFromObject(data['creator']);
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
            if (data.hasOwnProperty('is_frozen')) {
                obj['is_frozen'] = ApiClient.convertToType(data['is_frozen'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cover_url
 */
SendBirdBaseChannel.prototype['cover_url'] = undefined;

/**
 * @member {Number} created_at
 */
SendBirdBaseChannel.prototype['created_at'] = undefined;

/**
 * @member {module:model/SendBirdUser} creator
 */
SendBirdBaseChannel.prototype['creator'] = undefined;

/**
 * @member {String} custom_type
 */
SendBirdBaseChannel.prototype['custom_type'] = undefined;

/**
 * @member {String} data
 */
SendBirdBaseChannel.prototype['data'] = undefined;

/**
 * @member {Boolean} is_ephemeral
 */
SendBirdBaseChannel.prototype['is_ephemeral'] = undefined;

/**
 * @member {Boolean} is_frozen
 */
SendBirdBaseChannel.prototype['is_frozen'] = undefined;

/**
 * @member {String} name
 */
SendBirdBaseChannel.prototype['name'] = undefined;

/**
 * @member {String} url
 */
SendBirdBaseChannel.prototype['url'] = undefined;






export default SendBirdBaseChannel;

