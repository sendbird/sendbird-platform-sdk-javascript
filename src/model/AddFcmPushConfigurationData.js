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
 * The AddFcmPushConfigurationData model module.
 * @module model/AddFcmPushConfigurationData
 * @version 1.0.7
 */
class AddFcmPushConfigurationData {
    /**
     * Constructs a new <code>AddFcmPushConfigurationData</code>.
     * @alias module:model/AddFcmPushConfigurationData
     * @param apiKey {String} Specifies the FCM server key to register.
     * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
     */
    constructor(apiKey, pushSound) { 
        
        AddFcmPushConfigurationData.initialize(this, apiKey, pushSound);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, pushSound) { 
        obj['api_key'] = apiKey;
        obj['push_sound'] = pushSound;
    }

    /**
     * Constructs a <code>AddFcmPushConfigurationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFcmPushConfigurationData} obj Optional instance to populate.
     * @return {module:model/AddFcmPushConfigurationData} The populated <code>AddFcmPushConfigurationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFcmPushConfigurationData();

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
 * Specifies the FCM server key to register.
 * @member {String} api_key
 */
AddFcmPushConfigurationData.prototype['api_key'] = undefined;

/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
 * @member {String} push_sound
 */
AddFcmPushConfigurationData.prototype['push_sound'] = undefined;






export default AddFcmPushConfigurationData;

