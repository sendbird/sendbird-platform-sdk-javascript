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
 * The SendBirdOpenChannelParams model module.
 * @module model/SendBirdOpenChannelParams
 * @version 1.0.0
 */
class SendBirdOpenChannelParams {
    /**
     * Constructs a new <code>SendBirdOpenChannelParams</code>.
     * @alias module:model/SendBirdOpenChannelParams
     */
    constructor() { 
        
        SendBirdOpenChannelParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendBirdOpenChannelParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendBirdOpenChannelParams} obj Optional instance to populate.
     * @return {module:model/SendBirdOpenChannelParams} The populated <code>SendBirdOpenChannelParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendBirdOpenChannelParams();

            if (data.hasOwnProperty('channelUrl')) {
                obj['channelUrl'] = ApiClient.convertToType(data['channelUrl'], 'String');
            }
            if (data.hasOwnProperty('coverUrlOrImage')) {
                obj['coverUrlOrImage'] = ApiClient.convertToType(data['coverUrlOrImage'], 'String');
            }
            if (data.hasOwnProperty('customType')) {
                obj['customType'] = ApiClient.convertToType(data['customType'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} channelUrl
 */
SendBirdOpenChannelParams.prototype['channelUrl'] = undefined;

/**
 * @member {String} coverUrlOrImage
 */
SendBirdOpenChannelParams.prototype['coverUrlOrImage'] = undefined;

/**
 * @member {String} customType
 */
SendBirdOpenChannelParams.prototype['customType'] = undefined;

/**
 * @member {String} data
 */
SendBirdOpenChannelParams.prototype['data'] = undefined;

/**
 * @member {String} name
 */
SendBirdOpenChannelParams.prototype['name'] = undefined;






export default SendBirdOpenChannelParams;

