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
 * The AddHmsPushConfigurationResponsePushConfigurations model module.
 * @module model/AddHmsPushConfigurationResponsePushConfigurations
 * @version 1.0.3
 */
class AddHmsPushConfigurationResponsePushConfigurations {
    /**
     * Constructs a new <code>AddHmsPushConfigurationResponsePushConfigurations</code>.
     * @alias module:model/AddHmsPushConfigurationResponsePushConfigurations
     */
    constructor() { 
        
        AddHmsPushConfigurationResponsePushConfigurations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddHmsPushConfigurationResponsePushConfigurations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddHmsPushConfigurationResponsePushConfigurations} obj Optional instance to populate.
     * @return {module:model/AddHmsPushConfigurationResponsePushConfigurations} The populated <code>AddHmsPushConfigurationResponsePushConfigurations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddHmsPushConfigurationResponsePushConfigurations();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('push_type')) {
                obj['push_type'] = ApiClient.convertToType(data['push_type'], 'String');
            }
            if (data.hasOwnProperty('huawei_app_id')) {
                obj['huawei_app_id'] = ApiClient.convertToType(data['huawei_app_id'], 'String');
            }
            if (data.hasOwnProperty('huawei_app_secret')) {
                obj['huawei_app_secret'] = ApiClient.convertToType(data['huawei_app_secret'], 'String');
            }
            if (data.hasOwnProperty('push_sound')) {
                obj['push_sound'] = ApiClient.convertToType(data['push_sound'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AddHmsPushConfigurationResponsePushConfigurations.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
AddHmsPushConfigurationResponsePushConfigurations.prototype['push_type'] = undefined;

/**
 * @member {String} huawei_app_id
 */
AddHmsPushConfigurationResponsePushConfigurations.prototype['huawei_app_id'] = undefined;

/**
 * @member {String} huawei_app_secret
 */
AddHmsPushConfigurationResponsePushConfigurations.prototype['huawei_app_secret'] = undefined;

/**
 * @member {String} push_sound
 */
AddHmsPushConfigurationResponsePushConfigurations.prototype['push_sound'] = undefined;






export default AddHmsPushConfigurationResponsePushConfigurations;

