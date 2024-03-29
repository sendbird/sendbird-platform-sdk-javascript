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
 * The ConfigureAutoEventDataAutoEventMessage model module.
 * @module model/ConfigureAutoEventDataAutoEventMessage
 * @version 0.0.16
 */
class ConfigureAutoEventDataAutoEventMessage {
    /**
     * Constructs a new <code>ConfigureAutoEventDataAutoEventMessage</code>.
     * @alias module:model/ConfigureAutoEventDataAutoEventMessage
     */
    constructor() { 
        
        ConfigureAutoEventDataAutoEventMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigureAutoEventDataAutoEventMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigureAutoEventDataAutoEventMessage} obj Optional instance to populate.
     * @return {module:model/ConfigureAutoEventDataAutoEventMessage} The populated <code>ConfigureAutoEventDataAutoEventMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigureAutoEventDataAutoEventMessage();

            if (data.hasOwnProperty('user_leave')) {
                obj['user_leave'] = ApiClient.convertToType(data['user_leave'], Object);
            }
            if (data.hasOwnProperty('user_join')) {
                obj['user_join'] = ApiClient.convertToType(data['user_join'], Object);
            }
            if (data.hasOwnProperty('channel_create')) {
                obj['channel_create'] = ApiClient.convertToType(data['channel_create'], Object);
            }
            if (data.hasOwnProperty('channel_change')) {
                obj['channel_change'] = ApiClient.convertToType(data['channel_change'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} user_leave
 */
ConfigureAutoEventDataAutoEventMessage.prototype['user_leave'] = undefined;

/**
 * @member {Object} user_join
 */
ConfigureAutoEventDataAutoEventMessage.prototype['user_join'] = undefined;

/**
 * @member {Object} channel_create
 */
ConfigureAutoEventDataAutoEventMessage.prototype['channel_create'] = undefined;

/**
 * @member {Object} channel_change
 */
ConfigureAutoEventDataAutoEventMessage.prototype['channel_change'] = undefined;






export default ConfigureAutoEventDataAutoEventMessage;

