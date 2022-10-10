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
 * The AddHmsPushConfigurationData model module.
 * @module model/AddHmsPushConfigurationData
 * @version 0.0.14
 */
class AddHmsPushConfigurationData {
    /**
     * Constructs a new <code>AddHmsPushConfigurationData</code>.
     * @alias module:model/AddHmsPushConfigurationData
     * @param huaweiAppId {String} Specifies the unique ID of application registered to the HMS server.
     * @param huaweiAppSecret {String} Specifies the secret key allocated to the application.
     * @param pushSound {String} Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
     */
    constructor(huaweiAppId, huaweiAppSecret, pushSound) { 
        
        AddHmsPushConfigurationData.initialize(this, huaweiAppId, huaweiAppSecret, pushSound);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, huaweiAppId, huaweiAppSecret, pushSound) { 
        obj['huawei_app_id'] = huaweiAppId;
        obj['huawei_app_secret'] = huaweiAppSecret;
        obj['push_sound'] = pushSound;
    }

    /**
     * Constructs a <code>AddHmsPushConfigurationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddHmsPushConfigurationData} obj Optional instance to populate.
     * @return {module:model/AddHmsPushConfigurationData} The populated <code>AddHmsPushConfigurationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddHmsPushConfigurationData();

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
 * Specifies the unique ID of application registered to the HMS server.
 * @member {String} huawei_app_id
 */
AddHmsPushConfigurationData.prototype['huawei_app_id'] = undefined;

/**
 * Specifies the secret key allocated to the application.
 * @member {String} huawei_app_secret
 */
AddHmsPushConfigurationData.prototype['huawei_app_secret'] = undefined;

/**
 * Specifies the name of a sound file to be played when a push notification is delivered to your client app. The file should be located in the `/res/raw` folder.
 * @member {String} push_sound
 */
AddHmsPushConfigurationData.prototype['push_sound'] = undefined;






export default AddHmsPushConfigurationData;

