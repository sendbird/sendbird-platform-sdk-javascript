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
 * The AddFcmPushConfigurationResponsePushConfigurationsInner model module.
 * @module model/AddFcmPushConfigurationResponsePushConfigurationsInner
 * @version 0.0.16
 */
class AddFcmPushConfigurationResponsePushConfigurationsInner {
    /**
     * Constructs a new <code>AddFcmPushConfigurationResponsePushConfigurationsInner</code>.
     * @alias module:model/AddFcmPushConfigurationResponsePushConfigurationsInner
     */
    constructor() { 
        
        AddFcmPushConfigurationResponsePushConfigurationsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddFcmPushConfigurationResponsePushConfigurationsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFcmPushConfigurationResponsePushConfigurationsInner} obj Optional instance to populate.
     * @return {module:model/AddFcmPushConfigurationResponsePushConfigurationsInner} The populated <code>AddFcmPushConfigurationResponsePushConfigurationsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFcmPushConfigurationResponsePushConfigurationsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('push_type')) {
                obj['push_type'] = ApiClient.convertToType(data['push_type'], 'String');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
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
AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['id'] = undefined;

/**
 * @member {String} push_type
 */
AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['push_type'] = undefined;

/**
 * @member {String} api_key
 */
AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['api_key'] = undefined;

/**
 * @member {String} push_sound
 */
AddFcmPushConfigurationResponsePushConfigurationsInner.prototype['push_sound'] = undefined;






export default AddFcmPushConfigurationResponsePushConfigurationsInner;

